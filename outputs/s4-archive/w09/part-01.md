---
id: I-6001
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s2-seed-lead
raw_id: seed-09
merged: []
---

# Continuous authorised social-engineering testing

One-liner (≤20 words): Authorised AI-driven social-engineering tests against company staff and AI agents, run weekly, with fix and retest for each failure.
Buyer and niche (≤25 words): Security teams and IT leads at mid-sized companies using copilots or customer-facing AI agents; pentest firms and managed security providers could white-label it.
Pain and evidence (≤40 words; cite the pain dossier file): Attackers use AI to make phishing, texts and cloned-voice calls cheap and convincing; deployed AI agents can be talked into refunds or leaks. Existing tests are manual annual pentests or generic simulation templates. (src: inputs/seeds/seed-09.md)
How it works (≤50 words): Client signs off targets, channels and hard limits; executives opt in before any synthetic voice. AI builds tailored email, text and voice scenarios from client-approved information, and runs thousands of persuasion-style conversations against the client's own bots. Each failure gets a 60-second lesson or guardrail fix, then automatic retest.
Why now (≤25 words; name the specific capability): Language models generate tailored multichannel scenarios and multi-turn adversarial conversations in minutes, as companies deploy AI agents that can approve refunds [unverified].
Demo moment (≤20 words): Against a sample support chatbot, 200 persuasion attempts find 3 refund approvals; show transcript, apply fix, retest green.
Business model (≤15 words): Per employee per year for staff tests; per AI agent monthly; white-label security-firm pricing.

---
id: I-6002
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s2-seed-lead
raw_id: seed-10
merged: []
---

# Jev AI live call copilot

One-liner (≤20 words): An AI that listens to business calls live, flags likely scams, coaches staff, and summons help when asked.
Buyer and niche (≤25 words): Sales teams, contact centres, financial services and small businesses without call coaches; bought by sales, support, or fraud and risk managers.
Pain and evidence (≤40 words; cite the pain dossier file): Staff must listen, think, follow process and take notes mid-call, so they miss fraud signs, hunt for answers, or cannot pause to get help. Managers cannot hear every call; reviewing recordings catches problems afterwards. (src: inputs/seeds/seed-10.md)
How it works (≤50 words): Live call audio is transcribed and analysed as it happens. Jev privately surfaces a policy reminder, suggested question, approved answer, or verify-identity alert. Saying a configured phrase like "help" discreetly notifies a supervisor. Sales prompts follow the company's own playbook; scam flags recommend verification steps rather than accusing callers.
Why now (≤25 words; name the specific capability): Streaming speech recognition plus fast language models that reason over a live transcript and company documents within seconds [unverified].
Demo moment (≤20 words): In a mock call, a request breaks a verification rule; Jev privately prompts verification and offers one-tap supervisor escalation.
Business model (≤15 words): Per-seat monthly pricing; higher tiers add call analytics, integrations and supervisor tools.

---
id: I-6003
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s2-seed-lead
raw_id: seed-11
merged: []
---

# Jev: context-aware AAC phrase suggestions

One-liner (≤20 words): Listens to a conversation and ranks an AAC user's own saved phrases so a relevant reply takes fewer taps.
Buyer and niche (≤25 words): People using AAC via eye tracking, switch scanning or other slow access methods; also families, speech-language therapists, schools, clinics and AAC device makers.
Pain and evidence (≤40 words; cite the pain dossier file): AAC users select letters, words or phrases on a device. Finding the right saved phrase means navigating folders while the conversation moves on; typing or searching can take so long the moment to respond passes. (src: inputs/seeds/seed-11.md)
How it works (≤50 words): The device uses the other speaker's recent words as context, searches the user's personal phrase bank, and moves a few likely replies to the top. It only ranks phrases the user chose or approved; it never composes replies. The normal AAC interface stays available, and listening can be switched off.
Why now (≤25 words; name the specific capability): Fast speech recognition and semantic text matching that can rank a personal phrase bank during a live conversation, possibly on-device [unverified].
Demo moment (≤20 words): Replay a consented conversation; as the other person speaks, the user's matching saved phrases rise to the top.
Business model (≤15 words): License to AAC app or device makers, or optional subscription; public or charitable funding.

