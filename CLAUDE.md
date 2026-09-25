# Project: SaaS ideation pipeline

The full brief is in PROMPT.md. Read it completely before doing anything.

## Resume protocol (applies to every session)
1. Read PROMPT.md, then state/manifest.json and the last 20 lines of state/progress.md.
2. A task is done only if its output file exists AND ends with `<!-- COMPLETE -->`.
   Delete partial files and rerun those tasks.
3. Continue from the earliest stage whose status is not "done".
   Pass completed task ids to the workflow as `args.skip`.
4. Never start a stage until the previous stage is done and any gate before it
   says APPROVED in gates/.
5. After each stage: update the manifest, append one line to state/progress.md,
   and commit with git.

Only the primary session edits state/manifest.json. Workers never touch it.
