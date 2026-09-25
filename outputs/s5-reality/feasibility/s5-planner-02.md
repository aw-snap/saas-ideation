# Feasibility — s5-planner-02

### I-1003 Nested Spend Envelopes
- Core loop: (1) agent task starts, wraps in a budget envelope with a hard cap; (2) proxy intercepts every outbound payment call the task makes across protocols; (3) proxy sums cumulative spend against the cap in real time; (4) cap breach kills the task and any in-flight sub-tasks; (5) dashboard shows the kill event and spend trail.
- Stack: x402 (TC-15, early production), AP2 (TC-13, partners onboarding, real transactions limited), a thin proxy/middleware service (plain code, no unverified capability needed).
- Riskiest part: getting live x402 and AP2 test transactions actually flowing through real rails in 48 hours — both are early-production with limited real transaction volume. What's faked: the payment rails themselves (simulate x402/AP2 calls through a stub), while the budget-tracking and kill-switch logic — the actual product — runs for real against the stub.
- Verdict: demoable: risky — the enforcement logic is trivial to build and demo, but the two payment protocols it claims to unify are both too immature to wire up live in the window, so the "crosses protocols" claim itself has to be simulated.

### I-1024 PA Status Autopoll
- Core loop: (1) nightly job wakes the agent; (2) Claude computer-use logs into each configured payer portal; (3) it opens every pending PA and reads status/age; (4) results are written to one ranked dashboard; (5) staff see the list before the first patient.
- Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent, 61.4% OSWorld), a simple status DB/dashboard.
- Riskiest part: real payer portals have logins, MFA and layout quirks that push OSWorld-level failure rates (~40%) higher; faked in the demo by building 2-3 look-alike payer portal stand-ins the agent runs against live, rather than real insurer sites.
- Verdict: demoable: yes — the computer-use capability is real and production-adjacent; using demo portals for the live run is a standard, legitimate substitution, not a fake of the core loop.

### I-1050 Built on Jev
- Core loop: (1) an event (keystroke/frame/log line) fires; (2) "Jev," claimed near-instant/near-free, makes a reflex judgement; (3) uncertain cases escalate to a slower model; (4) the reflex layer returns a verdict with no perceptible lag; (5) some host product acts on it.
- Stack: "Jev" model — not in tech_cards.md at all, entirely `[unverified]`; no named host product, API or integration.
- Riskiest part: everything — there is no confirmed model named Jev with the claimed speed/cost, and no concrete product to demo (the card explicitly says "any system," with no chosen use case). Nothing here can be faked around, because the capability claim itself is unverified and there's no scoped feature to build.
- Verdict: demoable: no — depends on an unverified capability and has no concrete product scope to build in 48 hours.

### I-1071 PA Write-Back Server for Agents
- Core loop: (1) an upstream agent finishes resolving a PA and sends the result to this server; (2) a computer-use worker opens the practice's legacy PM software; (3) it finds the matching case by reference number; (4) it enters the approval/denial with notes; (5) it confirms the write back to the caller.
- Stack: Claude computer use (TC-02) or browser-use/Skyvern-style automation (TC-06/TC-07) for the legacy desktop app, MCP authorization (TC-09) for the scoped write credential.
- Riskiest part: no real legacy PM software (e.g., proprietary desktop billing systems) is accessible in 48 hours; faked by building a look-alike legacy UI clone the computer-use worker writes into, while the MCP-scoped write-confirmation flow runs for real.
- Verdict: demoable: yes — computer-use write automation against a mocked legacy screen is a well-trodden pattern and buildable in the window.

