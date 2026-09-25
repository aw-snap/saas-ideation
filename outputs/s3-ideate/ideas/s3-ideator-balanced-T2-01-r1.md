## Titles

1. Invoice PO-Matcher Bot
2. Supplier E-Invoice Compliance Dashboard [safe]
3. Peppol Delivery Proof Tracker
4. XML-to-Human Invoice Viewer
5. Duplicate Invoice Hunter
6. VAT Mismatch Flagger
7. Vendor Onboarding Wizard for E-Invoicing
8. Missing Invoice Chaser
9. Multi-Country Mandate Calendar [safe]
10. Rejection Code Translator
11. Supplier E-Invoice Scorecard [similar]
12. Freight Rate-Con Auto-Filler
13. Cross-Border Invoice Format Normalizer
14. Supplier Platform Chooser
15. E-Invoice XML Archiver
16. PO Number Enforcer for Suppliers
17. Invoice Backlog Triage Agent
18. Tax Code Ambiguity Resolver
19. Early Payment Discount Capturer [safe]
20. Invoice Status Portal Poller
21. Three-Way Match Autopilot
22. Supplier Communication Hub for Rejected Invoices
23. Month-End Unresolved Invoice List Generator
24. E-Invoicing Mandate Radar Per Supplier Country [similar]
25. Invoice Anomaly Explainer for Auditors
26. Bulk Invoice Ingestion from Mixed Formats
27. Vendor Master Data Cleaner [safe]
28. Procurement Spend Visibility Dashboard [safe]
29. Supplier Readiness Nudge Bot
30. Invoice Clock — Countdown to Cliff Dates

### Rewrites of marked titles

- #2 [safe] Supplier E-Invoice Compliance Dashboard → **Peppol Proof-of-Delivery Agent**: instead of a self-reported checklist, it logs into each supplier's actual access point and confirms live registration and delivery receipts.
- #9 [safe] Multi-Country Mandate Calendar → **Mandate Cliff Simulator**: not a calendar of dates, it simulates which specific suppliers will legally be unable to invoice you after their country's cliff date, and the spend at risk.
- #11 [similar to #2] Supplier E-Invoice Scorecard → **Rejection Autopsy Agent**: instead of scoring suppliers in general, it diagnoses one rejected e-invoice against the official validator's rule it broke and drafts the fix.
- #19 [safe] Early Payment Discount Capturer → **Ghost PO Closer**: instead of chasing discounts, it matches PO, goods-receipt and invoice at month-end, drafts the accrual for what's missing, and chases the supplier in the same pass.
- #24 [similar to #9] E-Invoicing Mandate Radar Per Supplier Country → **Invoice Shadow Ledger**: not a compliance radar, a live spend ledger built from whatever has actually arrived by email, scan or portal, days ahead of what AP has keyed into the ERP.
- #27 [safe] Vendor Master Data Cleaner → **Near-Duplicate Invoice Sentinel**: not a general data-hygiene tool, it specifically catches near-duplicate invoices that exact-match checks miss, using vendor-name and formatting drift against 12 months of payment history.
- #28 [safe] Procurement Spend Visibility Dashboard → **Spend-at-Risk Radar**: not a generic BI dashboard, it ranks suppliers to chase first by combining e-invoicing non-compliance risk with how much spend actually runs through each one.

## Cards

---
id: s3-ideator-balanced-T2-01-r1#01
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Peppol Proof-of-Delivery Agent

One-liner (≤20 words): Confirms your supplier is actually registered and receiving on Peppol or a PDP, not just claiming it.

Buyer and niche (≤25 words): Procurement and AP teams at manufacturers and mid-size buyers sourcing from many small EU suppliers now switching to structured e-invoicing.

Pain and evidence (≤40 words; cite the pain dossier file): "Many SMEs assume they're 'on Peppol' without confirming registration is active," and can't tell whether sent invoices arrived, risking late payment and fines. (src: outputs/s3-ideate/pain/T2-dossier.md, P12)

How it works (≤50 words): A browser agent logs into each supplier's declared access point or the public Peppol/PDP directory, checks live registration status and delivery receipts against your outgoing purchase orders, and flags any supplier whose invoices are silently failing before your payment terms lapse.

Why now (≤25 words): Claude for Chrome and Skyvern-class browser agents now handle multi-portal logins and legacy directory UIs in production (TC-03, TC-07).

Demo moment (≤20 words): Live, the agent checks three seeded supplier registrations, flags one inactive, and drafts a chase email instantly.

