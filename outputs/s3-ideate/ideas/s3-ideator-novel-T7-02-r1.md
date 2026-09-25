## Titles

1. Cite-Check Dock [similar to 2, 3]
2. Fake Case Law Detector [similar to 1, 3]
3. Brief Cite-Checker [similar to 1, 2] [safe]
4. Opposing Counsel Cite Sweep
5. Pro Se Filing Screener [similar to 7]
6. Judge Standing-Order Tracker [safe]
7. Court Docket AI Auditor [similar to 5] [safe]
8. Vulnerability Report Triage Bot [safe]
9. Bug Bounty Slop Filter [similar to 8]
10. CVE Submission Gate [similar to 23]
11. Open-Source Maintainer Shield [safe]
12. AI Bug Report Reproducer [similar to 8, 10]
13. Claims Adjuster Summary Checker [safe]
14. Insurance Demand Letter Auditor [safe]
15. Medical Record Cross-Reference Tool [similar to 13, 14]
16. AI Photo Fraud Detector [safe]
17. Claim Document Forensics [similar to 16]
18. Legal Research Hallucination Scanner [similar to 1]
19. Case Law Provenance Tracker [similar to 1]
20. Sanctions Risk Radar [safe]
21. Bounty Report Passport for Agents
22. Agent Verification Toll Gate [similar to 21]
23. NVD Backlog Unclogger [similar to 10]
24. Adjuster Fatigue Reliever [safe]
25. Trust Score for AI Submissions [safe]
26. Filing Compliance Checker [similar to 6]
27. Report Authenticity Stamp [safe]
28. Evidence Chain-of-Custody Tool [safe]
29. AI Slop Quarantine [safe]
30. Container-Style Discrepancy Flagger for Filings [safe]

### Rewrites of marked titles
1/2/3/18/19 (citation-checker cluster, too similar/generic) → **Fabrication Firewall** — a hard lockout that won't let a brief e-file until every cite resolves, not just a checker that leaves the decision to the human.
6/7/26 (tracker/auditor cluster, generic and vague) → **Docket Discrepancy Radar** (court/clerk-facing, ranks a whole day's filings by fabrication risk) and **Standing-Order Compliance Radar** (attorney-facing, swaps in the filing judge's exact required language live).
5 (pro se screener, overlaps docket auditor) → folded into Docket Discrepancy Radar, which already covers pro se filings as the highest-risk share.
8/9/12 (triage-bot cluster, generic "bot" framing) → **Reproduction Gate** — the gate only forwards a report after it actually re-runs the exploit in a sandbox, so the product is a verdict, not a summary.
10/23 (CVE-gate cluster) → **CVE Reproduction Bench** — same reproduction mechanism moved to the point a CVE record is minted, not a maintainer's inbox.
11 (vague "shield") → folded into Reproduction Gate; a shield with no stated mechanism isn't a product.
13/14/15 (checker/auditor/cross-reference cluster, generic) → **Summary Reweigh Desk** — loads the whole source file next to the AI summary and highlights only the sentences the source can't support.
16/17 (photo-fraud cluster, crowded "deepfake detector" space with no named capability) → dropped from full development; the mechanism needs forensic signal evidence this round's tech cards don't cover.
20 (vague "risk radar") → folded into Fabrication Firewall's live status flag.
21/22 (agent-gate cluster) → **Bounty Passport** — agents stake a refundable bond per report instead of a generic "toll gate."
24 (vague "fatigue reliever") → folded into Summary Reweigh Desk.
25/27/28/29/30 (buzzword or gimmick titles with no stated mechanism) → dropped; each idea below states its mechanism instead.

## Cards

---
id: s3-ideator-novel-T7-02-r1#01
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Fabrication Firewall

One-liner (≤20 words): Locks a brief's "ready to file" status red until every citation resolves to a real, on-point case.
Buyer and niche (≤25 words): Litigation associates and solo litigators drafting motions who cannot risk a sanctions story with their name on the caption.
Pain and evidence (≤40 words; cite the pain dossier file): Fabricated citations reach courts; one firm paid $59,500 to the opposing side, and even paid legal AI still hallucinates at 17-43%, leaving every brief for manual cite-check. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): While drafting, an agent extracts every citation, pulls the real opinion text from a case-law database, checks that the holding and quote actually match, and keeps the file's status flag red with the exact bad cite highlighted until every one clears or a human overrides it.
Why now (≤25 words; name the specific capability): 1M-token context (TC-25) holds the whole brief plus every cited opinion in one verification pass instead of chunked lookups.
Demo moment (≤20 words): Feed a real brief with one fabricated case; the flag turns red on that exact citation within a minute.
Business model (≤15 words): Per-seat firm subscription, priced far below the cost of one sanction.

