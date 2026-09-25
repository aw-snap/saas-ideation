## Cards

---
id: s3-ideator-balanced-T8-02-r2#01
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-02-r2
---

# Private Elder Statement Scanner

One-liner (≤20 words): On-device browser AI flags fraud and duplicate charges in a parent's statements without any data leaving the machine.

Buyer and niche (≤25 words): Adult children and daily money managers reviewing an elderly parent's bank and insurance statements who won't upload SSNs or account numbers to the cloud.

Pain and evidence (≤40 words; cite the pain dossier file): $4.9B lost to elder fraud in 2024, found weeks late; standard ledger checks miss near-duplicate charges from formatting or vendor-name differences. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): A browser extension runs an on-device model against downloaded statement PDFs and CSVs, entirely on the user's machine. It highlights repeated charges, new payees, and gift-card-pattern transactions, and drafts a plain-English flag for the family to review before anything syncs anywhere.

Why now (≤25 words): Chrome's built-in Gemini Nano (TC-19) runs the whole check on-device for free, with no server bill and no elder financial data leaving the laptop.

Demo moment (≤20 words): Load a sample statement; a duplicate charge and a suspicious new payee get flagged instantly, fully offline.

Business model (≤15 words): $9/month per parent profile, family plan for multiple parents.

---
id: s3-ideator-balanced-T8-02-r2#02
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-02-r2
---

# Elder Bill Intake Autopilot

One-liner (≤20 words): Fetches a parent's recurring bills from care, utility and insurer portals into one ledger, flagging duplicates before payment.

Buyer and niche (≤25 words): Paid daily money managers and adult children handling monthly bill-pay for an aging parent across many separate provider portals.

Pain and evidence (≤40 words; cite the pain dossier file): Bill-pay monitoring runs about 4 hours a month per client, and standard checks catch only exact-match duplicates, letting near-duplicates and zombie subscriptions through. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): A browser agent logs into each provider portal the family already uses, downloads new statements, and extracts line items the way an AP clerk keys an invoice. It matches vendor names and amounts across months to catch near-duplicates and lapsed subscriptions before payment goes out.

Why now (≤25 words): Cheap OCR extraction (TC-30) pairs with on-device summarizing (TC-19) so private statements get parsed without a per-page cloud bill.

Demo moment (≤20 words): Two mock utility bills, one a near-duplicate, load side by side; the duplicate is flagged before payment.

Business model (≤15 words): $99/month seat license sold to daily-money-manager firms, priced per client managed.

---
id: s3-ideator-balanced-T8-02-r2#03
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-02-r2
---

# Fiduciary Record Vault

One-liner (≤20 words): Builds a ward's required annual accounting automatically from documents that never leave the fiduciary's own device.

Buyer and niche (≤25 words): VA fiduciaries, SSA representative payees and informal POA agents who must prove a parent's or veteran's funds were properly used.

Pain and evidence (≤40 words; cite the pain dossier file): VA fiduciaries and SSA payees face annual accountings and unpredictable audits, with only manual books or spreadsheets today; agents are told to "document everything." (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The fiduciary drops statements, receipts and care invoices into a tool that runs entirely on-device, sorting each into the required accounting categories and assembling the annual report with linked exhibits, applying the same structured-record retention discipline businesses now owe under e-invoicing law.

Why now (≤25 words): Chrome's on-device model (TC-19) processes a year of sensitive financial records for free, with nothing sent to a server.

Demo moment (≤20 words): Drop a year of sample statements; a filled VA accounting form with matched exhibits appears offline in seconds.

Business model (≤15 words): $39/month per ward, volume pricing for professional fiduciary firms.

---
id: s3-ideator-balanced-T8-02-r2#04
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-02-r2
---

# Rejection-Proof Renewal Filer

One-liner (≤20 words): Checks a Medicaid renewal or Medicare appeal packet against known rejection patterns before the proxy submits it.

Buyer and niche (≤25 words): Adult children and guardians filing a parent's Medicaid renewal or Medicare Advantage appeal who cannot afford a rejected attempt.

Pain and evidence (≤40 words; cite the pain dossier file): 69% of unwinding disenrollments were procedural, not ineligibility, while only 11.5% of denials get appealed inside the 65-day window. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Before submission, the tool checks the filled packet against a rules library of known rejection triggers, missing signature, mismatched SSN format, wrong form version, the same class of check that already rejects e-invoices for missing fields or ID mismatches on European filing platforms.

Why now (≤25 words): On-device checking (TC-19) validates sensitive SSN and medical fields locally, before anything is sent to a government portal.

Demo moment (≤20 words): A packet missing a signature gets flagged red before submission; fixed, it turns green.

Business model (≤15 words): $29 per filing, or $19/month unlimited for guardians managing several wards.

---
id: s3-ideator-balanced-T8-02-r2#05
track: balanced
lineage: seed-atom-hybrid
territory: T8
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: [A-seed-05-mech-1, A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T8-02-r2
---

# Elder Account Diagnostic Copilot

One-liner (≤20 words): The family describes what looks wrong with a parent's accounts; the agent shows real evidence before touching anything.

Buyer and niche (≤25 words): Adult children who suspect something is off with a parent's bills or balance but cannot tell fraud from an ordinary fee.

Pain and evidence (≤40 words; cite the pain dossier file): Families watch accounts about 4 hours a month yet typically notice fraud only weeks after money moves, with no evidence trail from today's alerts. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy types a plain-language concern, "Mom's balance dropped fast." The agent inspects linked statement data on-device, shows the specific transactions behind its verdict, and proposes one action (dispute, cancel, hold) as an approved plan with a one-click undo before anything is sent.

Why now (≤25 words): On-device processing (TC-19) keeps a parent's raw statement data local, while evidence-first, undo-first diagnosis now extends from PCs to finances.

Demo moment (≤20 words): Type "why is Mom's balance dropping"; the agent surfaces the exact duplicate charge and an undoable dispute action.

Business model (≤15 words): $15/month per parent profile, family plan discount for multiple parents.

<!-- COMPLETE -->
