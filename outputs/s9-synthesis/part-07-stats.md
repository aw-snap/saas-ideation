## 7. Map coverage and run stats

Sources: [archive/map.md](../archive/map.md), [archive/stats.md](../archive/stats.md) and `state/manifest.json`. The tournament figures also appear in [tournament/r2/leaderboard.md](../tournament/r2/leaderboard.md).

### Map coverage

The map has 48 cells: 4 buyers × 6 capabilities × 2 tracks ([gates/gate-B.md](../gates/gate-B.md)).

- **After S7, 38 of 48 cells are occupied**, 19 per track. The live pool is 156 cards: 72 novel and 84 balanced, with 130 competing and 26 protected seed cards.
- **How coverage changed:**
  - S3 raw ideas filled 37 of 48 cells.
  - After the S4 archive, 34 of 48 were occupied.
  - S7 filled four cells for the first time: novel B2C\|local-private, novel B2C\|drafter-dialogue, balanced B2C\|agent-infra and balanced prosumer\|agent-infra.
- **The 10 empty cells** are the agents-buyer column, minus agent-infra, in both tracks:
  - Novel: agents\|local-private, agents\|screen-agent, agents\|verifier, agents\|extractor, agents\|drafter-dialogue.
  - Balanced: agents\|local-private, agents\|screen-agent, agents\|verifier, agents\|extractor, agents\|drafter-dialogue.
  - These cells are empty by design. Capability precedence puts every agents-as-customer idea in agent-infra (bin 1).
- **The final 30 cover 26 of the 38 occupied cells** (14 novel, 12 balanced). Section 4 lists the uncovered regions.
- **Thin cells.** Eight cells have only 2 live cards. Most were thinned by the S5 knock-outs:
  - novel: B2B\|screen-agent, B2C\|local-private, B2C\|screen-agent, B2C\|verifier
  - balanced: B2B\|screen-agent, B2C\|agent-infra, B2C\|local-private, prosumer\|agent-infra
- **Crowded archive cells.** The biggest cells by archive count now hold few live cards:
  - balanced B2B\|verifier: 72 archived, 6 live
  - balanced B2B\|screen-agent: 68 archived, 2 live
  - novel B2B\|screen-agent: 65 archived, 2 live

### Agent calls per tier

The totals are compared with the 3x slot budget in `state/manifest.json` `budget_caps_3x`.

| Tier | Calls | 3x budget | Used |
|---|---|---|---|
| fable | 7 | 12 | 58% |
| opus | 51 | 60 | 85% |
| sonnet | 261 | 360 | 72.5% |

The opus figure of 51 includes this report's 11 calls: the first single-agent attempt, 6 part agents, and 4 part agents relaunched after the session usage limit stopped them. The manifest records the same 11 and 51.

### Calls and subagent tokens by stage

Calls come from `agent_calls_by_stage`, with `s9_report` at 11 opus. Tokens come from each stage's `subagent_tokens` in the manifest. "n.r." means the manifest records no token figure for that stage.

| Stage | fable | opus | sonnet | Subagent tokens |
|---|---|---|---|---|
| smoke | 1 | 1 | 1 | n.r. |
| gate_A (2 loops) | 2 | 0 | 0 | n.r. |
| s1_discover + s2_seeds | 0 | 10 | 22 | n.r. |
| gate_B | 1 | 0 | 0 | n.r. |
| pilot_s3_T1 | 0 | 10 | 22 | 1,515,946 |
| seed_refresh_04_05_08 | 0 | 2 | 2 | n.r. |
| s3_ideate | 0 | 8 | 108 | 7,081,350 |
| seeds_late_09_11 | 0 | 3 | 6 | 305,206 |
| s4_archive | 0 | 1 | 14 | 2,371,092 |
| s5_aborted_launch | 0 | 0 | 14 | n.r. |
| s5_reality | 0 | 1 | 18 | 1,155,283 |
| s6_tourn_r1 | 0 | 1 | 10 | 1,125,395 |
| gate_C | 1 | 0 | 0 | 103,791 |
| s7_evolve | 0 | 2 | 8 | 867,313 |
| s6_tourn_r2 | 0 | 1 | 10 | 1,376,733 |
| s8_final | 0 | 0 | 26 | 1,091,551 |
| gate_D (2 loops) | 2 | 0 | 0 | 369,429 (253,419 + 116,010) |
| s9_report | 0 | 11 | 0 | n.r. |
| **Total** | **7** | **51** | **261** | **17,363,089 recorded** |

Notes on the token figures:

- S3 was projected at 4.9M tokens and came in at 7.08M, under its 9.8M stop threshold. The manifest explains the miss: per-agent cost matched the pilot, but the projection split pilot cost by total input including cache reads, which underweighted the ideators.
- The first S4 run used 1.22M tokens before the usage limit stopped it (see Run incidents). The manifest does not say whether the S4 figure above includes that run.
- No token figures are recorded for S1, S2, the seed refresh, the smoke test, gates A and B, the aborted S5 launch or S9. The true total is therefore higher than 17.36M.

### Duplicate rates

Source: [archive/stats.md](../archive/stats.md).

