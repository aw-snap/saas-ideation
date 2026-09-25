# Scout weak-signals-03: newly opened public data sources

## Findings

1. **US hospital price transparency machine-readable files, expanded 2025 schema**: New encoding requirements (estimated allowed amounts, modifiers, prescription drug fields) became mandatory January 1, 2025, on top of the original 2021 rule, using a CMS-defined template; a further round of new requirements takes enforcement effect April 1, 2026. Patients, employers, brokers and researchers are the intended users.
   - Evidence: "As of July 1, 2024, hospitals must adopt a CMS template layout... with highlighted data elements required to be encoded in the MRF as of January 1, 2025." Also: "New 2026 requirements enforcement begins April 1, 2026."
   - Access: bulk file (JSON/CSV per CMS template); agent-readable: partly (structured but files are large and per-hospital, no unified API)
   - Source: https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency (accessed 2026-09-25)

2. **Hospital price transparency non-compliance remains high**: A federal audit found nearly half of hospitals were not fully compliant even after years of the mandate, meaning the "opened" data is frequently missing, incomplete, or malformed at the source.
   - Evidence: "A 2024 report by the Department of Health and Human Services Office of Inspector General estimated that 46 percent of hospitals were not fully compliant with the rules based on its audit of a sample of hospitals."
   - Access: bulk file; agent-readable: partly
   - Source: https://www.healthcatalyst.com/learn/insights/ready-or-not-hospital-price-transparency-rules-are-here (2024-2025)

3. **CMS enforcement of price transparency is active but small-scale**: CMS has escalated penalties, but the enforcement footprint is still limited relative to ~6,000+ US hospitals, suggesting the raw data landscape stays noisy for downstream users.
   - Evidence: "CMS stepped up enforcement actions and increased the maximum civil monetary penalty for non-compliance, and has assessed penalties on 27 hospitals to date."
   - Access: bulk file / portal (enforcement list); agent-readable: no (enforcement list is a static page, not an API)
   - Source: https://chir.georgetown.edu/federal-officials-announce-steps-to-strengthen-health-care-price-transparency/ (2025)

4. **CMS maintains a public GitHub repo for the price transparency data dictionary/tools**: This is a technical-community touchpoint for anyone (including agent builders) trying to parse hospital MRFs, but engagement signals are thin.
   - Evidence: repository "CMSgov/hospital-price-transparency" has 137 stars and 0 open issues at time of check.
   - Access: bulk file spec via GitHub; agent-readable: yes (spec is machine-readable; underlying hospital files vary)
   - Source: https://github.com/CMSgov/hospital-price-transparency (accessed 2026-09-25)

5. **CFPB Section 1033 (US open banking data-access rule) is stayed and being rewritten**: The rule that would force banks to expose consumer financial data via APIs to third parties (fintechs, small lenders) took effect January 17, 2025 but is now enjoined and under a fresh rulemaking process, delaying the "newly mandated API" for small lenders and consumer tools.
   - Evidence: "The Eastern District of Kentucky granted the plaintiffs a preliminary injunction, barring the CFPB from enforcing the rule until it completes its reconsideration. The rule is enjoined, not formally vacated."
   - Access: API (FDX standard, when enforced); agent-readable: partly (standard exists, mandate paused)
   - Source: https://www.consumerfinancialserviceslawmonitor.com/2025/07/cfpb-section-1033-open-banking-rule-stayed-as-cfpb-initiates-new-rulemaking/ (2025-07)

6. **CFPB reopened 1033 for comment with new compliance timeline**: An August 22, 2025 ANPR pushed the largest-institution deadline to April 1, 2026 and extended smaller-institution deadlines out to April 1, 2030, directly affecting fintechs and small lenders who were building against the original timeline.
   - Evidence: "The CFPB announced its intention to extend compliance deadlines that were originally set to begin April 1, 2026, for the largest institutions and extend through April 1, 2030, for smaller ones." Comment deadline: "Public comments are due by October 21, 2025."
   - Access: API (planned, FDX); agent-readable: partly
   - Source: https://www.gtlaw.com/en/insights/2025/9/cfpb-reopens-its-open-banking-rule-for-comment (2025-09)

7. **EU High-Value Datasets (HVD) regulation now in force EU-wide**: Since June 9, 2024, six categories of public data (geospatial, earth observation/environment, meteorological, statistics, company ownership, mobility) must be published free, machine-readable, and via API across all member states — a genuinely new, large, cross-country dataset class for researchers, journalists and small businesses.
   - Evidence: "As from 9 June 2024, they must be made available for reuse," and "Public sector bodies holding high-value datasets must ensure that the datasets are made available in machine-readable formats via APIs corresponding to the reasonable needs of re-users."
   - Access: API and bulk file (mandated); agent-readable: yes (by regulation, though member-state execution varies)
   - Source: https://digital-strategy.ec.europa.eu/en/factpages/open-data-and-high-value-datasets-step-step-access-guide (2024)

8. **HVD member-state reporting shows uneven rollout**: Each EU member state had to report implementation progress to the Commission by February 9, 2025, and every 2 years after, implying the Commission itself expects inconsistent compliance across 27 countries in year one.
   - Evidence: "each Member State must provide the Commission with a report on measures carried out to implement this Implementing Regulation by 9 February 2025 and then every 2 years."
   - Access: portal (per-country); agent-readable: partly
   - Source: https://data.europa.eu/en/news-events/news/high-value-datasets-what-has-changed-and-what-will-come-next (2024-2025)

