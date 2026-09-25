#!/usr/bin/env python3
"""Primary-session helpers. Workers never run this.

  scan [--delete] [dirs...]    complete/partial outputs (resume); --delete removes partials in outputs/ archive/ tournament/
  assign                       write config/assignments.json from state/run_seed (after Gate B)
  split SURVIVORS FILE...      parse idea cards from FILEs -> archive/ideas/<id>.md + archive/blind/<id>.md
  deck ROUND [--allow=ID,..] ID...  build tournament/r<ROUND>/blind_deck.md; refuses cards that leak lineage
  leakcheck ID...              exit 1 if any blind card names a seed/persona/territory/track/round (run before S8)
  verify-tournament ROUND RET  compare tournament master's JSON files with the workflow return RET; fix on mismatch
  jsonblock FILE               print the last ```json block of FILE
  args STAGE [ROUND]           print the Workflow args JSON for STAGE (s1 [h1] s3 [pilot] s4 s5 s6 ROUND s7 s8 s9)
  scorecards [--drops=F.json]  compile report/scorecards.json (ranked top 30 + seed lineage) from S5-S8 outputs (before Gate D)
  selftest                     run the built-in checks
"""
import json, os, random, re, sys, glob, statistics

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARK = '<!-- COMPLETE -->'
DELETABLE = ('outputs/', 'archive/', 'tournament/')
SCAN_DIRS = ['briefs', 'outputs', 'archive', 'tournament', 'gates', 'config', 'report']
CAPS = {'One-liner': 20, 'Buyer and niche': 25, 'Pain and evidence': 40, 'How it works': 50,
        'Why now': 25, 'Demo moment': 20, 'Business model': 15}


def p(*parts):
    return os.path.join(ROOT, *parts)


def read(path):
    with open(p(path) if not os.path.isabs(path) else path) as f:
        return f.read()


def is_complete(path):
    try:
        text = read(path)
    except OSError:
        return False
    if path.endswith('.json'):
        try:
            return json.loads(text).get('complete') is True
        except (ValueError, AttributeError):
            return False
    return text.rstrip().endswith(MARK)


def scan(dirs=None, delete=False):
    done, partial, deleted = [], [], []
    for d in dirs or SCAN_DIRS:
        for dirpath, _, files in os.walk(p(d)):
            for fn in sorted(files):
                if not fn.endswith(('.md', '.json')):
                    continue
                rel = os.path.relpath(os.path.join(dirpath, fn), ROOT)
                if is_complete(rel):
                    done.append(rel)
                else:
                    partial.append(rel)
                    if delete and rel.startswith(DELETABLE):
                        os.remove(p(rel)); deleted.append(rel)
    return {'done': sorted(done), 'partial': sorted(partial), 'deleted': deleted}


def jsonblock(path):
    blocks = re.findall(r'```json\s*\n(.*?)\n```', read(path), re.S)
    if not blocks:
        raise ValueError(f'no ```json block in {path}')
    return json.loads(blocks[-1])


def run_seed():
    return int(read('state/run_seed').strip())


# ---------- assignments (after Gate B) ----------

TERRITORIES = [f'T{i}' for i in range(1, 10)]


def ideator_ids():
    return [f's3-ideator-{track}-{t}-0{k}' for t in TERRITORIES for track in ('novel', 'balanced') for k in (1, 2)]


def assign(seed, personas, tech_cards, constraints):
    rng = random.Random(seed)
    ids = ideator_ids()
    pers = personas[:]; rng.shuffle(pers)
    assert len(pers) >= len(ids), 'need one persona per ideator'
    cards = tech_cards[:]; rng.shuffle(cards)
    deck, out = [], {}
    for i, iid in enumerate(ids):
        t = iid.split('-')[3]
        if i % 4 == 0:  # the 4 ideators of a territory get 4 distinct partner territories, never their own
            partners = rng.sample([x for x in TERRITORIES if x != t], 4)
        pair = []
        while len(pair) < 2:  # deal constraints from a reshuffled deck so the whole deck gets used
            if not deck:
                deck = constraints[:]; rng.shuffle(deck)
            c = deck.pop()
            if c not in pair:
                pair.append(c)
        out[iid] = {'territory': t, 'track': iid.split('-')[2], 'persona': pers[i],
                    'cross_territory': partners[i % 4], 'tech_card': cards[i % len(cards)] if cards else None,
                    'constraints': sorted(pair)}
    return out


