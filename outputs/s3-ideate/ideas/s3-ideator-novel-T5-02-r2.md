## Cards

---
id: s3-ideator-novel-T5-02-r2#01
track: novel
lineage: seed-atom-hybrid
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [A-seed-05-insight-1]
source_task: s3-ideator-novel-T5-02-r2
---

# New-Platform Phishing Shield

One-liner (≤20 words): Verifies any "your e-invoicing platform changed" or bank-change message against the real government registry before anything switches.

Buyer and niche (≤25 words): Bookkeeper or AP clerk at a small firm mid-switchover to mandatory structured e-invoicing in France, Belgium or Germany.

Pain and evidence (≤40 words; cite the pain dossier file): Business email compromise cost US firms $2.9B in 2023 at $137k+ per incident; the confusing rollout of 150 French e-invoicing platforms with no default choice hands fraudsters a fresh, unfamiliar pretext. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): When an email claims a Peppol access point or approved platform has changed, the agent independently browses to the official government registry, confirms the platform's and vendor's real registered identity, shows that evidence before acting, and blocks the change until an out-of-band callback confirms it.

Why now (≤25 words; name the specific capability): In-browser agents, production since December 2025, cross-check any claimed platform or bank change against a live government registry in seconds.

Demo moment (≤20 words): A fake "your platform has changed" email arrives; the agent checks the real registry, shows the mismatch, blocks the switch.

Business model (≤15 words): Per-verification fee or flat monthly add-on bundled with existing accounts-payable software.

---
id: s3-ideator-novel-T5-02-r2#02
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r2
---

# E-Invoice Platform Offboarding Sweep

One-liner (≤20 words): Revokes a departed bookkeeper's e-invoicing platform logins before their access can silently reroute invoice flow.

Buyer and niche (≤25 words): Small firm owner or accounting-firm partner in France or Belgium after connecting to a mandated e-invoicing platform.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders cannot verify who has current access and automation credentials outlive their creators; 150 French platforms with no default choice mean the one login that matters often belongs to one person. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): The agent inventories every login, API key and webhook tied to the firm's chosen Peppol access point or approved platform, flags which belong to a departing bookkeeper or contractor, and reissues or revokes each one without interrupting the live invoice pipeline.

Why now (≤25 words; name the specific capability): Okta Agent SSO, generally available August 2026, gives platform integrations governed identities separate from whoever originally set them up.

Demo moment (≤20 words): Offboard a departed bookkeeper; the agent revokes her platform API key and reassigns the connection live.

Business model (≤15 words): Per-offboarding fee (about $49) or bundled into an accounting firm's retainer.

---
id: s3-ideator-novel-T5-02-r2#03
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r2
---

# Local Confidential Invoice Extraction

One-liner (≤20 words): Extracts invoice line items and VAT on the office PC itself, so no scan ever leaves the building.

Buyer and niche (≤25 words): Bookkeeper at a small firm answering a cyber-insurance questionnaire about where its financial data is processed.

Pain and evidence (≤40 words; cite the pain dossier file): Cyber-insurance renewals now run 60-150 control questions the owner can't answer confidently, while invoice-capture tools like Hubdoc fail on mixed-tax invoices and quietly send every scan to an unknown cloud vendor. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): A small open-weight model running on the office laptop reads scanned invoices, extracts vendor, line items and VAT, and posts them to the ledger entirely offline, so the insurance questionnaire answer "financial data stays on company-owned devices" becomes verifiably true.

Why now (≤25 words; name the specific capability): Gemma 3's 4B model, open weights since March 2025 with 128K context, runs invoice extraction on a standard laptop with no cloud call.

Demo moment (≤20 words): Wi-Fi is switched off mid-demo; the agent still extracts a mixed-tax invoice and posts it correctly.

Business model (≤15 words): One-time device license (about $299) or a low monthly per-seat fee.

---
id: s3-ideator-novel-T5-02-r2#04
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r2
---

# Unified Delivery-Proof Agent

One-liner (≤20 words): Confirms whether your emails and your e-invoices actually arrived, not just that they were sent.

Buyer and niche (≤25 words): Office manager at a small Belgian or Spanish firm sending invoices and newsletters under new mandates.

Pain and evidence (≤40 words; cite the pain dossier file): Raw DMARC reports go unread so spoofing goes unseen, and Belgian owners assume they're "on Peppol" without confirming registration is active or that invoices they sent actually arrived. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): The agent reads daily DMARC aggregate reports and polls the firm's Peppol access point and mail server for real delivery receipts, cross-references both against what was supposedly sent, and raises one plain-language alert whenever "sent" and "delivered" disagree.

Why now (≤25 words; name the specific capability): Computer-use agents operate registrar and Peppol access-point consoles directly, closing the loop instead of dashboarding raw XML reports.

Demo moment (≤20 words): An invoice shows "sent" but its Peppol receipt never arrives; the agent flags the gap live.

Business model (≤15 words): Flat monthly fee, roughly $39-79 per domain plus invoicing channel covered.

---
id: s3-ideator-novel-T5-02-r2#05
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r2
---

# Freight AP Extractor with Fraud Check

One-liner (≤20 words): Posts freight invoices straight to the ledger, then holds any payment whose bank details just changed.

Buyer and niche (≤25 words): Billing clerk at a small freight broker or customs brokerage auditing carrier invoices against BOLs and rate confirmations.

Pain and evidence (≤40 words; cite the pain dossier file): Freight billing staff earn $19-32/hr keying BOL, rate confirmation and invoice into accounting by hand for every load, while business email compromise averaged $137k+ per incident when a carrier's bank details changed without warning. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent extracts carrier, load reference, amount and bank details from the BOL, rate confirmation and invoice together, posts matched line items straight to the ledger, and holds any payment whose bank details differ from that carrier's last three verified shipments for manual review.

Why now (≤25 words; name the specific capability): Mistral OCR 3 extracts structured fields from scanned freight documents at $1-2 per 1,000 pages, cheap enough to run on every load.

Demo moment (≤20 words): Three matching freight documents post automatically; a fourth with changed bank details is held and flagged live.

Business model (≤15 words): Per-load fee (about $1-2) or a flat monthly fee per dispatcher seat.

<!-- COMPLETE -->
