---
id: I-5201
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: [I-2052, I-1001]
source_task: s7-mutator-02
operator: combine
---

# Agent Completion Ledger

One-liner (≤20 words): A portable completion-accept-rate score, built from independently witnessed tasks, that marketplaces check before admitting an agent.

Buyer and niche (≤25 words): Bug-bounty platforms and agent marketplaces admitting unknown submitting agents, who need a trust signal cheaper than manual triage of every report.

Pain and evidence (≤40 words; cite the pain dossier file): One company received 1,390 bounty reports in early 2026, about 70% rejected before reproduction; self-reported agent task completion is false 45-48% of the time. (src: outputs/s3-ideate/pain/T7-dossier.md; outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A witness agent re-checks each completion against the real end-state and signs a verdict into the submitting agent's ledger entry. Marketplaces query the ledger's rolling accept rate before granting submission rights or setting fee tiers, replacing manual triage or a CAPTCHA.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5's 61.4% OSWorld computer-use accuracy makes independent, signed completion re-checks cheap enough to log at marketplace scale.

Demo moment (≤20 words): Two agents submit work; the ledger shows one's accept-rate climb and the other's plunge after a live witness re-check.

Business model (≤15 words): Per-query fee to marketplaces checking a score, plus a per-verification fee to the witness.

---

id: I-5202
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: prosumer, capability: agent-infra, track: balanced }
parents: [I-1003, I-3537]
source_task: s7-mutator-02
operator: combine
---

# Per-Task Purchase Envelopes

One-liner (≤20 words): A fresh, expiring virtual card with a merchant lock and hard cap for every purchasing-agent task.

Buyer and niche (≤25 words): Solo makers and small-shop owners who let a purchasing agent restock materials or supplies across several merchant sites unattended.

Pain and evidence (≤40 words; cite the pain dossier file): Payment rails cap a single charge, not a task: a 5-second poll on a two-minute run can trigger 24 separate paid calls with no shared per-task limit. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before a task starts, the owner sets one merchant-locked, amount-capped virtual card that expires when the task ends. Every charge from that task routes through its own card, so the card's limit is the task's limit — no cross-protocol tracking needed, just standard card controls.

Why now (≤25 words; name the specific capability): Merchant-locked, single-use virtual-card APIs (Stripe Issuing, Privacy.com-style controls [unverified]) let software spin up a scoped, expiring card per task in seconds.

Demo moment (≤20 words): Agent restocks from three sites; the card halts and blocks a fourth purchase once the task cap is hit.

Business model (≤15 words): Small percentage of spend managed, plus a flat monthly platform fee.

---

id: I-5203
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2C, capability: agent-infra, track: balanced }
parents: [I-4513, I-2591]
source_task: s7-mutator-02
operator: combine
---

# Scope Gate for Your Own Agent

One-liner (≤20 words): A consumer's agent gets a scoped, expiring mandate; a local gate blocks any action the mandate doesn't cover.

Buyer and niche (≤25 words): Consumers who delegate shopping, bookings or account tasks to their own personal agent and want a hard stop on scope creep.

Pain and evidence (≤40 words; cite the pain dossier file): Payment-mandate protocols authorize a transaction but not what led to it; nothing today stops a personal agent from acting outside the scope its owner actually granted. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The owner grants scopes (what, spend ceiling, expiry) as OAuth-style permissions plus a signed plain-language letter. A local gate intercepts every action the agent proposes, checks it against the mandate before execution, and blocks or holds anything outside scope for owner review.

Why now (≤25 words; name the specific capability): Agent frameworks now support OAuth-style delegated scopes and tool-call interception, letting a local gate check a signed mandate before any action executes.

Demo moment (≤20 words): Agent tries to book a flight over the price ceiling; the gate blocks it live and shows the violation.

Business model (≤15 words): Monthly subscription per consumer, priced per agent connected.

---

id: I-5204
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: [I-3555]
source_task: s7-mutator-02
operator: simplify
---

# License Lookup Snapshot Server

One-liner (≤20 words): One state license-lookup portal, exposed as a single read-only MCP tool with cached, freshness-stamped snapshots for agents.

