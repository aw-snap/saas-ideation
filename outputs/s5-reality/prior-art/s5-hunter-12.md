# Prior-Art Hunt — s5-hunter-12 (quick mode)

### I-1043 Pawn Shop Nightly Police Filer
Verdict: direct-competitor
Competitors:
- Bravo Store Systems (bravostoresystems.com/point-of-sale-for-pawnbrokers) — POS that automates daily LeadsOnline/BWI/RAPID police reporting and audit trails, same niche and mechanism.
- Pawnbroker Pawn Shop Software / pawn-software.com (pawn-software.com/leads-online-software.htm) — auto-generates and sends the LEADS report at a scheduled daily time from POS transactions.
Note: Multiple live pawn-shop POS vendors already auto-file the daily police/LeadsOnline report from transaction data; the "agent files it before noon" framing adds little that isn't already sold.

### I-1514 Commission Gap Photo Reconciler
Verdict: adjacent-exists
Competitors:
- Applied Recon (www1.appliedsystems.com) — extracts and matches carrier commission statements to Applied Epic transactions, flags gaps, but ingests uploaded statement files (PDF/CSV/XLS), not phone photos, and is sold to the agency, not an outside bookkeeper.
- Commission Wizard (commissionswizard.com) — dedicated reconciliation platform outside the AMS covering non-IVANS carriers with exception flagging.
Note: Commission reconciliation/gap-flagging for Applied Epic is a mature market; the phone-photo, no-typing capture step and outside-accountant buyer are the differentiator, not the core mechanism.

### I-2023 Local Pawn Report Filer
Verdict: adjacent-exists
Competitors:
- Bravo Store Systems (bravostoresystems.com) — same automated police-report filing niche, but runs as vendor-hosted POS software, not an on-device/local model with no data leaving the shop PC.
- Pawnbroker Pawn Shop Software (pawn-software.com) — same automated LEADS filing, cloud/vendor based.
Note: Existing pawn POS tools already automate the filing step; the local-only, ID-never-leaves-the-PC privacy mechanism is not what these vendors advertise, so niche overlaps but mechanism differs.

### I-2046 Fabrication Firewall
Verdict: direct-competitor
Competitors:
- CiteSentinel (referenced in thedailyrecord.com coverage) — flags case law/statutes that may not exist in a drafted brief.
- CaseRead.ai (caseread.ai/hallucination-shield) — free checker that verifies citations against CourtListener/OpenLaws and reads the source to confirm the proposition matches.
- LawDroid CiteCheck AI (lawnext.com coverage) — verifies citations in a document for lawyers.
Note: Several live tools already verify AI-drafted legal citations against real case text and flag fabrications before filing, matching this idea's niche and mechanism closely.

### I-2082 The XML Keeper
Verdict: direct-competitor
Competitors:
- REDDOXX E-Rechnung Archivierung (reddoxx.com/produkte/e-rechnung-archivierung) — recognizes ZUGFeRD/XRechnung structured formats automatically on email receipt and archives the XML, metadata and original email compliantly in the background.
- EU-Rechnung (eu-rechnung.de) — GoBD-compliant e-invoice conversion and archiving service.
Note: German GoBD-compliant e-invoice mailbox archiving that catches XRechnung XML automatically already exists live and targets the same small-firm bookkeeping buyer.

### I-2559 90-Day Reinstatement Filer
Verdict: clear
Competitors: none found — searches returned only government/legal-explainer pages (medicaid.gov, LegalClarity, SHVS) describing the reinstatement rule, no consumer product that photographs a termination notice and auto-files the state reinstatement form.
Note: No live product automates filing the 90-day Medicaid reinstatement request from a photographed notice; only informational guides exist on the reinstatement window itself.

### I-3026 Redaction Relay
Verdict: adjacent-exists
Competitors:
- llm-redact-proxy (github.com/CupOfGeo/llm-redact-proxy) — local proxy that scrubs PII/secrets before requests reach an LLM API.
- PrivAiTe (github.com/crp4222/PrivAiTe) — self-hosted proxy that scrubs names/emails/secrets from agent CLIs before requests leave the machine, then restores real values in the reply, same redact-then-reinsert mechanism.
- Philter AI Proxy (github.com/philterd/philter-ai-proxy) — PII/PHI redacting proxy for multiple LLM providers.
Note: The exact local-redact/cloud-call/reinsert mechanism already exists as open-source proxies; niche differs (general devs vs. solo lawyers/CPAs with client privilege obligations).

