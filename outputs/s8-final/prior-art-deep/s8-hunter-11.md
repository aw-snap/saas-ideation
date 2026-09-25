### I-1534 PA Phone Call Copilot

Searches covered: general web (prior-auth AI voice/transcription tools), payer P2P appeal documentation software, Product Hunt, YC directory, and a follow-up fetch of the two closest hits (BastionGPT, CallSphere).

Closest analogs:
- BastionGPT peer-to-peer note template (https://bastiongpt.com/template/peer-to-peer-note) — structures a P2P call into an appeal-ready note, but only from the clinician's post-call dictation/scratch notes, not a live real-time transcript quoting the payer verbatim.
- CallSphere AI voice agents for prior authorization (https://callsphere.ai/blog/ai-voice-agents-prior-authorization-payer-phone-automation) — places outbound PA calls and pages the physician for P2P, and drafts appeals post-denial, but does not transcribe the physician-held P2P call live or quote the payer's stated criteria.
- Prosper AI ("Kate") voice agent for prior auth (https://www.getprosper.ai/blog/ai-for-prior-authorization-tools) — automates routine PA calls/follow-ups, not live P2P transcription/appeal drafting.

Verdict: adjacent-exists. The prior-auth AI space is crowded with call-automation and appeal-drafting tools, but none found do real-time, quote-cited transcription of a live P2P call fused into a structured appeal file the moment the call ends.

### I-2519 The Compliance Portal Copilot

Searches covered: WISP generator software, IRS PTIN portal autofill/browser-agent tools, Product Hunt, YC directory, IRS Pub 4557/5708 templates, and a follow-up fetch of WISP Builder.

Closest analogs:
- WISP Builder (https://wispbuilder.com/) — editable WISP template platform with e-signatures and audit trail, but confirmed to be a document/template manager, not an AI interview that drafts the WISP nor a browser agent that logs into and fills the IRS PTIN portal or insurer sites.
- IRS Publication 5708 fillable WISP tool (referenced via https://verito.com/written-information-security-plan/) — a free government fillable PDF template, manual, no AI drafting or filing automation.
- TaxGPT (https://www.ycombinator.com/companies/taxgpt) — YC-backed AI for accountants (client comms, IRS notice replies, research), adjacent capability set but not focused on WISP/PTIN/insurer-attestation filing via a browser agent.

Verdict: adjacent-exists. Plenty of WISP templates and generic compliance-form-filling agents exist, but no product found that combines a local-model interview draft with a browser agent auto-filing the IRS PTIN portal and insurer AI-attestation sites end to end.

### I-3088 Vendor Hold-Queue Call Agent

Searches covered: general "AI waits on hold for you" apps, dental/veterinary practice-management vendor support AI, Product Hunt, YC directory, and legacy hold-skipping services (Google Hold for Me, DoNotPay, LucyPhone).

Closest analogs:
- OsmO (https://getosmo.app) and Hold 4 Me / Assindo (general "AI waits on hold" consumer apps) — same core mechanism (dial, navigate IVR, sit on hold, hand off when a human answers), but general-purpose/consumer-oriented, not scoped to practice-management vendor support lines (Dentrix, Cornerstone, PioneerRx) and no post-call verification against actual system state.
- Google "Hold for Me" (https://blog.google/products/pixel/hold-for-me/) — Pixel feature that waits on hold and notifies when a human answers; same hold-waiting mechanism, consumer telephony feature, no ticket-closing verification or vendor-support niche.
- DoNotPay "Skip Waiting On Hold" (referenced via https://techcrunch.com/2019/10/16/avoid-waiting-on-hold/) — calls and calls you back when a human answers; same core mechanism, general consumer use, no niche fit or verification step.

Verdict: adjacent-exists. The hold-waiting/IVR-navigation mechanism is well established across several live consumer and B2B tools, but none found are scoped to dental/vet/pharmacy practice-management vendor support desks, and none re-verify the system state before closing the ticket.

### I-4519 Spotter: Paddle-Raise Vision

Searches covered: charity/gala paddle-raise software, auction paddle-number recognition, Product Hunt, YC directory, and the major incumbent platforms (OneCause, GiveSmart, Handbid, Givebutter).

Closest analogs:
- OneCause "Auction AI" and paddle raise tools (https://www.onecause.com/solutions/compare-givesmart/) — captures paddle raises and pledges, but via manual entry/mobile bidding and text, not camera vision plus fused live speech recognition; AI scoped to lot-description copy, not capture.
- Handbid (https://www.handbid.com/features/auction-management) — mobile bidding and paddle-raise capture at scale, but relies on guests' own phones/text bidding, not room-facing cameras or auctioneer speech fusion.
- Givebutter paddle raise (https://givebutter.com/features/paddle-raise) — real-time pledge capture built into an auction/CRM/payments stack, but manual/mobile-entry driven, not vision-based paddle detection.

Verdict: adjacent-exists. Several incumbents own the paddle-raise-capture niche at galas, but all rely on manual or mobile-bidding data entry; no product found that fuses room cameras with live auctioneer speech recognition to log pledges automatically.

### I-6006 AAC Phrase Ranking Companion

Searches covered: AAC companion apps with eye-gaze/partner-speech ranking, academic literature on partner-speech-driven AAC prediction, Product Hunt, YC directory, and major AAC platforms (Proloquo2Go, Proloquo4Text, TD Snap, Spoken).

Closest analogs:
- "Converser" research system (https://www.tandfonline.com/doi/full/10.1080/07434610701740448) — an academic AAC prototype that used the speaking partner's speech recognition to predict and surface contextually relevant utterances; mechanism is essentially identical, but this is a 2008-era research project with no evidence of being a live, shippable product today.
- Spoken (https://spokenaac.com/features/) — predictive text that "learns from your speech patterns," but predicts from the AAC user's own typed history, not from listening to the conversation partner, and is a full AAC app rather than a device-agnostic companion that ranks an imported phrase bank.
- Proloquo4Text / TD Snap word prediction (https://www.assistiveware.com/products/proloquo4text, https://us.tobiidynavox.com/pages/td-snap-text) — built-in word/phrase prediction based on what the AAC user types, not on listening to the conversation partner, and tied to a single vendor's device rather than a standalone, import-any-phrase-bank companion.

Verdict: adjacent-exists. The core mechanism (rank utterances using the conversation partner's speech) has real academic prior art (Converser), but no live, shipping product was found that does this as a standalone, device-agnostic companion app over an imported phrase bank; commercial AAC apps predict from the user's own typing history, not partner speech.

```json
[
  {"id": "I-1534", "verdict": "adjacent-exists", "competitors": ["BastionGPT peer-to-peer note (https://bastiongpt.com/template/peer-to-peer-note)", "CallSphere AI voice agents for prior authorization (https://callsphere.ai/blog/ai-voice-agents-prior-authorization-payer-phone-automation)", "Prosper AI (https://www.getprosper.ai/blog/ai-for-prior-authorization-tools)"], "note": "Crowded prior-auth AI space, but none found do live, quote-cited real-time transcription of the P2P call itself into a structured appeal file the moment it ends."},
  {"id": "I-2519", "verdict": "adjacent-exists", "competitors": ["WISP Builder (https://wispbuilder.com/)", "IRS Publication 5708 fillable WISP tool", "TaxGPT (https://www.ycombinator.com/companies/taxgpt)"], "note": "WISP templates and generic compliance-form agents exist, but none combine an AI-drafted WISP interview with a browser agent that auto-files the PTIN portal and insurer attestations."},
  {"id": "I-3088", "verdict": "adjacent-exists", "competitors": ["OsmO (https://getosmo.app)", "Google Hold for Me (https://blog.google/products/pixel/hold-for-me/)", "DoNotPay Skip Waiting On Hold"], "note": "Hold-waiting/IVR-navigation call agents are well established, but none are scoped to practice-management vendor support lines or re-verify the fix against real system state before closing."},
  {"id": "I-4519", "verdict": "adjacent-exists", "competitors": ["OneCause (https://www.onecause.com/solutions/compare-givesmart/)", "Handbid (https://www.handbid.com/features/auction-management)", "Givebutter paddle raise (https://givebutter.com/features/paddle-raise)"], "note": "Incumbents own gala paddle-raise capture via manual/mobile-bidding entry; none found fuse room cameras with live auctioneer speech recognition for automatic vision-based logging."},
  {"id": "I-6006", "verdict": "adjacent-exists", "competitors": ["Converser research system (https://www.tandfonline.com/doi/full/10.1080/07434610701740448)", "Spoken AAC (https://spokenaac.com/features/)", "Proloquo4Text / TD Snap word prediction"], "note": "Mechanism has academic prior art (2008 Converser prototype, not live), but no shipping standalone companion app ranks an imported phrase bank from partner speech; commercial apps predict from the user's own typing."}
]
```
<!-- COMPLETE -->
