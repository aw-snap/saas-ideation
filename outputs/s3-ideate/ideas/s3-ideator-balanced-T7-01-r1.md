## Titles

1. Citation Guard for OFW Position Papers
2. POEA Contract Clause Red-Flag Scanner
3. Job Offer Authenticity Checker for Migrant Workers
4. Opposing Counsel's Fake-Citation Catcher
5. NLRC Filing Rule Tracker
6. AI-Slop Vulnerability Report Debunker
7. ICD-Code Cross-Checker for Demand Letters
8. Carrier AI Summary Hallucination Auditor
9. AI Bug Bounty Triage Assistant [similar] [safe]
   → Rewrite: Repo-Grep Verifier for Bounty Claims — checks whether the cited function/commit hash in a vulnerability report exists in the actual repo.
10. Multi-Jurisdiction Case Law Validator [similar]
   → Rewrite: Arbitration Clause Jurisdiction Clash Detector — flags when a host-country contract clause conflicts with mandatory home-country labor law.
11. Host-Country Labor Law Verifier [similar]
   → Rewrite: Live Labor-Ministry Rule Feed per Deployment Country — a watcher that pings when a host country's labor ministry rules change mid-case.
12. Paralegal's Citation Second Brain [safe]
   → Rewrite: Citation Debt Ledger — tracks every unverified citation across a firm's active caseload like technical debt, aged and scored by risk.
13. Fake Precedent Flagger [similar]
   → Rewrite: Precedent Provenance Stamp — every citation in a filing gets a verification stamp showing source and timestamp, visible to the court.
14. Recruitment Agency License Verifier
15. Fabricated Evidence Alert System [safe]
   → Rewrite: Chain-of-Custody Bot for Claim Photos — cross-checks image metadata and AI-generation signals against the claim timeline.
16. AI Brief Scrubber [safe]
   → Rewrite: Redline-Before-Filing Autopilot — walks a draft brief paragraph by paragraph, redlining every unverified factual or citation claim before signature.
17. Standing Order Compliance Checker [similar]
   → Rewrite: Per-Judge AI Disclosure Autofill — auto-drafts the exact AI-use certification language required by the specific adjudicator.
18. CVE Database Pollution Filter
19. Visa Document Forgery Detector [similar]
   → Rewrite: Deployment Papers Cross-Stamp Validator — reconciles OEC, visa, COE and job-order numbers across live government and embassy databases in one pass.
20. Bodily-Injury Letter Fact-Checker [similar]
   → Rewrite: Demand-Letter-to-Chart Diff Viewer — a side-by-side diff between an AI-drafted demand letter and the underlying medical chart.
21. Adjuster Fatigue Reliever [safe]
   → Rewrite: Claim Summary Confidence Meter — every sentence of a carrier's AI claim summary gets a per-sentence confidence score traced to its source page.
22. SIU Photo Forensics Assistant [similar]
   → Rewrite: First-Notice-of-Loss Triage Score — scores incoming claims for AI-alteration risk at intake, before assignment, not after escalation.
23. Overworked Maintainer's Firewall [similar]
   → Rewrite: Duplicate-Report Fingerprint Matcher — clusters incoming vulnerability reports by structural fingerprint to surface near-duplicate AI-slop instantly.
24. Position Paper Pre-Filing Auditor [similar]
   → Rewrite: One-Click NLRC Filing Readiness Score — a single gate score and checklist before submission, not a citation-by-citation walkthrough.
25. Trafficking Case Evidence Verifier
26. Judge-by-Judge AI Rule Digest [similar]
   → Rewrite: Standing-Order Diff Alert — pings the paralegal only when a specific judge's AI-disclosure rule has changed since the last filing.
27. Contract Template Drift Detector
28. Embassy Document Verification Assistant [similar]
   → Rewrite: Consular Stamp Lookup Bot — a single-purpose live lookup confirming a specific embassy attestation number is real.
29. Second-Opinion Citation Checker for Litigators [similar]
   → Rewrite: Shadow Cite-Check Running in the Background — a passive co-pilot that checks citations continuously as the attorney drafts, not after.
30. OFW Case File Integrity Checker [safe]
   → Rewrite: Case File Time-Bomb Detector — scans a whole case file for any single fabricated element that could sink the filing, ranked by blast radius.

## Cards

