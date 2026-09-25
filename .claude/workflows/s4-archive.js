export const meta = {
  name: 's4-archive',
  description: 'S4 archive: archive workers normalize and dedup partitions of raw ideas; the archive lead merges across partitions and keeps each map cell\'s elite + runners-up',
  phases: [
    { title: 'Normalize', detail: 'archive workers, one partition each', model: 'claude-sonnet-5' },
    { title: 'Merge', detail: 'archive lead: cross-partition dedup, cells, survivors', model: 'claude-opus-5-5' },
  ],
}
// args: { skip, partitions: [[raw file paths] xN], id_blocks: [one start per partition, ascending], lead?: false, run_seed, models? }
// After this workflow the primary session runs `tools/pipe.py split archive/survivors.md <part files>`
// to write archive/ideas/<id>.md and archive/blind/<id>.md.

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

const receipts = args.partitions.map((_, k) => `outputs/s4-archive/s4-archive-worker-${nn(k + 1)}.md`)
const workers = await parallel(args.partitions.map((files, k) => () => task(`s4-archive-worker-${nn(k + 1)}`, [receipts[k]], 'sonnet', 'archive-worker',
  `Partition ${k + 1} of ${args.partitions.length}. Raw files (${files.length}):\n${files.map(f => `- ${f}`).join('\n')}\nFinal ids start at I-${String(args.id_blocks[k]).padStart(4, '0')} and must stay below I-${(args.id_blocks[k + 1] || args.id_blocks[k] + 500) - 1}. Part files go in outputs/s4-archive/w${nn(k + 1)}/ (part-01.md, part-02.md, ...; at most 25 cards each). Write the receipt ${receipts[k]} last.`,
  { phase: 'Normalize', effort: 'medium' })))
need(workers.every(Boolean), 'an archive worker failed; relaunch to retry it')  // the lead needs every partition

// lead: false -> workers only (rerun later with the late partition and the lead)
const lead = args.lead === false ? null : await task('s4-archive-lead', ['archive/survivors.md', 'archive/map.md', 'archive/stats.md'], 'opus', 'archive-lead',
  `MODE: merge. Worker receipts (each lists its part files under ## Parts):\n${receipts.map(f => `- ${f}`).join('\n')}`,
  { phase: 'Merge', effort: 'high' })

return { calls, failed, skipped, workers_ok: workers.length, lead_ok: !!lead }
