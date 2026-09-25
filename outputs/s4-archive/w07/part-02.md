---
id: I-4026
track: novel
lineage: ai-native
territory: T4
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r1
raw_id: s3-ideator-novel-T4-02-r1#07
merged: []
---

# Ward Accounting Autoscribe

One-liner (≤20 words): Turns receipts and bank statements into a court-ready annual accounting all year, not a scramble at deadline.
Buyer and niche (≤25 words): Court-appointed guardians, conservators and professional daily money managers who must prepare annual accountings for each ward.
Pain and evidence (≤40 words; cite the pain dossier file): Courts require the accounting on the ward's fixed anniversary date and advise logging transactions weekly all year to be ready; discrepancies can trigger a hearing or a demand for more documents. (src: outputs/s3-ideate/pain/T4-dossier.md)
How it works (≤50 words): The guardian forwards receipts, statements and photos as they happen; the agent extracts amounts, categorizes them by the court's own accounting schedule, and assembles a running filing-ready report, flagging any transaction it cannot confidently categorize for the guardian to confirm rather than re-enter.
Why now (≤25 words; name the specific capability): Mistral OCR 3 parses receipts, statements and handwriting at $1-2 per 1,000 pages, cheap enough to log everything year-round.
Demo moment (≤20 words): Forward five receipt photos; the running annual accounting for one ward updates live on screen.
Business model (≤15 words): Per-ward monthly fee, billed like a bookkeeping subscription.

---
id: I-4027
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r1
raw_id: s3-ideator-novel-T4-02-r1#08
merged: []
---

# Fire Incident Report Reconstructor

One-liner (≤20 words): Drafts the incident report from dispatch audio and a volunteer's spoken recap, instead of memory after the fact.
Buyer and niche (≤25 words): Volunteer and combination fire departments with no records staff, reporting into the federal system that replaced NFIRS.
Pain and evidence (≤40 words; cite the pain dossier file): Crews re-enter the same address, times and unit details more than once, officers are reconstructing incidents from memory, and bad reporting data can affect federal grant funding. (src: outputs/s3-ideate/pain/T4-dossier.md)
How it works (≤50 words): After a call, the officer talks through what happened; the agent transcribes it alongside the dispatch audio log, fills in addresses, times and units it can already infer, and drafts the structured incident report for the officer to review, correct and submit in minutes, not later from memory.
Why now (≤25 words; name the specific capability): Open-weight streaming speech recognition transcribes officer recaps on department hardware at about 500ms delay.
Demo moment (≤20 words): Speak a two-minute incident recap aloud; a filled incident-report draft appears on screen immediately.
Business model (≤15 words): Per-department monthly fee, scaled by yearly incident volume.

---
id: I-4028
track: novel
lineage: seed-atom-hybrid
territory: T5
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r2
raw_id: s3-ideator-novel-T5-01-r2#01
merged: []
---

# The Portable Proxy Badge

One-liner (≤20 words): Uploads a proxy's authorization once, then presents the right proof at every institution's own login and verification screen.
Buyer and niche (≤25 words): Family proxies and small-office staff who act on someone else's behalf online and get rejected by each site's own paperwork rules.
Pain and evidence (≤40 words; cite the pain dossier file): No inventory of who holds current access anywhere (87% of SMB leaders cannot verify it), and banks separately demand their own POA form no matter what document a proxy already holds. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The proxy uploads authorization documents once. Inside their own logged-in browser session, the agent visits each institution, finds that site's specific verification step (bank form, physician letter, or the applicable federal form), attaches the matching proof, and keeps a dated log of every site that accepted or rejected it.
Why now (≤25 words): Claude for Chrome acts inside the human's real logged-in session across many unrelated institution sites, not just one scripted workflow.
Demo moment (≤20 words): Live: the agent hits a bank's "own form required" wall, fills that bank's specific POA form from the uploaded document, resubmits.
Business model (≤15 words): Monthly subscription per active proxy relationship, tiered by number of connected institutions.

