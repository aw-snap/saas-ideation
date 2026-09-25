# Scout brief: weak-signals-scout-02 (US regulations and deadlines)

Task id: s1-scout-weak-signals-02
Lens: weak-signals (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25.

## Objective
Find new or changing **US regulations and compliance deadlines**, at federal, state and local level, that newly put manual, error-prone, screen-bound work on small organizations, professionals or households, with effective dates between 2025 and 2027.

## Slice
You own every rule, standard, executive action, trade measure or court-driven obligation whose **issuing authority is a US body**: federal agencies, Congress, state legislatures and agencies, and cities and counties. Map where compliance pain is appearing or about to appear: who has to do what, by when, and on which screen.

## Questions to answer
1. Which US rules have deadlines landing between mid-2025 and 2027, and which were **rescinded, paused, delayed or enjoined** in 2025–2026? Give the current status and its source.
2. Who is newly in scope, especially small businesses, sole practitioners, small clinics, school districts, small contractors and landlords?
3. What does compliance actually require on screen: agency portals, filings, attestations, logs, self-assessments, accessibility remediation, customs and trade paperwork?
4. What are practitioners complaining about, in their own words: cost quotes, hours, confusion, rejected filings, penalties?
5. Which tools, consultants or brokers are they paying today, and what do the reviews say?
6. Which obligations point **computer-centric** work at tiny organizations (cybersecurity attestations, data privacy duties, AI-use disclosures, web accessibility)?

## Search angles and sources
Candidate topics to verify, not facts. Confirm each one's current status and dates by search, and drop any you cannot confirm:
- Federal: CMMC 2.0 for defense subcontractors, the proposed HIPAA Security Rule update, the FTC Safeguards Rule, the end of the de minimis customs exemption and the 2025 tariff changes as they hit small importers and e-commerce sellers, ADA Title II web accessibility for state and local governments, the CFPB rules and their reversals, FinCEN beneficial-ownership changes, the SEC and FINRA recordkeeping rules for off-channel messaging, FDA and CMS rules (for example prior-authorization API deadlines as a burden on payers and providers), and the OSHA heat rule.
- State: Colorado AI Act, California rules (CCPA automated decision-making regulations, SB 53, AI disclosure laws), Texas TRAIGA, Illinois and NYC rules on AI in hiring, state privacy laws taking effect in 2025–2026, state e-invoicing or sales-tax changes, and state short-term-rental registration.
- Local: NYC Local Law 97 emissions reporting, building performance standards, and city short-term-rental registries.

Source types: Federal Register and regulations.gov (including public comment letters, which are full of verbatim pain), state legislature and agency sites, CBP and IRS notices; subreddits such as r/smallbusiness, r/sysadmin, r/msp, r/FulfillmentByAmazon, r/ecommerce, r/Accounting, r/Landlord and r/healthIT; G2 and Capterra reviews of compliance tools; job postings; law-firm client alerts; trade-association surveys; news from 2024 to 2026.

## Evidence standard
- At least **10 findings**. Each finding needs one or more of these: a verbatim quote, a number (cost, hours, count of entities in scope, penalty), or a hard date, plus a working source link.
- Prefer primary sources for dates, and practitioner voices for pain. Public comment letters count as practitioner voices. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.
- Aim for at least 4 findings where the burden lands on a screen: a portal, a filing, a file format, or a software duty.

## Output
Write `outputs/s1-discover/scouts/s1-scout-weak-signals-02.md`, **1500 words max**, in this format:

```
# Scout weak-signals-02: US regulations and deadlines

## Findings
1. **<short title>**: <who is affected, what they must do, by when; 1–3 sentences>
   - Evidence: "<verbatim quote>" / <number> / <date>
   - Screen or work affected: <portal, filing, format, or "not screen-bound">
   - Source: <URL>
2. ...

## Notes
<up to 5 bullets: rescissions or delays spotted, dead ends, leads you could not verify>
```

The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas, no solutions, no "an app could…".**
- Stay inside your slice. The other 4 scouts own the rest: non-US regulations (scout 01), newly opened public data sources and APIs (scout 03), AI-created failure modes (scout 04), and new roles and workflows (scout 05). If a US rule mainly *opens data* (for example price transparency files, CFPB 1033 open banking, or health-data interoperability), cover only the compliance burden it places on the regulated party and leave the newly available data to scout 03.
- Write only your output file. Do not edit any other file.

<!-- COMPLETE -->
