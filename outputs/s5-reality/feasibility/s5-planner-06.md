## s5-planner-06 — feasibility

### I-1022 Rejection-Proof Renewal Filer
Core loop: (1) scan/photograph packet (2) OCR extracts fields (3) rules engine checks each field against a rejection-trigger library (signature, SSN format, form version) (4) red/amber/green verdict shown (5) user fixes, re-check flips to green.
Stack: Mistral OCR 3 (TC-30, $2/1k pages) for field extraction; a hand-written rules engine (plain code, no model needed) for the trigger checks; local-only processing for SSN/PII is a design choice, not a named capability — mark "on-device checking" `[unverified]` since no tech card confirms on-device OCR at this accuracy.
Riskiest: the rules library itself — a small hardcoded set (5–10 known triggers) is enough for a convincing demo; a comprehensive one is out of scope for 48h and can be faked by curating the demo packet's defects to match the built rules.
Verdict: demoable: yes — OCR + rule-matching is ordinary engineering, well inside 48h.

### I-1043 Pawn Shop Nightly Police Filer
Core loop: (1) clerk exports day's transactions from POS (2) agent logs into a police/LeadsOnline-style portal (3) enters each transaction line (4) saves a timestamped screenshot per submission (5) audit folder updated.
Stack: Claude Sonnet 4.5 computer use (TC-02, 61.4% OSWorld, production-adjacent) or Skyvern (TC-07, production-adjacent) to drive the portal.
Riskiest: no real police/LeadsOnline portal access is obtainable in 48h; demo must run against a team-built mock portal replicating a typical form. That is standard practice for this class of idea and doesn't undercut the core loop (agent reliably filling a logged-in web form), which is real.
Verdict: demoable: yes — mock portal target, real agent-driven form-fill loop.

### I-1063 Rate-Con Learned From One Build
Core loop: (1) user pastes/builds one completed rate confirmation for a lane (2) system stores it as a persistent few-shot template (3) a new load's raw details arrive (4) LLM drafts the next rate-con by pattern-matching the stored example (5) draft ready to send.
Stack: any long-context LLM (Gemini/Claude/GPT), leaning on cheap long-context inference (TC-25, production) to hold the one example as persistent context.
Riskiest: generalization from a single example to a genuinely different second load; demo should pick a lane/format where the one example transfers cleanly.
Verdict: demoable: yes — one-shot in-context drafting is a proven LLM pattern, easy in 48h.

### I-1514 Commission Gap Photo Reconciler
Core loop: (1) accountant photographs carrier commission statements and matching Epic screens (2) OCR reads both photo sets (3) agent matches policy lines across the two (4) flags any cancellation/commission present in one but missing the other (5) produces a gap memo.
Stack: Mistral OCR 3 (TC-30, production, $2/1k pages, good on tables) for extraction; an LLM for line matching and memo drafting.
Riskiest: photo-quality OCR accuracy and correct line-matching logic on messy real statements; for the demo, use clean staged photos with one planted gap.
Verdict: demoable: yes — OCR+matching is a standard extractor pipeline within 48h.

### I-1555 Same Words, More Life
Core loop: (1) upload lecture audio (2) speech-to-speech model restyles delivery — more expressive, "um"s to pauses — keeping same words and speaker voice, word-aligned to original timing (3) new audio drops onto the existing slide/video track (4) per-section expressiveness slider.
Stack: the card itself marks "expressive speech-to-speech models that restyle delivery while keeping the speaker's words and voice" `[unverified]`. No tech card names a model that does word-timing-preserving audio-to-audio restyle; TC-27 (gpt-realtime) and TC-38 (ElevenLabs v3) are conversational/TTS, not this specific restyle-in-place capability.
Riskiest: the whole premise — a genuine audio-in/audio-out restyle that keeps exact word timing and voice identity is not confirmed to exist as a buildable API. A fallback (STT transcript → expressive TTS re-synthesis with voice cloning) is buildable but breaks the "same audio, precisely re-timed" promise and risks visible drift from slide sync.
Verdict: demoable: risky — core novel-track AI loop rests on an unverified capability; a faked fallback changes what's actually demonstrated.

