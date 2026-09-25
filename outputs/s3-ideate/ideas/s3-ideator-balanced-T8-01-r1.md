## Titles

1. Medicaid Renewal Autopilot
2. The Appeal That Writes Itself [similar to 14, 25]
3. POA Passport [similar to 21]
4. Fraud Watchtower for Parents [similar to 16, 24]
5. Portal Login Concierge [safe]
6. Fiduciary Ledger Copilot [similar to 28]
7. Bill-Pay Guardian Angel [safe]
8. Joint Account Red Flag
9. Plan-Switch Alarm [similar to 19]
10. Estate Unlock Chain [similar to 20]
11. Nurse's Paperwork Sidekick [safe]
12. Home Visit Admin Scribe [similar to 11]
13. Caregiver Command Center [safe]
14. Denial Decoder [similar to 2]
15. Renewal Reminder Robot [safe]
16. Scam Pattern Sentinel [similar to 4]
17. Multi-Institution Password Vault [safe]
18. Care Team Inbox [safe]
19. Medicare Advantage Watchdog [similar to 9]
20. Death Admin Checklist Bot
21. Proxy Access Passport [similar to 3]
22. EOB Error Hunter
23. Spend-Down Advisor [safe]
24. Elder Fraud Freeze Button [similar to 4]
25. SNF Discharge Appeal Assistant [similar to 2]
26. Nursing Home Bill Auditor [similar to 22]
27. Daily Money Manager AI [safe]
28. Guardian Accounting Autopilot [similar to 6]
29. Mail Pile Triage Camera
30. Cross-Portal Status Dashboard [safe]

### Rewrites (marked titles, made distinct and bold)

- 2/14/25 → **72-Hour Appeal Sprint**: not just a drafted letter, an agent that files the CMS appeal inside the plan's own web portal within the 72-hour expedited window and tracks it to a decision.
- 3/21 → **MFA Relay for Proxies**: the parent's one-time-passcode texts forward to the app, which holds credentials and completes the actual portal login on the proxy's behalf, with a signed action log.
- 4/16/24 → **Scam Interrupt Button**: a same-day watch on the parent's transaction pages that fires a one-tap "call the bank now" script the moment a gift-card or wire pattern appears, not a monthly statement review.
- 5/13/17/18/30 → folded into **Overnight Portal Sentinel** (see card 3) and **MFA Relay for Proxies**: instead of one more login vault or dashboard, the agent logs in itself every night and only surfaces what changed.
- 6/28 → **Fiduciary Ledger Autopilot**: turns a year of statements into the exact VA/SSA annual-accounting format, not a generic bookkeeping copilot.
- 7 → folded into **Scam Interrupt Button** and **Fiduciary Ledger Autopilot**: bill-pay babysitting reframed as fraud detection plus audit-ready records, not a vague "guardian angel."
- 9/19 → **Network-Drop Early Warning**: catches a provider leaving the plan's network or a drug falling off-formulary before the family is mid-crisis, not a generic watchdog.
- 10 → **Death Notification Broadcast**: one death-certificate upload fans out to every institution's own portal or web form instead of an unspecified "unlock chain."
- 11/12 → **Mail Pile Triage Camera**: a phone photo of the whole stack of unopened mail becomes a ranked, filed to-do list.
- 15 → folded into **Medicaid Renewal Autopilot** and **Mail Pile Triage Camera**: the fix is interception and filing before the deadline, not another reminder notification.
- 22/26 → **Nursing Home Bill Auditor**: cross-checks the facility invoice against the plan's own denial record so families stop paying for days that should have been appealed instead.
- 23 → **Five-Year Lookback Tripwire**: flags a specific transaction that risks a Medicaid penalty period at the moment it happens, not open-ended financial advice.
- 27 → folded into **Fiduciary Ledger Autopilot**: the pitch is the annual filing a paid proxy already owes, not a generic "AI money manager" label.

## Cards

---
id: s3-ideator-balanced-T8-01-r1#01
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# Medicaid Renewal Autopilot

One-liner (≤20 words): Watches a parent's Medicaid renewal portal, pre-fills the packet from past answers, and files before the 30-day clock runs out.

Buyer and niche (≤25 words): Adult children and guardians managing a parent's long-term-care Medicaid renewal, who don't live in the same house as the mail.