Business model (≤15 words): Subscription priced per supplier checked per month, tiered by supplier count.

---
id: s3-ideator-balanced-T2-01-r1#02
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Mandate Cliff Simulator

One-liner (≤20 words): Shows which suppliers will legally be unable to invoice you next quarter, and how much spend that threatens.

Buyer and niche (≤25 words): Procurement leads at manufacturers with dozens of EU suppliers facing staggered e-invoicing mandates in Germany, Belgium, France and Spain.

Pain and evidence (≤40 words; cite the pain dossier file): Without a connected platform a French firm "ne pourrez plus émettre ni recevoir vos factures" from its cliff date; 150 platforms exist with no default choice. (src: outputs/s3-ideate/pain/T2-dossier.md, P14)

How it works (≤50 words): Ingests your supplier list with country and self-reported e-invoicing readiness, cross-references a maintained mandate-deadline database for Germany, Belgium, France and Spain, and outputs a ranked list of suppliers going non-compliant soonest, each tagged with the dollar spend that would be interrupted.

Why now (≤25 words): Cheap large-context inference (TC-25) lets the simulator read every supplier note and country rule in one pass affordably.

Demo moment (≤20 words): Upload a 20-row supplier CSV; simulator flags three suppliers going non-compliant within 60 days, with spend exposure.

Business model (≤15 words): Flat monthly fee per 100 tracked suppliers.

---
id: s3-ideator-balanced-T2-01-r1#03
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Rejection Autopsy Agent

One-liner (≤20 words): Explains exactly why an e-invoice was rejected and drafts the fix, instead of leaving staff to decode error codes.

Buyer and niche (≤25 words): AP and procurement staff at firms receiving French, German or Belgian structured e-invoices that fail validator checks.

Pain and evidence (≤40 words; cite the pain dossier file): "Le refus... bloque le cycle de paiement" on French platforms; German software "generiert keine valide XRechnung," with no vendor fix date given. (src: outputs/s3-ideate/pain/T2-dossier.md, P13)

How it works (≤50 words): Takes a rejected e-invoice plus its rejection code, looks up the exact official validator rule it violated (missing bank data, SIREN/SIRET mismatch, bad format), explains the root cause in plain language, and drafts a corrected-resubmission request naming the exact fields the supplier must fix.

Why now (≤25 words): Cheap 1M-token context (TC-25) holds the full XRechnung/Factur-X schema and rejection-code tables in one prompt for precise diagnosis.

Demo moment (≤20 words): Feed one real SIRET-mismatch rejection code; agent explains the cause and drafts the supplier email in under ten seconds.

Business model (≤15 words): Pay-per-rejection-resolved, or bundled into an AP seat license.

---
id: s3-ideator-balanced-T2-01-r1#04
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Ghost PO Closer

One-liner (≤20 words): Finds every purchase order with goods received but no invoice, drafts the accrual, and chases the supplier automatically.

Buyer and niche (≤25 words): Procurement and month-end close teams at mid-size manufacturers juggling hundreds of open purchase orders across many small suppliers.

Pain and evidence (≤40 words; cite the pain dossier file): "A missing invoice is common when a manager approves a purchase but sends the paperwork late," forcing a manual chase list every month-end and a delayed close. (src: outputs/s3-ideate/pain/T2-dossier.md, P7)

How it works (≤50 words): At month-end, matches every open purchase order and goods-receipt record against invoices received so far, flags POs with goods received but no matching invoice, drafts the accrual journal entry for finance, and sends the supplier a chase email in the same pass.

Why now (≤25 words): Cheap long-context inference (TC-25) makes matching thousands of PO, receipt and invoice records in one pass affordable for a small team.

Demo moment (≤20 words): Load a mock 50-line open-PO report; agent surfaces four unmatched receipts and drafts accrual entries and chase emails live.

Business model (≤15 words): Seat license for procurement or AP, priced per ERP connected.

---
id: s3-ideator-balanced-T2-01-r1#05
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Invoice Shadow Ledger

One-liner (≤20 words): Shows what you actually owe from invoices as they arrive, days before AP finishes keying them into the ERP.

Buyer and niche (≤25 words): Procurement officers at manufacturers who need current committed-spend visibility while AP works through a 9-day average keying backlog.

Pain and evidence (≤40 words; cite the pain dossier file): "70% of businesses still process invoices manually," with 9.2 days average cycle time against 3.1 at best-in-class, and more than 60% needing a human touch. (src: outputs/s3-ideate/pain/T2-dossier.md, P1)

