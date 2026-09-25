## Cards

---
id: s3-ideator-balanced-T2-01-r3#01
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r3
---

# Shared Peppol Handshake Line

One-liner (≤20 words): A WhatsApp thread both buyer and supplier watch, where one shared message settles whether an e-invoice actually arrived.

Buyer and niche (≤25 words): Procurement officers at manufacturers and their small EU parts suppliers, both blind to whether Peppol e-invoices were really delivered.

Pain and evidence (≤40 words): "Many SMEs assume they're 'on Peppol'... and can't tell whether invoices they sent arrived," so late payment and fines land on one side while the other insists it sent the invoice. (src: outputs/s3-ideate/pain/T2-dossier.md, P12)

How it works (≤50 words): A bot sits in a WhatsApp or Slack channel shared by the buyer's AP clerk and the supplier's biller. When an invoice is due, it checks live Peppol registration and delivery receipts and posts one timestamped confirmation both sides can screenshot, replacing "I sent it" versus "we never got it."

Why now (≤25 words): Browser agents (Claude for Chrome, Skyvern; TC-03, TC-07) can confirm live portal registration and delivery receipts across access points cheaply, in real time.

Demo moment (≤20 words): A seeded supplier "sends" a mock invoice; the bot posts "sent + received, 14:02" to both sides of the live channel.

Business model (≤15 words): Buyer subscribes per connected supplier; supplier joins the channel free.

---
id: s3-ideator-balanced-T2-01-r3#02
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r3
---

# Rejection Diagnosis Channel

One-liner (≤20 words): Puts the exact validator rule an invoice broke into a channel both buyer and supplier watch, so nobody guesses whose system is at fault.

Buyer and niche (≤25 words): AP clerks and their small suppliers' billers in France and Germany, disputing whether a rejected structured invoice is the buyer's or the supplier's fault.

Pain and evidence (≤40 words): French platforms auto-reject invoices with missing fields or SIREN/SIRET mismatches, and "le refus... bloque le cycle de paiement"; German software can "generiert keine valide XRechnung" with no fix date, each side blaming the other's system. (src: outputs/s3-ideate/pain/T2-dossier.md, P13)

How it works (≤50 words): When a platform rejects an invoice, the bot posts the exact rule broken and the specific field to fix into a shared Teams or Slack channel joined by the buyer's AP contact and the supplier's biller, then tracks resubmission until the invoice validates, so both sides watch one resolution instead of separate emails.

Why now (≤25 words): Cheap 1M-token context (TC-25) holds the full XRechnung and Factur-X rule tables plus the message thread in one prompt.

Demo moment (≤20 words): Post one SIREN-mismatch rejection code; the bot replies to both channel members with the cause and the exact fix.

Business model (≤15 words): Buyer pays a monthly fee per active supplier dispute channel.

---
id: s3-ideator-balanced-T2-01-r3#03
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r3
---

# Dock-to-Invoice Confirm Line

One-liner (≤20 words): Buyer's dock and supplier's driver each text their own delivery count; the bot only calls it matched when both agree.

Buyer and niche (≤25 words): Receiving clerks at manufacturers and the small suppliers' dispatchers who deliver to them, each holding a different count of what actually arrived.

Pain and evidence (≤40 words): "A missing invoice is common when a manager approves a purchase but sends the paperwork late," leaving a manual chase list every month-end with no shared record of what was actually delivered at the time. (src: outputs/s3-ideate/pain/T2-dossier.md, P7)

How it works (≤50 words): At the loading dock, the receiving clerk texts a photo and count to a shared WhatsApp number; the supplier's dispatcher independently confirms the shipped count from their side. The bot compares the two counts, flags any mismatch immediately, and stores the agreed figure as the record both sides cite when the invoice lands.

Why now (≤25 words): Cheap document and image parsing (Mistral OCR 3, TC-30) reads photo counts from either side instantly, at a fraction of a cent each.

Demo moment (≤20 words): Two mock threads report 480 versus 500 units; the bot flags the mismatch live, before month-end.

Business model (≤15 words): Per-PO fee paid by the buyer, bundled into an AP seat license.

---
id: s3-ideator-balanced-T2-01-r3#04
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r3
---

# Rate-Con Confirm Line

One-liner (≤20 words): Broker and carrier text-confirm a load's rate before pickup, so the number isn't relitigated when the invoice finally arrives.

Buyer and niche (≤25 words): Billing staff at small freight brokers and the independent carriers they book, who each keep their own paperwork and dispute the agreed rate after delivery.

Pain and evidence (≤40 words): Billing staff "audit incoming carrier invoices... against the BOL, the rate confirmation and the POD, then key into accounting," built by hand from templates every load, with no shared record locking the rate up front. (src: outputs/s3-ideate/pain/T2-dossier.md, P8)

How it works (≤50 words): The broker texts the rate and load terms to a shared SMS or WhatsApp line; the carrier replies "confirm" or disputes it right there. The bot locks the agreed terms as the shared source of truth, so when the carrier's invoice later needs auditing against the BOL and POD, both sides already agree on the number.

Why now (≤25 words): Cheap large-context inference (TC-25) drafts the rate-con text and reconciles it against the later invoice in the same pass, at broker scale.

Demo moment (≤20 words): A broker texts a rate, the carrier confirms by SMS, and a later mismatched invoice is flagged against that confirmation.

Business model (≤15 words): Per-load fee paid by the broker.

---
id: s3-ideator-balanced-T2-01-r3#05
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r3
---

# Payment Status Truce Line

One-liner (≤20 words): When a supplier says "unpaid" and the buyer says "already paid," one shared Slack message settles it, not two separate chases.

Buyer and niche (≤25 words): AP teams at manufacturers and the small suppliers' AR contacts who dispute whether an invoice was already paid or is a duplicate.

Pain and evidence (≤40 words): Exact-match checks miss "near-duplicates caused by invoice-number formatting differences, inconsistent vendor names, repeated imports," so suppliers chase invoices the buyer's ledger already shows paid under a slightly different name or number. (src: outputs/s3-ideate/pain/T2-dossier.md, P4)

How it works (≤50 words): When a supplier flags an unpaid invoice in a shared Teams or Slack channel, the bot pulls the buyer's payment history, fuzzy-matches vendor name, amount and date against exact and near-duplicate records, and posts one verdict, "paid 3 Sept, ref 88213" or "genuinely open," visible to both sides instead of separate email threads.

Why now (≤25 words): Cheap fuzzy-matching inference (TC-25) checks a full year of payment history per dispute in seconds, not a monthly report.

Demo moment (≤20 words): Supplier messages "invoice 4021 unpaid"; the bot replies instantly, "paid 3 Sept, you're looking at a reissued duplicate."

Business model (≤15 words): Buyer pays a per-dispute-resolved fee.

<!-- COMPLETE -->
