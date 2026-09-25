# Feasibility — s5-planner-04

### I-1020 Elder Bill Intake Autopilot
Core loop: (1) agent logs into a provider portal in the family's browser session, (2) downloads new statements, (3) OCR/extracts line items, (4) matches vendor+amount across months, (5) flags near-duplicates/zombie subscriptions before payment.
Stack: browser automation (TC-06 browser-use or TC-08 Stagehand/Browserbase, production-adjacent), OCR/extraction (TC-30 Mistral OCR 3), LLM for fuzzy vendor/amount matching.
Riskiest: logging into real, varied care/utility/insurer portals (MFA, layout diversity) inside 48h. Fake in demo: use two mocked utility-bill portals the team builds, not live third-party sites — the idea's own demo moment does this (two mock bills).
Verdict: demoable: risky — duplicate-matching logic is easy and real; live multi-portal login is the actual product but isn't needed to prove the loop in a mocked demo.

### I-1039 Proxy Knowledge Handoff
Core loop: (1) outgoing proxy narrates routine, (2) streaming STT transcribes, (3) LLM extracts structured handoff record (logins, deadlines, doctors), (4) agent identifies gaps, (5) follow-up voice call fills gaps.
Stack: STT (TC-31 Kyutai, production-capable) or TC-27 gpt-realtime for the follow-up call; LLM extraction with long context.
Riskiest: an automated outbound phone call that actually dials and converses is real telephony work (not just an API call) to wire up in 48h. Fake in demo: do the "follow-up call" as a live chat/voice turn in the same session rather than a real phone callback.
Verdict: demoable: yes — narrate-to-record extraction is straightforward; the callback can be simulated without breaking the core loop.

### I-1060 Show-Once Vendor Coder
Core loop: (1) upload one invoice, (2) OCR extracts vendor/fields, (3) system codes it "unknown", (4) user corrects the code once, (5) correction stored as a few-shot example so the next invoice from that vendor auto-codes on arrival.
Stack: OCR (TC-30 Mistral OCR 3), LLM with long context for in-context few-shot replay (TC-25).
Riskiest: none major — this is a standard extract-plus-few-shot pattern. Nothing needs to be faked.
Verdict: demoable: yes — small, self-contained loop, no external portals or unverified capability.

### I-1505 The Scribe's Access Ends On Time
Core loop: (1) enter departing VA's name, (2) agent walks every console the VA was granted, (3) revokes or rotates each credential, (4) confirms no client file remains accessible, (5) produces a signed log.
Stack: browser/computer-use agent (TC-02 Sonnet 4.5 computer use, production-adjacent, or TC-08 Stagehand).
Riskiest: automating real account revocation across arbitrary third-party SaaS consoles is fragile (2FA, changing UI) and destructive to test against live accounts. Fake in demo: use 4 trial/sandbox accounts the team creates and controls, revoke those live.
Verdict: demoable: risky — the revocation flow is real automation work; safe only against pre-built sandbox accounts, not arbitrary production tools, within 48h.

### I-1534 PA Phone Call Copilot
Core loop: (1) capture both sides of a payer call via streaming transcription, (2) LLM extracts stated approval criteria and commitments, (3) drafts a structured, quote-cited case file, (4) file is ready to submit as proof.
Stack: streaming STT (TC-31 Kyutai, ~500ms delay, production-capable), LLM extraction/drafting.
Riskiest: none major for the demo, since the demo explicitly plays a mock recorded call rather than joining a live payer call.
Verdict: demoable: yes — transcribe-then-extract is a proven pattern, and the demo avoids live telephony entirely.

### I-2008 The Missing-Field Email Negotiator
Core loop: (1) parse the platform's rejection code, (2) look up what the code requires, (3) draft a specific vendor email, (4) send and track the reply thread, (5) resubmit the corrected invoice.
Stack: LLM drafting, rejection-code lookup table (hand-built), email send/track — TC-03 Claude for Chrome claims in-browser email drafting/sending/tracking (production), otherwise a direct Gmail API integration works too.
Riskiest: real resubmission to a national e-invoicing validator (France/Germany) is not something the team can access or certify in 48h. Fake in demo: mock validator and mock inbox reply, exactly as the demo moment describes.
Verdict: demoable: risky — the email-drafting core loop is real, but the "resubmits to the corrected invoice to the validator" step is necessarily faked, not just peripheral.