def cmd_assign():
    personas = [x['id'] for x in json.loads(read('config/personas.json'))['personas']]
    tech = sorted(set(re.findall(r'\bTC-\d+\b', read('config/tech_cards.md'))), key=lambda s: int(s[3:]))
    cons = sorted(set(re.findall(r'\bC\d\d\b', read('config/constraint_deck.md'))))
    assert len(tech) >= 20, f'tech_cards.md has {len(tech)} cards; S1 must fill it first'
    doc = {'run_seed': run_seed(), 'territories': TERRITORIES, 'ideators': assign(run_seed(), personas, tech, cons), 'complete': True}
    with open(p('config/assignments.json'), 'w') as f:
        json.dump(doc, f, indent=1)
    print(f"wrote config/assignments.json: {len(doc['ideators'])} ideators, {len(tech)} tech cards, {len(cons)} constraints")


# ---------- idea cards ----------

CARD_START = re.compile(r'^---\s*\nid:', re.M)


def parse_cards(text):
    """Every card starts with a '---' line followed by 'id:'. The body runs until the next card,
    a '##' heading (notes between cards), or the completion marker."""
    cards = []
    starts = [m.start() for m in CARD_START.finditer(text)]
    for n, s in enumerate(starts):
        chunk = text[s:starts[n + 1] if n + 1 < len(starts) else len(text)]
        m = re.match(r'---\s*\n(.*?)\n---\s*\n(.*)', chunk, re.S)
        if not m:
            continue
        fm, body = m.group(1), m.group(2)
        body = re.split(r'^(?:#{2,} |<!-- COMPLETE -->)', body, maxsplit=1, flags=re.M)[0].strip()
        meta = {}
        for line in fm.splitlines():
            k, _, v = line.partition(':')
            if k.strip() and not line.startswith(' '):
                meta[k.strip()] = v.strip()
        cell = meta.get('cell', '')
        meta['cell'] = {k: (re.search(k + r':\s*([^,}]+)', cell) or [None, ''])[1].strip() for k in ('buyer', 'capability', 'track')}
        cards.append({'meta': meta, 'body': body})
    return cards


def parse_list(v):
    return [x.strip(' \'"') for x in v.strip().strip('[]').split(',') if x.strip(' \'"')]


def blind(body):
    return re.sub(r'\s*\(src:[^)]*\)', '', body).strip()


def cap_violations(body):
    out = []
    for line in body.splitlines():
        for field, cap in CAPS.items():
            if line.startswith(field):
                words = len(blind(line.split(':', 1)[1]).split())
                if words > cap:
                    out.append(f'{field} {words}>{cap}')
    name = re.search(r'^# (.+)$', body, re.M)
    if name and len(name.group(1).split()) > 6:
        out.append(f'Name {len(name.group(1).split())}>6')
    return out


LEAKS = re.compile(r'\b(seeds?|personas?|territor(?:y|ies)|T[1-9]|round [123]|novel track|balanced track)\b', re.I)  # whole words: 'personal', 'seeded' are fine


def render_card(meta, body):
    c = meta['cell']
    lines = ['---'] + [f'{k}: {meta[k]}' for k in ('id', 'track', 'lineage', 'territory') if k in meta]
    lines.append(f"cell: {{ buyer: {c['buyer']}, capability: {c['capability']}, track: {c['track']} }}")
    lines += [f'{k}: {v}' for k, v in meta.items() if k not in ('id', 'track', 'lineage', 'territory', 'cell')]
    return '\n'.join(lines + ['---', '', body, MARK, ''])


