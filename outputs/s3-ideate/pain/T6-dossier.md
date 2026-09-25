# T6 dossier: Agents versus the walled web

Merged from `outputs/s3-ideate/pain/T6-01.md` (agent side) and `outputs/s3-ideate/pain/T6-02.md` (owner side). Duplicates are merged and the best evidence is kept.

## Pain points

### Agent side

**P1. CAPTCHAs stop agents.** Who: operators of browser agents (browser-use, Skyvern). What hurts: agents loop on Google's "unusual traffic" CAPTCHA and stall on "Verify you are human" boxes inside 2FA. How often: on every CAPTCHA-bearing site. The best agent solves 40.0% of 225 CAPTCHAs, against 93.3% for humans. Cost: the run fails and a human has to step in. Workaround: hiding automation flags, splitting tasks, TOTP vaults, paid solvers at $1–3 per 1,000 solves. Evidence: https://arxiv.org/pdf/2505.24878 ; https://github.com/Skyvern-AI/skyvern/discussions/1088. **Severity 5.**

**P2. User consent is not site authorization.** Who: agents acting inside users' accounts. What hurts: an injunction (N.D. Cal., 9 Mar 2026) bars Perplexity Comet from Amazon accounts. The court found access "with the Amazon user's permission but without authorization by Amazon", and that Comet spoofed a Chrome user-agent. How often: a single ruling that now caps every agent working inside logged-in accounts. Cost: CFAA and §502 exposure, collected data destroyed within 30 days, and the site lost to the product. Workaround: none while the appeal is pending. Evidence: https://ppc.land/court-blocks-perplexitys-comet-browser-from-amazons-accounts/. **Severity 5.**

**P3. Cloudflare's default block.** Who: agents, RAG builders and price or change monitors. What hurts: since 15 Sept 2026, "mixed-use" crawlers are blocked by default on ad-bearing pages of new and free-tier Cloudflare sites. Cost: lower fetch success on content sites. Workaround: tagging sources by CDN, identifying honestly, arranging payment. Evidence: "after September 15 the rejection becomes the configured default on a large slice of the web" https://fastcrw.com/blog/cloudflare-ai-crawler-block-september-2026. **Severity 5.**

**P4. Agents claim success on failed runs.** Who: teams running agents in production. What hurts: false completion claims make up "45–48% of all failures" across 9,876 tau2-bench trajectories and 75.8% of AppWorld failures. Production success is 56.6%, against 90%+ on benchmarks (4.5M runs from 6,259 agents). LLM judges detect false success at an AUROC of only 0.65. Cost: broken runs are booked as done. Workaround: tracing every tool call by hand. Evidence: https://prefactor.tech/blog/silent-wins-visible-fails-agent-production-success-metrics. **Severity 5.**

**P5. Per-call payments have no cap across a sequence of calls.** Who: operators paying through x402 or pay-per-crawl. What hurts: limits apply to a single payment, not a series. "A 5-second poll on a two-minute backtest can result in 24 paid calls for one result." How often: in every polling or retry loop. Cost: charges that multiply without limit. Workaround: none, because the protocol leaves it "to the application above". Evidence: https://www.infoq.com/news/2026/08/agent-payment-rails-x402/. **Severity 4.**

**P6. No spend view across protocols, and shared keys.** Who: integrators of agent payments. What hurts: "x402 moves the dollar but does not track your budget; AP2 proves authorization for one purchase but does not aggregate a session; and Stripe MPP bills the session but does not enforce per-agent, per-project policy." Firecrawl users share API keys across fleets of agents because agents cannot pay per scrape. Workaround: build it yourself. Evidence: https://usagebox.com/articles/ai-agent-payment-stack-2026-x402-ap2-agent-pay-metering-gap ; https://github.com/firecrawl/firecrawl/issues/3279. **Severity 4.**

**P7. Getting past walls costs a lot to maintain.** Who: scraping and agent engineering teams. What hurts: "50–80% of total scraping cost is maintenance" [unverified, secondary aggregation]. Bright Data has a $499/mo minimum and charges for failed queries. On r/proxies the complaints are about blocked "fake ISP" proxies, where "cost per successful request" is what matters. How often: continuously. Evidence: https://www.g2.com/products/bright-data/reviews ; https://dataimpulse.com/blog/residential-proxy-pricing-comparison/. **Severity 4.**

### Owner side

**P8. Crawlers overload volunteer FOSS infrastructure.** Who: sysadmins at GNOME, SourceHut, Fedora, Codeberg and Read the Docs. What hurts: crawlers rotate IPs, ignore robots.txt and hit expensive git endpoints. At GNOME only 3.2% of requests passed Anubis. SourceHut has "dozens of brief outages per week." How often: daily. Cost: DeVault spends "20-100% of my time in any given week mitigating". Read the Docs saw 800GB/day, about $1,500/month at origin prices (2024). Workaround: Anubis, tarpits, blocking whole countries. Evidence: https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/ ; https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/. **Severity 5.**

