# T3 dossier: Locked-in vertical systems of record with API tolls

Merged from `outputs/s3-ideate/pain/T3-01.md` (dental, pharmacy, veterinary) and `outputs/s3-ideate/pain/T3-02.md` (auto dealers, insurance agencies, property management). Duplicates are folded together and the strongest evidence is kept. Items marked [unverified] are carried over as the miners flagged them.

## Pain points

**P1. Dental SoR charges a per-tier, per-location toll for API access**
- **Who:** third-party dental software vendors, and the practices they pass the cost to (Dentrix / Henry Schein One).
- **What hurts:** reading or writing a practice's own data needs a paid registration plus a recurring fee per location and per call.
- **How often:** once at onboarding, then every month for the life of the integration.
- **Cost:** READ API $5,000 one-time and WRITE API $5,000 one-time. Dentrix Ascend costs $5,000 registration plus $47 per location per month for 30K calls and 3GB, with overage at $0.0018 per call. Imaging partner tiers run $10,000 to $50,000.
- **Workaround:** vendors pass the fee on or don't build the integration.
- **Evidence:** "$47 fee for each Dentrix Ascend Location" (https://ddp.dentrix.com/pages/faq)
- **Severity:** 5

**P2. Dealer DMS integration tolls stack up per rooftop**
- **Who:** dealer groups and their vendors on CDK and Reynolds.
- **What hurts:** a setup fee plus a monthly fee per location for each connected tool, and the vendor raises prices on its own.
- **How often:** monthly, multiplied by locations and by tools.
- **Cost:** "$2000 per location for a setup fee and $175/mo per location". CDK 3PA certification is "$30,000 upfront … plus roughly $200/mo/rooftop". A Reynolds xTime fee "recently increased to $465 per month". DealerSocket costs $400/month per location, which is $1,200 at a 3-location campus.
- **Workaround:** pay, or drop the integration.
- **Evidence:** "I've never seen such a blatant extortion racket" (https://forum.dealerrefresh.com/threads/our-dms-appears-to-be-taking-advantage-of-us-what-are-you-paying-for-api-integration.5220/ ; https://forum.dealerrefresh.com/threads/cdk-third-party-access-pricing-guide.5345/). **The quotes are from 2017, so current prices are unverified.**
- **Severity:** 5

**P3. Access is gated or refused outright, not just priced**
- **Who:** independent software vendors (ISVs) in pharmacy, dental and property management.
- **What hurts:**
  - PioneerRx API access goes through a manual vendor-inquiry form. Its docs sit behind authentication and it has no public status page.
  - Dentrix classes whole categories ("patient financing, credit card processing, insurance claim processing") as "protected" and restricts or bars them.
  - Yardi has no self-serve public API. It reportedly charges "$25,000 for each interface" per year [unverified], so many fall back to SFTP flat files.
- **How often:** at the start of every integration project, and as an ongoing structural block.
- **Cost:** whole categories locked out, and time to first API call is delayed.
- **Workaround:** flat-file exports, and third-party uptime monitoring (StatusGator).
- **Evidence:** https://supergood.ai/docs/pioneerrx-api ; https://ddp.dentrix.com/pages/faq ; https://www.yardi.com/company/become-an-interface-partner/
- **Severity:** 4

**P4. Veterinary SoR doesn't talk to lab machines**
- **Who:** vet technicians (RVT, LVT, CVT) and practice staff on Cornerstone.
- **What hurts:**
  - In-house and IDEXX lab results sync poorly or not at all.
  - Staff get no alert when a test completes.
  - Results are keyed by hand.
- **How often:** for every lab test, every day.
- **Cost:** "I waste literal hours staring at it waiting for it to load." There is also a risk of losing track of pending results.
- **Workaround:** handwritten lists of pending tests kept outside the SoR [paraphrase, unverified], and manual keying.
- **Evidence:** "It does not communicate with our lab machines" (RVT, Jan 2025). "Not great at syncing with other data (ex: Idexx lab results) … no real help was ever provided" (LVT, May 2025). Both at https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews
- **Severity:** 5. This is the most recent first-hand evidence and comes from several independent reviewers.

**P5. Migrations bring surprise fees and data loss**
- **Who:** dental office managers and dentists switching practice-management systems.
- **What hurts:**
  - Conversion fees show up at go-live.
  - Paid conversions fail.
  - Imaging keeps its own patient IDs, which have to be matched by hand.
- **How often:** once per migration, but the damage lasts.
- **Cost:** "document conversion is just another $860" (2022). A paid ACE-to-Dentrix transfer was a "complete screw up... we basically had to start from scratch on everything" (2017).
- **Workaround:** absorb the fee, rebuild records by hand, and edit patient IDs one at a time in Dexis.
- **Evidence:** https://www.capterra.com/p/2329/Dentrix/reviews/ ; "double entry for each patient in the Dexis Database" (http://www.opendentalsoft.com/forum/viewtopic.php?t=3477, date unverified)
- **Severity:** 4

**P6. Re-keying inside the SoR and between tools**
- **Who:** vet techs, property bookkeepers, and insurance CSRs and account managers.
- **What hurts:**
  - Cornerstone needs copy/paste to move patients between department schedules.
  - On AppFolio, "credit card transactions still have to be entered manually".
  - Insurance agencies do "double and triple entry" across rating tools, the agency management system (AMS) and other tools. Vendors sell integrations as the fix, which suggests that is the default state.
  - A cancellation captured outside Applied Epic never reached Epic, which led to a "$42,000 policy loss". That figure comes from a vendor blog and is illustrative.
- **How often:** per record or transaction, every day.
- **Cost:** mostly unquantified.
- **Evidence:** https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews ; https://www.biggerpockets.com/forums/899/topics/1244686-tenant-management-software ; https://www.activepieces.com/blog/applied-epic-ai-integration-a-2026-guide-for-agencies
- **Severity:** 3

**P7. The SoR is a single point of failure**
- **Who:** about 15,000 dealership locations on CDK.
- **What hurts:** ransomware in June 2024 shut down sales and service. Deals went back to paper and service history couldn't be reached.
- **How often:** one incident, lasting about 2 weeks (18 June to 4 July 2024).
- **Cost:** more than $1B in collective dealer cost (Anderson Economic Group estimate), and a reported $25M ransom.
- **Workaround:** paper and spreadsheets.
- **Evidence:** https://www.blackfog.com/cdk-global-ransomware-attack/ ; https://www.cloudskope.com/breaches/cdk-global-breach-2024
- **Severity:** 5

**P8. Getting data out of reports is hard**
- **Who:** vet practice managers, and property managers on Yardi.
- **What hurts:** Cornerstone reports can't be filtered by date: "There is no way to specify the dates you would like to run reports for" (Nov 2024). Yardi data leaves by SFTP or flat file (see P3).
- **How often:** every time a report is needed.
- **Cost:** manual filtering after export, not quantified.
- **Evidence:** https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews ; https://anchorbrowser.io/hub/yardi-voyager-data-export-automation-api-alternative (Gate B link)
- **Severity:** 3

**P9. Vendor support has declined**
- **Who:** dental office managers and administrators on Dentrix, and vet techs on Cornerstone.
- **What hurts:** long hold times and tickets left open for weeks.
- **How often:** every support contact.
- **Cost:** "longer than 30 minutes" to reach someone (2021). "We have called and emailed for weeks trying to get help" (2023).
- **Evidence:** https://www.capterra.com/p/2329/Dentrix/reviews/
- **Severity:** 3

**P10. Lock-in and costly exits**
- **Who:** insurance agencies on AMS360, Applied Epic and Zywave, and vet practices.
- **What hurts:**
  - Agencies feel that once they are locked in, "providers can charge whatever they feel" [unverified wording].
  - Zywave is described as "excessively expensive" with "challenges when ending contracts" [unverified wording].
  - One vet practice switched because of total cost: "if there was a way to get all of the software for a smaller cost, we would not have switched" (Sept 2025).
- **How often:** at contract renewals and switch decisions.
- **Evidence:** https://www.insurance-forums.com/community/threads/agency-management-sytems-applied-epic-vs-ams360.16321/ ; https://www.insurance-forums.com/community/threads/zywave.116500/ ; https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews
- **Severity:** 3

**P11. Data entry is a paid job function**
- **Who:** dental front desks, and insurance agency bookkeepers.
- **What hurts:** job postings list "Dentrix" and data entry, or "AMS360 or Applied EPIC" and "data entry tasks", as core duties.
- **How often:** daily.
- **Cost:** Dentrix roles average $18.73/hour, with a range of $15.87 to $20.91.
- **Evidence:** https://www.ziprecruiter.com/Jobs/Dentrix?version=next ; https://www.indeed.com/viewjob?jk=1bbc5670d3f53d3e
- **Severity:** 2. This is labour-market corroboration, not a complaint.

## Already tried

- **Official partner and API programs** (Dentrix API Exchange, CDK 3PA, Reynolds certified interfaces, Yardi Interface Partner, PioneerRx vendor inquiry). They work only for vendors who can pay setup fees of $5k to $40k plus per-location monthly fees. Some categories are barred entirely, and prices move on the vendor's say-so (P1 to P3).
- **Litigation.** Dealers won about $129.5M combined (CDK $100M and Reynolds $29.5M, covering Sept 2013 to Aug 2024). Payments began 8 Sept 2026. The miner found no report of the fee structure changing (https://www.dealershipclassdmssettlement.com/). In property management, the RealPage DOJ settlement and court monitor dealt with pricing conduct, not access (https://www.npr.org/2025/11/25/g-s1-99331/realpage-rent-algorithm-limits-settlement).
- **Paid integration layers** (EZLynx and Zywave for agencies, DealerSocket and xTime for dealers). They are sold as ending double entry, but each adds its own fee on top of the SoR toll, and Zywave exits are reported as hard.
- **Switching vendors** (Doorloop back to Buildium for deeper integration [paraphrase], vet practices switching on cost, Easy Dental or ACE to Open Dental or Dentrix). Switching runs straight into P5: conversion fees, failed transfers and ID mismatches. Buildium itself is reported as hard to integrate with outside accounting [aggregate, unverified].
- **Flat-file and SFTP exports.** These are the fallback where there is no API (Yardi). They are batch-only and give no live write-back.
- **Human workarounds.** Handwritten pending-lab lists, copy/paste, manual card-transaction entry, paper during outages, and staff hired specifically for data entry (P4, P6, P7, P11).
- **Outside monitoring** (StatusGator for PioneerRx). It only exists because the vendor publishes no status page.

## Open questions

1. **Pharmacy is thin.** The only solid item is PioneerRx developer friction. The miners found no first-hand quotes from pharmacists or technicians on QS/1, BestRx, Rx30 or PioneerRx, covering wholesaler double entry, migration or price increases.
2. **No time per record.** No source gives minutes per re-keyed record or hours per week for any vertical. The only time figure is "literal hours" (P4).
3. **Stale or unverified figures.** The dealer fees are from 2017. Yardi's "$25,000 per interface" figure, the insurance-forum quotes and the $42k Epic loss all need primary confirmation.
4. **Who actually pays the toll?** The fee sits with the vendor in P1 and P3. How much of it reaches the practice or dealer, and in what form, is not documented.
5. **Price changes after acquisitions** (Covetrus private since 2022, Henry Schein One). No dated first-hand report was found.
6. **Contract terms.** Do SoR licence terms restrict automated or third-party access to the customer's own data through the user interface? This was not researched and affects every flow above.
7. **Missing sources.** No Reddit, NARPM or BBB first-hand posts were captured, and the insurance and property-management evidence leans on search summaries rather than direct reads of the pages.

<!-- COMPLETE -->
