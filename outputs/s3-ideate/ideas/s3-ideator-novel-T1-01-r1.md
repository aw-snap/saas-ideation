## Titles

1. Prior-Auth Autopilot [similar to #6, #21]
   → Rewrite: **The Overnight Portal Shift** — an agent that clocks in at midnight and clears the day's queued PA submissions across every payer portal before staff arrive.
2. Portal Password Vault for Billers [safe]
   → Rewrite: **Agent Badge, Not Shared Login** — each payer-portal task runs under its own scoped, audited machine identity instead of a shared staff password.
3. Denial Reason Decoder [similar to #9, #18, #24]
   → Rewrite: **Denial Reason Court Reporter** — the agent records exactly what each payer's portal said, screenshot and timestamp attached, so no one re-hunts for the reason twice.
4. Eligibility Batch Runner [similar to #16]
   → Rewrite: **Morning Eligibility Roll Call** — every scheduled patient's eligibility gets checked the night before clinic opens.
5. Claim Status Sweep Agent [similar to #22]
   → Rewrite: **The Claims Combine** — one nightly pass drags through every payer portal collecting claim status in a single sweep.
6. PA Queue Copilot [similar to #1, #21] — folded into #1's rewrite, dropped as a duplicate concept.
7. Payer Portal Concierge [safe]
   → Rewrite: **Portal Interpreter-on-Call** — live, narrated translation of what a specific payer's confusing portal screen actually means, on demand.
8. Multi-Payer Login Butler [similar to #2, #23] — folded into #2's rewrite, dropped.
9. Denial Pattern Miner [similar to #3, #18, #24]
   → Rewrite: **The Denial Ledger** — a running tally, per payer and denial code, of which denials were overturned before and are worth fighting again.
10. Prior-Auth Appeal Drafter — kept, distinct.
11. Portal Downtime Watchdog [similar to #26]
    → Rewrite: **Portal Storm Warning** — flags a payer portal's known outage or maintenance window before staff waste a submission into it.
12. Remittance Reconciler Bot [safe]
    → Rewrite: **The Missing Remittance Chaser** — hunts down the ERA that never arrived and matches it back to the claim automatically.
13. PA Status Digest Email [safe] — folded into #1's rewrite, dropped.
14. Availity Autopilot [safe, single-vendor] — generalized and folded into #1's rewrite.
15. Claim Resubmission Guard — kept, distinct.
16. Batch Eligibility Checker [similar to #4] — folded into #4's rewrite, dropped.
17. Portal Migration Assistant — kept, distinct.
18. Denial Triage Dashboard [similar to #3, #9, #24] — folded into #9's rewrite.
19. PA Time Tracker & ROI [safe]
    → Rewrite: **The Hidden Headcount Meter** — quantifies exactly how many hidden FTEs the practice spends on portal grind, payer by payer.
20. Cross-Payer Data Aggregator [safe] — folded into #5's rewrite, dropped.
21. Prior-Auth Form Filler [similar to #1] — folded into #1's rewrite, dropped.
22. Claim Status Overnight Runner [similar to #5] — folded into #5's rewrite, dropped.
23. Portal Credential Rotator [similar to #2] — folded into #2's rewrite, dropped.
24. Denial-to-Appeal Pipeline [similar to #3, #9, #18]
    → Rewrite: **Denial-to-Appeal Conveyor** — chains denial capture straight into a scored, drafted appeal with evidence already attached.
25. PA Escalation Alert Bot [safe]
    → Rewrite: **The 30-Hour Countdown** — tracks each PA's SLA clock per payer and escalates the moment it nears breach, citing the payer's own turnaround rule.
26. Payer Portal Health Monitor [similar to #11] — folded into #11's rewrite, dropped.
27. Front-Desk PA Assistant [safe]
    → Rewrite: **The New Hire Who Never Forgets a Portal** — an onboarding-proof agent that already knows every payer portal's quirks, so staff turnover doesn't reset institutional knowledge.
28. Biller's Second Screen [safe, vague]
    → Rewrite: **The Standing-By Portal Witness** — sits alongside the biller's own login, logging every portal screen for compliance and dispute evidence, never taking over the keyboard.
29. Prior-Auth SLA Tracker [safe] — folded into #25's rewrite, dropped.
30. Multi-Portal Command Center [similar to #7] — dropped, too generic.

## Cards

---
id: s3-ideator-novel-T1-01-r1#01
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Overnight Prior-Auth Autopilot

One-liner (≤20 words): An agent that submits every queued prior-authorization and eligibility check across all payer portals overnight, before staff clock in.
Buyer and niche (≤25 words): Practice managers at small medical practices (5-20 clinicians) buried in prior-auth submissions across 7+ payer portals daily.
Pain and evidence (≤40 words; cite the pain dossier file): 39 PA requests per physician weekly, 35% take 35+ minutes each, ~13 hours/week lost; 92% of practices hired staff just for this. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Staff queue PA requests with patient and procedure data during the day; overnight, the agent logs into each payer portal, fills forms, uploads attachments, and leaves a morning report of confirmations, rejections and items needing a human decision.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use holds multi-step browser tasks for 30+ hours at 61.4% OSWorld accuracy, enabling true overnight runs [TC-02].
Demo moment (≤20 words): Judges queue 5 mock PAs at 5pm; by 9am a dashboard shows portals visited, forms submitted, screenshots as proof.
Business model (≤15 words): Per-practice monthly subscription, priced per PA volume tier.

---
id: s3-ideator-novel-T1-01-r1#02
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Agent Badge, Not Shared Login

One-liner (≤20 words): Each payer-portal task runs under the practice's own scoped, audited agent identity, not a shared staff password.
Buyer and niche (≤25 words): Office managers at small practices battling 2FA lockouts and shared logins across a dozen payer portals.
Pain and evidence (≤40 words; cite the pain dossier file): A mandatory authenticator app locks accounts; staff report clearing caches and rebuilding accounts after lockout, and 2FA "every single time" they log in. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The practice registers one delegated agent identity per payer portal; the agent authenticates itself via a non-human SSO credential, actions are scoped to read-only or submit-only, and every session is logged for the compliance officer to review.
Why now (≤25 words; name the specific capability): Okta's Agent SSO gives software agents first-class, governed identities separate from human staff credentials, GA August 2026 [TC-17].
Demo moment (≤20 words): Revoke one portal's agent credential live; show the agent locked out instantly while staff logins stay untouched.
Business model (≤15 words): Flat fee per portal-identity managed, billed monthly to the practice.

---
id: s3-ideator-novel-T1-01-r1#03
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Denial Evidence Recorder

One-liner (≤20 words): A logged-in browser agent screenshots and timestamps exactly what each payer portal says about a denial.
Buyer and niche (≤25 words): Denial and AR follow-up specialists at small practices who re-hunt portals for reasons payers later dispute.
Pain and evidence (≤40 words; cite the pain dossier file): Billers report payer information is "never accessible" and, when provided, "incomplete and inaccurate," forcing exhaustive research and repeat calls to payers. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Running inside the biller's own logged-in Chrome session, the agent watches each portal visit, extracts the denial code, reason text and screen state into a structured, timestamped record the biller can cite in an appeal without reopening the portal.
Why now (≤25 words; name the specific capability): Claude for Chrome operates inside a user's own browser session with prompt-injection mitigation down to 11.2%, GA December 2025 [TC-03].
Demo moment (≤20 words): Agent captures a denial screen, then instantly produces a dated evidence card citing the exact portal text.
Business model (≤15 words): Per-seat monthly add-on for billing staff.

---
id: s3-ideator-novel-T1-01-r1#04
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Appeal-Worth Denial Ledger

One-liner (≤20 words): Scores every denial by how often that payer, code and reason has been overturned on appeal before.
Buyer and niche (≤25 words): Practice managers and billing services deciding which of dozens of weekly denials are worth fighting.
Pain and evidence (≤40 words; cite the pain dossier file): 81.7% of appealed Medicare Advantage denials are overturned, yet each one still requires manual research to decide whether to appeal at all. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The agent ingests the practice's full denial and appeal history plus captured evidence records, scores each new denial's overturn likelihood by payer, code and procedure, and ranks the week's denials so staff fight the ones worth fighting first.
Why now (≤25 words; name the specific capability): Cheap million-token context lets a small practice's entire multi-year denial history be scored in one pass for pennies [TC-25].
Demo moment (≤20 words): Feed 50 sample denials; the ledger ranks them and highlights the top 5 "worth appealing" instantly.
Business model (≤15 words): Monthly subscription priced per denial volume tier.

---
id: s3-ideator-novel-T1-01-r1#05
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Prior-Auth Appeal Co-Drafter

One-liner (≤20 words): Drafts a citation-backed appeal letter by pulling the payer's own medical policy text live from their portal.
Buyer and niche (≤25 words): Physicians and PA staff who must justify overturning a denial against each payer's specific published criteria.
Pain and evidence (≤40 words; cite the pain dossier file): Peer-to-peer escalation is slow; 93% of physicians say PA delays care and patients wait through manual appeals with no shortcut. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Given a denial and the chart note, the agent navigates the payer's own portal to extract the exact policy bulletin cited in the denial, then drafts an appeal letter quoting that bulletin against the patient's documented criteria, ready for physician sign-off.
Why now (≤25 words; name the specific capability): Stagehand's extract() pulls structured citation text straight off any payer portal page for grounded drafting [TC-08].
Demo moment (≤20 words): Paste a denial; watch the agent fetch the payer's own policy paragraph and draft a matching appeal in seconds.
Business model (≤15 words): Per-appeal fee, billed to the practice monthly.

---
id: s3-ideator-novel-T1-01-r1#06
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Missing Remittance Chaser

One-liner (≤20 words): Finds the electronic remittance that never arrived and matches it back to the claim automatically.
Buyer and niche (≤25 words): Billers reconciling payments at small practices after payer data feeds silently break for weeks.
Pain and evidence (≤40 words; cite the pain dossier file): One payer feed was "broken for 16 weeks," forcing manual demographics and duplicate work on every claim in that stretch. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The agent scans each payer portal on a schedule for remittance advice and EOB PDFs the automated feed missed, reads scanned or image-based statements, and matches line items back to the practice's claim ledger, flagging any still unpaid past the payer's own timeline.
Why now (≤25 words; name the specific capability): Mistral OCR 3 parses complex tables and handwriting on scanned EOBs at $2 per 1,000 pages, December 2025 [TC-30].
Demo moment (≤20 words): Upload a scanned EOB; the agent matches every line to an open claim in seconds.
Business model (≤15 words): Monthly fee per practice, scaled by claim volume.

---
id: s3-ideator-novel-T1-01-r1#07
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Payer Portal Migration Copilot

One-liner (≤20 words): Re-registers and re-learns a practice's logins automatically whenever a payer retires one portal for another.
Buyer and niche (≤25 words): Office managers whose payer keeps switching portals, such as NaviNet to Availity, with little warning.
Pain and evidence (≤40 words; cite the pain dossier file): Payers retire NaviNet for Availity Essentials on their own staggered schedules, forcing practices to re-register and retrain each time with no workaround. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The agent monitors payer announcement pages for portal retirement notices, pre-fills the new portal's registration forms with the practice's existing credentials, verifies access with a test lookup, and hands staff a one-page "what changed" guide before the old portal disappears.
Why now (≤25 words; name the specific capability): Skyvern combines vision and an LLM to handle logins and forms on legacy, no-API portals, scoring 64.4% on WebBench [TC-07].
Demo moment (≤20 words): Simulate a portal retirement notice; the agent completes re-registration on the new portal unattended.
Business model (≤15 words): Flat annual fee per practice, covering unlimited migrations.

---
id: s3-ideator-novel-T1-01-r1#08
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
---

# Prior-Auth SLA Countdown

One-liner (≤20 words): Tracks each payer's own published turnaround clock per prior-auth and escalates the moment a breach is imminent.
Buyer and niche (≤25 words): PA specialists at small practices who only discover a stalled authorization when a patient calls asking why.
Pain and evidence (≤40 words; cite the pain dossier file): 29% of physicians report a serious adverse event and 24% a hospitalization tied to authorization delays going unnoticed until too late. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): On submission, the agent records the payer's own stated SLA, polls that payer's portal on a cheap recurring schedule, and pushes an alert with a pre-filled escalation script the moment a PA nears its deadline without a decision.
Why now (≤25 words; name the specific capability): Open-source browser agents now run scheduled portal checks for about $0.02 per browser-hour, making continuous per-PA polling affordable [TC-06].
Demo moment (≤20 words): A mock PA's countdown hits zero live, firing an alert with a ready escalation message.
Business model (≤15 words): Per-practice monthly fee, tiered by concurrent PA volume.

<!-- COMPLETE -->