### I-2023 Local Pawn Report Filer
Core loop: (1) local vision-language model reads POS screen and scanned ID on-device (2) extracted fields shown as evidence before filing (3) local model drives the police portal login/form-fill (4) confirmation screenshot saved locally (5) no data leaves the shop PC.
Stack: card cites gpt-oss-20b (TC-22, production, fits 16GB) for local reasoning, but gpt-oss-20b is text-only — reading a POS screen needs a local *vision* model; UI-TARS-1.5/2 (TC-05, open weights, moving toward production, built for exactly local GUI grounding + action) is the better-fit stack piece and should replace/augment gpt-oss-20b for the screen-reading step.
Riskiest: stitching a fully local vision-read + local-driven form-fill pipeline with no cloud call is more integration work than the card's stack implies; achievable in 48h using UI-TARS but tighter than a cloud-agent version.
Verdict: demoable: yes — local stack exists (TC-05, TC-22), but the card's tech pairing needs correcting.

### I-2040 The Farm's Spoken Map
Core loop: (1) farmer walks a marked path narrating (2) phone records audio + GPS + AR plane anchors (3) system aligns speech to location, extracts layers tagged year/source/confidence (4) advisor exports a dig-safety map (5) voice agent asks later follow-ups.
Stack: on-device/streaming STT (Kyutai TC-31 or Voxtral TC-32) + LLM extraction; native phone AR frameworks (ARKit/ARCore, not a listed tech card, native platform feature) for plane anchors; a separate voice-agent follow-up loop (TC-27/TC-28 class).
Riskiest: AR anchor persistence tied precisely to GPS-narration alignment, plus a working follow-up voice agent, is three nontrivial subsystems for 48h; likely fake the AR anchor persistence with simple GPS-pin overlay rather than true spatial anchoring.
Verdict: demoable: risky — several real subsystems stacked; AR-anchor precision is the piece most likely faked/simplified.

### I-2046 Fabrication Firewall
Core loop: (1) agent extracts every citation from a brief (2) pulls the real opinion text from a case-law database (3) checks holding/quote actually matches (4) keeps a red flag on the exact bad cite until cleared (5) human can override.
Stack: 1M-token context model (TC-25, production, e.g. Gemini 2.5 class) to hold brief + cited opinions; a real, free case-law source (e.g. CourtListener API) for opinion text — not itself a tech card but a known public API, feasible to wire up.
Riskiest: reliably parsing citation formats and fetching the matching opinion text at hackathon speed; a curated demo brief with known real/fake cases keeps this controlled.
Verdict: demoable: yes — core verification loop is real, uses a genuinely available legal database and a production long-context model.

### I-2061 Grounded Notes With Timestamp Citations
Core loop: (1) local speech-to-text transcribes a therapy session (2) local LLM drafts a SOAP note (3) each clinical claim tagged with the transcript timestamp it came from (4) any untagged sentence highlighted (5) clinician verifies/deletes before saving.
Stack: local STT (Kyutai TC-31, ~500ms) + gpt-oss-20b (TC-22, production, fits 16GB) for drafting; a timestamp-attribution step (span matching between draft sentence and transcript) is custom logic, buildable with embeddings or substring alignment.
Riskiest: reliable sentence-to-timestamp attribution without hallucinated grounding; achievable at demo quality with a scripted session and generous matching threshold.
Verdict: demoable: yes — fully local pipeline, all pieces production-grade, ordinary integration effort.

### I-2082 The XML Keeper
Core loop: (1) watch invoice inbox (2) detect structured e-invoice (XRechnung) attachments (3) archive original + human-readable rendering, independent of what staff do to the email (4) if an original is missing, re-fetch it from the vendor's portal.
Stack: standard mailbox API (IMAP/Gmail/Outlook API) for watching + archiving — no AI needed for detection/archiving, just attachment MIME-type filtering; screen agent (Claude for Chrome TC-03, or Skyvern TC-07) only for the re-fetch-from-vendor-portal fallback.
Riskiest: the vendor-portal re-fetch step, since vendor portals vary widely and none is guaranteed accessible in 48h; fake this in the demo with one mock vendor portal, while the (more important) inbox-watch-and-archive path is real and demoable end to end.
Verdict: demoable: yes — the compliance-critical core (catch-before-delete) needs no fragile AI and is easy to build for real.

