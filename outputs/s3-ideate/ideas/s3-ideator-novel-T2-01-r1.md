## Titles

1. Foreign-Invoice Autopilot for Freelancers
2. The Multilingual AP Clerk in a Browser [similar]
   → Rewritten: Client Tax-ID Autopilot
3. Peppol Passport for Solo Translators
4. XRechnung Whisperer [similar]
   → Rewritten: Pre-Flight Validator for Structured Invoices
5. Invoice Format Detective [similar]
   → Rewritten: One Invoice, Many Skins
6. The 150-Platform Picker [safe]
   → Rewritten: PDP Registration Autopilot
7. VAT Reverse-Charge Autocheck
8. CAT-Tool Subscription Ledger [safe]
   → Rewritten: Subscription-to-Billable Leak Finder
9. Cross-Border Invoice Translator & Poster [similar]
   → Rewritten: PO-to-Invoice Word Count Reconciler
10. E-Invoice XML Keeper
11. The Currency-Blind Bookkeeper [safe]
    → Rewritten: FX-Aware Invoice Poster
12. Solo AP Agent for Language Pros [similar]
    → Rewritten: Crowd-Verified Rejection Patterns
13. Invoice Inbox Polyglot [similar]
    → Rewritten: The Weekly Batch, Not Daily Drip
14. The Client-Format Matchmaker [similar]
    → Rewritten: New Client Compliance Sniff Test
15. Verifactu Ready for One-Person Firms
16. My Invoices, My Languages [safe]
    → Rewritten: Client Invoice Memory
17. The Non-Billable Hour Killer [safe]
    → Rewritten: Ask-Once VAT Explainer Draft
18. Multilingual Line-Item Normalizer
19. The Freelancer's E-Invoice Firewall [safe]
    → Rewritten: Compliance Cliff Sandbox Test
20. Peppol Delivery Confirmation Watchdog
21. The 8-Year XML Vault [similar]
    → Rewritten: Audit Time Machine
22. Invoice Rejection Code Translator
23. AP Copilot for Solo Localizers [similar]
    → Rewritten: UBL Human-Readable Overlay Translator
24. The Reverse-Charge Radar [similar]
    → Rewritten: Two-Sided Reverse-Charge Ledger
25. Multi-Currency Multi-Language Ledger Sync [similar]
    → Rewritten: Payment Platform Reconciler
26. The Client Onboarding Format Wizard [similar]
    → Rewritten: Agency Format Broadcast, Freelancer Auto-Adapt
27. Invoice Language Detector & Poster [similar]
    → Rewritten: Non-Latin-Script Invoice Rescue
28. The Accidental Accountant's Sidekick [safe]
    → Rewritten: Regulatory Drift Monitor
29. E-Invoice Mandate Countdown Agent [safe]
    → Rewritten: Full Multi-Portal Filing Autopilot
30. The Foreign Vendor Invoice Reader [similar]
    → Rewritten: The Freelancer's Compliance Twin

## Cards

---
id: s3-ideator-novel-T2-01-r1#01
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# Foreign-Invoice Autopilot

One-liner (≤20 words): Reads vendor invoices in any language and currency, posts them into your ledger automatically.

Buyer and niche (≤25 words): Freelance translators and localizers who receive software, subscription and coworking invoices from vendors in many countries and languages.

Pain and evidence (≤40 words; cite the pain dossier file): Bookkeepers re-key most invoices by hand at about $15 each, 32-40/day capacity, because capture tools "hardly process invoices automatically" and need re-uploading. (P1, P2) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Multilingual document OCR extracts vendor, amount, currency, tax and line-item fields from any script, an LLM maps them to your ledger's chart of accounts, and posts a draft entry for one-tap approval instead of manual retyping.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (Dec 2025) parses handwriting and tables across languages and scripts at $1-2 per 1,000 pages.

Demo moment (≤20 words): Drop a Ukrainian software invoice and a French utility bill; both post correctly to the ledger in seconds.