---
id: s3-ideator-balanced-T7-01-r1#01
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Citation Guard Before You File

One-liner (≤20 words): Checks every case citation in a draft brief against real court records before the lawyer hits submit.

Buyer and niche (≤25 words): Small litigation and labor-law firms and their paralegals, who draft dozens of position papers and briefs citing case law every week.

Pain and evidence (≤40 words; cite the pain dossier file): Paid legal AI still hallucinates (17-43% of cites per Stanford RegLab); manual cite-checking takes 2-5 hours per brief and firms have paid $31k-$59.5k in sanctions for fake cites. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Paralegal drops in a draft brief; the tool pulls every citation, retrieves the actual case text from a public case-law database, and flags any citation that doesn't match, is missing, or is misquoted, showing the real passage side by side.

Why now (≤25 words; name the specific capability): 1M-token context and sub-$1-per-million-token inference pricing make checking every citation against full case text affordable per brief.

Demo moment (≤20 words): Upload a brief with one planted fake case; it's flagged red in under a minute, real case shown alongside.

Business model (≤15 words): Per-brief fee or monthly seat license for small firms.

---
id: s3-ideator-balanced-T7-01-r1#02
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Verify My Job Offer

One-liner (≤20 words): Migrant workers upload a job offer or contract; it checks the agency, employer and stamps against live government registries.

Buyer and niche (≤25 words): Overseas job seekers and their families, plus recruitment agencies checking sub-agent paperwork, who cannot tell AI-generated fake offers from real ones.

Pain and evidence (≤40 words; cite the pain dossier file): AI-altered documents already fool first review; roughly 1 in 50 forged documents is AI-generated and insurers report related fraud up 71% year over year. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The tool extracts the agency license number, job order number and employer name from the uploaded offer, logs into the licensing authority's public verification portal to confirm each number is real and matches, and returns a plain-language verdict.

Why now (≤25 words; name the specific capability): Browser agents can already read and act on government verification portals that have no public API.

Demo moment (≤20 words): Upload a doctored offer letter; the tool flags the license number as unregistered within seconds.

Business model (≤15 words): Small flat fee per check, paid by the worker or a family member.

---
id: s3-ideator-balanced-T7-01-r1#03
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Catch Their Fake Cites First

One-liner (≤20 words): Scans the other side's filing for fabricated citations before you have to respond, so you never miss one.

Buyer and niche (≤25 words): Litigators and paralegals who must now review opposing counsel's briefs for AI-generated fake citations, not just their own.

Pain and evidence (≤40 words; cite the pain dossier file): Courts have denied fee awards and criticized lawyers for failing to flag opposing counsel's fabricated citations, roughly doubling the citation-checking workload for every filing received. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Upload an opposing filing; the tool extracts every cited case, verifies each against a public case-law database, and produces a one-page memo listing any fabricated, misquoted or nonexistent citations, ready to attach to a response.

Why now (≤25 words; name the specific capability): Cheap long-context models make checking a full brief's citations cost cents instead of hours of associate time.

Demo moment (≤20 words): Feed in a filing with a known fake citation; the tool reproduces the flag in seconds.

Business model (≤15 words): Pay-per-filing check, or a monthly plan bundled with case management software.

---
id: s3-ideator-balanced-T7-01-r1#04
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Grep the Bug Report First

One-liner (≤20 words): Checks whether a vulnerability report's cited function and commit hash actually exist in the repo.

Buyer and niche (≤25 words): Open-source foundations and corporate-sponsored maintainer teams drowning in AI-generated bug bounty and vulnerability submissions.

