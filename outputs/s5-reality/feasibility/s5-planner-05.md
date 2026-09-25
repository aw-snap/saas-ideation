### I-1021 Fiduciary Record Vault
Core loop: (1) fiduciary drops statement/receipt scans into local app; (2) on-device OCR pulls line items; (3) on-device model classifies each into accounting categories; (4) reconciles totals against benefit deposits; (5) assembles annual report with flagged mismatches.
Stack: Chrome built-in AI / Gemini Nano (TC-19, production, on-device, free) for classification and summarizing; a JS OCR layer (e.g. Tesseract.js) `[unverified]` since Gemini Nano itself is not an OCR engine for scanned receipts.
Riskiest: on-device OCR accuracy on real scanned receipts/handwriting within 48h; the "never leaves device" pitch depends on the OCR step also staying local, which is the unverified link. Demo can fake with clean, pre-scanned sample statements rather than messy real receipts.
Verdict: demoable: risky — on-device classification is real (TC-19), but the OCR half of the loop is unverified and the riskiest part for a balanced (must work end-to-end) track.

### I-1042 AI live interview coach
Core loop: (1) mic audio streams to a speech-to-text engine; (2) pace/filler-word/rambling metrics computed from live transcript timestamps; (3) a visual nudge (dot/word) fires when a threshold is crossed; (4) session recorded; (5) replay timeline with three fixes shown after.
Stack: browser Web Speech API or a streaming ASR (Whisper-style) `[unverified for true real-time prosody]`; simple rules engine for pace/filler detection — no tech card claims live "prosody analysis," which the idea itself flags `[unverified]`.
Riskiest: the card's own claim of real-time prosody analysis is unverified; the buildable version is pace + filler-word heuristics only, dropping the vaguer "prosody" promise. Demo should use a scripted mock interview to guarantee the nudge fires on cue.
Verdict: demoable: risky — pace/filler nudges and replay are buildable in 48h, but the pitch leans on an unverified prosody capability that likely gets quietly dropped for the demo.

### I-1062 One-Split VAT Learner
Core loop: (1) upload a mixed-tax invoice; (2) OCR extracts line items and tax rates; (3) user manually corrects the split once; (4) the corrected split is stored as a per-vendor template (line-position/keyword rules); (5) next invoice from that vendor auto-applies the template.
Stack: Mistral OCR 3 (TC-30, production, $2/1000 pages) for line-level extraction; a simple rules/template store (no fine-tuning needed) for "learning" the split.
Riskiest: "one correction becomes a reusable template" is really a rules match, not a trained model — fine for a demo with one scripted vendor, but breaks on invoice-format variation the demo won't show.
Verdict: demoable: yes — built on a real, cited OCR capability with a lightweight rules layer that's honestly scoped for a single vendor demo.

### I-1508 Stop the Wire Before It Sends
Core loop: (1) agent watches inbox for bank-detail-change language; (2) LLM extracts new account/sender details; (3) compares against stored vendor payment history and domain records; (4) flags/holds mismatches; (5) surfaces a phone-callback prompt before payment release.
Stack: Gmail/IMAP API for inbox access; an LLM (any current model) for detection and comparison; no browser agent strictly required despite the card citing TC-03 (Claude for Chrome, production) for finance-tool integration.
Riskiest: blocking the actual payment release requires either an accounting-software integration or a mocked one; for the demo, faking the "linked payment" step (a mock ledger) instead of a real QuickBooks/Xero write is reasonable and keeps the detection logic (the real core loop) genuine.
Verdict: demoable: yes — detection logic is straightforward and real; only the downstream payment-system hookup is faked.

### I-1545 Consent Notary API for Solo Care Agents
Core loop: (1) POA scan posted to the API; (2) service verifies/records it and issues a signed, reusable credential token; (3) token presented at a portal/bank login; (4) mock verifier checks signature and scope; (5) token reused across multiple mock portals without re-proving authority.
Stack: standard signed-token issuance (JWT + asymmetric signing) — this is stdlib crypto, not a listed capability; card's cited "MCP authorization" (TC-09, on a production track) and "Okta Agent SSO" (TC-17, GA 2026-08) are real but the idea doesn't actually need Okta to demo token issuance.
Riskiest: the "notarization" language implies legal/bank recognition that doesn't exist — no real bank accepts this token today. That's fine to fake in the demo (a mock bank-login page), since token issuance/verification itself is real and simple to build.
Verdict: demoable: yes — the signing/verification loop is genuinely buildable in hours; the legitimacy claim is the (acceptable, peripheral) fake.

