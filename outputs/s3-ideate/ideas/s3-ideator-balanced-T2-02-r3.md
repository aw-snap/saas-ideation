## Cards

---
id: s3-ideator-balanced-T2-02-r3#01
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r3
---

# The Confirmed-Catch Auditor

One-liner (≤20 words): Reviews posted invoices against source scans and charges only for each error it proves real.

Buyer and niche (≤25 words): Small-firm bookkeepers and outsourced AP teams already using Hubdoc, Dext or QuickBooks, wary of paying flat subscription fees.

Pain and evidence (≤40 words; cite the pain dossier file): Capture tools mis-key mixed-tax invoices, miscode vendors, and near-duplicates slip past exact-match checks, all discovered only after posting during month-end review. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Re-extracts every posted invoice from its original scan, diffs vendor, amount, tax code and line items against the ledger entry, and flags mismatches with the exact source-document region attached as proof; a bookkeeper confirms each catch with one click before any fee is billed.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (TC-30) at $2 per 1,000 pages makes a full independent re-extraction of every posted invoice cheap enough to run continuously.

Demo moment (≤20 words): Feed a month of posted invoices; three miscoded entries are flagged, each with the source scan region highlighted, confirmed live.

Business model (≤15 words): Fee only on confirmed catches: 20% of the amount corrected, zero otherwise.

---
id: s3-ideator-balanced-T2-02-r3#02
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r3
---

# The Recovered Invoice Fee

One-liner (≤20 words): Searches for invoices already sent but lost before close, and only charges when one is confirmed recovered.

Buyer and niche (≤25 words): Small-firm bookkeepers chasing month-end close on QuickBooks or Xero, with purchases approved but no invoice on file.

Pain and evidence (≤40 words; cite the pain dossier file): Paperwork arrives late or gets buried in someone's inbox, so a bookkeeper keeps a manual list of unresolved purchases that holds up every close. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Searches the firm's connected mailboxes and vendor portals for any document matching an unmatched purchase order by amount, vendor and date, surfaces the matched invoice and its source email or portal page as proof, and only bills once a bookkeeper confirms the match closes the gap.

Why now (≤25 words; name the specific capability): Cheap long-context reasoning (TC-25) lets the search compare a whole mailbox history against every open PO instead of a keyword search.

Demo moment (≤20 words): An open PO with no invoice matches a buried six-week-old email attachment, shown as proof.

Business model (≤15 words): 3 euro per invoice recovered and confirmed; nothing charged for gaps it can't close.

---
id: s3-ideator-balanced-T2-02-r3#03
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r3
---

# The Shortpay Recovery Fee

One-liner (≤20 words): Cross-checks freight invoices against the BOL and POD, and takes a cut only of what it recovers.

Buyer and niche (≤25 words): Billing staff and owners at small freight brokers and carriers auditing 15-40 loads a week against paperwork.

Pain and evidence (≤40 words; cite the pain dossier file): Billing staff manually audit each carrier invoice against the BOL, rate confirmation and POD at $19-32/hr, one load at a time, before keying it into accounting. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Extracts quantity, rate and load number from the invoice, BOL and POD, flags shortages or rate mismatches with the exact mismatched line from each source document shown side by side, and drafts the credit-back claim only after a mismatch is confirmed.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (TC-30) makes checking every load's three documents affordable instead of spot-checking a sample.

Demo moment (≤20 words): A short-shipment on the POD doesn't match the invoiced quantity; the discrepancy and both source documents appear together, recovery drafted.

Business model (≤15 words): Contingency fee, 15% of every dollar shortpay or overcharge recovered.

---
id: s3-ideator-balanced-T2-02-r3#04
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r3
---

# XRechnung Readiness Fee

One-liner (≤20 words): Ingests e-invoices German firms are legally required to receive but mostly still can't process.

Buyer and niche (≤25 words): German Handwerk and small-firm bookkeepers who only receive true e-invoices for about half their roughly 1,200 inbound invoices a year.

Pain and evidence (≤40 words; cite the pain dossier file): Only 45% of German firms can receive e-invoices, and staff open XRechnung XML, print it as a PDF or delete it, losing the mandated 8-year structured record. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Watches the invoice inbox, parses any XRechnung or ZUGFeRD XML attachment, posts the extracted fields into the ledger, and archives the untouched original XML with a checksum proving it matches the posted entry, byte for byte.

Why now (≤25 words; name the specific capability): Production OCR and document-extraction pricing (TC-30) makes structured-XML ingestion for every small firm affordable, not just for firms with DATEV add-ons.

Demo moment (≤20 words): An XRechnung email arrives; fields post to the ledger and the archived XML is shown checksum-matched to what posted.

Business model (≤15 words): 0.50 euro per e-invoice successfully ingested and archived; nothing charged on a failed parse.

---
id: s3-ideator-balanced-T2-02-r3#05
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r3
---

# The Compliance Proof Fee

One-liner (≤20 words): Confirms each client is actually compliant on their e-invoicing mandate, not just enrolled.

Buyer and niche (≤25 words): Steuerberater, Belgian accountants and Spanish gestores managing e-invoicing compliance for dozens of small-firm clients at once.

Pain and evidence (≤40 words; cite the pain dossier file): Advisers absorb the switchover client by client, billing manual booking time as "Sonderarbeiten," while owners wrongly assume registration alone means they're compliant. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Logs into each client's access-point, platform or Verifactu dashboard, pulls the actual registration status and delivery or validation receipts, and produces one proof-of-compliance packet per client with every claim linked to the exact screen or document it confirmed.

Why now (≤25 words; name the specific capability): Browser agents like Skyvern (TC-07) check no-API compliance dashboards across dozens of clients on a schedule, not one by one.

Demo moment (≤20 words): A client believed compliant is shown with a lapsed registration screenshot; a compliant client's packet appears alongside it.

Business model (≤15 words): 25 euro per client verified compliant per quarter, billed through the adviser.

<!-- COMPLETE -->
