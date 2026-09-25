### I-1003 Nested Spend Envelopes

Searches: AI agent payment budget cap x402 AP2 wallet proxy.

Several wallet/policy layers already enforce per-agent spend budgets and caps at the session/policy level (not just per-call), which is the exact mechanism this idea proposes (a proxy that nests a hard cap across a task chain spanning multiple payment rails).

Verdict: adjacent-exists

Competitors:
- x402-agent-wallet (github.com/nirholas/x402-agent-wallet) — open-source wallet policy daemon with budgets, per-merchant caps and signed verdicts, but scoped to x402 only, not cross-protocol (x402+AP2+card) nesting.
- Openfort AI Agent Wallets (openfort.io/solutions/ai-agents) — programmable spend limits for agent wallets, single-platform focus, not explicitly cross-protocol session aggregation.
- Eco AI Agent Spend Controls (eco.com/support) — spend controls product, mechanism similar but protocol coverage unclear from page.

Note: Budget-capped agent wallets already exist per-protocol; the specific cross-protocol (x402+AP2+card) nested-envelope aggregation is not clearly shipped yet.

### I-1050 Built on Jev

Searches: "Jev" AI model fast cheap inference system 1 reflex.

Jev is a real, recently-launched model (TypeSafe AI, Sept 2026) matching the idea's premise exactly, but the idea itself is an open-ended "any product built on a fast/cheap model" concept, not a specific product, so there is no single analog to compare against.

Verdict: clear

Competitors:
- Jev / TypeSafe AI (en.wikipedia.org/wiki/Jev_(AI_model)) — this is the underlying model the idea proposes building on, not a competing product.

Note: Jev itself is confirmed real and matches the "why now" claim, but the idea names no specific application, so no competing product could be searched for.

### I-1517 Who Actually Owns This API Key

Searches: offboarding tool find API keys service accounts departed employee shared credentials.

Non-human-identity discovery and offboarding is an active, named product category with live tools doing inventory-and-rotation of orphaned API keys/service accounts, though not specifically framed around "re-homing under a governed agent identity" via Okta Agent SSO.

Verdict: adjacent-exists

Competitors:
- Reco Shadow Agent Discovery & Offboarding (reco.ai/use-cases/shadow-agent-discovery-offboarding) — discovers AI agents, service accounts, API tokens and NHIs across SaaS; overlaps heavily but not framed around re-issuing under Okta Agent SSO identities.
- Astrix Security NHI Offboarding (astrix.security/learn/blog/employee-nhi-offboarding) — dedicated NHI discovery/offboarding workflow, same problem, enterprise-security angle rather than MSP/small-firm sole-admin angle.
- Torii AI API key management (toriihq.com) — SaaS management platform with credential lifecycle automation.

Note: NHI/shadow-agent discovery-and-offboarding is a live, named category (Reco, Astrix); this idea's MSP/small-firm framing and Okta Agent SSO re-homing step is a narrower niche within it.

### I-2028 Consent-Scoped Agent Passport

Searches: power of attorney digital credential caregiving agent bank verification startup.

Digital-POA management tools and identity-credential platforms exist, but nothing found combines a POA upload with a signed, scoped, agent-presentable credential plus an action log built specifically for institutions to verify a caregiving agent's actions.

Verdict: clear

Competitors:
- Proof Digital Credential Solution (proof.com/blog/proof-launches-digital-credential-solution) — general identity/KYC credentialing for digital-asset services, not POA/caregiving-specific or agent-action-log focused.
- allseniors.org digital POA guides (allseniors.org/articles/navigating-digital-power-of-attorney...) — informational guidance, not a software product.

Note: Digital-POA storage/verification tools exist, but a signed, revocable, institution-verifiable "agent passport" credential with a timestamped action log was not found live.

### I-2049 Standing-Order Compliance Radar

Searches: legal tech GenAI disclosure standing order judge browser extension e-filing.

