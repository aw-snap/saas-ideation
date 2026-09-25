# Prior-Art Hunt — s5-hunter-06 (quick mode)

### I-1022 Rejection-Proof Renewal Filer
Verdict: adjacent-exists
Competitors:
- State Medicaid portal validation (e.g. ACCESS HRA, Georgia staycovered.ga.gov) — catches missing required fields at submission time but is per-state, not a rules library targeting known rejection patterns, and doesn't cover Medicare Advantage appeals.
- General "common Medicaid mistakes" advisory content (stotlerhayes.com, regencyhcs.com) — human checklists, not automated pre-submission verification software.
Note: No dedicated consumer-facing pre-submission checker for Medicaid renewals/Medicare appeals surfaced; existing validation lives inside official state portals themselves, not as a proxy tool for guardians.

### I-1063 Rate-Con Learned From One Build
Verdict: adjacent-exists
Competitors:
- DispatchMVP (dispatchmvp.ai) — extracts rate con data from uploaded documents and auto-populates the load board, but starts from an uploaded/existing document each time, not a single learned template per lane.
- Kolank (via alternativeto.net) — AI agents automating rate confirmation document collection and TMS data entry for brokers, similar niche but general document automation rather than "one example teaches the agent" per-lane templating.
- Drumkit (drumkit.ai) — automates quote request responses/rate quotes, adjacent workflow but not rate-con drafting from a single learned example.
Note: Several AI tools automate rate confirmation extraction/drafting for brokers; none found specifically learn from one hand-built example per lane/carrier as the onboarding mechanism.

### I-1555 Same Words, More Life
Verdict: adjacent-exists
Competitors:
- ElevenLabs / Typecast expressive TTS and voice tools — offer pitch/emotion/dynamics controls and "Smart Emotion" restyling, but are general TTS/voice platforms, not speech-to-speech tools aimed at lecture recordings with filler-to-pause conversion and slide-sync timing.
- Yoodli — analyzes and counts filler words for public-speaking coaching, does not resynthesize audio.
Note: No product found that takes an existing lecture recording and returns the same words with restyled delivery, synced timing, and fillers converted to pauses specifically for lecture-capture use.

### I-2040 The Farm's Spoken Map
Verdict: adjacent-exists
Competitors:
- AgDrain (agdrain.ca) — professional GPS tile-drainage mapping/surveying service for Ontario, but a contractor service using survey-grade GPS, not a self-serve AR/narration app for retiring farmers.
- Farmable (github.com/ctrl-alt-elite-za/Farmable) — open-source AR+GPS walk-and-draw field mapping tool, overlapping mechanism (AR + GPS) but for field boundary drawing, not confidence-tagged narrated succession/drainage records.
- Generic farm GPS/GIS mapping apps (Farmonaut, Felt) — precision-ag field mapping, not narration-driven succession knowledge capture.
Note: Same underlying product concept as I-3541 (different card, same mechanism/niche). Existing farm GPS mapping tools and one AR-walk open-source project overlap in mechanism, but no tool found captures narrated farmer knowledge into confidence-tagged succession map layers.

### I-2061 Grounded Notes With Timestamp Citations
Verdict: adjacent-exists
Competitors:
- Local AI Master's whisper.cpp + Ollama stack (localaimaster.com) — describes essentially the same local transcribe-then-draft SOAP note pipeline on a 16GB machine, but as a DIY/blog recipe, not a packaged product with per-sentence timestamp citation/flagging.
- SOAP Notes AI Scribe (App Store) — offers an on-device transcription mode alongside cloud drafting, but is a commercial hybrid scribe without the described untagged-sentence flagging mechanism.
- ICANotes AI therapy scribe — keeps audio/transcripts local rather than centrally stored, but is a broader EHR-integrated scribe, not built around citation-tagging every clinical claim to a transcript timestamp.
Note: The local-first SOAP-note niche is active and one DIY stack matches the mechanism closely; no polished product found that flags untraceable sentences via timestamp citation, so it stays adjacent rather than a direct hit.

### I-2529 Dispatch-to-NFIRS Bridge
Verdict: adjacent-exists
Competitors:
- Responserack (responserack.com) — fire department software with NFIRS/NERIS reporting support for VFDs, but appears form/workflow-centric rather than transcribing live dispatch/crew radio audio into a draft report.
- CLIPr (clipr.ai) coverage of "AI is transforming incident reports for fire departments" — describes AI turning dispatch and fireground audio into NFIRS-compliant draft reports in minutes, essentially the same mechanism and niche described in this card.
- Alpine Software AI fire department tools (alpinesoftware.com) — broader AI fire ops software referencing similar dispatch-audio-to-report capability.
Note: Same underlying product concept as I-4027 (different card, same mechanism/niche). Vendor coverage (CLIPr) describes AI converting dispatch/fireground audio into NFIRS drafts already, close to direct-competitor territory, though live product/pricing specifics weren't independently confirmed.

