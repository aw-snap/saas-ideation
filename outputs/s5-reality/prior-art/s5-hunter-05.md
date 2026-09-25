### I-1021 Fiduciary Record Vault
Verdict: adjacent-exists
Competitors:
- VA Fiduciary Accounting Submission Tool / FAST (https://benefits.va.gov/fiduciary/fiduciary_fast.asp) — official VA e-filing portal for the accounting form, no on-device AI categorization or reconciliation.
- GuardianPad (https://guardianpad.com/) — guardianship case-management with court accountings, not VA/SSA-specific, cloud-hosted not on-device.
Note: Filing portals and guardianship suites exist, but none auto-classify/reconcile from raw statements on-device for VA fiduciaries/SSA payees specifically.

### I-1062 One-Split VAT Learner
Verdict: adjacent-exists
Competitors:
- Rossum (referenced via search, invoice OCR/AP platform) — VAT-aware extraction with correction-driven learning, but general AP automation, not a one-shot per-vendor mixed-tax-split template.
- DocuClipper (https://www.docuclipper.com/features/invoice-ocr/) — line-item and tax extraction, no evidence of single-correction vendor template reuse.
Note: Invoice-OCR/AP tools already extract and learn from corrections broadly; the specific "one correction becomes a reusable per-vendor split template" mechanism wasn't found.

### I-1545 Consent Notary API for Solo Care Agents
Verdict: clear
Competitors: none found matching this mechanism.
Note: Found only generic bank POA certification-form guidance, no API product issuing reusable signed authority credentials for solo caregiving software agents.

### I-2039 Instant Paddle Capture
Verdict: adjacent-exists
Competitors:
- Handbid (https://www.handbid.com/ways-we-help/donations-paddle-raises) — works with auctioneers, real-time dashboard, but staff/spotter-entered, not camera+speech fusion.
- Silent Auction Pro (https://www.silentauctionpro.com/features.php) — auctioneer monitor mode for quick manual paddle entry.
Note: Established gala/paddle-raise platforms handle capture and reconciliation, but all rely on manual spotter entry, not automated camera-plus-speech fusion.

### I-2053 Summary Reweigh Desk
Verdict: adjacent-exists
Competitors:
- Roots.ai hallucination-prevention blog/product line (https://www.roots.ai/blog/ai-hallucinations-insurance-workflows-what-they-are-why-they-happen-how-prevent-them) — insurance AI hallucination mitigation, general not adjuster-facing sentence-level highlighter.
- Notch.cx (https://www.notch.cx/post/hallucinations-in-insurance) — similar hallucination-risk content/tooling angle for insurers.
Note: Insurance AI-hallucination detection/verification tooling exists at the carrier level; a dedicated per-sentence highlighter tool for independent adjusters reviewing carrier summaries wasn't found live.

### I-2528 Guardian Accounting Narrator
Verdict: adjacent-exists
Competitors:
- GuardianPad (https://guardianpad.com/) — produces court-accepted accountings, no evidence of a plain-English narrative generator specifically.
- Advocord (https://advocord.com/) — life-management/record-keeping platform for guardians/POAs.
Note: Guardianship case-management suites already generate court accountings from records; a narrative-drafting-plus-flagging tool built on cheap OCR is a variant, not clearly duplicated.

### I-2584 Home Network Fixer
Verdict: direct-competitor
Competitors:
- UniFi WiFi Agent (https://help.ui.com/hc/en-us/articles/31628490448151) — diagnoses and auto-fixes common Wi-Fi issues from router/device data, but locked to Ubiquiti hardware.
- Support Robotics (https://www.supportrobotics.com/) — automated Wi-Fi diagnostics that "checks settings and fixes most common issues" across routers, extenders, smart-home devices.
Note: Live products already diagnose and auto-fix home Wi-Fi from device/router data; niche and mechanism largely match, though hardware lock-in or ISP-white-label distribution differs.

### I-3040 The Adjuster's Alibi
Verdict: adjacent-exists
Competitors:
- Roots.ai (https://www.roots.ai/blog/ai-hallucinations-insurance-workflows-what-they-are-why-they-happen-how-prevent-them) — claim verification pipeline with source checks, similar to per-line sourcing.
- GANDR (arXiv paper, https://arxiv.org/pdf/2609.10293) — research system for claim auditing/verifiable legal answer generation, not a shipped product.
Note: Same competitor space as I-2053; hallucination/claim-verification concepts exist in insurance AI, but no live product doing exact page/line-level figure stamping for adjuster sign-off was found.

### I-3088 Vendor Hold-Queue Call Agent
Verdict: clear
Competitors: none directly found; nearest are inbound dental AI receptionists (e.g., Controx, https://www.controxai.com/blog/ai-voice-agent-dental-clinics-complete-guide) which answer patient calls, not place outbound vendor-support hold calls.
Note: AI voice agents for dental/vet offices are inbound patient-facing; no product found that calls vendor support lines, waits on hold, and verifies the fix landed.

### I-3540 Agent Guest List
Verdict: adjacent-exists
Competitors:
- ai.robots.txt / Bot Ledger allowlist generators (https://github.com/ai-robots-txt/ai.robots.txt) — crawler-by-crawler robots.txt allow/block lists, static and not scoped per-agent with revocable keys.
- Cloudflare-style WAF AI-bot management (referenced via search) — allowlists specific bots by user agent/IP range at the network layer.
Note: Robots.txt allowlists and WAF bot-management exist for blocking/allowing AI crawlers broadly, but scoped, revocable, per-named-shopping-agent feed access for solo sellers wasn't found.

### I-4511 Proof Receipts for Proxy Agents
Verdict: adjacent-exists
Competitors:
- Agent Receipts (https://agentreceipts.ai/) — cryptographically signed, hash-chained receipts for AI agent actions (W3C Verifiable Credential style).
- ActionProof (https://github.com/Burakfenerci5/actionproof) — tamper-proof, offline-verifiable signed receipts for AI agent actions, open source.
Note: General AI-agent action-receipt/audit-trail tools exist and are close in mechanism (signed proof of action), but none target redacted, annotated screenshot receipts for elder-care proxy portals specifically.

### I-4553 Attestation Drift Monitor
Verdict: adjacent-exists
Competitors:
- FCI Cyber Cyber Insurance Readiness (https://fcicyber.com/solutions/cyber-insurance-readiness) — "prove your controls, keep your coverage," continuous evidence generation for renewal questionnaires.
Note: A platform already generates continuous compliance evidence for cyber-insurance renewals; unclear if it uses a logged-in browser agent to catch questionnaire-vs-console mismatches the way this idea does.

### I-6015 Routine-Aware Phrase Board
Verdict: adjacent-exists
Competitors:
- Spoken AAC (https://spokenaac.com/blog/what_is_aac/) — AI-powered predictive text that learns communication patterns and adapts vocabulary by location.
- Predictive Anchoring research (arXiv, https://arxiv.org/pdf/2408.11140) — context-aware grid suggestion research for AAC displays, not a shipped consumer product.
Note: Location-aware predictive AAC vocabulary already ships (Spoken); explicit time-of-day/routine-based reordering of an existing phrase bank without listening wasn't confirmed as a live product.

```json
[
  {"id": "I-1021", "verdict": "adjacent-exists", "competitors": ["VA Fiduciary Accounting Submission Tool / FAST (https://benefits.va.gov/fiduciary/fiduciary_fast.asp)", "GuardianPad (https://guardianpad.com/)"], "note": "Filing portals and guardianship suites exist, but none auto-classify/reconcile from raw statements on-device for VA fiduciaries/SSA payees specifically."},
  {"id": "I-1062", "verdict": "adjacent-exists", "competitors": ["Rossum (invoice OCR/AP automation)", "DocuClipper (https://www.docuclipper.com/features/invoice-ocr/)"], "note": "Invoice-OCR/AP tools already extract VAT and learn from corrections broadly; the specific one-shot per-vendor mixed-tax-split template mechanism wasn't found."},
  {"id": "I-1545", "verdict": "clear", "competitors": [], "note": "Found only generic bank POA certification-form guidance, no API product issuing reusable signed authority credentials for solo caregiving software agents."},
  {"id": "I-2039", "verdict": "adjacent-exists", "competitors": ["Handbid (https://www.handbid.com/ways-we-help/donations-paddle-raises)", "Silent Auction Pro (https://www.silentauctionpro.com/features.php)"], "note": "Established gala/paddle-raise platforms exist, but all rely on manual spotter entry, not automated camera-plus-speech fusion."},
  {"id": "I-2053", "verdict": "adjacent-exists", "competitors": ["Roots.ai (https://www.roots.ai/blog/ai-hallucinations-insurance-workflows-what-they-are-why-they-happen-how-prevent-them)", "Notch.cx (https://www.notch.cx/post/hallucinations-in-insurance)"], "note": "Insurance AI-hallucination detection exists at carrier level; a dedicated per-sentence highlighter for independent adjusters wasn't found live."},
  {"id": "I-2528", "verdict": "adjacent-exists", "competitors": ["GuardianPad (https://guardianpad.com/)", "Advocord (https://advocord.com/)"], "note": "Guardianship suites already generate court accountings from records; a plain-English narrative-drafting tool is a variant, not clearly duplicated."},
  {"id": "I-2584", "verdict": "direct-competitor", "competitors": ["UniFi WiFi Agent (https://help.ui.com/hc/en-us/articles/31628490448151)", "Support Robotics (https://www.supportrobotics.com/)"], "note": "Live products already diagnose and auto-fix home Wi-Fi from device/router data; niche and mechanism largely match, though hardware lock-in or ISP distribution differs."},
  {"id": "I-3040", "verdict": "adjacent-exists", "competitors": ["Roots.ai (https://www.roots.ai/blog/ai-hallucinations-insurance-workflows-what-they-are-why-they-happen-how-prevent-them)", "GANDR (https://arxiv.org/pdf/2609.10293)"], "note": "Hallucination/claim-verification concepts exist in insurance AI, but no live product stamping exact page/line-level source for adjuster sign-off was found."},
  {"id": "I-3088", "verdict": "clear", "competitors": ["Controx AI voice agent for dental clinics (https://www.controxai.com/blog/ai-voice-agent-dental-clinics-complete-guide)"], "note": "Existing dental AI voice agents are inbound patient-facing; no product found calling vendor support lines, holding, and verifying the fix landed."},
  {"id": "I-3540", "verdict": "adjacent-exists", "competitors": ["ai.robots.txt / Bot Ledger (https://github.com/ai-robots-txt/ai.robots.txt)"], "note": "Robots.txt allowlists and WAF bot-management allow/block AI crawlers broadly, but scoped, revocable, per-named-agent feed access for solo sellers wasn't found."},
  {"id": "I-4511", "verdict": "adjacent-exists", "competitors": ["Agent Receipts (https://agentreceipts.ai/)", "ActionProof (https://github.com/Burakfenerci5/actionproof)"], "note": "General AI-agent signed action-receipt tools exist and are close in mechanism, but none target redacted screenshot receipts for elder-care proxy portals."},
  {"id": "I-4553", "verdict": "adjacent-exists", "competitors": ["FCI Cyber Cyber Insurance Readiness (https://fcicyber.com/solutions/cyber-insurance-readiness)"], "note": "A platform already generates continuous compliance evidence for cyber-insurance renewals; unclear if it uses a logged-in browser agent to catch console-vs-form mismatches."},
  {"id": "I-6015", "verdict": "adjacent-exists", "competitors": ["Spoken AAC (https://spokenaac.com/blog/what_is_aac/)", "Predictive Anchoring research (https://arxiv.org/pdf/2408.11140)"], "note": "Location-aware predictive AAC vocabulary already ships; explicit time-of-day/routine reordering of an existing phrase bank wasn't confirmed as a live product."}
]
```
<!-- COMPLETE -->