def split(survivors_file, files, write=True):
    """Write every card in FILES to archive/ideas and archive/blind, applying the lead's cells/merges."""
    lead = jsonblock(survivors_file) if survivors_file else {}
    cells, merges = lead.get('cells', {}), lead.get('merges', {})
    written, warnings = [], []
    for f in files:
        for card in parse_cards(read(f)):
            meta, body = card['meta'], card['body']
            cid = meta.get('id', '')
            if not re.fullmatch(r'I-\d{4}', cid):
                warnings.append(f'{f}: skipped card with non-final id {cid!r}'); continue
            if cid in cells:
                b, cap, t = (cells[cid].split('|') + ['', '', ''])[:3]
                meta['cell'] = {'buyer': b, 'capability': cap, 'track': t}
            if cid in merges:
                meta['merged'] = '[' + ', '.join(sorted(set(parse_list(meta.get('merged', ''))) | set(merges[cid]))) + ']'
            v = cap_violations(body)
            if v:
                warnings.append(f'{cid}: caps {", ".join(v)}')
            leak = LEAKS.findall(blind(body))
            if leak:
                warnings.append(f'{cid}: blind body mentions {sorted(set(x.lower() for x in leak))}')
            if write:
                os.makedirs(p('archive/ideas'), exist_ok=True); os.makedirs(p('archive/blind'), exist_ok=True)
                with open(p('archive/ideas', cid + '.md'), 'w') as fh:
                    fh.write(render_card(meta, body))
                with open(p('archive/blind', cid + '.md'), 'w') as fh:
                    fh.write(blind(body) + '\n' + MARK + '\n')
            written.append(cid)
    dup = sorted({x for x in written if written.count(x) > 1})
    if dup:
        warnings.append(f'DUPLICATE ids across files: {dup}')
    return written, warnings


def card_meta(cid):
    return parse_cards(read(f'archive/ideas/{cid}.md'))[0]['meta']


def leaks(ids):
    """ids whose blind card names a seed, persona, territory, track or round."""
    bad = {}
    for cid in ids:
        hits = LEAKS.findall(read(f'archive/blind/{cid}.md'))
        if hits:
            bad[cid] = sorted({h.lower() for h in hits})
    return bad


def deck(rnd, ids, allow=()):
    bad = {k: v for k, v in leaks(ids).items() if k not in allow}
    if bad:
        raise SystemExit(f'BLIND LEAK, deck not built. Fix these cards (or --allow after reading them): {bad}')
    caps = {cid: v for cid in ids if (v := cap_violations(read(f'archive/blind/{cid}.md')))}
    if caps:
        print(f'WARNING {len(caps)} cards over word caps: {caps}', file=sys.stderr)
    out = [f'# Blind deck, round {rnd}', '', 'Anonymous idea cards. Ids carry no meaning.', '']
    for cid in sorted(ids):
        body = read(f'archive/blind/{cid}.md').replace(MARK, '').strip()
        out += [f'## Card {cid}', '', re.sub(r'^# ', '### ', body, flags=re.M), '']
    path = f'tournament/r{rnd}/blind_deck.md'
    os.makedirs(p(f'tournament/r{rnd}'), exist_ok=True)
    with open(p(path), 'w') as f:
        f.write('\n'.join(out + [MARK, '']))
    return path


def verify_tournament(rnd, ret):
    """Compare the tournament master's pairings.json/elo.json with the workflow's returned objects;
    overwrite any file that differs. Also saves the return as the ground-truth record."""
    fixed = []
    os.makedirs(p(f'tournament/r{rnd}'), exist_ok=True)
    for name, key in (('pairings.json', 'pairings'), ('elo.json', 'elo')):
        path = f'tournament/r{rnd}/{name}'
        try:
            got = json.loads(read(path))
        except (OSError, ValueError):
            got = None
        if got != ret[key]:
            with open(p(path), 'w') as f:
                json.dump(ret[key], f, indent=1)
            fixed.append(name)
    with open(p(f'tournament/r{rnd}/script-return.json'), 'w') as f:
        json.dump(dict(ret, complete=True), f, indent=1)
    return fixed


# ---------- per-stage Workflow args ----------

def done_in(*dirs):
    return scan(list(dirs))['done']


MOVES = ('improve', 'pivot', 'break down')


def seeds():
    """PROMPT §10: every inputs/seeds/*.md except _TEMPLATE.md is a seed; never drop one silently."""
    out = []
    for f in sorted(glob.glob(p('inputs/seeds/*.md'))):
        if os.path.basename(f) == '_TEMPLATE.md':
            continue
        sid = os.path.basename(f)[:-3]
        m = re.search(r'Allowed moves:\s*(.*)', read(f), re.I)
        line = re.sub(r'break\s*-?\s*down', 'break down', (m.group(1) if m else '').lower())
        moves = [mv for mv in MOVES if mv in line]
        if not moves:
            print(f'WARNING {sid}: no recognised Allowed moves in {line!r}; using all three', file=sys.stderr)
            moves = list(MOVES)
        out.append({'id': sid, 'moves': moves})
    print(f'seeds: {[x["id"] for x in out]}', file=sys.stderr)
    return out