### I-2590 Zero-Lag Live Captions
Verdict: direct-competitor
Competitors:
- Ava (ava.me / App Store) — 24/7 real-time captioning app for deaf/hard-of-hearing users covering everyday one-on-one and group conversations, not just scheduled meetings, same niche and mechanism as described.
- Google Live Transcribe (Android) — free always-on real-time captioning for everyday conversations in 120+ languages, live product with same mechanism.
Note: Ava and Google Live Transcribe already provide always-on, non-meeting live captioning for deaf/HoH users, directly overlapping niche and mechanism; the "cheap enough to run all day" angle isn't fully differentiated from these live products.

### I-3044 Will It Fit? Delivery Check
Verdict: adjacent-exists
Competitors:
- Smart Moving: Furniture helper (App Store) — measures doorways, staircases, elevators and hallways via phone camera/tape measure and gives fit feasibility with rotation/angle suggestions, closely overlapping mechanism and niche but aimed at consumer movers, not a retailer checkout-integrated B2B fit filter.
- Luna Furniture "Will Your Furniture Fit?" calculator (lunafurn.com) — door/stair/elevator fit calculator, but manual-measurement based, not photo/depth-model driven.
Note: A consumer AR measuring app (Smart Moving) already does camera-based stairwell/door fit checks; the idea's B2B checkout-integration and per-route-check pricing model isn't matched by what was found.

### I-3091 Spend Governor for Locked-Portal Agent APIs
Verdict: adjacent-exists
Competitors:
- Gvnr (glama.ai/mcp/servers/mightbesaad/gvnr) — external authority agents check before spending, with per-agent USD spend envelopes and daily/session caps, very close in mechanism but general-purpose, not specific to screen-agent-exposed locked portals like Dentrix/PioneerRx/Yardi.
- agent-gov (dev.to writeup) — described as an "Agent Cost Governance Platform" with similar proxy-based budget enforcement.
Note: General AI-agent spend-cap/budget-governor tools (Gvnr, agent-gov) exist with a closely matching mechanism; none found are specialized for locked-portal, per-call vertical APIs (Dentrix, PioneerRx, Yardi) as the niche.

### I-3541 Lay of the Land
Verdict: adjacent-exists
Competitors:
- AgDrain (agdrain.ca) — professional GPS tile-drainage mapping/surveying service for Ontario, but a contractor service using survey-grade GPS, not a self-serve AR/narration app for retiring farmers.
- Farmable (github.com/ctrl-alt-elite-za/Farmable) — open-source AR+GPS walk-and-draw field mapping tool, overlapping mechanism (AR + GPS) but for field boundary drawing, not confidence-tagged narrated succession/drainage records.
- Generic farm GPS/GIS mapping apps (Farmonaut, Felt) — precision-ag field mapping, not narration-driven succession knowledge capture.
Note: Same underlying product concept as I-2040 (different card, same mechanism/niche). See I-2040 for full search detail; no tool found captures narrated farmer knowledge into confidence-tagged AR succession layers.

### I-4027 Fire Incident Report Reconstructor
Verdict: adjacent-exists
Competitors:
- Responserack (responserack.com) — fire department software with NFIRS/NERIS reporting support for VFDs, but appears form/workflow-centric rather than transcribing live dispatch/crew radio audio into a draft report.
- CLIPr (clipr.ai) coverage of "AI is transforming incident reports for fire departments" — describes AI turning dispatch and fireground audio into NFIRS-compliant draft reports in minutes, essentially the same mechanism and niche described in this card.
- Alpine Software AI fire department tools (alpinesoftware.com) — broader AI fire ops software referencing similar dispatch-audio-to-report capability.
Note: Same underlying product concept as I-2529 (different card, same mechanism/niche). See I-2529 for full search detail; CLIPr's described product is close to a direct competitor but not independently confirmed live.

### I-4513 Authorization Passport for Proxy Agents
Verdict: adjacent-exists
Competitors:
- Agntcy verifiable credentials framework (docs.agntcy.org) — DID-based delegation credentials (W3C Verifiable Credentials) defining agent identity and permissions, same underlying mechanism (verifiable authorization credential) but infrastructure-level, not a consumer product turning scanned POA/CMS-1696 paperwork into a bank-ready badge.
- Indicio KYC/agent authentication tooling (indicio.tech) — AI agents authenticating banking customers via verifiable credentials, adjacent niche (banking authorization) but not proxy/POA-specific.
Note: Verifiable-credential standards for AI agent authorization are an active research/infra space; no product found that specifically converts scanned POA/CMS-1696 paperwork into an institution-ready badge for daily money managers.

