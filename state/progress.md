# Progress log
<!-- One line per event: ISO date | stage | what happened | files -->
2026-09-25 | setup | build window = 48h hackathon (user); fable/opus/sonnet model ids verified by a 3-call smoke test | state/manifest.json
2026-09-25 | setup | seed-06 appeared in inputs/seeds during setup; 6 seeds at launch | inputs/seeds/
2026-09-25 | setup | wrote 24 agent defs, 6 config files, 9 workflow scripts, tools/pipe.py, tools/dryrun.mjs; dry run + pipe selftest pass | .claude/agents .claude/workflows config tools
2026-09-25 | setup | user added seed-07 (Jev System-1 model) before launch; Jev claims marked unverified for the decomposer's prior-art search | inputs/seeds/seed-07.md
2026-09-25 | setup | user added seed-08 (audio-to-audio speech enhancer) before launch | inputs/seeds/seed-08.md
2026-09-25 | gate_A | loop 1 CHANGES (3 majors: blind-leak guard, seed glob, tournament JSON verification) -> fixed; loop 2 APPROVED with 5 minors, 4 fixed, pivoter load accepted | gates/gate-A.md gates/gate-A-loop1.md tools/pipe.py
