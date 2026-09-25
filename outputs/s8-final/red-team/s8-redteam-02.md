### I-1019 Private Elder Statement Scanner

Objection: StatementLock already ships a Chrome extension that parses uploaded bank/credit statements with AI and flags fraud/duplicates — same mechanism. Carefull and EverSafe own the funded elder-fraud niche via easier cloud account-linking that most families will prefer over manual PDF/CSV uploads.
Evidence: s8-hunter-02 — StatementLock (browser-based statement parsing), Carefull, EverSafe (cloud-linked, funded, live).
Fix: Lead with the offline/no-SSN-in-cloud trust angle StatementLock and Carefull can't match; target families who already refuse account-linking.
Severity: serious

### I-1063 Rate-Con Learned From One Build

Objection: Small brokers already run Tai TMS, ARK TMS or FastFreight, which auto-generate rate cons from structured load data with no learning step needed — switching cost is real and the "one example teaches the agent" premise is unproven across rate variance and edge-case lanes.
Evidence: s8-hunter-06 — Tai TMS, ARK TMS, FastFreight all generate rate cons from existing TMS data live today.
Fix: Target brokers without a TMS (or ones using raw templates), not TMS-equipped shops that already automate this.
Severity: serious

### I-1525 AI Feature-Request Reviewer

Objection: Multiple live tools already read a real codebase and turn an incoming ticket into a grounded build-time/impact estimate — Bito AI Architect, a Jira Ticket Estimator Claude Code skill, and open-source agent-estimate. The "client feature request" framing is a thin wrapper on an existing, working mechanism.
Evidence: s8-hunter-10 — verdict direct-competitor; Bito AI Architect, Jira Ticket Estimator skill, agent-estimate.
Fix: None credible without a genuinely different mechanism or a niche these tools structurally can't reach (e.g., non-technical client-facing UI).
Severity: fatal

### I-2038 Fit Check for Big Deliveries

Objection: Smart Moving: Furniture Helper already ships to moving companies today: camera-based measuring, rotation/tilt clearance solving through doorways/hallways/stairs, sold on the exact same failed-delivery-prevention niche this idea targets.
Evidence: s8-hunter-02 — verdict direct-competitor; Smart Moving: Furniture Helper live in the App Store, marketed to moving/logistics companies.
Fix: Differentiate on checkout-embedded scan-at-purchase workflow (not post-sale survey) or undercut Smart Moving on price; otherwise hard to justify.
Severity: fatal

### I-2053 Summary Reweigh Desk

Objection: General sentence-level hallucination/claim-highlighting tools (GPTZero, Originality.ai) already do the core mechanism, and carrier-side claims-AI vendors (Hesper AI, Decerto) already build audit trails. The narrow "independent adjuster reviewing a carrier's AI summary" niche may be too small to justify a dedicated product.
Evidence: s8-hunter-06 — verdict adjacent-exists; GPTZero Hallucination Detector, Originality.ai fact-checker, Hesper AI, Decerto ClaimsAI.
Fix: Ship as a thin, claims-specific wrapper around an existing hallucination-detection API rather than building detection from scratch.
Severity: serious

### I-2514 E&O Broker's Citation Shield

Objection: Citation-hallucination checking is crowded and dominated by Clearbrief (used by ~70% of Am Law 20). The real novelty here — insurance-broker distribution and on-prem/aggregate-risk-score packaging — assumes brokers act as software distributors, which is an unproven go-to-market, not a proven product gap.
Evidence: s8-hunter-10 — verdict adjacent-exists; Clearbrief, CaseRead.ai, LawDroid CiteCheck AI all live and cloud-hosted.
Fix: Validate broker interest first (one design partner) before building on-prem infra; distribution channel is the real risk, not detection tech.
Severity: serious

### I-2547 Multi-Institution Proxy Agent

Objection: Banks and Medicare/Medicaid portals actively detect and block automated logins (bot detection, MFA challenges), and storing an aging parent's live credentials for a weekly automated crawl is a major security/liability exposure — this could break mid-demo or trigger account lockouts, and Carefull already owns the funded niche via safer API-based linking.
Evidence: s8-hunter-02 — verdict adjacent-exists; Carefull uses bank-level linking, not raw login automation.
Fix: Use official APIs/aggregation (Plaid-style) where available; reserve browser-agent login only for portals with no API, with explicit MFA-handoff to the human.
Severity: serious

### I-3031 Consent Concierge Voice Agent

Objection: No product currently gets AI-recorded consent via live interactive voice dialogue, but the core idea is circular — using an AI agent to obtain "informed consent" for AI recording may not satisfy ethics-body requirements, and a solo therapist's liability if the AI mishandles or mistranslates the consent exchange is unclear.
Evidence: s8-hunter-06 — verdict adjacent-exists; Zentake, iPlum, and Jane/Frontdesk only offer forms or one-way scripted disclosures, none interactive.
Fix: Position as consent-capture assistance under attorney/ethics-board-reviewed scripts, not as the compliance authority itself; keep a human confirmation step.
Severity: manageable

### I-3050 Instant Reflex AI Layer

