# Pain-miner brief T4-01: mission-driven organizations filing into government portals

Territory: T4, mandated reporting into no-API government portals by tiny organizations (see `gates/gate-B.md`, section T4). Read `config/context.md` first.

## Objective
Find and document the strongest evidence of pain felt by **small nonprofits and volunteer public-safety organizations** that must make recurring, penalty-backed filings into government portals with no admin staff to do it. You collect pain only: who suffers, how often, what it costs, and what they use today.

## Boundary of this half (segment: mission-driven organizations)
**In:**
- Multi-state charitable solicitation registration and annual renewal (39 states + DC), including the Unified Registration Statement, state-by-state renewals, and fundraising-platform-triggered registration duties.
- IRS 990-N e-Postcard, 990-EZ filing by tiny orgs, and automatic revocation after three years of non-filing, including reinstatement.
- State annual reports and attorney-general charity filings that recur for small nonprofits.
- Volunteer and combination fire department incident reporting: NFIRS and its successor NERIS (verify the transition dates), state fire-marshal portals, and grant eligibility tied to reporting.

**Out (belongs to T4-02 or other territories):** pawn and secondhand dealer police reporting, tow-yard DMV lookups, guardian annual accountings, court e-filing (all T4-02); nonprofit bookkeeping and fund accounting; grant writing; tax and customs filings by sellers; security self-assessments (T5); payer portals (T1).

## Questions (answer each with evidence)
1. Who actually does these filings in a small nonprofit or volunteer department (volunteer treasurer, ED, fire chief, part-time bookkeeper), and how many hours per year or per filing does it take them?
2. What goes wrong most often: missed deadlines, portal errors, re-entering the same data across states, lost logins when volunteers turn over, rejected attachments? How often, and with what consequence (late fees, revocation, loss of grant eligibility, suspended solicitation rights)?
3. What does it cost in money: state fees plus late penalties, outsourcing prices (per-state registration service fees), reinstatement costs, and lost donations or grants?
4. Which incumbent tools and services do they use (registration services such as Harbor Compliance or Labyrinth, fire RMS vendors such as ESO, ImageTrend, Emergency Reporting, Resgrid), and what do their reviews complain about?
5. How big is the population: counts of 990-N filers, automatic revocations per year, registered charities per state, volunteer departments reporting to NFIRS?
6. What deadline or rule change in 2025–2027 raises the pain now (NERIS cutover, state portal migrations, new state registration rules)?

## Sources to mine
- Forums and subreddits: r/nonprofit, r/Fundraising, r/Accounting (nonprofit threads), r/Firefighting, r/VolunteerFirefighter, r/EMS; Nonprofit Quarterly and NTEN community threads; TechSoup forums.
- Reviews of incumbents: G2 and Capterra for Harbor Compliance, Labyrinth, ESO Fire, ImageTrend Elite, Emergency Reporting; app-store reviews where apps exist.
- Job postings: "nonprofit compliance coordinator", "charitable registration specialist", "fire records clerk" on Indeed and Idealist (posting volume and pay as a cost proxy).
- Regulator documents: IRS automatic revocation pages and the revocation list data; state AG charity bureau pages (CA, NY, FL, PA, MA); NASCO materials; USFA NFIRS and NERIS pages.
- Complaint threads: state AG enforcement actions against unregistered charities; USFA or fire-chief association statements on NFIRS/NERIS reporting burden.
- Starting links from Gate B: https://www.fundraisingregistration.com/about/news/what-you-need-to-know-about-multi-state-registration-for-charitable-solicitations/ ; https://www.councilofnonprofits.org/running-nonprofit/governance-leadership/state-filing-requirements-nonprofits ; https://blog.resgrid.com/nfirs-fire-reporting/ ; https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption-for-nonfiling-overview

## Evidence standard
- **10–20 pain items.** Each item has: who, what hurts, how often, a time or money number where one exists, the current workaround or tool, and at least one link.
- Prefer **verbatim quotes from practitioners** (forum posts, reviews) with the link. Gate B flagged that this territory has no user quotes yet; closing that gap is the main job.
- Primary sources (statute, IRS, state AG, USFA) are preferred for counts, fees and penalties.
- Never invent quotes, numbers, vendors or URLs. Mark anything you could not verify `[unverified]`. Note the date of each source where visible.

## Output
Write `outputs/s3-ideate/pain/T4-01.md`, **1500 words max**, in this format:

```
# T4-01 pain: mission-driven organizations

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
**Pain only. No solutions, product ideas, feature suggestions or "an opportunity would be" statements.** Write only `outputs/s3-ideate/pain/T4-01.md`. The last line must be exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
