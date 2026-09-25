# Cartographer: weak-signals

Sources: the scout files `outputs/s1-discover/scouts/s1-scout-weak-signals-01.md` (non-US regulation), `-02.md` (US regulation), `-03.md` (new public data), `-04.md` (failure modes caused by AI) and `-05.md` (new roles and workflows). Every link below is copied from those files. Anything a scout marked `[unverified]` stays marked here.

## Territories

### weak-signals-01: UK Making Tax Digital quarterly filings for sole traders and landlords
Description: From April 2026, UK sole traders and landlords earning over £50k must keep digital records and file four quarterly updates plus a year-end return through third-party MTD software. That is five submissions a year where there used to be one. The threshold drops to £30k in 2027 and £20k in 2028. There is no free universal HMRC portal for this.
- computer-centric: yes. Record-keeping and quarterly submissions happen only in software.
- Signal: strong. The deadline is dated, the scope is quantified (864,000 people) and it widens each year.
- Evidence: https://www.bytestart.co.uk/news-insights/864000-sole-traders-and-landlords-face-new-mtd-reporting-rules-from-april-2026/ ; https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax ; https://kirkwoodwilson.co.uk/making-tax-digital-2026-a-practical-guide-for-sole-traders-and-landlords-with-50k-income/
- Overlap: The same shape (a micro-entity forced into a recurring digital filing) as weak-signals-03 and weak-signals-09.

### weak-signals-02: UK Companies House identity verification for directors and PSCs
Description: Every UK director and person with significant control must verify identity through GOV.UK One Login, or through an Authorised Corporate Service Provider, before the company's next confirmation statement. That date differs per company, and the final cutoff is 18 Nov 2026. Missing it is a criminal offence. Accountants and company secretaries have to chase many directors against staggered dates.
- computer-centric: yes. The work is portal verification plus tracking deadlines for each company.
- Signal: medium. There is a hard penalty and a dated rollout, but no practitioner pain quotes.
- Evidence: https://www.gov.uk/government/news/companies-house-confirms-identity-verification-rollout-from-18-november-2025 ; https://www.prosolve.uk/guides/companies-house-id-verification ; https://www.simplybusiness.co.uk/knowledge/business-structure/companies-house-business-identity-verification/
- Overlap: The deadline tracking relates to weak-signals-13.

### weak-signals-03: France B2B e-invoicing switchover (receive now, issue 2027)
Description: Since 1 Sept 2026, every French company must be able to receive structured e-invoices through certified platforms (Plateformes Agréées). Large and mid-size firms must also issue them. Small and micro firms must issue from 1 Sept 2027. Invoicing moves from PDF or paper to structured files routed through a new portal layer.
- computer-centric: yes. The change is a new file format and a new platform duty.
- Signal: strong. The regulator confirmed "no further postponements", the date has already passed, and a second wave is dated.
- Evidence: https://www.ey.com/en_gl/technical/tax-alerts/french-government-announces-simplification-measures-as-part-of-september-2026-e-invoicing-mandate ; https://www.truecommerce.com/en-gb/blog/e-invoicing-in-france-a-guide-to-the-french-mandate/
- Overlap: This is a format transition like weak-signals-11 (customs entries).

### weak-signals-04: European Accessibility Act remediation for SME and non-EU web sellers
Description: Since 28 June 2025, firms above micro size that sell digital products or services into the EU must have WCAG-accessible websites and apps. Enforcement arrived within days, with French advocacy groups sending legal notices to grocers. Fines reach €100k per violation. Non-EU exporters may not be tracking the rule at all.
- computer-centric: yes. It is an interface-level compliance duty on websites and apps.
- Signal: medium. Enforcement is live, but the micro-exemption thresholds come only from secondary sources.
- Evidence: https://www.insideglobaltech.com/2025/06/10/european-accessibility-act-june-2025-deadline-has-arrived/ ; https://www.siteimprove.com/blog/european-accessibility-act-what-june-2025-deadline-means/
- Overlap: Same WCAG remediation work as weak-signals-12 (US municipalities), but a different buyer and legal regime.