### I-1517 Who Actually Owns This API Key
- Core loop: (1) scan connected SaaS admin consoles, webhook logs and the password manager; (2) inventory API keys, service accounts and scheduled automations; (3) map each to its creator; (4) flag ones tied to a departed employee; (5) walk the admin through re-issuing under a governed agent identity.
- Stack: Okta Agent SSO (TC-17, GA 2026-08, production) for re-homing identities; SaaS console APIs vary per vendor (custom code per integration).
- Riskiest part: real Okta Agent SSO tenant access and live SaaS admin-console scanning across several real products in 48 hours; faked by demoing against 2-3 seeded mock consoles and a sandbox Okta tenant rather than a live company's real stack.
- Verdict: demoable: risky — the named capability (Okta Agent SSO) is real and GA, but wiring multiple real SaaS consoles plus a live re-issuance flow in the window is ambitious; a mocked-console demo is safer and still shows the real re-homing step.

### I-1566 Catches When The AI Note Lies
- Core loop: (1) a scribe drafts a therapy note; (2) a local STT model transcribes the original session audio; (3) an LLM compares each note sentence to the transcript; (4) unsupported sentences are highlighted; (5) the therapist re-reads only the flagged lines.
- Stack: Kyutai STT (TC-31, production-capable, self-hosted) or Mistral Voxtral (TC-32, production, open weights), a local LLM for claim-vs-transcript comparison.
- Riskiest part: claim-verification accuracy (false positives/negatives) on real, messy session audio; faked by using a scripted 5-minute mock recording with one deliberately inserted false sentence, as the card itself proposes.
- Verdict: demoable: yes — both the transcription and the comparison loop are real, buildable capabilities, and the scripted demo directly exercises the actual core loop.

### I-2028 Consent-Scoped Agent Passport
- Core loop: (1) proxy uploads POA once; (2) product issues a signed, scoped credential; (3) a caregiving agent presents that credential at an institution's site; (4) the institution verifies and accepts it; (5) a timestamped action log records the interaction.
- Stack: Okta Agent SSO / non-human identity standards (TC-17) for credential issuance; no real bank or agency currently accepts this credential.
- Riskiest part: no real financial institution or agency will accept a novel, unrecognized credential type — the entire "institution verifies and accepts" step must be faked with a mock bank login built by the team, which is also the idea's central value claim, not a peripheral detail.
- Verdict: demoable: risky — credential issuance and logging are real and buildable, but the part that actually matters (third-party institutional acceptance) can only ever be simulated, since no real institution supports this today.

### I-2042 Evidence-First PC Fixer
- Core loop: (1) user describes the problem in plain words; (2) agent reads startup apps, logs, drivers and disk health; (3) it correlates findings to a probable cause and explains it; (4) it proposes one safe fix from a fixed set and takes a restore point; (5) one-click undo reverts it.
- Stack: an LLM with local system-tool calling (Windows APIs/PowerShell), no named tech-card capability beyond general agentic tool use, which is standard and not in dispute.
- Riskiest part: generalizing diagnosis across arbitrary real-world PC issues; faked by using a demo VM with a deliberately induced, known slowdown so the diagnosis and fix are scripted to work reliably on stage.
- Verdict: demoable: yes — restore-point-backed fixes on a staged VM are straightforward engineering, well within 48 hours, and the whole loop can run end to end.

### I-2049 Standing-Order Compliance Radar
- Core loop: (1) browser extension watches drafting inside the e-filing portal; (2) it identifies the assigned judge; (3) it looks up that judge's standing order in a maintained database; (4) it inserts the exact required disclosure paragraph; (5) attorney reviews and submits.
- Stack: Claude for Chrome or similar in-browser agent (TC-03, production) for watching/acting in-session; a hand-curated database of standing orders (plain data, no AI needed for the lookup itself).
- Riskiest part: real court e-filing portals are restricted and risky to script against live; faked by building a mock e-filing UI with a judge-selector field, which the card's own demo moment describes.
- Verdict: demoable: yes — the hard part (text lookup and insertion) is simple templating, not exotic AI, and the mock portal is a legitimate, low-risk demo surface.

