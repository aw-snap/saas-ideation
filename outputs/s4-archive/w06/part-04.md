---
id: I-3576
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#01
merged: []
---

# Opposing-Counsel Citation Auditor

One-liner (≤20 words): An agent checks every citation in the other side's brief before your response deadline hits.

Buyer and niche (≤25 words): Litigation associates and paralegals at small-to-midsize firms who must respond to opposing filings within court deadlines.

Pain and evidence (≤40 words; cite the pain dossier file): Courts now expect a side to catch the other side's fabricated cites; one court denied a fee award because respondents did not alert the court to fake citations. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Upload the opposing filing. A browser agent logs into the firm's own case-law subscription, pulls every cited case, confirms it exists and supports the quoted proposition, and returns a redlined report with a confidence flag on every citation within minutes.

Why now (≤25 words; name the specific capability): Claude for Chrome (production, Dec 2025) lets an agent navigate logged-in legal databases inside the firm's own authenticated session.

Demo moment (≤20 words): Feed it a real hallucination-flagged brief from a documented sanctions case; every fake citation flags live.

Business model (≤15 words): Per-brief fee, or a monthly subscription tiered by filings checked.

---
id: I-3577
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#02
merged: []
---

# Docket-Wide Hallucination Screener

One-liner (≤20 words): A nightly agent sweeps a court's new filings and flags every fabricated citation before the hearing date.

Buyer and niche (≤25 words): Court clerks and staff attorneys managing dockets with rising volumes of pro se and AI-drafted filings.

Pain and evidence (≤40 words; cite the pain dossier file): A judge said there are scant resources to spare ferreting out erroneous AI citations; pro se litigants account for 59% of documented hallucination cases with no screening step today. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): A scheduled agent pulls each day's new filings from the court's e-filing portal, extracts every citation, checks each against a case-law database, and posts a one-page flag sheet to the clerk's queue, ranked by severity, before the assigned hearing.

Why now (≤25 words; name the specific capability): Sonnet 4.5 computer use (61.4% OSWorld, Sept 2025) runs long, unattended multi-step jobs across portal sessions overnight.

Demo moment (≤20 words): Point it at a real docket export; it surfaces the exact fabricated case from a documented sanctions ruling.

Business model (≤15 words): Court or state-funded annual license, priced by docket volume.

---
id: I-3578
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#03
merged: []
---

# Reproduction-First Vulnerability Gate

One-liner (≤20 words): An agent tries to actually reproduce a reported bug in a sandbox before a maintainer ever reads it.

Buyer and niche (≤25 words): Volunteer maintainers and open-source foundations running public vulnerability or bug-bounty intake for widely used projects.

Pain and evidence (≤40 words; cite the pain dossier file): curl's maintainer said AI-slop reports take a serious mental toll to manage; confirmed-vulnerability rate fell below 5% under 20-40 reports a week, feeling effectively DDoS'ed. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): New reports enter a sandbox instead of an inbox. An agent spins up the named software version, follows the reported steps exactly, and forwards only reports that actually reproduce, with every failed attempt logged so a rejected reporter can appeal with evidence.

Why now (≤25 words; name the specific capability): Cheap long-context inference, a 10x/year price drop per Epoch AI, makes running a full repro attempt per report affordable at volunteer-project scale.

Demo moment (≤20 words): Feed it a real fabricated curl-style report; watch it fail to reproduce and get auto-parked, not delivered.

Business model (≤15 words): Free tier for small projects, paid tier for corporate bug-bounty programs.

---
id: I-3579
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#04
merged: []
---

# CVE Backlog Reality Filter

One-liner (≤20 words): Re-checks the deep CVE backlog against real source code before an analyst ever opens a ticket.

Buyer and niche (≤25 words): CVE Numbering Authorities and NVD-adjacent triage staff drowning in unreviewed vulnerability submissions.

Pain and evidence (≤40 words; cite the pain dossier file): NVD now enriches only 15-20% of incoming CVEs and about 29,000 sit Not Scheduled, after fabricated entries like six complete-garbage SQLite CVEs entered the record. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): For each backlogged CVE, an agent fetches the named repository at the claimed version, checks whether the described function, commit or code path exists, and sorts the queue into confirmed-plausible, needs-human and likely-fabricated before a human analyst opens it.

Why now (≤25 words; name the specific capability): A GPT-3-level model's price fell from $60 to $0.06 per million tokens, making per-CVE source verification affordable at backlog scale.

Demo moment (≤20 words): Run it on the public SQLite CVE cluster; it flags all six as fabricated in seconds.

