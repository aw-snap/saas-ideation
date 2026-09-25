### I-1019 Private Elder Statement Scanner
Core loop: (1) user downloads a statement PDF/CSV, (2) extension loads it into an on-device model, (3) model scans for repeated charges, new payees, gift-card patterns, (4) plain-English flags render in the extension UI, (5) nothing leaves the machine.
Stack: Chrome extension; Gemini Nano via Chrome built-in AI (TC-19, production, but built for summarizing/translating/language-detection, not financial anomaly extraction — using it for structured duplicate-charge detection is `[unverified]`); PDF/CSV parsing in-browser (stdlib/JS libs).
Riskiest part: Gemini Nano is a small on-device model; its accuracy at structured financial extraction and duplicate-detection over messy PDFs is unverified and likely weaker than a hosted model. For the demo, feasible to fake a clean canned statement so the on-device model succeeds reliably; a real messy scanned statement would be the harder case.
Verdict: demoable: risky — on-device model capability for this specific extraction task is unverified and undersized for the job.

### I-1027 Appeal Packet Builder
Core loop: (1) staff upload scanned denial letter + EOB + chart pages, (2) OCR extracts denial code/dates/procedure/reason, (3) tool maps fields to the payer's known appeal form, (4) a filled packet is generated, (5) staff review and upload.
Stack: Mistral OCR 3 (TC-30, production, $2/1k pages) for extraction; templated form-fill logic; no exotic dependency.
Riskiest part: mapping extracted fields onto many different payers' real form layouts — only feasible in 48h for one or two pre-built templates, not a general library.
Verdict: demoable: yes — build one real payer template end to end; extraction plus fill is standard engineering.

### I-1053 Denial Webhook Feed
Core loop: (1) register a practice's portal credentials, (2) agent logs into each denial queue nightly, (3) agent OCRs/extracts code, reason, amount, payer, (4) posts structured JSON to the user's webhook, (5) no dashboard.
Stack: browser automation (Stagehand/browser-use, TC-06/TC-08) for portal walking; Mistral OCR 3 (TC-30) for extraction; a webhook POST.
Riskiest part: unattended overnight navigation of real, varied payer portals is the classic computer-use failure mode (TC-02 is ~61% OSWorld). The card itself scopes the demo to three mock portals, which sidesteps the real-portal risk honestly.
Verdict: demoable: risky — extraction-to-webhook loop is real and buildable against mock portals; production reliability against real portals is the open risk.

### I-1503 The WISP That Writes Itself
Core loop: (1) agent logs into the preparer's tax software, email, and cloud-storage admin panels, (2) checks each Safeguards Rule control against real settings, (3) drafts a dated WISP citing each control's actual state, (4) preparer reviews and files.
Stack: browser computer-use agent (Claude Sonnet 4.5 computer use, TC-02, production-adjacent, ~61% OSWorld) walking multiple distinct admin consoles.
Riskiest part: reliably reading security-relevant settings correctly across three different unfamiliar admin UIs, with MFA on each, in one unattended run — a track-balanced idea that must work end to end, but multi-console admin walks are exactly where computer-use agents still fail ~40% of the time.
Verdict: demoable: risky — balanced track needs it fully working; three-console reliability in 48h is a real stretch even with prepared demo accounts.

### I-1525 AI Feature-Request Reviewer
Core loop: (1) paste a client feature request, (2) a coding agent explores the target repo, (3) it locates likely touched files/modules, (4) it returns a build-time/effort estimate with rationale, (5) output is shown to the user.
Stack: a coding agent with repo access (e.g., Claude Code style repo-grounded agent) `[unverified capability for accurate estimation, though repo exploration itself is standard]`; no tech card directly covers "estimate accuracy," only repo exploration.
Riskiest part: estimate quality/calibration is inherently soft — no ground truth to validate against in a demo, so the "core AI loop" is really just plausible-sounding output, easy to fake convincingly.
Verdict: demoable: yes — repo exploration plus a text estimate is straightforward engineering; just don't oversell accuracy live.

