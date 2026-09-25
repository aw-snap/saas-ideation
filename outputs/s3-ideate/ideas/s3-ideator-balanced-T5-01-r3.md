## Cards

---
id: s3-ideator-balanced-T5-01-r3#01
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r3
---

# The Broker Who Doesn't Submit Blind

One-liner (≤20 words): Insurance brokers pre-audit a client's real security controls before filing the renewal, and pay only when it binds.

Buyer and niche (≤25 words): Small-business cyber-insurance brokers who file renewal applications for 5-50 person firms with no in-house IT staff.

Pain and evidence (≤40 words): Partial MFA deployment still counts as "no," and insurers have sued to void policies over one misrepresented answer; about 10% of claims are denied for misrepresentation. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): With client consent, the agent walks every console (M365, VPN, practice-management) the questionnaire references, checks each claimed control against the real setting, flags mismatches before the broker files, and only bills the broker once the carrier binds the policy without a misrepresentation exclusion.

Why now (≤25 words): Claude for Chrome now operates real admin consoles inside a granted browser session in production, not a research demo.

Demo moment (≤20 words): Live audit catches an MFA mismatch the broker was about to submit as "yes."

Business model (≤15 words): Fee charged to the broker per bound policy; nothing if declined or later voided.

---
id: s3-ideator-balanced-T5-01-r3#02
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r3
---

# Pass or the Consultant Doesn't Bill

One-liner (≤20 words): CMMC compliance consultants get paid only when their small-manufacturer client actually passes the third-party assessment.

Buyer and niche (≤25 words): CMMC readiness consultants and MSPs preparing 5-50 person DoD subcontractors for their C3PAO Level 2 assessment.

Pain and evidence (≤40 words): A Level 2 assessment costs $104,670, and mismatched attestations have drawn False Claims Act settlements of $421,234 and $507,144 against small contractors. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Given access to the client's shop-floor and admin systems, the agent checks each NIST 800-171 and CMMC Level 2 control against the real configuration, builds the required documentation package, flags every gap before the C3PAO visit, and predicts the pass likelihood.

Why now (≤25 words): Browser agents now hold multi-step context across long audits, checking dozens of controls in one continuous run.

Demo moment (≤20 words): Live scan of a sample shop floor produces a pass/fail prediction and a ranked gap list.

Business model (≤15 words): Consultant pays only for each client that passes the C3PAO assessment on the first try.

---
id: s3-ideator-balanced-T5-01-r3#03
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r3
---

# The Bookkeeper Who Catches the Wire

One-liner (≤20 words): Bookkeepers get paid a cut of every fraudulent vendor payment their AI monitor actually stops.

Buyer and niche (≤25 words): Bookkeeping and accounting firms that run accounts payable for many small-business clients with no finance department of their own.

Pain and evidence (≤40 words): A spoofed vendor bank-detail-change email cost one small business about $180,000; BEC losses hit $2.9B in the US in one year, most paid before anyone called back to confirm. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent watches every client inbox and payment queue for bank-detail-change requests, cross-checks the new account against payment history and sending-domain records, and holds any mismatch for the bookkeeper to confirm by phone before the transfer clears.

Why now (≤25 words): In-browser agents read inboxes and payment tools directly, watching every client's mail without a separate API integration.

Demo moment (≤20 words): A spoofed "new bank details" email is flagged and held before the linked payment fires.

Business model (≤15 words): Firm pays a percentage of each fraudulent payment actually stopped; nothing otherwise.

---
id: s3-ideator-balanced-T5-01-r3#04
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r3
---

# The Accountant's Risk Analysis That Sticks

One-liner (≤20 words): Accountants bundle a HIPAA risk analysis for medical clients, billed only when it survives audit.

Buyer and niche (≤25 words): Accounting and bookkeeping firms already serving small dental and medical practice clients who need an annual written Security Rule risk analysis.

Pain and evidence (≤40 words): "No written Risk Analysis or one that did not reflect current systems" is the most-cited OCR violation, with fines from $90,000 to $350,000 for practices that never did one. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent scans the practice's EHR, backup and email admin consoles, drafts a dated written risk analysis naming each OCR-fined gap category and a remediation list, and the accountant delivers it as a paid add-on; the accountant is billed once the document survives the insurer's or OCR's review.

Why now (≤25 words): Cheap document extraction and console-operating agents turn scattered admin settings into one structured, citation-backed report.

Demo moment (≤20 words): Three console scans become a signed, dated risk-analysis PDF citing an actual OCR precedent.

Business model (≤15 words): Fee per delivered risk analysis, refunded if it's later flagged as inadequate.

---
id: s3-ideator-balanced-T5-01-r3#05
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r3
---

# The MSP's Clean-Sweep Guarantee

One-liner (≤20 words): MSPs bill for an offboarding sweep only after a second pass confirms zero access remains.

Buyer and niche (≤25 words): Small MSPs that handle staff offboarding for 5-50 person clients with no centralized access system of their own.

Pain and evidence (≤40 words): "87% of SMB leaders cannot immediately verify which employees have current access," and six in ten departing staff are never asked for their cloud logins when they leave. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): When an employee leaves, the agent sweeps every discovered console, revokes or rotates each credential, and produces a signed log; a second independent pass audits the same consoles 30 days later, and the MSP is billed only if that audit confirms zero orphaned access remained.

Why now (≤25 words): Production browser agents now repeat the same multi-console walk reliably on a schedule, without a human driving each run.

Demo moment (≤20 words): Enter one departing name; watch five console logins revoke live, then a clean 30-day audit.

Business model (≤15 words): Per verified-clean offboarding; unbilled if the 30-day audit finds a miss.

<!-- COMPLETE -->