Objection: TypeSafe AI's Jev, launched Sept 2026 with $40M seed funding, already ships the exact mechanism (sub-second, cheap, typed per-event judgments with escalation to a bigger model) to the exact buyer (developers, usage-based pricing) this idea targets.
Evidence: s8-hunter-10 — verdict direct-competitor; TypeSafe AI's Jev live, funded, same mechanism and buyer.
Fix: None credible as a general reflex-layer platform; only a narrow vertical wrapper (e.g., IDE-specific secret detection) might carve out space Jev doesn't own yet.
Severity: fatal

### I-3529 Screen-Side Cite Bailiff

Objection: Westlaw Quick Check, LawDroid CiteCheck AI, and BriefCatch already catch fabricated citations via faster, more reliable database APIs; a vision-based browser-search agent is slower and less accurate than direct KeyCite/CourtListener lookups, and locking submit requires per-court e-filing integration across many incompatible portals.
Evidence: s8-hunter-02 — verdict adjacent-exists; Westlaw Quick Check, CiteCheck AI, BriefCatch RealityCheck all database-API driven and live.
Fix: Use database APIs (CourtListener) for verification instead of vision/browser-search; keep the e-filing submit-lock as the sole differentiator, scoped to one court system first.
Severity: serious

### I-4005 POA Packet Builder

Objection: Generic AI form-fillers (DocFills, OCR-Software.com) can already be pointed at this problem. The real product — a maintained library of dozens of banks' changing certification forms plus statute-citing rebuttal letters — is a high-upkeep content-ops burden, and auto-drafting statute-based legal rebuttals edges into unauthorized-practice-of-law risk.
Evidence: s8-hunter-06 — verdict adjacent-exists; DocFills, OCR-Software.com Smart Form Filler.
Fix: Cap scope to the top 10-15 banks by proxy volume; route rebuttal letters through attorney-reviewed templates, not free-form statute drafting.
Severity: serious

### I-4511 Proof Receipts for Proxy Agents

Objection: This idea's value depends on I-2547-style proxy agents reliably logging into locked bank/Medicaid portals in the first place — a shaky foundation given MFA and bot detection. A self-generated screenshot receipt is also not independent proof; a family or auditor could reasonably ask why an agent's own capture of its own action counts as verification.
Evidence: s8-hunter-10 — verdict adjacent-exists; Meridian Verity, Asqav, BrowserProof all serve enterprise/dev buyers, none address this underlying portal-access fragility.
Fix: Anchor each receipt to the portal's own confirmation page/number (already planned) and disclose the self-capture limitation; pair only with a proxy-agent layer proven reliable on target portals.
Severity: serious

### I-4563 Foreign-Invoice Autopilot

Objection: Veryfi, Dext, and Tofu already do multilingual, multi-currency invoice OCR with one-tap ledger posting at established scale (91+ currencies, 200+ languages) — the mechanism is identical; the freelance-translator niche is a positioning choice, not a technical moat, and incumbents can retarget it in a weekend.
Evidence: s8-hunter-02 — verdict direct-competitor; Veryfi, Dext, Tofu all live with identical mechanism.
Fix: Only viable as a thin vertical skin (pricing/UX for solo freelancers) on top of an existing OCR API, not a from-scratch build.
Severity: fatal

### I-5207 Matter-Billed Agent Run Meter

Objection: Keito already matches the exact buyer and billing niche (client/matter cost attribution for law firms, consultancies, solo practitioners) and lacks only a live hard-cap — a feature an incumbent with existing distribution can add faster than a new entrant can win the niche from scratch.
Evidence: s8-hunter-06 — verdict adjacent-exists; Keito matches buyer/niche exactly; llm0/LiteLLM already hard-cap spend via proxy.
Fix: Ship the hard-cap-plus-matter-rebilling combo fast and target solo professionals Keito underserves; be prepared for Keito to add hard-caps.
Severity: serious

### I-6003 Jev: context-aware AAC phrase suggestions

Objection: Vocable AAC already lets users build a personal phrase library with AI assist during live conversation, and Spoken/AAC Talker already listen to the conversation partner. For switch-scanning/eye-tracking users, any latency or mis-ranking directly costs response time, so an unproven ranking model risks making communication slower, not faster, versus the existing manual folder navigation.
Evidence: s8-hunter-10 — verdict adjacent-exists; Vocable AAC, Spoken AAC, AAC Talker Listening mode.
Fix: Differentiate hard on the composition-free constraint (rank-only, never generate) and validate response-time improvement with real AAC users before wider build.
Severity: manageable