### I-2067 AI Voice-Clone Scam Call Guardian
- Core loop: (1) on-device model transcribes the incoming call live; (2) it extracts urgency claims (arrest, frozen account, gift-card demand); (3) it cross-checks against a scam-pattern library and known family facts; (4) it computes a live risk flag; (5) it pushes a warning to the proxy's phone.
- Stack: Mistral Voxtral Realtime (TC-32, production, ~200ms on-device) for streaming transcription, a small local LLM or rule set for pattern matching.
- Riskiest part: true live phone-call interception requires telephony/carrier-level access that's not obtainable in 48 hours; faked by playing a scripted recorded call into the pipeline instead of a real live call, as the card's own demo moment does. The transcription-and-flagging loop itself runs for real.
- Verdict: demoable: yes — the core AI loop (real-time transcription plus scam-pattern detection) is genuinely exercised, only the call-delivery mechanism is a stand-in.

### I-2519 The Compliance Portal Copilot
- Core loop: (1) local model interviews the practitioner with five setup questions; (2) it drafts the WISP and insurer attestation from firm-level facts; (3) a browser agent logs into the IRS PTIN portal and the insurer's site; (4) it fills each form; (5) it confirms submission and tracks renewal dates.
- Stack: a local LLM for drafting, Claude for Chrome / browser-use style agent (TC-03/TC-06) for portal filling.
- Riskiest part: live-filing a real government portal (IRS PTIN) in a public demo risks an unintended real submission with no sandbox available; faked by using a mock replica of the PTIN and insurer portals for the live run, drafting logic runs for real.
- Verdict: demoable: risky — drafting is solid, but the intended selling point ("live-fills the PTIN portal") can't safely be shown against the real government site, so the demo necessarily downgrades to a look-alike portal, weakening the balanced-track end-to-end claim.

### I-2545 POA Rejection Shield
- Core loop: (1) proxy uploads the parent's POA and names the target institution; (2) the tool pulls that institution's POA-acceptance policy pages; (3) a long-context model compares clauses, notary language and expiration rules against the document; (4) it flags exact mismatches with citations; (5) proxy fixes the document before visiting the branch.
- Stack: a long-context LLM (TC-25, production, 1M-token context) for the comparison; document OCR if the POA is scanned.
- Riskiest part: scraping and keeping current dozens of real institutions' policy pages; faked by preloading a handful of real bank/credit-union policy pages for the demo set rather than building live crawling for every institution.
- Verdict: demoable: yes — the comparison loop is a straightforward long-context prompt over provided text, well within reach, and a curated policy set is a reasonable demo scope.

### I-2568 One-Click Bot Policy for Careers Sites
- Core loop: (1) dashboard ingests incoming traffic; (2) it classifies requests into known AI crawlers, signed agents and unclassified bots; (3) owner sets one policy per category (block/allow/charge); (4) tool auto-writes the matching Cloudflare rule; (5) next matching request gets the configured treatment.
- Stack: Cloudflare pay-per-crawl / default bot blocking (TC-16, production), a UA/fingerprint classifier (rule-based, doable without new AI).
- Riskiest part: reliable classification of live, messy real-world traffic in 48 hours; faked by running the dashboard against a seeded/replayed traffic log rather than a real careers page under live load.
- Verdict: demoable: yes — Cloudflare's API is real and production-grade, and a seeded traffic replay driving one real rule-write is an honest, buildable demo.

### I-3001 Local Agent for Protected Dental Data
- Core loop: (1) a fully local GUI agent opens Dentrix's "protected" screens; (2) it reads patient financing, credit card and insurance claim data the way a receptionist would; (3) it extracts records into a local database; (4) other on-site tools query that local DB; (5) nothing leaves the machine, demonstrated by disconnecting from the internet.
- Stack: UI-TARS-2 (TC-05, open-weight GUI agent, moving to production, self-hosted) for offline screen automation.
- Riskiest part: no access to a real licensed copy of Dentrix in 48 hours, and proprietary dental PM software is not something the team can legally or practically obtain and script against; faked by building a look-alike "protected screens" clone for UI-TARS to operate on.
- Verdict: demoable: risky — the offline GUI-agent capability itself is real (TC-05), but the entire premise (Dentrix specifically) can't be validated against the real product, so the demo proves the pattern, not the actual integration.

