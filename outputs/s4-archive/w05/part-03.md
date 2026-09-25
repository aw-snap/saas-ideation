---
id: I-3051
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: [seed-08]
source_task: s3-improver-01
raw_id: s3-improver-01#08
merged: []
---

# Same Words, More Life

One-liner (≤20 words): Upload a monotone lecture; get back the same words, timed identically, delivered with more energy.

Buyer and niche (≤25 words): Universities licensing recorded lectures and course videos, and students re-processing lectures they watch or their own recorded presentations.

Pain and evidence (≤40 words; cite the pain dossier file): Monotone, filler-heavy lecture recordings are hard to learn from; re-recording takes a lecturer hours, and manually cutting "ums" breaks sync with slides or screen recordings. (src: outputs/s2-seeds/seed-08.md)

How it works (≤50 words): A speech-to-speech model reshapes pitch and energy to sound livelier and replaces "um"s with clean pauses, while keeping every word's exact original timing so it drops straight onto the lecture video. A per-section expressiveness slider keeps the untouched original one click away.

Why now (≤25 words; name the specific capability): Expressive voice-conversion models can now reshape delivery while preserving word-level timing and the original voice. [unverified]

Demo moment (≤20 words): A monotone, "um"-filled lecture clip with slides, then the same clip re-delivered lively and still in sync.

Business model (≤15 words): Department or campus licence; low-cost student subscription; API for lecture-capture platforms.

---
id: I-3052
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
raw_id: s3-ideator-balanced-T7-01-r1#02
merged: []
---

# Verify My Job Offer

One-liner (≤20 words): Migrant workers upload a job offer or contract; it checks the agency, employer and stamps against live government registries.

Buyer and niche (≤25 words): Overseas job seekers and their families, plus recruitment agencies checking sub-agent paperwork, who cannot tell AI-generated fake offers from real ones.

Pain and evidence (≤40 words; cite the pain dossier file): AI-altered documents already fool first review; roughly 1 in 50 forged documents is AI-generated and insurers report related fraud up 71% year over year. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The tool extracts the agency license number, job order number and employer name from the uploaded offer, logs into the licensing authority's public verification portal to confirm each number is real and matches, and returns a plain-language verdict.

Why now (≤25 words; name the specific capability): Browser agents can already read and act on government verification portals that have no public API.

Demo moment (≤20 words): Upload a doctored offer letter; the tool flags the license number as unregistered within seconds.

Business model (≤15 words): Small flat fee per check, paid by the worker or a family member.

---
id: I-3053
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
raw_id: s3-ideator-balanced-T7-01-r1#05
merged: []
---

# Demand Letter vs. the Chart

One-liner (≤20 words): Lines up an AI-drafted demand letter against the actual medical chart and highlights every unsupported figure.

Buyer and niche (≤25 words): Bodily-injury claims adjusters at insurance carriers, who must cross-check AI-drafted demand letters against medical records for every claim.

Pain and evidence (≤40 words; cite the pain dossier file): ICD codes and dates in AI-drafted demand letters often don't match medical records; 37% of personal-injury lawyers already use generative AI to draft them. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The adjuster uploads the demand letter and the medical records; the tool extracts every dollar figure, ICD code and date from both, aligns them, and shows a side-by-side diff highlighting anything in the letter with no matching record.

Why now (≤25 words; name the specific capability): Document OCR at $1-2 per 1,000 pages makes reading scanned medical charts affordable per claim.

Demo moment (≤20 words): Upload a mismatched letter and chart; the unsupported line item highlights red instantly.

Business model (≤15 words): Per-claim fee, sold to carriers' claims departments.

---
id: I-3054
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
raw_id: s3-ideator-balanced-T7-01-r1#07
merged: []
---

# Red-Flag My Deployment Contract

One-liner (≤20 words): Checks an AI-drafted overseas employment contract clause by clause against the mandatory standard contract and flags illegal terms.

Buyer and niche (≤25 words): Licensed recruitment and manning agencies' compliance staff and paralegals, who review deployment contracts drafted or edited with AI tools before submission.