A maintained tracker of judge-by-judge GenAI standing orders already exists (Trace.law, Law360), but as a reference database, not a live browser extension that watches the drafting session and auto-inserts the required paragraph before submission.

Verdict: adjacent-exists

Competitors:
- Trace.law Court AI Disclosure Orders tracker (trace.law/kb/court-ai-disclosure-orders) — maintains the same underlying database of judge standing orders, but is a lookup reference, not an in-browser auto-insert agent.
- Law360 AI Tracker (law360.com/pulse/ai-tracker) — tracks federal judge AI orders; reference tool, not a drafting-workflow product.

Note: The judge-order database this idea needs already exists as a public tracker; the live in-browser auto-detect-and-insert mechanism was not found as a shipped product.

### I-2519 The Compliance Portal Copilot

Searches: WISP PTIN renewal automation software CPA tax preparer.

Multiple low-cost WISP template/auto-fill products serve PTIN compliance, but they are static document generators, not agents that interview the practitioner, draft an insurer AI-attestation, and live-fill the IRS PTIN portal and insurer site.

Verdict: adjacent-exists

Competitors:
- RenewPTIN.com / LowestCostIRSWISP.com / RenewalWISP.com — $29 auto-fillable WISP template toolkits for PTIN renewal; document templates only, no browser-agent portal filing or insurer AI-attestation drafting.
- Verito WISP for Tax Preparers guide (verito.com/written-information-security-plan) — compliance guidance content, not an automation product.

Note: WISP template generators for PTIN renewal are a live, crowded niche; the browser-agent that drafts locally and files across PTIN and insurer portals was not found shipped.

### I-2568 One-Click Bot Policy for Careers Sites

Searches: Cloudflare pay per crawl dashboard small business block allow AI bots startup.

Cloudflare itself already ships the exact block/allow/charge-per-crawler dashboard mechanism natively, available to any site behind Cloudflare, which is the core mechanism this idea proposes as a wrapper layer.

Verdict: direct-competitor

Competitors:
- Cloudflare AI Crawl Control / Pay Per Crawl (developers.cloudflare.com/ai-crawl-control, blog.cloudflare.com/introducing-pay-per-crawl) — native dashboard lets any site owner set allow/charge/block per AI crawler category in a few clicks; this idea's "auto-writes the Cloudflare rule" layer largely duplicates a feature Cloudflare already ships directly.

Note: Cloudflare's own dashboard already offers one-click per-crawler allow/charge/block; this idea's value-add (careers-site framing, non-technical UI) is a thin wrapper over an existing native feature.

### I-3031 Consent Concierge Voice Agent

Searches: AI voice consent recording agent verbal consent timestamp therapist lawyer calls.

Voice-AI compliance vendors already describe exactly this mechanism (spoken disclosure, verbal "I consent," timestamped consent-clip logging) as a feature within broader voice-agent/compliance platforms, for legal and medical calls specifically.

Verdict: adjacent-exists

Competitors:
- CaseClerk AI voice intake consent compliance (caseclerk.ai/blog/...call-recording-and-two-party-consent-laws) — describes law-firm voice-intake agents handling consent disclosure/recording compliance; overlaps closely but bundled into intake, not a standalone pre-session consent step for existing scribes.
- LegalSoul-style consent logging (referenced via theneuralbase.com/conversational-ai) — stores consent clip, timestamp, script version per call; same mechanism, different bundling.

Note: Timestamped verbal-consent capture before recording is a described feature across several legal/medical voice-AI compliance vendors; a standalone bundled add-on for existing scribes was not confirmed live.

### I-3055 The Right Words for This Judge

Searches: legal tech GenAI disclosure standing order judge browser extension e-filing (shared with I-2049).

Same underlying problem and data source as I-2049; a maintained judge-order tracker exists as a reference, but no product found that auto-drafts the exact certification paragraph per named judge on demand.

