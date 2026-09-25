## Cards

---
id: s3-ideator-novel-T2-01-r3#01
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r3
---

# Show-Once Vendor Coder

One-liner (≤20 words): Correct one miscoded invoice and every future invoice from that vendor codes itself correctly.

Buyer and niche (≤25 words): Freelance professionals and small-firm bookkeepers who keep re-fixing the same "unknown vendor" coding error invoice after invoice.

Pain and evidence (≤40 words; cite the pain dossier file): Unknown suppliers get coded "unknown" every time, and fixing it is described as "time-consuming to adjust," recurring on every new vendor with no memory carried forward. (P5) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): At signup, upload one invoice from a new vendor; the draft arrives miscoded "unknown." Correct the account code once. That single correction becomes the vendor's rule, so the next invoice from the same sender posts correctly on arrival, with no rule-builder screen to configure.

Why now (≤25 words; name the specific capability): Cheap long-context inference (TC-25) makes it affordable to replay your one correction as a live example against every new invoice.

Demo moment (≤20 words): Sign up, fix one "unknown" code by hand, then a second invoice from the same vendor auto-codes correctly within the minute.

Business model (≤15 words): Per-invoice fee after a free first correction per vendor.

---
id: s3-ideator-novel-T2-01-r3#02
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r3
---

# Duplicate Pattern From One Flag

One-liner (≤20 words): Mark one duplicate pair by hand, and every hidden near-duplicate like it gets caught automatically.

Buyer and niche (≤25 words): Bookkeepers reconciling small-firm ledgers where near-duplicate invoices slip past QuickBooks' exact-match check every month.

Pain and evidence (≤40 words; cite the pain dossier file): Standard duplicate checks catch only exact vendor-plus-bill-number matches, so near-duplicates from formatting differences or repeated imports "slip through," surfacing only at month-end reconciliation. (P4) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): On signup, import last month's invoices. Mark one true duplicate pair by hand (e.g. an invoice number reformatted on re-import). That single flag teaches the agent the vendor's variation pattern, which it then applies to surface every other matching near-duplicate in the same batch immediately.

Why now (≤25 words; name the specific capability): Cheap long-context inference (TC-25) lets every invoice in the batch be compared in context against your one flagged example at once.

Demo moment (≤20 words): Flag one reformatted duplicate; three other hidden near-duplicates in the same import get highlighted within seconds.

Business model (≤15 words): Flat monthly fee per ledger connected, scaled by invoice volume.

---
id: s3-ideator-novel-T2-01-r3#03
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r3
---

# One-Split VAT Learner

One-liner (≤20 words): Split one mixed-tax invoice correctly by hand, and the same vendor's future invoices split themselves.

Buyer and niche (≤25 words): Freelancers and small-firm bookkeepers who buy from vendors that mix VAT rates on a single invoice.

Pain and evidence (≤40 words; cite the pain dossier file): Invoices with more than one tax code break extraction, and tax details published downstream are "sometimes" wrong, forcing a manual fix after every sync for every mixed-tax invoice. (P3) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Upload one mixed-tax invoice at signup; the draft splits the rates wrong. Correct the split once, line by line. That single demonstration becomes the vendor's tax-split template, so the next invoice from that vendor splits and posts correctly without another manual correction.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (Dec 2025, TC-30) extracts line-level tax fields accurately enough that one corrected split holds as a reusable template.

Demo moment (≤20 words): Correct one mixed-tax split by hand; a second invoice from the same vendor splits correctly on its own, live.

Business model (≤15 words): Per-invoice fee, capped monthly rate for high-volume mixed-tax vendors.

---
id: s3-ideator-novel-T2-01-r3#04
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r3
---

# Rate-Con Learned From One Build

One-liner (≤20 words): Build one rate confirmation by hand, and every future load on that lane drafts itself.

Buyer and niche (≤25 words): Billing staff at small freight brokers and carriers who build rate confirmations from templates by hand for every load.

Pain and evidence (≤40 words; cite the pain dossier file): Staff "open templates, copy details, fill in rates" to build each rate confirmation by hand, on every load, in $19-32/hr roles where the work scales with volume. (P8) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): At signup, build or paste one completed rate confirmation for a lane and carrier. That single example teaches the agent the carrier's fields, rate structure and format, so the next load on that lane arrives as a ready-to-send draft rate confirmation instead of a blank template.

Why now (≤25 words; name the specific capability): Cheap long-context inference (TC-25) holds your one example as a persistent template applied to every new load at near-zero cost.

Demo moment (≤20 words): Build one rate confirmation by hand; a second load on the same lane auto-drafts correctly within the minute.

Business model (≤15 words): Per-load fee, or flat monthly rate per carrier lane covered.

---
id: s3-ideator-novel-T2-01-r3#05
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r3
---

# Client Portal Learned From One Send

One-liner (≤20 words): Submit one invoice to a new client's platform by hand, and the agent repeats it every time.

Buyer and niche (≤25 words): Small firms and freelancers invoicing across many clients, each requiring a different one of France's roughly 150 e-invoicing platforms.

Pain and evidence (≤40 words; cite the pain dossier file): About 150 registered platforms exist with "no default choice," and Peppol UBL delivery is machine-only, so every new client can mean learning a new portal's login and upload steps from scratch. (P11, P14) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): At signup, submit your first invoice to a new client's required platform while the agent watches the screen: login, fields, upload, confirmation. That single demonstrated run teaches it the exact path, so every later invoice to that client submits itself the same way, no macro recording needed.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use (TC-02) holds long multi-step sessions and generalizes an observed workflow instead of replaying a literal recording.

Demo moment (≤20 words): Submit one invoice by hand while the agent watches; a second invoice to the same client files itself, unattended.

Business model (≤15 words): Per-client-platform fee, flat monthly retainer once several clients are learned.

<!-- COMPLETE -->
