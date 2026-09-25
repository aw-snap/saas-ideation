## Titles

1. Pawn Shop Midnight Police Filer — developed as card #01
2. Multi-State Charity Registration Autopilot [similar — clusters with 10,18,21,26] → rewrite: **One-Click Fifty-State Solicitation Filer** — developed as card #02
3. Tow Yard Lien Clock Guardian [similar — clusters with 17,23,27] → rewrite: **Cross-State Lien Notice Deadline Engine** — developed as card #03
4. Guardian Accounting Ledger Copilot [similar — clusters with 14,24] → rewrite: **Year-Round Guardian Ledger Extractor** — developed as card #04
5. Court E-Filing Reject Catcher [similar — clusters with 12,19,29] → rewrite: **Pre-Submission Court Rule Checker** — developed as card #05
6. Volunteer Fire Incident Re-keyer [similar — clusters with 13,20,28] → rewrite: **Post-Call Voice Debrief Report Drafter** — developed as card #06
7. Nonprofit 990-N Deadline Sentinel [safe — generic reminder] → rewrite: **Three-Year Revocation Countdown Alarm**
8. Scrap Metal Daily Report Bot [similar — clusters with 1,15,22] → rewrite: **Catalytic Converter Chain-of-Custody Recorder**
9. Compliance Agent Watchdog — developed as card #07
10. Charity Registration State-by-State Filler [similar] → rewrite: **Charity Registration Fee Liability Calculator**
11. Treasurer Handoff Vault — developed as card #08
12. E-Filing Rejection Triage Desk [similar] → rewrite: **Rejected-Filing Refund Recovery Bot**
13. Fire Department NFIRS Night Shift [similar] → rewrite: **NERIS Cutover Migration Agent**
14. Guardian Accounting Audit Trail [similar] → rewrite: **Ward Spending Anomaly Flagger**
15. Pawn Compliance Copilot [similar] → rewrite: **Pawn License Renewal & Inspection Prep Agent**
16. Multi-Portal Filing Status Board [safe — generic dashboard] → rewrite: **Cross-Portal Filing Proof Vault**
17. Tow Lot DMV Lookup Autopilot [similar] → rewrite: **Impound Lienholder Lookup Relay**
18. Charity Solicitation Renewal Tracker [similar] → rewrite: **Charity Registration Renewal Risk Radar**
19. Court Filing Second-Chance Bot [similar] → rewrite: **Auto Re-File on Rejection Agent**
20. Volunteer Fire Records Rescue [similar] → rewrite: **Lost eNFIRS History Recovery Tool**
21. Nonprofit Compliance Calendar AI [safe — generic calendar] → rewrite: **Silent-Failure Charity Filing Auditor**
22. Pawn Shop Night Clerk Assistant [similar] → rewrite: **Stolen-Goods Hold Countdown Tracker**
23. Lien Sale Notice Autopilot [similar] → rewrite: **Voided-Sale Risk Flag**
24. Guardian Filing Deadline Alarm [similar] → rewrite: **Multi-Ward Accounting Deadline Stacker**
25. BPO Filing Desk Copilot — distinct, held in reserve (agency-facing angle)
26. Charity State Registration Bulk Filer [similar] → rewrite: **New-State Trigger Detector**
27. Tow Yard Notice Letter Generator [similar] → rewrite: **Certified-Mail Notice Drafting Agent**
28. Fire Incident Memory Reconstructor [similar] → rewrite: **Same-Address Auto-Fill from Past Calls**
29. Court E-Filing Batch Corrector [similar] → rewrite: **Cross-County Rule Diff Tracker**
30. Small Org Portal Password Vault + Filer [safe — generic password manager] → rewrite: **One-Time-Access Filing Executor**

## Cards

---
id: s3-ideator-balanced-T4-01-r1#01
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Pawn Shop Nightly Police Filer

One-liner (≤20 words): Files the pawn shop's mandatory daily police report from POS data before the noon deadline, every night.

Buyer and niche (≤25 words): Pawn shop owners and counter clerks in states requiring daily transaction reports to local police or LeadsOnline.

