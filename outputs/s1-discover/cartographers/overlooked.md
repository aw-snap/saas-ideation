# Cartographer: overlooked — candidate territories

Lens: underserved people and roles that vendors ignore because they look small, unglamorous, non-English, rural, elderly, informal or low-margin. Sources are the five overlooked scout files (`outputs/s1-discover/scouts/s1-scout-overlooked-01.md` to `-05.md`). Every link below comes from those files. Anything the scouts marked `[unverified]` is still marked that way here.

---

## A. The lone back office in tiny nonprofits and local government (scout 01)

### overlooked-01 — Nonprofit filing deadlines and automatic loss of exemption
- **Description:** Volunteer treasurers and part-time bookkeepers at micro nonprofits have to file the 990, 990-EZ or 990-N e-Postcard every year. If they miss three years in a row, the IRS revokes tax-exempt status automatically, "without warning," and the revocation can't be appealed. Nobody watches the deadline, and the work happens across IRS portals.
- **computer-centric:** yes. The e-Postcard portal and the IRS exempt-organization lookup are both on screen.
- **Signal:** medium. The mechanism is documented, but the scout found no count of how often it happens.
- **Evidence:** https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption-for-nonfiling-overview ; https://www.501c3.org/501c3-status-revoked/
- **Overlap:** close to overlooked-02 (a compliance calendar for the same person) and overlooked-21 (deadline-driven court filings).

### overlooked-02 — Multi-state charitable solicitation registration
- **Description:** A one-person development or admin office has to register in every state it fundraises in. That means 39 states plus DC, each with its own forms, fees, renewal cycle and portal. The Unified Registration Statement that once tried to unify this is "no longer useful" because nobody maintained it. Staff rekey the same organization data into dozens of state systems.
- **computer-centric:** yes. Every state runs its own filing portal, and none of them has an API.
- **Signal:** strong.
- **Evidence:** https://www.fundraisingregistration.com/about/news/what-you-need-to-know-about-multi-state-registration-for-charitable-solicitations/ ; https://www.councilofnonprofits.org/running-nonprofit/governance-leadership/state-filing-requirements-nonprofits
- **Overlap:** overlooked-01. It is also close to screen-work territories about government portals with no API.

### overlooked-03 — Fund accounting forced into small-business ledgers (churches, HOAs, volunteer treasurers)
- **Description:** Church secretaries, volunteer treasurers and HOA board members keep donor-restricted or community funds in QuickBooks or in rigid HOA tools. QuickBooks doesn't model donor restrictions. Month-end closes reportedly take up to 40 hours, contribution statements are built by hand, and HOA reports are "rigid" with little customization. The paid roles are 10–15 hours a week at about $20 an hour.
- **computer-centric:** yes. The work is QuickBooks, spreadsheets and HOA SaaS.
- **Signal:** medium. The evidence is vendor blogs, Capterra reviews and job posts. The volunteer-treasurer hours are `[unverified]`.
- **Evidence:** https://www.getkleercard.com/blogs/quickbooks-for-churches-what-it-does-well-and-what-it-misses ; https://www.capterra.com/p/146693/PayHOA/reviews/ ; https://www.ziprecruiter.com/Jobs/Church-Bookkeeper
- **Overlap:** overlooked-06 (the same financial data gets repackaged for funders) and overlooked-21 (guardian accounting is similar bookkeeping).

### overlooked-04 — IT and security hygiene for one-person town and nonprofit offices
- **Description:** Town clerks, water-billing staff and micro-nonprofit admins have no IT staff. One ransomware hit took down Southold, NY's email and servers, and the supervisor said "If we have to go back to pen and paper, we will." Micro nonprofits trigger technology-risk flags on 65% of survey answers, against 34% for large ones.
- **computer-centric:** yes. The work is backups, accounts, offboarding and phishing resilience.
- **Signal:** strong. The NTEN survey and a named 2025 incident back it. The municipal ransomware statistics are `[unverified]`.
- **Evidence:** https://northforksun.com/southold-officials-investigating-cyber-incident-affecting-towns-servers/ ; https://word.nten.org/wp-content/uploads/2024/04/2024-Nonprofit-Digital-Investments-Report.pdf ; https://warrenaverett.com/insights/three-lessons-that-all-organizations-can-learn-from-recent-ransomware-attacks-on-municipalities/ `[unverified]`
- **Overlap:** overlooked-09 (a pharmacy whose clearinghouse is knocked out is the same fragility in another setting). It likely duplicates screen-work "IT chores in tiny orgs," which Gate B should dedupe.

