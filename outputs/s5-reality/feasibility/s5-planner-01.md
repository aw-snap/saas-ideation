# Feasibility — s5-planner-01

### I-1001 Independent Completion Witness
- Core loop: (1) primary agent claims a portal task done (2) witness agent re-navigates the same target live (3) witness compares screen/confirmation state against the claim (4) witness issues a signed pass/fail verdict (5) verdict is logged/returned.
- Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent, 61.4% OSWorld) for both agents; simple diff/compare logic; a signing step is trivial crypto, stdlib.
- Riskiest: computer-use only succeeds ~6 in 10 times, so the witness itself can misjudge a real portal. Fake in demo: use one scripted portal (a form the team builds) with a seeded false-completion case, not an arbitrary live site.
- Verdict: demoable: risky — core AI loop (re-check via computer use) is real and on-track tech, but computer-use reliability on arbitrary real portals is the acknowledged weak point; scoping to one staged portal makes the 48h demo work.

### I-1023 Elder Account Diagnostic Copilot
- Core loop: (1) proxy types a plain-language concern (2) agent reads linked/imported statement data (3) agent surfaces the specific transactions behind the concern (4) agent proposes one action with an undo (5) proxy approves or cancels.
- Stack: any frontier LLM for transaction analysis and NL explanation; a bank-statement CSV/Plaid-style mock feed; on-device processing is not on a tech card — mark `[unverified]` as a hard requirement, but a cloud LLM over the same mock data works just as well for the demo.
- Riskiest: "on-device" is unverified as literally necessary; real fraud detection generalization is hard, but the demo only needs one seeded duplicate-charge scenario. Fake: pre-built mock statement data with a planted anomaly.
- Verdict: demoable: yes — straightforward LLM-over-structured-data task with a scripted demo scenario, full loop can run end to end.

### I-1047 Post-Call Voice Debrief Report Drafter
- Core loop: (1) officer speaks a recap (2) speech-to-speech agent asks standard follow-ups (3) agent pulls prior address/unit history from a local incident DB (4) agent fills the structured report (5) officer approves with one tap.
- Stack: OpenAI gpt-realtime (TC-27, production) or Gemini Live (TC-28, production) for the voice interview; a small seeded incident-history DB; form-fill logic via function calling.
- Riskiest: mapping free-form speech to every required NFIRS-style field reliably; can be narrowed to a fixed demo script covering the fields shown. Nothing needs to be faked beyond using a scripted interview instead of open-ended chaos.
- Verdict: demoable: yes — realtime speech-to-speech with function calling is production-grade and this is a bounded structured-extraction task.

### I-1070 Screen API for Legacy PM Systems
- Core loop: (1) external agent calls a tool endpoint (e.g. get_claim_status) (2) local computer-use worker opens the legacy desktop billing app (3) worker clicks through screens to find the data (4) worker returns structured JSON or confirms a write (5) result is metered and billed.
- Stack: Claude Sonnet 4.5 computer use (TC-02) as the desktop worker; MCP registry pattern (TC-11) for tool discovery; a metering/billing shim is ordinary CRUD.
- Riskiest: no real legacy PM software (Dentrix-class) is obtainable in 48h; the team must build a lookalike desktop UI to automate against, which is fine but means the demo proves the pattern, not integration with an actual named legacy system.
- Verdict: demoable: risky — the computer-use loop is real and buildable, but "legacy system" access is faked with an in-house mock, so the demo shows the mechanism rather than the claimed integration.

### I-1516 Console-Checked Cyber Insurance Answers
- Core loop: (1) agent logs into the owner's already-authenticated M365/Google Admin/Entra session (2) agent checks each control the questionnaire asks about (3) agent drafts an answer with a screenshot citation (4) agent flags gaps before submission (5) owner reviews and submits.
- Stack: Claude for Chrome (TC-03, production) as the in-browser agent; a fixed checklist of ~10-15 demo questions rather than the full 60-150.
- Riskiest: getting real test tenants (M365 + Google Admin + Entra) configured with interesting misconfigurations in time; scope to one test tenant with two-three planted gaps for the live demo.
- Verdict: demoable: yes — TC-03 is production and already does exactly this class of task inside a real logged-in session; the team just needs a prepared test tenant.

