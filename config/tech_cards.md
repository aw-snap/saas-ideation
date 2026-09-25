# Tech cards

Written by the S1 tech-unlocks cartographer from the scout files `outputs/s1-discover/scouts/s1-scout-tech-unlocks-01.md` through `-05.md`. Every source link is copied from those files. `[unverified]` means a scout could not confirm the value from a primary source, or the scouts did not report it at all. The window for "Novel" is capabilities since about 2025-03. Cards dated earlier are marked **pre-window** and belong to the Balanced track.

Maturity scale: **demo-grade** means preview, early access or unreliable. **Production** means GA with paying users. **Production-adjacent** means widely used, but reliability is self-reported or not GA.

---

## Computer-use and browser agents

### TC-01 — Claude computer-use API (original beta)
- **Capability:** the model views a screenshot, then moves the cursor, clicks and types through an API tool.
- **First available:** 2024-10 (pre-window baseline).
- **Maturity:** demo-grade. The vendor called it "cumbersome and error-prone" (OSWorld 14.9%).
- **Cost:** same token price as Claude 3.5 Sonnet.
- **Example unlock:** scripting screen-level automation through an API.
- **Source:** https://www.anthropic.com/news/3-5-models-and-computer-use

### TC-02 — Claude Sonnet 4.5 computer use (61.4% OSWorld)
- **Capability:** desktop and browser computer use at 61.4% on OSWorld, up from 42.2% four months earlier. The model can stay on a multi-step task for more than 30 hours.
- **First available:** 2025-09.
- **Maturity:** production-adjacent. Roughly 4 in 10 benchmark tasks still fail.
- **Cost:** $3 per million input tokens, $15 per million output tokens.
- **Example unlock:** long-running agents that operate web portals and desktop apps with no API.
- **Source:** https://www.anthropic.com/news/claude-sonnet-4-5

### TC-03 — Claude for Chrome (in-browser agent)
- **Capability:** a browser extension that clicks, fills in forms, and handles email and calendar inside the user's own browser session.
- **First available:** 2025-08 (pilot); 2025-12 (Pro, Team and Enterprise).
- **Maturity:** production. The prompt-injection success rate is 11.2% after mitigations, down from 23.6%.
- **Cost:** bundled with a Claude subscription. There is no separate price.
- **Example unlock:** knowledge workers delegate routine browser chores while staying logged in as themselves.
- **Source:** https://claude.com/blog/claude-for-chrome

### TC-04 — Gemini 2.5 Computer Use model
- **Capability:** a UI-action model for browsers and mobile, with low latency. Google says it leads on Online-Mind2Web and WebVoyager.
- **First available:** 2025-10.
- **Maturity:** demo-grade (public preview). It is browser-only and "not yet optimized for desktop OS-level control."
- **Cost:** `[unverified]`.
- **Example unlock:** fast web-form agents that don't need native desktop control.
- **Source:** https://deepmind.google/models/gemini/computer-use/

### TC-05 — UI-TARS-1.5 / UI-TARS-2 (open GUI-agent weights)
- **Capability:** open-weight GUI grounding and action model. Scores: OSWorld 42.5%, Windows Agent Arena 42.1%, AndroidWorld 64.2%, WebVoyager 84.8%.
- **First available:** 2025-04 (v1.5); 2025-09 (v2 announced).
- **Maturity:** moving from research-grade toward production use in agent stacks.
- **Cost:** free weights. You pay for self-hosted GPU.
- **Example unlock:** a private, local agent that operates desktop and mobile apps without screenshots leaving the machine.
- **Source:** https://github.com/bytedance/UI-TARS

### TC-06 — browser-use (open-source browser agent framework)
- **Capability:** a Python library that lets an LLM drive a browser. It has 116k GitHub stars and a hosted cloud API.
- **First available:** 2024 `[unverified month]`. Still shipping actively through 2026.
- **Maturity:** production-adjacent. Its benchmarks are self-reported.
- **Cost:** free (MIT license), or $0.02 per browser-hour in the cloud with $15 in starter credit.
- **Example unlock:** a small team automates any web workflow for cents per hour.
- **Source:** https://github.com/browser-use/browser-use

