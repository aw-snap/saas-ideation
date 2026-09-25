### I-5201 Agent Completion Ledger

Verdict: adjacent-exists

Competitors:
- LEGIT Protocol (https://arxiv.org/html/2609.21325) — credentialing/reputation protocol binding certified task outcomes to agent identity; academic/spec-stage, not a live product.
- Assay on Base (https://dev.to/grandionn/i-built-the-missing-trust-layer-for-ai-agents-on-base-stake-escrow-reputation-discovery-1mom) — on-chain 0-1000 trust score from completion rate/quality/stake, same "portable score for marketplace admission" idea but blockchain-native.
- MolTrust (https://aws.amazon.com/marketplace/pp/prodview-baivobboznn4q) — DID/VC-based agent identity with behavioral trust score, different (audit/compliance) framing.

Note: Several live "portable agent trust score" projects already exist (blockchain-staked or DID-based); none confirmed to use a plain witness-agent re-check ledger like this pitch.

### I-5202 Per-Task Purchase Envelopes

Verdict: direct-competitor

Competitors:
- AgentCard (https://agentcard.ai/blog/agentcard-vs-corporate-cards) — virtual cards purpose-built for AI agents with spend caps, merchant restrictions, expiry, and revocation.
- Stripe Issuing for agents (https://ramp.com/blog/virtual-cards-for-ai-agents) — task-scoped virtual card, capped, merchant-locked, expires after one use/day.
- Privacy.com / OpenClaw guide (https://www.privacy.com/blog/openclaw-ai-agent-spending-virtual-card) — merchant-locked single-use cards for agent spend.

Note: Live products (AgentCard, Stripe Issuing agent flows, Privacy.com) already issue merchant-locked, capped, expiring per-task virtual cards for AI purchasing agents — same niche and mechanism.

### I-5203 Scope Gate for Your Own Agent

Verdict: adjacent-exists

Competitors:
- WorkOS AI agent access control (https://workos.com/blog/ai-agent-access-control) — permission/scope management for agents, but developer/enterprise infra, not a consumer local interceptor.
- Google AP2 mandates (https://daily.dev/posts/the-agent-can-pay-but-who-gave-it-permission--tmux5nn9g) — scope/threshold/policy/escalation mandate model, payment-focused not general action gating.

Note: Mandate/scope concepts for agents are well established (AP2, WorkOS); a consumer-facing local gate blocking any out-of-mandate action (not just payments) was not found live.

### I-5204 License Lookup Snapshot Server

Verdict: direct-competitor

Competitors:
- Apify "Public Registry & License Record Parser API" MCP server (https://apify.com/zentrafoundry/public-registry-license-lookup-api/api/mcp) — exposes registry/license lookups as MCP tool with cached, freshness-stamped ("fetched_at", "cached") snapshots.
- Apify "License Status Monitor" (https://apify.com/zentrafoundry/license-status-monitor/api/mcp) — related license monitoring MCP actor.

Note: A live Apify MCP actor already wraps license/registry portals as a cached, freshness-stamped lookup tool for agents — same niche and mechanism as this idea.

### I-5205 Published Consent Record

Verdict: adjacent-exists

Competitors:
- AWS AgentCore Consent Portal (https://builder.aws.com/content/3GRqOXpEtjCjrygdZJA9B1J3PNZ/how-agentcores-consent-portal-lets-your-agent-act-as-the-person-asking) — managed OAuth consent binding for agents, checked via session/token not a published per-site URL record.
- Realeyes, "How to Prove an AI Agent Has User Consent" (https://realeyes.ai/blog/verify-ai-agent-consent/) — discusses signed authorization records bound to account/task, similar concept, unclear if a shipped product.

Note: Consent-binding infra exists (AWS AgentCore), but via OAuth session grants, not a consumer-published, stable-URL consent record that any site fetches directly.

### I-5206 Purchase Mandate Verify Endpoint

Verdict: adjacent-exists

Competitors:
- Agent Payments Protocol / AP2 mandates (checkout.com overview) (https://www.checkout.com/blog/agentic-commerce-questions-answered) — signed mandates for consent/spend limits at checkout, broader payment authorization, not itemized price/quantity verify endpoint.
- Universal Commerce Protocol (https://ucp.dev/documentation/core-concepts/) — passes mandate/token to business to finalize order, general commerce protocol not supplier-specific verify call.

Note: Signed purchase-mandate protocols (AP2, UCP) exist broadly for agentic checkout; no live product found doing a small-wholesale-supplier-specific line-item verify-before-accept endpoint.

### I-5207 Matter-Billed Agent Run Meter

Verdict: adjacent-exists

Competitors:
- agentgateway real-time AI cost controls (https://www.solo.io/blog/building-real-time-ai-cost-controls-with-agentgateway) — per-project/agent budget caps and tracking, but model-spend focused, not cross-tool matter billing.
- Scopable "AI Billing for MSPs" (https://scopable.io/blog/ai-billing-for-msps) — tokens/client budgets/invoice rules, close analog but targets MSPs not solo lawyers/accountants, and centers on token billing not browser-agent run costs.

Note: Client/project budget-capping and rebilling tools exist for AI spend (MSP-focused); none found that specifically attribute cross-tool (browser-agent + API + model) run cost to a legal/accounting matter.

### I-5208 Agent Key Inventory for Solo Devs

Verdict: adjacent-exists

Competitors:
- WorkOS secrets management for AI agents (https://workos.com/blog/ai-agent-secrets-management) — API key/token/OAuth grant inventory and rotation guidance, enterprise-oriented.
- Nango token vault (https://nango.dev/blog/best-token-vaults-and-credential-management-tools-for-ai-agents/) — credential vault mapping keys/grants to 1000+ APIs for agents.

Note: Credential-inventory/vault tools for agents exist (Nango, WorkOS) but are developer-platform infra aimed at teams, not a lightweight scan-your-own-accounts tool for solo indie-hackers.

### I-5209 Credentials That Expire With the Task

Verdict: adjacent-exists

Competitors:
- Speakeasy "task-scoped credentials" (https://www.speakeasy.com/resources/task-scoped-credentials) — short-lived, identity-bound secrets issued per task and revoked on completion, same mechanism.
- Okta "Authorization Outlives Intent" (https://www.okta.com/blog/ai/ai-agent-security-when-authorization-outlives-intent/) — non-human identity standards (Okta Agent SSO) covering session-scoped issuance.

Note: Task-scoped, auto-expiring credentials are an established enterprise identity pattern (Okta, Speakeasy, Aembit); no consumer-facing product found targeting individual shoppers specifically.

### I-5210 Witnessed Escrow for Agent Deals

Verdict: direct-competitor

Competitors:
- Witness (x402scan listing) (https://github.com/Merit-Systems/x402scan/issues/1117) — signed public observations/witness service over x402 payments verifying delivered work before settlement.
- Masumi escrow on Cardano (https://github.com/alexursol2/deadman_ethonline/pull/1) — agent-to-agent escrow with result-submission and dispute mechanics tied to x402 locks.
- PayCrow (via dev.to x402 escrow post) (https://dev.to/michu5696/add-escrow-protection-to-any-x402-agent-payment-in-5-minutes-1n0b) — trust scoring plus escrow that releases funds only on verified valid delivery, arbiter review on failure.

Note: Live x402-ecosystem projects already combine escrow with a witness/verifier step that releases funds only on confirmed completion — same niche and mechanism as this idea.

```json
[
  {"id": "I-5201", "verdict": "adjacent-exists", "competitors": ["LEGIT Protocol (https://arxiv.org/html/2609.21325)", "Assay on Base (https://dev.to/grandionn/i-built-the-missing-trust-layer-for-ai-agents-on-base-stake-escrow-reputation-discovery-1mom)", "MolTrust (https://aws.amazon.com/marketplace/pp/prodview-baivobboznn4q)"], "note": "Live blockchain/DID-based portable trust scores exist for agent marketplaces; plain witness-agent re-check ledger mechanism not confirmed elsewhere."},
  {"id": "I-5202", "verdict": "direct-competitor", "competitors": ["AgentCard (https://agentcard.ai/blog/agentcard-vs-corporate-cards)", "Stripe Issuing agent cards (https://ramp.com/blog/virtual-cards-for-ai-agents)", "Privacy.com/OpenClaw (https://www.privacy.com/blog/openclaw-ai-agent-spending-virtual-card)"], "note": "Merchant-locked, capped, expiring per-task virtual cards for AI purchasing agents already live from multiple vendors."},
  {"id": "I-5203", "verdict": "adjacent-exists", "competitors": ["WorkOS AI agent access control (https://workos.com/blog/ai-agent-access-control)", "Google AP2 mandates (https://daily.dev/posts/the-agent-can-pay-but-who-gave-it-permission--tmux5nn9g)"], "note": "Scope/mandate frameworks exist for agents (mostly payment-focused or enterprise infra); consumer local action-interceptor gate not found live."},
  {"id": "I-5204", "verdict": "direct-competitor", "competitors": ["Apify Public Registry & License Record Parser MCP (https://apify.com/zentrafoundry/public-registry-license-lookup-api/api/mcp)", "Apify License Status Monitor (https://apify.com/zentrafoundry/license-status-monitor/api/mcp)"], "note": "Live Apify MCP actor wraps license/registry portals as cached, freshness-stamped lookup tools for agents, matching niche and mechanism."},
  {"id": "I-5205", "verdict": "adjacent-exists", "competitors": ["AWS AgentCore Consent Portal (https://builder.aws.com/content/3GRqOXpEtjCjrygdZJA9B1J3PNZ/how-agentcores-consent-portal-lets-your-agent-act-as-the-person-asking)", "Realeyes consent verification (https://realeyes.ai/blog/verify-ai-agent-consent/)"], "note": "OAuth-session consent binding exists (AWS AgentCore); a consumer-published stable-URL consent record checked directly by any site not found."},
  {"id": "I-5206", "verdict": "adjacent-exists", "competitors": ["AP2 mandates (https://www.checkout.com/blog/agentic-commerce-questions-answered)", "Universal Commerce Protocol (https://ucp.dev/documentation/core-concepts/)"], "note": "Broad signed-mandate checkout protocols exist; no supplier-specific line-item price/quantity verify endpoint for small wholesalers confirmed live."},
  {"id": "I-5207", "verdict": "adjacent-exists", "competitors": ["agentgateway cost controls (https://www.solo.io/blog/building-real-time-ai-cost-controls-with-agentgateway)", "Scopable AI billing for MSPs (https://scopable.io/blog/ai-billing-for-msps)"], "note": "Project/client AI-spend budgeting tools exist (MSP-focused, token-centric); no cross-tool (browser-agent+API+model) matter-billing tool for solo professionals found."},
  {"id": "I-5208", "verdict": "adjacent-exists", "competitors": ["WorkOS secrets management (https://workos.com/blog/ai-agent-secrets-management)", "Nango token vault (https://nango.dev/blog/best-token-vaults-and-credential-management-tools-for-ai-agents/)"], "note": "Credential-inventory/vault products exist for agent teams; none found targeting solo indie-hackers scanning their own scattered accounts specifically."},
  {"id": "I-5209", "verdict": "adjacent-exists", "competitors": ["Speakeasy task-scoped credentials (https://www.speakeasy.com/resources/task-scoped-credentials)", "Okta Agent SSO (https://www.okta.com/blog/ai/ai-agent-security-when-authorization-outlives-intent/)"], "note": "Task-scoped, auto-expiring credentials are an established enterprise identity pattern; no consumer-facing shopping-agent product found using it."},
  {"id": "I-5210", "verdict": "direct-competitor", "competitors": ["Witness on x402scan (https://github.com/Merit-Systems/x402scan/issues/1117)", "Masumi escrow (https://github.com/alexursol2/deadman_ethonline/pull/1)", "PayCrow x402 escrow (https://dev.to/michu5696/add-escrow-protection-to-any-x402-agent-payment-in-5-minutes-1n0b)"], "note": "Live x402-ecosystem projects already pair a witness/verifier with escrow, releasing funds only on confirmed completion - same niche and mechanism."}
]
```
<!-- COMPLETE -->