### I-1564 Draft From Case Files, Offline
- Core loop: (1) lawyer loads a case file folder into a local app (2) wifi is disabled (3) an open-weight model drafts a motion/letter locally (4) draft matches the firm's template (5) lawyer reviews with zero network calls made.
- Stack: gpt-oss-20b (TC-22, production, fits 16GB) via Ollama/llama.cpp (TC-26, production) for fully local inference.
- Riskiest: draft quality from a 20B open model versus frontier cloud models on nuanced legal drafting; acceptable for a demo since only one sample motion needs to look credible.
- Verdict: demoable: yes — every named component (TC-22, TC-26) is production-grade and the whole loop runs locally with no external dependency risk.

### I-2026 Fire Incident On-Device Scribe
- Core loop: (1) officer speaks a recap offline (2) local STT transcribes on-device (3) local reasoning model fills required incident fields (4) a local screen-driving agent submits to the reporting portal once connectivity returns (5) confirmation is shown.
- Stack: Kyutai STT (TC-31, production-capable, self-hosted, ~500ms) for transcription; a local LLM (e.g. gpt-oss-20b, TC-22) for field-filling; a computer-use-style local agent for the portal submit step.
- Riskiest: chaining three separately-real local components (STT, LLM, screen agent) into one working offline-to-online pipeline is a lot of integration for 48h, and the actual reporting portal isn't available to test against; must mock the portal UI.
- Verdict: demoable: risky — each piece is individually buildable and production-grade, but full three-stage local pipeline plus a mocked portal is a tight fit for 48h under the Balanced track's full-end-to-end bar.

### I-2041 Live Delivery Coach for Interviews
- Core loop: (1) browser extension captures only the candidate's tab audio (2) streaming ASR transcribes in real time (3) pace/filler-word logic flags issues live as a glanceable nudge (4) after the call, a replay timeline marks fixes (5) practice mode reruns the same engine.
- Stack: browser-native SpeechRecognition/streaming ASR — not on a tech card, the card itself already flags this `[unverified]`; simple rate/filler-word heuristics are stdlib-level logic, no ML needed for that part.
- Riskiest: the card's own claim of sub-300ms in-browser streaming ASR is unverified; if native browser ASR is too laggy or inaccurate, fall back to a cloud streaming ASR API for the demo (adds a small latency risk but still workable).
- Verdict: demoable: yes — worst case swap browser ASR for a cloud streaming speech API; the coaching logic itself is simple and reliable.

### I-2047 Opposing Brief Sweep
- Core loop: (1) upload the opposing brief (2) extract every citation (3) verify each against real case text via a case-law lookup (4) flag non-matching/fabricated citations (5) auto-draft a motion-ready exhibit table.
- Stack: long-context LLM (TC-25 class) for extraction and drafting; a real citation-verification source such as CourtListener/Free Law Project's public API for ground truth (not on the tech cards — mark `[unverified]` as to exact API terms, but it is a real, existing public service).
- Riskiest: getting reliable ground-truth case text lookups is the crux — an LLM alone re-hallucinating a "verification" would defeat the product's premise. Demo should hit a real external case-law API, not model-only judgment.
- Verdict: demoable: yes — feasible in 48h using a public case-law API for the verification step, which keeps the core AI loop genuinely grounded rather than faked.

### I-2063 Vendor-Diligence-in-a-Box
- Core loop: (1) point the tool at a folder of vendor terms-of-service documents (2) long-context model reads the full stack (3) flags clauses that fail confidentiality/bar rules (4) drafts a matching consent form per vendor (5) assembles a ready-to-sign security plan.
- Stack: any 1M-token-context model (TC-25) for single-pass document reading and drafting.
- Riskiest: legal-accuracy of "fails bar/IRS duties" flags is a domain-knowledge risk, not a technical one; fine for a demo with a few planted problem clauses.
- Verdict: demoable: yes — pure long-context extraction and drafting, no exotic capability required.