def survivors_s5():
    ids = jsonblock('outputs/s5-reality/survivors.md')['survivors']
    return [{'id': i, 'track': card_meta(i)['track']} for i in ids]


def ideas_for_round(rnd):
    ids = [x['id'] for x in survivors_s5()]
    elo = {}
    if rnd == 2:
        ids += jsonblock('archive/survivors-s7.md')['survivors'] if os.path.exists(p('archive/survivors-s7.md')) else []
        elo = {r['id']: r['elo'] for r in json.loads(read('tournament/r1/elo.json'))['ideas']}
    out = []
    for i in sorted(set(ids)):
        m = card_meta(i)
        c = m['cell']
        out.append({'id': i, 'track': m['track'], 'cell': f"{c['buyer']}|{c['capability']}|{c['track']}", 'elo': elo.get(i, 1200)})
    return out


def prior_json(pattern):
    """task_id -> json block, for complete files matching pattern (resume data for skipped tasks)."""
    out = {}
    for f in sorted(glob.glob(p(pattern))):
        rel = os.path.relpath(f, ROOT)
        if is_complete(rel):
            try:
                out[os.path.basename(f)[:-3]] = jsonblock(rel)
            except ValueError:
                print(f'WARNING {rel}: complete but no json block; its task will rerun', file=sys.stderr)
    return out


def finalists():
    """Top N per track by round-2 Elo plus the best idea per map cell (~40), plus every seed original
    and each seed's best improved card so the seed report has scorecards."""
    rows = json.loads(read('tournament/r2/elo.json'))['ideas']
    by = sorted(rows, key=lambda r: (-r['elo'], r['id']))
    best_cell = {}
    for r in by:
        best_cell.setdefault(r['cell'], r['id'])
    for n in range(20, 11, -1):
        top = {r['id'] for t in ('novel', 'balanced') for r in [x for x in by if x['track'] == t][:n]}
        pick = top | set(best_cell.values())
        if len(pick) <= 40:
            break
    seed_best = {}
    for r in by:
        m = card_meta(r['id'])
        if m.get('lineage') == 'seed-original':
            pick.add(r['id'])
        if m.get('lineage') == 'seed-improved':
            seed_best.setdefault(m.get('parents', ''), r['id'])
    pick |= set(seed_best.values())
    track = {r['id']: r['track'] for r in rows}
    return [{'id': i, 'track': track[i]} for i in sorted(pick)]