### I-2038 Fit Check for Big Deliveries
Core loop: (1) scan a stairwell/landing with a phone's LiDAR depth camera, (2) reconstruct room geometry, (3) run a clearance solver against the item's rotated silhouette, (4) return a green/amber/red verdict, (5) show a tilt-and-rotate animation.
Stack: LiDAR on recent iPhones (native platform capability, not itself in tech_cards but well-established hardware) for depth capture; a custom 3D collision/clearance solver (no listed library covers this specifically) [unverified].
Riskiest: writing a working 3D rotated-silhouette clearance solver plus animation in 48h is real geometry engineering, not just an API call — this is the actual risky core since it's the Novel track's AI/algorithmic loop. Simplify for demo: single static opening check (one landing, one item) rather than a full multi-turn path planner; that scoped version is buildable.
Verdict: demoable: risky — LiDAR capture is easy, but the clearance-solving core must genuinely run for a Novel-track demo, and only a narrowly scoped version (one opening, one item) fits 48h.

### I-2044 Reflex Secret Guard
Core loop: (1) score every keystroke for secret-like patterns with a fast checker, (2) sit silent otherwise, (3) escalate a match to a slower LLM for context confirmation, (4) block the paste/commit with a one-line reason.
Stack: the idea's own "reflex-tier model" claim is marked `[unverified]` on its own card and is not in `config/tech_cards.md`. A buildable substitute: regex/entropy heuristics for the fast tier plus a normal LLM call for the slow tier, hooked into an editor/terminal via a simple keystroke listener (VS Code extension or shell hook).
Riskiest: the specific "reflex-tier" ultra-fast model claim is unverified and not needed — the real risk is wiring a reliable low-latency keystroke hook into an editor/terminal in 48h. Fake in demo: pre-wired single terminal/editor, not a general IDE plugin.
Verdict: demoable: yes — using heuristics-plus-LLM instead of the unverified "reflex-tier" model still demonstrates a real working detect-and-block loop.

### I-2052 Bounty Passport
Core loop: (1) agent posts a refundable stake via a per-request payment protocol before submitting, (2) submits a vulnerability report, (3) an automated sandbox attempts reproduction, (4) stake returns plus bonus if reproduced, (5) stake is forfeited if not.
Stack: x402 micropayments (TC-15, early production, stablecoin-based, `[unverified]` volume figures), sandboxed reproduction similar to I-3039's approach.
Riskiest: x402 is early-production and stablecoin-based, not something to wire to real money in 48h; general automatic reproduction of arbitrary vulnerability claims is also hard. Fake in demo: testnet/mock stake ledger and two pre-scripted canned reports (one real, one fake) with a prepared sandbox for exactly those two.
Verdict: demoable: risky — the staking mechanic and reproduction check can each be shown working narrowly, but neither generalizes past the two canned cases in 48h.

### I-2070 Medicare Appeal Evidence Guard
Core loop: (1) OCR the denial letter and clinical notes, (2) pull the plan's public coverage criteria, (3) draft a citation-backed appeal, (4) show the source sentence backing each clinical claim, (5) flag any unsupported claim before sending.
Stack: OCR (TC-30 Mistral OCR 3), long-context LLM (TC-25, 1M-token context) for holding letter+chart together, citation-grounding via retrieval-and-quote pattern.
Riskiest: citation-grounding accuracy on edge cases, but this is a well-precedented RAG/citation-check pattern, not a new capability. Nothing needs to be faked; the demo plants one deliberately wrong date to prove the flag fires.
Verdict: demoable: yes — the core "quote or flag" loop is standard and reliable enough to build in 48h.

### I-2525 Filing Proof Escrow
Core loop: (1) agent claims a filing is complete, (2) checker opens the state's own status-lookup page, (3) compares live status to the claim, (4) releases payment or alerts the org, (5) re-checks weekly.
Stack: browser agent (TC-02 Sonnet 4.5 computer use or TC-03 Claude for Chrome, production/production-adjacent) for reading real public status pages; a simple hold/release payment stub (does not need a real payment protocol for the demo).
Riskiest: scaling to every state's filing portal is out of scope, but checking 1-2 real, public state status-lookup pages is realistic within 48h since those pages need no login. Payment escrow logic can be simplified to a stub without weakening the demo.
Verdict: demoable: yes — the check against a real public portal is buildable and is the actual core loop; escrow/payment is peripheral and can be simplified.

