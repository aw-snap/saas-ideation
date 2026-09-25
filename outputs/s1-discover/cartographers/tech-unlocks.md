# Cartographer: tech-unlocks — candidate territories

Source scout files: `outputs/s1-discover/scouts/s1-scout-tech-unlocks-01.md` (computer-use and browser agents), `-02.md` (agent protocols, payments, agents as customers), `-03.md` (on-device, open-weight, fine-tuning, long-context economics), `-04.md` (realtime voice and speech), `-05.md` (vision, video, 3D, document perception). Each territory starts from a capability shipped roughly since March 2025 and works back to who it helps. Every link below is copied from those files. Where a scout marked a claim `[unverified]`, this file repeats the flag. Capability details are in `config/tech_cards.md` (TC ids given per territory).

---

### tech-unlocks-01 — Re-keying insurance quotes across no-API carrier portals
- **Description:** Insurance ops staff and agents log into carrier sites one at a time to pull quotes and re-key them. These sites have no API. Browser agents like Skyvern name this job directly ("insurance quote retrieval", Geico, BCI Seguros) and score 64.4% on WebBench, best on form, login and download tasks. That is still well short of reliable.
- **computer-centric:** yes. All of the work is logging into web portals and filling in forms.
- **Signal:** medium. A vendor names the use case and publishes benchmarks, but the scout found no practitioner quotes.
- **Evidence:**
  - https://github.com/Skyvern-AI/skyvern
- **Tech cards:** TC-02, TC-07
- **Overlap:** this is the same pattern as screen-work's portal territories. Gate B should dedupe against screen-work-01/02 (payer portals).

### tech-unlocks-02 — Registering accounts and submitting forms on government portals
- **Description:** Caseworkers, preparers and ops staff register accounts and submit the same forms on government portals that have no API. Skyvern lists "government portal account registration/forms" as a core use case. Gemini's computer-use model is still browser-only, and desktop-capable agents score only about 61% on OSWorld.
- **computer-centric:** yes. The work happens in government web portals.
- **Signal:** weak. The only evidence is a vendor's use-case list. The scout found no role-level pain evidence.
- **Evidence:**
  - https://github.com/Skyvern-AI/skyvern
  - https://www.anthropic.com/news/claude-sonnet-4-5
- **Tech cards:** TC-02, TC-04, TC-07
- **Overlap:** strong overlap with screen-work-04 (federal portals) and with the weak-signals lens if a filing deadline is involved.

### tech-unlocks-03 — Downloading invoices and statements across many vendor sites
- **Description:** AP clerks and bookkeepers log into dozens of vendor and utility sites every month to download invoices and statements, then key them in. Browser agents now handle the login and download steps (Skyvern names "invoice downloads across sites"), and OCR costs $1–2 per 1,000 pages. That makes the whole fetch, parse and post chain cheap.
- **computer-centric:** yes. The work is web logins, PDF downloads and data entry.
- **Signal:** medium. Both capabilities are proven, but pain quotes from bookkeepers were not captured because the search budget ran out in scout 05.
- **Evidence:**
  - https://github.com/Skyvern-AI/skyvern
  - https://mistral.ai/news/mistral-ocr-3/
- **Tech cards:** TC-07, TC-30
- **Overlap:** continues into tech-unlocks-22 (scan-to-ledger OCR).

### tech-unlocks-04 — Small dev teams replacing brittle RPA and selector scripts
- **Description:** Small engineering and ops teams that can't afford an RPA budget keep Playwright and Selenium scripts alive that break whenever a UI changes. Natural-language browser SDKs such as browser-use, Stagehand and Browserbase make this cheap: $0.02 per browser-hour. Paid infra now runs 35M+ sessions a month for 10,000+ customers.
- **computer-centric:** yes. This is browser automation for web workflows.
- **Signal:** strong. The adoption numbers are large (116k and 25k GitHub stars, 800k weekly SDK downloads), and an Amplitude engineer is quoted.
- **Evidence:**
  - https://github.com/browser-use/browser-use
  - https://github.com/browserbase/stagehand
  - https://www.browserbase.com/
