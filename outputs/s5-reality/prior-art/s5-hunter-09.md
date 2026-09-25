# Prior-Art Hunt — s5-hunter-09 (quick mode)

### I-1027 Appeal Packet Builder
Verdict: adjacent-exists
Competitors:
- Claimable (https://claimable.com) — consumer-facing denial appeal generator, $50/case, not a B2B AR/denial-specialist packet-filler tied to payer form fields.
- Counterforce Health (https://www.counterforcehealth.org/) — free consumer appeal letter generator, not aimed at practice AR staff or payer-specific packet assembly.
- AppealGenius (https://www.appealgenius.app/) — provider-facing, payer-specific appeal letters for behavioral health, closest in niche and mechanism.
Note: Multiple AI appeal-letter tools exist for patients and providers; AppealGenius targets practices like this idea, differs mainly by specialty and packet-vs-letter output.

### I-1503 The WISP That Writes Itself
Verdict: adjacent-exists
Competitors:
- WISP Builder (https://wispbuilder.com/) — questionnaire-driven WISP generator/tracker, not an agent that logs into consoles to verify actual settings.
- Rightworks free WISP template (https://www.rightworks.com/free-written-information-security-plan/) — static template, no automation or verification.
Note: Existing tools generate WISPs from questionnaires or templates; none found that log into the preparer's own admin panels to verify real control state, the idea's core mechanism.

### I-2003 Mandate-Match Clearinghouse
Verdict: adjacent-exists
Competitors:
- Google AP2 / Agent Payments Protocol (https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) — defines signed cart mandates and merchant-side verification, but as a protocol/spec, not a neutral third-party re-check service.
Note: AP2/ACP already push mandate verification onto merchants at checkout; a neutral third-party clearinghouse re-visiting the live cart independently was not found as a live product.

### I-2043 Client Quote Estimator for Dev Shops
Verdict: direct-competitor
Competitors:
- devtimate (https://devtimate.com/) — AI software project estimation tool with scope breakdown, built for dev shops, same niche and mechanism.
- Apropo.io (https://apropo.io/blog/best-ai-software-estimation-tools-compared/) — comparison roundup naming multiple similar AI estimation tools for agencies.
Note: devtimate already offers AI-driven, agency-facing project/quote estimation; differs mainly in whether it reads the client's actual existing repo per-ticket.

### I-2069 Fiduciary Accounting Fact-Checker
Verdict: adjacent-exists
Competitors:
- AccuFund Representative Payee Software (https://accufund.com/representative-payee) — automates fiduciary/payee accounting and bank reconciliation, but not framed as an AI second-pass verifier catching unsupported line items.
Note: Payee/fiduciary accounting software exists (AccuFund); an AI pass that cross-checks each drafted line against source receipts/statements before filing was not found as a distinct live product.

### I-2547 Multi-Institution Proxy Agent
Verdict: adjacent-exists
Competitors:
- AloneAssist (https://aloneassist.com/blog/best-apps-for-monitoring-elderly-parents-2026) — family dashboard with weekly summaries, but via check-ins/integrations, not a browser agent logging into each portal as proxy.
- Sensi AI (https://www.sensi.ai/) — senior-care "Care Copilot," focused on health/behavior monitoring in the home, not financial/Medicaid/Medicare portal logins.
Note: Elder-monitoring dashboards exist but rely on check-ins or sensors; no live product found that logs into banking/Medicaid/insurance portals via browser agent to compile a weekly digest.

### I-3010 Walkthrough Recap
Verdict: adjacent-exists
Competitors:
- AutoReel (https://www.autoreelapp.com/) — turns listing photos into AI walkthrough videos, but generated from photos pre-showing, not a live-captured, buyer-personalized recap of an actual showing.
- Videotour.ai (https://videotour.ai/real-estate-video-tour) — similar photo-to-video tool, same distinction.
Note: AI real-estate video tools exist but generate generic marketing videos from photos beforehand; none found that record a live showing and personalize the recap to one buyer's reactions.

### I-3047 AI Live Interview Coach
Verdict: direct-competitor
Competitors:
- Beyz AI (https://beyz.ai/) — real-time interview assistant giving live nudges during actual interviews, same mechanism.
- LockedIn AI Voice Coach (https://www.lockedinai.com/) — real-time tone/clarity coaching in live interviews, multilingual, close overlap.
- Poised (https://www.poised.com/) — real-time speech analysis (pace, fillers) live during meetings/interviews.
Note: Several tools already give live delivery nudges (pace, fillers) during real interviews; differentiation is the non-native-speaker tuning and post-call replay-timeline coaching.

### I-3096 Session Truth Ledger
Verdict: adjacent-exists
Competitors:
- General AI-scribe hallucination-detection research (CHECK, ReXTrust) (https://arxiv.org/pdf/2506.11129) — hallucination detection frameworks exist for clinical notes generally, not therapy-specific or live dual-agent ledgering.
Note: Clinical AI-scribe hallucination is a known, researched problem with detection frameworks; no live consumer product found running a second live-audio agent to fact-check a scribe in real time during therapy.

### I-3555 No-API Portal MCP Adapter
Verdict: adjacent-exists
Competitors:
- Skyvern / computer-use browser-automation MCP tools (https://supergood.ai/blog/mcp-for-software-without-a-public-api) — vision-based computer-use agents already bridge screen-only apps to MCP tool calls, general-purpose, not vertical-specific (dental/payer portals) or packaged as a per-connector product.
Note: The browser-automation-to-MCP-bridge pattern is an established, named approach (Skyvern, Playwright MCP); no vertical-specific packaged product for dental/payer portals found live.

### I-4030 Fiduciary Accounting, Auto-Filed
Verdict: adjacent-exists
Competitors:
- AccuFund Representative Payee Software (https://accufund.com/representative-payee) — same closest match as I-2069, automates payee ledgers and reconciliation but not via a monthly browser-agent revisit of live bank sessions.
Note: Same competitive landscape as I-2069; established payee-accounting software exists, but a monthly agentic browser-session ledger builder was not found live.

### I-4529 Identity That Dies With the Employee
Verdict: adjacent-exists
Competitors:
- Okta Agent SSO / Cross App Access (referenced in idea's own "why now") — gives agents governable identities but is an identity platform, not itself the automated offboarding-triggers-suspension product being described.
- CloudEagle.ai offboarding coverage (https://www.cloudeagle.ai/blogs/offboarding-employees-ai-agents-access-revocation) — discusses the exact problem (offboarding doesn't stop AI agents) and vendors building toward it, general NHI governance vendor, not proven live for this specific consumer flow.
Note: Non-human-identity governance is an active, named 2026 problem space with platforms (Okta, Saviynt) addressing pieces; a live product doing auto-suspend-on-offboarding specifically for SMB-built automations was not confirmed live.

### I-6002 Jev AI live call copilot
Verdict: adjacent-exists
Competitors:
- Confi.io (https://www.tryconfi.com/) — real-time AI sales call copilot with live prompts, same live-call mechanism, sales-only, no fraud/scam-flagging or supervisor-escalation phrase.
- Aircall Real-time AI Assistants (https://aircall.io/blog/sales-coaching-ai-tools/) — live keyword-triggered prompts during calls, sales/support focus, no scam-verification angle.
- Bitdefender Scam Copilot (https://www.bitdefender.com/en-us/blog/hotforsecurity/scam-copilot-chatbot-your-ai-powered-ally-against-the-growing-threat-of-online-scams) — AI scam detection chatbot, but consumer-facing and not live-call-embedded with staff coaching.
Note: Live sales-coaching copilots are an established category; none found combining live scam-flagging, policy coaching, and a discreet supervisor-escalation phrase in one tool.

```json
[
  {"id": "I-1027", "verdict": "adjacent-exists", "competitors": ["Claimable (https://claimable.com)", "Counterforce Health (https://www.counterforcehealth.org/)", "AppealGenius (https://www.appealgenius.app/)"], "note": "Multiple AI appeal-letter tools exist for patients and providers; AppealGenius targets practices like this idea, differs mainly by specialty and packet-vs-letter output."},
  {"id": "I-1503", "verdict": "adjacent-exists", "competitors": ["WISP Builder (https://wispbuilder.com/)", "Rightworks WISP template (https://www.rightworks.com/free-written-information-security-plan/)"], "note": "Existing tools generate WISPs from questionnaires or templates; none found that log into the preparer's own admin panels to verify real control state, the idea's core mechanism."},
  {"id": "I-2003", "verdict": "adjacent-exists", "competitors": ["Google AP2 / Agent Payments Protocol (https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)"], "note": "AP2/ACP already push mandate verification onto merchants at checkout; a neutral third-party clearinghouse re-visiting the live cart independently was not found as a live product."},
  {"id": "I-2043", "verdict": "direct-competitor", "competitors": ["devtimate (https://devtimate.com/)", "Apropo.io roundup (https://apropo.io/blog/best-ai-software-estimation-tools-compared/)"], "note": "devtimate already offers AI-driven, agency-facing project/quote estimation; differs mainly in whether it reads the client's actual existing repo per-ticket."},
  {"id": "I-2069", "verdict": "adjacent-exists", "competitors": ["AccuFund Representative Payee Software (https://accufund.com/representative-payee)"], "note": "Payee/fiduciary accounting software exists (AccuFund); an AI second pass cross-checking each drafted line against source receipts before filing was not found as a distinct live product."},
  {"id": "I-2547", "verdict": "adjacent-exists", "competitors": ["AloneAssist (https://aloneassist.com/blog/best-apps-for-monitoring-elderly-parents-2026)", "Sensi AI (https://www.sensi.ai/)"], "note": "Elder-monitoring dashboards exist but rely on check-ins or sensors; no live product found that logs into banking/Medicaid/insurance portals via browser agent to compile a weekly digest."},
  {"id": "I-3010", "verdict": "adjacent-exists", "competitors": ["AutoReel (https://www.autoreelapp.com/)", "Videotour.ai (https://videotour.ai/real-estate-video-tour)"], "note": "AI real-estate video tools exist but generate generic marketing videos from photos beforehand; none found that record a live showing and personalize the recap to one buyer's reactions."},
  {"id": "I-3047", "verdict": "direct-competitor", "competitors": ["Beyz AI (https://beyz.ai/)", "LockedIn AI (https://www.lockedinai.com/)", "Poised (https://www.poised.com/)"], "note": "Several tools already give live delivery nudges (pace, fillers) during real interviews; differentiation is the non-native-speaker tuning and post-call replay-timeline coaching."},
  {"id": "I-3096", "verdict": "adjacent-exists", "competitors": ["CHECK hallucination-detection framework (https://arxiv.org/pdf/2506.11129)"], "note": "Clinical AI-scribe hallucination is a known, researched problem with detection frameworks; no live consumer product found running a second live-audio agent to fact-check a scribe in real time during therapy."},
  {"id": "I-3555", "verdict": "adjacent-exists", "competitors": ["Skyvern / computer-use MCP bridges (https://supergood.ai/blog/mcp-for-software-without-a-public-api)"], "note": "The browser-automation-to-MCP-bridge pattern is an established, named approach (Skyvern, Playwright MCP); no vertical-specific packaged product for dental/payer portals found live."},
  {"id": "I-4030", "verdict": "adjacent-exists", "competitors": ["AccuFund Representative Payee Software (https://accufund.com/representative-payee)"], "note": "Same competitive landscape as I-2069; established payee-accounting software exists, but a monthly agentic browser-session ledger builder was not found live."},
  {"id": "I-4529", "verdict": "adjacent-exists", "competitors": ["Okta Agent SSO / Cross App Access", "CloudEagle.ai offboarding coverage (https://www.cloudeagle.ai/blogs/offboarding-employees-ai-agents-access-revocation)"], "note": "Non-human-identity governance is an active, named 2026 problem space with platforms addressing pieces; a live product doing auto-suspend-on-offboarding specifically for SMB-built automations was not confirmed live."},
  {"id": "I-6002", "verdict": "adjacent-exists", "competitors": ["Confi.io (https://www.tryconfi.com/)", "Aircall AI Assistants (https://aircall.io/blog/sales-coaching-ai-tools/)", "Bitdefender Scam Copilot (https://www.bitdefender.com/en-us/blog/hotforsecurity/scam-copilot-chatbot-your-ai-powered-ally-against-the-growing-threat-of-online-scams)"], "note": "Live sales-coaching copilots are an established category; none found combining live scam-flagging, policy coaching, and a discreet supervisor-escalation phrase in one tool."}
]
```
<!-- COMPLETE -->
