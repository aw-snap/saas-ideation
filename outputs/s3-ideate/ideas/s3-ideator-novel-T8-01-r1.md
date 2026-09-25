## Titles

1. Parent Portal Autopilot
2. The Family Ledger [similar to #19] → Aging Parent Trial Balance
3. Renewal Deadline Sentinel
4. Appeal Drafter for MA Denials
5. Proxy Credential Vault [safe] → Consent-Scoped Agent Passport
6. Fraud Reconciliation Watch [similar to #16] → Three-Way Match for Elder Accounts
7. Every-Portal Password Butler [safe] → The Standing Appointment Bot
8. Estate Closeout Copilot
9. Joint Account Risk Flagger
10. Fiduciary Audit Trail Generator
11. Monthly Bill-Pay Reconciler [similar to #2, safe] → Household P&L for a Parent's Care
12. Denial-to-Appeal Pipeline [similar to #4] → Multi-Parent Portfolio Console
13. Medicare Advantage Formulary Watchdog
14. POA Rejection Interceptor
15. Multi-Portal Status Board [similar to #1] → The Weekly Portal Close-Out Report
16. Scam Pattern Detector for Elders [safe] → The Cooling-Off Circuit Breaker
17. Death Certificate Distributor [similar to #8] → The Estate Institution Map
18. Medicaid Mail Redirector
19. Caregiver Bookkeeping Suite [similar to #2/#11] → The Handoff Binder
20. SHIP Counselor AI Assistant [safe/thin] → The Open Enrollment War Room
21. Representative Payee Reporting Bot
22. Portal Login Failure Diagnostician [safe/thin] → The Facility Invoice Line-Item Auditor
23. Convenience-Signer Advisor [safe/thin] → The Account-Titling Pre-Check
24. EOB Error Auditor
25. Family Financial Command Center [similar to #2/#19] → The DMM Co-Pilot
26. Appeal Win-Rate Calculator [safe/thin] → The Appeal Odds Brief
27. Proxy Identity Passport [similar to #5] → The Last-Statement Locator
28. Nursing Home Bill Reconciliation [similar to #22] → The Spend-Down Tracker
29. Zombie Subscription Hunter [safe] → The Recurring-Charge Archaeologist
30. Elder Care Trial Balance [similar to #2] → The Institution Response-Time Ledger

Best 8 developed below: #1, #4, #10, plus the rewritten #5, #6, #11, #22, #25.

## Cards

---
id: s3-ideator-novel-T8-01-r1#01
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# Parent Portal Autopilot

One-liner (≤20 words): An in-browser agent logs into a parent's Medicaid, Medicare and bank portals weekly and reports only what changed.
Buyer and niche (≤25 words): Adult children tracking a parent's coverage and money across Medicaid, Medicare Advantage and bank portals that have no API.
Pain and evidence (≤40 words; cite the pain dossier file): Proxies hit login errors and support replies that just say "contact the insurance provider" — the failure comes before any question of delegated access, costing "days" per portal. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Runs inside the proxy's own logged-in browser, visits each portal on a schedule, screenshots status pages, and turns them into a plain-English weekly digest of deadlines, denials and balance changes, with a retry loop for portals that fail to load.
Why now (≤25 words; name the specific capability): Claude for Chrome (in production since 2025-08/12) operates inside a real logged-in browser session, handling portal logins and forms directly.
Demo moment (≤20 words): Against a mock Medicaid portal the agent logs in, finds a renewal notice, and surfaces its 30-day deadline.
Business model (≤15 words): $19/month per parent tracked; a family plan covers multiple portals and proxies.

---
id: s3-ideator-novel-T8-01-r1#02
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# The Denial-to-Appeal Drafter

One-liner (≤20 words): Turns a Medicare Advantage denial letter into a ready-to-file appeal that cites the plan's own coverage rules.
Buyer and niche (≤25 words): Adult children appealing a parent's Medicare Advantage prior-auth denial who don't realize most appeals actually win.
Pain and evidence (≤40 words; cite the pain dossier file): In 2024, insurers denied 4.1M of 52.8M prior-auth requests; only 11.5% were appealed, yet 80.7% of appeals were overturned. Most families never try. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Reads the scanned denial letter and clinical notes, pulls the plan's public coverage criteria, and drafts a citation-backed appeal with the 65-day deadline and the 72-hour expedited option flagged, for the proxy to review and submit.
Why now (≤25 words; name the specific capability): Mistral OCR 3 (2025-12) parses scanned denial letters and clinical records at $2 per 1,000 pages, cheap enough per appeal.
Demo moment (≤20 words): Upload a denial-letter PDF; a formatted, citation-backed appeal letter appears in under a minute.
Business model (≤15 words): $49 per appeal drafted, or $15/month unlimited for active caregivers.

---
id: s3-ideator-novel-T8-01-r1#03
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# Consent-Scoped Agent Passport

One-liner (≤20 words): Gives a caregiving agent its own revocable digital identity that banks and agencies can verify instead of a shared password.
Buyer and niche (≤25 words): Adult children and daily money managers whose power of attorney keeps getting rejected because it isn't on the institution's own form.
Pain and evidence (≤40 words; cite the pain dossier file): Banks demand their own POA form or a physician letter; one 94-year-old "went without her pension money for seven months" while her family sorted it out. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The proxy uploads their POA once; the product issues a signed, scoped credential the agent presents when acting on institution sites, with a timestamped action log that satisfies the "documentation" agencies say they may request at any time.
Why now (≤25 words; name the specific capability): Non-human identity standards for agents (Okta Agent SSO, GA 2026-08) now give software agents first-class, governed identities institutions can check.
Demo moment (≤20 words): The agent presents its credential at a mock bank login; the portal accepts it and logs the action.
Business model (≤15 words): $12/month per proxy relationship, plus a one-time identity-verification setup fee.

---
id: s3-ideator-novel-T8-01-r1#04
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# Three-Way Match for Elder Accounts

One-liner (≤20 words): Clears a parent's transactions the way bookkeepers clear invoices — against merchant history, spend pattern, and a one-tap family check.
Buyer and niche (≤25 words): Adult children watching a parent's bank accounts for fraud who've found existing alert apps unreliable and hard to set up.
Pain and evidence (≤40 words; cite the pain dossier file): Elder fraud complaints hit 147,127 in 2024 ($4.885B lost); families notice weeks later, and existing monitors like EverSafe carry thin reviews and their own login trouble. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Every new transaction is checked against known merchant/payee history and the parent's normal spend pattern; anything new or large triggers a one-tap text confirmation from the family before it's marked clear, cutting the false alarms that make monitoring apps get ignored.
Why now (≤25 words; name the specific capability): Claude for Chrome (production, 2025-08/12) watches and acts inside the banking session the family already uses, no data-sharing integration needed.
Demo moment (≤20 words): A purchase from a new payee triggers an instant text; approving or declining updates the ledger live.
Business model (≤15 words): $9.99/month per parent, tiered pricing for multiple linked accounts.

---
id: s3-ideator-novel-T8-01-r1#05
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# A Parent's Monthly Close

One-liner (≤20 words): Closes the books on a parent's care spending every month like a small-business P&L, flagging duplicate charges.
Buyer and niche (≤25 words): Adult children and daily money managers reconciling a parent's bills, insurance reimbursements and care-facility charges every month.
Pain and evidence (≤40 words; cite the pain dossier file): Checking accounts for missed payments, late fees and duplicate charges takes about 4 hours a month; paid daily money managers charge $25-$100/hour to do the same work by hand. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Pulls statements and facility invoices, categorizes every line, matches insurance reimbursements to the bills they cover, and produces a one-page monthly close with every duplicate or unexplained charge circled for review, instead of a spreadsheet built by hand.
Why now (≤25 words; name the specific capability): 1M-token context models hold a full year of statements and invoices in one pass, replacing manual chunking and re-keying.
Demo moment (≤20 words): Feed three months of mixed PDFs; the close appears with one duplicated nursing-home charge circled.
Business model (≤15 words): $29/month per parent; $99/month per client for professional money managers.

---
id: s3-ideator-novel-T8-01-r1#06
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# Facility Invoice Line-Item Auditor

One-liner (≤20 words): Reads every nursing-home or assisted-living invoice line by line and flags charges that don't match the signed rate sheet.
Buyer and niche (≤25 words): Adult children paying long-term-care facility bills who don't have time to check whether each line item is real or billed twice.
Pain and evidence (≤40 words; cite the pain dossier file): Families juggle facility bills against insurance reimbursements while catching "duplicate charges" is already one of the monthly tasks that eats about 4 hours, per the dossier's bill-watching evidence. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): OCRs each facility invoice, matches every line item against the signed care-plan rate sheet and prior invoices, and produces a dispute-ready summary of anything over-rate, duplicated, or billed for a service not on file.
Why now (≤25 words; name the specific capability): Mistral OCR 3 (2025-12) claims a 74% win rate over its predecessor on scanned tables, at $2 per 1,000 pages.
Demo moment (≤20 words): Upload a facility invoice; the auditor circles a "linen service" line charged twice in one month.
Business model (≤15 words): $25 per invoice audited, or $75/month unlimited for an ongoing resident.

---
id: s3-ideator-novel-T8-01-r1#07
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# The DMM Co-Pilot

One-liner (≤20 words): Lets a professional daily money manager run thirty elderly clients' accounts from one console instead of thirty separate logins.
Buyer and niche (≤25 words): Daily-money-manager and fiduciary firms handling bill-pay, monitoring and reporting for many elderly clients at once.
Pain and evidence (≤40 words; cite the pain dossier file): Daily money managers already charge $25-$100/hour for roughly 4 hours per client monthly, work that has no shared tooling and cannot scale past a handful of clients per manager. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Each client's portals and accounts are enrolled once; the agent runs the weekly check-in, bill-pay review and fraud watch across every client in parallel overnight, surfacing only the exceptions into one triage queue the manager clears each morning.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 (2025-09) sustains multi-step tasks for 30+ hours, enough to run a full multi-client portfolio unattended.
Demo moment (≤20 words): A console showing 30 mock clients leaves 3 flagged exceptions waiting after an overnight run.
Business model (≤15 words): SaaS at $40 per client per month, sold to DMM and fiduciary firms.

---
id: s3-ideator-novel-T8-01-r1#08
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r1
---

# The Fiduciary Accounting Generator

One-liner (≤20 words): Turns a year of bank and bill-pay records into the annual accounting report VA and SSA fiduciaries must file.
Buyer and niche (≤25 words): Informal family fiduciaries and Social Security representative payees who must file annual accountings or risk an audit.
Pain and evidence (≤40 words; cite the pain dossier file): VA fiduciaries handling over $10k a year must file annual accountings; SSA audits whether payees "used and accounted for" benefits; families keep the books by hand with real legal exposure. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Ingests a year of statements and receipts, categorizes every transaction against the agency's benefit-use rules, and assembles the required accounting form with a receipts index attached, ready to file or hand to an auditor, instead of a spreadsheet built line by line.
Why now (≤25 words; name the specific capability): 1M-token context and cheap inference let a full year of records be reconciled in a single pass, not manual entry.
Demo moment (≤20 words): Drop a year of bank CSVs in; a completed VA accounting form populates, each line traceable to a receipt.
Business model (≤15 words): $99 per annual filing, or $15/month for ongoing record-keeping.

<!-- COMPLETE -->