- **Tech cards:** TC-06, TC-08
- **Overlap:** this is infrastructure under 01–03. The territory here is the builder's own maintenance pain.

### tech-unlocks-05 — Private, self-hosted control of native desktop and mobile apps
- **Description:** Teams that can't send screenshots of sensitive screens to a cloud vendor still need agents to operate native desktop and mobile apps, not just browsers. Gemini computer use excludes desktop OS control. UI-TARS-1.5 has open weights and scores 42.5% on OSWorld and 64.2% on AndroidWorld. That makes local GUI agents possible but unreliable.
- **computer-centric:** yes. The agent operates native desktop and mobile applications.
- **Signal:** medium. The capability gap is well documented, but there is no demand evidence from buyers.
- **Evidence:**
  - https://github.com/bytedance/UI-TARS
  - https://deepmind.google/models/gemini/computer-use/
- **Tech cards:** TC-04, TC-05
- **Overlap:** matches screen-work's legacy desktop vertical software, and the on-device privacy theme in 18–20.

### tech-unlocks-06 — Checking whether a computer-use agent's run actually succeeded
- **Description:** Anyone running screen agents in production faces the same problem. The best desktop agents succeed on about 61% of OSWorld tasks (UI-TARS 42.5%), and Anthropic itself called its launch version "cumbersome and error-prone." So someone has to check every run, catch silent failures, and decide what can be left unattended.
- **computer-centric:** yes. The work is reviewing agent sessions on screens.
- **Signal:** medium. The benchmark numbers are solid. How much time operators lose checking runs was not measured.
- **Evidence:**
  - https://www.anthropic.com/news/claude-sonnet-4-5
  - https://www.anthropic.com/news/3-5-models-and-computer-use
  - https://github.com/bytedance/UI-TARS
- **Tech cards:** TC-01, TC-02, TC-05
- **Overlap:** close to 07 (safety review) and to the weak-signals lens (new failure modes created by AI).

### tech-unlocks-07 — Security review before giving a browser agent real credentials
- **Description:** IT and security staff in small organizations must decide whether an agent can use real browser logins for email, calendar and forms. Anthropic's own red-teaming found a 23.6% prompt-injection success rate before mitigations and 11.2% after. The agent now ships to every Pro, Team and Enterprise user.
- **computer-centric:** yes. The work covers browser sessions, credentials and IT policy.
- **Signal:** medium. The attack rates come from the vendor itself. There are no practitioner quotes.
- **Evidence:**
  - https://claude.com/blog/claude-for-chrome
- **Tech cards:** TC-03
- **Overlap:** close to 09 (MCP tool poisoning) and 15 (agent identity), and to screen-work's tiny-org IT and security territories.

### tech-unlocks-08 — Adding auth to an MCP server without building an OAuth server
- **Description:** Small SaaS and API teams that expose their product as an MCP server had to follow three auth spec revisions in 2025: OAuth 2.1 with dynamic client registration, then resource-server rules with RFC 8707, then Client ID Metadata Documents. Auth0's "Auth for MCP" is still early access.
- **computer-centric:** yes. This is developer tooling, and the customers are software agents.
- **Signal:** medium. The spec churn is dated and documented, but there are no developer complaint quotes.
- **Evidence:**
  - https://modelcontextprotocol.info/specification/2025-11-25/changelog/
  - https://www.okta.com/newsroom/articles/auth0-may-2026-product-innovations/
- **Tech cards:** TC-09, TC-10
- **Overlap:** close to 15 (agent identity) and to screen-work's territories for software used by agents.

### tech-unlocks-09 — Tool poisoning and prompt injection in MCP servers
- **Description:** Developers and small-org IT connect third-party MCP servers to Cursor, Claude and other clients. Named CVEs are now shipping: MCPoison, CurXecute (CVSS 8.6) and mcp-remote (CVSS 9.6, OS command injection). In these attacks, malicious instructions hide in tool descriptions that "are invisible to users but visible to AI models."
- **computer-centric:** yes. The attack surface is developer tools and agent configuration.
- **Signal:** strong. The CVEs are named with severity scores, and OWASP documents the attack. The exact months of the CVEs are `[unverified]`.
- **Evidence:**
  - https://www.truefoundry.com/blog/blog-mcp-tool-poisoning-gateway-defense
  - https://owasp.org/www-community/attacks/MCP_Tool_Poisoning
