---
id: I-2076
track: novel
lineage: ai-native
territory: T4
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T4-01-r2
raw_id: s3-ideator-novel-T4-01-r2#05
merged: []
---

# Delegated Authority Passport

One-liner (≤20 words): A reusable, verified proxy credential that filing and monitoring agents present to institutions instead of re-proving authority each time.

Buyer and niche (≤25 words): Vendors building filing and account-monitoring agents for nonprofits and family proxies, who need one trusted way to prove delegated authority.

Pain and evidence (≤40 words; cite the pain dossier file): Banks require their own POA form, and small orgs lack a designated account administrator, so every agent run re-litigates who is allowed to act. (src: outputs/s3-ideate/pain/T8-dossier.md, outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A human completes one verified onboarding (POA, board resolution or letters of guardianship); the service issues a signed credential. Any filing or monitoring agent presents it over agent-to-agent messaging to an institution's portal-operating agent, which checks it once instead of demanding fresh proof at every visit.

Why now (≤25 words; name the specific capability): The Agent2Agent protocol standardizes how agents exchange verifiable identity claims across vendors, already adopted by over 150 organizations.

Demo moment (≤20 words): Two different vendor agents each present the same passport to a mock bank portal; both are admitted without manual re-check.

Business model (≤15 words): Per-credential issuance fee plus a small per-verification charge to agent vendors.

---
id: I-2077
track: balanced
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-04-mech-3]
source_task: s3-ideator-balanced-T7-02-r2
raw_id: s3-ideator-balanced-T7-02-r2#01
merged: []
---

# Appeal Reel

One-liner (≤20 words): An AI-drafted denial appeal is checked against real payer-portal data, then explained in a 60-second video for sign-off.

Buyer and niche (≤25 words): Practice billers and physicians at small practices fighting payer denials with AI-drafted appeal letters before submission.

Pain and evidence (≤40 words; cite the pain dossier file): AI-drafted demand letters mismatch codes and dates against records, needing manual cross-check; billers separately spend hours digging through portals just to find the denial reason. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Logs into the payer portal to pull the actual denial reason and remittance codes, cross-checks every figure in the AI-drafted appeal, and renders a short timestamped video walking through only the parts that diverge, so a physician approves it in the time between patients rather than rereading the letter.

Why now (≤25 words; name the specific capability): Cheap per-second video generation (about $0.10/sec) makes a personalized verification video cheaper than a staffer's read-through.

Demo moment (≤20 words): A denial plus a drafted appeal with one wrong billing code; the video freezes exactly there, correct code shown.

Business model (≤15 words): Per-appeal fee bundled into existing billing software.

---
id: I-2078
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r2
raw_id: s3-ideator-balanced-T7-02-r2#03
merged: []
---

# Standing Order Video Brief

One-liner (≤20 words): Turns each judge's GenAI standing order into a 30-second personalized video briefing before every filing.

Buyer and niche (≤25 words): Solo and small-firm litigators filing across many courts, each with its own GenAI disclosure or certification rule.

Pain and evidence (≤40 words; cite the pain dossier file): GenAI standing orders conflict across courts, some requiring disclosure, others requiring certified citations, adding to confusion and imposing additional burdens and costs on litigants. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Tracks each judge's published standing order, checks the draft filing's citations before rendering, and narrates a short video naming exactly what this judge requires plus a pass or fail on the citation check, so the attorney gets a per-court briefing instead of hunting rules by hand.

Why now (≤25 words; name the specific capability): Cheap per-second video generation makes a personalized per-filing briefing affordable to run before every submission, not just once at onboarding.

Demo moment (≤20 words): The same draft filed before two judges' orders; the two generated briefings state opposite disclosure requirements correctly.

Business model (≤15 words): Subscription priced by the number of jurisdictions a firm files in.

---
id: I-2079
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
raw_id: s3-ideator-balanced-T2-02-r1#01
merged: []
---

# The Duplicate Docket

One-liner (≤20 words): Catches near-duplicate invoices your ledger's exact-match rule misses, before they get paid twice.

Buyer and niche (≤25 words): Small-firm bookkeepers and AP clerks on QuickBooks or Xero, posting 30-300 invoices a week across several client ledgers.

Pain and evidence (≤40 words; cite the pain dossier file): Ledger duplicate checks only catch exact vendor-plus-bill-number matches; reformatted numbers, variant vendor names and repeated imports slip through, surfacing as rework at month-end reconciliation. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Fuzzy-matches vendor, amount, date and invoice-number variants against the full ledger history on every new bill, flags likely duplicates before posting, and shows a side-by-side evidence view of the matched fields for a one-click accept or reject.

Why now (≤25 words; name the specific capability): 1M-token context and collapsing inference cost let it hold years of AP history in one comparison pass instead of exact-match rules.

Demo moment (≤20 words): Upload a reformatted duplicate invoice against the existing ledger; it's flagged live with matched fields highlighted.

Business model (≤15 words): Per-seat SaaS add-on to existing accounting software, $29-49 per month per ledger.

