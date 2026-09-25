# Pain-miner brief: T3-01, clinical-practice systems of record (dental, independent pharmacy, veterinary)

Territory T3: locked-in vertical systems of record with API tolls (see `gates/gate-B.md`). Half 1 of 2. Computer-centric: yes.

## Objective
Collect the best first-hand evidence of pain felt by staff at **small dental offices, independent pharmacies and veterinary clinics** who are trapped inside their practice-management or pharmacy system: retyping records between that system and everything else, paying or waiting for API and integration access, and suffering through migrations or vendor changes after acquisitions.

## Exact boundary of this half
- **In:** dental practice management (Dentrix, Eaglesoft, Open Dental, Dentrix Ascend, Curve and similar), independent pharmacy systems (PioneerRx, QS/1, Liberty, BestRx, Rx30 and similar), and veterinary practice management (Cornerstone, Covetrus Pulse/Impromed/AVImark, ezyVet and similar). Covered roles: front desk, office manager, practice owner, pharmacy tech, pharmacist-owner, vet practice manager, and the third-party vendors (reminder, imaging, analytics, inventory tools) who must integrate with these systems.
- **Out (the other half, T3-02, owns these):** auto dealership DMS (CDK, Reynolds), insurance agency management (Applied Epic, AMS360), property management (Yardi, AppFolio, RealPage).
- **Out (other territories):** payer-portal eligibility checks, prior auth and denials (T1); invoice capture and posting to accounting (T2); clinical documentation content; front-desk phone answering.

## Questions
1. Which records do staff re-key by hand between the SoR and another system (for example patient demographics into imaging, lab or reminder tools; inventory and wholesaler orders into the pharmacy system; lab results into the vet PMS)? How many minutes per record and how many records per day?
2. What does the vendor charge or require for API or integration access (per-location monthly fees, "certified partner" programs, per-call fees, data-export fees)? Quote price pages, partner-program terms or first-hand reports, with dates.
3. What happens during a migration off one of these systems: data left behind, conversion fees, weeks of double entry, lost history? Get durations and dollar figures.
4. What changed after acquisitions or ownership changes (Henry Schein One, Covetrus going private, Patterson, pharmacy software roll-ups): price increases, forced cloud moves, support decline, integrations cut off?
5. Which reports or exports can staff not get out of the system without clicking through screens, printing to PDF or calling support?
6. What do job postings reveal about the labor cost (roles that list the software as a required skill, wage bands, "data entry" duties)?

## Sources to mine
- Reviews of incumbents: G2, Capterra, Software Advice and TrustRadius pages for each named product, filtered to 1–3 stars; search terms "API", "integration", "double entry", "export", "support", "price increase". Start from https://www.g2.com/compare/dentrix-vs-eaglesoft , https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews , https://apitracker.io/a/dentrix , https://supergood.ai/api-report-card/pioneerrx .
- Forums and subreddits: r/Dentistry, r/DentalHygiene, r/dentalassistant, r/pharmacy, r/pharmacist, r/PharmacyTechnician, r/veterinary, r/VetTech, r/sysadmin and r/msp threads about dental or vet practices, Dentaltown message boards, VIN (Veterinary Information Network) public posts, Pharmacist Society or NCPA community threads.
- Vendor developer and partner pages, API pricing, end-of-support and migration notices (for example Henry Schein One API/partner program, Covetrus developer program).
- Job postings on Indeed, ZipRecruiter or LinkedIn naming Dentrix, Eaglesoft, PioneerRx, QS/1, Cornerstone or AVImark.
- Trade press and regulator material: Dental Economics, DrBicuspid, Drug Topics, Pharmacy Times, DVM360, Today's Veterinary Business; ONC information-blocking rules or FTC material where they touch data access for these systems.
- Complaint threads: BBB complaints, Trustpilot pages, and posts from third-party developers complaining about integration access.

## Evidence standard
- **10–20 pain items.** Each item has at least one verbatim complaint with a working link, and wherever possible a frequency (how often), a time number (minutes, hours, weeks) or a money number (fees, wages, conversion costs).
- Name the product, the vertical and the role in every item where the source does. Give the source date; prefer 2024–2026 and mark older ones with their year.
- Never invent quotes, numbers or URLs. Mark any claim you could not verify `[unverified]`. Vendor marketing claims count as colour, not as evidence of pain.
- Aim for balance: at least 3 items each from dental, pharmacy and veterinary if the sources exist; say so in Gaps if they don't.

## Output
Write `outputs/s3-ideate/pain/T3-01.md`, 1500 words max:
- a one-line header naming this half;
- `## Pain items`, numbered 1., 2., ...; each item gives who (role, vertical, product), what hurts, how often, what it costs (time or money), the current workaround, a verbatim quote, and `Source: <URL>` with date;
- `## Patterns`, 3–5 bullets grouping items by product or by flow;
- `## Gaps`, naming what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI agent could..." sentences.**
- Stay inside dental, independent pharmacy and veterinary. Anything about dealerships, insurance agencies or property management belongs to T3-02; drop it.
- Write only your output file.
<!-- COMPLETE -->