Buyer and niche (≤25 words): Verification and background-check agents that repeatedly query a public license or entity-registry portal with no API.

Pain and evidence (≤40 words; cite the pain dossier file): Portals like this expose no usable API, only screens, the same gap that walls off practice-management systems; agents now poll these sites directly, repeatedly re-scraping the same records [unverified]. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A computer-use agent logs into the one named portal as an authorized user and exposes a single typed tool, lookup_record, that returns a cached snapshot with a freshness timestamp. Repeat queries hit the cache instead of the live site, and a background refresh keeps snapshots current.

Why now (≤25 words; name the specific capability): Computer-use agents at Sonnet 4.5's OSWorld-class accuracy can now log into a single portal reliably enough to publish one typed, cached tool.

Demo moment (≤20 words): Call lookup_record from a generic AI client; it returns a cached license record instantly instead of a fresh live-portal login.

Business model (≤15 words): Flat monthly fee per portal connector, paid by the agent vendor or integrator.

---

id: I-5205
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: agent-infra, track: balanced }
parents: [I-2028]
source_task: s7-mutator-02
operator: simplify
---

# Published Consent Record

One-liner (≤20 words): A consumer publishes a per-site consent record at a URL; the site checks it before letting their agent act.

Buyer and niche (≤25 words): Individual consumers running their own shopping or account agents against sites that want proof of consent before acting.

Pain and evidence (≤40 words; cite the pain dossier file): Sites can't tell if an AI agent acting on an account is authorized or a hijacked session; without a checkable record they either block all agent traffic or accept any of it. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The consumer publishes a signed consent record (scope, expiry) at a stable URL tied to their account. Before letting the agent act, the site's checkout or login flow fetches that URL and verifies the record is current and covers the requested action, no credential or badge exchanged.

Why now (≤25 words; name the specific capability): Signed, machine-readable consent records at a well-known URL let any site verify agent authorization without adopting a new identity protocol.

Demo moment (≤20 words): A mock site checks the consumer's published consent URL before letting their agent complete checkout, live on screen.

Business model (≤15 words): Free consumer publishing tool; sites pay a small per-check API fee to verify records.

---

id: I-5206
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: [I-2003]
source_task: s7-mutator-02
operator: simplify
---

# Purchase Mandate Verify Endpoint

One-liner (≤20 words): A signed purchase-mandate JSON that a supplier's checkout verifies before accepting an agent's order, no live-page matching needed.

Buyer and niche (≤25 words): Small wholesale suppliers building agent-facing checkout who need to trust an ordering agent's claimed price and quantity.

Pain and evidence (≤40 words; cite the pain dossier file): Payment protocols prove one purchase is authorized, but suppliers have no way to check an agent's claimed order terms before accepting it, risking price or quantity mismatches. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The buying agent's operator signs a mandate (item, price ceiling, quantity, expiry) as JSON. The supplier's checkout calls a verify endpoint with the incoming order; it checks the order against the mandate and returns accept or reject before the order places.

Why now (≤25 words; name the specific capability): Agent Payments Protocol mandates give suppliers a signed, checkable claim to verify against an incoming order in real time.

Demo moment (≤20 words): Agent submits an order at $38 against a $35-ceiling mandate; the verify endpoint rejects it live, showing the mismatch.

Business model (≤15 words): Per-verification fee paid by the supplier, or bundled into their checkout platform.

---

id: I-5207
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: prosumer, capability: agent-infra, track: balanced }
parents: [I-3091]
source_task: s7-mutator-02
operator: transplant
---

# Matter-Billed Agent Run Meter

One-liner (≤20 words): Caps a solo professional's agent-run spend and attributes every run's cost to the client or matter it served.

Buyer and niche (≤25 words): Solo lawyers, accountants and consultants whose agents run browser tasks, paid APIs and model calls billed back to clients.

Pain and evidence (≤40 words; cite the pain dossier file): Agent run costs (browser-agent services, paid APIs, model tokens) stack per call with no shared budget view, so a retry loop can burn a day's billable margin before anyone notices. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A proxy sits between the solo professional's agent and every paid run (browser-agent service, API, model call), tagging each run with a client or matter code. It hard-caps spend per matter and per day, and rolls up cost by matter into a rebillable report.

