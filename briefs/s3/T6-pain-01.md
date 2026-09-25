# Pain-miner brief: T6-01, the agent side (agents and their builders hitting the walled web)

Territory T6: agents versus the walled web. Half 1 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain felt by **the people who build, run or depend on web-browsing agents**: developers of browser agents and scrapers, teams running agent products (research, shopping, data collection, QA, RPA), and end users whose agents act for them. Find what blocks their agents on the open web, how often, what it costs in failed runs, engineering time, proxy and solver spend, and legal exposure, and what they do today.

## Boundary of this half
- **In:** agents stopped by CAPTCHAs, Cloudflare/Akamai/DataDome/PerimeterX challenges, MFA prompts, login walls, session expiry and rate limits; deciding which sites an agent may visit, must pay for or must avoid (Amazon v. Perplexity/Comet, site terms, robots.txt, Cloudflare's 15 Sept 2026 AI-crawler default block and pay-per-crawl, from the *agent operator's* view); paying per call (x402, Cloudflare pay-per-crawl, API keys per site) and keeping agent spend under control; knowing whether an agent run actually succeeded (silent failures, false "done", partial scrapes).
- **Out, owned by T6-02:** everything felt by **site owners**: publishers, FOSS infrastructure, docs sites and merchants deciding whether to block, allow, charge or admit agents, telling good agents from bad bots, and paying for crawler load. If a source covers both sides, record only the agent operator's pain.
- **Out of the territory:** checkout and catalog protocols (ACP, AP2, card-network agent tokens), MCP tool supply-chain security, generic LLM observability and evals.

## Questions
1. Which walls stop agents most often (CAPTCHA types, bot-management vendors, MFA/login, rate limits), on which kinds of sites, and what share of runs fail because of them? Use benchmark numbers (e.g. https://arxiv.org/pdf/2505.24878) and first-person reports.
2. What do builders spend to get past or around walls: residential proxies, CAPTCHA-solving services, stealth browsers, human-in-the-loop handoffs, engineering hours per site? Give dollar and hour figures.
3. How do agent operators decide what they are allowed to access, and what has gone wrong: injunctions (Amazon v. Perplexity), ToS blocks, account bans, Cloudflare's default block since 15 Sept 2026? What does the uncertainty cost them?
4. Where agents must pay per request (x402, pay-per-crawl, per-site API keys), what hurts: fragmented billing, no spend caps, surprise bills, wallets and keys held by the agent? Mark x402 volume claims `[unverified]` unless primary.
5. How do builders and users find out an agent run silently failed or reported false success, how often does it happen, and what does it cost?
6. What do people use today (browser-use, Skyvern, Browserbase, Steel, Bright Data, 2Captcha, CapSolver, Firecrawl, OpenAI Operator/Agent, Perplexity Comet) and what do users say those still fail at?

## Sources to mine
- Forums and subreddits: GitHub issues and discussions for browser-use (e.g. https://github.com/browser-use/browser-use/discussions/1695), Skyvern, Playwright, Puppeteer-extra-stealth, undetected-chromedriver, Crawl4AI, Firecrawl; r/webscraping, r/LocalLLaMA, r/AI_Agents, r/LangChain, r/automation, r/ChatGPT (Operator/Agent threads), Hacker News threads on Cloudflare blocks, Comet and x402. If Reddit is blocked, use search results quoting it.
- Reviews of incumbents on G2, Capterra, Trustpilot and Product Hunt: Bright Data, Oxylabs, Smartproxy/Decodo, ScraperAPI, ZenRows, Apify, Browserbase, 2Captcha, CapSolver, Firecrawl.
- Job postings (LinkedIn, Indeed, Wellfound) for "web scraping engineer", "browser automation engineer", "anti-bot": duties and volume that reveal the maintenance burden.
- Regulator and legal documents: Amazon v. Perplexity filings and coverage (https://ppc.land/court-blocks-perplexitys-comet-browser-from-amazons-accounts/), CFAA and ToS commentary 2025-2026, Cloudflare's pay-per-crawl and x402 posts (https://blog.cloudflare.com/introducing-pay-per-crawl/, https://blog.cloudflare.com/x402/), coverage of the Sept 2026 default block (https://fastcrw.com/blog/cloudflare-ai-crawler-block-september-2026).
- Complaint threads and news: builder blog posts and postmortems on agent failures, benchmark papers on web-agent reliability (WebArena, OSWorld, Online-Mind2Web, CAPTCHA benchmarks), trade press 2025-2026.

## Evidence standard
- **10-20 pain items.** Each carries at least one verbatim quote or specific number, with a link, a date, and the role and wall or site named where the source names them.
- Prefer first-person complaints from builders and operators (GitHub issues and forum posts are the best source here). Benchmarks and vendor posts are welcome but should not be most of the items.
- For every item, give frequency (how often it happens, e.g. failure rate or share of sites) and a time or money figure when any source provides one.
- Prefer 2025-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T6-01.md`, 1500 words max:
- a one-line header naming the half (T6-01, agent side: walls, permissions, payments, run verification);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Wall or site** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T6-02 covers the site-owner side.
- Write only your output file.
<!-- COMPLETE -->
