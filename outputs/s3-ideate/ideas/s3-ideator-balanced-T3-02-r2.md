## Cards

---
id: s3-ideator-balanced-T3-02-r2#01
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
---

# Vendor Hold-Queue Call Agent

One-liner (≤20 words): Calls system-of-record support lines, sits on hold, and confirms the fix actually landed before closing the ticket.
Buyer and niche (≤25 words): Dental, vet and pharmacy office managers who depend on Dentrix, Cornerstone or PioneerRx support desks for every system problem.
Pain and evidence (≤40 words; cite the pain dossier file): Dentrix and Cornerstone support leaves staff on hold "longer than 30 minutes," and some have "called and emailed for weeks trying to get help" while the practice's system stays broken. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A voice agent dials support, navigates the phone tree, states the issue and stays on hold so staff don't have to. Before closing the ticket it re-checks the actual system state instead of trusting the vendor's word, because agents that report a fix "resolved" are often wrong.
Why now (≤25 words; name the specific capability): ElevenLabs Conversational AI gives a small team a production hosted voice-agent stack (speech, LLM, telephony) without building one.
Demo moment (≤20 words): Call a mock support line live, sit through hold music, then confirm the fix against a sample system state.
Business model (≤15 words): Per-practice monthly subscription, priced by number of connected vendor support lines.

---
id: s3-ideator-balanced-T3-02-r2#02
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
---

# Screen-Agent Write Auditor

One-liner (≤20 words): Independently confirms that a screen agent's write into a locked vertical system of record actually happened.
Buyer and niche (≤25 words): Practice managers and ISVs running automations against Cornerstone, Dentrix or AMS360 to eliminate manual re-keying.
Pain and evidence (≤40 words; cite the pain dossier file): Staff already "waste literal hours" re-keying by hand into Cornerstone and do "double and triple entry" across AMS360 and rating tools; a silently failed automated write is worse than none. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): After any screen agent files a record into Dentrix, Cornerstone or AMS360, this tool reopens the target screen, reads the field back and diffs it against the intended value, because production computer-use runs report false "success" on nearly half of real failures, then reopens the task if it doesn't match.
Why now (≤25 words; name the specific capability): Cheap document and screen extraction (about $2 per 1,000 pages) makes reading back and diffing every write affordable to run continuously.
Demo moment (≤20 words): A mock write silently fails; the auditor catches the mismatch and reopens the task instead of marking it done.
Business model (≤15 words): Add-on fee per automated write, sold alongside any screen-agent system-of-record integration.

---
id: s3-ideator-balanced-T3-02-r2#03
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
---

# CAPTCHA Escalation Relay

One-liner (≤20 words): When a screen agent hits a CAPTCHA or login wall inside a locked system of record, it phones the staffer to clear it in seconds.
Buyer and niche (≤25 words): Practice managers and dealer-group staff running data-extraction or migration automations against Dentrix, PioneerRx or Yardi.
Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx access "goes through a manual vendor-inquiry form" and sits "behind authentication," and Dentrix blocks whole "protected" categories, so automated fetches keep tripping login and verification walls mid-run. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The automation always runs under the staffer's own logged-in session, never a spoofed identity, because acting inside an account without the site's own authorization has already triggered legal action elsewhere. When it meets a CAPTCHA or MFA prompt, it calls the staffer's phone with a synthesized alert and a one-tap approval, then resumes.
Why now (≤25 words; name the specific capability): ElevenLabs Conversational AI places an outbound voice alert in minutes; the best browser agents alone still solve only 40% of CAPTCHAs.
Demo moment (≤20 words): The automation hits a CAPTCHA on a mock portal, phones a staff line live, and resumes after one tap.
Business model (≤15 words): Per-seat monthly fee for practices or dealer groups running any locked-portal automation.

---
id: s3-ideator-balanced-T3-02-r2#04
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
---

# Spend Governor for Locked-Portal Agent APIs

One-liner (≤20 words): Caps and tracks spend when your own agents call per-request APIs sitting in front of locked system-of-record portals.
Buyer and niche (≤25 words): ISVs and integration teams whose internal agents poll screen-agent-exposed Dentrix, PioneerRx or Yardi endpoints on a per-call basis.
Pain and evidence (≤40 words; cite the pain dossier file): Dentrix Ascend overage runs $0.0018 per call on top of a $5,000 registration fee, so an agent stuck in a retry or polling loop against a locked system of record can burn budget with nobody watching. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A proxy sits between every internal agent and each screen-agent-exposed endpoint, sets a hard per-session and per-day spend cap, and gives one dashboard across all connected verticals, because today's per-call payment rails move the money but don't track a budget or enforce limits across a whole sequence of calls.
Why now (≤25 words; name the specific capability): Skyvern and browser-use already expose locked portals as callable APIs; nothing yet meters what an agent spends calling them.
Demo moment (≤20 words): A polling loop makes its 25th call past the cap; the governor blocks it and shows live spend.
Business model (≤15 words): Percentage of metered spend, plus a flat monthly platform fee.

---
id: s3-ideator-balanced-T3-02-r2#05
track: balanced
lineage: seed-atom-hybrid
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: [A-seed-05-mech-3, A-seed-05-insight-1]
source_task: s3-ideator-balanced-T3-02-r2
---

# Safe-Write Agent for Legacy Practice Systems

One-liner (≤20 words): Every automated write into a locked practice system takes a restore point first, so a bad write can be undone in one click.
Buyer and niche (≤25 words): Vet techs, insurance CSRs and dental staff running screen agents to file lab results, cancellations or patient records automatically.
Pain and evidence (≤40 words; cite the pain dossier file): Cornerstone needs "copy/paste to move patients between department schedules," and a cancellation that missed Applied Epic caused a reported "$42,000 policy loss," so an unsupervised automated write carries real financial risk. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): Before any screen agent writes into Cornerstone, AMS360 or Dentrix, the tool snapshots the target record as a restore point and shows staff exactly what will change. If the write turns out wrong days later — a cancellation missed, a value overwritten — one click restores the prior state.
Why now (≤25 words; name the specific capability): Desktop computer-use agents can now execute the write step itself; pairing every write with a snapshot closes the risk that creates.
Demo moment (≤20 words): A wrong write into a mock record is restored to its prior state with one click.
Business model (≤15 words): Per-seat monthly fee, bundled with any screen-agent system-of-record integration.

<!-- COMPLETE -->
