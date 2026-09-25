// Dry-run every workflow script against mocked agent()/parallel()/pipeline(): no tokens spent.
// Checks: determinism bans, explicit model + known agent type + schema on every call, per-tier call counts,
// resume via args.skip, and the tournament/rubric math.   Usage: node tools/dryrun.mjs
import { readFileSync, existsSync } from 'node:fs'
import assert from 'node:assert/strict'

const ROOT = new URL('..', import.meta.url).pathname
const MODELS = { 'claude-fable-5-1': 'fable', 'claude-opus-5-5': 'opus', 'claude-sonnet-5': 'sonnet' }
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor

async function run(name, args, opts = {}) {
  const src = readFileSync(`${ROOT}.claude/workflows/${name}.js`, 'utf8')
  assert.ok(src.startsWith('export const meta = {'), `${name}: meta must be the first statement`)
  assert.ok(!/Date\.now\(|Math\.random\(|new Date\(\s*\)/.test(src), `${name}: nondeterministic call`)
  const calls = []
  const agent = async (prompt, o) => {
    assert.ok(MODELS[o.model], `${name}: agent ${o.label} has no explicit known model (${o.model})`)
    assert.ok(o.agentType && existsSync(`${ROOT}.claude/agents/${o.agentType}.md`), `${name}: unknown agentType ${o.agentType}`)
    const def = readFileSync(`${ROOT}.claude/agents/${o.agentType}.md`, 'utf8')
    assert.ok(def.includes(`model: ${o.model}`), `${name}: ${o.label} model ${o.model} disagrees with ${o.agentType}.md`)
    assert.ok(o.schema && o.schema.type === 'object', `${name}: ${o.label} has no schema`)
    assert.ok(o.effort, `${name}: ${o.label} has no explicit effort`)
    for (const req of o.schema.required || []) assert.ok(o.schema.properties[req], `${name}: schema requires missing ${req}`)
    calls.push({ label: o.label, tier: MODELS[o.model], role: o.agentType, prompt })
    if (opts.fail && opts.fail.test(o.label)) return null
    const r = { task_id: o.label, output_path: 'mock', complete: true, summary: 'mock' }
    const P = o.schema.properties
    if (P.verdicts && P.verdicts.items.properties.match_id) {  // tournament judge
      r.verdicts = [...prompt.matchAll(/^(r\d-M\d+): (I-\d+) vs (I-\d+)$/gm)].map(([, id, x, y]) => {
        const n = +id.slice(4)
        const winner = n % 7 === 0 ? x : (x < y ? x : y)  // every 7th match: judge prefers the first-shown card -> disagreement
        return { match_id: id, winner: n % 10 === 1 && /-(02|04|06|08|10)$/.test(o.label) ? 'BOGUS' : winner, rationale: 'mock' }
      })
    }
    if (P.settlements) r.settlements = [...prompt.matchAll(/^(r\d-M\d+): (I-\d+) vs (I-\d+)$/gm)].map(([, id, x]) => ({ match_id: id, winner: x }))
    if (P.verdicts && P.verdicts.items.properties.verdict) r.verdicts = [...prompt.matchAll(/archive\/ideas\/(I-\d+)/g)].map(([, id]) => ({ id, verdict: id.endsWith('7') ? 'direct-competitor' : 'clear', competitors: [] }))
    if (P.scores) r.scores = [...prompt.matchAll(/archive\/blind\/(I-\d+)/g)].map(([, id]) => ({ id, novelty: 8, why_now: 7, pain: 9, wtp: 6, buildability: 8, demo_wow: 7, defensibility: 5, pitch_clarity: 9 }))
    if (P.territories) Object.assign(r, { verdict: 'APPROVED', territories: [], axes: [] })
    if (P.verdict && !P.territories) r.verdict = 'APPROVED'
    return r
  }
  const parallel = thunks => Promise.all(thunks.map(t => Promise.resolve().then(t).catch(() => null)))
  const pipeline = (items, ...stages) => Promise.all(items.map(async (it, i) => {
    try { let v = it; for (const s of stages) v = await s(v, it, i); return v } catch { return null }
  }))
  const body = src.replace('export const meta', 'const meta')
  const fn = new AsyncFunction('args', 'agent', 'parallel', 'pipeline', 'phase', 'log', 'budget', body)
  const out = await fn(args, agent, parallel, pipeline, () => {}, () => {}, { total: null })
  const tiers = { fable: 0, opus: 0, sonnet: 0 }
  calls.forEach(c => tiers[c.tier]++)
  if (out && out.calls) assert.deepEqual(out.calls, tiers, `${name}: script's own call counter disagrees with actual agent() calls`)
  return { out, calls, tiers }
}

const ids = n => Array.from({ length: n }, (_, i) => `I-${1001 + i}`)
const seeds = [1, 2, 3, 4, 5, 6].map(i => ({ id: `seed-0${i}`, moves: ['improve', 'pivot', 'break down'] }))
const T = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `T${i}`)
const assignments = {}
T.forEach((t, ti) => ['novel', 'balanced'].forEach(tr => [1, 2].forEach(k => {
  assignments[`s3-ideator-${tr}-${t}-0${k}`] = { territory: t, track: tr, persona: 'P01', cross_territory: T[(ti + k + (tr === 'novel' ? 0 : 2)) % 9], tech_card: 'TC-01', constraints: ['C01', 'C02'] }
})))

// gate
let r = await run('gate', { gate: 'A', files: ['x'] })
assert.deepEqual(r.tiers, { fable: 1, opus: 0, sonnet: 0 })
r = await run('gate', { gate: 'B', files: ['x'] })
assert.equal(r.calls[0].role, 'gate-b')

// s1: 4 lenses x (briefs + 5 scouts + synthesis) + seed lead + 2 decomposers + pool
r = await run('s1-discover', { skip: [], seeds, run_seed: 1 })
assert.deepEqual(r.tiers, { fable: 0, opus: 10, sonnet: 22 })
assert.ok(r.out.lenses.every(l => l.ok) && r.out.seeds_ok)
const s1outs = ['briefs/s1/screen-work-scout-01.md', 'briefs/s1/screen-work-scout-02.md', 'briefs/s1/screen-work-scout-03.md', 'briefs/s1/screen-work-scout-04.md', 'briefs/s1/screen-work-scout-05.md',
  ...[1, 2, 3, 4, 5].map(n => `outputs/s1-discover/scouts/s1-scout-screen-work-0${n}.md`), 'outputs/s1-discover/cartographers/screen-work.md']
r = await run('s1-discover', { skip: s1outs, seeds: [], run_seed: 1 })
assert.deepEqual(r.tiers, { fable: 0, opus: 6, sonnet: 15 }, 'resume must skip the finished lens')
r = await run('s1-discover', { skip: [], seeds, run_seed: 1 }, { fail: /s1-scout-overlooked-03/ })
assert.ok(!r.out.lenses.find(l => l.lens === 'overlooked').ok && r.out.failed.includes('s1-scout-overlooked-03'))
assert.ok(!r.calls.some(c => c.label === 's1-cartographer-overlooked'), 'no synthesis from 4 of 5 scouts')
r = await run('s1-discover', { skip: ['outputs/s2-seeds/seed-01.md', 'outputs/s3-ideate/seed-lane/ingredient_pool.md'], lenses: [], seeds: [{ id: 'seed-07', moves: ['improve', 'break down'] }], seed_card_ids: { 'seed-07': 'I-5901' }, run_seed: 1 })
assert.deepEqual(r.calls.map(c => c.label), ['s2-seed-lead', 's2-decomposer-01', 's2-ingredient-pool'], 'new seed must force a pool rebuild')
assert.ok(r.calls[0].prompt.includes('card id I-5901'))

// s3 pilot: T1 ideates; T1 + its 4 partners get dossiers
r = await run('s3-ideate', { skip: [], territories: ['T1'], assignments, seeds, pool_exists: true, seed_lane: false, run_seed: 1 })
const pilotT = new Set(Object.values(assignments).filter(a => a.territory === 'T1').flatMap(a => [a.territory, a.cross_territory]))
assert.deepEqual(r.tiers, { fable: 0, opus: 2 * pilotT.size, sonnet: 2 * pilotT.size + 12 })
assert.ok(r.calls.filter(c => c.label.endsWith('-r1')).every(c => /do NOT read inputs\/seeds/.test(c.prompt) && !/ingredient_pool/.test(c.prompt)), 'round 1 walled off from seeds')
// s3 full
r = await run('s3-ideate', { skip: [], territories: T, assignments, seeds, pool_exists: true, seed_lane: true, run_seed: 1 })
assert.deepEqual(r.tiers, { fable: 0, opus: 18, sonnet: 18 + 108 + 4 })

// s4
r = await run('s4-archive', { skip: [], partitions: [['a'], ['b'], ['c'], ['d']], id_blocks: [1001, 2001, 3001, 4001], run_seed: 1 })
assert.deepEqual(r.tiers, { fable: 0, opus: 1, sonnet: 4 })
assert.ok(r.calls[1].prompt.includes('I-2001'))

// s5
r = await run('s5-reality', { skip: [], survivors: ids(180), run_seed: 1 })
assert.deepEqual(r.tiers, { fable: 0, opus: 1, sonnet: 18 })
const perHunter = r.calls.filter(c => c.role === 'prior-art-hunter').map(c => (c.prompt.match(/archive\/ideas/g) || []).length)
assert.equal(perHunter.reduce((a, b) => a + b), 180)

// s6 round 1
const pool = ids(150).map((id, i) => ({ id, track: i % 2 ? 'balanced' : 'novel', cell: `B2B|cap${i % 7}|${i % 2 ? 'balanced' : 'novel'}`, elo: 1200 }))
r = await run('s6-tournament', { skip: [], round: 1, K: 32, run_seed: 498282322, ideas: pool, prior_verdicts: {}, prior_pairs: [] })
const m1 = r.out.pairings.matches
const perIdea = {}
m1.forEach(m => { perIdea[m.a] = (perIdea[m.a] || 0) + 1; perIdea[m.b] = (perIdea[m.b] || 0) + 1 })
const counts = Object.values(perIdea)
assert.equal(Object.keys(perIdea).length, 150, 'every idea plays')
assert.ok(Math.min(...counts) >= 2 && Math.max(...counts) <= 6, `matches per idea ${Math.min(...counts)}..${Math.max(...counts)}`)
assert.equal(new Set(m1.map(m => [m.a, m.b].sort().join())).size, m1.length, 'no duplicate pairings')
assert.ok(m1.every(m => pool.find(x => x.id === m.a).track === pool.find(x => x.id === m.b).track), 'matches stay within a track')
const judges = r.calls.filter(c => c.role === 'judge')
assert.equal(judges.length, 10)
for (let p = 0; p < 5; p++) {  // both judges of a pair see the same matches, in opposite orders
  const a = [...judges[2 * p].prompt.matchAll(/^(r1-M\d+): (I-\d+) vs (I-\d+)$/gm)].map(x => x.slice(1).join())
  const b = [...judges[2 * p + 1].prompt.matchAll(/^(r1-M\d+): (I-\d+) vs (I-\d+)$/gm)].map(x => [x[1], x[3], x[2]].join())
  assert.deepEqual(a, b)
}
const e = r.out.elo
const sum = e.ideas.reduce((t, x) => t + x.elo, 0)
assert.ok(Math.abs(sum - 150 * 1200) < 1, `Elo is zero-sum (${sum})`)
assert.equal(e.results.length, m1.length)
assert.ok(e.results.some(x => x.consistent === false && x.winner === null), 'split verdicts become draws')
assert.ok(r.out.settled > 0 && r.calls.some(c => c.label === 's6r1-settle'), 'malformed verdicts go to the tournament master')
assert.ok(e.ideas.every(x => x.consistency === null || (x.consistency >= 0 && x.consistency <= 100)))
const r1b = await run('s6-tournament', { skip: [], round: 1, K: 32, run_seed: 498282322, ideas: pool, prior_verdicts: {}, prior_pairs: [] })
assert.deepEqual(r1b.out.pairings, r.out.pairings, 'pairings are deterministic')
// resume: judges with complete files reuse their verdicts
const prior = Object.fromEntries(judges.slice(0, 4).map((j, k) => [j.label, [...j.prompt.matchAll(/^(r1-M\d+): (I-\d+) vs (I-\d+)$/gm)].map(([, id, x, y]) => ({ match_id: id, winner: +id.slice(4) % 7 === 0 ? x : (x < y ? x : y) }))]))
const r1c = await run('s6-tournament', { skip: Object.keys(prior).map(j => `tournament/r1/judges/${j}.md`), round: 1, K: 32, run_seed: 498282322, ideas: pool, prior_verdicts: prior, prior_pairs: [] })
assert.equal(r1c.calls.filter(c => c.role === 'judge').length, 6)
// round 2: Swiss by Elo, no rematches
const pool2 = e.ideas.map(x => ({ id: x.id, track: x.track, cell: x.cell, elo: x.elo })).sort((a, b) => a.id.localeCompare(b.id))
r = await run('s6-tournament', { skip: [], round: 2, K: 16, run_seed: 498282322, ideas: pool2, prior_verdicts: {}, prior_pairs: m1.map(m => [m.a, m.b]) })
const seen1 = new Set(m1.map(m => [m.a, m.b].sort().join()))
assert.ok(r.out.pairings.matches.every(m => !seen1.has([m.a, m.b].sort().join())), 'no round-2 rematches')

// s7: 4 mutators + (2 improvers + 1 pivoter) for one new seed, each swept, then intake
r = await run('s7-evolve', { skip: [], run_seed: 1, new_seeds: [{ id: 'seed-07', moves: ['improve', 'pivot'] }] })
assert.deepEqual(r.tiers, { fable: 0, opus: 2, sonnet: 14 })
assert.ok(r.calls.find(c => c.label === 's7-improver-02').prompt.includes('I-5551'))

// s8: 46 finalists; everyone gets 3 distinct scorers
const fin = ids(46).map((id, i) => ({ id, track: i % 2 ? 'balanced' : 'novel' }))
r = await run('s8-final', { skip: [], run_seed: 1, finalists: fin, prior_hunts: {}, prior_scores: {} })
assert.deepEqual(r.tiers, { fable: 0, opus: 0, sonnet: 12 + 4 + 10 })
const sc = r.out.scorecards
assert.ok(sc.every(c => c.scores_n === 3), 'three independent scores per idea')
const nov = sc.find(c => c.track === 'novel'), bal = sc.find(c => c.track === 'balanced')
assert.equal(nov.rubric, (25 * 8 + 20 * 7 + 16 * 9 + 10 * 6 + 3 * 8 + 16 * 7 + 5 * 5 + 5 * 9) / 10)   // 75.0 -> tier A
assert.equal(nov.tier, 'A')
assert.equal(bal.rubric, (17 * 8 + 10 * 7 + 22 * 9 + 17 * 6 + 12 * 8 + 12 * 7 + 5 * 5 + 5 * 9) / 10) // 75.6
assert.ok(sc.find(c => c.id === 'I-1007').knocked_out, 'direct competitor flagged')
assert.ok(r.calls.filter(c => c.role === 'judge').every(c => !/archive\/ideas/.test(c.prompt)), 'rubric judges get blind cards only')

// s9
r = await run('s9-report', { skip: [], calls: { fable: 4, opus: 40, sonnet: 250 } })
assert.deepEqual(r.tiers, { fable: 0, opus: 1, sonnet: 0 })

console.log('dryrun ok: all 9 workflow scripts')