| Source | Raw cards | Merged | Dup rate |
|---|---|---|---|
| S3 round 1 | 288 | 75 (35 within partition, 40 across) | 26.0% |
| S3 round 2 | 180 | 15 | 8.3% |
| S3 round 3 | 180 | 10 | 5.6% |
| Seed lane | 88 | 0 | 0% |
| S7 evolve | 39 | 2 (both against existing survivors) | 5.1% |
| **All passes** | **775** | **102** | **13.2%** |

- At S4, 736 raw cards were cut to 636 placed cards: 50 were merged inside partitions and 50 across them, for a rate of 13.6%. By partition, the rate ranged from 0% (w09, the late seed lane) and 6.6% (w01) up to 19.4% (w03).
- Round 1 carries most of the redundancy. Different territory lanes independently landed on the same obvious ideas, such as nightly eligibility sweeps, pawn police reports and charity registration. Rounds 2 and 3 were steered away from the archive.
- S7 lost more cards to prior art than to duplication. Its direct-competitor rate was 17.9% (7 of 39) against a 5.1% duplicate rate. The simplify operator caused the most losses, 3 of 9.

### Knock-out counts

| Stage | Knocked out | Reason | Pool after |
|---|---|---|---|
| S5 reality check | 36 | direct competitor 36, feasibility 0, legal 0 | 162 → 126 |
| S7 intake | 7 dropped + 2 merged | direct competitor 7 (I-5107, I-5202, I-5204, I-5210, I-5309, I-5405, I-5408); merged I-5304 into I-3093 and I-5303 into I-1062 | 39 new → 30 survivors; pool 156 |
| S8 deep prior art | 14 | direct competitor: I-1042, I-1050, I-1070, I-1525, I-2038, I-2522, I-2536, I-3026, I-3050, I-3537, I-3555, I-4563, I-5109, I-5410 | 60 finalists → 46 eligible |
| Gate D | 2 | near-duplicate: I-1019 (subset of I-5101) and I-2514 (same mechanism as I-3093) | backfilled by I-5207 and I-3541 |

- **S5 verdicts.** The S5 hunters returned 105 adjacent-exists, 40 direct-competitor and 15 clear. Feasibility came back 108 yes, 52 risky and 2 no. Five protected seed originals were kept even though they failed. The feasibility knock-out had been loosened by the 2026-09-25 build-effort amendment ([config/context.md](../config/context.md)).
- **S8 rubric.** Of the 60 finalists, 11 reached tier B and none reached tier A or S. The other 49 fell below 65. See "Read this first" for how the final 30 were built anyway.

### Tournament stats

| Round | Ideas | Matches | Order-swap agreement | Polarizing (novel / balanced) | Track leaders |
|---|---|---|---|---|---|
| Round 1 (S6) | 126 | 252 | 81.0% (204 agreed) | 11 / 11 | I-3529 (1270.0), I-2519 (1271.9) |
| Round 2 (after S7) | 156 | 312 | 80.8% (252 agreed) | 13 / 12 | I-2067 (1289.5), I-2061 (1281.9) |

- Neither round needed a settling match.
- In round 2, the hand-copied `prior_pairs` argument dropped 2 of the 252 round-1 pairs (I-2069 vs I-2053, I-3096 vs I-2053). Neither pair was re-paired, so the round is unaffected.
- Gate C noted that an Elo gap of about 30 is noise at 4 matches per idea.

### Web searches

- About **725 of the 1,500** per-session cap were used.
- S1 hit the original 200 cap after 194 successful searches. Late scouts fell back on WebFetch, and decomposer prior art was knowledge-only. The user approved raising the cap to 1,500.
- Recorded per stage:
  - pilot miners: 149
  - S3: 98
  - aborted S5 launch: 20
  - S5: 195
  - S7: 48
- The manifest's count note was last updated before S8 ("~780 left for S8"). The S8 deep hunts and the Gate D web checks may therefore not be included in the 725 `[unverified]`.

### Run incidents

- **S4 hit the session usage limit.** In run wf_ffad4bfd-18d, 7 of 8 archive workers stopped at the limit after 1.22M tokens.
  - Receipts 01, 02 and 04 were complete and were kept.
  - The partial files from workers 03 and 05–08 were deleted, and those workers were relaunched in run wf_1f736252-1bf.
- **S2 seed-09 normalize was blocked by a safety classifier.** Run wf_af622d33-a43 was blocked. The step was retried with a business-level framing and succeeded (wf_f88f09a1-f1c).
- **An S5 launch was aborted.** Run wf_f0b4d183-296 was launched by mistake with a placeholder survivors argument. It was stopped within seconds, after 14 Sonnet agents had started on empty lists, and their outputs were deleted. The real S5 run was wf_b185695f-c31.
- **S9 was written in parts.** A subagent write guard blocked the single-file report, and a classifier stopped the first draft partway. The report was then written as part files. The session usage limit stopped 4 of the 6 part agents, which were relaunched after the reset, so S9 used 11 opus calls in total.

### Human checkpoints

- **H1 (after tournament round 1)** was passed on 2026-09-26 without user input. [inputs/reactions.md](../inputs/reactions.md) held only template examples, and there were no new seeds, since seeds 01–11 were all processed.
- **H2 (final pick)** is passed the same way. The primary session lists the top 15 in `report/FINAL_PICK.md` as "awaiting user pick" and does not choose the 3.
- Both passes follow the user's 2026-09-26 autonomy instruction to finish S5–S9 without waiting at H1 or H2.

<!-- COMPLETE -->
