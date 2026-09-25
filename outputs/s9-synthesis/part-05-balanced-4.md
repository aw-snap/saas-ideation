### Balanced #4: Continuous authorised social-engineering testing (I-6001), overall #6, tier B

- **Lineage / cell:** seed-original (seed-09, your own seed); B2B\|agent-infra\|balanced; no territory (seed lane). [Card](../archive/ideas/I-6001.md)
- **One-liner:** Authorised AI-driven social-engineering tests against company staff and AI agents, run weekly, with fix and retest for each failure.
- **Niche:** Security teams and IT leads at mid-sized companies that use copilots or customer-facing AI agents. Pentest firms and managed security providers could white-label it.
- **Pain and evidence:** AI makes phishing, texts and cloned-voice calls cheap and convincing, and deployed AI agents can be talked into refunds or leaks. Existing tests are manual annual pentests or generic simulation templates. The card's only source is the [seed file](../inputs/seeds/seed-09.md). No pain dossier or statistic backs it.
- **How it works:** This is an authorised, consented testing service, and it has two halves.
  - The client signs off on scope and hard limits: targets, channels and what is off-limits. Executives opt in before any synthetic voice is used.
  - The staff half runs simulated email, text and voice tests built only from client-approved information.
  - The agent half runs adversarial test conversations against the client's own bots.
  - Each failure gets a 60-second lesson (staff) or a guardrail fix (bot), followed by an automatic retest.
- **Tech unlock:** Language models generate tailored multichannel test scenarios and multi-turn adversarial test conversations in minutes. At the same time, companies are deploying AI agents that can approve refunds `[unverified]` on the card. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-02.md) says no specific tech card is needed beyond standard LLM chat. Voice channels would add TC-27/TC-29.
- **Prior art:**
  - Quick verdict: **direct-competitor**, citing [OutThink](https://outthink.io/products/autonomous-ai-phishing-simulator/) and [Doppel](https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/). It survived S5 only because seed originals are kept ([survivors](../outputs/s5-reality/survivors.md)).
  - Deep verdict: adjacent-exists. [Brightside AI](https://www.brside.com) and [Arsen](https://arsen.co/en/platform/vishing-simulation) run staff vishing simulations, and [Lakera Red](https://www.lakera.ai/lakera-red) red-teams AI agents. No vendor combines both into one weekly test-fix-retest loop.
  - Web-verified: [Hoxhunt](https://hoxhunt.com/feature/deepfake-phishing-attack) runs phishing, smishing, vishing and deepfake-audio simulations ([gate-d-verification.md](../outputs/s8-final/gate-d-verification.md)). KnowBe4, Proofpoint, Promptfoo and HiddenLayer are `[unverified]`.
  - Both of seed-09's improved versions were knocked out in S5 as direct competitors: I-6008 by [Lakera Red](https://lakera.ai/lakera-red) and I-6005 by [Mindgard](https://mindgard.ai).
  - Gate D (C.2): each half is covered by incumbents. The only claim is the bundle with fix-and-retest, and the pitch must not claim novelty for either half.
- **Pricing:** Per employee per year for staff tests, per AI agent per month for bot tests, and white-label pricing for security firms. The card gives no price points.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A scope sign-off screen for targets, channels and hard limits. No test runs without it.
    - A team-built sample support chatbot with a refund tool.
    - An LLM test runner that holds a batch of adversarial test conversations with that bot and logs every transcript.
    - A checker that flags policy failures, such as an unauthorised refund approval.
    - A guardrail fix and an automatic retest, with a pass/fail dashboard.
  - **Out of scope:**
    - Synthetic-voice tests and any live-employee tests. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-02.md) names their consent and ethics overhead as the riskiest part and says it can't be settled in 48 hours, so the demo runs on the chat channel only.
    - Real client bots and the white-label console.
  - Feasibility is `yes`: the generate, detect, fix and retest loop is plain LLM orchestration against a target the team builds itself.
- **Demo moment:** Against a sample support chatbot, 200 test conversations find 3 refund approvals. Show the transcript, apply the fix, and the retest comes back green.
- **Red team's best objection (serious):** The idea bundles two mature, separate categories (human vishing simulators and AI-agent red-teaming), and there is no evidence that anyone wants both together. Cloned-voice tests on rank-and-file staff also carry real consent and legal exposure.
  - **Fix:** Validate demand for the bundle with one buyer first, or resell existing vendors under one white-label contract instead of rebuilding.
- **Scores:** 5 · 7 · 7 · 7 · 7 · 8 · 4 · 7.
  - Judge totals [62.4, 66.3, 68.3], median 66.3, spread 5.9.
  - Elo 1230.5 → 1253.8, consistency 62 (not polarizing), feasibility yes.

<!-- COMPLETE -->