Business model (≤15 words): Per-invoice fee, or monthly subscription tiered by invoice volume.

---
id: s3-ideator-novel-T2-01-r1#02
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# One Invoice, Many Skins

One-liner (≤20 words): Write one invoice; get it auto-rendered into every country's required e-invoice format instantly.

Buyer and niche (≤25 words): Small firms and freelancers invoicing clients across Germany, Belgium, France and Spain under different, overlapping e-invoice mandates.

Pain and evidence (≤40 words; cite the pain dossier file): 150 unlinked French platforms with no default choice, Peppol UBL that is machine-only with an optional PDF, and only 45% of German firms able to receive e-invoices at all. (P9, P11, P14) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: One canonical invoice record; the agent renders XRechnung XML, Peppol UBL plus a readable PDF twin, and a Factur-X hybrid, then routes each to the platform or access point the specific client's country requires.

Why now (≤25 words): Cheap long-context inference makes generating and validating several country-specific renders per invoice affordable at small-firm volumes.

Demo moment (≤20 words): One invoice submitted; three compliant renders for Germany, Belgium and France appear side by side, visibly different.

Business model (≤15 words): Subscription per invoicing entity, priced by number of countries covered.

---
id: s3-ideator-novel-T2-01-r1#03
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# Full Multi-Portal Filing Autopilot

One-liner (≤20 words): Logs into whichever of 150+ e-invoice platforms a client requires and files the invoice itself.

Buyer and niche (≤25 words): Small-firm bookkeepers and office managers who must submit invoices through unfamiliar national e-invoicing platforms and access points.

Pain and evidence (≤40 words; cite the pain dossier file): France alone has about 150 registered platforms with no default choice, and "without a connected platform" a firm "cannot issue or receive" invoices at all. (P14) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: A browser agent holds credentials for each client's chosen platform, logs in, uploads the already-rendered invoice, and confirms submission status, escalating to the human only when a real error, not a routine step, blocks it.

Why now (≤25 words): Browser computer-use now reaches 61.4% on OSWorld and can hold multi-step sessions for over 30 hours unattended.

Demo moment (≤20 words): The agent files the same invoice on two different national platforms live, screenshotting each confirmation page.

Business model (≤15 words): Per-filing fee plus a flat monthly platform-coverage retainer.

---
id: s3-ideator-novel-T2-01-r1#04
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# Peppol Delivery Confirmation Watchdog

One-liner (≤20 words): Confirms your Peppol e-invoice actually arrived, instead of assuming registration and delivery worked.

Buyer and niche (≤25 words): Belgian SME owners and their accountants who send e-invoices but have no visibility into whether they were delivered.

Pain and evidence (≤40 words; cite the pain dossier file): "Nobody can see whether e-invoices were delivered or whether the firm is even registered," and many SMEs "assume they are 'on Peppol'" without confirming it, with fines starting around April 2026. (P12) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: The agent logs into the firm's Peppol access-point console on a schedule, checks registration status and per-invoice delivery receipts, and messages the owner the moment a delivery silently fails or a registration lapses.

Why now (≤25 words): Production browser agents can operate admin consoles unattended while the user stays logged in as themselves.

Demo moment (≤20 words): The agent flags one invoice as "not delivered" minutes after a simulated silent failure, before payment is late.

Business model (≤15 words): Flat monthly fee per registered VAT number monitored.

---
id: s3-ideator-novel-T2-01-r1#05
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# Invoice Rejection Code Translator

One-liner (≤20 words): Turns cryptic e-invoice rejection codes into plain instructions for the exact fix needed.

Buyer and niche (≤25 words): French and German small-firm finance staff whose issued e-invoices get automatically rejected by validators before payment can start.

Pain and evidence (≤40 words; cite the pain dossier file): French platforms "automatically reject" invoices with bad formats or SIREN mismatches, blocking the payment cycle; German XRechnung output fails the official validator "with no fix date from the vendor." (P13) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: The agent reads the platform's rejection response, cross-references the official code list against the original invoice, and returns a one-line diagnosis plus the corrected field, so staff fix and resubmit without researching codes themselves.

