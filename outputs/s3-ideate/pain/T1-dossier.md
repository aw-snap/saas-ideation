# T1 pain dossier: payer-portal grind at small medical practices

Merged from `outputs/s3-ideate/pain/T1-01.md` (pre-service: eligibility, prior auth) and `outputs/s3-ideate/pain/T1-02.md` (post-service: claim status, denials, portal access). Duplicates have been merged, and each point keeps its strongest source.

## Pain points

**P1. Prior-auth volume eats staff hours every week.**
- **Who:** physicians plus front-desk and PA staff.
- **What hurts:** a steady stream of PA requests, each touched by several people.
- **How often:** 39 requests per physician per week. 60% of practices involve at least 3 employees per request, and 35% spend 35+ minutes per request.
- **Cost:** about 13 hours per week of physician and staff time (one dermatology office reports 15).
- **Workaround:** absorbed as overhead, or handed from person to person.
- **Evidence:** https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way ; https://www.mgma.com/articles/the-prior-authorization-landscape-in-2025
- **Severity: 5**

**P2. Practices hire people whose only job is chasing authorizations.**
- **Who:** practice managers who pay for PA and verification staff.
- **What hurts:** the volume keeps growing (86% saw PA requests rise year over year; that figure is from 2017, and newer MGMA pieces report the same trend), so practices add headcount instead of fixing the process.
- **How often:** continuous, full-time roles.
- **Cost:** 92% of groups hired or reassigned staff just for PA. A PA specialist averages $21.85/hr. Offshore vendors pitch $299-399 per week against $18-22/hr for US staff, a figure the vendor asserts itself.
- **Workaround:** dedicated FTEs, or outsourcing and offshoring.
- **Evidence:** "We have four full-time employees whose sole focus is on obtaining prior authorization for medications." (gastroenterologist, AMA link in P1) ; https://www.mgma.com/articles/the-prior-authorization-landscape-in-2025 ; https://www.ziprecruiter.com/Salaries/Prior-Authorization-Specialist-Salary ; https://staffingly.com/insights/blog/eligibility-and-benefits-verification-process-bpo-outsourcing-india-philippines/
- **Severity: 4**

**P3. Portal-based PA is still manual keying.**
- **Who:** staff submitting PA through payer portals, phone or fax.
- **What hurts:** the portal is faster than the phone, but it is still one person re-entering data one payer at a time. Only 35% of PAs run fully electronically over X12 278.
- **How often:** every transaction.
- **Cost:** 16 minutes via portal and 24 minutes via phone, fax or email. Manual costs $3.41-$10.97 per transaction, against $0.05-$5.79 electronic.
- **Workaround:** portals where they exist, phone where they don't.
- **Evidence:** https://www.caqh.org/blog/new-caqh-index-reveals-20b-savings-opportunity-to-cut-waste-reduce-costs-and-improve-patient-access ; "a staff member spending 20-30 minutes on the phone to get an MRI authorized for which we will be paid nothing" (about $15-20 per MRI, 2017 thread) https://forums.studentdoctor.net/threads/prior-authorization-woes.1281166/
- **Severity: 4**

**P4. PA delay costs patients and revenue.**
- **Who:** physicians and their patients.
- **What hurts:** waiting on authorization delays care and leads patients to abandon treatment.
- **How often:** 93% say PA delays care at least some of the time, and 82% say it sometimes leads patients to abandon treatment.
- **Cost:** 29% report a serious adverse event, and 24% report a hospitalization tied to the wait. Abandoned treatment is also lost revenue.
- **Workaround:** peer-to-peer escalation, which is slow.
- **Evidence:** https://www.beckershospitalreview.com/healthcare-information-technology/providers-frustrated-with-prior-authorization-workflows-5-stats-to-know/ ; https://www.beckersasc.com/asc-coding-billing-and-collections/24-of-physicians-say-prior-authorization-wait-led-to-hospitalization-of-patient/
- **Severity: 5**

**P5. Most PA denials are avoidable, but each one still has to be fought.**
- **Who:** practices billing Medicare Advantage.
- **What hurts:** initial denials that are mostly overturned on appeal. That is wasted effort at submission and again on appeal.
- **How often:** 50M+ MA PA requests a year, 3.2M of them partly or fully denied.
- **Cost:** 81.7% of appealed denials are overturned.
- **Workaround:** manual appeal through the portal.
- **Evidence:** AMA link in P1, citing KFF and CMS data.
- **Severity: 4**