Pain and evidence (≤40 words; cite the pain dossier file): Paid AI legal tools still hallucinate on drafted terms and require manual line-by-line checking; sanctions and fee awards already turn on undetected drafting errors. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Upload the draft contract; the tool extracts each clause, compares wage, hours, repatriation and fee terms against the mandatory standard employment contract template, and flags any clause that is missing, weaker, or contradicts the standard.

Why now (≤25 words; name the specific capability): 1M-token context and cheap inference let a full contract be checked clause by clause in one pass for cents.

Demo moment (≤20 words): Upload a contract missing the mandatory repatriation clause; it's flagged red with the required wording shown.

Business model (≤15 words): Per-contract fee or monthly plan sold to agency compliance teams.

---
id: I-3055
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-01-r1
raw_id: s3-ideator-balanced-T7-01-r1#08
merged: []
---

# The Right Words for This Judge

One-liner (≤20 words): Generates the exact AI-use disclosure or certification language required by the specific judge hearing your filing.

Buyer and niche (≤25 words): Small litigation firms and paralegals filing across many courts, each with a different standing order on disclosing AI use.

Pain and evidence (≤40 words; cite the pain dossier file): GenAI standing orders conflict across judges, adding "a lack of consistency" and "additional burdens and costs on litigants" with every filing checked against a different rule. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The paralegal names the assigned judge; the tool looks up that judge's current standing order and drafts the exact certification paragraph required, ready to paste into the filing, updating automatically if the order changes.

Why now (≤25 words; name the specific capability): Cheap long-context models can hold and reason over hundreds of standing orders and update instantly when one changes.

Demo moment (≤20 words): Pick two judges with conflicting rules; the tool produces two correctly worded certifications in seconds.

Business model (≤15 words): Subscription per firm, priced by number of active jurisdictions tracked.

---
id: I-3056
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#01
merged: []
---

# Insurer Answers, Console-Verified

One-liner (≤20 words): An agent signs into every clinic admin console and drafts truthful cyber-insurance answers with live screenshot evidence attached.

Buyer and niche (≤25 words): Small practices and offices (5-50 staff) renewing a 60-150 question cyber-insurance application every year with no IT staff.

Pain and evidence (≤40 words; cite the pain dossier file): Questionnaires grew from 15-minute forms to 60-150 line-by-line questions; partial MFA deployment still counts as "no," and a wrong "yes" can void a claim after a breach. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent operates inside the owner's own logged-in browser across M365, Google Workspace, the payment processor and the practice-management system, checks each control against each questionnaire line, flags partial gaps, and drafts an answer with a screenshot citation attached to every line.

Why now (≤25 words; name the specific capability): Claude for Chrome lets an agent act inside the owner's own browser session across many unrelated consoles in one pass.

Demo moment (≤20 words): Live: the agent finds MFA disabled for one admin account and changes the draft answer from "Yes" to "Partial."

Business model (≤15 words): Annual subscription per renewal cycle, priced by number of connected consoles.

---
id: I-3057
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#02
merged: []
---

# The Offboarding Sweep

One-liner (≤20 words): Finds every login a departed employee still holds across a small practice's SaaS stack before it becomes a breach.

Buyer and niche (≤25 words): Owners and office managers at 5-50 person practices losing a technician, bookkeeper or manager, with no IT department to check for them.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders cannot verify who has current access, six in ten departing staff are never asked for cloud logins, and automation credentials outlive the people who created them. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent walks each known SaaS admin console (scheduling, payroll, email, shared drives, connected automations) inside the owner's browser session, lists every account and webhook tied to the departing name, and drafts a revocation checklist the owner approves with one click per item.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use stays on multi-console tasks for over 30 hours, enough to chain many unrelated logins unattended.

Demo moment (≤20 words): Live: the sweep surfaces a scheduling-reminder webhook still posting under a technician who left six months ago.

Business model (≤15 words): Flat fee per offboarding event, or a monthly retainer covering unlimited offboardings.

---
id: I-3058
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#03
merged: []
---

# Payee Change, Verified First

One-liner (≤20 words): Checks every vendor bank-detail-change request against payment history before the bookkeeper approves it, not after the money is gone.

Buyer and niche (≤25 words): Owners and bookkeepers at small practices paying feed, pharmacy and equipment vendors by wire or ACH with no finance department.

