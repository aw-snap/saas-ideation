# T5 dossier: security evidence and compliance chores in organizations with no IT staff

Merged from `outputs/s3-ideate/pain/T5-01.md` (proving security to outsiders) and `outputs/s3-ideate/pain/T5-02.md` (running the consoles). Duplicates are merged and the strongest evidence kept. Pain only.

## Pain points

**P1. Cyber-insurance questionnaires have grown, and the owner answers them alone.**
- Who: the owner or office manager at a small firm with no IT staff.
- What hurts: renewal forms went from short attestations to 60-150 line-by-line control questions (12-20 pages), and the person filling them in does not understand many of them.
- How often: every annual renewal.
- Cost: hours per renewal (not quantified). Coverage is at risk if an answer is wrong (see P2).
- Workaround: the owner digs through consoles alone. Brokers advise declaring each gap with a remediation date.
- Evidence: "questionnaires that used to take fifteen minutes now run sixty to a hundred and fifty questions"; "I don't even know what half of these are asking." https://www.snl-techservices.com/post/cyber-insurance-readiness-small-business ; "12-to-20-page renewal applications asking line-by-line control questions" https://gogravity.net/blog/cyber-insurance-renewal-questionnaire-walkthrough-2026/
- Severity: 4

**P2. The firm believes its answer is true, but the consoles say otherwise, and the claim is denied.**
- Who: small firms that attest to controls like MFA.
- What hurts: partial deployment (MFA on RDP but not on M365 or domain admin) counts as "no". An optimistic "yes" gives the insurer grounds to void the policy after a breach.
- How often: exposure at every renewal. It becomes real at claim time.
- Cost: the whole coverage. In Travelers v. ICS, the insurer asked the court to "declare the insurance contract null and void" after a ransomware claim, over the MFA answer on the application. Industry-wide, about 10% of claims are denied for misrepresentation (general figure, not specific to cyber). Coalition reports that 82% of claims involved organizations without MFA properly in place.
- Workaround: audit every admin surface by hand before answering.
- Evidence: "A firm can have MFA locked down on remote desktop access while leaving Microsoft 365 logins and domain admin accounts wide open, and that's a 'no' on the questionnaire" https://gogravity.net/blog/cyber-insurance-renewal-questionnaire-walkthrough-2026/ ; https://www.insurancejournal.com/news/national/2022/07/12/675516.htm
- Severity: 5

**P3. CMMC Level 2 costs a small subcontractor six figures.**
- Who: DoD subcontractors with 5-50 staff, often manufacturers used to verbal processes.
- What hurts: they must produce "comprehensive written documentation of their security practices". Legacy shop-floor operating systems cannot take modern controls and have to be isolated.
- How often: 6-12 months of preparation, then an annual affirmation and reassessment every three years.
- Cost: DoD estimates $104,670 for a Level 2 third-party assessment (including $20,699 of preparation and $4,377 of affirmations). Assessor (C3PAO) fees are $40k-$80k+. Total compliance is $50k-$300k+.
- Workaround: consultants, MSPs, readiness tools, network segmentation.
- Evidence: https://www.huntress.com/cmmc-compliance-guide/cmmc-certification-cost ; https://godlan.com/cmmc-2-0-deadlines-rules/
- Severity: 5

**P4. CMMC is a moving target.**
- Who: small contractors part-way through preparing for the November 2026 third-party assessments.
- What hurts: on 13 July 2026 DoD paused Phase 2 third-party assessments and opened a 60-day review, which drew about 1,100 responses (11,000+ pages). Firms do not know which requirements will stick.
- How often: ongoing as of Sept 2026.
- Cost: readiness money already spent may be wasted.
- Workaround: none.
- Evidence: https://federalnewsnetwork.com/cybersecurity/2026/07/pentagon-suspends-cmmc-phase-two-requirements-launches-review-of-program/ ; https://secureframe.com/blog/cmmc-news-2026-phase-2-pause
- Severity: 4

**P5. A wrong security attestation leads to False Claims Act liability.**
- Who: small defense subcontractors bound by DFARS 252.204-7012 and NIST 800-171.
- What hurts: attestations that do not match reality lead to FCA settlements, sometimes started by an employee whistleblower.
- How often: a recent string of DOJ actions.
- Cost: $421,234 for Swiss Automation, an Illinois machining firm (Dec 2025), and $507,144 for an Alabama contractor.
- Workaround: none. The Swiss Automation case surfaced through a qui tam suit filed by a former QC manager.
- Evidence: https://www.justice.gov/opa/pr/illinois-precision-machining-company-agrees-pay-421234-resolve-alleged-false-claims ; https://www.justice.gov/opa/pr/alabama-defense-contractor-agrees-pay-507144-resolve-false-claims-act-liability-relating
- Severity: 5

