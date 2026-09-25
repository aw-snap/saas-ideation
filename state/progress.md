# Progress log
<!-- One line per event: ISO date | stage | what happened | files -->
2026-09-25 | setup | build window = 48h hackathon (user); fable/opus/sonnet model ids verified by a 3-call smoke test | state/manifest.json
2026-09-25 | setup | seed-06 appeared in inputs/seeds during setup; 6 seeds at launch | inputs/seeds/
2026-09-25 | setup | wrote 24 agent defs, 6 config files, 9 workflow scripts, tools/pipe.py, tools/dryrun.mjs; dry run + pipe selftest pass | .claude/agents .claude/workflows config tools
2026-09-25 | setup | user added seed-07 (Jev System-1 model) before launch; Jev claims marked unverified for the decomposer's prior-art search | inputs/seeds/seed-07.md
2026-09-25 | setup | user added seed-08 (audio-to-audio speech enhancer) before launch | inputs/seeds/seed-08.md
2026-09-25 | gate_A | loop 1 CHANGES (3 majors: blind-leak guard, seed glob, tournament JSON verification) -> fixed; loop 2 APPROVED with 5 minors, 4 fixed, pivoter load accepted | gates/gate-A.md gates/gate-A-loop1.md tools/pipe.py
2026-09-25 | s1_discover+s2_seeds | done: 32/32 tasks complete; 4 cartographer files (28-31 candidates each, 59-73 links), 38 tech cards, 8 seed cards, 8 decomposed, 85 pool atoms; 1.12M subagent tokens, 11 min | outputs/s1-discover outputs/s2-seeds config/tech_cards.md
2026-09-25 | s1_discover | WARNING: session WebSearch cap (200) exhausted mid-S1; 8 scouts cut short (WebFetch fallback, gaps marked); decomposer prior-art has no search and no URLs | outputs/s2-seeds/decomposed
2026-09-25 | setup | user approved CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION=1500 in .claude/settings.json (needs a session restart) | .claude/settings.json
2026-09-25 | gate_B | APPROVED: 9 territories (all computer-centric), axes buyer x track x capability(6); seed wall checked (only scope exclusions mention the seed lane) | gates/gate-B.md
2026-09-25 | assign | config/assignments.json written from run_seed 498282322: 36 ideators, 38 tech cards, 24 constraints | config/assignments.json
2026-09-25 | pilot | NEXT: restart the session (search cap 1500), then run the pilot: s3-ideate with territories [T1], seed_lane false | state/manifest.json
2026-09-25 | pilot | done: 32/32 agents, 0 failed; 72 cards from 4 T1 ideators (18 each), dossiers T1 T3 T4 T8 T9; 1.52M subagent tokens, 16 min, 149 searches; full S3 projected ~4.9M | outputs/s3-ideate briefs/s3
2026-09-25 | pilot | H0: waiting for user to confirm the full run | state/manifest.json
2026-09-25 | pilot | H0 answer: user chose "Pause here"; pipeline paused before full S3 | state/manifest.json