### I-2003 Mandate-Match Clearinghouse
Core loop: (1) agent submits a signed intent mandate (item, price ceiling, qty), (2) clearinghouse independently loads the supplier's live cart page, (3) it extracts price/qty and compares to the mandate, (4) on mismatch it blocks and alerts both sides, (5) on match it approves.
Stack: Agent Payments Protocol (AP2, TC-13, early production, "real transactions are limited"); a scraping/extraction step on the live page; a cheap comparison model.
Riskiest part: AP2 itself is immature with few real transacting partners, so genuine mandate signing/verification is unlikely to be wired to a real payment network in 48h.
Verdict: demoable: risky — the compare-and-block logic (the real core AI loop) is buildable and can be demoed against a mock supplier page and a locally-signed mandate structure; the AP2 network integration is the part to fake, which fits Novel-track rules.

### I-2031 Facility Invoice Line-Item Auditor
Core loop: (1) upload a facility invoice, (2) OCR extracts each line item, (3) matches against the signed rate sheet and prior invoices, (4) flags over-rate/duplicate/off-plan charges, (5) outputs a dispute-ready summary.
Stack: Mistral OCR 3 (TC-30, production) for tables/scans; deterministic matching logic against a stored rate sheet.
Riskiest part: none major — this is an extraction-plus-rules-comparison loop, well within 48h scope with one sample invoice and rate sheet.
Verdict: demoable: yes — straightforward extraction and comparison, low technical risk.

### I-2043 Client Quote Estimator for Dev Shops
Core loop: same as I-1525: ticket in, repo exploration, files-touched + build-time + risk estimate out, quote draft produced.
Stack: repo-grounded coding agent `[unverified estimation accuracy]`.
Riskiest part: same as I-1525 — estimate calibration is unverifiable in a short demo, but the mechanics (explore repo, list files, produce text) are standard.
Verdict: demoable: yes — same reasoning as I-1525.

### I-2050 Reproduction Gate
Core loop: (1) new vuln report arrives, (2) agent checks out the exact commit into a sandbox, (3) builds the project, (4) attempts the described exploit step by step, (5) forwards only reports that actually reproduce, with a transcript.
Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent, can stay on multi-step tasks for hours) driving a sandboxed build-and-exploit loop.
Riskiest part: automated building of arbitrary open-source projects is itself unreliable (broken build scripts, missing deps, version drift) even before attempting an exploit — this is the real core AI loop per Novel-track rules, so it can't be faked away.
Verdict: demoable: risky — buildable for one pre-selected project with a known-good build script and one real CVE plus one fabricated report, but the general "any repo" claim is not demoable in 48h.

### I-2069 Fiduciary Accounting Fact-Checker
Core loop: (1) upload bank statements + receipt photos, (2) agent extracts every transaction, (3) categorizes against benefit-use rules and drafts the accounting form, (4) a second pass checks each line against source docs, (5) unsupported entries are flagged.
Stack: Mistral OCR 3 (TC-30) for receipts/statements; 1M-token context (TC-25) to reconcile a year in one pass.
Riskiest part: none major — extraction, categorization by rule, and a cross-check pass are all standard operations on structured/OCR'd data.
Verdict: demoable: yes — well-scoped extraction-and-verify loop, buildable in 48h with sample statements.

### I-2522 The Scribe Fact-Checker
Core loop: (1) local transcript of the session exists, (2) scribe drafts a note, (3) tool re-aligns each note sentence against the transcript, (4) sentences with no matching audio are flagged, (5) therapist confirms or deletes.
Stack: local/streaming STT (Kyutai STT, TC-31, ~500ms, self-hosted, production-capable) plus a local reasoning model for sentence-level matching.
Riskiest part: doing this fully on-device is more setup than needed for a 48h demo; a cloud LLM comparing note-vs-transcript text is equally convincing and far faster to build, so "local" is the part most likely to be faked/simplified for the demo (using a cloud API standing in for the on-device model).
Verdict: demoable: yes — the sentence-alignment/fact-check logic is real and simple (text-to-text matching); the "local" framing is the peripheral part that may be shortcut.