### TC-07 — Skyvern (browser agent for legacy and no-API portals)
- **Capability:** Playwright plus an LLM and computer vision for forms, logins and file downloads. It scores 64.4% overall on WebBench.
- **First available:** `[unverified month]`. The repo was active 2024–2026.
- **Maturity:** production-adjacent, either self-hosted or on Skyvern Cloud.
- **Cost:** free under AGPL-3.0. Cloud pricing is `[unverified]`.
- **Example unlock:** pulling insurance quotes, registering on government portals, and downloading invoices across many sites.
- **Source:** https://github.com/Skyvern-AI/skyvern

### TC-08 — Stagehand SDK and Browserbase cloud browsers
- **Capability:** `act()`, `observe()` and `extract()` on top of Playwright, plus a hosted headless-browser fleet that runs 35M+ sessions a month for 10,000+ customers.
- **First available:** `[unverified month]`. In production through 2026.
- **Maturity:** production, with paying enterprise customers (Microsoft, Ramp, Amplitude).
- **Cost:** the SDK is free open source. Browserbase pricing is `[unverified]`.
- **Example unlock:** adding natural-language browser steps to an existing Playwright codebase without running your own browsers.
- **Source:** https://github.com/browserbase/stagehand ; https://www.browserbase.com/

## Agent protocols, identity and agents as customers

### TC-09 — MCP authorization (OAuth 2.1 and later revisions)
- **Capability:** standard OAuth-based authorization for MCP tool calls: dynamic client registration (2025-03), then resource-server rules with RFC 8707 (2025-06), then Client ID Metadata Documents (2025-11).
- **First available:** 2025-03. Matured by 2025-11.
- **Maturity:** on a production track, but the spec is still changing.
- **Cost:** free, open spec.
- **Example unlock:** a SaaS product exposes itself to agents with a real permissions model instead of shared API keys.
- **Source:** https://modelcontextprotocol.info/specification/2025-11-25/changelog/

### TC-10 — Auth0 "Auth for MCP"
- **Capability:** a drop-in identity layer that authenticates and authorizes every MCP client call.
- **First available:** `[unverified]`. It appears in a May 2026 product roundup.
- **Maturity:** demo-grade (early access).
- **Cost:** `[unverified]`.
- **Example unlock:** a small team ships an authenticated MCP server without building its own OAuth server.
- **Source:** https://www.okta.com/newsroom/articles/auth0-may-2026-product-innovations/

### TC-11 — MCP server registry (about 31k distinct servers)
- **Capability:** a searchable catalog of pre-built MCP tool servers. Its 101,219 entries collapse to 31,309 distinct servers, 23% of which have no source repo.
- **First available:** `[unverified month]`. Measured 2026-04 to 2026-09.
- **Maturity:** production infrastructure, but discovery and trust signals are immature.
- **Cost:** free.
- **Example unlock:** builders reuse existing tool servers instead of writing wrappers from scratch.
- **Source:** https://dev.to/leroy_jenkins_951c84b2838/i-counted-the-mcp-registry-101219-entries-are-31309-servers-and-23-have-no-source-repo-33a6

### TC-12 — Agentic Commerce Protocol (ACP) and ChatGPT Instant Checkout
- **Capability:** an LLM agent completes checkout inside the chat. The protocol is open (Apache 2.0) and works with non-Stripe payment providers.
- **First available:** 2025-09.
- **Maturity:** production. It is live with Etsy and rolling out to Shopify merchants. Salesforce joined on 2025-10-14.
- **Cost:** standard card-processing fees.
- **Example unlock:** a merchant becomes purchasable inside a chat assistant without a separate integration for each agent platform.
- **Source:** https://stripe.com/newsroom/news/stripe-openai-instant-checkout