- **Tech cards:** TC-09, TC-11
- **Overlap:** close to 07 and 10, since registry entries without source code make vetting harder.

### tech-unlocks-10 — Finding and vetting MCP servers in a messy registry
- **Description:** Builders who need a pre-built tool server have to search registries where 101,219 entries collapse to 31,309 distinct servers ("overstates the ecosystem by 3.2x"). 23% of them have no source repo. The count also differs from mcp.so's 20,222. Discovery and trust are left to the builder.
- **computer-centric:** yes. This is developer and agent tooling.
- **Signal:** medium. There is one careful audit, but no user complaints.
- **Evidence:**
  - https://dev.to/leroy_jenkins_951c84b2838/i-counted-the-mcp-registry-101219-entries-are-31309-servers-and-23-have-no-source-repo-33a6
- **Tech cards:** TC-11
- **Overlap:** feeds into 09 (poisoning risk).

### tech-unlocks-11 — Making a merchant's catalog purchasable by AI agents
- **Description:** Small merchants and their payment providers now face three agent-checkout standards: ACP (Stripe/OpenAI, live with Etsy and headed to Shopify merchants), AP2 (Google, 60 partners growing to 100+ in about six weeks), and card-network agent tokens. Each has its own mandates, catalogs and consent formats, and small shops have to pick one or implement several.
- **computer-centric:** yes. This is commerce software whose buyer and user is an agent.
- **Signal:** strong. Launches are dated, adoption is fast, and Salesforce joined ACP within two weeks.
- **Evidence:**
  - https://stripe.com/newsroom/news/stripe-openai-instant-checkout
  - https://www.digitalcommerce360.com/2025/09/19/google-ai-payments-protocol-ap2/
  - https://www.salesforce.com/news/press-releases/2025/10/14/stripe-openai-agentic-commerce-protocol-announcement/
- **Tech cards:** TC-12, TC-13, TC-14
- **Overlap:** close to 12 (bot versus agent at checkout). Consumer willingness (48%) is `[unverified]`: https://www.metarouter.io/post/what-is-the-openai-stripe-partnership

### tech-unlocks-12 — Telling legitimate purchasing agents from bot fraud at checkout
- **Description:** Merchants' fraud and ops teams have to let legitimate AI agents buy while still blocking malicious bots. Mastercard Agent Pay (2025-04) and Visa's Trusted Agent Protocol (2025-10) exist "to help merchants distinguish between malicious bots and legitimate AI agents." Automated requests are now over half of all web traffic.
- **computer-centric:** yes. The work is web checkout, fraud tooling and traffic analysis.
- **Signal:** medium. The network launches are dated, and the network targets mainstream adoption for 2026. The traffic figure is a secondary citation `[unverified]`.
- **Evidence:**
  - https://www.digitalcommerce360.com/2025/10/16/visa-mastercard-both-launch-agentic-ai-payments-tools/
  - https://dev.to/trismegistus/the-web-is-drowning-in-bot-traffic-and-ai-agents-are-making-it-worse-12ej
- **Tech cards:** TC-14
- **Overlap:** close to 11 and 13.

### tech-unlocks-13 — API and site owners handling agent traffic: rate limits and per-call billing
- **Description:** API operators see agents fan out across IPs ("3 requests per IP per minute ... 60 requests per minute in total") and chain 10–20 calls, where a single rate-limit error breaks the whole task. They also want to charge per call. x402 (Coinbase, 2025-05; Foundation 2025-09) revived HTTP 402 for per-request stablecoin payments.
- **computer-centric:** yes. This is API infrastructure whose customers are agents.
- **Signal:** medium. The x402 usage numbers are `[unverified]`, and Chainalysis says much of the volume was meme coins. The rate-limiting evidence comes from one vendor blog.
- **Evidence:**
  - https://zuplo.com/blog/rate-limit-ai-agents-beyond-request-counts
  - https://blog.cloudflare.com/x402/
