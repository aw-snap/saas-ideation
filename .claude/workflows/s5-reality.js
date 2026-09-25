export const meta = {
  name: 's5-reality',
  description: 'S5 reality check: 12 quick prior-art hunters and 6 feasibility planners over the S4 survivors, then the reality lead applies the knock-outs',
  phases: [
    { title: 'Sweep', detail: '12 prior-art hunters (~15 ideas each) + 6 feasibility planners (~30 each)', model: 'claude-sonnet-5' },
    { title: 'Knock-outs', detail: 'reality lead writes outputs/s5-reality/survivors.md', model: 'claude-opus-5-5' },
  ],
}
// args: { skip, survivors: [idea ids from archive/survivors.md], run_seed, models? }

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
const deal = (xs, n) => Array.from({ length: n }, (_, k) => xs.filter((_, i) => i % n === k))  // round-robin partition
const cards = g => g.map(id => `- archive/ideas/${id}.md`).join('\n')

const ids = args.survivors.slice().sort()
const huntFiles = deal(ids, 12).map((_, k) => `outputs/s5-reality/prior-art/s5-hunter-${nn(k + 1)}.md`)
const planFiles = deal(ids, 6).map((_, k) => `outputs/s5-reality/feasibility/s5-planner-${nn(k + 1)}.md`)

const sweep = await parallel(
  deal(ids, 12).map((g, k) => () => task(`s5-hunter-${nn(k + 1)}`, [huntFiles[k]], 'sonnet', 'prior-art-hunter',
    `MODE: quick. Ideas (${g.length}):\n${cards(g)}`, { phase: 'Sweep', effort: 'medium' }))
    .concat(deal(ids, 6).map((g, k) => () => task(`s5-planner-${nn(k + 1)}`, [planFiles[k]], 'sonnet', 'feasibility-planner',
      `Ideas (${g.length}):\n${cards(g)}`, { phase: 'Sweep', effort: 'medium' }))))
need(sweep.every(Boolean), 'a hunter or planner failed; relaunch to retry')  // the lead must see every verdict

const lead = await task('s5-reality-lead', ['outputs/s5-reality/survivors.md'], 'opus', 'reality-lead',
  `Apply the knock-outs to these ${ids.length} ideas (cards in archive/ideas/<id>.md).\nPrior-art files:\n${huntFiles.map(f => `- ${f}`).join('\n')}\nFeasibility files:\n${planFiles.map(f => `- ${f}`).join('\n')}`,
  { phase: 'Knock-outs', effort: 'high' })

return { calls, failed, skipped, ideas: ids.length, lead_ok: !!lead }