Business model (≤15 words): Contract with a CNA or security vendor, priced per CVE processed.

---
id: I-3580
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#05
merged: []
---

# Claims Summary Diff Viewer

One-liner (≤20 words): Shows an adjuster exactly which sentences in an AI claim summary aren't backed by the file.

Buyer and niche (≤25 words): Claims adjusters at insurance carriers who must sign off on AI-generated claim summaries before payout.

Pain and evidence (≤40 words; cite the pain dossier file): Adjusters bore the brunt of claimants' fury when a carrier's AI summary missed a detail from a medical report; 98% of Glassdoor reviews mentioning AI are negative. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The full claim file, medical records, adjuster notes and photos, loads alongside the carrier's AI-written summary. Each summary sentence is checked against the source file and marked backed, unsupported or contradicted, with a jump-to-source link for every flag.

Why now (≤25 words; name the specific capability): 1M-token context windows hold an entire claim file in one prompt with no chunking, so nothing is missed to truncation.

Demo moment (≤20 words): Load a summary with a deliberately dropped detail; the unsupported sentence lights up red instantly.

Business model (≤15 words): Per-seat monthly license sold to carrier claims departments.

---
id: I-3581
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#06
merged: []
---

# Claim Photo Provenance Checker

One-liner (≤20 words): Flags AI-altered claim photos and documents at intake, before a claim is ever escalated.

Buyer and niche (≤25 words): Special investigations units and fraud examiners at insurance carriers handling photo and document evidence.

Pain and evidence (≤40 words; cite the pain dossier file): An estimated 20-30% of claims may contain AI-altered media and 99% of insurers have already seen it, but forensic checks today only run after a claim is escalated. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Every submitted photo and document is scanned at intake for generation artifacts, metadata gaps and internal inconsistencies (mismatched shadows, duplicated textures), producing a risk score attached to the claim file before any adjuster reviews it, not weeks later.

Why now (≤25 words; name the specific capability): Multimodal long-context models now hold and compare a claim's whole image set in one pass, cheaply, at intake volume.

Demo moment (≤20 words): Submit a known AI-altered damage photo; the risk score spikes before a human opens the claim.

Business model (≤15 words): Per-claim scanning fee bundled into the carrier's claims platform.

---
id: I-3582
track: novel
lineage: ai-native
territory: T7
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#07
merged: []
---

# Verification-as-a-Service API for Agents

One-liner (≤20 words): Any drafting agent pays a few cents per call to verify a citation before it's allowed to cite it.

Buyer and niche (≤25 words): AI vendors and legal-tech platforms whose drafting agents need to certify citations in real time, with no human in the loop.

Pain and evidence (≤40 words; cite the pain dossier file): Paid legal AI still hallucinates at 17-43% even from leading vendors, so every AI-drafted citation needs an independent check before it reaches a filing. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): A drafting agent sends a proposed citation and quoted proposition to an endpoint; the service checks it against a case-law database and returns pass, fail or uncertain, paid per call over plain HTTP with no subscription, account or human approval step.

Why now (≤25 words; name the specific capability): x402 micropayments (from 2025-05) let any agent pay per verification call directly inside the HTTP request, no signup.

Demo moment (≤20 words): A drafting agent calls the endpoint live on stage and gets a verdict back in under two seconds.

Business model (≤15 words): Per-call micropayment, roughly a cent per citation verified.

---
id: I-3583
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r1
raw_id: s3-ideator-novel-T7-01-r1#08
merged: []
---

# Demand Letter ICD Cross-Checker

One-liner (≤20 words): Flags every ICD code and date in an AI-drafted demand letter that doesn't match the medical file.

Buyer and niche (≤25 words): Solo bodily-injury adjusters and small public-adjusting practices handling personal-injury demand letters without a firm's back office.

Pain and evidence (≤40 words; cite the pain dossier file): 37% of personal-injury lawyers now use generative AI to draft demand letters, and ICD codes and dates in those letters routinely don't match the underlying medical records. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The demand letter and its attached medical records load together. Every ICD code, injury date and dollar figure in the letter is checked against the records, and mismatches are highlighted inline before the file moves to negotiation.

Why now (≤25 words; name the specific capability): Cheap 1M-token context makes holding a full medical record set alongside a demand letter affordable per case, not just per litigation.

Demo moment (≤20 words): Load a letter with one swapped ICD code; the mismatch highlights immediately, before it's sent.

Business model (≤15 words): Per-letter fee or a low monthly subscription for solo practices.

<!-- COMPLETE -->