### overlooked-05 — Volunteer fire department incident reporting (NFIRS)
- **Description:** Volunteer fire-department officers and admin staff file incident reports in the federal NFIRS schema. They complain of "duplicate entry, officers getting reports kicked back over coding mistakes," and admins "chasing missing reports at the end of the month." Federal grants require NFIRS compliance, so skipping it isn't an option.
- **computer-centric:** yes. The work is reporting software and the federal schema.
- **Signal:** medium. The evidence is vendor blogs plus a 2022 Federal Register notice, which falls outside the 2024–2026 window.
- **Evidence:** https://blog.resgrid.com/nfirs-fire-reporting/ ; https://www.responserack.com/nfirs/ ; https://www.federalregister.gov/documents/2022/12/09/2022-26766/agency-information-collection-activities-proposed-collection-comment-request-national-fire-incident
- **Overlap:** overlooked-07 and overlooked-08 share the same shape: mandated reporting into a rigid government schema.

### overlooked-06 — Repackaging the same data into many funder report formats
- **Description:** A part-time grants coordinator at a small nonprofit reformats the same financial and program data into each funder's own application and reporting format. Research frames this burden as imposed by funders' choices, not by the nonprofit. Grant management is described as "almost always under-resourced."
- **computer-centric:** yes. The work is documents, spreadsheets and funder portals.
- **Signal:** weak to medium. The CEP hours figure and the Wiley paper are `[unverified]` at abstract level.
- **Evidence:** https://www.instrumentl.com/blog/grant-management-guide ; https://onlinelibrary.wiley.com/doi/full/10.1002/nvsm.70064 `[unverified]`
- **Overlap:** overlooked-03 and overlooked-02 (the same organization data is entered again and again).

---

## B. Unglamorous low-margin verticals on unmodernized software (scout 02)

### overlooked-07 — Pawn and secondhand dealers' mandated police reporting
- **Description:** Pawnshop owners and staff must report every pawn or purchase to police databases (LEADS Online and others) by the next business day, and within 24 hours in Washington. In California, late reporting carries jail time and fines of up to $25,000 for repeat offenses, plus loss of license. Vendors still sell "PDF/email reporting to police" as a feature.
- **computer-centric:** yes. Staff move data from the POS to a police portal.
- **Signal:** strong. Statute text and penalties are documented.
- **Evidence:** https://www.simmrinlawgroup.com/california-business-and-professions-code-section-21628/ ; https://app.leg.wa.gov/rcw/default.aspx?cite=19.60&full=true ; https://hostmerchantservices.com/articles/pawn-shop-pos/
- **Overlap:** overlooked-08 (same pattern: state-by-state government portal, penalty for lateness).

### overlooked-08 — Tow and impound yards' DMV owner and lienholder notifications
- **Description:** A tow-yard office manager has to look up owner and lienholder records in each state's DMV and send lien or notification letters for every nonconsensual tow. Multi-state DMV access is sold as a paid add-on, and states like Connecticut built their own one-off towing portals. The work is jurisdiction-by-jurisdiction manual lookups.
- **computer-centric:** yes. The work runs through state DMV portals.
- **Signal:** medium. The evidence is a vendor page and a government page, with no user quotes.
- **Evidence:** https://vts-systems.com/impound-software/ ; https://portal.ct.gov/DMV/Dealers-and-Repairs/Dealers-and-Repairs/Towing-Portal-System
- **Overlap:** overlooked-07.