### TC-13 — Agent Payments Protocol (AP2)
- **Capability:** signed Intent, Cart and Payment mandates that authorize agent purchases in a verifiable way, independent of payment method.
- **First available:** 2025-09.
- **Maturity:** production partners are onboarding, but real transactions are limited. It had 60+ partners at launch and 100+ by 2025-10.
- **Cost:** free protocol. Fees come through the existing payment rails.
- **Example unlock:** merchants and payment providers accept agent-initiated purchases with auditable user consent.
- **Source:** https://www.digitalcommerce360.com/2025/09/19/google-ai-payments-protocol-ap2/

### TC-14 — Card-network agent payments (Mastercard Agent Pay, Visa Intelligent Commerce and Trusted Agent Protocol)
- **Capability:** network-level tokens and authentication that bind a card to a specific agent, merchant scope and consent policy, and let merchants tell legitimate agents from bots.
- **First available:** 2025-04 (Mastercard on 04-29, Visa on 04-30). Visa's Trusted Agent Protocol followed in 2025-10.
- **Maturity:** rolling out in production, with mainstream adoption targeted for 2026.
- **Cost:** `[unverified]`, through existing network fees.
- **Example unlock:** checkout can accept verified purchasing agents while still blocking bot fraud.
- **Source:** https://www.digitalcommerce360.com/2025/10/16/visa-mastercard-both-launch-agentic-ai-payments-tools/

### TC-15 — x402 (HTTP 402 micropayments)
- **Capability:** stablecoin payment per request inside the normal HTTP request and response cycle.
- **First available:** 2025-05. The x402 Foundation launched 2025-09 with 22 members.
- **Maturity:** early production. Usage figures of 165M transactions and about $50M are `[unverified]`, and Chainalysis attributes much of the volume to meme coins.
- **Cost:** near-zero fees `[unverified exact]`.
- **Example unlock:** an API or content owner charges agents per call with no subscription or signup.
- **Source:** https://blog.cloudflare.com/x402/

### TC-16 — Cloudflare default AI-bot blocking and pay-per-crawl
- **Capability:** publishers block AI crawlers or charge them for access. From 2026-09-15, "mixed-use" crawlers are blocked by default on pages that host ads.
- **First available:** 2025-07.
- **Maturity:** production, and still changing (renamed "Pay Per Use" in 2026).
- **Cost:** `[unverified]`, part of Cloudflare plans.
- **Example unlock:** a site owner charges for or controls how much agent and crawler traffic it serves.
- **Source:** https://blog.cloudflare.com/introducing-pay-per-crawl/ ; https://fastcrw.com/blog/cloudflare-ai-crawler-block-september-2026

### TC-17 — Okta for AI Agents and Agent SSO (non-human identity)
- **Capability:** treats agents as first-class identities, with SSO based on the Cross App Access standard.
- **First available:** 2025-04 (announced). Generally available 2026-04 (Okta for AI Agents) and 2026-08 (Agent SSO).
- **Maturity:** production.
- **Cost:** `[unverified]`, enterprise pricing.
- **Example unlock:** IT gives each agent its own governed identity instead of sharing human credentials.
- **Source:** https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/

### TC-18 — Agent2Agent (A2A) protocol
- **Capability:** discovery, messaging and task coordination between agents from different vendors.
- **First available:** 2025-04. Moved to the Linux Foundation in 2025-06.
- **Maturity:** production. Over 150 organizations have adopted it, with enterprise production use reported (report date `[unverified]`).
- **Cost:** free, open spec.
- **Example unlock:** multi-agent systems interoperate without custom point-to-point bridges.
- **Source:** https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/ ; https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year

## On-device, open-weight and economics

