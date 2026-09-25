# Scout weak-signals-05: new roles and workflows

## Findings

1. **Agentic AI Engineer / "agentic AI" skill surge**: The skill tag "agentic AI" grew sharply in US job postings between 2025 and 2026, and the role sits outside classic ML titles, spanning ops, GTM and product.
   - Evidence: "the skill 'agentic AI' going from 0.06% to 0.23% of US postings in a year, up 280%, about 90,000 postings" (Sep 2026 search summary, sourced from ilinmaks.com's 2026 analysis)
   - Screens and tools involved: [unverified — underlying job-posting dashboard not opened directly]
   - Source: https://www.ilinmaks.com/blog/en/ai-jobs-market-2026 (2026)
   - computer-centric: yes

2. **AI job titles spreading outside tech departments**: The count of distinct US job titles referencing AI more than tripled, and most of that growth is now happening outside software/engineering, e.g. healthcare, logistics, education.
   - Evidence: "US job titles referencing AI more than tripled from 264 in 2022 to 822 by the first quarter of 2026, and 63 per cent of those titles now sit outside traditional technology occupations — in healthcare, education, marketing, logistics and management."
   - Screens and tools involved: [unverified, not confirmed which specific tools]
   - Source: search summary citing kaam.work / related 2026 labor-market reporting (2026)
   - computer-centric: yes

3. **"Agent Operator" / AgentOps as a named role inside GTM and RevOps teams**: A day-to-day workflow of defining agent task specs, choosing tools, building eval frameworks and iterating weekly/monthly has crystallized into a distinct job, usually carved out of a RevOps or ops-engineering hire.
   - Evidence: "GTM engineering postings grew roughly 205% across 2025, from around 1,400 in mid-2025 to over 3,000 by January 2026." Core loop described as Define -> Deploy -> Evaluate -> Optimize, with weekly iteration for high-volume workflows.
   - Screens and tools involved: Clay, n8n, Gumloop, Lindy, Claude/GPT/Gemini consoles — stitched together per the source's own "audit existing AI tools" step, implying no single system of record yet.
   - Source: https://gtmnow.com/the-agent-operator-the-new-emerging-role/ (2026)
   - computer-centric: yes

4. **Agent-owner role formalizing inside enterprises, fast**: Enterprises are naming a specific person responsible for AI agents in production, and that has gone from rare to common in about two years.
   - Evidence: "Today, 56% of enterprises name a dedicated AI agent owner or 'agentic ops' lead, up from 11% in 2024." [unverified — this figure came from a search-engine summary, not a directly opened source with methodology]
   - Screens and tools involved: not specified in source
   - Source: search summary referencing agentteams.com "What Is Agentic Ops?" (2026) — [unverified]
   - computer-centric: yes

5. **AgentOps Engineer as a distinct hired title at large vendors**: Enterprise consultancies are posting for roles specifically to keep production AI agents reliable and cost-controlled, distinct from MLOps.
   - Evidence: title "AgentOps Engineer – AI Managed Services" appears as an open requisition; role description: "manage the reliability, performance, and operational health of enterprise AI agents in production, monitoring agent behavior, optimizing costs, managing releases."
   - Screens and tools involved: production monitoring/observability dashboards, cost dashboards, release-management tooling (not itemized in source)
   - Source: https://www.accenture.com/us-en/careers/jobdetails?id=R00344460_en (2026)
   - computer-centric: yes

6. **AI trainer / data-annotation work is a large, fast-growing, spreadsheet-adjacent job category**: This is now one of the fastest-growing job families tied to AI, done largely by contractors via marketplaces, with pay clustered in a modest hourly band.
   - Evidence: "AI trainer roles grew 283% in cross-border hiring during 2025" and "average hourly pay for AI trainers in the United States is $31.24, with most workers earning between $19.95 and $35.58 per hour" (as of August 2026).
   - Screens and tools involved: annotation platforms (Label Studio, Scale AI, Surge AI), plus "spreadsheet basics" explicitly listed as a required skill, and inter-annotator agreement metrics tracked by hand/spreadsheet per the source.
   - Source: search summary citing talentsforai.com / coursiv.io / metaintro.com AI-trainer job analyses (2026)
   - computer-centric: yes

7. **AI Video/Image generation specialists are now the fastest-growing AI-adjacent skill category**: A wholly new production role (prompting, curating and editing generative video/image output) has appeared with the highest year-over-year growth rate among AI job skills tracked.
   - Evidence: "AI Video Specialist – 329% YoY growth (fastest AI skill category)"; "AI Image Generation/Editing – 95% YoY growth"
   - Screens and tools involved: not itemized in source; implied generative tools plus standard NLE/editing software
   - Source: https://www.herohunt.ai/blog/fastest-growing-ai-roles-in-2026-data-and-rankings/ (2026)
   - computer-centric: yes

8. **GEO/AEO Specialist named as a brand-new marketing role**: A role optimizing content specifically for citation by AI answer engines (distinct from classic SEO) is described as having barely existed before 2024.
   - Evidence: "GEO/AEO Specialist (Generative/AI Engine Optimization) – 'Brand-new role that barely existed in 2024'"
   - Screens and tools involved: not itemized in source
   - Source: https://www.herohunt.ai/blog/fastest-growing-ai-roles-in-2026-data-and-rankings/ (2026)
   - computer-centric: yes

9. **AI governance/ethics and AI security/red-team roles growing at double-digit to triple-digit rates**: Distinct compliance- and safety-facing job titles are appearing as a hiring category, separate from engineering roles.
   - Evidence: "AI Governance/Ethics Specialist – ~45% YoY growth"; "AI Security/Red Team Specialist — Enterprise AI security roles at 124% YoY growth"
   - Screens and tools involved: not itemized in source
   - Source: https://www.herohunt.ai/blog/fastest-growing-ai-roles-in-2026-data-and-rankings/ (2026)
   - computer-centric: yes (job function is compliance-oriented but role itself is screen-based, evaluating AI system outputs)

10. **AI agent traffic to retail sites is surging and converting better, but tooling for it is uneven**: Merchants are seeing a large, measurable shift in the share of site visits coming from AI agents rather than humans, with conversion behavior flipping from negative to positive within a year.
    - Evidence: "AI traffic to US retail sites rose 393 percent year over year in the first quarter of 2026" and conversions moved "from negative 38% in March 2025 to positive 42% in March 2026."
    - Screens and tools involved: standard e-commerce analytics dashboards, now needing to separate agent vs. human traffic — a distinction most existing analytics tooling was not built for.
    - Source: https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce (2026)
    - computer-centric: yes

11. **Platform-default rollout dominates llms.txt adoption; organic small-merchant adoption lags behind**: Most sites that now serve an llms.txt file got it because their platform pushed it automatically, not because a person configured it — meaning the "agent-readiness" work most small businesses are not doing themselves.
    - Evidence: "in late April and early May 2026, Shopify silently pushed llms.txt to every store on the platform by default" and "More than 7.3 million live sites now serve llms.txt files, nearly matching the count of active Shopify stores, suggesting most adoption comes from platform defaults rather than merchant initiative."
    - Screens and tools involved: none — this is precisely the gap: no dashboard or workflow yet for merchants to manage or verify their own agent-facing files.
    - Source: https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce (2026)
    - computer-centric: yes

12. **A hard platform divide leaves most e-commerce software without any agent-facing surface**: Only one major platform ships agent-readiness infrastructure by default; the rest return errors, meaning most small/independent stores on other stacks have zero support.
    - Evidence: "Only Shopify merchants automatically receive agentic commerce infrastructure. WooCommerce, Magento, BigCommerce, Salesforce, and commercetools all return 404 errors for these files—creating a competitive gap in AI agent readiness."
    - Screens and tools involved: store admin panels on WooCommerce/Magento/BigCommerce; no native agent-file editor exists on those platforms per this source.
    - Source: https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce (2026)
    - computer-centric: yes

13. **General llms.txt adoption across the open web is still small and slow, and independently found not to move AI-citation outcomes**: Actual measured adoption (excluding one platform's default push) is under 6% even among top sites, and site owners doing it by hand see no proven benefit yet.
    - Evidence: "5.61% of top 10,000 websites have valid llms.txt (as of June 2026)" with WordPress (the platform most small/solo sites use) at only "8.7%" hand-adoption, and "Independent research found 'no measurable improvement in AI citations from publishing llms.txt.'"
    - Screens and tools involved: none standardized; site owners generate the file ad hoc via tools like Firecrawl or manual authoring per the source.
    - Source: https://caseyrb.com/blog/state-of-llms-txt-adoption/ (June 2026) and https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce (2026)
    - computer-centric: yes

14. **Universal/agentic commerce protocols are being announced and turned on in real time during 2026, ahead of most merchant tooling**: Two major, dated protocol moments happened within months of each other, signaling the infrastructure layer is still being built while day-to-day workflows for merchants have not caught up.
    - Evidence: "January 11, 2026: Google announced Universal Commerce Protocol (UCP) at NRF" and "March 24, 2026: Shopify enabled Agentic Storefronts by default for eligible US merchants."
    - Screens and tools involved: merchant admin toggles (Shopify), no visible workflow yet for non-Shopify merchants.
    - Source: https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce (2026)
    - computer-centric: yes

15. **Prompt engineer as a standalone title has largely dissolved even as the underlying skill persists**: A title that was itself a "new role" signal in 2023–2024 has already faded from employer hiring plans, illustrating how fast these job-title signals turn over.
    - Evidence: "Prompt engineer 'dropped out of the list' of planned hires in Microsoft's 2025 Work Trend Index. The skill persists but the job title largely dissolved."
    - Screens and tools involved: n/a
    - Source: search summary citing Microsoft 2025 Work Trend Index, referenced via ilinmaks.com (2025/2026)
    - computer-centric: yes

16. **Chief AI Officer has moved from rare to a quarter of companies**: A dated, specific executive title tracking AI oversight is now common enough to be treated as a baseline stat, not a novelty.
    - Evidence: "Chief AI Officer (CAIO) — 'One in four companies now have a CAIO'"
    - Screens and tools involved: n/a
    - Source: https://www.herohunt.ai/blog/fastest-growing-ai-roles-in-2026-data-and-rankings/ (2026)
    - computer-centric: no (executive/organizational signal, not itself a screen-based workflow)

17. **Entry-level access to these new AI jobs is shrinking even as postings grow**: The job-title growth is not opening junior pathways; it is concentrating in experienced hires, which matters for who can actually staff the new roles above.
    - Evidence: "Employment gap for ages 22-25 in AI roles widened from 13% to 19% year-over-year. Only 3% of ML engineer and 2% of AI Product Manager postings target entry-level."
    - Screens and tools involved: n/a
    - Source: search summary citing 2026 AI job-market analysis, via ilinmaks.com (2026)
    - computer-centric: no

## Territories the evidence suggests

1. No system of record for "define -> deploy -> evaluate -> optimize" agent-operator workflows; operators stitch together Clay/n8n/Gumloop/Lindy/chat consoles by hand.
2. Small/independent merchants on non-Shopify platforms (WooCommerce, Magento, BigCommerce) have no native way to produce, verify or manage agent-facing storefront files while AI shopping traffic is rising fast.
3. Annotation/AI-trainer contractors rely on spreadsheets and separate annotation tools with no unified workflow for tracking agreement, pay and task assignment across marketplaces.
4. Enterprises naming "agent owners" have no standard tooling for agent reliability, cost, and release monitoring distinct from MLOps stacks (per the AgentOps Engineer listing).
5. Fast title churn (prompt engineer's rise and fall) suggests any tooling built for a specific job title risks being obsolete within 12-18 months; workflows and tasks are more durable signals than titles.

## Notes

- Several figures (agent-owner 56%/11% stat, agentic AI 280% growth, entry-level gap, title-count tripling) came through search-engine AI summaries rather than a directly opened primary source with visible methodology; treated as `[unverified]` where marked above and should be re-verified against Lightcast/Indeed Hiring Lab primary data before relying on them.
- metaintro.com's "AI Trainer Roles Hit 150% Growth" page returned HTTP 429 on fetch attempt and could not be opened directly; the 283% cross-border growth and $31.24/hr figures came from the initial search summary only, not a verified page read.
- GEO/AEO specialist and AI video specialist figures came from a single aggregator (herohunt.ai) without a visible primary job-board citation; worth cross-checking against Indeed Hiring Lab or Lightcast directly.
- Did not find direct evidence (job postings quoted verbatim) for trades, logistics, healthcare administration or energy-specific new titles within the search budget available; this gap remains open.
- WebSearch tool budget was exhausted partway through research (shared session-wide limit), which cut short planned searches on generative-engine optimization job boards, human-review-queue bottleneck case studies, and Stripe/MCP agent-commerce product details; findings 8, 10-14 rely on sources found before the cutoff.

<!-- COMPLETE -->
