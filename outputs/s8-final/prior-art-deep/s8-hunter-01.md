### I-1001 Independent Completion Witness

Verdict: adjacent-exists

Closest products:
- AEVS by Fetch.ai (https://www.producthunt.com/products/aevs-by-fetch-ai) — drop-in SDK that logs agent tool-calls and issues signed execution receipts; verifies via captured call/output logs, not by an independent second agent re-navigating the live target.
- agent-completion-verifier, Luca-1304 (https://github.com/Luca-1304/agent-completion-verifier) — open-source evidence-grounded evaluator that detects false-completion claims in tool-using agents; a real live repo with the same "don't trust the claim" thesis but no packaged per-verification billing or fleet-of-browser-agents productization.
- AgentLiar detector, described on DEV Community (https://dev.to/nilofer_tweets/agentliar-detector-catch-coding-agents-that-falsely-claim-task-completion-413c) — runs independent checks and a confidence score against claimed completions, aimed at coding agents rather than portal/claims automation.

Note: Several live "don't trust the agent's self-report" verifiers exist (AEVS, AgentLiar, agent-completion-verifier), but none is confirmed to be a second independent agent that re-navigates the actual target (portal, screenshot, confirmation number) specifically for claims/portal ops fleets with a signed pass/fail sold per-verification. Mechanism overlap is high, niche/packaging differs.

### I-1564 Draft From Case Files, Offline

Verdict: adjacent-exists

Closest products:
- local-legal-ai, jashankish (https://github.com/jashankish/local-legal-ai) — self-hosted, fully private LLM assistant for law firms using open-source models with no data leaving the firm; built for document Q&A and RAG, not for drafting motions/letters matching firm templates.
- Elephas (https://elephas.app/resources/best-private-ai-tools-for-lawyers) — Mac app with local/offline model support (via Ollama) and per-matter isolated knowledge bases; general prosumer writing assistant, not a legal-specific drafting product with firm-template matching or a "never opens a network connection" guarantee.
- Harvey AI / CoCounsel / Spellbook (cloud, enterprise-priced $180-$1200+/seat/mo per multiple 2026 pricing roundups) — dominant legal AI drafting tools but cloud-hosted and priced far above solo/small-firm budgets, the exact gap I-1564 targets.

Note: Local/offline legal LLM setups (Ollama, local-legal-ai, Elephas) exist and solve the privilege/offline requirement, but none is packaged specifically as "load a case folder, draft motions/letters matching the firm's own templates, zero network" for solo lawyers at $79-149/seat.

### I-2536 AI PC optimiser and fixer

Verdict: direct-competitor

Closest products:
- Windows 11 agentic "Fix it" feature, Microsoft (https://www.pcworld.com/article/2773838/an-ai-driven-fix-it-button-is-just-what-windows-needs.html) — Microsoft is shipping an AI-driven, natural-language "Fix it" button built into Windows 11 Settings on Copilot+ PCs, rolling to Insiders, reading device state/logs and proposing/applying fixes for non-technical home users.
- PC Optimizer Software, Microsoft Store (https://apps.microsoft.com/detail/xp99bg9vdxzlbf) — wraps every optimization batch in a snapshot/restore point with one-click undo, but rule-based tweaks, not a conversational AI agent that reads logs and explains findings.
- optimizerDuck (https://github.com/optimizer-duck-app/optimizerDuck) — open-source Windows optimizer with per-tweak revert files; same undo mechanism, no AI diagnosis or plain-English evidence.

Note: Microsoft's own in-OS agentic Fix it button matches the niche (non-technical Windows users) and mechanism (natural-language complaint, agent reads real system state, proposes/applies a fix) closely, though it is free and bundled rather than a paid third-party service.

### I-3095 On-Prem Exploit Bench

Verdict: adjacent-exists

Closest products:
- Konvu Bug Bounty Triage (https://konvu.com/product/bug-bounty-triage) — live commercial product that automatically reproduces bug-bounty reports in an isolated sandbox against the exact reported version and returns a verdict; deployment model (cloud vs. on-prem) and whether private source code ever leaves Konvu's infrastructure are not documented on their product page, so the "never leaves the company firewall" requirement is unconfirmed.
- Elastic Security Labs internal AI triage pipeline (https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone) — reproduces findings on ephemeral self-destructing VMs and agrees with human analysts 85% of the time, but this is Elastic's internal tooling, not a sold product other regulated companies can run on their own servers.
- CVE-Genie / ExploitBench (https://github.com/exploitbench/exploitbench, arXiv 2509.01835) — open-source multi-agent frameworks that automatically reproduce CVEs/exploits in sandboxed containers; self-hostable in principle but are research/OSS tooling, not a packaged annual-license enterprise product for internal bounty programs.

Note: The "AI reproduces a reported exploit in an isolated sandbox and returns pass/fail" mechanism is well established (Konvu, Elastic, CVE-Genie), but no found product is confirmed as a packaged, air-gapped, on-prem-only offering for regulated companies' private bounty programs.

### I-4546 72-Hour Appeal Sprint

Verdict: adjacent-exists

Closest products:
- Claimable (https://www.getclaimable.com/) — consumer product, upload denial, AI drafts a custom appeal citing clinical evidence and policy; but Claimable itself mails/faxes the appeal on the user's behalf rather than logging into the plan's own portal, and there's no independent portal revisit to confirm a filing ID before telling the user it's done.
- Counterforce Health (https://www.counterforcehealth.org/) — free AI appeal-letter generator with a claimed 2x win rate, same denial-photo-to-letter flow, but output is a letter for the user to submit themselves; no portal automation or filing confirmation found.
- Aegis (YC X25) (https://www.ycombinator.com/companies/aegis) — automates denial detection, drafting, and portal submission/tracking, closest on the "submit and track through payer portals" mechanism, but targets hospitals/billing groups (B2B provider-side), not families acting on a personal Medicare Advantage denial within a 72-hour window.

Note: Several live tools draft AI appeal letters from a photographed denial (Claimable, Counterforce, Fight Health Insurance), matching the niche closely, but none confirmed to autonomously file into the plan's own portal and independently re-verify a filing ID the way I-4546 proposes; Aegis has the portal-submission mechanism but for the opposite (provider-side) buyer.

```json
[{"id": "I-1001", "verdict": "adjacent-exists", "competitors": ["AEVS by Fetch.ai (https://www.producthunt.com/products/aevs-by-fetch-ai)", "agent-completion-verifier (https://github.com/Luca-1304/agent-completion-verifier)", "AgentLiar detector (https://dev.to/nilofer_tweets/agentliar-detector-catch-coding-agents-that-falsely-claim-task-completion-413c)"], "note": "Live self-report distrust verifiers exist (AEVS, AgentLiar, agent-completion-verifier) but none confirmed as a second independent agent re-navigating the live portal/target for claims-ops fleets with a signed per-verification fee."}, {"id": "I-1564", "verdict": "adjacent-exists", "competitors": ["local-legal-ai (https://github.com/jashankish/local-legal-ai)", "Elephas (https://elephas.app/resources/best-private-ai-tools-for-lawyers)", "Harvey AI/CoCounsel/Spellbook (cloud, enterprise-priced)"], "note": "Local/offline legal LLM setups exist (local-legal-ai, Elephas via Ollama), but none packaged as case-folder-to-motion-draft matching firm templates, zero-network, at solo-lawyer pricing."}, {"id": "I-2536", "verdict": "direct-competitor", "competitors": ["Windows 11 agentic Fix it button, Microsoft (https://www.pcworld.com/article/2773838/an-ai-driven-fix-it-button-is-just-what-windows-needs.html)", "PC Optimizer Software (https://apps.microsoft.com/detail/xp99bg9vdxzlbf)", "optimizerDuck (https://github.com/optimizer-duck-app/optimizerDuck)"], "note": "Microsoft is shipping an in-OS agentic Fix it button for Windows 11 Copilot+ PCs matching both niche (non-technical home users) and mechanism (plain-English complaint, reads system state, proposes/applies fix), free and bundled."}, {"id": "I-3095", "verdict": "adjacent-exists", "competitors": ["Konvu Bug Bounty Triage (https://konvu.com/product/bug-bounty-triage)", "Elastic Security Labs internal AI triage (https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone)", "CVE-Genie/ExploitBench (https://github.com/exploitbench/exploitbench)"], "note": "AI reproduces reported exploits in a sandbox and returns pass/fail (Konvu, Elastic, CVE-Genie), but no confirmed packaged air-gapped/on-prem-only product for regulated companies' private bounty programs."}, {"id": "I-4546", "verdict": "adjacent-exists", "competitors": ["Claimable (https://www.getclaimable.com/)", "Counterforce Health (https://www.counterforcehealth.org/)", "Aegis, YC X25 (https://www.ycombinator.com/companies/aegis)"], "note": "AI appeal-letter drafting from a photographed denial is live and common (Claimable, Counterforce), but none confirmed to autonomously file into the plan's own portal and independently re-verify a filing ID; Aegis has that mechanism but for provider-side buyers."}]
```
<!-- COMPLETE -->
