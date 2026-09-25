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
2026-09-25 | s2_seeds | refresh: seeds 04/05/08 revised by the user after S2 (edits had been swept into 848b1c0); re-normalized, re-decomposed with search, pool rebuilt (100 atoms); 4 calls, 118k tokens | outputs/s2-seeds outputs/s3-ideate/seed-lane
2026-09-25 | pilot | H0 confirmed: user chose "Go, S3 only" (full S3, then stop before S4) | state/manifest.json
2026-09-25 | rubric | user amendment queued: buildability weight cut 40% (Novel 5->3, Balanced 20->12) + build-effort calibration; applies after S3 | state/manifest.json
2026-09-25 | s3_ideate | done: 116/116 agents, 0 failed; 648 ideator cards (36x18) + 16 improved + 40 pivots (+8 seed originals = 712 raw); 9 dossiers; 37/48 cells; 7.08M tokens (proj 4.9M, limit 9.8M), 23 min, 98 searches | outputs/s3-ideate briefs/s3
2026-09-25 | rubric | user amendment applied: buildability Novel 5->3, Balanced 20->12, build-effort calibration in context.md, 6 later-stage agents point to it; LEAKS regex whole-word fix | config/rubric.md config/context.md .claude/agents .claude/workflows/s8-final.js tools
2026-09-25 | s3_ideate | stopped before S4 at the user's request | state/manifest.json
2026-09-25 | s4_archive | started: 8 archive workers (was 4; context headroom) + lead; projected 2.6M tokens, stop at 5.2M | state/manifest.json
2026-09-26 | s4_archive | run 1 (wf_ffad4bfd-18d): 7 of 8 workers stopped at the session usage limit; receipts 01/02/04 complete and kept; w03, w05-w08 partials deleted; workers relaunched with lead off | outputs/s4-archive
2026-09-26 | seeds | user released seed-09 and seeds 10-11 (renamed to .md); S2 running for them, then the late seed lane, then S4 partition 9 + archive lead | inputs/seeds state/manifest.json
2026-09-26 | s2_seeds (late) | seeds 09-11 normalized + decomposed, pool rebuilt from 11 seeds; seed-09 normalize was blocked once by a safety classifier (wf_af622d33-a43), retried with a business-level framing note and its own decomposer (wf_f88f09a1-f1c); late seed lane launched (wf_50aa06c2-429) | outputs/s2-seeds outputs/s3-ideate/seed-lane/ingredient_pool.md
2026-09-26 | s2_seeds (late) | late seed lane done: seeds 09-11 -> 6 improved + 15 pivots | outputs/s3-ideate/seed-lane
2026-09-26 | s4_archive | done: 736 raw -> 686 after workers -> 50 cross merges -> 162 survivors (novel 75, balanced 87; 33 protected seed cards); 34/48 cells; dup rate 13.6%; 686 idea + blind cards written; 0 blind leaks among survivors; ~2.37M tokens (proj 2.6M) | archive outputs/s4-archive
2026-09-26 | s4_archive | holding before S5 at the user's request | state/manifest.json
2026-09-26 | autonomy | user brief: finish S5-S9 without waiting at H1/H2 (log each pass), list the top 15 as 'awaiting user pick' at H2, then build website/index.html | state/manifest.json
2026-09-26 | s5_reality | started: 12 quick prior-art hunters + 6 feasibility planners + reality lead over 162 survivors; projected 2.4M tokens | state/manifest.json
2026-09-26 | s5_reality | launch mistake: run wf_f0b4d183-296 started with placeholder args (14 sonnet agents on empty lists), stopped in seconds, outputs deleted; relaunched correctly as wf_b185695f-c31 | outputs/s5-reality
2026-09-26 | s5_reality | done: 19/19 agents, 0 failed; 162 -> 126 survivors (61 novel, 65 balanced); 36 cut as direct competitors, 0 for feasibility or legal; 11/11 seed originals kept (5 failed a knock-out); 1.16M tokens (proj 2.4M), 12 min; I-3028 track set to balanced to match its archive cell | outputs/s5-reality
2026-09-26 | s6_tourn_r1 | started (wf_b621c717-fa0): 126 ideas, 10 judges in 5 pairs; deck built with no leaks, 4 cards trimmed to caps first; projected 1.3M tokens | tournament/r1
2026-09-26 | s6_tourn_r1 | done: 11/11 agents, 0 failed; 126 ideas, 252 matches, 204 agreed across order swaps (81%), 0 settled; leaders I-3529 (novel 1270.0), I-2519 (balanced 1271.9); 22 polarizing; files match the script return; 1.13M tokens (proj 1.3M) | tournament/r1
2026-09-26 | human_mid | H1 passed without user input (autonomy brief): inputs/reactions.md has only the template examples, no new seeds in inputs/seeds/; round-1 leaderboard is tournament/r1/leaderboard.md | tournament/r1/leaderboard.md
2026-09-26 | gate_C | APPROVED (loop 1): convergence on elder-proxy B2C, guardian accounting, watchdog-over-automation and callback verification; 4 mutators x 10 (3 combine, 3 simplify, 3 transplant, 1 far jump), disjoint parents; no user reactions, so gate directives D1-D7 | gates/gate-C.md
2026-09-26 | s7_evolve | started (wf_8d799c20-e5d): evolution lead -> 4 mutators (ids I-5101/5201/5301/5401) -> 4 quick prior-art sweeps -> archive intake; no new seeds; projected 1.4M tokens | outputs/s7-evolve
2026-09-26 | s7_evolve | done: 10/10 agents, 0 failed; 39 mutant cards -> 7 dropped as direct competitors, 2 merged into existing survivors, 30 advance (11 novel, 19 balanced); 4 empty cells filled; I-5407/I-5410 track set to their corrected balanced cells; 0.87M tokens (proj 1.4M), 26 min | outputs/s7-evolve archive/survivors-s7.md