### I-3031 Consent Concierge Voice Agent
- Core loop: (1) before recording starts, an on-device speech model explains what will be recorded, in the client's language; (2) it asks for verbal consent; (3) it hears the response; (4) it logs a timestamped transcript snippet as the compliance record; (5) the real session recording begins.
- Stack: Mistral Voxtral Realtime (TC-32, production, multilingual, sub-second) for the on-device dialogue.
- Riskiest part: robust multilingual dialogue handling across many phrasings/languages; faked by scripting a known exchange (e.g., a Portuguese "sim") for the live demo, as the card itself proposes.
- Verdict: demoable: yes — this is a narrow, well-scoped voice interaction that Voxtral genuinely supports, and a scripted-language demo still exercises the real pipeline.

### I-3046 Lay of the Land
- Core loop: (1) farmer walks the property narrating memories; (2) app aligns speech to the GPS track; (3) an LLM extracts map layers tagged with year, source and confidence; (4) a follow-up voice agent asks clarifying questions later; (5) successors browse the pinned, confidence-tagged map.
- Stack: phone GPS logging (native), any STT for narration, an LLM for structured extraction — no capability from tech_cards.md is strictly required, this is standard tooling `[unverified: no specific card cited]`.
- Riskiest part: reliably turning rambling, ambiguous narration into correctly geotagged, confidence-scored map layers; faked/simplified by using a short, pre-scripted backyard walk for the live demo rather than a real multi-hour farm walk.
- Verdict: demoable: yes — GPS-to-audio alignment and LLM extraction are ordinary engineering at hackathon scale, and a short scripted walk is a fair demo of the real pipeline.

### I-3055 The Right Words for This Judge
- Core loop: (1) paralegal names the assigned judge; (2) tool looks up that judge's current standing order; (3) an LLM drafts the exact required certification paragraph; (4) paralegal pastes it into the filing; (5) the tool updates automatically if the order changes.
- Stack: any LLM with a curated standing-order database (long-context helps, TC-25, but not strictly required for a handful of judges).
- Riskiest part: sourcing accurate, current standing-order text for many real judges; faked/scoped by curating a small real set (2+ judges with genuinely conflicting rules) for the demo rather than claiming full jurisdictional coverage.
- Verdict: demoable: yes — this is templated retrieval plus drafting, low technical risk, and fully buildable end to end in the window.

### I-3095 On-Prem Exploit Bench
- Core loop: (1) an AI-drafted vulnerability report arrives; (2) an open-weight model checks out the exact internal commit locally; (3) it attempts to reproduce the exploit in a disposable container; (4) it returns pass/fail with the run log; (5) no code or report leaves the firewall.
- Stack: gpt-oss-120b (TC-22, production, self-hosted on one 80GB GPU) as the local reasoning model, a sandboxed container runner.
- Riskiest part: autonomous exploit reproduction against arbitrary code is not a reliably solved problem even for frontier agents; feasible only for a small number of curated, pre-tested bug/patch pairs. Faked by scripting one genuinely reproducible bug and one fabricated-function report, exactly as the card's own demo moment proposes, rather than claiming general reliability.
- Verdict: demoable: risky — the on-prem/local-model infrastructure is real and buildable, but the core claim (autonomous exploit reproduction) only holds for hand-picked examples, not as a general capability, in 48 hours.

### I-3534 Crawler Bill Alarm for Makers
- Core loop: (1) read hosting/CDN logs nightly; (2) cluster requests by crawler fingerprint; (3) estimate bandwidth cost per bot; (4) owner taps to charge or block a bot type; (5) tool auto-applies the Cloudflare pay-per-crawl rule and shows a plain-language summary.
- Stack: Cloudflare pay-per-crawl and default blocking (TC-16, production), fingerprint clustering (rule-based/simple heuristics, not exotic AI).
- Riskiest part: accurate crawler-fingerprint clustering on real, noisy log data; faked by replaying a seeded log file with a real named crawler for the live demo instead of live traffic.
- Verdict: demoable: yes — the Cloudflare integration is real and the clustering logic is simple enough to build reliably in 48 hours; a log replay is a fair demo substitute.

