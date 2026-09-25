## Titles

1. Console Crawler for Cyber-Insurance Forms
2. MFA Reality Checker [similar to 1] -> rewrite: **Attestation Drift Monitor**
3. CMMC Evidence Autopilot
4. SPRS Affirmation Copilot [similar to 3] -> rewrite: **Living SSP Diff Bot**
5. HIPAA Risk Analysis Autowriter
6. Offboarding Sweep Agent
7. Orphaned Automation Hunter [similar to 6] -> rewrite: **Zombie Integration Finder**
8. Vendor Bank-Change Verifier
9. DMARC Plain-English Digest [safe] -> rewrite: **Self-Healing Email Authentication Agent**
10. SPF/DKIM/DMARC Setup Wizard [similar to 9] -> rewrite: **Shadow-IT Discovery from Inbox Receipts**
11. Agent Identity Vault for Small Firms
12. False-Claims Attestation Auditor
13. Town Hall Ransomware First-Responder [safe] -> rewrite: **Attack Surface Auto-Inventory for One-IT-Person Towns**
14. Nonprofit Security Posture Snapshot [similar to 1, 13] -> rewrite: **Board-Ready Security Scorecard**
15. Shared Credential Retirement Bot [similar to 6, 7] -> rewrite: **One-Command Access Revocation Sweep**
16. Cyber Insurance Renewal Autopilot [similar to 1] -> rewrite: **One Evidence Base, Any Insurer's Dialect**
17. Compliance Evidence Locker [safe] -> rewrite: **Nightly Proof-of-Control Refresh Feed**
18. Cross-Console Access Map [similar to 6, 15] -> rewrite: **Wire-Transfer Touchpoint Map**
19. Email Authentication Health Check [similar to 9, 10] -> rewrite: **Bulk-Sender Compliance Ceiling Alarm**
20. Wire-Transfer Fraud Interceptor [similar to 8] -> rewrite: **Liveness-Verified Callback Agent**
21. AI Agent Permission Passport [similar to 11] -> rewrite: **Portable Agent Audit Trail for MSPs**
22. Annual Risk Assessment Autopilot [similar to 5] -> rewrite: **Continuous HIPAA Risk Analysis**
23. MSP Client Fleet Dashboard [safe] -> rewrite: **MSP Time-to-Bill Estimator**
24. Security Questionnaire Translator [similar to 1, 16] -> rewrite: **Broker-Facing Explainer Agent**
25. Departing Employee Access Auditor [similar to 6, 15, 18] -> rewrite: **Contractor Off-Ramp Timer**
26. Regulatory Deadline Tracker [safe] -> rewrite: **Penalty-Weighted Compliance Triage**
27. Phishing Simulation for Micro-Firms [safe] -> rewrite: **Premium-ROI Control Negotiator**
28. Zero-Trust Starter Kit [safe] -> rewrite: **Non-Human Identity Census**
29. Vendor Identity Verification Ledger [similar to 8, 20] -> rewrite: **Cross-Company Verified-Vendor Registry**
30. Consultant-in-a-Box for CMMC [similar to 3, 4] -> rewrite: **Legacy Shop-Floor Isolation Advisor**

Best 8 developed below: Attestation Drift Monitor, Living SSP Diff Bot, Zombie Integration Finder, Vendor Bank-Change Verifier, Self-Healing Email Authentication Agent, Non-Human Identity Census, One Evidence Base Any Insurer's Dialect, Penalty-Weighted Compliance Triage.

## Cards

---
id: s3-ideator-novel-T5-02-r1#01
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Attestation Drift Monitor

One-liner (≤20 words): Catches the gap between what your insurance form claims and what your admin consoles actually show.

Buyer and niche (≤25 words): Owner or office manager at a 5-50 person firm with no IT staff, renewing cyber insurance annually.

Pain and evidence (≤40 words; cite the pain dossier file): Renewal forms ballooned to 60-150 control questions few can answer; a wrongly-answered MFA question voided a policy after breach in Travelers v. ICS, and 82% of denied claims lacked MFA. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): A browser agent logs into Entra, M365 and RDP consoles the same way the owner would, checks actual MFA and backup coverage against last year's answers, flags every mismatch, and drafts the corrected questionnaire with screenshot evidence attached.