Pain and evidence (≤40 words; cite the pain dossier file): Business email compromise cost US firms $2.9B in 2023 at $137k+ per incident; the standard fix, phoning to confirm, depends on staff remembering to do it. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent watches the accounts-payable inbox for any message requesting a new payee or bank detail, cross-checks the sender's domain history and every prior invoice from that vendor, and shows the bookkeeper a side-by-side comparison flagging any mismatch before the payment is approved.

Why now (≤25 words; name the specific capability): Cheap 1M-token context lets the agent hold years of vendor correspondence in one check instead of just the latest email.

Demo moment (≤20 words): Live: a spoofed "new bank details" email from the feed supplier is flagged red, mismatched domain highlighted.

Business model (≤15 words): Monthly fee per vendor account, or a percentage of flagged payment value.

---
id: I-3059
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#04
merged: []
---

# DMARC, Translated and Fixed

One-liner (≤20 words): Turns unreadable daily DMARC XML into one plain-English sentence and the exact DNS record to paste in.

Buyer and niche (≤25 words): Small practices sending appointment reminders and newsletters that must meet Google and Yahoo's bulk-sender authentication rules with no technical staff.

Pain and evidence (≤40 words; cite the pain dossier file): Only 55% of low-volume senders had even heard of the SPF/DKIM/DMARC rules; daily XML reports go unread, so spoofing goes unseen and mail simply stops delivering. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent pulls the daily DMARC aggregate report, extracts which sending sources passed or failed authentication, writes a weekly plain-English summary, and generates the exact SPF, DKIM and DMARC DNS record text for the domain registrar with a copy-paste box.

Why now (≤25 words; name the specific capability): Cheap long-context extraction makes parsing weeks of raw authentication XML into one readable digest affordable at small-business scale.

Demo moment (≤20 words): Live: a week of raw XML becomes "Your reminder vendor is failing DKIM," plus the exact fix.

Business model (≤15 words): $20-40/month flat subscription, sold direct or bundled through the domain registrar.

---
id: I-3060
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#05
merged: []
---

# Agents Get Their Own Badge

One-liner (≤20 words): Gives every scheduling bot, reminder service and AI helper its own revocable identity instead of the owner's shared password.

Buyer and niche (≤25 words): Small practices wiring AI agents and automations into scheduling, billing and reminders without an IT department to track who has what access.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts or a person's own API keys with no inventory, hunted down by hand or never reviewed, a gap growing as AI agents get wired in. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): A lightweight identity console issues each connected agent or automation its own scoped login and audit trail on a standard SSO rail, instead of the owner's personal password. The owner sees, on one screen, exactly which agent can touch what, and revokes access with a single click.

Why now (≤25 words; name the specific capability): Okta Agent SSO (GA 2026-08) is the first production standard treating an agent as its own governed identity, not a shared secret.

Demo moment (≤20 words): Live: the owner clicks "revoke" on the reminder-bot's badge; its next login attempt is denied immediately.

Business model (≤15 words): Monthly fee per connected agent identity, tiered by number of automations.

---
id: I-3061
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#06
merged: []
---

# Rehearse the Ransomware Morning

One-liner (≤20 words): A spoken walkthrough that rehearses exactly what breaks and what to do in the first hour of a ransomware hit.

Buyer and niche (≤25 words): Owners of small practices and other tiny organizations with no security staff, before an incident forces them to improvise.

Pain and evidence (≤40 words; cite the pain dossier file): Government ransomware incidents rose 65% in H1 2025, average ransom near $872k; small organizations "unplug everything" and fall back to paper with no rehearsal beforehand. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): A guided spoken conversation walks the owner through their actual systems (scheduling, payment, records), builds a specific paper-fallback runbook naming what to print and where the offline backup lives, then re-runs the same rehearsal each quarter as those systems change.

Why now (≤25 words; name the specific capability): Realtime speech-to-speech models hold a natural spoken walkthrough instead of a static PDF checklist nobody rereads.

Demo moment (≤20 words): The agent asks "if email died right now, how would you reach tomorrow's clients?" and the owner has no answer, live.

