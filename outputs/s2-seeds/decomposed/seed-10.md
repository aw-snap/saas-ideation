# seed-10 decomposed: Jev AI, a live business-call copilot

## Atoms

- A-seed-10-aud-1: Sales teams and contact centres without dedicated call-coaching staff.
- A-seed-10-aud-2: Financial-services and small-business teams exposed to scam callers.
- A-seed-10-aud-3: Sales, support and fraud/risk managers who buy the tool for their teams.
- A-seed-10-pain-1: Staff must listen, follow process and take notes live, so they miss fraud cues or the right answer.
- A-seed-10-pain-2: Managers cannot listen to every call live; reviewing recordings only catches problems afterward.
- A-seed-10-mech-1: Streams the live transcript and privately surfaces a policy reminder, suggested question or verify-identity alert.
- A-seed-10-mech-2: A configured phrase like "help" discreetly notifies a supervisor without an abrupt hand-off.
- A-seed-10-mech-3: Coaches sales calls against the company's own playbook rather than a rigid script.
- A-seed-10-tech-1: Streaming speech-to-text feeding a fast language model reasoning over the live transcript. [inferred]
- A-seed-10-tech-2: Retrieval over company documents/playbook to ground prompts and answers. [inferred]
- A-seed-10-biz-1: Per-seat monthly pricing, with higher tiers for analytics, integrations and supervisor tools.
- A-seed-10-demo-1: Mock call where a request breaks a verification rule; Jev privately prompts verification and offers one-tap supervisor escalation.
- A-seed-10-insight-1: Problems on a call are cheapest to fix while it's still happening, and no one else is listening live then.

## Prior art

- Hiya AI Phone: consumer call assistant that screens calls and flags live/deepfake scams. https://www.hiya.com/newsroom/press-releases/hiya-launches-first-ai-call-assistant-that-stops-live-and-deepfake-scams-in-real-time — adjacent (scam-detection focus, not sales coaching or supervisor escalation).
- JustCall AI Agent Assist: listens to live calls and surfaces scripts, FAQ answers and playbook prompts to reps. https://justcall.io/product/ai-agent-assist/ — adjacent to direct-competitor on the sales/support coaching mechanism, but no stated scam-flagging or supervisor-escalation-by-phrase feature.
- JustCall AI Coaching: real-time sales coaching against playbook topics. https://justcall.io/product/ai-coaching/ — adjacent, overlaps with the coaching atom only.
- Convin AI phone assistant: real-time fraud-pattern flagging on live calls. https://convin.ai/en-us/blog/ai-phone-call-scams — adjacent, overlaps with the scam-flagging atom only.

Verdict: adjacent-exists. Live agent-assist/coaching tools (JustCall) and live scam-flagging tools (Hiya, Convin) each exist separately; no single product combines coaching, scam-verification prompts and phrase-triggered supervisor escalation, but the seed's individual mechanisms are already live in market.

## Weakest points

- The three-in-one bundle (coaching + scam flags + escalation) risks positioning as "yet another agent-assist tool" unless narrowed to one wedge, which the seed itself flags as unresolved.
- Speech recognition/intent errors on accents, noise and indirect language could produce false alerts, and the seed has no answer yet for what Jev does when uncertain.
- Always-on call listening raises consent, recording-retention and workplace-surveillance questions that established competitors already had to solve; no evidence yet that a small business has the playbook/verification rules needed to ground prompts.

<!-- COMPLETE -->