### overlooked-09 — Independent pharmacy PBM audits and claims fragility
- **Description:** In an independent pharmacy, the owner and one office manager rebuild records by hand for PBM audits, and missing a deadline waives the appeal. The February 2024 Change Healthcare attack left pharmacies unable to process claims for weeks, and Maine had to make emergency interim payments.
- **computer-centric:** yes. The work runs through PBM portals, claims clearinghouses and Medicaid portals.
- **Signal:** strong. It is backed by a state government notice and trade press.
- **Evidence:** https://www.healthlawalliance.com/blog/what-a-pbm-audit-costs-an-independent-pharmacy ; https://www.managedhealthcareexecutive.com/view/change-healthcare-outage-prompts-switch-in-pharmacy-claims-processing-cranks-up-tensions-between-independent-pharmacies-and-pbms ; https://www11.maine.gov/dhhs/news/mainecare-announces-interim-payments-local-pharmacies-during-vendor-network-disruption-mon-03042024-1200
- **Overlap:** overlooked-04 (a small operation with no IT) and overlooked-19 (prior-auth and payer paperwork seen from the patient side).

### overlooked-10 — Small insurance agencies locked into legacy agency-management systems
- **Description:** Owners and office managers at independent insurance agencies run on-premise or legacy systems (Applied Epic, AMS360, Zywave/ITC) that take 3–6 months to implement. One agency reported its client data "held hostage for almost 2 months" in a vendor dispute. Price jumps of 45% are reported `[unverified]`, and a 2021 breach exposed data on 4M+ customers.
- **computer-centric:** yes.
- **Signal:** medium. The evidence is forum posts and vendor blogs, and the breach is older than the 2024–2026 window.
- **Evidence:** https://glovebox.io/blog/best-insurance-agency-management-systems/ ; https://www.insurance-forums.com/community/threads/problems-with-zywave.107556/ ; https://topclassactions.com/lawsuit-settlements/privacy/data-breach/zywave-data-breach-exposed-insurance-agency-customers-alleges-class-action-lawsuit/
- **Overlap:** overlooked-11 and overlooked-13 fit a cross-cutting pattern: vertical vendors change hands through private-equity or corporate acquisition, and small operators then get worse support, price hikes or data lock-in.

### overlooked-11 — Small veterinary practices rekeying between practice software and lab or ICU systems
- **Description:** Vet techs and office managers say their practice software "does not communicate with our lab machines... ICU treatment software" and that they "waste literal hours" waiting for it to load before entering charges. Support for Covetrus and Impromed reportedly slipped after the acquisition, from same-day fixes to waits of several days.
- **computer-centric:** yes. The work is Cornerstone and Covetrus Pulse screens.
- **Signal:** medium. The evidence is Capterra reviews with vivid verbatim quotes.
- **Evidence:** https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews ; https://capterra.com/p/130107/Covetrus-Pulse/reviews/?page=2
- **Overlap:** overlooked-10 (the acquisition pattern). It is also close to screen-work "rekeying between screens."

### overlooked-12 — Small freight brokers on brittle legacy TMS and EDI
- **Description:** Brokers and dispatchers at small freight brokerages describe old TMS setups where "EDI connections failed daily and tracking records couldn't be accessed." Newer tools break integrations too, with "API/webhook specs changing without notice." The industry is described as "riddled with legacy systems and manual processes" `[unverified attribution]`.
- **computer-centric:** yes.
- **Signal:** medium. The evidence is Capterra reviews.
- **Evidence:** https://capterra.com/p/146697/Teknowlogi-TAI-TMS/reviews/?page=2 ; https://capterra.com/p/146697/Teknowlogi-TAI-TMS/reviews/ ; https://www.g2.com/products/freight-genius-tms/discuss
- **Overlap:** overlooked-27 (owner-operator truckers sit on the carrier side of the same market).

