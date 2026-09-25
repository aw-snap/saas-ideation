# Scout brief: tech-unlocks-02 (agent protocols, agent payments, agents as customers)

Lens: tech-unlocks (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25. Build window is 48 hours, so a capability only counts if a small team can use it today.

## Objective
Map the **agent-to-agent and agent-to-tool infrastructure** that appeared since about March 2025: tool protocols, agent-to-agent protocols, agent payments, and agent identity. Then work backward to who now has a problem because agents are becoming buyers, callers and users of software. **Computer-centric slice.**

## Questions to answer
1. Which protocols and standards shipped or matured since March 2025? Verify these, don't assume them: Model Context Protocol (spec revisions, remote servers, auth, registry), Google A2A and its governance, agent payment schemes (e.g. AP2, x402, Stripe/OpenAI Agentic Commerce Protocol, Visa and Mastercard agent programs), and agent identity or auth proposals. For each, give the launch month and year, the adoption numbers, and whether it is demo-grade or production.
2. How big is adoption? Look for MCP server counts, registry sizes, SDK downloads, and the named companies shipping support, with dates.
3. What pain do builders and operators report? Look for auth and permissions, security incidents (prompt injection through tools, tool poisoning), rate limits, discovery, billing of agent traffic, and bot blocking. Collect verbatim quotes.
4. Which businesses are seeing agent traffic or agent customers, and how are they reacting? Look for publishers, e-commerce, APIs, and docs sites. Is "agents as customers" showing up in pricing pages, robots or llms.txt policies, and Cloudflare-style pay-per-crawl news?
5. Which roles are hiring for this? Look for postings mentioning MCP, A2A, or agentic commerce.

## Search angles and sources
- Spec repos, changelogs and blog posts (modelcontextprotocol.io, the A2A GitHub, Stripe, Coinbase x402, Visa and Mastercard newsrooms, Cloudflare blog).
- GitHub issues and discussions on MCP servers and SDKs. Hacker News launch threads. r/mcp, r/AI_Agents, r/LLMDevs.
- Security writeups and CVEs on MCP or agent tooling (2025–2026).
- G2 reviews or community complaints of API and integration platforms about agent traffic.
- Payments regulators and networks on agent-initiated payments (e.g. card network rules, EU/UK regulator statements) if any exist.
- Job postings and funding news from 2024 to 2026. Analyst reports on agentic commerce.

## Evidence standard
- At least **10 numbered findings**. Each finding has a source URL, and a date wherever one exists.
- Use verbatim quotes in quotation marks and hard numbers (server counts, downloads, fees, dates).
- For every capability, capture the fields the tech card needs: **capability, first available (month and year), maturity (demo-grade or production), rough cost, example unlock (who it helps)**. Mark anything you could not confirm `[unverified]`.
- Never invent URLs, quotes, statistics or products.

## Output
Write `outputs/s1-discover/scouts/s1-scout-tech-unlocks-02.md`, **1500 words max**.
Format:
```
# Scout tech-unlocks-02: agent protocols, payments and agents as customers
## Findings
1. **<short title>** — <what, with the quote or number>. Date: <yyyy-mm>. Cap-card: <capability | first available | maturity | cost | unlock>. Source: <URL>
2. ...
## Who it helps (backward map)
- <person/role or agent type> — <workflow> — finding #s
## Gaps
- <what you looked for and could not find>
<!-- COMPLETE -->
```
Last line must be exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas**, no pitches, no "someone should build".
- Stay in this slice. The other 4 scouts own the rest: computer-use and browser agents that drive GUIs (01), on-device, open-weight, fine-tuning and long-context/reasoning economics (03), realtime voice (04), and vision, video, 3D and document perception (05). If you find something for them, add at most a one-line pointer under Gaps.
- Write only your output file.
<!-- COMPLETE -->
