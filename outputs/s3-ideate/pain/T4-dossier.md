# T4 pain dossier: mandated reporting into no-API government portals by tiny organizations

Merged from `outputs/s3-ideate/pain/T4-01.md` (mission-driven orgs: charities, volunteer fire) and `outputs/s3-ideate/pain/T4-02.md` (licensees and court filers: pawn, scrap, tow, e-filing, guardians). A note on evidence: statutes, regulator pages and vendor-published figures are strong. First-person quotes come only from Trustpilot reviews of two incumbents (Harbor Compliance, One Legal). Neither miner could get forum quotes (Reddit, pawn or tow forums).

## Pain points

**P1. A missed 990-N e-Postcard leads to automatic loss of tax exemption**
- Who: volunteer treasurers at tiny 501(c)s with gross receipts of $50k or less.
- What hurts: after three consecutive years without filing, exemption is revoked automatically. Many of these orgs never knew the e-Postcard existed.
- How often: every year, with a three-year lookback.
- Cost: "more than 760,000 nonprofit organizations" were revoked from 2010 to 2017, and FY2011 alone saw "390,168 revocations." Only "13 percent" were ever reinstated, and yearly reinstatements fell from about 33,000 to about 2,000.
- Workaround: reinstatement after the fact through Form 1023 or the streamlined process.
- Evidence: https://nonprofitquarterly.org/how-many-nonprofits-1023ez/ ; https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard
- Severity: **5**. Donations stop being deductible, and the org can die.

**P2. Charitable solicitation registration means re-keying the same data across many states**
- Who: the treasurer or executive director of a small charity that fundraises online or nationally.
- What hurts: 38–41 states plus DC each require their own registration. The shared form no longer works: "the Unified Registration Statement is no longer useful" because states changed their rules and nobody maintained it.
- How often: one setup per state, then an annual renewal in each.
- Cost: fees alone are "as little as $1,700 in state fees to register in 40 entities," up to $6,500. Labor comes on top.
- Workaround: re-enter everything state by state, or pay a registration service (see P4).
- Evidence: https://www.501c3.org/navigating-multi-state-charitable-solicitations-a-comprehensive-guide-for-nonprofits/ ; https://www.fundraisingregistration.com/resources/FAQ.php
- Severity: **4**.