- **Tech cards:** TC-15
- **Overlap:** close to 14 (publishers) and 12.

### tech-unlocks-14 — Publishers deciding whether to block, allow or charge AI crawlers and agents
- **Description:** Content sites and small publishers watch bots pass 57.5% of all traffic `[unverified]`. Cloudflare blocks AI bots by default (2025-07) with pay-per-crawl, and from 2026-09-15 it also blocks "mixed-use" crawlers by default. Meanwhile llms.txt grew 8.8x, yet 97% of those files got zero requests. What a site owner should actually do is unclear.
- **computer-centric:** yes. The work is web infrastructure and site configuration.
- **Signal:** strong. Cloudflare's policy changes are dated, and the llms.txt numbers come from Ahrefs.
- **Evidence:**
  - https://blog.cloudflare.com/introducing-pay-per-crawl/
  - https://fastcrw.com/blog/cloudflare-ai-crawler-block-september-2026
  - https://ai.aeo.press/the-state-of-llms-txt-in-2026
- **Tech cards:** TC-16
- **Overlap:** close to 13. The weak-signals lens may also claim the September 2026 default change.

### tech-unlocks-15 — Governing agent identities in small organizations
- **Description:** IT staff in small organizations share human credentials with bots because they have no agent-identity model. 88% of organizations report suspected or confirmed agent security incidents, yet only 22% treat agents as identity-bearing entities. Okta for AI Agents (GA 2026-04) and Agent SSO (GA 2026-08) are enterprise products.
- **computer-centric:** yes. The work is IT administration and SaaS access control.
- **Signal:** medium. The GA dates are dated. The 88%/22% statistic comes from a secondary blog.
- **Evidence:**
  - https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/
  - https://neuralcoretech.com/ai-agent-identity-governance-2026/
- **Tech cards:** TC-17
- **Overlap:** close to 07, 08, and screen-work's tiny-org IT territories.

### tech-unlocks-16 — Connecting agents from different vendors (A2A)
- **Description:** Integrators building multi-agent systems across vendors used to write point-to-point bridges. A2A (2025-04) moved to the Linux Foundation in 2025-06 with AWS, Microsoft, Salesforce, SAP and ServiceNow as members, and passed 150 organizations in its first year. Year-one production use is reported, mostly in large enterprises.
- **computer-centric:** yes. This is software-to-software coordination.
- **Signal:** weak. There is adoption evidence but no evidence of pain for small buyers, and the date of the year-one report is `[unverified]`.
- **Evidence:**
  - https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
  - https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- **Tech cards:** TC-18
- **Overlap:** close to 08 and 10 (the MCP ecosystem).

### tech-unlocks-17 — Web and iOS developers adding private AI features with no backend
- **Description:** Indie web and iOS developers want summarization, extraction and translation without a server bill or user data leaving the device. Chrome 138 (2025-06) ships Gemini Nano APIs, which also run on CPU from Chrome 140. Apple's Foundation Models framework (WWDC25) exposes a roughly 3B on-device model for free. Copilot+ NPUs (40+ TOPS) add a Windows target.
- **computer-centric:** yes. The features run inside browsers, desktop and mobile apps.
- **Signal:** medium. The platforms are shipping, but developer pain was not quoted. The NPU figures are `[unverified]`.
- **Evidence:**
  - https://developer.chrome.com/docs/ai/built-in
  - https://developer.apple.com/videos/play/wwdc2025/286/
  - https://developer.chrome.com/blog/gemini-nano-cpu-support
- **Tech cards:** TC-19, TC-20, TC-21
- **Overlap:** is the enabling layer for 18–20.

### tech-unlocks-18 — Solo and small-firm lawyers who must keep client data confidential
- **Description:** Solo and small-firm attorneys can't use consumer AI tools when confidentiality "cannot be reasonably assured" (WSBA AO 2025-05). They also need client consent before AI records or transcribes calls (NYC Bar 2025-6). gpt-oss-20b (2025-08) fits in 16GB and matches o3-mini on core reasoning, which makes local processing practical.
- **computer-centric:** yes. The work is drafting documents, reviewing transcripts and case files.
- **Signal:** medium. There are two primary regulatory opinions, but no forum quotes from lawyers.
- **Evidence:**
  - https://www.wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/ao-202505.pdf
  - https://www.nycbar.org/reports/formal-opinion-2025-6-ethical-issues-affecting-use-of-ai-to-record-transcribe-and-summarize-conversations-with-clients/
  - https://openai.com/index/introducing-gpt-oss/
