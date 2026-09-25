VERDICT: APPROVED

# Gate D — final audit of the top 30 (loop 2)

Loop 1 (gates/gate-D-loop1.md, CHANGES) asked for two drops. Both are applied in report/scorecards.json (`gate_d_drops`), ranks 29 and 30 are filled by I-5207 and I-3541, every finalist now carries `red_team`, `rubric_spread`, `borderline` and `rank_track`, and the five `[unverified]` prior-art claims were web-checked (outputs/s8-final/gate-d-verification.md). This file supersedes loop 1 and carries forward every finding that still applies. No web tools: any competitor claim not from a hunter file or the verification file is marked `[unverified]`.

Inputs read this loop: report/scorecards.json (all 60 finalists, top30 list), gate-d-verification.md, config/rubric.md, config/context.md, archive/ideas/I-5207.md, archive/ideas/I-3541.md, prior-art-deep s8-hunter-04 and s8-hunter-06, red-team s8-redteam-02 and s8-redteam-04, plus the loop-1 file.

## Overrides

| id | original rank | new rank | rationale |
|---|---|---|---|
| none | — | — | No new overrides. The two loop-1 drops (I-1019, I-2514) are applied and recorded in scorecards.json; the backfills I-5207 (rank 29) and I-3541 (rank 30) pass audit (see A.7, B.7, C.7, C.8). |

## Audit of the two backfills

**I-5207 Matter-Billed Agent Run Meter (rank 29, balanced, Elo 1214.2, rubric 59.2, below bar, late lane).** Prior art adjacent: Keito attributes AI cost to client/matter for the same buyer but has no live hard-cap (hunter fetched and confirmed); llm0/LiteLLM hard-cap via proxy but only LLM calls and not matter-billed. Red team "serious" (Keito can add a cap). Core loop is a metering proxy plus a cap and a per-matter rollup: ordinary engineering, whole demo works end to end. No legal or safety problem. Its why-now line is `[unverified]` on its own card. Eligible and correctly placed.

**I-3541 Lay of the Land (rank 30, balanced, Elo 1208.8, rubric 59.5, below bar, seed-03 original).** Prior art adjacent: AgriWebb and Farmbrite (GPS field notes, manual entry) and ARUtility (AR utility overlay for professional locators); nothing combines narration-to-map extraction with confidence tagging. Red team "serious": phone-GPS AR pins are only accurate to a few metres. Not a build blocker: speech-to-GPS alignment plus LLM extraction is ordinary, and the AR demo moment runs on GPS-and-compass anchoring at that accuracy, with the red team's flat-map fallback acceptable for v1. Its sibling I-3046 (seed-improved, rank 23 in track) is outside the set, so no in-set duplicate. Eligible and correctly placed.

## Findings that do not change rank

### A. Rank anomalies

