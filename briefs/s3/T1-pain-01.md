# Pain-miner brief: T1-01, pre-service portal work (eligibility, benefits and prior authorization)

Territory T1: payer-portal grind at small medical practices. Half 1 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain in the work a small practice does **before or at the time of service**, inside payer portals (Availity, NaviNet, and each payer's own site such as UHC Provider Portal, Aetna, Cigna, Humana, BCBS plans, Medicaid MCO portals). Find who does it, how often, how long it takes, what it costs, and what goes wrong.

## Boundary of this half
- **In:** eligibility and benefits verification (active coverage, copay, deductible, network status, referral requirements), and prior authorization from start to decision: finding out whether a service needs PA, gathering and uploading clinical attachments, submitting on the portal, polling for status, handling pended or "additional information requested" cases, and peer-to-peer scheduling as it touches the portal. The CMS-0057-F prior-auth API timeline (January 2026 decision times, January 2027 APIs) and which PA steps will stay manual after it belong here.
- **Out, owned by T1-02:** anything after the claim is submitted: claim status, denials, reconsiderations and provider appeals, remittances and recoupments. Also out and owned by T1-02: cross-cutting portal access overhead (logins, MFA, password resets, shared credentials, user provisioning, outages and redesigns). If a source covers both halves, record only the pre-service part.
- **Out of the territory:** clinical documentation itself, patient or family appeals, phone agents for the front desk, dental and pharmacy system-of-record lock-in.

## Questions
1. Which roles (front-desk staff, PA coordinators, medical assistants, nurses, office managers) do eligibility and PA work, in which named portals, and how many checks or requests do they handle per day or week?
2. How long does one eligibility check and one prior auth take end to end, including status polling and resubmissions, and what does that cost in staff time or dollars (CAQH, MGMA, AMA survey figures, plus first-person numbers)?
3. What is the repeated manual action: re-keying demographics, looking up payer-specific PA rules and code lists, uploading clinical notes, refreshing status pages, or copying results back into the practice-management system or EHR?
4. What goes wrong and what does it cost: wrong or stale eligibility leading to later denials, PA lapses, delayed or abandoned care, write-offs? Give counts and dollars.
5. Which parts of PA will still be manual after the CMS-0057-F APIs arrive (payers not covered by the rule, payer-specific rules, attachments, commercial plans), per the rule text or credible commentary?
6. What do practices use today (portal alone, clearinghouse eligibility tools, PA vendors, outsourced or offshore staff), and what do users say those tools still fail at?

## Sources to mine
- Forums and subreddits: r/medicalbilling, r/MedicalCoding, r/medicaloffice, r/FamilyMedicine, r/nursing, r/physicaltherapy, r/Psychiatry, AAPC forums, MGMA community posts. Search phrases such as "prior auth portal", "Availity eligibility wrong", "checking auth status", "pended for clinicals", "every payer has its own portal". If Reddit is blocked, try search-engine results that quote Reddit threads, AAPC forums, Student Doctor Network, and allnurses.
- Reviews of incumbents on G2, Capterra and app stores: Availity, NaviNet, CoverMyMeds, Waystar, Experian Health eligibility, Change Healthcare / Optum tools, Cohere, Infinitus, and small-practice PM/EHR suites with built-in eligibility (Kareo/Tebra, AdvancedMD, athenahealth, DrChrono).
- Job postings (Indeed, LinkedIn, ZipRecruiter) for "prior authorization specialist" and "insurance verification specialist": duties naming portals, volume expectations, and wages.
- Regulator and survey documents: CMS-0057-F rule and fact sheet, AMA prior-authorization physician survey (latest year), CAQH Index (latest year), MGMA Stat polls, KFF prior-auth analyses.
- Complaint threads and news: physician posts, state medical society complaint collections, trade press (Fierce Healthcare, Becker's, Medical Economics) from 2024-2026.

## Evidence standard
- **10-20 pain items.** Each item carries at least one verbatim quote or specific number, with a link, a date, and the role and portal named where the source names them.
- Prefer first-person complaints from staff and billers; Gate B flagged their absence as the main gap in T1. Survey and regulator numbers are welcome but should not be most of the items.
- For every item, give frequency (how often it happens) and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T1-01.md`, 1500 words max:
- a one-line header naming the half (T1-01, pre-service: eligibility and prior auth);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Portal** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T1-02 covers post-service work and portal access overhead.
- Write only your output file.
<!-- COMPLETE -->
