## Cards

---
id: s3-ideator-balanced-T5-02-r2#01
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r2
---

# Risk Evidence From the Walled EHR

One-liner (≤20 words): Pulls HIPAA risk-analysis evidence straight from Dentrix, Cornerstone or PioneerRx screens, no $5,000 API purchase needed.

Buyer and niche (≤25 words): Dental, veterinary and pharmacy office managers doing the annual HIPAA/OCR risk analysis with no compliance staff.

Pain and evidence (≤40 words; cite the pain dossier file): OCR's top-cited HIPAA violation is a stale risk analysis, with settlements of $90k-$350k; Dentrix's READ API costs $5,000 and bars whole "protected" categories outright. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A screen agent, fine-tuned cheaply on Dentrix, Cornerstone and PioneerRx layouts, logs in as the office manager, reads user-permission lists, audit-log settings and PHI storage locations off the screen, and drops each finding into the yearly risk analysis with a screenshot citation, refreshed on schedule.

Why now (≤25 words; name the specific capability): LoRA/QLoRA fine-tuning (TC-23) specializes a small model on one vertical's screens for under $10, cheaper than the SoR's own $5,000 API fee.

Demo moment (≤20 words): Live: agent reads Dentrix's user-permission screen, flags two staff accounts with unrestricted PHI access.

Business model (≤15 words): Per-practice annual fee, undercutting both the API toll and a compliance consultant.

---
id: s3-ideator-balanced-T5-02-r2#02
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r2
---

# Catch The Change Before It Syncs

One-liner (≤20 words): Flags vendor and carrier detail changes that haven't reached the agency's system of record before money moves.

Buyer and niche (≤25 words): Insurance-agency CSRs and account managers on Applied Epic or AMS360 who handle client and carrier payment or coverage changes.

Pain and evidence (≤40 words; cite the pain dossier file): Business-email-compromise losses average $137k+ per incident; a cancellation entered outside Applied Epic "never reached Epic," costing one agency $42,000 in unpaid policy loss. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Watches for a bank-detail, address or cancellation entered upstream (a carrier portal, an email, a rating tool), checks whether it has landed in Applied Epic or AMS360, and holds any unmatched or unsynced change for a phone confirmation.

Why now (≤25 words; name the specific capability): Skyvern (TC-07) already navigates legacy insurance-agency logins and forms at production reliability, so the sync check needs no Applied Epic API contract.

Demo moment (≤20 words): Live: a cancellation entered in a carrier portal hasn't reached Applied Epic after 10 minutes; the agent flags it.

Business model (≤15 words): Per-seat monthly fee, sold to agencies through their AMS vendor's marketplace.

---
id: s3-ideator-balanced-T5-02-r2#03
track: balanced
lineage: seed-atom-hybrid
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T5-02-r2
---

# Offboarding Reaches The Legacy Desktop

One-liner (≤20 words): Finds and revokes a departed employee's logins inside legacy practice-management systems that sit outside every SSO sweep.

Buyer and niche (≤25 words): The sole IT admin or office manager offboarding staff from a locked vertical system such as Dentrix, Cornerstone or AMS360.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders can't verify who still has access; legacy vertical systems never show up in any SSO-based sweep, and their own user lists sit behind the same API tolls that lock out everyone else. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Given a departing name, the agent logs into the legacy SoR through its desktop or web login, finds every account tied to that person, shows the exact permission before revoking it, takes a restore point of the access config, and reverts in one click if a revocation breaks a workflow.

Why now (≤25 words; name the specific capability): UI-TARS (TC-05) operates native desktop practice-management apps, not just browsers, reaching accounts a browser-only agent could never touch.

Demo moment (≤20 words): Live: type a departed tech's name; the agent finds their still-active Cornerstone login, revokes it, offers one-click restore.

Business model (≤15 words): Per-offboarding fee, bundled with the practice's existing PM-system support contract.

---
id: s3-ideator-balanced-T5-02-r2#04
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r2
---

# Insurance Answers From The Unqueryable DMS

One-liner (≤20 words): Answers cyber-insurance questionnaire items straight from the dealer DMS or property system's own screens, with proof attached.

Buyer and niche (≤25 words): Dealership office managers and property managers renewing cyber insurance, whose customer and payment data actually lives inside CDK, Reynolds or Yardi.

Pain and evidence (≤40 words; cite the pain dossier file): Insurers ask 60-150 questions about who can reach PII and payment data; CDK, Reynolds and Yardi have no self-serve API, so only the vendor can answer those questions accurately, and a wrong answer voids the policy. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent logs into the dealer's DMS or the property manager's Yardi console through its own login screen, reads the actual user-role list, backup settings and payment-data access scope, and answers each matching insurance question with a screenshot citation, flagging any question it can't verify with certainty.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use (TC-02) reaches 61.4% on OSWorld, production-adjacent for multi-step navigation of proprietary DMS and property-management screens.

Demo moment (≤20 words): Live: agent finds two DMS roles with unrestricted access to stored card data, flags the matching insurance question.

Business model (≤15 words): Flat fee per renewal, sold through DMS resellers and property-management trade associations.

---
id: s3-ideator-balanced-T5-02-r2#05
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r2
---

# One Cheap Model Per Console

One-liner (≤20 words): Fine-tunes a tiny model per legacy shop-floor console so CMMC segmentation evidence stops costing a bespoke integration each.

Buyer and niche (≤25 words): Owners of 5-50 person DoD manufacturing subcontractors preparing CMMC Level 2 evidence across several different legacy machine and ERP consoles.

Pain and evidence (≤40 words; cite the pain dossier file): CMMC Level 2 documentation and assessment run $50k-$300k+; each legacy CNC controller, MES and ERP is its own closed vertical system with no API, the same lock-in pattern as dental and dealer systems, so per-console integration is unaffordable. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Instead of one general agent, a small open model gets cheaply fine-tuned per distinct console UI, one CNC controller, one legacy MES, the office ERP, for under $10 each; each tuned model then inventories which machines sit on which network segment and pulls the access-control evidence assessors check first.

Why now (≤25 words; name the specific capability): LoRA/QLoRA fine-tuning (TC-23) turns a $30k-per-integration lock-in pattern into a per-console spend of under $10 in 1-2 hours.

Demo moment (≤20 words): Live: three differently branded shop-floor consoles each get inventoried in one run by their own tuned model.

Business model (≤15 words): Fixed project fee before the C3PAO visit, priced below a single consultant day rate.

<!-- COMPLETE -->