### I-2514 E&O Broker's Citation Shield
- Core loop: (1) install locally on the firm's hardware (2) before filing, extract citations from a brief (3) check each against a locally cached case-law index (4) flag fabrications (5) only an aggregate risk score is sent to the broker's dashboard.
- Stack: gpt-oss-20b (TC-22, production, 16GB) for local reasoning; a "locally cached case-law index" is the hard part — no tech card covers bulk offline case-law caching.
- Riskiest: building any usable local case-law corpus in 48h is real data-acquisition work, not just model capability. Fake/scope in demo: pre-load a small hand-picked set of real opinions (a few dozen) rather than a full jurisdiction-wide index.
- Verdict: demoable: risky — the local-model matching loop is real, but the "locally cached case-law index" claim only survives the demo at toy scale, not the pitched scope.

### I-2536 AI PC optimiser and fixer
- Core loop: (1) user describes the problem in plain words (2) agent reads real machine state (startup apps, logs, drivers, disk) (3) agent shows evidence and proposes a fix plan (4) user approves (5) agent takes a restore point, applies the fix, offers undo.
- Stack: any LLM for NL explanation; Windows system APIs/PowerShell for reading logs and creating restore points — ordinary OS tooling, no exotic AI capability needed.
- Riskiest: breadth of "any PC problem" is large, but the demo only needs one staged, deliberately-slowed machine with a known cause (e.g. a bloated startup list).
- Verdict: demoable: yes — mostly conventional systems engineering plus an LLM narration layer; restore point and undo are native Windows features.

### I-2566 Metered Careers Feed for Job Agents
- Core loop: (1) an unrecognized crawler hits the careers page (2) plugin returns HTTP 402 with a price (3) a verified agent pays via x402 (4) plugin serves a clean structured JSON feed (5) payment settles.
- Stack: x402 (TC-15, early production, stablecoin rail) with its published SDK/middleware; a simple JSON feed generator from the site's existing listings.
- Riskiest: x402 is "early production" with usage figures the tech card itself calls unverified; wiring a real testnet payment end to end in 48h is achievable but tight, since it's a genuinely new protocol the team hasn't used before.
- Verdict: demoable: risky — the mechanism is real and has SDKs, but as an early-production rail with unfamiliar tooling it's a plausible source of 48h friction; a testnet/sandbox flow should be scoped in advance.

### I-2591 The Mandate Gate
- Core loop: (1) an invoice arrives for payment (2) before signing an AP2 mandate, cross-check invoice line items/amount/bank details against the PO and invoice history (3) mismatches hold the mandate (4) match routes to a human (5) match confirms and signs.
- Stack: AP2 (TC-13, production partners onboarding, real transactions limited) for the mandate schema/flow; ordinary LLM or rule-based matching for the invoice-vs-PO check.
- Riskiest: AP2 real-transaction volume is limited per the tech card, so a live AP2 partner integration is unlikely to be obtainable in 48h; the mandate object and signing flow can be mocked against the published protocol spec instead.
- Verdict: demoable: yes — the actual value-add (invoice/PO mismatch detection) is ordinary matching logic; AP2 mandate objects can be constructed to spec without a live payment partner for a credible demo.

### I-3028 Per-Vendor Consent Autopilot
- Core loop: (1) preparer lists the AI vendors they use (2) tool drafts required plain-language consent text per vendor (3) routes for e-signature per client (4) blocks sending client data to any vendor without a current signed record (5) local watcher flags files missing consent.
- Stack: any LLM for drafting per-vendor consent language; an e-signature step can be a stub/mock for the demo (e.g. a signed-record flag) rather than a real e-sign vendor integration.
- Riskiest: none technically hard — the only friction is legal-accuracy of §7216 language, acceptable to caveat in a demo.
- Verdict: demoable: yes — straightforward drafting plus a rules-based block/allow gate, e-signature can be simulated.

