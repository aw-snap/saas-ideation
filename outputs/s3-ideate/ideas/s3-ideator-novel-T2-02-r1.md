## Titles

1. Invoice Autopilot for the AP Inbox [safe]
2. The XML Vault Nobody Set Up
3. Peppol Ghost-Check
4. Rejection Code Whisperer
5. One Platform, Not 150
6. Duplicate Invoice Detective
7. Mixed-Tax Invoice Fixer
8. Freight Rate-Con Robot [similar]
9. Sync Conflict Sentinel
10. Missing Invoice Chaser
11. The Unknown Vendor Coder
12. E-Invoice Readiness Radar for German Handwerk
13. Screen-Agent Invoice Fetcher [safe]
14. Compliance Countdown Concierge
15. The Accountant's PDF Autoformatter
16. Bookkeeper Bot for Solo Practices [safe]
17. Invoice Extraction-as-a-Service [safe]
18. The 8-Year Audit Time Machine [similar]
19. Vendor Portal Password Vault + Fetch Bot [similar]
20. E-Invoice Validator Pre-Flight Check [similar]
21. Cross-Border Invoice Currency & Tax Normalizer [safe]
22. IT Admin's Shadow AP Department
23. The Silent Failure Alarm [similar]
24. Multi-Mandate Invoice Router
25. The Law Firm's Trust Account Invoice Guard
26. Receipt Triplicate Killer [similar]
27. The E-Invoicing Concierge for IT Generalists [similar]
28. Client Billing Code Mapper for Law Firm Vendors
29. Invoice Chaos Dashboard [safe]
30. The New-Vendor Onboarding Autocoder [similar]

### Rewrites of marked titles
1 -> The Missing-Field Email Negotiator (agent drafts and sends the exact email a rejected invoice needs, then resubmits)
8 -> The Persistent Login Chain Agent (stays authenticated across every vendor/utility portal to pull statements nightly)
13 -> The Second Pair of AI Eyes (a verifier that audits what the capture tool already extracted, instead of re-extracting)
16 -> The Accidental AP Officer's Safety Net (an approvals-only workflow for people who never trained in bookkeeping)
17 -> The Non-EU Firm's Peppol Reader (renders and cross-checks machine-only UBL XML for firms outside the EU mandate zone)
18 -> The Audit Time Bomb Defuser (finds and re-archives the legally required XML originals staff already deleted)
19 -> The Renewal Invoice Ambush (tracks SaaS vendor invoices for silent price hikes and auto-renewals)
20 -> The France PDP Matchmaker (shortlists and auto-connects one of 150 registered e-invoicing platforms)
23 -> The Never-Lost Invoice Trail (a searchable, provable record of what happened to every invoice, not an alert feed)
26 -> The Partner Approval Nudge (chases slow-approving partners with pre-filled context instead of a bare reminder)
27 -> The Vendor Statement Cross-Reconciler (matches monthly vendor statements against the ledger to surface what capture missed)
29 -> The Monday Morning Invoice Briefing (a spoken/written status summary instead of a dashboard nobody opens)
30 -> The New Vendor Handshake Setup (one pass that sets tax coding, e-invoice capability and matter-routing for a first-time vendor)

## Cards

---
id: s3-ideator-novel-T2-02-r1#01
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The Non-EU Firm's Peppol Reader

One-liner (≤20 words): Turns machine-only UBL e-invoice XML from EU vendors into a checked, human-readable record automatically.

Buyer and niche (≤25 words): Small professional-services firms outside the EU mandate zone that still receive structured e-invoices from EU-based software and service vendors.

Pain and evidence (≤40 words): Peppol UBL is machine-only; "many suppliers don't add" a PDF, so staff can't read what they received and can't verify it against the contract. (src: outputs/s3-ideate/pain/T2-dossier.md, P11)

How it works (≤50 words): Watches the inbox for `.xml` attachments, parses the UBL structure, renders a plain-language summary, and cross-checks amount, VAT and line items against the matching purchase order or contract text loaded into the same session, flagging any mismatch before approval.

Why now (≤25 words): 1M-token context (TC-25) lets one session hold the invoice XML plus the full vendor contract for a live discrepancy check.

Demo moment (≤20 words): Drop a raw XRechnung XML file in; watch a readable invoice appear next to a flagged contract-price mismatch, live.

Business model (≤15 words): Per-seat monthly subscription for firms with EU vendors; free tier for under 10 invoices/month.

