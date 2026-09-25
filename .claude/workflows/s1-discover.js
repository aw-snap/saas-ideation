export const meta = {
  name: 's1-discover',
  description: 'S1 discovery (4 cartographers x 5 scouts) with S2 seed normalization, decomposition and ingredient pool in parallel',
  whenToUse: 'Stage S1+S2. Rerun before Gate C with args.lenses = [] to process only new seeds.',
  phases: [
    { title: 'Discovery', detail: 'per lens: cartographer briefs -> 5 scouts -> cartographer synthesis' },
    { title: 'Seeds', detail: 'seed lead normalizes -> 2 decomposers -> seed lead rebuilds the ingredient pool' },
  ],
}
// args: { skip: [complete output paths], seeds: [{id, moves}], lenses?: [..] (default all 4; [] = seeds only), note?: extra seed-lead normalize instruction,
//         seed_card_ids?: {seedId: 'I-59nn'} (new seeds at H1 get final card ids), run_seed, models? }

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

const LENSES = args.lenses || ['screen-work', 'tech-unlocks', 'overlooked', 'weak-signals']
const SEEDS = args.seeds || []

async function lens(l) {
  const briefs = [1, 2, 3, 4, 5].map(n => `briefs/s1/${l}-scout-${nn(n)}.md`)
  need(await task(`s1-cartographer-${l}-briefs`, briefs, 'opus', 'cartographer',
    `MODE: briefs. Your lens: ${l} (config/lenses.md). Brief n must tell its scout to write outputs/s1-discover/scouts/s1-scout-${l}-<nn>.md.`,
    { phase: 'Discovery', effort: 'high' }), `${l}: briefs failed`)
  const scouts = await parallel(briefs.map((b, i) => () => task(`s1-scout-${l}-${nn(i + 1)}`, [`outputs/s1-discover/scouts/s1-scout-${l}-${nn(i + 1)}.md`], 'sonnet', 'scout',
    `Your brief: ${b}. Lens: ${l}.`, { phase: 'Discovery', effort: 'medium' })))
  need(scouts.every(Boolean), `${l}: a scout failed`)  // synthesize only from all 5, else a relaunch would skip the gap forever
  const tech = l === 'tech-unlocks'
  const outs = [`outputs/s1-discover/cartographers/${l}.md`].concat(tech ? ['config/tech_cards.md'] : [])
  return need(await task(`s1-cartographer-${l}`, outs, 'opus', 'cartographer',
    `MODE: synthesize. Your lens: ${l}. Scout files: ${[1, 2, 3, 4, 5].map(n => `outputs/s1-discover/scouts/s1-scout-${l}-${nn(n)}.md`).join(', ')}.${tech ? ' You also replace the stub config/tech_cards.md with 20+ tech cards (TC-01, TC-02, ...).' : ''}`,
    { phase: 'Discovery', effort: 'high' }), `${l}: synthesis failed`)
}

async function seedBranch() {
  if (!SEEDS.length) return true
  const ids = args.seed_card_ids || {}
  need(await task('s2-seed-lead', SEEDS.map(s => `outputs/s2-seeds/${s.id}.md`), 'opus', 'seed-lead',
    `MODE: normalize. Seeds (input -> output, idea-card id, allowed moves):\n${SEEDS.map(s => `- inputs/seeds/${s.id}.md -> outputs/s2-seeds/${s.id}.md, card id ${ids[s.id] || s.id}, allowed: ${s.moves.join(' / ')}`).join('\n')}${args.note ? '\n' + args.note : ''}`,
    { phase: 'Seeds', effort: 'high' }), 'seed lead failed')
  const bd = SEEDS.filter(s => s.moves.includes('break down'))  // "improve" alone means never decompose
  if (!bd.length) return true
  const groups = [0, 1].map(k => bd.filter((_, i) => i % 2 === k)).filter(g => g.length)
  const dec = await parallel(groups.map((g, k) => () => task(`s2-decomposer-${nn(k + 1)}`, g.map(s => `outputs/s2-seeds/decomposed/${s.id}.md`), 'sonnet', 'decomposer',
    `Seeds to decompose: ${g.map(s => `outputs/s2-seeds/${s.id}.md`).join(', ')}.`, { phase: 'Seeds', effort: 'medium' })))
  need(dec.every(Boolean), 'a decomposer failed')
  return need(await task('s2-ingredient-pool', ['outputs/s3-ideate/seed-lane/ingredient_pool.md'], 'opus', 'seed-lead',
    'MODE: pool. Rebuild the pool from every file in outputs/s2-seeds/decomposed/.',
    { phase: 'Seeds', effort: 'medium', force: dec.some(d => !d.skipped) }), 'ingredient pool failed')  // new atoms -> rebuild even if a pool exists
}

const [lensRes, seedRes] = await parallel([() => parallel(LENSES.map(l => () => lens(l))), seedBranch])
return {
  calls, failed, skipped,
  lenses: LENSES.map((l, i) => ({ lens: l, ok: !!(lensRes && lensRes[i]) })),
  seeds_ok: !!seedRes,
}
