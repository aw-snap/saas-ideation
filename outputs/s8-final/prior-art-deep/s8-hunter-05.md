# Prior-art hunt: s8-hunter-05 (deep mode)

### I-1050 Built on Jev
Verdict: direct-competitor

Closest products:
- Reflex-S1 (https://github.com/gowtham-source/reflex-s1) — an explicitly-named "open alternative to Jev," a non-generative System 1 decision engine (<12ms) for per-event agent decisions.
- System1-mcp (https://github.com/ericmaddox/system1-mcp) — MCP tool server exposing fast_guard/fast_judge/fast_verify/fast_score reflex tools (~124ms warm) for the same "judge every event" niche.
- Jev / TypeSafe AI itself (https://www.techtarget.com/it-infrastructure/news/366650696/Jev-decision-model-touted-as-quicker-cheaper-LLM-alternative) — the underlying model the idea is "built on."

Note: I-1050 is a platform concept, not a specific product, but the exact mechanism (fast reflex layer judging every event, System2 escalation) already has live open-source implementations sitting directly on/alongside Jev.

### I-2052 Bounty Passport
Verdict: adjacent-exists

Closest products:
- HackerOne reputation/signal system (https://www.hackerone.com/bug-bounty-programs) — penalizes low-quality/fake reports via reputation score and submission caps, live, same "AI slop" pain, but reputation-based not a refundable per-submission stake.
- Bugcrowd CrowdMatch / signal-based ranking (https://socket.dev/blog/ai-slop-polluting-bug-bounty-platforms) — ranks researcher trustworthiness, no staking or automated reproduction bonus.
- Bugbop (https://news.ycombinator.com/item?id=46598427) — "only pay when valid vulnerabilities are found," closer to pay-on-success than to a forfeitable bond, and not agent/x402-native.

Note: The pain (AI slop flooding bounty triage) and even the reputation-gating concept are live and widely deployed, but no found product uses a refundable per-submission x402 stake with automated reproduction-triggered forfeiture/bonus.

### I-3026 Redaction Relay
Verdict: direct-competitor

Closest products:
- RedactLocal (https://www.redactlocal.com/) — "AI-safe document pseudonymization for lawyers": replaces identifying details locally before anything reaches an AI, then restores real values locally, 100% offline. Matches niche (legal/professional) and mechanism (local strip-then-reinsert) almost exactly.
- Redacta (https://getredacta.com/) — scrubs names, SSNs and account numbers locally before text reaches ChatGPT/Claude/Gemini, targeted at professionals.
- Justee (https://justee.ai/pii-redaction/redact-client-information-before-using-ai-law-firm) — removes names, SSNs and 30+ PII types for law-firm AI use, free, no sign-up.

Note: RedactLocal in particular already ships the exact "local strip identifying facts, send to cloud model, reinsert real values" loop for the same lawyer/CPA buyer that I-3026 targets.

### I-3555 No-API Portal MCP Adapter
Verdict: direct-competitor

Closest products:
- Anchor Browser "Turn Any Website Into an MCP Tool" (https://anchorbrowser.io/blog/turn-any-website-into-mcp-tool-anchor-browser) — cloud browser agent that logs into locked portals (explicitly cites payer portals like Availity) and exposes reads/writes as MCP tools callable by any AI client; same mechanism (computer-use login + tool exposure) and overlapping niche.
- Browserbase MCP server / Stagehand (https://www.browserbase.com/mcp) — hosted browser-as-MCP-tool infra letting agents navigate and act on any site without an API, general-purpose competitor to the adapter layer.
- UiPath Computer Vision / screen-scraping RPA (https://www.uipath.com/blog/rpa/screen-scraping-software-everything-you-need-to-know) — older but live mechanism for wrapping legacy desktop apps (Dentrix/Yardi-style) without an API, sold per-connector to vendors/IT shops.

Note: Anchor Browser already sells the core mechanism (computer-use login to a locked portal, exposed as callable MCP tools to any AI stack) and names Availity-style payer portals as a target use case.

### I-5203 Scope Gate for Your Own Agent
Verdict: adjacent-exists

Closest products:
- Mandate (https://github.com/Ivan825/Mandate) — open-source "scoped, revocable spending authority for AI agents": per-transaction/daily/lifetime limits, merchant scope, hours, human-approval threshold, enforced on every purchase via MCP/REST/virtual card. Near-identical mechanism, but a dev-infra library, not a packaged consumer subscription app.
- AP2 (Google Agent Payments Protocol) and ACP (OpenAI/Stripe) mandates (https://eco.com/support/en/articles/14839409-ai-agent-spend-controls) — signed mandates with price ceiling and expiry, live and widely referenced, but scoped to payment authorization rather than gating every proposed agent action.
- Permit.io / SandBase pre-action authorization (https://blog.sandbase.ai/pre-action-authorization-ai-agents/, https://www.permit.io/ai-access-control) — deterministic policy gate checking a tool call against granted scope before execution; same "intercept before execution" mechanism, sold to developers/enterprises rather than consumers.

Note: The scope-gate mechanism (mandate + pre-action interception) is live in several B2B/dev-infra products and in payment-mandate protocols; no found product packages it as a consumer subscription app for personal agents specifically.

```json
[
  {"id": "I-1050", "verdict": "direct-competitor", "competitors": ["Reflex-S1 (https://github.com/gowtham-source/reflex-s1)", "System1-mcp (https://github.com/ericmaddox/system1-mcp)", "Jev / TypeSafe AI (https://www.techtarget.com/it-infrastructure/news/366650696/Jev-decision-model-touted-as-quicker-cheaper-LLM-alternative)"], "note": "Open-source 'System 1 reflex layer' implementations already sit directly on/beside Jev, judging every event with a fast model and escalating to a slower one, the exact mechanism described."},
  {"id": "I-2052", "verdict": "adjacent-exists", "competitors": ["HackerOne reputation scoring (https://www.hackerone.com/bug-bounty-programs)", "Bugcrowd CrowdMatch (https://socket.dev/blog/ai-slop-polluting-bug-bounty-platforms)", "Bugbop (https://news.ycombinator.com/item?id=46598427)"], "note": "AI-slop bounty triage pain and reputation-based gating are already live, but no product found uses a refundable per-submission x402 stake with automated-reproduction forfeiture."},
  {"id": "I-3026", "verdict": "direct-competitor", "competitors": ["RedactLocal (https://www.redactlocal.com/)", "Redacta (https://getredacta.com/)", "Justee (https://justee.ai/pii-redaction/redact-client-information-before-using-ai-law-firm)"], "note": "RedactLocal already ships local strip-then-reinsert redaction for lawyers/CPAs sending drafts to cloud AI, the same niche and mechanism as Redaction Relay."},
  {"id": "I-3555", "verdict": "direct-competitor", "competitors": ["Anchor Browser MCP (https://anchorbrowser.io/blog/turn-any-website-into-mcp-tool-anchor-browser)", "Browserbase MCP/Stagehand (https://www.browserbase.com/mcp)", "UiPath screen-scraping RPA (https://www.uipath.com/blog/rpa/screen-scraping-software-everything-you-need-to-know)"], "note": "Anchor Browser already logs into locked portals like Availity via computer use and exposes reads/writes as MCP tools for any AI client, the core claimed mechanism."},
  {"id": "I-5203", "verdict": "adjacent-exists", "competitors": ["Mandate (https://github.com/Ivan825/Mandate)", "AP2/ACP payment mandates (https://eco.com/support/en/articles/14839409-ai-agent-spend-controls)", "Permit.io / SandBase pre-action authorization (https://www.permit.io/ai-access-control)"], "note": "Scoped mandate plus pre-action interception already exists as dev-infra and payment protocols; no found product packages it as a consumer subscription app for personal agents."}
]
```
<!-- COMPLETE -->
