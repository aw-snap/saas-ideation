VERDICT: CHANGES

# Gate D — final audit of the top 30

Inputs read: report/scorecards.json (all 60 finalists), tournament/r2/elo.json (156 ideas, 312 matches), config/rubric.md, config/context.md, 12 deep prior-art files, 4 red-team files, 10 rubric-judge files, 30 idea cards. No web tools: every competitor claim below that did not come from a hunter file is marked `[unverified]`.

## Overrides

| id | original rank | new rank | rationale |
|---|---|---|---|
| I-1019 | 19 | drop | Strict subset of its own child I-5101 (rank 9, parents [I-1019, I-2067]): same on-device statement scan for new payees and duplicate charges, same buyer, same T8 dossier. Lowest rubric of the trio (61.7), and StatementLock already parses statements in-browser, the closest thing to a direct match. Keeping parent and child pads the list. |
| I-2514 | 26 | drop | Identical mechanism to I-3093 (rank 7): gpt-oss-20b on one workstation checking briefs against a locally cached case-law index. Only the payer differs (E&O broker vs attorney), and the red team rates that go-to-market unproven. Rubric 57.8, lowest of the three cite-checkers in the set. Fold the broker channel into I-3093's business-model line. |

Remaining ranks close up. After the drops the set is 15 novel / 13 balanced. Backfill candidates if the lead wants 30 (balanced, eligible, next by Elo): I-5207 (1214.2, rubric 59.2, late-lane, no feasibility audit) and I-3541 (1208.8, rubric 59.5, seed-original). Both are below bar; shipping 28 is acceptable.

## Findings that do not change rank

### A. Rank anomalies