def stage_args(stage, rnd=None):
    a = {'run_seed': run_seed()}
    if stage == 's1' and rnd == 'h1':  # checkpoint H1: decompose only the seeds added since launch
        first = (m := json.loads(read('state/manifest.json'))).get('seeds_at_launch', []) + m.get('seeds_late', [])
        new = [s for s in seeds() if s['id'] not in first]
        a.update(skip=done_in('outputs/s2-seeds', 'outputs/s3-ideate/seed-lane'), lenses=[], seeds=new,
                 seed_card_ids={s['id']: f'I-59{i + 1:02}' for i, s in enumerate(new)})
    elif stage == 's1':
        a.update(skip=done_in('briefs/s1', 'outputs/s1-discover', 'outputs/s2-seeds', 'outputs/s3-ideate/seed-lane', 'config'), seeds=seeds())
    elif stage == 's3':
        asg = json.loads(read('config/assignments.json'))
        a.update(skip=done_in('briefs/s3', 'outputs/s3-ideate'), assignments=asg['ideators'], seeds=seeds(),
                 pool_exists=is_complete('outputs/s3-ideate/seed-lane/ingredient_pool.md'),
                 territories=['T1'] if rnd == 'pilot' else TERRITORIES, seed_lane=rnd != 'pilot')
    elif stage == 's4':
        raw = sorted(glob.glob(p('outputs/s3-ideate/ideas/*.md')) + glob.glob(p('outputs/s3-ideate/seed-lane/s3-*.md'))
                     + glob.glob(p('outputs/s2-seeds/*.md')))
        raw = [os.path.relpath(f, ROOT) for f in raw]
        lates = json.loads(read('state/manifest.json')).get('seeds_late', [])  # released after S3: own partition, launch partitions unchanged
        late = [f for f in raw if '-late-' in f or any(f == f'outputs/s2-seeds/{s}.md' for s in lates)]
        raw = [f for f in raw if f not in late]
        random.Random(run_seed()).shuffle(raw)  # seed originals must not land on the id-block starts
        n = 8  # 4 workers x ~178 cards ran near a subagent's context limit; 8 x ~89 is safe (I-5xxx stays free for S7)
        a.update(skip=done_in('outputs/s4-archive', 'archive'), partitions=[raw[k::n] for k in range(n)] + ([late] if late else []),
                 id_blocks=[1001 + 500 * k for k in range(n)] + ([6001] if late else []))
    elif stage == 's5':
        a.update(skip=done_in('outputs/s5-reality'), survivors=[x for x in (jsonblock('archive/survivors.md')['survivors'])])
    elif stage == 's6':
        rnd = int(rnd)
        a.update(skip=done_in(f'tournament/r{rnd}'), round=rnd, K=32 if rnd == 1 else 16, ideas=ideas_for_round(rnd),
                 prior_verdicts=prior_json(f'tournament/r{rnd}/judges/*.md'),
                 prior_pairs=[[m['a'], m['b']] for m in json.loads(read('tournament/r1/pairings.json'))['matches']] if rnd == 2 else [])
    elif stage == 's7':
        first = (m := json.loads(read('state/manifest.json'))).get('seeds_at_launch', []) + m.get('seeds_late', [])
        a.update(skip=done_in('briefs/s7', 'outputs/s7-evolve', 'archive'), new_seeds=[s for s in seeds() if s['id'] not in first])
    elif stage == 's8':
        a.update(skip=done_in('outputs/s8-final'), finalists=finalists(),
                 prior_hunts=prior_json('outputs/s8-final/prior-art-deep/*.md'),
                 prior_scores=prior_json('outputs/s8-final/rubric/*.md'))
    elif stage == 's9':
        man = json.loads(read('state/manifest.json'))
        a.update(skip=done_in('report'), calls=man['agent_calls'])
    else:
        raise SystemExit(f'unknown stage {stage}')
    return a


# ---------- final scorecards (after S8, before Gate D) ----------

TIER_ORDER = {'S': 0, 'A': 1, 'B': 2, 'drop': 3}


def swap_consistency(ids):
    """held/swapped over both tournament rounds (settled matches have no order swap and are skipped)."""
    c = {i: [0, 0] for i in ids}
    for rnd in (1, 2):
        for r in json.loads(read(f'tournament/r{rnd}/elo.json'))['results']:
            if r['consistent'] is None:
                continue
            for x in (r['a'], r['b']):
                if x in c:
                    c[x][1] += 1; c[x][0] += bool(r['consistent'])
    return {i: (round(100 * h / s) if s else None) for i, (h, s) in c.items()}


def seed_of(meta):
    if meta.get('lineage') == 'seed-original':
        return meta.get('raw_id')
    hit = re.search(r'seed-\d\d', meta.get('parents', ''))
    return hit.group(0) if hit else None