---
id: s3-ideator-novel-T2-02-r1#02
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The Audit Time Bomb Defuser

One-liner (≤20 words): Finds the legally required e-invoice XML that staff already deleted, and rebuilds an 8-year archive automatically.

Buyer and niche (≤25 words): Small firms under Germany's e-invoicing rules, especially Handwerk and professional practices without a dedicated bookkeeper or DMS.

Pain and evidence (≤40 words): Staff open the XRechnung, print or save it as PDF, and delete the XML, even though the structured original must be kept 8 years — "the most common mistake." (src: outputs/s3-ideate/pain/T2-dossier.md, P10)

How it works (≤50 words): An in-browser agent scans mail and shared drives for e-invoice traffic, matches each PDF copy back to its original XML by invoice ID and sender, flags any XML that is missing or already trashed, and re-requests it from the vendor's portal or inbox rule before the retention gap becomes unrecoverable.

Why now (≤25 words): Claude for Chrome (TC-03) reads mail and drives inside the user's own logged-in session, so it can find and re-fetch missing originals directly.

Demo moment (≤20 words): Point it at a mailbox; it lists three "PDF-only" invoices and re-pulls the missing XML from the vendor portal live.

Business model (≤15 words): Flat monthly fee per mailbox, sold through the firm's Steuerberater or bookkeeper as a compliance add-on.

---
id: s3-ideator-novel-T2-02-r1#03
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# Peppol Ghost-Check

One-liner (≤20 words): Confirms your e-invoices actually arrived, because Belgium's Peppol network never tells you if they didn't.

Buyer and niche (≤25 words): Belgian SMEs and their accountants issuing invoices over Peppol since 1 January 2026, unsure whether registration or delivery is actually working.

Pain and evidence (≤40 words): "Many SMEs assume they're 'on Peppol'" without confirming active registration, and can't tell whether sent invoices arrived; fines began around April 2026. (src: outputs/s3-ideate/pain/T2-dossier.md, P12)

How it works (≤50 words): A browser agent logs into the firm's Peppol access point on a schedule, checks registration status, walks the delivery log for every invoice issued that week, and cross-references against the accounting system's sent list, surfacing any invoice with no confirmed delivery receipt before the payment term lapses.

Why now (≤25 words): Skyvern-class browser agents (TC-07) already handle logins and status polling on portals that expose no usable API, at production reliability.

Demo moment (≤20 words): Agent flags one invoice as "sent, never delivered" from a live access-point portal, three weeks before its due date.

Business model (≤15 words): Monthly fee per access point connection, resold by Belgian bookkeeping firms to their client base.

---
id: s3-ideator-novel-T2-02-r1#04
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The Missing-Field Email Negotiator

One-liner (≤20 words): Reads the rejection code on a bounced e-invoice, writes the exact vendor email that fixes it, and resubmits.

Buyer and niche (≤25 words): Small firms in France and Germany issuing or receiving structured e-invoices that get bounced for missing bank data or SIREN mismatches.

Pain and evidence (≤40 words): Software-generated XRechnung fails the validator with no vendor fix date; French platforms auto-reject bad SIREN/SIRET or missing fields, stopping the payment cycle until someone corrects it. (src: outputs/s3-ideate/pain/T2-dossier.md, P13)

How it works (≤50 words): Parses the platform's rejection code against a lookup of what each code actually requires, drafts a specific, ready-to-send email to the vendor's AP contact naming the missing field, tracks the reply thread, and resubmits the corrected invoice to the plateforme agréée or validator once the fix arrives.

Why now (≤25 words): Claude for Chrome (TC-03) drafts, sends and tracks email threads inside the user's real inbox, closing the loop without a separate ticketing tool.

Demo moment (≤20 press): Feed it a rejection code; it produces the vendor email, a mock reply arrives, and the corrected invoice resubmits itself.

Business model (≤15 words): Per-resolved-rejection fee, capped by a monthly plan for firms issuing over 50 invoices.

---
id: s3-ideator-novel-T2-02-r1#05
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The Persistent Login Chain Agent

One-liner (≤20 words): Logs into every vendor and utility portal overnight, staying you, and drops new invoices into one folder.

Buyer and niche (≤25 words): Small firms whose invoices arrive scattered across a dozen vendor and utility self-service portals instead of email.

Pain and evidence (≤40 words): Paperwork arrives after a purchase is already approved, so someone keeps a manual list of what's still missing and chases it every month-end. (src: outputs/s3-ideate/pain/T2-dossier.md, P7)

