# Scout brief: screen-work-01, government, payer and regulator portals with no API

Lens: screen-work (the computer lens). Slice 1 of 5. Computer-centric: yes.

## Objective
Map the people who lose hours to **web portals run by someone else**: government agencies, tax authorities, courts, licensing boards, customs, insurers and payers, where there is no API (or only one that is closed or partner-only) and the work is retyping, uploading, re-checking status and downloading documents by hand.

## Questions to answer
1. Which roles (for example medical billers, prior-auth coordinators, customs brokers, payroll and sales-tax preparers, permit expediters, court e-filing paralegals, immigration paralegals, freight carriers on state DOT portals) spend the most hours inside which named portals, and how many hours per week or per case do they report?
2. What exactly is the repeated action: re-keying the same data into several portals, polling for status changes, downloading notices, filling multi-page forms, or reconciling what the portal says against internal records?
3. Which portals are notorious (by name) for outages, session timeouts, CAPTCHAs, MFA friction, or redesigns that break people's workflows, and when did those changes happen (2024–2026)?
4. Does any API exist (public, partner-only, planned)? Cite the agency's developer page or its absence, and any announced API or modernization program with dates.
5. Who pays for the pain today: in-house staff, outsourced BPO or offshore teams, or per-filing service bureaus? Find prices, headcounts or wages if you can.
6. What regulatory deadlines or rule changes in 2024–2026 raise the volume or the stakes of this portal work (for example CMS prior-authorization rules, e-invoicing mandates, BOI reporting changes)?

## Search angles and source types
- Subreddits: r/medicalbilling, r/MedicalCoding, r/paralegal, r/Accounting, r/taxpros, r/CustomsBroker, r/FreightBrokers, r/immigration, r/govtech. Search phrases such as "portal down again", "have to log into every", "no way to bulk upload", "copy paste into the portal".
- Professional forums and community sites (for example AAPC forums, Bogleheads tax threads, state CPA society forums).
- Regulator and government sites: agency developer or API pages, modernization roadmaps, CMS interoperability and prior-authorization rule pages, IRS and state revenue e-services notices, court e-filing system announcements, GAO or inspector-general reports on legacy systems.
- Job postings (Indeed, LinkedIn) whose duties list named portals ("enter authorizations into Availity, NaviNet and payer portals"). Count them if possible.
- G2, Capterra and app-store reviews of existing portal-automation or RPA vendors in this space, to see what they still fail at.
- Industry reports and surveys, such as CAQH Index, MGMA and AMA prior-auth surveys, and news from 2024–2026.

## Evidence standard
- At least **10 findings**. Each has a verbatim quote or a specific number, a date, and a working source URL.
- Name the portal and the role in every finding where the source does.
- Prefer sources from 2024–2026. Mark older ones with their year. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s1-discover/scouts/s1-scout-screen-work-01.md`:
- a one-line header naming the slice;
- numbered findings (`1.`, `2.`, ...), each 1–4 sentences with the quote or number, the date, and `Source: <URL>`;
- a short `## Patterns` section (3–5 bullets) grouping the findings by role or portal;
- a short `## Gaps` section naming what you looked for and could not find.
- 1500 words max. The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. No product ideas, no solutions, no "an AI could..." sentences.
- Stay inside this slice: portals **operated by an outside party** (government, payer, insurer, court, regulator). The other 4 scouts own the rest: software a business installs or licenses itself (scout 02), glue work across email, PDFs, spreadsheets and horizontal SaaS (scout 03), IT and security admin in tiny organizations (scout 04), and software used by AI agents (scout 05).
- Write only your output file.
<!-- COMPLETE -->
