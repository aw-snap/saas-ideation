### seed-10: what changed

Weakest criteria: novelty (adjacent agent-assist and scam-flagging tools already exist separately), pain evidence (mostly inferred, no stakes named), buildability/demo (live telephony integration and a three-in-one bundle blur the 48-hour build). Fix: narrowed the niche to compliance-regulated call centers (debt collection, insurance claims, financial services) where missed disclosures carry fines, cut the demo to browser-capture replay of one verification-rule violation, and tied pricing to a compliance add-on.

---
id: s3-improver-late-01#01
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-10]
source_task: s3-improver-late-01
---

# Compliance Call Copilot

One-liner (≤20 words): Live AI that listens to regulated call-center calls, flags compliance and scam risks, and escalates on request.
Buyer and niche (≤25 words): Debt-collection, insurance-claims and financial-services call centers without dedicated compliance coaches; bought by compliance, fraud-risk or call-center operations managers.
Pain and evidence (≤40 words; cite the pain dossier file): Agents must follow scripted disclosures, verify caller identity and take notes live, so missed disclosures risk fines and unverified callers get through; supervisors can't monitor every call, and review catches violations only afterward. (src: inputs/seeds/seed-10.md)
How it works (≤50 words): The live transcript streams into the assistant, which privately surfaces a required disclosure, a verify-identity alert when a request breaks a scripted compliance rule, or a playbook prompt. A configured phrase such as "help" discreetly pings a supervisor. Built on browser-based call capture and replay, so no telephony integration is needed for the pilot.
Why now (≤25 words; name the specific capability): Low-latency streaming speech-to-text combined with fast language models that reason over a live transcript and a compliance script within seconds [unverified].
Demo moment (≤20 words): Replaying a recorded claims call, a request breaks a verification rule; the assistant privately flags it and pings a supervisor in one tap.
Business model (≤15 words): Per-seat monthly fee plus a compliance-reporting add-on priced per flagged call reviewed.

### seed-09: what changed

Weakest criteria: novelty/defensibility (staff-side and bot-side incumbents each cover half the claim, and the two buyers may not share a procurement motion), pain evidence (both cited incidents are unverified), business model (dual-buyer pricing was fuzzy). Fix: narrowed the buyer to security/AI-safety teams at companies whose agents already hold transaction authority, made staff testing an add-on sold to that same buyer, and dropped the unverified anecdotes for a defensible capability-gap claim.

---
id: s3-improver-late-01#02
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-09]
source_task: s3-improver-late-01
---

# Continuous Red-Team for Support Agents

One-liner (≤20 words): Continuously runs authorised persuasion attacks against a company's support AI and staff, then fixes what fails.
Buyer and niche (≤25 words): Security and AI-safety teams at companies whose support AI agents can approve refunds or account changes; staff testing sold as an add-on.
Pain and evidence (≤40 words; cite the pain dossier file): AI agents with transaction authority can be persuaded into refunds, discounts or data leaks, a gap staff-only phishing training ignores. Existing agent red-teaming checks prompt injection, not sustained persuasion; annual pentests and generic phishing simulators miss both. (src: inputs/seeds/seed-09.md)
How it works (≤50 words): The client approves targets, channels and hard limits before any test; executives opt in before synthetic voice is used. The engine runs persuasion-style conversations against the client's support or sales agent, testing whether it approves refunds or exceptions it shouldn't. Each failure returns with a guardrail fix and automatic retest.
Why now (≤25 words; name the specific capability): Language models now generate tailored multi-turn persuasion conversations against live agents in minutes, as companies give support bots refund and account authority [unverified].
Demo moment (≤20 words): Against a sample support chatbot, 200 persuasion attempts find 3 refund approvals; show the transcript, apply a fix, retest green.
Business model (≤15 words): Metered per AI agent tested monthly; staff-testing add-on billed per employee to the same buyer.

### seed-11: what changed

Weakest criteria: why-now (the closest prior art is research-stage, so novelty needed sharpening), business model (closed AAC platforms may never expose phrase banks for licensing), buildability (no defined path to a sample phrase bank or a workable demo). Fix: made it a standalone companion app that imports the user's own phrase bank as a standard file, sidestepping platform access; grounded why-now in on-device model speed; narrowed the demo to an importable file plus a replayed recording.

---
id: s3-improver-late-01#03
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: [seed-11]
source_task: s3-improver-late-01
---

# AAC Phrase Ranking Companion

One-liner (≤20 words): A standalone companion app that listens to conversation and ranks an AAC user's own imported phrases for faster replies.
Buyer and niche (≤25 words): AAC users on eye-tracking or switch-scanning devices who can export their phrase bank; also speech-language therapists, schools and clinics who set it up.
Pain and evidence (≤40 words; cite the pain dossier file): Finding the right saved phrase means navigating folders while the conversation moves on, and typing or searching often takes long enough that the moment to reply has passed, even with a well-stocked phrase bank. (src: inputs/seeds/seed-11.md)
How it works (≤50 words): Imports the user's phrase bank as a standard export file, so it works with any AAC device without platform access. It listens to the partner's words, ranks the user's own approved phrases by relevance, and surfaces a few at top. It never composes; listening switches off anytime.
Why now (≤25 words; name the specific capability): Small, fast on-device speech and embedding models now run locally on tablets and eye-gaze devices, making low-latency ranking practical outside a research lab [unverified].
Demo moment (≤20 words): Import a sample phrase-bank file; replay a consented recorded conversation and watch matching phrases rise to the top.
Business model (≤15 words): Direct subscription for the companion app; disability or education funding covers costs; device-maker licensing later.

<!-- COMPLETE -->
