# Pain-miner brief: T7-01, AI-generated submissions in legal work (court filings, citations, disclosure orders)

Territory T7: verifying and triaging AI-generated submissions. Half 1 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain felt by the people who must **check AI-written legal submissions before relying on them or ruling on them**: judges and their clerks and staff attorneys, opposing counsel, supervising partners and associates, paralegals, and law firm risk/ethics staff. Find who does the checking, how often, how long it takes, what it costs, and what goes wrong when a hallucinated citation or misstated holding gets through.

## Boundary of this half
- **In:** any document filed in or served on a court or tribunal (briefs, motions, pleadings, expert reports, declarations, pro se filings, arbitration submissions) and the work of checking it: verifying that cited cases exist, that quotes are real, that holdings are stated correctly, and that pinpoint citations point to the right page. Also in: the work created by standing orders and local rules on GenAI disclosure or certification (reading, complying, policing compliance across many judges), sanctions proceedings, show-cause hearings, bar referrals, malpractice and insurance exposure, and the internal review a firm does on a colleague's or contract lawyer's AI-assisted draft before it is filed.
- **Out, owned by T7-02:** AI-generated vulnerability and bug reports (open-source maintainers, bug bounty platforms and triagers) and AI-generated or AI-summarized insurance claims material (adjusters, SIU, claims reviewers, medical-record summaries). If a source covers several sub-niches, record only the legal part.
- **Out of the territory:** reviewing AI-written code in the IDE, general LLM evals and observability, content moderation, and a lawyer's own drafting workflow when nothing is being checked or submitted.

## Questions
1. Who catches hallucinated citations today (judge, clerk, opposing counsel, the filer's own firm), and at what stage? How many such incidents are there per month or year (for example the Charlotin AI Hallucination Cases database, Norton Rose Fulbright's count of about 1,490 decisions), and how is the rate trending in 2025-2026?
2. How long does it take to check one brief's citations by hand or with the incumbent citator, and what does a missed hallucination cost: sanction amounts (up to $15k and above), fee awards to the other side, time spent on show-cause responses, bar discipline, lost motions, client harm?
3. What do GenAI standing orders and local rules actually require (disclosure, certification, human verification), how many differ across judges and courts, and what burden do they put on filers and on chambers checking compliance?
4. What is the repeated manual action: pulling every cited case, reading the quoted passage, confirming the pin cite, comparing a paraphrased holding to the opinion, reviewing opposing filings for fabricated authority?
5. How big is the pro se problem: self-represented litigants filing AI-drafted papers, and the load that puts on clerks, staff attorneys and opposing counsel?
6. What do people use now (Westlaw KeyCite, Lexis Shepard's and Brief Analyzer, Bloomberg, CoCounsel, Clearbrief, manual cite-checking by paralegals) and what do users say those tools still miss?

## Sources to mine
- Forums and subreddits: r/Lawyertalk, r/law, r/paralegal, r/LawFirm, r/biglaw, r/Ask_Lawyers, Above the Law comment threads, ABA and state bar listservs quoted online. Search phrases such as "fake citations opposing counsel", "hallucinated case brief", "cite check AI", "standing order generative AI", "pro se ChatGPT filing". If Reddit is blocked, use search-engine results that quote those threads.
- Case trackers and orders: the Charlotin AI Hallucination Cases database, published sanctions orders (Mata v. Avianca and 2025-2026 successors), judges' GenAI standing orders (trackers from Ropes & Gray, Bloomberg Law, or court websites), state bar ethics opinions and formal opinions.
- Reviews of incumbents on G2, Capterra and legal-tech review sites: Westlaw / KeyCite, Lexis+ / Shepard's / Brief Analyzer, Bloomberg Law, CoCounsel, Harvey, Clearbrief, Bluebook citation checkers. Stanford RegLab/HAI studies on hallucination rates in legal AI tools.
- Job postings (Indeed, LinkedIn) for cite-checkers, legal proofreaders, staff attorneys, and paralegals whose duties name citation verification or AI review, with wages.
- Complaint threads and news: Norton Rose Fulbright and gc.ai trackers (cited in Gate B), Law360, Reuters Legal, Above the Law, ABA Journal, LawSites (2024-2026).

## Evidence standard
- **10-20 pain items.** Each carries at least one verbatim quote or specific number, with a link, a date, and the role (judge, clerk, opposing counsel, associate, paralegal) named where the source names it.
- Prefer first-person complaints from the people doing the checking (judges' own words in orders count as first-person). Sanctions statistics are welcome but should not make up most of the items.
- For every item, give frequency and a time or money figure when any source provides one (sanction amounts, fee awards, hours of cite-checking, billing rates).
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers, case names or URLs.

## Output
Write `outputs/s3-ideate/pain/T7-01.md`, 1500 words max:
- a one-line header naming the half (T7-01, legal: AI-generated court filings and citations);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Setting** (court, firm, tribunal) / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T7-02 covers vulnerability reports and insurance claims.
- Write only your output file.
<!-- COMPLETE -->