### TC-19 — Chrome built-in AI (Gemini Nano Prompt, Summarizer and Writer APIs)
- **Capability:** an on-device LLM inside Chrome for summarizing, translating and detecting language. From Chrome 140 it can run on CPU alone.
- **First available:** 2025-06 (Chrome 138). CPU support in Chrome 140 `[unverified month]`.
- **Maturity:** production (stable Chrome).
- **Cost:** free. It runs on the user's own machine.
- **Example unlock:** a web app adds private text AI with no server bill and no data leaving the browser.
- **Source:** https://developer.chrome.com/docs/ai/built-in ; https://developer.chrome.com/blog/gemini-nano-cpu-support

### TC-20 — Apple Foundation Models framework
- **Capability:** Swift access to the roughly 3B-parameter on-device Apple Intelligence model for extraction, summarizing and classifying. It is not meant for world knowledge.
- **First available:** 2025-06 (WWDC25).
- **Maturity:** production (shipped in the SDK).
- **Cost:** free on-device inference.
- **Example unlock:** an iOS or macOS app gets private AI features with no backend.
- **Source:** https://developer.apple.com/videos/play/wwdc2025/286/

### TC-21 — Copilot+ PC NPUs (40+ TOPS)
- **Capability:** local inference on Windows laptops using NPUs: Intel Core Ultra 200V (48 TOPS), AMD Ryzen AI 300 (50 TOPS), Snapdragon X Elite (45 TOPS).
- **First available:** the 2024–2025 hardware generation (pre-window) `[unverified month]`.
- **Maturity:** production hardware. The TOPS figures are `[unverified]` against Microsoft's own sources.
- **Cost:** included in the laptop price.
- **Example unlock:** Windows software ships offline transcription and text AI features.
- **Source:** https://windowsforum.com/threads/copilot-pcs-and-npus-redefining-the-2025-best-ai-laptop-with-40-tops.389452/

### TC-22 — OpenAI gpt-oss-120b and gpt-oss-20b (open weights)
- **Capability:** open-weight reasoning models under Apache 2.0. The 120b model runs on a single 80GB GPU. The 20b model fits in 16GB and is roughly o3-mini level. Both have 131k context.
- **First available:** 2025-08.
- **Maturity:** production.
- **Cost:** free weights. You pay for self-hosted compute.
- **Example unlock:** confidential documents are handled by a capable reasoning model on one workstation.
- **Source:** https://openai.com/index/introducing-gpt-oss/

### TC-23 — Cheap LoRA and QLoRA fine-tuning (Unsloth)
- **Capability:** fine-tunes a 7–8B model in 1–2 hours on 8GB of VRAM, or a 70B model with QLoRA on one H100.
- **First available:** the tooling matured through 2025 `[unverified month]`.
- **Maturity:** production.
- **Cost:** under $10 for a 7B model, $15–30 for 70B QLoRA, or free on your own GPU `[unverified, aggregator]`.
- **Example unlock:** a two-person team tunes a model on proprietary domain text for under $50.
- **Source:** https://www.promptquorum.com/local-llms/fine-tuning-local-llms-lora

### TC-24 — OpenAI hosted fine-tuning (closing to new users)
- **Capability:** hosted supervised fine-tuning (GPT-4o-mini) and reinforcement fine-tuning (o4-mini) for existing users.
- **First available:** pre-window. It stopped accepting new users in 2026-05.
- **Maturity:** production, but being wound down.
- **Cost:** $3 per million training tokens. Inference runs at about twice the base price ($0.30 input and $1.20 output per million tokens) `[unverified, aggregator]`.
- **Example unlock:** only for teams that already have access. New teams have to use open-weight tuning (TC-23).
- **Source:** https://the-rogue-marketing.github.io/openai-api-updates-and-pricing-october-2025/

### TC-25 — 1M-token context and the collapse in inference prices
- **Capability:** a whole contract set, codebase or medical record fits in one prompt with no chunking. The price of the same quality of output falls about 10x a year (a GPT-3-level model went from $60 to $0.06 per million tokens between 2021 and 2024).
- **First available:** 2025 for the Gemini 2.5 generation `[unverified month]`. Epoch AI's analysis is from 2025-03.
- **Maturity:** production.
- **Cost:** Gemini 2.5 Flash at $0.15 input and $0.60 output per million tokens `[unverified, aggregator]`.
- **Example unlock:** bulk document review and triage becomes affordable for small teams.
- **Source:** https://www.datastudios.org/post/google-gemini-context-window-token-limits-model-comparison-and-workflow-strategies-for-late-2025 ; https://epoch.ai/publications/the-plunging-price-of-thought