### overlooked-13 — Funeral homes: price-rule compliance and legacy management software
- **Description:** Funeral directors and small staffs face FTC Funeral Rule enforcement. In a 2024 undercover sweep, 37 of 278 providers quoted different prices for the same service, and 39 homes got warning letters. Their management software (FDMS and similar) has changed owners repeatedly through private-equity sales, and support has reportedly declined `[vendor-authored claim]`.
- **computer-centric:** partly. Price compliance happens over the phone and on paper, while the management system is on screen.
- **Signal:** medium for the FTC evidence, weak for the software pain.
- **Evidence:** https://www.ftc.gov/news-events/news/press-releases/2024/11/ftc-staff-issues-report-undercover-funeral-rule-phone-sweep ; https://devaims.com/blog/fdms-alternatives
- **Overlap:** overlooked-10 (the acquisition pattern) and overlooked-23 (death admin seen from the family side).

---

## C. Non-English speakers, immigrants and cross-border lives (scout 03)

### overlooked-14 — High-stakes immigration filings: bad translation and unauthorized "help"
- **Description:** Asylum seekers and USCIS applicants submit machine-translated forms and documents. About 40% of the Afghan asylum cases one translator reviewed had machine-translation errors, and one applicant spent 6 months in detention. A raw translation without a signed certification invites an RFE, which adds 3–5 months. Notario fraud (about $20k per victim in one 2025 case) fills the gap.
- **computer-centric:** yes. The work is forms, document uploads and translation tools.
- **Signal:** strong. The problem is well documented, though the Context article is from 2023 and the RFE and translation sources are `[unverified]` secondary sources.
- **Evidence:** https://www.context.news/ai/ais-insane-translation-mistakes-endanger-us-asylum-cases ; https://translatedpage.com/google-translate-immigration-application-denied/ `[unverified]` ; https://law.umn.edu/news/2025-11-06-prof-ana-pottratz-acosta-interviewed-wcco-news-about-fraud-case-immigrants-offered
- **Overlap:** overlooked-15 (AI translation quality) and overlooked-16.

### overlooked-15 — Low-resource and Indigenous languages where AI translation fails dangerously
- **Description:** People who speak Pashto, Kurdish Sorani, Farsi, Arabic, Marshallese or Mayan languages turn to AI chat for health and legal self-help and get worse answers. In one test, chest-pain symptoms got herbal-remedy advice in every non-English language. Clinics hire scarce bilingual workers for Marshallese and Mayan because no tool covers those languages.
- **computer-centric:** yes. The work happens in AI chat and translation tools.
- **Signal:** strong. The source is a September 2025 study with 655 evaluations by 8 linguists.
- **Evidence:** https://respondcrisistranslation.org/en/blog/2025-0915-lost-in-ai-mistranslation-llms-put-to-the-test ; https://accessdubuquejobs.com/job/new-job-9238/
- **Overlap:** overlooked-14 and overlooked-16.

### overlooked-16 — Language access in health and benefits after the 2025 rollback
- **Description:** 28.5M limited-English-proficiency (LEP) residents in the US lost a federal language-access mandate when EO 13166 was revoked in March 2025. Community interpreter jobs are being cut at the same time. Children fill in as interpreters at medical, legal and school appointments, sometimes missing school to do it. Providers are confused about what they still must offer.
- **computer-centric:** no. Most of this is live interpretation and intake, although forms and portals are part of it.
- **Signal:** strong. The sources are KFF, MPI and KFF Health News.
- **Evidence:** https://www.kff.org/racial-equity-and-health-policy/overview-of-health-coverage-and-care-for-individuals-with-limited-english-proficiency/ ; https://www.migrationpolicy.org/news/official-english-order-language-access ; https://kffhealthnews.org/public-health/medical-interpreter-funding-staff-cuts-patient-lives-english-language-services/
- **Overlap:** overlooked-15 and overlooked-19 (benefits paperwork). It is also relevant to weak-signals as a regulatory shift.

### overlooked-17 — Monolingual local enrollment and registration systems (school districts, foreigner offices)
- **Description:** Limited-English parents enrolling children face district systems that only work in one language. A September 2025 audit in NYC found English learners (ELL) received services late or not at all, and 17% of NYC students are ELL. Germany's Ausländerbehörde offices work in German only, and one had about 20,000 unanswered appointment emails.
- **computer-centric:** partly. There are enrollment portals and email queues, but also in-person meetings.
- **Signal:** medium. The German source is a blog `[unverified]`.
- **Evidence:** https://nonprofitquarterly.org/advocates-seek-to-end-schools-immigrant-language-access-gap/ ; https://theberlinlife.substack.com/p/according-to-a-survey-the-auslanderbehorde `[unverified]`
- **Overlap:** overlooked-16.

