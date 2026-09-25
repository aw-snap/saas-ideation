### seed-09: authorised social-engineering testing at AI speed

- **Seed and reading:** The group's own words are a one-line note about social-engineering "acceleration" for companies that use AI. Claude wrote the rest of the card from that note and read it as an authorised, consent-based testing service. **The group has not confirmed that reading** ([seed card](../outputs/s2-seeds/seed-09.md)). Allowed moves are improve, pivot and break down. The seed was released from deferral on 2026-09-26 and ran in the late lane.
- **Category:** This is a security-testing service that an organisation buys to test itself. It sits in two existing categories: staff simulations (Hoxhunt, KnowBe4) and testing a company's own AI agents (Lakera Red, Mindgard).
- **Mechanism, in outline:**
  - The client signs off on scope, channels and hard limits before any test runs.
  - Executives opt in before any synthetic version of their voice is used.
  - The service runs simulated multichannel tests of the client's staff.
  - It runs adversarial test conversations against the client's own bots.
  - Each failure gets a short lesson for the person or a guardrail fix for the bot, followed by an automatic retest.

#### Original: Continuous authorised social-engineering testing (I-6001), overall #6, tier B

- **Lineage / cell:** seed-original (seed-09); B2B\|agent-infra\|balanced. Rank in track 7 (balanced). [Card](../archive/ideas/I-6001.md)
- **Elo:** round 1 1230.5 → round 2 1253.8. Consistency 62, not polarizing. Coverage badge: yes.
- **S8 rubric:** median 66.3, judge totals [62.4, 66.3, 68.3], spread 5.9, band B.
  - Scores (novelty · why-now · pain · WTP · buildability · demo · defensibility · clarity): 5 · 7 · 7 · 7 · 7 · 8 · 4 · 7.
  - The scores are strongest on demo (8) and weakest on defensibility (4) and novelty (5).