---
id: I-4029
track: novel
lineage: seed-atom-hybrid
territory: T5
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r2
raw_id: s3-ideator-novel-T5-01-r2#02
merged: [s3-ideator-balanced-T8-02-r3#04]
---

# Elder Payee Radar

One-liner (≤20 words): Watches a parent's bank and bill accounts for the same red flags that catch business vendor fraud, before money leaves.
Buyer and niche (≤25 words): Adult children and paid daily money managers monitoring an aging parent's accounts for scams, without a bank's fraud team behind them.
Pain and evidence (≤40 words; cite the pain dossier file): Elder fraud cost $4.885B in 2024, with 7,500 victims losing over $100k, and families notice weeks or months later; monthly reconciliation is too slow to catch it. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Inside the proxy's delegated banking session, the agent builds a baseline of the parent's normal payees and amounts, then flags first-time payees, gift-card purchases and wire patterns matching known scams same-day. Every flag shows the specific transaction evidence it matched, never a bare "suspicious" label, before any alert is sent.
Why now (≤25 words): Claude for Chrome checks multiple bank and bill-pay sites daily inside the proxy's own session, instead of a monthly manual pass.
Demo moment (≤20 words): Live: a first-time $2,000 gift-card purchase on the parent's account triggers a same-day alert with the transaction highlighted.
Business model (≤15 words): Monthly monitoring fee per parent account, sold direct or bundled through daily money managers.

---
id: I-4030
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2C, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r2
raw_id: s3-ideator-novel-T5-01-r2#03
merged: [s3-ideator-balanced-T8-02-r1#06]
---

# Fiduciary Accounting, Auto-Filed

One-liner (≤20 words): Turns a parent's monthly statements into the running, categorized ledger that fiduciary accountings and audits actually demand.
Buyer and niche (≤25 words): Informal POA agents, representative payees and VA fiduciaries who must file annual accountings and survive unpredictable audits, alone.
Pain and evidence (≤40 words; cite the pain dossier file): VA fiduciaries file annual accountings and audits check whether payees "used and accounted for" benefits, while the standard workaround is a manual spreadsheet built from scratch each year. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Each month, the agent revisits the parent's bank and bill accounts inside the proxy's browser session, extracts every transaction, and categorizes it against the exact line items the required accounting forms demand. At year-end it assembles the pre-filled accounting, flagging any month missing a receipt before an auditor would.
Why now (≤25 words): Claude for Chrome reuses the same logged-in session monthly, building a continuous ledger instead of one year-end document scramble.
Demo moment (≤20 words): Live: twelve months of raw statements become one filled accounting form, with March flagged "receipt missing."
Business model (≤15 words): Annual accounting-season fee, or a monthly subscription for continuous fiduciary bookkeeping.

---
id: I-4031
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r2
raw_id: s3-ideator-novel-T5-01-r2#04
merged: [s3-ideator-balanced-T8-02-r1#07]
---

# The Estate Closing Sweep

One-liner (≤20 words): Walks every bank, card issuer, brokerage and utility an estate touches, filing the right closure form at each.
Buyer and niche (≤25 words): Executors, often the same person who held power of attorney, settling a parent's accounts across many institutions with no admin staff.
Pain and evidence (≤40 words; cite the pain dossier file): Each institution has its own process and wants certified death certificates, accounts freeze the moment they're notified, and collectors sometimes chase the former proxy in the gap. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The executor uploads the death certificate once. The agent, working through each known institution's site inside the executor's session, locates that institution's specific closure or claim form, uploads the certificate where accepted, and produces a checklist of the remaining steps that legally require a phone call or notarized visit.
Why now (≤25 words): Claude for Chrome chains logins across many unrelated institution portals in one sitting, instead of one call at a time over weeks.
Demo moment (≤20 words): Live: uploading one death certificate auto-files closure forms at three institutions and flags a fourth as "call required."
Business model (≤15 words): One-time fee per estate, scaled by number of connected institutions.

---
id: I-4032
track: novel
lineage: seed-atom-hybrid
territory: T5
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r2
raw_id: s3-ideator-novel-T5-01-r2#05
merged: [s3-ideator-balanced-T8-02-r1#01]
---

# Medicaid Renewal, Pre-Answered

One-liner (≤20 words): Fills and files a parent's Medicaid renewal packet from statements already on file, before the 30-day window lapses.
Buyer and niche (≤25 words): Adult-child proxies handling a parent's long-term-care Medicaid renewal, often mailed to the parent instead of them, on a strict deadline.
Pain and evidence (≤40 words; cite the pain dossier file): 69% of unwinding disenrollments were procedural, not eligibility failures, on a 30-day mailed packet the proxy may never see in time. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The proxy photographs the mailed packet the day it arrives. The agent extracts every required field, pulls matching income and asset figures from the standing account record it already maintains, shows which source document backs each answer, then submits through the state portal inside the proxy's session before the deadline.
Why now (≤25 words): Claude for Chrome completes the actual state-portal submission inside the proxy's logged-in session, not just a drafted PDF.
Demo moment (≤20 words): Live: a photographed renewal packet is filled field-by-field, each answer traced to its source statement, then submitted.
Business model (≤15 words): Per-renewal fee, discounted for a standing monthly account-monitoring subscription.

---
id: I-4033
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#01
merged: []
---

# Overnight Prior-Auth Autopilot

One-liner (≤20 words): An agent that submits every queued prior-authorization and eligibility check across all payer portals overnight, before staff clock in.
Buyer and niche (≤25 words): Practice managers at small medical practices (5-20 clinicians) buried in prior-auth submissions across 7+ payer portals daily.
Pain and evidence (≤40 words; cite the pain dossier file): 39 PA requests per physician weekly, 35% take 35+ minutes each, ~13 hours/week lost; 92% of practices hired staff just for this. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Staff queue PA requests with patient and procedure data during the day; overnight, the agent logs into each payer portal, fills forms, uploads attachments, and leaves a morning report of confirmations, rejections and items needing a human decision.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use holds multi-step browser tasks for 30+ hours at 61.4% OSWorld accuracy, enabling true overnight runs.
Demo moment (≤20 words): Judges queue 5 mock PAs at 5pm; by 9am a dashboard shows portals visited, forms submitted, screenshots as proof.
Business model (≤15 words): Per-practice monthly subscription, priced per PA volume tier.

---
id: I-4034
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#02
merged: []
---

# Agent Badge, Not Shared Login

One-liner (≤20 words): Each payer-portal task runs under the practice's own scoped, audited agent identity, not a shared staff password.
Buyer and niche (≤25 words): Office managers at small practices battling 2FA lockouts and shared logins across a dozen payer portals.
Pain and evidence (≤40 words; cite the pain dossier file): A mandatory authenticator app locks accounts; staff report clearing caches and rebuilding accounts after lockout, and 2FA every single time they log in. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The practice registers one delegated agent identity per payer portal; the agent authenticates itself via a non-human SSO credential, actions are scoped to read-only or submit-only, and every session is logged for the compliance officer to review.
Why now (≤25 words; name the specific capability): Okta's Agent SSO gives software agents first-class, governed identities separate from human staff credentials, GA August 2026.
Demo moment (≤20 words): Revoke one portal's agent credential live; show the agent locked out instantly while staff logins stay untouched.
Business model (≤15 words): Flat fee per portal-identity managed, billed monthly to the practice.

---
id: I-4035
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#03
merged: []
---

# Denial Evidence Recorder

One-liner (≤20 words): A logged-in browser agent screenshots and timestamps exactly what each payer portal says about a denial.
Buyer and niche (≤25 words): Denial and AR follow-up specialists at small practices who re-hunt portals for reasons payers later dispute.
Pain and evidence (≤40 words; cite the pain dossier file): Billers report payer information is "never accessible" and, when provided, "incomplete and inaccurate," forcing exhaustive research and repeat calls to payers. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Running inside the biller's own logged-in Chrome session, the agent watches each portal visit, extracts the denial code, reason text and screen state into a structured, timestamped record the biller can cite in an appeal without reopening the portal.
Why now (≤25 words; name the specific capability): Claude for Chrome operates inside a user's own browser session with prompt-injection mitigation down to 11.2%, GA December 2025.
Demo moment (≤20 words): Agent captures a denial screen, then instantly produces a dated evidence card citing the exact portal text.
Business model (≤15 words): Per-seat monthly add-on for billing staff.

---
id: I-4036
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#04
merged: []
---

# Appeal-Worth Denial Ledger

One-liner (≤20 words): Scores every denial by how often that payer, code and reason has been overturned on appeal before.
Buyer and niche (≤25 words): Practice managers and billing services deciding which of dozens of weekly denials are worth fighting.
Pain and evidence (≤40 words; cite the pain dossier file): 81.7% of appealed Medicare Advantage denials are overturned, yet each one still requires manual research to decide whether to appeal at all. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The agent ingests the practice's full denial and appeal history plus captured evidence records, scores each new denial's overturn likelihood by payer, code and procedure, and ranks the week's denials so staff fight the ones worth fighting first.
Why now (≤25 words; name the specific capability): Cheap million-token context lets a small practice's entire multi-year denial history be scored in one pass for pennies.
Demo moment (≤20 words): Feed 50 sample denials; the ledger ranks them and highlights the top 5 "worth appealing" instantly.
Business model (≤15 words): Monthly subscription priced per denial volume tier.

---
id: I-4037
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#05
merged: []
---

# Prior-Auth Appeal Co-Drafter

One-liner (≤20 words): Drafts a citation-backed appeal letter by pulling the payer's own medical policy text live from their portal.
Buyer and niche (≤25 words): Physicians and PA staff who must justify overturning a denial against each payer's specific published criteria.
Pain and evidence (≤40 words; cite the pain dossier file): Peer-to-peer escalation is slow; 93% of physicians say PA delays care and patients wait through manual appeals with no shortcut. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): Given a denial and the chart note, the agent navigates the payer's own portal to extract the exact policy bulletin cited in the denial, then drafts an appeal letter quoting that bulletin against the patient's documented criteria, ready for physician sign-off.
Why now (≤25 words; name the specific capability): Stagehand's extract() pulls structured citation text straight off any payer portal page for grounded drafting.
Demo moment (≤20 words): Paste a denial; watch the agent fetch the payer's own policy paragraph and draft a matching appeal in seconds.
Business model (≤15 words): Per-appeal fee, billed to the practice monthly.

---
id: I-4038
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#06
merged: []
---

# Missing Remittance Chaser

One-liner (≤20 words): Finds the electronic remittance that never arrived and matches it back to the claim automatically.
Buyer and niche (≤25 words): Billers reconciling payments at small practices after payer data feeds silently break for weeks.
Pain and evidence (≤40 words; cite the pain dossier file): One payer feed was broken for 16 weeks, forcing manual demographics and duplicate work on every claim in that stretch. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The agent scans each payer portal on a schedule for remittance advice and EOB PDFs the automated feed missed, reads scanned or image-based statements, and matches line items back to the practice's claim ledger, flagging any still unpaid past the payer's own timeline.
Why now (≤25 words; name the specific capability): Mistral OCR 3 parses complex tables and handwriting on scanned EOBs at $2 per 1,000 pages, December 2025.
Demo moment (≤20 words): Upload a scanned EOB; the agent matches every line to an open claim in seconds.
Business model (≤15 words): Monthly fee per practice, scaled by claim volume.

---
id: I-4039
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#07
merged: []
---

# Payer Portal Migration Copilot

One-liner (≤20 words): Re-registers and re-learns a practice's logins automatically whenever a payer retires one portal for another.
Buyer and niche (≤25 words): Office managers whose payer keeps switching portals, such as NaviNet to Availity, with little warning.
Pain and evidence (≤40 words; cite the pain dossier file): Payers retire NaviNet for Availity Essentials on their own staggered schedules, forcing practices to re-register and retrain each time with no workaround. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): The agent monitors payer announcement pages for portal retirement notices, pre-fills the new portal's registration forms with the practice's existing credentials, verifies access with a test lookup, and hands staff a one-page "what changed" guide before the old portal disappears.
Why now (≤25 words; name the specific capability): Skyvern combines vision and an LLM to handle logins and forms on legacy, no-API portals, scoring 64.4% on WebBench.
Demo moment (≤20 words): Simulate a portal retirement notice; the agent completes re-registration on the new portal unattended.
Business model (≤15 words): Flat annual fee per practice, covering unlimited migrations.

---
id: I-4040
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-01-r1
raw_id: s3-ideator-novel-T1-01-r1#08
merged: []
---

# Prior-Auth SLA Countdown

One-liner (≤20 words): Tracks each payer's own published turnaround clock per prior-auth and escalates the moment a breach is imminent.
Buyer and niche (≤25 words): PA specialists at small practices who only discover a stalled authorization when a patient calls asking why.
Pain and evidence (≤40 words; cite the pain dossier file): 29% of physicians report a serious adverse event and 24% a hospitalization tied to authorization delays going unnoticed until too late. (src: outputs/s3-ideate/pain/T1-dossier.md)
How it works (≤50 words): On submission, the agent records the payer's own stated SLA, polls that payer's portal on a cheap recurring schedule, and pushes an alert with a pre-filled escalation script the moment a PA nears its deadline without a decision.
Why now (≤25 words; name the specific capability): Open-source browser agents now run scheduled portal checks for about $0.02 per browser-hour, making continuous per-PA polling affordable.
Demo moment (≤20 words): A mock PA's countdown hits zero live, firing an alert with a ready escalation message.
Business model (≤15 words): Per-practice monthly fee, tiered by concurrent PA volume.

---
id: I-4041
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
raw_id: s3-ideator-balanced-T5-02-r3#01
merged: []
---

# The Insurer Question, By Reply

One-liner (≤20 words): Forward the cyber-insurance renewal PDF; get back every answer, verified against your real consoles, in one reply.
Buyer and niche (≤25 words): The one person who owns IT, HR and compliance at a 5-50 person firm, renewing cyber insurance alone.
Pain and evidence (≤40 words; cite the pain dossier file): Renewals run 60-150 control questions and an optimistic "yes" can void the policy after a claim; there is no team to split the work, and no time to learn a new portal. (src: outputs/s3-ideate/pain/T5-dossier.md)
How it works (≤50 words): One-time console access is granted by email link. After that, every renewal starts the same way: forward the PDF to a dedicated address. The agent checks MFA scope, backups and endpoint coverage across consoles and replies with the completed form and screenshot citations attached, nothing to log into.
Why now (≤25 words; name the specific capability): Claude for Chrome drives admin consoles inside a stored session, so the only human step left is forwarding an email.
Demo moment (≤20 words): Forward a sample PDF; three minutes later, a reply arrives with the form filled and one flagged gap.
Business model (≤15 words): Flat fee per renewal, billed the same email address that triggered it.

---
id: I-4042
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
raw_id: s3-ideator-balanced-T5-02-r3#02
merged: []
---

# Forward It Before You Pay It

One-liner (≤20 words): Forward any vendor payment-change email to one address; get a hold-or-clear verdict before the wire goes out.
Buyer and niche (≤25 words): The sole owner or bookkeeper who is also the entire accounts-payable department at a small firm.
Pain and evidence (≤40 words; cite the pain dossier file): Business-email-compromise losses average $137k+ per incident; the only defense is a phone callback that depends on one busy person remembering to make it, every time. (src: outputs/s3-ideate/pain/T5-dossier.md)
How it works (≤50 words): No dashboard, no rules to configure. Forward a suspicious invoice or "our bank changed" email to the checking address. The agent compares the new account, domain and phrasing against payment history and prior correspondence, then replies HOLD with the exact mismatch, or CLEAR, inside the same thread.
Why now (≤25 words; name the specific capability): Mistral OCR 3 reads invoice attachments at $2 per 1,000 pages, cheap enough to check every forwarded email, not just flagged ones.
Demo moment (≤20 words): Forward a spoofed invoice with a changed account number; the HOLD reply names the exact discrepancy within a minute.
Business model (≤15 words): Per-firm monthly fee, priced against a single prevented fraud payment.

---
id: I-4043
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
raw_id: s3-ideator-balanced-T5-02-r3#03
merged: []
---

# One Email Confirms The Affirmation

One-liner (≤20 words): The owner emails "affirm us"; the agent checks the controls first and only sends what is actually true.
Buyer and niche (≤25 words): The owner of a 5-50 person DoD manufacturing subcontractor who is also the acting compliance officer, filing the annual affirmation alone.
Pain and evidence (≤40 words; cite the pain dossier file): A wrong attestation has cost small contractors $421k and $507k in False Claims Act settlements, often surfaced by a whistleblower; there is no compliance staff to check the claim before it is signed. (src: outputs/s3-ideate/pain/T5-dossier.md)
How it works (≤50 words): Once a year, the owner emails a one-line request. The agent walks the shop's network, ERP and endpoint consoles, checks each required control against what was last affirmed, and replies with the draft affirmation plus a short list of controls that regressed since last year, before anything is signed.
Why now (≤25 words; name the specific capability): browser-use drives legacy shop-floor and ERP consoles for cents per hour, cheap enough to re-check every control every year.
Demo moment (≤20 words): One email in; reply lists one control that quietly regressed, with the console screenshot proving it.
Business model (≤15 words): Fixed annual fee, priced well under a single reassessment cycle.

---
id: I-4044
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
raw_id: s3-ideator-balanced-T5-02-r3#04
merged: []
---

# The Reminder That Already Did The Homework

One-liner (≤20 words): An annual email arrives with the risk analysis already drafted from last year's, so it never lapses.
Buyer and niche (≤25 words): A solo medical or dental practice owner with no compliance staff, who has already outgrown the free 156-question self-assessment tool.
Pain and evidence (≤40 words; cite the pain dossier file): The most-cited violation is a missing or stale risk analysis, with settlements up to $350k; solo owners quickly outgrow the free tool and nobody remembers to redo it on their own. (src: outputs/s3-ideate/pain/T5-dossier.md)
How it works (≤50 words): There is nothing to log into and no one else to assign the task to, so the system starts it: once a year an email arrives with last year's answers pre-filled against the practice's current device list and vendor contracts, asking only "confirm, or tell me what changed" by reply.
Why now (≤25 words; name the specific capability): 1M-token context re-reads the whole prior file each year, so the redo is a comparison, not a blank 156-question form.
Demo moment (≤20 words): The reminder email arrives with three answers already changed and flagged, needing only a reply to confirm.
Business model (≤15 words): Annual subscription per practice, billed automatically on the same yearly cadence.

---
id: I-4045
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
raw_id: s3-ideator-balanced-T5-02-r3#05
merged: []
---

# Reply YES To Re-Home This Key

One-liner (≤20 words): One email per orphaned credential, each asking a yes-or-no question, until every automation has its own owner again.
Buyer and niche (≤25 words): The sole IT admin at a small firm who is offboarding someone that built integrations nobody else understands.
Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts and personal API keys with no inventory; hunting them down is a one-person job with no checklist and no second reviewer to catch what's missed. (src: outputs/s3-ideate/pain/T5-dossier.md)
How it works (≤50 words): No inventory screen to review. After a departure, the agent scans connected consoles and webhook logs for keys and automations tied to that person, then sends one short email per finding: "This nightly backup runs on Dana's key. Reply YES to re-issue it under a new agent identity." Each reply resolves one item.
Why now (≤25 words; name the specific capability): Okta Agent SSO gives each re-homed automation its own governed identity, live since August 2026, instead of another shared password.
Demo moment (≤20 words): Live: reply YES to one email; a demo automation is re-issued under a fresh identity within seconds.
Business model (≤15 words): Per-offboarding fee, one price whether it finds one credential or twenty.

---
id: I-4046
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
raw_id: s3-ideator-balanced-T9-02-r3#01
merged: []
---

# Point-and-Ask Case File Reader

One-liner (≤20 words): Point your phone at a case file and ask a question aloud; a local model answers by voice.
Buyer and niche (≤25 words): Solo and small-firm lawyers reviewing paper case files who need quick answers without typing or risking privilege by uploading anything.
Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material was not privileged, because the vendor owes no duty of confidentiality; every session touching case facts carries that risk. (src: outputs/s3-ideate/pain/T9-dossier.md, P1)
How it works (≤50 words): The phone camera photographs a document page; an on-device model reads it, and a local language model answers spoken questions about it aloud through the speaker. No screen taps or typing; the photo and transcript are deleted at session end unless the lawyer says "keep."
Why now (≤25 words): Apple's on-device Foundation Models framework reads the photographed page and Voxtral's 3B edge model transcribes spoken questions, entirely on the phone.
Demo moment (≤20 words): Point the phone at a motion, ask "what's the deadline," hear the answer spoken back instantly.
Business model (≤15 words): $59/month per practitioner, unlimited on-device queries, no per-page or per-minute fee.

---
id: I-4047
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
raw_id: s3-ideator-balanced-T9-02-r3#02
merged: []
---

# The Walking Deposition Checker

One-liner (≤20 words): Flip through a printed deposition, snap each page, and ask aloud whether it contradicts the complaint.
Buyer and niche (≤25 words): Solo litigators reviewing paper depositions and exhibits who currently pay outside vendors per page for summaries.
Pain and evidence (≤40 words; cite the pain dossier file): Deposition summaries are sent to third-party vendors at $3-8 per page, and document review is staffed as commodity labor at $30-125 an hour. (src: outputs/s3-ideate/pain/T9-dossier.md, P12)
How it works (≤50 words): As the attorney photographs each page, an on-device model reads it against the complaint already loaded on the phone. A spoken question like "does this admit liability" gets a spoken yes-or-no with the page and line read back, entirely offline, no transcript ever sent anywhere.
Why now (≤25 words): Apple's on-device Foundation Models framework classifies each page against the loaded complaint locally, avoiding per-page vendor fees and any cloud upload.
Demo moment (≤20 words): Photograph three exhibit pages, ask "any admissions," hear the flagged page and line spoken back.
Business model (≤15 words): $149/month flat per attorney, replacing $3-8-per-page vendor summaries entirely.

---
id: I-4048
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
raw_id: s3-ideator-balanced-T9-02-r3#03
merged: []
---

# The Receipt Call

One-liner (≤20 words): Point the phone at each receipt, say the category aloud, and hear the running total confirmed.
Buyer and niche (≤25 words): Solo CPAs and EAs keying W-2s, 1099s and receipts by hand through 80-hour tax season weeks.
Pain and evidence (≤40 words; cite the pain dossier file): W-2, 1099 and receipt data is keyed by hand every season; pasting the same data into cloud AI without a signed per-vendor consent is a federal violation. (src: outputs/s3-ideate/pain/T9-dossier.md, P2, P8)
How it works (≤50 words): The phone camera photographs each receipt or form; an on-device model reads the amount and date, the preparer speaks the category ("travel," "meals"), and a local model logs a structured ledger entry, reading the running total back aloud. No document image or figure ever leaves the phone.
Why now (≤25 words): Voxtral's 3B edge model handles spoken categorization and an on-device vision model reads receipt fields, keeping every dollar figure off any server.
Demo moment (≤20 words): Photograph a receipt, say "travel," hear "logged, three hundred forty dollars, travel, running total updated."
Business model (≤15 words): $39/month per preparer during tax season, $9/month off-season.

---
id: I-4049
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
raw_id: s3-ideator-balanced-T9-02-r3#04
merged: []
---

# The Session Note Camera

One-liner (≤20 words): Photograph a client's paper intake sheet, dictate the session, and hear the drafted note read back.
Buyer and niche (≤25 words): Solo therapists writing SOAP notes after hours who distrust a default-on cloud scribe.
Pain and evidence (≤40 words; cite the pain dossier file): A major scribe vendor turned on AI transcripts by default, and therapists already spend 10-20 hours a week on documentation, much of it after hours. (src: outputs/s3-ideate/pain/T9-dossier.md, P3, P6)
How it works (≤50 words): The phone camera captures the client's handwritten intake sheet; the therapist then dictates session observations aloud. An on-device model merges both into a SOAP note and reads it back for spoken approval before saving; nothing is transcribed or stored until the therapist says "approved."
Why now (≤25 words): Voxtral's edge model transcribes the dictation and Apple's on-device Foundation Models draft and read back the note, so no audio leaves the phone.
Demo moment (≤20 words): Photograph a mock intake sheet, dictate two sentences, hear the drafted SOAP note read back for approval.
Business model (≤15 words): $69/month per therapist, undercutting existing scribe subscriptions with no per-minute fee.

---
id: I-4050
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
raw_id: s3-ideator-balanced-T9-02-r3#05
merged: []
---

# The Spoken Vendor Consent

One-liner (≤20 words): Photograph a client's signed consent form and speak the AI vendor's name to confirm a valid consent record.
Buyer and niche (≤25 words): Solo CPAs and EAs who need a separate signed consent for every AI vendor before touching a client's return data.
Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into AI without a standalone signed consent per vendor is a federal violation with up to a year in prison, and the rule resets whenever the provider changes. (src: outputs/s3-ideate/pain/T9-dossier.md, P2)
How it works (≤50 words): The preparer photographs the client's signed paper consent form with the phone camera, then says the AI vendor's name aloud; an on-device model checks the form covers that exact vendor and logs a timestamped record, refusing aloud and stating why if the named vendor isn't covered.
Why now (≤25 words): On-device vision reads the signed form and Voxtral's edge model captures the spoken vendor name, so no client document is ever transmitted to check compliance.
Demo moment (≤20 words): Photograph a consent form, say "TaxGPT," hear confirmation; say "CPAPilot," hear a spoken refusal, no consent on file.
Business model (≤15 words): $25/month per preparer, one flat fee covering unlimited vendor consent checks.

<!-- COMPLETE -->
