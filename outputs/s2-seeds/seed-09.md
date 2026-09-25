# seed-09: authorised social-engineering testing at AI speed

Provenance: the "Original note" line is the group's own words. Everything else in the input is working text Claude wrote from that note, marked [+] below. This seed is read as an authorised, consent-based security-awareness and AI-agent red-teaming service. The group has not yet confirmed that reading (see Open questions). This card stays at the business level. It contains no example messages, pretexts, call scripts or persuasion prompts.

## Seed card

- **Title:** Social-engineering acceleration for companies using AI (group). [+] "Social-engineering testing at AI speed, for companies that run on AI".
- **One-liner:** [+] An authorised testing service that uses AI to run realistic social-engineering tests against a company's staff and its AI agents every week instead of once a year, then fixes whatever gave way.
- **Audience:** Companies using AI in some way (group). [+] Security teams and IT leads at mid-sized companies whose staff use copilots or whose customers talk to AI agents. [+] Channel partners: penetration-testing firms and managed security providers who could white-label it.
- **Pain:** [+] Attackers use AI to make phishing emails, texts and cloned-voice calls cheaper and more convincing. [+] Companies also run AI agents that can be talked into things they shouldn't do. [+] Today's social-engineering testing is manual and slow: a pentest firm might run one campaign a year, and phishing-simulation platforms send generic templates. [+] Cited examples, both marked unverified in the input: a 2024 case where a finance worker paid out about $25M after a deepfake video call, and a dealership chatbot that "agreed" to sell a car for $1.
- **Mechanism:** [+] Consent and scope first: the client signs off on targets, channels and hard limits, every test stays inside that agreement, and executives opt in before any synthetic version of their voice is used. [+] AI builds tailored test scenarios across email, text and voice from information the client has approved. [+] The same engine runs thousands of persuasion-style conversations against the client's own support bot or internal copilot to check whether it can be pushed into refunds, policy exceptions or data leaks. [+] Each failure comes with its fix: a 60-second lesson for the person or a guardrail change for the bot, followed by an automatic retest. [+] Runs continuously, so the company can watch its score change.
- **Enabling tech:** [+] AI scenario generation across email, text and voice, plus synthetic voice with executive opt-in. Most direct reading: language models generating scenarios and running multi-turn adversarial conversations against target bots, plus voice synthesis. `[inferred]`
- **Business model:** [+] Priced per employee per year for staff testing and per AI agent per month for bot testing, with white-label pricing for security firms.
- **Demo moment:** [+] Point it at a sample support chatbot. It runs 200 persuasion attempts, finds 3 that get a refund approved, shows the transcript, applies a fix and retests green.
- **Core insight:** AI has made social-engineering attacks cheap and continuous, so authorised testing has to be cheap and continuous too. A company's AI agents are now social-engineering targets alongside its people. `[inferred]`
- **What excites the group:** The group's words: "acceleration" of social engineering, for companies that use AI. [+] Also: consent and scope built in from the start; weeks of pentest preparation cut to minutes; one engine that tests both staff and AI agents; findings that arrive with a fix and an automatic retest; continuous testing with a visible score instead of an annual exercise.
- **Open questions:**
  - Stated in the seed ([+]): **Is this what the group meant?** "Social engineering acceleration" was read as authorised defensive testing, and the group has not confirmed this. **Misuse:** the same engine is an attack tool, so it needs verified domain ownership, signed rules of engagement, and a hard block on targeting anyone outside the client. **Staff trust and law:** testing your own staff with cloned voices can backfire, and some countries require employee or works-council consent. **Crowded market:** KnowBe4, Hoxhunt and Adaptive Security on the staff side; Lakera, Promptfoo and garak on the AI-agent side `[unverified]`. Is combining people testing and bot testing a real edge, or is it two products?
  - Gaps seen: Both cited incidents (the $25M deepfake payout and the $1 car chatbot) and the competitor positions need sourcing `[unverified]`. How the service verifies that a buyer really represents the target organisation, beyond domain ownership, and who carries liability if a test causes harm. Whether the client's bot is hosted by a third-party vendor whose permission is also needed, and whether tests should run against staging rather than production (cost, rate limits, real refunds). Which employee data counts as "client-approved" and how it is stored and retained. Whether the voice channel belongs in a 48-hour build at all, since the stated demo only uses bot testing. The seed does not define how the "score" is calculated. Whether the buyer for staff testing (security awareness) and the buyer for bot testing (AI or product team) are the same person.
