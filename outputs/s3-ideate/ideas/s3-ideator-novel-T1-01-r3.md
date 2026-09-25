## Cards

---
id: s3-ideator-novel-T1-01-r3#01
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r3
---

# Prior-Auth Voice Intake Line

One-liner (≤20 words): Staff dictate prior-auth requests into a phone line; a portal agent files them overnight and calls back with results.
Buyer and niche (≤25 words): Front-desk and prior-authorization staff at small medical practices who currently retype every request into a payer portal.
Pain and evidence (≤40 words; cite the pain dossier file): 39 PA requests per physician weekly, 35% taking 35+ minutes each, cost 13 hours of staff time weekly; 92% of practices hired staff solely for this. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Staff call a dedicated number anytime and speak each patient, procedure and diagnosis; speech is parsed into structured requests. Overnight, an agent logs into every payer portal and submits them. Each morning the same number calls the practice back and reads a spoken summary of approvals, denials and items needing a decision.
Why now (≤25 words; name the specific capability): gpt-realtime's speech-to-speech function calling (GA 2025-08) turns raw dictation into structured actions; Claude Sonnet 4.5 runs the overnight portal work at 61.4% OSWorld [TC-27][TC-02].
Demo moment (≤20 words): Leave three voice notes queuing mock PAs; next call, the line reads back which were submitted, approved or need attention.
Business model (≤15 words): Per-practice monthly fee, priced by PA volume, no software seat required.

---
id: s3-ideator-novel-T1-01-r3#02
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r3
---

# Denial Callback Line

One-liner (≤20 words): Call in, name a patient, hear the payer's exact denial reason read aloud, then say "file it" to appeal.
Buyer and niche (≤25 words): Denial and AR follow-up specialists at small practices who dig through payer portals for reasons that are "incomplete and inaccurate."
Pain and evidence (≤40 words; cite the pain dossier file): Billers report payer denial data is "never accessible" and, when provided, "incomplete and inaccurate," forcing exhaustive research and repeat calls before any appeal can start. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Each night an agent sweeps every payer portal for new denials and their exact reason text. Staff call a number, speak a patient name or claim ID, and hear that text read back verbatim. Saying "file the appeal" triggers the agent to submit a drafted appeal on that portal, no screen involved.
Why now (≤25 words; name the specific capability): ElevenLabs Conversational AI bundles speech recognition, LLM and telephony into one hosted line since 2025-02, letting a phone call replace the entire interface [TC-29].
Demo moment (≤20 words): Call live, ask about a mock denial, hear the payer's own wording, say "file it," watch the appeal submit itself.
Business model (≤15 words): Per-seat monthly fee billed to the practice or billing service.

---
id: s3-ideator-novel-T1-01-r3#03
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r3
---

# Claim Status Call-In Line

One-liner (≤20 words): Ask a phone line for any claim's status and hear it instantly, pulled from last night's full portal sweep.
Buyer and niche (≤25 words): Billers at small practices who manually log into each payer portal or call to check claim status.
Pain and evidence (≤40 words; cite the pain dossier file): Manual claim-status inquiry averages 24 minutes and about $12 per transaction, and only 28% of dental claim-status checks run electronically at all. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Overnight, an agent sweeps every payer portal the practice uses and records current status for every open claim. During the day, staff call a number, speak an account or claim number, and hear the status read back conversationally. If a claim sits past normal turnaround, the agent offers to escalate on a verbal yes.
Why now (≤25 words; name the specific capability): Open-source browser-use agents run scheduled multi-portal sweeps at about $0.02 per browser-hour, making nightly status checks on every claim affordable [TC-06].
Demo moment (≤20 words): Call live, ask "status on claim 88213," hear the answer pulled from the overnight sweep within seconds.
Business model (≤15 words): Monthly fee scaled by the practice's open claim volume.

---
id: s3-ideator-novel-T1-01-r3#04
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r3
---

# SLA Breach Outbound Call

One-liner (≤20 words): The agent calls the practice as a prior-auth deadline nears and escalates the moment staff say "go ahead."
Buyer and niche (≤25 words): Prior-authorization specialists at small practices who only learn a request stalled when a patient calls asking why.
Pain and evidence (≤40 words; cite the pain dossier file): 29% of physicians report a serious adverse event and 24% a hospitalization tied to authorization delays going unnoticed until too late to act. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): On submission, the agent records the payer's own stated turnaround clock and keeps polling that payer's portal. As a deadline nears with no decision, it places an outbound call to the practice, states the situation and reads the escalation script. A spoken "go ahead" triggers the agent to file the escalation on the portal immediately.
Why now (≤25 words; name the specific capability): gpt-realtime's natural outbound conversation and function calling (GA 2025-08) lets a verbal "go ahead" fire a portal action within seconds [TC-27].
Demo moment (≤20 words): A mock PA's countdown breaches live; the phone rings, staff say "escalate," the portal action fires instantly.
Business model (≤15 words): Per-practice monthly fee, tiered by concurrent prior-authorization volume.

---
id: s3-ideator-novel-T1-01-r3#05
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r3
---

# Denial Ledger Voice Query Line

One-liner (≤20 words): Call a number, ask which denials are worth appealing this week, and get a spoken, ranked answer with reasons.
Buyer and niche (≤25 words): Practice managers deciding, among dozens of weekly denials, which ones are worth the staff time to fight.
Pain and evidence (≤40 words; cite the pain dossier file): 81.7% of appealed Medicare Advantage denials are overturned, yet each one still needs manual research before anyone decides whether fighting it is worth the time. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Nightly portal sweeps build a running ledger scoring each denial's overturn likelihood by payer, code and procedure. A manager calls a dedicated number anytime, asks what to appeal this week, and hears the top candidates and why, then can ask follow-up questions such as "why is this one worth it" and get a spoken answer.
Why now (≤25 words; name the specific capability): Falling inference prices let a practice's full multi-year denial history sit in context and be queried conversationally for pennies per call [TC-25].
Demo moment (≤20 words): Call in, ask the question live, hear the top three denials worth appealing with reasons attached.
Business model (≤15 words): Monthly subscription priced by denial volume tier.

<!-- COMPLETE -->