### overlooked-18 — Immigrant and foreign micro-sellers facing US tax paperwork
- **Description:** Immigrant and foreign-national sellers on Amazon and similar platforms have to handle W-8BEN, 1099-K reconciliation and IRS notices. The IRS translates some general material into a few languages, but not the platform-specific tax logic. Getting it wrong risks "a huge tax liability for the foreign seller."
- **computer-centric:** yes. The work is seller dashboards, tax forms and IRS notices.
- **Signal:** weak. There is one accounting-firm source, `[unverified]` date.
- **Evidence:** https://oandgaccounting.com/amazon-foreign-sellers-irs-taxes-and-1099-k-reporting/ ; https://www.irs.gov/node/84841
- **Overlap:** overlooked-28 (1099 thresholds for informal sellers).

---

## D. Elderly people, family caregivers, disabled people, fiduciaries and death admin (scout 04)

### overlooked-19 — Family-side insurance and benefits paperwork (Medicaid renewals, Medicare Advantage prior-auth appeals)
- **Description:** Family caregivers handle portals, faxes and phone trees for a parent's coverage. 71% of Medicaid unwinding terminations were procedural, such as incomplete paperwork, not ineligibility. Medicare Advantage plans denied 4.1M prior-auth requests in 2024, and families appealed only 12% of them, but more than 80% of appeals won. Disabled enrollees struggle most with recertification.
- **computer-centric:** yes. The work is state portals, uploads, fax and payer portals.
- **Signal:** strong. The sources are KFF, CBPP and NIH.
- **Evidence:** https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/ ; https://www.cbpp.org/research/health/unwinding-watch-tracking-medicaid-coverage-as-pandemic-protections-end ; https://pmc.ncbi.nlm.nih.gov/articles/PMC12343369/
- **Overlap:** overlooked-09 (payer paperwork from the provider side) and overlooked-16.

### overlooked-20 — Home-health aides fighting failing EVV clock-in apps
- **Description:** Home-health aides use state-mandated electronic visit verification (EVV) apps such as HHAeXchange. They report "3/4 times a month... unable to clock in/out," GPS that fails inside the client's house, and apps that need the client's home wifi. Hours the app misses go unpaid and turn into billing disputes for the agency.
- **computer-centric:** yes. The work happens in a mobile app.
- **Signal:** medium. The evidence is verbatim App Store reviews from one source.
- **Evidence:** https://apps.apple.com/us/app/hhaexchange/id883673336
- **Overlap:** overlooked-26 (a low-wage worker whose pay depends on an opaque app).

### overlooked-21 — Court-appointed guardians' annual accounting and reports
- **Description:** Family guardians and conservators, often unpaid, file state-specific annual well-being reports and accountings with hard deadlines. Minnesota uses MyMNGuardian (since April 2024), Texas takes calendar-year reports only after January 1, and New York's are due every May. The underlying bookkeeping is manual and then gets squeezed into narrow court portals.
- **computer-centric:** partly. Filing uses court portals, but the accounting is manual bookkeeping.
- **Signal:** medium. There are three state court sources, but no user quotes on pain.
- **Evidence:** https://mncourts.gov/help-topics/guardianship/complaint-process ; https://txcourts.gov/jbcc/compliance/annual-reporting/ ; https://www.nycourts.gov/guardianship-matters-elder-justice/manual-initial-annual-reports
- **Overlap:** overlooked-22 and overlooked-03.