Business model (≤15 words): Quarterly readiness-session subscription, sold direct or through the practice's insurance broker.

---
id: I-3062
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#07
merged: []
---

# The Standing Evidence File

One-liner (≤20 words): Turns each admin console's own export into one running, dated evidence file ready for any insurer or auditor.

Buyer and niche (≤25 words): Small practices that must prove security controls every year without re-gathering evidence from scratch each renewal.

Pain and evidence (≤40 words; cite the pain dossier file): No time-to-complete figure exists for these chores, but firms audit every admin surface "by hand" before answering each renewal application. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The owner forwards or uploads the CSV and PDF exports each console already offers (sign-in logs, MFA status, backup reports). The agent extracts control status from each, maps it to standard insurer and regulator question language, and appends it to one running dated file instead of a one-time scramble.

Why now (≤25 words; name the specific capability): Mistral OCR 3 parses mixed scanned and exported reports cheaply enough to run on every export, every month.

Demo moment (≤20 words): Live: three mismatched export formats become one dated line, "MFA enforced clinic-wide since March 12."

Business model (≤15 words): Monthly subscription priced per connected console.

---
id: I-3063
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r1
raw_id: s3-ideator-novel-T5-01-r1#08
merged: []
---

# Whose Key Is This, Really

One-liner (≤20 words): Cross-checks every API key and webhook against the current staff roster and flags the ones nobody can explain.

Buyer and niche (≤25 words): Small practices whose scheduling, reminder and payment tools were wired together over time by a departed technician or a one-off vendor.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts or personal API keys with no inventory, and are hunted down by hand or never reviewed at all. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent pulls the connected-apps and webhook lists each platform's admin panel already exposes, matches each credential's creator or last-modified name against the current staff roster, and flags any key tied to someone no longer employed for the owner to revoke.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5's long-horizon computer use walks every integrations panel in one unattended pass instead of a manual page-by-page search.

Demo moment (≤20 words): Live: a payment-processor webhook created by a technician who left in June is flagged, still firing.

Business model (≤15 words): One-time audit fee, with a discounted quarterly recheck subscription.

---
id: I-3064
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
raw_id: s3-ideator-novel-T4-02-r2#01
merged: []
---

# Filing Identity That Outlives Volunteers

One-liner (≤20 words): Gives each nonprofit's filing agent its own governed portal identity, so it keeps filing after a treasurer quits.

Buyer and niche (≤25 words): Boards and treasurers of small all-volunteer nonprofits and fire departments that file recurring reports into many state and federal portals.

Pain and evidence (≤40 words; cite the pain dossier file): Compliance knowledge and portal logins "leave with" each departing volunteer, forcing incoming officers to rebuild from nothing; the same failure pattern leaves 87% of small firms unable to verify who still holds access. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The filing agent authenticates to every state and federal portal under its own governed identity, not a volunteer's shared login. When an officer leaves, the board revokes only that person's access in one step; the agent's credentials, audit trail and filing schedule continue untouched, so nothing depends on memory.

Why now (≤25 words; name the specific capability): Auth0's "Auth for MCP" gives agents their own authenticated, revocable identity separate from any human's login. [early access]

Demo moment (≤20 words): Revoke the "treasurer" role mid-demo; the agent still files the next deadline on schedule, unaffected, live.

Business model (≤15 words): Flat annual fee per organization, bundled with the filing subscription.

---
id: I-3065
track: novel
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2B, capability: extractor, track: novel }
parents: [A-seed-03-mech-1, A-seed-03-mech-2]
source_task: s3-ideator-novel-T4-02-r2
raw_id: s3-ideator-novel-T4-02-r2#02
merged: []
---

# Walk-and-Talk Compliance Handoff

One-liner (≤20 words): An outgoing volunteer narrates their filing routine aloud; the agent turns it into a structured calendar and access map.

Buyer and niche (≤25 words): Boards of small nonprofits, fire departments and tow yards losing the one volunteer who held all the compliance knowledge.

