export const meta = {
  name: 's6-tournament',
  description: 'S6 blind pairwise tournament (args.round 1 or 2): deterministic Swiss pairings, 5 judge pairs judging both orders, Elo computed in-script, tournament master writes the files',
  phases: [
    { title: 'Judge', detail: '10 judges = 5 pairs; each pair judges the same batch in opposite orders', model: 'claude-sonnet-5' },
    { title: 'Settle', detail: 'tournament master settles malformed matches only', model: 'claude-opus-5-5' },
    { title: 'Write', detail: 'tournament master writes pairings.json, elo.json, leaderboard.md', model: 'claude-opus-5-5' },
  ],
}
// args: { skip, round, K, run_seed, ideas: [{id, track, cell, elo}] (sorted by id),
//         prior_verdicts: {judgeTaskId: [{match_id, winner, rationale}]} (json blocks of complete judge files, for resume),
//         prior_pairs: [[a, b]] (earlier-round matches, never replayed), models? }
// The primary session builds tournament/r<round>/blind_deck.md with `pipe.py deck` (refuses cards that leak lineage)
// before launching, and afterwards runs `pipe.py verify-tournament` against this workflow's return value.

const M = Object.assign({ fable: 'claude-fable-5-1', opus: 'claude-opus-5-5', sonnet: 'claude-sonnet-5' }, args.models || {})
const SKIP = new Set(args.skip || [])
const calls = { fable: 0, opus: 0, sonnet: 0 }
const failed = [], skipped = []
const RESULT = { type: 'object', properties: { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' }, summary: { type: 'string' } }, required: ['task_id', 'output_path', 'complete'] }
// One task = one agent call with predetermined output files; skipped when every output is already complete.
async function task(id, outs, tier, role, prompt, o) {
  if (!o.force && outs.every(f => SKIP.has(f))) { skipped.push(id); return { task_id: id, output_path: outs[0], complete: true, skipped: true } }
  calls[tier]++
  const r = await agent(`${prompt}\n\nTask id: ${id}\nRequired output file(s): ${outs.join(', ')}\nFinish by returning task_id "${id}", output_path "${outs[0]}", complete (true only if every required file is written and its last line is <!-- COMPLETE -->), and a one-line summary.`,
    { label: id, phase: o.phase, schema: o.schema || RESULT, model: M[tier], effort: o.effort, agentType: role })
  if (!r || !r.complete) { failed.push(id); return null }
  return r
}
const need = (x, why) => { if (!x) throw new Error(why); return x }
const nn = n => String(n).padStart(2, '0')

const R = args.round, K = args.K
const dir = `tournament/r${R}`, deckPath = `${dir}/blind_deck.md`
const PAIRS = 5

// ---- pairings: deterministic, seeded from state/run_seed ----
function mulberry32(seed) {
  let a = seed >>> 0
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
}
const rand = mulberry32(args.run_seed + R * 7919)
const tiebreak = new Map(args.ideas.map(x => [x.id, rand()]))
const pk = (a, b) => (a < b ? `${a}~${b}` : `${b}~${a}`)
const played = new Set((args.prior_pairs || []).map(([a, b]) => pk(a, b)))

// Within a track: round 1 orders by map cell (proximity clusters) with a seeded shuffle inside each cell;
// round 2 orders by Elo (Swiss). Each idea then challenges its 2 nearest unplayed neighbours, forward first,
// so the typical idea plays about 4 matches and nobody meets the same opponent twice.
function pairTrack(list) {
  const order = list.slice().sort(R === 1
    ? (x, y) => x.cell.localeCompare(y.cell) || tiebreak.get(x.id) - tiebreak.get(y.id)
    : (x, y) => y.elo - x.elo || x.id.localeCompare(y.id))
  const n = order.length, seen = new Set(), pairs = []
  for (let i = 0; i < n; i++) {
    let made = 0
    const cand = []
    for (let j = i + 1; j < n; j++) cand.push(j)
    for (let j = i - 1; j >= 0; j--) cand.push(j)
    for (const j of cand) {
      if (made === 2) break
      const k = pk(order[i].id, order[j].id)
      if (seen.has(k) || played.has(k)) continue
      seen.add(k); pairs.push([order[i].id, order[j].id]); made++
    }
  }
  return pairs
}
const tracks = [...new Set(args.ideas.map(x => x.track))].sort()
const matches = tracks.flatMap(t => pairTrack(args.ideas.filter(x => x.track === t)))
  .map(([a, b], i) => ({ id: `r${R}-M${String(i + 1).padStart(3, '0')}`, a, b, pair: (i % PAIRS) + 1 }))
log(`${args.ideas.length} ideas, ${matches.length} matches, ${PAIRS} judge pairs`)

// ---- judging: judge 2p-1 sees (a, b), judge 2p sees (b, a) ----
const VERD = { type: 'object', properties: { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' }, summary: { type: 'string' },
  verdicts: { type: 'array', items: { type: 'object', properties: { match_id: { type: 'string' }, winner: { type: 'string' }, rationale: { type: 'string' } }, required: ['match_id', 'winner'] } } },
  required: ['task_id', 'output_path', 'complete', 'verdicts'] }
async function judge(p, flip) {
  const id = `s6r${R}-judge-${nn(2 * p + (flip ? 2 : 1))}`, out = `${dir}/judges/${id}.md`
  const prior = (args.prior_verdicts || {})[id]
  if (SKIP.has(out) && prior) { skipped.push(id); return prior }
  const mine = matches.filter(m => m.pair === p + 1)
  const list = mine.map(m => (flip ? `${m.id}: ${m.b} vs ${m.a}` : `${m.id}: ${m.a} vs ${m.b}`)).join('\n')
  const r = await task(id, [out], 'sonnet', 'judge',
    `MODE: tournament, round ${R}. Blind deck: ${deckPath}. Read it once; it holds every card. Judge these ${mine.length} matches in this order, with the first-named card as "first":\n${list}`,
    { phase: 'Judge', effort: 'medium', schema: VERD, force: true })
  return r ? r.verdicts : null
}
const V = await parallel(Array.from({ length: 2 * PAIRS }, (_, j) => () => judge(Math.floor(j / 2), j % 2 === 1)))
need(V.every(Boolean), 'a judge failed; relaunch (complete judges are reused from prior_verdicts)')

// ---- combine: a win counts only when both orders agree; otherwise a draw ----
const pick = (vs, m) => { const v = vs.find(x => x.match_id === m.id); return v && (v.winner === m.a || v.winner === m.b) ? v.winner : null }
const results = [], malformed = []
for (const m of matches) {
  const w1 = pick(V[2 * (m.pair - 1)], m), w2 = pick(V[2 * (m.pair - 1) + 1], m)
  if (!w1 || !w2) malformed.push(m)
  else results.push({ match_id: m.id, a: m.a, b: m.b, winner: w1 === w2 ? w1 : null, consistent: w1 === w2, settled: false })
}
if (malformed.length) {
  const SETTLE = { type: 'object', properties: { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' },
    settlements: { type: 'array', items: { type: 'object', properties: { match_id: { type: 'string' }, winner: { type: 'string' }, rationale: { type: 'string' } }, required: ['match_id', 'winner'] } } },
    required: ['task_id', 'output_path', 'complete', 'settlements'] }
  const s = need(await task(`s6r${R}-settle`, [`${dir}/settlements.md`], 'opus', 'tournament-master',
    `MODE: settle. Blind deck: ${deckPath}. Malformed matches (a judge's verdict was missing or invalid):\n${malformed.map(m => `${m.id}: ${m.a} vs ${m.b}`).join('\n')}`,
    { phase: 'Settle', effort: 'medium', schema: SETTLE, force: true }), 'settlement failed')
  for (const m of malformed) {
    const w = pick(s.settlements, m)
    results.push({ match_id: m.id, a: m.a, b: m.b, winner: w, consistent: null, settled: true })  // settled: no order swap, so excluded from consistency
  }
}

// ---- Elo (sequential in match order) and consistency ----
results.sort((x, y) => x.match_id.localeCompare(y.match_id))
const elo = Object.fromEntries(args.ideas.map(x => [x.id, x.elo]))
const st = Object.fromEntries(args.ideas.map(x => [x.id, { w: 0, l: 0, d: 0, held: 0, swapped: 0 }]))
for (const r of results) {
  const ea = 1 / (1 + Math.pow(10, (elo[r.b] - elo[r.a]) / 400))
  const sa = r.winner === r.a ? 1 : r.winner === r.b ? 0 : 0.5
  elo[r.a] += K * (sa - ea)
  elo[r.b] -= K * (sa - ea)
  for (const [x, s] of [[r.a, sa], [r.b, 1 - sa]]) {
    const t = st[x]
    if (s === 1) t.w++; else if (s === 0) t.l++; else t.d++
    if (r.consistent !== null) { t.swapped++; if (r.consistent) t.held++ }
  }
}
const table = args.ideas.map(x => {
  const t = st[x.id], cons = t.swapped ? Math.round((100 * t.held) / t.swapped) : null
  return { id: x.id, track: x.track, cell: x.cell, elo_start: x.elo, elo: Math.round(elo[x.id] * 10) / 10, wins: t.w, losses: t.l, draws: t.d, matches: t.w + t.l + t.d, consistency: cons, polarizing: cons !== null && cons < 60 }
}).sort((x, y) => x.track.localeCompare(y.track) || y.elo - x.elo || x.id.localeCompare(y.id))
const agree = results.filter(r => r.consistent === true).length
const pairings = { round: R, K, run_seed: args.run_seed, judge_pairs: PAIRS, matches: matches.map(m => ({ match_id: m.id, a: m.a, b: m.b, pair: m.pair, judges: [`s6r${R}-judge-${nn(2 * m.pair - 1)}`, `s6r${R}-judge-${nn(2 * m.pair)}`] })), complete: true }
const eloDoc = { round: R, K, stats: { ideas: table.length, matches: results.length, agreed: agree, settled: malformed.length }, ideas: table, results, complete: true }

// ---- the tournament master writes the files (numbers copied, never recomputed) ----
const wrote = await task(`s6r${R}-write`, [`${dir}/pairings.json`, `${dir}/elo.json`, `${dir}/leaderboard.md`], 'opus', 'tournament-master',
  `MODE: write, round ${R}. Blind deck (for idea names): ${deckPath}.\nWrite ${dir}/pairings.json with exactly this JSON:\n${JSON.stringify(pairings)}\n\nWrite ${dir}/elo.json with exactly this JSON:\n${JSON.stringify(eloDoc)}\n\nThen write ${dir}/leaderboard.md from elo.json (the top 20 per track in full, then the rest compactly).`,
  { phase: 'Write', effort: 'medium' })

return { calls, failed, skipped, round: R, matches: matches.length, agreed: agree, settled: malformed.length, write_ok: !!wrote, pairings, elo: eloDoc }
