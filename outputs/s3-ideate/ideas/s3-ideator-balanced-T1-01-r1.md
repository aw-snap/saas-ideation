## Titles

1. Portal Copilot for Prior Auth [safe] → rewrite: **Prior-Auth Night Shift** — an unattended agent that works the whole PA queue overnight, not a copilot watching over a shoulder.
2. One Login, All Payers [safe] → rewrite: **Payer Portal Stunt Double** — an agent that logs in and acts as the biller on each separate portal, since no real single sign-on exists across payers.
3. PA Status Autopoll
4. Denial Reason Finder [similar to 12, 26] → rewrite: **Denial Fingerprint Library** — a cross-payer library that ties each denial to its root cause code, not a single-case lookup.
5. Eligibility Check Autopilot
6. The Portal Butler [safe] → rewrite: **Portal Exit Interview** — logs every dead end and error a portal threw today as dispute evidence, not a vague assistant.
7. Claim Status Sweep [similar to 3, 24] → rewrite: **Claims Heartbeat Monitor** — a continuous pulse check on every submitted claim, not a one-time sweep.
8. Appeal Packet Builder
9. Payer Portal Memory [safe] → rewrite: **Master Patient File, Eight Payer Shapes** — one profile auto-reshaped into each payer's own form fields.
10. PA Form Autofill Agent [safe] → rewrite: **Boilerplate Engine for Payer Forms** — reuses a growing library of past justifications instead of blank-page autofill.
11. Availity Whisperer [safe] → rewrite: **The Portal Interpreter** — translates cryptic payer error codes into plain next steps.
12. Denial Pattern Radar
13. Multi-Payer Dashboard [safe] → rewrite: **War Room for Denials** — a live triage board ranked by dollars and deadline, not a static dashboard.
14. Prior Auth Concierge [safe] → rewrite: **PA Escalation Trigger** — auto-launches a peer-to-peer review request the moment a PA crosses a delay threshold.
15. Portal Outage Alert Bot
16. Claims Duplicate Catcher
17. PA Submission Autopilot [similar to 1, 10] → rewrite: **Same-Day PA Submitter** — closes the gap between order and submission by filing within minutes of the order.
18. Payer Portal Translator [safe] → rewrite: **Cross-Payer Rulebook** — a single plain-English rulebook of which procedures need PA per payer, built by reading each payer's own bulletins.
19. Denial-to-Appeal Pipeline
20. Portal Credential Vault [safe] → rewrite: **Login Relay for Shared Portal Seats** — hands off a live authenticated session between staff without re-entering 2FA.
21. 2FA Relay Agent
22. Eligibility Verification Agent [similar to 5] → rewrite: **Tomorrow's Patients, Tonight's Eligibility** — batch-verifies the whole next day's schedule overnight.
23. NaviNet-to-Availity Migration Helper [safe] → rewrite: **Portal Migration Autopilot** — detects when a payer retires its portal and re-registers the practice automatically.
24. PA Turnaround Tracker [similar to 3, 7] → rewrite: **PA Clock** — a countdown per request against that payer's own stated SLA, not a generic tracker.
25. Claim Status Digest Email
26. Denial Evidence Digger [similar to 4, 12] → rewrite: **Denial Autopsy** — root-causes each denial against the original submission to show exactly which field triggered it.
27. Portal Session Recorder
28. Payer Rule Change Watcher
29. PA Approval Predictor
30. Front-Desk Portal Relay [safe] → rewrite: **Front Desk's Portal Stand-In** — fully takes over routine portal chores during patient-facing hours, not just relaying messages.

## Cards

---
id: s3-ideator-balanced-T1-01-r1#01
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# PA Status Autopoll

One-liner: A browser agent checks every open prior authorization on every payer portal each night, so staff start with answers, not logins.

Buyer and niche: Practice managers and billing staff at small medical practices tracking prior authorizations across seven or more separate payer portals.

Pain and evidence: 39 PA requests per physician per week, 16-24 minutes each spent checking status one payer at a time, mostly still manual keying. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: Each night the agent logs into every configured payer portal using the practice's own credentials, opens each pending PA, records status, age and next action, and writes one ranked list ready before the first patient arrives.

Why now: Claude Sonnet 4.5 computer use scores 61.4% on OSWorld and can run unattended for 30+ hours across sessions.

Demo moment: Three demo payer portals get checked live; the dashboard fills in under a minute and flags a stalled request.

Business model: Monthly subscription priced per payer portal connected.

---
id: s3-ideator-balanced-T1-01-r1#02
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Tomorrow's Patients, Tonight's Eligibility

One-liner: Every night, an agent checks tomorrow's whole schedule for eligibility and benefits before the first patient arrives.

Buyer and niche: Front-desk staff and practice managers at small medical practices who verify eligibility across many separate payer portals each day.

Pain and evidence: Staff re-check eligibility one payer portal at a time, the same pattern that costs 16-24 minutes per manual PA or claim check across 7-11+ portals. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: The agent logs into each payer portal the night before, looks up every patient on tomorrow's schedule, records active coverage, copay and any referral or PA requirement, and drops one summary line per patient into the front-desk queue.

Why now: Claude for Chrome runs inside the practice's own logged-in browser session, handling routine chores without new integrations.

Demo moment: A five-patient demo schedule is checked overnight; front desk opens a one-page summary at 8am.

Business model: Per-practice subscription priced by schedule volume.

---
id: s3-ideator-balanced-T1-01-r1#03
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Denial Pattern Radar