### I-3050 Instant Reflex AI Layer
Verdict: adjacent-exists
Competitors:
- Galileo Luna-2 (galileo.ai/blog/best-ai-guardrails-platforms) — small distilled models for real-time hallucination/PII/secret detection at claimed 98% lower cost than LLM-based checks.
- TrueFoundry Secrets Detection (truefoundry.com/docs/ai-gateway/secrets-detection) — in-gateway secret detection without external API calls.
Note: Fast small-model guardrails for secrets/PII already run inline in AI gateways; the generic "reflex-then-escalate SDK for any per-event product" framing and pricing model is not directly sold as such.

### I-3529 Screen-Side Cite Bailiff
Verdict: adjacent-exists
Competitors:
- CaseRead.ai (caseread.ai/hallucination-shield) — verifies citations against real sources, but as a document-paste checker, not a live screen-watching browser agent that greys out an e-filing submit button.
- LawDroid CiteCheck AI (lawnext.com) — citation verification tool, same gap on the screen-agent/e-filing-lock mechanism.
Note: Citation-checking tools for lawyers are common, but none found drive a live browser search per citation from on-screen vision and lock the e-filing submit button until cleared.

### I-3582 Verification-as-a-Service API for Agents
Verdict: clear
Competitors: none found — searches surfaced general citation-verification research/tools (CourtListener-based checkers) and general x402 agent-payment infrastructure articles, but no live per-call, x402-paid citation-verification endpoint for drafting agents.
Note: Human-facing citation checkers exist, but no live pay-per-call, no-signup verification API for autonomous drafting agents using x402 was found.

### I-4033 Overnight Prior-Auth Autopilot
Verdict: direct-competitor
Competitors:
- Infinx Patient Access Plus (infinx.com/prior-authorization-solution-ai-and-automation) — AI/automation that submits prior auths across payer portals.
- Skyvern prior-auth automation (skyvern.com/blog/automate-healthcare-prior-authorization-insurance-portals) — browser agent that automates payer-portal prior-auth submission, explicitly the same underlying tool named in the idea's "why now."
- Prosper AI / Availity AuthAI — additional live vendors automating multi-payer prior-auth submission.
Note: Multi-payer, agent-driven prior-authorization submission is an active, live-vendor category (Infinx, Skyvern, Prosper AI); the overnight-batch framing is a scheduling variant, not a new mechanism.

### I-4545 Medicaid Renewal Autopilot
Verdict: direct-competitor
Competitors:
- HeyMedicaid (heymedicaid.med) — AI system that auto-extracts information, fills out Medicaid applications/renewals, and sends 90-day early reminders, same auto-fill-and-file mechanism.
Note: HeyMedicaid already auto-fills and tracks Medicaid renewal deadlines with reminders; page could not be fully verified beyond search snippet, but the described mechanism directly overlaps.

### I-6005 Continuous Red-Team for Support Agents
Verdict: direct-competitor
Competitors:
- Mindgard (mindgard.ai) — sells continuous automated red-teaming for AI systems/agents, including agent misuse and chained attacks, with ongoing testing at scale.
- CalypsoAI Agentic Warfare (via F5 acquisition, described in giskard.ai roundup) — multi-turn adversarial testing product for enterprise AI agents.
- Lakera Red (via Check Point) — adversarial/prompt-injection testing for chat-based products.
Note: Continuous automated red-teaming of live AI agents, including multi-turn persuasion-style attacks, is an active funded category (Mindgard, CalypsoAI, Lakera); the refund/support-specific framing narrows but doesn't escape it.