---
id: s3-ideator-novel-T7-02-r1#02
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Opposing Brief Sweep

One-liner (≤20 words): Turns the other side's brief into a court-ready exhibit of every fabricated citation it contains.
Buyer and niche (≤25 words): Opposing counsel in active litigation, from solo practitioners to firm associates, who now must also catch the other side's fakes.
Pain and evidence (≤40 words; cite the pain dossier file): Courts have started denying fee awards to lawyers who "did not alert the court" to an opponent's fabricated citations, effectively doubling the checking load onto every filing. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): Upload the opposing brief; an agent verifies every citation against the real case text the same way it would its own side's draft, then auto-drafts a motion-ready exhibit table listing each fabricated cite next to the real case it doesn't match, ready to attach.
Why now (≤25 words; name the specific capability): The same 1M-token verification loop (TC-25) runs against any brief, not just the lawyer's own drafts.
Demo moment (≤20 words): Paste a brief with two fake cases; a filed-format exhibit table appears with both flagged in minutes.
Business model (≤15 words): Pay-per-brief credits, cheaper than an associate's cite-check hours.

---
id: s3-ideator-novel-T7-02-r1#03
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Docket Discrepancy Radar

One-liner (≤20 words): Scans a day's e-filings overnight and ranks them by citation-fabrication risk for clerks to route.
Buyer and niche (≤25 words): Court clerks and pro se intake staff in courts with no capacity to screen filings for AI-fabricated citations.
Pain and evidence (≤40 words; cite the pain dossier file): Judges report "scant resources to spare ferreting out erroneous AI citations," and pro se litigants account for 59% of documented hallucination cases, yet filer instructions never mention AI. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): Each night the radar pulls the day's filings, checks every citation against the case-law database, and produces a ranked list by how many citations fail to resolve, so a clerk can route the worst filings to a judge's attention first without altering the docket itself.
Why now (≤25 words; name the specific capability): Cheap large-context inference (TC-25) makes scanning an entire day's docket cost cents instead of billable hours.
Demo moment (≤20 words): Run against a folder of sample filings; a ranked risk list appears with the fabricated one at the top.
Business model (≤15 words): Court IT or state-bar-funded subscription, priced per docket served.

---
id: s3-ideator-novel-T7-02-r1#04
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Standing-Order Compliance Radar

One-liner (≤20 words): Watches which judge a filing is going to and inserts that judge's exact required GenAI disclosure language before submit.
Buyer and niche (≤25 words): Solo and small-firm litigators filing across many courts, each with a different, undisclosed GenAI standing order.
Pain and evidence (≤40 words; cite the pain dossier file): GenAI standing orders conflict judge to judge; some require disclosing the tool used, others a verification certificate, creating "additional burdens and costs on litigants" for every filing. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): A browser extension watches drafting inside the court's e-filing portal, identifies the assigned judge, pulls that judge's current standing-order text from a maintained database, and drops the exact required disclosure or certification paragraph into the document before the attorney hits submit.
Why now (≤25 words; name the specific capability): Claude for Chrome (TC-03) can watch and act inside the attorney's own logged-in browser session live.
Demo moment (≤20 words): Switch the assigned-judge field; the required certification paragraph swaps automatically in the draft.
Business model (≤15 words): Per-attorney monthly subscription, sold direct to solo and small-firm litigators.

---
id: s3-ideator-novel-T7-02-r1#05
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Reproduction Gate