### I-2549 Medicare Advantage Appeal Autofiler
Core loop: (1) photograph/OCR a denial letter, (2) extract plan, procedure code and deadline, (3) draft a citation-backed appeal referencing plan coverage criteria, (4) show a deadline countdown.
Stack: OCR (TC-30 Mistral OCR 3), LLM drafting.
Riskiest: none major — same well-trodden extractor+drafter pattern as I-2070, demoed with one sample letter.
Verdict: demoable: yes.

### I-2583 Am I Actually Hacked
Core loop: (1) user describes the symptom, (2) agent enumerates real running processes, network connections, browser extensions and startup entries, (3) LLM correlates signals against known indicators of compromise, (4) shows plain-English evidence, (5) offers a removal plan only if confirmed.
Stack: standard OS scripting (PowerShell/WMI/registry queries — pre-window, no special capability needed), LLM reasoning over the collected evidence. No tech-card capability required; this is ordinary system introspection plus an LLM.
Riskiest: heuristic false positive/negative rate generalized across arbitrary real infections is unproven, but the demo only needs one rigged VM with one planted malicious extension to show the loop working end to end.
Verdict: demoable: yes — system enumeration is routine engineering, and the demo machine is fully controlled.

### I-3011 Interview Pattern Report
Core loop: (1) browser extension records the candidate's own audio across video interviews, (2) transcribes each, (3) computes pace/filler-word metrics, (4) stores metrics per session, (5) after a rejection, cross-references recent sessions to flag the recurring pattern with clips.
Stack: browser tab/mic capture (native `getUserMedia`/`tabCapture`), STT (TC-31 Kyutai or any Whisper-class model), simple speech-rate/filler-word heuristics.
Riskiest: needing several real past interviews to show a genuine cross-session pattern; demo uses a pre-recorded synthetic set of "past interviews" instead of a live multi-week history.
Verdict: demoable: yes — every component is standard STT plus heuristics; only the multi-session history is pre-seeded rather than organically collected.

### I-3039 The Sandbox Gatekeeper
Core loop: (1) check whether referenced functions/commit hashes/file paths exist in the codebase, (2) spin up the affected version in a disposable container, (3) attempt the reporter's proof-of-concept, (4) score plausibility, (5) route only reproduced/scored reports to a human.
Stack: static repo checks (git/grep), disposable containers (Docker), LLM to judge PoC-against-codebase plausibility.
Riskiest: general automatic reproduction across arbitrary open-source projects and vulnerability classes is not solvable in 48h. Scope the demo to one prepared project (e.g., curl) with 1-2 canned reports (one real, one fabricated referencing a nonexistent function), which the card's own demo moment does.
Verdict: demoable: yes for the scoped demo — one project, prepared reports; not a general-purpose gatekeeper within 48h, but that's not required to prove the loop.

### I-3048 Remote Family PC Copilot
Core loop: (1) user describes the problem in plain words, (2) agent reads real machine state (startup apps, logs, drivers, disk health), (3) shows evidence before proposing a fix, (4) family approves remotely, (5) applies fix with a restore point and one-click undo.
Stack: standard Windows diagnostic APIs (PowerShell/WMI/Event Log — no special capability card needed), LLM reasoning, a simple remote-approval web flow.
Riskiest: safely executing and rolling back an arbitrary real fix; the demo controls this by pre-staging a deliberately slowed laptop with known, scripted issues rather than diagnosing an unknown real machine.
Verdict: demoable: yes — diagnostics and restore-point rollback are ordinary engineering; the demo machine's problems are prepared in advance.

### I-3070 The Season Box
Core loop: (1) local open-weight model reads a scanned W-2/1099 offline, (2) posts structured entries to a local ledger, (3) drafts the required per-vendor AI-consent form, (4) client signs before any cloud AI is used.
Stack: gpt-oss-20b (TC-22, fits 16GB, Apache 2.0) served via llama.cpp/Ollama (TC-26, production).
Riskiest: the "rented offline appliance" hardware/logistics angle is out of scope for a 48h demo, but that's not needed — a laptop in airplane mode stands in for the box, as the card's own demo moment does. Bigger real risk: whether a local 16GB open-weight model extracts structured W-2/1099 fields as reliably as a commercial OCR pipeline; accuracy on messy real-world scans is unproven.
Verdict: demoable: risky — airplane-mode demo is easy to stage, but local-model extraction accuracy on tax-form layouts is the unverified part and may need a clean, prepared sample form to look reliable.

