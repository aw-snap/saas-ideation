export const meta = {
  name: 'gate',
  description: 'Fable gate review (args.gate = A | B | C | D): writes gates/gate-<X>.md and returns the verdict',
  whenToUse: 'Gate A before launch, Gate B after S1/S2, Gate C after checkpoint H1, Gate D after S8',
  phases: [{ title: 'Gate', model: 'claude-fable-5-1' }],
}
// args: { gate: 'A'|'B'|'C'|'D', files: [paths the gate must read], loop?: number, notes?: string,
//         models?: {fable} (only for a recorded substitution) }
// A gate always runs when launched; the primary session decides whether a gate needs (re)running.

const M = Object.assign({ fable: 'claude-fable-5-1', opus: 'claude-opus-5-5', sonnet: 'claude-sonnet-5' }, args.models || {})
const G = args.gate
if (!['A', 'B', 'C', 'D'].includes(G)) throw new Error('args.gate must be A, B, C or D')
const out = `gates/gate-${G}.md`
const ISSUES = { type: 'array', items: { type: 'object', properties: { severity: { type: 'string', enum: ['blocker', 'major', 'minor'] }, file: { type: 'string' }, problem: { type: 'string' }, fix: { type: 'string' } }, required: ['severity', 'problem'] } }
const base = { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' }, verdict: { type: 'string', enum: ['APPROVED', 'CHANGES'] }, issues: ISSUES, summary: { type: 'string' } }
const extra = G === 'B' ? {
  territories: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, name: { type: 'string' }, computer_centric: { type: 'boolean' } }, required: ['id', 'name', 'computer_centric'] } },
  axes: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, bins: { type: 'array', items: { type: 'string' } } }, required: ['name', 'bins'] } },
} : G === 'D' ? {
  overrides: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, from_rank: { type: 'number' }, to_rank: { type: 'string' }, rationale: { type: 'string' } }, required: ['id', 'rationale'] } },
} : {}
const schema = { type: 'object', properties: Object.assign({}, base, extra), required: ['task_id', 'output_path', 'complete', 'verdict'].concat(G === 'B' ? ['territories', 'axes'] : []) }

const job = {
  A: 'Review the pipeline setup before launch against PROMPT.md (you may read it).',
  B: 'Pick the 9 territories and define the archive map axes from the S1 cartographer files and the seed summaries.',
  C: 'Run the mid-run meta-review: convergence and drift, empty cells, the user\'s reactions turned into directives, and a mutation plan for each of the 4 mutators.',
  D: 'Audit the top 30 after final scoring for rank anomalies, prior-art misses, near-duplicates and missed knock-outs.',
}[G]

phase('Gate')
const r = await agent(`${job}

Files to read (${args.files.length}):
${args.files.map(f => `- ${f}`).join('\n')}
${args.loop ? `\nThis is review loop ${args.loop}. ${args.notes || ''}` : ''}
Task id: gate-${G}. Required output file: ${out} (overwrite it if it exists).
Finish by returning task_id "gate-${G}", output_path "${out}", complete (true only if ${out} is written and its last line is <!-- COMPLETE -->), the verdict, every issue you listed${G === 'B' ? ', the 9 territories and the axes' : G === 'D' ? ', and every override' : ''}.`,
  { label: `gate-${G}`, phase: 'Gate', schema, model: M.fable, effort: 'high', agentType: `gate-${G.toLowerCase()}` })

return { calls: { fable: 1, opus: 0, sonnet: 0 }, failed: r && r.complete ? [] : [`gate-${G}`], result: r }