**P6. The 2027 FHIR mandate leaves a durable manual remainder.**
- **Who:** practices with commercial or traditional Medicare patients.
- **What hurts:** CMS-0057-F covers MA, Medicaid, CHIP and FFE QHPs. It does not automatically cover employer-sponsored commercial plans, traditional Medicare or standalone Part D, so PA for those plans stays on portals after January 2027.
- **How often:** ongoing.
- **Cost:** not quantified.
- **Workaround:** none.
- **Evidence:** https://www.cms.gov/initiatives/burden-reduction/overview/interoperability/policies-regulations/cms-interoperability-prior-authorization-final-rule-cms-0057-f
- **Severity: 4**

**P7. Claim denials are rising, which grows the portal rework queue.**
- **Who:** billers and revenue-cycle (RCM) staff.
- **What hurts:** more denials to read, research and resubmit each billing cycle.
- **How often:** the average initial denial rate was 11.8% in 2024, up from 10.2%. 60% of group leaders saw denials rise from 2023 to 2024.
- **Cost:** a rising baseline of rework.
- **Workaround:** dedicated denial specialists (P9).
- **Evidence:** https://www.physicianspractice.com/view/claim-denials-patient-collections-and-the-revenue-cycle (MGMA 2024 Cost and Revenue Report). The MGMA Stat poll of 5 Mar 2024 comes from a search aggregation.
- **Severity: 5**

**P8. Manual claim-status checks are the costliest transaction per instance.**
- **Who:** billers polling claim status.
- **What hurts:** logging in and navigating to each claim, or calling, wherever the payer does not support the electronic transaction.
- **How often:** every inquiry. 80% of medical claim-status transactions are electronic, but only 28% of dental.
- **Cost:** about 24 minutes and about $12 per manual claim-status inquiry.
- **Workaround:** portal or phone lookups.
- **Evidence:** "providers reported spending, on average, 24 minutes on manual claim status inquiry, costing approximately $12 per transaction." https://uhin.org/blog/caqh-index-2023-providers/
- **Severity: 4**

**P9. Denial research means digging through several portals for data that is missing or wrong.**
- **Who:** denial and AR follow-up specialists.
- **What hurts:** the reason for a denial is hard to find, so staff cross-check portals and then call the payer.
- **How often:** daily caseload.
- **Cost:** these are dedicated roles at $18-74/hr; remote AR follow-up averages $23.23/hr (Sep 2026).
- **Workaround:** calling payers, "exhaustive research".
- **Evidence:** "payer information is never accessible and when the information can be provided it is incomplete and inaccurate." (Availity, 27 May 2025) https://availity.pissedconsumer.com/complaints/RT-P.html. Job postings ask for "experience accessing payer portals such as Navinet, Availity, etc. to obtain information and upload appeals" (aggregated from Indeed, ZipRecruiter and Glassdoor; no single URL).
- **Severity: 4**

**P10. Unreliable portals create duplicate work and duplicate claims.**
- **Who:** billing staff using Availity.
- **What hurts:**
  - Claims are invisible for up to two days after entry.
  - After a "cannot reach the payor" error, staff resubmit and both claims process.
  - A payer data feed was broken for 16 weeks, forcing manual demographics on every claim.
  - Weekly "routine maintenance" since Feb 2024.
  - Search history is limited to 24 hours.
- **How often:** every batch or every week.
- **Cost:** duplicate-claim cleanup, recoupment risk, re-keying.
- **Workaround:** waiting, re-checking, manual re-entry.
- **Evidence:** "NONE of the claims you enter today will be visible for 2 DAYS." ; the feed "has been broken for 16 weeks," forcing staff to "duplicate work AND add every client demo on the claim forms." https://availity.pissedconsumer.com/complaints/RT-P.html (Apr 2025)
- **Severity: 4**

**P11. Login and authentication friction on every session.**
- **Who:** every portal user.
- **What hurts:**
  - 2FA on every login.
  - SMS codes that never arrive.
  - Surprise logouts that need a cache clear.
  - Lockouts that are fixed by creating a brand-new account and waiting for approval.
  - A mandatory authenticator app since SMS and voice 2FA ended on 12 Aug 2025. It is rated 1.0/5 on the App Store, from only 7 ratings.
- **How often:** every login, multiplied across each payer portal.
- **Cost:** not quantified.
- **Workaround:** retrying, clearing the cache, rebuilding the account.
- **Evidence:** 2FA "EVERY SINGLE TIME I log in" (Dec 2024) https://availity.pissedconsumer.com/complaints/RT-P.html ; https://apps.apple.com/us/app/authenticator-for-availity/id6751234719
- **Severity: 3**

