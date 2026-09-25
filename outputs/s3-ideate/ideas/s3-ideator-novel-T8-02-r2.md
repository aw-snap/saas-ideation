## Cards

---
id: s3-ideator-novel-T8-02-r2#01
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r2
---

# On-Device Elder-Fraud SAR Drafter

One-liner (≤20 words): Drafts suspicious-activity reports from a member's exploitation pattern without the data ever leaving the credit union's network.

Buyer and niche (≤25 words): BSA/compliance officers at small credit unions investigating elder financial exploitation on members' accounts.

Pain and evidence (≤40 words; cite the pain dossier file): 147,127 elder-fraud complaints in 2024, up 46%, $4.885B lost; families notice weeks after the money is gone, and credit unions bear the SAR-filing burden. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): A local model (no cloud calls) scans a flagged member's transaction history on the compliance officer's own workstation, matches gift-card, romance-scam and new-payee patterns, then drafts a SAR narrative and evidence packet — keeping protected member financial data on the credit union's own network throughout.

Why now (≤25 words; name the specific capability): OpenAI's gpt-oss-20b (TC-22, Aug 2025) fits 16GB laptops, and llama.cpp (TC-26) serves it locally — no cloud vendor, no specialist install.

Demo moment (≤20 words): Toggle airplane mode; feed a synthetic statement with a hidden gift-card scam; the drafted SAR appears in seconds.

Business model (≤15 words): Per-branch SaaS license plus a flat on-prem deployment fee; scales with member count.

---
id: s3-ideator-novel-T8-02-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T8
cell: { buyer: B2C, capability: extractor, track: novel }
parents: [A-seed-03-mech-1, A-seed-03-mech-2, A-seed-03-tech-1]
source_task: s3-ideator-novel-T8-02-r2
---

# Financial Legacy Narration Capture

One-liner (≤20 words): A parent narrates their accounts and wishes aloud; the app builds the structured proxy directory an heir will need.

Buyer and niche (≤25 words): Adult children and paid daily money managers setting up financial proxy access before an aging parent's capacity declines.

Pain and evidence (≤40 words; cite the pain dossier file): Fiduciaries are told to "document everything or risk abuse accusations," yet institution lists and account intentions usually exist only in a parent's head, captured nowhere until it's too late. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The parent, or the proxy together with them, narrates each institution, account and wish while walking through paperwork; on-device speech recognition aligns narration to a structured, confidence-tagged directory, and a follow-up voice agent asks clarifying questions to fill any gaps before capacity or memory fades.

Why now (≤25 words; name the specific capability): Kyutai's open-weight streaming speech recognition (TC-31, 2025) transcribes on-device, so a family's account list and wishes never leave the room.

Demo moment (≤20 words): A father narrates three accounts on camera; the app returns a tagged directory: "checking, First National, per Dad, high confidence."

Business model (≤15 words): $79 one-time setup fee per family, or bundled into a daily-money-manager's toolkit.

---
id: s3-ideator-novel-T8-02-r2#03
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r2
---

# Guided POA Teller Copilot

One-liner (≤20 words): Reads the credit union's own POA policy live and coaches the teller through exactly what to accept.

Buyer and niche (≤25 words): Credit union compliance and branch-training officers standardizing how tellers evaluate a member's power-of-attorney paperwork at the counter.

Pain and evidence (≤40 words; cite the pain dossier file): Banks demand "the POA has to be on the bank/credit union's form"; a rejected POA once left a 94-year-old without pension income for seven months, and every rejection is a fresh judgment call. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The compliance officer's own screen shows the credit union's POA acceptance policy; when a teller opens a member's POA, an agent reads both documents from the screenshot, flags missing clauses in plain language, and logs the check as an auditable event — the human still clicks every action.

Why now (≤25 words; name the specific capability): The read-screenshot-and-point loop from Claude's original computer-use API (TC-01) is now reliable enough at 61% OSWorld (TC-02) to trust for guided, human-executed coaching.

Demo moment (≤20 words): A sample POA is opened; the agent highlights the missing notary clause on-screen and logs the check instantly.

Business model (≤15 words): Per-branch training license, priced per teller seat, renewed annually with audit-ready logs.

---
id: s3-ideator-novel-T8-02-r2#04
track: novel
lineage: ai-native
territory: T8
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r2
---

# Confidential Fiduciary Ledger Builder

One-liner (≤20 words): Turns a parent's scanned statements into an audit-ready fiduciary accounting, without a client's financial life touching the cloud.

Buyer and niche (≤25 words): Professional daily money managers and court-appointed fiduciaries managing several elderly clients' finances under annual audit requirements.

Pain and evidence (≤40 words; cite the pain dossier file): VA fiduciaries file annual accountings and SSA audits whether payees "used and accounted for" every dollar; managers keep books by hand rather than risk pasting a client's bank data into consumer AI. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Given monthly statement scans, a local model extracts every transaction into a structured ledger, categorizes fiduciary versus personal spending, and drafts the annual accounting form — all inference running on the manager's own laptop, since client account numbers and balances never need to leave it.

Why now (≤25 words; name the specific capability): Gemma 3's 128K-context open weights (TC-37, Mar 2025) run on a consumer laptop, reading months of statements without a specialist install or cloud fee.

Demo moment (≤20 words): Upload three months of scanned statements; a categorized ledger and draft accounting form appear in under a minute.

Business model (≤15 words): $35/month per manager, tiered by number of client accounts handled.

---
id: s3-ideator-novel-T8-02-r2#05
track: novel
lineage: ai-native
territory: T8
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r2
---

# Confidential Appeal Drafter for Solos

One-liner (≤20 words): Drafts a Medicare Advantage appeal from a client's medical records on the attorney's own laptop, nothing sent to the cloud.

Buyer and niche (≤25 words): Solo elder-law attorneys and paid benefits advocates who draft Medicare Advantage and Medicaid appeals from clients' medical and financial records.

Pain and evidence (≤40 words; cite the pain dossier file): Only 11.5% of Medicare Advantage denials get appealed though 80.7% of appeals win; solos who could draft one avoid cloud AI, wary of the same privilege loss a federal ruling found in AI-drafted filings. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The attorney uploads a denial letter and the client's medical file to a local model running on their own laptop; it extracts the procedure code and deadline, drafts a citation-backed appeal against the plan's coverage criteria, and never sends a client record past the laptop's own disk.

Why now (≤25 words; name the specific capability): gpt-oss-20b (TC-22, Aug 2025) fits a 16GB laptop and needs no costly specialist install, unlike setups solo practitioners were priced out of.

Demo moment (≤20 words): Upload a sample denial letter and chart note offline; a ready-to-file appeal appears with the deadline counted down.

Business model (≤15 words): $59 per appeal, or $25/month unlimited during an active client's appeal window.

<!-- COMPLETE -->
