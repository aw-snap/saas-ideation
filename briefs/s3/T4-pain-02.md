# Pain-miner brief T4-02: licensed small businesses and court filers reporting into government portals

Territory: T4, mandated reporting into no-API government portals by tiny organizations (see `gates/gate-B.md`, section T4). Read `config/context.md` first.

## Objective
Find and document the strongest evidence of pain felt by **small licensed businesses and small court filers** that must push the same records into police, DMV and court portals on a legal clock, with no admin staff to do it. You collect pain only: who suffers, how often, what it costs, and what they use today.

## Boundary of this half (segment: licensees and court filers)
**In:**
- Pawn shops and secondhand dealers (including scrap metal, precious metals and electronics buyers) reporting transactions to police, often by the next business day, via state or municipal systems (for example LeadsOnline, BWI RAPID, state-run portals); fines up to $25k.
- Tow yards and storage lots doing DMV owner and lienholder lookups, mailing notices, and filing abandoned-vehicle and lien-sale paperwork through state DMV portals (for example the Connecticut towing portal).
- Professional or court-appointed guardians and conservators filing annual accountings and reports with probate courts.
- Small law firms, solo lawyers and paralegals e-filing across jurisdictions with different court e-filing systems, formats and outage rules.

**Out (belongs to T4-01 or other territories):** charitable solicitation registration, 990-N and automatic revocation, NFIRS/NERIS fire reporting (all T4-01); the family caregiver's personal benefits and bank portals (T8); tax and customs filings by sellers; payer portals (T1); AI-hallucinated citations in filings (T7); dealer management systems (T3).

## Questions (answer each with evidence)
1. Who does the reporting in these businesses (owner, counter clerk, office manager, paralegal, professional guardian), and how many minutes per transaction or hours per week or per filing does it take?
2. What goes wrong most often: late or missed reports, duplicate entry between the point-of-sale or case system and the government portal, rejected filings, portal outages, differing rules per city, county or court? How often, and with what consequence (fines, license suspension, lost lien rights, sanctions, missed deadlines)?
3. What does it cost in money: fines and penalties, portal or per-transaction fees, filing-service fees, staff hours, vehicles that cannot be sold because notice was late?
4. Which incumbent tools do they use (pawn POS such as Bravo or PawnMaster, LeadsOnline, BWI; towing software such as TOPS or Towbook; court e-filing providers on Tyler Odyssey eFileAndServe, One Legal, InfoTrack; guardianship accounting software), and what do their reviews complain about? Verify each vendor exists before naming it.
5. How big is the population: licensed pawn and secondhand dealers, tow operators, professional guardians, e-filings per year in a sample state?
6. What rule or system change in 2025–2027 raises the pain now (new reporting statutes, e-filing mandates, portal migrations, outages)?

## Sources to mine
- Forums and subreddits: r/Pawn and pawn-industry forums (NPA), r/TowTrucks and TowForce or Tow Times forums, r/Paralegal, r/LawFirm, r/Lawyertalk, r/probate; National Guardianship Association materials and forums.
- Reviews of incumbents: G2, Capterra and app-store reviews for Bravo, PawnMaster, Towbook, TOPS, LeadsOnline, One Legal, InfoTrack, and state e-filing portals where reviewed.
- Job postings: "pawn compliance clerk", "impound clerk", "e-filing paralegal", "professional guardian" on Indeed and ZipRecruiter (volume and pay as a cost proxy).
- Regulator documents: state pawn and secondhand dealer statutes (for example CA Bus. & Prof. Code 21628, RCW 19.60), city police reporting ordinances, state DMV towing and lien-sale pages, state court e-filing rules and outage notices, probate court accounting forms and audit reports.
- Complaint threads: enforcement actions and fines against dealers or tow operators; bar association or court notices on e-filing outages; state audits of guardianship accounting backlogs.
- Starting links from Gate B: https://www.simmrinlawgroup.com/california-business-and-professions-code-section-21628/ ; https://app.leg.wa.gov/rcw/default.aspx?cite=19.60&full=true ; https://portal.ct.gov/DMV/Dealers-and-Repairs/Dealers-and-Repairs/Towing-Portal-System ; https://www.wsba.org/news-events/latest-news/news-detail/2024/11/04/court-of-appeals-e-filing-outage

## Evidence standard
- **10–20 pain items.** Each item has: who, what hurts, how often, a time or money number where one exists, the current workaround or tool, and at least one link.
- Prefer **verbatim quotes from practitioners** (forum posts, reviews) with the link. Gate B flagged that tow yards and guardians have no user quotes yet; closing that gap is the main job.
- Primary sources (statutes, DMV, courts) are preferred for deadlines, fees and penalties.
- Never invent quotes, numbers, vendors or URLs. Mark anything you could not verify `[unverified]`. Note the date of each source where visible.

## Output
Write `outputs/s3-ideate/pain/T4-02.md`, **1500 words max**, in this format:

```
# T4-02 pain: licensees and court filers

## Pain items
1. **<short title>** — Who: ... | What hurts: ... | Frequency: ... | Cost: ... | Workaround/tool: ... | Evidence: "<verbatim quote>" (<link>); <link>
2. ...

## Incumbents seen
- <tool or service>: what users say falls short (<link>)

## Numbers
- <population, fee, penalty or hours figure> (<link>)

## Gaps
- What you looked for and could not find.

<!-- COMPLETE -->
```

## Boundary
**Pain only. No solutions, product ideas, feature suggestions or "an opportunity would be" statements.** Write only `outputs/s3-ideate/pain/T4-02.md`. The last line must be exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