Why now (≤25 words; name the specific capability): LLM-gateway budget features cap model spend but not browser-agent or API run costs [unverified]; nothing yet attributes cross-tool run cost to a matter.

Demo moment (≤20 words): A runaway browser-agent run hits its matter cap and halts live, with the accrued cost already tagged to the client.

Business model (≤15 words): Percentage of metered spend, plus a flat monthly fee per professional.

---

id: I-5208
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: prosumer, capability: agent-infra, track: balanced }
parents: [I-1517]
source_task: s7-mutator-02
operator: transplant
---

# Agent Key Inventory for Solo Devs

One-liner (≤20 words): Maps every API key and OAuth grant a solo developer's agents use, showing which agent can touch what.

Buyer and niche (≤25 words): Solo developers and indie-hackers running several AI agents who've lost track of which key or grant each agent holds.

Pain and evidence (≤40 words; cite the pain dossier file): Automations and agents run on scattered API keys and OAuth grants with no inventory; nobody notices an over-scoped or stale key until something breaks. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Scans connected SaaS consoles, webhook logs and the developer's password manager for API keys, service accounts and OAuth grants, maps each to the agent that uses it, and lets the developer rotate or revoke any single agent's access from one screen.

Why now (≤25 words; name the specific capability): Okta Agent SSO and similar non-human identity standards now let even a single developer give each agent its own governed, revocable identity.

Demo moment (≤20 words): Live: the inventory reveals a forgotten agent still holding a full-access key, then revokes just that one grant.

Business model (≤15 words): Flat monthly subscription per developer, priced below one incident's cleanup cost.

---

id: I-5209
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2C, capability: agent-infra, track: novel }
parents: [I-4529]
source_task: s7-mutator-02
operator: transplant
---

# Credentials That Expire With the Task

One-liner (≤20 words): A consumer's agent gets credentials scoped to one run; they verify once, then expire the instant the task ends.

Buyer and niche (≤25 words): Consumers who send their agent to complete a single online task and want no standing credential left behind after it's done.

Pain and evidence (≤40 words; cite the pain dossier file): Agents today reuse the same standing login or API key across every task, so one compromised run exposes every future action instead of just the one it was scoped for. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): When a consumer starts a task, the agent requests a credential scoped to that one run. The counterparty site verifies it like any login, and it auto-expires the moment the task completes or its scope is used up.

Why now (≤25 words; name the specific capability): Non-human identity standards (Okta Agent SSO, GA August 2026) now let a consumer-side agent request a single-run credential instead of a standing login.

Demo moment (≤20 words): Agent completes a mock checkout; its credential shows live as valid, then flips to expired the instant the order confirms.

Business model (≤15 words): Per-credential-issued micro-fee, paid by the site or bundled into the agent platform's subscription.

---

id: I-5210
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: [I-1003, I-1001]
source_task: s7-mutator-02
operator: far-jump
---

# Witnessed Escrow for Agent Deals

One-liner (≤20 words): A buying agent and selling agent settle through escrow that releases per-call payment only on a witnessed completion.

Buyer and niche (≤25 words): Agent marketplaces where one agent buys a data feed, task or service from another agent with no existing trust relationship.

Pain and evidence (≤40 words; cite the pain dossier file): False completion claims run 45-48% of production agent failures, yet per-call payment protocols release funds on the call alone, with no check that paid-for work happened [unverified]. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The buying agent funds escrow for a task; the selling agent performs it and claims done. A witness agent re-checks the real end-state against the claim; escrow releases payment only on a pass, or returns funds on a fail.

Why now (≤25 words; name the specific capability): x402 and AP2 moved money per call in 2025; card-network agent-payment programs are emerging [unverified], but none confirms delivered work.

Demo moment (≤20 words): Selling agent falsely claims delivery done; the witness catches it, and escrow returns the buyer's funds instead of releasing them.

Business model (≤15 words): Small percentage fee on each escrowed transaction, paid by the buying agent's operator.

<!-- COMPLETE -->