### overlooked-22 — Watching an aging parent's money: daily money managers and fraud
- **Description:** Adult children and paid daily money managers ($44k–$69k a year) handle bill-pay portals, decode medical bills and log into many accounts per client. They also try to catch fraud. Elder fraud losses reported to the FBI hit $4.9B in 2024, with complaints up 46%, and the FTC estimates true losses could reach $82B. Tech-support scams and gift cards lead.
- **computer-centric:** yes. The work is multi-account portals and email or phone fraud vectors.
- **Signal:** strong. The fraud data comes from the FBI and FTC. The DMM role data is job aggregators.
- **Evidence:** https://www.aarp.org/money/scams-fraud/fbi-report-fraud-2024/ ; https://www.cnbc.com/2025/12/13/financial-fraud-seniors-ftc.html ; https://www.ziprecruiter.com/Jobs/Daily-Money-Manager
- **Overlap:** overlooked-21 and overlooked-23.

### overlooked-23 — Death admin: settling a parent's estate across institutions
- **Description:** Executors and adult children have to send the same certified death certificate, ID and probate papers to each bank, agency and account one at a time. Accounts freeze as soon as the institution learns of the death. Closing them takes "a few weeks to several months," and nothing is shared between institutions.
- **computer-centric:** yes. The work is repeated uploads and forms at each institution.
- **Signal:** weak to medium. There is one consumer-finance aggregator source.
- **Evidence:** https://www.elayne.com/resources/how-to-close-a-bank-account-after-someone-dies
- **Overlap:** overlooked-22 and overlooked-13.

### overlooked-24 — Disabled and older users locked out of benefit and government websites
- **Description:** Disabled and older people using SSA, Medicaid and DMV portals are waiting longer for accessibility fixes. In April 2026 the DOJ pushed ADA Title II web deadlines to 2027 and 2028, citing "limits of generative artificial intelligence for remediation." Website accessibility lawsuits rose 27% in 2025 to 3,117. Only 78% of people 65+ own a smartphone.
- **computer-centric:** yes. The work is web portals and remediation.
- **Signal:** strong. The sources are the Federal Register and Seyfarth data.
- **Evidence:** https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web ; https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/ ; https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/
- **Overlap:** overlooked-19. It is also a deadline story for weak-signals, where the buyer is small governments rather than the users.

---

## E. Rural, agricultural, field and informal workers (scout 05)

### overlooked-25 — Small produce growers and packers facing FSMA 204 traceability
- **Description:** Growers and packers with foods on the Food Traceability List must keep lot-code traceability records and share them with trading partners. There is no small-business carve-out above about $25k in produce sales. Enforcement slipped to July 2028. About 21% of producers have no internet, and only about half of farms have broadband.
- **computer-centric:** yes. The work is record-keeping systems and data sharing, though connectivity is limited.
- **Signal:** medium. The rule is documented, but the scout found no grower quotes.
- **Evidence:** https://www.federalregister.gov/documents/2025/08/07/2025-14967/requirements-for-additional-traceability-records-for-certain-foods-compliance-date-extension ; https://foodready.ai/blog/fsma-204/ ; https://investigatemidwest.org/2024/05/15/graphic-high-speed-internet-access-for-farmers-varies-by-state/
- **Overlap:** overlooked-29. It is also a weak-signals deadline.

### overlooked-26 — Gig workers appealing opaque deactivations
- **Description:** An estimated 5–8% of delivery and rideshare drivers face a deactivation or appeal each year, which works out to 250k–440k events. In one case income fell from $900 to $500 a week after an opaque fraud flag. Appeals run into arbitration, and small claims is the one way out. NYC forced up to 10k Uber Eats reinstatements, and the EU Platform Work Directive has to be in national law by December 2026.
- **computer-centric:** yes. Everything is mediated by the app.
- **Signal:** medium to strong. The AOL date and terms.law are `[unverified]`.
- **Evidence:** https://gridwise.io/blog/gig-driver-deactivation-appeal ; https://wageindicator.org/what-we-do/news-stories/gig-blog/2025/platform-workers-deactivation/ ; https://cms.law/en/bel/legal-updates/from-gig-to-guarantee-how-the-eu-is-transforming-platform-work
- **Overlap:** overlooked-20 and overlooked-28.

