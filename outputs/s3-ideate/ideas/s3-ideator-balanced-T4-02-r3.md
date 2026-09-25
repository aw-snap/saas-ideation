## Cards

---
id: s3-ideator-balanced-T4-02-r3#01
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
---

# Offline Charity Registration Filer

One-liner (≤20 words): A self-hosted model fills every state's charity registration portal from your own laptop; nothing about your org leaves it.

Buyer and niche (≤25 words): Treasurers and directors of small nonprofits whose donor and bank data is too sensitive to hand to a cloud filing service.

Pain and evidence (≤40 words; cite the pain dossier file): Paid agents like Harbor Compliance can fail silently for years while holding donor data offsite, and 38-41 state portals each need separate, unique-format submissions with no shared API. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): An open-weight GUI model runs entirely on the treasurer's own machine, reads each state portal's screen, fills the fields from a local org profile, submits, and saves a screenshot confirmation locally. No org data or screenshot is ever transmitted to a vendor server.

Why now (≤25 words; name the specific capability): TC-05 UI-TARS-2, an open-weight GUI agent (84.8% WebVoyager), runs self-hosted, so screen-driving needs no cloud API call.

Demo moment (≤20 words): With the laptop's network monitor visible, the agent fills three live state forms while zero AI-vendor traffic appears.

Business model (≤15 words): One-time per-machine license, plus an optional paid annual update subscription.

---
id: s3-ideator-balanced-T4-02-r3#02
track: balanced
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: [A-seed-05-tech-1, A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T4-02-r3
---

# Local Pawn Report Filer

One-liner (≤20 words): A shop-owned model reads the day's transactions off the counter screen and files the mandatory police report itself.

Buyer and niche (≤25 words): Pawn shop and scrap-metal dealer owners and clerks handling customer ID numbers they are legally restricted from exposing to outside vendors.

Pain and evidence (≤40 words; cite the pain dossier file): A knowing daily-report failure risks fines up to $25,000 and jail time; clerks already re-key each transaction from the POS into LeadsOnline, doubling the ID data's exposure. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A local vision-language model reads the POS screen and any scanned ID, shows the extracted fields as evidence before anything is filed, then drives the police portal's login and form fill, keeping a confirmation screenshot as a local audit log. No customer ID data leaves the shop's PC.

Why now (≤25 words; name the specific capability): gpt-oss-20b (TC-22) fits a 16GB shop PC and pairs with local screen-driving, so every step stays on-device.

Demo moment (≤20 words): A mock ID is scanned locally; extracted fields appear as evidence, the report files, and the network log stays empty.

Business model (≤15 words): Flat monthly license fee per shop, no per-transaction data charge.

---
id: s3-ideator-balanced-T4-02-r3#03
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
---

# On-Device Lien Notice Agent

One-liner (≤20 words): Runs the DMV lookup and drafts the lien-sale notice on the tow yard's own machine, no owner data sent anywhere.

Buyer and niche (≤25 words): Tow yard and impound lot owners and clerks handling vehicle-owner and lienholder personal data across state-specific notice deadlines.

Pain and evidence (≤40 words; cite the pain dossier file): Missing a DMV lookup or notice window voids the entire lien sale, leaving the tow company owing the vehicle's full market value; owner and lienholder PII would otherwise pass through a cloud service. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A locally-run open-weight agent watches the DMV portal's screen, extracts owner and lienholder details, computes the state's specific notice window, and drafts a statute-cited notice with a logged screenshot, all processed on the yard's own computer except for the portal visit itself.

Why now (≤25 words; name the specific capability): TC-26 llama.cpp/Ollama serves a quantized reasoning model at 50-250 tokens/sec on one consumer GPU, no cloud inference bill.

Demo moment (≤20 words): Enter a tow record; the on-device agent completes the DMV lookup and prints a notice while the network log stays silent.

Business model (≤15 words): Flat monthly software fee per yard location, no usage-based cloud charges.

---
id: s3-ideator-balanced-T4-02-r3#04
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
---

# Guardian Ledger On-Device Agent

One-liner (≤20 words): Turns a guardian's bank statements and receipts into the court's accounting format without a ward's finances leaving the laptop.

Buyer and niche (≤25 words): Professional guardians and daily money managers preparing annual accountings, bound by fiduciary duty to protect a ward's financial records.

Pain and evidence (≤40 words; cite the pain dossier file): Annual accountings are due on a fixed date and discrepancies can trigger a hearing; sending a ward's full bank history to a cloud vendor is a real fiduciary liability, not a preference. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A local vision-language model reads scanned receipts and statement PDFs, categorizes transactions into the court's accounting fields, flags balance mismatches, and drives the court's e-filing portal to submit, entirely on the guardian's own machine with nothing sent to a server.

Why now (≤25 words; name the specific capability): gpt-oss-20b (TC-22) plus local OCR-capable vision handle scanned financial documents fully offline in 16GB of memory.

Demo moment (≤20 words): Drop in a folder of statements; a categorized accounting appears and a planted mismatch is flagged, no network call fires.

Business model (≤15 words): Per-ward monthly license, sold to guardians and daily-money-manager firms.

---
id: s3-ideator-balanced-T4-02-r3#05
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
---

# Fire Incident On-Device Scribe

One-liner (≤20 words): An on-device voice and screen agent drafts and files the incident report from a firehouse laptop, no cloud dependency.

Buyer and niche (≤25 words): Volunteer and combination fire department officers filing after every call, with no records staff and victim details to protect.

Pain and evidence (≤40 words; cite the pain dossier file): Officers reconstruct incidents from memory and re-enter the same details repeatedly; bad reporting data can affect federal grant funding, and incident narratives include addresses and victim details. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A self-hosted speech model transcribes the officer's spoken recap on-device, a local reasoning model fills the required incident fields, and a local screen-driving agent submits the report to the reporting portal, keeping every word and screenshot on the department's own machine until the final upload.

Why now (≤25 words; name the specific capability): TC-31 Kyutai STT is open-weight, self-hosted with ~500ms delay, pairing with local screen-driving for a fully offline drafting pipeline.

Demo moment (≤20 words): Speak a mock incident recap with wifi off; a filled report appears, then files once connectivity returns.

Business model (≤15 words): Annual per-department software license, no per-minute cloud voice fee.

<!-- COMPLETE -->