1. **The 65 band cliff inverts Elo inside the novel track.** Six ideas sit within one point of the bar (I-2067 64.5, I-1516 64.9, I-1564 64.6, I-2053 64.4, I-4525 64.2, I-3095 64.1) and all rank below I-2550 (65.3), which has the lowest Elo of the fifteen novel picks (1209.5, 15th of 15 in track). The four highest-Elo novel ideas (I-2067 at 1289.5 is #1 in the whole tournament, 4-0, 100% consistent; I-1001, I-4525, I-3529) rank 12-15. The rule was applied as written and the deviation from PROMPT S11 is already logged, so no override; but the report must show Elo-rank-in-track beside the overall rank and label 64-65 as "borderline", not "drop". A reader who sees only the overall rank will think I-2550 beat I-2067.
2. **I-2067 not moved up despite being the Elo champion.** ShieldsOn (real-time grandparent-emergency scam detection with family coaching) and Android's OS-level on-device scam-call detection are closer to direct than the hunter's "adjacent" verdict suggests `[unverified]`; the only unclaimed pieces are the on-device guarantee and the proxy push. The rubric's below-bar placement is defensible.
3. **Rubric-polarizing ideas the consistency flag misses.** I-3093 totals [53.1, 66.9, 69.2] (judge-09 is 16 points under the others; median lands in band B, mean would not). I-1516 [62, 64.9, 71.7]; I-2559 [60, 69, 71.7]; I-2052 [68.2, 69.2, 77.9]. Treat these as soft band placements.
4. **Round-2-only polarization.** I-4501 and I-2053 were polarizing in round 2 alone (2 wins, 2 draws, consistency 50 in elo.json); the merged r1+r2 figure in scorecards.json (62, 75) clears the flag. Minor, but I-4501 is rank 5.
5. **Late-lane ideas have half the evidence.** I-5101 (rank 9) and I-5203 (rank 30) are S7 mutations: 4 matches from a 1200 start, `elo_r1: null`, `feasibility: null` (no S5 audit). I-5101's why-now is `[unverified]` on its own card and the card never says how a bank statement reaches the parent's device without a cloud login (red team). Report should mark both.
6. **Red-team severities were never carried into scorecards.json.** The compile has no red-team field. I-4051 (rank 3) is the only top-30 idea with a "fatal" red-team tag (see B.1); I-1516, I-1564, I-2052, I-4501, I-4546, I-5203, I-1063, I-2053, I-2547, I-3529, I-4005, I-4511, I-1534, I-2519, I-2067, I-2559, I-3093, I-4525, I-6001, I-1508 carry "serious". None of this is visible in the scorecards.

### B. Legal, safety, and missed knock-outs

1. **I-4051 (rank 3): vendor-terms risk, not a knock-out.** Red team calls continuous automated login to CDK/Reynolds a likely terms-of-service breach. The Dealer Management Systems antitrust litigation (Authenticom v. CDK/Reynolds) was about exactly this pattern, third parties using dealer credentials for automated access, and both vendors blocked it `[unverified current status]`. Not a knock-out: the exposure is contractual and buyer-borne, the 48-hour demo runs on a mock DMS, and both vendors sell certified-integration programs (Fortellis, RCI) `[unverified]`. The pitch needs a "dealer owns its data / certified path" answer and the report must carry the flag.
2. **I-1534:** live peer-to-peer call transcription with no consent step; all-party-consent states apply. Fix is a recorded announcement. Not a knock-out.
3. **I-2067, I-5101:** on-device transcription of a parent's incoming calls is legally grey in all-party-consent states even without storage `[unverified]`. Google ships the same thing on Pixel, which suggests a workable position. Add a disclosure line. Not a knock-out.
4. **I-4005:** statute-citing rebuttal letters edge toward unauthorized practice of law; attorney-reviewed templates fix it (red team). Not a knock-out.
5. **I-2547, I-4511, I-2559, I-4546, I-2519:** storing a third party's credentials and automating bank, Medicaid, insurer and IRS PTIN portals hits portal terms, MFA and bot detection. Mock-portal demos are fine; the report should say real-world filing needs official channels where they exist (Plaid-style aggregation under CFPB 1033) `[unverified]`.
6. **I-4511 design flaw:** running the evidence screenshot through a generative image model ("Nano Banana Pro edits raw screenshots") to make the "proof" destroys its evidentiary value; an AI-edited image is not proof. Deterministic crop/redact plus a hash of the raw capture; use the model for annotation only.
7. **No missed no-demoable-core-loop knock-outs** under the build-effort calibration. Checked the risky ones: I-2052 (x402 on testnet plus toy reproduction), I-3095 (card says gpt-oss-120b on an 80GB GPU in why-now but "air-gapped laptop" in the demo line; inconsistent, use 20b for the demo), I-4051 (mock DMS), I-4501 (UI-TARS runs locally), I-1019/I-5101 (Chrome Gemini Nano Prompt API), I-3088/I-4525 (ElevenLabs/gpt-realtime plus Twilio), I-3529 (browser overlay to grey out a third-party submit button). All ordinary engineering.

### C. Prior-art misses (all `[unverified]`, no web tools)

1. **I-2061 (rank 1):** Abridge's "Linked Evidence" links each note sentence to its transcript passage, the per-claim citation UI the hunter says nobody packages. Cloud and physician-focused, so still adjacent for solo therapists on-device, but the red team's "the citation UI is the moat" fix is weaker than stated.
2. **I-6001 (rank 6):** KnowBe4 (AI-generated phishing), Hoxhunt and Proofpoint own continuous staff phishing/vishing simulation; Promptfoo, Mindgard and HiddenLayer red-team agents alongside Lakera. The hunter named only Brightside, Arsen and Lakera. The bundle is still the claimed gap; the pitch should not claim novelty for either half.
3. **I-2550 (rank 11):** USPS Informed Delivery emails free daily scans of envelope exteriors. It is both a competitor for "spot the renewal envelope" and the obvious ingestion path that removes the red team's "the parent must photograph their own mail" objection.
4. **I-1534:** Infinitus, the best-known AI voice agent for payer calls, was not named. Adjacent (outbound automation, not live P2P transcription).
5. **I-1508 (rank 16):** same mechanism as Eftsure/Trustpair; niche differs only by firm size. The quick hunt said direct, the deep hunt downgraded to adjacent. Borderline; kept because the no-finance-team segment is plausibly unserved.
6. **I-2067:** ShieldsOn borderline direct (see A.2).

### D. Near-duplicates kept in the set (flag in the report or merge)

1. **I-2061 + I-4501 (ranks 1 and 5):** same on-device session-audio-to-SOAP loop, same cell (prosumer|local-private|balanced), same T9 dossier. Different add-on: timestamp citations vs a GUI agent typing into a desktop EHR. Kept both because the GUI-agent mechanism has no found competitor; the strongest pitch is the merge (grounded note, then the screen agent files it).
2. **I-4546 + I-2559 (+ I-1022) (ranks 2, 8, 21):** identical photograph-notice, Mistral OCR 3, Skyvern-files-in-portal, confirm loop; same buyer, same cell. I-2559 is the weaker twin on every signal and lacks the coverage badge; I-1022 is the pre-submission check step of the same loop. Present as one product family and demo I-4546.
3. **I-4525 + I-1508 (ranks 14, 16):** the detect half and the callback half of one vendor-bank-change product, same T5 dossier, split across tracks. Merge.
4. **I-3093 + I-3529 (+ I-2514, dropped):** three cite-checkers for solo litigators. I-3529's vision-drives-a-search-tab mechanism is distinct but weaker than a CourtListener API call (red team); its e-filing lock is the real differentiator.
5. **T8 elder-proxy cluster:** I-4546, I-2559, I-1022, I-2550, I-4005, I-2547, I-4511, I-1019, I-5101, I-2067 all draw on the T8 dossier, ten of thirty. Track balance is 15/15 but territory balance is not; group them in the report.

## Notes

- Track balance before overrides: 15 novel / 15 balanced; B-band split 5 novel / 6 balanced. After overrides 15 / 13.
- Seeds: I-6001 (seed-09) is the only seed-original in the top 30. Every other seed's best descendant ranks 16+ in track. Nothing to fix.
- Eligibility rule was applied correctly: I checked the 15-per-track Elo cut and the band-then-Elo ordering against elo.json for every finalist; no idea is misplaced under the stated rule.
- I-2559's card says the 90-day reinstatement path is "only available in some states"; the federal reconsideration-period rule for procedural terminations may make it broader than that `[unverified]`. Worth a fact-check before the pitch.
- Tournament stats for the record: 312 r2 matches, 81% order-swap agreement, 0 settled.

<!-- COMPLETE -->