Verdict: adjacent-exists

Competitors:
- Trace.law Court AI Disclosure Orders tracker (trace.law/kb/court-ai-disclosure-orders) — same reference database of standing orders by judge; lookup only, no auto-drafted certification paragraph output.
- Law360 AI Tracker (law360.com/pulse/ai-tracker) — reference tracker of federal judge AI orders, not a drafting tool.

Note: Judge-standing-order databases already exist publicly; a tool that drafts the exact ready-to-paste certification paragraph per judge was not found shipped. Near-duplicate of I-2049 within this idea set.

### I-3534 Crawler Bill Alarm for Makers

Searches: Cloudflare pay per crawl dashboard small business block allow AI bots startup (shared with I-2568).

Cloudflare's native Pay Per Crawl dashboard already shows per-crawler cost/pricing controls in a few clicks for any site owner behind Cloudflare, overlapping heavily with this idea's "bill + one-tap charge/block" mechanism, though this idea adds a plain-language weekly earnings summary and log-replay framing not confirmed in Cloudflare's own UI.

Verdict: direct-competitor

Competitors:
- Cloudflare Pay Per Crawl / AI Crawl Control (blog.cloudflare.com/introducing-pay-per-crawl, developers.cloudflare.com/ai-crawl-control) — native per-crawler allow/charge/block plus pricing, same core mechanism and same trigger event (Sept 15 2026 default change) cited in this idea's own rationale.

Note: Cloudflare already ships native per-crawler charge/block controls tied to the same Sept 2026 default-block change this idea cites as its "why now," undercutting the differentiation.

### I-4004 Medicare Denial Appeal Copilot

Searches: Medicare Advantage denial appeal letter AI generator app.

Multiple live AI appeal-letter generators already serve this exact niche, some naming Medicare Advantage specifically and citing similar overturn-rate statistics, making this a crowded space with direct mechanism overlap (OCR/extract denial, draft cited appeal).

Verdict: direct-competitor

Competitors:
- Counterforce Health (counterforcehealth.org) — AI-powered Medicare Advantage appeal letter generator built specifically around denial overturn statistics, same buyer problem and drafting mechanism.
- Muni Health / Muni Appeals (muni.health/blog/best-ai-appeal-generator-2026) — payer-aware appeal drafting for independent practices, including Medicare Advantage-specific portal/deadline workflows.
- River AI Appeal Letter Generator (rivereditor.com/tools/appeal-letter) — free general appeal letter generator covering Medicare denials.

Note: Several AI appeal-letter generators already target Medicare/Medicare Advantage denials specifically, with similar OCR-to-draft mechanisms; this idea's family/proxy-focused packaging is the main differentiator left.

### I-4052 Vet Lab-to-Chart Instant Relay

Searches: veterinary practice management lab results auto import IDEXX integration software.

IDEXX itself, along with several PIMS vendors, already ships native two-way integrations that auto-file lab results into the chart the moment they post, which is the exact mechanism this idea proposes as a third-party agent watching the portal.

Verdict: direct-competitor

Competitors:
- IDEXX VetLab Station / VetConnect PLUS integration (idexx.com/en/veterinary/analyzers/idexx-vet-lab-station, software.idexx.com/integrations) — native two-way integration auto-records IDEXX results into practice management software, eliminating manual entry.
- ezyVet MiLab / Bionote integrations (software.idexx.com/ezyvet-integrations) — automated transfer of diagnostic results into PIMS from lab analyzers.
- VIA Veterinary Information Systems IDEXX 2-Way Integration (viainfosys.com/6040-2) — auto-imports completed lab results into patient record for review/signoff.

Note: Native IDEXX-to-PIMS integrations already auto-file lab results on completion for several practice management systems; the gap is specifically Cornerstone-without-a-working-sync, a narrower case than the idea implies.

### I-4548 Scam Interrupt Button

Searches: elder fraud detection app monitor parent bank transactions alert scam.

