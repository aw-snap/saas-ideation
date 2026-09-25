# Prior-Art Hunt — s8-hunter-03 (deep mode)

### I-1022 Rejection-Proof Renewal Filer

Searches covered: general web (rejection-checker apps, procedural-denial prevention), Product Hunt, YC directory (Medicaid startups), app-name lookups (HeyMedicaid), Medicare Advantage appeal-letter tooling.

No live consumer product was found that checks a filled Medicaid renewal or Medicare appeal packet against a rules library of rejection triggers (missing signature, mismatched SSN, wrong form version) before a family member submits it on a relative's behalf. HeyMedicaid (apps, heymedicaid.med) is AI-powered but focuses on completing and pre-filling the *initial* application and sending 90-day renewal reminders — it does not audit a filled packet for rejection triggers pre-submission. Fortuna Health (YC-backed, "TurboTax for Medicaid") does eligibility checks, enrollment and renewal, consumer-facing, but its public materials don't describe a rejection-pattern audit step either. Enterprise/state-side tooling (CMS/USDS ex-parte automation, Medicare Advantage appeals-and-grievances software like Mirra HC) solves an adjacent problem for agencies/plans, not for a family proxy. No Product Hunt or app-store listing matched the specific "pre-submission rejection check" mechanism.

### I-2043 Client Quote Estimator for Dev Shops

Searches covered: general web (AI project-estimation tools), Product Hunt (AI ticket estimation), GitHub (estimator tools/skills), specific tool deep-dives (devtimate, jira-ticket-estimator, Scope/within-scope.com, agent-estimate, GitHours).

Devtimate (devtimate.com) is the closest match on buyer and output (agencies, client-ready branded PDF quotes with hours/roles/risk notes) but its mechanism is document-based: it parses an uploaded RFP/brief/feature list, not the actual repository, and explicitly says it is "not a delivery or code tool." kennyth01/jira-ticket-estimator (GitHub, Claude Code skill) can optionally scan a codebase for scope, but it targets internal engineering teams sizing their own sprint tickets, not client-billing quotes, and has no client-facing quote output. Scope (within-scope.com) analyzes a codebase to generate implementation tickets with files/dependencies via MCP, but again for developers, not for producing a client price quote. GitHours converts git commit history into billable-hour PDF reports for clients — different mechanism (retrospective billing, not prospective quoting from an unbuilt feature request).

### I-2550 Medicaid Renewal Mail Guardian

Searches covered: general web (mail-scanning OCR for renewal deadlines), Product Hunt (caregiver mail scanner), YC directory (elder-care/Medicaid mail startups), app-store virtual-mailbox apps (Earth Class Mail, PostScan Mail, Anytime Mailbox, Traveling Mailbox).

Virtual-mailbox services (PostScan Mail, Earth Class Mail, Anytime Mailbox, Traveling Mailbox) scan physical mail with OCR and let users view/forward it, all available on iOS/Android app stores — same broad mechanism family (photograph/scan mail, extract text) but a different niche and workflow: mail must be redirected to their facility's address, they don't identify Medicaid renewal packets specifically, extract the 30-day deadline and required-document list, or pre-fill a family's stored info into a response. No product found that reads a parent's mail at the parent's own address (via photo/forward) and turns it into a structured "due in N days, needs X" alert for an adult child, as this idea does.

### I-3537 Supply-Run Spend Guardrail

Searches covered: general web (x402 session spend caps), GitHub (agent payment/session-cap tools), Product Hunt/general (AgentPay), a live-status check on spendcaps.com, PyPI (agentpay-x402).