```json
[
  {"id": "I-1043", "verdict": "direct-competitor", "competitors": ["Bravo Store Systems (bravostoresystems.com/point-of-sale-for-pawnbrokers)", "Pawnbroker Pawn Shop Software (pawn-software.com/leads-online-software.htm)"], "note": "Multiple live pawn-shop POS vendors already auto-file the daily police/LeadsOnline report from transaction data; the agent framing adds little that isn't already sold."},
  {"id": "I-1514", "verdict": "adjacent-exists", "competitors": ["Applied Recon (www1.appliedsystems.com)", "Commission Wizard (commissionswizard.com)"], "note": "Commission reconciliation/gap-flagging for Applied Epic is mature; phone-photo capture and outside-accountant buyer differ from these file-upload tools."},
  {"id": "I-2023", "verdict": "adjacent-exists", "competitors": ["Bravo Store Systems (bravostoresystems.com)", "Pawnbroker Pawn Shop Software (pawn-software.com)"], "note": "Existing pawn POS tools automate filing already; local-only, no-data-leaves-the-PC privacy mechanism is not what these vendors advertise."},
  {"id": "I-2046", "verdict": "direct-competitor", "competitors": ["CiteSentinel (thedailyrecord.com coverage)", "CaseRead.ai (caseread.ai/hallucination-shield)", "LawDroid CiteCheck AI (lawnext.com)"], "note": "Several live tools already verify AI-drafted legal citations against real case text and flag fabrications before filing."},
  {"id": "I-2082", "verdict": "direct-competitor", "competitors": ["REDDOXX E-Rechnung Archivierung (reddoxx.com/produkte/e-rechnung-archivierung)", "EU-Rechnung (eu-rechnung.de)"], "note": "German GoBD-compliant XRechnung mailbox archiving that auto-catches structured XML already exists live for the same small-firm buyer."},
  {"id": "I-2559", "verdict": "clear", "competitors": [], "note": "No live product found that photographs a Medicaid termination notice and auto-files the state's 90-day reinstatement request; only informational guides exist."},
  {"id": "I-3026", "verdict": "adjacent-exists", "competitors": ["llm-redact-proxy (github.com/CupOfGeo/llm-redact-proxy)", "PrivAiTe (github.com/crp4222/PrivAiTe)", "Philter AI Proxy (github.com/philterd/philter-ai-proxy)"], "note": "The exact local-redact/cloud-call/reinsert mechanism exists as open-source proxies; niche differs (general devs vs. lawyers/CPAs)."},
  {"id": "I-3050", "verdict": "adjacent-exists", "competitors": ["Galileo Luna-2 (galileo.ai/blog/best-ai-guardrails-platforms)", "TrueFoundry Secrets Detection (truefoundry.com/docs/ai-gateway/secrets-detection)"], "note": "Fast small-model guardrails for secrets/PII already run inline in AI gateways; the generic per-event reflex-then-escalate SDK framing is not directly sold."},
  {"id": "I-3529", "verdict": "adjacent-exists", "competitors": ["CaseRead.ai (caseread.ai/hallucination-shield)", "LawDroid CiteCheck AI (lawnext.com)"], "note": "Citation checkers for lawyers are common, but none found drive a live browser search per citation and lock the e-filing submit button."},
  {"id": "I-3582", "verdict": "clear", "competitors": [], "note": "No live pay-per-call, no-signup x402 citation-verification endpoint for autonomous drafting agents was found; only human-facing checkers and general agent-payment articles."},
  {"id": "I-4033", "verdict": "direct-competitor", "competitors": ["Infinx Patient Access Plus (infinx.com/prior-authorization-solution-ai-and-automation)", "Skyvern prior-auth automation (skyvern.com/blog/automate-healthcare-prior-authorization-insurance-portals)", "Prosper AI (getprosper.ai)"], "note": "Multi-payer, agent-driven prior-auth submission is an active live-vendor category; overnight-batch framing is a scheduling variant, not a new mechanism."},
  {"id": "I-4545", "verdict": "direct-competitor", "competitors": ["HeyMedicaid (heymedicaid.med)"], "note": "HeyMedicaid already auto-extracts, auto-fills and reminds for Medicaid renewals; page could not be fully verified beyond search snippet."},
  {"id": "I-6005", "verdict": "direct-competitor", "competitors": ["Mindgard (mindgard.ai)", "CalypsoAI Agentic Warfare (via F5)", "Lakera Red (via Check Point)"], "note": "Continuous automated red-teaming of live AI agents, including multi-turn persuasion attacks, is an active funded category; refund/support framing narrows but doesn't escape it."}
]
```
<!-- COMPLETE -->
