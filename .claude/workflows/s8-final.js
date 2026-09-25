export const meta = {
  name: 's8-final',
  description: 'S8 final audit of the finalists: 12 deep prior-art hunters, then 4 red-teamers and 10 judges giving 3 independent blind rubric scores per idea (median)',
  phases: [
    { title: 'Deep audit', detail: '12 prior-art hunters, 5+ searches per idea', model: 'claude-sonnet-5' },
    { title: 'Red team', detail: '4 red-teamers', model: 'claude-sonnet-5' },
    { title: 'Score', detail: '10 judges, 3 pointwise rubric scores per idea from blind cards', model: 'claude-sonnet-5' },
  ],
}
// args: { skip, run_seed, finalists: [{id, track}], prior_hunts: {hunterTaskId: [...json block]},
//         prior_scores: {judgeTaskId: [...json block]}, models? }
// Returns per-idea scorecards; the primary session saves them to outputs/s8-final/scorecards.json.

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
const deal = (xs, n) => Array.from({ length: n }, (_, k) => xs.filter((_, i) => i % n === k))
// A task whose returned data the script needs: on resume, reuse the json block of its complete file.
async function withData(id, out, key, prior, run) {
  if (SKIP.has(out) && prior[id]) { skipped.push(id); return prior[id] }
  const r = await run()
  return r ? r[key] : null
}

const ids = args.finalists.map(f => f.id).sort()
const track = Object.fromEntries(args.finalists.map(f => [f.id, f.track]))
const huntGroups = deal(ids, 12)
const huntFile = k => `outputs/s8-final/prior-art-deep/s8-hunter-${nn(k + 1)}.md`

// ---- deep prior art ----
const HUNT = { type: 'object', properties: { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' },
  verdicts: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, verdict: { type: 'string', enum: ['clear', 'adjacent-exists', 'direct-competitor'] }, competitors: { type: 'array', items: { type: 'string' } }, note: { type: 'string' } }, required: ['id', 'verdict'] } } },
  required: ['task_id', 'output_path', 'complete', 'verdicts'] }
const hunts = await parallel(huntGroups.map((g, k) => () => withData(`s8-hunter-${nn(k + 1)}`, huntFile(k), 'verdicts', args.prior_hunts || {},
  () => task(`s8-hunter-${nn(k + 1)}`, [huntFile(k)], 'sonnet', 'prior-art-hunter',
    `MODE: deep. Ideas (${g.length}):\n${g.map(id => `- archive/ideas/${id}.md`).join('\n')}`, { phase: 'Deep audit', effort: 'medium', schema: HUNT, force: true }))))
need(hunts.every(Boolean), 'a deep hunter failed; relaunch to retry')
const art = {}
hunts.flat().forEach(v => { if (ids.includes(v.id)) art[v.id] = v })
const artLine = id => art[id] ? `${art[id].verdict}${(art[id].competitors || []).length ? ': ' + art[id].competitors.join('; ') : ''}` : 'not audited'
const huntOf = id => huntFile(huntGroups.findIndex(g => g.includes(id)))

// ---- red team and rubric scoring run side by side, both informed by the deep audit ----
const rtGroups = deal(ids, 4)
const redTeam = () => parallel(rtGroups.map((g, k) => () => task(`s8-redteam-${nn(k + 1)}`, [`outputs/s8-final/red-team/s8-redteam-${nn(k + 1)}.md`], 'sonnet', 'red-teamer',
  `Ideas (${g.length}), each with its deep prior-art file:\n${g.map(id => `- archive/ideas/${id}.md (prior art: ${huntOf(id)})`).join('\n')}`, { phase: 'Red team', effort: 'medium' })))

// Idea i is scored by judges i, i+3 and i+7 (mod 10): three distinct judges each, about 3n/10 ideas per judge.
const OFFS = [0, 3, 7]
const scorers = Array.from({ length: 10 }, (_, j) => ids.filter((_, i) => OFFS.some(o => (i + o) % 10 === j)))
const CRIT = ['novelty', 'why_now', 'pain', 'wtp', 'buildability', 'demo_wow', 'defensibility', 'pitch_clarity']
const num = { type: 'number', minimum: 1, maximum: 10 }
const SCORES = { type: 'object', properties: { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' },
  scores: { type: 'array', items: { type: 'object', properties: Object.assign({ id: { type: 'string' }, rationale: { type: 'string' } }, Object.fromEntries(CRIT.map(c => [c, num]))), required: ['id'].concat(CRIT) } } },
  required: ['task_id', 'output_path', 'complete', 'scores'] }
const score = () => parallel(scorers.map((g, j) => () => {
  const id = `s8-judge-${nn(j + 1)}`, out = `outputs/s8-final/rubric/${id}.md`
  return withData(id, out, 'scores', args.prior_scores || {}, () => task(id, [out], 'sonnet', 'judge',
    `MODE: rubric. Score these ${g.length} ideas. Blind card, then the deep prior-art finding for novelty:\n${g.map(x => `- archive/blind/${x}.md | prior art: ${artLine(x)}`).join('\n')}`,
    { phase: 'Score', effort: 'medium', schema: SCORES, force: true }))
}))
const [rt, sc] = await parallel([redTeam, score])
need(rt && rt.every(Boolean), 'a red-teamer failed; relaunch to retry')
need(sc && sc.every(Boolean), 'a rubric judge failed; relaunch to retry')

// ---- weighted totals per track (PROMPT §11), median of the 3 independent totals ----
const W = {
  novel: { novelty: 25, why_now: 20, pain: 15, wtp: 10, buildability: 5, demo_wow: 15, defensibility: 5, pitch_clarity: 5 },
  balanced: { novelty: 15, why_now: 10, pain: 20, wtp: 15, buildability: 20, demo_wow: 10, defensibility: 5, pitch_clarity: 5 },
}
const median = xs => { const s = xs.slice().sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2 }
const byIdea = {}
sc.forEach((list, j) => list.forEach(s => { if (scorers[j].includes(s.id)) (byIdea[s.id] = byIdea[s.id] || []).push(s) }))
const cards = ids.map(id => {
  const ss = byIdea[id] || [], w = W[track[id]]
  const totals = ss.map(s => Math.round(CRIT.reduce((t, c) => t + w[c] * s[c], 0) / 10 * 10) / 10)
  const rubric = totals.length ? median(totals) : null
  const tier = rubric === null ? null : rubric >= 85 ? 'S' : rubric >= 75 ? 'A' : rubric >= 65 ? 'B' : 'drop'
  return { id, track: track[id], scores_n: ss.length, totals, rubric, tier, criteria: Object.fromEntries(CRIT.map(c => [c, ss.length ? median(ss.map(s => s[c])) : null])),
    prior_art: art[id] || null, knocked_out: !!art[id] && art[id].verdict === 'direct-competitor' }
})
const short = cards.filter(c => c.scores_n < 3).map(c => c.id)
if (short.length) log(`WARNING: fewer than 3 rubric scores for ${short.join(', ')}`)

return { calls, failed, skipped, finalists: ids.length, short_scored: short, scorecards: cards }