### I-2547 Multi-Institution Proxy Agent
Core loop: (1) stored consented logins for each portal, (2) browser agent visits each weekly, (3) reads balances/deadlines/notices from the screen, (4) compiles one plain-English digest, (5) surfaces it to the proxy.
Stack: Claude for Chrome (TC-03, production, 11.2% prompt-injection rate after mitigation) operating inside the user's logged-in session.
Riskiest part: real bank/Medicaid/Medicare portals vary wildly and often have MFA/anti-bot protections; the card's own demo moment scopes this to three mock portals, which is the honest fake-able part.
Verdict: demoable: risky — the read-and-digest loop is real and TC-03 is production tech, but reliability against real institutional portals (vs. the three mocked ones in the demo) is unresolved.

### I-2582 POS Terminal Doctor
Core loop: (1) staff describe the symptom in plain words, (2) local agent inspects processes/peripherals/logs, (3) it shows evidence for its diagnosis, (4) it either walks staff through an approved fix or escalates with the diagnosis attached.
Stack: a local agent with OS-level diagnostic access (process list, logs) `[unverified: no tech card covers "agent explains locked-down POS internals," but the underlying skill — an LLM interpreting process/log output — is ordinary]`.
Riskiest part: real POS hardware is proprietary and locked down; for a demo, a standard PC simulating a stuck print spooler is a reasonable stand-in, and that substitution is the fake-able part.
Verdict: demoable: yes — the diagnose-and-explain loop is simple agent tool-calling over system state; demo hardware can be simulated.

### I-3010 Walkthrough Recap
Core loop: (1) mic+camera record the agent's narration and rooms shown, (2) system transcribes and segments by room/feature, (3) it infers what this specific buyer lingered on or asked about, (4) it cuts a short personalized recap video, (5) sends it minutes after the showing.
Stack: on-device video/speech assembly `[unverified — the card itself marks both the pain claim and "why now" capability [unverified]]`; no tech card supports automatic per-buyer "lingering/interest" detection from audio alone.
Riskiest part: inferring which moments a particular buyer cared about from narration audio alone is not a demonstrated capability — this reads as more than transcription-and-clipping, and is the weakest link.
Verdict: demoable: risky — record-transcribe-clip is buildable in 48h, but the "personalized to what this buyer lingered on" claim likely gets faked via simple keyword-matching on buyer questions rather than real interest inference.

### I-3038 Cite or Sight
Core loop: (1) pull each cited case's full text from a legal database, (2) load the opinion in a long-context pass, (3) confirm the quoted proposition and pin cite actually appear, (4) flag fabricated or misquoted cites, (5) output before filing.
Stack: legal case database access (e.g., CourtListener or similar free case-law API) `[unverified which specific database]`; 1M-token context model (TC-25, production) for full-opinion comparison.
Riskiest part: reliable case-law retrieval (matching a citation string to the correct opinion text) — feasible with a free legal database for demo purposes, but coverage/matching accuracy for arbitrary citations is not guaranteed.
Verdict: demoable: yes — quote-verification-by-long-context is a real, buildable loop; use one public sanctioned-brief example with known cites for a reliable demo.

### I-3047 AI Live Interview Coach
Core loop: (1) mic-only capture during a live video call, (2) streaming analysis of pace/fillers/rambling/pronunciation, (3) a single word or colored dot nudges live, (4) call ends, (5) a replay timeline highlights three fixes.
Stack: streaming ASR (any production streaming speech-to-text) plus heuristic pace/filler detection; browser extension for overlay `[unverified: card's "sub-300ms real-time speech-analysis APIs" claim is marked unverified]`; doesn't require a cutting-edge model, ordinary streaming ASR plus heuristics suffices.
Riskiest part: low-latency mic capture and a real-time overlay during an active Zoom/Teams/Meet call is real-time engineering, not an exotic AI capability — ordinary build volume per the calibration note.
Verdict: demoable: yes — heuristic-based real-time coaching is buildable in 48h with standard streaming ASR.

