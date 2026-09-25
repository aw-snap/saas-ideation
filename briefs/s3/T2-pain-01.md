# Pain-miner brief: T2-01, unstructured invoice intake (fetch, extract, post, check)

Territory T2: invoice intake and the e-invoicing switchover at small firms. Half 1 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain in how small firms (roughly 1-200 staff) and the bookkeepers or accounting firms serving them get **unstructured** supplier documents into their books today: PDFs, scans, photos, email attachments, and invoices or statements downloaded from vendor and utility web portals. Find who does it, how many documents, how long it takes, what it costs, and what goes wrong.

## Boundary of this half
- **In:** the four steps for non-structured documents, in any country:
  1. **Fetch:** logging into vendor, utility, telecom, SaaS and marketplace portals to download invoices and statements; chasing missing invoices; forwarding from inboxes.
  2. **Extract:** keying or OCR-capturing header and line-item data from non-standard layouts, multi-page and multi-invoice PDFs, handwritten or low-quality scans, foreign-language invoices.
  3. **Post:** coding to GL accounts, classes and tax codes, matching to POs or receipts, and pushing into QuickBooks Online/Desktop, Xero, Sage, NetSuite or a small ERP, including sync failures, duplicates and bank-feed mismatches.
  4. **Check:** catching extraction and coding errors, reviewing capture-tool output, month-end reconciliation of vendor statements.
  - **Freight sub-niche (allowed):** re-keying carrier invoices, rate confirmations, bills of lading and proof-of-delivery documents into a TMS or accounting system at small brokers and carriers.
- **Out, owned by T2-02:** anything about structured e-invoices (XRechnung, ZUGFeRD, Factur-X, Peppol BIS/UBL, Facturae, Verifactu) and the German, Belgian, French and Spanish mandates: receiving, validating, issuing, choosing a certified platform, archiving, and readiness. If a source covers both, record only the unstructured-intake part.
- **Out of the territory:** checking payment-change emails for vendor fraud (T5), general bookkeeping beyond invoice intake (payroll, bank reconciliation not tied to invoices, tax returns), nonprofit fund accounting.

## Questions
1. Which roles (AP clerk, office manager, owner, outsourced bookkeeper, accounting-firm staff handling many clients) do intake, and how many invoices and statements per week or month, from how many vendor portals?
2. How long does one invoice take from arrival to posted, and what is the cost per invoice (Ardent Partners, IOFM, APQC, Levvel figures, plus first-person numbers)? What share is still keyed by hand?
3. What is the repeated manual action: logging into portals one by one, downloading PDFs, renaming files, splitting documents, re-keying line items, recoding the same vendor, fixing duplicates?
4. Where does existing capture fail despite claimed ~99% accuracy: which layouts, fields and document types, and how do users find out (wrong totals, missed tax, wrong vendor, broken sync to QuickBooks or Xero)? Give counts, time lost or dollars.
5. What does it cost when intake goes wrong: late fees, missed early-pay discounts, duplicate payments, month-end close delays, client churn at bookkeeping firms?
6. What do people use today (Dext, Hubdoc, AutoEntry, Bill.com, Ramp/Brex AP, QuickBooks receipt capture, Docparser, Nanonets, Rossum, email-to-inbox rules, offshore data-entry staff), and what do users say those tools still fail at? For freight: what do small brokers and carriers do with carrier paperwork?

## Sources to mine
- Forums and subreddits: r/Bookkeeping, r/Accounting, r/QuickBooks, r/xero, r/smallbusiness, r/FreightBrokers, r/Truckers, QuickBooks Community, Xero Community, Intuit ProAdvisor groups, AccountingWEB forums. Search phrases such as "Dext missed line items", "Hubdoc not fetching", "download invoices from every vendor portal", "bank feed duplicate bill", "invoice data entry hours", "rate con re-keying". If Reddit is blocked, use search results quoting Reddit, community forums and Quora.
- Reviews of incumbents on G2, Capterra, Trustpilot and app stores (QuickBooks and Xero app marketplaces): Dext, Hubdoc, AutoEntry, Bill.com, Ramp, Tipalti, Stampli, Docparser, Nanonets, Rossum, Veryfi, and for freight: McLeod, Aljex, Rose Rocket, Ascend TMS.
- Job postings (Indeed, LinkedIn, Upwork) for "accounts payable clerk", "data entry invoices", "bookkeeper AP", "freight billing specialist": stated volumes, portals named, hourly rates.
- Survey and benchmark documents: Ardent Partners AP Metrics that Matter (latest), IOFM, APQC, the Gate B links (https://www.datocms-assets.com/80283/1744404602-ardent-partners-ap-metrics-that-matter-in-2025-pagero-final.pdf ; https://www.docuclipper.com/blog/invoice-data-entry/ ; https://www.g2.com/products/dext/reviews).
- Complaint threads and news: trade press (Accounting Today, CPA Practice Advisor, FreightWaves) 2024-2026 on AP staffing, capture errors, and freight paperwork.

## Evidence standard
- **10-20 pain items.** Each item carries at least one verbatim quote or specific number, with a link, a date, and the role and tool named where the source names them.
- Prefer first-person complaints from clerks, bookkeepers and freight billing staff; vendor blogs and surveys are welcome but should not be most of the items. Flag vendor-authored numbers as vendor claims.
- For every item, give frequency (how often it happens) and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T2-01.md`, 1500 words max:
- a one-line header naming the half (T2-01, unstructured invoice intake: fetch, extract, post, check);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Step (fetch, extract, post, check, or freight)** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T2-02 covers structured e-invoices and the EU mandates.
- Write only your output file.
<!-- COMPLETE -->
