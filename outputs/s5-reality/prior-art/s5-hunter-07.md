# Prior-Art Hunt — s5-hunter-07 (quick mode)

### I-1023 Elder Account Diagnostic Copilot
Verdict: **adjacent-exists**
Closest products:
- Carefull (https://getcarefull.com/ai-fraud-prevention) — GreyMatter AI monitors accounts/behavior for senior fraud risk and scores threats, but pushes alerts rather than answering a proxy's plain-language "what's wrong" query with evidence + an undoable action plan.
- ai'd (https://getaid.ai/) — lets seniors/family share suspicious messages for AI analysis, message-triage focused, not linked-account transaction diagnosis with dispute/cancel actions.
- FraudGuard Elderly Guard (https://fraudguardhq.com/) — simple 3-button interface + family alerts for the senior's own device activity, not statement-level transaction forensics.
Note: Several elder-fraud monitoring apps exist, but none combine on-device transaction evidence display with a proposed undoable dispute/cancel action from a plain-language proxy query.

### I-1070 Screen API for Legacy PM Systems
Verdict: **adjacent-exists**
Closest products:
- UiPath / general RPA platforms (https://www.uipath.com/blog/rpa/screen-scraping-software-everything-you-need-to-know) — screen-scraping legacy apps is a well-established RPA category, but sold as generic automation tooling, not a metered tool-endpoint for other AI billing agents to call.
- Redox (https://redoxengine.com/blog/screen-scraping-rpa-symptom-bigger-healthcare-integration-problem/) — healthcare integration vendor explicitly discusses screen-scraping as a stopgap for legacy EHR/PM data access, adjacent niche (health data interoperability, not agent-callable metered API).
Note: Screen-scraping legacy healthcare software is a known RPA pattern; no found product packages it specifically as a metered API for calling AI billing agents.

### I-1564 Draft From Case Files, Offline
Verdict: **adjacent-exists**
Closest products:
- Elephas private/local AI tools roundup (https://elephas.app/resources/best-private-ai-tools-for-lawyers) — lists multiple local/offline AI tools for lawyers, overlapping niche directly.
- LocalAIMaster legal setup guide (https://localaimaster.com/blog/local-ai-lawyers) — describes building a private local LLM research/drafting setup for lawyers, similar mechanism (local inference, no cloud).
Note: Local/offline legal AI for privilege-safe drafting is an active, documented niche with multiple guides and tools already covering the same mechanism.

### I-2041 Live Delivery Coach for Interviews
Verdict: **direct-competitor**
Closest products:
- Acedit.ai (https://www.acedit.ai/) — Chrome extension giving real-time pace/filler-word/tone feedback during live Zoom/Teams/Meet interviews, same mechanism and niche.
- InterviewPilot (https://github.com/11samm/InterviewPilot) — browser-based coach tracking filler words, pace, eye contact with post-session coaching.
- LockedIn AI Voice Coach (https://www.lockedinai.com/blog/lockedin-ai-voice-coach-interviews-improve-tone-clarity-confidence) — Chrome extension with real-time pacing/filler-word corrections.
Note: Live in-call delivery coaching (pace, filler words) via browser extension during real interviews is already a crowded, live product category.

### I-2063 Vendor-Diligence-in-a-Box
Verdict: **adjacent-exists**
Closest products:
- LegalOn (https://www.legalontech.com/ai-contract-review-software) — AI contract review flagging risky clauses, but general-purpose, not solo-practitioner-specific consent-form/security-plan drafting from vendor TOS.
- Spellbook (https://spellbook.com/learn/ai-legal-compliance) — AI contract review/compliance for lawyers, budget-oriented, but no evidence of auto-drafting a bar/IRS-specific written security plan from a vendor list.
Note: AI contract review tools flag risky clauses broadly; none found specifically assemble a solo-practice security plan and per-vendor consent forms from AI vendor TOS.

### I-2536 AI PC optimiser and fixer
Verdict: **adjacent-exists**
Closest products:
- Advanced SystemCare (https://www.iobit.com/en/pressroom-advanced-systemcare-16--ai-powered-pc-optimizer-and-cleaner-to-make-windows-pc-faster,-and-safer-613.php) — AI mode finds/fixes performance issues, but not conversational plain-English diagnosis with evidence-first undo/approval workflow.
- Cleaner One Pro AI PC Edition (https://www.trendmicro.com/en_us/forHome/products/cleaner-one-ai-pc.html) — AI Smart Scan recommendations for cleanup/optimization, same general niche, lacks evidence-then-approve conversational agent mechanism.
Note: AI-branded PC optimizers are common, but none surfaced use a plain-language complaint plus evidence-shown, approve-then-undo agent mechanism.

### I-2591 The Mandate Gate
Verdict: **adjacent-exists**
Closest products:
- Ramp AP Fraud Prevention (https://ramp.com/ap-fraud-prevention) — 3-way PO/invoice/receipt matching with fraud checks in AP, same general invoice-verification mechanism but not built around AP2 mandate signing specifically.
- AP2 protocol docs (https://ap2-protocol.org/ap2/payment_mandate/) — the underlying protocol itself; no third-party product found that gates mandate signing on PO/invoice mismatch specifically.
Note: 3-way invoice/PO matching for AP fraud prevention is established (e.g., Ramp); no found product gates AP2 mandate signing itself on that check.

### I-3045 Spotter for Paddle Raises
Verdict: **adjacent-exists**
Closest products:
- Givebutter Paddle Raise (https://givebutter.com/features/paddle-raise) — captures pledges in real time and flows into CRM, but relies on guest-facing tap-to-pledge on phones, not camera+speech fusion reading physical paddles.
- ClickBid Paddle Raise (https://try.cbo.io/paddle-raise-events/) — real-time pledge capture at galas, same niche, app/tablet-driven rather than vision+speech auto-logging.
Note: Digital paddle-raise capture tools are established, but they rely on guest phone taps/tablets, not camera-vision-plus-speech auto-detection of raised physical paddles.

### I-3093 Privileged Cite Bench
Verdict: **adjacent-exists**
Closest products:
- CaseRead.ai Hallucination Shield (https://www.caseread.ai/hallucination-shield) — verifies citations against real case text, same mechanism/niche, but appears to be a cloud tool, not on-device/offline like this idea's privilege-preserving design.
- LawDroid CiteCheck AI (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html) — free citation-hallucination checker for legal briefs, cloud-based.
Note: Cloud-based AI citation checkers against real case text exist (CaseRead, CiteCheck AI); none found run fully local/offline to avoid privilege waiver.

### I-3542 Lab Result Relay for Vet SoRs
Verdict: **direct-competitor**
Closest products:
- IDEXX Cornerstone native diagnostic integration (https://software.idexx.com/cornerstone-integrations) — IDEXX's own integration already imports lab results (including in-house instruments) directly into Cornerstone patient records in real time, same niche and mechanism as the proposed desktop-watcher agent.
- Otto Cornerstone integration (https://otto.vet/integrations/idexx-cornerstone/) — third-party integration layer for Cornerstone, overlapping capability.
Note: IDEXX already ships a native Cornerstone-lab integration that auto-files results into patient records in real time, directly overlapping this idea's core mechanism.

### I-4028 The Portable Proxy Badge
Verdict: **clear**
Closest products:
- Tecalis POA verification (https://www.tecalis.com/blog/notarization-power-of-attorney-verification-validation-what-is-powers-meaning-banking-example-documents) — automates POA verification/KYB for institutions verifying incoming proxies, opposite direction (institution-side, not a proxy-side agent that fills each site's own form).
Note: Found institution-side POA verification and static POA document/e-signature tools, but no live browser agent that files each institution's own specific proxy paperwork on a person's behalf.

### I-4519 Spotter: Paddle-Raise Vision
Verdict: **adjacent-exists**
Closest products:
- Givebutter Paddle Raise (https://givebutter.com/features/paddle-raise) — real-time pledge capture flowing into CRM/reconciliation, same niche, but via guest phone tap rather than paddle-marker vision plus speech fusion.
- ClickBid Paddle Raise (https://try.cbo.io/paddle-raise-events/) — same category, tablet/app-based capture, not camera+speech auto-detection.
Note: Same finding as I-3045 (near-duplicate idea): digital paddle-raise capture is established, but none found use camera-vision-plus-speech to auto-log physically raised paddles.

### I-4570 Ask-Once VAT Explainer Draft
Verdict: **adjacent-exists**
Closest products:
- Bookipi AI agents for international vendor invoices (https://bookipi.com/bookkeeping/ai-agents-for-processing-international-vendor-invoices-with-vat/) — AI agents validate VAT details on cross-border invoices, overlapping mechanism, aimed broadly at vendor invoice processing rather than a freelancer's one-paragraph accountant hand-off.
- Invoicey AI Invoice Generator (https://invoicey.io/ai-invoice) — generates EU VAT-compliant invoices with AI, adjacent (invoice creation, not explaining unfamiliar VAT scenarios for accountant sign-off).
Note: AI tools already auto-suggest VAT treatment on invoices; none found specifically draft a short plain-language explainer plus journal entry for accountant approval on novel scenarios.

```json
[
  {"id": "I-1023", "verdict": "adjacent-exists", "competitors": ["Carefull (https://getcarefull.com/ai-fraud-prevention)", "ai'd (https://getaid.ai/)", "FraudGuard (https://fraudguardhq.com/)"], "note": "Several elder-fraud monitoring apps exist, but none combine on-device transaction evidence display with a proposed undoable dispute/cancel action from a plain-language proxy query."},
  {"id": "I-1070", "verdict": "adjacent-exists", "competitors": ["UiPath (https://www.uipath.com/blog/rpa/screen-scraping-software-everything-you-need-to-know)", "Redox (https://redoxengine.com/blog/screen-scraping-rpa-symptom-bigger-healthcare-integration-problem/)"], "note": "Screen-scraping legacy healthcare software is a known RPA pattern; no found product packages it specifically as a metered API for calling AI billing agents."},
  {"id": "I-1564", "verdict": "adjacent-exists", "competitors": ["Elephas private AI tools list (https://elephas.app/resources/best-private-ai-tools-for-lawyers)", "LocalAIMaster (https://localaimaster.com/blog/local-ai-lawyers)"], "note": "Local/offline legal AI for privilege-safe drafting is an active, documented niche with multiple guides and tools already covering the same mechanism."},
  {"id": "I-2041", "verdict": "direct-competitor", "competitors": ["Acedit.ai (https://www.acedit.ai/)", "InterviewPilot (https://github.com/11samm/InterviewPilot)", "LockedIn AI (https://www.lockedinai.com/blog/lockedin-ai-voice-coach-interviews-improve-tone-clarity-confidence)"], "note": "Live in-call delivery coaching (pace, filler words) via browser extension during real interviews is already a crowded, live product category."},
  {"id": "I-2063", "verdict": "adjacent-exists", "competitors": ["LegalOn (https://www.legalontech.com/ai-contract-review-software)", "Spellbook (https://spellbook.com/learn/ai-legal-compliance)"], "note": "AI contract review tools flag risky clauses broadly; none found specifically assemble a solo-practice security plan and per-vendor consent forms from AI vendor TOS."},
  {"id": "I-2536", "verdict": "adjacent-exists", "competitors": ["Advanced SystemCare (https://www.iobit.com/en/pressroom-advanced-systemcare-16--ai-powered-pc-optimizer-and-cleaner-to-make-windows-pc-faster,-and-safer-613.php)", "Cleaner One Pro AI PC Edition (https://www.trendmicro.com/en_us/forHome/products/cleaner-one-ai-pc.html)"], "note": "AI-branded PC optimizers are common, but none surfaced use a plain-language complaint plus evidence-shown, approve-then-undo agent mechanism."},
  {"id": "I-2591", "verdict": "adjacent-exists", "competitors": ["Ramp AP Fraud Prevention (https://ramp.com/ap-fraud-prevention)", "AP2 protocol docs (https://ap2-protocol.org/ap2/payment_mandate/)"], "note": "3-way invoice/PO matching for AP fraud prevention is established (e.g., Ramp); no found product gates AP2 mandate signing itself on that check."},
  {"id": "I-3045", "verdict": "adjacent-exists", "competitors": ["Givebutter Paddle Raise (https://givebutter.com/features/paddle-raise)", "ClickBid Paddle Raise (https://try.cbo.io/paddle-raise-events/)"], "note": "Digital paddle-raise capture tools are established, but they rely on guest phone taps/tablets, not camera-vision-plus-speech auto-detection of raised physical paddles."},
  {"id": "I-3093", "verdict": "adjacent-exists", "competitors": ["CaseRead.ai Hallucination Shield (https://www.caseread.ai/hallucination-shield)", "LawDroid CiteCheck AI (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html)"], "note": "Cloud-based AI citation checkers against real case text exist (CaseRead, CiteCheck AI); none found run fully local/offline to avoid privilege waiver."},
  {"id": "I-3542", "verdict": "direct-competitor", "competitors": ["IDEXX Cornerstone integration (https://software.idexx.com/cornerstone-integrations)", "Otto Cornerstone integration (https://otto.vet/integrations/idexx-cornerstone/)"], "note": "IDEXX already ships a native Cornerstone-lab integration that auto-files results into patient records in real time, directly overlapping this idea's core mechanism."},
  {"id": "I-4028", "verdict": "clear", "competitors": ["Tecalis POA verification (https://www.tecalis.com/blog/notarization-power-of-attorney-verification-validation-what-is-powers-meaning-banking-example-documents)"], "note": "Found institution-side POA verification and static POA document tools, but no live browser agent that files each institution's own specific proxy paperwork on a person's behalf."},
  {"id": "I-4519", "verdict": "adjacent-exists", "competitors": ["Givebutter Paddle Raise (https://givebutter.com/features/paddle-raise)", "ClickBid Paddle Raise (https://try.cbo.io/paddle-raise-events/)"], "note": "Same finding as near-duplicate I-3045: digital paddle-raise capture is established, but none found use camera-vision-plus-speech to auto-log physically raised paddles."},
  {"id": "I-4570", "verdict": "adjacent-exists", "competitors": ["Bookipi AI agents (https://bookipi.com/bookkeeping/ai-agents-for-processing-international-vendor-invoices-with-vat/)", "Invoicey AI Invoice Generator (https://invoicey.io/ai-invoice)"], "note": "AI tools already auto-suggest VAT treatment on invoices; none found specifically draft a short plain-language explainer plus journal entry for accountant approval on novel scenarios."}
]
```
<!-- COMPLETE -->