How it works (≤50 words): Using the firm's own saved logins, a browser agent visits each vendor's billing portal nightly, checks for new statements or invoices since the last run, downloads them, and posts a one-line summary of what showed up and what's still overdue into the AP inbox, replacing the manual watch-list.

Why now (≤25 words): Sonnet 4.5 computer use (TC-02) sustains multi-step portal tasks for hours, reliable enough to run unattended on a schedule.

Demo moment (≤20 words): Kick off an overnight run; it returns with three new invoices fetched and one vendor flagged as still missing.

Business model (≤15 words): Priced per connected portal per month, undercutting a part-time AP clerk's hours.

---
id: s3-ideator-novel-T2-02-r1#06
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The Second Pair of AI Eyes

One-liner (≤20 words): Audits what Hubdoc, Dext or QuickBooks already extracted, catching the tax and duplicate errors they miss.

Buyer and niche (≤25 words): Small-business bookkeepers already paying for a capture tool but who still review every sync by hand.

Pain and evidence (≤40 words): Mixed-tax invoices break extraction and "sometimes" post wrong VAT; QBO's duplicate check only catches exact vendor-plus-bill-number matches, letting near-duplicates through. (src: outputs/s3-ideate/pain/T2-dossier.md, P3, P4)

How it works (≤50 words): Sits after the existing capture tool, re-reads the source document with fresh OCR, compares every posted field against it, checks the tax code against the vendor's history, and scans open bills for near-duplicates by amount and date rather than exact ID match, surfacing only the entries that actually need a human look.

Why now (≤25 words): Mistral OCR 3 (TC-30) re-parses documents at $1-2 per 1,000 pages, cheap enough to double-check an incumbent tool's output line by line.

Demo moment (≤20 words): Sync from Hubdoc runs; the tool immediately flags one wrong VAT code and one near-duplicate bill it let through.

Business model (≤15 words): Add-on subscription priced under the incumbent capture tool's own fee.

---
id: s3-ideator-novel-T2-02-r1#07
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The France PDP Matchmaker

One-liner (≤20 words): Shortlists and auto-connects one of France's 150 registered e-invoicing platforms before the September 2027 cutoff hits.

Buyer and niche (≤25 words): French micro-entrepreneurs and small firms who must pick a plateforme agréée or lose the ability to invoice at all.

Pain and evidence (≤40 words): 150 registered platforms exist with no default choice; without a connected one, a firm "will no longer be able to issue or receive" invoices. (src: outputs/s3-ideate/pain/T2-dossier.md, P14)

How it works (≤50 words): Asks a handful of questions about invoice volume, existing accounting software and sector, ranks the registry of plateformes agréées against that profile, then drives the chosen platform's own onboarding portal — filling SIREN, bank and accounting-software fields — so the firm finishes connected instead of holding a comparison spreadsheet.

Why now (≤25 words): Browser-use style agents (TC-06/TC-08) already automate multi-step web onboarding flows, letting the matchmaker finish the signup, not just recommend it.

Demo moment (≤20 words): Answer three questions; watch the agent fill and submit a real plateforme's onboarding form end to end.

Business model (≤15 words): One-time setup fee plus a small annual plan check as mandate details shift.

---
id: s3-ideator-novel-T2-02-r1#08
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
---

# The Client-Matter Invoice Router

One-liner (≤20 words): Reads each vendor invoice and routes it straight to the client matter it should be billed against.

Buyer and niche (≤25 words): Small professional-services firms (law, consulting) that pay expert witnesses, translators and process servers and must recover those costs per client.

Pain and evidence (≤40 words): Unknown suppliers get coded "unknown" by capture tools, and line-item detail needed for recovery costs extra or gets skipped, leaving someone to fix coding by hand every time. (src: outputs/s3-ideate/pain/T2-dossier.md, P5)

How it works (≤50 words): Reads the invoice alongside the firm's open matter list and prior billing history, proposes the matching client matter and cost code, learns firm-specific vendor-to-matter patterns over time, and only escalates the invoice to a person when no matter is a confident match, instead of defaulting everything to "unknown."

Why now (≤25 words): Long-context models (TC-25) hold the full open-matter list alongside the invoice in one pass, matching by content rather than a fixed rule table.

Demo moment (≤20 words): Feed in a court-reporter invoice; it proposes the correct matter code and cost category in under five seconds.

Business model (≤15 words): Priced per attorney seat, sold as a billable-cost-recovery add-on to practice management software.

<!-- COMPLETE -->