- **Tech cards:** TC-22, TC-26
- **Overlap:** close to 19 and 20, which follow the same privacy-driven local pattern. The overlooked lens may claim solo practitioners.

### tech-unlocks-19 — Therapists drafting session notes without a cloud vendor
- **Description:** Licensed therapists in solo or small practices want session notes in SOAP format without sending PHI to a cloud vendor. The pattern described is a do-it-yourself stack: local Whisper, Llama 3.1, Ollama, Open WebUI and a LUKS-encrypted volume. That is too technical for a solo clinician to assemble and maintain.
- **computer-centric:** yes. The work is writing clinical notes in an EHR or on a desktop.
- **Signal:** weak. The only source is vendor content with no date `[unverified]`.
- **Evidence:**
  - https://localaimaster.com/blog/local-ai-therapists
- **Tech cards:** TC-26, TC-31, TC-32
- **Overlap:** same pattern as 18 and 20. Also close to 25 (on-prem transcription).

### tech-unlocks-20 — Small accounting firms keeping client financials off vendor servers
- **Description:** Small accounting and bookkeeping firms handle bank statements, payroll and W-2s, and they ask: "Can I run AI on my own hardware so my clients' financial data never leaves the building?" The tools that make this possible exist (Ollama, LM Studio, llama.cpp), but local deployment is harder than tutorials suggest.
- **computer-centric:** yes. The work is processing documents and spreadsheets.
- **Signal:** weak. The only source is a vendor blog `[unverified]`.
- **Evidence:**
  - https://jupid.com/blog/local-llm-for-accounting
- **Tech cards:** TC-22, TC-26
- **Overlap:** close to 03 and 22 (document intake), and to 18 and 19.

### tech-unlocks-21 — Small teams tuning or feeding models with their own proprietary text
- **Description:** Two- to three-person teams with domain text (contracts, tickets, records) can now fine-tune with QLoRA for about $10–30, or ingest whole document sets in 1M-token context at $0.15 per million input tokens. OpenAI's hosted fine-tuning closed to new users in 2026-05, which pushes these teams toward open-weight tuning.
- **computer-centric:** yes. This is developer and data work.
- **Signal:** medium. The price trend is well sourced (Epoch AI), but the specific fine-tuning and context prices come from aggregators `[unverified]`.
- **Evidence:**
  - https://www.promptquorum.com/local-llms/fine-tuning-local-llms-lora
  - https://the-rogue-marketing.github.io/openai-api-updates-and-pricing-october-2025/
  - https://epoch.ai/publications/the-plunging-price-of-thought
- **Tech cards:** TC-23, TC-24, TC-25
- **Overlap:** enables 18–20. The long-context part overlaps 23 (claims record summaries).

### tech-unlocks-22 — Bookkeepers and AP clerks keying scanned invoices into the ledger
- **Description:** Bookkeepers and AP clerks still hand-key scanned invoices and forms. Mistral OCR 3 (2025-12) costs $1–2 per 1,000 pages and claims a 74% win rate over its predecessor on forms, tables and handwriting. OCR cost is no longer the barrier to scan-to-ledger automation for small firms.
- **computer-centric:** yes. The work is PDF scans and data entry into accounting software.
- **Signal:** medium. Price and quality are strong evidence, but pain quotes from bookkeepers were not captured.
- **Evidence:**
  - https://mistral.ai/news/mistral-ocr-3/
- **Tech cards:** TC-30
- **Overlap:** continues from 03 and is close to 20. The screen-work lens (retyping) may claim it too.

