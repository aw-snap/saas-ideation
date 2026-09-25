export const meta = {
  name: 's7-evolve',
  description: 'S7 evolution: evolution lead briefs 4 mutators from Gate C; new seeds get improve/pivot passes; every new card gets a quick prior-art sweep; the archive lead takes them in',
  phases: [
    { title: 'Directives', detail: 'evolution lead writes 4 mutator briefs', model: 'claude-opus-5-5' },
    { title: 'Mutate', detail: '4 mutators (~10 cards each) + new-seed improvers/pivoters', model: 'claude-sonnet-5' },
    { title: 'Sweep', detail: 'one quick prior-art hunter per new-card file', model: 'claude-sonnet-5' },
    { title: 'Intake', detail: 'archive lead: knock out direct competitors, dedup, place in cells', model: 'claude-opus-5-5' },
  ],
}
// args: { skip, run_seed, new_seeds: [{id, moves}] (added at checkpoint H1; already normalized and decomposed), models? }
// Id blocks: mutator k -> I-5k01.. (k = 1..4); improvers I-5501 / I-5551; pivoters I-5601 / I-5701; new seed originals I-59nn.
// After this workflow the primary session runs `tools/pipe.py split archive/survivors-s7.md <new card files>`.

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

const briefs = [1, 2, 3, 4].map(k => `briefs/s7/mutator-${nn(k)}.md`)
need(await task('s7-evolution-lead', briefs, 'opus', 'evolution-lead',
  `Inputs: gates/gate-C.md, tournament/r1/leaderboard.md, archive/map.md, archive/survivors.md, outputs/s3-ideate/seed-lane/ingredient_pool.md, inputs/reactions.md.\nId blocks: mutator k uses I-5k01 upward (mutator 1: I-5101.., mutator 2: I-5201.., mutator 3: I-5301.., mutator 4: I-5401..). Mutator k writes outputs/s7-evolve/s7-mutator-<kk>.md.`,
  { phase: 'Directives', effort: 'high' }), 'evolution lead failed')

// Every producer below yields one file of new cards; each file flows straight into its own prior-art sweep.
const producers = briefs.map((b, i) => ({ id: `s7-mutator-${nn(i + 1)}`, role: 'mutator', prompt: `Your brief: ${b}.` }))
const S = args.new_seeds || []
const imp = S.filter(s => s.moves.includes('improve')), piv = S.filter(s => s.moves.includes('pivot'))
if (imp.length) [1, 2].forEach(k => producers.push({ id: `s7-improver-${nn(k)}`, role: 'improver',
  prompt: `New seeds: ${imp.map((s, i) => `${s.id} (card id I-${5451 + 50 * k + i})`).join(', ')}.` }))
;[0, 1].map(k => piv.filter((_, i) => i % 2 === k)).forEach((g, k) => g.length && producers.push({ id: `s7-pivoter-${nn(k + 1)}`, role: 'pivoter',
  prompt: `New seeds: ${g.map(s => s.id).join(', ')}. Card ids: I-${5601 + 100 * k} upward, in order.` }))

const swept = await pipeline(producers,
  p => task(p.id, [`outputs/s7-evolve/${p.id}.md`], 'sonnet', p.role, p.prompt, { phase: 'Mutate', effort: 'high' }),
  (r, p) => task(`s7-hunter-${p.id.slice(3)}`, [`outputs/s7-evolve/prior-art/s7-hunter-${p.id.slice(3)}.md`], 'sonnet', 'prior-art-hunter',
    `MODE: quick. Check every card in outputs/s7-evolve/${p.id}.md.`, { phase: 'Sweep', effort: 'medium', force: !need(r, `${p.id} failed`).skipped }))
need(swept.every(Boolean), 'a producer or its sweep failed; relaunch to retry')

const cardFiles = producers.map(p => `outputs/s7-evolve/${p.id}.md`).concat(S.map(s => `outputs/s2-seeds/${s.id}.md`))
const intake = await task('s7-archive-intake', ['archive/survivors-s7.md', 'archive/map.md', 'archive/stats.md'], 'opus', 'archive-lead',
  `MODE: evolve-intake. New card files:\n${cardFiles.map(f => `- ${f}`).join('\n')}\n(For new seed files, the card is the "## Seed as idea card" section; it always advances.)\nPrior-art files:\n${producers.map(p => `- outputs/s7-evolve/prior-art/s7-hunter-${p.id.slice(3)}.md`).join('\n')}\nExisting survivors: archive/survivors.md and outputs/s5-reality/survivors.md.`,
  { phase: 'Intake', effort: 'high', force: swept.some(s => !s.skipped) })

return { calls, failed, skipped, producers: producers.map(p => p.id), intake_ok: !!intake, card_files: cardFiles }
