# seed-05 decomposed: AI PC optimiser and fixer

## Atoms

### Audience
- A-seed-05-aud-1: Non-technical Windows home users who'd otherwise call a relative or pay a repair shop.
- A-seed-05-aud-2: The family "tech person" who remotely maintains parents' or relatives' PCs.
- A-seed-05-aud-3: Small offices with no dedicated IT staff.

### Pain
- A-seed-05-pain-1: PC is slow or buggy and the owner can't diagnose or fix it themselves.
- A-seed-05-pain-2: Existing "cleaner" tools report exaggerated problem counts (scareware) instead of real causes.
- A-seed-05-pain-3: Fixing today means searching error messages, paying a repair shop, or waiting days for a relative.

### Mechanism
- A-seed-05-mech-1: User describes the problem in plain language; agent inspects real machine state to find the cause.
- A-seed-05-mech-2: Agent shows evidence for the diagnosis before proposing any fix, unlike scareware counts.
- A-seed-05-mech-3: Every fix is an approved plan with a restore point taken first and one-click undo.

### Enabling tech
- A-seed-05-tech-1: Local LLM agent with tool calls against OS diagnostics (event logs, drivers, startup apps, disk health).
- A-seed-05-tech-2: Fixed allow-list restricting which system actions (registry, drivers, uninstalls) the agent may take.

### Business model
- A-seed-05-biz-1: Free diagnosis, small fee per approved fix.
- A-seed-05-biz-2: Low monthly plan for ongoing monitoring, with a family plan covering multiple PCs.

### Demo moment
- A-seed-05-demo-1: PC deliberately slowed, plain-English complaint typed in, evidence shown, one fix approved, before/after timing shown.
- A-seed-05-demo-2: The approved fix is undone in one click after the demo to show reversibility.

### Core insight
- A-seed-05-insight-1: Non-technical users can't self-diagnose; an agent that shows real evidence beats scareware-style fear tactics.

## Prior art

- TroubleBuddy (troublebuddy.ai) — AI diagnostics using natural language to explain Windows crashes, blue screens, slow performance, update errors. https://troublebuddy.ai/features/ai-diagnostics
- PC-Care.ai — positions itself explicitly as an AI CCleaner alternative, claims to find issues CCleaner misses. https://pc-care.ai/lp/ccleaner-alternative/ and https://pc-care.ai/blog/what-is-ai-pc-optimization.html
- CCleaner (ccleaner.com) — incumbent free/paid PC cleaner with "Health Check" auto-analyze-and-fix feature, millions of users; not agentic/conversational but covers the same jobs (startup cleanup, driver updates, speed fixes). https://www.ccleaner.com/ccleaner-free
- Microsoft is adding AI to Windows 11's Performance Analyzer to let users ask in natural language why a PC is slow. https://www.windowslatest.com/2026/08/06/microsoft-is-bringing-ai-to-windows-11s-performance-tools-to-figure-out-why-pcs-are-slow-and-its-a-big-deal/

Verdict: **direct-competitor**. TroubleBuddy already offers natural-language, evidence-based Windows diagnostics for the same non-technical audience, and PC-Care.ai markets itself directly against CCleaner with an AI-optimizer pitch; Microsoft is also building AI diagnosis into Windows itself, narrowing the wedge further.

## Weakest points

- The core differentiator (evidence-before-fix, plain-language diagnosis) is already claimed by at least two live products (TroubleBuddy, PC-Care.ai), and Microsoft is building similar AI diagnosis natively into Windows, which could commoditize the category.
- Willingness to pay per fix is unverified when CCleaner, Windows' own troubleshooters, and now AI-native competitors are free or already installed.
- Trust and distribution risk: a new app requesting admin/registry/driver access fights the same scareware reputation the pitch tries to escape, and liability if an approved fix breaks something is unresolved.

<!-- COMPLETE -->
