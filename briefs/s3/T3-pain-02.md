# Pain-miner brief: T3-02, commercial-trade systems of record (auto dealerships, insurance agencies, property management)

Territory T3: locked-in vertical systems of record with API tolls (see `gates/gate-B.md`). Half 2 of 2. Computer-centric: yes.

## Objective
Collect the best first-hand evidence of pain felt by staff at **independent or small-group auto dealerships, independent insurance agencies and small-to-mid property management firms** who are trapped inside their dealer management, agency management or property management system: retyping records between that system and everything else, paying integration tolls, and suffering through migrations or vendor lock-in after acquisitions.

## Exact boundary of this half
- **In:** dealer management systems (CDK Global, Reynolds and Reynolds, Dealertrack DMS, Tekion and similar), insurance agency management systems (Applied Epic, AMS360, Hawksoft, EZLynx, and connected tools such as Zywave), and property management systems (Yardi Voyager/Breeze, AppFolio, RealPage, Buildium, Rent Manager and similar). Covered roles: dealership office/F&I/BDC staff and dealer principals, agency CSRs, account managers and agency owners, property managers, leasing agents and property accountants, plus the third-party vendors (CRM, rating, marketing, screening tools) who must integrate with these systems.
- **Out (the other half, T3-01, owns these):** dental, independent pharmacy and veterinary practice systems.
- **Out (other territories):** invoice capture and AP posting (T2); government filing portals such as DMV title/registration or state regulator filings (T4); security and IT-admin chores (T5); carrier or payer portals used for eligibility (T1).

## Questions
1. Which records do staff re-key by hand between the SoR and another system (for example deal and customer data between DMS and CRM or F&I tools; policy and endorsement data between carrier portals and the AMS; lease, tenant and work-order data between the PMS and screening, accounting or owner-reporting tools)? How many minutes per record and how many records per day or month?
2. What does the vendor charge or require for API or integration access (per-rooftop monthly fees, certified-interface programs such as CDK's 3PA or Reynolds RCI, Applied or Vertafore API tiers, Yardi Interface fees)? Quote price pages, contract terms, settlement documents or first-hand reports, with dates.
3. What happens during a migration between these systems: contract exit fees, data conversion costs, weeks of double entry, lost history? Get durations and dollar figures.
4. What changed after consolidations, litigation or incidents (the CDK dealer class settlement, the June 2024 CDK ransomware outage, Vertafore and Applied ownership changes, RealPage antitrust actions): price increases, access cut off, downtime, forced upgrades?
5. Which reports, exports or bulk updates can staff not do without clicking through screens one record at a time or requesting them from the vendor?
6. What do job postings reveal about the labor cost (roles that list CDK, Reynolds, Epic, AMS360, Yardi or AppFolio as required skills, wage bands, "data entry" duties)?

## Sources to mine
- Reviews of incumbents: G2, Capterra, Software Advice and TrustRadius pages for each named product, filtered to 1–3 stars; search terms "API", "integration", "double entry", "export", "contract", "price increase".
- Forums and subreddits: DealerRefresh forums (start at https://forum.dealerrefresh.com/threads/our-dms-appears-to-be-taking-advantage-of-us-what-are-you-paying-for-api-integration.5220/ ), r/askcarsales, r/CarSalesTraining, Insurance-Forums (start at https://www.insurance-forums.com/community/threads/problems-with-zywave.107556/ ), r/Insurance, r/InsuranceAgent, r/InsuranceProfessional, r/PropertyManagement, r/realestateinvesting, BiggerPockets forums, NARPM community threads.
- Litigation, regulator and settlement documents: https://www.dealershipclassdmssettlement.com/ , FTC and DOJ filings on CDK/Reynolds data access and on RealPage, state attorney-general actions.
- Vendor developer, partner and interface pages and pricing (for example https://anchorbrowser.io/hub/yardi-voyager-data-export-automation-api-alternative as a starting pointer, then Yardi, Applied, Vertafore, CDK Fortellis and Reynolds pages).
- Job postings on Indeed, ZipRecruiter or LinkedIn naming the products above.
- Trade press: Automotive News, CBT News, Insurance Journal, Carrier Management, Independent Agent magazine, Multifamily Dive, NAA publications.

## Evidence standard
- **10–20 pain items.** Each item has at least one verbatim complaint with a working link, and wherever possible a frequency (how often), a time number (minutes, hours, weeks) or a money number (fees, wages, settlement amounts, conversion costs).
- Name the product, the vertical and the role in every item where the source does. Give the source date; prefer 2024–2026 and mark older ones with their year.
- Never invent quotes, numbers or URLs. Mark any claim you could not verify `[unverified]` (the gate flags the "$5,000 per API seat" figure as unverified; confirm or drop it). Vendor marketing claims count as colour, not as evidence of pain.
- Aim for balance: at least 3 items each from dealerships, insurance agencies and property management if the sources exist; say so in Gaps if they don't.

## Output
Write `outputs/s3-ideate/pain/T3-02.md`, 1500 words max:
- a one-line header naming this half;
- `## Pain items`, numbered 1., 2., ...; each item gives who (role, vertical, product), what hurts, how often, what it costs (time or money), the current workaround, a verbatim quote, and `Source: <URL>` with date;
- `## Patterns`, 3–5 bullets grouping items by product or by flow;
- `## Gaps`, naming what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI agent could..." sentences.**
- Stay inside auto dealerships, insurance agencies and property management. Anything about dental, pharmacy or veterinary belongs to T3-01; drop it.
- Write only your output file.
<!-- COMPLETE -->