Dedicated elder-financial-safety apps already monitor linked accounts, flag suspicious transaction patterns, and alert family, closely matching this idea's mechanism, though same-day scripted-freeze-call guidance and screenshot evidence packaging is a specific twist not confirmed in the leading products.

Verdict: direct-competitor

Competitors:
- Carefull (getcarefull.com) — AI-driven financial safety platform monitoring older adults' accounts for fraud and behavior-change patterns, alerts family members, same buyer and mechanism.
- EverSafe (referenced via elderlawanswers.com) — monitors bank/credit accounts for unusual patterns and alerts family members of elder fraud.
- Ask Felix (askfelix.app) — lets adult children link a parent's accounts via Plaid for view-only monitoring; explicitly cannot block transactions, unlike this idea's freeze-script step.

Note: Carefull and EverSafe already monitor parent accounts nightly/continuously and alert family same-day on suspicious patterns; this idea's scripted one-tap freeze-call and evidence image are the narrower differentiator.

### I-6007 Live call-verification copilot for payment requests

Searches: real-time call monitoring AI fraud verification wire transfer call center software.

Several live products already do real-time call-audio fraud/verification-policy monitoring for financial requests (deepfake and social-engineering detection, live agent flags), overlapping mechanism closely, though most target larger call centers rather than small credit unions/SMB finance teams without a fraud desk.

Verdict: adjacent-exists

Competitors:
- Pindrop (referenced via shadowdragon.io fraud tools list) — real-time voice/fraud detection for contact centers and financial institutions, analyzing call audio for fraud live; enterprise-scale, not SMB/no-fraud-desk focused.
- Krisp Voice Security (krisp.ai/contact-center) — real-time social-engineering and deepfake fraud alerts for contact centers, similar live-flagging mechanism, broader agent-assist product rather than verification-policy-specific coaching.
- TrueWire (advancedfraudsolutions.com/product/truewire) — real-time wire-transaction verification tool that equips phone reps with risk insights mid-call to intercept fraudulent wires.

Note: Live in-call fraud/verification flagging for wire and account-change requests already exists (Pindrop, Krisp, TrueWire); this idea's SMB/no-fraud-desk pricing and narrow verification-rule scope is the main gap left.