- **Allowed moves:** improve / pivot / break down (default; the group hasn't said)

## Seed as idea card

---
id: seed-09
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# Continuous authorised social-engineering testing

One-liner (≤20 words): Authorised AI-driven social-engineering tests against company staff and AI agents, run weekly, with fix and retest for each failure.
Buyer and niche (≤25 words): Security teams and IT leads at mid-sized companies using copilots or customer-facing AI agents; pentest firms and managed security providers could white-label it.
Pain and evidence (≤40 words; cite the pain dossier file): Attackers use AI to make phishing, texts and cloned-voice calls cheap and convincing; deployed AI agents can be talked into refunds or leaks. Existing tests are manual annual pentests or generic simulation templates. (src: inputs/seeds/seed-09.md)
How it works (≤50 words): Client signs off targets, channels and hard limits; executives opt in before any synthetic voice. AI builds tailored email, text and voice scenarios from client-approved information, and runs thousands of persuasion-style conversations against the client's own bots. Each failure gets a 60-second lesson or guardrail fix, then automatic retest.
Why now (≤25 words; name the specific capability): Language models generate tailored multichannel scenarios and multi-turn adversarial conversations in minutes, as companies deploy AI agents that can approve refunds [unverified].
Demo moment (≤20 words): Against a sample support chatbot, 200 persuasion attempts find 3 refund approvals; show transcript, apply fix, retest green.
Business model (≤15 words): Per employee per year for staff tests; per AI agent monthly; white-label security-firm pricing.

## Original text

```text
<!-- Deferred on 2026-09-25; released for processing by the user on 2026-09-26.
     Everything below was written by Claude except the "Original note" line, which is the group's words verbatim. -->
Original note: sociel enginnering acceleration for companies utilising AI in some way

Title: Social-engineering testing at AI speed, for companies that run on AI
One-liner: An authorised testing service that uses AI to run realistic social-engineering tests against a company's staff and its AI agents, every week instead of once a year, then fixes whatever gave way.
Who it's for: Security teams and IT leads at mid-sized companies that use AI, whether staff use copilots or customers talk to AI agents. Channel partners: penetration-testing firms and managed security providers who could white-label it.
The pain it solves: Attackers now use AI to make phishing emails, texts and cloned-voice calls cheaper and more convincing. A widely reported 2024 case saw a finance worker pay out about $25M after a deepfake video call with "the CFO" (unverified). Companies also run AI agents that can be sweet-talked, for example a dealership chatbot that "agreed" to sell a car for $1 (unverified). Social-engineering tests today are manual and slow: a pentest firm might run one campaign a year, and phishing-simulation platforms send generic templates.
What excites us about it:
- Consent and scope come first. The company signs off on targets, channels and hard limits. Every test stays inside that agreement, and executives opt in before any synthetic version of their voice is used.
- AI builds tailored scenarios from information the client approves, across email, text and voice. Weeks of pentest prep become minutes, which is the "acceleration".
- The same engine tests the company's AI agents. It runs thousands of persuasion-style conversations against the support bot or internal copilot to see whether it can be talked into refunds, policy exceptions or leaking data.
- When someone clicks or a bot gives way, the finding arrives with the fix: a 60-second lesson for the person, a guardrail change for the bot, then an automatic retest.
- It runs continuously rather than once a year, so the company sees its score move.
- Demo: point it at a sample support chatbot. It runs 200 persuasion attempts and finds 3 that get a refund approved, shows the transcript, applies a fix and retests green.
- Business model: price per employee per year for staff testing and per AI agent per month for bot testing, with white-label pricing for security firms.
What we're unsure about:
- Is this what the group meant? "Social engineering acceleration" was read here as authorised defensive testing. The group should confirm.
- Misuse: the same engine is an attack tool. It needs verified domain ownership, signed rules of engagement, and a hard block on anyone outside the client.
- Staff trust and law: phishing your own staff with cloned voices can backfire, and some countries need employee or works-council consent.
- It's crowded: KnowBe4, Hoxhunt and Adaptive Security on the staff side, and Lakera, Promptfoo and garak on the AI-agent side (unverified). Is combining people and bot testing a real edge, or two products?
Allowed moves: improve / pivot / break down (default; the group hasn't said)
```

<!-- COMPLETE -->
