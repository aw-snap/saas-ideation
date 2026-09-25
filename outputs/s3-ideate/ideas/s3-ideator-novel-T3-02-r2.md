## Cards

---
id: s3-ideator-novel-T3-02-r2#01
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r2
---

# Wholesale Reorder & Invoice Reconciler

One-liner (≤20 words): An agent reorders pharmacy stock through real vendor checkout and cross-checks every incoming invoice against what it ordered.

Buyer and niche (≤25 words): Independent pharmacy owners on PioneerRx, blocked behind a manual vendor-inquiry API form, reordering from wholesalers by hand today.

Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx access "goes through a manual vendor-inquiry form" with no public API; agencies elsewhere report duplicate and near-duplicate charges slipping past ledger checks unnoticed. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent reads the refill queue inside PioneerRx's own screens, places matching reorders through the wholesaler's agent-checkout flow instead of a scraped order form, then matches each arriving invoice line to its order, flagging price drift or duplicate billing before a pharmacist approves payment.

Why now (≤25 words; name the specific capability): The Agentic Commerce Protocol (Sept 2025) lets an agent complete real checkout with participating merchants, not just click through a form.

Demo moment (≤20 words): A low-stock item triggers an order; the mock invoice arrives $4 higher than quoted and is flagged instantly.

Business model (≤15 words): Per-pharmacy monthly subscription, about $150, priced against one caught overcharge.

---
id: s3-ideator-novel-T3-02-r2#02
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r2
---

# E-Invoice Bridge for Property SoRs

One-liner (≤20 words): Turns machine-only e-invoices vendors now send into ledger entries inside a property system that can't read them.

Buyer and niche (≤25 words): European property managers on AppFolio or Yardi, receiving structured e-invoices from vendors under new national mandates this year.

Pain and evidence (≤40 words; cite the pain dossier file): "Credit card transactions still have to be entered manually" on AppFolio; the vertical system offers no live write path, only batch flat-file export for outside data. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent extracts fields from an incoming structured e-invoice, confirms the sender's network registration is actually active rather than assumed, matches the bill to its purchase order, and writes the coded entry directly into AppFolio's or Yardi's own ledger screens, no export step.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (Dec 2025) parses structured and scanned invoice formats at $2 per 1,000 pages, cheap enough for every vendor bill.

Demo moment (≤20 words): A raw structured invoice file drops in; seconds later the ledger shows a coded, matched entry with registration confirmed.

Business model (≤15 words): Per-property-manager subscription, $99 monthly, undercutting a dedicated e-invoice access-point fee.

---
id: s3-ideator-novel-T3-02-r2#03
track: novel
lineage: seed-atom-hybrid
territory: T3
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [A-seed-07-mech-1, A-seed-07-mech-2]
source_task: s3-ideator-novel-T3-02-r2
---

# Carrier Statement Reflex Matcher

One-liner (≤20 words): A fast reflex agent checks every carrier billing line against the agency's system the instant it posts, not weeks later.

Buyer and niche (≤25 words): Insurance agency account managers on AMS360 or Applied Epic, juggling carrier portals and their own system by hand daily.

Pain and evidence (≤40 words; cite the pain dossier file): Agencies do "double and triple entry" across rating tools and the agency system; a cancellation captured outside it led to a reported $42,000 policy loss. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A cheap, fast reflex model watches each new carrier billing line the moment it appears and instantly checks it against the agency record; only ambiguous or high-value mismatches escalate to a slower reasoning model, which drafts the correction for a CSR to approve.

Why now (≤25 words; name the specific capability): Near-instant, near-free per-event inference [unverified] makes checking every single billing line practical, not just a nightly batch sample.

Demo moment (≤20 words): A carrier posts a cancellation; the dashboard flags the still-open policy within seconds, not next week's run.

Business model (≤15 words): Per-seat subscription, about $150 per CSR monthly, priced against E&O exposure.

---
id: s3-ideator-novel-T3-02-r2#04
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r2
---

# Dealer Parts Agent Checkout

One-liner (≤20 words): A dealership orders parts through real agent checkout instead of paying a per-rooftop system integration toll.

Buyer and niche (≤25 words): Dealer group parts managers on CDK or Reynolds, paying monthly certification fees just to connect one parts-ordering tool.

Pain and evidence (≤40 words; cite the pain dossier file): Certification for a connected parts tool runs "$30,000 upfront... plus roughly $200/mo/rooftop"; one dealer called the pricing model "a blatant extortion racket." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent reads low-stock parts off the dealer system's own parts screen, places the order directly with any supplier offering chat-native checkout, skipping the paid ordering module entirely, then writes the resulting invoice back into the system's parts ledger through the screen so records stay accurate.

Why now (≤25 words; name the specific capability): The Agentic Commerce Protocol is live with real merchants since September 2025, letting an agent buy without a per-rooftop integration.

Demo moment (≤20 words): A low-stock part triggers a real chat checkout; the parts ledger updates from the screen seconds later, no toll paid.

Business model (≤15 words): Flat $300 per rooftop monthly, well under the per-tool toll it replaces.

---
id: s3-ideator-novel-T3-02-r2#05
track: novel
lineage: seed-atom-hybrid
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-novel-T3-02-r2
---

# Migration Invoice-Trail Guardian

One-liner (≤20 words): During a system migration, an agent also rescues every legally-required invoice record staff would otherwise delete.

Buyer and niche (≤25 words): Dental office managers migrating between practice-management systems, receiving e-invoices from supply vendors that carry an 8-year retention duty.

Pain and evidence (≤40 words; cite the pain dossier file): Migrations bring "surprise fees and data loss," including one transfer where staff "basically had to start from scratch on everything." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Before each migration step, the agent shows the office manager evidence of what it found — every original invoice file buried in email or the old system, not just a printed copy — and archives it with one-click undo, so a rushed migration never destroys a legally required record.

Why now (≤25 words; name the specific capability): Desktop computer-use agents (61.4% OSWorld, Sept 2025) inspect old-system files and mailboxes reliably enough to catch what a rushed staffer misses.

Demo moment (≤20 words): Simulate a migration; the agent surfaces a buried invoice file about to be overwritten and archives it before staff approve the next step.

Business model (≤15 words): One-time $500 add-on to any migration project, sold by the outgoing or incoming vendor.

<!-- COMPLETE -->
