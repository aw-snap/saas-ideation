## Cards

---
id: s3-ideator-novel-T3-02-r3#01
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r3
---

# Local Agent for Protected Dental Data

One-liner (≤20 words): A fully local desktop agent extracts and syncs Dentrix's "protected" categories without any patient data ever leaving the practice's machine.

Buyer and niche (≤25 words): Dental office managers on Dentrix, needing patient financing, credit card and insurance claim data synced to other tools without a paid API.

Pain and evidence (≤40 words; cite the pain dossier file): Dentrix "classes whole categories (patient financing, credit card processing, insurance claim processing) as 'protected' and restricts or bars them." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A self-hosted GUI agent, running entirely on the practice's own PC, reads and writes these protected screens the same way a receptionist would, extracting records into a local database that other on-site tools query; nothing about a patient ever reaches a vendor server or cloud API.

Why now (≤25 words; name the specific capability): UI-TARS-2 open-weight GUI agent (Sept 2025) runs self-hosted, letting screen automation happen with zero cloud calls.

Demo moment (≤20 words): Disconnect the machine from the internet; the agent still reads a protected screen and posts the record locally.

Business model (≤15 words): One-time install fee plus low monthly support, per practice, no per-call fee.

---
id: s3-ideator-novel-T3-02-r3#02
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r3
---

# Carrier PII Reconciler, Fully Local

One-liner (≤20 words): An on-premises agent reconciles carrier portal data against the agency system without medical or financial PII ever reaching the cloud.

Buyer and niche (≤25 words): Insurance agency CSRs on AMS360 or Applied Epic, handling client SSNs and, for life and health lines, medical exam history.

Pain and evidence (≤40 words; cite the pain dossier file): Agencies do "double and triple entry" across rating tools, the AMS and other tools, and a cancellation captured outside the AMS led to a reported $42,000 policy loss. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A local model reads carrier portal and AMS screens on the agency's own server, matches records field by field, and flags mismatches; every extraction, comparison and draft correction runs on that server, so no client SSN or exam result is ever sent to a hosted API.

Why now (≤25 words; name the specific capability): gpt-oss-20b (Aug 2025) fits a 16GB workstation and reasons over full policy text locally, at near cloud-model quality.

Demo moment (≤20 words): Unplug the office's internet; the agent still flags a mismatched policy from cached portal screens.

Business model (≤15 words): Per-seat monthly license, priced against E&O exposure avoided.

---
id: s3-ideator-novel-T3-02-r3#03
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r3
---

# Local Record Extractor for Vet Sales

One-liner (≤20 words): A local agent pulls years of Cornerstone records for a practice sale, keeping the client list off any cloud.

Buyer and niche (≤25 words): Small-town veterinary practice owners preparing to sell, needing a buyer-ready data package from Cornerstone's date-blind reports.

Pain and evidence (≤40 words; cite the pain dossier file): Cornerstone reports can't be filtered by date ("There is no way to specify the dates you would like to run reports for"), and the client list is the practice's most sensitive asset. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A locally-run agent operates Cornerstone's own screens on the practice's PC, pulls every record in a chosen date range, and assembles a valuation-ready summary entirely on that machine; the raw record set never leaves the practice, only the summary the owner chooses to export does.

Why now (≤25 words; name the specific capability): Local inference engines (llama.cpp/Ollama, production-grade) run a quantized reasoning model on ordinary clinic hardware at full accuracy.

Demo moment (≤20 words): Request a filtered 3-year revenue report; it appears locally in under a minute, no data sent out.

Business model (≤15 words): Flat fee per valuation project, sold through practice brokers.

---
id: s3-ideator-novel-T3-02-r3#04
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r3
---

# Tenant Screening Agent, Data Stays Local

One-liner (≤20 words): A local agent files tenant screening data into Yardi or AppFolio without SSNs or credit data touching the cloud.

Buyer and niche (≤25 words): Property managers on Yardi Voyager or AppFolio, running credit and background checks on applicants for units they manage.

Pain and evidence (≤40 words; cite the pain dossier file): Yardi has no self-serve API, so data moves by SFTP flat-file, and on AppFolio "credit card transactions still have to be entered manually." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent runs on the property manager's office PC, reads the screening report and card details, and posts both into Yardi's or AppFolio's own ledger and tenant screens; the SSN, credit report and card number are processed and discarded locally, never sent to any cloud.

Why now (≤25 words; name the specific capability): Open-weight vision-language GUI agents (UI-TARS-2, Sept 2025) reach production-track reliability for exactly this kind of local data entry.

Demo moment (≤20 words): Feed in a mock screening report; watch the agent populate Yardi's screens with zero network calls logged.

Business model (≤15 words): Per-portfolio monthly subscription, undercutting Yardi's reported per-interface fee.

---
id: s3-ideator-novel-T3-02-r3#05
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r3
---

# Local F&I Credit Application Filler

One-liner (≤20 words): An on-premises agent copies a buyer's credit application from the DMS into lender portals, SSN never leaving the dealership network.

Buyer and niche (≤25 words): Dealership F&I managers on CDK or Reynolds, re-keying buyer credit applications into multiple lender portals for each deal.

Pain and evidence (≤40 words; cite the pain dossier file): DMS integration tolls stack per rooftop and per tool ($2,000 setup plus $175-$465 monthly per location), pushing dealers toward manual workarounds for anything unpaid. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A locally-hosted agent reads the buyer's application off the DMS screen and re-enters it into each lender's portal on the dealership's own machine; the SSN and credit data live only in that local process's memory and are never sent to any third-party API.

Why now (≤25 words; name the specific capability): UI-TARS-2 (Sept 2025) and gpt-oss-20b (Aug 2025) both run self-hosted, giving screen agent plus reasoning on one workstation.

Demo moment (≤20 words): Fill one buyer's application once; watch it appear correctly in three lender mockups, with zero external network calls.

Business model (≤15 words): Per-rooftop monthly subscription, well under CDK 3PA's $30,000 certification fee.

<!-- COMPLETE -->