### I-3045 Spotter for Paddle Raises
- Core loop: (1) camera watches the paddle section (2) real-time multimodal model hears the auctioneer's call and sees paddles rise (3) it logs each pledge at the right level (4) a spotter tablet flags unacknowledged paddles (5) pledges post to the gala platform with a clip.
- Stack: a real-time multimodal model fusing audio+video is flagged `[unverified]` by the card itself; closest real capability is a live video/audio model (e.g. Gemini Live, TC-28) used for scene description, but continuous multi-paddle number recognition at ballroom scale is not demonstrated on any tech card.
- Riskiest: reliable simultaneous multi-object (paddle number) recognition plus speech fusion in a live noisy room is a hard, unproven vision problem for this stack, not just an integration task.
- Verdict: demoable: risky — for a 48h demo, scope to one camera angle, high-contrast markers, and a short scripted mock auction rather than a real noisy ballroom; the live-room claim itself stays unverified.

### I-3051 Same Words, More Life
- Core loop: (1) upload a monotone lecture clip (2) speech-to-speech model reshapes pitch/energy (3) filler words are replaced with clean pauses (4) word-level timing is preserved exactly (5) output drops onto the original slide/video sync.
- Stack: the card's own "why now" is marked `[unverified]` — expressive voice-conversion with guaranteed exact word-level timing preservation is not confirmed on any tech card; ElevenLabs v3 (TC-38) does expressive TTS/generation, not documented prosody-conversion-with-locked-timing.
- Riskiest: the core claimed capability (reshape delivery while preserving exact original timing) is unverified and may not exist as described; this is the core AI loop itself, not a peripheral part.
- Verdict: demoable: risky — Novel track requires the core loop to really work; here the core capability claim is unverified, so the team should prototype the timing-preservation step first before committing, or narrow the claim to "approximately synced" rather than exact.

### I-3093 Privileged Cite Bench
- Core loop: (1) local model reads a draft brief (2) reads a locally cached case-law corpus (3) checks each citation's holding/quote against the real opinion (4) shows case text as evidence next to any unconfirmed citation (5) nothing leaves the device.
- Stack: gpt-oss-20b (TC-22, production, 16GB laptop) for local reasoning; local vector/text search over cached opinions — same "locally cached case-law corpus" gap as I-2514, not covered by any tech card.
- Riskiest: same as I-2514 — building any real local case-law corpus in 48h is a data-acquisition task; scope down to a small hand-picked demo corpus (a few dozen real opinions) rather than a broad index.
- Verdict: demoable: risky — the local-only matching loop is real and buildable, but only demonstrable at toy corpus scale in 48h.

### I-3530 Report Reply Guard
- Core loop: (1) agent watches the issue tracker for new reports (2) opens each issue and checks out the referenced commit (3) attempts the described exploit in a disposable sandbox (4) drafts a close-as-invalid or escalate reply (5) draft sits queued until the maintainer clicks send.
- Stack: browser-use (TC-06, production-adjacent) to drive the tracker UI; sandboxed exploit reproduction is the hard part — no tech card covers general-purpose automated exploit reproduction, this is a hard open research problem.
- Riskiest: the core AI loop *is* "attempt the exploit," which is not reliably automatable across arbitrary reports; Novel track requires this core loop to be genuinely real, not scripted.
- Verdict: demoable: risky — feasible only if scoped to one pre-selected repo and one pre-verified real/fake report pair so the sandbox attempt is a known-working case, not a general capability; presented as general-purpose it overstates what's provably buildable in 48h.

### I-3542 Lab Result Relay for Vet SoRs
- Core loop: (1) desktop agent watches the lab machine's output folder and IDEXX portal (2) extracts each new result (3) drives Cornerstone's own screens to file it (4) pings the tech when filing is done (5) tech reviews.
- Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent) for screen-driving; a filesystem watcher is stdlib.
- Riskiest: no real Cornerstone install or IDEXX portal access in 48h; must build a lookalike mock UI to automate against.
- Verdict: demoable: yes — the automation pattern is real and narrow (single filing task), fully workable end to end against a team-built mock UI that stands in for Cornerstone.

