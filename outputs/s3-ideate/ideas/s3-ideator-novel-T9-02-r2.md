# Round 2 — Territory T9 (confidential local AI for solo regulated professionals)

## Cards

---
id: s3-ideator-novel-T9-02-r2#01
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r2
---

# Sealed Portal Runner

One-liner (≤20 words): A browser agent files a ward's Medicaid or bank form while a local model keeps names and account numbers off any cloud call.

Buyer and niche (≤25 words): Solo elder-law paralegals and professional fiduciaries who log into a client's bank, Medicaid or court portals under a confidentiality duty.

Pain and evidence (≤40 words; cite the pain dossier file): Banks and Medicaid portals demand their own forms and logins, wasting "days trying to log in," while solo practitioners bound by confidentiality cannot paste that data into cloud tools. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local model reads the client's statement or Medicaid packet and extracts only the fields the target portal's form needs; a supervised on-screen browser agent fills and submits that form using placeholder tokens for account numbers, swapping in real digits only inside the browser field, never through a cloud prompt.

Why now (≤25 words; name the specific capability): Gemini 2.5 Computer Use drives real browser forms directly from the screen, fast enough for supervised live portal filing [TC-04].

Demo moment (≤20 words): Watch the agent fill a mock bank POA form live, tokens swapping to real digits only inside the input box.

Business model (≤15 words): Per-filing fee, or monthly subscription for fiduciaries handling multiple wards.

---
id: s3-ideator-novel-T9-02-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: [A-seed-05-mech-1, A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-novel-T9-02-r2
---

# Confidentiality Leak Scanner

One-liner (≤20 words): A local agent inspects a solo practitioner's own laptop for real client-data leaks, shows evidence, then fixes only what's approved.

Buyer and niche (≤25 words): Solo lawyers, therapists, CPAs and paid fiduciaries who handle a client's or ward's data on one laptop with no IT staff to check it.

Pain and evidence (≤40 words; cite the pain dossier file): Solos are expected to vet their own systems since "solo and small-firm lawyers often cannot" get procurement or security help, the same laptop that also carries a ward's bank data. (src: outputs/s3-ideate/pain/T9-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): A local model inspects installed browser extensions, cloud-sync folders, clipboard history and autofill data for anything carrying client names, case facts or account numbers, shows the exact evidence behind each flag, then applies only fixes the practitioner approves, with a restore point and one-click undo for each.

Why now (≤25 words; name the specific capability): gpt-oss-20b reasons over live system state inside 16GB, no consultant or cloud call needed [TC-22].

Demo moment (≤20 words): A browser extension quietly syncing form data gets flagged with the exact leaked field shown, then disabled in one click.

Business model (≤15 words): Monthly subscription per practitioner, cheaper than one hour of a security consultant.

---
id: s3-ideator-novel-T9-02-r2#03
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r2
---

# Sealed Fraud Watch

One-liner (≤20 words): A local model scans a ward's bank statements for scam patterns on-device, so a fiduciary's fraud check never uploads the ledger.

Buyer and niche (≤25 words): Paid daily money managers and fiduciaries who monitor an elderly client's accounts under the same confidentiality duty that binds solo regulated professionals.

Pain and evidence (≤40 words; cite the pain dossier file): Elder fraud cost $4.885B in 2024 and is found only after the money is gone, while regulated professionals cannot legally paste a client's financial records into cloud tools. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The fiduciary drops in a scanned statement; a local vision-language model extracts transactions and flags gift-card, wire and new-payee patterns against a local rules library, all without the statement leaving the device, so only flagged line items, never the full ledger, ever reach the practitioner's review queue.

Why now (≤25 words; name the specific capability): gpt-oss-20b and Gemma 3 extract and reason over statement line items locally with no server round trip [TC-22, TC-37].

Demo moment (≤20 words): Drop in a sample statement; a disguised gift-card purchase gets flagged within seconds, full statement never leaves the folder.

Business model (≤15 words): Per-ward monthly fee, priced under one hour of a fiduciary's billable time.

---
id: s3-ideator-novel-T9-02-r2#04
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r2
---

# Fiduciary Audit Reconciler

One-liner (≤20 words): Checks a year of a ward's transactions against required accounting categories on-device, before the annual filing, and flags every mismatch.

Buyer and niche (≤25 words): SSA representative payees, VA fiduciaries and daily money managers who must file annual accountings for a client's funds without leaking that client's ledger.

Pain and evidence (≤40 words; cite the pain dossier file): SSA and VA audit whether a payee "used and accounted for" benefits, but fiduciaries keep only "manual books, spreadsheets," and the same confidentiality duty that keeps solo CPAs off cloud tools applies to fiduciary accountants. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The fiduciary drops a year of bank and receipt records into a folder; a local model classifies each transaction into the required accounting categories, reconciles the total against benefit deposits, and lists every unmatched or uncategorized entry before submission, with a full year of the ward's records never leaving the machine.

Why now (≤25 words; name the specific capability): 1M-token context lets a full year of statements and receipts be checked locally in one pass with no manual chunking [TC-25].

Demo moment (≤20 words): Drop in a year of statements; three uncategorized withdrawals surface as flags before the accounting is filed.

Business model (≤15 words): Annual fee timed to the accounting filing deadline.

---
id: s3-ideator-novel-T9-02-r2#05
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r2
---

# Institution-Ready POA Drafter

One-liner (≤20 words): Turns one general power of attorney into the exact form each bank or agency demands, with client consent drafted alongside it.

Buyer and niche (≤25 words): Solo elder-law paralegals and attorneys preparing a client's power of attorney for banks, Medicare and state agencies that reject outside forms.

Pain and evidence (≤40 words; cite the pain dossier file): Banks tell proxies "the POA has to be on the bank's form," while professionals must still get explicit, non-boilerplate consent before using AI to prepare a client's document. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The paralegal uploads the client's signed general POA and the target institution's own form template; a local model maps each granted authority onto the institution's required fields, drafts the matching document plus a short consent paragraph naming this specific use of AI, and leaves both ready for signature, with no client document leaving the practice.

Why now (≤25 words; name the specific capability): gpt-oss-20b maps legal-authority language across document formats locally, with no client document leaving the practice [TC-22].

Demo moment (≤20 words): Upload a generic POA and a sample bank form; a matching, bank-formatted POA appears with consent language attached.

Business model (≤15 words): Per-document fee, or monthly plan for firms handling many institutions per client.

<!-- COMPLETE -->