Pain and evidence (≤40 words; cite the pain dossier file): 69% of coverage terminations during unwinding were procedural, not eligibility-based; renewal packets carry a 30-day window and are often mailed to the parent, not the proxy. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Proxy links the state Medicaid account once. The agent checks the portal on a schedule, recognizes a renewal packet the moment it posts, pre-fills answers from last year's file and uploaded documents, and submits before the deadline, pinging the proxy only to confirm and sign.

Why now (≤25 words): Claude for Chrome (TC-03) and Skyvern (TC-07) operate no-API state portals in an authenticated session while the human stays account holder of record.

Demo moment (≤20 words): A mock renewal portal posts a packet; the agent fills and submits it live, countdown clock still showing 22 days left.

Business model (≤15 words): $19/month per enrolled parent, or $9 per state added.

---
id: s3-ideator-balanced-T8-01-r1#02
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# 72-Hour Appeal Sprint

One-liner (≤20 words): Turns a Medicare Advantage denial letter into a filed, tracked appeal inside the plan's own portal within its expedited window.

Buyer and niche (≤25 words): Family members who just received a prior-authorization denial for a parent's skilled-nursing stay or home care and have 72 hours to act.

Pain and evidence (≤40 words; cite the pain dossier file): 4.1M of 52.8M 2024 Medicare Advantage prior-auth requests were denied; only 11.5% were appealed, yet 80.7% of appeals win. Denials land mid-crisis when nobody has time to fight them. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): User photographs the denial letter; the agent extracts the denial reason and plan-specific criteria, drafts an appeal citing the plan's own coverage rules, logs into the plan's appeal portal, submits within the expedited window, and polls status until a decision posts.

Why now (≤25 words): Mistral OCR 3 (TC-30) reads the denial letter cheaply; Skyvern (TC-07) files the appeal where no API exists.

Demo moment (≤20 words): Sample denial letter uploaded; drafted appeal and portal submission confirmation both appear on screen within a minute.

Business model (≤15 words): $79 per filed appeal, refunded if the agent can't find a portal.

---
id: s3-ideator-balanced-T8-01-r1#03
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# MFA Relay for Proxies

One-liner (≤20 words): Forwards the parent's login codes to an agent that completes the portal sign-in itself and keeps a signed proof-of-access log.

Buyer and niche (≤25 words): Adult children and formal POA agents locked out of a parent's bank or Medicare account because MFA texts go to the parent's phone.

Pain and evidence (≤40 words; cite the pain dossier file): Banks demand their own POA form; CMS requires proof of authority "at any time"; one 94-year-old went seven months without her pension because staff would not recognize the proxy. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The parent's one-time codes forward to a monitored number. When the proxy requests an action, the agent logs into the real portal, enters the relayed code, completes the task, and writes a timestamped, exportable action log the proxy can hand to a bank or CMS as proof of authorized access.

Why now (≤25 words): Claude for Chrome (TC-03) runs authenticated browser sessions on a person's behalf while they stay the account owner of record.

Demo moment (≤20 words): A simulated OTP text arrives; the agent completes a mock bank login live and exports the signed access log.

Business model (≤15 words): $24/month covering up to five linked institutions.

---
id: s3-ideator-balanced-T8-01-r1#04
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# Scam Interrupt Button

One-liner (≤20 words): Checks a parent's transaction pages every night for scam patterns and sends a same-day, one-tap freeze script.

Buyer and niche (≤25 words): Adult children watching a parent's bank and card accounts for elder fraud, who currently only notice a scam on the monthly statement.

Pain and evidence (≤40 words; cite the pain dossier file): 147,127 elder-fraud complaints in 2024, up 46%, with $4.885B lost; 7,500 victims lost over $100k each; families typically find out weeks or months after the money moves. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The agent logs into the parent's bank and card portals nightly, matching new transactions against known scam signatures (gift-card purchases, new-payee wires, repeated small "verification" charges), and texts the proxy that day with the flagged item and a scripted call to freeze the account.

Why now (≤25 words): Browser agents (TC-02, TC-06) read no-API statement pages daily at near-zero cost, catching a pattern same-day instead of at month-end.

Demo moment (≤20 words): A seeded transaction feed with a gift-card scam triggers an alert and freeze script within seconds.

Business model (≤15 words): $9.99/month per monitored parent.

---
id: s3-ideator-balanced-T8-01-r1#05
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# Mail Pile Triage Camera

One-liner (≤20 words): One phone photo of a stack of unopened mail becomes a ranked, filed, deadline-sorted to-do list.

