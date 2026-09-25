## Titles

1. Insurer Answers, Console-Verified
2. Vet Tech Offboarding Sweep
3. Ghost Login Hunter [similar to #2]
4. Vendor Payee Lie Detector
5. DMARC in Plain English
6. One-Click SPF/DKIM Setup
7. Orphaned API Key Graveyard
8. Cyber Insurance Truth Serum [similar to #1]
9. Small-Town Security Copilot [safe]
10. The Attestation Detective [similar to #1]
11. Agent IDs Instead of Shared Logins
12. Ransomware Paper-Fallback Drill
13. Feed Supplier Fraud Shield [similar to #4]
14. Midnight Email Auditor [safe]
15. Questionnaire-Console Bridge [similar to #1]
16. Fax-Machine-Era Identity Fix [similar to #11]
17. Departed Tech's Digital Footprint [similar to #2]
18. Insurance Renewal Autopilot [safe]
19. DMARC Story Mode [similar to #5]
20. Payee-Change Radar [similar to #4]
21. Every Console, One Vet [safe]
22. Clinic Security Diary
23. Spoofed Supplier Radar [similar to #4]
24. Pre-Filled Board Breach Form [safe]
25. Access Amnesia Fixer [similar to #2]
26. Loyal Login List [similar to #2]
27. Cyber Insurance Homework, Automated [similar to #1]
28. Compliance Evidence Vault [similar to #22]
29. Whose Login Is This, Anyway [similar to #2]
30. Two-Tech Handoff Problem [safe]

### Rewrites of marked titles
3 -> Whose Key Is This, Really (distinct: cross-checks API keys/webhooks against staff roster, not just human logins)
8 -> Insurer Answers, Console-Verified (kept as #1, this slot retired)
9 -> Rehearse the Ransomware Morning (distinct: a rehearsed spoken walkthrough of the first hour, not a generic "copilot")
10 -> The Standing Evidence File (distinct: a running dated evidence log built from exports, not a live audit)
13 -> Payee Change, Verified First (kept as #4 slot; distinct mechanism: cross-references payment history, not just supplier name)
14 -> The Standing Evidence File (merged, retired)
15 -> Insurer Answers, Console-Verified (merged, retired)
16 -> Agents Get Their Own Badge (distinct: issues scoped SSO identity per agent, not a generic "fix")
17 -> The Offboarding Sweep (kept as #2 slot)
18 -> Insurer Answers, Console-Verified (merged, retired)
19 -> DMARC, Translated and Fixed (kept as #5 slot; distinct: pairs plain-English translation with ready DNS records)
20 -> Payee Change, Verified First (merged, retired)
21 -> The Offboarding Sweep (merged, retired)
23 -> Whose Key Is This, Really (merged, retired)
24 -> dropped (no dossier evidence for state-board breach forms; not developed)
25 -> The Offboarding Sweep (merged, retired)
26 -> The Standing Evidence File (merged, retired)
27 -> Insurer Answers, Console-Verified (merged, retired)
28 -> The Standing Evidence File (kept as #7 slot)
29 -> The Offboarding Sweep (merged, retired)
30 -> dropped (too vague, no distinct mechanism)

## Cards

---
id: s3-ideator-novel-T5-01-r1#01
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# Insurer Answers, Console-Verified

One-liner (≤20 words): An agent signs into every clinic admin console and drafts truthful cyber-insurance answers with live screenshot evidence attached.

Buyer and niche (≤25 words): Small practices and offices (5-50 staff) renewing a 60-150 question cyber-insurance application every year with no IT staff.

Pain and evidence (≤40 words; cite the pain dossier file): Questionnaires grew from 15-minute forms to 60-150 line-by-line questions; partial MFA deployment still counts as "no," and a wrong "yes" can void a claim after a breach. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent operates inside the owner's own logged-in browser across M365, Google Workspace, the payment processor and the practice-management system, checks each control against each questionnaire line, flags partial gaps, and drafts an answer with a screenshot citation attached to every line.

Why now (≤25 words): Claude for Chrome (TC-03) lets an agent act inside the owner's own browser session across many unrelated consoles in one pass.

Demo moment (≤20 words): Live: the agent finds MFA disabled for one admin account and changes the draft answer from "Yes" to "Partial."

Business model (≤15 words): Annual subscription per renewal cycle, priced by number of connected consoles.

---
id: s3-ideator-novel-T5-01-r1#02
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# The Offboarding Sweep

One-liner (≤20 words): Finds every login a departed employee still holds across a small practice's SaaS stack before it becomes a breach.

Buyer and niche (≤25 words): Owners and office managers at 5-50 person practices losing a technician, bookkeeper or manager, with no IT department to check for them.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders cannot verify who has current access, six in ten departing staff are never asked for cloud logins, and automation credentials outlive the people who created them. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent walks each known SaaS admin console (scheduling, payroll, email, shared drives, connected automations) inside the owner's browser session, lists every account and webhook tied to the departing name, and drafts a revocation checklist the owner approves with one click per item.

Why now (≤25 words): Claude Sonnet 4.5 computer use (TC-02) stays on multi-console tasks for over 30 hours, enough to chain many unrelated logins unattended.

Demo moment (≤20 words): Live: the sweep surfaces a scheduling-reminder webhook still posting under a technician who left six months ago.

Business model (≤15 words): Flat fee per offboarding event, or a monthly retainer covering unlimited offboardings.

---
id: s3-ideator-novel-T5-01-r1#03
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# Payee Change, Verified First

One-liner (≤20 words): Checks every vendor bank-detail-change request against payment history before the bookkeeper approves it, not after the money is gone.

Buyer and niche (≤25 words): Owners and bookkeepers at small practices paying feed, pharmacy and equipment vendors by wire or ACH with no finance department.

Pain and evidence (≤40 words; cite the pain dossier file): Business email compromise cost US firms $2.9B in 2023 at $137k+ per incident; the standard fix, phoning to confirm, depends on staff remembering to do it. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent watches the accounts-payable inbox for any message requesting a new payee or bank detail, cross-checks the sender's domain history and every prior invoice from that vendor, and shows the bookkeeper a side-by-side comparison flagging any mismatch before the payment is approved.

Why now (≤25 words): Cheap 1M-token context (TC-25) lets the agent hold years of vendor correspondence in one check instead of just the latest email.

Demo moment (≤20 words): Live: a spoofed "new bank details" email from the feed supplier is flagged red, mismatched domain highlighted.

Business model (≤15 words): Monthly fee per vendor account, or a percentage of flagged payment value.

---
id: s3-ideator-novel-T5-01-r1#04
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# DMARC, Translated and Fixed

One-liner (≤20 words): Turns unreadable daily DMARC XML into one plain-English sentence and the exact DNS record to paste in.

Buyer and niche (≤25 words): Small practices sending appointment reminders and newsletters that must meet Google and Yahoo's bulk-sender authentication rules with no technical staff.

Pain and evidence (≤40 words; cite the pain dossier file): Only 55% of low-volume senders had even heard of the SPF/DKIM/DMARC rules; daily XML reports go unread, so spoofing goes unseen and mail simply stops delivering. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent pulls the daily DMARC aggregate report, extracts which sending sources passed or failed authentication, writes a weekly plain-English summary, and generates the exact SPF, DKIM and DMARC DNS record text for the clinic's domain registrar with a copy-paste box.

Why now (≤25 words): Cheap long-context extraction (TC-25) makes parsing weeks of raw authentication XML into one readable digest affordable at small-business scale.

Demo moment (≤20 words): Live: a week of raw XML becomes "Your reminder vendor is failing DKIM," plus the exact fix.

Business model (≤15 words): $20-40/month flat subscription, sold direct or bundled through the domain registrar.

---
id: s3-ideator-novel-T5-01-r1#05
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# Agents Get Their Own Badge

One-liner (≤20 words): Gives every scheduling bot, reminder service and AI helper its own revocable identity instead of the owner's shared password.

Buyer and niche (≤25 words): Small practices wiring AI agents and automations into scheduling, billing and reminders without an IT department to track who has what access.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts or a person's own API keys with no inventory, hunted down by hand or never reviewed, a gap growing as AI agents get wired in. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): A lightweight identity console issues each connected agent or automation its own scoped login and audit trail on a standard SSO rail, instead of the owner's personal password. The owner sees, on one screen, exactly which agent can touch what, and revokes access with a single click.

Why now (≤25 words): Okta Agent SSO (TC-17, GA 2026-08) is the first production standard treating an agent as its own governed identity, not a shared secret.

Demo moment (≤20 words): Live: the owner clicks "revoke" on the reminder-bot's badge; its next login attempt is denied immediately.

Business model (≤15 words): Monthly fee per connected agent identity, tiered by number of automations.

---
id: s3-ideator-novel-T5-01-r1#06
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# Rehearse the Ransomware Morning

One-liner (≤20 words): A spoken walkthrough that rehearses exactly what breaks and what to do in the first hour of a ransomware hit.

Buyer and niche (≤25 words): Owners of small practices and other tiny organizations with no security staff, before an incident forces them to improvise.

Pain and evidence (≤40 words; cite the pain dossier file): Government ransomware incidents rose 65% in H1 2025, average ransom near $872k; small organizations "unplug everything" and fall back to paper with no rehearsal beforehand. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): A guided spoken conversation walks the owner through their actual systems (scheduling, payment, records), builds a specific paper-fallback runbook naming what to print and where the offline backup lives, then re-runs the same rehearsal each quarter as those systems change.

Why now (≤25 words): Realtime speech-to-speech models (TC-27) hold a natural spoken walkthrough instead of a static PDF checklist nobody rereads.

Demo moment (≤20 words): The agent asks "if email died right now, how would you reach tomorrow's clients?" and the owner has no answer, live.

Business model (≤15 words): Quarterly readiness-session subscription, sold direct or through the practice's insurance broker.

---
id: s3-ideator-novel-T5-01-r1#07
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# The Standing Evidence File

One-liner (≤20 words): Turns each admin console's own export into one running, dated evidence file ready for any insurer or auditor.

Buyer and niche (≤25 words): Small practices that must prove security controls every year without re-gathering evidence from scratch each renewal.

Pain and evidence (≤40 words; cite the pain dossier file): No time-to-complete figure exists for these chores, but firms audit every admin surface "by hand" before answering each renewal application. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The owner forwards or uploads the CSV and PDF exports each console already offers (sign-in logs, MFA status, backup reports). The agent extracts control status from each, maps it to standard insurer and regulator question language, and appends it to one running dated file instead of a one-time scramble.

Why now (≤25 words): Mistral OCR 3 (TC-30) parses mixed scanned and exported reports cheaply enough to run on every export, every month.

Demo moment (≤20 words): Live: three mismatched export formats become one dated line, "MFA enforced clinic-wide since March 12."

Business model (≤15 words): Monthly subscription priced per connected console.

---
id: s3-ideator-novel-T5-01-r1#08
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
---

# Whose Key Is This, Really

One-liner (≤20 words): Cross-checks every API key and webhook against the current staff roster and flags the ones nobody can explain.

Buyer and niche (≤25 words): Small practices whose scheduling, reminder and payment tools were wired together over time by a departed technician or a one-off vendor.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts or personal API keys with no inventory, and are hunted down by hand or never reviewed at all. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent pulls the connected-apps and webhook lists each platform's admin panel already exposes, matches each credential's creator or last-modified name against the current staff roster, and flags any key tied to someone no longer employed for the owner to revoke.

Why now (≤25 words): Claude Sonnet 4.5's long-horizon computer use (TC-02) walks every integrations panel in one unattended pass instead of a manual page-by-page search.

Demo moment (≤20 words): Live: a payment-processor webhook created by a technician who left in June is flagged, still firing.

Business model (≤15 words): One-time audit fee, with a discounted quarterly recheck subscription.

<!-- COMPLETE -->