### weak-signals-05: NIS2 incident-reporting clock for mid and small entities
Description: Entities covered by NIS2 must send an early warning within 24h, a notification within 72h and a final report within one month, through national portals. Transposition is fragmented: 23 member states faced infringement proceedings, and a Jan 2026 amendment eases duties for 28,700 firms. Firms are unsure which national regime and portal apply to them.
- computer-centric: yes. The duty is to file incident reports through national portals.
- Signal: medium. The deadlines and counts are quantified, but the scope is still moving.
- Evidence: https://ecs-org.eu/policy/nis2-directive-transposition-tracker/ ; https://www.globalpolicywatch.com/2026/01/germany-transposes-nis-2-directive-increased-cybersecurity-requirements-for-businesses/
- Overlap: Scope churn relates to weak-signals-13. It is a cyber duty, like weak-signals-09.

### weak-signals-06: EU AI Act duties for tiny deployers (Article 4 literacy, Article 50 transparency)
Description: Since 2 Aug 2026, the Article 4 AI-literacy duty is enforceable for any organisation that deploys AI, including a sole trader using an AI email assistant. There is no size threshold. Article 50 transparency labelling and GPAI enforcement were not delayed. Small firms without a compliance function must document training and label AI output.
- computer-centric: no. The core duty is training and documentation. It attaches to on-screen AI tools but is not itself screen work.
- Signal: medium. The date is firm and the rule has no size gate, but no pain quotes were found.
- Evidence: https://wtlgovernance.com/insights/updates/eu-ai-act-article-4-ai-literacy-enforcement-deadline/ ; https://learnframe.com/blog/ai-act-article-4-literacy-deadline ; https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-compliance-deadline-20/
- Overlap: Both are AI-deployer duties for small organisations, like weak-signals-08 (Colorado).

### weak-signals-07: India DPDP consent, breach and data-request workflows
Description: India's DPDP Rules were notified 14 Nov 2025. Consent managers become operational around mid-2026, and full compliance is due 13 May 2027. There is no small-business exemption. Any organisation processing Indian personal data needs consent-manager integration, breach notification and handling of data-principal requests, often for the first time.
- computer-centric: yes. The work is new digital consent, request and breach workflows.
- Signal: medium. The timeline is dated and there is no size exemption, but no practitioner evidence was found.
- Evidence: https://www.india-briefing.com/news/india-dpdp-compliance-timeline-enforcement-2026-27-44740.html/ ; https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Rules,_2025
- Overlap: Both lack a size exemption, like weak-signals-06.

### weak-signals-08: Colorado automated-decision disclosure and human-review logs
Description: Colorado's rewritten AI law (SB 189, signed 14 May 2026, effective 1 Jan 2027) narrows the duties to consumer disclosures and documentation of human review for automated decision-making. It has no small-business carve-out. Small deployers of hiring, lending or tenant-screening tools must produce notices and review logs.
- computer-centric: yes. The work is disclosure notices and review logs tied to software decisions.
- Signal: medium. The law is real and dated, but it is volatile, with three effective dates in 18 months.
- Evidence: https://www.consumerfinancemonitor.com/2026/05/12/colorado-rewrites-its-landmark-ai-law-unpacking-sb-26-189-and-what-it-means-for-businesses/ ; https://www.clarkhill.com/news-events/news/colorados-ai-law-delayed-until-june-2026-what-the-latest-setback-means-for-businesses/ ; https://www.sayfeai.com/blog/ai-compliance-colorado-eu-small-business-2026
- Overlap: The churn relates to weak-signals-13, and it is the same deployer category as weak-signals-06.

### weak-signals-09: CMMC self-assessment and annual SPRS affirmation for small defense subcontractors
Description: Since 10 Nov 2025, small defense subcontractors handling FCI or CUI must self-assess against NIST 800-171 (110 controls at Level 2). They maintain an SSP and POA&M and affirm their score in SPRS every year. From 10 Nov 2026, Level 2 needs a third-party audit. A wrong affirmation brings False Claims Act exposure.
- computer-centric: yes. The work is control documentation, SSP/POA&M upkeep and portal submission.
- Signal: strong. The phase dates are hard, the duty recurs yearly, there is legal liability, and "no automated tool" was quoted.
- Evidence: https://www.morganlewis.com/pubs/2025/10/dod-finalizes-cmmc-rules-adding-cybersecurity-and-false-claims-act-compliance-risks ; https://godlan.com/cmmc-2-0-deadlines-rules/
- Overlap: The same regime seen from the other side is weak-signals-10.