### I-3506 On-Device Elder-Fraud SAR Drafter
Core loop: (1) local model scans a flagged member's transaction history on the compliance officer's own workstation, (2) matches gift-card/romance-scam/new-payee patterns, (3) drafts a SAR narrative and evidence packet, (4) all offline, no cloud call.
Stack: gpt-oss-20b (TC-22) via llama.cpp (TC-26), both production, self-hosted.
Riskiest: pattern-detection quality of a local model versus a cloud model on subtle fraud signals is unproven at scale, but the demo plants an obvious hidden gift-card pattern in synthetic data, which is easy to detect reliably.
Verdict: demoable: yes — offline local-LLM analysis plus templated narrative drafting is straightforward given a prepared synthetic statement.

### I-3537 Supply-Run Spend Guardrail
Core loop: (1) owner sets one session budget, (2) tool tracks every micropayment/card-token charge the agent makes across supplier sites, (3) running total updates live, (4) tool hard-stops the agent at the cap.
Stack: x402 micropayments (TC-15, early production) and/or card-network agent tokens (TC-14, rolling out, mainstream adoption targeted 2026). Both are real but immature.
Riskiest: real x402/card-token integration across three live external supplier sites in 48h is unrealistic given the protocols' early-production status. Fake in demo: a mock x402 test server and 2-3 team-built mock supplier sites, with the guardrail's tracking-and-cap logic running for real against those mocks.
Verdict: demoable: risky — the budget-tracking and hard-stop logic is real and demoable, but only against self-built mock payment endpoints, not live x402/card-network traffic.

### I-3563 Guardian Accounting Discrepancy Sentinel
Core loop: (1) ingest receipts, bank statements and short voice notes through the year, (2) OCR/transcribe and categorize each transaction into the court's required fields, (3) cross-check totals against bank balances, (4) surface mismatches ahead of the filing date.
Stack: OCR (TC-30 Mistral OCR 3), STT for voice notes (TC-31 Kyutai or similar), LLM categorization against a fixed court schema.
Riskiest: none major — an extract-categorize-reconcile pipeline is a well-trodden pattern; demo drops in a prepared folder with one planted discrepancy.
Verdict: demoable: yes.

### I-4014 Pivot: Will the Sofa Fit?
Core loop: (1) film a 60-second phone walkthrough (no depth sensor), (2) reconstruct 3D geometry of doorways/landings/turns from that ordinary video, (3) run a motion planner for the item, (4) return a verdict and animation, (5) reuse scanned routes for a "fits my home" filter.
Stack: monocular video 3D reconstruction — the card itself flags this as `[unverified]` ("recent models reconstruct accurate 3D geometry from ordinary phone video"), and it is not listed in `config/tech_cards.md`.
Riskiest: centimeter-accurate 3D reconstruction from ordinary (non-depth) phone video is exactly the unverified core capability the whole idea depends on — this is not a peripheral part to fake, it is the Novel-track core AI loop, and it has no confirmed 48h-buildable solution. Note: a sibling idea, I-2038, gets the same outcome cheaply by using LiDAR depth capture instead of monocular reconstruction.
Verdict: demoable: no — the core geometry-reconstruction capability is unverified and not realistically buildable to cm-accuracy from plain video in 48h; use the LiDAR variant (I-2038) instead if this territory is wanted.

### I-4031 The Estate Closing Sweep
Core loop: (1) executor uploads a death certificate once, (2) agent works through each known institution's site inside the executor's own browser session, (3) locates that institution's closure/claim form, (4) uploads the certificate where accepted, (5) produces a checklist of steps needing a call or notary.
Stack: browser agent (TC-03 Claude for Chrome, production, 11.2% residual prompt-injection rate after mitigations).
Riskiest: real institution portals (banks, brokerages, utilities) have anti-bot defenses, MFA and legal sensitivity around uploading a real death certificate to a live account — not something to demo against real institutions in 48h. Fake in demo: 3-4 team-built mock institution portals standing in for real ones, exactly as the demo moment implies.
Verdict: demoable: risky — the browser-agent chaining is real and buildable, but only against mocked portals, not the live diverse institutions the product targets.