AgentPay (github.com/romudille-bit/agentpay, agentpay.tools, PyPI package agentpay-x402) is a live, actively developed project (470+ commits) whose `agentpay-session` feature does exactly what this idea proposes: opens a session with a hard max-spend cap enforced at the payment layer across multiple x402 tool/merchant calls, with a running ledger and verifiable receipts, hard-stopping the agent once the cap is hit. This matches the idea's mechanism (session-wide cap vs. per-call limits) closely; the main difference is buyer framing — AgentPay targets agent/tool developers broadly rather than being packaged for solo makers restocking physical supplies specifically. spendcaps.com describes the identical concept but is a parked/for-sale domain, not a live product.

### I-5101 Linked Call-and-Statement Alert

Searches covered: general web (on-device scam-call detection + statement linkage), elder-fraud monitoring services (EverSafe, Carefull, Family Sentinel), Product Hunt/general (elder fraud protection apps), call-transcription app-store apps (Hiya, Google Phone, Truecaller, Malwarebytes Scam Guard).

No product found that combines on-device call-scam transcription with bank-statement new-payee detection into one linked, cross-signal alert. The closest analogs split the two halves: (1) EverSafe and Carefull (getcarefull.com) monitor linked bank/credit/brokerage accounts for anomalies (unusual withdrawals, new payees, dormant-account use) and alert family/caregivers, cloud-based, but do not transcribe or analyze phone calls; (2) Google's Android Scam Detection and apps like Hiya use on-device AI to flag a scam call in real time (Hiya explicitly keeps transcripts on-device), but neither links a flagged call to same-day banking activity. Truecaller's Family Protection groups call-scam alerts to trusted family but likewise has no statement-linkage. The idea's specific mechanism — one on-device model correlating a scam call with a same-day new payee/transfer into a single high-confidence alert — was not found as a shipped product.

```json
[
  {"id": "I-1022", "verdict": "adjacent-exists", "competitors": ["HeyMedicaid (heymedicaid.med)", "Fortuna Health (ycombinator.com/companies/fortuna-health)"], "note": "Both help with Medicaid enrollment/renewal (HeyMedicaid pre-fills applications and reminds 90 days early; Fortuna does eligibility/enrollment). Neither audits a filled packet against rejection-trigger rules before a proxy submits it."},
  {"id": "I-2043", "verdict": "adjacent-exists", "competitors": ["Devtimate (devtimate.com)", "jira-ticket-estimator (github.com/kennyth01/jira-ticket-estimator)", "Scope (within-scope.com)"], "note": "Devtimate produces client-ready quotes but from uploaded briefs, not a real repo scan. The repo-scanning tools (jira-ticket-estimator, Scope) target internal engineering estimation, not client billing quotes."},
  {"id": "I-2550", "verdict": "adjacent-exists", "competitors": ["PostScan Mail (apps.apple.com/us/app/postscan-mail/id1276114355)", "Earth Class Mail: Mailbox Scan (apps.apple.com/us/app/earth-class-mail-mailbox-scan/id1484077329)", "Anytime Mailbox (anytimemailbox.com)"], "note": "Virtual mailboxes OCR-scan mail on app stores today, but require redirecting mail to their facility and don't identify Medicaid renewal packets, extract deadlines, or pre-fill a family's response."},
  {"id": "I-3537", "verdict": "direct-competitor", "competitors": ["AgentPay (github.com/romudille-bit/agentpay, agentpay.tools)"], "note": "AgentPay's agentpay-session feature is live and enforces a hard session-wide spend cap across multiple x402 merchant calls with receipts/ledger, the same mechanism this idea proposes, though framed for agent developers generally rather than solo-maker supply runs."},
  {"id": "I-5101", "verdict": "adjacent-exists", "competitors": ["EverSafe (eversafe.com)", "Carefull (getcarefull.com)", "Hiya AI Phone & Call Assistant (apps.apple.com/us/app/hiya-ai-phone-call-assistant/id6474703665)"], "note": "EverSafe/Carefull monitor bank transactions for anomalies; Hiya/Android Scam Detection flag scam calls on-device. None link a flagged call to a same-day new payee into one combined alert."}
]
```
<!-- COMPLETE -->