### I-3059 DMARC, Translated and Fixed
Core loop: (1) pull the daily DMARC aggregate XML report, (2) extract which sources passed/failed authentication, (3) write a weekly plain-English summary, (4) generate the exact SPF/DKIM/DMARC DNS record text, (5) show a copy-paste box.
Stack: DMARC XML has a fixed public schema — deterministic parsing (stdlib XML) covers most of this; an LLM is only needed for the plain-English summary wording, not the extraction itself.
Riskiest part: none — this is close to a non-AI task; the "why now" AI justification (cheap long-context extraction) is a stretch given DMARC XML doesn't need an LLM to parse.
Verdict: demoable: yes — very low technical risk, though its claim to the Novel track (a capability from the last 18 months) is weak since the mechanics don't need one.

### I-3096 Session Truth Ledger
Core loop: (1) native-audio agent listens alongside the existing scribe during the live session, (2) keeps a running ledger of what was actually said, (3) scribe drafts its note, (4) ledger checks every clinical claim against itself, (5) flags unsupported sentences.
Stack: Gemini Live native audio (TC-28, production, 120-180ms round trip) for continuous listening; text-comparison logic for the fact-check pass.
Riskiest part: running two AI systems concurrently on live audio (the existing third-party scribe plus this ledger) adds integration complexity; for the demo, using pre-recorded session audio processed non-live is the fake-able part rather than true simultaneous live listening.
Verdict: demoable: yes — the underlying capability (TC-28) is production, and the fact-check comparison is straightforward; live simultaneity can be simulated with playback.

### I-3536 CAPTCHA Handoff Concierge
Core loop: (1) browser agent drives the supplier site toward checkout, (2) it hits a CAPTCHA/2FA wall, (3) it screenshots and texts the owner a link, (4) owner taps once to solve, (5) agent resumes and finishes the order.
Stack: Claude for Chrome (TC-03, production) for the browsing session; SMS delivery (e.g., Twilio, standard, not tech-card-listed but ordinary) `[unverified specific vendor]`.
Riskiest part: detecting a CAPTCHA reliably and handing off/resuming mid-session cleanly — doable against one prepared mock supplier site with a real CAPTCHA widget.
Verdict: demoable: yes — TC-03 supports session persistence, and the handoff mechanic is ordinary engineering on top of it.

### I-3555 No-API Portal MCP Adapter
Core loop: (1) computer-use agent logs into the target portal/desktop app as an authorized user, (2) it exposes reads/writes as callable tools (get_record, submit_claim, check_status), (3) any AI client calls those tools, (4) the agent performs the corresponding screen actions, (5) results return as structured data.
Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent, ~61% OSWorld) bridged to an MCP tool server (TC-11 ecosystem, production infra).
Riskiest part: exposing a write action like submit_claim through a ~61%-reliable computer-use loop is high-stakes — a wrong submission on a real payer portal has real consequences, so this needs a sandboxed or staging portal for the demo, not a live one.
Verdict: demoable: risky — the screen-to-tool bridging is real, production-adjacent tech, but reliability for write actions is the open risk; read-only demo actions are much safer to show live.

### I-4005 POA Packet Builder
Core loop: (1) upload the signed POA once, (2) tool reads the granted powers, (3) matches against a library of bank certification form templates, (4) pre-fills each form and flags missing notarization, (5) drafts a rebuttal letter if needed.
Stack: Mistral OCR 3 (TC-30, production) for the scanned POA; templated form-fill against pre-built bank templates.
Riskiest part: "library of major banks' own certification forms" needs to be pre-built for the demo's chosen banks; general coverage of "dozens of bank templates" is not achievable in 48h, only a handful.
Verdict: demoable: yes — extraction plus fill against 2-3 real bank templates is buildable and convincing.

