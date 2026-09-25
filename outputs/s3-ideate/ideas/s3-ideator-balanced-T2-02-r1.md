## Titles

1. Invoice Duplicate Detective
2. VAT Field Fixer
3. E-Invoice Autopsy
4. XML Keeper
5. Peppol Delivery Radar
6. Rejection Code Translator
7. Platform Picker for TPE
8. Invoice Chaser Bot
9. Freight Rate-Con Auto-Filler
10. Mixed-Tax Invoice Coder
11. Hubdoc Backup Reviewer [similar][safe] -> rewritten: **The Recheck Desk** (independent second-pass audit of any capture tool's output against the original scan)
12. Invoice Reconciliation Copilot [safe] -> rewritten: **The Duplicate Docket** (fuzzy cross-match of the whole ledger history, not a generic "reconciliation" catch-all)
13. Near-Duplicate Catcher [similar to 12]
14. E-Invoice Readability Viewer
15. Sync Conflict Resolver [safe] -> rewritten: **Silent Edit Watchdog** (flags exactly which field changed on which side of a two-way sync, not just "resolve conflicts")
16. Bank Data Validator for XRechnung
17. Close-Month Missing Invoice Tracker
18. Vendor Coding Memory
19. AP Clerk Second Pair of Eyes [similar to 11]
20. E-Invoice Compliance Dashboard [safe] -> rewritten: **The Rejection Fixer** (acts on a rejection code and resubmits, instead of just displaying compliance status)
21. Freight POD-BOL-Invoice Matcher
22. Peppol Registration Auditor [similar to 5]
23. Steuerberater Overflow Assistant
24. Verifactu Alarm Calmer
25. Invoice Extraction Confidence Scorer [similar to 2/11]
26. Multi-Country Mandate Tracker [similar to 20] -> rewritten: **The Platform Match** (a one-time scored recommendation from a firm's real invoice mix, not an ongoing tracker)
27. AP Fraud Pattern Spotter
28. Craft-Trade E-Invoice Bridge
29. Line-Item Auto-Coder
30. Small-Firm Invoicing Autopilot [safe] -> rewritten: **The Close Chaser** (one narrow job: find and chase missing invoices before close, not a full "autopilot")

## Cards

---
id: s3-ideator-balanced-T2-02-r1#01
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The Duplicate Docket

One-liner (≤20 words): Catches near-duplicate invoices your ledger's exact-match rule misses, before they get paid twice.

Buyer and niche (≤25 words): Small-firm bookkeepers and AP clerks on QuickBooks or Xero, posting 30-300 invoices a week across several client ledgers.

Pain and evidence (≤40 words; cite the pain dossier file): Ledger duplicate checks only catch exact vendor-plus-bill-number matches; reformatted numbers, variant vendor names and repeated imports slip through, surfacing as rework at month-end reconciliation. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Fuzzy-matches vendor, amount, date and invoice-number variants against the full ledger history on every new bill, flags likely duplicates before posting, and shows a side-by-side evidence view of the matched fields for a one-click accept or reject.

Why now (≤25 words; name the specific capability): 1M-token context and collapsing inference cost (TC-25) let it hold years of AP history in one comparison pass instead of exact-match rules.

Demo moment (≤20 words): Upload a reformatted duplicate invoice against the existing ledger; it's flagged live with matched fields highlighted.

Business model (≤15 words): Per-seat SaaS add-on to existing accounting software, $29-49 per month per ledger.

---
id: s3-ideator-balanced-T2-02-r1#02
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The Recheck Desk

One-liner (≤20 words): Independently re-audits what your capture tool extracted against the original scan before it posts.

Buyer and niche (≤25 words): Bookkeepers already paying for Hubdoc, Dext or similar capture tools who still fix wrong tax fields and miscoded vendors by hand.

Pain and evidence (≤40 words; cite the pain dossier file): Capture tools fail on mixed-tax invoices and code unknown vendors "unknown"; tax details published to the ledger are "sometimes" wrong, forcing manual correction after sync. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Pulls the capture tool's extracted fields plus the original PDF, re-runs an independent OCR pass, diffs every field against the source image, and surfaces only the fields that disagree for one-click correction before the bill posts to the ledger.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (TC-30) at $2 per 1,000 pages makes a full independent second pass cheap enough to run on every invoice.

Demo moment (≤20 words): Feed a mixed-tax-rate invoice; the wrong VAT split is shown next to the corrected split with the page region highlighted.

Business model (≤15 words): Usage-based add-on, $0.03 per invoice re-checked, layered on top of an existing capture tool.

---
id: s3-ideator-balanced-T2-02-r1#03
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The Rejection Fixer

One-liner (≤20 words): Reads a French e-invoice platform's rejection code, fixes the field, and resubmits it automatically.

Buyer and niche (≤25 words): French TPE/PME owners and their accountants issuing e-invoices through one of roughly 150 approved plateformes agréées.

Pain and evidence (≤40 words; cite the pain dossier file): Platforms auto-reject invoices for bad formats, missing mandatory fields or SIREN/SIRET mismatches, freezing the payment cycle until someone manually decodes the rejection and fixes it. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Watches the platform's rejection notices, looks up the SIREN/SIRET registry and the firm's prior invoices to correct the flagged field, then logs into the platform's own web dashboard to resubmit, since most plateformes agréées expose no resubmission API.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use (TC-02, 61.4% OSWorld) completes the login-fix-resubmit loop on portals that have no API for it.

Demo moment (≤20 words): A rejected invoice with a mismatched SIRET is corrected and resubmitted live; the status flips to accepted on screen.

Business model (≤15 words): Flat monthly fee per connected platform account, 39 euro per month.

---
id: s3-ideator-balanced-T2-02-r1#04
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# Peppol Delivery Radar

One-liner (≤20 words): Confirms a Belgian firm's Peppol registration is actually live and that every sent invoice arrived.

Buyer and niche (≤25 words): Belgian SME owners and their accountants sending invoices through a Peppol access point since the 1 Jan 2026 mandate.

Pain and evidence (≤40 words; cite the pain dossier file): Owners assume they are "on Peppol" without confirming registration is active, and cannot tell whether invoices they sent actually arrived, risking silent delivery failure and fines. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Logs into the access-point dashboard on a schedule, checks registration status and per-invoice delivery receipts, and alerts the owner the moment a send goes unconfirmed instead of waiting for a customer to call about a missing invoice.

Why now (≤25 words; name the specific capability): Browser agent frameworks like Skyvern (TC-07) can watch no-API vendor dashboards continuously without a human checking each one by hand.

Demo moment (≤20 words): A simulated failed delivery triggers an alert within seconds, with the exact access-point screen it was caught on.

Business model (≤15 words): Subscription per Peppol-connected entity, 15 euro per month.

---
id: s3-ideator-balanced-T2-02-r1#05
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The XML Keeper

One-liner (≤20 words): Catches the legally required XRechnung XML before staff delete it, and archives it for 8 years.

Buyer and niche (≤25 words): German small-firm bookkeepers and Handwerk office staff who receive e-invoices by email alongside ordinary PDFs.

Pain and evidence (≤40 words; cite the pain dossier file): Staff routinely open the XRechnung, save only a printed PDF and delete the structured XML attachment, even though the original must be kept for 8 years, creating audit exposure they don't know they have. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Watches the invoice inbox, detects any XRechnung or ZUGFeRD-style structured attachment, extracts and archives it alongside a human-readable rendering, and confirms the original stays intact even if staff delete or overwrite the email.

Why now (≤25 words; name the specific capability): In-browser and mailbox-integrated agents (TC-03) can watch a mailbox continuously without requiring staff to change their filing habit.

Demo moment (≤20 words): An invoice email is opened and "deleted" as usual; the XML is shown already safely archived beforehand.

Business model (≤15 words): Flat per-mailbox fee, 9 euro per month, sold through Steuerberater as a compliance add-on.

---
id: s3-ideator-balanced-T2-02-r1#06
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The Three-Way Match

One-liner (≤20 words): Cross-checks every carrier invoice against its bill of lading and proof of delivery before it's keyed in.

Buyer and niche (≤25 words): Billing staff at small freight brokers and carriers handling 15-40 loads a week, re-keying paperwork into accounting.

Pain and evidence (≤40 words; cite the pain dossier file): Billing staff manually audit each carrier invoice against the BOL, rate confirmation and POD, then key it into accounting one load at a time, at roles paying $19-32 an hour. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Extracts line items, rate, quantity and load number from the invoice, BOL and POD, cross-checks all three the way a claims file gets checked against its evidence, and routes only mismatches to a human, posting clean matches straight to accounting.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (TC-30) reads scanned freight paperwork cheaply enough to check every load, not just spot-check a sample.

Demo moment (≤20 words): A short-shipment on the POD doesn't match the invoiced quantity; the mismatch is flagged with both documents side by side.

Business model (≤15 words): Per-load fee, $0.75 per load, undercutting a billing clerk's hourly cost.

---
id: s3-ideator-balanced-T2-02-r1#07
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The Platform Match

One-liner (≤20 words): Recommends the right e-invoicing platform for a French small firm from its actual invoice history.

Buyer and niche (≤25 words): French TPE/PME owners facing the Sept 2026/2027 e-invoicing cliff, choosing among roughly 150 unranked approved platforms.

Pain and evidence (≤40 words; cite the pain dossier file): Firms must pick and connect a plateforme agréée or stop invoicing entirely; there is no default choice, and comparison guides are the only help available today. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Analyzes a firm's invoice volume, vendor and customer mix, and current accounting software, scores the fit of each approved platform against that firm's actual pattern, and drafts the connection steps and cost estimate for the top match.

Why now (≤25 words; name the specific capability): Cheap long-context reasoning (TC-25) makes comparing 150 platform spec sheets against a year of real invoices affordable to run per firm.

Demo moment (≤20 words): Upload a year of invoices; get a ranked shortlist of three platforms with reasons in under a minute.

Business model (≤15 words): One-time recommendation fee, 99 euro, plus referral commission from the chosen platform.

---
id: s3-ideator-balanced-T2-02-r1#08
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
---

# The Close Chaser

One-liner (≤20 words): Flags every approved purchase with no matching invoice yet, before month-end close instead of during it.

Buyer and niche (≤25 words): Small-business bookkeepers running the monthly close for several client ledgers on QuickBooks or Xero.

Pain and evidence (≤40 words; cite the pain dossier file): Paperwork often arrives after a purchase is approved, so someone keeps a manual list of unresolved items that holds up every month-end close. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Cross-references approved purchase orders and card transactions against received invoices daily, drafts a personalized chase email to the vendor for anything still unmatched after five days, sends it automatically, and tracks the reply so the close list shrinks itself.

Why now (≤25 words; name the specific capability): Collapsing inference prices (TC-25) make a personalized chase email per gap affordable to send daily, not just batched at month-end.

Demo moment (≤20 words): A purchase approved six days ago with no invoice triggers an auto-sent vendor chase email, visible in the outbox.

Business model (≤15 words): Per-client subscription for bookkeeping firms, $19 per month per client ledger.

<!-- COMPLETE -->
