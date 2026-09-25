# seed-10: Jev AI, a live business-call copilot

Provenance: the "Original note" line is the group's own words. Everything else in the input is working text Claude wrote from that note, marked [+] below.

## Seed card

- **Title:** Jev AI [+], a live business-call copilot
- **One-liner:** Jev AI listens to business calls and analyses what's happening live. [+] It flags likely scams or risky situations, coaches staff during sales and service calls, and helps a manager step in when an employee asks for support.
- **Audience:** Businesses with business calls (group). [+] High-volume callers: sales teams, contact centres, financial services, and small businesses without a dedicated call-coaching team. Buyers could be sales leaders, customer-support managers, or fraud and risk teams.
- **Pain:** Scam callers, employees who sell poorly, and employees who need help mid-call (implied by the group's questions) `[inferred]`. [+] Staff have to listen, think, follow process and take notes while the call is happening, so they may miss fraud signs, struggle to find the right answer, or need help without being able to pause. Managers can't listen to every call live, and reviewing recordings catches problems only afterwards.
- **Mechanism:** Listens to the call and analyses it live: is the caller a scammer, is the employee selling well, does the employee need help (for example, if they say "help"). [+] Surfaces timely private prompts: a policy reminder, a suggested question, an approved answer, or an alert to verify the caller's identity. [+] A configured phrase such as "help" notifies a supervisor or shows a discreet prompt. [+] Sales coaching follows the company's own playbook rather than a rigid script. [+] Scam flags recommend safe verification steps and never claim a caller is definitely a scammer based on voice, accent, emotion or an imperfect transcript. [+] First version: one setting and a few high-confidence moments, such as helping a small sales or support team find approved answers and request a supervisor.
- **Enabling tech:** Not named. Most direct reading: streaming speech-to-text plus a fast language model reasoning over the live transcript and company documents. `[inferred]`
- **Business model:** [+] Per-seat monthly pricing for teams, with higher tiers for call analytics, integrations and supervisor tools.
- **Demo moment:** [+] During a mock customer call, Jev notices a request that conflicts with a company verification rule, privately prompts the employee to verify it, and offers a one-tap way to bring in a supervisor.
- **Core insight:** Problems on a call are cheapest to fix while the call is still happening, and today nobody is listening at that moment except the employee. `[inferred]`
- **What excites the group:** Live analysis of business calls; spotting scam callers; judging whether the employee is selling well; responding when an employee says "help". [+] Also: timely private prompts; discreet escalation without an abrupt hand-off; coaching tied to the company's own playbook that supports rather than scores staff; verification-step recommendations instead of accusations; a narrow first version.
- **Open questions:**
  - Stated in the seed ([+]): Which first use case matters most: fraud prevention, sales coaching, support guidance or discreet escalation (doing all at once could blur the product)? Speech recognition and intent detection errors with accents, noise, interruptions and indirect language; false alerts could distract staff or unfairly label callers. Consent, recording, retention and workplace-monitoring rules for always-on call analysis. Managers using it to monitor or rank employees: how does it help staff without becoming opaque surveillance? Live suggestions must be fast, accurate and grounded in approved information: what does Jev do when uncertain or unavailable? Which call-platform integrations and deployment constraints matter for the first customers?
  - Gaps seen: Existing real-time agent-assist and call-coaching products (for example in contact-centre suites) need checking before positioning `[unverified]`. How Jev hears the call in a 48-hour demo (softphone, browser capture, or recorded replay). What end-to-end latency makes a prompt useful mid-sentence. Whether a small business has the playbook and verification rules Jev needs to ground its prompts. Evidence for how often staff meet scam callers.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-10
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# Jev AI live call copilot

One-liner (≤20 words): An AI that listens to business calls live, flags likely scams, coaches staff, and summons help when asked.
Buyer and niche (≤25 words): Sales teams, contact centres, financial services and small businesses without call coaches; bought by sales, support, or fraud and risk managers.
Pain and evidence (≤40 words; cite the pain dossier file): Staff must listen, think, follow process and take notes mid-call, so they miss fraud signs, hunt for answers, or cannot pause to get help. Managers cannot hear every call; reviewing recordings catches problems afterwards. (src: inputs/seeds/seed-10.md)
How it works (≤50 words): Live call audio is transcribed and analysed as it happens. Jev privately surfaces a policy reminder, suggested question, approved answer, or verify-identity alert. Saying a configured phrase like "help" discreetly notifies a supervisor. Sales prompts follow the company's own playbook; scam flags recommend verification steps rather than accusing callers.
Why now (≤25 words; name the specific capability): Streaming speech recognition plus fast language models that reason over a live transcript and company documents within seconds [unverified].
Demo moment (≤20 words): In a mock call, a request breaks a verification rule; Jev privately prompts verification and offers one-tap supervisor escalation.
Business model (≤15 words): Per-seat monthly pricing; higher tiers add call analytics, integrations and supervisor tools.

## Original text

```text
<!-- Deferred on 2026-09-25; released for processing by the user on 2026-09-26.
     Everything below is working text based on the group's note. -->
Original note: Jev AI listens to business calls and analyses what's happening live: Is the caller a scammer? Is the employee doing a good job selling? Does the employee need help (for example, if they say "help")? Etc.

Title: Jev AI, a live business-call copilot
One-liner: An AI assistant that listens to business calls in real time, flags likely scams or risky situations, coaches staff during sales and service conversations, and helps a manager step in when an employee asks for support.
Who it's for: Businesses that handle high volumes of customer calls, such as sales teams, contact centres, financial services, and small businesses without a dedicated call-coaching team. Buyers could include sales leaders, customer-support managers, and fraud or risk teams.
The pain it solves: Staff have to listen, think, follow process, and record details while a call is happening. They may miss signs of fraud, struggle to find the right answer, or need help without being able to pause the conversation. Managers cannot listen to every call live, and reviewing recordings later catches problems only after they happen.
What excites us about it:
- It can detect cues during the call and surface a timely prompt: a policy reminder, a suggested question, a relevant answer, or an alert to verify the caller's identity.
- An employee can ask for help naturally, including saying a configured phrase such as "help," and the system can notify a supervisor or show a discreet prompt without making the caller feel abruptly handed off.
- For sales conversations, it could provide coaching tied to the company's own playbook, such as reminding the employee to ask about a customer's needs or clarify a next step. It should support the employee rather than score them on a single rigid script.
- For suspected scams, it could flag suspicious patterns and recommend safe verification steps. It should not claim that a caller is definitely a scammer based only on voice, accent, emotion, or an imperfect transcript.
- A useful first version could focus on one setting and a small set of high-confidence moments—for example, helping a small sales or support team find approved answers and request a supervisor.
- Demo: during a mock customer call, Jev notices a request that conflicts with a company verification rule, privately prompts the employee to verify the request, and offers a one-tap way to bring in a supervisor.
- Possible business model: per-seat monthly pricing for teams, with higher tiers for call analytics, integrations, and supervisor tools.
What we're unsure about:
- Which first use case matters most: fraud prevention, sales coaching, customer-support guidance, or discreet escalation? Trying to do all of them at once could make the product unfocused.
- Speech recognition and intent detection can be wrong, especially with accents, noise, interruptions, and emotional or indirect language. False alerts could distract staff or unfairly label callers.
- Always-on call analysis raises consent, recording, retention, and workplace-monitoring questions. Customers need clear notice, suitable controls, and a way to understand what is captured and retained.
- Managers may use the system to monitor or rank employees. How can the product help staff without becoming an opaque surveillance or performance-scoring tool?
- Live suggestions must be fast, accurate, and grounded in approved company information. What should Jev do when it is uncertain or the system is unavailable?
- What call-platform integrations and deployment constraints would make this practical for the first customer group?
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