**P6. The HIPAA risk analysis is missing or stale, and OCR fines follow.**
- Who: small practices, EMS providers and surgery centers.
- What hurts: OCR's Risk Analysis Initiative keeps finding "no written Risk Analysis or [one] that did not reflect current systems". This is the most commonly cited Security Rule violation.
- How often: 13 settlements under the initiative by April 2026, and 21 OCR actions in 2025.
- Cost: $90k (Bryan County EMS), $225k (Deer Oaks), $250k (Syracuse ASC), $350k (Northeast Radiology). Even a Yelp disclosure cost a Dallas dental practice $10k [unverified date].
- Workaround: none. These entities had not done the analysis at all.
- Evidence: https://ogletree.com/insights-resources/blog-posts/2025-enforcement-trends-risk-analysis-failures-at-the-center-of-hhss-multimillion-dollar-hipaa-penalties/
- Severity: 5

**P7. The free HHS SRA Tool is long and quickly outgrown.**
- Who: solo and small practices.
- What hurts: it is a 156-question branching app that suits only "a very small, single-site practice".
- How often: it should be redone at least once a year.
- Cost: a paid platform or consultant once the practice outgrows it (not quantified).
- Workaround: move to Compliancy Group, Medcurity or similar.
- Evidence: "most organizations quickly outgrow the SRA Tool" https://medcurity.com/best-hipaa-risk-assessment-tools/ (no first-person complaint found)
- Severity: 3

**P8. The pending HIPAA Security Rule overhaul leaves practices unable to plan.**
- Who: every small covered entity.
- What hurts: the NPRM of January 2025 is still not final in Sept 2026. The draft would make MFA and encryption mandatory, remove "addressable" safeguards and require annual documented risk assessments, with about 180 days to comply once final.
- How often: a one-time overhaul, then yearly.
- Cost: an estimated $9B in the first year and about $6B a year after that, across all covered entities, falling "disproportionately" on small and rural providers.
- Workaround: wait.
- Evidence: https://livecompliance.com/blog/2026-hipaa-security-rule-overhaul/
- Severity: 4

**P9. Nobody knows who still has access, and former staff keep their logins.**
- Who: the accidental admin, at every departure.
- What hurts: there is no single view of access across SaaS apps, and exit processes never ask for cloud logins.
- How often: every offboarding. The surveyed failure rate is close to universal.
- Cost: data exposure (no dollar figure found).
- Workaround: manual review, or nothing.
- Evidence: "87% of SMB leaders cannot immediately verify which employees have current access"; "Nearly 90% ... suspected or discovered that former employees still had access" (survey of 400, June 2025; note it skews toward firms with 50-500 employees) https://markets.financialcontent.com/pennwell.cabling/article/bizwire-2025-6-24-accessmule-launches-to-tackle-the-1-security-risk-facing-smbs ; "six out of 10 respondents were not asked for cloud logins when they left jobs" https://www.techradar.com/news/software/security-software/businesses-are-incredibly-lax-about-restricting-ex-employee-access-survey-1261256
- Severity: 5

**P10. Automation credentials outlive the people who created them.**
- Who: admins offboarding someone who built integrations or automations.
- What hurts: automations run on shared service accounts or on API keys and webhooks under a person's identity. There is no inventory, so these are hunted down by hand or never reviewed.
- How often: every offboarding where automation exists. This is growing as AI agents are wired in [no first-person agent complaint found].
- Cost: orphaned access (not quantified).
- Workaround: a manual checklist of "connections and associated webhooks".
- Evidence: service accounts "require shared credentials so care should be taken" https://dev.to/mormor83/efficient-offboarding-of-users-in-gitlab-m66 ; https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/user-offboarding
- Severity: 4

**P11. Vendor bank-detail-change fraud (business email compromise, or BEC) gets paid before anyone calls back.**
- Who: owners and AP staff at small firms.
- What hurts: a spoofed or compromised vendor email changes the payee account, and the payment goes out.
- How often: 21,832 BEC complaints to the FBI's IC3 in 2023.
- Cost: $2.9B in US losses in 2023; an average of $137k+ per incident; an average of $487k in business-interruption cost for SMEs; a Fremont business lost about $180k.
- Workaround: phone the usual contact to confirm, which is advice given after the fact. Payment-verification tools (Eftsure) are used where they are affordable.
- Evidence: https://www.eftsure.com/statistics/business-email-compromise-statistics/ ; https://www.yahoo.com/news/vendor-fraudsters-scammed-fremont-business-193628376.html
- Severity: 5

