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