- **S5 quick prior art: direct-competitor.**
  - Competitors: [OutThink](https://outthink.io/products/autonomous-ai-phishing-simulator/) and [Doppel](https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/), both for continuous authorised AI social-engineering simulation.
  - It failed knock-out 1 but stayed in because seed originals are always kept ([S5 survivors](../outputs/s5-reality/survivors.md)).
  - S5 feasibility: yes.
- **S8 deep prior art: adjacent-exists** ([s8-hunter-08](../outputs/s8-final/prior-art-deep/s8-hunter-08.md)).
  - Staff side: [Brightside AI](https://www.brside.com) and [Arsen](https://arsen.co/en/platform/vishing-simulation) run AI-generated multichannel simulations against employees, including cloned voice. Both target staff only. The hunter also named CanIPhish, with no link.
  - Agent side: [Lakera Red](https://www.lakera.ai/lakera-red) runs continuous adversarial testing against a company's own AI agents, but it does not test staff.
  - The hunter found no vendor that combines both halves in one weekly test-fix-retest loop with white-label pricing.
- **Gate D:**
  - The web check verified that [Hoxhunt](https://hoxhunt.com/feature/deepfake-phishing-attack) runs phishing, smishing, vishing and deepfake-audio simulations ([gate-d-verification](../outputs/s8-final/gate-d-verification.md)).
  - KnowBe4, Proofpoint, Promptfoo, Mindgard and HiddenLayer are "well known" but were not checked by Gate D `[unverified]`.
  - Finding C.2: both halves are covered by incumbents, and the bundle with fix-and-retest is the only claim. **The pitch must not claim novelty for either half** ([gates/gate-D.md](../gates/gate-D.md)).
- **Red team's best objection (serious)** ([s8-redteam-04](../outputs/s8-final/red-team/s8-redteam-04.md)):
  - The idea bundles two mature, separately funded categories, and there is no evidence that anyone wants to buy both together.
  - Cloned-voice tests on rank-and-file staff carry legal and consent exposure that executive opt-in alone does not resolve.
  - **Fix:** Validate demand for the bundle with one buyer before building. Otherwise, resell existing vendors under one white-label contract instead of rebuilding both engines.
- **Demo moment:** The engine runs 200 test conversations against a sample support bot and finds 3 that end in a refund approval. It shows the transcript, applies the fix, and the retest comes back green.
- **Knocked out?** No.
  - It failed S5 knock-out 1 but was kept as the seed original.
  - S8 rated it adjacent, not direct, so it was not knocked out there.
  - Gate D did not drop it.
- **Unverified on the card:**
  - The why-now line is `[unverified]`.
  - The seed's two cited incidents, a deepfake-call payout and a chatbot that "agreed" to an absurd sale, are unverified in the seed itself and were not re-sourced.

#### Best improved version

Neither improved card reached the tournament, so neither has a round-2 Elo or an S8 scorecard. Both narrowed the idea toward the bot-testing half, and S5 knocked both out as direct competitors ([S5 survivors](../outputs/s5-reality/survivors.md)).

| Id | Name | What changed | Status | Knock-out evidence |
|---|---|---|---|---|
| I-6005 | Continuous Red-Team for Support Agents | Leads with the support bot and sells staff testing as an add-on to the same buyer. Metered per AI agent each month. | Knocked out in S5 (direct competitor). The S5 audit said `demoable: yes` ([s5-planner-06](../outputs/s5-reality/feasibility/s5-planner-06.md)). | [Mindgard](https://mindgard.ai), CalypsoAI Agentic Warfare (via F5; no URL recorded) and Lakera Red (via Check Point) ([s5-hunter-12](../outputs/s5-reality/prior-art/s5-hunter-12.md)) |
| I-6008 | Continuous adversarial testing for customer-facing AI agents | Bot testing only, with AI and product teams as the buyer. Staff testing and white-label are add-ons. | Knocked out in S5 (direct competitor). | [Lakera Red](https://lakera.ai/lakera-red) and Mindgard |

- **Result:** Taking out the staff half took out the one part of the claim that no hunter could match. The best version of this seed in the run is the original, with its bundle intact.

#### Pivots

None of the five pivots reached the tournament. All five were archived in S4 (cell cap or merge), per `report/scorecards.json` `seeds['seed-09']`. None has an Elo, a rubric score or a prior-art hunt, and each card's why-now line is `[unverified]`.

| Id | Name | Track, cell | Seed atom it keeps | One-liner | Status |
|---|---|---|---|---|---|
| I-6020 | Agent action firewall | Novel, B2B\|agent-infra | A-seed-09-pain-2 (agents can be talked into refunds or leaks) | Sits between a company's AI agent and its action APIs. It holds refunds, discounts or data access for a second check or human approval when the conversation shows manipulation pressure. | archived in S4 |
| I-6021 | AI negotiation sparring partner | Balanced, B2B\|drafter-dialogue | A-seed-09-tech-1 (multi-turn adversarial conversations) | Sales reps rehearse negotiations against AI buyer personas and are scored on where they gave ground. | archived in S4 |
| I-6022 | Alert triage copilot | Balanced, B2B\|verifier | A-seed-09-aud-1 (security and IT leads at mid-sized companies) | Reads overnight security alerts and hands the IT lead only the few that need a human. | archived in S4 |
| I-6023 | Uptime and drift monitor for deployed agents | Balanced, B2B\|verifier | A-seed-09-biz-2 (per-agent monthly pricing, white-label) | Replays client-approved conversations against live agents every day and pages the MSP when scores drop. | archived in S4 |
| I-6024 | Combined exposure score for cyber cover | Novel, B2B\|verifier | A-seed-09-insight-2 (agents are targets alongside staff) | Combines a company's existing staff-simulation results with a one-time probe of its public AI agents into one score for cyber underwriters. | archived in S4 |

- I-6020 and I-6024 are the two pivots that keep the seed's core insight, that a company's AI agents are now targets alongside its staff. They are the ones to reopen if the group prefers a pivot to the original. Neither has been checked for prior art.

#### Atoms in other finalists

- **None.** The seed was broken into 16 atoms ([decomposition](../outputs/s2-seeds/decomposed/seed-09.md)), but its `atom_hybrids` list in `report/scorecards.json` is empty.
- No other finalist, and nothing else in the final 30, carries seed-09 lineage. I-6001 is the seed's only presence in the final set.
- One idea is a near neighbour by theme but not by lineage. I-5203 Scope Gate for Your Own Agent (#28) also blocks an agent's action before it runs, the same pattern as I-6020. It serves a consumer's own agent and was generated independently.

#### Verdict: keep

**Keep I-6001 as the bundle:** it is the highest-ranked seed descendant in the run (#6 overall, tier B), and both attempts to narrow it to the bot-testing half were knocked out as direct competitors.

- **Conditions:**
  - The group confirms the authorised, defensive reading.
  - The pitch claims only the bundle with fix-and-retest (Gate D C.2).
  - The team takes the red team's fix: one buyer validates bundle demand, or the product starts as a white-label resale.
- **Unresolved from the seed:** consent and law remain open, including works-council or employee consent in some countries, proof that the buyer controls the target organisation and any third-party-hosted bot, and verified domain ownership with signed rules of engagement.
- **48-hour scope:** Following the build-effort calibration in [config/context.md](../config/context.md), the demo needs only the bot-testing half, which is what the stated demo moment uses: a team-built sample support bot, a test-conversation generator, a pass/fail check, a guardrail patch and a retest. The S5 audit of the sibling card I-6005 rated this loop `demoable: yes`.

<!-- COMPLETE -->
