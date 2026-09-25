## Cards

---
id: s3-ideator-balanced-T2-02-r2#01
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r2
---

# The Mandate Gate

One-liner (≤20 words): Blocks an AP2 payment mandate from signing until the invoice behind it matches the purchase order.

Buyer and niche (≤25 words): Small-firm bookkeepers and controllers running agent-driven accounts payable that pays vendor e-invoices through signed payment mandates.

Pain and evidence (≤40 words; cite the pain dossier file): Ledger duplicate checks catch only exact vendor-plus-number matches, so altered or duplicate invoices slip through to payment, and once a payment mandate signs, the money is already gone. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Before the AP agent signs an AP2 Payment mandate, cross-checks the invoice's line items, amount and bank details against the PO and invoice history, the same evidence-first check litigators now run on AI citations before filing; mismatches hold the mandate and route to a human.

Why now (≤25 words; name the specific capability): AP2 (TC-13)'s signed Intent, Cart and Payment mandates create one clear checkpoint to verify before an agent authorizes real money to move.

Demo moment (≤20 words): An invoice with an altered line item hits the mandate flow; the mandate holds and shows the mismatched field live.

Business model (≤15 words): $0.10 per payment mandate verified, sold as an add-on to AP automation platforms.

---
id: s3-ideator-balanced-T2-02-r2#02
track: balanced
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [A-seed-07-mech-1, A-seed-07-mech-2]
source_task: s3-ideator-balanced-T2-02-r2
---

# Reflex Invoice Screen

One-liner (≤20 words): A fast reflex model screens every incoming invoice document instantly, escalating only anomalies for deeper checking.

Buyer and niche (≤25 words): Small-firm bookkeepers whose inbox mixes true e-invoices with ordinary PDFs and scans during the mandate switchover.

Pain and evidence (≤40 words; cite the pain dossier file): Even where e-invoicing is mandatory, 96% of German firms still receive invoices by email, so a clerk must sort true e-invoices from ordinary PDFs and scans by hand, all day. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): A fast reflex pass classifies every incoming document the moment it lands, structured e-invoice, ordinary PDF, or scan, the same triage instinct maintainers now use to sort real reports from a flood of AI-generated ones; only ambiguous documents escalate to a slower pass and a human.

Why now (≤25 words; name the specific capability): A near-instant, near-free reflex layer [unverified] sorts every document on arrival, feeding straight into AP2 (TC-13) payment-mandate prep instead of a manual queue.

Demo moment (≤20 words): A mixed batch of PDFs, scans and XRechnung XML lands; each sorts correctly in under a second, one escalated.

Business model (≤15 words): Flat per-mailbox fee, 12 euro per month, sold through Steuerberater as an intake add-on.

---
id: s3-ideator-balanced-T2-02-r2#03
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r2
---

# Invoice Trust Stamp

One-liner (≤20 words): Pre-verifies a small vendor's own e-invoice so the buyer's payment agent auto-approves it instantly.

Buyer and niche (≤25 words): Small vendors, like craft-trade suppliers and carriers, issuing e-invoices under EU mandates to buyers who now auto-pay via agents.

Pain and evidence (≤40 words; cite the pain dossier file): Adoption is inconsistent and rejections are common through the switchover, so an unverified invoice sits waiting on manual buyer review, delaying payment for the small firm that sent it. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Cross-checks the vendor's own outgoing invoice against the underlying contract and delivery record before it sends, then attaches a signed attestation the buyer's payment agent can trust automatically, the same source-of-truth check a court now expects before an AI-assisted filing goes out.

Why now (≤25 words; name the specific capability): AP2 (TC-13) mandates let a buyer's agent trust a signed attestation instead of routing every invoice to a human.

Demo moment (≤20 words): A stamped invoice is sent; the buyer's payment agent signs its mandate and pays within seconds, no human review.

Business model (≤15 words): Per-invoice attestation fee, 0.50 euro, paid by the vendor issuing the invoice.

---
id: s3-ideator-balanced-T2-02-r2#04
track: balanced
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T2-02-r2
---

# Refund Mandate Drafter

One-liner (≤20 words): Catches a duplicate agent payment, drafts the refund mandate with evidence, and waits for approval.

Buyer and niche (≤25 words): Small-firm bookkeepers whose agent-run accounts payable now pays vendors automatically through signed payment mandates.

Pain and evidence (≤40 words; cite the pain dossier file): Near-duplicate invoices from reformatted numbers or repeated imports slip past exact-match checks and get paid twice, discovered only at month-end reconciliation after the money is already gone. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Scans completed payment mandates for duplicate vendor-amount-date patterns, shows the two matched invoices side by side as evidence, drafts a refund Intent mandate citing that evidence, and holds it for one-click human approval before it executes, with a full undo trail.

Why now (≤25 words; name the specific capability): AP2 (TC-13)'s same mandate structure that authorizes a payment can authorize its reversal, once a human approves the evidence.

Demo moment (≤20 words): Two near-duplicate invoices are shown paid; the drafted refund mandate appears with both invoices highlighted, ready to approve.

Business model (≤15 words): Contingency fee, 10% of recovered duplicate payments.

---
id: s3-ideator-balanced-T2-02-r2#05
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r2
---

# Payment Audit Trail Builder

One-liner (≤20 words): Proves every agent-authorized payment this month had a real, matched invoice behind it.

Buyer and niche (≤25 words): Small-firm bookkeepers and controllers preparing for month-end close or an audit of agent-run accounts payable.

Pain and evidence (≤40 words; cite the pain dossier file): Missing paperwork holds up every month-end close, and once payments run through an automated agent, no one can show afterward which mandate had a verified invoice behind it. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Walks every payment mandate signed that period, pulls the matched invoice, PO and delivery record behind it, and flags any mandate that signed without one, producing the kind of source-checked record a court now expects before it accepts an AI-assisted filing.

Why now (≤25 words; name the specific capability): AP2 (TC-13) mandates leave a structured trail an auditor can walk automatically, instead of reconstructing it from email.

Demo moment (≤20 words): A month of payment mandates is scanned; one mandate with no matched invoice is flagged red.

Business model (≤15 words): Flat monthly fee per ledger, $39, sold ahead of month-end close.

<!-- COMPLETE -->
