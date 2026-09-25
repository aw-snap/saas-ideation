# Prior-Art Hunt — s5-hunter-04 (quick mode)

### I-1020 Elder Bill Intake Autopilot
Verdict: adjacent-exists
Competitors:
- BILL AI (https://www.bill.com/product/ai) — flags duplicate invoices via AP automation, but for general business AP, not elder-care portal scraping/near-duplicate/zombie-subscription catching.
- tendercare Daily Money Managers (https://trytendercare.com/daily-money-managers) — human DMM service that does this manually, no AI portal agent.
Note: General AP duplicate-detection AI exists (BILL); human daily-money-manager services serve this exact buyer manually. No AI browser-agent product doing multi-portal elder bill extraction found.

### I-1060 Show-Once Vendor Coder
Verdict: direct-competitor
Competitors:
- Ramp Accounting Agent (referenced via beancount.io coverage) — auto-codes recurring vendor transactions after learning corrections, same "correct once, applies forever" mechanism.
- Adaptive AI Bookkeeping (https://www.adaptive.build/blog/adaptive-ai-bookkeeping-software-that-learns-your-business) — explicitly learns vendor coding rules from bookkeeper corrections.
Note: Modern AI bookkeeping tools (Ramp, Adaptive, and others per search) already store each correction and apply it to all future matching transactions — same mechanism, adjacent buyer (SMB/enterprise bookkeeping vs. freelancers).

### I-1534 PA Phone Call Copilot
Verdict: adjacent-exists
Competitors:
- CallSphere AI Voice Agents (https://callsphere.ai/blog/ai-voice-agents-prior-authorization-payer-phone-automation) — automates the payer call itself (AI makes the call) rather than transcribing a human's live call into an appeal file.
- Microsoft Copilot in Teams Phone (https://support.microsoft.com/en-us/teams/copilot/get-started-with-microsoft-365-copilot-in-teams-phone) — general call transcription/recap, not payer-call specific or appeal-file structured.
Note: Voice-agent tools automate the PA call outbound; general call-transcription copilots exist but aren't tuned to extract payer commitments into a citable appeal file.

### I-2038 Fit Check for Big Deliveries
Verdict: adjacent-exists
Competitors:
- 3D Snap LiDAR Scanner (https://apps.apple.com/us/app/3d-snap-lidar-scanner-ruler/id6477467417) — measures rooms/furniture via LiDAR, no automated pass/fail clearance solver or maneuvering animation.
- RoomPlan-based apps like Room Scanner (https://roomscanner.app/) — general room/furniture scanning, not a delivery-route fit verdict tool.
Note: LiDAR room-scanning apps are common for measuring, but none found that outputs a specific stairwell clearance verdict plus tilt-and-rotate maneuvering animation for delivery companies.

### I-2052 Bounty Passport
Verdict: clear
Competitors:
- HackerOne AI Bug Bounty policy (https://docs.hackerone.com/en/articles/12570435-ai-bug-bounty) — platform-level policy addressing AI-slop reports, not a per-submission staked-bond mechanism.
Note: Widespread coverage of AI-slop flooding bug bounties (curl, HackerOne) confirms the pain, but no product found using refundable per-submission stakes/x402 bonds to filter reports.

### I-2525 Filing Proof Escrow
Verdict: adjacent-exists
Competitors:
- Labyrinth Charitable Registration (https://labyrinthinc.com/) — offers proactive compliance monitoring and covers late fees, but is the human registration-agent service itself, not an independent AI verifier that holds payment in escrow.
- Compliance Express (https://www.compliance-express.com/) — similar human-run multi-state filing/monitoring service.
Note: Existing registration-agent firms already promise monitoring, but none found using an independent AI that checks the state portal itself and gates payment release on confirmed status.

### I-2583 Am I Actually Hacked
Verdict: adjacent-exists
Competitors:
- Stairwell AI Triage (https://stairwell.com/file-analysis-with-ai-triage/) — AI explains malware verdicts with concrete evidence, but built for enterprise SOC/file analysis, not a plain-English home-user "check my PC" flow.
Note: Enterprise AI malware-triage tools already explain verdicts with cited evidence; no consumer-facing product found doing a plain-English compromise verdict for non-technical home users.

### I-3039 The Sandbox Gatekeeper
Verdict: direct-competitor
Competitors:
- Konvu Bug Bounty Triage (https://konvu.com/product/bug-bounty-triage) — auto-reproduces bug bounty/pentest reports in a sandbox, deploys the app, runs the exploit, returns a verdict with proof.
- ProjectDiscovery Triage (https://projectdiscovery.io/triage) — reproduces every bug bounty/VDP/scanner report in an isolated sandbox before a human reads it; unreproduced ones close with evidence.
Note: Live products already auto-reproduce bug reports in disposable sandboxes and gate maintainer review on reproduction, matching this idea's mechanism and niche closely.

### I-3070 The Season Box
Verdict: adjacent-exists
Competitors:
- Local AI Master guide (https://localaimaster.com/blog/local-ai-accountants) — describes a DIY local/offline pipeline (Tesseract OCR + vision model) for CPAs to extract 1099 data on owned hardware, but is a how-to guide, not a packaged rented appliance with an auto-drafted consent form.
Note: DIY local-AI tax extraction setups are documented, but no commercial rented offline appliance bundling extraction plus auto-generated per-vendor consent forms was found.

### I-3537 Supply-Run Spend Guardrail
Verdict: adjacent-exists
Competitors:
- Locus (https://paywithlocus.com/use-cases/ai-agent-spending-limits) — three-layer policy engine checking every agent transaction against spend limits, general agent-commerce infra.
- Conto (https://conto.finance/) — AI agent payment controls including spend limits.
Note: General-purpose agent spend-cap products already enforce cross-call session budgets via x402/card rails; niche differs (enterprise/general agent commerce vs. solo makers' multi-supplier restock runs).

### I-4501 Screen Agent Drafts Session Notes
Verdict: adjacent-exists
Competitors:
- SOAP Note Buddy (https://chromewebstore.google.com/detail/soap-note-buddy-ai-scribe/ejedinkdbbimibapobjeodkocaeokepj) — AI scribe that auto-fills web-based EHRs via browser field detection, cloud-based, not local/offline or a desktop-GUI agent.
- Local AI Master therapist guide (https://localaimaster.com/blog/local-ai-therapists) — fully offline Whisper+Llama SOAP drafting, but notes drop into a Markdown file for manual entry, no GUI-agent auto-typing into the EHR.
Note: Offline transcription+drafting and cloud browser-autofill both exist separately; no product found combining fully local processing with a GUI agent typing into a legacy desktop EHR lacking an API.

### I-4550 Nursing Home Bill Auditor
Verdict: direct-competitor
Competitors:
- Lysco (https://lysco.com/) — compares a medical bill against the EOB, explains the denial, and for $9 drafts an appeal with an evidence checklist and filing steps.
- Bill Matters (https://www.billmatters.com/) — AI denial-management/appeals platform, but sold to providers/billing companies, not consumer families.
Note: Lysco already does bill-vs-EOB comparison plus AI-drafted appeals for consumers; this idea narrows to nursing-home Medicare Advantage day-denials specifically, a mechanism-identical but more specific niche.

### I-6009 Context-ranked phrases for eye-gaze AAC
Verdict: adjacent-exists
Competitors:
- SpeakFaster / Nature Communications study (https://www.nature.com/articles/s41467-024-53873-3) — LLM-based prediction using conversation context for eye-gaze AAC users with ALS, but generates novel predicted text rather than ranking a fixed, pre-approved phrase bank, and is a research system, not a confirmed live commercial product.
Note: Google Research's SpeakFaster shows near-identical conversation-context-aware prediction for eye-gaze AAC; this idea's safety-focused constraint (rank-only, never invent wording) is the key mechanism difference, and SpeakFaster's commercial/live status is unconfirmed.

```json
[
  {"id": "I-1020", "verdict": "adjacent-exists", "competitors": ["BILL AI (https://www.bill.com/product/ai)", "tendercare Daily Money Managers (https://trytendercare.com/daily-money-managers)"], "note": "General AP duplicate-detection AI exists; human DMM services serve this buyer manually. No AI browser-agent product doing multi-portal elder bill extraction found."},
  {"id": "I-1060", "verdict": "direct-competitor", "competitors": ["Ramp Accounting Agent", "Adaptive AI Bookkeeping (https://www.adaptive.build/blog/adaptive-ai-bookkeeping-software-that-learns-your-business)"], "note": "AI bookkeeping tools already store each vendor correction and auto-apply it to future invoices, matching the core mechanism, though targeted at SMB/enterprise bookkeeping rather than solo freelancers."},
  {"id": "I-1534", "verdict": "adjacent-exists", "competitors": ["CallSphere AI Voice Agents (https://callsphere.ai/blog/ai-voice-agents-prior-authorization-payer-phone-automation)", "Microsoft Copilot in Teams Phone (https://support.microsoft.com/en-us/teams/copilot/get-started-with-microsoft-365-copilot-in-teams-phone)"], "note": "CallSphere automates the payer call itself instead of assisting a human's live call; general call copilots aren't tuned to extract payer commitments into a citable appeal file."},
  {"id": "I-2038", "verdict": "adjacent-exists", "competitors": ["3D Snap LiDAR Scanner (https://apps.apple.com/us/app/3d-snap-lidar-scanner-ruler/id6477467417)", "Room Scanner (https://roomscanner.app/)"], "note": "LiDAR room-scanning apps measure furniture and spaces, but none found that returns a specific clearance pass/fail verdict plus a tilt-and-rotate maneuvering animation."},
  {"id": "I-2052", "verdict": "clear", "competitors": ["HackerOne AI Bug Bounty policy (https://docs.hackerone.com/en/articles/12570435-ai-bug-bounty)"], "note": "AI-slop bug bounty pain is well documented, but no product found using refundable per-submission staked bonds to filter fake reports."},
  {"id": "I-2525", "verdict": "adjacent-exists", "competitors": ["Labyrinth Charitable Registration (https://labyrinthinc.com/)", "Compliance Express (https://www.compliance-express.com/)"], "note": "Registration-agent firms promise proactive monitoring themselves, but none found using an independent AI that checks the state portal and gates payment on confirmed status."},
  {"id": "I-2583", "verdict": "adjacent-exists", "competitors": ["Stairwell AI Triage (https://stairwell.com/file-analysis-with-ai-triage/)"], "note": "Enterprise AI malware-triage tools already explain verdicts with cited evidence, but built for SOC analysts, not a plain-English home-user compromise check."},
  {"id": "I-3039", "verdict": "direct-competitor", "competitors": ["Konvu Bug Bounty Triage (https://konvu.com/product/bug-bounty-triage)", "ProjectDiscovery Triage (https://projectdiscovery.io/triage)"], "note": "Live products already auto-reproduce bug reports in disposable sandboxes and gate maintainer review on reproduction, matching this idea's mechanism and niche closely."},
  {"id": "I-3070", "verdict": "adjacent-exists", "competitors": ["Local AI Master guide (https://localaimaster.com/blog/local-ai-accountants)"], "note": "DIY local-AI tax extraction setups on owned hardware are documented, but no commercial rented offline appliance bundling extraction plus consent-form generation was found."},
  {"id": "I-3537", "verdict": "adjacent-exists", "competitors": ["Locus (https://paywithlocus.com/use-cases/ai-agent-spending-limits)", "Conto (https://conto.finance/)"], "note": "General agent spend-cap products already enforce cross-call session budgets via x402; niche differs (general agent commerce infra vs. solo makers' multi-supplier restock runs)."},
  {"id": "I-4501", "verdict": "adjacent-exists", "competitors": ["SOAP Note Buddy (https://chromewebstore.google.com/detail/soap-note-buddy-ai-scribe/ejedinkdbbimibapobjeodkocaeokepj)", "Local AI Master therapist guide (https://localaimaster.com/blog/local-ai-therapists)"], "note": "Cloud browser-autofill and offline transcription/drafting both exist separately; no product combines fully local processing with a GUI agent typing into a legacy desktop EHR."},
  {"id": "I-4550", "verdict": "direct-competitor", "competitors": ["Lysco (https://lysco.com/)", "Bill Matters (https://www.billmatters.com/)"], "note": "Lysco already compares a bill against the EOB and drafts AI appeals for consumers for $9; this idea narrows to nursing-home Medicare Advantage day-denials, a mechanism-identical niche subset."},
  {"id": "I-6009", "verdict": "adjacent-exists", "competitors": ["SpeakFaster / Nature Communications study (https://www.nature.com/articles/s41467-024-53873-3)"], "note": "Google Research's SpeakFaster does near-identical conversation-context prediction for eye-gaze AAC, but generates novel text rather than ranking a fixed approved phrase bank, and its commercial status is unconfirmed."}
]
```
<!-- COMPLETE -->
