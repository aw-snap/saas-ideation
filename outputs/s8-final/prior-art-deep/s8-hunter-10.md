# Prior-art hunt: s8-hunter-10 (deep mode)

### I-1525 AI Feature-Request Reviewer

Searches: build-time-estimate tools, GitHub-issue effort estimators, YC AI code-review directory, Product Hunt Jira/repo-scan launches, GitHub topic `effort-estimation`.

Closest products:
- Bito AI Architect (https://bito.ai/) — analyzes Jira tickets against the live codebase and posts feasibility analysis, technical design, and impact assessment as ticket comments; same "read the real repo, estimate the work" mechanism, but framed as general ticket triage, not specifically incoming client feature requests for dev shops.
- Jira Ticket Estimator (Claude Code skill) (https://mcpmarket.com/tools/skills/jira-ticket-estimator) — does "repository reconnaissance" (files, LOC, integration points) to produce phase-by-phase time breakdowns; same mechanism, delivered as a coding-agent skill rather than a standalone SaaS.
- agent-estimate (https://github.com/kiloloop/agent-estimate) — open-source, estimates GitHub issues directly against a repo using PERT/METR; same core loop (ingest request, read code, output an estimate).

Verdict: direct-competitor. Multiple live tools already read a real codebase and turn an incoming ticket/request into an effort/impact estimate — the differentiator here (framing around *client* feature requests for dev shops specifically) is thin.

### I-2514 E&O Broker's Citation Shield

Searches: legal-citation-hallucination checkers, malpractice-insurance-broker bundling, Clearbrief/CaseRead pricing, Product Hunt legal-AI launches, on-prem legal AI.

Closest products:
- Clearbrief (https://clearbrief.com/) — deterministic citation-checking tool used by ~70% of Am Law 20 firms; cloud/SaaS delivery (Word add-in), sold direct to firms, not bundled by an insurance broker, and no evidence of on-prem-only deployment.
- CaseRead.ai (https://www.caseread.ai/hallucination-shield) — checks citations against CourtListener/OpenLaws and reads the source to verify support; same verification mechanism, sold direct to lawyers, cloud-hosted.
- LawDroid CiteCheck AI (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html) — free citation-verification site, same mechanism, no insurance-broker distribution or on-prem/aggregate-risk-score angle.

Verdict: adjacent-exists. Citation-hallucination checking is a crowded, live category (Clearbrief, CaseRead, CiteCheck AI, RealityCheck, BriefCatch), but none found are distributed by malpractice-insurance brokers, run on-prem for privacy, or feed only an aggregate risk score to underwriting — that packaging is the actual novelty here.

### I-3050 Instant Reflex AI Layer

Searches: small-model secret-detection SDKs, "System 1/System 2" AI guardrail pattern, TypeSafe Jev deep-dive, YC/company directory for TypeSafe, GitHub reflex-layer repos.

Closest products:
- TypeSafe AI's Jev (https://typesafe.ai/blog/introducing-system-one-models-and-jev, https://docs.typesafe.ai/concepts/system-one) — a "System One" model launched Sept 15 2026 ($40M seed, DCVC) that returns typed, calibrated probability/choice/score answers in 70-500ms via a hosted API/SDK, explicitly pitched as ~100x cheaper/faster than normal LLMs for per-event judgments (sorting, scoring, jailbreak screening), with escalation to a bigger model left to the caller. Same mechanism (fast reflex model + escalate-when-unsure) and same buyer (developers, usage-based API pricing) as this idea; not marketed specifically as an IDE/per-keystroke secret-flagging SDK, but the core infra layer is essentially already shipping.
- Wiz small-model secret detection (https://www.wiz.io/blog/small-language-model-for-secrets-detection-in-code) — fine-tuned small LLM for in-code secret detection with strong precision/recall; narrower (secrets-only), no general reflex/escalation SDK.
- Sonar / SonarQube secrets detection (https://www.sonarsource.com/solutions/secrets-detection/) — real-time IDE flagging of hardcoded secrets; same demo moment as this idea's example, but static/rule-based, not a general reflex-model SDK.

Verdict: direct-competitor. TypeSafe's Jev is a live, funded product matching this idea's mechanism (sub-second, cheap, typed per-event judgments with escalation) and buyer (developer infra, usage pricing) closely enough that this idea would be building on top of, or racing against, an already-shipping category leader.

### I-4511 Proof Receipts for Proxy Agents

Searches: AI-agent proof/receipt/audit-trail tools, daily-money-manager proof-of-payment practices, YC/HN agent screenshot-verification tools, Product Hunt caregiver/elder-finance apps, Meridian Verity/Asqav pricing and niche.

Closest products:
- Meridian Verity (https://meridianverity.com/ai-agent-verification-receipts/) — turns proposed AI agent actions into replayable "verification receipts" (proposed action, evidence, decision, replay route) before they take effect; same proof-receipt mechanism, but targeted at agentic-commerce/enterprise risk controls, not consumer/fiduciary elder-care portals, and doesn't redact/annotate portal screenshots.
- Asqav (https://www.asqav.com/) — signed, hash-chained, IETF-draft-based compliance receipts for AI agent actions, enterprise/audit buyer, no screenshot-to-redacted-image pipeline or family/fiduciary caseload pricing.
- ProofShot / BrowserProof (https://github.com/yashkhou/browserproof) — verification/evidence bundles (screenshots, logs, hashes) for browser agents, aimed at engineers testing their own agents, not at daily money managers or family proxies filing on Medicaid/Medicare portals.

Verdict: adjacent-exists. "Proof receipt for an agent action" is an active, live category (Meridian Verity, Asqav, BrowserProof), but all found competitors are developer/enterprise/commerce-risk tools; none target the consumer daily-money-manager/aging-parent-proxy niche or produce redacted, annotated, per-institution receipt ledgers for families.

### I-6003 Jev: context-aware AAC phrase suggestions

Searches: AAC conversation-context phrase prediction research, Proloquo2Go/Predictable contextual suggestion features, App Store AAC "listens to conversation" apps, Spoken AAC predictive text, ACL/Nature research on LLM-accelerated AAC.

Closest products:
- Spoken – Tap to Talk AAC (https://apps.apple.com/us/app/spoken-tap-to-talk-aac/id1034487817) — predictive text that "learns your speech patterns" and adapts word suggestions over time, including by location; predicts/generates new words rather than ranking a personal bank of pre-saved, user-approved phrases against the other speaker's live words.
- AAC Talker "Listening mode" (https://apps.apple.com/us/app/aac-talker/id6446367342) — listens to the conversation partner and generates answers (currently limited to yes/no, either/or, and number answers); same "listen to the other person" input but it composes new replies rather than surfacing the user's own saved phrases.
- Vocable AAC (https://apps.apple.com/us/app/vocable-aac/id1497040547) — lets users build a personal phrase/category library and optionally use AI to assist during active conversation; closest on the "personal phrase bank" side, but the AI-assist path generates/expands rather than re-ranking only pre-approved phrases.

Verdict: adjacent-exists. Several shipping AAC apps already listen to the conversation partner and surface AI-driven suggestions (Spoken, AAC Talker, Vocable), but each generates or predicts new text rather than this idea's narrower, explicitly composition-free mechanism of ranking only phrases the user already saved/approved.

```json
[
  {"id": "I-1525", "verdict": "direct-competitor", "competitors": ["Bito AI Architect (https://bito.ai/)", "Jira Ticket Estimator skill (https://mcpmarket.com/tools/skills/jira-ticket-estimator)", "agent-estimate (https://github.com/kiloloop/agent-estimate)"], "note": "Live tools already read a real codebase and turn an incoming ticket/request into a grounded effort/impact estimate (Bito AI Architect, Jira Ticket Estimator, agent-estimate); client-feature-request framing is a thin wrapper on an existing mechanism."},
  {"id": "I-2514", "verdict": "adjacent-exists", "competitors": ["Clearbrief (https://clearbrief.com/)", "CaseRead.ai (https://www.caseread.ai/hallucination-shield)", "LawDroid CiteCheck AI (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html)"], "note": "Citation-hallucination checking for law firms is a crowded live category, but none found are distributed by malpractice-insurance brokers, run on-prem, or surface only an aggregate risk score to underwriting."},
  {"id": "I-3050", "verdict": "direct-competitor", "competitors": ["TypeSafe AI's Jev (https://typesafe.ai/blog/introducing-system-one-models-and-jev)", "Wiz small-model secret detection (https://www.wiz.io/blog/small-language-model-for-secrets-detection-in-code)", "SonarQube secrets detection (https://www.sonarsource.com/solutions/secrets-detection/)"], "note": "TypeSafe's Jev (launched Sept 2026, $40M seed) already ships sub-second, cheap, typed per-event judgments with escalation via a developer SDK, usage-priced — the same mechanism and buyer this idea targets."},
  {"id": "I-4511", "verdict": "adjacent-exists", "competitors": ["Meridian Verity (https://meridianverity.com/ai-agent-verification-receipts/)", "Asqav (https://www.asqav.com/)", "BrowserProof (https://github.com/yashkhou/browserproof)"], "note": "Agent action-receipt tools are a live category, but all found competitors serve enterprise/commerce-risk or engineering buyers, not consumer daily-money-managers filing redacted, annotated Medicaid/Medicare proof for a family caseload."},
  {"id": "I-6003", "verdict": "adjacent-exists", "competitors": ["Spoken AAC (https://apps.apple.com/us/app/spoken-tap-to-talk-aac/id1034487817)", "AAC Talker Listening mode (https://apps.apple.com/us/app/aac-talker/id6446367342)", "Vocable AAC (https://apps.apple.com/us/app/vocable-aac/id1497040547)"], "note": "Several shipping AAC apps already listen to the conversation partner and surface AI suggestions, but each generates/predicts new text rather than ranking only the user's own pre-saved, approved phrases."}
]
```
<!-- COMPLETE -->
