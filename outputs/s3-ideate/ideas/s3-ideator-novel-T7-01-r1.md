## Titles

1. Citation Fact-Checker for Legal Briefs [safe] -> rewritten as "Opposing-Counsel Citation Auditor" (flips the buyer to the newer duty of catching the *other side's* fake cites, not your own)
2. Cite-Check Copilot for Solo Litigators [similar to 1] -> rewritten as "Pre-Filing Cite Guard for Pro Se Litigants" (buyer becomes the court's self-help center, not a paying attorney)
3. Docket-Wide Hallucination Screener for court clerks
4. Standing-Order Compliance Checker [safe] -> rewritten as "Standing-Order Diff Engine" (tracks and diffs every judge's GenAI order in a district as they change, instead of a static checklist)
5. AI-Slop Vulnerability Report Triager [safe] -> rewritten as "Reproduction-First Vulnerability Gate" (the agent actually runs the exploit in a sandbox before a human ever opens the report)
6. CVE Backlog Sanity Filter -> rewritten as "CVE Backlog Reality Filter" (re-verifies fabricated entries against live source repos, not just pattern-matching)
7. Bug-Bounty First-Pass Screener [similar to 5] -> rewritten as "Program-Owner Report Autopsy Dashboard" (fingerprints slop patterns across a whole program's history, not per-report)
8. Maintainer's Report Reality Check [similar to 5] -> rewritten as "Duplicate-Cluster Collapser for Maintainer Inboxes" (merges the 3-5 near-duplicate slop reports into one before triage)
9. Claims Adjuster Summary Verifier -> rewritten as "Claims Summary Diff Viewer" (shows the exact unsupported sentence, not just a score)
10. Demand-Letter Cross-Checker -> rewritten as "Demand Letter ICD Cross-Checker"
11. Photo-Forgery Claim Screener -> rewritten as "Claim Photo Provenance Checker" (runs at intake for every claim, not only after escalation)
12. Insurance Claim Fact-Auditor [similar to 9] -> rewritten as "Carrier AI Self-Audit Loop" (a second adversarial model checks the carrier's own summarizer before it reaches the adjuster)
13. Pro Se Filing Citation Helper [duplicate of 2] -> rewritten as "Small-Claims Filing Sanity Check" (extends the pre-filing guard beyond federal court to small-claims and tribal courts)
14. Multi-Judge Rule Tracker [similar to 4] -> merged into 4
15. Fabricated-Case Bounty Hunter -> rewritten as "Verification-as-a-Service API for Agents" (a per-call endpoint any drafting agent must query before it is allowed to cite)
16. Open-Source Report Reputation Score -> rewritten as "Reporter Reputation Ledger for Bug Bounties" (a trust score portable across HackerOne, Bugcrowd and GitHub)
17. CVE Reproduction Sandbox Agent [similar to 5] -> merged into 5
18. Adjuster's Source-Document Reconciler [similar to 9] -> rewritten as "Voice-Memo Claim Verifier" (checks an adjuster's dictated summary against the file the moment it's recorded)
19. Legal Citation Chain-of-Custody Log -> rewritten as "Citation Chain-of-Custody Log" (every cite in a filing carries an auditable record of what checked it and when)
20. Sports-Tribunal Precedent Checker [out of dossier scope] -> dropped, replaced with "Appellate Citation Re-Verifier" (flags when a cited case was later overturned, a temporal-drift problem no current tool tracks)
21. Grant-Application Fabrication Screener [out of dossier scope] -> dropped, replaced with "Settlement-Exhibit Verifier" (checks exhibits attached to a settlement demand against the underlying file)
22. Volunteer-Run Nonprofit Compliance Bot [safe, out of scope] -> dropped, replaced with "Cross-Filed Citation Consistency Checker" (flags when the same fabricated citation reappears across a firm's other active filings)
23. Vulnerability Report Duplicate Detector [similar to 8] -> merged into 8
24. AI Report Provenance Watermark Checker -> rewritten as "Report Provenance Fingerprinter" (estimates which model likely generated a bug report to weight triage)
25. Court Filing Disclosure Compliance Bot [similar to 4] -> merged into 4
26. Insurance SIU Media Forensics Assistant [similar to 11] -> merged into 11
27. Triage Cost Calculator for Bug Bounties [safe] -> dropped, replaced with "Auto-Reject Threshold Tuner" (learns each program's real cost-per-report and sets the reject line automatically)
28. Real-Time Citation Verifier Browser Extension [similar to 1/3] -> rewritten as "Live Draft-Time Citation Verifier" (checks citations as the brief is typed, inside the word processor)
29. Claims Summary Diff Viewer [duplicate of 9]
30. Cross-Program Bug Bounty Slop Blocklist (a shared, opt-in blocklist of confirmed AI-slop report fingerprints shared across programs)

## Cards

---
id: s3-ideator-novel-T7-01-r1#01
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Opposing-Counsel Citation Auditor

One-liner (<=20 words): An agent checks every citation in the other side's brief before your response deadline hits.

Buyer and niche (<=25 words): Litigation associates and paralegals at small-to-midsize firms who must respond to opposing filings within court deadlines.

Pain and evidence (<=40 words): Courts now expect a side to catch the *other* side's fabricated cites; one court denied a fee award because respondents "did not alert the court" to fake citations. (src: outputs/s3-ideate/pain/T7-dossier.md, P3)

How it works (<=50 words): Upload the opposing filing. A browser agent logs into the firm's own case-law subscription, pulls every cited case, confirms it exists and supports the quoted proposition, and returns a redlined report with a confidence flag on every citation within minutes.

Why now (<=25 words): Claude for Chrome (production, Dec 2025) lets an agent navigate logged-in legal databases inside the firm's own authenticated session.

Demo moment (<=20 words): Feed it a real hallucination-flagged brief from a documented sanctions case; every fake citation flags live.

Business model (<=15 words): Per-brief fee, or a monthly subscription tiered by filings checked.

---
id: s3-ideator-novel-T7-01-r1#02
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Docket-Wide Hallucination Screener

One-liner (<=20 words): A nightly agent sweeps a court's new filings and flags every fabricated citation before the hearing date.

Buyer and niche (<=25 words): Court clerks and staff attorneys managing dockets with rising volumes of pro se and AI-drafted filings.

Pain and evidence (<=40 words): A judge said there are "scant resources to spare ferreting out erroneous AI citations"; pro se litigants account for 59% of documented hallucination cases with no screening step today. (src: outputs/s3-ideate/pain/T7-dossier.md, P4)

How it works (<=50 words): A scheduled agent pulls each day's new filings from the court's e-filing portal, extracts every citation, checks each against a case-law database, and posts a one-page flag sheet to the clerk's queue, ranked by severity, before the assigned hearing.

Why now (<=25 words): Sonnet 4.5 computer use (61.4% OSWorld, Sept 2025) runs long, unattended multi-step jobs across portal sessions overnight.

Demo moment (<=20 words): Point it at a real docket export; it surfaces the exact fabricated case from a documented sanctions ruling.

Business model (<=15 words): Court or state-funded annual license, priced by docket volume.

---
id: s3-ideator-novel-T7-01-r1#03
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Reproduction-First Vulnerability Gate

One-liner (<=20 words): An agent tries to actually reproduce a reported bug in a sandbox before a maintainer ever reads it.

Buyer and niche (<=25 words): Volunteer maintainers and open-source foundations running public vulnerability or bug-bounty intake for widely used projects.

Pain and evidence (<=40 words): curl's maintainer said AI-slop reports "take a serious mental toll to manage"; confirmed-vulnerability rate fell below 5% under 20-40 reports a week, feeling "effectively DDoS'ed." (src: outputs/s3-ideate/pain/T7-dossier.md, P6)

How it works (<=50 words): New reports enter a sandbox instead of an inbox. An agent spins up the named software version, follows the reported steps exactly, and forwards only reports that actually reproduce, with every failed attempt logged so a rejected reporter can appeal with evidence.

Why now (<=25 words): Cheap long-context inference, a 10x/year price drop per Epoch AI, makes running a full repro attempt per report affordable at volunteer-project scale.

Demo moment (<=20 words): Feed it a real fabricated curl-style report; watch it fail to reproduce and get auto-parked, not delivered.

Business model (<=15 words): Free tier for small projects, paid tier for corporate bug-bounty programs.

---
id: s3-ideator-novel-T7-01-r1#04
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# CVE Backlog Reality Filter

One-liner (<=20 words): Re-checks the deep CVE backlog against real source code before an analyst ever opens a ticket.

Buyer and niche (<=25 words): CVE Numbering Authorities and NVD-adjacent triage staff drowning in unreviewed vulnerability submissions.

Pain and evidence (<=40 words): NVD now enriches only 15-20% of incoming CVEs and about 29,000 sit "Not Scheduled," after fabricated entries like six "complete garbage" SQLite CVEs entered the record. (src: outputs/s3-ideate/pain/T7-dossier.md, P8)

How it works (<=50 words): For each backlogged CVE, an agent fetches the named repository at the claimed version, checks whether the described function, commit or code path exists, and sorts the queue into confirmed-plausible, needs-human and likely-fabricated before a human analyst opens it.

Why now (<=25 words): A GPT-3-level model's price fell from $60 to $0.06 per million tokens, making per-CVE source verification affordable at backlog scale.

Demo moment (<=20 words): Run it on the public SQLite CVE cluster; it flags all six as fabricated in seconds.

Business model (<=15 words): Contract with a CNA or security vendor, priced per CVE processed.

---
id: s3-ideator-novel-T7-01-r1#05
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Claims Summary Diff Viewer

One-liner (<=20 words): Shows an adjuster exactly which sentences in an AI claim summary aren't backed by the file.

Buyer and niche (<=25 words): Claims adjusters at insurance carriers who must sign off on AI-generated claim summaries before payout.

Pain and evidence (<=40 words): Adjusters "bore the brunt" of claimants' fury when a carrier's AI summary missed a detail from a medical report; 98% of Glassdoor reviews mentioning AI are negative. (src: outputs/s3-ideate/pain/T7-dossier.md, P9)

How it works (<=50 words): The full claim file, medical records, adjuster notes and photos, loads alongside the carrier's AI-written summary. Each summary sentence is checked against the source file and marked backed, unsupported or contradicted, with a jump-to-source link for every flag.

Why now (<=25 words): 1M-token context windows hold an entire claim file in one prompt with no chunking, so nothing is missed to truncation.

Demo moment (<=20 words): Load a summary with a deliberately dropped detail; the unsupported sentence lights up red instantly.

Business model (<=15 words): Per-seat monthly license sold to carrier claims departments.

---
id: s3-ideator-novel-T7-01-r1#06
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Claim Photo Provenance Checker

One-liner (<=20 words): Flags AI-altered claim photos and documents at intake, before a claim is ever escalated.

Buyer and niche (<=25 words): Special investigations units and fraud examiners at insurance carriers handling photo and document evidence.

Pain and evidence (<=40 words): An estimated 20-30% of claims may contain AI-altered media and 99% of insurers have already seen it, but forensic checks today only run after a claim is escalated. (src: outputs/s3-ideate/pain/T7-dossier.md, P10)

How it works (<=50 words): Every submitted photo and document is scanned at intake for generation artifacts, metadata gaps and internal inconsistencies (mismatched shadows, duplicated textures), producing a risk score attached to the claim file before any adjuster reviews it, not weeks later.

Why now (<=25 words): Multimodal long-context models now hold and compare a claim's whole image set in one pass, cheaply, at intake volume.

Demo moment (<=20 words): Submit a known AI-altered damage photo; the risk score spikes before a human opens the claim.

Business model (<=15 words): Per-claim scanning fee bundled into the carrier's claims platform.

---
id: s3-ideator-novel-T7-01-r1#07
track: novel
lineage: ai-native
territory: T7
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Verification-as-a-Service API for Agents

One-liner (<=20 words): Any drafting agent pays a few cents per call to verify a citation before it's allowed to cite it.

Buyer and niche (<=25 words): AI vendors and legal-tech platforms whose drafting agents need to certify citations in real time, with no human in the loop.

Pain and evidence (<=40 words): Paid legal AI still hallucinates at 17-43% even from leading vendors, so every AI-drafted citation needs an independent check before it reaches a filing. (src: outputs/s3-ideate/pain/T7-dossier.md, P2)

How it works (<=50 words): A drafting agent sends a proposed citation and quoted proposition to an endpoint; the service checks it against a case-law database and returns pass, fail or uncertain, paid per call over plain HTTP with no subscription, account or human approval step.

Why now (<=25 words): x402 micropayments (from 2025-05) let any agent pay per verification call directly inside the HTTP request, no signup.

Demo moment (<=20 words): A drafting agent calls the endpoint live on stage and gets a verdict back in under two seconds.

Business model (<=15 words): Per-call micropayment, roughly a cent per citation verified.

---
id: s3-ideator-novel-T7-01-r1#08
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
---

# Demand Letter ICD Cross-Checker

One-liner (<=20 words): Flags every ICD code and date in an AI-drafted demand letter that doesn't match the medical file.

Buyer and niche (<=25 words): Solo bodily-injury adjusters and small public-adjusting practices handling personal-injury demand letters without a firm's back office.

Pain and evidence (<=40 words): 37% of personal-injury lawyers now use generative AI to draft demand letters, and ICD codes and dates in those letters routinely don't match the underlying medical records. (src: outputs/s3-ideate/pain/T7-dossier.md, P11)

How it works (<=50 words): The demand letter and its attached medical records load together. Every ICD code, injury date and dollar figure in the letter is checked against the records, and mismatches are highlighted inline before the file moves to negotiation.

Why now (<=25 words): Cheap 1M-token context makes holding a full medical record set alongside a demand letter affordable per case, not just per litigation.

Demo moment (<=20 words): Load a letter with one swapped ICD code; the mismatch highlights immediately, before it's sent.

Business model (<=15 words): Per-letter fee or a low monthly subscription for solo practices.

<!-- COMPLETE -->