Pain and evidence (≤40 words): California pawnbrokers must submit a daily report "by noon of the following day"; a knowing miss is a crime carrying up to $25,000 fines and license revocation. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The clerk exports the day's transactions from the shop's POS at closing. The agent logs into the police or LeadsOnline portal, enters each transaction line, and saves a timestamped screenshot of the confirmation receipt into a dated audit folder automatically.

Why now (≤25 words): Claude Sonnet 4.5 computer use and Skyvern now handle repetitive logged-in web forms reliably enough for one bounded nightly task [TC-02, TC-07].

Demo moment (≤20 words): Live: upload five test transactions, watch the agent fill the portal and screenshot the police confirmation receipt.

Business model (≤15 words): Flat monthly fee per shop location, tiered by transaction volume.

---
id: s3-ideator-balanced-T4-01-r1#02
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Fifty-State Charity Solicitation Filer

One-liner (≤20 words): One intake profile fills every state's charity solicitation registration and renewal, and flags overdue states.

Buyer and niche (≤25 words): Treasurers and executive directors at small nonprofits that fundraise online or across state lines and lack compliance staff.

Pain and evidence (≤40 words): Registering means re-keying identical data into 38-41 separate state portals; fees alone run $1,700-$6,500, and an unregistered org can face a decade of stacking back-filings with no ceiling. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The org enters its data once in a shared intake form. The agent maps those fields to each state's own registration form, files sequentially through each portal, tracks every renewal date, and raises an alert well before any state's deadline lapses.

Why now (≤25 words): Claude for Chrome and Skyvern now stay logged into many separate portals and repeat one filing workflow across each state's site [TC-03, TC-07].

Demo moment (≤20 words): Live: fill one intake form once, watch the agent complete three different states' registration portals in sequence.

Business model (≤15 words): Per-state filing fee plus a flat annual renewal-monitoring subscription.

---
id: s3-ideator-balanced-T4-01-r1#03
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Cross-State Lien Notice Deadline Engine

One-liner (≤20 words): Looks up each towed vehicle's owner and lienholder, then tracks and drafts every state's required notice on time.

Buyer and niche (≤25 words): Tow yard and impound lot owners and clerks handling non-consensual tows, often across neighboring states with different rules.

Pain and evidence (≤40 words): Notice windows vary by state (Florida 7 days, California 15-41); "missing either notification invalidates your entire lien sale," leaving the yard owing the vehicle's full market value. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The clerk logs a new tow. The agent looks up the registered owner and lienholder through the state DMV portal, calculates that state's exact notice deadlines from a maintained statute table, drafts the certified-mail notice, and reminds the clerk before each window closes.

Why now (≤25 words): Claude Sonnet 4.5 computer use reliably completes bounded single-page government lookup portals, the exact shape of a DMV owner search [TC-02].

Demo moment (≤20 words): Live: enter a VIN, watch the agent pull owner and lienholder data and produce a dated notice letter.

Business model (≤15 words): Per-vehicle fee, priced well under the cost of one voided lien sale.

---
id: s3-ideator-balanced-T4-01-r1#04
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Year-Round Guardian Ledger Extractor

One-liner (≤20 words): Turns a guardian's year of receipts and bank statements into the court's required annual accounting format automatically.

Buyer and niche (≤25 words): Court-appointed guardians, conservators and paid daily money managers preparing annual accountings for one or several wards.

Pain and evidence (≤40 words): Courts require an accounting "on or before the anniversary date," recommend logging transactions "weekly or monthly," and discrepancies trigger a hearing; the burden repeats every year, per ward. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The guardian forwards receipts and monthly statements by email or phone photo all year. The agent extracts each transaction, categorizes it against the court's line-item schedule, flags anything unusual, and assembles a ready-to-file accounting packet before the anniversary date arrives.

Why now (≤25 words): Mistral OCR 3 extracts scanned receipts and bank statements into structured, categorized line items at $2 per 1,000 pages [TC-30].

Demo moment (≤20 words): Live: photograph three receipts, watch the categorized ledger line populate in the court's exact format instantly.

Business model (≤15 words): Per-ward annual subscription, sold directly to guardians and daily money managers.

---
id: s3-ideator-balanced-T4-01-r1#05
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Pre-Submission Court Rule Checker