Why now (≤25 words; name the specific capability): In-browser agents (production since Dec 2025) operate admin consoles inside the owner's own logged-in session, no API integration needed.

Demo moment (≤20 words): Live demo: agent finds MFA enforced on RDP but not two admin accounts, flags the exact wrong answer.

Business model (≤15 words): Flat fee per renewal cycle, $199-299, sold direct or through the insurance broker.

---
id: s3-ideator-novel-T5-02-r1#02
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Living SSP Diff Bot

One-liner (≤20 words): Keeps your CMMC security plan accurate automatically instead of stale by the time the assessor arrives.

Buyer and niche (≤25 words): Owner or operations manager at a 5-50 person DoD manufacturing subcontractor preparing for CMMC Level 2 assessment.

Pain and evidence (≤40 words; cite the pain dossier file): Level 2 documentation runs $50k-$300k+, assessor fees alone $40k-$80k+, and requirements shifted mid-preparation when DoD paused Phase 2 assessments in July 2026, wasting readiness spend already committed. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): A long-running agent watches shop-floor and cloud consoles for control changes, updates the draft System Security Plan paragraph by paragraph as things change, and flags new unpatched or unsegmented machines before the assessor finds them.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use holds state across 30+ hour tasks, enough to track a slow-moving SSP through weeks of shop-floor changes.

Demo moment (≤20 words): Agent spots a newly connected shop-floor PC, updates the SSP text, and flags it for network isolation.

Business model (≤15 words): Monthly subscription tied to assessment cycle, roughly $500 per manufacturing site.

---
id: s3-ideator-novel-T5-02-r1#03
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Zombie Integration Finder

One-liner (≤20 words): Hunts down the API keys, webhooks and agent tokens a departed employee's automations left running.

Buyer and niche (≤25 words): Sole IT admin or office manager at a small firm offboarding staff who built integrations or automations.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders cannot verify who has current access, and automation credentials outlive the people who created them, with no inventory to check at offboarding. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent crawls each SaaS admin console (Zapier, Workspace, Slack, M365), inventories every API key, webhook, service account and AI-agent token, traces who created each one, and revokes or reassigns everything tied to a departing employee in one pass.

Why now (≤25 words; name the specific capability): Okta Agent SSO, GA August 2026, gives automations governed identities separate from the human accounts they rode on, so one credential revokes cleanly.

Demo moment (≤20 words): Click "offboard Maria": the agent revokes her three webhooks, one Zapier key and one agent token live.

Business model (≤15 words): Per-offboarding fee (about $49) or bundled into an MSP's monthly retainer.

---
id: s3-ideator-novel-T5-02-r1#04
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Vendor Bank-Change Verifier

One-liner (≤20 words): Confirms a vendor's new bank details against their own site before the wire goes out.

Buyer and niche (≤25 words): AP clerk or owner at a small firm, or the MSP handling payments for several small clients.

Pain and evidence (≤40 words; cite the pain dossier file): Business email compromise cost US firms $2.9B in 2023 at $137k+ average per incident; phoning to confirm is advice given only after the fact. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): When an email requests a bank-detail change, the agent independently browses to the vendor's own verified website or portal, not the email, re-derives their real contact details, and holds the payment until an out-of-band callback confirms the change.

Why now (≤25 words; name the specific capability): In-browser agents run inside the same session and inbox the AP clerk already trusts, catching domain mismatches live before payment, not after.

Demo moment (≤20 words): A spoofed "new bank details" email arrives; agent flags the domain mismatch and pulls the real phone number.

Business model (≤15 words): Per-transaction fee or flat monthly add-on inside existing accounts-payable software.

---
id: s3-ideator-novel-T5-02-r1#05
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Self-Healing Email Authentication Agent

One-liner (≤20 words): Reads your DMARC failures in plain English, then fixes the DNS record itself.

Buyer and niche (≤25 words): Office manager at a small firm or nonprofit sending invoices, receipts and newsletters.

