## Cards

---
id: s3-ideator-novel-T1-01-r2#01
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r2
---

# Per-Task Consent Portal Agent

One-liner (≤20 words): Every payer-portal action runs under a signed, single-task consent grant tied to one patient, not a shared login.
Buyer and niche (≤25 words): Compliance officers and practice managers at small medical practices who must prove each AI touch of patient data was authorized.
Pain and evidence (≤40 words; cite the pain dossier file): Shared portal logins leave no record of which patient task justified an AI touching PHI, while malpractice insurers increasingly attach AI-use conditions and regulators require per-client consent, not a boilerplate clause. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Before an agent touches a patient's data, staff issue a single-task consent grant naming the patient, portal, action and expiry; the agent presents that grant like a bearer token to start work, the grant is logged immutably, and it auto-expires the moment that one task ends.
Why now (≤25 words; name the specific capability): MCP's 2025-11 Client ID Metadata Documents give software fine-grained, revocable, resource-scoped authorization instead of one shared static credential [TC-09].
Demo moment (≤20 words): Approve one consent grant live; the agent submits the PA, then the grant visibly expires and access is denied.
Business model (≤15 words): Per-practice monthly fee, priced by number of active consent grants issued.

---
id: s3-ideator-novel-T1-01-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T1
cell: { buyer: B2B, capability: local-private, track: novel }
parents: [A-seed-05-tech-1]
source_task: s3-ideator-novel-T1-01-r2
---

# PHI-Blind Portal Runner

One-liner (≤20 words): A local model reads the chart note on-site and hands the cloud portal agent only redacted, non-identifying actions.
Buyer and niche (≤25 words): Practice managers and billers reluctant to send full patient charts to any cloud AI vendor for prior-auth submission.
Pain and evidence (≤40 words; cite the pain dossier file): Practices hesitate to route chart data through cloud AI the same way solo lawyers fear losing privilege and preparers risk a data-disclosure violation, yet dozens of prior-authorization requests still need submitting every week. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): An on-device model, running on the practice's own machine, extracts only the diagnosis and procedure codes needed for one PA form, strips identifiers, and sends that redacted action script to a cloud browser agent that fills and submits the payer portal form; the chart note itself never leaves the building.
Why now (≤25 words; name the specific capability): OpenAI's gpt-oss-20b, released 2025-08, runs a capable reasoning model on one 16GB workstation, so PHI extraction never needs a cloud call [TC-22].
Demo moment (≤20 words): Feed a chart note; the local model redacts it live, and the cloud agent submits using only anonymized fields.
Business model (≤15 words): Per-practice monthly fee plus a one-time on-device setup charge.

---
id: s3-ideator-novel-T1-01-r2#03
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r2
---

# AI Vendor Data-Terms Auditor

One-liner (≤20 words): Scans every AI tool a practice already uses and flags which ones handle patient data with no signed data-protection agreement.
Buyer and niche (≤25 words): Practice managers and office IT contacts at small medical practices adopting portal agents, scribes and copilots piecemeal.
Pain and evidence (≤40 words; cite the pain dossier file): Small practices adopt new portal and prior-auth AI tools under time pressure with no one to vet vendor data terms, echoing how solo professionals "often cannot" negotiate confidentiality contracts the way large firms do. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): The agent inventories every AI and automation tool connected to the practice's systems, checks each vendor's published terms against required data-protection agreements, and produces a signed-or-missing report plus a ready outreach email requesting whatever is missing from each vendor.
Why now (≤25 words; name the specific capability): MCP's OAuth resource-scoping (RFC 8707, June 2025) lets the auditor see exactly what data each connected tool can reach, not just its claims [TC-09].
Demo moment (≤20 words): Connect three mock AI tools; the auditor instantly flags the one with no data agreement and drafts the request.
Business model (≤15 words): Flat annual audit fee per practice, re-run automatically each quarter.

---
id: s3-ideator-novel-T1-01-r2#04
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r2
---

# Payer Portal Gateway for Billers

One-liner (≤20 words): Wraps each payer portal as a scoped tool a billing service's agents can call, no shared passwords, no seat minimums.
Buyer and niche (≤25 words): Small outsourced billing services and offshore prior-authorization vendors serving many small practices across dozens of payer portals.
Pain and evidence (≤40 words; cite the pain dossier file): Most small practices already outsource prior-authorization work, yet the access tools built for that outsourcing are priced for large firms, with quote-only contracts and twenty-plus seat minimums a five-person billing shop cannot justify. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Each payer portal is wrapped as a tool server; the billing service registers once per practice client and receives a scoped, revocable access token limited to that client's patients and portals, so many operators can work across hundreds of practice-portal pairs without ever sharing a password.
Why now (≤25 words; name the specific capability): MCP's dynamic client registration and Client ID Metadata Documents (March-November 2025) give scoped multi-tenant access without an enterprise SSO contract [TC-09].
Demo moment (≤20 words): Revoke one practice's token mid-demo; that operator instantly loses portal access while every other client stays connected.
Business model (≤15 words): Per-connected-portal-token monthly fee, billed to the billing service.

---
id: s3-ideator-novel-T1-01-r2#05
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r2
---

# Minimum-Necessary Leak Auditor

One-liner (≤20 words): Reviews every field a portal agent actually sent to a payer site and flags anything beyond what that submission needed.
Buyer and niche (≤25 words): Privacy officers at small practices adopting AI portal agents who must prove only the minimum necessary data was disclosed.
Pain and evidence (≤40 words; cite the pain dossier file): An adjacent profession treats even accidental over-disclosure of confidential client data as a criminal violation, yet no one checks the fast-growing volume of AI-submitted prior-authorization data for fields sent beyond what was required. (src: outputs/s3-ideate/pain/T9-dossier.md; outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): After each portal submission, the agent diffs the fields it actually sent against the payer's documented required fields for that transaction type, flags anything extra, and appends the diff to that task's log for a privacy officer to spot-check weekly.
Why now (≤25 words; name the specific capability): The same OAuth resource-scope definitions that authorize each task double as the minimum-necessary baseline the agent checks every submission against [TC-09].
Demo moment (≤20 words): Run a submission with one extra diagnosis code added; the auditor flags it in the log within seconds.
Business model (≤15 words): Add-on monthly fee bundled with the consent-grant product.

<!-- COMPLETE -->