### I-4563 Foreign-Invoice Autopilot
Verdict: adjacent-exists
Competitors:
- Booke.ai (booke.ai) — invoice/receipt OCR AI posting into QuickBooks Online and Xero, overlapping mechanism (OCR + ledger posting) but general AP automation, not targeted at freelance translators/localizers receiving multi-currency vendor invoices.
- Tofu multi-language invoice OCR roundups (gotofu.com) — surveys several tools processing invoices in 200+ languages including handwritten and non-Latin scripts, general AP automation category, not freelancer-specific.
Note: Multilingual invoice OCR-to-ledger tools (Booke.ai and others reviewed by Tofu) are an established category; none found is specifically packaged for freelance translators' vendor invoice mix.

### I-6019 Personal Snippet Recall for Coding
Verdict: adjacent-exists
Competitors:
- Codiga (codiga.io) — VS Code/JetBrains plugin that does contextual, language/library-aware search over your own and shared snippets, with inline suggestion insertion; close mechanism match.
- Snipt.dev — semantic search over code snippets detecting framework/language context, similar mechanism but framed as a snippet search engine rather than an always-on inline ranker keyed to the open file's imports/functions.
Note: Codiga already offers contextual, IDE-inline personal/shared snippet suggestions; the idea's specific "rank by current file's imports/functions, never auto-insert" framing isn't fully matched but the core mechanism overlaps closely.

