### I-5401 Dealer Integrator Invoice Hold List

Verdict: adjacent-exists

Competitors:
- Ramp AP Fraud Prevention (ramp.com/ap-fraud-prevention) — general AP fraud/bank-detail-change detection, not scoped to dealer DMS integrator invoices or contract-rate creep.
- Generic 5-way-match AP automation (e.g. Corpay, Expenzing) — matches invoice to PO/contract, but not built for CDK/Reynolds rooftop billing specifically.

Note: General AP fraud and 5-way-match tools already flag bank-detail changes and PO/contract mismatches; none is built for dealer-group DMS integrator invoices specifically.

### I-5402 Commission Gap Email Negotiator

Verdict: adjacent-exists

Competitors:
- Applied Recon (appliedsystems.com) — reconciles carrier commission statements against policies and flags missing lines, but doesn't draft/send/track carrier follow-up emails.
- Neudash Carrier Commission Reconciliation (neudash.com) — matches statements to policies, no autonomous carrier email negotiation loop.

Note: Commission reconciliation tools that flag missing statement lines exist widely; none found that autonomously drafts and tracks a carrier email thread to close the gap.

### I-5403 One-Build Freight Layout Learner

Verdict: adjacent-exists

Competitors:
- CapyParse (capyparse.com) — AI extraction that adapts to any carrier layout without pre-configuration, explicitly positioned against template-based tools like this idea.
- Extend Rate Confirmation Parser (extend.ai/templates/rate-confirmation) — template-based rate-con extraction.

Note: CapyParse already markets "no template needed" extraction as an advantage, which is close to but the inverse mechanism of this idea's "mark up once, reuse the template" approach.

### I-5404 DMS Outage Continuity Binder

Verdict: clear

Competitors:
- Vivant backup internet for dealerships (vivantcorp.com) — solves connectivity, not DMS-vendor-side outages; explicitly does not cover CDK-style platform outages.

Note: Coverage discusses backup internet and contract RTO clauses, but no product found that turns DMS's own nightly PDF exports into a searchable offline continuity binder.

### I-5405 Vendor Support Hold-and-Patch Agent

Verdict: direct-competitor

Competitors:
- Google Assistant "Hold for Me" / "Talk to a Live Representative" (support.google.com/assistant/answer/10071878) — dials, navigates IVR, waits on hold, detects a live rep, and connects the user, same mechanism, general-purpose rather than vendor-support-niche.
- Retell AI / Bland AI voice agent platforms (retellai.com, bland.ai) — hosted voice-agent stacks that navigate IVR and hold, usable to build this exact workflow.

Note: Same mechanism (dial, hold, detect human, patch in) already live via Google's Hold for Me and off-the-shelf voice-agent platforms; niche narrowing to dental/vet/pharmacy vendors doesn't change the core product.

### I-5406 Local Dentrix Ledger Export

Verdict: adjacent-exists

Competitors:
- Dentrix DXPort (hsps.pro/Dentrix DXPort overview) — built-in Dentrix feature exporting daily production/collection totals to QuickBooks/Excel locally.

Note: Dentrix already ships DXPort, a built-in local export-to-QuickBooks feature; this idea's differentiator is packaging/no-per-record-fee, not a new mechanism.

### I-5407 Denial Feed From Inbox Only

Verdict: adjacent-exists

Competitors:
- Quill Bills (quillbills.com) — extracts scanned EOBs/remittance PDFs into structured records with ERA auto-post, similar extraction mechanism but built into a fuller billing platform, not an inbox-only freelancer tool.
- AdvancedMD Electronic Remittance (advancedmd.com) — automates remittance matching into a denial worklist, but tied to its own portal/PM system rather than a solo biller's inbox across many practices.

Note: PDF/email remittance extraction into structured denial records exists in larger billing suites; a portal-free, inbox-only tool for independent freelance billers across multiple practices wasn't found standalone.

### I-5408 Practitioner Line Hold and Readback

Verdict: direct-competitor

Competitors:
- Google Assistant "Hold for Me"/"Talk to a Live Representative" (support.google.com/assistant/answer/10071878) — same IVR-navigate-and-hold mechanism, general purpose.
- Voice-agent platforms (Retell AI, Bland) — support building IVR-hold agents with spoken summaries for any target line, including IRS-style queues.

Note: Same hold-and-connect mechanism as I-5405, applied to IRS/payer lines; the pre-authentication handoff and spoken readback are refinements, not a new mechanism versus existing hold-agent products.

### I-5409 Gig Pay Screenshot Reconciler

Verdict: clear

Competitors:
- SparkReceipt Rideshare (sparkreceipt.com/industries/rideshare) — expense/mileage tracking for gig drivers, not pay-statement-vs-screenshot reconciliation.
- Uber's own missing-trip help flow (help.uber.com) — manual support article, not a third-party reconciliation tool.