### I-2020 Checks What The Filing Agent Did
Core loop: (1) local browser agent logs into a state portal with saved credentials; (2) reads the actual filing status; (3) compares against what the paid agent billed for; (4) flags mismatches; (5) presents a red-flagged report.
Stack: browser-use (TC-06, production-adjacent, free) or Stagehand/Browserbase (TC-08, production) for the portal navigation and read step; an LLM to diff billed-vs-actual status.
Riskiest: real state portals vary wildly and are not production-reliable targets for a 48h build (TC-02/TC-06 agents still fail a meaningful fraction of tasks); the card itself scopes the demo to "a mock state portal," which sidesteps this and keeps the core navigate-and-compare loop real.
Verdict: demoable: yes — browser automation against a demo-controlled mock portal is well within reach; only real-portal generalization is left unproven.

### I-2039 Instant Paddle Capture
Core loop: (1) camera tracks numbered paddles in a room; (2) live speech recognition transcribes the auctioneer's call; (3) the two streams fuse to match a paddle number to a called amount; (4) pledge logs instantly with a clip; (5) spotter tablet flags unacknowledged paddles.
Stack: real-time object detection/OCR on paddle numbers `[unverified — no tech card covers live paddle-number recognition]`; streaming ASR (real, e.g. Whisper/Deepgram) for the auctioneer; a fusion/matching layer is custom and unverified.
Riskiest: reliable live paddle-number recognition in variable gala lighting, at a distance, fused correctly with noisy live speech, is a nontrivial CV problem with no cited capability behind it — the idea card marks its own "why now" `[unverified]`. This is a Balanced-track idea, so it must work end-to-end; a scripted, well-lit, few-paddle demo could work, but real gala conditions would break it.
Verdict: demoable: risky — achievable as a narrow, staged demo (good lighting, few paddles, rehearsed calls), but the general claim is unverified and the riskiest part of the whole pipeline.

### I-2045 Same Words, More Life
Core loop: (1) upload a lecture recording; (2) transcribe and identify filler words; (3) re-synthesize speech in the same voice with fillers removed and energy lifted; (4) forced-align new audio to original word timestamps; (5) drop the re-spoken track back onto the original video/slides.
Stack: voice cloning/TTS (ElevenLabs-class, TC-29/TC-38 are real production voice APIs) for re-synthesis; forced alignment (e.g. Montreal Forced Aligner-class tooling) `[unverified for holding exact original timestamps after re-synthesis]`.
Riskiest: the card's own "why now" is marked `[unverified]` — holding exact per-word timing while removing fillers and changing pacing is the hard, novel part of the core AI loop, and this is exactly what must be real for the Novel track. High chance the sync drifts or requires heavy manual correction within 48h.
Verdict: demoable: risky — voice cloning is proven, but frame-accurate resync after content edits is the unverified core loop and the single biggest technical risk.

### I-2053 Summary Reweigh Desk
Core loop: (1) load full claim file (medical records, police report, estimate) plus the AI-written summary into one context window; (2) check each summary sentence against source documents; (3) highlight unsupported sentences; (4) link each flag to the exact contradicting page; (5) adjuster reviews before sign-off.
Stack: a long-context model (Gemini 2.5-class, TC-25, production, 1M tokens, cheap) for the grounding/verification pass; standard prompt-based sentence-to-source attribution.
Riskiest: attribution accuracy (correctly linking a flagged sentence to the right page) needs careful prompting/chunking, but this is ordinary engineering on a real, cited capability, not a blocker.
Verdict: demoable: yes — straightforward long-context grounding task built on a proven capability.

