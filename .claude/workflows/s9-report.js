export const meta = {
  name: 's9-report',
  description: 'S9 report: the synthesis editor writes report/REPORT.md (PROMPT §12) and report/leaderboard.csv from the compiled scorecards',
  phases: [{ title: 'Report', model: 'claude-opus-5-5' }],
}
// args: { skip, calls: {fable, opus, sonnet} (from state/manifest.json), models? }
// The primary session first compiles report/scorecards.json from the stage outputs.

const M = Object.assign({ fable: 'claude-fable-5-1', opus: 'claude-opus-5-5', sonnet: 'claude-sonnet-5' }, args.models || {})
const SKIP = new Set(args.skip || [])
const outs = ['report/REPORT.md']
if (outs.every(f => SKIP.has(f))) return { calls: { fable: 0, opus: 0, sonnet: 0 }, failed: [], skipped: ['s9-synthesis-editor'] }

phase('Report')
const RESULT = { type: 'object', properties: { task_id: { type: 'string' }, output_path: { type: 'string' }, complete: { type: 'boolean' }, summary: { type: 'string' } }, required: ['task_id', 'output_path', 'complete'] }
const r = await agent(`Write the final report.
Inputs: report/scorecards.json (compiled scorecards for every finalist and every seed-derived card); gates/gate-D.md (apply and cite its overrides); archive/ideas/<id>.md (full cards, including lineage); outputs/s5-reality/ and outputs/s7-evolve/prior-art/ (quick prior art and feasibility); outputs/s8-final/prior-art-deep/ and outputs/s8-final/red-team/; outputs/s2-seeds/ (seed cards and atoms); outputs/s3-ideate/seed-lane/ and outputs/s7-evolve/ (seed variants); archive/map.md and archive/stats.md; outputs/s5-reality/survivors.md (knock-outs).
Agent calls per tier, for section 7: fable ${args.calls.fable}, opus ${args.calls.opus}, sonnet ${args.calls.sonnet}.

Task id: s9-synthesis-editor
Required output file(s): report/leaderboard.csv (write it first), report/REPORT.md (last line <!-- COMPLETE -->)
Finish by returning task_id "s9-synthesis-editor", output_path "report/REPORT.md", complete (true only if both files are written and REPORT.md ends with <!-- COMPLETE -->), and a one-line summary.`,
  { label: 's9-synthesis-editor', phase: 'Report', schema: RESULT, model: M.opus, effort: 'high', agentType: 'synthesis-editor' })

return { calls: { fable: 0, opus: 1, sonnet: 0 }, failed: r && r.complete ? [] : ['s9-synthesis-editor'], skipped: [], result: r }