### I-3547 Dealer DMS Toll Ledger
- Core loop: (1) ingest DMS/integration invoices and the underlying contracts; (2) extract fee line items per rooftop and vendor; (3) compare each month's bill against the contracted rate; (4) flag increases, duplicates or new fees; (5) controller disputes flagged items before paying.
- Stack: document OCR/extraction (e.g., Mistral OCR 3, TC-30, production) plus an LLM or rules engine for line-item comparison.
- Riskiest part: format diversity across real CDK/Reynolds/DealerSocket invoices; scoped down by using the two sample months of invoices the card's own demo moment describes rather than claiming full-vendor coverage.
- Verdict: demoable: yes — invoice extraction and rate comparison is a well-understood document pipeline, buildable and demoable end to end in 48 hours.

### I-4004 Medicare Denial Appeal Copilot
- Core loop: (1) family photographs or forwards the denial letter and EOB; (2) OCR extracts the denial code and deadline; (3) an LLM drafts an appeal citing the plan's coverage criteria and the doctor's note; (4) tool assembles a print-ready/portal-upload packet; (5) proxy reviews and submits.
- Stack: Mistral OCR 3 (TC-30, production, $2/1,000 pages) for document reading, an LLM for drafting.
- Riskiest part: citing the correct plan-specific coverage criteria requires access to each plan's actual policy documents, which won't be comprehensively available in 48 hours; faked by using one canned denial letter matched to a pre-loaded sample policy reference for the demo.
- Verdict: demoable: yes — OCR extraction and appeal drafting are both real, mature capabilities, and a single well-prepared sample case demonstrates the loop honestly.

### I-4029 Elder Payee Radar
- Core loop: (1) inside the proxy's delegated session, the agent builds a baseline of the parent's normal payees and amounts; (2) it watches new transactions; (3) it flags first-time payees, gift-card purchases and known scam patterns; (4) each flag shows the specific matched transaction evidence; (5) proxy gets a same-day alert.
- Stack: Claude for Chrome (TC-03, production) for daily in-session bank/bill-site checks, simple anomaly rules over transaction history.
- Riskiest part: automating real bank sites raises reliability and terms-of-service concerns, and no real delegated banking session will be available in 48 hours; faked by building a mock bank/bill-pay portal with seeded transaction history for the live run.
- Verdict: demoable: yes — the anomaly-detection loop is simple and real, Claude for Chrome is a genuine production capability, and a seeded mock portal is a standard, acceptable demo substitute.

### I-4052 Vet Lab-to-Chart Instant Relay
- Core loop: (1) agent watches the lab web portal for completed tests; (2) it extracts values, reading scanned printouts where needed; (3) it opens the matching chart in the PM software; (4) it files the result; (5) it pings the assigned tech.
- Stack: Claude Sonnet 4.5 computer use (TC-02, production-adjacent) for both portal and PM software, Mistral OCR 3 (TC-30, production) for scanned printouts.
- Riskiest part: no real access to Cornerstone or IDEXX systems (proprietary, licensed, no public API) in 48 hours; faked by building look-alike lab-portal and chart-software clones for the agent to operate on.
- Verdict: demoable: yes — both cited capabilities (computer use, OCR) are real and production-grade, and mocked look-alike UIs are a standard, defensible stand-in for the two proprietary systems.

### I-4525 Callback Verifier for Vendor Payments
- Core loop: (1) a vendor's bank-detail change arrives; (2) a voice agent places a live outbound call to the number on file; (3) it speaks with a real person to confirm the change; (4) a browser check independently re-derives the vendor's listed contact details as a second signal; (5) a match releases payment, a mismatch blocks it and flags AP.
- Stack: OpenAI gpt-realtime (TC-27, production, speech-to-speech) plus a telephony bridge (e.g., Twilio, a well-known integration pattern) for outbound dialing.
- Riskiest part: bridging gpt-realtime to real PSTN outbound calling reliably in 48 hours; mitigated (not really faked) by calling a team-controlled demo phone number playing the "vendor" role instead of an uninvolved third party, which is standard hackathon practice, not a fake of the core capability.
- Verdict: demoable: yes — the speech-to-speech verification call is a real, buildable capability, and calling a controlled demo line is a legitimate way to show it live.