Pain and evidence (≤40 words; cite the pain dossier file): Incoming volunteers "conduct a thorough compliance review ... starting from nothing" after a departure, while separately 87% of small orgs cannot verify who holds current access. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The departing officer walks through their routine narrating each portal, login and due date; the agent transcribes and extracts a structured filing calendar and credential inventory, then asks spoken follow-up questions to fill gaps before the person is gone for good, instead of a written manual nobody writes.

Why now (≤25 words; name the specific capability): Open-weight streaming speech recognition turns a narrated walkthrough into structured records on ordinary hardware in real time.

Demo moment (≤20 words): Officer narrates two portal logins aloud; a filled calendar and login list populate on screen instantly.

Business model (≤15 words): One-time handoff fee plus a small annual maintenance fee per organization.

---
id: I-3066
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
raw_id: s3-ideator-novel-T4-02-r2#03
merged: []
---

# Town Hall Filing and Insurance Copilot

One-liner (≤20 words): The same agent that files a town's court and DMV records also proves its real security posture to its insurer.

Buyer and niche (≤25 words): Municipal clerks in small towns who file court documents, DMV lienholder lookups and guardian accountings, and also renew cyber insurance.

Pain and evidence (≤40 words; cite the pain dossier file): Clerks already log into no-API town portals to file records; separately, towns with no security staff "unplugged everything" after one incident, and owners "don't even know what half" the 60-150 insurance-renewal questions ask. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent that already logs into the town's admin consoles to file DMV and court records checks those same consoles' MFA and backup settings, then fills the cyber-insurance renewal questionnaire from what it actually finds, instead of the clerk guessing "yes" and risking a denied claim later.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use operates multiple admin consoles and government portals in one long-running session.

Demo moment (≤20 words): Agent files a DMV lookup, then answers three insurance questions by reading that console's real MFA status, live.

Business model (≤15 words): Per-town monthly fee, bundling filing and insurance-evidence features.

---
id: I-3067
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
raw_id: s3-ideator-novel-T4-02-r2#04
merged: []
---

# Mandate Discovery Radar

One-liner (≤20 words): Tells a tiny org every recurring filing and security attestation it legally owes, before a fine or revocation surfaces it.

Buyer and niche (≤25 words): Treasurers, clerks and office managers at small nonprofits and firms who don't know which mandates already apply to them.

Pain and evidence (≤40 words; cite the pain dossier file): "Many of these orgs never knew the e-Postcard existed" before automatic revocation, and separately only 55% of small email senders had heard of the mandatory SPF/DKIM/DMARC rules that now block their mail. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The org enters its type, states of operation, revenue and email volume; the agent cross-references a maintained library of statutes and mandate pages against that profile, and returns the specific filings and attestations it owes, with deadlines and the portal for each, refreshed as rules change.

Why now (≤25 words; name the specific capability): 1M-token context holds an entire mandate library alongside one org's profile in a single check.

Demo moment (≤20 words): Enter a small charity's profile; the agent surfaces two filings the treasurer had never heard of, live.

Business model (≤15 words): Low annual fee per organization, cheaper than one missed-filing penalty.

---
id: I-3068
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
raw_id: s3-ideator-novel-T4-02-r2#05
merged: []
---

# Ward Payee-Change Sentinel

One-liner (≤20 words): Checks every new bank-detail change on a ward's bills against known vendors before a guardian pays, and logs it.

Buyer and niche (≤25 words): Court-appointed guardians, conservators and daily money managers who both pay a ward's bills and must file the annual accounting.

Pain and evidence (≤40 words; cite the pain dossier file): Guardians must produce a court-ready annual accounting with no discrepancies, while nationally $2.9B a year is lost when a spoofed vendor email changes a payee account and payment goes out before anyone calls back. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Every incoming bill or payee-change request is checked against the ward's known vendor and account history; anything new or altered is held and flagged for a callback before payment, and every approved payment is logged straight into the running annual accounting the guardian already keeps.

Why now (≤25 words; name the specific capability): Cheap high-volume document extraction makes checking every bill's payee details against history affordable at guardian scale.

Demo moment (≤20 words): A spoofed "updated bank details" email arrives; the agent holds the payment and flags the mismatch, live.

Business model (≤15 words): Per-ward monthly fee, priced against the fraud losses it prevents.

---
id: I-3069
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
raw_id: s3-ideator-balanced-T9-02-r1#01
merged: []
---

