# Scout brief: screen-work-05, software used or bought by AI agents, and the people supervising them

Lens: screen-work (the computer lens). Slice 5 of 5. Computer-centric: yes.

## Objective
Map where **AI agents doing screen work get stuck**, and the screen work humans now do to set up, watch, correct and pay for those agents: developers and operators running computer-use, browser and coding agents, and the services those agents try to use as customers.

## Questions to answer
1. Where do browser and computer-use agents fail most often, by the builders' own account: CAPTCHAs and bot detection, login and MFA, flaky page layouts, long multi-step forms, file uploads and downloads, rate limits? Cite benchmark results (for example OSWorld, WebArena, and newer 2025–2026 benchmarks) with dates.
2. What services do agents need but find hostile or missing: agent-friendly auth and credentials, payments and spending limits, identity and verification, machine-readable docs (llms.txt, MCP servers), sandboxes? What do builders pay for these today?
3. What screen work have humans taken on because of agents: reviewing agent output, approving actions, replaying failed runs, debugging traces, cleaning up after mistakes? How much time does it take, by their account?
4. Which websites and SaaS vendors changed terms, blocked agents, or launched agent-facing offerings (APIs, MCP servers, agent payment protocols) in 2024–2026, and with what dates?
5. What do teams spend on agent infrastructure (browser hosting, proxies, observability, evals), and what do they complain about in those tools?

## Search angles and source types
- Forums and communities: r/AI_Agents, r/LocalLLaMA, r/ClaudeAI, r/OpenAI, r/webscraping, r/LangChain, r/automation, Hacker News threads on computer-use and browser agents.
- GitHub issues and discussions of open-source agent frameworks and browser-automation projects (search for recurring failure labels such as "captcha", "login", "timeout").
- Changelogs and launch posts from model labs, browser-infrastructure vendors, and payment networks announcing agent features, 2024–2026.
- Benchmark papers and leaderboards (arXiv, project sites) with scores and dates.
- G2 and Product Hunt reviews of agent-observability, browser-infrastructure and eval tools.
- Job postings with new titles such as "agent operations", "AI automation engineer", "agent reliability".
- News from 2024–2026 on sites blocking AI agents, Cloudflare bot policies, and terms-of-service changes.

## Evidence standard
- At least **10 findings**. Each has a verbatim quote or a specific number, a date, and a working source URL.
- Name the agent, framework, website or vendor wherever the source does.
- Prefer sources from 2025–2026, since this field moves fast. Mark older ones with their year. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s1-discover/scouts/s1-scout-screen-work-05.md`:
- a one-line header naming the slice;
- numbered findings (`1.`, `2.`, ...), each 1–4 sentences with the quote or number, the date, and `Source: <URL>`;
- a short `## Patterns` section (3–5 bullets) grouping the findings by failure type or buyer;
- a short `## Gaps` section naming what you looked for and could not find.
- 1500 words max. The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. No product ideas, no solutions, no "an AI could..." sentences.
- Stay inside this slice: pain **experienced by agents or by the people building, running and supervising agents**. The other 4 scouts own the rest: portals run by government, payers or regulators (scout 01), vertical line-of-business software (scout 02), glue work across email, PDFs, spreadsheets and horizontal SaaS (scout 03), and IT and security admin in tiny organizations (scout 04). If a finding is about a human doing the work by hand, it belongs to them, not to you.
- Write only your output file.
<!-- COMPLETE -->