---
id: I-6004
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-10]
source_task: s3-improver-late-01
raw_id: s3-improver-late-01#01
merged: []
---

# Compliance Call Copilot

One-liner (≤20 words): Live AI that listens to regulated call-center calls, flags compliance and scam risks, and escalates on request.
Buyer and niche (≤25 words): Debt-collection, insurance-claims and financial-services call centers without dedicated compliance coaches; bought by compliance, fraud-risk or call-center operations managers.
Pain and evidence (≤40 words; cite the pain dossier file): Agents must follow scripted disclosures, verify caller identity and take notes live, so missed disclosures risk fines and unverified callers get through; supervisors can't monitor every call, and review catches violations only afterward. (src: inputs/seeds/seed-10.md)
How it works (≤50 words): The live transcript streams into the assistant, which privately surfaces a required disclosure, a verify-identity alert when a request breaks a scripted compliance rule, or a playbook prompt. A configured phrase such as "help" discreetly pings a supervisor. Built on browser-based call capture and replay, so no telephony integration is needed for the pilot.
Why now (≤25 words; name the specific capability): Low-latency streaming speech-to-text combined with fast language models that reason over a live transcript and a compliance script within seconds [unverified].
Demo moment (≤20 words): Replaying a recorded claims call, a request breaks a verification rule; the assistant privately flags it and pings a supervisor in one tap.
Business model (≤15 words): Per-seat monthly fee plus a compliance-reporting add-on priced per flagged call reviewed.

---
id: I-6005
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: [seed-09]
source_task: s3-improver-late-01
raw_id: s3-improver-late-01#02
merged: []
---

# Continuous Red-Team for Support Agents

One-liner (≤20 words): Continuously runs authorised persuasion attacks against a company's support AI and staff, then fixes what fails.
Buyer and niche (≤25 words): Security and AI-safety teams at companies whose support AI agents can approve refunds or account changes; staff testing sold as an add-on.
Pain and evidence (≤40 words; cite the pain dossier file): AI agents with transaction authority can be persuaded into refunds, discounts or data leaks, a gap staff-only phishing training ignores. Existing agent red-teaming checks prompt injection, not sustained persuasion; annual pentests and generic phishing simulators miss both. (src: inputs/seeds/seed-09.md)
How it works (≤50 words): The client approves targets, channels and hard limits before any test; executives opt in before synthetic voice is used. The engine runs persuasion-style conversations against the client's support or sales agent, testing whether it approves refunds or exceptions it shouldn't. Each failure returns with a guardrail fix and automatic retest.
Why now (≤25 words; name the specific capability): Language models now generate tailored multi-turn persuasion conversations against live agents in minutes, as companies give support bots refund and account authority [unverified].
Demo moment (≤20 words): Against a sample support chatbot, 200 persuasion attempts find 3 refund approvals; show the transcript, apply a fix, retest green.
Business model (≤15 words): Metered per AI agent tested monthly; staff-testing add-on billed per employee to the same buyer.

---
id: I-6006
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: balanced }
parents: [seed-11]
source_task: s3-improver-late-01
raw_id: s3-improver-late-01#03
merged: []
---

# AAC Phrase Ranking Companion