```json
[
  {"id": "I-1019", "objection": "StatementLock already parses uploaded statements in-browser for fraud/duplicates; Carefull/EverSafe own the funded elder-fraud niche via easier cloud account-linking.", "fix": "Lead with the offline/no-SSN-in-cloud trust angle StatementLock and Carefull can't match; target families who refuse account-linking.", "severity": "serious"},
  {"id": "I-1063", "objection": "Tai TMS, ARK TMS and FastFreight already auto-generate rate confirmations from structured load data with no learning step; switching cost from an existing TMS is real and one-shot learning is unproven across rate variance.", "fix": "Target brokers without a TMS, not TMS-equipped shops that already automate this.", "severity": "serious"},
  {"id": "I-1525", "objection": "Bito AI Architect, a Jira Ticket Estimator skill, and open-source agent-estimate already read a real codebase and turn a ticket into a grounded estimate; the client-feature-request framing is a thin wrapper on an existing mechanism.", "fix": "None credible without a genuinely different mechanism or niche these tools structurally can't reach.", "severity": "fatal"},
  {"id": "I-2038", "objection": "Smart Moving: Furniture Helper already ships camera-based measuring plus rotation/tilt clearance solving through stairs and doorways to moving companies, same niche and mechanism.", "fix": "Differentiate on checkout-embedded scan-at-purchase workflow or undercut on price; otherwise hard to justify.", "severity": "fatal"},
  {"id": "I-2053", "objection": "General hallucination-highlighters (GPTZero, Originality.ai) already do sentence-level claim checking, and carrier-side claims-AI vendors already build audit trails; the independent-adjuster niche may be too small to justify a dedicated product.", "fix": "Ship as a thin claims-specific wrapper around an existing hallucination-detection API rather than building detection from scratch.", "severity": "serious"},
  {"id": "I-2514", "objection": "Citation-checking is dominated by Clearbrief (~70% of Am Law 20); the real novelty is broker distribution, which assumes brokers act as software distributors -- an unproven go-to-market, not a proven product gap.", "fix": "Validate broker interest with one design partner before building on-prem infra.", "severity": "serious"},
  {"id": "I-2547", "objection": "Banks and Medicare/Medicaid portals actively detect and block automated logins (bot detection, MFA); storing a parent's live credentials for automated crawling is a major security/liability risk, and Carefull already owns the niche via safer API linking.", "fix": "Use official APIs/aggregation where available; reserve browser-agent login for portals with no API, with human MFA handoff.", "severity": "serious"},
  {"id": "I-3031", "objection": "Using an AI agent to obtain 'informed consent' for AI recording is circular, and it's unclear ethics boards accept AI-agent-captured consent as sufficient; therapist liability if the AI mishandles the exchange is unresolved.", "fix": "Position as consent-capture assistance under ethics-board-reviewed scripts, not the compliance authority itself; keep a human confirmation step.", "severity": "manageable"},
  {"id": "I-3050", "objection": "TypeSafe AI's Jev, launched Sept 2026 with $40M seed, already ships sub-second, cheap, typed per-event judgments with escalation to the same developer buyer at usage-based pricing.", "fix": "None credible as a general platform; only a narrow vertical wrapper might carve out space Jev doesn't own.", "severity": "fatal"},
  {"id": "I-3529", "objection": "Westlaw Quick Check, LawDroid CiteCheck AI and BriefCatch already catch fabricated citations via faster, more reliable database APIs than a vision-based browser-search agent, and locking e-filing submit requires integration across many incompatible court portals.", "fix": "Use database APIs (CourtListener) for verification; scope the e-filing submit-lock differentiator to one court system first.", "severity": "serious"},
  {"id": "I-4005", "objection": "Generic AI form-fillers (DocFills, OCR-Software.com) already address this problem space; maintaining dozens of banks' changing certification forms is a high-upkeep content-ops burden, and drafting statute-based rebuttal letters risks unauthorized-practice-of-law exposure.", "fix": "Cap scope to the top 10-15 banks by proxy volume; route rebuttal letters through attorney-reviewed templates.", "severity": "serious"},
  {"id": "I-4511", "objection": "This idea depends on proxy agents reliably logging into locked bank/Medicaid portals, a shaky foundation given MFA and bot detection; a self-generated screenshot receipt is also not independent proof of the action it claims to verify.", "fix": "Anchor each receipt to the portal's own confirmation number and disclose the self-capture limitation; pair only with a proven proxy-agent layer.", "severity": "serious"},
  {"id": "I-4563", "objection": "Veryfi, Dext and Tofu already do multilingual, multi-currency invoice OCR with one-tap ledger posting at established scale; the mechanism is identical and the freelance-translator niche is a positioning choice incumbents can retarget quickly.", "fix": "Only viable as a thin vertical skin (pricing/UX for solo freelancers) on top of an existing OCR API.", "severity": "fatal"},
  {"id": "I-5207", "objection": "Keito already matches the exact buyer and billing niche (client/matter cost attribution for solo professionals) and lacks only a live hard-cap, a feature an incumbent with existing distribution can add faster than a new entrant can win the niche.", "fix": "Ship the hard-cap-plus-matter-rebilling combo fast, targeting solo professionals Keito underserves.", "severity": "serious"},
  {"id": "I-6003", "objection": "Vocable AAC already offers a personal phrase library with AI assist during conversation, and Spoken/AAC Talker already listen to the partner; for switch-scanning users, any latency or mis-ranking risks making communication slower than existing manual navigation.", "fix": "Differentiate hard on the composition-free rank-only constraint and validate response-time gains with real AAC users before wider build.", "severity": "manageable"}
]
```
<!-- COMPLETE -->
