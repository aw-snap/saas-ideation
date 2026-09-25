# Prior-Art Hunt — s5-hunter-10 (quick mode)

### I-1039 Proxy Knowledge Handoff
Verdict: adjacent-exists
Closest products:
- Caring Village (https://caringvillage.com) — shared care hub with docs/tasks, but no narrated handoff capture or voice follow-up agent.
- NordPass emergency access (https://thecloudstandard.com/best-password-manager-elderly-parents/) — solves credential sharing only, not tacit-routine capture.
Note: Caregiver coordination apps cover shared documents and passwords, but none narrate-and-extract a departing proxy's tacit routine via voice agent follow-up.

### I-1505 The Scribe's Access Ends On Time
Verdict: adjacent-exists
Closest products:
- Lumos (https://www.lumos.com/topic/employee-offboarding-automation) — automated multi-app access revocation on contract end date, built for enterprise IT.
- 1Password SaaS Manager (https://1password.com/solutions/saas-onboarding-offboarding) — revokes across 350+ apps with audit log, enterprise-oriented.
Note: Enterprise SaaS offboarding tools do the same revoke-and-log mechanism, but target IT-managed orgs with SSO, not solo therapists/small law practices hiring VAs directly.

### I-2008 The Missing-Field Email Negotiator
Verdict: adjacent-exists
Closest products:
- Invoice Navigator (https://www.invoicenavigator.eu/errors) — 1,300+ rule error library with auto-fix guidance, but pre-submission validation only, no vendor-facing email drafting/negotiation loop.
Note: E-invoice error/validation tools are common, but none found that draft and send the vendor correction email and auto-resubmit on reply.

### I-2044 Reflex Secret Guard
Verdict: direct-competitor
Closest products:
- Checkmarx AI Secure Coding Assistant (https://checkmarx.com/learn/how-to-detect-and-remove-leaked-api-keys-tokens-and-passwords-from-code-repositories/) — real-time AI secrets detection inside VS Code/JetBrains before commit.
- SonarQube for IDE (https://www.sonarsource.com/solutions/secrets-detection/) — shift-left secret detection live in the editor.
Note: Live IDE-integrated real-time secret detection before commit already exists commercially; the "reflex-tier per-keystroke" speed claim is a mechanism nuance, not a new niche.

### I-2070 Medicare Appeal Evidence Guard
Verdict: direct-competitor
Closest products:
- Counterforce Health (https://en.wikipedia.org/wiki/Counterforce_Health) — AI drafts customized insurance denial appeal letters for patients/families.
- Claimable / Fight Health Insurance (found via related tools) — consumer AI appeal generators citing plan rules.
Note: Live consumer AI appeal-drafting tools already cite payer coverage rules; the chart-citation "unsupported claim" verification layer is a differentiator, not a different niche.

### I-2549 Medicare Advantage Appeal Autofiler
Verdict: direct-competitor
Closest products:
- Counterforce Health (https://en.wikipedia.org/wiki/Counterforce_Health) — same mechanism (denial letter in, appeal draft out) for patients/families.
- River AI Appeal Letter Generator (https://rivereditor.com/tools/appeal-letter) — free consumer appeal drafting for Medicare/Medicaid/commercial.
Note: Overlaps heavily with I-2070; live consumer tools already draft Medicare denial appeals from uploaded letters, though deadline-countdown UX is less common.

### I-3011 Interview Pattern Report
Verdict: adjacent-exists
Closest products:
- Huru (https://huru.ai/) — analyzes filler words/pacing from mock interview recordings.
- Yoodli (found via search) — NLP feedback on filler words, pacing, body language across recordings.
Note: Speech-pattern analysis of interview recordings is established, but no product found that cross-references pattern against actual rejection outcomes across real interviews.

### I-3048 Remote Family PC Copilot
Verdict: adjacent-exists
Closest products:
- HelpU.ai (https://apps.apple.com/mr/app/helpu-ai-remote-support/id6443670388) — AI-assisted remote support app, mechanism unclear on evidence-first diagnosis.
- TeamViewer / Microsoft Quick Assist (https://www.teamviewer.com/en-us/insights/remote-access-help-parents/) — remote control only, no autonomous AI diagnosis or evidence-before-fix flow.
Note: Remote-access tools for helping parents' PCs are common, but the evidence-shown-before-fix, family-approval, one-click-undo agent flow was not found as a live shipped product.

### I-3506 On-Device Elder-Fraud SAR Drafter
Verdict: adjacent-exists
Closest products:
- General AML/SAR narrative-generation AI tools (e.g. referenced in arXiv "Co-Investigator AI" and DataRobot GenAI SAR docs, https://docs.datarobot.com/en/docs/get-started/day0/genai-start/genai-welcome/sar-genai.html) — cloud-based SAR narrative generation exists for larger institutions.
Note: SAR-drafting AI exists but is cloud-hosted and enterprise-scale; no live on-device/offline product found for small credit unions specifically.

### I-3563 Guardian Accounting Discrepancy Sentinel
Verdict: adjacent-exists
Closest products:
- GuardianPad (https://guardianpad.com/) — guardianship case management with accounting/reporting for court deadlines.
- Tekoa Software (https://www.tekoasoftware.com/guardianship-software) — tracks income/expenses and generates compliance reports.
Note: Guardianship accounting software already produces court-format reports; OCR receipt ingestion plus automatic pre-filing discrepancy flagging was not confirmed in these products.

### I-4031 The Estate Closing Sweep
Verdict: direct-competitor
Closest products:
- Alix (referenced via Computer Weekly, https://www.computerweekly.com/news/366604883/Wells-Fargo-bank-turns-to-AI-to-help-families-settle-estates-after-a-death) — AI agent scans documents, pre-populates forms, liaises with financial institutions for estate settlement.
- Sunset (https://learn.hellosunset.com/best-automated-estate-settlement-2026) — agent closes/transfers accounts into estate account across institutions under limited POA.
Note: Live AI agents already walk multiple institutions to close accounts for an estate using uploaded documents and limited authority, matching this idea's mechanism and niche closely.

### I-4537 Silent-Failure Catcher for Locked Systems
Verdict: adjacent-exists
Closest products:
- Custodia (https://dev.to/custodiaadmin/visual-verification-for-ai-agents-how-to-confirm-web-actions-actually-worked-30n4) — visual/screenshot verification that AI agent web actions actually worked.
- Failproof AI (https://befailproof.ai/learn/detect-silent-agent-failures-in-production/) — detects silent agent failures by checking end state vs claimed completion.
Note: General agent-verification-by-screenshot tools exist, but none found specialized for locked vertical practice-management/dealer re-keying systems specifically.

### I-6003 Jev: context-aware AAC phrase suggestions
Verdict: adjacent-exists
Closest products:
- Converser (https://www.tandfonline.com/doi/full/10.1080/07434610701740448) — research system using conversation partner's speech recognition to predict contextually relevant AAC utterances; not confirmed as a currently live commercial product.
- SmartPredict (https://rerc-aac.psu.edu/development/d3-developing-a-smart-predictor-app-for-aac-conversation) — Penn State RERC-AAC research project for context-aware AAC prediction, not a shipped consumer product.
Note: The exact mechanism (listen to partner, rank saved phrases) has academic prior art (Converser, SmartPredict) but no confirmed live commercial product implementing it today.

```json
[
  {"id": "I-1039", "verdict": "adjacent-exists", "competitors": ["Caring Village (https://caringvillage.com)", "NordPass (https://thecloudstandard.com/best-password-manager-elderly-parents/)"], "note": "Caregiver apps cover shared docs/passwords but none narrate-and-extract a departing proxy's tacit routine via voice agent follow-up."},
  {"id": "I-1505", "verdict": "adjacent-exists", "competitors": ["Lumos (https://www.lumos.com/topic/employee-offboarding-automation)", "1Password SaaS Manager (https://1password.com/solutions/saas-onboarding-offboarding)"], "note": "Enterprise SaaS offboarding tools do the same revoke-and-log mechanism, but target IT-managed orgs with SSO, not solo therapists/VAs directly."},
  {"id": "I-2008", "verdict": "adjacent-exists", "competitors": ["Invoice Navigator (https://www.invoicenavigator.eu/errors)"], "note": "E-invoice error/validation libraries are common, but none found that draft and send the vendor correction email and auto-resubmit on reply."},
  {"id": "I-2044", "verdict": "direct-competitor", "competitors": ["Checkmarx AI Secure Coding Assistant (https://checkmarx.com/learn/how-to-detect-and-remove-leaked-api-keys-tokens-and-passwords-from-code-repositories/)", "SonarQube for IDE (https://www.sonarsource.com/solutions/secrets-detection/)"], "note": "Live IDE-integrated real-time secret detection before commit already exists; reflex-tier per-keystroke speed is a mechanism nuance, not a new niche."},
  {"id": "I-2070", "verdict": "direct-competitor", "competitors": ["Counterforce Health (https://en.wikipedia.org/wiki/Counterforce_Health)"], "note": "Live consumer AI appeal-drafting tools already cite payer coverage rules; chart-citation verification layer differentiates but doesn't create a new niche."},
  {"id": "I-2549", "verdict": "direct-competitor", "competitors": ["Counterforce Health (https://en.wikipedia.org/wiki/Counterforce_Health)", "River AI Appeal Letter Generator (https://rivereditor.com/tools/appeal-letter)"], "note": "Overlaps I-2070; live consumer tools already draft Medicare denial appeals from uploaded letters, though deadline-countdown UX is less common."},
  {"id": "I-3011", "verdict": "adjacent-exists", "competitors": ["Huru (https://huru.ai/)", "Yoodli"], "note": "Interview speech-pattern analysis is established, but no product cross-references pattern against actual rejection outcomes across sessions."},
  {"id": "I-3048", "verdict": "adjacent-exists", "competitors": ["HelpU.ai (https://apps.apple.com/mr/app/helpu-ai-remote-support/id6443670388)", "TeamViewer (https://www.teamviewer.com/en-us/insights/remote-access-help-parents/)"], "note": "Remote-access tools for parents' PCs are common, but the evidence-first, family-approval, one-click-undo AI agent flow wasn't found live."},
  {"id": "I-3506", "verdict": "adjacent-exists", "competitors": ["DataRobot GenAI SAR narrative tools (https://docs.datarobot.com/en/docs/get-started/day0/genai-start/genai-welcome/sar-genai.html)"], "note": "SAR-drafting AI exists but is cloud-hosted/enterprise-scale; no live on-device product found for small credit unions."},
  {"id": "I-3563", "verdict": "adjacent-exists", "competitors": ["GuardianPad (https://guardianpad.com/)", "Tekoa Software (https://www.tekoasoftware.com/guardianship-software)"], "note": "Guardianship accounting software already produces court-format reports; automatic OCR receipt ingestion plus pre-filing discrepancy flagging unconfirmed."},
  {"id": "I-4031", "verdict": "direct-competitor", "competitors": ["Alix (https://www.computerweekly.com/news/366604883/Wells-Fargo-bank-turns-to-AI-to-help-families-settle-estates-after-a-death)", "Sunset (https://learn.hellosunset.com/best-automated-estate-settlement-2026)"], "note": "Live AI agents already walk multiple institutions to close estate accounts using uploaded docs and limited authority, matching mechanism and niche."},
  {"id": "I-4537", "verdict": "adjacent-exists", "competitors": ["Custodia (https://dev.to/custodiaadmin/visual-verification-for-ai-agents-how-to-confirm-web-actions-actually-worked-30n4)", "Failproof AI (https://befailproof.ai/learn/detect-silent-agent-failures-in-production/)"], "note": "General agent visual-verification tools exist, but none specialized for locked vertical practice-management/dealer re-keying systems."},
  {"id": "I-6003", "verdict": "adjacent-exists", "competitors": ["Converser (https://www.tandfonline.com/doi/full/10.1080/07434610701740448)", "SmartPredict (https://rerc-aac.psu.edu/development/d3-developing-a-smart-predictor-app-for-aac-conversation)"], "note": "Exact mechanism has academic prior art (Converser, SmartPredict) but no confirmed live commercial product implementing it today."}
]
```
<!-- COMPLETE -->