### I-4548 Scam Interrupt Button
- Core loop: (1) agent logs into the parent's bank/card portals nightly; (2) it matches new transactions against known scam signatures; (3) it flags a match same-day; (4) it texts the proxy the flagged item with a redacted evidence image; (5) it includes a scripted call to freeze the account.
- Stack: browser automation (Claude for Chrome / browser-use, TC-03/TC-06, production) for portal reads, simple pattern-matching for scam signatures.
- Riskiest part: real bank portal login automation raises MFA and terms-of-service issues; faked by seeding a mock bank/card transaction feed for the live demo, exactly as the card's own demo moment describes.
- Verdict: demoable: yes — the detection loop is simple and real, and a seeded transaction feed lets the whole pipeline run end to end live within the window.

### I-6001 Continuous authorised social-engineering testing
- Core loop: (1) client signs off on targets, channels and limits; (2) AI builds tailored phishing/voice/text scenarios from approved client info; (3) it runs many persuasion-style conversations against the client's own staff or bots; (4) each failure gets a 60-second lesson or guardrail fix; (5) it automatically retests.
- Stack: an LLM for scenario generation and multi-turn adversarial dialogue (general capability, no specific tech card required beyond standard LLM chat); voice channels would add TC-27/TC-29 if used.
- Riskiest part: running real synthetic-voice social-engineering tests against actual employees raises consent and ethics overhead that can't be resolved in 48 hours; scoped down by demoing text/chat-channel persuasion attempts against the team's own sample support chatbot, skipping live-employee voice tests.
- Verdict: demoable: yes — the generate-attack/detect-failure/fix/retest loop is straightforward LLM orchestration against a self-built target, fully achievable end to end in the window at reduced (chat-only) scope.

### I-6007 Live call-verification copilot for payment requests
- Core loop: (1) streaming transcription runs on the live call; (2) the transcript is checked against configured verification rules (wire limits, callback requirements, ID checks); (3) a conflict triggers a private prompt to the employee; (4) employee can escalate with one tap; (5) supervisor is notified.
- Stack: card names "Jev," an unverified fast model with no tech-card entry; a real substitute exists — Kyutai STT (TC-31, production) or any streaming STT plus a standard LLM for rule-matching, so the loop doesn't actually require the unverified model.
- Riskiest part: sub-second rule-matching reliability on live, imperfect transcripts; faked/scoped by running a scripted mock wire-transfer call for the demo, as the card's own demo moment proposes, rather than claiming general live-call robustness.
- Verdict: demoable: yes — swapping the unverified "Jev" for a real streaming-STT option makes the loop buildable, and a scripted call demonstrates it end to end.