### weak-signals-10: Prime contractors verifying CMMC status across supplier tiers
Description: Primes must confirm that subcontractors several tiers down hold the required CMMC level before award. A source states that "there is no automated tool — this requires active diligence." Supplier managers chase attestations and SPRS scores by hand across many small vendors.
- computer-centric: yes. The work is supplier-status checking and evidence collection.
- Signal: medium. There is one direct quote, and the Phase 2 date (Nov 2026) is close.
- Evidence: https://godlan.com/cmmc-2-0-deadlines-rules/
- Overlap: This is weak-signals-09 from the buyer side.

### weak-signals-11: Per-shipment customs entries after the end of US de minimis
Description: The $800 duty-free exemption ended globally on 29 Aug 2025 and was made indefinite on 24 Jun 2026. Small e-commerce importers and cross-border sellers now need formal entries for each shipment: HTS classification, commercial invoices, proof of value, and ACE or broker filings. Sellers call it "devastating". Fees reach $50 per shipment.
- computer-centric: yes. The work is classification lookup, invoice generation and portal or broker filing.
- Signal: strong. Dates are firm, costs are quantified and a verbatim seller quote exists.
- Evidence: https://www.shipbob.com/blog/de-minimis-value/ ; https://www.cnbc.com/2025/08/29/retail-impact-de-minimis-exemption-ends-globally.html
- Overlap: A new format duty, like weak-signals-03. The exact small-seller portal or form is unconfirmed.

### weak-signals-12: WCAG 2.1 AA remediation for small municipalities and special districts
Description: Under DOJ's ADA Title II rule, every US state or local government must meet WCAG 2.1 AA with no size exemption. Towns under 50k and special districts have until 26 Apr 2028. That covers websites, agenda and minutes PDFs, permitting and payment portals, and apps. Guidance says scanners alone are insufficient, so small clerk or IT staff test by hand.
- computer-centric: yes. The work is remediating web, PDF and app content.
- Signal: strong. It is a federal legal standard with dated deadlines and an explicit manual-testing burden.
- Evidence: https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web ; https://mrsc.org/stay-informed/mrsc-insight/february-2026/ada-standards-websites-apps ; https://www.kwallcompany.com/2026/06/04/ada-title-ii-website-compliance-deadline/
- Overlap: Same remediation work as weak-signals-04.

### weak-signals-13: Regulatory whiplash tracking for small firms and their advisers
Description: Rules keep being proposed, delayed, rewritten or reversed within 12–24 months. CSRD scope was cut twice, CSDDD was pushed to 2029, FinCEN BOI was reversed for US filers with the data deleted, and Colorado's AI Act had three dates. Advisers and small firms waste work built toward dead deadlines and cannot tell which dates will hold.
- computer-centric: yes. The work is monitoring sources, tracking deadlines and updating internal processes.
- Signal: strong. Many independent dated examples came from both regulation scouts.
- Evidence: https://kpmg-law.de/en/first-omnibus-regulation-to-relax-the-obligations-of-the-csddd-csrd-and-eu-taxonomy/ ; https://www.fincen.gov/news/news-releases/fincen-removes-beneficial-ownership-reporting-requirements-us-companies-and-us ; https://www.consumerfinancemonitor.com/2026/05/12/colorado-rewrites-its-landmark-ai-law-unpacking-sb-26-189-and-what-it-means-for-businesses/
- Overlap: This is a meta-territory over weak-signals-02, -05, -08 and -17. Scout 03 flagged the same need.

### weak-signals-14: Hospital price-transparency files that are hard to use and often non-compliant
Description: US hospitals must publish machine-readable price files in a CMS template, with new fields in Jan 2025 and further requirements enforced from Apr 2026. The files are huge, differ per hospital and have no unified API. An OIG audit found 46% of hospitals not fully compliant, and only 27 have been penalised. Brokers, employers and researchers struggle to use them.
- computer-centric: yes. The work is bulk-file parsing and normalisation.
- Signal: medium. There is a dated mandate and a quantified non-compliance rate. The CMS GitHub repo has thin engagement, and forum quotes were not verified.
- Evidence: https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency ; https://www.healthcatalyst.com/learn/insights/ready-or-not-hospital-price-transparency-rules-are-here ; https://github.com/CMSgov/hospital-price-transparency
- Overlap: Same "data is mandated but messy" pattern as weak-signals-15 and weak-signals-16.

