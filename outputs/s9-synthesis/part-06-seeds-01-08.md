## 6. Seed report

Every seed from seed-01 to seed-11 gets a section below, and none was silently dropped, including the seeds whose original or best descendant was knocked out. Seed originals were exempt from the S5 knock-outs, so five reached S8 despite failing one (I-6001, I-1042, I-2536, I-1050, I-4014, per [S5 survivors](../outputs/s5-reality/survivors.md)); the S8 direct-competitor knock-out was not waived, and it removed four seed originals (I-1042, I-2536, I-1525, I-1050) plus two seed-improved cards (I-2038, I-3050). Sources are the `seeds` and `finalists` blocks of [report/scorecards.json](scorecards.json), both round leaderboards ([r1](../tournament/r1/leaderboard.md), [r2](../tournament/r2/leaderboard.md)), the seed cards and atoms under [outputs/s2-seeds/](../outputs/s2-seeds/), and the archive cards.

Conventions for every seed section:

- **Elo** is round 1 → round 2. "r2 rank" is the position among all ideas of that track in the round-2 leaderboard. "Rank in track" is the position among eligible S8 finalists, as in sections 2–3.
- **Scores** use the section 5 order: novelty · why-now · pain · WTP · buildability · demo · defensibility · clarity.
- **Consistency** is the merged figure from scorecards.json for finalists and the round-2 figure for everything else.
- **Pivots that never reached the tournament** were archived in S4 (cell cap or merge) unless stated otherwise. They have no Elo and no audit.

---

### seed-01: Pivot: solving "will the sofa fit?" as a robotics problem

Track: novel. [Seed card](../outputs/s2-seeds/seed-01.md), [atoms](../outputs/s2-seeds/decomposed/seed-01.md).

