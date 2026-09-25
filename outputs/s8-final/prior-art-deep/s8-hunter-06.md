### I-1063 Rate-Con Learned From One Build

Verdict: adjacent-exists

Closest products:
- Tai TMS (https://tai-software.com/automate-operations-with-rate-confirmation-software-by-tai-tms/) — auto-fills rate confirmations from load/TMS data and templates, not from a single hand-built example the agent learns from.
- ARK TMS (https://arktms.com/blog/automated-document-generation-freight-broker-tms) — generates rate cons/BOLs/invoices from recorded load data already in the TMS, no one-shot learning step.
- FastFreight (https://www.gofastfreight.com/automation/ai-rate-negotiation-automation-ltl) — generates and sends signed rate confirmations instantly on booking, sourced from structured load data.

Note: Many TMS tools auto-generate rate cons from structured load/carrier data, but none found teach themselves a carrier/lane's format from one hand-built example the way this idea proposes. Mechanism differs.

### I-2053 Summary Reweigh Desk

Verdict: adjacent-exists

Closest products:
- Hesper AI (via YC insurance directory) — AI agents investigate P&C claims end-to-end, detect tampered documents, verify facts, and produce audit-ready case files, but for carrier-side investigation, not an independent adjuster-facing sentence-by-sentence check of a carrier's AI summary against the source file.
- Decerto ClaimsAI (https://www.decerto.com/us/claimsai) — explainable AI claims processing with audit trails, but built for carriers' own claims automation, not third-party adjuster verification of another AI's summary.
- GPTZero Hallucination Detector / Originality.ai fact-checker (https://gptzero.me/hallucination-detector, https://originality.ai/automated-fact-checker) — general-purpose sentence-level hallucination/claim highlighting against sources, same core mechanism but not claims-file specific or adjuster-targeted.

Note: General hallucination-highlighting tools and claims-automation platforms exist, but none found pairs a full claim file with a carrier's AI summary specifically for independent adjuster sign-off review.

### I-3031 Consent Concierge Voice Agent

Verdict: adjacent-exists

Closest products:
- Zentake AI scribe consent (https://www.zentake.com/template/consent-for-ai-scribe-use) — captures e-signed, timestamped consent with audit trail before AI scribe use, but via form/e-signature delivered by SMS/email, not a live interactive multilingual voice dialogue.
- iPlum dual-party consent recording (https://www.iplum.com/blog/dual-party-consent-call-recording) — plays an automatic voice disclosure announcement before recording begins, but it's a one-way scripted announcement, not an interactive agent that converses, explains, and hears a verbal "yes."
- Jane/Frontdesk AI scribe consent guidance (https://frontdesk.jane.app/articles/using-AI-scribes-how-to-talk-to-clients-and-get-consent) — guidance and templates for therapists to obtain consent, not an automated voice agent.

Note: Consent-form and one-way disclosure tools are common; no live, on-device, multilingual voice-dialogue agent that asks for and timestamps a verbal "yes" before AI-recorded sessions was found.

### I-4005 POA Packet Builder

Verdict: adjacent-exists

Closest products:
- DocFills (https://www.docfills.com/forms/power-of-attorney) — AI-fills a standard POA template from user input, but doesn't map one POA against a library of bank-specific certification forms or draft rebuttal letters.
- OCR-Software.com Smart Form Filler (https://ocr-software.com/en/smart-form-filler/) — generic AI tool that maps a source document to a target form (works across tax, insurance, loan forms), not specialized for POA-to-bank-form matching or notarization/rebuttal logic.
- No dedicated "POA-to-multi-bank-certification-form" product or statute-citing rebuttal-letter generator was found on Product Hunt, YC, or app stores.

Note: Generic AI form-fillers can plausibly be pointed at this problem, but no product found that maintains a bank-form library, flags notarization gaps, and drafts statute-based rebuttal letters for POA rejections.

### I-5207 Matter-Billed Agent Run Meter

Verdict: adjacent-exists

Closest products:
- Keito (https://keito.ai/solutions/ai-agent-cost-tracking/llm-api-cost-tracking/) — a billing workspace that attributes AI token costs to clients/projects for law firms, consultancies and solo practitioners (plans from $19/mo), explicitly targeting professional-services billing; confirmed via fetch it does NOT hard-cap or halt live runs, it's attribution/review only, not a spend-control gate.
- llm0 (https://github.com/llm0ai/llm0) — self-hosted gateway with hard per-project budget caps that block API calls before they happen, but scoped to LLM API calls only (not browser-agent services), and not framed around client/matter rebilling for solo professionals.
- LiteLLM (https://www.litellm.ai/) — open-source AI gateway with per-team/per-key budgets and spend tracking across 140+ providers, same proxy mechanism but general-purpose dev infra, not matter-based rebilling with a live hard-stop UX for solo professionals.

Note: Keito matches the buyer and billing niche exactly but lacks a live hard-cap/halt; llm0/LiteLLM hard-cap spend via proxy but aren't matter-billing products or scoped to browser-agent costs. No single product combines both.

```json
[
  {"id": "I-1063", "verdict": "adjacent-exists", "competitors": ["Tai TMS (https://tai-software.com/automate-operations-with-rate-confirmation-software-by-tai-tms/)", "ARK TMS (https://arktms.com/blog/automated-document-generation-freight-broker-tms)", "FastFreight (https://www.gofastfreight.com/automation/ai-rate-negotiation-automation-ltl)"], "note": "TMS tools auto-generate rate cons from structured load data, but none teach themselves a lane/carrier's format from one hand-built example as this idea proposes."},
  {"id": "I-2053", "verdict": "adjacent-exists", "competitors": ["Hesper AI (ycombinator.com/companies/hesper-ai)", "Decerto ClaimsAI (https://www.decerto.com/us/claimsai)", "GPTZero Hallucination Detector (https://gptzero.me/hallucination-detector)"], "note": "General hallucination-highlighters and carrier-side claims automation exist, but none found pairs a full claim file with a carrier's AI summary for independent adjuster sign-off review."},
  {"id": "I-3031", "verdict": "adjacent-exists", "competitors": ["Zentake (https://www.zentake.com/template/consent-for-ai-scribe-use)", "iPlum dual-party consent (https://www.iplum.com/blog/dual-party-consent-call-recording)", "Jane/Frontdesk consent guidance (https://frontdesk.jane.app/articles/using-AI-scribes-how-to-talk-to-clients-and-get-consent)"], "note": "Form/e-signature and one-way announcement consent tools exist; no live multilingual interactive voice-dialogue agent logging a verbal yes was found."},
  {"id": "I-4005", "verdict": "adjacent-exists", "competitors": ["DocFills (https://www.docfills.com/forms/power-of-attorney)", "OCR-Software.com Smart Form Filler (https://ocr-software.com/en/smart-form-filler/)"], "note": "Generic AI POA/form-fillers exist but none maintain a bank-certification-form library, flag notarization gaps, and draft statute-citing rebuttal letters."},
  {"id": "I-5207", "verdict": "adjacent-exists", "competitors": ["Keito (https://keito.ai/solutions/ai-agent-cost-tracking/llm-api-cost-tracking/)", "llm0 (https://github.com/llm0ai/llm0)", "LiteLLM (https://www.litellm.ai/)"], "note": "Keito matches the buyer/billing niche but only attributes cost, no live hard-cap; llm0/LiteLLM hard-cap via proxy but are generic dev infra, not matter-rebilling products."}
]
```
<!-- COMPLETE -->
