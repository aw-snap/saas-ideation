### seed-09 pivot: keeps A-seed-09-pain-2 (deployed AI agents can be talked into refunds, policy exceptions or data leaks)

---
id: s3-pivoter-late-02#01
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: [seed-09, A-seed-09-pain-2]
source_task: s3-pivoter-late-02
---

# Agent action firewall

One-liner (≤20 words): Real-time guardrail that blocks AI agents from approving refunds, discounts or data access when a conversation shows persuasion pressure.
Buyer and niche (≤25 words): Product and platform teams running customer-facing AI agents at mid-sized SaaS and retail companies.
Pain and evidence (≤40 words; cite the pain dossier file): Deployed AI agents can be talked into refunds, policy exceptions or data leaks; staff-only training and after-the-fact logs don't stop it. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Sits between the agent and its action APIs. Scores each turn for manipulation patterns (urgency, authority spoofing, repeated reframing) and holds high-risk actions for a second model check or human approval before execution, with an audit trail.
Why now (≤25 words; name the specific capability): recent guardrail/classifier models can score conversational manipulation and gate tool calls inline in milliseconds [unverified].
Demo moment (≤20 words): A chatbot is talked toward a $1 sale; the firewall halts the tool call and flags the pattern.
Business model (≤15 words): Priced per protected AI agent per month, tiered by transaction volume.

### seed-09 pivot: keeps A-seed-09-tech-1 (language models generating tailored scenarios and running multi-turn adversarial conversations)

---
id: s3-pivoter-late-02#02
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: [seed-09, A-seed-09-tech-1]
source_task: s3-pivoter-late-02
---

# AI negotiation sparring partner

One-liner (≤20 words): AI-generated adversarial buyer personas that grill sales reps in realistic multi-turn negotiations before a real call.
Buyer and niche (≤25 words): Sales enablement leads and sales managers at B2B companies onboarding new account executives.
Pain and evidence (≤40 words; cite the pain dossier file): New reps lose deals to objections and pressure tactics they've never rehearsed against; role-play with a manager doesn't scale and isn't realistic. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Rep picks a deal scenario; the model plays a skeptical or aggressive buyer persona built from the account's public info, runs a multi-turn negotiation by chat or voice, then scores where the rep folded and suggests a stronger line.
Why now (≤25 words; name the specific capability): LLMs can hold a consistent adversarial persona across many conversational turns and adapt objections to context [unverified].
Demo moment (≤20 words): Rep pitches a fake renewal; the AI buyer pushes for a 40% discount, then the coach flags the turn.
Business model (≤15 words): Per-seat monthly subscription for sales teams.

### seed-09 pivot: keeps A-seed-09-aud-1 (security teams and IT leads at mid-sized companies)

---
id: s3-pivoter-late-02#03
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-09, A-seed-09-aud-1]
source_task: s3-pivoter-late-02
---

# Alert triage copilot

One-liner (≤20 words): AI that reads every security alert overnight and hands the IT lead only the three that need a human.
Buyer and niche (≤25 words): Security teams and IT leads at mid-sized companies without a dedicated SOC.
Pain and evidence (≤40 words; cite the pain dossier file): Small IT teams drown in alerts from endpoint, email and cloud tools; most are noise, but missing the real one is costly, and there's no budget for a 24/7 analyst. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Connects to existing security tool alert feeds, correlates related alerts into one incident, checks each against the org's known-good baseline, and writes a plain-language summary with a recommended action for anything unresolved by morning.
Why now (≤25 words; name the specific capability): models can now read structured alert logs together with free-text notes and triage close to a junior analyst [unverified].
Demo moment (≤20 words): 400 overnight alerts collapse into 3 incidents, each with a one-paragraph explanation and a suggested fix.
Business model (≤15 words): Flat monthly fee per connected security tool, tiered by alert volume.

### seed-09 pivot: keeps A-seed-09-biz-2 (per AI agent per month pricing with white-label pricing for security firms)

---
id: s3-pivoter-late-02#04
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-09, A-seed-09-biz-2]
source_task: s3-pivoter-late-02
---

# Uptime and drift monitor for deployed agents

One-liner (≤20 words): Continuously tests a company's live AI agents for hallucination, latency and broken tool calls, and pages when scores drop.
Buyer and niche (≤25 words): Managed service providers and IT consultancies running AI agents for multiple small-business clients.
Pain and evidence (≤40 words; cite the pain dossier file): Once an AI agent goes live, teams have no ongoing way to know if a model update or prompt drift made it worse; issues surface only when customers complain. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Replays a client-approved set of representative conversations against the live agent daily, scores answers for accuracy, tool-call success and latency against a baseline, and alerts the consultancy when any score drops past a threshold.
Why now (≤25 words; name the specific capability): frequent, cheap LLM-graded evaluation of another model's output can now run daily per agent [unverified].
Demo moment (≤20 words): A prompt change silently breaks a booking tool call; the monitor's daily run catches the drop within a day.
Business model (≤15 words): Priced per monitored AI agent per month, with white-label dashboards for reselling MSPs.

### seed-09 pivot: keeps A-seed-09-insight-2 (a company's AI agents are now social-engineering targets alongside its staff)

---
id: s3-pivoter-late-02#05
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [seed-09, A-seed-09-insight-2]
source_task: s3-pivoter-late-02
---

# Combined exposure score for cyber cover

One-liner (≤20 words): A single score blending how exploitable a company's staff and its AI agents are, sold to cyber insurers.
Buyer and niche (≤25 words): Cyber-insurance underwriters and brokers pricing policies for mid-sized companies that use customer-facing AI agents.
Pain and evidence (≤40 words; cite the pain dossier file): Insurers price social-engineering risk from staff phishing stats alone and have no signal on a company's customer-facing AI agents, an attack surface now large enough to shift payout risk. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Aggregates a client company's existing phishing-simulation results with a one-time automated probe of its public-facing AI agents' resistance to manipulation, converts both into one exposure score and trend line the underwriter uses at renewal.
Why now (≤25 words; name the specific capability): automated adversarial probing of live customer-facing chat agents is now fast enough for a one-off underwriting check [unverified].
Demo moment (≤20 words): Two similar companies get different premiums after one support bot fails 15% of probes and the other 2%.
Business model (≤15 words): Per-assessment fee paid by the insurer or broker at each policy renewal.

<!-- COMPLETE -->