### weak-signals-15: EU High-Value Datasets with uneven per-country APIs
Description: Since 9 Jun 2024, EU public bodies must publish geospatial, environmental, meteorological, statistical, company-ownership and mobility data free, via APIs. Rollout varies across 27 member states, which report progress every two years. SMEs, journalists and agents wanting cross-country data face 27 different portals.
- computer-centric: yes. The work is API and bulk-data access and normalisation.
- Signal: medium. The mandate is real and the unevenness is implied, but not measured.
- Evidence: https://digital-strategy.ec.europa.eu/en/factpages/open-data-and-high-value-datasets-step-step-access-guide ; https://data.europa.eu/en/news-events/news/high-value-datasets-what-has-changed-and-what-will-come-next
- Overlap: Same messy-data pattern as weak-signals-14.

### weak-signals-16: EU Digital Product Passport registration and data resolution
Description: The EU DPP registry went live on 20 Jul 2026 with a web UI and an API. Manufacturers and importers of batteries (from Feb 2027), textiles, furniture, tyres, ICT and toys must register each passport. The product data stays with each manufacturer, so reading passports at scale means resolving many separate endpoints.
- computer-centric: yes. The work is registry and API registration and data aggregation.
- Signal: medium. The launch was very recent with a dated mandate, but no user pain yet.
- Evidence: https://transition-pathways.europa.eu/retail/news/digital-product-passport-registry-now-live
- Overlap: Relates to weak-signals-14 and -15. It also bears on sustainability data, where CSRD scope was cut (weak-signals-13).

### weak-signals-17: The open-banking gap (US 1033 stayed, AU CDR under-used)
Description: The CFPB 1033 data-access rule is enjoined and being rewritten. Deadlines slid to 2026–2030, and institutions under $850M in assets are exempt. Australia's CDR is live, but firms still prefer screen scraping for "ease and lower cost". Small lenders and fintechs are left scraping bank portals.
- computer-centric: yes. It concerns bank-portal scraping and API access.
- Signal: medium. US dates are clear, but the CDR evidence is from 2022 and dated.
- Evidence: https://www.consumerfinancialserviceslawmonitor.com/2025/07/cfpb-section-1033-open-banking-rule-stayed-as-cfpb-initiates-new-rulemaking/ ; https://www.gtlaw.com/en/insights/2025/9/cfpb-reopens-its-open-banking-rule-for-comment ; https://en.wikipedia.org/wiki/Consumer_Data_Right
- Overlap: The regulatory churn relates to weak-signals-13.

### weak-signals-18: Hallucinated citations and new AI-disclosure rules in court filings
Description: About 1,490 court decisions worldwide (1,000+ in the US by May 2026) involve AI-fabricated citations. Sanctions now reach $15k per attorney, and denying AI use is punished harder. Districts are adding GenAI-disclosure and verification orders, and FRE 707 is proposed. Small firms, clerks and opposing counsel check every citation by hand.
- computer-centric: yes. The work is checking citations against case databases and filing compliance.
- Signal: strong. There is a large, growing, dated case count with specific sanction amounts.
- Evidence: https://www.nortonrosefulbright.com/en-us/knowledge/publications/792d8bf3/ai-in-litigation-update-on-gen-ai-sanctions-in-2026 ; https://gc.ai/blog/ai-hallucination-legal-cases ; https://www.sternekessler.com/news-insights/insights/ai-ip-year-in-reviewai-hallucinations-in-court-filings-and-orders-a-2025-review-of-sanctions-across-the-courts-and-rule-proposals/
- Overlap: Verifying AI output before it is submitted is the same general pattern as weak-signals-19.

### weak-signals-19: AI-slop report triage for open-source maintainers and bug bounties
Description: AI-generated vulnerability reports buried curl's seven-person volunteer team. Volume reached 8x normal and the real-vulnerability rate fell below 5%, so curl shut its HackerOne bounty in Jan 2026. HackerOne sees the pattern across the industry, and Python maintainers report the same. Each project writes its own triage and ban rules, and each bogus report costs hours.
- computer-centric: yes. The work is triaging and reproducing reports in trackers.
- Signal: strong. There are dated events, quantified volume and verbatim maintainer quotes ("effectively being DDoSed").
- Evidence: https://www.bugcrowd.com/blog/hacker-opinion-piece-how-lazy-hacking-killed-curls-bug-bounty/ ; https://www.theregister.com/2025/05/07/curl_ai_bug_reports/ ; https://socket.dev/blog/curl-shuts-down-bug-bounty-program-after-flood-of-ai-slop-reports
- Overlap: The same flood-of-AI-inputs pattern as weak-signals-18. Also relates to weak-signals-20.