Buyer and niche (≤25 words): Adult children and home visitors who arrive to a table of unopened Medicaid, Medicare and estate letters and don't know which one is urgent.

Pain and evidence (≤40 words; cite the pain dossier file): Renewal packets and plan notices are mailed to the parent, not the proxy, and get lost in paperwork; after a death, every institution sends its own certified-mail process on its own clock. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Photograph the whole stack in one shot. The agent segments each envelope and letter, reads sender and deadline language, ranks by urgency (renewal, appeal, notice, bill), files a digital copy under the right institution, and surfaces the three most time-sensitive items with dates circled.

Why now (≤25 words): Mistral OCR 3 (TC-30) parses scanned and handwritten mail at about $2 per 1,000 pages, cheap enough for a daily habit.

Demo moment (≤20 words): A photo of ten mixed letters produces a ranked list with deadlines highlighted in under 15 seconds.

Business model (≤15 words): $9/month standalone, bundled free with any other card in this file.

---
id: s3-ideator-balanced-T8-01-r1#06
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# Nursing Home Bill Auditor

One-liner (≤20 words): Cross-checks a facility's invoice against the Medicare Advantage plan's own denial record before the family pays.

Buyer and niche (≤25 words): Families paying a skilled-nursing or assisted-living bill for a parent whose plan denied some of the covered days.

Pain and evidence (≤40 words; cite the pain dossier file): One daughter found "his plan had denied additional days at a skilled nursing facility the same week his doctor was recommending he stay"; only 11.5% of denials get appealed even though 80.7% win. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The agent pulls the facility's line-item invoice and the plan's EOB/denial history for the same stay, matches each billed day against its coverage status, and flags any day the family is being charged for that is still under an open or unfiled appeal, with a one-click route into an appeal.

Why now (≤25 words): Sonnet 4.5's computer use (TC-02) can stay on a multi-step reconciliation task across two portals for the time a real audit takes.

Demo moment (≤20 words): A mock invoice and EOB load; one disputed day-charge highlights with "appeal instead of pay" suggested.

Business model (≤15 words): 20% contingency fee on amounts successfully disputed, or $15/month flat.

---
id: s3-ideator-balanced-T8-01-r1#07
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# Death Notification Broadcast

One-liner (≤20 words): One death-certificate upload fans out to every bank, card issuer, utility and brokerage through their own portals or forms.

Buyer and niche (≤25 words): The executor, usually the former POA agent, who must notify a scattered list of institutions after a parent dies while funeral costs come due.

Pain and evidence (≤40 words; cite the pain dossier file): The POA ends at death and accounts freeze on notice; each institution has its own process and wants a certified death certificate, while collectors sometimes chase the former agent for the deceased's debts. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The executor uploads the death certificate and a list of known institutions once. The agent logs into or fills the web form for each one, attaches the certificate, submits the closure or estate-notification request, and keeps a status board showing confirmed, pending and needs-attention across every account.

Why now (≤25 words): Skyvern (TC-07) already automates file upload and form submission across many no-API sites, exactly the "one event, many institutions" shape.

Demo moment (≤20 words): One upload triggers submissions to two mock institution portals; a live status board updates from pending to confirmed.

Business model (≤15 words): Flat $199 per estate, paid once.

---
id: s3-ideator-balanced-T8-01-r1#08
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r1
---

# Fiduciary Ledger Autopilot

One-liner (≤20 words): Turns a year of a parent's bank statements into the exact VA or SSA annual accounting format, ready to file.

Buyer and niche (≤25 words): Paid daily money managers and VA or Social Security fiduciaries who must produce audited, formatted annual accountings for the funds they manage.

Pain and evidence (≤40 words; cite the pain dossier file): VA fiduciaries handling over $10k a year file annual accountings; SSA OIG audits whether payees "used and accounted for" benefits; daily money managers estimate about 4 hours a month of manual bookkeeping per client. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The fiduciary links each managed account. The agent pulls a year of transactions, categorizes them into the required accounting schema, drafts the annual report in the exact VA-10 or SSA format, and flags any transaction with no receipt or note attached, so the fiduciary fixes gaps before an audit finds them.

Why now (≤25 words): Cheap long-context inference (TC-25) reconciles a full year of statements into one drafted filing in a single pass.

Demo moment (≤20 words): A year of mock statements imports; a formatted annual accounting appears with one undocumented transaction flagged.

Business model (≤15 words): B2B SaaS, $39/month per managed client, sold to money-manager firms.

<!-- COMPLETE -->
