## Cards

---
id: s3-ideator-novel-T7-01-r3#01
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
---

# Offline Trial-Bag Citation Verifier

One-liner (<=20 words): A laptop-only tool checks every citation in a brief against cached case law, no internet needed at the courthouse.

Buyer and niche (<=25 words): Solo and small-firm litigators who prep and argue trial weeks inside courthouses with unreliable or locked-down public wifi.

Pain and evidence (<=40 words): Manual cite-checking still takes 2-5 hours per brief because paid tools hallucinate 17-33% of citations, and courthouse-side prep leaves no reliable connection to run cloud checkers. (src: outputs/s3-ideate/pain/T7-dossier.md, P2)

How it works (<=50 words): Before leaving the office, the lawyer syncs the matter's jurisdiction case-law corpus onto the laptop. A local model then checks every citation in the draft against the cached full case text, flagging any that misquote, misstate a holding, or don't exist, and shows the exact matching paragraph for each pass.

Why now (<=25 words): gpt-oss-20b (Aug 2025) fits a 16GB laptop, running full citation-matching reasoning entirely offline through an 8-hour trial day.

Demo moment (<=20 words): Disconnect wifi, load a brief with one fabricated case; the flag still appears with no matching paragraph shown.

Business model (<=15 words): Per-seat annual license sold to small litigation and appellate practices.

---
id: s3-ideator-novel-T7-01-r3#02
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
---

# Courthouse Self-Help Citation Kiosk

One-liner (<=20 words): A standalone kiosk lets pro se filers check their own citations before submitting, with no network connection required.

Buyer and niche (<=25 words): Court self-help centers and clerks in rural or under-resourced courthouses serving pro se litigants who draft their own filings.

Pain and evidence (<=40 words): A judge said there are "scant resources to spare ferreting out erroneous AI citations," and pro se litigants account for 59% of documented hallucination cases, with no pre-filing check offered today. (src: outputs/s3-ideate/pain/T7-dossier.md, P4)

How it works (<=50 words): A kiosk laptop preloaded with the state's case reporter runs fully offline all day. A filer types or scans a draft filing; a local model extracts each citation, checks it against the cached reporter text, and prints a one-page report showing the matching paragraph or a "not found" flag before submission.

Why now (<=25 words): Local inference (gpt-oss-20b, llama.cpp) lets a state-funded kiosk run a full clerk's shift with no network bill or connection.

Demo moment (<=20 words): Type a filing citing a real and a fabricated case; the printed report flags only the fabricated one.

Business model (<=15 words): One-time court licensing fee per kiosk plus an annual corpus-update fee.

---
id: s3-ideator-novel-T7-01-r3#03
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
---

# Air-Gapped Vulnerability Reproduction Bench

One-liner (<=20 words): Reproduces a reported bug against a mirrored codebase inside a disconnected security enclave, no cloud API call ever made.

Buyer and niche (<=25 words): Security teams at defense contractors and critical-infrastructure operators whose review networks are air-gapped and cannot send reports to any external service.

Pain and evidence (<=40 words): Maintainers report "20-40 reports a week" of AI-slop and feel "effectively DDoS'ed," with confirmed-vulnerability rates under 5%; regulated air-gapped teams cannot even try a cloud triage tool on the reports at all. (src: outputs/s3-ideate/pain/T7-dossier.md, P6)

How it works (<=50 words): Before the network is cut, the team loads the report, the mirrored target repo and its build environment onto an isolated workstation. A local model attempts to reproduce each report's exact steps against the mirror, marking it reproduced, not-reproduced or inconclusive, citing the exact commit and line tested, for a full working day offline.

Why now (<=25 words): gpt-oss-120b runs full reasoning on one local 80GB GPU, letting reproduction-grade triage happen with zero external network calls.

Demo moment (<=20 words): On an air-gapped machine, a report citing a nonexistent function is marked not-reproduced, with the missing symbol shown.

Business model (<=15 words): Site license per secure enclave, priced by workstation count.

---
id: s3-ideator-novel-T7-01-r3#04
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
---

# Rural Maintainer's Offline Slop Filter

One-liner (<=20 words): A maintainer's laptop keeps triaging vulnerability reports against the local repo all night, no matter how flaky the home connection is.

Buyer and niche (<=25 words): Volunteer open-source maintainers with unreliable rural or evening-only internet, sponsored by their project's foundation to keep intake sustainable.

Pain and evidence (<=40 words): curl's maintainer wrote that AI-slop reports "take a serious mental toll to manage," with confirmed reports under 5%; a paid cloud triage service is useless the moment the maintainer's connection drops. (src: outputs/s3-ideate/pain/T7-dossier.md, P6)

How it works (<=50 words): The maintainer syncs the repo and the week's new reports once, when online. A local model then works fully offline, attempting each report's steps against the mirrored code overnight or on a flight, and only re-syncs verdicts once connectivity returns, so triage never waits on the maintainer's connection.

Why now (<=25 words): llama.cpp and Ollama serve quantized models at high speed on ordinary consumer hardware, so triage carries no ongoing API dependency.

Demo moment (<=20 words): In airplane mode, a report citing a fake commit hash is flagged unreproducible against the mirrored repo.

Business model (<=15 words): Free for individual maintainers; sponsored annual fee paid by the project's foundation.

---
id: s3-ideator-novel-T7-01-r3#05
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
---

# Storm-Response Clubhouse Claim Auditor

One-liner (<=20 words): Drafts and checks a storm-damage insurance claim entirely offline, exactly when the storm has also cut the power and internet.

Buyer and niche (<=25 words): Volunteer treasurers and board members of small sports clubs and nonprofits who must file their own storm-damage claims with no professional adjuster.

Pain and evidence (<=40 words): Carrier AI summaries already miss "an important detail from a medical report," causing "an inaccurate payout"; a treasurer drafting their own claim risks the same unsupported items, with no one to catch it before submission. (src: outputs/s3-ideate/pain/T7-dossier.md, P9)

How it works (<=50 words): After a storm, the treasurer photographs the damage and dictates a description into a laptop preloaded with the policy PDF and past inspection records. A local model drafts the claim narrative and checks every claimed item against the actual policy clauses, flagging anything unsupported, entirely offline until service returns hours later.

Why now (<=25 words): gpt-oss-20b fits a 16GB laptop and drafts plus checks the claim fully offline, so filing isn't blocked by the outage.

Demo moment (<=20 words): Unplug the router, dictate a claim with one invented item; it flags as unsupported against the cached policy.

Business model (<=15 words): Low annual fee bundled with the club's insurance policy or association membership.

<!-- COMPLETE -->