**P12. Payer-by-payer portal migrations.**
- **Who:** practices with NaviNet logins.
- **What hurts:** payers retire NaviNet for Availity Essentials on their own schedules (Horizon after 31 May 2024; Geisinger by the end of 2025), so practices re-register and retrain each time.
- **How often:** staggered through 2024-2025.
- **Cost:** retraining and re-credentialing; not dollarized.
- **Workaround:** none.
- **Evidence:** https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/availity-essentialstm-your-new-provider-portal ; https://www.geisinger.org/health-plan/providers/updates/search-updates/2024/12/05/15/43/availity-announcement
- **Severity: 3**

**P13. The clearinghouse is a single point of failure.**
- **Who:** small practices that depend on Change Healthcare.
- **What hurts:** after the Feb 2024 attack, claims, eligibility checks and remittance advice (ERA) were down for months, which pushed practices back onto manual portal work.
- **How often:** rare, but catastrophic.
- **Cost:** 78% lost revenue, 85% added staff time, 79% still had no ERA in April 2024, 31% could not make payroll.
- **Workaround:** manual submission, delayed billing, owners' personal funds.
- **Evidence:** "78% have lost revenue from claims that they have been unable to submit." https://www.ama-assn.org/practice-management/digital-health/change-healthcare-cyberattack
- **Severity: 4**

## Already tried

- **Availity Essentials** is the multi-payer portal for eligibility, PA, claim status and denials. It is where most of P9-P12 happens: invisible claims, duplicate submissions, broken data feeds, weekly outages, 2FA friction, and denial data that is missing or inaccurate. G2 reviewers write "It is very hard to navigate through Availity" and "NOT user-friendly!" (https://www.g2.com/sellers/availity). Reviewers also say lookups need several identifying fields (DOB, NPI) (https://www.g2.com/products/essentials/reviews?page=2). Availity consolidates logins but does not remove the manual keying.
- **NaviNet** is being retired payer by payer, so practices go through the migration churn in P12 rather than getting a stable tool.
- **CoverMyMeds** speeds the first PA submission. Review summaries say it does not cover status tracking, denials, appeals or peer-to-peer scheduling, and sometimes reports a submitted PA as not submitted. G2 rates it 3.7 from 16 reviews. https://www.capterra.com/p/154792/CoverMyMeds-Platform/reviews/ [unverified: summarized from aggregated reviews, not a quote pulled verbatim]
- **Waystar (formerly ZirMed)** is a denial and claims tool. Capterra reviewers write: "The interface is outdated, non-intuitive, and clunky — basic workflows require excessive clicks, tabs and navigation," and its reports are slow to work through. https://www.capterra.com/p/45512/ZirMed/reviews/
- **Electronic transactions (X12 278/276)** are cheap where payers support them, but only 35% of PA is fully electronic, and dental claim status is 28% electronic (P3, P8).
- **Clearinghouses such as Change Healthcare** concentrate the risk (P13).
- **Headcount and outsourcing:** dedicated PA and denial specialists, and offshore BPO. These move the manual work around rather than removing it (P2, P9).

## Open questions

- **Eligibility is thin.** No named source gives the cost or time of one eligibility check, and no first-person complaint names a portal that returned wrong eligibility. Eligibility is in scope, but the evidence is weaker than for PA and claims.
- **How many portals per practice?** Gate B cites an MGMA figure of 7-11+ (https://www.mgma.com/mgma-stat/how-many-payer-portals-is-too-many-most-practices-already-know-their-answer). Neither pain miner could independently confirm a count, or put a cost on credential turnover and offboarding when staff leave.
- **No verbatim biller voice from Reddit, AAPC or MGMA communities.** The first-person evidence is PissedConsumer, G2/Capterra and one 2017 SDN thread. How representative the Availity complaints are is unknown.
- **Write-off share.** What share of denials is never reworked, and what does one appeal cost? Neither was found.
- **Timely filing.** How often do portal delays cause missed timely-filing deadlines, and how often do portal status and the 835 remittance disagree? Neither was found.
- **Post-2027 split.** What share of a typical small practice's PA volume comes from plans outside CMS-0057-F (commercial and traditional Medicare)? That share sets how much manual work survives the mandate.
- **Denial repeat patterns.** Are denials concentrated in a few payers or rule types? No data.

<!-- COMPLETE -->
