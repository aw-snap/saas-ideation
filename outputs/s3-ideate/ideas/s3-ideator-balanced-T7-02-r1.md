## Titles

1. Citation Fossil Record — a chronological case-existence ledger for briefs
2. The Slop Thermometer — real-time flood-pressure gauge for maintainer inboxes
3. Duplicate Bounty Detective — clusters near-identical AI vuln reports before a human opens them
4. Adjuster's Redline — diffs AI claim summaries against source documents, flags drift
5. Standing-Order Compiler — turns each judge's GenAI order into a pre-filing checklist
6. The Reproduction Gate — auto-attempts to reproduce a reported exploit before a human sees it
7. Opposing Counsel's Mirror — runs the same citation check on the other side's brief
8. CVE Lie Detector — flags CVE submissions whose referenced code doesn't exist
9. Ghostwriter Detector for Demand Letters — matches ICD codes in AI drafts against the medical record
10. Maintainer Triage Belt — a conveyor-style queue that pre-scores incoming reports by plausibility
11. Ledger of Vanished Cases — a public feed of citations confirmed real vs. fabricated per filing [similar to #1]
    - Rewrite: **Brief Autopsy Report** — a citation-by-citation forensic exhibit built from an opposing party's filing, ready for a fee motion.
12. Pixel Autopsy for Claim Photos — screens claim photos for AI-generation artifacts pre-escalation
13. Cite or Sight — reads the actual case text and checks the quote matches, not just that the case exists
14. Bounty Report Report Card — scores each incoming vuln report on 5 plausibility signals before triage [similar to #10/#30]
    - Rewrite: **Fabrication Confidence Meter** — attaches a reproducibility-weighted score to a report before a human triager ever opens it.
15. The Docket Watchdog — a clerk-facing dashboard flagging filings with unverifiable citations
16. Fabrication Fingerprint — clusters AI-slop reports by shared hallucination patterns across maintainers
17. Second Reader for Insurance AI — a parallel pass over carrier AI summaries before payout approval [safe/vague]
    - Rewrite: **The Adjuster's Alibi** — a signed audit trail linking every contested payout figure to its exact source line, generated at approval time.
18. Trust-but-Verify Inbox — a shared triage queue across sibling open-source projects [similar/vague]
    - Rewrite: **The Escrowed Report** — a vuln report only reaches an inbox after its own bot-run reproduction evidence is attached alongside it.
19. The Smudge Detector — flags which source document pages an AI summary actually read vs skipped [similar to #4]
    - Rewrite: **Claim File X-Ray** — a page-by-page coverage heat map showing exactly what an AI claim summary read versus skipped.
20. Sanction Radar — predicts sanction risk of a brief before filing, based on citation confidence
21. CVE Backlog Buster — batch-checks the 27,000-deep NVD queue against source repos automatically
22. Report Twins — finds and merges duplicate AI-slop reports across maintainers of related projects [similar to #3]
    - Rewrite: **Cross-Project Slop Radar** — a shared pattern service so a report rejected by one maintainer auto-flags on sibling projects.
23. The Show-Your-Work Filter — requires and checks a reproduction script before a vuln report is queued [similar to #6]
    - Rewrite: **The Sandbox Gatekeeper** — every vulnerability report is run against a disposable live build before any human maintainer sees the ticket.
24. Claims Cross-Exam — asks an AI claim summary follow-up questions against the source file to catch gaps [similar to #4]
    - Rewrite: **The Missing-Page Detector** — flags exactly which pages of a medical record the summarizer never opened, using coverage traces instead of a manual reread.
25. Judge's Rulebook Autopilot — matches a draft filing against the specific judge's disclosure rules [similar to #5]
    - Rewrite: **The Forum-Shopping Filter** — flags which of a firm's boilerplate AI-drafted clauses violate a specific judge's live-tracked standing order.
26. The Curl Shield — an open-source triage bot forked for any maintainer, tuned on public slop patterns
27. Payout Pause Button — halts claims where the AI summary confidence is below threshold, routes to human
28. Verified Citation Badge — a plugin that stamps each citation in a brief as read-confirmed or unconfirmed
29. The Skeptical Intern — a triage assistant that explains, in plain language, why it doubts a submission [safe/vague]
    - Rewrite: **The Debunk Memo** — auto-drafts the exact evidence-quoting rejection a maintainer needs to send back for each fake report.
30. Grade Book for Vuln Reports — persistent scorecards per submitter, so repeat sloppy reporters get deprioritized

## Cards

---
id: s3-ideator-balanced-T7-02-r1#01
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# Cite or Sight

One-liner (≤20 words): Reads every cited case's full text and confirms the quote matches, not just that the case exists.

Buyer and niche (≤25 words): Solo and small-firm litigators and paralegals drafting briefs under courts' new GenAI citation-verification standing orders.

Pain and evidence (≤40 words; cite the pain dossier file): Paid legal AI still hallucinates (Westlaw 33%, GPT-4 43%); manual cite-checking takes 2-5 hours per brief while sanctions already run into the tens of thousands. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Pulls each cited case from a legal database, loads the full opinion in one long-context pass, and confirms the quoted proposition and pin cite actually appear there; flags fabricated or misquoted cites, not just missing ones, before filing.

Why now (≤25 words): 1M-token context and falling inference cost (TC-25) make reading full opinions for every citation affordable on a per-brief basis.

Demo moment (≤20 words): Feed a real sanctioned brief from a public tracker; watch it flag the exact fabricated quote in seconds.

Business model (≤15 words): Per-brief fee or monthly seat priced below a proofreader's hourly rate.

---
id: s3-ideator-balanced-T7-02-r1#02
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# The Sandbox Gatekeeper

One-liner (≤20 words): Auto-reproduces every reported vulnerability in a disposable sandbox before it reaches a maintainer's inbox.

Buyer and niche (≤25 words): Foundations and companies backing widely used open-source libraries whose volunteer maintainers are flooded with AI-slop vulnerability reports.

Pain and evidence (≤40 words; cite the pain dossier file): curl closed its bounty after finding "not even one in twenty" reports real; each still costs 30 minutes to hours to disprove while genuine bugs queue behind fakes. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Spins up the affected project version in a disposable container, runs the reporter's proof-of-concept exactly as written, and only forwards the ticket if the exploit reproduces; unreproduced reports get an automatic, evidence-based decline instead of a human read.

Why now (≤25 words): Cheap sandboxed compute plus long-context models (TC-25) that read a proof-of-concept alongside the codebase to judge plausibility.

Demo moment (≤20 words): Submit a real fabricated curl-style report citing a nonexistent function; the sandbox run fails and the ticket never queues.

Business model (≤15 words): Flat monthly fee paid by a foundation per covered project, not per report.

---
id: s3-ideator-balanced-T7-02-r1#03
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# The Adjuster's Alibi

One-liner (≤20 words): Stamps every AI claim-summary figure with the exact source-document line that backs it, at approval time.

Buyer and niche (≤25 words): Claims adjusters at mid-size carriers whose in-house AI summarizes medical records and files before payout decisions.

Pain and evidence (≤40 words; cite the pain dossier file): 98% of adjusters' AI-related reviews are negative; a missed detail like "a smudge on a document" can cause a wrong payout, and the adjuster "bears the brunt." (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Re-reads the full source claim file alongside the AI summary, links each contested figure (amount, diagnosis code, date) to its exact source page and line, and produces a signed audit trail before the adjuster approves payout.

Why now (≤25 words): Cheap long-context document reading (TC-25) makes re-checking whole claim files, not just summaries, affordable per claim.

Demo moment (≤20 words): Click a disputed figure in a claim summary and watch it jump straight to the underlying document line.

Business model (≤15 words): Per-claim add-on fee sold to carriers alongside their existing AI summarizer.

---
id: s3-ideator-balanced-T7-02-r1#04
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# Brief Autopsy Report

One-liner (≤20 words): Turns opposing counsel's filing into a citation-by-citation forensic exhibit ready to attach to a fee motion.

Buyer and niche (≤25 words): Litigation firms whose new duty is catching the other side's fabricated citations, not only checking their own.

Pain and evidence (≤40 words; cite the pain dossier file): A court denied a fee award because counsel "did not alert the court to the fabricated citations"; lawyers are now "dinged" for missing an opponent's fakes. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Ingests any filed brief, verifies every citation against case law databases and full opinion text, and outputs a court-ready exhibit listing each fabricated or unverifiable cite with the supporting evidence needed for a motion.

Why now (≤25 words): Cheap long-context verification (TC-25) turns checking every citation in an entire opposing brief into a same-day pass.

Demo moment (≤20 words): Drop in a real sanctioned brief from a public tracker; get a filed-format exhibit in under a minute.

Business model (≤15 words): Pay-per-brief pricing, marketed for motion practice rather than routine drafting review.

---
id: s3-ideator-balanced-T7-02-r1#05
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# The Debunk Memo

One-liner (≤20 words): Drafts the exact evidence-backed rejection a maintainer needs to send back for each fake vulnerability report.

Buyer and niche (≤25 words): Open-source maintainer teams and their backing foundations who still must personally disprove and respond to each AI-slop report.

Pain and evidence (≤40 words; cite the pain dossier file): Debunking reports "take a serious mental toll... and sometimes also a long time"; one maintainer got 20+ fake reports in three weeks. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): After a report fails automated reproduction, composes a specific rejection citing the nonexistent function or fabricated commit hash the reporter invented, quoting the exact code that disproves the claim, ready to send or edit.

Why now (≤25 words): Long-context models (TC-25) compare a report against a full codebase and cite the exact disproving lines cheaply.

Demo moment (≤20 words): A fake report goes in; a ready-to-send, evidence-quoting rejection message comes out in seconds.

Business model (≤15 words): Bundled with sandbox verification as a per-project subscription, or sold standalone.

---
id: s3-ideator-balanced-T7-02-r1#06
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# Claim File X-Ray

One-liner (≤20 words): Renders a page-by-page heat map showing which parts of a claim file the AI summary actually covered.

Buyer and niche (≤25 words): Claims adjusters who must re-read entire source files to catch what a carrier's AI summarizer skipped or missed.

Pain and evidence (≤40 words; cite the pain dossier file): Carrier AI misses details like "a smudge on a document," and an adjuster only finds out after a claimant's "fury"; re-reading the whole file is the current workaround. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Aligns the AI summary's claims against the source file page by page, colors each page by coverage (read, skimmed, skipped), and lets the adjuster jump straight to unread pages before approving the payout.

Why now (≤25 words): Cheap 1M-token document processing (TC-25) makes full-file coverage mapping affordable per claim, not just the summary.

Demo moment (≤20 words): Load a multi-page medical record; the heat map lights up two skipped pages the summary missed.

Business model (≤15 words): Per-seat monthly license sold to carrier claims departments.

---
id: s3-ideator-balanced-T7-02-r1#07
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# Fabrication Confidence Meter

One-liner (≤20 words): Scores an incoming vulnerability report's plausibility before a human triager ever opens the ticket.

Buyer and niche (≤25 words): Bug-bounty platforms and corporate program owners whose triagers spend 30-60 minutes per report, most of them invalid.

Pain and evidence (≤40 words; cite the pain dossier file): One firm received 1,390 reports in half a year with about 70% rejected before reproduction; platforms report 60-80% of submissions invalid. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Checks whether referenced functions, commit hashes and file paths exist in the codebase, attempts the described exploit path automatically, and attaches a plausibility score plus evidence summary to the ticket before a human analyst sees it.

Why now (≤25 words): Cheap long-context reading (TC-25) checks full codebases against each incoming report affordably at platform scale.

Demo moment (≤20 words): Feed a batch of real and fabricated reports; watch the queue re-sort by evidence-backed score live.

Business model (≤15 words): Per-report processing fee charged to the bounty program, undercutting an analyst's hourly cost.

---
id: s3-ideator-balanced-T7-02-r1#08
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r1
---

# Docket Watchdog

One-liner (≤20 words): Flags filings with unverifiable citations for court clerks before a judge ever reads them.

Buyer and niche (≤25 words): Court clerks and pro se staff attorneys screening a docket with no capacity to individually check AI-written filings.

Pain and evidence (≤40 words; cite the pain dossier file): A judge noted "scant resources to spare ferreting out erroneous AI citations"; pro se litigants account for 59% of documented hallucination cases and get no AI-use guidance. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Scans each newly filed document, verifies every citation against case law databases, and adds a one-line flag to the clerk's docket view listing any unverifiable or fabricated cites, taking no action on the filing itself.

Why now (≤25 words): Cheap per-document verification (TC-25) plus scanned-filing extraction (TC-30) makes docket-wide screening affordable on a court budget.

Demo moment (≤20 words): Upload a batch of dockets; the pro se filing with three fake cases lights up instantly.

Business model (≤15 words): Per-court annual license, priced against the judicial and clerk time lost today.

<!-- COMPLETE -->