How it works (≤50 words): Watches the AP inbox and supplier portals, extracts every incoming invoice, whether PDF, scan or structured XRechnung/UBL XML, into a structured running ledger the moment it arrives, days before AP finishes keying it into QuickBooks, Xero or the ERP.

Why now (≤25 words): Mistral OCR 3 parses forms, scans and structured XML at $1-2 per 1,000 pages (TC-30), cheap enough to shadow every invoice.

Demo moment (≤20 words): Drop a mixed folder of PDF, scan and XRechnung XML invoices; ledger populates line items live, before ERP entry.

Business model (≤15 words): Per-seat subscription for procurement, priced by monthly invoice volume.

---
id: s3-ideator-balanced-T2-01-r1#06
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Near-Duplicate Invoice Sentinel

One-liner (≤20 words): Catches near-duplicate invoices before a payment run, where exact-match checks let them through.

Buyer and niche (≤25 words): AP teams and procurement officers at manufacturers running QuickBooks or an ERP whose duplicate check only matches exact vendor-plus-bill-number pairs.

Pain and evidence (≤40 words; cite the pain dossier file): QuickBooks "can still miss near-duplicates caused by invoice-number formatting differences, inconsistent vendor names, repeated imports," and Hubdoc "creates additional transactions for absolutely no reason." (src: outputs/s3-ideate/pain/T2-dossier.md, P4)

How it works (≤50 words): Before each payment run, compares every new invoice against 12 months of payment history using fuzzy vendor-name and amount matching rather than exact string matching, flags likely near-duplicates, and shows the suspected original side by side for a one-click hold or release.

Why now (≤25 words): Cheap inference (TC-25) makes fuzzy comparison across a full year of invoice history affordable to run on every batch, not a monthly report.

Demo moment (≤20 words): Feed a duplicate invoice with a reformatted vendor name; sentinel catches it and blocks the payment run live.

Business model (≤15 words): Flat monthly add-on fee to existing AP software, priced by invoice volume.

---
id: s3-ideator-balanced-T2-01-r1#07
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# XML-to-Human Invoice Viewer

One-liner (≤20 words): Turns unreadable Peppol UBL or XRechnung XML into a plain-language approval screen, so nobody has to open a PDF viewer for it.

Buyer and niche (≤25 words): Approvers and bookkeepers at Belgian and German small firms who receive structured e-invoices with no human-readable copy attached.

Pain and evidence (≤40 words; cite the pain dossier file): "Het bijvoegen van een PDF is optioneel in de Peppol-standaard," and "many suppliers don't add one," leaving approvers unable to read what they must sign off on. (src: outputs/s3-ideate/pain/T2-dossier.md, P11)

How it works (≤50 words): Parses any structured e-invoice XML (UBL, XRechnung, Factur-X), extracts line items, VAT breakdown and totals, and renders a clean, plain-language approval screen so approvers never touch raw XML and never lose the legally required structured original.

Why now (≤25 words): Fast, cheap document parsing (TC-30, TC-25) turns raw XML into a readable summary instantly, at fractions of a cent per invoice.

Demo moment (≤20 words): Paste a raw Peppol UBL XML file; viewer renders a clean invoice summary in under five seconds.

Business model (≤15 words): Free viewer tier; paid tier adds approval workflow and 8-year audit trail.

---
id: s3-ideator-balanced-T2-01-r1#08
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
---

# Invoice Backlog Triage Agent

One-liner (≤20 words): Turns a flat inbox of pending invoices into a ranked worklist by urgency, not first-in-first-out.

Buyer and niche (≤25 words): AP and procurement teams at mid-size manufacturers where clerks handle 32-40 invoices a day from a growing backlog.

Pain and evidence (≤40 words; cite the pain dossier file): "70% of businesses still process invoices manually," and more than 60% of invoices need a human touch, at $9.40 average cost against $2.78 best-in-class. (src: outputs/s3-ideate/pain/T2-dossier.md, P1)

How it works (≤50 words): Scans the whole open-invoice backlog and scores each item by urgency: due date, early-payment discount window, PO-mismatch risk and missing structured e-invoice data, then hands the AP team a ranked worklist with the reason for each ranking, instead of a flat, unsorted inbox.

Why now (≤25 words): Cheap large-context inference (TC-25) lets the agent re-score the whole backlog every time a new invoice lands, not weekly.

Demo moment (≤20 words): Load a 200-invoice mock backlog; agent produces a ranked top-10 worklist in seconds, with reasons shown.

Business model (≤15 words): Per-seat monthly subscription, tiered by backlog size.

<!-- COMPLETE -->