1. **The 65 band cliff inverts Elo inside the novel track.** Six ideas sit within one point of the bar (I-2067 64.5, I-1516 64.9, I-1564 64.6, I-2053 64.4, I-4525 64.2, I-3095 64.1) and all rank below I-2550 (65.3), the lowest-Elo novel pick (1209.5, 15th of 15 in track). The four highest-Elo novel ideas (I-2067 at 1289.5 is #1 in the whole tournament, I-1001, I-4525, I-3529) rank 12-15 overall. The rule was applied as written and the deviation from PROMPT S11 is logged. Now resolved as data: `rank_track` and `borderline: true` are in scorecards.json for all six. The report must show rank-in-track beside overall rank and label 64-65 "borderline", not "drop".
2. **I-2067 stays below bar despite being the Elo champion.** ShieldsOn is verified to exist with real-time senior scam detection and one-tap family alert; its site does not say on-device. Borderline direct. I-2067's remaining claim is on-device processing plus the check against the family's own known facts. The report should name ShieldsOn as the closest competitor. Placement is defensible.
3. **Rubric-polarizing ideas the consistency flag misses** (now visible as `rubric_spread`): I-3093 16.1 (totals [66.9, 69.2, 53.1]; the median lands in band B, the mean of 63.1 would not), I-2559 11.7, I-1516 9.7, I-2052 9.7, I-1508 8.3, I-3529 8.1. Treat these band placements as soft; the report should print the spread.
4. **Round-2-only polarization.** I-4501 (rank 5) and I-2053 were polarizing in round 2 alone (consistency 50 in r2); the merged figure in scorecards.json (62, 75) clears the flag. Minor.
5. **Late-lane ideas have half the evidence.** I-5101 (rank 9), I-5203 (rank 28) and now I-5207 (rank 29) are S7 mutations: `elo_r1: null`, `feasibility: null` (no S5 audit), 4 round-2 matches from a 1200 start. Mark all three in the report. I-5101's card never says how a bank statement reaches the parent's device without a cloud login (red team); its why-now is `[unverified]` on its own card.
6. **Red-team severities are now in scorecards.json.** I-4051 (rank 3) is the only top-30 idea tagged "fatal" (see B.1). "Serious": I-1001, I-1063, I-1508, I-1516, I-1534, I-1564, I-2052, I-2053, I-2067, I-2519, I-2547, I-2559, I-3093, I-3095, I-3529, I-3541, I-4005, I-4501, I-4511, I-4525, I-4546, I-5203, I-5207, I-6001. "Manageable": I-1022, I-2061, I-2550, I-3088, I-5101. Report should carry severity and fix per idea.
7. **Track balance** is 15 novel / 15 balanced after the backfill. B-band split 5 novel / 6 balanced. Ranks 12-30 (below bar) are 10 novel / 9 balanced. Ordering checked: band then round-2 Elo, consistent for all 30.

### B. Legal, safety, and missed knock-outs

1. **I-4051 (rank 3): vendor-terms risk, not a knock-out.** Red team: continuous automated login to CDK/Reynolds is a likely terms-of-service breach. The Authenticom v. CDK/Reynolds litigation was about exactly this pattern and both vendors blocked third-party credentialed access `[unverified current status]`; both sell certified-integration programs (Fortellis, RCI) `[unverified]`. The exposure is contractual and buyer-borne, the demo runs on a mock DMS, so it stays in. The pitch needs a "dealer owns its data / certified path" answer and the report must carry the fatal tag.
2. **I-1534:** live peer-to-peer call transcription with no consent step; all-party-consent states apply. Fix: recorded announcement plus per-state consent capture. Not a knock-out.
3. **I-2067, I-5101:** on-device transcription of a parent's incoming calls is legally grey in all-party-consent states even without storage `[unverified]`; Google ships the same on Pixel, which suggests a workable position. Add a disclosure line.
4. **I-4005:** statute-citing rebuttal letters edge toward unauthorized practice of law; attorney-reviewed templates fix it.
5. **I-2547, I-4511, I-2559, I-4546, I-2519:** storing a third party's credentials and automating bank, Medicaid, insurer and IRS PTIN portals hits portal terms, MFA and bot detection. Mock-portal demos are fine; the report should say real-world filing needs official channels where they exist (Plaid-style aggregation under CFPB 1033) `[unverified]`.
6. **I-4511 design flaw:** passing the evidence screenshot through a generative image model to produce the "proof" destroys its evidentiary value. Use deterministic crop/redact plus a hash of the raw capture; use the model for annotation only.
7. **No missed no-demoable-core-loop knock-outs** under the build-effort calibration. Loop-1 checks stand (I-2052 x402 on testnet, I-3095, I-4051 mock DMS, I-4501 UI-TARS local, I-5101 Chrome Prompt API, I-3088/I-4525 voice plus Twilio, I-3529 browser overlay). Added this loop: I-5207 (metering proxy, cap, rollup: ordinary) and I-3541 (speech-GPS alignment plus GPS-anchored AR; rural areas lack the visual-positioning coverage that would give sub-metre AR `[unverified]`, so the demo shows few-metre pins or a flat map; not a blocker).
8. **I-3095 model inconsistency:** card says gpt-oss-120b on an 80 GB GPU in why-now but "air-gapped laptop" in the demo line. Use 20b for the demo and say so.

### C. Prior-art results (five loop-1 claims verified; two new)

1. **I-2061 (rank 1):** Abridge "Linked Evidence" verified: each note sentence links to its transcript excerpt and audio timestamp. The per-claim citation UI is not new. I-2061 stays adjacent (Abridge is a cloud scribe for health systems); its claim narrows to on-device drafting for solo therapists with untraceable sentences flagged. The red team's "the citation UI is the moat" fix is weaker than stated.
2. **I-6001 (rank 6):** Hoxhunt verified to run phishing, smishing, vishing and deepfake-audio simulations. KnowBe4, Proofpoint, Promptfoo, Mindgard and HiddenLayer remain `[unverified]` but well known. Both halves are covered by incumbents; the bundle with fix-and-retest is the only claim. The pitch must not claim novelty for either half.
3. **I-2550 (rank 11):** USPS Informed Delivery verified (free daily email with grayscale images of up to 10 letter-mail pieces). It is an ingestion channel, not a competitor: it removes the red team's "the parent must photograph their own mail" objection. Put it in the how-it-works line.
4. **I-1534 (rank 19):** Infinitus verified (outbound AI voice agents on payer prior-auth calls). Adjacent; I-1534 transcribes the clinician's own live call.
5. **I-1508 (rank 16):** same mechanism as Eftsure/Trustpair; niche differs only by firm size. Quick hunt said direct, deep hunt downgraded to adjacent. Borderline; kept because the no-finance-team segment is plausibly unserved.
6. **I-2067 (rank 12):** ShieldsOn verified (see A.2).
7. **I-5207 (rank 29), new:** its spend-cap half is the mechanism that knocked out I-3537 (AgentPay's session-wide cap, x402-scoped); its attribution half is Keito. Each half has a live product; only the combination is unclaimed, the same structure as I-6001. Not direct under the rubric (no one product has both), so not a knock-out, but the report should say so.
8. **I-3541 (rank 30), new:** no direct competitor known to me beyond the hunter's list. The hunt did not check drainage-tile design and as-built mapping tools sold to tile installers `[unverified]`; those map new installs from survey data, not oral history, so at most adjacent.

### D. Near-duplicates kept in the set (flag in the report or merge)

1. **I-2061 + I-4501 (ranks 1 and 5):** same on-device session-audio-to-SOAP loop, same cell (prosumer|local-private|balanced), same T9 dossier. Different add-on: timestamp citations vs a GUI agent typing into a desktop EHR. Kept both because the GUI-agent mechanism has no found competitor; the strongest pitch is the merge (grounded note, then the screen agent files it).
2. **I-4546 + I-2559 (+ I-1022) (ranks 2, 8, 20):** identical photograph-notice, OCR, agent-files-in-portal, confirm loop; same buyer, same cell. I-2559 is the weaker twin on every signal and lacks the coverage badge; I-1022 is the pre-submission check step. Present as one product family and demo I-4546.
3. **I-4525 + I-1508 (ranks 14, 16):** the detect half and the callback half of one vendor-bank-change product, same T5 dossier, split across tracks. Merge.
4. **I-3093 + I-3529 (ranks 7, 15):** two cite-checkers for solo litigators (I-2514 dropped). I-3529's vision-drives-a-search-tab mechanism is weaker than a CourtListener API call (red team); its e-filing lock is the real differentiator. I-2514's broker channel folds into I-3093's business-model line.
5. **I-5203 + I-5207 (ranks 28, 29), new:** both late-lane guardrails for an individual's own agent (scope mandate vs spend cap), both agent-infra, both below bar. Different mechanisms, so group, do not merge.
6. **T8 elder-proxy cluster:** I-4546, I-2559, I-1022, I-2550, I-4005, I-2547, I-4511, I-5101, I-2067 draw on the T8 dossier, nine of thirty (ten before the I-1019 drop). Track balance is 15/15 but territory balance is not; group them in the report.

## Notes

- Report-level items for the synthesis editor, all carried in this file: the I-4051 ToS flag (B.1), the near-duplicate families (D.1-D.5), the T8 grouping (D.6), I-4511's evidentiary fix (B.6), the half-evidence marking for I-5101/I-5203/I-5207 (A.5), the I-1534 consent step (B.2), the I-3095 model inconsistency (B.8), the I-2559 fact-check (below), and the borderline labelling (A.1).
- I-2559's card says the 90-day reinstatement path is "only available in some states"; the federal reconsideration-period rule for procedural terminations may make it broader `[unverified]`. Fact-check before the pitch.
- Seeds: I-6001 (seed-09) and I-3541 (seed-03) are the two seed-originals in the top 30; I-3541's improved sibling I-3046 ranks 23 in track. Every other seed's best descendant ranks 16+ in track. Nothing to fix.
- Eligibility rule re-checked after the backfill: 15-per-track Elo cut (skipping the two drops and the S8 knock-outs I-5410, I-1042, I-1070) and band-then-Elo ordering hold for all 30.
- Tournament stats for the record: 312 r2 matches, 81% order-swap agreement, 0 settled. 11 of 60 finalists clear 65; ranks 12-30 carry `below_bar: true`.

<!-- COMPLETE -->