### I-4001 Migration Guardian for Practice Switches
- Core loop: (1) office exports patient/appointment/imaging lists from both systems as CSV/PDF (2) tool reads both in one pass (3) matches every record by name/DOB/chart number (4) produces a discrepancy report ranked by risk (5) office reviews before go-live.
- Stack: long-context model (TC-25) for single-pass comparison, or plain deterministic matching code for most of it (name/DOB/ID matching is arguably stdlib-level, LLM adds fuzzy-match value).
- Riskiest: none major — this is a bounded data-reconciliation task with sample CSVs.
- Verdict: demoable: yes — straightforward and fully buildable end to end with synthetic sample rosters.

### I-4028 The Portable Proxy Badge
- Core loop: (1) proxy uploads authorization documents once (2) inside their logged-in session, agent visits an institution site (3) finds that site's specific verification step (4) attaches matching proof and fills the site's own form (5) keeps a dated log of accept/reject per site.
- Stack: Claude for Chrome (TC-03, production) operating inside a real logged-in session.
- Riskiest: reliably finding and correctly filling arbitrary, differently-shaped forms across many real institution sites is open-ended; demo should scope to one or two real sites with a prepared form, not "any institution."
- Verdict: demoable: risky — TC-03 makes the mechanism real, but breadth-of-site generalization claimed in the pitch exceeds what can be proven in 48h; narrow the live demo to 1-2 real sites.

### I-4051 DMS Ransomware Shadow Continuity
- Core loop: (1) computer-use agent logs in each shift like staff (2) reads inventory/deal/service screens (3) writes a structured shadow copy to a local DB (4) DMS goes down (5) staff query the shadow interface instantly, then it resyncs.
- Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent, 30+ hour multi-step tasks) for continuous mirroring; local DB is ordinary engineering.
- Riskiest: real CDK/Reynolds DMS access is proprietary, expensive, and not obtainable in 48h — this is exactly the "data or access the team can't get" blocker the context doc calls out. Must fake with a team-built lookalike DMS UI.
- Verdict: demoable: risky — the mirroring mechanism is real and buildable, but the demo necessarily runs against a mock DMS, not the named real systems, so the pitch's specific claim (CDK/Reynolds) isn't what's actually proven.

### I-4519 Spotter: Paddle-Raise Vision
- Core loop: (1) room-facing cameras track paddles with printed markers (2) speech recognition hears the auctioneer's call (3) vision and speech fuse to log each pledge instantly (4) spotter tablets flag unacknowledged paddles (5) pledges post to the gala platform.
- Stack: same gap as I-3045 — real-time multi-camera vision fused with live speech, marked `[unverified]` by the card itself; no tech card confirms this exact fused capability at ballroom scale.
- Riskiest: multi-camera, multi-paddle, noisy-room fusion is a genuinely hard live vision problem, and this is Balanced track (everything must work end to end, no core-loop exception).
- Verdict: demoable: risky — buildable at small scale (one camera, few markers, quiet room, scripted calls) but the pitched live-ballroom scenario is a stretch for 48h under the Balanced bar.

### I-4546 72-Hour Appeal Sprint
- Core loop: (1) user photographs the denial letter (2) OCR extracts denial reason and plan criteria (3) agent drafts an appeal citing the plan's coverage rules (4) agent submits via the plan's portal (5) agent independently revisits the status page to confirm a real filing ID.
- Stack: Mistral OCR 3 (TC-30, production) for the letter; Skyvern (TC-07, production-adjacent) for portal filing and revisit-to-confirm.
- Riskiest: no real Medicare Advantage plan portal credentials available in 48h; must build a mock appeal portal for Skyvern to file into.
- Verdict: demoable: yes — every component (TC-30, TC-07) is production-grade, and the "revisit to confirm" verification step is genuinely real automation, workable end to end against a team-built mock portal.

### I-4570 Ask-Once VAT Explainer Draft
- Core loop: (1) an invoice hits an unfamiliar VAT scenario (2) agent detects the new country/reverse-charge/mixed-rate pattern (3) agent drafts a short plain-language explanation (4) agent suggests a journal entry (5) freelancer forwards the paragraph to their accountant.
- Stack: any current LLM with EU VAT knowledge in-context or via retrieval; no exotic capability needed, this reads more like a Balanced-grade task despite its "novel" label.
- Riskiest: factual VAT accuracy is a domain risk, not a build risk; fine for a demo with 2-3 pre-picked scenarios.
- Verdict: demoable: yes — plain LLM drafting task, low technical risk, fully workable in 48h.

