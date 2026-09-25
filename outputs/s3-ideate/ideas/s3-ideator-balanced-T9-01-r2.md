## Cards

---
id: s3-ideator-balanced-T9-01-r2#01
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [A-seed-05-mech-3]
source_task: s3-ideator-balanced-T9-01-r2
---

# Local Agent That Types Into Your Ledger

One-liner (<=20 words): A local model reads scanned client documents and types entries into the solo accountant's own desktop ledger, nothing uploaded.

Buyer and niche (<=25 words): Solo CPAs, EAs and small bookkeeping practices who still re-key W-2s, 1099s and invoices into QuickBooks Desktop or Drake by hand.

Pain and evidence (<=40 words): Manual document keying costs about $15 an invoice and over 60% still need a human touch; pasting return data into cloud AI without per-vendor consent is an IRC §7216 violation. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): An open-weight GUI-agent model runs on the practitioner's own machine, reads a scanned document, then clicks and types the extracted fields directly into the open ledger window like a person would. Each entry pauses at an approval checkpoint with a restore point, so any batch can be undone in one click.

Why now (<=25 words): Open-weight GUI-agent models like UI-TARS ground clicks and typing on local desktop screens without sending screenshots to any cloud vendor.

Demo moment (<=20 words): Feed it a scanned W-2, watch the cursor open QuickBooks and type the entry itself, then undo it.

Business model (<=15 words): Monthly per-seat subscription, with a discounted tax-season bundle.

---
id: s3-ideator-balanced-T9-01-r2#02
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r2
---

# On-Device Rejection Checker for E-Invoices

One-liner (<=20 words): Runs the official e-invoice validator's rules locally against a client's XRechnung or Peppol file before anything is sent.

Buyer and niche (<=25 words): Solo accountants and bookkeepers preparing client e-invoices under the German, Belgian and French mandates who cannot risk a rejected filing or a leaked bank record.

Pain and evidence (<=40 words): Software-generated XRechnung fails official validators over missing bank data, and French platforms reject on SIREN mismatches and stall payment; solos already lack the budget or procurement staff for enterprise-vetted cloud tools. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local model parses the client's UBL or XRechnung XML alongside the underlying invoice and bank records, checks every mandatory field against the published validator rules, and flags exactly which field will fail and why, all before the file is transmitted to any government platform.

Why now (<=25 words): Open-weight local reasoning models fit a solo practice's laptop and cross-check a full invoice XML against validator rules with no cloud call.

Demo moment (<=20 words): Load a sample XRechnung with a missing bank field; the tool flags it locally in seconds, before submission.

Business model (<=15 words): Per-client-file fee, or a flat monthly plan for a bookkeeping practice.

---
id: s3-ideator-balanced-T9-01-r2#03
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: [A-seed-03-tech-1]
source_task: s3-ideator-balanced-T9-01-r2
---

# Confidence-Tagged Reader for Trucking Paperwork

One-liner (<=20 words): Extracts driver settlement data from rate confirmations, PODs and carrier invoices, tagging every field with a confidence score, offline.

Buyer and niche (<=25 words): Solo bookkeepers and small accounting practices serving owner-operator trucking clients whose paperwork carries driver SSNs and bank routing numbers.

Pain and evidence (<=40 words): Billing staff manually key rate confirmations and audit each carrier invoice against the BOL and POD, every load; running that driver financial data through cloud AI risks the same disclosure exposure IRS rules already flag for tax data. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local extraction model reads scans of rate confirmations, PODs and carrier invoices, pulls load number, rate and settlement fields, and tags each field with a confidence score, the way a walked-property record gets a confidence tag. Only high-confidence fields auto-post; the rest route to a review queue.

Why now (<=25 words): Open-weight local models fit a solo practice's laptop and extract structured fields without a document ever reaching a cloud OCR vendor.

Demo moment (<=20 words): Drop in a rate confirmation and a POD; watch fields populate with green and amber confidence tags, offline.

Business model (<=15 words): Per-document or monthly plan sold to bookkeeping practices with trucking clients.

---
id: s3-ideator-balanced-T9-01-r2#04
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: [A-seed-05-mech-2]
source_task: s3-ideator-balanced-T9-01-r2
---

# Confidence-Tagged VAT Coder, Runs Local

One-liner (<=20 words): Reads mixed-tax invoices and proposes the VAT code for each line, showing its evidence, without the file ever leaving the practice.

Buyer and niche (<=25 words): Solo bookkeepers and small accounting practices whose invoices carry multiple tax codes that existing capture tools garble or cannot correct.

Pain and evidence (<=40 words): Invoices with more than one tax code break existing extraction, and VAT that is a penny off cannot be adjusted, while a solo practitioner has no procurement team to vet a safer cloud alternative. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local model reads each invoice line, proposes a VAT or tax code, and shows the exact phrase or line item that justifies it, the same evidence-first check a diagnostic agent uses before applying a fix. Low-confidence or multi-code lines route to a one-click review queue before posting.

Why now (<=25 words): Open-weight local models parse mixed-format invoices on a laptop, cheap enough to check per line with no cloud extraction bill.

Demo moment (<=20 words): Load an invoice with two tax codes; each line gets a code and evidence, then approve the flagged one.

Business model (<=15 words): Per-seat monthly add-on sold to bookkeeping practices.

---
id: s3-ideator-balanced-T9-01-r2#05
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: drafter-dialogue, track: balanced }
parents: [A-seed-06-insight-1]
source_task: s3-ideator-balanced-T9-01-r2
---

# Plain-Language E-Invoice Rejection Explainer

One-liner (<=20 words): Reads a rejected e-invoice's raw XML locally and drafts a plain client email naming exactly what to fix.

Buyer and niche (<=25 words): Solo bookkeepers and small accounting practices whose clients receive e-invoice rejection codes they cannot interpret themselves.

Pain and evidence (<=40 words): Peppol UBL and XRechnung rejections are machine-only codes, and French platforms silently block the payment cycle until someone fixes the file, while advisers already absorb this switchover client by client with no automation. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local model reads the client's actual rejected invoice XML, grounding its explanation in the real file rather than guessing from the error code alone, then drafts a plain-language email naming the exact missing field and the fix, without the file ever leaving the bookkeeper's machine.

Why now (<=25 words): Open-weight local models read a full invoice XML on a laptop and draft grounded, client-ready explanations with no cloud exposure of client bank data.

Demo moment (<=20 words): Load a rejected XRechnung; watch a plain-English client email draft itself, citing the exact missing field.

Business model (<=15 words): Per-rejection fee, or a flat monthly plan for a bookkeeping practice.

<!-- COMPLETE -->