### I-2529 Dispatch-to-NFIRS Bridge
Core loop: (1) local recorder transcribes radio/crew chatter live during a call (2) extracts address, times, units, actions into structured fields (3) drafts an NFIRS-compatible report (4) officer confirms/edits back at the station.
Stack: open-weight streaming STT (Kyutai TC-31, ~500ms, or Voxtral TC-32) fully local; LLM for structured extraction into fixed fields.
Riskiest: extraction accuracy from noisy real radio audio; demo uses a clean scripted mock dispatch call, which is a fair simplification of periphery, not of the core transcribe→extract loop.
Verdict: demoable: yes — real-time local STT + structured extraction is proven and fast to build.

### I-2559 90-Day Reinstatement Filer
Core loop: (1) photograph Medicaid termination notice (2) OCR pulls case number and termination date (3) system checks state reinstatement rule (4) Skyvern fills the state portal's reinstatement form (5) returns a tracking number.
Stack: Mistral OCR 3 (TC-30, production) for extraction; Skyvern (TC-07, production-adjacent) for the no-API portal fill.
Riskiest: real state Medicaid portals are not obtainable/testable in 48h; demo runs against a team-built mock state portal, standard for this idea class.
Verdict: demoable: yes — OCR extraction is real; portal fill demoed against a mock target, consistent with the balanced-track expectation once the mock stands in for the untestable real site.

### I-2590 Zero-Lag Live Captions
Core loop: (1) continuous mic capture (2) low-cost low-latency model transcribes/captions speech in real time (3) slower model invoked only on unclear audio (4) captions render on phone/glasses with no visible lag.
Stack: Kyutai STT (TC-31, ~500ms, open-weight, self-hostable) or Mistral Voxtral Realtime (TC-32, ~200ms, adjustable 80–1200ms) — both production, both cheap enough to run continuously since self-hosted/open-weight.
Riskiest: sustained low latency on a phone rather than a beefy server; for the demo, run the model on a laptop/edge box rather than the phone itself if needed.
Verdict: demoable: yes — the "cheap enough to run all day" claim is directly backed by named open-weight realtime STT models.

### I-3026 Redaction Relay
Core loop: (1) local model scans a prompt, finds names/SSNs/figures/case facts (2) swaps each for a placeholder token, keeping a local mapping table (3) redacted prompt sent to a cloud model (4) cloud draft returned (5) local step substitutes real values back in using the mapping table.
Stack: local model (gpt-oss-20b, TC-22, production, 16GB) for PII detection, or simpler regex/NER for common patterns (SSNs, dollar figures); deterministic token-substitution for reinsertion (not fuzzy matching, so reliable).
Riskiest: detection recall on less-standard PII (case facts, informal names) — for demo, use a K-1 with clearly-structured fields the detector reliably catches.
Verdict: demoable: yes — the substitution-table design sidesteps the hardest version of the problem (accurate reinsertion is deterministic, not inferred).

### I-3044 Will It Fit? Delivery Check
Core loop: (1) customer photographs front door, stairwell, tightest turn next to a reference card (2) monocular depth model measures each clearance (3) compares against item's boxed dimensions (4) returns green/amber/red with the pinch point flagged.
Stack: the card itself marks "recent monocular depth models return metric-accurate distances from a single photo" `[unverified]`. No tech card names a metric-accurate monocular depth model; general monocular depth models (e.g. Depth Anything-class) exist but aren't confirmed here to reach the accuracy needed to distinguish a fit/no-fit stairwell turn.
Riskiest: metric accuracy without lidar, even with a reference card for scale, is the entire premise and is unverified; a wrong verdict undermines the whole idea.
Verdict: demoable: risky — core capability claim is unverified against the tech cards; the demo may only work on cherry-picked photo angles.