**P3. Finding out late means back-filings and late fees that stack**
- Who: a small charity that solicited before registering, or that missed renewals.
- What hurts: states can demand years of back-filings plus per-state penalties. New Mexico takes "up to 10 years of back filings, fines of $100 per year." Illinois charges "$200 penalty fee ... plus $100 late fee for each filing." Pennsylvania charges "$25 per month ... to a max of $600." DC late fees go "as far back as 1963."
- How often: usually a single discovery event, often an AG letter, but the exposure grows every year the org stays unregistered.
- Root cause: a common belief that the IRS determination letter grants permission to solicit, when it "says nothing about whether you can legally ask for donations in California, New York, or any other state" (https://www.501c3.org/navigating-multi-state-charitable-solicitations-a-comprehensive-guide-for-nonprofits/).
- Workaround: none that works well.
- Evidence: https://www.fundraisingregistration.com/resources/state-late-fees.php
- Severity: **5**. The liability has no ceiling and cannot be estimated in advance.

**P4. The paid registration agent fails silently, and the org carries the risk**
- Who: nonprofits that outsource state filings to Harbor Compliance.
- What hurts: filings are paid for but never done, a missed legal summons goes unnoticed, and no human can be reached.
  - "Harbor routinely dropped the ball on completing work" and the org had "NEVER been registered as a solicitor in that state" (Aug 20, 2026).
  - "they received a summons ... I NEVER RECEIVED IT" (Jan 19, 2026).
  - "I cannot reach a human being on the phone, only an AI bot" (Mar 4, 2026).
- Also reported: a renewal price step from $99 to $149 a year, and fees that are "non-refundable once service begins."
- Evidence: https://www.trustpilot.com/review/harborcompliance.com ; https://registeredagentguides.com/blog/harbor-compliance-review/
- Severity: **5**. Paying to escape manual filing does not remove the liability, and it hides the failure.

**P5. Nobody owns the calendar: turnover and parallel filing tracks**
- Who: all-volunteer boards and fire departments whenever a treasurer or officer leaves.
- What hurts: the compliance knowledge and the portal logins leave with that person. Incoming volunteers must "conduct a thorough compliance review ... 990 filings and state-level registrations" starting from nothing. Orgs often lack "a designated account administrator."
- A second track is easy to miss: state corporate reports are separate from AG charity registration. Iowa, for example, requires a biennial report "between January 1 and April 1 of odd-numbered years," and missing it "can result in administrative dissolution."
- How often: every leadership change, plus each state's own cycle.
- Workaround: manual checklists and compliance calendars.
- Evidence: https://nla1.org/treasurer-resignation-financial-continuity/ ; https://inrc.law.uiowa.edu/news/2022/11/five-items-nonprofits-check-now ; https://home.treasury.gov/system/files/136/SLFRF-Treasury-Portal-Account-Access-Help-Best-Practices-Common-Fixes.pdf
- Severity: **4**. This is the upstream cause of P1, P3 and P12.

**P6. Pawn and secondhand dealers must file daily police reports, and a miss is a crime**
- Who: pawn shop owners and counter clerks (about 13,500 US shops; 48 states license them), and scrap metal dealers.
- What hurts, pawn (California): "Every pawnbroker shall prepare a daily report ... by noon of the following day with the chief of police." A knowing failure is a misdemeanor: up to $1,500, then $5,000, then $25,000 fines, up to 6 months in jail on a third offense, and suspension or revocation of the license.
- What hurts, scrap (Minnesota): dealers must enter vehicle and catalytic-converter purchases "into electronic databases by the close of business each day."
- How often: every business day, for every transaction.
- Workaround: enter the transaction in the POS, then again in LeadsOnline, which police often mandate. The forum-cited LeadsOnline cost of "$2000.00 a year" is on the department side; dealer-side cost is [unverified].
- Evidence: https://www.simmrinlawgroup.com/california-business-and-professions-code-section-21628/ ; https://www.cronisraelsandstark.com/ca-bpc-21628 ; https://dps.mn.gov/news/bca/new-rules-buying-scrap-metal-aim-help-curb-thefts
- Context: the role is low-paid. American Pawn clerks average about $2,081 a month, 29% below the national average, from a single-employer sample [unverified as industry-wide] (https://www.indeed.com/cmp/American-Pawn/salaries/Clerk?period=MONTHLY).
- Severity: **5**.

**P7. A missed lienholder notice voids the tow yard's lien sale**
- Who: tow yard and impound lot clerks and owners.
- What hurts: each state sets its own window for the DMV lookup and for notifying the owner and lienholder. California allows 15–30 days, then notice 31–41 days before the sale. Florida allows 7 business days, Virginia 5, Nevada 15–21. "Missing either notification invalidates your entire lien sale process." A voided sale can leave the tow company owing "the full market value of the vehicle it sold improperly."
- How often: every non-consensual tow.
- Workaround: manual lookups in DMV portals (for example the CT Towing Portal), plus certified-mail logs. Towbook, the yard software, is well reviewed; its one recurring complaint is freezing during busy days.
- Evidence: https://towingservicehub.com/blog/towing-lien-laws ; https://www.dmv.ca.gov/portal/handbook/dismantlers-handbook-of-registration-procedures/lien-sales-and-abandoned-vehicles/lien-sale-procedure-for-vehicles-valued-or-more-or-stored-at-a-self-service-storage-facility-cc-3071/
- Severity: **5**. The loss is out of all proportion to a date miss.

**P8. Court e-filings get rejected, and the filer pays for both the failure and the rework**
- Who: solo and small-firm attorneys and paralegals.
- What hurts:
  - One Legal says "approximately 10% of filings are rejected by the court."
  - Filers are billed anyway: "charged a fee while my case was rejected by the court; One Legal is not willing to reimburse me" (Apr 30, 2026).
  - Corrections create more work: "13 new proof of service docs and efiled all 13," and "unnecessary double data entry."
  - Real deadlines slip. One filer "was not able to get [it] fixed in time for my court hearing today after ... weeks." Another saw a writ of possession delayed "by approximately one month."
- How often: every filing batch.
- Workaround: One Legal's Re-File feature, and InfoTrack's standing "why was my filing rejected" help page.
- Evidence: https://www.onelegal.com/blog/one-legals-rejected-filing-re-submission-feature/ ; https://www.trustpilot.com/review/onelegal.com
- Severity: **4**. It reaches 5 when a hearing is lost.

**P9. Each court has its own e-filing rules, and outages come with no stated relief**
- Who: attorneys filing across counties or courts.
- What hurts: each court publishes its own technical requirements and mandate dates. Alameda County, for example, phased in different case types on different dates. During outages, the Washington Court of Appeals had "no estimated time for restoration." Filers had to email each division's inbox, and the notice said nothing about extending deadlines.
- How often: every new matter or county; outages happen from time to time.
- Evidence: https://www.alameda.courts.ca.gov/system/files/e-filing-technical-requirements.pdf ; https://www.wsba.org/news-events/latest-news/news-detail/2024/11/04/court-of-appeals-e-filing-outage
- Severity: **3**.

**P10. The guardian's annual accounting is due on a fixed date and needs records kept all year**
- Who: court-appointed guardians and conservators, and the paralegals who prepare their filings.
- What hurts: Florida requires "an Annual Accounting on or before the anniversary date of each year." Courts charge an audit fee based on estate value. Courts advise logging transactions weekly or monthly just to be ready. When discrepancies turn up, "the court may hold a hearing or request additional documents."
- How often: annual, per ward. The burden compounds for guardians with several wards.
- Workaround: a paid attorney or accountant. Hours per filing are [unverified].
- Evidence: https://www.thompsonmcclarydefensefirm.com/how-to-file-an-annual-accounting-report-as-a-guardian-in-florida/ ; https://www.fljud13.org/portals/0/forms/pdfs/ejc/reviewsheetannual.pdf
- Severity: **4**.

**P11. Volunteer fire departments were forced onto a new federal reporting system, and grants depend on it**
- Who: volunteer and combination departments with no records-management system (RMS) and no records staff. More than 22,000 departments reported to NFIRS.
- What hurts: "NFIRS will be unavailable for all users starting in February 2026," and CY25 edits closed January 31, 2026. Departments that used only eNFIRS had to export their own history before it disappeared. Reporting is "technically voluntary" but "commonly required for federal grant applications," and bad data "can affect funding opportunities."
- How often: the cutover happened once; the grant pressure repeats every cycle.
- Evidence: https://www.usfa.fema.gov/nfirs/sunset/ ; https://blog.resgrid.com/nfirs-fire-reporting/ (vendor blog)
- Severity: **4**.

**P12. Volunteers re-key every incident report from memory**
- Who: volunteer officers filing after each call.
- What hurts: "Crews enter the same address, times, and unit details more than once," and officers are "reconstructing incidents from memory."
- How often: every incident.
- Evidence: https://blog.resgrid.com/nfirs-fire-reporting/
- Severity: **3**.

## Already tried
- **Harbor Compliance**, the registration agent: users report filings never completed, a summons that was never forwarded, support that only reaches a bot, price step-ups and non-refundable fees (P4).
- **Affinity Fundraising Registration and Labyrinth**: the standard alternative to doing it yourself, at a cost of hundreds to thousands of dollars in fees plus service charges. No independent reviews were found, so their quality is [unverified].
- **Unified Registration Statement**: the one "file once" attempt. It is abandoned and no longer accepted in practice (P2).
- **IRS reinstatement**: only works after the damage. Only 13% of revoked orgs ever came back (P1).
- **LeadsOnline**: the mandated police database for pawn dealers. It adds a second round of data entry on top of the POS (P6).
- **State DMV portals and certified mail**: a lookup here, a mailing there, tracked by hand across state-specific clocks (P7). **Towbook** runs yard operations but was not shown to solve the notice timing.
- **One Legal and InfoTrack**: e-filing intermediaries. About 10% of filings are still rejected, fees are kept, and correction loops are slow (P8).
- **Court portals themselves**: vary by jurisdiction and go down with no stated deadline relief (P9).
- **Attorneys and accountants for guardian accountings**: work, but at added cost (P10).
- **Fire RMS vendors (ESO, ImageTrend, Emergency Reporting, Resgrid)** and the free **NERIS mobile app**: no complaint text was retrieved beyond one comparison saying "ImageTrend was not as functional or well built" [unverified]. Departments without a vendor fall back on the free federal tools (P11, P12).

## Open questions
- How often do filings actually fail in each niche: late 990-Ns per year after 2017, pawn reports missed, lien sales voided? Neither miner found failure counts.
- Is there any first-person practitioner voice, from forums, associations or interviews, for pawn clerks, tow clerks and guardians? All the quotes come from two incumbents' Trustpilot pages.
- How many hours does each workflow take: per daily pawn report, per lien-sale notice cycle, per guardian accounting, per state registration renewal?
- Which of these portals ban automated access, require CAPTCHA or MFA, or require a sworn human signer? This decides whether the work can legally be delegated at all.
- NFIRS shut down in February 2026. What pain remains now, in September 2026: NERIS usability, lost history, or grant-cycle reporting?
- What do dealers actually pay LeadsOnline, and what does the dealer-side process look like?
- How many states require charitable solicitation registration today (38, 39 or 41)? The sources disagree.
- Who holds the budget in each niche: the org itself, its outside counsel or accountant, or the registration service? Willingness to pay is inferred, not measured.

<!-- COMPLETE -->
