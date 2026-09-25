### I-1001 Independent Completion Witness

Objection: A second-agent "don't trust the self-report" verifier is already live in three different forms (AEVS, agent-completion-verifier, AgentLiar); the claims/portal-fleet niche and signed per-verification billing are the only unclaimed slice, and a primary-agent vendor could add a first-party verification mode and cut this out entirely.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-01.md — "mechanism overlap is high, niche/packaging differs" across AEVS, agent-completion-verifier, AgentLiar.

Fix: Ship as a neutral, cross-vendor auditor (not tied to one agent stack) and sell the signed verdict to payers/insurers who need independence from the agent operator.

Severity: serious

### I-1050 Built on Jev

Objection: Open-source reflex layers (Reflex-S1, System1-mcp) already sit directly on/beside Jev doing exactly "fast judge every event, escalate to System 2," and the whole premise rests on Jev's speed/cost claims which the idea's own card flags as unverified — a free clone plus an unverified dependency.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-05.md — Reflex-S1 is "an explicitly-named open alternative to Jev"; System1-mcp exposes the same fast_judge/fast_verify tools; idea card marks Jev's speed claim "[unverified]."

Fix: Pick one concrete product built on the reflex layer (not a platform) and verify Jev's real latency/cost before committing further.

Severity: fatal

### I-1516 Console-Checked Cyber Insurance Answers

Objection: Existing questionnaire-automation tools (Anchor AI, Conveyor, CyberQP) already cover the evidence-sourcing mechanism for security teams; the SMB-owner/browser-login differentiation is real but thin, and letting an agent log into a client's live admin consoles and auto-answer insurance questions creates real liability if it misreads a control and the policy is later voided.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-09.md — incumbents "target security/compliance teams via API integrations... None found use an agentic browser session logging in as the owner."

Fix: Keep the owner in the loop as final signer on every answer, and insure/cap liability for misread controls contractually.

Severity: serious

### I-1564 Draft From Case Files, Offline

Objection: Local/offline legal LLM tools (local-legal-ai, Elephas via Ollama) already solve the privacy-and-offline half; the remaining differentiator (case-folder ingestion, firm-template matching) is a feature gap incumbents can close quickly, and an open-weight model drafting motions with zero cross-check risks malpractice-grade hallucination with nobody watching.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-01.md — local-legal-ai and Elephas are "built for document Q&A... not for drafting motions/letters matching firm templates" (gap, not moat).

Fix: Ship a mandatory citation/fact-check pass before any draft is shown, and lead marketing with template-matching, the one gap incumbents haven't filled.

Severity: serious

### I-2052 Bounty Passport

Objection: HackerOne and Bugcrowd already gate low-quality/fake reports via free reputation scoring; asking agents (or their operators) to post a refundable cash bond on top of an existing free reputation system is extra friction that the incumbent platforms have no reason to add themselves, and researchers may simply avoid programs that require staking.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-05.md — "reputation-based gating are already live... no found product uses a refundable per-submission x402 stake."

Fix: Launch on programs with no existing reputation history (new/small bounty programs) where staking is the only trust signal available, not as a HackerOne add-on.

Severity: serious

### I-2078 Standing Order Video Brief

Objection: Both halves already exist separately (Ropes & Gray/RAILS track standing orders as text, Cite Sentinel checks citations); a video-narration wrapper over two existing lookups is a thin, easily-copied UX layer, and litigators reading a rule may prefer a fast checklist to watching a 30-second video before every filing.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-09.md — "no product combines them into a per-filing personalized video briefing," but the two underlying capabilities are both live.

Fix: Validate that litigators actually prefer video over a one-line pass/fail summary before building the video-generation pipeline.

Severity: manageable

### I-2536 AI PC optimiser and fixer

Objection: Microsoft is already shipping a free, in-OS, agentic "Fix it" button on Windows 11 Copilot+ PCs that reads device state and proposes/applies fixes in plain English — the exact niche and mechanism, bundled at zero marginal cost, which any paid third-party competitor must undercut or lose to by default.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-01.md — verdict "direct-competitor"; Microsoft's Fix it button matches "niche... and mechanism... closely, though it is free and bundled."

Fix: Target non-Copilot+ PCs and older Windows versions Microsoft's feature won't reach, or pivot to the family remote-approval angle Microsoft's OS feature lacks.

Severity: fatal

### I-3026 Redaction Relay

Objection: RedactLocal already ships the exact "strip identifying facts locally, send to cloud model, reinsert real values" loop for the same lawyer/CPA buyer, live today; the idea offers no described feature RedactLocal doesn't already have.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-05.md — verdict "direct-competitor"; "RedactLocal... already ships the exact... loop for the same lawyer/CPA buyer that I-3026 targets."

Fix: Find and ship a concrete gap RedactLocal lacks (e.g., tax-specific K-1/return field types, IRC §7216-specific compliance logging) or abandon.

Severity: fatal