Note: No independent tool found that reconciles driver-side trip screenshots against weekly payout statements to flag missing trips or shorted tips.

### I-5410 Micro-Seller Customs Declaration Autopilot

Verdict: adjacent-exists

Competitors:
- Easyship (easyship.com) — offers tax/duties calculator and automated customs paperwork for the post-de-minimis environment, broad shipping platform rather than a lightweight per-shipment autopilot for micro Etsy/eBay sellers.
- Stord / FlavorCloud de minimis guides and tools (stord.com, flavorcloud.com) — landed-cost/DDP and customs documentation tooling aimed at similar sellers.

Note: Multiple shipping platforms already added HTS classification and automated customs paperwork after de minimis ended; a dedicated lightweight autopilot for micro sellers too small for a broker wasn't confirmed as distinct.

```json
[
  {"id": "I-5401", "verdict": "adjacent-exists", "competitors": ["Ramp AP Fraud Prevention (https://ramp.com/ap-fraud-prevention)", "Generic 5-way-match AP automation e.g. Corpay/Expenzing (https://www.corpay.com/resources/blog/accounts-payable-fraud)"], "note": "General AP fraud and 5-way-match tools already flag bank-detail changes and PO/contract mismatches; none is built for dealer-group DMS integrator invoices specifically."},
  {"id": "I-5402", "verdict": "adjacent-exists", "competitors": ["Applied Recon (https://www1.appliedsystems.com/en-us/blog/posts/how-to-fix-reconciliation-applied-recon/)", "Neudash Carrier Commission Reconciliation (https://neudash.com/solutions/insurance/carrier-commission-reconciliation)"], "note": "Commission reconciliation tools that flag missing statement lines exist widely; none found that autonomously drafts and tracks a carrier email thread to close the gap."},
  {"id": "I-5403", "verdict": "adjacent-exists", "competitors": ["CapyParse (https://capyparse.com/shipping-document-ocr)", "Extend Rate Confirmation Parser (https://www.extend.ai/templates/rate-confirmation)"], "note": "CapyParse already markets no-template-needed extraction, close to but the inverse mechanism of this idea's mark-up-once, reuse-the-template approach."},
  {"id": "I-5404", "verdict": "clear", "competitors": ["Vivant backup internet for dealerships (https://vivantcorp.com/backup-internet-for-auto-dealerships-cdk-and-reynolds/)"], "note": "Coverage discusses backup internet and contract RTO clauses, but no product found that turns DMS nightly PDF exports into a searchable offline continuity binder."},
  {"id": "I-5405", "verdict": "direct-competitor", "competitors": ["Google Assistant Hold for Me / Talk to a Live Representative (https://support.google.com/assistant/answer/10071878)", "Retell AI (https://www.retellai.com/)", "Bland AI (https://www.bland.ai/)"], "note": "Same mechanism, dial, hold, detect human, patch in, already live via Google's Hold for Me and off-the-shelf voice-agent platforms; niche narrowing to vendor support doesn't change the core product."},
  {"id": "I-5406", "verdict": "adjacent-exists", "competitors": ["Dentrix DXPort (https://hsps.pro/Dentrix/Help/mergedProjects/Office%20Manager/DXPort/DXPort_overview.htm)"], "note": "Dentrix already ships DXPort, a built-in local export-to-QuickBooks feature; this idea's differentiator is packaging and no-per-record fee, not a new mechanism."},
  {"id": "I-5407", "verdict": "adjacent-exists", "competitors": ["Quill Bills (https://quillbills.com/)", "AdvancedMD Electronic Remittance (https://www.advancedmd.com/medical-billing/software/electronic-remittance/)"], "note": "PDF/email remittance extraction into structured denial records exists in larger billing suites; a portal-free, inbox-only tool for independent freelance billers wasn't found standalone."},
  {"id": "I-5408", "verdict": "direct-competitor", "competitors": ["Google Assistant Hold for Me / Talk to a Live Representative (https://support.google.com/assistant/answer/10071878)", "Retell AI (https://www.retellai.com/)"], "note": "Same hold-and-connect mechanism as I-5405 applied to IRS/payer lines; pre-authentication handoff and spoken readback are refinements, not a new mechanism."},
  {"id": "I-5409", "verdict": "clear", "competitors": ["SparkReceipt Rideshare (https://sparkreceipt.com/industries/rideshare)"], "note": "No independent tool found that reconciles driver-side trip screenshots against weekly payout statements to flag missing trips or shorted tips."},
  {"id": "I-5410", "verdict": "adjacent-exists", "competitors": ["Easyship (https://www.easyship.com/)", "Stord de minimis guide (https://www.stord.com/reports/de-minimis-guide)"], "note": "Multiple shipping platforms already added HTS classification and automated customs paperwork after de minimis ended; a dedicated lightweight autopilot for micro sellers wasn't confirmed as distinct."}
]
```

<!-- COMPLETE -->