### I-6006 AAC Phrase Ranking Companion
- Core loop: (1) import the user's phrase bank as a standard export file (2) listen to the conversation partner's words (3) rank the user's own approved phrases by relevance (4) surface a few at top (5) listening can be switched off anytime.
- Stack: on-device STT (e.g. Kyutai, TC-31, or a phone/tablet's built-in speech recognizer) plus text-embedding similarity ranking — embedding-based ranking is standard, well-supported tooling even though "on-device" specifically is marked `[unverified]` by the card.
- Riskiest: low — worst case, swap on-device STT for a cloud ASR call for the demo; ranking logic itself is simple and reliable.
- Verdict: demoable: yes — bounded scope (import file, transcribe, rank, surface), all pieces are either production tech or ordinary engineering.

```json
[{"id": "I-1001", "demoable": "risky", "riskiest": "computer-use only succeeds ~61% on OSWorld so the witness agent can misjudge a real portal", "stack": "Claude Sonnet 4.5 computer use (TC-02) for both primary and witness agents; stdlib diff/compare and signing"},
{"id": "I-1023", "demoable": "yes", "riskiest": "on-device claim is unverified as a hard requirement; general fraud detection is hard but demo only needs one seeded anomaly", "stack": "frontier LLM over mock bank-statement/Plaid-style data; on-device processing [unverified]"},
{"id": "I-1047", "demoable": "yes", "riskiest": "mapping free-form speech reliably to every structured field; mitigated with a scripted interview", "stack": "OpenAI gpt-realtime (TC-27) or Gemini Live (TC-28), function calling for form-fill, seeded incident-history DB"},
{"id": "I-1070", "demoable": "risky", "riskiest": "no real legacy PM software obtainable in 48h; demo runs against a team-built lookalike desktop UI", "stack": "Claude Sonnet 4.5 computer use (TC-02); MCP registry pattern (TC-11); ordinary metering/billing"},
{"id": "I-1516", "demoable": "yes", "riskiest": "assembling real test tenants (M365/Google Admin/Entra) with planted misconfigurations in time", "stack": "Claude for Chrome (TC-03) operating inside a real logged-in admin session"},
{"id": "I-1564", "demoable": "yes", "riskiest": "20B open model draft quality vs frontier cloud models on nuanced legal drafting", "stack": "gpt-oss-20b (TC-22) via Ollama/llama.cpp (TC-26), fully offline"},
{"id": "I-2026", "demoable": "risky", "riskiest": "chaining three real but separate local components (STT, local LLM, screen agent) into one working offline pipeline in 48h", "stack": "Kyutai STT (TC-31); local LLM (TC-22) for field-filling; local computer-use-style agent for portal submit"},
{"id": "I-2041", "demoable": "yes", "riskiest": "card's own claim of sub-300ms in-browser streaming ASR is unverified; fallback to a cloud streaming ASR API if needed", "stack": "browser-native SpeechRecognition [unverified] or cloud streaming ASR; stdlib pace/filler-word heuristics"},
{"id": "I-2047", "demoable": "yes", "riskiest": "verification must hit a real external case-law API (e.g. CourtListener) rather than model-only judgment, or it re-hallucinates the thing it claims to catch", "stack": "long-context LLM (TC-25) plus a public case-law lookup API [unverified terms]"},
{"id": "I-2063", "demoable": "yes", "riskiest": "legal accuracy of flagged clauses is a domain risk, not a technical one", "stack": "1M-token-context model (TC-25) for single-pass reading and drafting"},
{"id": "I-2514", "demoable": "risky", "riskiest": "building any usable local case-law corpus in 48h is real data-acquisition work beyond model capability", "stack": "gpt-oss-20b (TC-22) locally; hand-picked small offline case-law cache for demo scale only"},
{"id": "I-2536", "demoable": "yes", "riskiest": "breadth of general PC problem-solving; demo scoped to one staged known-cause machine", "stack": "any LLM for NL narration; native Windows APIs/PowerShell/restore points"},
{"id": "I-2566", "demoable": "risky", "riskiest": "x402 is early-production with self-reported figures the tech card flags unverified; wiring a real payment rail in 48h is tight", "stack": "x402 (TC-15) middleware/SDK; simple JSON feed generator"},
{"id": "I-2591", "demoable": "yes", "riskiest": "real AP2 partner integration unlikely in 48h given limited real transaction volume; mandate objects mocked to spec instead", "stack": "AP2 (TC-13) mandate schema; LLM or rule-based invoice-vs-PO matching"},
{"id": "I-3028", "demoable": "yes", "riskiest": "none major technically; legal accuracy of §7216 language is the only caveat", "stack": "any LLM for consent drafting; e-signature step simulated/stubbed for demo"},
{"id": "I-3045", "demoable": "risky", "riskiest": "reliable multi-paddle recognition fused with live speech in a noisy ballroom is an unproven vision problem, not just integration", "stack": "real-time multimodal audio+video model [unverified]; closest real analog Gemini Live (TC-28)"},
{"id": "I-3051", "demoable": "risky", "riskiest": "the core claimed capability (prosody reshaping with exact word-timing preservation) is itself unverified, not just a peripheral detail", "stack": "speech-to-speech voice conversion [unverified]; closest real analog ElevenLabs v3 (TC-38) which is generation, not confirmed timing-locked conversion"},
{"id": "I-3093", "demoable": "risky", "riskiest": "same local case-law corpus data-acquisition gap as I-2514, only demonstrable at toy scale in 48h", "stack": "gpt-oss-20b (TC-22) locally; hand-picked small offline case-law cache"},
{"id": "I-3530", "demoable": "risky", "riskiest": "the core AI loop is automated exploit reproduction, which is not reliably automatable across arbitrary reports", "stack": "browser-use (TC-06) to drive the tracker UI; sandboxed exploit attempt has no supporting tech card"},
{"id": "I-3542", "demoable": "yes", "riskiest": "no real Cornerstone/IDEXX access in 48h; demo runs against a team-built mock UI", "stack": "Claude Sonnet 4.5 computer use (TC-02); stdlib filesystem watcher"},
{"id": "I-4001", "demoable": "yes", "riskiest": "none major; bounded data-reconciliation task with synthetic sample rosters", "stack": "long-context model (TC-25) or deterministic fuzzy-matching code"},
{"id": "I-4028", "demoable": "risky", "riskiest": "generalizing to arbitrary institution sites and forms is open-ended; demo must narrow to 1-2 real sites", "stack": "Claude for Chrome (TC-03) inside a real logged-in session"},
{"id": "I-4051", "demoable": "risky", "riskiest": "real CDK/Reynolds DMS access is proprietary and unobtainable in 48h, a genuine access blocker; demo runs against a mock DMS", "stack": "Claude Sonnet 4.5 computer use (TC-02) for continuous screen mirroring; ordinary local DB"},
{"id": "I-4519", "demoable": "risky", "riskiest": "multi-camera, multi-paddle, noisy-room fusion is a hard live vision problem under the Balanced full-e2e bar", "stack": "real-time multi-camera vision plus speech recognition [unverified]"},
{"id": "I-4546", "demoable": "yes", "riskiest": "no real Medicare Advantage portal credentials in 48h; demo files into a team-built mock portal", "stack": "Mistral OCR 3 (TC-30) for the letter; Skyvern (TC-07) for portal filing and confirm-by-revisit"},
{"id": "I-4570", "demoable": "yes", "riskiest": "factual VAT accuracy is a domain risk, not a build risk", "stack": "any current LLM with EU VAT knowledge in context or via retrieval"},
{"id": "I-6006", "demoable": "yes", "riskiest": "low; worst case swap on-device STT for a cloud ASR call", "stack": "on-device or cloud STT (e.g. Kyutai, TC-31) plus text-embedding similarity ranking"}]
```
<!-- COMPLETE -->