### I-4501 Screen Agent Drafts Session Notes
Core loop: (1) local speech model transcribes the session offline, (2) local LLM drafts a SOAP note, (3) local GUI-agent model opens the desktop EHR (no API) and types each field, (4) clinician reviews before saving.
Stack: local STT (e.g., TC-31/TC-32 class models), local LLM (TC-22 gpt-oss), local GUI-grounding model (TC-05 UI-TARS, "moving toward production," open weights).
Riskiest: UI-TARS-class GUI grounding on an arbitrary real legacy desktop EHR is not yet reliable ("moving toward production," not GA) — typing into an unfamiliar, unpredictable UI is the genuine risk. Fake in demo: build a simple mock desktop EHR app the team controls the layout of, so the GUI agent's targets are known and stable, per the demo's own "wifi disabled" staging.
Verdict: demoable: risky — the offline transcribe-and-draft half is solid; the GUI-typing half only works reliably against a prepared mock app, not a real legacy EHR, within 48h.

### I-4537 Silent-Failure Catcher for Locked Systems
Core loop: (1) re-keying agent completes a sync and claims success, (2) a second agent reopens the target field on screen, (3) captures the value actually stored, (4) compares it against the source record, (5) accepts or flags "done" with a before/after screenshot.
Stack: computer-use/screen-reading agent (TC-02 Sonnet 4.5 computer use, production-adjacent).
Riskiest: generalizing the screen-verification step across arbitrary "locked" vertical systems is hard, but scoping to one prepared mock legacy app for the demo is realistic in 48h.
Verdict: demoable: yes — for a single demoed system the verify-by-screenshot loop is a real, working check; broader generality is future work, not required for the demo.

### I-4550 Nursing Home Bill Auditor
Core loop: (1) pull the facility's line-item invoice, (2) pull the plan's EOB/denial history for the same stay, (3) match each billed day against its coverage status, (4) flag days still under an open or unfiled appeal, (5) route into an appeal.
Stack: OCR (TC-30 Mistral OCR 3) for invoice/EOB parsing; the multi-step reconciliation itself needs no live portal since the demo explicitly loads a mock invoice and EOB.
Riskiest: none major, since the demo avoids live multi-portal navigation entirely and works from prepared documents.
Verdict: demoable: yes.

### I-6003 Jev: context-aware AAC phrase suggestions
Core loop: (1) transcribe the other speaker's recent words live, (2) embed/semantically match against the user's saved phrase bank, (3) rank likely replies, (4) surface a few at the top of the existing interface, (5) user selects with their normal access method.
Stack: streaming STT (TC-31 Kyutai or TC-28 Gemini Live), semantic embedding search over a small personal phrase set (standard, not in tech_cards but a proven pattern).
Riskiest: none major — ASR plus embedding search is well precedented; the demo replays a scripted, consented conversation, exactly as its own demo moment states.
Verdict: demoable: yes.

### I-6009 Context-ranked phrases for eye-gaze AAC
Core loop: same as I-6003 — transcribe, semantically match against the approved phrase bank, surface top candidates above the normal grid, never invent wording.
Stack: same as I-6003 (streaming STT + embedding search).
Riskiest: none major — same well-precedented pattern; demo uses a scripted conversation against a sample phrase bank.
Verdict: demoable: yes.