One-liner (≤20 words): Checks a filing packet against that specific court's own e-filing rules before submission, catching common rejection causes.

Buyer and niche (≤25 words): Solo and small-firm attorneys and paralegals e-filing across multiple counties and courts, each with its own technical requirements.

Pain and evidence (≤40 words): "Approximately 10% of filings are rejected," filers are billed regardless, and one filer's writ was delayed "by approximately one month"; each court publishes separate, changing technical rules. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The attorney uploads the packet and names the court. The agent reads that court's current technical-requirements page, checks formatting, required proof-of-service and signature fields against it, flags every mismatch in plain language, and only then hands the packet to the e-filing service.

Why now (≤25 words): 1M-token context lets a model hold an entire court's rules page and a full filing packet at once to cross-check every field [TC-25].

Demo moment (≤20 words): Live: upload a packet missing a proof-of-service page, watch it get flagged before submission.

Business model (≤15 words): Per-filing fee, cheaper than reworking one rejected filing.

---
id: s3-ideator-balanced-T4-01-r1#06
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Post-Call Voice Debrief Report Drafter

One-liner (≤20 words): A voice agent interviews the officer right after a call and drafts the required structured incident report.

Buyer and niche (≤25 words): Volunteer and combination fire departments with no records staff, now reporting into the new post-NFIRS system.

Pain and evidence (≤40 words): Officers are "reconstructing incidents from memory" and re-entering "the same address, times, and unit details more than once"; poor data quality can cost federal grant eligibility. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): Right after a call, the officer talks through what happened out loud. The voice agent asks the standard follow-up questions, pulls address and unit history from prior incidents at the same location, and drafts the structured report for a one-tap approval before memory fades.

Why now (≤25 words): Realtime speech-to-speech models with function calling now hold a structured interview conversation and populate a form live [TC-27].

Demo moment (≤20 words): Live: describe a fictional call aloud, watch a completed structured incident report appear within the conversation.

Business model (≤15 words): Flat monthly fee per department, scaled by call volume.

---
id: s3-ideator-balanced-T4-01-r1#07
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Compliance Vendor Proof Watchdog

One-liner (≤20 words): Independently confirms a paid filing agent actually submitted each filing, catching silent failures before a state does.

Buyer and niche (≤25 words): Nonprofit boards and treasurers who already pay a registration agent for state charity filings and want proof it worked.

Pain and evidence (≤40 words): Users report a vendor "routinely dropped the ball," left an org "NEVER registered," and a missed summons went unnoticed with only a chatbot to reach; the org still carries the legal risk. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The treasurer connects the vendor's client-portal login. The agent independently logs into each state's own public registry, reads the org's actual registration status, compares it against what the vendor's dashboard claims was filed, and alerts the treasurer the instant the two diverge.

Why now (≤25 words): Browser agents now log into a state registry and read confirmation status as reliably as a human checking by hand [TC-02, TC-06].

Demo moment (≤20 words): Live: agent flags a state where the vendor dashboard says "filed" but the registry shows nothing.

Business model (≤15 words): Low monthly fee, positioned as cheap insurance against vendor failure.

---
id: s3-ideator-balanced-T4-01-r1#08
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r1
---

# Treasurer Handoff Briefing Agent

One-liner (≤20 words): When a volunteer treasurer resigns, the agent scans every filed portal and drafts the successor's compliance briefing.

Buyer and niche (≤25 words): All-volunteer nonprofit and fire department boards, at the exact moment an officer or treasurer changes over.

Pain and evidence (≤40 words): Compliance knowledge and portal logins "leave with that person," forcing the incoming volunteer to start a full compliance review from nothing, across separate tracks like AG registration and state corporate reports. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The outgoing treasurer grants the agent one-time access to the shared credential list. It logs into each portal, records current filing status, due dates and any open items, then generates a single handoff briefing document plus a shared compliance calendar for the successor to pick up immediately.

Why now (≤25 words): Computer-use agents can now traverse a list of unrelated government portals and summarize each one's status in a single run [TC-02].

Demo moment (≤20 words): Live: feed three portal logins, watch a one-page handoff briefing generate within minutes.

Business model (≤15 words): One-time handoff fee, or bundled into an annual board subscription.

<!-- COMPLETE -->
