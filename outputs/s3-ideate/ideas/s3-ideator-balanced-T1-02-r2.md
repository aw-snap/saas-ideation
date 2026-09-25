## Cards

---
id: s3-ideator-balanced-T1-02-r2#01
track: balanced
lineage: seed-atom-hybrid
territory: T1
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [A-seed-03-mech-1, A-seed-03-mech-2]
source_task: s3-ideator-balanced-T1-02-r2
---

# Payer Playbook Captured By Voice

One-liner (≤20 words): Billers narrate how they cracked a payer's quirky PA form; the agent builds a living per-payer playbook automatically.

Buyer and niche (≤25 words): Practice managers at small medical practices who lose payer-specific know-how whenever a senior biller retires or a staff member leaves.

Pain and evidence (≤40 words): Practices hire dedicated staff just to fight payer complexity, and denial research means "exhaustive research" digging through portals for facts payers won't surface cleanly. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): After resolving a tricky denial or PA quirk, a biller narrates what worked aloud; on-device speech recognition transcribes and an LLM extracts a structured, confidence-tagged playbook entry per payer and code, so the next staffer facing the same payer sees the fix instead of re-researching it.

Why now (≤25 words): Kyutai's open-weight streaming speech recognition (TC-31) transcribes locally with no per-minute fee, so narrating notes costs nothing and stays private.

Demo moment (≤20 words): Narrate how you got payer X to approve an MRI; watch a structured playbook card appear instantly.

Business model (≤15 words): Per-practice subscription, priced as cheaper insurance against knowledge walking out the door.

---
id: s3-ideator-balanced-T1-02-r2#02
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r2
---

# Coverage Lapse Early-Warning Sentinel

One-liner (≤20 words): Flags patients whose Medicaid or Medicare Advantage coverage is quietly lapsing before their next claim gets denied.

Buyer and niche (≤25 words): Front-desk and billing staff at small practices with a Medicaid or Medicare Advantage patient panel prone to procedural coverage loss.

Pain and evidence (≤40 words): Eligibility checks are already a portal-by-portal grind, and elsewhere 69% of Medicaid disenrollments are purely procedural paperwork lapses invisible to a practice until a claim denies. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Before each visit, the agent checks the patient's payer portal for early lapse signals — pending redetermination notices, hold statuses, plan-termination flags — the same signals that precede a procedural Medicaid disenrollment, and surfaces a worklist so staff can help the patient fix paperwork before the claim is denied.

Why now (≤25 words): Production-adjacent browser agents (TC-06, TC-07) already read portal status fields reliably enough to run this check per scheduled patient.

Demo moment (≤20 words): A patient's Medicaid status shows "pending redetermination"; the sentinel flags it three days before their appointment.

Business model (≤15 words): Per-practice monthly fee, priced against one avoided denial per month.

---
id: s3-ideator-balanced-T1-02-r2#03
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r2
---

# Remittance Anomaly Watchdog

One-liner (≤20 words): Watches every incoming remittance for underpayment, duplicate processing or a stalled claim, the way fraud monitors watch a bank account.

Buyer and niche (≤25 words): Billing managers at small practices exposed to rising denial rates and single-point-of-failure clearinghouse outages.

Pain and evidence (≤40 words): The average initial denial rate rose to 11.8% in 2024, a payer data feed broke for 16 weeks forcing duplicate manual re-entry, and 78% of practices lost revenue when their clearinghouse went down with no one watching. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): The agent ingests each remittance as it arrives, checks paid amounts against the practice's contracted fee schedule, and flags underpayments, duplicate postings or a claim stalled past normal cycle time — the same early-warning pattern consumer tools use for account fraud.

Why now (≤25 words): Cheap long-context inference (TC-25) lets the agent hold a practice's full contracted-rate schedule against every incoming remittance for pennies.

Demo moment (≤20 words): Feed in a week of remittances; the watchdog flags one claim paid $340 under the contracted rate.

Business model (≤15 words): Percentage of recovered underpayments, plus a flat monitoring fee.

---
id: s3-ideator-balanced-T1-02-r2#04
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r2
---

# PA Phone Call Copilot

One-liner (≤20 words): Transcribes a live payer phone call in real time and turns it straight into a submittable appeal file.

Buyer and niche (≤25 words): Practice staff and physicians stuck on peer-to-peer authorization calls with payer medical directors, still the slowest escalation path.

Pain and evidence (≤40 words): Staff spend 20-30 minutes on the phone to get one MRI authorized, and peer-to-peer escalation is the slow workaround when portals and PA denials stall care. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): During the call, on-device streaming transcription captures both sides in real time; an LLM extracts the payer's stated approval criteria and any commitment made, and drafts a structured case file citing exactly what the payer's representative said, ready to file as proof if the payer later disputes it.

Why now (≤25 words): Kyutai's streaming speech recognition (TC-31) transcribes with about 500ms delay and built-in voice detection, cheap enough for every call.

Demo moment (≤20 words): Play a mock peer-to-peer call; a structured, quote-cited case file appears the moment the call ends.

Business model (≤15 words): Per-seat monthly fee, bundled with the practice's existing prior-auth workflow tools.

---
id: s3-ideator-balanced-T1-02-r2#05
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r2
---

# Portal Reboarding Autopilot

One-liner (≤20 words): When staff change, re-registers and re-authorizes practice access across every payer portal automatically instead of one by one.

Buyer and niche (≤25 words): Practice managers handling staff turnover or practice acquisitions who must rebuild portal access from scratch at each of 7-11+ payers.

Pain and evidence (≤40 words): A lockout is fixed only by creating a brand-new account and waiting for approval, and payers retire and migrate portals on their own schedule, forcing re-registration and retraining each time. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): Triggered by a staff or ownership change, the agent works through each connected payer's own re-registration process — new-user forms, provider attestations, approval-wait tracking — reporting which portals are pending, approved or still stuck, so nothing quietly stays locked out while one person tries to remember which payer wants what.

Why now (≤25 words): Production-adjacent browser agents (TC-06, TC-07) already fill legacy portal registration and attestation forms with no usable API.

Demo moment (≤20 words): Trigger a staff change; watch seven payer re-registration forms submit in parallel with live status per payer.

Business model (≤15 words): One-time onboarding fee per staff change, plus a small ongoing monitoring subscription.

<!-- COMPLETE -->