### I-3048 Remote Family PC Copilot

Objection: The evidence-then-approve diagnosis flow already exists in single-user apps (PC Doctor, OmniMend) and remote control already exists via Quick Assist/TeamViewer; this idea only adds gluing the two together plus undo, which is a modest integration, not a hard-to-copy mechanism, and also collides with Microsoft's free in-OS Fix it agent.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-09.md — "Plain-language-to-evidence-to-approval diagnosis already exists as single-user local apps... remote screen-share tools solve control separately."

Fix: Lead with the remote-family-approval workflow specifically (the one unfilled gap) rather than re-building diagnosis logic incumbents already have.

Severity: serious

### I-3095 On-Prem Exploit Bench

Objection: The sandbox-reproduce-and-verdict mechanism is already well established (Konvu, Elastic's internal pipeline, open-source CVE-Genie/ExploitBench); the sole claimed differentiator, confirmed air-gapped on-prem deployment, is unconfirmed for the closest commercial competitor (Konvu) and could be added by them as a deployment option, erasing the moat.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-01.md — "mechanism... well established... no found product is confirmed as a packaged, air-gapped, on-prem-only offering."

Fix: Confirm directly whether Konvu can/will offer on-prem deployment before investing; if yes, this idea has no defensible gap.

Severity: serious

### I-3095 (n/a duplicate check)

<!-- no duplicate entry -->

### I-3555 No-API Portal MCP Adapter

Objection: Anchor Browser already sells this exact mechanism today, computer-use login to a locked portal exposed as callable MCP tools, and explicitly names Availity-style payer portals as a target use case, which is the flagship demo this idea proposes.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-05.md — verdict "direct-competitor"; Anchor Browser "already sells the core mechanism... and names Availity-style payer portals as a target use case."

Fix: Narrow to a vertical Anchor/Browserbase haven't packaged (e.g., Dentrix/Yardi desktop apps specifically, sold per-connector to vendors) instead of general portal-to-MCP.

Severity: fatal

### I-4501 Screen Agent Drafts Session Notes

Objection: Cloud scribes (Freed, Upheal) already auto-push notes into browser-based EHRs, leaving only legacy desktop EHRs as the gap; but GUI-grounding accuracy for clicking exact clinical-record fields is unproven at production reliability, and a misplaced click into the wrong patient field is a real safety/liability incident, not just a UX bug.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-09.md — "a fully local GUI-agent that types directly into a legacy desktop EHR with no API and no cloud call was not found" (real gap, but untested mechanism).

Fix: Require clinician field-by-field confirmation before any write to the EHR, never auto-submit, until GUI-grounding accuracy is independently measured on real EHR screens.

Severity: serious

### I-4546 72-Hour Appeal Sprint

Objection: Claimable and Counterforce already draft AI appeal letters from a photographed denial for consumers, and Aegis already auto-files and tracks through payer portals (for providers); the only unclaimed slice is provider-grade portal automation applied to a stressed family member's own account within 72 hours, where a filing error or missed deadline has severe real-world stakes for a sick relative.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-01.md — "none confirmed to autonomously file into the plan's own portal and independently re-verify a filing ID... Aegis has the portal-submission mechanism but for the opposite (provider-side) buyer."

Fix: Keep the $79 refund-if-no-portal guarantee and add a human-review checkpoint before final submission given the high stakes and short window.

Severity: serious

### I-5203 Scope Gate for Your Own Agent

Objection: Scoped mandates plus pre-action interception already exist as dev-infra (Mandate library) and as payment protocols (AP2, ACP) and enterprise policy gates (Permit.io); wrapping this as a consumer subscription targets a "personal agent" market that barely exists yet, and once it does, the agent platforms themselves (OpenAI, Google) are the natural owners of scope-gating, not a third party.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-05.md — "no found product packages it as a consumer subscription app for personal agents specifically," but the mechanism is otherwise fully live in dev/enterprise form.

Fix: Target early power-user adopters of personal agents now, and plan to differentiate on cross-agent (multi-vendor) scope enforcement platforms won't offer for competitors' agents.

Severity: serious

### I-6002 Jev AI live call copilot

Objection: Real-time playbook coaching (Balto) and real-time fraud/scam voice alerts (Krisp, Parloa) already exist as separate live products; combining them plus a discreet help-phrase trigger is a feature-level differentiator that incumbents can add, and the idea also leans on the same unverified "Jev" speed/cost claim flagged in I-1050's own card.

Evidence: outputs/s8-final/prior-art-deep/s8-hunter-09.md — "Real-time agent-assist copilots with live coaching (Balto) and real-time fraud/scam voice alerts (Krisp, Parloa) both exist separately; no single tool combines both."

Fix: Lead with the discreet phrase-triggered supervisor escalation, the one combination gap found, and prove it works on a standard fast LLM, not only on unverified Jev claims.

Severity: serious

```json
[
  {"id": "I-1001", "objection": "Second-agent completion verification already exists in three live forms (AEVS, agent-completion-verifier, AgentLiar); niche/billing differentiation is thin and a primary-agent vendor could add first-party verification.", "fix": "Sell as a neutral, cross-vendor auditor to payers/insurers who need independence from the agent operator.", "severity": "serious"},
  {"id": "I-1050", "objection": "Open-source reflex layers (Reflex-S1, System1-mcp) already implement exactly this mechanism on Jev, and the idea depends on Jev's own unverified speed/cost claims.", "fix": "Pick one concrete downstream product and verify Jev's real latency/cost before building a platform.", "severity": "fatal"},
  {"id": "I-1516", "objection": "Questionnaire-automation tools already exist for security teams; letting an agent auto-log into a client's live admin console and answer insurance questions creates real liability if it misreads a control.", "fix": "Keep the owner as final signer on every answer and cap liability for misread controls contractually.", "severity": "serious"},
  {"id": "I-1564", "objection": "Local/offline legal LLM tools already solve privacy-and-offline; remaining differentiation is a closable feature gap, and unchecked drafting risks malpractice-grade hallucination.", "fix": "Ship a mandatory citation/fact-check pass before any draft is shown; lead on template-matching.", "severity": "serious"},
  {"id": "I-2052", "objection": "HackerOne/Bugcrowd already gate fake reports via free reputation scoring; a cash bond on top is extra friction incumbents have no reason to add.", "fix": "Launch on new/small bounty programs with no existing reputation history, not as an add-on to HackerOne.", "severity": "serious"},
  {"id": "I-2078", "objection": "Standing-order trackers and citation checkers already exist separately; a video wrapper is a thin, easily-copied UX layer over two live capabilities.", "fix": "Validate litigators prefer video over a one-line checklist before building the video pipeline.", "severity": "manageable"},
  {"id": "I-2536", "objection": "Microsoft ships a free, in-OS, agentic Fix it button on Windows 11 Copilot+ PCs matching the exact niche and mechanism, bundled at zero cost.", "fix": "Target non-Copilot+/older Windows PCs, or pivot to the family remote-approval angle Microsoft lacks.", "severity": "fatal"},
  {"id": "I-3026", "objection": "RedactLocal already ships the exact strip-locally-then-reinsert redaction loop for the same lawyer/CPA buyer, live today.", "fix": "Find a concrete gap RedactLocal lacks (e.g., tax-specific field types, IRC §7216 logging) or abandon.", "severity": "fatal"},
  {"id": "I-3048", "objection": "Evidence-then-approve diagnosis already exists in single-user apps and remote control already exists separately; this is a modest integration, not a hard mechanism, and also collides with Microsoft's free Fix it agent.", "fix": "Lead with the remote-family-approval workflow specifically, the one unfilled gap.", "severity": "serious"},
  {"id": "I-3095", "objection": "Sandbox-reproduce-and-verdict is already well established (Konvu, Elastic, CVE-Genie); the claimed on-prem-only differentiator is unconfirmed for the closest competitor and could be added by them.", "fix": "Confirm directly whether Konvu can/will offer on-prem deployment before investing.", "severity": "serious"},
  {"id": "I-3555", "objection": "Anchor Browser already sells this exact mechanism today and explicitly names Availity-style payer portals as a target use case, the idea's own flagship demo.", "fix": "Narrow to a vertical Anchor/Browserbase haven't packaged, e.g. Dentrix/Yardi desktop apps sold per-connector.", "severity": "fatal"},
  {"id": "I-4501", "objection": "Cloud scribes already push notes into browser EHRs; legacy-desktop GUI-grounding accuracy is unproven, and a misplaced click into a clinical record is a safety/liability incident.", "fix": "Require clinician field-by-field confirmation before any write to the EHR, never auto-submit.", "severity": "serious"},
  {"id": "I-4546", "objection": "AI appeal-letter drafting is already live (Claimable, Counterforce) and Aegis already auto-files through payer portals for providers; applying unattended portal-filing to a stressed family's own account within 72 hours raises real stakes for a filing error.", "fix": "Keep the refund-if-no-portal guarantee and add a human-review checkpoint before final submission.", "severity": "serious"},
  {"id": "I-5203", "objection": "Scoped mandates plus pre-action interception already exist as dev-infra and payment protocols; this targets a barely-existing consumer 'personal agent' market that platform vendors will likely own natively.", "fix": "Target early power-user adopters now and differentiate on cross-agent, multi-vendor enforcement.", "severity": "serious"},
  {"id": "I-6002", "objection": "Real-time playbook coaching and real-time fraud/scam alerts already exist as separate live products; combining them is a closable feature gap, and it leans on the same unverified Jev speed claim as I-1050.", "fix": "Lead with the discreet phrase-triggered escalation and prove it on a standard verified LLM, not only Jev.", "severity": "serious"}
]
```
<!-- COMPLETE -->