def compile_scorecards(per_track=15, top=30, drops=None):
    """Eligible = not a deep-audit direct competitor (the S8 knock-out). Top 30 = best 15 eligible per track by
    round-2 Elo (a short track's gap is filled from the other), ordered by rubric band (S, A, B, then below 65), then Elo:
    Elo ranks, the rubric bands. Below-65 ideas are ranked only to reach ~30 and carry below_bar: true
    (deviation from PROMPT S11 "drop below 65", logged 2026-09-26: only 11 of 60 finalists cleared 65); 64-65 is
    labelled borderline. Gate D drops ({id: rationale}) leave the ranking and the next eligible idea of the same track fills in."""
    drops = drops or {}
    s8 = {c['id']: c for c in json.loads(read('outputs/s8-final/scorecards.json'))['scorecards']}
    r2 = {r['id']: r for r in json.loads(read('tournament/r2/elo.json'))['ideas']}
    r1 = {r['id']: r['elo'] for r in json.loads(read('tournament/r1/elo.json'))['ideas']}
    quick, feas = {}, {}
    for f in glob.glob(p('outputs/s5-reality/prior-art/*.md')) + glob.glob(p('outputs/s7-evolve/prior-art/*.md')):
        quick.update({v['id']: v for v in jsonblock(f)})
    for f in glob.glob(p('outputs/s5-reality/feasibility/*.md')):
        feas.update({v['id']: v.get('demoable') for v in jsonblock(f)})
    cons = swap_consistency(list(r2))
    red = {}
    for f in glob.glob(p('outputs/s8-final/red-team/*.md')):
        red.update({v['id']: {k: v.get(k) for k in ('severity', 'objection', 'fix')} for v in jsonblock(f)})
    best_cell = {}
    for r in sorted(r2.values(), key=lambda r: (-r['elo'], r['id'])):
        best_cell.setdefault(r['cell'], r['id'])
    rows = []
    for i, c in sorted(s8.items()):
        m, body = card_meta(i), parse_cards(read(f'archive/ideas/{i}.md'))[0]['body']
        name = re.search(r'^# (.+)$', body, re.M).group(1).strip()
        ko = c['knocked_out'] and m.get('lineage') != 'seed-original'
        rows.append({'id': i, 'name': name, 'track': c['track'], 'lineage': m.get('lineage'), 'seed': seed_of(m),
                     'cell': r2[i]['cell'], 'elo_r2': r2[i]['elo'], 'elo_r1': r1.get(i), 'consistency': cons[i],
                     'polarizing': cons[i] is not None and cons[i] < 60, 'coverage_badge': best_cell[r2[i]['cell']] == i,
                     'rubric': c['rubric'], 'tier': c['tier'], 'criteria': c['criteria'], 'rubric_totals': c['totals'],
                     'deep_prior_art': c['prior_art'], 'quick_prior_art': (quick.get(i) or {}).get('verdict'),
                     'feasibility': feas.get(i), 'knocked_out_s8': c['knocked_out'],
                     'rubric_spread': round(max(c['totals']) - min(c['totals']), 1) if c['totals'] else None,
                     'red_team': red.get(i), 'below_bar': c['tier'] == 'drop', 'borderline': c['rubric'] is not None and 64 <= c['rubric'] < 65,
                     'gate_d_drop': drops.get(i), 'eligible': not c['knocked_out'] and c['tier'] in TIER_ORDER and i not in drops})
    by_track = {t: sorted([r for r in rows if r['track'] == t and r['eligible']], key=lambda r: (-r['elo_r2'], r['id'])) for t in ('novel', 'balanced')}
    for t, lst in by_track.items():
        for k, r in enumerate(lst):
            r['rank_track'] = k + 1
    take = {t: min(per_track, len(by_track[t])) for t in by_track}
    for t, o in (('novel', 'balanced'), ('balanced', 'novel')):
        take[t] = min(len(by_track[t]), take[t] + max(0, per_track - len(by_track[o])))
    pick = [r for t in by_track for r in by_track[t][:take[t]]]
    pick.sort(key=lambda r: (TIER_ORDER[r['tier']], -r['elo_r2'], r['id']))
    pick = pick[:top]
    for k, r in enumerate(pick):
        r['rank_overall'] = k + 1
    seeds, s5_ko = {}, {k['id'] for k in jsonblock('outputs/s5-reality/survivors.md')['knocked_out']}
    for f in sorted(glob.glob(p('archive/ideas/*.md'))):
        m = card_meta(os.path.basename(f)[:-3])
        s = seed_of(m) if m.get('lineage', '').startswith('seed-') else None
        atoms = re.findall(r'A-(seed-\d\d)-[\w-]+', m.get('parents', ''))
        for sid in ([s] if s else []) + (atoms if m.get('lineage') == 'seed-atom-hybrid' else []):
            e = seeds.setdefault(sid, {'original': None, 'improved': [], 'pivots': [], 'atom_hybrids': []})
            rec = {'id': m['id'], 'elo_r2': r2.get(m['id'], {}).get('elo'), 'finalist': m['id'] in s8,
                   'status': 'tournament' if m['id'] in r2 else 'knocked out in S5' if m['id'] in s5_ko else 'dropped at S7 intake' if m['id'].startswith('I-5') else 'archived in S4 (cell cap or merge)'}
            key = {'seed-original': 'original', 'seed-improved': 'improved', 'seed-pivot': 'pivots'}.get(m.get('lineage'), 'atom_hybrids')
            if key == 'original':
                e['original'] = rec
            elif rec not in e[key]:
                e[key].append(rec)
    doc = {'rule': compile_scorecards.__doc__.strip(), 'counts': {t: len(v) for t, v in by_track.items()}, 'gate_d_drops': drops,
           'top30': [r['id'] for r in pick], 'finalists': rows, 'seeds': dict(sorted(seeds.items())), 'complete': True}
    os.makedirs(p('report'), exist_ok=True)
    with open(p('report/scorecards.json'), 'w') as f:
        json.dump(doc, f, indent=1)
    return doc