### tech-unlocks-23 — Claims adjusters catching hallucinated summaries of medical records
- **Description:** Insurance claims adjusters review AI summaries of hundreds of pages of medical records and damage photos. "A smudge on a document ... can lead to a hallucination," producing wrong payouts that "the adjuster takes the hit" for. 98% of adjuster Glassdoor reviews that mention AI are negative, and employment in the sector is down 21% `[unverified BLS relay]`.
- **computer-centric:** yes. The work is reviewing scanned PDFs and checking summaries on screen. Photo review is the non-screen part.
- **Signal:** strong. There are verbatim quotes, a dated Glassdoor dataset (June 2025 to May 2026), and industry rollout (Verisk `[unverified]`).
- **Evidence:**
  - https://www.techspot.com/news/113688-claims-adjusters-ai-making-insurance-process-harder-not.html
  - https://s29.q4cdn.com/767340216/files/doc_news/Verisk-Introduces-New-AI-Tools-to-Streamline-the-Property-Claims-Experience-2025.pdf
- **Tech cards:** TC-30, TC-25
- **Overlap:** also a weak-signals candidate (a new failure mode created by AI). Close to 06, since both are about verifying AI output.

### tech-unlocks-24 — Dental and clinic front desks missing calls
- **Description:** Front desks at small dental practices and clinics miss calls during busy hours and after hours, and callers "just call the next clinic on Google." Realtime voice now costs about $0.05 per minute (gpt-realtime, 2025-08) or $0.08–0.10 per minute plus the LLM (ElevenLabs). Vendors claim a 35% cut in front-desk workload.
- **computer-centric:** no. The pain is phone calls, though bookings land in practice-management software.
- **Signal:** medium. Pricing is sourced from the vendors, but the revenue-loss and outcome figures are vendor marketing `[unverified]`.
- **Evidence:**
  - https://controxai.com/blog/dental-clinic-missed-call-solution
  - https://www.builtwithagents.ai/strategy/dental-clinic-ai-receptionist-35-percent-workload-reduction
  - https://elevenlabs.io/blog/we-cut-our-pricing-for-conversational-ai