One-liner (≤20 words): Only forwards a vulnerability report to a maintainer after actually reproducing the exploit in a sandbox.
Buyer and niche (≤25 words): Volunteer maintainers of high-traffic open-source projects (curl-scale) drowned by AI-generated vulnerability reports.
Pain and evidence (≤40 words; cite the pain dossier file): curl's maintainer said reports "take a serious mental toll... not even one in twenty was real"; the confirmed-vulnerability rate fell from over 15% to below 5% before curl closed its bounty. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): For each new report, an agent checks out the exact commit, builds the project in a disposable sandbox, and attempts the described exploit step by step. Only reports that actually reproduce reach the maintainer inbox; the rest auto-close with the failed run transcript attached as proof.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use (TC-02) can stay on a multi-step build-and-exploit task unattended for hours.
Demo moment (≤20 words): Submit one real and one fabricated-function report; the gate forwards the real one and auto-closes the fake with its failed log.
Business model (≤15 words): Flat monthly fee sponsored by a foundation per project it protects.

---
id: s3-ideator-novel-T7-02-r1#06
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# CVE Reproduction Bench

One-liner (≤20 words): Stamps every CVE submission reproduced, unreproduced, or needs-human before it reaches the public database.
Buyer and niche (≤25 words): CVE Numbering Authorities and vendor product-security teams facing a backlog of unverifiable, AI-drafted vulnerability submissions.
Pain and evidence (≤40 words; cite the pain dossier file): Six "complete garbage" SQLite CVEs entered the record; NVD now enriches only 15-20% of incoming CVEs and the unreviewed backlog exceeded 27,000 by end of 2025. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): Before a submission is minted as a CVE, the bench checks the cited commit and function against the actual source repository, attempts the described trigger in a sandbox, and attaches a stamp and a diff of the mismatch so reviewers spend their time only on plausible records.
Why now (≤25 words; name the specific capability): The same long-running computer-use verification (TC-02) applied at the database's point of ingestion instead of one inbox at a time.
Demo moment (≤20 words): Submit a CVE citing a nonexistent function; the bench stamps it unreproduced with the diff proving the function doesn't exist.
Business model (≤15 words): Per-CNA seat license or per-record verification fee.

---
id: s3-ideator-novel-T7-02-r1#07
track: novel
lineage: ai-native
territory: T7
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Bounty Passport

One-liner (≤20 words): Vulnerability-report agents stake a refundable bond per submission; fake reports forfeit it, real ones earn a bonus.
Buyer and niche (≤25 words): AI agents that generate and submit bug-bounty reports on behalf of researchers, needing a way to be trusted at scale.
Pain and evidence (≤40 words; cite the pain dossier file): Elastic received 1,390 reports in the first half of 2026, about 70% rejected before reproduction; bounty programs are being priced out of triaging the flood. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): A bounty program requires every submitting agent to hold a passport: it posts a small stake via a per-request payment protocol before submitting, an automated reproduction check runs the claim, and the stake returns plus a bonus if it reproduces, or is forfeited if it does not.
Why now (≤25 words; name the specific capability): x402 micropayments (TC-15) let a program bond an agent per request with no signup, paired with computer-use reproduction (TC-02).
Demo moment (≤20 words): Two agents submit reports live; the real one's stake returns with a bonus, the fake one's stake is forfeited on screen.
Business model (≤15 words): Platform takes a small percentage of every forfeited or returned stake.

---
id: s3-ideator-novel-T7-02-r1#08
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r1
---

# Summary Reweigh Desk

One-liner (≤20 words): Loads the whole claim file beside the carrier's AI summary and highlights every sentence the source can't support.
Buyer and niche (≤25 words): Independent claims adjusters and small adjusting firms who must sign off on carrier-generated AI summaries before acting.
Pain and evidence (≤40 words; cite the pain dossier file): Carrier AI hallucinates on "a smudge on a document" and leaves out details that change a payout; the adjuster "bears the brunt" when it's wrong, and 98% of adjusters' AI-related reviews are negative. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): Before sign-off, the desk pulls the full underlying file (medical records, police report, repair estimate) into one context window alongside the AI-written summary, checks each summary sentence against the source documents, and highlights any sentence the source does not actually support, with the contradicting page linked.
Why now (≤25 words; name the specific capability): 1M-token context (TC-25) holds an entire claim file and its summary together for one exhaustive comparison pass.
Demo moment (≤20 words): Load a claim with one invented summary detail; the desk highlights that exact sentence red with the source page open.
Business model (≤15 words): Per-seat subscription sold to independent adjusters and small adjusting firms.

<!-- COMPLETE -->