```json
[
  {"id": "I-1020", "demoable": "risky", "riskiest": "live multi-portal login (MFA, layout diversity) is unrealistic in 48h", "stack": "browser-use/Stagehand agent, Mistral OCR 3, LLM matching"},
  {"id": "I-1039", "demoable": "yes", "riskiest": "real automated outbound follow-up phone call, faked as an in-session voice/chat turn", "stack": "Kyutai STT, LLM extraction, gpt-realtime (optional)"},
  {"id": "I-1060", "demoable": "yes", "riskiest": "none major; standard extract-plus-few-shot pattern", "stack": "Mistral OCR 3, long-context LLM few-shot replay"},
  {"id": "I-1505", "demoable": "risky", "riskiest": "revoking real third-party accounts is fragile/destructive; needs pre-built sandbox accounts", "stack": "Sonnet 4.5 computer use or Stagehand"},
  {"id": "I-1534", "demoable": "yes", "riskiest": "none, since the demo plays a pre-recorded call rather than joining a live one", "stack": "Kyutai streaming STT, LLM extraction/drafting"},
  {"id": "I-2008", "demoable": "risky", "riskiest": "resubmission to a real national e-invoicing validator is inaccessible; must be mocked", "stack": "Claude for Chrome or Gmail API, LLM drafting, rejection-code lookup table"},
  {"id": "I-2038", "demoable": "risky", "riskiest": "a working 3D rotated-silhouette clearance solver plus animation is real geometry engineering to build from scratch in 48h", "stack": "iPhone LiDAR capture, custom clearance solver [unverified]"},
  {"id": "I-2044", "demoable": "yes", "riskiest": "the card's own 'reflex-tier model' claim is unverified; substitute regex/entropy heuristics plus an LLM confirm step", "stack": "regex/entropy heuristics + LLM, editor/terminal keystroke hook"},
  {"id": "I-2052", "demoable": "risky", "riskiest": "x402 is early-production/stablecoin-based and general PoC reproduction is hard; only two canned cases fit 48h", "stack": "x402 micropayments, sandboxed reproduction agent"},
  {"id": "I-2070", "demoable": "yes", "riskiest": "citation-grounding edge cases, but this is a standard quote-or-flag pattern", "stack": "Mistral OCR 3, 1M-token-context LLM"},
  {"id": "I-2525", "demoable": "yes", "riskiest": "scaling to every state portal is out of scope, but 1-2 real public status pages are realistic to check live", "stack": "Sonnet 4.5 computer use or Claude for Chrome, stub escrow logic"},
  {"id": "I-2549", "demoable": "yes", "riskiest": "none major; same extract-and-draft pattern as I-2070", "stack": "Mistral OCR 3, LLM drafting"},
  {"id": "I-2583", "demoable": "yes", "riskiest": "heuristic generalization to arbitrary real infections is unproven, but a rigged VM makes the demo reliable", "stack": "OS scripting (PowerShell/WMI), LLM reasoning"},
  {"id": "I-3011", "demoable": "yes", "riskiest": "needs several past interviews for a real pattern; demo pre-seeds a synthetic session history", "stack": "browser tab/mic capture, Kyutai-class STT, pace/filler heuristics"},
  {"id": "I-3039", "demoable": "yes", "riskiest": "general reproduction across arbitrary projects is unrealistic; demo scoped to one project with canned reports", "stack": "git/grep static checks, Docker sandbox, LLM plausibility judge"},
  {"id": "I-3048", "demoable": "yes", "riskiest": "safely applying/rolling back an arbitrary real fix; demo uses a pre-staged laptop with known issues", "stack": "PowerShell/WMI diagnostics, LLM reasoning, web approval flow"},
  {"id": "I-3070", "demoable": "risky", "riskiest": "local 16GB model's extraction accuracy on real tax-form layouts is unproven; appliance itself is simulated by airplane-mode laptop", "stack": "gpt-oss-20b via llama.cpp"},
  {"id": "I-3506", "demoable": "yes", "riskiest": "local-model fraud-pattern detection quality vs cloud is unproven at scale, but demo data has a planted obvious pattern", "stack": "gpt-oss-20b via llama.cpp, offline"},
  {"id": "I-3537", "demoable": "risky", "riskiest": "real x402/card-token integration across live supplier sites is unrealistic in 48h; needs mock payment endpoints", "stack": "x402 micropayments, card-network agent tokens"},
  {"id": "I-3563", "demoable": "yes", "riskiest": "none major; standard extract-categorize-reconcile pipeline", "stack": "Mistral OCR 3, Kyutai STT, LLM categorization"},
  {"id": "I-4014", "demoable": "no", "riskiest": "cm-accurate 3D reconstruction from ordinary monocular phone video is the card's own unverified core capability", "stack": "monocular video 3D reconstruction [unverified]"},
  {"id": "I-4031", "demoable": "risky", "riskiest": "real institution portals have anti-bot defenses and legal sensitivity around a real death certificate; must use mock portals", "stack": "Claude for Chrome browser agent"},
  {"id": "I-4501", "demoable": "risky", "riskiest": "UI-TARS-class GUI grounding on an arbitrary real legacy EHR is not yet reliable; needs a controlled mock EHR app", "stack": "local STT, gpt-oss LLM, UI-TARS GUI-grounding model"},
  {"id": "I-4537", "demoable": "yes", "riskiest": "generalizing across arbitrary locked systems is hard; demo scoped to one prepared mock legacy app", "stack": "Sonnet 4.5 computer use"},
  {"id": "I-4550", "demoable": "yes", "riskiest": "none major, since the demo loads a mock invoice and EOB rather than live portals", "stack": "Mistral OCR 3, LLM matching"},
  {"id": "I-6003", "demoable": "yes", "riskiest": "none major; standard ASR plus embedding search, demoed on a scripted conversation", "stack": "Kyutai or Gemini Live streaming STT, embedding search"},
  {"id": "I-6009", "demoable": "yes", "riskiest": "none major; same pattern as I-6003", "stack": "streaming STT, embedding search"}
]
```
<!-- COMPLETE -->