### I-3050 Instant Reflex AI Layer
Core loop: (1) small fast model runs on every keystroke/event (2) flags risky patterns (e.g. hardcoded secret) near-instantly (3) escalates to a slower model only when unsure (4) SDK plugs into any app.
Stack: card marks the "hundreds-of-times-cheaper, sub-50ms" model class `[unverified]`; no tech card confirms this exact economics claim. For the demo's specific example (secret detection), a plain regex/heuristic classifier trivially hits sub-50ms and needs no model at all — that's the honest buildable version.
Riskiest: the generalized "reflex layer for any risk, in any app" pitch is much broader than what's provable in 48h; the demo necessarily narrows to one hardcoded pattern (API-key regex), which is real but doesn't demonstrate the general claim.
Verdict: demoable: risky — the specific demo (secret-in-keystroke) is trivially buildable and real, but it doesn't validate the broader "instant AI reflex for any event" claim the idea rests on.

### I-3091 Spend Governor for Locked-Portal Agent APIs
Core loop: (1) proxy sits between internal agents and each screen-agent-exposed endpoint (2) logs every call and running cost (3) enforces a hard per-session/per-day cap (4) blocks further calls once hit (5) dashboard shows live spend across verticals.
Stack: this is a metering/rate-limiting proxy — ordinary backend engineering (a request counter + cost table + circuit breaker), no AI model needed. It sits in front of already-existing screen-agent APIs (Skyvern TC-07, browser-use TC-06), which the demo can stub with a mock endpoint charging a fixed per-call cost.
Riskiest: nothing AI-risky here; the only risk is scope creep into a full multi-vertical dashboard instead of one demo endpoint.
Verdict: demoable: yes — straightforward end-to-end engineering, well within 48h.

### I-3529 Screen-Side Cite Bailiff
Core loop: (1) agent reads the open document by vision (2) extracts each citation (3) opens a browser tab, searches the citation like a clerk would (4) reads the result (5) e-filing submit stays greyed out until every flag is cleared.
Stack: Claude Sonnet 4.5 computer use (TC-02, 61.4% OSWorld, production-adjacent) for both screen-reading and browser-driving; a real case-law search (e.g. CourtListener, Google Scholar) as the search target.
Riskiest: TC-02 still fails roughly 4 in 10 benchmark tasks — a live demo running the full read→search→verdict loop on stage risks a visible miss; mitigate with a scripted, pre-tested document and citations.
Verdict: demoable: risky — the core loop is real and uses a production-adjacent capability, but computer-use reliability is the named ceiling.

### I-3541 Lay of the Land
Core loop: (1) farmer drives/walks narrating with a phone (2) speech aligned to GPS track (3) map layers extracted, tagged year/source/confidence (4) successors view AR overlays (5) voice agent asks follow-up questions later.
Stack: STT + LLM extraction (same class as I-2040: Kyutai/Voxtral + any LLM); AR overlay rendering (native platform, not a tech card); voice-agent follow-up (TC-27/TC-28 class, production).
Riskiest: same as I-2040 — GPS/speech alignment plus a working AR overlay plus a working follow-up voice agent is three real subsystems; likely the AR-rendering fidelity gets simplified (e.g. 2D map pins instead of full AR) for the demo, which is acceptable since balanced track still needs the core extraction-and-tagging loop to work end to end, and that piece is buildable.
Verdict: demoable: risky — buildable core (transcribe, align, tag, export), but AR/voice-follow-up breadth stretches 48h.

### I-3582 Verification-as-a-Service API for Agents
Core loop: (1) drafting agent POSTs a citation + quoted proposition to an endpoint (2) service checks it against a case-law database (3) returns pass/fail/uncertain (4) caller pays per call over HTTP, no account.
Stack: x402 (TC-15, early production, HTTP 402 micropayments) for per-call payment; same case-law verification logic as I-2046/I-3529 (real DB lookup + LLM check).
Riskiest: x402 is "early production" with usage figures the tech card itself flags `[unverified]`; wiring a testnet-stablecoin payment into a live demo is the extra piece beyond the verification logic itself, but reference implementations exist and are wireable in 48h.
Verdict: demoable: yes — core verification loop is real (shared with I-2046), and x402 is a real if young protocol with available client libraries.