### TC-26 — Fast local inference engines (llama.cpp and Ollama with GGUF)
- **Capability:** serves quantized models at 50–250 tokens/sec on one consumer GPU or an Apple M-series chip. Q4_K_M cuts memory by about 75% with under 1% quality loss.
- **First available:** pre-window (mature by 2024), with benchmarks through 2025–2026.
- **Maturity:** production.
- **Cost:** free. Runs on consumer hardware.
- **Example unlock:** a law, therapy or accounting practice runs AI on its own hardware.
- **Source:** https://inventivehq.com/blog/ollama-vs-llama-cpp-vs-lm-studio-benchmark

### TC-37 — Gemma 3 (open weights, small, 128K context)
- **Capability:** 1B, 4B, 12B and 27B multilingual open models. The 4B and larger have 128K context. Quantized versions run on phones and laptops.
- **First available:** 2025-03.
- **Maturity:** production.
- **Cost:** free weights. Runs on consumer hardware.
- **Example unlock:** a laptop or phone app understands long local documents without cloud calls.
- **Source:** https://venturebeat.com/ai/google-unveils-open-source-gemma-3-model-with-128k-context-window

## Realtime voice and speech

### TC-27 — OpenAI gpt-realtime (speech-to-speech API)
- **Capability:** a native speech-to-speech model with function calling and better instruction following.
- **First available:** 2025-08 (GA).
- **Maturity:** production.
- **Cost:** $32 per million audio input tokens and $64 per million output, about $0.05 per conversation minute (pricing figure from an aggregator).
- **Example unlock:** phone agents without stitching together separate speech recognition, LLM and text-to-speech.
- **Source:** https://openai.com/index/introducing-gpt-realtime/ ; https://futureagi.com/llm-cost-calculator/openai/gpt-realtime/

### TC-28 — Gemini Live native audio
- **Capability:** native-audio speech-to-speech with 120–180ms round trips, 30 HD voices and 24 languages.
- **First available:** 2025 `[unverified month]`.
- **Maturity:** production.
- **Cost:** about $3 per million audio/video input tokens and $12 per million audio output tokens (2.5 Flash native audio) `[unverified]`.
- **Example unlock:** multilingual voice support with low enough latency for a natural conversation.
- **Source:** https://www.autointerviewai.com/blog/google-gemini-live-voice-to-voice-review-2026 ; https://www.gend.co/blog/enhanced-gemini-models-boost-voice-interactions

### TC-29 — ElevenLabs Conversational AI / ElevenAgents
- **Capability:** a hosted voice-agent platform covering speech recognition, LLM, text-to-speech and telephony.
- **First available:** 2025-02.
- **Maturity:** production.
- **Cost:** $0.08–0.10 per minute, not including LLM costs, which were subsidized at the time and may be charged later.
- **Example unlock:** a small team launches a phone agent without owning the voice stack.
- **Source:** https://elevenlabs.io/blog/we-cut-our-pricing-for-conversational-ai

### TC-31 — Kyutai STT (open-weight streaming speech recognition)
- **Capability:** real-time English and French transcription with about 500ms delay (1B model) and built-in voice activity detection. There is also a 2.6B English model with 2.5s delay.
- **First available:** 2025 `[unverified month]`.
- **Maturity:** production-capable (open weights, self-hosted).
- **Cost:** free. You pay for compute.
- **Example unlock:** on-premises transcription with no per-minute vendor fees.
- **Source:** https://kyutai.org/stt/