### I-4030 Fiduciary Accounting, Auto-Filed
Core loop: (1) agent revisits the parent's bank/bill accounts monthly inside the proxy's browser session, (2) extracts every transaction, (3) categorizes against required accounting line items, (4) assembles the year-end accounting, (5) flags months missing a receipt.
Stack: Claude for Chrome (TC-03, production) reusing a persistent logged-in session monthly.
Riskiest part: unattended recurring automated access to real bank sites raises both reliability (bot detection, MFA, layout changes) and terms-of-service concerns; demo must use a mock or sandboxed bank UI rather than a live account.
Verdict: demoable: risky — the extraction/categorization loop is real, but the "revisits real bank accounts monthly, unattended" claim is the part that must be faked with a mock portal for a safe, working demo.

### I-4065 Annual Accounting by CC
Core loop: (1) fiduciary CCs a dedicated address on every receipt/invoice/statement all year, (2) each item is OCR'd and filed into the required accounting category, (3) items accumulate, (4) on the filing deadline the service assembles, (5) it emails back the completed form with exhibits attached.
Stack: Mistral OCR 3 (TC-30, production) on forwarded email attachments; email-inbound webhook (e.g., SendGrid inbound parse) `[unverified specific vendor, but standard integration]`; templated form generation.
Riskiest part: none major — this is an email-ingest-OCR-categorize pipeline, well-trodden engineering.
Verdict: demoable: yes — low technical risk, straightforward to demo end to end with a dozen sample receipts.

### I-4529 Identity That Dies With the Employee
Core loop: (1) each automation gets a scoped identity tied to its creator, (2) a live roster lets the owner revoke credentials individually, (3) offboarding an employee auto-suspends every automation they own, (4) it lists what each automation touched.
Stack: Okta Agent SSO / Cross App Access (TC-17, GA 2026-08, production, but very recently GA — integration depth for a 2-3 person team in 48h is uncertain) `[unverified: hands-on API access/onboarding time within the hackathon window]`.
Riskiest part: real Okta Agent SSO integration this recent may involve enterprise onboarding friction; for the demo, the identity-binding and auto-suspend logic can be built directly (a simple owner-to-credential mapping table with a revoke-cascade), with Okta's role narrated rather than fully wired.
Verdict: demoable: yes — the core mechanic (tie credentials to an owner, cascade-revoke on offboarding) doesn't actually require live Okta integration to demo convincingly.

### I-4549 Mail Pile Triage Camera
Core loop: (1) photograph a stack of unopened mail in one shot, (2) segment each envelope/letter, (3) OCR sender and deadline language, (4) rank by urgency and file under the right institution, (5) surface the top three time-sensitive items.
Stack: Mistral OCR 3 (TC-30, production) for text; image segmentation for multiple overlapping items — Meta SAM 3 (TC-34, production, open weights, concept-based segmentation) is a reasonable fit, though not explicitly built for mail piles `[segmentation-for-mail specifically unverified]`.
Riskiest part: reliably segmenting multiple overlapping/rotated letters from a single photo is a real computer-vision challenge; for the demo, laying letters out non-overlapping removes most of the risk.
Verdict: demoable: yes — with a cooperative demo photo (letters spread out, not overlapping), extraction and ranking are solid; true "one messy stack" segmentation is the corner most likely faked.

