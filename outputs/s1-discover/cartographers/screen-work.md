# Cartographer: screen-work — candidate territories

Source scout files: `outputs/s1-discover/scouts/s1-scout-screen-work-01.md` (portals), `-02.md` (legacy vertical software), `-03.md` (swivel-chair glue work), `-04.md` (tiny-org IT and security), `-05.md` (software used by AI agents). Every link below is copied from those files. Where a scout marked a claim `[unverified]`, that flag is repeated here.

---

### screen-work-01 — Checking eligibility across many payer portals
- **Description:** Medical front-desk staff and billers log into 7 to 11+ payer portals every week (Availity, NaviNet, and each payer's own site) to check eligibility and benefits. They juggle many logins, get timed out and re-enter data, and deal with navigation and rules that differ by payer. Even Availity, the multi-payer aggregator, is a manual portal.
- **computer-centric:** yes. All of the work happens in browser portals that have no usable API for most day-to-day tasks.
- **Signal:** strong
- **Evidence:**
  - https://www.mgma.com/mgma-stat/how-many-payer-portals-is-too-many-most-practices-already-know-their-answer
  - https://www.availity.com/multi-payer-portal/
- **Overlap:** shares staff and portals with screen-work-02. The dental and pharmacy practice-management territories (06, 07) sit upstream of it.

### screen-work-02 — Submitting prior authorizations and polling their status
- **Description:** Prior-auth coordinators handle about 39 requests per physician per week. Manual requests by phone, fax or portal take 16–24 minutes each and cost about $3.41, against $0.05 electronically. Only 35% are fully electronic. CMS-0057-F cuts standard decision times to 7 days, so staff have to check portals more often until payer FHIR APIs arrive in January 2027.
- **computer-centric:** yes. The work is form-filling and status-checking in portals, with fax as the fallback.
- **Signal:** strong
- **Evidence:**
  - https://caqh.org/hubfs/43908627/drupal/2024-01/2023_CAQH_Index_Report.pdf
  - https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f
  - https://www.aapc.com/blog/90261-prior-authorization-final-rule-reduces-barriers-to-patient-care/
- **Overlap:** close to 01. The 2027 API mandate may shrink this territory over time, and weak-signals may claim that rule. Offshore staff doing this work cost about $8k–$18k per FTE per year (https://staffingly.com/medical/services/prior-authorization/, vendor pricing [unverified]), which shows the budget currently goes to labor. Job-board volume for remote prior-auth roles is [unverified].

### screen-work-03 — Court e-filing portal outages and filing deadlines
- **Description:** Paralegals and attorneys file through state and county e-filing portals (Washington Odyssey, Alameda County, Montana) that have repeated dated outages. Washington's e-filing stayed suspended for about two weeks in late 2024. Filers have to monitor status, re-attempt filings and handle deadline risk by hand.
- **computer-centric:** yes. The work is filing in a web portal, and every jurisdiction runs a different system.
- **Signal:** medium. The outages are well dated, but the scout found no quotes about time lost.
- **Evidence:**
  - https://www.wsba.org/news-events/latest-news/news-detail/2024/11/04/court-of-appeals-e-filing-outage
  - https://www.alameda.courts.ca.gov/e-filing-unplanned-system-outages
  - https://courts.mt.gov/Courts/EFile/
- **Overlap:** the same pattern as 04 (government portals), but narrowed to legal filers.

### screen-work-04 — Filers stuck with unmodernized federal agency portals
- **Description:** Preparers and ordinary users deal with federal systems that GAO says are mostly unmodernized. Only 3 of 10 critical legacy systems had been modernized by February 2025, and agencies meet only 109 of 192 digital-experience requirements. No specific portal, role or hours figure was found.
- **computer-centric:** yes. The work happens in government web portals.
- **Signal:** weak. The evidence is systemic, with no role-level evidence behind it.
- **Evidence:**
  - https://www.gao.gov/products/gao-25-107795
  - https://www.nextgov.com/ideas/2025/02/legacy-systems-are-holding-back-government-service-deliveryheres-how-agencies-can-move-forward/403238/ (figures [unverified])
- **Overlap:** an umbrella over 03. The scout also looked at customs (ACE), USCIS and state tax portals and found nothing (see Gaps).

### screen-work-05 — Dental practice data trapped in Dentrix and Eaglesoft
- **Description:** Dental front desks work in long-established desktop practice-management software that reviewers call clunky and outdated. Developers reportedly pay $5,000 each for read and write API access, plus royalties [unverified]. Job boards list postings for "Dentrix data entry" roles [unverified counts]. Data moves by hand between the PMS, insurers and other tools.
- **computer-centric:** yes. It is a legacy Windows desktop app with a paywalled API.
- **Signal:** medium
- **Evidence:**
  - https://apitracker.io/a/dentrix
  - https://www.g2.com/compare/dentrix-vs-eaglesoft
  - https://www.indeed.com/q-data-entry-dentrix-jobs.html
- **Overlap:** eligibility checks for dental insurers link to 01. The "API toll" pattern is shared with 06, 07 and 10.

### screen-work-06 — Independent pharmacy software: gated APIs and painful migrations
- **Description:** Independent pharmacies run PioneerRx, QS/1, BestRx and similar systems. Their APIs are partner-gated, and one gets an "F" grade with a docs portal returning 503 errors. Pricing data is lost during migrations. The category is being rolled up under RedSail, which covers about 16,000 pharmacies. Staff re-enter data and reconcile it across systems.
- **computer-centric:** yes. The work happens in desktop and hosted pharmacy systems with closed integrations.
- **Signal:** medium
- **Evidence:**
  - https://supergood.ai/api-report-card/pioneerrx
  - https://www.redsailtechnologies.com/press-releases/redsail-technologies-acquires-primerx-as-an-affiliate
  - https://www.infowerks.com/migrating-from-mckesson-pioneerrx-qs-1/ ([unverified] marketing page)
- **Overlap:** the same pattern as 05 and 07.

### screen-work-07 — Auto dealership DMS lock-in and integration tolls
- **Description:** Dealership staff work inside CDK and Reynolds systems. Dealers pay $100 to $700+ per month per location for integrations. CDK settled an antitrust case for $100M, and a 2024 ransomware attack took about 15,000 dealers offline for nearly three weeks. Moving data between the DMS, CRM and service tools is a paid or manual chore.
- **computer-centric:** yes. The DMS is a screen-bound system of record with expensive API access.
- **Signal:** strong
- **Evidence:**
  - https://forum.dealerrefresh.com/threads/our-dms-appears-to-be-taking-advantage-of-us-what-are-you-paying-for-api-integration.5220/
  - https://www.dealershipclassdmssettlement.com/
  - https://en.wikipedia.org/wiki/CDK_Global
- **Overlap:** the same API-paywall pattern as 05 and 06. The outage angle touches on resilience (13–15).

### screen-work-08 — Trucking TMS: re-keying from dispatch to billing
- **Description:** At carriers running McLeod LoadMaster, dispatchers close a load in one screen and accounting re-types the trip details to create the invoice. This adds 2–3 days to billing and causes errors in mileage and accessorial charges.
- **computer-centric:** yes. It is double entry between modules of one TMS.
- **Signal:** medium. There is one specific source, and it is a competitor's blog (date [unverified]).
- **Evidence:**
  - https://www.torotms.com/blog/mcleod-software-competitors
- **Overlap:** strong overlap with 09. Both are freight back offices; 08 covers internal double entry and 09 covers incoming documents.

### screen-work-09 — Freight brokerages re-keying rate confirmations, BOLs and PODs
- **Description:** Brokerage billing coordinators spend 10–15 hours a week retrieving and reconciling documents and re-typing rate confirmations and bills of lading into the TMS. That is about 4 minutes per document and about $17.8k a year for a 10-person shop. The manual error rate is 1–4% per field, and 3.8% of carrier invoices overbill for accessorials.
- **computer-centric:** yes. The work is copying from PDF or email into the TMS.
- **Signal:** strong on numbers, but everything comes from one vendor blog with an [unverified] date.
- **Evidence:**
  - https://www.laneproof.com/blog/document-automation-freight-ops-bol-data-entry
- **Overlap:** 08, and 10 for the general invoice-entry pattern.

### screen-work-10 — Small-business AP: keying invoices into accounting software
- **Description:** AP clerks and bookkeepers type invoices into QuickBooks or the ERP. 68% key invoices manually, at $9.84–$15.97 per invoice against about $2 for the best teams, and each clerk handles 60–300 invoices a week. Capture tools (Dext, AutoEntry) claim 99% accuracy but fail on non-standard layouts, and Bill.com-to-QuickBooks sync breaks. Offshore and Upwork labor at $13–$35 an hour absorbs the rest.
- **computer-centric:** yes. The work is moving PDF and email data into accounting software.
- **Signal:** strong
- **Evidence:**
  - https://www.datocms-assets.com/80283/1744404602-ardent-partners-ap-metrics-that-matter-in-2025-pagero-final.pdf
  - https://www.docuclipper.com/blog/invoice-data-entry/
  - https://www.g2.com/products/dext/reviews
- **Overlap:** 09 (the freight version) and 11 (EU mandates change the invoice format). The problem of LLM extraction hallucinating (https://www.auxiliobits.com/blog/automating-accounts-payable-streamlining-with-llm-workflows/) is the error-checking side of this territory.

### screen-work-11 — Small firms facing EU e-invoicing mandates
- **Description:** AP and AR clerks and bookkeepers at small businesses trading in Germany (must receive e-invoices from January 2025), Belgium, Denmark and Croatia (Peppol from January 2026), France (September 2026) and Spain (October 2026 for large firms). They have to receive, validate and issue structured e-invoices, while their current workflow is PDFs going into accounting software.
- **computer-centric:** yes. The work is formats, portals and accounting software.
- **Signal:** medium. The deadlines are firm, but the scout found no small-business pain quotes.
- **Evidence:**
  - https://www.forbes.com/sites/aleksandrabal/2025/11/02/2026-the-year-mandatory-e-invoicing-sweeps-across-europe/
  - https://www.houseblend.io/articles/us-canada-e-invoicing-mandates-2026-regulations
- **Overlap:** 10. It is likely to overlap with the weak-signals lens.

### screen-work-12 — Property management reporting that runs on exports
- **Description:** Operators on Yardi Voyager and AppFolio face partner-gated APIs, so automation runs on exported reports instead of live data. During migrations, teams run both systems and reconcile data by hand. Property accountants and analysts copy data between exports and spreadsheets.
- **computer-centric:** yes. The work is web property-management systems plus spreadsheets.
- **Signal:** weak to medium. The sources are promotional or synthesized and flagged [unverified].
- **Evidence:**
  - https://anchorbrowser.io/hub/yardi-voyager-data-export-automation-api-alternative
  - https://nextautomation.us/blog/yardi-vs-appfolio
- **Overlap:** the API-gating pattern of 05–07.

### screen-work-13 — Insurance agencies re-keying ACORD forms
- **Description:** Staff at independent agencies using Applied Epic, Vision or AMS360 re-enter client and policy data because MGAs require current ACORD forms that the system has to produce. One agency reportedly switched systems over this double entry.
- **computer-centric:** yes. The work is entering data into agency management systems and carrier or MGA portals.
- **Signal:** weak. There is one forum source and it is [unverified].
- **Evidence:**
  - https://www.insurancejournal.com/forums/viewtopic.php?f=2&start=15&t=2469
- **Overlap:** the same shape as 01 (many counterpart portals, each with its own form requirements).

### screen-work-14 — Construction payroll and job-costing double entry
- **Description:** Construction back offices on Sage 300 CRE re-type employee records, certifications, rate changes and field data into payroll and job costing unless they buy a paid integration. Integration vendors themselves describe double entry as the default.
- **computer-centric:** yes. The work is an on-premise desktop accounting ERP.
- **Signal:** weak. There is one vendor source (date [unverified]).
- **Evidence:**
  - https://www.rhumbix.com/blog/sage-300-integration-guide-field-data-construction-erp
- **Overlap:** 15, the legacy ERP pattern.

### screen-work-15 — Green-screen ERPs on AS/400 in manufacturing and distribution
- **Description:** Manufacturing and distribution staff still work in character-based ERPs such as JD Edwards World on IBM i and AS/400 terminals. Vendors are still selling modernization. The scout found no dated user complaint, hours figure or cost figure.
- **computer-centric:** yes. The work is on terminal-emulator screens.
- **Signal:** weak
- **Evidence:**
  - https://en.wikipedia.org/wiki/IBM_AS/400
- **Overlap:** 14.

### screen-work-16 — Real-estate transaction coordinators tracking deals in spreadsheets
- **Description:** Transaction coordinators own data entry, compliance and document tracking for property deals. Smaller brokerages track transactions in spreadsheets and struggle once they move from one agent to many.
- **computer-centric:** yes. The work is documents plus spreadsheets.
- **Signal:** weak. The source is a description only, with no hours or error figures ([unverified]).
- **Evidence:**
  - https://www.paperlesspipeline.com/blog/free-real-estate-transaction-management-spreadsheet-from-paperless-pipeline
- **Overlap:** the general swivel-chair pattern of 10.

### screen-work-17 — Onboarding and offboarding accounts in tiny firms
- **Description:** Office managers acting as accidental admins at firms of 5–50 people have to disable email, VPN and cloud-app accounts, collect devices and wipe them, and much of it has to happen on the employee's last day. It is a manual checklist across many SaaS consoles, so missed accounts create security and compliance exposure.
- **computer-centric:** yes. The work spans SaaS admin consoles.
- **Signal:** medium
- **Evidence:**
  - https://firsthr.app/blog/onboarding/it-offboarding-checklist
- **Overlap:** 22 (admin console fragmentation) and 23 (MSPs repeat the same work across clients).

### screen-work-18 — Small-business cyber-insurance questionnaires
- **Description:** Small-business owners and office managers renewing cyber insurance now face 60–150 questions, where there used to be about a dozen. They have to prove MFA, backups and other controls. 82% of claims involved organizations without proper MFA. Readiness assessments cost $750–$1,750.
- **computer-centric:** yes. The work is gathering evidence from admin consoles into insurer forms.
- **Signal:** medium. There is one MSP source.
- **Evidence:**
  - https://www.snl-techservices.com/post/cyber-insurance-readiness-small-business
- **Overlap:** 19 and 20 are similar evidence-gathering chores for different regulators.

### screen-work-19 — CMMC self-assessments for small defense subcontractors
- **Description:** Small DoD subcontractors with no compliance staff must file Level 1 and Level 2 self-assessments before contract award (Phase 1 started November 10, 2025). Preparation takes 8–12 months, and prime contractors push them early. Phase 2 was suspended in July 2026, which adds uncertainty.
- **computer-centric:** yes. The work is gathering control evidence from IT systems and filing it in a portal.
- **Signal:** medium
- **Evidence:**
  - https://madsecurity.com/madsecurity-blog/cmmc-rollout-timeline-2025-2028
  - https://elevateconsult.com/insights/cmmc-2-0-certification-for-dod-contractors-what-you-need-to-know-before-2026-deadlines/
- **Overlap:** 18 and 20. It is also a candidate for the weak-signals lens.

### screen-work-20 — HIPAA Security Rule overhaul for small practices
- **Description:** Small and rural healthcare practices and business associates face the proposed rule, which makes nearly all safeguards mandatory. OCR estimates about $9B in first-year cost and industry groups say it falls hardest on small providers. The rule was not final at the time of the sources. The work is documentation and evidence collection with no IT staff.
- **computer-centric:** yes. The work is security configuration and documentation.
- **Signal:** medium, and conditional on the rule being finalized.
- **Evidence:**
  - https://www.dwt.com/blogs/privacy--security-law-blog/2025/01/hipaa-security-rule-proposed-changes-in-2025
  - https://livecompliance.com/blog/2026-hipaa-security-rule-overhaul/
- **Overlap:** 18 and 19. It serves the same practices as 01 and 02.

### screen-work-21 — Email authentication setup for small senders (SPF, DKIM, DMARC)
- **Description:** Small organizations that send marketing email without IT staff must configure SPF, DKIM and DMARC and one-click unsubscribe. Google and Yahoo announced the rules in 2024 and enforced them from November 2025, and non-compliant mail gets rejected. The work is DNS-console and email-platform settings that non-experts misconfigure.
- **computer-centric:** yes. The work is in DNS registrar and email admin consoles.
- **Signal:** medium
- **Evidence:**
  - https://www.mailgun.com/state-of-email-deliverability/chapter/yahoogle-bulk-senders/
- **Overlap:** 22 (consoles) and 24 (spoofing and BEC).

### screen-work-22 — Accidental admins lost in identity consoles
- **Description:** Non-IT staff managing identity in Microsoft Entra face settings spread across several admin portals, PowerShell, the CLI and Graph, plus confusing licensing tiers. Password resets make up 20–50% of help-desk volume (a figure repeated from older Gartner research, [unverified] original).
- **computer-centric:** yes. The work is in admin consoles.
- **Signal:** medium. G2 complaints were found for Entra only.
- **Evidence:**
  - https://www.g2.com/products/microsoft-entra-id/reviews?qs=pros-and-cons
  - https://www.bleepingcomputer.com/news/security/password-reset-calls-are-costing-your-org-big-money/
- **Overlap:** 17, 18 and 23.

### screen-work-23 — Small MSP technicians doing repetitive tickets across many clients
- **Description:** Technicians at small MSPs serving 1–50-person clients handle about 50 tickets each per month: password resets, onboarding and patching, repeated across tenants. Margins are thin (revenue below $100k per technician means a profitability problem). AI triage is starting to change how Level-1 work is measured.
- **computer-centric:** yes. The work is in PSA and RMM tools and client consoles.
- **Signal:** medium. The benchmarks come from aggregator sites.
- **Evidence:**
  - https://worldmetrics.org/msp-statistics/
  - https://www.ltvplus.com/msp/msp-revenue-per-technician/
- **Overlap:** the MSP is the intermediary buyer for 17, 18, 21 and 22.

### screen-work-24 — Checking payment-change and invoice emails for fraud at small businesses
- **Description:** Small-business owners and bookkeepers have to check by hand whether an email changing a vendor's bank details or asking for payment is real. Business email compromise cost $3.046B in 2025, SMBs are 28% of victims, and about 45% of hit small businesses reportedly close within six months. 88% of SMB breaches involve ransomware.
- **computer-centric:** yes. The work is inbox triage plus payment portals.
- **Signal:** medium. The statistics are solid but come from a vendor source, and the scout found no first-person workflow quotes.
- **Evidence:**
  - https://www.eftsure.com/statistics/business-email-compromise-statistics/
  - https://shieldnet360.com/resources/blog/2025-verizon-dbir-why-88-of-small-business-breaches-now-involve-ransomware-en-436
- **Overlap:** 10 (the AP workflow is where the fraud lands) and 21.

### screen-work-25 — Browser and computer-use agents failing in production
- **Description:** Teams building agents that operate websites see about 78% on WebArena but about 22% success in production because of page-layout changes, modals, login state and irreversible actions. Agents get stuck mid-task in nearly 50% of WebArena-Lite runs. Builders debug these failures by watching browser sessions.
- **computer-centric:** yes. The users are agents operating screens, and humans supervise them.
- **Signal:** medium. Both figures come from one vendor blog.
- **Evidence:**
  - https://futureagi.com/blog/evaluating-browser-use-agents-2026/
- **Overlap:** 26 (the blocking causes) and 28 (observability).

### screen-work-26 — Agents blocked by CAPTCHAs, bot walls and logins
- **Description:** Agent builders and their supervisors hit CAPTCHAs (the best model solves 40% on Open CaptchaWorld), Cloudflare's default block on agent use of pages with ads (September 2026), and MFA and password walls that need a human to step in. Open-source users report agents "stuck in CAPTCHAs" and pay third-party solvers. Machine-readable alternatives are thin: about 10% of domains have llms.txt.
- **computer-centric:** yes. This is software whose users are agents.
- **Signal:** strong
- **Evidence:**
  - https://arxiv.org/pdf/2505.24878
  - https://github.com/browser-use/browser-use/discussions/1695
  - https://fastcrw.com/blog/cloudflare-ai-crawler-block-september-2026
- **Overlap:** 25 and 27. The login-handoff claim (https://openai.com/index/computer-using-agent/) is [unverified].

### screen-work-27 — Agents' legal and paid access to third-party sites and content
- **Description:** Teams running shopping or research agents face lawsuits (Amazon v. Perplexity's Comet ended in an injunction; Reddit sued Perplexity and scrapers in October 2025) and new per-crawl and per-use charges (Cloudflare Pay Per Crawl in July 2025, extended to pay-per-use in July 2026). Operators have to work out which sites are allowed, paid or forbidden.
- **computer-centric:** yes. The buyers and users are agents.
- **Signal:** strong
- **Evidence:**
  - https://ppc.land/court-blocks-perplexitys-comet-browser-from-amazons-accounts/
  - https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/
  - https://techscoop.substack.com/p/captchas-and-bot-detection-are-failing
- **Overlap:** 26 and 29 (payments). It will likely overlap with the tech-unlocks lens.

### screen-work-28 — Spending guardrails for agents that pay
- **Description:** Teams deploying purchasing or API-paying agents have to build their own spending limits, category restrictions and time-bound authorizations. The x402 rail processed about 165M agent transactions ($50M) across 69k agents by April 2026, but guidance calls these guardrails "the entire trust model" and says platforms don't provide them by default.
- **computer-centric:** yes. The customers are agents, and humans supervise them.
- **Signal:** medium
- **Evidence:**
  - https://stablecoininsider.org/ai-agents-for-stablecoins-in-2026/
  - https://eco.com/support/en/articles/14839400-what-is-agentic-commerce-the-2026-guide
- **Overlap:** 27. It will likely overlap with the tech-unlocks lens (agent payments).

### screen-work-29 — Debugging agent traces and controlling agent-infrastructure costs
- **Description:** New AgentOps and "AI Operations Engineer" roles debug agent traces by hand. Langfuse has no automatic issue clustering, LangSmith's multi-step causal analysis is manual with lock-in, and seats cost $39 a month. Browser-infrastructure bills also carry hidden overage fees ($150 of a $249 month went to bandwidth), with price gaps of about 5x between vendors.
- **computer-centric:** yes. The customers are agents, and humans supervise them.
- **Signal:** medium
- **Evidence:**
  - https://latitude.so/blog/best-llm-observability-tools-agents-latitude-vs-langfuse-langsmith
  - https://agenticengineeringjobs.com/roles/agentops
  - https://www.tinyfish.chat/blog/browserbase-pricing
- **Overlap:** 25 and 30.

### screen-work-30 — Developers spending more time reviewing AI-written code than writing it
- **Description:** Developers now spend 11.4 hours a week reviewing AI-generated code and 9.8 hours writing code (Q1 2026). Only 29% trust AI output, 75% read every line, and 56% often make major fixes. Reviewing diffs from coding agents is now the main screen-bound job.
- **computer-centric:** yes. The work is reviewing in the IDE and pull requests.
- **Signal:** strong
- **Evidence:**
  - https://www.sonarsource.com/state-of-code-developer-survey-report.pdf
  - https://shiftmag.dev/state-of-code-2025-7978/
- **Overlap:** 29 (supervising agent output). The market is crowded, so Gate B should check how much space is left.

---

## Gaps
- **No first-person community quotes.** No scout could retrieve Reddit threads (r/medicalbilling, r/sysadmin, r/msp, r/Bookkeeping, r/dentistry, r/FreightBrokers and others). Almost all evidence comes from vendors, aggregators, surveys or regulators rather than practitioners.
- **Government portals beyond healthcare and courts.** There was no usable evidence for CBP ACE (customs brokers), USCIS case status (immigration paralegals), state DOT, IRP and IFTA filings (carriers), multi-state sales-tax portals, or the BOI reporting portal.
- **Verticals searched with no signal.** Veterinary practice management (Cornerstone, ezyVet), small law-firm case management (Smokeball, PracticePanther, Needles), recruiting coordinators keying data into an ATS, and e-commerce order entry into Shopify or spreadsheets all came back without hours, costs or complaints.
- **Primary-source confirmation.** The AMA prior-auth figures, the Gartner finance-AI and password-reset statistics, Dentrix API fees, job-posting counts and OSWorld per-model scores are all secondhand or [unverified].
- **Tiny-org IT.** There were no G2 or Capterra complaints about Google Workspace admin, Intune or registrar UIs, no office-manager job postings that list IT duties, and no time-to-complete figures for PCI SAQ or SOC 2 at tiny organizations.
- **Agent side.** No launched agent identity or verification ("agent KYC") product was found, and no count of job postings for agent-reliability roles.

<!-- COMPLETE -->