### weak-signals-20: AI crawler load on small and self-hosted infrastructure
Description: AI crawlers ignore robots.txt, rotate IPs and spoof user agents. Read the Docs cut traffic 75% (saving about $1,500/month) by blocking them. GNOME's GitLab saw 97% bot traffic, and SourceHut and KDE suffered outages. Volunteer admins hand-tune proof-of-work challenges, rate limits and blocklists.
- computer-centric: yes. The work is server administration and traffic filtering.
- Signal: strong. There are multiple named orgs with quantified traffic and cost.
- Evidence: https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/
- Overlap: Relates to weak-signals-21 (agent attacks) and weak-signals-26 (telling agent traffic apart).

### weak-signals-21: Autonomous AI agents probing and attacking sites
Description: Security press in Sept 2026 reports AI agents planting card skimmers on 100+ sites, hijacking exposed Docker hosts, and probing a government Medicare site. The AI Incident Database logs a vendor's agent probing government and university sites unprompted. Small site owners and government IT staff must detect and attribute agent-driven traffic.
- computer-centric: yes. The work is incident detection and response.
- Signal: weak. The headlines came from a single live-page summary and are `[unverified]`, but they are very recent.
- Evidence: https://www.bleepingcomputer.com/news/security/ ; https://incidentdatabase.ai/
- Overlap: Relates to weak-signals-20. It is the security side of weak-signals-26.

### weak-signals-22: AI-enabled impersonation scams against businesses
Description: On 24 Sept 2026, the FTC sought comment on extending its impersonation rule to cover platforms' role in enabling impersonation scams. This signals that AI-assisted impersonation of businesses and government is a regulatory focus. Dollar-loss figures and small-business victim evidence were not found.
- computer-centric: no. The evidence is regulatory action. The fraud channels, such as voice and messaging, are not shown to be screen workflows.
- Signal: weak. There is one regulator item, and the scout could not find deepfake fraud figures.
- Evidence: https://www.ftc.gov/news-events/news/press-releases/2025
- Overlap: The fraud side of the AI-created failures in weak-signals-19 to -21.

### weak-signals-23: Agent Operators stitching GTM agent stacks with no system of record
Description: A new "Agent Operator" role, carved out of RevOps and GTM engineering, runs a weekly define → deploy → evaluate → optimize loop. GTM engineering postings went from about 1,400 to 3,000+ in six months. The work is stitched together by hand across Clay, n8n, Gumloop, Lindy and chat consoles, with no single place for specs, evals and results.
- computer-centric: yes. The work is multi-tool configuration and evaluation.
- Signal: medium. Growth is quantified and the workflow is described, but from a single source.
- Evidence: https://gtmnow.com/the-agent-operator-the-new-emerging-role/
- Overlap: The enterprise version of this is weak-signals-24.

### weak-signals-24: AgentOps (reliability, cost and releases for production agents)
Description: Enterprises are hiring "AgentOps Engineers" to monitor agent behaviour, cost and releases in production, as a job distinct from MLOps. One figure says 56% of enterprises name an agent owner, up from 11% in 2024 `[unverified]`. AI governance (+45%) and AI red-team (+124%) roles are growing alongside.
- computer-centric: yes. The work is observability dashboards and output review.
- Signal: medium. There is a real job listing, but the adoption statistic is unverified.
- Evidence: https://www.accenture.com/us-en/careers/jobdetails?id=R00344460_en ; https://www.herohunt.ai/blog/fastest-growing-ai-roles-in-2026-data-and-rankings/
- Overlap: Relates to weak-signals-23. The governance work relates to weak-signals-06.

### weak-signals-25: AI trainer and annotation contractors juggling marketplaces and spreadsheets
Description: AI-trainer contracting reportedly grew 283% cross-border in 2025, with average US pay of $31.24/hr. Workers split tasks across Label Studio, Scale and Surge, and track agreement metrics, pay and assignments in spreadsheets by hand.
- computer-centric: yes. The work is annotation platforms plus spreadsheets.
- Signal: weak. The figures came from search summaries, and the key page returned HTTP 429 `[unverified]`.
- Evidence: none. The scout file names talentsforai.com, coursiv.io and metaintro.com but gives no URL `[unverified]`.
- Overlap: None close.