### I-6002 Jev AI live call copilot
Core loop: (1) live call audio is transcribed as it happens, (2) it's analyzed against company policy/playbook, (3) Jev privately surfaces a reminder/question/alert, (4) a configured phrase discreetly notifies a supervisor, (5) call continues uninterrupted.
Stack: streaming ASR (production-grade, e.g., any commercial streaming STT) plus an LLM reasoning over the live transcript and company docs `[unverified specific vendor per card, but the underlying capability class is standard and mature]`.
Riskiest part: end-to-end latency low enough to feel "live" during an actual call, plus reliable phrase-triggered escalation — ordinary but nontrivial real-time engineering, no exotic capability gap.
Verdict: demoable: yes — well within standard streaming-transcription-plus-LLM territory, buildable in 48h with a scripted mock call.

### I-6008 Continuous adversarial testing for customer-facing AI agents
Core loop: (1) client sets scope and hard limits, (2) engine generates many AI-driven persuasion conversations against the client's bot, (3) each conversation is evaluated for policy violation (refund, exception, leak), (4) failures return a transcript plus a suggested guardrail fix, (5) the bot is retested until it holds.
Stack: any capable LLM for adversarial conversation generation and for evaluating the target bot's responses against policy; a target bot API to call against `[unverified: no tech card names a specific "red-team persuasion" product, but the mechanics are ordinary prompting and scripted conversation loops]`.
Riskiest part: none major for a scaled-down demo — "thousands of attempts" becomes a few dozen scripted attempts against a sample bot for the live demo, which is a reasonable and honest scope-down.
Verdict: demoable: yes — generate-attack, evaluate, suggest-fix, retest is a straightforward agentic loop with existing LLM APIs.