**P12. The email-authentication mandates are unknown to many and confusing to the rest.**
- Who: small organizations that send invoices, newsletters and notifications.
- What hurts: Google and Yahoo require SPF, DKIM and DMARC plus a 0.3% spam-complaint ceiling. Many small senders have never heard of the rules or cannot implement them. Mail that fails the rules is not delivered.
- How often: a continuing obligation. One bad week can trip the threshold.
- Cost: lost deliverability (not priced).
- Workaround: ignore it, or hire a vendor.
- Evidence: "Only 55% of lowest-volume senders had heard about the Yahoo/Google requirements"; "14% of familiar senders found the requirements 'complex and confusing'"; "If you send 4,999 messages, you still have to follow the requirements." https://www.mailgun.com/state-of-email-deliverability/chapter/yahoogle-bulk-senders/
- Severity: 4

**P13. DMARC reports arrive as raw XML nobody can read.**
- Who: non-technical admins once DMARC is switched on.
- What hurts: aggregate reports come as daily XML with no summary, so people stop monitoring.
- How often: daily.
- Cost: monitoring is abandoned, and spoofing goes unseen.
- Workaround: a dashboard vendor.
- Evidence: "a common pain point for small business owners and non-technical users" https://powerdmarc.com/how-to-read-dmarc-reports/
- Severity: 3

**P14. Towns and nonprofits have no security staff, so one incident halts operations.**
- Who: town offices and small nonprofits.
- What hurts: essential services (email, 911, billing, permits, payroll) sit on unpatched systems run by one IT generalist or by nobody.
- How often: government ransomware incidents rose 65% in H1 2025 compared with H1 2024.
- Cost: St. Paul's billing and emergency coordination were down for more than two weeks. The average government ransom across 2018-2024 was about $872k.
- Workaround: unplug everything and fall back to paper.
- Evidence: "They unplugged everything so the problem couldn't spread ... If we have to go back to pen and paper, we will" (Southold, NY) https://northforksun.com/southold-officials-investigating-cyber-incident-affecting-towns-servers/ ; https://www.route-fifty.com/cybersecurity/2026/03/why-small-municipalities-have-become-cybercriminals-favorite-prey/412364/ ; nonprofits "have one IT person on staff" [unverified, NetHope 2025]
- Severity: 5

## Already tried

- **HHS SRA Tool** (free): 156 questions and branching. It suits single-site practices only and gets outgrown.
- **Compliancy Group, Medcurity** (paid HIPAA platforms): where practices go next. No user-review complaints were found.
- **PreVeil, readiness tools, MSPs and consultants** (CMMC): help with preparation but do not remove the $40k-$80k+ C3PAO fee or the documentation work. The pause in Phase 2 undercuts what firms have already spent.
- **Coalition, At-Bay, Cowbell** (SMB cyber insurers): Cowbell offers simpler processes. Coalition's active monitoring "creates a higher-engagement relationship than some small businesses want." None removes the questionnaire burden or the attestation risk. https://seedpodcyber.com/cyber-insurance-carrier-comparison/
- **BetterCloud** (offboarding automation): a median ACV of $45,003 "prices out smaller IT teams", and setup is "time-consuming" and "overwhelming". https://www.g2.com/products/bettercloud/competitors/alternatives
- **Zluri, AccessMule**: cheaper SaaS-access tools. AccessMule launched in June 2025, citing the 87%/90% figures, which suggests the gap was still open. No small-firm reviews were found.
- **DMARC dashboards** (dmarcian, Valimail, PowerDMARC and others): exist because the raw reports are unusable. They are still one more console, and one more purchase, for a non-expert.
- **Eftsure and callback verification**: callback depends on staff discipline, and the tools target finance teams larger than a 10-person firm.

## Open questions

- How long does each chore take? There is no time-to-complete figure for an insurance questionnaire, an SPRS affirmation or a multi-app offboarding at a firm of 5-50 people.
- There are no first-person forum quotes (r/msp, r/sysadmin, r/CMMC, r/HIPAA). Nearly all evidence is surveys, vendor blogs and enforcement releases.
- MSP economics: how many hours per client, per offboarding or per questionnaire, and what does an MSP bill for it?
- How many small DoD suppliers plan to exit rather than comply, and how inflated are self-reported SPRS scores?
- No direct evidence yet of small firms running AI agents on personal or shared keys, or of anything breaking when their owner leaves.
- Admin-console confusion (M365 admin center, Entra, Google Admin) at tiny organizations is asserted but not evidenced in users' own words.
- The final HIPAA Security Rule date and content are unknown. The CMMC review outcome was due around mid-September 2026 and is unconfirmed.

<!-- COMPLETE -->