9. **EU Digital Product Passport (DPP) registry went live July 20, 2026**: A brand-new EU-wide registry for product identifiers and sustainability metadata (textiles, furniture, tyres, ICT, batteries, construction products, toys) opened with both a web UI and an API, ahead of mandatory passport requirements phasing in from February 2027 (starting with large batteries).
   - Evidence: "The registry became operational on July 20, 2026, alongside a testing environment," and "Registration can be completed through a web interface or an API."
   - Access: API and portal; agent-readable: yes (registration API exists)
   - Source: https://transition-pathways.europa.eu/retail/news/digital-product-passport-registry-now-live (2026-07)

10. **DPP data itself is not centrally stored, only pointers are**: Product data stays decentralized at the manufacturer while only unique identifiers/metadata sit in the central registry, which structurally means any downstream tool (or agent) needs to resolve many separate manufacturer endpoints rather than one central feed.
    - Evidence: "While product data is stored in a decentralised manner, economic operators must register each Digital Product Passport in the Registry, which provides the secure infrastructure needed to register unique product identifiers and associated metadata."
    - Access: API (registry) + decentralized manufacturer sources; agent-readable: partly
    - Source: https://transition-pathways.europa.eu/retail/news/digital-product-passport-registry-now-live (2026-07)

11. **Australia's Consumer Data Right (CDR) is live across four sectors but under-used**: Banking (since 2020), energy, telecom, and non-bank lending sectors are designated, yet the statutory review found businesses still prefer screen scraping over the sanctioned CDR API, undercutting the "newly opened API" value proposition for small lenders and fintechs.
    - Evidence: "Many businesses continued using screen scraping instead of CDR due to 'ease and lower cost'" and "Data quality inconsistencies undermined CDR viability."
    - Access: API (CDR standard); agent-readable: yes in principle, but adoption low
    - Source: https://en.wikipedia.org/wiki/Consumer_Data_Right (accessed 2026, citing 2022 statutory review — dated evidence, flagged)

12. **CDR benefits remain largely theoretical years after launch**: Despite most banking consumers technically being able to share data via CDR, actual innovative use is still nascent, a signal that "who benefits" (consumers, small lenders wanting alternative-data underwriting) are not yet realizing gains.
    - Evidence: "'Innovative product offerings are only starting to become available.' Benefits remain largely unrealized across the ecosystem."
    - Access: API; agent-readable: yes
    - Source: https://en.wikipedia.org/wiki/Consumer_Data_Right (statutory review data, dated; flagged as older evidence needing refresh)

13. **SEC EDGAR/XBRL API access exists but this scout could not verify 2024-2026 changes**: Search and fetch attempts to confirm new EDGAR full-text search API or XBRL structured-data changes in the 2024-2026 window did not return substantive results within available tool budget.
    - Evidence: [unverified]
    - Access: unknown
    - Source: [unverified]

14. **CFPB 1033 rule text defines the underlying consumer right at stake**: The rule as issued requires financial firms to hand over consumer data on request, which is the legal basis fintechs and small lenders were building products against before the stay.
    - Evidence: "a covered person shall make available to a consumer, upon request, information in the control or possession of the covered person concerning the consumer financial product or service that the consumer obtained from such covered person"
    - Access: API (FDX standard); agent-readable: partly (paused)
    - Source: https://www.gtlaw.com/en/insights/2025/9/cfpb-reopens-its-open-banking-rule-for-comment (2025-09)

15. **CFPB 1033 exempts small depository institutions**: Institutions with $850 million or less in assets are exempt from the rule, meaning the newly mandated data-access API would, even if enforced, leave many community banks and their customers outside the machine-readable data ecosystem.
    - Evidence: "depository institutions with $850 million or less in assets are exempt."
    - Access: API (where applicable); agent-readable: partly
    - Source: https://www.gtlaw.com/en/insights/2025/9/cfpb-reopens-its-open-banking-rule-for-comment (2025-09)

## Territories the evidence suggests
1. Parsing and normalizing sprawling, inconsistent per-publisher machine-readable files (hospital MRFs, per-country HVD feeds) into something a small user or agent can actually query.
2. Bridging the gap between a mandated API/registry existing on paper and third parties actually building on it, given legal stays, exemptions and phased timelines (CFPB 1033, CDR).
3. Resolving decentralized data pointers (DPP registry model) into a usable, aggregated view across many manufacturer endpoints.
4. Tracking and monitoring shifting regulatory compliance deadlines and enforcement actions across jurisdictions for teams that must stay current.
5. Detecting and flagging non-compliant or malformed source files at scale, since a large share of mandated publishers (e.g., ~46% of hospitals) are not fully compliant.

## Notes
- Search-tool budget was exhausted mid-task (session-wide WebSearch cap reached), which cut short verification of TEFCA, EU Data Act connected-device access, SAM.gov/USAspending, India's Account Aggregator/ONDC, and Copernicus dataset growth. These remain plausible leads per the brief's candidate list but are unverified here.
- SEC EDGAR/XBRL 2024-2026 changes could not be confirmed; dropped from findings beyond a placeholder.
- EU beneficial-ownership register court-limit status (post the 2022 CJEU ruling) could not be refreshed for 2024-2026; a targeted fetch returned 404.
- India's Account Aggregator page returned 404 on Wikipedia; no alternate source was fetched due to budget limits.
- Reddit (r/healthIT) could not be fetched directly by this tool, so forum-level complaint quotes about price-transparency files are not verified verbatim here, only secondary reporting (finding 2-3).

<!-- COMPLETE -->