---
id: I-2080
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
raw_id: s3-ideator-balanced-T2-02-r1#02
merged: [s3-ideator-novel-T2-02-r1#06]
---

# The Recheck Desk

One-liner (≤20 words): Independently re-audits what your capture tool extracted against the original scan before it posts.

Buyer and niche (≤25 words): Bookkeepers already paying for an invoice-capture tool who still fix wrong tax fields and miscoded vendors by hand.

Pain and evidence (≤40 words; cite the pain dossier file): Capture tools fail on mixed-tax invoices and code unknown vendors "unknown"; tax details published to the ledger are sometimes wrong, forcing manual correction after sync. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Pulls the capture tool's extracted fields plus the original PDF, re-runs an independent OCR pass, diffs every field against the source image, and surfaces only the fields that disagree for one-click correction before the bill posts to the ledger.

Why now (≤25 words; name the specific capability): Mistral OCR 3 at $2 per 1,000 pages makes a full independent second pass cheap enough to run on every invoice.

Demo moment (≤20 words): Feed a mixed-tax-rate invoice; the wrong tax split is shown next to the corrected split with the page region highlighted.

Business model (≤15 words): Usage-based add-on, $0.03 per invoice re-checked, layered on top of an existing capture tool.

---
id: I-2081
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
raw_id: s3-ideator-balanced-T2-02-r1#03
merged: []
---

# The Rejection Fixer

One-liner (≤20 words): Reads a French e-invoice platform's rejection code, fixes the field, and resubmits it automatically.

Buyer and niche (≤25 words): French small-business owners and their accountants issuing e-invoices through one of roughly 150 approved platforms.

Pain and evidence (≤40 words; cite the pain dossier file): Platforms auto-reject invoices for bad formats, missing mandatory fields or registry-number mismatches, freezing the payment cycle until someone manually decodes the rejection and fixes it. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Watches the platform's rejection notices, looks up the business registry and the firm's prior invoices to correct the flagged field, then logs into the platform's own web dashboard to resubmit, since most approved platforms expose no resubmission API.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use (61.4% OSWorld) completes the login-fix-resubmit loop on portals that have no API for it.

Demo moment (≤20 words): A rejected invoice with a mismatched registry number is corrected and resubmitted live; the status flips to accepted on screen.

Business model (≤15 words): Flat monthly fee per connected platform account, 39 euro per month.

---
id: I-2082
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
raw_id: s3-ideator-balanced-T2-02-r1#05
merged: [s3-ideator-novel-T2-02-r1#02]
---

# The XML Keeper

One-liner (≤20 words): Catches the legally required XRechnung XML before staff delete it, or re-fetches it when they already have, and archives it for 8 years.

Buyer and niche (≤25 words): German small-firm bookkeepers and Handwerk office staff who receive e-invoices by email alongside ordinary PDFs.

Pain and evidence (≤40 words; cite the pain dossier file): Staff routinely open the XRechnung, save only a printed PDF and delete the structured XML attachment, the most common mistake, even though the original must be kept for 8 years, creating audit exposure they don't know they have. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Watches the invoice inbox, detects any structured e-invoice attachment, extracts and archives it alongside a human-readable rendering, and confirms the original stays intact even if staff delete or overwrite the email; if an original is already missing, it re-requests it from the vendor's portal or inbox rule.

Why now (≤25 words; name the specific capability): In-browser and mailbox-integrated agents can watch a mailbox continuously and re-fetch missing originals without requiring staff to change their filing habit.

Demo moment (≤20 words): An invoice email is opened and deleted as usual; the XML is shown already safely archived beforehand.

Business model (≤15 words): Flat per-mailbox fee, 9 euro per month, sold through accountants as a compliance add-on.

---
id: I-2083
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
raw_id: s3-ideator-balanced-T2-02-r1#06
merged: []
---

# The Three-Way Match

One-liner (≤20 words): Cross-checks every carrier invoice against its bill of lading and proof of delivery before it's keyed in.

Buyer and niche (≤25 words): Billing staff at small freight brokers and carriers handling 15-40 loads a week, re-keying paperwork into accounting.

Pain and evidence (≤40 words; cite the pain dossier file): Billing staff manually audit each carrier invoice against the bill of lading, rate confirmation and proof of delivery, then key it into accounting one load at a time, at roles paying $19-32 an hour. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Extracts line items, rate, quantity and load number from the invoice, bill of lading and proof of delivery, cross-checks all three against each other, and routes only mismatches to a human, posting clean matches straight to accounting.

Why now (≤25 words; name the specific capability): Mistral OCR 3 reads scanned freight paperwork cheaply enough to check every load, not just spot-check a sample.

Demo moment (≤20 words): A short-shipment on the delivery proof doesn't match the invoiced quantity; the mismatch is flagged with both documents side by side.

Business model (≤15 words): Per-load fee, $0.75 per load, undercutting a billing clerk's hourly cost.

---
id: I-2084
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-02-r1
raw_id: s3-ideator-balanced-T2-02-r1#08
merged: []
---

# The Close Chaser

One-liner (≤20 words): Flags every approved purchase with no matching invoice yet, before month-end close instead of during it.

Buyer and niche (≤25 words): Small-business bookkeepers running the monthly close for several client ledgers on QuickBooks or Xero.

Pain and evidence (≤40 words; cite the pain dossier file): Paperwork often arrives after a purchase is approved, so someone keeps a manual list of unresolved items that holds up every month-end close. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Cross-references approved purchase orders and card transactions against received invoices daily, drafts a personalized chase email to the vendor for anything still unmatched after five days, sends it automatically, and tracks the reply so the close list shrinks itself.

Why now (≤25 words; name the specific capability): Collapsing inference prices make a personalized chase email per gap affordable to send daily, not just batched at month-end.

Demo moment (≤20 words): A purchase approved six days ago with no invoice triggers an auto-sent vendor chase email, visible in the outbox.

Business model (≤15 words): Per-client subscription for bookkeeping firms, $19 per month per client ledger.

<!-- COMPLETE -->