### I-4027 Fire Incident Report Reconstructor
Core loop: (1) after a call, officer talks through what happened (2) transcribed alongside dispatch audio log (3) agent fills addresses/times/units it can already infer (4) drafts the structured incident report (5) officer reviews and submits.
Stack: open-weight streaming STT (Kyutai TC-31, ~500ms, local) + LLM structured extraction — same stack as I-2529, applied to a spoken recap instead of live radio.
Riskiest: minimal beyond transcription accuracy on a scripted recap; low technical risk.
Verdict: demoable: yes — real-time local STT + structured drafting, proven pattern, easy in 48h.

### I-4033 Overnight Prior-Auth Autopilot
Core loop: (1) staff queue PA requests with patient/procedure data during the day (2) overnight, agent logs into each payer portal (3) fills forms, uploads attachments (4) leaves a morning report of confirmations/rejections/items needing a human.
Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent, can hold multi-step tasks 30+ hours).
Riskiest: real payer portals (Availity, individual insurer sites) require credentials/MFA/CAPTCHA the team cannot obtain in 48h — genuinely unavailable access, the kind context.md calls a real blocker. The demo must substitute mock payer portals built by the team; the agent's overnight multi-portal navigation loop itself is real and the named capability (TC-02) is production-adjacent enough to trust for a scripted 5-item run.
Verdict: demoable: risky — core screen-agent loop is real, but "across all payer portals" is unattainable; demo necessarily narrows to mock portals, undercutting the pitch's breadth.

### I-4513 Authorization Passport for Proxy Agents
Core loop: (1) family uploads POA/CMS-1696 scan (2) system renders it into a normalized, tamper-evident visual badge naming scope/expiry (3) agent hits a "prove authority" wall on a site (4) badge is presented (5) site/agent platform accepts it and proceeds.
Stack: Nano Banana Pro (TC-36, production, Gemini image editing/generation) for turning messy scans into a clean badge image.
Riskiest: no real bank/institution will actually accept this badge in 48h — that acceptance step is inherently faked (mock bank site), which is appropriate since it's peripheral; the core AI loop (real image transform from scan to clean credential) is genuinely buildable with TC-36.
Verdict: demoable: yes — core novel-track loop (scan-to-badge) is real; institutional acceptance is the explicitly faked periphery.

### I-4545 Medicaid Renewal Autopilot
Core loop: (1) proxy links state Medicaid account (2) agent checks the portal on a schedule (3) recognizes a renewal packet the moment it posts (4) pre-fills answers from last year's file (5) submits, pings proxy to confirm/sign.
Stack: Claude for Chrome (TC-03, production, bundled with subscription) or Skyvern (TC-07, production-adjacent) for the authenticated portal session.
Riskiest: real state Medicaid portals aren't accessible/testable in 48h; demo uses a mock state portal, matching the convention across this batch's portal-filing ideas (I-1043, I-2559). Scheduled recognition-of-new-packet logic is simple polling/diffing, low risk.
Verdict: demoable: yes — mock portal target, real agent-driven detect-and-fill loop.

### I-4563 Foreign-Invoice Autopilot
Core loop: (1) drop a vendor invoice in any language (2) OCR extracts vendor/amount/currency/tax/line items (3) LLM maps fields to the ledger's chart of accounts (4) posts a draft entry (5) one-tap approval.
Stack: Mistral OCR 3 (TC-30, production, $1–2/1k pages, handles multilingual scripts and tables) + an LLM for chart-of-accounts mapping.
Riskiest: mapping accuracy across unfamiliar vendors/currencies; demo uses two well-formed sample invoices (Ukrainian, French) as the card describes, which is a fair, controlled showcase.
Verdict: demoable: yes — extractor pipeline is standard and the named OCR model is production-grade for this exact use.