### I-2078 Standing Order Video Brief
Core loop: (1) look up a given judge's published standing order; (2) check the draft filing's citations against it; (3) generate a short script naming the requirements and a pass/fail; (4) narrate it as a short video/voice briefing; (5) attorney reviews before filing.
Stack: TTS narration (ElevenLabs-class, real) over static slides/avatar — the card's "cheap per-second video generation" (Veo3/Sora, TC-35, real but pricier and unnecessary for talking-head narration) is over-specified for what's actually needed; citation-checking via LLM prompt against a stored rule text.
Riskiest: comprehensively tracking every court's standing order and reliably parsing citation-format requirements is a data-acquisition and maintenance problem beyond 48h; a demo with 2-3 canned, pre-loaded judge orders is feasible but the "track every court" product claim is the peripheral fake.
Verdict: demoable: risky — narrated briefing for a couple of canned courts is buildable; broad citation-checking and standing-order coverage is not, and this is a Balanced-track idea that's supposed to work fully end-to-end.

### I-2528 Guardian Accounting Narrator
Core loop: (1) guardian uploads a year of bank statements/receipts; (2) OCR extracts transaction line items; (3) model drafts a plain-English narrative for large transactions; (4) flags entries missing a receipt; (5) formats output onto the court's accounting form.
Stack: Mistral OCR 3 (TC-30, production, $2/1000 pages) for extraction; an LLM for narrative drafting and form-field mapping.
Riskiest: mapping extracted data onto a specific court's PDF form layout reliably; for a demo, one canned court form template is enough, and this is ordinary engineering rather than a capability gap.
Verdict: demoable: yes — both extraction and drafting rest on cited, production-grade capabilities.

### I-2550 Medicaid Renewal Mail Guardian
Core loop: (1) photograph a piece of parent's mail; (2) OCR reads and classifies it as a renewal packet vs. junk mail; (3) extracts deadline and required documents; (4) pre-fills a response from stored family info; (5) surfaces "due in N days, needs X."
Stack: Mistral OCR 3 (TC-30, production, sub-cent/page) for extraction and classification.
Riskiest: reliably distinguishing renewal packets from lookalike mail across states/formats in general use, but a demo with one or two sample packet types is easy to make work.
Verdict: demoable: yes — single, cited OCR capability carries the whole loop; classification scope is the only thing narrowed for the demo.

### I-2584 Home Network Fixer
Core loop: (1) agent runs on a home hub/laptop; (2) reads router logs, channel congestion, and device connection history; (3) an LLM translates the pattern into a plain-English cause; (4) proposes a fix plan; (5) applies the channel-setting fix and keeps monitoring.
Stack: router-specific API/telnet/SNMP access `[unverified — no universal API across consumer router brands]`; an LLM for diagnosis and plain-English translation, which is ordinary and real.
Riskiest: there is no standard way to read logs or push settings across the many consumer router brands/firmwares — this is the kind of access blocker the calibration guidance flags as a real risk, not just build volume. A demo built against one specific, team-owned router with a known API/admin interface is feasible; the "any household's Wi-Fi" claim is not.
Verdict: demoable: risky — works end-to-end for one controlled demo router; the general product needs router-integration work well beyond 48h.

### I-3014 Live Lift Form Coach
Core loop: (1) phone camera tracks joint angles during a lift; (2) a pose-estimation model computes rep-by-rep angle deviations; (3) practice mode reviews a recorded set afterward; (4) live mode fires a glanceable cue ("knees out") mid-rep; (5) replay shows the corrected rep.
Stack: on-device pose estimation (e.g. MediaPipe Pose — mature, widely used, not covered by a tech card but a long-established, reliable stdlib-grade library, effectively production) for joint-angle tracking; simple threshold rules for cueing, no model training needed.
Riskiest: cue accuracy across different body types, camera angles and lighting for general use, but for a scripted demo (one lifter, one camera angle, one exercise) this is well-trodden, reliable technology.
Verdict: demoable: yes — pose-tracking libraries are mature and fast enough for a live, rehearsed demo.

