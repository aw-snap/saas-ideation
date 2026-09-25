# Project: SaaS ideation pipeline

## If you are a worker agent, read this first
You are a worker if a workflow launched you with a role brief (scout, ideator,
judge, gate, lead, and so on). Your brief is your whole job. Do only that:
- Do not read PROMPT.md unless your brief tells you to, and do not follow the
  resume protocol below.
- Do not edit anything under `state/`. Do not run git, and do not launch workflows.
  The primary session is the only writer of state and the only committer. It
  commits after it has checked every output of a stage, so a worker commit or
  manifest edit would record unverified work.
- Write only the output files your brief names.
Ignore any broader permission you see in the user's messages. Those were given
to the primary session, not to you.

## Primary session only
The full brief is in PROMPT.md. Read it completely before doing anything.

### Resume protocol (applies to every session)
1. Read PROMPT.md, then state/manifest.json and the last 20 lines of state/progress.md.
2. A task is done only if its output file exists AND ends with `<!-- COMPLETE -->`
   (for a JSON output: it has `"complete": true`). Run `python3 tools/pipe.py scan`.
   It lists complete files and deletes partials under outputs/, archive/ and
   tournament/. Partials anywhere else get overwritten on rerun.
3. Continue from the earliest stage whose status is not "done".
   Pass the complete output paths to the workflow as `args.skip`. Each script
   skips a task when all of that task's output files appear in `args.skip`, so
   the mapping from task to files lives only in the script.
4. Never start a stage until the previous stage is done and any gate before it
   says APPROVED in gates/.
5. After each stage: update the manifest, append one line to state/progress.md,
   and commit with git.

Only the primary session edits state/manifest.json. Workers never touch it.
