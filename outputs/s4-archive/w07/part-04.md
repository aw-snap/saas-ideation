---
id: I-4076
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#06
merged: []
---

# Near-Duplicate Invoice Sentinel

One-liner (≤20 words): Catches near-duplicate invoices before a payment run, where exact-match checks let them through.
Buyer and niche (≤25 words): AP teams and procurement officers at manufacturers running QuickBooks or an ERP whose duplicate check only matches exact vendor-plus-bill-number pairs.
Pain and evidence (≤40 words; cite the pain dossier file): QuickBooks "can still miss near-duplicates caused by invoice-number formatting differences, inconsistent vendor names, repeated imports," and some sync tools create extra transactions for no reason. (src: outputs/s3-ideate/pain/T2-dossier.md, P4)
How it works (≤50 words): Before each payment run, compares every new invoice against 12 months of payment history using fuzzy vendor-name and amount matching rather than exact string matching, flags likely near-duplicates, and shows the suspected original side by side for a one-click hold or release.
Why now (≤25 words): Cheap inference makes fuzzy comparison across a full year of invoice history affordable to run on every batch, not a monthly report.
Demo moment (≤20 words): Feed a duplicate invoice with a reformatted vendor name; sentinel catches it and blocks the payment run live.
Business model (≤15 words): Flat monthly add-on fee to existing AP software, priced by invoice volume.

---
id: I-4077
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#07
merged: []
---

# XML-to-Human Invoice Viewer

One-liner (≤20 words): Turns unreadable Peppol UBL or XRechnung XML into a plain-language approval screen, so nobody has to open a PDF viewer for it.
Buyer and niche (≤25 words): Approvers and bookkeepers at Belgian and German small firms who receive structured e-invoices with no human-readable copy attached.
Pain and evidence (≤40 words; cite the pain dossier file): Attaching a PDF is optional in the Peppol standard, and many suppliers don't add one, leaving approvers unable to read what they must sign off on. (src: outputs/s3-ideate/pain/T2-dossier.md, P11)
How it works (≤50 words): Parses any structured e-invoice XML (UBL, XRechnung, Factur-X), extracts line items, VAT breakdown and totals, and renders a clean, plain-language approval screen so approvers never touch raw XML and never lose the legally required structured original.
Why now (≤25 words): Fast, cheap document parsing turns raw XML into a readable summary instantly, at fractions of a cent per invoice.
Demo moment (≤20 words): Paste a raw Peppol UBL XML file; viewer renders a clean invoice summary in under five seconds.
Business model (≤15 words): Free viewer tier; paid tier adds approval workflow and 8-year audit trail.

---
id: I-4078
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#08
merged: []
---

# Invoice Backlog Triage Agent

One-liner (≤20 words): Turns a flat inbox of pending invoices into a ranked worklist by urgency, not first-in-first-out.
Buyer and niche (≤25 words): AP and procurement teams at mid-size manufacturers where clerks handle 32-40 invoices a day from a growing backlog.
Pain and evidence (≤40 words; cite the pain dossier file): 70% of businesses still process invoices manually, and more than 60% of invoices need a human touch, at $9.40 average cost against $2.78 best-in-class. (src: outputs/s3-ideate/pain/T2-dossier.md, P1)
How it works (≤50 words): Scans the whole open-invoice backlog and scores each item by urgency: due date, early-payment discount window, PO-mismatch risk and missing structured e-invoice data, then hands the AP team a ranked worklist with the reason for each ranking, instead of a flat, unsorted inbox.
Why now (≤25 words): Cheap large-context inference lets the agent re-score the whole backlog every time a new invoice lands, not weekly.
Demo moment (≤20 words): Load a 200-invoice mock backlog; agent produces a ranked top-10 worklist in seconds, with reasons shown.
Business model (≤15 words): Per-seat monthly subscription, tiered by backlog size.

<!-- COMPLETE -->