# ---------- self-check ----------

def selftest():
    import tempfile, shutil
    global ROOT
    old, ROOT = ROOT, tempfile.mkdtemp()
    try:
        os.makedirs(p('outputs/x')); os.makedirs(p('briefs'))
        open(p('outputs/x/a.md'), 'w').write('hi\n<!-- COMPLETE -->\n\n')
        open(p('outputs/x/b.md'), 'w').write('half written')
        open(p('outputs/x/c.json'), 'w').write('{"complete": true}')
        open(p('outputs/x/d.json'), 'w').write('{"complete": fal')
        open(p('briefs/e.md'), 'w').write('partial brief')
        r = scan(['outputs', 'briefs'], delete=True)
        assert r['done'] == ['outputs/x/a.md', 'outputs/x/c.json'], r
        assert r['deleted'] == ['outputs/x/b.md', 'outputs/x/d.json'], r   # never outside outputs/archive/tournament
        assert os.path.exists(p('briefs/e.md'))
        text = ('## Cards\n\n---\nid: I-1001\ntrack: novel\nlineage: ai-native\nterritory: T3\n'
                'cell: { buyer: B2B, capability: vision, track: novel }\nparents: []\nsource_task: x\n---\n\n# Fit Check\n\n'
                'One-liner (≤20 words): Will it fit.\nPain and evidence (≤40 words; cite the pain dossier file): Returns hurt. (src: outputs/s3-ideate/pain/T3-dossier.md)\n\n'
                '### note between cards\n\n---\nid: I-1002\ntrack: balanced\nlineage: seed-pivot\nterritory: none\n'
                'cell: { buyer: B2C, capability: voice, track: balanced }\nparents: [seed-01]\nsource_task: y\n---\n\n# Two\n\nOne-liner (≤20 words): ' + 'word ' * 21 + '\n<!-- COMPLETE -->\n')
        cards = parse_cards(text)
        assert [c['meta']['id'] for c in cards] == ['I-1001', 'I-1002']
        assert cards[0]['meta']['cell'] == {'buyer': 'B2B', 'capability': 'vision', 'track': 'novel'}
        assert 'note between' not in cards[0]['body'] and 'src:' not in blind(cards[0]['body']) and 'T3' not in blind(cards[0]['body'])
        assert cap_violations(cards[1]['body']) == ['One-liner 21>20']
        open(p('outputs/x/cards.md'), 'w').write(text)
        open(p('outputs/x/surv.md'), 'w').write('```json\n{"survivors":["I-1001"],"cells":{"I-1002":"agents|voice|balanced"},"merges":{}}\n```\n')
        written, warn = split('outputs/x/surv.md', ['outputs/x/cards.md'])
        assert written == ['I-1001', 'I-1002'] and any('One-liner' in w for w in warn)
        assert card_meta('I-1002')['cell']['buyer'] == 'agents'
        assert parse_list('[a#1, "b#2"]') == ['a#1', 'b#2'] and parse_list('[]') == []
        assert read('archive/blind/I-1001.md').startswith('# Fit Check') and 'lineage' not in read('archive/blind/I-1001.md')
        os.makedirs(p('tournament/r1'))
        open(p('archive/blind/I-1003.md'), 'w').write('# Farm seed drill planner\n' + MARK)
        assert list(leaks(['I-1001', 'I-1002', 'I-1003'])) == ['I-1003']
        try:
            deck(1, ['I-1001', 'I-1003']); raise AssertionError('deck must refuse a leaking card')
        except SystemExit as e:
            assert 'I-1003' in str(e)
        assert deck(1, ['I-1001', 'I-1003'], allow=['I-1003']).endswith('blind_deck.md')
        os.makedirs(p('inputs/seeds'))
        open(p('inputs/seeds/_TEMPLATE.md'), 'w').write('Allowed moves: improve / pivot / break down')
        open(p('inputs/seeds/seed-01.md'), 'w').write('Title: x\nAllowed moves: improve, breakdown')
        open(p('inputs/seeds/our idea.md'), 'w').write('Title: y')
        assert seeds() == [{'id': 'our idea', 'moves': list(MOVES)}, {'id': 'seed-01', 'moves': ['improve', 'break down']}]
        os.makedirs(p('tournament/r2'))
        open(p('tournament/r2/elo.json'), 'w').write('{"ideas": [{"id": "I-1", "elo": 1216}], "complete": true}')
        ret = {'pairings': {'matches': [], 'complete': True}, 'elo': {'ideas': [{'id': 'I-1', 'elo': 1216.0}], 'complete': True}}
        assert verify_tournament(2, ret) == ['pairings.json']  # elo.json matched (1216 == 1216.0); missing pairings rewritten
        a1 = assign(7, [f'P{i:02}' for i in range(1, 37)], [f'TC-{i:02}' for i in range(1, 23)], [f'C{i:02}' for i in range(1, 25)])
        a2 = assign(7, [f'P{i:02}' for i in range(1, 37)], [f'TC-{i:02}' for i in range(1, 23)], [f'C{i:02}' for i in range(1, 25)])
        assert a1 == a2 and len(a1) == 36 and len({v['persona'] for v in a1.values()}) == 36
        assert all(v['cross_territory'] != v['territory'] and len(set(v['constraints'])) == 2 for v in a1.values())
        for t in TERRITORIES:
            assert len({v['cross_territory'] for v in a1.values() if v['territory'] == t}) == 4
        print('selftest ok')
    finally:
        shutil.rmtree(ROOT); ROOT = old