### I-6005 Continuous Red-Team for Support Agents
Core loop: (1) client sets approved targets/limits (2) engine runs LLM-generated persuasion conversations against the client's support agent (3) detects failures (e.g. an unwarranted refund approved) (4) returns a guardrail fix (5) automatic retest confirms the fix holds.
Stack: any capable LLM to generate multi-turn persuasion attacks; a target chatbot (built by the team as a stand-in "client support agent" for the demo) with a simple detector (e.g. regex/classifier on "refund approved" in the transcript) for pass/fail; fix = a prompt-guardrail patch applied and retested.
Riskiest: building a semi-realistic target support bot with an exploitable refund-approval bug, in-world, is peripheral setup rather than the core loop; the core attack-generate → detect-failure → patch → retest loop is real and straightforward LLM engineering.
Verdict: demoable: yes — self-contained, no external dependency, core loop is genuinely testable within 48h.

### I-6019 Personal Snippet Recall for Coding
Core loop: (1) editor plugin reads current file's imports/function names/comments as context (2) ranks the developer's saved snippet library by relevance (3) shows top matches inline (4) developer inserts, edits, or ignores.
Stack: semantic embeddings (any standard embedding model/API) for similarity ranking; a lightweight editor extension (VS Code API) for the inline UI — both are proven, unremarkable capabilities, not tied to any specific tech card.
Riskiest: minimal — nearest-neighbor embedding search against a small personal snippet set is a solved problem; the card's "[unverified]" tags are about the pain evidence, not the technical approach.
Verdict: demoable: yes — ordinary embeddings + editor plugin, easy in 48h.