One-liner: Before a prior auth is submitted, it flags exactly what has made this payer deny this procedure before.

Buyer and niche: Billers and prior-authorization specialists at small practices preparing PA submissions for payers with a history of denials.

Pain and evidence: 81.7% of appealed Medicare Advantage denials are overturned, showing most were avoidable at submission; denial reasons are hard to find in payer portals. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: The tool keeps a running record of each payer's past denial reasons per procedure code, drawn from the practice's own denial letters. When staff draft a new PA, it checks the draft against that payer's known denial triggers and flags missing documentation before submission.

Why now: Cheap million-token context lets a full history of a payer's denial letters sit in one comparison prompt.

Demo moment: A draft PA missing one required attachment is flagged live, citing the payer's past denial for the same code.

Business model: Per-practice subscription plus per-payer-relationship pricing.

---
id: s3-ideator-balanced-T1-01-r1#04
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Appeal Packet Builder

One-liner: Turns a scanned denial letter and chart notes into a ready-to-file appeal packet with every field filled.

Buyer and niche: Denial and AR follow-up specialists at small practices assembling payer appeals after a claim or PA denial.

Pain and evidence: Denial reasons are "never accessible" or "incomplete and inaccurate" in payer portals, forcing exhaustive cross-checking to assemble one appeal, while denial rates keep rising. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: Staff drop in the denial letter, EOB and relevant chart pages; the tool extracts the denial code, dates, procedure and payer-cited reason, matches them to the payer's own appeal form fields, and produces a filled packet ready for review and portal upload.

Why now: Mistral OCR 3 parses scanned forms and handwriting at $2 per 1,000 pages, cheap enough for every denial letter.

Demo moment: A scanned denial letter is dropped in; a filled appeal packet appears in under 30 seconds.

Business model: Per-packet fee, or a monthly plan with a packet cap.

---
id: s3-ideator-balanced-T1-01-r1#05
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Payer Rule Change Watcher

One-liner: Alerts the practice the moment a payer quietly changes which procedures need prior authorization.

Buyer and niche: Practice managers and billers at small practices who track each payer's current PA-requirement list from memory or a spreadsheet.

Pain and evidence: Payers change portals and requirements on their own schedule with no warning, forcing re-registration, retraining, or submission under stale rules. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: The tool checks each payer's public policy bulletin pages on a schedule, compares new text against the practice's stored PA-requirement rule for each procedure code, and sends one alert only when something the practice relies on has actually changed.

Why now: Cheap long-context inference makes daily full-bulletin comparison affordable at small-practice scale.

Demo moment: A simulated bulletin edit is fed in; the tool flags the one changed procedure code within seconds.

Business model: Flat monthly fee per practice, tiered by payers watched.

---
id: s3-ideator-balanced-T1-01-r1#06
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Denial-to-Appeal Pipeline

One-liner: Drafts the appeal letter itself, citing the payer's own published policy language back at them.

Buyer and niche: Billing staff at small medical practices writing payer appeals after a prior-authorization or claim denial.

Pain and evidence: 81.7% of appealed Medicare Advantage denials are overturned, but writing the appeal still means digging out the right policy language for each payer. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: Given the denial reason, procedure code and payer name, the tool drafts an appeal letter that quotes the payer's own medical-necessity policy language and the specific chart facts that satisfy it, leaving staff to review and submit through the portal.

Why now: A million-token context window lets a full payer policy manual sit alongside chart notes in one drafting prompt.

Demo moment: A denial is entered; a complete, policy-quoting appeal draft appears in under a minute.

Business model: Per-appeal drafting fee, discounted at volume.

---
id: s3-ideator-balanced-T1-01-r1#07
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Portal Exit Interview

One-liner: Silently logs every portal error, timeout and vanished claim as timestamped evidence for billing disputes.

Buyer and niche: Billing managers at small practices who depend on unreliable multi-payer portals for daily claim and eligibility work.

Pain and evidence: Claims stay invisible for two days after entry, a payer data feed broke for 16 weeks, and weekly "maintenance" outages force manual re-entry. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: A background agent runs the practice's routine portal checks and, whenever a portal throws an error, times out, or shows a claim differently than the last check, saves a timestamped screenshot and note to a dispute log staff can hand to the payer.

Why now: Claude for Chrome already runs inside staff's own logged-in session, so it can watch for failures with no separate integration.

Demo moment: A simulated portal error appears; the tool captures and timestamps it into the evidence log live.

Business model: Included in the portal-polling subscription tier.

---
id: s3-ideator-balanced-T1-01-r1#08
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r1
---

# Claims Duplicate Catcher

One-liner: Checks every claim about to be resubmitted against the portal's own record before it becomes a duplicate.

Buyer and niche: Billing staff at small practices resubmitting claims after a payer portal error or unclear confirmation message.

Pain and evidence: "After a 'cannot reach the payor' error, staff resubmit and both claims process," creating duplicate-claim cleanup and recoupment risk. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: Before a claim resubmission is sent, the tool re-checks the payer portal's current record for that claim number and patient; if it finds the original already accepted, it blocks the resubmission and shows staff the existing claim status instead.

Why now: Production-grade computer-use agents can reliably re-check a portal record in the same session before an action is taken.

Demo moment: Staff attempt to resubmit a claim; the tool blocks it live, showing the already-accepted original.

Business model: Bundled per-practice fee with the polling subscription.

<!-- COMPLETE -->
