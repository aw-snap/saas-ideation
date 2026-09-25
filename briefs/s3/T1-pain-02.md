# Pain-miner brief: T1-02, post-service portal work (claim status, denials, provider appeals) and portal access overhead

Territory T1: payer-portal grind at small medical practices. Half 2 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain in the work a small practice does **after the claim is submitted**, inside payer portals (Availity, NaviNet, and each payer's own site such as UHC Provider Portal, Aetna, Cigna, Humana, BCBS plans, Medicaid MCO portals). Also collect evidence of the overhead of simply **having access to many portals at all**. Find who does it, how often, how long it takes, what it costs, and what goes wrong.

## Boundary of this half
- **In, post-service:** checking claim status on portals, working denials (reading denial reasons, finding what the payer wants, correcting and resubmitting), provider reconsiderations and appeals submitted through portals, uploading claim attachments and medical records requested after submission, reading remittances and EOBs on portals, recoupments and overpayment letters, and timely-filing deadlines missed because of portal work.
- **In, cross-cutting access overhead:** the number of portals per practice, logins, MFA prompts, password expiry and resets, shared or former-employee credentials, adding and removing users, session timeouts, outages, and portal redesigns or migrations that broke workflows (2024-2026), whichever stage of work they hit.
- **Out, owned by T1-01:** eligibility and benefits checks and prior authorization from start to decision, including PA status polling and the CMS-0057-F prior-auth API timeline. A denial caused by a missing or lapsed PA is in this half only for the denial-handling work; the PA work itself belongs to T1-01.
- **Out of the territory:** clinical documentation, the patient or family side of appeals, phone agents for the front desk, dental and pharmacy system-of-record lock-in.

## Questions
1. Which roles (billers, AR and denial specialists, office managers, outsourced billing companies) work claim status and denials in which named portals, and how many claims or denials do they touch per day or week?
2. How long does one denial or reconsideration take through a portal, and what does denial work cost a small practice (denial rates, cost to rework a claim, share of denials never reworked, write-offs)?
3. What is the repeated manual action: checking claim status payer by payer, decoding denial codes, finding each payer's appeal form or upload path, re-attaching records, tracking deadlines in spreadsheets?
4. How many portals does a practice hold, how much time goes to logins, MFA and password resets, and what breaks when portals change, go down, or when staff leave?
5. Where does portal work fail silently: lost uploads, appeals with no acknowledgment, status pages that disagree with the 835 remittance, missed timely-filing windows? Give counts and dollars.
6. What do practices use today (clearinghouse claim-status tools, RCM platforms, denial-management software, password managers, outsourced billing), and what do users say those tools still fail at?

## Sources to mine
- Forums and subreddits: r/medicalbilling, r/MedicalCoding, r/medicaloffice, r/healthIT, AAPC forums, MGMA community posts, HFMA content. Search phrases such as "denial portal", "reconsideration upload", "claim status Availity", "NaviNet down", "locked out of portal", "MFA every login payer", "timely filing missed". If Reddit is blocked, try search-engine results that quote Reddit threads, AAPC forums, and billing-company blogs that quote clients.
- Reviews of incumbents on G2, Capterra and app stores: Availity, NaviNet, Waystar, Office Ally, Trizetto Provider Solutions, Change Healthcare / Optum, Experian Health denial tools, Tebra/Kareo, AdvancedMD, athenahealth, CollaborateMD.
- Job postings (Indeed, LinkedIn, ZipRecruiter) for "AR follow-up specialist", "denial management specialist", "medical biller": duties naming portals, claim-volume targets, and wages; offshore RCM postings too.
- Regulator and survey documents: CAQH Index (claim-status and attachment transactions, manual vs electronic cost), MGMA Stat polls on portals and denials, KFF analyses of ACA marketplace denial rates, CMS and OIG reports on Medicare Advantage denials and appeals, payer announcements of portal migrations or retirements.
- Complaint threads and news: trade press (Fierce Healthcare, Becker's, Medical Economics, HFMA), state medical society complaint collections, and outage reports for Availity, NaviNet, and the 2024 Change Healthcare cyberattack's effects on small practices.

## Evidence standard
- **10-20 pain items.** Each item carries at least one verbatim quote or specific number, with a link, a date, and the role and portal named where the source names them.
- Prefer first-person complaints from billers and office staff; Gate B flagged their absence as the main gap in T1. Survey and regulator numbers are welcome but should not be most of the items.
- For every item, give frequency (how often it happens) and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T1-02.md`, 1500 words max:
- a one-line header naming the half (T1-02, post-service: claim status, denials, appeals, and portal access);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Portal** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T1-01 covers eligibility and prior authorization.
- Write only your output file.
<!-- COMPLETE -->