One-liner (≤20 words): A standalone companion app that listens to conversation and ranks an AAC user's own imported phrases for faster replies.
Buyer and niche (≤25 words): AAC users on eye-tracking or switch-scanning devices who can export their phrase bank; also speech-language therapists, schools and clinics who set it up.
Pain and evidence (≤40 words; cite the pain dossier file): Finding the right saved phrase means navigating folders while the conversation moves on, and typing or searching often takes long enough that the moment to reply has passed, even with a well-stocked phrase bank. (src: inputs/seeds/seed-11.md)
How it works (≤50 words): Imports the user's phrase bank as a standard export file, so it works with any AAC device without platform access. It listens to the partner's words, ranks the user's own approved phrases by relevance, and surfaces a few at top. It never composes; listening switches off anytime.
Why now (≤25 words; name the specific capability): Small, fast on-device speech and embedding models now run locally on tablets and eye-gaze devices, making low-latency ranking practical outside a research lab [unverified].
Demo moment (≤20 words): Import a sample phrase-bank file; replay a consented recorded conversation and watch matching phrases rise to the top.
Business model (≤15 words): Direct subscription for the companion app; disability or education funding covers costs; device-maker licensing later.

---
id: I-6007
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-10]
source_task: s3-improver-late-02
raw_id: s3-improver-late-02#01
merged: []
---

# Live call-verification copilot for payment requests

One-liner (≤20 words): Listens live to payment and account-change calls, and privately flags any request that breaks verification policy.
Buyer and niche (≤25 words): Small financial-services firms, credit unions and SMB finance or ops teams that take phone requests to move money or change accounts, with no fraud desk.
Pain and evidence (≤40 words; cite the pain dossier file): Staff verifying a payment or account change mid-call must recall policy, spot social-engineering cues and take notes at once, so risky requests slip through; managers can't listen live and recordings surface fraud only after money moves. (src: inputs/seeds/seed-10.md)
How it works (≤50 words): Streaming transcription runs against the caller's request in real time; when it conflicts with a configured verification rule (wire limits, callback requirements, ID checks), Jev privately prompts the employee to verify and offers one-tap supervisor escalation. Coaching stays scoped to verification and escalation, not general sales scripts.
Why now (≤25 words; name the specific capability): Streaming speech-to-text paired with sub-second language-model reasoning over a live transcript and a firm's own verification rules, now fast enough mid-call [unverified].
Demo moment (≤20 words): Mock wire-transfer call breaks a callback-verification rule; Jev privately flags it and offers one-tap supervisor escalation.
Business model (≤15 words): Per-seat monthly pricing, priced against fraud-prevention and compliance budgets, not generic coaching spend.

---
id: I-6008
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: [seed-09]
source_task: s3-improver-late-02
raw_id: s3-improver-late-02#02
merged: []
---

# Continuous adversarial testing for customer-facing AI agents

One-liner (≤20 words): Runs authorised, AI-generated persuasion attacks against a company's own support bots weekly, then fixes and retests each failure.
Buyer and niche (≤25 words): AI and product teams at companies running customer-facing or internal AI agents that can approve refunds, exceptions or access; security teams as secondary buyer.
Pain and evidence (≤40 words; cite the pain dossier file): Deployed AI agents can be talked into refunds, policy exceptions or data leaks; one dealership chatbot reportedly agreed to sell a car for $1 [unverified]. Existing red-team tools test prompts once, not continuously against a live agent. (src: inputs/seeds/seed-09.md)
How it works (≤50 words): The client sets scope and hard limits, then the engine runs thousands of AI-generated persuasion conversations against the client's own bot to probe for refunds, exceptions or leaked data. Each failure returns a transcript plus a suggested guardrail fix, and the bot is automatically retested until it holds.
Why now (≤25 words; name the specific capability): Language models can now generate tailored multi-turn adversarial conversations in minutes, as companies give agents authority to approve refunds and exceptions [unverified].
Demo moment (≤20 words): Against a sample support bot, 200 persuasion attempts win 3 refunds; show the transcript, apply a fix, retest green.
Business model (≤15 words): Priced per AI agent per month; staff-phishing testing and security-firm white-labeling sold as add-ons.

---
id: I-6009
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: balanced }
parents: [seed-11]
source_task: s3-improver-late-02
raw_id: s3-improver-late-02#03
merged: []
---

# Context-ranked phrases for eye-gaze AAC