**P9. Small independent sites face bills and outages.** Who: people running hobby forums, community databases, art sites and small hosting. What hurts: ProtonDB pays "$500/month in excess bandwidth charges from Prerender crawler alone". An art site was "taken down 3 times in 3 days by Claude crawlers". Forums report traffic "quintupled" and "10x traffic overnight". A host says about 95% of its traffic is bots, and one publisher was pushed onto a higher hosting tier. Cost: hundreds of dollars a month, outages, and "a neverending game of whack-a-mole". Workaround: manual blocks and login walls. Evidence: https://news.ycombinator.com/item?id=45105230. **Severity 4.**

**P10. Blocking hurts real users.** Who: FOSS and wiki admins. What hurts: Fedora blocked all of Brazil. Anubis breaks Thunderbird's RSS reader and JS-hardened browsers, so Forgejo keeps patching its configuration. SourceHut's tarpit "might degrade access… for users." How often: with every new edge case. Evidence: https://github.com/TecharoHQ/anubis/issues/721 ; https://codeberg.org/forgejo/discussions/issues/320. **Severity 4.**

**P11. Owners cannot tell agents apart or choose which to allow.** Who: owners of small WordPress and Cloudflare-fronted sites. What hurts: AI crawlers "look almost identical" to malicious scrapers. "There is no 'AI bot allowlist' toggle in Wordfence yet." The 15 Sept default made every affected owner review their settings, and getting it wrong risks losing search indexing. Cost: admin time and blocking too much or too little. Evidence: https://powerfulcombo.com/blog/wordfence-ai-bots/ ; https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/. **Severity 3.**

**P12. Referral traffic is falling while crawl costs rise.** Who: small publishers. What hurts: Google referrals fell 33–38% year over year, with up to 60% lost at smaller sites [industry aggregate]. Cost: ad revenue. Workaround: none reliable. Evidence: https://contently.com/2026/04/27/ai-overview-traffic-impact/. **Severity 4.**

**P13. Small merchants face checkout bots.** Who: small Shopify stores. What hurts: card-testing bursts leave a "pile of fraudulent orders", with processing fees that are not refunded and chargebacks later. Scalper bots check out "in under two seconds." Advanced bot protection only comes on "$2000+/month plans." Workaround: Signifyd and NoFraud. Evidence: https://community.shopify.com/t/card-testing-bots-are-using-shopify-stores-to-figure-out-which-stolen-cards-still-work/683204. **Severity 3.** This is adjacent to T6: it is bot fraud, but it raises the same question of telling a real buyer from a bot.

## Already tried

- **browser-use and Skyvern:** neither has a built-in way past CAPTCHAs, and CAPTCHAs inside 2FA still break them.
- **2Captcha and CapSolver:** the cost per solve grows with how often the wall appears.
- **Bright Data and residential proxies:** a minimum spend, charges for failed requests, bans on specific sites.
- **Perplexity Comet:** barred from Amazon by court order. Users also say it removed paid features without notice (https://dev.to/theaidownside/comet-has-been-gutted-a-week-of-paid-ai-features-quietly-disappearing-4oin).
- **x402, AP2, Stripe MPP and Cloudflare Wallets:** each covers one piece and none sets a session budget. Wallets cannot take funding yet.
- **LLM-as-judge:** AUROC of 0.65 at spotting false success.
- **robots.txt:** crawlers that spoof user-agents and rotate IPs ignore it.
- **Anubis:** effective, but it breaks RSS readers and privacy tools.
- **Tarpits and country blocks:** blunt, and they hurt real users.
- **Cloudflare AI Crawl Control:** the defaults need manual setup, and small-publisher uptake of pay-per-crawl is unknown.
- **Wordfence:** has no allowlist per AI crawler apart from Google.
- **Shopify fraud tools:** the strongest bot protection is priced above small merchants.

## Open questions

1. What a human handoff costs per wall incident. No primary figure was found.
2. Actual x402 and pay-per-crawl volume, and what small publishers earn from it.
3. Any first-hand merchant account of mistaking a customer's shopping agent for a scalper bot.
4. The false-success rate for Operator or ChatGPT Agent web runs specifically.
5. Who pays on the owner side. FOSS maintainers have the pain but little budget, and it is unknown whether publishers would pay to charge agents or only to block them.
6. Raw Reddit threads (r/webscraping, r/AI_Agents) were unreachable, so the agent-side quotes come from GitHub, HN and blogs.

<!-- COMPLETE -->