- **Tech cards:** TC-27, TC-29
- **Overlap:** the market already has EHR-syncing vendors (Adit, per https://www.cloudtalk.io/blog/best-dental-ai-virtual-receptionist-tools/ `[unverified]`). Close to 26.

### tech-unlocks-25 — Low-cost, on-premises transcription for field and dictation users
- **Description:** Field workers and dictation-heavy roles want transcription without per-minute vendor fees or audio leaving the site. Open-weight ASR now runs in real time: Kyutai STT-1B has about 500ms delay, and Voxtral Realtime about 200ms, with a 3B edge variant. The voice data can stay on the device or on-premises.
- **computer-centric:** no. The input is speech, although the notes end up in software.
- **Signal:** weak. The capability is sourced, but user demand was inferred, not evidenced.
- **Evidence:**
  - https://kyutai.org/stt/
  - https://mistral.ai/news/voxtral/
  - https://www.forbes.com/sites/ronschmelzer/2026/03/26/mistral-releases-open-weight-voice-ai-built-for-speed/
- **Tech cards:** TC-31, TC-32
- **Overlap:** is the transcription layer for 18 (legal calls) and 19 (therapy notes).

### tech-unlocks-26 — Voice-agent builders fighting turn-taking and hidden costs
- **Description:** Developers who deploy phone agents on platforms like Vapi or GoHighLevel get callers and bots talking over each other ("agents keep talking for 2–3 seconds after an interrupt"). They also discover that headline per-minute prices exclude LLM costs. Native-audio models reach 120–180ms, but tuning VAD and barge-in is still done by hand.
- **computer-centric:** no. The end product is a phone conversation, though the builder's tuning happens on screen.
- **Signal:** medium. There are verbatim complaints from builders and users, but the dates are `[unverified]`.
- **Evidence:**
  - https://dev.to/callstacktech/how-to-prioritize-naturalness-in-voice-ai-implement-vad-ibo
  - https://ideas.gohighlevel.com/voice-ai/p/stop-ai-voice-from-interrupting
  - https://elevenlabs.io/blog/we-cut-our-pricing-for-conversational-ai
- **Tech cards:** TC-27, TC-28, TC-29
- **Overlap:** is the supply side of 24.

### tech-unlocks-27 — Reviewing hours of security, inspection and training video
- **Description:** People who review footage (security, inspection, training compliance) scrub through hours of video by hand. Gemini 3 (2025-11) handles up to 2M tokens per sequence, and its "agentic video understanding" scans segments selectively, cutting token use by up to 88% and cost by up to 66%. That makes asking questions of long videos affordable.
- **computer-centric:** no. The source is physical-world footage, though the review happens on a screen.
- **Signal:** weak. The capability is sourced, but no reviewer pain evidence was captured.
- **Evidence:**
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/
- **Tech cards:** TC-33
- **Overlap:** close to 28 (visual counting).

### tech-unlocks-28 — Counting and tracking objects in photos and video for shelf audits and site progress
- **Description:** Retail shelf auditors and construction progress trackers count or track objects by hand. SAM 3 (2025-11, open weights) takes a noun phrase such as "yellow school bus" and returns masks and IDs for every instance, with real-time video tracking. It reaches 75–80% of human performance on SA-CO.
- **computer-centric:** no. The work is about physical-world objects.
- **Signal:** weak. The capability is sourced, but no evidence came from auditors or site managers.
- **Evidence:**
  - https://ai.meta.com/research/publications/sam-3-segment-anything-with-concepts/
- **Tech cards:** TC-34
- **Overlap:** close to 27.

### tech-unlocks-29 — Labeling AI-generated media before the EU AI Act Article 50 deadline
- **Description:** SaaS vendors and marketing teams that ship AI-generated images and video in the EU must disclose that the content is artificial by 2026-08-02 (Article 50), with artistic exemptions. Generation is now cheap: Veo 3 Fast costs $0.15/sec, Sora 2 about $0.10/sec, and Nano Banana about $0.04/image `[unverified pricing]`. The volume of media that needs labels is therefore growing.
- **computer-centric:** yes, partly. The work is inside content pipelines and publishing tools. The scout tagged the rule itself as "no".
- **Signal:** medium. The regulation is a primary source, but no evidence of how teams are handling compliance was found.
- **Evidence:**
  - https://artificialintelligenceact.eu/article/50/
  - https://vidpros.com/breaking-down-the-costs-creating-1-minute-videos-with-ai-tools/
  - https://www.eesel.ai/blog/sora-2-pricing
- **Tech cards:** TC-35, TC-36
- **Overlap:** the weak-signals lens (regulatory deadlines) will likely claim this as well.

---

## Gaps
- **OpenAI Operator / ChatGPT agent and Amazon Nova Act:** the scout could not fetch their launch dates, pricing or benchmarks, so they are absent here (scout 01).
- **Pain quotes from practitioners about agent reliability:** G2 reviews of RPA brittleness, CAPTCHA and 2FA complaints, and job-posting counts were all blocked. Territories 04 and 06 rest on scale and benchmark proxies.
- **Primary sources for agent-economy figures:** the x402 usage numbers, Cloudflare Radar's bot share, MCP hiring pay, and Salesforce's 48% shopper stat are all secondary `[unverified]`. No EU or UK regulator statement on agent-initiated payments was found.
- **Voice regulation and other voice verticals:** FCC/TCPA rules on AI voices, call-recording consent changes, voice-cloning fraud statistics, and restaurant, trades, collections and payer-hold pain were not searched because the budget was exhausted. Deepgram, Cartesia, Sesame, Vapi, Retell, LiveKit and Twilio were not covered. No word error rate (WER) figures were captured.
- **Vision pain quotes and newer tools:** there are no bookkeeper or AP quotes, no C2PA adoption data, no US state deepfake laws, no pricing for image-to-3D or Gaussian-splat tools (Luma, Runway), and no FLUX Kontext or gpt-image data. The 3D-understanding territory is empty.
- **Primary guidance on local processing:** no HHS/OCR, EDPB or EU AI Act text names local or on-device LLMs, so 18–20 rest on bar opinions and vendor write-ups.
- **Recent flagship model pricing:** prices for newer model names (Gemini 3.x, Claude Opus 4.x) could not be confirmed against vendor pages.
<!-- COMPLETE -->