```json
[
  {"id": "I-1022", "verdict": "adjacent-exists", "competitors": ["ACCESS HRA/state Medicaid portal validation (https://www.nyc.gov/site/hra/help/medicaid-renewal-frequently-asked-questions.page)", "Common Medicaid mistakes guides (https://stotlerhayes.com/common-medicaid-application-mistakes/)"], "note": "State portals validate required fields at submission; human checklists cover common errors. No dedicated pre-submission rejection-pattern checker for guardians filing Medicaid renewals or Medicare appeals found."},
  {"id": "I-1063", "verdict": "adjacent-exists", "competitors": ["DispatchMVP (https://dispatchmvp.ai/dispatch-software-freight-brokers)", "Kolank (https://alternativeto.net/software/kolank/about)", "Drumkit (https://www.drumkit.ai/blog/revolutionizing-rate-quotes-the-future-of-freight-broker-financials)"], "note": "AI rate-con extraction/drafting tools exist for brokers (DispatchMVP, Kolank), but none learn a lane template from a single hand-built example as the onboarding mechanism."},
  {"id": "I-1555", "verdict": "adjacent-exists", "competitors": ["ElevenLabs expressive voice tools (https://elevenlabs.io/voice-library/monotone)", "Typecast expressive TTS (https://typecast.ai/text-to-speech/)", "Yoodli filler-word analysis (https://www.umevo.ai/blogs/ume-all-posts/toastmasters-and-public-speaking-analyzing-filler-words-with-ai)"], "note": "Expressive TTS/voice tools and filler-word analyzers exist separately; no speech-to-speech product found that restyles an existing lecture recording while preserving word timing for slide sync."},
  {"id": "I-2040", "verdict": "adjacent-exists", "competitors": ["AgDrain GPS tile mapping (https://www.agdrain.ca/)", "Farmable AR+GPS walk mapping (https://github.com/ctrl-alt-elite-za/Farmable/issues/15)", "Farmonaut GPS farm mapping (https://farmonaut.com/precision-farming/farm-mapping-app-7-tools-to-skyrocket-farm-yields)"], "note": "Same product concept as I-3541. GPS drainage-mapping services and an open-source AR-walk field mapper overlap in mechanism; none found capture narrated succession knowledge into confidence-tagged AR layers."},
  {"id": "I-2061", "verdict": "adjacent-exists", "competitors": ["Local AI Master whisper.cpp+Ollama SOAP stack (https://localaimaster.com/blog/local-ai-therapists)", "SOAP Notes AI Scribe (https://apps.apple.com/us/app/soap-notes-ai-scribe/id6744947404)", "ICANotes AI Therapy Scribe (https://www.icanotes.com/ai-therapy-scribe/)"], "note": "A DIY local whisper.cpp+Ollama SOAP pipeline matches the mechanism closely; commercial scribes offer on-device modes but none found flag untraceable sentences via transcript timestamp citation."},
  {"id": "I-2529", "verdict": "adjacent-exists", "competitors": ["Responserack NFIRS/NERIS software (https://www.responserack.com/nfirs/)", "CLIPr AI incident reports (https://www.clipr.ai/blog-articles/how-ai-is-transforming-incident-reports-for-fire-departments)", "Alpine Software AI fire tools (https://alpinesoftware.com/industry-articles/ai-fire-department-software/)"], "note": "Same product concept as I-4027. Vendor coverage (CLIPr) describes AI turning dispatch/fireground audio into NFIRS drafts already; a live, verified competitor product wasn't confirmed."},
  {"id": "I-2590", "verdict": "direct-competitor", "competitors": ["Ava (https://www.ava.me/)", "Google Live Transcribe (https://apps.apple.com/us/app/ava-transcribe-voice-to-text/id1030067058)"], "note": "Ava and Google Live Transcribe already provide always-on, low-latency real-time captioning for deaf/HoH users across everyday spontaneous conversations, not just scheduled meetings."},
  {"id": "I-3044", "verdict": "adjacent-exists", "competitors": ["Smart Moving: Furniture helper (https://apps.apple.com/us/app/smart-moving-furniture-helper/id1666262699)", "Luna Furniture fit calculator (https://www.lunafurn.com/pages/furniture-fit-calculator)"], "note": "Smart Moving already does camera-based stairwell/door clearance checks for movers; a B2B checkout-integrated per-route retailer fit filter with per-check pricing wasn't found."},
  {"id": "I-3091", "verdict": "adjacent-exists", "competitors": ["Gvnr (https://glama.ai/mcp/servers/mightbesaad/gvnr)", "agent-gov (https://dev.to/sschelliah/inside-agent-gov-architecture-of-an-agent-cost-governance-platform-27jl)"], "note": "General AI-agent spend-cap/budget-governor proxies exist (Gvnr, agent-gov) with matching mechanism, but none specialize in locked vertical portals like Dentrix, PioneerRx, or Yardi."},
  {"id": "I-3541", "verdict": "adjacent-exists", "competitors": ["AgDrain GPS tile mapping (https://www.agdrain.ca/)", "Farmable AR+GPS walk mapping (https://github.com/ctrl-alt-elite-za/Farmable/issues/15)", "Farmonaut GPS farm mapping (https://farmonaut.com/precision-farming/farm-mapping-app-7-tools-to-skyrocket-farm-yields)"], "note": "Same product concept as I-2040. GPS drainage-mapping services and an open-source AR-walk field mapper overlap in mechanism; none found capture narrated succession knowledge into confidence-tagged AR layers."},
  {"id": "I-4027", "verdict": "adjacent-exists", "competitors": ["Responserack NFIRS/NERIS software (https://www.responserack.com/nfirs/)", "CLIPr AI incident reports (https://www.clipr.ai/blog-articles/how-ai-is-transforming-incident-reports-for-fire-departments)", "Alpine Software AI fire tools (https://alpinesoftware.com/industry-articles/ai-fire-department-software/)"], "note": "Same product concept as I-2529. CLIPr's described product (dispatch/fireground audio to NFIRS draft) is close to a direct competitor but not independently confirmed as a live, named product."},
  {"id": "I-4513", "verdict": "adjacent-exists", "competitors": ["Agntcy verifiable credentials (https://docs.agntcy.org/identity/credentials/)", "Indicio AI KYC (https://indicio.tech/blog/proven-ai-kyc/)"], "note": "Verifiable-credential/DID infrastructure for AI agent authorization is an active space; no product found converting scanned POA/CMS-1696 paperwork into an institution-ready badge for proxy agents."},
  {"id": "I-4563", "verdict": "adjacent-exists", "competitors": ["Booke.ai (https://booke.ai/en-us/ocr-ai/invoice-and-receipt)", "Tofu multilingual OCR roundup (https://www.gotofu.com/blog/best-ocr-for-foreign-invoice-translation)"], "note": "Multilingual invoice-OCR-to-ledger tools are an established AP automation category (Booke.ai and others); none found is packaged specifically for freelance translators' vendor invoice mix."},
  {"id": "I-6019", "verdict": "adjacent-exists", "competitors": ["Codiga (https://www.codiga.io/code-snippets/vscode/)", "Snipt.dev (https://www.codiga.io/blog/snipt-dev-launch/)"], "note": "Codiga already offers contextual, IDE-inline personal/shared snippet suggestions; the idea's specific current-file import/function-based ranking without auto-insert isn't fully matched but overlaps closely."}
]
```
<!-- COMPLETE -->