Pain and evidence (≤40 words; cite the pain dossier file): Only 55% of low-volume senders had heard of the Google/Yahoo authentication rules, and raw DMARC XML reports go unread, so monitoring is abandoned and spoofing goes unseen. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent parses the daily DMARC/DKIM/SPF aggregate report, explains each failure in plain language, then logs into the domain registrar's console itself to fix the SPF include or DKIM record, and reruns the check to confirm delivery is restored.

Why now (≤25 words; name the specific capability): Computer-use agents can operate the registrar console directly, closing the loop instead of just dashboarding the XML like existing tools.

Demo moment (≤20 words): Agent shows a failing DKIM alignment, edits the TXT record in a mock registrar, reruns the check green.

Business model (≤15 words): Flat monthly SaaS fee, roughly $29-79 per domain.

---
id: s3-ideator-novel-T5-02-r1#06
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Non-Human Identity Census

One-liner (≤20 words): Gives every API key, webhook and AI agent its own revocable identity instead of a shared secret.

Buyer and niche (≤25 words): MSP or sole admin managing SaaS security for several 5-50 person firms with no IT staff.

Pain and evidence (≤40 words; cite the pain dossier file): Automation credentials outlive the people who created them, run on shared service accounts, and are hunted down by hand or never reviewed; the risk grows as AI agents get wired in. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent scans every console for API keys, webhooks and AI-agent tokens, issues each one a scoped, revocable identity through agent-SSO instead of a shared secret, and shows the owner a live roster they can kill individually without touching human accounts.

Why now (≤25 words; name the specific capability): Okta Agent SSO, generally available August 2026, is the first production standard treating agents as governed identities, not shared secrets.

Demo moment (≤20 words): Dashboard lists 14 identities at a 12-person firm, 6 non-human; click one AI-agent token to revoke it alone.

Business model (≤15 words): Per-identity monthly fee, $3-5 each, resold through MSPs.

---
id: s3-ideator-novel-T5-02-r1#07
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# One Evidence Base, Any Insurer's Dialect

One-liner (≤20 words): Builds one true evidence file, then auto-fills any insurer's differently worded questionnaire from it.

Buyer and niche (≤25 words): Owner or insurance broker preparing cyber-insurance quotes from multiple carriers for a small firm.

Pain and evidence (≤40 words; cite the pain dossier file): Renewal forms run 60-150 line-by-line questions per insurer, and existing carriers like Coalition and At-Bay still leave the owner answering alone with no shared evidence base across quotes. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent audits admin consoles to build one canonical evidence file (MFA, backup, EDR state, screenshots), then maps that single source onto any carrier's questionnaire wording, keeping every quote's answers and evidence consistent instead of re-answering from memory each time.

Why now (≤25 words; name the specific capability): 1M-token context holds the full evidence base and every carrier's form in one prompt, so answers stay consistent across quotes.

Demo moment (≤20 words): The same evidence base fills a Coalition form and an At-Bay form correctly, side by side, in two minutes.

Business model (≤15 words): Per-quote-cycle fee, about $199, or broker-referral revenue share.

---
id: s3-ideator-novel-T5-02-r1#08
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-02-r1
---

# Penalty-Weighted Compliance Triage

One-liner (≤20 words): Turns four competing compliance deadlines into one ranked list, priced in dollars of penalty risk.

Buyer and niche (≤25 words): Owner, office manager or MSP juggling HIPAA, CMMC, insurance and offboarding chores at once with no IT staff.

Pain and evidence (≤40 words; cite the pain dossier file): Penalties span $90k-$507k across HIPAA, CMMC and False Claims Act cases, and small firms with no security staff have no way to tell which overdue chore to do first. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent ingests each applicable regulation's text, recent enforcement cases and the firm's live console state, scores every open gap by expected-penalty-times-likelihood, and outputs one ranked to-do list that re-sorts itself weekly as consoles change.

Why now (≤25 words; name the specific capability): 1M-token context lets the agent reason over every regulation, enforcement case and the firm's live evidence together in one pass.

Demo moment (≤20 words): Four deadlines become one ranked list with dollar-penalty estimates, live, as new console data streams in.

Business model (≤15 words): MSP-facing subscription, about $149 per month per client bundle.

<!-- COMPLETE -->