One-liner (≤20 words): Listens to a conversation and moves an eye-gaze or switch-access user's own saved phrases to the top.
Buyer and niche (≤25 words): People who communicate through eye tracking or switch scanning, where every selection is slow; families, speech-language therapists and AAC device makers as buyers.
Pain and evidence (≤40 words; cite the pain dossier file): Eye-gaze and switch users select each letter or phrase through a slow scan or gaze-dwell; even with a saved-phrase bank, finding the right one means navigating folders while the conversation moves on, so the moment to reply passes. (src: inputs/seeds/seed-11.md)
How it works (≤50 words): The device transcribes the other speaker's recent words, matches them against the user's own approved phrase bank, and surfaces a few likely replies above the normal grid. It only ranks existing phrases, never invents wording; the full interface stays available, and listening can be paused or turned off anytime.
Why now (≤25 words; name the specific capability): Fast speech recognition plus on-device semantic matching can rank a personal phrase bank live during conversation on existing AAC hardware [unverified].
Demo moment (≤20 words): Replay a scripted conversation against a sample phrase bank; matching saved phrases rise to the top as lines are spoken.
Business model (≤15 words): Direct family subscription first; license to AAC device makers next; public funding as accelerant.

---
id: I-6010
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: [seed-10, A-seed-10-pain-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#01
merged: []
---

# Pre-Call Prep Briefs

One-liner (≤20 words): Builds a one-page pre-call brief from account history so reps already have answers before the call starts.
Buyer and niche (≤25 words): Sales and support teams without a dedicated coaching function; bought by sales or support managers who want reps prepared for every call.
Pain and evidence (≤40 words; cite the pain dossier file): Staff must listen, follow process and hunt for the right answer while a call is live, so they miss steps or stall; live coaching cannot fix a rep who arrives unprepared. (src: outputs/s2-seeds/seed-10.md)
How it works (≤50 words): Minutes before a scheduled call, the tool pulls CRM notes, past tickets and account history, then drafts a one-page brief: likely questions, approved answers and any risk flags to watch for. The rep reads it before dialing; no live audio processing runs during the call itself.
Why now (≤25 words; name the specific capability): Language models can now synthesize scattered CRM, ticket and email history into a short, accurate brief within seconds [unverified].
Demo moment (≤20 words): Pick an account; a one-page brief with three likely questions and approved answers appears in under ten seconds.
Business model (≤15 words): Per-seat monthly pricing; higher tiers add CRM integrations and brief customization.

---
id: I-6011
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [seed-10, A-seed-10-tech-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#02
merged: []
---

# Live Consult Safety Copilot

One-liner (≤20 words): Listens to a telehealth visit live and privately flags a drug-interaction or allergy risk before the doctor prescribes.
Buyer and niche (≤25 words): Telehealth platforms and small clinics running virtual visits; bought by medical directors or clinic operations managers.
Pain and evidence (≤40 words; cite the pain dossier file): During a telehealth visit a doctor must recall the chart and check interactions from memory in real time; a missed allergy or interaction surfaces only after the prescription is sent. [unverified] (src: outputs/s2-seeds/seed-10.md)
How it works (≤50 words): Streaming speech-to-text transcribes the visit live; a fast model cross-checks mentioned symptoms and medications against the patient's chart and known interaction data, privately flagging the doctor before a prescription is finalized. The doctor can dismiss or act on each flag; nothing prescribes automatically.
Why now (≤25 words; name the specific capability): Streaming transcription plus fast reasoning over a live transcript and chart data can now run within a visit's timeframe [unverified].
Demo moment (≤20 words): During a mock visit, naming a drug triggers a private interaction alert before the doctor finalizes the prescription.
Business model (≤15 words): Per-clinic monthly subscription; higher tiers add EHR integration and audit reporting.

---
id: I-6012
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: [seed-10, A-seed-10-aud-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#03
merged: []
---

# AI Roleplay Trainer for New Reps

One-liner (≤20 words): New sales hires practice calls against simulated customer personas and get scored feedback before facing real customers.
Buyer and niche (≤25 words): Sales teams and contact centres without a dedicated call-coaching function; bought by sales enablement leads or team managers.
Pain and evidence (≤40 words; cite the pain dossier file): New reps take weeks to reach competence because managers lack time to roleplay or review early calls, so mistakes happen on real customers before anyone corrects them. [unverified] (src: outputs/s2-seeds/seed-10.md)
How it works (≤50 words): A rep converses with a simulated customer built from common objections and the company's own scripts. After each roleplay, the tool scores adherence to the playbook and highlights missed steps, letting the rep repeat the scenario until confident, without involving a live customer.
Why now (≤25 words; name the specific capability): Conversational voice models can now hold a realistic multi-turn roleplay and give structured feedback immediately after [unverified].
Demo moment (≤20 words): A trainee roleplays a tricky objection; the tool scores the response and names the missed playbook step.
Business model (≤15 words): Per-seat monthly pricing; higher tiers add custom scenario libraries and manager dashboards.

---
id: I-6013
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-10, A-seed-10-biz-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#04
merged: []
---

# Field Inspection Compliance Copilot

One-liner (≤20 words): Walks field technicians through required inspection steps and blocks sign-off until every mandatory check is captured.
Buyer and niche (≤25 words): Field-service and utility companies sending technicians on-site; bought by operations or compliance managers.
Pain and evidence (≤40 words; cite the pain dossier file): Technicians must remember multi-step regulatory checklists on-site; a skipped step surfaces only during an audit, long after the visit, when re-inspection is costly. [unverified] (src: outputs/s2-seeds/seed-10.md)
How it works (≤50 words): A mobile app walks the technician through the checklist for the job type, prompting for a photo or confirmation at each required step, and withholds job sign-off if any mandatory check is missing. Supervisors see completed and flagged jobs without reviewing every visit themselves.
Why now (≤25 words; name the specific capability): On-device checklist logic and photo verification are proven, cheap, and reliably buildable within a short window [unverified].
Demo moment (≤20 words): A technician skips a required photo step; the app blocks job sign-off until it's captured.
Business model (≤15 words): Per-seat monthly pricing; higher tiers add compliance analytics, integrations and supervisor dashboards.

---
id: I-6014
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-10, A-seed-10-insight-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#05
merged: []
---

# Live Email Risk Guard

One-liner (≤20 words): Flags risky wording in an HR or legal email before it's sent, while the writer can still change it.
Buyer and niche (≤25 words): HR and legal teams at mid-size companies; bought by HR directors or general counsel wanting to reduce liability.
Pain and evidence (≤40 words; cite the pain dossier file): A risky phrase is cheapest to fix before sending; once sent it is discoverable and hard to retract, and almost no outgoing mail is reviewed before it goes out. [unverified] (src: outputs/s2-seeds/seed-10.md)
How it works (≤50 words): A lightweight plugin scans a draft as it's typed, comparing wording against a company's own examples of past problem phrases. If a sentence resembles one, it privately suggests a safer rewording before the send button is pressed; the writer can accept, edit or ignore it.
Why now (≤25 words; name the specific capability): Fast language models can compare a draft against a small policy example set cheaply enough to run on every pause [unverified].
Demo moment (≤20 words): Typing a risky performance-review sentence triggers a private suggested rewrite before the email can be sent.
Business model (≤15 words): Per-seat monthly pricing; higher tiers add policy customization and audit logs.

---
id: I-6015
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: balanced }
parents: [seed-11, A-seed-11-pain-2]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#06
merged: []
---

# Routine-Aware Phrase Board

One-liner (≤20 words): Reorders a communication device's phrase board by time of day and location so likely replies are already on top.
Buyer and niche (≤25 words): People using eye-tracking or switch-scanning communication devices; bought by families, therapists or schools setting up the device.
Pain and evidence (≤40 words; cite the pain dossier file): Typing or searching through folders takes long enough that the moment to respond has passed, even when the right phrase already exists in the person's own bank. (src: outputs/s2-seeds/seed-11.md)
How it works (≤50 words): The board learns which phrases a person picks at each time of day, location or routine (mornings, mealtimes, therapy sessions) from their own selection history, then quietly reorders the grid so likely phrases sit near the top before the person starts navigating. No microphone or listening is involved.
Why now (≤25 words; name the specific capability): On-device usage-pattern learning is cheap to run continuously and needs no audio input from anyone [unverified].
Demo moment (≤20 words): Switch the simulated time to "mealtime"; food-related phrases move to the top of the grid automatically.
Business model (≤15 words): License to communication-app or device makers, or an optional subscription.

---
id: I-6016
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: [seed-11, A-seed-11-tech-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#07
merged: []
---

# Live Macro Match for Support Chat

One-liner (≤20 words): Matches a customer's live message to an agent's approved response macros and surfaces the best ones first.
Buyer and niche (≤25 words): Customer support teams working chat or phone; bought by support operations managers wanting faster, more consistent replies.
Pain and evidence (≤40 words; cite the pain dossier file): Agents keep large macro libraries but must search or scroll to find the right one while a customer waits, slowing replies and encouraging paraphrased, off-policy answers. [unverified] (src: outputs/s2-seeds/seed-11.md)
How it works (≤50 words): Speech-to-text or the chat transcript feeds a semantic match against the agent's approved macro library, moving the closest matches to the top of the reply panel as the conversation unfolds. The agent still picks, edits or ignores every suggestion; nothing sends automatically.
Why now (≤25 words; name the specific capability): Fast semantic embedding search over a team's macro library can run inline with a live conversation cheaply [unverified].
Demo moment (≤20 words): A customer asks about a refund; the top three macros reorder to show the refund-policy response first.
Business model (≤15 words): Per-seat monthly subscription; higher tiers add macro analytics and shared team libraries.

---
id: I-6017
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: extractor, track: balanced }
parents: [seed-11, A-seed-11-aud-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#08
merged: []
---

# Phrase Bank Builder From Your Own Words

One-liner (≤20 words): Builds and updates a communication device's phrase bank from a person's own past writing instead of manual entry.
Buyer and niche (≤25 words): People using eye-tracking or switch-scanning communication devices, with families or speech-language therapists helping with setup.
Pain and evidence (≤40 words; cite the pain dossier file): Building and keeping a phrase bank current takes hours of manual typing or menu work, so banks stay small or stale and stop reflecting how the person actually talks now. [unverified] (src: outputs/s2-seeds/seed-11.md)
How it works (≤50 words): The tool reviews a person's past written messages, previously used phrases and any dictated notes, suggests new candidate phrases grouped by topic, and lets the person or a supporter approve, edit or reject each one before it enters the live bank. Nothing is added without approval.
Why now (≤25 words; name the specific capability): Language models can now cluster and phrase-match a person's own past text into usable candidate phrases cheaply [unverified].
Demo moment (≤20 words): Upload sample past messages; ten candidate phrases appear grouped by topic, ready for one-tap approval.
Business model (≤15 words): License to communication-app or device makers, or an optional subscription.

---
id: I-6018
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: [seed-11, A-seed-11-biz-2]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#09
merged: []
---

# Fall Alert Companion

One-liner (≤20 words): A wearable app that detects a fall and alerts a chosen contact within seconds, with a manual override.
Buyer and niche (≤25 words): Older adults living alone and their families; bought directly or covered by charitable or public eldercare funding.
Pain and evidence (≤40 words; cite the pain dossier file): A fall at home can go unnoticed for hours because no one is watching, and by the time it's discovered the outcome is often worse. [unverified] (src: outputs/s2-seeds/seed-11.md)
How it works (≤50 words): A phone or watch sensor detects a sudden fall pattern, waits briefly so the wearer can cancel a false alarm, then messages a chosen contact with location if not cancelled. The wearer can also trigger an alert manually at any time, without waiting for the sensor.
Why now (≤25 words; name the specific capability): Consumer wearable motion sensors plus cheap cellular or Wi-Fi alerting make this buildable without new hardware [unverified].
Demo moment (≤20 words): Simulate a fall on the wearable; a countdown appears, then an alert with location reaches a contact's phone.
Business model (≤15 words): Optional subscription for direct users; public or charitable eldercare funding may cover costs.

---
id: I-6019
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: prosumer, capability: drafter-dialogue, track: balanced }
parents: [seed-11, A-seed-11-insight-1]
source_task: s3-pivoter-late-01
raw_id: s3-pivoter-late-01#10
merged: []
---

# Personal Snippet Recall for Coding

One-liner (≤20 words): Surfaces a developer's own saved code snippets that match the file they're currently editing, ranked automatically.
Buyer and niche (≤25 words): Individual developers and small engineering teams; bought directly, or by an engineering lead standardizing shared snippets.
Pain and evidence (≤40 words; cite the pain dossier file): Developers already have working snippets from past projects, but finding the right one means searching files or memory while the current task waits, so they retype code they've written before. [unverified] (src: outputs/s2-seeds/seed-11.md)
How it works (≤50 words): An editor plugin reads the current file's imports, function names and comments as context, then ranks the developer's own saved snippet library by relevance and shows the top few inline. The developer inserts, edits or ignores each one; nothing is generated or auto-inserted.
Why now (≤25 words; name the specific capability): Fast semantic embedding match against a personal snippet library can run inline in an editor on every pause [unverified].
Demo moment (≤20 words): Open a file importing a payment API; the developer's own saved payment-retry snippet rises to the top.
Business model (≤15 words): License to IDE or dev-tool makers, or an optional subscription; team tiers add shared libraries.

---
id: I-6020
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: [seed-09, A-seed-09-pain-2]
source_task: s3-pivoter-late-02
raw_id: s3-pivoter-late-02#01
merged: []
---

# Agent action firewall

One-liner (≤20 words): Real-time guardrail that blocks AI agents from approving refunds, discounts or data access when a conversation shows persuasion pressure.
Buyer and niche (≤25 words): Product and platform teams running customer-facing AI agents at mid-sized SaaS and retail companies.
Pain and evidence (≤40 words; cite the pain dossier file): Deployed AI agents can be talked into refunds, policy exceptions or data leaks; staff-only training and after-the-fact logs don't stop it. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Sits between the agent and its action APIs. Scores each turn for manipulation patterns (urgency, authority spoofing, repeated reframing) and holds high-risk actions for a second model check or human approval before execution, with an audit trail.
Why now (≤25 words; name the specific capability): Recent guardrail and classifier models can score conversational manipulation and gate tool calls inline in milliseconds [unverified].
Demo moment (≤20 words): A chatbot is talked toward a $1 sale; the firewall halts the tool call and flags the pattern.
Business model (≤15 words): Priced per protected AI agent per month, tiered by transaction volume.

---
id: I-6021
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: [seed-09, A-seed-09-tech-1]
source_task: s3-pivoter-late-02
raw_id: s3-pivoter-late-02#02
merged: []
---

# AI negotiation sparring partner

One-liner (≤20 words): AI-generated adversarial buyer personas that grill sales reps in realistic multi-turn negotiations before a real call.
Buyer and niche (≤25 words): Sales enablement leads and sales managers at B2B companies onboarding new account executives.
Pain and evidence (≤40 words; cite the pain dossier file): New reps lose deals to objections and pressure tactics they've never rehearsed against; roleplay with a manager doesn't scale and isn't realistic. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Rep picks a deal scenario; the model plays a skeptical or aggressive buyer built from the account's public info, runs a multi-turn negotiation by chat or voice, then scores where the rep folded and suggests a stronger line.
Why now (≤25 words; name the specific capability): LLMs can hold a consistent adversarial character across many conversational turns and adapt objections to context [unverified].
Demo moment (≤20 words): Rep pitches a fake renewal; the AI buyer pushes for a 40% discount, then the coach flags the turn.
Business model (≤15 words): Per-seat monthly subscription for sales teams.

---
id: I-6022
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-09, A-seed-09-aud-1]
source_task: s3-pivoter-late-02
raw_id: s3-pivoter-late-02#03
merged: []
---

# Alert triage copilot

One-liner (≤20 words): AI that reads every security alert overnight and hands the IT lead only the three that need a human.
Buyer and niche (≤25 words): Security teams and IT leads at mid-sized companies without a dedicated SOC.
Pain and evidence (≤40 words; cite the pain dossier file): Small IT teams drown in alerts from endpoint, email and cloud tools; most are noise, but missing the real one is costly, and there's no budget for a 24/7 analyst. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Connects to existing security tool alert feeds, correlates related alerts into one incident, checks each against the org's known-good baseline, and writes a plain-language summary with a recommended action for anything unresolved by morning.
Why now (≤25 words; name the specific capability): Models can now read structured alert logs together with free-text notes and triage close to a junior analyst [unverified].
Demo moment (≤20 words): 400 overnight alerts collapse into 3 incidents, each with a one-paragraph explanation and a suggested fix.
Business model (≤15 words): Flat monthly fee per connected security tool, tiered by alert volume.

---
id: I-6023
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-09, A-seed-09-biz-2]
source_task: s3-pivoter-late-02
raw_id: s3-pivoter-late-02#04
merged: []
---