### weak-signals-26: Retail analytics that cannot tell AI-agent shoppers from humans
Description: AI-agent traffic to US retail sites rose 393% year over year in Q1 2026. Agent conversion swung from −38% to +42% within a year. Merchants' analytics dashboards were not built to separate agent visits from human ones, so they cannot measure or optimise the agent channel.
- computer-centric: yes. The work is e-commerce analytics dashboards.
- Signal: medium. The figures are quantified, but from a single source.
- Evidence: https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce
- Overlap: Relates to weak-signals-27 and weak-signals-20.

### weak-signals-27: Agent-readiness for merchants on platforms other than Shopify
Description: Shopify pushed llms.txt and agentic storefronts to every store by default (Mar–May 2026), and Google announced UCP in Jan 2026. On WooCommerce, Magento and BigCommerce, these files return 404. Hand adoption is 5.61% of top sites, WordPress 8.7%. Small merchants have no admin tool to produce or verify agent-facing files.
- computer-centric: yes. The work is store admin configuration.
- Signal: medium. The data is dated and quantified, but independent research found no measurable citation benefit from llms.txt.
- Evidence: https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce ; https://caseyrb.com/blog/state-of-llms-txt-adoption/
- Overlap: Relates to weak-signals-26 and weak-signals-28. It touches the agents-as-customers buyer.

### weak-signals-28: GEO/AEO specialists measuring citation by AI answer engines
Description: GEO/AEO Specialist is a new marketing role that "barely existed in 2024". It optimises content to be cited by AI answer engines rather than to rank in search. No established way to measure AI citations was found, and llms.txt showed no measurable effect.
- computer-centric: yes. The work is content and analytics.
- Signal: weak. It rests on a single aggregator with no primary job-board data.
- Evidence: https://www.herohunt.ai/blog/fastest-growing-ai-roles-in-2026-data-and-rankings/ ; https://caseyrb.com/blog/state-of-llms-txt-adoption/
- Overlap: Relates to weak-signals-27.

## Cross-cutting notes
- Scout 05 warns that titles change fast. "Prompt engineer" dropped out of Microsoft's 2025 hiring list, so territories weak-signals-23 to -28 should be judged by the durability of the workflow, not the job title (https://www.ilinmaks.com/blog/en/ai-jobs-market-2026).
- The strongest signals combine a hard date, a recurring duty and a small actor with no compliance staff: weak-signals-01, -09, -11 and -12. Among AI-caused failures, the strongest are weak-signals-18, -19 and -20.

## Gaps
- **Practitioner pain was missing across all regulation scouts.** No firsthand cost or hours-per-month quotes, and no forum threads (Reddit, accountancy forums) were verified for any compliance territory.
- **Regulation leads never reached:** EUDR, the Cyber Resilience Act, Australian privacy and scam reforms, the FTC Safeguards Rule, the HIPAA Security Rule update, SEC/FINRA off-channel recordkeeping, the OSHA heat rule, CMS prior-authorization APIs, California SB 53, CCPA automated-decision rules, Texas TRAIGA, NYC LL97, short-term-rental registration, and non-EU e-invoicing (Brazil, Gulf states, Japan and others).
- **Data leads never reached:** TEFCA, EU Data Act connected-device access, SAM.gov/USAspending, India Account Aggregator/ONDC, Copernicus, EDGAR/XBRL changes, and EU beneficial-ownership register access.
- **AI-failure leads never reached:** deepfake voice-fraud losses (FBI IC3/FTC figures), AI submissions in education, fake marketplace reviews and listings, and database leaks from vibe-coded apps.
- **New-roles gaps:** no verbatim job postings for new titles in trades, logistics, healthcare administration or energy. Several labour statistics (the 56% agent-owner figure, 280% agentic-AI growth, the tripling of title counts, AI-trainer pay) rest on search summaries and are `[unverified]`.
- The primary legal texts (EUR-Lex for CSRD and CSDDD, the EAA directive) were not opened directly. Thresholds come from secondary sources.

<!-- COMPLETE -->