```json
[{"id": "I-1003", "demoable": "risky", "riskiest": "wiring live x402/AP2 transactions in 48h", "stack": "x402 (TC-15), AP2 (TC-13), custom budget proxy"},
{"id": "I-1024", "demoable": "yes", "riskiest": "real payer portal reliability", "stack": "Claude Sonnet 4.5 computer use (TC-02)"},
{"id": "I-1050", "demoable": "no", "riskiest": "unverified 'Jev' model, no concrete product scope", "stack": "unnamed 'Jev' model [unverified]"},
{"id": "I-1071", "demoable": "yes", "riskiest": "no access to real legacy PM software", "stack": "computer use (TC-02/TC-06/TC-07), MCP auth (TC-09)"},
{"id": "I-1517", "demoable": "risky", "riskiest": "live multi-SaaS console + Okta Agent SSO integration in 48h", "stack": "Okta Agent SSO (TC-17), per-vendor console APIs"},
{"id": "I-1566", "demoable": "yes", "riskiest": "claim-verification accuracy on real audio", "stack": "Kyutai STT (TC-31) or Voxtral (TC-32), local LLM comparator"},
{"id": "I-2028", "demoable": "risky", "riskiest": "no real institution accepts the credential yet", "stack": "Okta Agent SSO-style identity (TC-17), custom credential issuance"},
{"id": "I-2042", "demoable": "yes", "riskiest": "generalizing diagnosis beyond staged demo", "stack": "LLM with local system-tool calling"},
{"id": "I-2049", "demoable": "yes", "riskiest": "no access to real e-filing portals", "stack": "Claude for Chrome (TC-03), curated standing-order DB"},
{"id": "I-2067", "demoable": "yes", "riskiest": "no real live telephony intercept", "stack": "Mistral Voxtral Realtime (TC-32), local pattern matcher"},
{"id": "I-2519", "demoable": "risky", "riskiest": "can't safely live-fill the real IRS PTIN portal", "stack": "local LLM drafting, Claude for Chrome/browser-use (TC-03/TC-06)"},
{"id": "I-2545", "demoable": "yes", "riskiest": "scraping/maintaining many institutions' policy pages", "stack": "long-context LLM (TC-25)"},
{"id": "I-2568", "demoable": "yes", "riskiest": "live traffic classification accuracy", "stack": "Cloudflare pay-per-crawl (TC-16)"},
{"id": "I-3001", "demoable": "risky", "riskiest": "no real Dentrix access in 48h", "stack": "UI-TARS-2 (TC-05, self-hosted)"},
{"id": "I-3031", "demoable": "yes", "riskiest": "robust multilingual dialogue coverage", "stack": "Mistral Voxtral Realtime (TC-32)"},
{"id": "I-3046", "demoable": "yes", "riskiest": "turning rambling narration into accurate geotags", "stack": "phone GPS + STT + LLM extraction [unverified: no specific tech card]"},
{"id": "I-3055", "demoable": "yes", "riskiest": "sourcing accurate real standing-order text", "stack": "LLM plus curated standing-order DB (TC-25 optional)"},
{"id": "I-3095", "demoable": "risky", "riskiest": "autonomous exploit reproduction is not reliably solved in general", "stack": "gpt-oss-120b (TC-22, self-hosted), sandboxed container"},
{"id": "I-3534", "demoable": "yes", "riskiest": "crawler fingerprint clustering on real noisy logs", "stack": "Cloudflare pay-per-crawl (TC-16), heuristic clustering"},
{"id": "I-3547", "demoable": "yes", "riskiest": "format diversity across real dealer invoices", "stack": "Mistral OCR 3 (TC-30), LLM/rules comparator"},
{"id": "I-4004", "demoable": "yes", "riskiest": "citing correct plan-specific coverage criteria at scale", "stack": "Mistral OCR 3 (TC-30), LLM drafting"},
{"id": "I-4029", "demoable": "yes", "riskiest": "real bank-site automation reliability/ToS", "stack": "Claude for Chrome (TC-03), anomaly rules"},
{"id": "I-4052", "demoable": "yes", "riskiest": "no real access to Cornerstone/IDEXX systems", "stack": "Claude Sonnet 4.5 computer use (TC-02), Mistral OCR 3 (TC-30)"},
{"id": "I-4525", "demoable": "yes", "riskiest": "bridging gpt-realtime to real outbound PSTN calling", "stack": "OpenAI gpt-realtime (TC-27), telephony bridge"},
{"id": "I-4548", "demoable": "yes", "riskiest": "real bank portal login automation (MFA/ToS)", "stack": "Claude for Chrome/browser-use (TC-03/TC-06)"},
{"id": "I-6001", "demoable": "yes", "riskiest": "consent/ethics of live-employee voice tests", "stack": "LLM scenario generation, optional TC-27/TC-29 for voice"},
{"id": "I-6007", "demoable": "yes", "riskiest": "sub-second rule-matching on live imperfect transcripts", "stack": "Kyutai STT (TC-31) as real substitute for unverified 'Jev', LLM rule engine"}]
```
<!-- COMPLETE -->