### TC-32 — Mistral Voxtral (batch and Realtime)
- **Capability:** open-weight transcription. The Realtime model has about 200ms end-to-end delay, adjustable from 80 to 1200ms. It comes in a 24B size and a 3B edge size.
- **First available:** 2025-07 (batch). The realtime model was reported by 2026-03.
- **Maturity:** production.
- **Cost:** free weights. You pay for self-hosting.
- **Example unlock:** dictation on a device or at the edge for field workers, with audio staying local.
- **Source:** https://mistral.ai/news/voxtral/ ; https://www.forbes.com/sites/ronschmelzer/2026/03/26/mistral-releases-open-weight-voice-ai-built-for-speed/

### TC-38 — ElevenLabs v3 Conversational TTS
- **Capability:** expressive text-to-speech for conversations.
- **First available:** `[unverified]`. The price is a 2026-09 snapshot.
- **Maturity:** production.
- **Cost:** $0.05 per 1,000 characters `[unverified, aggregator]`.
- **Example unlock:** branded-voice phone menus and spoken readback.
- **Source:** https://www.cekura.ai/blogs/elevenlabs-pricing

## Vision, video and documents

### TC-30 — Mistral OCR 3
- **Capability:** parses forms, scanned documents, complex tables and handwriting. It claims a 74% win rate over OCR 2.
- **First available:** 2025-12.
- **Maturity:** production.
- **Cost:** $2 per 1,000 pages, or $1 per 1,000 pages in batch.
- **Example unlock:** turning a pile of scanned invoices into ledger entries for a fraction of a cent per page.
- **Source:** https://mistral.ai/news/mistral-ocr-3/

### TC-33 — Gemini 3 long-video and agentic video understanding
- **Capability:** up to 2M tokens per sequence. The model scans video segments selectively, cutting token use by up to 88% and cost by up to 66%.
- **First available:** 2025-11.
- **Maturity:** production.
- **Cost:** token-based, reduced by the selective scanning.
- **Example unlock:** asking questions of hours of security, inspection or training footage without scrubbing through it.
- **Source:** https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/

### TC-34 — Meta SAM 3 (segment and track by concept)
- **Capability:** give it a noun phrase or an example image, and it returns masks and IDs for every matching instance, with real-time video tracking. It reaches 75–80% of human performance on SA-CO, a benchmark with 270K concepts.
- **First available:** 2025-11.
- **Maturity:** production (open weights, SAM License).
- **Cost:** free. You pay for self-hosting.
- **Example unlock:** counting items on shelves or tracking objects on a site from a text prompt.
- **Source:** https://ai.meta.com/research/publications/sam-3-segment-anything-with-concepts/

### TC-35 — Veo 3 and Sora 2 video generation
- **Capability:** generates short video clips from a prompt.
- **First available:** Veo 3 was repriced in 2025-09. Sora 2 launched in 2025 `[unverified month]`.
- **Maturity:** production (metered APIs, and Sora is bundled in ChatGPT Pro at $200 a month).
- **Cost:** Veo 3 at $0.40/sec and Veo 3 Fast at $0.15/sec `[unverified, aggregator]`. Sora 2 at about $0.10/sec for 720p, and Pro at about $3 per 10-second clip.
- **Example unlock:** synthetic marketing and training clips for about $1 each.
- **Source:** https://vidpros.com/breaking-down-the-costs-creating-1-minute-videos-with-ai-tools/ ; https://www.eesel.ai/blog/sora-2-pricing

### TC-36 — Nano Banana and Nano Banana Pro (Gemini image editing)
- **Capability:** edits and generates images from a prompt.
- **First available:** 2025 `[unverified month]`.
- **Maturity:** production.
- **Cost:** $0.039 per image ($0.0195 in batch). Pro costs $0.15, or $0.24 for 4K `[unverified, aggregator]`.
- **Example unlock:** automated photo cleanup and enhancement at catalog scale.
- **Source:** https://benchlm.ai/media-pricing/nano-banana

---

Card count: 38 (TC-01 to TC-38). The cards are grouped by theme, so the numbers do not run in order.
<!-- COMPLETE -->
