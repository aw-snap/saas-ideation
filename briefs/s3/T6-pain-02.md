# Pain-miner brief: T6-02, the owner side (small sites facing agents and AI crawlers)

Territory T6: agents versus the walled web. Half 2 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain felt by **the people who run websites that agents and AI crawlers hit**: small and independent publishers, bloggers and newsletter sites, FOSS infrastructure (code forges, docs sites, package mirrors, wikis), and small online merchants. Find what agent and crawler traffic does to them, how often, what it costs in hosting bills, outages, admin hours and lost revenue, and how they decide whether to block, allow, charge or admit agents.

## Boundary of this half
- **In:** crawler load and its costs (bandwidth, compute, outages, on-call time); deciding whether to block, allow, charge or admit AI crawlers and agents (robots.txt, Cloudflare's 15 Sept 2026 AI-crawler default block and pay-per-crawl, from the *site owner's* view); telling legitimate agents (a customer's shopping or research agent) from abusive bots and scrapers; collateral damage of blocking (real users and good agents locked out, lost search or AI referral traffic); lost revenue when agents read content or complete tasks without visiting pages or seeing ads; merchant-side issues such as agents hoarding inventory, testing cards or creating fake accounts.
- **Out, owned by T6-01:** everything felt by **agent builders and operators**: agents stuck at CAPTCHAs and MFA, deciding where their agent may go, paying per call, verifying agent runs. If a source covers both sides, record only the site owner's pain.
- **Out of the territory:** checkout and catalog protocols (ACP, AP2, card-network agent tokens), MCP tool supply-chain security, generic LLM observability, enterprise bot management for large retailers.

## Questions
1. How much of a small site's or FOSS project's traffic is AI crawlers and agents, and what does it cost in bandwidth bills, compute, outages and admin hours? Use first-person numbers (e.g. Read the Docs 75% traffic cut, GNOME 97% bot traffic, https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/).
2. Who inside a small org handles this (solo blogger, volunteer sysadmin, shop owner), how often do they have to act, and how long does each incident or rule change take?
3. What goes wrong when they block: legitimate users and agents shut out, CAPTCHA friction, lost referral traffic, false positives from Anubis, Cloudflare or WAF rules? Give counts or quotes.
4. How do owners decide whether to block, allow or charge, and what do they get (or fail to get) from pay-per-crawl, licensing deals or the Sept 2026 default block (https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/)? Include traffic and revenue drops attributed to AI answers.
5. For small merchants: how do they tell a customer's purchasing agent from a scalper or card-testing bot, and what does getting it wrong cost (chargebacks, lost sales, inventory hoarding)?
6. What do they use today (Cloudflare Bot Fight Mode and AI Crawl Control, Anubis, robots.txt, fail2ban, WAF rules, DataDome, hCaptcha/Turnstile) and what do users say those still fail at?

## Sources to mine
- Forums and subreddits: r/selfhosted, r/sysadmin, r/webhosting, r/Wordpress, r/blogging, r/SEO, r/juststart, r/shopify, r/ecommerce, r/opensource; Hacker News threads on AI crawlers, Anubis and Cloudflare's default block; FOSS project blogs and mailing lists (GNOME, KDE, SourceHut, Read the Docs, Fedora, Codeberg, Diaspora), Mastodon posts by sysadmins. If Reddit is blocked, use search results quoting it.
- Reviews of incumbents on G2, Capterra, Trustpilot and the WordPress plugin directory: Cloudflare bot management, Wordfence, Sucuri, DataDome, HUMAN, Shopify bot-protection apps, and GitHub issues for Anubis.
- Job postings (LinkedIn, Indeed) for small publishers or e-commerce roles naming "bot traffic", "scraping mitigation" or "AI crawler" duties.
- Regulator and industry documents: Cloudflare's pay-per-crawl and default-block announcements (https://blog.cloudflare.com/introducing-pay-per-crawl/), IAB Tech Lab and News/Media Alliance statements on AI crawling, EU copyright text-and-data-mining opt-out guidance, Visa/Mastercard agentic-payments announcements as they bear on merchant bot risk (https://www.digitalcommerce360.com/2025/10/16/visa-mastercard-both-launch-agentic-ai-payments-tools/).
- Complaint threads and news: independent-publisher posts on traffic loss to AI answers, hosting-bill postmortems, trade press (The Register, 404 Media, Press Gazette, Digiday) 2025-2026.

## Evidence standard
- **10-20 pain items.** Each carries at least one verbatim quote or specific number, with a link, a date, and the role and site type named where the source names them.
- Prefer first-person complaints from small site owners and volunteer sysadmins. Large-publisher and vendor figures are welcome but should not be most of the items.
- For every item, give frequency (how often it happens, e.g. share of traffic or incidents per month) and a time or money figure when any source provides one.
- Prefer 2025-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T6-02.md`, 1500 words max:
- a one-line header naming the half (T6-02, owner side: crawler load, block/allow/charge decisions, telling agents from bots);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Site type** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T6-01 covers the agent-builder and operator side.
- Write only your output file.
<!-- COMPLETE -->