### I-3040 The Adjuster's Alibi
Core loop: (1) re-read the full source claim file alongside the AI summary; (2) link each contested figure to its exact source page/line; (3) render a page-by-page coverage view; (4) compute a per-sentence confidence score; (5) produce a signed audit trail before payout approval.
Stack: long-context model (Gemini 2.5-class, TC-25, production, cheap) for the grounding pass; standard prompt-based citation/confidence scoring.
Riskiest: consistent per-sentence confidence scoring and precise line-level citation require careful prompt/chunking engineering, but nothing here exceeds ordinary engineering on a real, cited capability.
Verdict: demoable: yes — same well-supported pattern as I-2053, built on a proven long-context capability.

### I-3049 AI Feature-Request Reviewer
Core loop: (1) a client's feature request is pasted into a ticket; (2) a coding agent explores the actual repository; (3) returns an estimated build time and risk flag; (4) lists the files it expects to touch; (5) posts two clarifying questions back on the ticket.
Stack: a coding agent (Claude Code / Cursor-class agent, real and production, though the card's "why now" is marked `[unverified]`) with repo read access via a git integration.
Riskiest: estimate calibration (is the time estimate actually good?) is unverifiable in a demo and doesn't need to be — the demo only needs a plausible, grounded-looking output, which coding agents reliably produce today.
Verdict: demoable: yes — repo-aware coding agents are a real, current capability; only estimate quality (not shown in a demo) is unverified.

### I-3088 Vendor Hold-Queue Call Agent
Core loop: (1) voice agent dials support, navigates the IVR tree; (2) states the issue and stays on hold; (3) engages once a human answers; (4) re-checks actual system state rather than trusting the vendor's "resolved" claim; (5) closes the ticket only after independent confirmation.
Stack: ElevenLabs Conversational AI (TC-29, production, hosted voice/LLM/telephony stack) for the call; the "re-check system state" step needs an integration into Dentrix/Cornerstone/PioneerRx, which have no public APIs `[unverified access]`.
Riskiest: verifying the fix against a real practice-management system has no available API — a real access blocker per the calibration guidance. The call-and-hold part is solid; a demo that mocks the "system state check" against a fake dashboard instead of a real PMS is the necessary fake.
Verdict: demoable: risky — the voice-agent call loop is real and production-grade, but the verification half depends on system access the team won't have in 48h.

### I-3517 Vendor Hold-Line Voice Confirmer
Core loop: (1) agent dials vendor support/AP line, navigates IVR; (2) states the exact rejection code and missing field; (3) waits on hold; (4) once resolved, reads back a natural spoken summary and confirmation number; (5) staff never sit through the call.
Stack: ElevenLabs v3 conversational TTS (TC-38, production) for expressive readback; a voice-agent stack (same class as TC-29) for the call and IVR navigation.
Riskiest: real IVR navigation against arbitrary vendor systems is unreliable in general use (no tech card claims high IVR success rates); a demo against a mock IVR/hold-music line is reasonable and keeps the confirmation-readback core loop (the actually novel part) genuine.
Verdict: demoable: risky — buildable against a scripted mock line, but general IVR reliability is the unresolved risk behind the pitch.

### I-3540 Agent Guest List
Core loop: (1) owner picks named shopping-agent platforms from a list; (2) tool issues each a scoped, revocable key to the live product feed; (3) unnamed crawlers are blocked by default; (4) named agent fetches stock live using its key; (5) a log shows exactly who fetched what and when.
Stack: MCP's OAuth-based authorization (TC-09, on a production track) or, more simply, standard scoped API keys — this is ordinary access-control engineering, no exotic capability needed.
Riskiest: none major; the hardest part is UX for key management, which is routine engineering.
Verdict: demoable: yes — a straightforward, well-scoped access-control product on a real, cited protocol.

### I-3572 Appeal Autodraft From Policy
Core loop: (1) pull the denial letter, chart note and payer's published medical policy for the procedure; (2) extract the exact criteria the payer cited; (3) match chart evidence to those criteria; (4) draft an appeal letter quoting the policy back; (5) practice manager reviews and files.
Stack: Mistral OCR 3 (TC-30, production, $2/1000 pages) for document extraction; an LLM for criteria-matching and drafting.
Riskiest: sourcing a real payer's actual published medical policy library is a data-access question, but a demo with one canned policy document is sufficient and realistic.
Verdict: demoable: yes — built on a cited, production OCR capability plus standard LLM drafting.

### I-4026 Ward Accounting Autoscribe
Core loop: (1) guardian forwards receipts/statements/photos as they happen; (2) OCR extracts amounts; (3) categorizes by the court's accounting schedule; (4) assembles a running filing-ready report; (5) flags low-confidence entries for guardian confirmation.
Stack: Mistral OCR 3 (TC-30, production, $1-2/1000 pages) for extraction and classification.
Riskiest: same as I-2528/I-1021 pattern — mapping to a specific court's schedule and handling messy receipts, both ordinary engineering scoped down for a demo.
Verdict: demoable: yes — same well-supported OCR-plus-classification pattern repeated across several ideas in this set.

### I-4032 Medicaid Renewal, Pre-Answered
Core loop: (1) photograph the mailed renewal packet; (2) OCR extracts every required field; (3) matches income/asset figures from a standing account record; (4) shows which source document backs each answer; (5) agent submits through the state portal inside the proxy's logged-in session.
Stack: Mistral OCR 3 (TC-30, production) for extraction; Claude for Chrome (TC-03, production, prompt-injection mitigated to 11.2%) for the actual portal fill-and-submit step.
Riskiest: real state Medicaid portals are heterogeneous and not a reliable automation target within 48h; a demo built against a mocked state portal keeps the extraction-and-fill loop real while sidestepping actual portal fragility.
Verdict: demoable: risky — each piece (OCR, browser agent) is individually a cited, real capability, but chaining OCR-to-browser-submit reliably against a live portal is the compounding risk; a mock portal demo is achievable.

### I-4511 Proof Receipts for Proxy Agents
Core loop: (1) agent proposes a plan and takes a before-snapshot; (2) acts on a portal; (3) revisits the portal's confirmation page and takes an after-screenshot; (4) Nano Banana Pro turns the raw screenshot into a clean, redacted, annotated receipt; (5) receipt files into a per-institution ledger.
Stack: Nano Banana Pro (TC-36, production, $0.15-0.24/image) for image editing/redaction/annotation; a browser agent (TC-06/TC-08 class) for the portal action itself.
Riskiest: reliable automatic redaction (correctly identifying and blacking out sensitive fields without prompting errors) needs careful prompt design, but this is tractable in 48h on a real, cited image-editing API.
Verdict: demoable: yes — the core transform (screenshot to redacted annotated receipt) is a real, cheap, production capability.

### I-4541 PHI-Blind Portal Runner
Core loop: (1) local model reads a chart note on the practice's own machine; (2) extracts only diagnosis/procedure codes, strips identifiers; (3) sends the redacted action script to a cloud browser agent; (4) cloud agent fills and submits the payer portal form; (5) chart note never leaves the building.
Stack: gpt-oss-20b (TC-22, production, open weights, runs on one 16GB workstation) for the local extraction step; a browser agent (TC-06/TC-08) for the cloud-side portal fill.
Riskiest: running a local 20B model plus wiring a two-stage local-to-cloud handoff in 48h is more integration work than a single-service demo, but both halves individually rest on real, cited, production capabilities, so it's ordinary (if broad) engineering, not a capability gap.
Verdict: demoable: yes — every component is a real, production-grade capability per the tech cards; the risk is integration scope, not feasibility.

### I-4553 Attestation Drift Monitor
Core loop: (1) browser agent logs into Entra/M365/RDP consoles using the owner's saved session; (2) checks actual MFA and backup coverage; (3) compares against last year's questionnaire answers; (4) flags every mismatch; (5) drafts the corrected questionnaire with screenshot evidence attached.
Stack: browser-use or Stagehand (TC-06/TC-08, production-adjacent/production) for admin-console navigation and reading; an LLM for comparison and drafting.
Riskiest: navigating real Entra/M365 admin UIs precisely enough to read MFA state reliably; a demo against a team-owned test tenant is realistic and keeps the loop genuine.
Verdict: demoable: yes — built on real, cited browser-agent capability against a controlled test tenant.

### I-6004 Compliance Call Copilot
Core loop: (1) live transcript streams in from browser-based call capture; (2) assistant matches the transcript against a compliance script; (3) surfaces a required disclosure or verify-identity alert when a rule is broken; (4) a trigger phrase pings a supervisor; (5) flagged calls are logged for review.
Stack: streaming speech-to-text (e.g. Deepgram/Whisper-class, real, production) plus an LLM reasoning over the live transcript against a script — the card's own "why now" is marked `[unverified]` on exact latency, but the components themselves are proven and commonly combined.
Riskiest: keeping latency low enough for a "live" feel while reasoning over a growing transcript; the card already scopes the pilot to browser-based call replay rather than live telephony, which removes the hardest integration risk.
Verdict: demoable: yes — well-scoped around known, real speech and LLM components, with telephony integration explicitly deferred.

### I-6015 Routine-Aware Phrase Board
Core loop: (1) board records which phrase a person selects at each time-of-day/location/routine; (2) usage history builds a simple frequency table per context bucket; (3) grid reorders phrases by that context's top picks before navigation starts; (4) no audio/microphone involved; (5) demo switches simulated time and shows the grid reorder.
Stack: plain client-side statistics (frequency counts by time/location bucket) — this needs no AI model at all, just stored usage history and sorting logic.
Riskiest: none of substance; this is closer to a lookup table than an AI system, and is trivially reliable to demo.
Verdict: demoable: yes — simplest idea in the set; a deterministic, ordinary-engineering build with no capability risk.

```json
[
  {"id": "I-1021", "demoable": "risky", "riskiest": "on-device OCR accuracy on scanned receipts is the unverified link in an otherwise real on-device classification loop", "stack": "Chrome built-in AI / Gemini Nano (TC-19) + client-side OCR [unverified]"},
  {"id": "I-1042", "demoable": "risky", "riskiest": "card's own claim of real-time prosody analysis is unverified; only pace/filler heuristics are solidly buildable", "stack": "browser/streaming ASR + rules engine for pace and filler detection"},
  {"id": "I-1062", "demoable": "yes", "riskiest": "'learning' is really a per-vendor rules template, not a trained model, so it breaks on format variation outside the demo", "stack": "Mistral OCR 3 (TC-30) + rules/template store"},
  {"id": "I-1508", "demoable": "yes", "riskiest": "actual payment-release hook into accounting software is not real for the demo; detection logic itself is genuine", "stack": "Gmail/IMAP API + LLM for detection/comparison"},
  {"id": "I-1545", "demoable": "yes", "riskiest": "no real bank actually recognizes this token; legitimacy is faked, but the signing/verification loop itself is real", "stack": "JWT/asymmetric signing (stdlib crypto); MCP authorization (TC-09) and Okta Agent SSO (TC-17) as context"},
  {"id": "I-2020", "demoable": "yes", "riskiest": "real state portals aren't reliable automation targets; demo is explicitly scoped to a mock portal", "stack": "browser-use (TC-06) or Stagehand/Browserbase (TC-08) + LLM diff"},
  {"id": "I-2039", "demoable": "risky", "riskiest": "live paddle-number recognition fused with noisy speech has no cited capability behind it and is marked unverified on its own card", "stack": "real-time object detection/OCR [unverified] + streaming ASR"},
  {"id": "I-2045", "demoable": "risky", "riskiest": "frame-accurate forced alignment after voice resynthesis is the unverified core loop, and must be real for a Novel-track idea", "stack": "ElevenLabs-class voice cloning/TTS (TC-29/TC-38) + forced alignment [unverified]"},
  {"id": "I-2053", "demoable": "yes", "riskiest": "sentence-to-page attribution accuracy needs careful prompting but is ordinary engineering on a proven capability", "stack": "Gemini 2.5-class 1M-token context model (TC-25)"},
  {"id": "I-2078", "demoable": "risky", "riskiest": "comprehensively tracking every court's standing order and citation rules is a data problem beyond 48h; demo needs canned courts", "stack": "TTS narration (ElevenLabs-class) + LLM citation check against stored rule text"},
  {"id": "I-2528", "demoable": "yes", "riskiest": "mapping extracted data onto a specific court form layout is routine engineering, scoped to one canned template for the demo", "stack": "Mistral OCR 3 (TC-30) + LLM drafting"},
  {"id": "I-2550", "demoable": "yes", "riskiest": "distinguishing renewal packets from lookalike mail generally is imperfect but fine for a demo with a couple of sample packet types", "stack": "Mistral OCR 3 (TC-30)"},
  {"id": "I-2584", "demoable": "risky", "riskiest": "no universal API to read logs or push settings across consumer router brands; only a single, team-owned demo router is realistic in 48h", "stack": "router-specific API/admin access [unverified across brands] + LLM diagnosis"},
  {"id": "I-3014", "demoable": "yes", "riskiest": "cue accuracy across body types/angles for general use is unproven, but a scripted single-lifter demo is well within mature pose-tracking capability", "stack": "on-device pose estimation (e.g. MediaPipe Pose) + threshold rules"},
  {"id": "I-3040", "demoable": "yes", "riskiest": "consistent per-sentence confidence scoring and line-level citation needs prompt engineering but no new capability", "stack": "Gemini 2.5-class 1M-token context model (TC-25)"},
  {"id": "I-3049", "demoable": "yes", "riskiest": "estimate calibration quality is unverifiable in a demo but not required for one; repo-aware coding agents are real today", "stack": "repo-aware coding agent (Claude Code/Cursor-class)"},
  {"id": "I-3088", "demoable": "risky", "riskiest": "verifying the fix against real PMS systems (Dentrix/Cornerstone/PioneerRx) has no public API; system-state check must be mocked", "stack": "ElevenLabs Conversational AI (TC-29) + mocked PMS dashboard"},
  {"id": "I-3517", "demoable": "risky", "riskiest": "general IVR navigation reliability against arbitrary vendor phone systems is unproven; demo needs a scripted mock line", "stack": "voice-agent stack (ElevenLabs-class) + ElevenLabs v3 TTS (TC-38)"},
  {"id": "I-3540", "demoable": "yes", "riskiest": "none major; routine access-control engineering on a real, cited protocol", "stack": "MCP OAuth-based authorization (TC-09) or standard scoped API keys"},
  {"id": "I-3572", "demoable": "yes", "riskiest": "sourcing real payer policy libraries is a data-access question, solved for a demo with one canned policy document", "stack": "Mistral OCR 3 (TC-30) + LLM drafting"},
  {"id": "I-4026", "demoable": "yes", "riskiest": "mapping to a specific court's accounting schedule is routine engineering, scoped down for the demo", "stack": "Mistral OCR 3 (TC-30)"},
  {"id": "I-4032", "demoable": "risky", "riskiest": "chaining OCR extraction to a live, reliable state-portal submission compounds risk; a mocked portal demo is the realistic path", "stack": "Mistral OCR 3 (TC-30) + Claude for Chrome (TC-03)"},
  {"id": "I-4511", "demoable": "yes", "riskiest": "automatic redaction accuracy needs careful prompt design but is tractable on a real, cheap image-editing API", "stack": "Nano Banana Pro (TC-36) + browser agent (TC-06/TC-08) for the action itself"},
  {"id": "I-4541", "demoable": "yes", "riskiest": "wiring a two-stage local-to-cloud handoff is broad integration scope, but every component is individually real and production-grade", "stack": "gpt-oss-20b (TC-22) local extraction + browser agent (TC-06/TC-08) for cloud fill"},
  {"id": "I-4553", "demoable": "yes", "riskiest": "precisely reading MFA state from real admin UIs; mitigated by demoing against a team-owned test tenant", "stack": "browser-use/Stagehand (TC-06/TC-08) + LLM comparison"},
  {"id": "I-6004", "demoable": "yes", "riskiest": "keeping reasoning latency low over a growing live transcript; pilot already scoped to call replay, not live telephony", "stack": "streaming ASR (Deepgram/Whisper-class) + LLM script-matching"},
  {"id": "I-6015", "demoable": "yes", "riskiest": "none of substance; deterministic frequency-table logic with no AI model required", "stack": "client-side usage-frequency statistics, no external API"}
]
```
<!-- COMPLETE -->