### overlooked-27 — Owner-operator truckers' operating-authority and compliance paperwork
- **Description:** Independent owner-operators handle authority and state utility commission (PUC) filings themselves; one waited 1.5 months while OOIDA sorted out an email dispute. They also live under the Hours-of-Service clock enforced by ELD apps, and OOIDA has petitioned the FMCSA to allow a pause.
- **computer-centric:** partly. There are authority portals and ELD apps.
- **Signal:** weak. The evidence is one forum thread, `[unverified]` date, plus a news item.
- **Evidence:** https://www.thetruckersreport.com/truckingindustryforum/threads/own-authority-paperwork.2353424/ ; https://www.thetruckersreport.com/news/ooida-pushes-hours-service-rule-change/
- **Overlap:** overlooked-12.

### overlooked-28 — Informal workers and sellers with no income proof or dispute layer
- **Description:** Nannies, day laborers, casual sellers and Facebook Marketplace sellers lack pay stubs and income documentation for loans and rentals. The thresholds keep moving: 1099-K went back to $20k and 200 transactions, and 1099-NEC rises to $2k in 2026, but tax is still due above $400 of net earnings. Marketplace seller protection is US-only, capped at $500, and has no chargeback disputes.
- **computer-centric:** partly. The work is phone apps, pay-stub generators and marketplace DMs.
- **Signal:** medium. There are many sources, but several are commercial blogs `[unverified]`.
- **Evidence:** https://www.1099online.com/blog/form-1099-k-threshold/ ; https://www.thepaystubs.com/blog/paystubs/make-pay-stub-for-nanny ; https://www.underpriced.app/blog/facebook-marketplace-scams-to-avoid-2026
- **Overlap:** overlooked-18, overlooked-26 and overlooked-20.

### overlooked-29 — Farmers applying for disaster aid on in-person, paper-heavy processes
- **Description:** Farmers and ranchers have to apply at their local FSA office within 8 months of a designation, bringing financial records, loss documentation and proof that commercial credit wasn't available. The American Relief Act put $30B+ into this, and the Supplemental Disaster Relief Program closes on September 30, 2026. About a fifth of producers have no internet.
- **computer-centric:** no. The process is in person and on paper.
- **Signal:** medium.
- **Evidence:** https://www.fsa.usda.gov/resources/disaster-recovery/20232024-supplemental-disaster-assistance ; https://farmersnavigator.com/programs/disaster-assistance ; https://www.hoosieragtoday.com/2024/08/18/almost-one-quarter-of-farmers-dont-have-internet-access/
- **Overlap:** overlooked-25.

---

## Cross-cutting patterns (for Gate B, not territories)
- **Mandated reporting into rigid, state-by-state government portals** (01, 02, 05, 07, 08, 21): the penalty for lateness is severe, the data is the same each time, and there is no API.
- **Vertical vendors acquired by private equity or corporations, then worse support and data lock-in** (10, 11, 13): small operators can't switch.
- **Low-resource-language gaps** (14, 15, 16, 17): AI translation is used unsupervised in exactly the places where errors are costly.
- **A proxy doing admin on someone else's behalf** (19, 21, 22, 23): a family member or fiduciary logs into many institutions for another person.

## Gaps
- **Remittance costs** (World Bank Q3 2025 global average 6.36%) appeared only as adjacent evidence. Scouts gathered no screen-level pain, so it isn't a territory.
- **No hard counts for** IRS automatic revocations, how often NFIRS reports get kicked back, or how many hours it takes to rebuild records for a PBM audit.
- **Almost no evidence outside the US** apart from the German Ausländerbehörde (a blog) and the EU Platform Work Directive. Nothing covers non-English software markets, LMIC informal workers beyond GSMA aggregates, or rural areas outside the US.
- **Direct verbatim user voice is thin** for guardians, tow yards, funeral homes, FSMA growers and daily money managers. Most of those findings rest on regulators or vendors.
- **Willingness to pay** is barely evidenced. The exceptions are Nest Payroll at $42 a month, DMM salaries and part-time church bookkeeper wages.
- **Several sources are older than 2024** (Zywave breach 2021, NFIRS notice 2022, Context asylum article 2023, Jornaler@ app), and a number of dates are `[unverified]`.

<!-- COMPLETE -->