# The Chain-of-Custody Drafter

One-liner (≤20 words): Local AI drafts from case files and logs cryptographic proof that nothing ever left the machine.

Buyer and niche (≤25 words): Solo and small-firm lawyers who draft motions and letters from case facts and cannot risk waiving privilege.

Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material was not privileged because the vendor owes no duty of confidentiality; every drafting session that touches case facts carries the risk. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local open-weight model drafts motions and letters entirely offline; every session writes a signed, tamper-evident log of inputs, outputs and zero network calls, which the lawyer can hand to a bar investigator or opposing counsel as proof of no disclosure.

Why now (≤25 words; name the specific capability): gpt-oss-20b fits in 16GB and drafts offline; llama.cpp/Ollama serve it reliably on one workstation with no cloud call.

Demo moment (≤20 words): Draft a motion with wifi unplugged, then display the signed log proving zero outbound network traffic occurred.

Business model (≤15 words): $1,800 one-time hardware and software bundle plus $49/month audit-log and update subscription.

---
id: I-3070
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
raw_id: s3-ideator-balanced-T9-02-r1#03
merged: [s3-ideator-novel-T9-02-r1#03]
---

# The Season Box

One-liner (≤20 words): A rented offline appliance that extracts W-2s and 1099s and auto-signs the per-vendor consent tax law requires.

Buyer and niche (≤25 words): Solo CPAs and EAs during January-April crunch, keying source documents by hand under 80-hour weeks.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into a personal AI account without a signed per-vendor consent is a federal violation; the more preparers sanitize data, the less useful cloud AI becomes. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A pre-loaded local box reads scanned W-2s, 1099s and receipts entirely offline using an open-weight document model, posts structured entries to a local ledger, and drafts the required per-vendor consent form for the client to sign before any AI ever touches their return. A phone photo of a document can feed the same pipeline.

Why now (≤25 words; name the specific capability): Open-weight local models (gpt-oss-20b) served via llama.cpp process documents fully offline, so no cloud vendor ever receives return data.

Demo moment (≤20 words): Feed a mock W-2 through the box offline; ledger entries and a signed consent PDF appear together.

Business model (≤15 words): $299 per tax season rental, plus $99 per extra client consent pack.

---
id: I-3071
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
raw_id: s3-ideator-balanced-T9-02-r1#05
merged: []
---

# The Waiting-Room Kiosk

One-liner (≤20 words): An offline tablet that takes client intake and a witnessed consent signature, never touching WiFi or a server.

Buyer and niche (≤25 words): Solo lawyers and therapists whose staff retype paper intake forms and chase signed consent before every AI-assisted session.

Pain and evidence (≤40 words; cite the pain dossier file): Consent must be obtained per client, and clients themselves distrust AI handling their data; a kiosk that captures both on paper-like glass in the room builds trust rather than eroding it. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A locked-down tablet in the waiting room reads a client's handwritten or typed intake form, converts it into structured fields with an on-device model, shows the required AI-use disclosure, and captures a witnessed signature; the device is set to airplane mode and syncs later over a wired cable.

Why now (≤25 words; name the specific capability): Apple's on-device Foundation Models framework does extraction and classification locally with no backend, purpose-built for exactly this footprint.

Demo moment (≤20 words): Fill a mock form on the kiosk in airplane mode; structured fields and signed consent PDF appear.

Business model (≤15 words): $899 kiosk hardware one-time, plus $29/month software license per device.

---
id: I-3072
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
raw_id: s3-ideator-balanced-T9-02-r1#06
merged: []
---

# The AI Service Truck

One-liner (≤20 words): A technician installs and quarterly-tunes a local AI box for a solo practice, billed like an HVAC contract.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs who want private AI but have no IT staff and cannot afford a five-figure consultant.

Pain and evidence (≤40 words; cite the pain dossier file): Privacy-preserving local setups assume compute and skills small practices lack; self-hosting is sold as a five-figure consulting job most solos cannot afford. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A technician delivers a pre-configured mini-PC loaded with an open-weight model, installs it on-site in under an hour, and returns quarterly to update the model, check disk encryption and refresh consent templates, the same visit cadence as a seasonal HVAC tune-up.

Why now (≤25 words; name the specific capability): gpt-oss-20b runs on a single consumer GPU; llama.cpp/Ollama serve it reliably, so a technician needs a $1,500 box, not a data center.

Demo moment (≤20 words): Unbox a mini-PC, run the installer live, draft a memo fully offline in under ten minutes.

Business model (≤15 words): $1,500 hardware plus $150 per quarterly visit, well under a five-figure consultant install.

---
id: I-3073
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
raw_id: s3-ideator-balanced-T9-02-r1#07
merged: []
---

# The Transcript That Never Left

One-liner (≤20 words): A local model reviews full deposition transcripts on-device instead of paying vendors $3-8 per page to summarize them.

Buyer and niche (≤25 words): Solo litigators and small-firm attorneys who currently send depositions to outside vendors or pay contract reviewers by the hour.

Pain and evidence (≤40 words; cite the pain dossier file): Deposition summaries are sent to third-party vendors at $3-8 per page, and document review is staffed as commodity labor at $30-125 an hour. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local open-weight model with a long context window ingests a full deposition transcript directly on the attorney's machine, flags key admissions and contradictions against the complaint, and drafts a summary memo, with the transcript file never leaving the firm's network or reaching a vendor.

Why now (≤25 words; name the specific capability): Long-context open models paired with the steep drop in inference cost make a full, non-chunked local pass over a transcript affordable.

Demo moment (≤20 words): Load a 200-page mock deposition offline; a flagged-admissions summary appears in minutes, network monitor idle.

Business model (≤15 words): $199/month flat per attorney, replacing per-page vendor billing entirely.

---
id: I-3074
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
raw_id: s3-ideator-balanced-T9-02-r1#08
merged: []
---

# The Pre-Vetted Compliance Bundle

One-liner (≤20 words): A local AI bundle that ships with a finished vendor-diligence memo, so a solo never negotiates a data contract.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs priced out of enterprise AI tools that require procurement and security teams they don't have.

Pain and evidence (≤40 words; cite the pain dossier file): The strongest confidentiality terms are negotiated by procurement teams solos lack; flagship tools run $428-1,200 per seat with 20-25 seat minimums, and solos are still expected to vet contracts themselves. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Because the model runs entirely on the buyer's own hardware, there is no vendor data-processing agreement to negotiate at all; the bundle ships with a pre-filled one-page diligence memo citing the relevant bar or tax-consent opinion, ready to drop straight into the practice's compliance file.

Why now (≤25 words; name the specific capability): Open-weight models under a permissive license mean no vendor contract to negotiate, only a hardware purchase with the license attached.

Demo moment (≤20 words): Show the included one-page diligence memo beside a lengthy redacted enterprise data-processing agreement for contrast.

Business model (≤15 words): $2,200 one-time bundle including hardware, software, diligence memo and one year of updates.

---
id: I-3075
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r2
raw_id: s3-ideator-novel-T3-02-r2#01
merged: []
---

# Wholesale Reorder & Invoice Reconciler

One-liner (≤20 words): An agent reorders pharmacy stock through real vendor checkout and cross-checks every incoming invoice against what it ordered.

Buyer and niche (≤25 words): Independent pharmacy owners on PioneerRx, blocked behind a manual vendor-inquiry API form, reordering from wholesalers by hand today.

Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx access "goes through a manual vendor-inquiry form" with no public API; agencies elsewhere report duplicate and near-duplicate charges slipping past ledger checks unnoticed. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent reads the refill queue inside PioneerRx's own screens, places matching reorders through the wholesaler's agent-checkout flow instead of a scraped order form, then matches each arriving invoice line to its order, flagging price drift or duplicate billing before a pharmacist approves payment.

Why now (≤25 words; name the specific capability): The Agentic Commerce Protocol (Sept 2025) lets an agent complete real checkout with participating merchants, not just click through a form.

Demo moment (≤20 words): A low-stock item triggers an order; the mock invoice arrives $4 higher than quoted and is flagged instantly.

Business model (≤15 words): Per-pharmacy monthly subscription, about $150, priced against one caught overcharge.

<!-- COMPLETE -->
