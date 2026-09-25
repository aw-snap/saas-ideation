### I-1516 Console-Checked Cyber Insurance Answers

Verdict: adjacent-exists

Closest products:
- Anchor AI (https://www.getanchor.ai/articles/cyber-insurance-application-questionnaire-automation-2026) — maps carrier questions to evidence and source-links every control claim, but pulls from connected security-tool integrations, not a live browser agent logging into the owner's own admin console.
- Conveyor Agent (https://www.conveyor.com/products/security-questionnaire-automation) — completes questionnaires from a knowledge base with confidence scoring; built for security teams answering vendor/insurer questionnaires, not SMB owners with no IT staff.
- CyberQP Panthera (https://www.cyberqp.ai/) — scans AD/Entra/M365 for privilege gaps to satisfy cyber-insurance questionnaires, but it's an MSP tool, not an owner-facing agent that logs in as the user and screenshots evidence.

Note: Several tools auto-answer cyber-insurance questionnaires from connected evidence (Anchor AI, Conveyor, Vanta), but all target security/compliance teams via API integrations. None found use an agentic browser session logging in as the owner to screenshot live console state for SMBs with no IT staff.

### I-2078 Standing Order Video Brief

Verdict: adjacent-exists

Closest products:
- Ropes & Gray AI Court Order Tracker (https://www.ropesgray.com/en/news-and-events/news/2026/05/introducing-ropes-grays-enhanced-ai-court-order-tracker) — searchable database of 550+ GenAI standing orders/local rules by judge and jurisdiction, but delivers text lookup, not a per-filing personalized video briefing.
- RAILS AI Orders resource (https://rails.legal/resources/resource-ai-orders/) — aggregates court GenAI rules/guidelines for lookup, same text-database mechanism.
- Cite Sentinel (referenced via https://abovethelaw.com/2026/03/new-tool-catches-ai-hallucinations-in-legal-briefs/) — scans briefs to flag fabricated or non-existent citations before filing, covering the citation-check half of the idea but with no per-judge video narration or standing-order matching.

Note: Standing-order trackers (Ropes & Gray, RAILS, Law360) and citation-hallucination checkers (Cite Sentinel) both exist and cover separate halves of the pain, but no product found combines them into a per-filing personalized video briefing.

### I-3048 Remote Family PC Copilot

Verdict: adjacent-exists

Closest products:
- PC Doctor - AI PC Support (https://apps.apple.com/us/app/pc-doctor-ai-pc-support/id6759544983) — plain-language chat diagnoses PC issues and gives step-by-step fixes; runs on the user's own device, no remote family approval or restore-point/undo flow found.
- OmniMend (https://omnimend.com/) — agentic diagnostic system that runs read-only checks, explains findings, and asks for user approval before any repair; same evidence-then-approve mechanism but single-user/local only, no remote family mode.
- Microsoft Quick Assist / TeamViewer (https://support.microsoft.com/en-us/windows/apps/solve-pc-problems-remotely-using-quick-assist) — enable a remote family member to view/control a parent's PC, but provide no AI diagnosis or evidence-based fix proposal themselves.

Note: The plain-language-complaint-to-evidence-to-approval mechanism already exists in single-user apps (PC Doctor, OmniMend); remote screen-share tools solve the "family member controls parent's PC" part separately. No product found unifies both with restore-point undo.

### I-4501 Screen Agent Drafts Session Notes

Verdict: adjacent-exists

Closest products:
- Freed AI (https://www.getfreed.ai/) — ambient scribe that pushes notes into browser-based EHRs with one click; cloud-based and targets EHRs with browser access, not legacy desktop apps with no API.
- Upheal (https://www.upheal.io/ai-clinical-notes/ai-progress-notes/ai-soap-notes) — browser-extension "fill notes into your EHR" one-click flow; same browser-only limitation, not a GUI-clicking desktop agent, and not fully local.
- offline-medical-scribe (GitHub, https://github.com/harishkotra/offline-medical-scribe) — fully local Whisper+Llama pipeline drafting SOAP notes offline, but outputs a Markdown file for manual copy-paste, not a GUI agent that types into the EHR itself.

Note: Cloud scribes (Freed, Upheal, Nudge AI) auto-push notes only into browser-based EHRs; a fully local GUI-agent that types directly into a legacy desktop EHR with no API and no cloud call was not found.

### I-6002 Jev AI live call copilot

Verdict: adjacent-exists

Closest products:
- Balto (https://www.mightycall.com/blog/support-call-center-agents-with-balto-the-ai-supervisor-copilot/) — live transcript analysis giving agents real-time playbook prompts and sentiment alerts, with supervisors able to listen in and send live chat coaching; no fraud/scam flagging or discreet phrase-triggered escalation found.
- Krisp (https://krisp.ai/contact-center/) — real-time voice security with deepfake detection and "real-time social engineering alerts" during live calls, closer to the scam-flagging half but not built around playbook Q&A coaching or a covert help-phrase trigger.
- Parloa (https://www.parloa.com/knowledge-hub/ai-contact-center-solutions-vs-traditional-fraud-prevention-systems/) — orchestrates real-time fraud/risk checks during live interactions and hands rich context to a human agent on escalation, similar risk-flagging mechanism but positioned as an AI-agent platform, not a live human-agent copilot.

Note: Real-time agent-assist copilots with live coaching and supervisor escalation (Balto) and real-time fraud/scam voice alerts (Krisp, Parloa) both exist separately; no single live product found that combines playbook coaching, scam-verification prompts, and a discreet phrase-triggered supervisor alert in one tool.

```json
[
  {"id": "I-1516", "verdict": "adjacent-exists", "competitors": ["Anchor AI (https://www.getanchor.ai/articles/cyber-insurance-application-questionnaire-automation-2026)", "Conveyor Agent (https://www.conveyor.com/products/security-questionnaire-automation)", "CyberQP Panthera (https://www.cyberqp.ai/)"], "note": "Cyber-insurance questionnaire auto-answering tools exist (Anchor AI, Conveyor, Vanta) but pull from connected integrations for security teams, not a browser agent logging in as an SMB owner to screenshot live console evidence."},
  {"id": "I-2078", "verdict": "adjacent-exists", "competitors": ["Ropes & Gray AI Court Order Tracker (https://www.ropesgray.com/en/news-and-events/news/2026/05/introducing-ropes-grays-enhanced-ai-court-order-tracker)", "RAILS AI Orders (https://rails.legal/resources/resource-ai-orders/)", "Cite Sentinel (via https://abovethelaw.com/2026/03/new-tool-catches-ai-hallucinations-in-legal-briefs/)"], "note": "Per-judge standing-order trackers and citation-hallucination checkers both exist separately, but no product combines them into a per-filing personalized video briefing."},
  {"id": "I-3048", "verdict": "adjacent-exists", "competitors": ["PC Doctor - AI PC Support (https://apps.apple.com/us/app/pc-doctor-ai-pc-support/id6759544983)", "OmniMend (https://omnimend.com/)", "Microsoft Quick Assist (https://support.microsoft.com/en-us/windows/apps/solve-pc-problems-remotely-using-quick-assist)"], "note": "Plain-language-to-evidence-to-approval diagnosis already exists as single-user local apps (PC Doctor, OmniMend); remote screen-share tools solve control separately. No unified remote-family-approval-plus-undo product found."},
  {"id": "I-4501", "verdict": "adjacent-exists", "competitors": ["Freed AI (https://www.getfreed.ai/)", "Upheal (https://www.upheal.io/ai-clinical-notes/ai-progress-notes/ai-soap-notes)", "offline-medical-scribe (https://github.com/harishkotra/offline-medical-scribe)"], "note": "Cloud scribes push notes only into browser-based EHRs via extensions; a fully local GUI agent typing directly into a legacy no-API desktop EHR was not found."},
  {"id": "I-6002", "verdict": "adjacent-exists", "competitors": ["Balto (https://www.mightycall.com/blog/support-call-center-agents-with-balto-the-ai-supervisor-copilot/)", "Krisp (https://krisp.ai/contact-center/)", "Parloa (https://www.parloa.com/knowledge-hub/ai-contact-center-solutions-vs-traditional-fraud-prevention-systems/)"], "note": "Live playbook-coaching copilots (Balto) and real-time scam/fraud voice alerts (Krisp, Parloa) exist separately; no single tool combines both plus a discreet phrase-triggered supervisor alert."}
]
```
<!-- COMPLETE -->
