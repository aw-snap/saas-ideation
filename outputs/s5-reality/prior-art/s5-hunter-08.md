### I-1024 PA Status Autopoll

Verdict: adjacent-exists

Closest products:
- Prosper AI (https://www.getprosper.ai/blog/automated-prior-authorization-software) — full-lifecycle PA automation (submission, follow-up, EHR write-back) for larger orgs, not a nightly status-only poller for small practices.
- Infinx Patient Access Plus (https://www.infinx.com/prior-authorization-solution-ai-and-automation/) — voice/portal PA status tracking, enterprise RCM sold as a service, not a self-serve nightly dashboard tool.
- SuperDial (https://www.superdial.com/lp/prior-authorization) — automates payer calls for PA, phone-first not portal-login-first.

Note: Multiple vendors already automate PA status checking across payer portals/phone; niche of small-practice nightly dashboard is narrower but mechanism overlaps heavily.

### I-1071 PA Write-Back Server for Agents

Verdict: adjacent-exists

Closest products:
- Prosper AI "Kate" (https://www.getprosper.ai/blog/ai-for-prior-authorization-tools) — writes PA results back into EHR/RCM systems, but as its own end-to-end agent sold to practices, not as infra other agents call via a per-write API fee.
- Infinx (https://www.infinx.com/prior-authorization-follow-up-automation-agent-with-availity/) — similar, follow-up + write-back bundled into one vendor's own product.

Note: Write-back into practice systems already exists inside full PA vendors; a standalone write-back API sold to other agent platforms is a different (thinner) niche.

### I-1566 Catches When The AI Note Lies

Verdict: adjacent-exists

Closest products:
- scribe-verify (https://github.com/Stephonomon/scribe-verify) — open-source mockup that cross-checks an AI scribe note against the encounter transcript with click-to-source flags; not a live shipped product, and works off transcript text not raw audio.
- Oli Health "transcript grounding" (https://olihealth.ai/blog/ai-scribe-hallucination-red-flags-clinical-notes/) — grounding is built into their own scribe, not sold as an add-on layered on any existing scribe.

Note: The cross-check concept is validated (research repo + vendor blog) but no live third-party add-on product re-checks note vs. raw audio across any existing scribe.

### I-2042 Evidence-First PC Fixer

Verdict: direct-competitor

Closest products:
- TroubleBuddy (https://troublebuddy.ai/) — AI Windows troubleshooting assistant, diagnoses via natural conversation, one-click safe local fixes with confirmation before changes; same buyer and mechanism.
- PC Diagnostic Analyzer (https://diagnosemypc.com/) — upload diagnostics, get AI analysis and fixes, less conversational/plain-English framing.

Note: TroubleBuddy already matches the plain-English diagnosis plus one-click safe-fix mechanism for non-technical Windows users closely; undo/restore-point framing is the main gap.

### I-2067 AI Voice-Clone Scam Call Guardian

Verdict: adjacent-exists

Closest products:
- VoiceGuard (https://github.com/Jagruthiaduvala-dev/VoiceGuard) — real-time-ish voice clone detection, but works on uploaded/recorded clips a user submits, not live on-device monitoring of an incoming call with proxy alerts.
- Deepfake Detector (https://deepfakedetector.ai/blog/voice-cloning-scams) — detection tooling and scam case coverage, not a live consumer call-guardian product.

Note: Voice-clone detection tech exists and is discussed widely, but no found live consumer product does real-time on-call monitoring plus pushing warnings to a family proxy before money moves.

### I-2545 POA Rejection Shield

Verdict: clear

Closest products:
- GetCarefull (https://getcarefull.com/articles/how-to-get-a-bank-to-accept-your-power-of-attorney) — publishes guidance on getting banks to accept POAs and offers general elder-finance monitoring, but no document-vs-institution-policy compliance checker.

Note: No product found that ingests an institution's own POA policy pages and checks an uploaded POA against required clauses before submission; existing content is advisory articles only.

### I-3001 Local Agent for Protected Dental Data

Verdict: clear

Closest products:
- Dentrix's own "sync agent" (https://www.dentrixascend.com/dental-solutions/office-it-management-and-support/protect-practice-and-patient-data/) — a local sync agent exists but is Dentrix's own vendor tool for its own integrations, not a third-party GUI agent that bypasses the "protected" category restriction.

Note: No third-party local/offline GUI-automation agent found that extracts Dentrix's vendor-restricted "protected" categories (financing, card, claims) without a paid API.

### I-3046 Lay of the Land

Verdict: adjacent-exists

Closest products:
- YardPro (https://yardpro.com/) — maps irrigation, drains, utilities via GPS pins/photos/notes to find buried assets; manual pin-drop entry, not voice narration auto-extracted from a walked GPS track.
- Onside (https://www.getonside.com/features/farm-mapping) — GPS infrastructure/hazard mapping with real-time sync, same manual-entry mechanism gap.
- Farm Estate GPS (https://www.farmestategps.com/) — succession-planning consulting/videos, not a mapping tool at all.

Note: Farm infrastructure GPS-mapping apps are common, but none found auto-extract map layers with confidence tags from rambling voice narration aligned to a walked track.

### I-3095 On-Prem Exploit Bench

Verdict: adjacent-exists

Closest products:
- Konvu Bug Bounty Triage (https://konvu.com/product/bug-bounty-triage) — automatically reproduces bug bounty reports via sandboxed multi-agent pipeline (validate/plan/provision/deploy/exploit/report), returning verdict with proof; mechanism matches closely.
- Elastic AI triage writeup (https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone) — describes similar LLM-based triage at Elastic, internal not a sold product.

Note: Konvu already automates report reproduction with pass/fail verdicts via disposable sandboxes; unclear if it runs fully on-prem/air-gapped for regulated codebases, which is this idea's specific differentiator.

### I-3547 Dealer DMS Toll Ledger

Verdict: clear

Closest products:
- CloudX AP Automation on Fortellis (https://www.cloudxdpo.com/blog/ap-automation-cdk-global-dms-integration-for-dealerships-on-fortellis-marketplace) — general AP automation/audit trails integrated with CDK, not a contract-vs-invoice fee-increase detector per rooftop/vendor.

Note: No product found that extracts DMS/integration invoice line items and diffs them against contracted rates to flag silent increases; existing tools do general AP automation only.

### I-4029 Elder Payee Radar

Verdict: direct-competitor

Closest products:
- EverSafe (https://www.elderlawanswers.com/digital-tools-to-protect-older-adults-from-financial-abuse-21402) — monitors bank/credit accounts for unusual transactions with scam alerts, senior-focused.
- Greenlight Family Shield (https://greenlight.com/family-shield/financial-account-alerts) — real-time alerts on family bank/investment accounts with one-tap escalation workflow.
- Carefull (https://getcarefull.com/articles/how-to-monitor-your-parents-financial-accounts) — trusted-caregiver alerts on elder account activity.

Note: Same-day monitoring of an aging parent's accounts for first-time payees and scam patterns, with alerts to an adult-child proxy, is already live across at least three named products.

### I-4525 Callback Verifier for Vendor Payments

Verdict: adjacent-exists

Closest products:
- Eftsure (https://www.eftsure.com/blog/products/top-6-bank-account-verification-software-in-2025/) — verifies vendor bank account ownership via data/database checks, not a live outbound voice call.
- Ramp Fraud Prevention Agent (https://ramp.com/ap-fraud-prevention) — reviews AP transactions across 60 signals including bank-detail changes, algorithmic not a live phone call to the vendor.
- PaymentWorks (https://www.paymentworks.com/what-we-do/vendor-fraud/) — vendor authentication before payment, portal/data-based.

Note: Out-of-band callback verification is a well-known best practice and several tools verify bank changes, but none found actually places a live speech-to-speech phone call to confirm.

### I-6001 Continuous authorised social-engineering testing

Verdict: direct-competitor

Closest products:
- Doppel AI-driven social engineering simulation (https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/) — autonomous multi-channel (email/SMS/voice) social engineering simulations against staff.
- OutThink Autonomous AI Phishing Simulator (https://outthink.io/products/autonomous-ai-phishing-simulator/) — continuous, adaptive AI-run phishing/social engineering testing.
- Living Security (https://www.livingsecurity.com/blog/autonomous-social-engineering-security-testing) — autonomous social engineering security testing guide/product line.

Note: Continuous authorized AI-driven multichannel social-engineering testing of staff is already live from multiple vendors; testing deployed customer-facing AI agents themselves is the less-covered differentiator.

```json
[
  {"id": "I-1024", "verdict": "adjacent-exists", "competitors": ["Prosper AI (https://www.getprosper.ai/blog/automated-prior-authorization-software)", "Infinx Patient Access Plus (https://www.infinx.com/prior-authorization-solution-ai-and-automation/)", "SuperDial (https://www.superdial.com/lp/prior-authorization)"], "note": "Multiple vendors already automate PA status checking across payer portals/phone; niche of small-practice nightly dashboard is narrower but mechanism overlaps heavily."},
  {"id": "I-1071", "verdict": "adjacent-exists", "competitors": ["Prosper AI Kate (https://www.getprosper.ai/blog/ai-for-prior-authorization-tools)", "Infinx (https://www.infinx.com/prior-authorization-follow-up-automation-agent-with-availity/)"], "note": "Write-back into practice systems already exists inside full PA vendors; a standalone write-back API sold to other agent platforms is a different (thinner) niche."},
  {"id": "I-1566", "verdict": "adjacent-exists", "competitors": ["scribe-verify (https://github.com/Stephonomon/scribe-verify)", "Oli Health transcript grounding (https://olihealth.ai/blog/ai-scribe-hallucination-red-flags-clinical-notes/)"], "note": "The cross-check concept is validated in a research repo and a vendor blog, but no live third-party add-on re-checks note vs. raw audio across any existing scribe."},
  {"id": "I-2042", "verdict": "direct-competitor", "competitors": ["TroubleBuddy (https://troublebuddy.ai/)", "PC Diagnostic Analyzer (https://diagnosemypc.com/)"], "note": "TroubleBuddy already matches the plain-English diagnosis plus one-click safe-fix mechanism for non-technical Windows users closely; undo/restore-point framing is the main gap."},
  {"id": "I-2067", "verdict": "adjacent-exists", "competitors": ["VoiceGuard (https://github.com/Jagruthiaduvala-dev/VoiceGuard)", "Deepfake Detector (https://deepfakedetector.ai/blog/voice-cloning-scams)"], "note": "Voice-clone detection tech exists, but no live consumer product does real-time on-call monitoring plus pushing warnings to a family proxy before money moves."},
  {"id": "I-2545", "verdict": "clear", "competitors": ["GetCarefull POA guidance (https://getcarefull.com/articles/how-to-get-a-bank-to-accept-your-power-of-attorney)"], "note": "No product found that ingests an institution's own POA policy pages and checks an uploaded POA against required clauses before submission; existing content is advisory only."},
  {"id": "I-3001", "verdict": "clear", "competitors": ["Dentrix sync agent (https://www.dentrixascend.com/dental-solutions/office-it-management-and-support/protect-practice-and-patient-data/)"], "note": "No third-party local/offline GUI-automation agent found that extracts Dentrix's vendor-restricted protected categories without a paid API."},
  {"id": "I-3046", "verdict": "adjacent-exists", "competitors": ["YardPro (https://yardpro.com/)", "Onside (https://www.getonside.com/features/farm-mapping)", "Farm Estate GPS (https://www.farmestategps.com/)"], "note": "Farm infrastructure GPS-mapping apps are common, but none found auto-extract confidence-tagged map layers from rambling voice narration aligned to a walked track."},
  {"id": "I-3095", "verdict": "adjacent-exists", "competitors": ["Konvu Bug Bounty Triage (https://konvu.com/product/bug-bounty-triage)", "Elastic AI triage writeup (https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone)"], "note": "Konvu already automates sandboxed report reproduction with pass/fail verdicts; unclear if it runs fully on-prem/air-gapped for regulated codebases, the idea's key differentiator."},
  {"id": "I-3547", "verdict": "clear", "competitors": ["CloudX AP Automation (https://www.cloudxdpo.com/blog/ap-automation-cdk-global-dms-integration-for-dealerships-on-fortellis-marketplace)"], "note": "No product found that extracts DMS/integration invoice line items and diffs them against contracted rates to flag silent increases."},
  {"id": "I-4029", "verdict": "direct-competitor", "competitors": ["EverSafe (https://www.elderlawanswers.com/digital-tools-to-protect-older-adults-from-financial-abuse-21402)", "Greenlight Family Shield (https://greenlight.com/family-shield/financial-account-alerts)", "Carefull (https://getcarefull.com/articles/how-to-monitor-your-parents-financial-accounts)"], "note": "Same-day monitoring of an aging parent's accounts for first-time payees and scam patterns, with proxy alerts, is already live across at least three named products."},
  {"id": "I-4525", "verdict": "adjacent-exists", "competitors": ["Eftsure (https://www.eftsure.com/blog/products/top-6-bank-account-verification-software-in-2025/)", "Ramp Fraud Prevention Agent (https://ramp.com/ap-fraud-prevention)", "PaymentWorks (https://www.paymentworks.com/what-we-do/vendor-fraud/)"], "note": "Callback verification is a known best practice and several tools verify bank changes via data checks, but none found actually places a live speech-to-speech phone call."},
  {"id": "I-6001", "verdict": "direct-competitor", "competitors": ["Doppel (https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/)", "OutThink Autonomous AI Phishing Simulator (https://outthink.io/products/autonomous-ai-phishing-simulator/)", "Living Security (https://www.livingsecurity.com/blog/autonomous-social-engineering-security-testing)"], "note": "Continuous authorized AI-driven multichannel social-engineering testing of staff is already live from multiple vendors; testing deployed customer-facing AI agents is the less-covered differentiator."}
]
```
<!-- COMPLETE -->