Pain and evidence (≤40 words; cite the pain dossier file): curl found "not even one in twenty" AI-slop reports real; some maintainers get 20-40 reports a week and feel "effectively DDoS'ed." (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The tool parses each incoming report, extracts every claimed file, function and commit hash, checks them against the live repository, and sorts reports into "cites real code" versus "cites nothing that exists," which alone accounts for most fakes.

Why now (≤25 words; name the specific capability): Cheap large-context models can hold a whole mid-size repo plus the report in one pass for pennies.

Demo moment (≤20 words): Feed in a fabricated report citing a nonexistent function; it's flagged in seconds, real repo search shown.

Business model (≤15 words): Usage-based API pricing per report triaged, sold to foundations and bounty platforms.

---
id: s3-ideator-balanced-T7-01-r1#05
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Demand Letter vs. the Chart

One-liner (≤20 words): Lines up an AI-drafted demand letter against the actual medical chart and highlights every unsupported figure.

Buyer and niche (≤25 words): Bodily-injury claims adjusters at insurance carriers, who must cross-check AI-drafted demand letters against medical records for every claim.

Pain and evidence (≤40 words; cite the pain dossier file): ICD codes and dates in AI-drafted demand letters often don't match medical records; 37% of personal-injury lawyers already use generative AI to draft them. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The adjuster uploads the demand letter and the medical records; the tool extracts every dollar figure, ICD code and date from both, aligns them, and shows a side-by-side diff highlighting anything in the letter with no matching record.

Why now (≤25 words; name the specific capability): Document OCR at $1-2 per 1,000 pages makes reading scanned medical charts affordable per claim.

Demo moment (≤20 words): Upload a mismatched letter and chart; the unsupported line item highlights red instantly.

Business model (≤15 words): Per-claim fee, sold to carriers' claims departments.

---
id: s3-ideator-balanced-T7-01-r1#06
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Confidence Score for AI Summaries

One-liner (≤20 words): Scores every sentence of a carrier's AI claim summary against the source documents, so adjusters know what to trust.

Buyer and niche (≤25 words): Claims adjusters at insurance carriers who must re-verify their own carrier's AI summaries before acting on them.

Pain and evidence (≤40 words; cite the pain dossier file): 98% of adjusters' reviews mentioning AI are negative; a missed detail in an AI summary "can result in an inaccurate payout" and the adjuster "bore the brunt." (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The tool takes the carrier's existing AI summary plus the source claim file, traces each summary sentence back to its source page, and marks any sentence with no clear source in orange for manual review.

Why now (≤25 words; name the specific capability): Cheap long-context inference makes per-sentence source-tracing affordable to run on every claim, not just escalated ones.

Demo moment (≤20 words): A summary sentence about a missing injury detail lights up orange, linked to its one true source page.

Business model (≤15 words): Per-seat license sold to carrier claims departments, or bundled into the summarizer.

---
id: s3-ideator-balanced-T7-01-r1#07
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# Red-Flag My Deployment Contract

One-liner (≤20 words): Checks an AI-drafted overseas employment contract clause by clause against the mandatory standard contract and flags illegal terms.

Buyer and niche (≤25 words): Licensed recruitment and manning agencies' compliance staff and paralegals, who review deployment contracts drafted or edited with AI tools before submission.

Pain and evidence (≤40 words; cite the pain dossier file): Paid AI legal tools still hallucinate on drafted terms and require manual line-by-line checking; sanctions and fee awards already turn on undetected drafting errors. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Upload the draft contract; the tool extracts each clause, compares wage, hours, repatriation and fee terms against the mandatory standard employment contract template, and flags any clause that is missing, weaker, or contradicts the standard.

Why now (≤25 words; name the specific capability): 1M-token context and cheap inference let a full contract be checked clause by clause in one pass for cents.

Demo moment (≤20 words): Upload a contract missing the mandatory repatriation clause; it's flagged red with the required wording shown.

Business model (≤15 words): Per-contract fee or monthly plan sold to agency compliance teams.

---
id: s3-ideator-balanced-T7-01-r1#08
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
---

# The Right Words for This Judge

One-liner (≤20 words): Generates the exact AI-use disclosure or certification language required by the specific judge hearing your filing.

Buyer and niche (≤25 words): Small litigation firms and paralegals filing across many courts, each with a different standing order on disclosing AI use.

Pain and evidence (≤40 words; cite the pain dossier file): GenAI standing orders conflict across judges, adding "a lack of consistency" and "additional burdens and costs on litigants" with every filing checked against a different rule. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The paralegal names the assigned judge; the tool looks up that judge's current standing order and drafts the exact certification paragraph required, ready to paste into the filing, updating automatically if the order changes.

Why now (≤25 words; name the specific capability): Cheap long-context models can hold and reason over hundreds of standing orders and update instantly when one changes.

Demo moment (≤20 words): Pick two judges with conflicting rules; the tool produces two correctly worded certifications in seconds.

Business model (≤15 words): Subscription per firm, priced by number of active jurisdictions tracked.

<!-- COMPLETE -->