- **Original: Pivot: Will the Sofa Fit? (I-4014).** [Card](../archive/ideas/I-4014.md)
  - Elo 1170.7 → 1155.6, r2 rank 63 of 72 novel, consistency 75 (50% in round 2, polarizing that round). S8 finalist, rank 18 in track, not in the final 30.
  - **Scores:** 6 · 6 · 7 · 7 · 5 · 8 · 4 · 7. Judge totals [62.5, 67.1, 62.0], median 62.5, spread 5.1, below bar. This is the highest rubric of any seed original from seed-01 to seed-08.
  - **S5:** quick prior art adjacent-exists (a lead check; the hunters filed no entry). Feasibility `no`: it failed knock-out 2 because centimetre-accurate 3D from plain phone video is unverified, and stayed in only as a seed original. The S5 lead called this contestable, citing [SkyeBrowse](https://www.skyebrowse.com/news/posts/3d-room-scanner) ([survivors](../outputs/s5-reality/survivors.md)).
  - **S8 deep prior art:** adjacent-exists. Smart Moving: Furniture Helper, the MeltflexAI/Luna Furniture calculators and the Polycam/Metaroom LiDAR scanners. The hunter recorded no URLs; the Smart Moving link is under I-2038 below. Manual fit calculators and 3D room scanners exist separately, but none combines video reconstruction with a verdict and a maneuvering animation at checkout.
  - **Red team (serious):** the core mechanism depends on the `[unverified]` video-to-3D claim, and an existing app already gives maneuvering guidance from manual measurements. **Fix:** validate single-video reconstruction against LiDAR ground truth before promising the checkout demo.
  - **Knocked out:** no.
- **Best improved version: Fit Check for Big Deliveries (I-2038).** [Card](../archive/ideas/I-2038.md)
  - It swaps plain video for a phone depth-camera scan. Elo 1228.5 → 1236.9, r2 rank 13 of 72 novel, consistency 62.
  - **Scores:** 3 · 4 · 7 · 6 · 7 · 7 · 2 · 8. Judge totals [48.5, 50.7, 54.2], median 50.7, spread 5.7. S5: adjacent-exists / risky.
  - **Knocked out in S8** as a direct competitor: [Smart Moving: Furniture Helper](https://apps.apple.com/us/app/smart-moving-furniture-helper/id1666262699) already sells a rotate/tilt stairwell-and-doorway clearance solver to moving companies. Also listed: [Roomantic](https://www.roomantic.ai/) and [magicplan](https://help.magicplan.app/auto-scan-your-floor-plan). Red team: fatal.
  - The other improved card is I-3044 Will It Fit? Delivery Check (three stairwell photos): Elo 1186.5 → 1186.6, r2 rank 43 of 72, polarizing (50%). S5: adjacent-exists / risky. Not an S8 finalist.
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-2571 Verified Doorway Registry (a one-time clearance profile per building)
  - I-2572 Wheelchair Route Checker
  - I-2573 Delivery Damage Shield
  - I-2574 Job-Site Clearance Check
  - I-2575 Facility Move Planner (hospital equipment through corridors)
- **Atoms in other finalists:** none. Its only atom-hybrid, I-3559 Pre-Submit Fit Check (A-seed-01-insight-1 + A-seed-05-mech-3), was archived in S4.
- **Verdict: pivot.** It has the best rubric of any seed original from seed-01 to seed-08, but Smart Moving already sells the clearance solver and the video-to-3D step failed S5 feasibility, so the only open ground is the checkout-embedded scan-at-purchase flow that the I-2038 red team named, and none of the pivots was ever tested.

### seed-02: Spotter: computer vision for the charity paddle raise

Track: balanced. [Seed card](../outputs/s2-seeds/seed-02.md), [atoms](../outputs/s2-seeds/decomposed/seed-02.md).

- **Original: Spotter: Paddle-Raise Vision (I-4519).** [Card](../archive/ideas/I-4519.md)
  - Elo 1156.3 → 1156.4, r2 rank 75 of 84 balanced, consistency 62 (50% in round 2, polarizing that round). S8 finalist, rank 25 in track, not in the final 30.
  - **Scores:** 6 · 6 · 5 · 4 · 4 · 8 · 4 · 6. Judge totals [46.1, 54.6, 55.6], median 54.6, spread 9.5, below bar.
  - **S5:** adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [OneCause](https://www.onecause.com/solutions/compare-givesmart/), [Handbid](https://www.handbid.com/features/auction-management) and [Givebutter paddle raise](https://givebutter.com/features/paddle-raise) own paddle-raise capture through manual or mobile-bidding entry. None fuses room cameras with the auctioneer's speech.
  - **Red team (serious):** it is the same entrenched category as I-3045, a near-duplicate pitch, with the same `[unverified]` fusion-accuracy dependency and an under-addressed guest-consent question. **Fix:** merge with I-3045 before choosing between a platform add-on and a standalone product.
  - **Knocked out:** no.
- **Best improved version: Spotter for Paddle Raises (I-3045).** [Card](../archive/ideas/I-3045.md)
  - It reduces the rig to a single camera plus live speech. Elo 1198.7 → 1198.9, r2 rank 46 of 84, consistency 50, polarizing. S8 finalist, rank 17 in track.
  - **Scores:** 3 · 6 · 6 · 5 · 6 · 8 · 3 · 7. Judge totals [54.6, 51.2, 53.4], median 53.4, spread 3.4, below bar. S5: adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [OneCause Spotter Tool](https://www.onecause.com), [GiveSmart](https://www.givesmart.com) and the GalaBid/ClickBid paddle-raise modules rely on human spotters. Red team serious; **fix:** sell it as an add-on that feeds existing platforms, and validate fusion accuracy in ballroom noise before demoing.
  - The other improved card is I-2039 Instant Paddle Capture: Elo 1167.5 → 1151.8, r2 rank 76 of 84. S5: adjacent-exists / risky.
- **Best pivots:** only one reached the tournament.
  - **I-3010 Walkthrough Recap** ([card](../archive/ideas/I-3010.md)): a personalised recap video of each real-estate showing. Elo 1168.2 → 1137.1, r2 rank 80 of 84. S5: adjacent-exists / risky. The pain line is `[unverified]` on its own card.
  - Archived in S4: I-3006 Tap-to-Log Paddle Tally (NFC paddles), I-3007 RingSide: Live Auction Bid Capture, I-3008 Gala Checkout Flow, I-3009 Booth Lead Capture, By the Vendor.
- **Atoms in other finalists:** none. Its only atom-hybrid, I-1527 Submission Clip Ledger (A-seed-02-mech-3, the proof clip per pledge), was archived in S4.
- **Verdict: drop.** Both rubric-scored versions landed between 53 and 55 against incumbents that already own paddle capture and its payment lock-in, and the vision-plus-speech accuracy claim that would set it apart was never verified.

### seed-03: Lay of the Land: capturing a farm's unwritten map before it's lost

Track: balanced. [Seed card](../outputs/s2-seeds/seed-03.md), [atoms](../outputs/s2-seeds/decomposed/seed-03.md).

- **Original: Lay of the Land (I-3541).** [Card](../archive/ideas/I-3541.md)
  - **It is #30 overall and rank 15 in the balanced track**, a Gate D backfill after the two loop-1 drops. It is one of only two seed originals in the final 30; the other is I-6001 (seed-09).
  - Elo 1231.3 → 1208.8. It was 13 of 65 in round 1 and 33 of 84 in round 2 (0-3-1 that round). Consistency 88.
  - **Scores:** 7 · 7 · 5 · 5 · 5 · 8 · 5 · 6. Judge totals [59.5, 59.5, 60.2], median 59.5, spread 0.7, below bar. Its novelty of 7 ties I-2052 for the highest in the final 30.
  - **S5:** adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [AgriWebb](https://www.agriwebb.com/solutions/farm-mapping/) and [Farmbrite](https://www.farmbrite.com/farm-mapping) offer GPS field notes, and [ARUtility](https://www.arutility.com/) offers AR utility overlays. None combines narrated oral history, confidence-tagged provenance and AR playback for succession.
  - Gate D (C.8) adds that drainage-tile as-built mapping tools sold to tile installers were not checked `[unverified]`, and would be adjacent at most.
  - **Red team (serious):** GPS farm mapping and AR utility overlays already exist separately, and phone-GPS AR pins are only accurate to a few metres. **Fix:** drop AR for v1 and validate GPS accuracy before promising on-site pinpointing.
  - Gate D (B.7) does not treat this as a build blocker: the demo can show few-metre pins or a flat map.
  - **Knocked out:** no.
- **Best improved version: Lay of the Land (I-3046).** [Card](../archive/ideas/I-3046.md)
  - It drops the AR and keeps a browsable map. Elo 1201.0 → 1177.3, r2 rank 62 of 84, consistency 62. S8 finalist, rank 23 in track.
  - **Scores:** 6 · 7 · 6 · 5 · 7 · 8 · 5 · 7. Judge totals [61.7, 62.9, 62.4], median 62.4, spread 1.2, below bar. The rubric is higher than the original's, but the Elo is lower. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. [Farmable](https://apps.apple.com/us/app/farmable-farm-manager-app/id1456760199), [Mobble](https://www.mobble.io/feature-spotlight/farm-mapping) and [Farm Estate GPS](https://www.farmestategps.com).
  - **Red team (serious):** the paying buyer (advisors and lenders, per report) is unvalidated. **Fix:** get one succession advisor or ag lender to confirm they would pay per report before building.
  - Gate D notes that I-3046 is outside the 30, so the family has no in-set duplicate.
  - The other improved card is I-2040 The Farm's Spoken Map: Elo 1171.5 → 1164.8, r2 rank 72 of 84. S5: adjacent-exists / risky.
- **Best pivots:** none reached the tournament. All five were archived in S4, and all five reuse the walk-and-talk capture for another handover:
  - I-2576 Message Archive Miner
  - I-2577 Shop Handover Recorder
  - I-2578 Farm Estate Ledger
  - I-2579 Building Systems Memory
  - I-2580 Departing Employee Debrief
- **Atoms in other finalists:** none. Twelve atom-hybrid cards drew on it. One reached the tournament: I-1039 Proxy Knowledge Handoff ([card](../archive/ideas/I-1039.md), A-seed-03-insight-1 + A-seed-03-mech-2), with Elo 1186.8 → 1163.6 and r2 rank 73 of 84. It was not an S8 finalist. The other eleven were archived in S4.
- **Verdict: keep.** It is the only original from seeds 01–08 in the final 30, and its narrated, confidence-tagged capture has no direct competitor; build it as I-3046's flat map with AR as a stretch goal, and confirm one paying advisor or lender first.

### seed-04: AI live interview coach

Track: balanced. [Seed card](../outputs/s2-seeds/seed-04.md), [atoms](../outputs/s2-seeds/decomposed/seed-04.md).

- **Original: AI live interview coach (I-1042).** [Card](../archive/ideas/I-1042.md)
  - Elo 1229.9 → 1221.8, r2 rank 24 of 84 balanced, consistency 38, **polarizing**.
  - **Scores:** 2 · 4 · 5 · 6 · 8 · 5 · 2 · 8. Judge totals [49.2, 50.2, 49.2], median 49.2, spread 1.0, below bar.
  - **S5:** the hunter rated it adjacent-exists. The lead upgraded it to **direct-competitor** using its siblings' evidence ([Poised](https://www.poised.com/use-cases/poised-for-interviews)), and it was kept only as a seed original. Feasibility risky.
  - **S8 deep prior art: direct-competitor.** [Yoodli](https://yoodli.ai/use-cases/interview-preparation) already nudges pace, fillers and energy live during real video calls, with replay analytics. [Poised](https://poised.com/) does live in-call coaching, and [Orai](https://orai.com/) is also listed. Same mechanism, same niche.
  - **Red team (fatal):** same as the deep finding. **Fix:** narrow to a sub-niche Yoodli ignores, such as non-native-speaker phrasing or a bootcamp white-label.
  - **Knocked out in S8** as a direct competitor. Without the knock-out, its Elo would have put it inside the 15-per-track cut: Gate D names I-1042 among the three S8 knock-outs skipped when the 30 were filled.
- **Best improved version:** none reached the tournament. Both improved cards were knocked out in S5 as direct competitors:
  - I-2041 Live Delivery Coach for Interviews ([Acedit](https://www.acedit.ai/), [Poised](https://poised.com/products/real-time))
  - I-3047 AI Live Interview Coach, tuned for non-native speakers ([Poised](https://www.poised.com/use-cases/poised-for-interviews), [Beyz](https://beyz.ai/))
- **Best pivots:** only one reached the tournament.
  - **I-3011 Interview Pattern Report** ([card](../archive/ideas/I-3011.md)): reviews all your past video interviews for the delivery pattern that costs offers. Elo 1170.0 → 1138.8, r2 rank 79 of 84 (0-4-0). S5: adjacent-exists / yes.
  - **I-3014 Live Lift Form Coach** was knocked out in S5 as a direct competitor ([FORMFIT](https://play.google.com/store/apps/details?id=com.adimo.neurafit&hl=en_US), [Skeletal PT](https://apps.apple.com/us/app/-/id6757767729)).
  - Archived in S4: I-3012 Live Sales Call Delivery Coach, I-3013 Interview-Ready Check, I-3015 Live De-escalation Coach.
- **Atoms in other finalists:** none. Its only atom-hybrid, I-2077 Appeal Reel (A-seed-04-mech-3), was archived in S4.
- **Verdict: drop.** The original and both improved versions were knocked out as direct competitors of Yoodli and Poised, and the only surviving pivot finished 79th of 84.

### seed-05: AI PC optimiser and fixer

Track: balanced. [Seed card](../outputs/s2-seeds/seed-05.md), [atoms](../outputs/s2-seeds/decomposed/seed-05.md).

- **Original: AI PC optimiser and fixer (I-2536).** [Card](../archive/ideas/I-2536.md)
  - Elo 1140.4 → 1177.8, r2 rank 60 of 84 balanced, consistency 90. It went 5-0-1 in round 2 but started from 61st of 65 in round 1.
  - **Scores:** 2 · 5 · 6 · 3 · 8 · 7 · 1 · 8. Judge totals [49.2, 44.1, 54.1], median 49.2, spread 10.0, below bar.
  - **S5:** the hunter rated it adjacent-exists. The lead upgraded it to **direct-competitor** on the evidence of its sibling I-2042 ([TroubleBuddy](https://troublebuddy.ai/)), and it was kept only as a seed original. Feasibility yes.
  - **S8 deep prior art: direct-competitor.**
    - Microsoft is shipping a free, in-OS agentic [Fix it button for Windows 11 Copilot+ PCs](https://www.pcworld.com/article/2773838/an-ai-driven-fix-it-button-is-just-what-windows-needs.html).
    - Also listed: [PC Optimizer Software](https://apps.microsoft.com/detail/xp99bg9vdxzlbf) and [optimizerDuck](https://github.com/optimizer-duck-app/optimizerDuck).
    - The seed's own decomposition had already found [TroubleBuddy](https://troublebuddy.ai/features/ai-diagnostics) and [PC-Care.ai](https://pc-care.ai/lp/ccleaner-alternative/) and rated the seed direct.
  - **Red team (fatal):** Microsoft's button matches the niche and mechanism at zero cost. **Fix:** target non-Copilot+ and older PCs, or pivot to the family remote-approval angle Microsoft lacks.
  - **Knocked out in S8** as a direct competitor.
- **Best improved version: Remote Family PC Copilot (I-3048).** [Card](../archive/ideas/I-3048.md)
  - This is the family remote-approval angle. Elo 1203.3 → 1188.6, r2 rank 52 of 84, consistency 100. S8 finalist, rank 20 in track.
  - **Scores:** 4 · 4 · 6 · 5 · 7 · 7 · 3 · 7. Judge totals [52.6, 56.0, 57.5], median 56.0, spread 4.9, below bar. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. PC Doctor - AI PC Support, OmniMend and Microsoft Quick Assist (the hunter recorded no URLs). Evidence-then-approve exists only as single-user local apps.
  - **Red team (serious):** a modest integration that also collides with Microsoft's free Fix it agent. **Fix:** lead with the remote-family-approval workflow.
  - The other improved card, I-2042 Evidence-First PC Fixer, was knocked out in S5 as a direct competitor ([TroubleBuddy](https://troublebuddy.ai/)).
- **Best 2 pivots by round-2 Elo:**
  - **I-2583 Am I Actually Hacked** ([card](../archive/ideas/I-2583.md)): evidence-based compromise check for home PCs. Elo 1154.4 → 1169.6, r2 rank 67 of 84, polarizing (50%). S5: adjacent-exists / yes.
  - **I-2582 POS Terminal Doctor** ([card](../archive/ideas/I-2582.md)): an on-device agent diagnoses frozen store terminals. Elo 1141.5 → 1126.7, r2 rank 82 of 84, polarizing (50%). S5: adjacent-exists / yes.
  - Not in the tournament: I-2584 Home Network Fixer was knocked out in S5 ([Support Robotics](https://www.supportrobotics.com/), [UniFi WiFi Agent](https://help.ui.com/hc/en-us/articles/31628490448151)). I-2581 Diagnose-Then-Dispatch and I-2585 Evidence-First Investing were archived in S4.
- **Atoms in other finalists: two, and both are in the final 30.** Seed-05's atoms were the most reused in the run: 30 atom-hybrid cards, 7 of which reached the tournament.
  - **I-3093 Privileged Cite Bench** ([card](../archive/ideas/I-3093.md)) is **#7 overall, tier B**, rubric 66.9 with spread 16.1. It is built from A-seed-05-mech-2 (show the evidence before any verdict) and A-seed-05-insight-1. Unconfirmed citations are shown next to the real case text.
  - **I-4511 Proof Receipts for Proxy Agents** ([card](../archive/ideas/I-4511.md)) is **#24 overall, below bar**, rubric 57.9. It is built from A-seed-05-mech-3 (plan and snapshot before acting). Gate D's fix (B.6) applies: redact deterministically and hash the raw capture rather than regenerating the image.
  - Five more hybrids reached round 2 but were not finalists:
    - I-2023 Local Pawn Report Filer, 1228.7
    - I-4537 Silent-Failure Catcher for Locked Systems, 1223.9
    - I-1023 Elder Account Diagnostic Copilot, 1209.8
    - I-5102 Family Account Security Sweep, 1208.4 (an S7 mutation of I-3048 and I-1516)
    - I-4541 PHI-Blind Portal Runner, 1150.0
  - I-2070 was knocked out in S5 ([Counterforce Health](https://www.counterforcehealth.org/)). I-5304 was dropped at S7 intake. The other 21 were archived in S4.
- **Verdict: pivot.** The PC fixer is knocked out by Microsoft's free in-OS button, but its evidence-before-action atom produced the #7 idea overall, so carry the seed forward through I-3093 rather than as a PC product.

### seed-06: AI feature-request reviewer

Track: balanced. [Seed card](../outputs/s2-seeds/seed-06.md), [atoms](../outputs/s2-seeds/decomposed/seed-06.md).

- **Original: AI Feature-Request Reviewer (I-1525).** [Card](../archive/ideas/I-1525.md)
  - Elo 1139.0 → 1116.5. It finished **last of 84** balanced in round 2 and last of 65 in round 1. Consistency 88.
  - **Scores:** 2 · 5 · 5 · 3 · 8 · 5 · 2 · 7. Judge totals [43.1, 46.8, 43.4], median 43.4, spread 3.7, below bar.
  - **S5:** the hunter rated it direct-competitor. The lead overturned that to adjacent-exists because [devtimate](https://devtimate.com/ai-project-estimation/) works from RFPs and "cannot see the messy codebase". Feasibility yes.
  - **S8 deep prior art: direct-competitor.** [Bito AI Architect](https://bito.ai/), a [Jira Ticket Estimator skill](https://mcpmarket.com/tools/skills/jira-ticket-estimator) and [agent-estimate](https://github.com/kiloloop/agent-estimate) already read a real codebase and turn a ticket into a grounded estimate. The deep hunt found the codebase-grounded tools that the S5 lead's devtimate check had not.
  - **Red team (fatal):** the client-request framing is a thin wrapper on that mechanism. **Fix:** "none credible" without a different mechanism or niche.
  - **Knocked out in S8** as a direct competitor.
- **Best improved version: Client Quote Estimator for Dev Shops (I-2043).** [Card](../archive/ideas/I-2043.md)
  - Elo 1182.8 → 1174.2, r2 rank 64 of 84, consistency 75. S8 finalist, rank 24 in track.
  - **Scores:** 3 · 6 · 6 · 6 · 8 · 5 · 3 · 8. Judge totals [57.3, 53.9, 52.9], median 53.9, spread 4.4, below bar.
  - **S5:** the hunter rated it direct-competitor, and the lead overturned that to adjacent-exists. Feasibility yes.
  - **S8 deep prior art:** adjacent-exists. Devtimate (devtimate.com) quotes from briefs, not repo scans. jira-ticket-estimator (github.com/kennyth01/jira-ticket-estimator) and Scope (within-scope.com) are also listed; the hunter gave bare domains, not full URLs.
  - **Red team (manageable):** Devtimate already sells client-ready quotes, and a wrong AI quote creates client-facing liability. **Fix:** ranges with confidence flags plus a mandatory human-review gate.
  - The other improved card is I-3049 AI Feature-Request Reviewer: Elo 1154.4 → 1145.5, r2 rank 78 of 84. S5: adjacent-exists / yes.
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-3016 Estimate Calibration Engine (learns from past tickets versus actual hours)
  - I-3017 Codebase Due-Diligence Agent
  - I-3018 Commit-to-Client Reports
  - I-3019 Contract Turnaround Estimator
  - I-3020 Grounded Repair Quotes
- **Atoms in other finalists:** none. Both of its atom-hybrids were archived in S4: I-1544 PA Triage by Predicted Effort and I-1554 Plain-Language E-Invoice Rejection Explainer.
- **Verdict: drop.** The original finished last in its track and was knocked out, and the best reframing (a client quote) scored 53.9 against a live incumbent, Devtimate, that already sells client-ready quotes.

### seed-07: Built on Jev: products that only work when AI is near-instant and near-free

Track: novel. [Seed card](../outputs/s2-seeds/seed-07.md), [atoms](../outputs/s2-seeds/decomposed/seed-07.md).

- **Original: Built on Jev (I-1050).** [Card](../archive/ideas/I-1050.md)
  - Elo 1139.2 → 1108.4. It finished **last of 72** novel in round 2 (0-4-0) and last of 61 in round 1. Consistency 100.
  - **Scores:** 2 · 3 · 2 · 2 · 4 · 4 · 1 · 2. Judge totals [25.6, 22.4, 34.0], median 25.6, spread 11.6. This is the lowest rubric of all 60 finalists.
  - **S5:** quick prior art clear. Feasibility `no`: it failed knock-out 2 because the card names no product, so there is nothing concrete to build, and it was kept only as a seed original. Jev itself was confirmed real by s5-hunter-02 ([Jev](https://en.wikipedia.org/wiki/Jev_(AI_model))).
  - **S8 deep prior art: direct-competitor.** Open-source "System 1 reflex layer" projects already sit on or beside Jev: [Reflex-S1](https://github.com/gowtham-source/reflex-s1) and [System1-mcp](https://github.com/ericmaddox/system1-mcp). See also [Jev / TypeSafe AI](https://www.techtarget.com/it-infrastructure/news/366650696/Jev-decision-model-touted-as-quicker-cheaper-LLM-alternative).
  - **Red team (fatal):** the idea also depends on Jev's own unverified speed and cost claims. **Fix:** pick one concrete downstream product and verify Jev's real latency and cost first.
  - **Knocked out in S8** as a direct competitor.
- **Best improved version: Instant Reflex AI Layer (I-3050).** [Card](../archive/ideas/I-3050.md)
  - Elo 1170.5 → 1162.7, r2 rank 58 of 72, consistency 88.
  - **Scores:** 2 · 7 · 6 · 6 · 7 · 7 · 2 · 6. Judge totals [51.9, 54.6, 48.8], median 51.9, spread 5.8. S5: adjacent-exists / risky.
  - **Knocked out in S8** as a direct competitor: [TypeSafe AI's Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) already ships sub-second typed per-event judgments with escalation, through a developer SDK, at usage pricing. The hunter records a Sept 2026 launch with a $40M seed.
  - Also listed: [Wiz small-model secret detection](https://www.wiz.io/blog/small-language-model-for-secrets-detection-in-code) and [SonarQube secrets detection](https://www.sonarsource.com/solutions/secrets-detection/). Red team: fatal.
  - The other improved card, I-2044 Reflex Secret Guard, was knocked out in S5 ([SonarQube for IDE](https://www.sonarsource.com/solutions/secrets-detection/), [Checkmarx](https://checkmarx.com/learn/how-to-detect-and-remove-leaked-api-keys-tokens-and-passwords-from-code-repositories/)).
- **Best pivots:** none reached the tournament.
  - I-2590 Zero-Lag Live Captions was knocked out in S5 ([Ava](https://www.ava.me/)).
  - Archived in S4:
    - I-2586 Distilled Reflex Moderator
    - I-2587 Instant NPC Reflexes
    - I-2588 Instant Transaction Guard
    - I-2589 Live Odds Reflex Engine
- **Atoms in other finalists:** none. All seven atom-hybrids were archived in S4: I-1055, I-1522, I-2037, I-2592, I-3523, I-4059 and I-4533.
- **Verdict: drop.** Jev's own maker already sells the reflex layer this seed proposes, the seed never chose a product, and every descendant that was tested was knocked out.

### seed-08: Audio-to-audio speech enhancer: same words, more life

Track: novel. [Seed card](../outputs/s2-seeds/seed-08.md), [atoms](../outputs/s2-seeds/decomposed/seed-08.md).

- **Original: Same Words, More Life (I-1555).** [Card](../archive/ideas/I-1555.md)
  - Elo 1140.5 → 1155.9, r2 rank 62 of 72 novel, consistency 89. S8 finalist, rank 17 in track.
  - **Scores:** 3 · 5 · 5 · 5 · 7 · 6 · 2 · 7. Judge totals [46.7, 48.7, 46.7], median 46.7, spread 2.0, below bar.
  - **S5:** adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists.
    - [Cleanvoice AI](https://cleanvoice.ai/filler-words/) and the [Descript filler remover](https://www.descript.com/tools/remove-filler-from-audio) cover filler cleanup.
    - The [ElevenLabs Voice Changer](https://elevenlabs.io/blog/speech-to-speech) transfers expressive delivery, but it needs a performed reference take.
  - **Red team (serious):** the two halves are each covered separately, and the one unclaimed piece, automatic expressiveness, is an unverified capability claim. **Fix:** validate the transform on real audio first, and fall back to filler removal plus sync if it is weak.
  - **Knocked out:** no.
- **Best improved version: Same Words, More Life (I-2045).** [Card](../archive/ideas/I-2045.md)
  - Elo 1165.6 → 1149.7, r2 rank 66 of 72, consistency 75. S8 finalist, rank 19 in track.
  - **Scores:** 3 · 5 · 5 · 5 · 5 · 6 · 2 · 7. Judge totals [46.1, 59.3, 46.7], median 46.7, spread 13.2, below bar. S5: adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [Descript](https://www.descript.com/tools/remove-filler-from-video), [Cleanvoice AI](https://cleanvoice.ai/filler-words/) and [OpusClip](https://www.opus.pro/tools/remove-filler-words-from-video) do cut-based removal. None re-synthesizes the audio in the same voice while holding word timing.
  - **Red team (serious):** same idea as I-1555. **Fix:** ship it as an add-on inside a lecture-capture platform (Panopto, Echo360).
  - The original out-ranked both improved versions in round 2. The other improved card is I-3051: Elo 1140.3 → 1140.5, r2 rank 69 of 72, polarizing (50%). S5: adjacent-exists / risky.
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-3021 Filler-Free Lecture Cut
  - I-3022 Timed Voice Re-Performance
  - I-3023 Caption-Ready Lecture Audio
  - I-3024 Campus Study Planner
  - I-3025 Tone-Safe Reply Rewriter
- **Atoms in other finalists:** none. No atom-hybrid card was made from seed-08's atoms.
- **Verdict: drop.** Both rubric-scored versions landed at 46.7, the filler-removal half belongs to Descript and Cleanvoice, and the only unclaimed half (expressive re-synthesis that holds word timing) is an untested capability, not a product.

<!-- COMPLETE -->
