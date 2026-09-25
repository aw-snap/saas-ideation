export const meta = {
  name: 's3-ideate',
  description: 'S3 ideation: per-territory pain dossiers, 4 ideators x 3 rounds per territory, and the seed lane (improvers, pivoters)',
  whenToUse: 'Pilot with args.territories = ["T1"] and seed_lane false, then the full run with all 9 territories',
  phases: [
    { title: 'Pain', detail: 'territory lead briefs -> 2 pain miners -> dossier' },
    { title: 'Ideate', detail: 'round 1 solo divergence -> round 2 cross-pollination -> round 3 constraint remix' },
    { title: 'Seed lane', detail: '2 improvers (every seed) + 2 pivoters (seeds split)' },
  ],
}
// args: { skip, territories: ['T1', ...] (ideate these), assignments: {ideatorId: {territory, track, persona,
//         cross_territory, tech_card, constraints}} (config/assignments.json .ideators), seeds: [{id, moves}],
//         pool_exists: bool, seed_lane: bool, run_seed, models? }

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

const A = args.assignments
const ideators = Object.keys(A).filter(id => args.territories.includes(A[id].territory)).sort()
const dossierPath = t => `outputs/s3-ideate/pain/${t}-dossier.md`

async function pain(t) {
  const briefs = [1, 2].map(n => `briefs/s3/${t}-pain-${nn(n)}.md`)
  need(await task(`s3-lead-${t}-briefs`, briefs, 'opus', 'territory-lead',
    `MODE: briefs. Territory ${t} (its section in gates/gate-B.md). Brief n must tell its miner to write outputs/s3-ideate/pain/${t}-<nn>.md.`,
    { phase: 'Pain', effort: 'high' }), `${t}: briefs failed`)
  const miners = await parallel([1, 2].map(n => () => task(`s3-pain-${t}-${nn(n)}`, [`outputs/s3-ideate/pain/${t}-${nn(n)}.md`], 'sonnet', 'pain-miner',
    `Your brief: ${briefs[n - 1]}. Territory ${t}.`, { phase: 'Pain', effort: 'medium' })))
  need(miners.every(Boolean), `${t}: a pain miner failed`)
  return need(await task(`s3-lead-${t}-dossier`, [dossierPath(t)], 'opus', 'territory-lead',
    `MODE: dossier. Territory ${t}. Merge outputs/s3-ideate/pain/${t}-01.md and ${t}-02.md.`,
    { phase: 'Pain', effort: 'high' }), `${t}: dossier failed`)
}
// Every dossier an ideator will read (its own + its round-2 partner) starts now; ideators wait only on theirs.
const needT = [...new Set(ideators.flatMap(id => [A[id].territory, A[id].cross_territory]))].sort()
const dossier = Object.fromEntries(needT.map(t => [t, pain(t).catch(e => { log(e.message); return null })]))

async function ideate(id) {
  const a = A[id]
  const out = r => `outputs/s3-ideate/ideas/${id}-r${r}.md`
  const base = `Ideator ${id}. Persona: ${a.persona} in config/personas.json. Territory ${a.territory}: its section in gates/gate-B.md and its dossier ${dossierPath(a.territory)}. Track: ${a.track}. Card ids: ${id}-r<round>#01, #02, ...`
  need(await dossier[a.territory], `${id}: own dossier missing`)
  need(await task(`${id}-r1`, [out(1)], 'sonnet', 'ideator',
    `ROUND 1 (solo divergence). ${base}\nIn this round do NOT read inputs/seeds/, outputs/s2-seeds/ or outputs/s3-ideate/seed-lane/.`,
    { phase: 'Ideate', effort: 'high' }), `${id}: r1 failed`)
  need(await dossier[a.cross_territory], `${id}: partner dossier ${a.cross_territory} missing`)
  const pool = args.pool_exists ? 'the seed ingredient pool outputs/s3-ideate/seed-lane/ingredient_pool.md (use 1-2 atoms where they genuinely help)' : 'no seed pool (none exists this run)'
  need(await task(`${id}-r2`, [out(2)], 'sonnet', 'ideator',
    `ROUND 2 (cross-pollination). ${base}\nAlso read: the ${a.cross_territory} dossier ${dossierPath(a.cross_territory)}; tech card ${a.tech_card} in config/tech_cards.md; ${pool}. Read your round-1 file ${out(1)} first and repeat none of it.`,
    { phase: 'Ideate', effort: 'high' }), `${id}: r2 failed`)
  return need(await task(`${id}-r3`, [out(3)], 'sonnet', 'ideator',
    `ROUND 3 (constraint remix). ${base}\nYour constraints: ${a.constraints.join(' and ')} in config/constraint_deck.md. ${args.pool_exists ? 'You may use atoms from outputs/s3-ideate/seed-lane/ingredient_pool.md.' : ''} Read ${out(1)} and ${out(2)} first and repeat none of them.`,
    { phase: 'Ideate', effort: 'high' }), `${id}: r3 failed`)
}

async function seedLane() {
  if (!args.seed_lane) return true
  const S = args.seeds || []
  const imp = S.filter(s => s.moves.includes('improve'))
  const piv = S.filter(s => s.moves.includes('pivot'))
  const jobs = []
  // Both improvers take every seed: two independent improvements per seed, and the report keeps the best.
  if (imp.length) [1, 2].forEach(k => jobs.push(() => task(`s3-improver-${nn(k)}`, [`outputs/s3-ideate/seed-lane/s3-improver-${nn(k)}.md`], 'sonnet', 'improver',
    `Seeds: ${imp.map((s, i) => `${s.id} (card id s3-improver-${nn(k)}#${nn(i + 1)})`).join(', ')}.`, { phase: 'Seed lane', effort: 'high' })))
  // Pivoters split the seeds: about 5 pivots per seed in total.
  ;[0, 1].map(k => piv.filter((_, i) => i % 2 === k)).forEach((g, k) => g.length && jobs.push(() => task(`s3-pivoter-${nn(k + 1)}`, [`outputs/s3-ideate/seed-lane/s3-pivoter-${nn(k + 1)}.md`], 'sonnet', 'pivoter',
    `Seeds: ${g.map(s => s.id).join(', ')}. Card ids: s3-pivoter-${nn(k + 1)}#01, #02, ... in order.`, { phase: 'Seed lane', effort: 'high' })))
  const r = await parallel(jobs)
  return r.every(Boolean)
}

const [ideas, lane] = await parallel([() => parallel(ideators.map(id => () => ideate(id))), seedLane])
const dossiers = await Promise.all(needT.map(t => dossier[t]))  // never return while a pain chain is still running
return {
  calls, failed, skipped,
  ideators: ideators.length, ideators_done: (ideas || []).filter(Boolean).length,
  dossiers: Object.fromEntries(needT.map((t, i) => [t, !!dossiers[i]])),
  seed_lane_ok: !!lane,
}