```json
[
  {"id": "I-1019", "demoable": "risky", "riskiest": "Gemini Nano's accuracy for structured financial duplicate-charge extraction is unverified and the model is undersized for the task", "stack": "Chrome built-in AI / Gemini Nano (TC-19) [unverified for this use]; in-browser PDF/CSV parsing"},
  {"id": "I-1027", "demoable": "yes", "riskiest": "mapping extracted fields onto many different payer form layouts within 48h", "stack": "Mistral OCR 3 (TC-30); templated form-fill logic"},
  {"id": "I-1053", "demoable": "risky", "riskiest": "unattended overnight navigation of real, varied payer portals; demo scoped to three mock portals", "stack": "browser automation (TC-06/TC-08); Mistral OCR 3 (TC-30); webhook delivery"},
  {"id": "I-1503", "demoable": "risky", "riskiest": "reliable, correct reading of security settings across three distinct unfamiliar admin consoles in one unattended run, on the Balanced track which must work end to end", "stack": "Claude Sonnet 4.5 computer use (TC-02)"},
  {"id": "I-1525", "demoable": "yes", "riskiest": "estimate calibration/quality is unverifiable and easy to fake convincingly", "stack": "repo-grounded coding agent [unverified estimation accuracy]"},
  {"id": "I-2003", "demoable": "risky", "riskiest": "AP2 is early-production with few real transacting partners, so genuine mandate signing to a real payment network is unlikely in 48h", "stack": "Agent Payments Protocol (TC-13); page-extraction/compare logic"},
  {"id": "I-2031", "demoable": "yes", "riskiest": "none major; standard extraction-and-rules-comparison loop", "stack": "Mistral OCR 3 (TC-30); rules-based matching"},
  {"id": "I-2043", "demoable": "yes", "riskiest": "same as I-1525: estimate calibration is unverifiable but mechanics are standard", "stack": "repo-grounded coding agent [unverified estimation accuracy]"},
  {"id": "I-2050", "demoable": "risky", "riskiest": "automated building of arbitrary open-source projects is itself unreliable, and this build step is the real core AI loop that Novel track requires to be genuine", "stack": "Claude Sonnet 4.5 computer use (TC-02); sandboxed build/exploit environment"},
  {"id": "I-2069", "demoable": "yes", "riskiest": "none major; extraction, categorization by rule, and cross-check are standard", "stack": "Mistral OCR 3 (TC-30); 1M-token context (TC-25)"},
  {"id": "I-2522", "demoable": "yes", "riskiest": "true on-device execution is more setup than needed; likely to be faked with a cloud model standing in for the local one", "stack": "Kyutai STT (TC-31); local/cloud LLM for sentence-alignment matching"},
  {"id": "I-2547", "demoable": "risky", "riskiest": "reliability against real, varied institutional portals vs. the three mock portals the demo actually uses", "stack": "Claude for Chrome (TC-03)"},
  {"id": "I-2582", "demoable": "yes", "riskiest": "real locked-down POS hardware unavailable; demo substitutes a normal PC simulating a stuck spooler", "stack": "local agent with OS-level diagnostic tool-calling [unverified card]"},
  {"id": "I-3010", "demoable": "risky", "riskiest": "inferring what a specific buyer 'lingered on or asked about' from narration audio alone is not a demonstrated capability", "stack": "on-device video/speech assembly [unverified per card]"},
  {"id": "I-3038", "demoable": "yes", "riskiest": "reliable citation-to-opinion retrieval from a legal database for arbitrary cites", "stack": "legal case-law database [unverified vendor]; 1M-token context (TC-25)"},
  {"id": "I-3047", "demoable": "yes", "riskiest": "low-latency mic capture and live overlay during an active video call is ordinary but nontrivial real-time engineering", "stack": "streaming ASR + heuristics; browser extension overlay"},
  {"id": "I-3059", "demoable": "yes", "riskiest": "none; DMARC XML is deterministically parseable, so the AI 'why now' justification is weak", "stack": "stdlib XML parsing; LLM only for summary wording"},
  {"id": "I-3096", "demoable": "yes", "riskiest": "running two concurrent AI systems on live audio; demo likely uses recorded playback instead of true live simultaneity", "stack": "Gemini Live native audio (TC-28)"},
  {"id": "I-3536", "demoable": "yes", "riskiest": "reliable CAPTCHA detection and clean mid-session handoff/resume", "stack": "Claude for Chrome (TC-03); SMS delivery [unverified vendor]"},
  {"id": "I-3555", "demoable": "risky", "riskiest": "exposing a write action (submit_claim) through a ~61%-reliable computer-use loop is high-stakes on a real portal", "stack": "Claude Sonnet 4.5 computer use (TC-02); MCP tool server (TC-11)"},
  {"id": "I-4005", "demoable": "yes", "riskiest": "only a handful of bank templates achievable in 48h, not the full claimed library", "stack": "Mistral OCR 3 (TC-30); templated form-fill"},
  {"id": "I-4030", "demoable": "risky", "riskiest": "unattended recurring automated access to real bank sites raises reliability and ToS concerns; demo must use a mock bank portal", "stack": "Claude for Chrome (TC-03)"},
  {"id": "I-4065", "demoable": "yes", "riskiest": "none major; standard email-ingest-OCR-categorize pipeline", "stack": "Mistral OCR 3 (TC-30); inbound email webhook [unverified vendor]"},
  {"id": "I-4529", "demoable": "yes", "riskiest": "real Okta Agent SSO integration is very recently GA and may have onboarding friction in 48h; core mechanic can be demoed without it", "stack": "Okta Agent SSO / Cross App Access (TC-17) [unverified 48h integration depth]"},
  {"id": "I-4549", "demoable": "yes", "riskiest": "segmenting multiple overlapping/rotated letters from one messy photo is a real CV challenge; demo likely uses spread-out letters", "stack": "Mistral OCR 3 (TC-30); Meta SAM 3 (TC-34) [segmentation-for-mail unverified]"},
  {"id": "I-6002", "demoable": "yes", "riskiest": "achieving low enough latency to feel live during an actual call", "stack": "streaming ASR [unverified vendor]; LLM reasoning over live transcript"},
  {"id": "I-6008", "demoable": "yes", "riskiest": "none major for a scaled-down demo of dozens rather than thousands of attempts", "stack": "LLM for adversarial generation and policy-violation evaluation"}
]
```
<!-- COMPLETE -->
