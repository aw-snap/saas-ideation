# Pain-miner brief: T7-02, AI-generated submissions outside the courts (vulnerability reports and insurance claims)

Territory T7: verifying and triaging AI-generated submissions. Half 2 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain felt by two groups who must **triage or check AI-written material that arrives in their queue before they act on it**: (a) open-source maintainers, security teams and bug bounty triagers flooded with AI-generated vulnerability and bug reports; (b) insurance claims adjusters, reviewers and special investigations staff dealing with AI-generated or AI-summarized claim material. Find who does the triage, how often, how long it takes, what it costs, and what goes wrong.

## Boundary of this half
- **In, security reports:** AI-written ("slop") vulnerability reports, bug reports, security issues and CVE requests sent to open-source projects, to company security inboxes (security@, security.txt, VDPs) and through bug bounty platforms (HackerOne, Bugcrowd, Intigriti, YesWeHack, Huntr); the time to reproduce or disprove them; maintainer burnout; programs closed or restricted (curl closed its bounty in Jan 2026); CVE and NVD noise from bogus reports; platform triage staff load.
- **In, insurance claims:** adjusters and claims reviewers checking AI-generated medical-record summaries, demand letters and damage narratives written with AI; AI-fabricated or AI-edited photos, invoices and receipts in claims; the adjuster's own carrier-supplied AI summaries that are wrong and that the adjuster must re-check. Property, auto, workers' comp and bodily injury lines are all in.
- **Out, owned by T7-01:** anything filed in or served on a court or tribunal, citation checking, GenAI disclosure orders, sanctions and legal ethics. If a source covers several sub-niches, record only the security and insurance parts. A claim that reaches litigation is in T7-01 from the moment it is filed.
- **Out of the territory:** reviewing AI-written code in the IDE or pull requests (only reports and issues count here, not code contributions), general LLM evals and observability, content moderation, generic insurance fraud unrelated to AI-generated material.

## Questions
1. How many AI-generated reports do maintainers, security teams and bounty programs receive per week or month, what share are invalid (for example curl's 8x flood and under-5% real-vulnerability rate), and which projects and programs have closed, paused or changed rules because of it?
2. How long does it take to triage and disprove one slop report (reading, reproducing, replying, closing), and what does that cost in maintainer hours, triager salaries, bounty payouts or real vulnerabilities missed in the noise?
3. What tells a triager a report is AI-written, and what is the repeated manual action to confirm it is false (checking that the function exists, running the PoC, reading the cited code path)?
4. How often do adjusters meet AI-generated or AI-summarized claim material (medical summaries, demand letters, photos, invoices), and how much re-checking against source records does it force per claim, in minutes or dollars?
5. What goes wrong when AI claim material is trusted: wrong payouts, leakage, missed fraud, cycle-time delays, complaints, regulatory exposure (for example state rules on AI in claims handling)? Give counts and dollars.
6. What do people use now (HackerOne/Bugcrowd triage services, GitHub private vulnerability reporting, project policies banning AI reports; Guidewire, CCC, EvolutionIQ, carrier AI summarizers, SIU image-forensics tools) and what do users say those still fail at?

## Sources to mine
- Forums and subreddits: r/opensource, r/netsec, r/bugbounty, r/cybersecurity, Hacker News threads on curl and AI slop reports, GitHub issues and discussions where maintainers complain, oss-security mailing list, Mastodon posts from maintainers (Daniel Stenberg, Seth Larson of the Python Software Foundation). Insurance side: r/Insurance, r/ClaimsAdjusters, r/insuranceprofessionals, Claims Pages, Insurance Journal comments. Search phrases such as "AI slop bug report", "hallucinated vulnerability", "beg bounty", "AI generated demand letter", "adjuster AI summary wrong". If Reddit is blocked, use search-engine results that quote those threads.
- Reviews of incumbents on G2, Capterra and app stores: HackerOne, Bugcrowd, Intigriti, YesWeHack; Guidewire ClaimCenter, CCC, EvolutionIQ, Clara Analytics, carrier AI summarization tools, adjuster employee reviews on Glassdoor and Indeed that mention AI.
- Job postings for security triage analysts, bug bounty triagers, claims adjusters and medical-records reviewers: duties that name report triage or AI-summary review, volume expectations, wages.
- Regulator and industry documents: CVE/MITRE and NVD notices on bogus CVEs, OpenSSF guidance, NAIC model bulletin on AI use by insurers and state adoptions, Coalition Against Insurance Fraud reports on AI-generated fraud, carrier and trade-press surveys (2024-2026).
- Complaint threads and news: the Gate B links (Bugcrowd opinion piece, The Register, Socket on curl, TechSpot on adjusters), plus LWN, The Register, Insurance Journal, Carrier Management, Claims Journal.

## Evidence standard
- **10-20 pain items**, with at least 4 from each sub-niche (security reports and insurance claims). Each carries at least one verbatim quote or specific number, with a link, a date, and the role and project, platform or line of insurance named where the source names it.
- Prefer first-person complaints from maintainers, triagers and adjusters. Vendor and survey numbers are welcome but should not make up most of the items.
- For every item, give frequency and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T7-02.md`, 1500 words max:
- a one-line header naming the half (T7-02, AI-generated vulnerability reports and insurance claim material);
- numbered pain items (`1.`, `2.`, ...), grouped under `### Security reports` and `### Insurance claims`, each with: **Who** / **Setting** (project, platform, carrier or line) / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T7-01 covers court filings, citations and legal disclosure orders.
- Write only your output file.
<!-- COMPLETE -->
