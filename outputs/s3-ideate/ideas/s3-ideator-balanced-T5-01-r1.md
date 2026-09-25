## Titles

1. HIPAA Risk Analysis Autopilot
2. Cyber Insurance Questionnaire Copilot
3. Offboarding Sweep for Dental Staff
4. DMARC Report Translator [safe] -> rewrite: The Deliverability Doomsday Clock (predicts the exact week Google/Yahoo will start blocking you, not just a plain-English translation)
5. Vendor Payment Fraud Checker
6. SPF/DKIM Setup Wizard [safe] -> rewrite: One-Click Inbox Insurance (continuously fixes email-auth drift, not a one-time setup wizard)
7. Attestation Truth Auditor
8. Shared Login Finder [similar to 9, 25] -> rewrite: The Ghost Login Hunter (a live cross-console access map, not a single-purpose finder)
9. Admin Console Crawler [similar to 8] -> folded into The Ghost Login Hunter
10. BEC Callback Verifier [similar to 5, 22] -> rewrite: Every Vendor Email Gets a Second Opinion (checks against payment history automatically, not a manual callback script)
11. HIPAA SRA Tool Replacement [safe] -> rewrite: A Risk Analysis OCR Can't Fine (anchored to OCR's actual fined violations, not a generic questionnaire clone)
12. Security Evidence Binder
13. MFA Gap Scanner [similar to 7] -> folded into Attestation Truth Auditor
14. Practice Security Health Check [safe] -> rewrite: The Answer Before The Auditor Asks (continuous evidence capture, not a one-time checkup)
15. Insurance Renewal Prep Assistant [similar to 2] -> folded into Cyber Insurance Questionnaire Copilot
16. Former Employee Access Revoker [similar to 3, 24, 25] -> rewrite: The Exit That Locks Every Door (walks and revokes across every discovered console, not one system)
17. Email Authentication Helper [safe][similar to 4, 6] -> folded into One-Click Inbox Insurance
18. Automation Credential Inventory
19. Dental Office Cyber Compliance Hub [safe] -> rewrite: The Binder The Broker Actually Wants (a single evidence artifact for the insurance broker, not a generic dashboard)
20. Consent-Based Console Auditor -> rewrite: The Agent That Logs In As You, On Purpose (operates inside the office manager's own logged-in session by design)
21. Breach Readiness Dashboard [safe] -> rewrite: The Incident Runbook the Practice Never Wrote (drafts the actual notification letters and steps, not a status dashboard)
22. Vendor Bank-Detail Change Alert [similar to 5, 10] -> folded into Every Vendor Email Gets a Second Opinion
23. HIPAA Overhaul Readiness Tracker
24. Employee Exit Access Checklist Bot [similar to 3, 16] -> folded into The Exit That Locks Every Door
25. Multi-App Access Map [similar to 8, 9] -> folded into The Ghost Login Hunter
26. Cyber Insurance Claim Defense Kit [similar to 2, 15] -> rewrite: Proof Your Controls Were On (timestamped snapshots for claim time, not renewal-time prep)
27. Compliance Chore Concierge [safe] -> dropped, no sharp mechanism behind the name
28. Practice-Wide Password Audit [safe] -> folded into Attestation Truth Auditor
29. Security Attestation Verifier [similar to 7] -> folded into Attestation Truth Auditor
30. Small Practice IT Guardian [safe] -> dropped, generic MSP marketing name with no distinct mechanism

Best 8 developed below: Attestation Truth Auditor, Cyber Insurance Questionnaire Copilot, A Risk Analysis OCR Can't Fine, The Exit That Locks Every Door, Every Vendor Email Gets a Second Opinion, The Deliverability Doomsday Clock, Proof Your Controls Were On, HIPAA Overhaul Readiness Tracker.

## Cards

---
id: s3-ideator-balanced-T5-01-r1#01
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# The Truth Before You Sign

One-liner (≤20 words): Checks every MFA and access claim on your cyber-insurance renewal against what your consoles actually show.

Buyer and niche (≤25 words): Office managers and small-firm owners renewing cyber-insurance policies with 60-150 question control attestations and no IT staff.

Pain and evidence (≤40 words): MFA "on remote desktop but not M365 or domain admin" still counts as "no"; insurers have asked courts to void policies over one wrong answer. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent opens the practice's own logged-in browser session, walks M365, Google Admin, VPN and practice-management consoles, checks each control the questionnaire asks about, and marks every line "true," "false" or "needs a fix" before she signs.

Why now (≤25 words): Claude for Chrome now operates admin consoles inside a user's own logged-in session in production, not just a research demo.

Demo moment (≤20 words): Live scan finds MFA missing on the practice-management admin login the manager was about to mark "yes."

Business model (≤15 words): Flat fee per renewal cycle, sold direct or bundled by the servicing insurance broker.

---
id: s3-ideator-balanced-T5-01-r1#02
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# The Questionnaire That Answers Itself

One-liner (≤20 words): Fills a 150-question cyber-insurance renewal from your actual console settings instead of your best guess.

Buyer and niche (≤25 words): Owners and office managers at 5-50 person firms facing annual cyber-insurance renewal questionnaires with no IT department.

Pain and evidence (≤40 words): Renewals "that used to take fifteen minutes now run sixty to a hundred and fifty questions," and "I don't even know what half of these are asking." (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Given the insurer's PDF or web form, the agent maps each question to a console check, gathers the real answer across the practice's apps, drafts every response with evidence attached, and flags anything it cannot verify for a human decision.

Why now (≤25 words): Claude for Chrome and Skyvern already operate real business web consoles and forms in production today.

Demo moment (≤20 words): A blank 80-question PDF renewal fills itself from live console checks in minutes on stage.

Business model (≤15 words): Subscription per renewal season, tiered by number of connected consoles.

---
id: s3-ideator-balanced-T5-01-r1#03
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# A Risk Analysis OCR Can't Fine

One-liner (≤20 words): Builds the written HIPAA risk analysis practices skip, anchored to the exact gaps OCR has fined for.

Buyer and niche (≤25 words): Small dental and medical practices with no compliance staff, required to keep a current written Security Rule risk analysis.

Pain and evidence (≤40 words): "No written Risk Analysis or one that did not reflect current systems" is the most-cited OCR violation; fines run $90k-$350k for practices that never did one. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent scans the practice's email, EHR/PMS and backup admin consoles, matches findings against the specific control gaps OCR has actually fined practices for, and drafts a dated, defensible risk-analysis document plus a remediation list before the next renewal.

Why now (≤25 words): Cheap document extraction and browser-operating agents can read console settings and prior compliance PDFs into one structured document.

Demo moment (≤20 words): One click turns three scanned consoles into a signed, dated risk-analysis PDF citing each OCR precedent.

Business model (≤15 words): Annual subscription per practice location, priced under a single OCR settlement.

---
id: s3-ideator-balanced-T5-01-r1#04
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# The Exit That Locks Every Door

One-liner (≤20 words): Sweeps every connected console when staff leave, so no former employee keeps a login.

Buyer and niche (≤25 words): Office managers at small practices and firms handling staff departures with no centralized access system.

Pain and evidence (≤40 words): "87% of SMB leaders cannot immediately verify which employees have current access," and six in ten departing staff were never asked for their cloud logins. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Given a departing employee's name, the agent walks every console the practice uses (PMS, email, scheduling, insurance portals, payroll), finds every account and shared login tied to that person, revokes or rotates each one, and produces a signed log proving the sweep ran.

Why now (≤25 words): Browser agents now complete long multi-step console workflows at production-adjacent reliability while staying logged in as the user.

Demo moment (≤20 words): Enter one departing name; watch the agent revoke five separate console logins live.

Business model (≤15 words): Per-offboarding fee, or included per seat for the servicing MSP.

---
id: s3-ideator-balanced-T5-01-r1#05
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# Stop the Wire Before It Sends

One-liner (≤20 words): Cross-checks every vendor bank-detail-change email against payment history before the transfer goes out.

Buyer and niche (≤25 words): Owners and bookkeepers at small firms who pay vendors by wire or ACH with no finance team.

Pain and evidence (≤40 words): A spoofed vendor email changed payee details and cost one small business about $180,000; BEC losses hit $2.9B in the US in one year. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent watches the inbox for bank-detail-change requests, compares the new account and sending pattern against the vendor's known payment history and domain record, and blocks or flags the payment for a phone callback before the accounting software releases funds.

Why now (≤25 words): In-browser agents can read email and act inside existing finance tools without a separate integration or API.

Demo moment (≤20 words): A spoofed "new bank details" email is caught and held before the linked payment fires.

Business model (≤15 words): Per-account monthly fee, priced below tools built for larger finance teams.

---
id: s3-ideator-balanced-T5-01-r1#06
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# The DMARC Report That Talks Back

One-liner (≤20 words): Turns daily DMARC XML into one plain sentence about whether your email will still get delivered.

Buyer and niche (≤25 words): Non-technical owners and office staff at small firms sending invoices, reminders and newsletters under new Google and Yahoo rules.

Pain and evidence (≤40 words): Only 55% of low-volume senders had heard of the Google/Yahoo rules, and DMARC reports are "a common pain point for small business owners and non-technical users." (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent pulls the practice's daily DMARC aggregate report, extracts which senders and systems are failing SPF/DKIM, translates it into one plain-English risk line, and drafts the exact DNS record fix for the domain host's console, without asking anyone to read XML.

Why now (≤25 words): Fast, cheap document parsing makes turning raw daily XML into a readable, actionable summary trivial and near-free.

Demo moment (≤20 words): A week of unread XML reports becomes one sentence: "reminder emails stop reaching Gmail Tuesday."

Business model (≤15 words): Low monthly fee per sending domain.

---
id: s3-ideator-balanced-T5-01-r1#07
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# Proof Your Controls Were On

One-liner (≤20 words): Timestamps snapshots of your security settings so you can prove they were true at claim time.

Buyer and niche (≤25 words): Small firms holding cyber-insurance policies who fear a denied claim over a stale or optimistic attestation.

Pain and evidence (≤40 words): Insurers can "declare the insurance contract null and void" after a breach over one questionnaire answer; roughly 10% of claims are denied for misrepresentation. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): On a schedule, the agent logs into the practice's key consoles, captures dated evidence of each attested control (MFA state, backup logs, patch status), and stores it as a sealed, exportable record the practice can hand a claims adjuster the day a breach happens.

Why now (≤25 words): Production-grade browser agents can repeat the same console walk reliably on a schedule without a human driving each run.

Demo moment (≤20 words): Pull up a dated snapshot proving MFA was on the exact week of a simulated breach.

Business model (≤15 words): Monthly evidence-storage fee, cheaper than one denied claim.

---
id: s3-ideator-balanced-T5-01-r1#08
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-01-r1
---

# Ready Before the Rule Finalizes

One-liner (≤20 words): Tracks the pending HIPAA Security Rule overhaul and tells your practice exactly what changes once it's final.

Buyer and niche (≤25 words): Small covered-entity practices trying to plan spending before a still-unfinished federal rule locks in new mandates.

Pain and evidence (≤40 words): The pending overhaul would make MFA and encryption mandatory with about 180 days to comply once final, an estimated $9B first-year cost falling hardest on small providers. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent monitors the rule's federal register status, compares the draft text to the practice's current consoles and policies, and sends a short plain-English brief whenever the rule moves, listing exactly what would break and by when.

Why now (≤25 words): Cheap long-context models can track and diff regulatory text against a practice's own documents at negligible cost.

Demo moment (≤20 words): Feed the draft rule text; the agent lists the three controls this practice would fail today.

Business model (≤15 words): Low flat monthly monitoring fee, cancel once the rule finalizes and controls are fixed.

<!-- COMPLETE -->
