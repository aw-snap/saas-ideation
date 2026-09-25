# Scout brief: weak-signals-scout-01 (regulations and deadlines outside the US)

Task id: s1-scout-weak-signals-01
Lens: weak-signals (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25.

## Objective
Find new or changing **regulations and compliance deadlines issued outside the United States** (EU, UK, and the rest of the world) that newly put manual, error-prone, screen-bound work on small and mid-size organizations or on individuals, with effective dates between 2025 and 2027.

## Slice
You own every rule, standard or mandate whose **issuing authority is not a US body**: the EU and its member states, the UK, Canada, Australia, India, Brazil, Japan, the Gulf states, and all others. Map where compliance pain is appearing or about to appear: who has to do what, by when, and on which screen.

## Questions to answer
1. Which non-US rules have deadlines that land between mid-2025 and 2027, and which have been **delayed, simplified or reopened** (for example by the EU "omnibus" simplification packages)? Give the current date and its source.
2. Who is newly in scope, especially small firms, sole traders, micro-exporters, landlords, clinics and schools that have never had a compliance function before?
3. What does compliance actually require on screen: filling in portals, keeping registers, reporting, labelling, running accessibility audits, e-invoicing formats, evidence packs?
4. What are practitioners complaining about, in their own words: cost quotes, hours per month, confusion about scope, rejected submissions, fines?
5. Which tools or consultants are they paying today, and what are the reviews saying?
6. Which obligations point **computer-centric** work at tiny organizations (IT and security duties, software supply-chain duties, AI-system duties, digital reporting)?

## Search angles and sources
Candidate topics to verify, not facts. Confirm each one's current status and dates by search, and drop any you cannot confirm:
- EU AI Act obligations (GPAI, high-risk, AI literacy, transparency or labelling), NIS2 national transpositions, the Cyber Resilience Act reporting duties, DORA, the European Accessibility Act, the eIDAS 2 digital identity wallet, VAT in the Digital Age and national e-invoicing mandates (Belgium, France, Poland, Germany), CSRD and CSDDD after simplification, EUDR, CBAM, the Digital Product Passport and ESPR, the Data Act, and the Pay Transparency Directive.
- UK: Economic Crime Act identity verification at Companies House, Making Tax Digital for Income Tax, the Online Safety Act, and the Procurement Act.
- Rest of world: India DPDP Rules, Australia's privacy reforms and scams framework, Canada, Brazil, Japan, Saudi Arabia and UAE e-invoicing phases, and anything else search turns up.

Source types: official journals and regulator sites (eur-lex.europa.eu, gov.uk, national tax authorities, data protection authorities); practitioner forums and subreddits (r/UKPersonalFinance, r/smallbusinessuk, r/gdpr, r/sysadmin, r/eupersonalfinance, accountancy forums); G2, Capterra and Trustpilot reviews of compliance tools; job postings for new compliance roles; law-firm and Big Four client alerts; trade-association surveys; news from 2024 to 2026.

## Evidence standard
- At least **10 findings**. Each finding needs one or more of these: a verbatim quote, a number (cost, hours, count of firms in scope, fine), or a hard date (effective date or deadline), plus a working source link.
- Prefer primary sources for dates, and practitioner voices for pain. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.
- Aim for at least 4 findings where the burden lands on a screen: a portal, a register, a file format, or a software duty.

## Output
Write `outputs/s1-discover/scouts/s1-scout-weak-signals-01.md`, **1500 words max**, in this format:

```
# Scout weak-signals-01: non-US regulations and deadlines

## Findings
1. **<short title>**: <who is affected, what they must do, by when; 1–3 sentences>
   - Evidence: "<verbatim quote>" / <number> / <date>
   - Screen or work affected: <portal, register, format, or "not screen-bound">
   - Source: <URL>
2. ...

## Notes
<up to 5 bullets: delays or reversals spotted, dead ends, leads you could not verify>
```

The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas, no solutions, no "an app could…".**
- Stay inside your slice. The other 4 scouts own the rest: US regulations (scout 02), newly opened public data sources and APIs (scout 03), AI-created failure modes (scout 04), and new roles and workflows (scout 05). If a non-US rule mainly *opens data* (for example an open-data or data-access mandate), cover only the compliance burden it places on organizations and leave the new dataset itself to scout 03.
- Write only your output file. Do not edit any other file.

<!-- COMPLETE -->