Why now (≤25 words): Cheap long-context models hold the full validator rulebook alongside the invoice for instant cross-referencing at low per-invoice cost.

Demo moment (≤20 words): A rejected XRechnung missing an IBAN gets diagnosed and corrected on screen in under a minute.

Business model (≤15 words): Pay-per-rejection-resolved, or bundled into a filing subscription.

---
id: s3-ideator-novel-T2-01-r1#06
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# Non-Latin-Script Invoice Rescue

One-liner (≤20 words): Extracts vendor invoices in Cyrillic and other non-Latin scripts that mainstream capture tools mis-read.

Buyer and niche (≤25 words): Freelance professionals and small firms whose vendors bill them in Ukrainian, Cyrillic or other non-Latin-script invoices and receipts.

Pain and evidence (≤40 words; cite the pain dossier file): Existing capture tools already "hardly process invoices automatically" and score 2.1/5 on Trustpilot on ordinary Latin-script scans, a gap that widens sharply for non-Latin scripts capture vendors rarely test against. (P2) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: Multilingual OCR reads the script natively, with no transliteration step, extracts vendor, amount, currency and tax fields, and posts a translated summary line next to the original scan in the ledger for one-tap review.

Why now (≤25 words): Mistral OCR 3 (Dec 2025) claims a 74% win rate over its predecessor on complex and handwritten documents across languages.

Demo moment (≤20 words): A scanned Ukrainian invoice posts correctly with an English summary line beside the original image.

Business model (≤15 words): Per-invoice fee, higher tier for rare scripts and layouts.

---
id: s3-ideator-novel-T2-01-r1#07
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# PO-to-Invoice Word Count Reconciler

One-liner (≤20 words): Checks your invoice's word count and rate against the agency's original purchase order before you send it.

Buyer and niche (≤25 words): Freelance translators and localizers who bill agencies by word count against a quote or purchase order for each job.

Pain and evidence (≤40 words; cite the pain dossier file): Even in ordinary AP intake, "PO matching and expense coding" are still "done by hand" on every invoice; freelancers billing by word count face the same unchecked mismatch risk before they invoice. (P1) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: Before you send an invoice, the agent reads your CAT-tool word-count report and the agency's original PO or quote, flags rate or volume mismatches, and only then generates the invoice.

Why now (≤25 words): Cheap long-context inference makes it affordable to cross-check a full job's history against one invoice every time.

Demo moment (≤20 words): The agent catches a rate mismatch between quote and drafted invoice, blocking send until it is confirmed.

Business model (≤15 words): Per-invoice fee for freelancers who bill through agencies.

---
id: s3-ideator-novel-T2-01-r1#08
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r1
---

# Ask-Once VAT Explainer Draft

One-liner (≤20 words): Drafts a plain-language VAT explanation and journal entry for any invoice your accountant hasn't seen before.

Buyer and niche (≤25 words): Freelance translators and other solo professionals with no in-house accountant, invoicing and buying across EU borders regularly.

Pain and evidence (≤40 words; cite the pain dossier file): Advisers report e-invoicing, real-time reporting and certified software as "three different obligations with different schedules," billed as extra time, while tax fields on invoices are "sometimes" wrong. (P3, P15) (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works: When an invoice hits an unfamiliar VAT scenario (new country, reverse charge, mixed rate), the agent drafts a short plain-language explanation and a suggested journal entry, so the freelancer forwards one paragraph to their accountant for a yes.

Why now (≤25 words): Cheap frontier reasoning models can hold current EU VAT rules and explain edge cases affordably at per-invoice scale.

Demo moment (≤20 words): A first Belgian client invoice triggers a two-sentence VAT explainer draft, ready to forward immediately.

Business model (≤15 words): Included in subscription; upsell a direct accountant hand-off integration.

<!-- COMPLETE -->