# Uptime and drift monitor for deployed agents

One-liner (≤20 words): Continuously tests a company's live AI agents for hallucination, latency and broken tool calls, and pages when scores drop.
Buyer and niche (≤25 words): Managed service providers and IT consultancies running AI agents for multiple small-business clients.
Pain and evidence (≤40 words; cite the pain dossier file): Once an AI agent goes live, teams have no ongoing way to know if a model update or prompt drift made it worse; issues surface only when customers complain. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Replays a client-approved set of representative conversations against the live agent daily, scores answers for accuracy, tool-call success and latency against a baseline, and alerts the consultancy when any score drops past a threshold.
Why now (≤25 words; name the specific capability): Frequent, cheap LLM-graded evaluation of another model's output can now run daily per agent [unverified].
Demo moment (≤20 words): A prompt change silently breaks a booking tool call; the monitor's daily run catches the drop within a day.
Business model (≤15 words): Priced per monitored AI agent per month, with white-label dashboards for reselling MSPs.

---
id: I-6024
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [seed-09, A-seed-09-insight-2]
source_task: s3-pivoter-late-02
raw_id: s3-pivoter-late-02#05
merged: []
---

# Combined exposure score for cyber cover

One-liner (≤20 words): A single score blending how exploitable a company's staff and its AI agents are, sold to cyber insurers.
Buyer and niche (≤25 words): Cyber-insurance underwriters and brokers pricing policies for mid-sized companies that use customer-facing AI agents.
Pain and evidence (≤40 words; cite the pain dossier file): Insurers price social-engineering risk from staff phishing stats alone and have no signal on a company's customer-facing AI agents, an attack surface now large enough to shift payout risk. (src: outputs/s2-seeds/decomposed/seed-09.md)
How it works (≤50 words): Aggregates a client company's existing phishing-simulation results with a one-time automated probe of its public-facing AI agents' resistance to manipulation, converts both into one exposure score and trend line the underwriter uses at renewal.
Why now (≤25 words; name the specific capability): Automated adversarial probing of live customer-facing chat agents is now fast enough for a one-off underwriting check [unverified].
Demo moment (≤20 words): Two similar companies get different premiums after one support bot fails 15% of probes and the other 2%.
Business model (≤15 words): Per-assessment fee paid by the insurer or broker at each policy renewal.

<!-- COMPLETE -->