```json
[
  {"id": "I-1022", "demoable": "yes", "riskiest": "comprehensive rejection-rule library; demo curates a small hardcoded set", "stack": "Mistral OCR 3 (TC-30) + custom rules engine"},
  {"id": "I-1043", "demoable": "yes", "riskiest": "no real police/LeadsOnline portal access; demo uses a mock portal", "stack": "Claude Sonnet 4.5 computer use (TC-02) or Skyvern (TC-07)"},
  {"id": "I-1063", "demoable": "yes", "riskiest": "one-shot generalization to a different second load", "stack": "long-context LLM (TC-25)"},
  {"id": "I-1514", "demoable": "yes", "riskiest": "photo-quality OCR and line-matching accuracy on messy statements", "stack": "Mistral OCR 3 (TC-30) + LLM matcher"},
  {"id": "I-1555", "demoable": "risky", "riskiest": "word-timing-preserving audio-to-audio restyle is an unverified capability with no matching tech card", "stack": "unverified speech-to-speech restyle model [unverified]; fallback STT + expressive TTS (TC-27/TC-38 class)"},
  {"id": "I-2023", "demoable": "yes", "riskiest": "stitching a fully local vision-read + local-driven form-fill pipeline with no cloud call", "stack": "UI-TARS (TC-05) for local screen-read/drive + gpt-oss-20b (TC-22) for reasoning"},
  {"id": "I-2040", "demoable": "risky", "riskiest": "AR anchor persistence tied precisely to GPS-narration alignment, plus a working follow-up voice agent", "stack": "Kyutai/Voxtral STT (TC-31/TC-32) + LLM extraction + native AR (unlisted) + voice agent (TC-27/TC-28)"},
  {"id": "I-2046", "demoable": "yes", "riskiest": "parsing citation formats and fetching matching opinion text fast enough", "stack": "1M-token context LLM (TC-25) + real case-law API (e.g. CourtListener)"},
  {"id": "I-2061", "demoable": "yes", "riskiest": "reliable sentence-to-timestamp attribution without hallucinated grounding", "stack": "Kyutai STT (TC-31) + gpt-oss-20b (TC-22), fully local"},
  {"id": "I-2082", "demoable": "yes", "riskiest": "vendor-portal re-fetch step for missing originals is faked with one mock portal", "stack": "mailbox API (IMAP/Gmail) + Claude for Chrome (TC-03) or Skyvern (TC-07) for re-fetch"},
  {"id": "I-2529", "demoable": "yes", "riskiest": "extraction accuracy from noisy real radio audio; demo uses clean scripted audio", "stack": "Kyutai STT (TC-31) or Voxtral (TC-32) + LLM extraction, local"},
  {"id": "I-2559", "demoable": "yes", "riskiest": "no real state Medicaid portal access in 48h; demo uses a mock portal", "stack": "Mistral OCR 3 (TC-30) + Skyvern (TC-07)"},
  {"id": "I-2590", "demoable": "yes", "riskiest": "sustained low latency on-device on an actual phone vs. a laptop demo rig", "stack": "Kyutai STT (TC-31) or Mistral Voxtral Realtime (TC-32)"},
  {"id": "I-3026", "demoable": "yes", "riskiest": "PII detection recall on informal/unstructured facts", "stack": "gpt-oss-20b (TC-22) local redaction + deterministic token substitution + any cloud LLM"},
  {"id": "I-3044", "demoable": "risky", "riskiest": "metric-accurate monocular depth from a single photo is unverified against the tech cards", "stack": "monocular depth model [unverified]"},
  {"id": "I-3050", "demoable": "risky", "riskiest": "the sub-50ms hundreds-of-times-cheaper model class is unverified; demo narrows to one regex-detectable pattern, not the general claim", "stack": "small/distilled model [unverified], or plain regex heuristic for the demoed case"},
  {"id": "I-3091", "demoable": "yes", "riskiest": "none AI-specific; scope creep into a full multi-vertical dashboard", "stack": "backend metering proxy (no model needed) in front of Skyvern/browser-use (TC-07/TC-06) endpoints"},
  {"id": "I-3529", "demoable": "risky", "riskiest": "computer-use agent still fails ~4 in 10 benchmark tasks; live on-stage run could miss", "stack": "Claude Sonnet 4.5 computer use (TC-02) + real case-law search"},
  {"id": "I-3541", "demoable": "risky", "riskiest": "GPS/speech alignment plus AR overlay plus follow-up voice agent is three subsystems for 48h", "stack": "Kyutai/Voxtral STT (TC-31/TC-32) + LLM extraction + native AR (unlisted) + voice agent (TC-27/TC-28)"},
  {"id": "I-3582", "demoable": "yes", "riskiest": "x402 is early production with unverified usage figures; wiring payment into the demo is extra work", "stack": "x402 (TC-15) + case-law verification logic shared with I-2046"},
  {"id": "I-4027", "demoable": "yes", "riskiest": "transcription accuracy on a scripted recap; low risk", "stack": "Kyutai STT (TC-31) + LLM structured extraction, local"},
  {"id": "I-4033", "demoable": "risky", "riskiest": "real payer portals require credentials/MFA the team can't obtain in 48h; demo narrows to mock portals", "stack": "Claude Sonnet 4.5 computer use (TC-02)"},
  {"id": "I-4513", "demoable": "yes", "riskiest": "institutional acceptance of the badge is entirely faked (mock bank site), by design a peripheral fake", "stack": "Nano Banana Pro (TC-36)"},
  {"id": "I-4545", "demoable": "yes", "riskiest": "no real state Medicaid portal access; demo uses a mock portal, per convention in this batch", "stack": "Claude for Chrome (TC-03) or Skyvern (TC-07)"},
  {"id": "I-4563", "demoable": "yes", "riskiest": "chart-of-accounts mapping accuracy across unfamiliar vendors", "stack": "Mistral OCR 3 (TC-30) + LLM mapping"},
  {"id": "I-6005", "demoable": "yes", "riskiest": "building a realistic exploitable target support bot is peripheral setup, not the core loop", "stack": "LLM-generated persuasion attacks + a team-built target chatbot + simple pass/fail detector"},
  {"id": "I-6019", "demoable": "yes", "riskiest": "minimal; solved problem at this scale", "stack": "embeddings similarity search + VS Code extension API"}
]
```
<!-- COMPLETE -->
