# seed-05: AI PC optimiser and fixer — decomposed

## Atoms

- A-seed-05-aud-1: Consumer PC users with slow or buggy machines they can't diagnose themselves.
- A-seed-05-pain-1: Users don't know how to fix slowdowns, bugs, or misconfigurations on their own PC.
- A-seed-05-mech-1: An AI agent runs on the PC, inspects system state, and applies fixes and optimizations automatically.
- A-seed-05-tech-1: On-device or local agent with system-level access to settings, processes and diagnostics. [inferred]
- A-seed-05-tech-2: LLM reasoning to interpret symptoms and choose fixes.
- A-seed-05-biz-1: Consumers pay; the form (one-off, subscription, per-fix) is unspecified.
- A-seed-05-demo-1: A sluggish PC is diagnosed and fixed live while the user watches.
- A-seed-05-insight-1: Most consumers can't self-diagnose PC problems; an always-present on-device AI could do it instead.

## Prior art

Note: the web search budget for this session was already exhausted before any query for this task could run, so the checks below draw on general product knowledge rather than a live search, and no specific URLs are given beyond well-known homepages already confidently known. Treat this section as lower-confidence than a normal prior-art pass.

- CCleaner and IObit Advanced SystemCare (ccleaner.com, iobit.com) are long-established "PC optimizer" utilities that scan, clean and tweak Windows PCs for consumers, the same buyer and pain, though with rule-based rather than AI-agent mechanisms. Same niche, adjacent mechanism.
- Windows' own built-in troubleshooters and Microsoft's growing Copilot/AI features inside Windows settings address parts of the same pain natively, for free. Adjacent, weaker on autonomous fixing.
- General-purpose "AI computer-use" agents (e.g., Anthropic's computer-use capability) can operate a machine's UI but are not packaged as a consumer PC-optimizer product. Adjacent, different packaging.
- **Verdict: direct-competitor** on the category (PC optimizer/cleaner utilities already serve this exact buyer and pain), though a genuinely autonomous AI-diagnostic mechanism would be a meaningful upgrade if it can be trusted.

## Weakest points

- The "PC optimizer" category has a well-known scareware and bloatware reputation (per CCleaner-style tools); trust is the core adoption barrier and isn't addressed.
- Letting an AI change system settings autonomously raises unaddressed safety questions: undo, permissions, and risk of breaking the machine.
- No differentiation is stated from free built-in OS troubleshooters and established cleanup utilities already doing this job.

<!-- COMPLETE -->
