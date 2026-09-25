### seed-10: what changed
Narrowed the niche to payment- and account-change calls at small financial-services firms and credit unions, a fraud-prevention budget line, instead of generic call-coaching (a crowded market with incumbents like Observe.AI and Balto). Sharpened why-now to name streaming speech-to-text plus sub-second reasoning over verification rules. Kept the demo to the single verification-escalation moment already proven buildable in 48 hours. Repriced against compliance/fraud budgets rather than generic coaching spend.

---
id: s3-improver-late-02#01
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-10]
source_task: s3-improver-late-02
---

# Live call-verification copilot for payment requests

One-liner (≤20 words): Listens live to payment and account-change calls, and privately flags any request that breaks verification policy.

Buyer and niche (≤25 words): Small financial-services firms, credit unions and SMB finance or ops teams that take phone requests to move money or change accounts, with no fraud desk.

Pain and evidence (≤40 words; cite the pain dossier file): Staff verifying a payment or account change mid-call must recall policy, spot social-engineering cues and take notes at once, so risky requests slip through; managers can't listen live and recordings surface fraud only after money moves. (src: inputs/seeds/seed-10.md)

How it works (≤50 words): Streaming transcription runs against the caller's request in real time; when it conflicts with a configured verification rule (wire limits, callback requirements, ID checks), Jev privately prompts the employee to verify and offers one-tap supervisor escalation. Coaching stays scoped to verification and escalation, not general sales scripts.

Why now (≤25 words; name the specific capability): Streaming speech-to-text paired with sub-second language-model reasoning over a live transcript and a firm's own verification rules, now fast enough mid-call [unverified].

Demo moment (≤20 words): Mock wire-transfer call breaks a callback-verification rule; Jev privately flags it and offers one-tap supervisor escalation.

Business model (≤15 words): Per-seat monthly pricing, priced against fraud-prevention and compliance budgets, not generic coaching spend.

### seed-09: what changed
Led with AI-agent adversarial testing, the newer and less crowded wedge, instead of leading with staff phishing (a saturated market: KnowBe4, Hoxhunt). Cut the 48-hour demo to bot-testing only, dropping voice cloning, which raised consent and buildability doubts in the original. Clarified the business model around per-agent pricing as the primary line, with staff-testing and white-label sold as add-ons, removing the "is this one product or two" ambiguity.

---
id: s3-improver-late-02#02
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-09]
source_task: s3-improver-late-02
---

# Continuous adversarial testing for customer-facing AI agents

One-liner (≤20 words): Runs authorised, AI-generated persuasion attacks against a company's own support bots weekly, then fixes and retests each failure.

Buyer and niche (≤25 words): AI and product teams at companies running customer-facing or internal AI agents that can approve refunds, exceptions or access; security teams as secondary buyer.

Pain and evidence (≤40 words; cite the pain dossier file): Deployed AI agents can be talked into refunds, policy exceptions or data leaks; one dealership chatbot reportedly agreed to sell a car for $1 [unverified]. Existing red-team tools test prompts once, not continuously against a live agent. (src: inputs/seeds/seed-09.md)

How it works (≤50 words): The client sets scope and hard limits, then Jev's engine runs thousands of AI-generated persuasion conversations against the client's own bot to probe for refunds, exceptions or leaked data. Each failure returns a transcript plus a suggested guardrail fix, and the bot is automatically retested until it holds.

Why now (≤25 words; name the specific capability): Language models can now generate tailored multi-turn adversarial conversations in minutes, as companies give agents authority to approve refunds and exceptions [unverified].

Demo moment (≤20 words): Against a sample support bot, 200 persuasion attempts win 3 refunds; show the transcript, apply a fix, retest green.

Business model (≤15 words): Priced per AI agent per month; staff-phishing testing and security-firm white-labeling sold as add-ons.

### seed-11: what changed
Narrowed the niche to eye-gaze and switch-access AAC users specifically, the group where every selection is slowest and seconds saved matter most. Fixed the demo gap by replaying a scripted conversation against a synthetic phrase bank rather than needing real consented recordings, which was flagged as unbuilt-out. Clarified willingness to pay by leading with a direct family subscription and device-maker licensing, treating uncertain public funding as an accelerant rather than the primary route.

---
id: s3-improver-late-02#03
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: [seed-11]
source_task: s3-improver-late-02
---

# Context-ranked phrases for eye-gaze AAC

One-liner (≤20 words): Listens to a conversation and moves an eye-gaze or switch-access user's own saved phrases to the top.

Buyer and niche (≤25 words): People who communicate through eye tracking or switch scanning, where every selection is slow; families, speech-language therapists and AAC device makers as buyers.

Pain and evidence (≤40 words; cite the pain dossier file): Eye-gaze and switch users select each letter or phrase through a slow scan or gaze-dwell; even with a saved-phrase bank, finding the right one means navigating folders while the conversation moves on, so the moment to reply passes. (src: inputs/seeds/seed-11.md)

How it works (≤50 words): The device transcribes the other speaker's recent words, matches them against the user's own approved phrase bank, and surfaces a few likely replies above the normal grid. It only ranks existing phrases, never invents wording; the full interface stays available, and listening can be paused or turned off anytime.

Why now (≤25 words; name the specific capability): Fast speech recognition plus on-device semantic matching can rank a personal phrase bank live during conversation on existing AAC hardware [unverified].

Demo moment (≤20 words): Replay a scripted conversation against a sample phrase bank; matching saved phrases rise to the top as lines are spoken.

Business model (≤15 words): Direct family subscription first; license to AAC device makers next; public funding as accelerant.

<!-- COMPLETE -->