```json
[
  {"id": "I-1003", "verdict": "adjacent-exists", "competitors": ["x402-agent-wallet (github.com/nirholas/x402-agent-wallet)", "Openfort AI Agent Wallets (openfort.io/solutions/ai-agents)", "Eco AI Agent Spend Controls (eco.com/support)"], "note": "Budget-capped agent wallets exist per-protocol; the specific cross-protocol (x402+AP2+card) nested-envelope aggregation is not clearly shipped yet."},
  {"id": "I-1050", "verdict": "clear", "competitors": ["Jev / TypeSafe AI (en.wikipedia.org/wiki/Jev_(AI_model))"], "note": "Jev is confirmed real, but the idea names no specific application, so no competing product could be searched for."},
  {"id": "I-1517", "verdict": "adjacent-exists", "competitors": ["Reco Shadow Agent Discovery & Offboarding (reco.ai/use-cases/shadow-agent-discovery-offboarding)", "Astrix Security NHI Offboarding (astrix.security/learn/blog/employee-nhi-offboarding)", "Torii (toriihq.com)"], "note": "NHI/shadow-agent discovery-and-offboarding is a live, named category; this idea's MSP/small-firm Okta Agent SSO re-homing is a narrower niche within it."},
  {"id": "I-2028", "verdict": "clear", "competitors": ["Proof Digital Credential Solution (proof.com/blog/proof-launches-digital-credential-solution)", "allseniors.org digital POA guides (allseniors.org)"], "note": "Digital-POA tools exist, but a signed, revocable, institution-verifiable agent credential with a timestamped action log was not found live."},
  {"id": "I-2049", "verdict": "adjacent-exists", "competitors": ["Trace.law Court AI Disclosure Orders tracker (trace.law/kb/court-ai-disclosure-orders)", "Law360 AI Tracker (law360.com/pulse/ai-tracker)"], "note": "A judge-order reference database already exists; the live in-browser auto-detect-and-insert mechanism was not found shipped."},
  {"id": "I-2519", "verdict": "adjacent-exists", "competitors": ["RenewPTIN.com / LowestCostIRSWISP.com", "RenewalWISP.com", "Verito WISP guide (verito.com/written-information-security-plan)"], "note": "WISP template generators for PTIN renewal are crowded; the browser-agent that drafts and live-files across PTIN and insurer portals was not found shipped."},
  {"id": "I-2568", "verdict": "direct-competitor", "competitors": ["Cloudflare AI Crawl Control / Pay Per Crawl (developers.cloudflare.com/ai-crawl-control)"], "note": "Cloudflare's own dashboard already offers one-click per-crawler allow/charge/block; this idea's wrapper adds a careers-site framing over an existing native feature."},
  {"id": "I-3031", "verdict": "adjacent-exists", "competitors": ["CaseClerk AI voice intake consent compliance (caseclerk.ai)", "LegalSoul-style consent logging (via theneuralbase.com)"], "note": "Timestamped verbal-consent capture before recording is described across legal/medical voice-AI compliance vendors, usually bundled into intake, not standalone."},
  {"id": "I-3055", "verdict": "adjacent-exists", "competitors": ["Trace.law Court AI Disclosure Orders tracker (trace.law/kb/court-ai-disclosure-orders)", "Law360 AI Tracker (law360.com/pulse/ai-tracker)"], "note": "Judge-order databases exist publicly; a tool drafting the exact ready-to-paste certification per judge was not found shipped. Near-duplicate of I-2049."},
  {"id": "I-3534", "verdict": "direct-competitor", "competitors": ["Cloudflare Pay Per Crawl / AI Crawl Control (blog.cloudflare.com/introducing-pay-per-crawl)"], "note": "Cloudflare already ships native per-crawler charge/block pricing tied to the same Sept 2026 default-block change this idea cites as its why-now."},
  {"id": "I-4004", "verdict": "direct-competitor", "competitors": ["Counterforce Health (counterforcehealth.org)", "Muni Health (muni.health)", "River (rivereditor.com/tools/appeal-letter)"], "note": "Several AI appeal-letter generators already target Medicare Advantage denials with similar OCR-to-draft mechanisms; family/proxy packaging is the main remaining differentiator."},
  {"id": "I-4052", "verdict": "direct-competitor", "competitors": ["IDEXX VetLab Station / VetConnect PLUS (software.idexx.com/integrations)", "ezyVet MiLab/Bionote (software.idexx.com/ezyvet-integrations)", "VIA IDEXX 2-Way Integration (viainfosys.com/6040-2)"], "note": "Native IDEXX-to-PIMS integrations already auto-file lab results on completion; gap is narrower (Cornerstone without working sync) than the idea implies."},
  {"id": "I-4548", "verdict": "direct-competitor", "competitors": ["Carefull (getcarefull.com)", "EverSafe (via elderlawanswers.com)", "Ask Felix (askfelix.app)"], "note": "Carefull and EverSafe already monitor parent accounts and alert family same-day on suspicious patterns; scripted freeze-call/evidence image is the narrower differentiator."},
  {"id": "I-6007", "verdict": "adjacent-exists", "competitors": ["Pindrop (via shadowdragon.io)", "Krisp Voice Security (krisp.ai/contact-center)", "TrueWire (advancedfraudsolutions.com/product/truewire)"], "note": "Live in-call fraud/verification flagging for wire requests already exists at enterprise scale; SMB/no-fraud-desk pricing and narrow verification-rule scope is the gap left."}
]
```
<!-- COMPLETE -->