if __name__ == '__main__':
    cmd, rest = (sys.argv[1] if len(sys.argv) > 1 else 'help'), sys.argv[2:]
    if cmd == 'scan':
        delete = '--delete' in rest
        print(json.dumps(scan([d for d in rest if d != '--delete'] or None, delete), indent=1))
    elif cmd == 'assign':
        cmd_assign()
    elif cmd == 'split':
        w, warn = split(rest[0] if rest[0] != '-' else None, rest[1:])
        print(json.dumps({'written': len(w), 'warnings': warn}, indent=1))
    elif cmd == 'deck':
        allow = next((x.split('=', 1)[1].split(',') for x in rest if x.startswith('--allow=')), [])
        print(deck(rest[0], [x for x in rest[1:] if not x.startswith('--allow=')], allow))
    elif cmd == 'leakcheck':
        bad = leaks(rest)
        print(json.dumps(bad, indent=1) if bad else f'no leaks in {len(rest)} blind cards')
        sys.exit(1 if bad else 0)
    elif cmd == 'verify-tournament':
        fixed = verify_tournament(rest[0], json.loads(read(rest[1])))
        print(f'overwrote from script return: {fixed}' if fixed else 'tournament master files match the script return')
    elif cmd == 'jsonblock':
        print(json.dumps(jsonblock(rest[0]), indent=1))
    elif cmd == 'args':
        print(json.dumps(stage_args(*rest)))
    elif cmd == 'scorecards':  # [--drops=FILE.json]  {id: rationale} from Gate D overrides
        f = next((x.split('=', 1)[1] for x in rest if x.startswith('--drops=')), None)
        d = compile_scorecards(drops=json.loads(read(f)) if f else None)
        print(f"report/scorecards.json: {len(d['finalists'])} finalists, eligible per track {d['counts']}, top30 {len(d['top30'])}")
    elif cmd == 'selftest':
        selftest()
    else:
        print(__doc__)
