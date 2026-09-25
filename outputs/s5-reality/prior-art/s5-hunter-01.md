### I-1001 Independent Completion Witness

Search found general "verification loop" and "independent re-verification" patterns discussed as an architecture concept, plus identity/state challenge verification (AgentDID), but no live product doing a signed, independent second-agent re-navigation to confirm a specific claimed portal outcome for ops teams.

Closest: general blog/architecture writeups (bmdpat.com "AI Agent Claims Done. Make It Prove It.", dev.to verification-loop posts) describe the pattern but are not products; Skillstore's "verification-protocol" skill is a prompt/skill, not a standalone verifier product.

Note: The idea's mechanism (a live, portal-revisiting second agent issuing a signed verdict) is not sold as a product; only architecture patterns and a skill exist.

### I-1047 Post-Call Voice Debrief Report Drafter

Fire/EMS software vendors (First Due, ImageTrend, FlorianAI/Commix) already sell voice-to-NFIRS/NERIS field mapping, letting officers narrate and auto-fill structured reports.

Closest: 1) FirstDue NFIRS Reporting Software (firstdue.com/products/nfirs-reporting-software) — voice transcription into report fields, sold to fire departments broadly, not volunteer-specific interview flow. 2) FlorianAI / Commix NERIS automation (commix.io) — maps verbal incident description to NERIS fields directly.

Note: Direct competitor mechanism (voice-to-structured-report) already live from multiple vendors post-NERIS transition; the volunteer/no-records-staff niche and prior-incident address lookup may differ but overlap is strong.

### I-1516 Console-Checked Cyber Insurance Answers

Security-questionnaire automation is a mature, crowded space (Iris, AutoRFP.ai, UpGuard, SecurityScorecard, Anchor AI), but these auto-fill from uploaded documents/evidence stores, not by live-logging into the firm's own admin consoles (M365, Google Admin, Entra) with the owner's session.

Closest: 1) UpGuard Trust Exchange Questionnaire AI (upguard.com/product/trust-exchange/questionnaire-ai) — auto-fills from docs, not live console login. 2) Anchor AI cyber insurance automation (getanchor.ai) — pre-populates from connected security evidence integrations, closer but API-integration based, not a screen agent driving consoles live.

Note: Adjacent competitors auto-fill from stored evidence/integrations; none found that log into admin consoles live via a screen agent to verify controls in real time for SMBs.

### I-2026 Fire Incident On-Device Scribe

Same niche as I-1047 but with the added mechanism of fully offline/on-device processing. Cloud voice-to-NFIRS/NERIS tools exist (see I-1047) but no evidence of an offline/self-hosted variant for fire departments specifically.

Closest: 1) FirstDue / FlorianAI NERIS voice tools (see I-1047) — same niche, cloud-based, differs on the offline/local mechanism. 2) Scribe (github.com/ChrisMcKee1/scribe) — offline dictation tool with local ASR, general-purpose, not fire-report-specific or field-filling.

Note: Niche (fire incident reporting) has live cloud competitors; the fully offline, no-cloud-dependency mechanism for this specific niche was not found live.

### I-2047 Opposing Brief Sweep

Multiple live citation-hallucination checkers exist (CiteSentinel, BriefCatch RealityCheck), and one article explicitly notes lawyers already use such tools to check opposing counsel's briefs, undermining the "novel" framing.

Closest: 1) CiteSentinel (per finchannel.com coverage) — standalone $19.99/doc citation validity checker, usable on any brief including opposing counsel's; no dedicated "opposing brief" framing or motion-ready exhibit table output confirmed. 2) BriefCatch RealityCheck (briefcatch.com/realitycheck) — deterministic + AI citation verification, built for the lawyer's own drafts but usable on any brief.

Note: Direct competitor on mechanism (citation verification); reporting confirms lawyers already repurpose these tools on opposing briefs. The motion-ready exhibit-table output is an unconfirmed differentiator.

### I-2514 E&O Broker's Citation Shield

Citation checkers exist (CiteSentinel, BriefCatch) but none confirmed as on-premises/local-model deployments distributed by malpractice insurance brokers with an aggregate risk score feeding underwriting.

Closest: 1) CiteSentinel — cloud SaaS, per-document pricing, not on-prem or broker-distributed. 2) BriefCatch RealityCheck — cloud/Word add-in, not on-prem, not insurance-broker-bundled.

Note: Citation-checking mechanism is a direct-competitor space, but the on-prem/broker-bundled/aggregate-risk-score distribution model was not found live; that structure appears distinct.

### I-2566 Metered Careers Feed for Job Agents

x402 pay-per-crawl/pay-per-fetch infrastructure is live and growing (Cloudflare pay-per-crawl, Coinbase x402, MCP servers), but no product found specifically packaging a careers-page 402 plugin for staffing agencies selling structured job JSON to job-search agents.

Closest: 1) Cloudflare Pay-per-crawl (built on x402) — general-purpose bot-to-payment infrastructure any site (including careers pages) could adopt; not a careers-feed-specific product. 2) Firecrawl x402 agent payments (github.com/firecrawl/firecrawl issue #3279) — proposal for scrape-and-pay, general-purpose, not job-listing-specific.

Note: The underlying x402/pay-per-crawl mechanism is live and general; a careers-page-specific structured job feed product on top of it was not found.

### I-3028 Per-Vendor Consent Autopilot

Thomson Reuters SafeSend is confirmed as an "end-to-end solution for tax and accounting professionals for managing 7216 consent forms," which appears to be a direct or very close competitor on mechanism and niche.

Closest: 1) Thomson Reuters SafeSend §7216 consent management (tax.thomsonreuters.com) — consent drafting/tracking for tax preparers, established vendor; unclear if it drafts distinct per-AI-vendor language or blocks data flow to unconsented vendors specifically. 2) General §7216 AI-consent template guidance (aitaxpractitioner.com) — templates/guidance only, not a tracking/blocking tool.

Note: SafeSend already manages 7216 consent workflows for preparers; the per-AI-vendor blocking mechanism is a plausible differentiator but not confirmed absent in SafeSend.

### I-3051 Same Words, More Life

Voice-conversion/re-delivery tools exist broadly (ElevenLabs, VoiceKiller, Murf) that can add emotion/energy to a voice clone, but none confirmed to guarantee word-level timing preservation for lecture-slide sync as a dedicated lecture product.

Closest: 1) ElevenLabs Voice Changer (elevenlabs.io/voice-changer) — preserves emotional delivery/cloning, general purpose, not timing-locked or lecture-specific. 2) VoiceKiller (voicekiller.com) — "Acting Instructions" reshape tone/energy from text, not confirmed to preserve exact original word timing from an uploaded monotone track.

Note: General voice re-expression tools are direct competitors on core mechanism; none found packaged for lecture-video sync with a guaranteed timing-lock, which remains the differentiator.

### I-3530 Report Reply Guard

Active tooling ecosystem addressing curl-style AI slop reports exists (Honeyslop, GitHub Security Lab Taskflow Agent, SlopCheck dataset), including sandboxed reproduction concepts, but none confirmed to be a browser-driving agent that queues human-approved replies inside the maintainer's own tracker UI without API access.

Closest: 1) GitHub Security Lab Taskflow Agent (github.blog) — LLM-based triage automation, API/framework-based, not a queued-human-approval browser agent. 2) Honeyslop (github.com/gadievron/honeyslop) — canary/decoy detection approach, different mechanism (bait code, not reproduction+reply drafting).

Note: Same pain and general triage-automation space is active and funded (even influenced curl to end its bounty), but the specific no-API browser-agent-with-human-send-button mechanism was not found live.

### I-4001 Migration Guardian for Practice Switches

Dental PMS migration is a known service niche with consultants and IT firms (Infonaligy, Ekimit, Webstrail) doing manual/consultant-led verification; no dedicated automated cross-check tool product found that ingests exported CSV/PDF rosters and produces a ranked discrepancy report.

Closest: 1) Infonaligy dental PMS migration IT services (infonaligy.com) — consultant-led migration support, not a self-serve automated discrepancy-report tool. 2) Ekimit Eaglesoft-to-Dentrix migration guide (ekimit.com) — advisory/services content, not software.

Note: The niche (dental PMS migration) is served by consultants and manual validation checklists; an automated CSV/PDF cross-check tool with a ranked discrepancy report was not found as a live product.

### I-4051 DMS Ransomware Shadow Continuity

No live product found that continuously mirrors a locked-in dealer management system (CDK/Reynolds) via a screen agent into a queryable shadow database for ransomware continuity; discussion is limited to post-incident advice (manual/paper backup playbooks) after the 2024 CDK outage.

Closest: General business-continuity/disaster-recovery advisory content post-CDK breach (techtarget.com, blackfog.com) recommends manual fallback playbooks, not an automated continuous-mirroring product.

Note: No direct or adjacent product found; existing guidance recommends manual paper fallback, not automated screen-agent mirroring. Appears clear, though DMS vendor lock-in/ToS risk is unverified by this search.

### I-4546 72-Hour Appeal Sprint

AI-powered denial-appeal drafting products exist for providers/health systems (Denials 360, Hathr.AI, ACEHOUND), generating payer-specific appeal letters, but these target provider/health-system billing teams, not individual families filing consumer-side expedited Medicare Advantage appeals with portal submission and proof-of-filing confirmation.

Closest: 1) Hathr.AI Medicare Appeals (hathr.ai/blogs/ai-for-medicare-appeals) — AI-drafted appeal letters, provider/health-system focused, not a consumer family-facing app with portal auto-submission. 2) ACEHOUND (businesswire.com) — prior-auth appeal automation for providers reducing care delays, provider-side not consumer-side.

Note: Adjacent competitors draft AI appeal letters but for provider/billing teams, not consumers; the family-facing photo-to-filed-appeal-with-proof mechanism for individuals was not found live.

### I-6006 AAC Phrase Ranking Companion

AAC word/phrase prediction is a long-established feature category (Proloquo2Go, Proloquo4Text, Assistive Express), and research literature already describes listening to the conversation partner's speech to improve prediction context, closely matching this idea's core mechanism.

Closest: 1) Proloquo2Go / Proloquo4Text (AssistiveWare) — built-in phrase banks and word prediction within a full AAC device app, not a standalone companion that imports another device's phrase bank. 2) Research: partner-speech-informed AAC word prediction (leader.pubs.asha.org; arxiv research) — describes the same listen-to-partner mechanism as a research direction, not a shipped standalone product.

Note: Core "listen to partner, rank stored phrases" mechanism appears in AAC research; built-in AAC apps do prediction natively but as an in-device feature, not an import-based standalone companion across brands.

```json
[
  {"id": "I-1001", "verdict": "adjacent-exists", "competitors": ["bmdpat.com verification-loop writeup (https://bmdpat.com/blog/ai-agent-claims-done-verify-2026)", "Skillstore verification-protocol (https://skillstore.io/skills/cleanexpo-verification-protocol)"], "note": "Architecture patterns and a prompt skill for agent self/re-verification exist, but no live product does a signed, portal-revisiting independent-agent completion verdict."},
  {"id": "I-1047", "verdict": "direct-competitor", "competitors": ["FirstDue NFIRS Reporting Software (https://www.firstdue.com/products/nfirs-reporting-software)", "FlorianAI/Commix NERIS Automation (https://www.commix.io/blog/neris-reporting-automation-ai)"], "note": "Vendors already sell voice-to-NERIS/NFIRS field mapping from narrated incident recaps; volunteer/no-staff niche framing may differ but mechanism overlaps directly."},
  {"id": "I-1516", "verdict": "adjacent-exists", "competitors": ["UpGuard Trust Exchange Questionnaire AI (https://www.upguard.com/product/trust-exchange/questionnaire-ai)", "Anchor AI cyber insurance automation (https://www.getanchor.ai/articles/cyber-insurance-application-questionnaire-automation-2026)"], "note": "Questionnaire automation is crowded but fills from uploaded docs/integrations, not live login to the firm's own admin consoles via a screen agent."},
  {"id": "I-2026", "verdict": "adjacent-exists", "competitors": ["FirstDue/FlorianAI NERIS voice tools (https://www.commix.io/blog/neris-reporting-automation-ai)", "Scribe offline dictation (https://github.com/ChrisMcKee1/scribe)"], "note": "Cloud voice-to-report tools exist for this niche; no fire-department-specific fully offline/on-device variant found."},
  {"id": "I-2047", "verdict": "direct-competitor", "competitors": ["CiteSentinel (per finchannel.com coverage)", "BriefCatch RealityCheck (https://www.briefcatch.com/realitycheck)"], "note": "Live citation-hallucination checkers exist; press reporting confirms lawyers already use such tools on opposing counsel's briefs, matching this idea's mechanism."},
  {"id": "I-2514", "verdict": "adjacent-exists", "competitors": ["CiteSentinel (per finchannel.com coverage)", "BriefCatch RealityCheck (https://www.briefcatch.com/realitycheck)"], "note": "Cloud citation checkers are direct competitors on core mechanism, but no on-prem, broker-distributed, aggregate-risk-score variant for E&O underwriting was found."},
  {"id": "I-2566", "verdict": "adjacent-exists", "competitors": ["Cloudflare pay-per-crawl / x402 (https://stellar.org/blog/foundation-news/x402-on-stellar)", "Firecrawl x402 agent payments proposal (https://github.com/firecrawl/firecrawl/issues/3279)"], "note": "x402 pay-per-crawl infrastructure is live generally; no careers-page-specific structured job-feed product built on it was found."},
  {"id": "I-3028", "verdict": "direct-competitor", "competitors": ["Thomson Reuters SafeSend 7216 consent management (https://tax.thomsonreuters.com/blog/how-to-explain-the-7216-consent-form-to-your-clients/)"], "note": "SafeSend already manages 7216 consent workflows for tax preparers end-to-end; per-vendor blocking mechanism is an unconfirmed possible differentiator."},
  {"id": "I-3051", "verdict": "adjacent-exists", "competitors": ["ElevenLabs Voice Changer (https://elevenlabs.io/voice-changer)", "VoiceKiller (https://voicekiller.com/)"], "note": "General voice re-expression/emotion tools exist and are direct on core mechanism, but none confirmed to lock word-level timing for lecture-slide sync specifically."},
  {"id": "I-3530", "verdict": "adjacent-exists", "competitors": ["GitHub Security Lab Taskflow Agent (https://github.blog/security/how-to-scan-for-vulnerabilities-with-github-security-labs-open-source-ai-powered-framework/)", "Honeyslop (https://github.com/gadievron/honeyslop/)"], "note": "AI-slop triage tooling is an active space, but no no-API browser agent queuing human-approved replies inside the tracker UI was found."},
  {"id": "I-4001", "verdict": "clear", "competitors": ["Infonaligy dental PMS migration services (https://www.infonaligy.com/industries/dental-practice-management-it)", "Ekimit Eaglesoft-to-Dentrix migration guide (https://ekimit.com/how-to-migrate-from-eaglesoft-to-dentrix/)"], "note": "Niche is served by consultants and manual checklists; no automated CSV/PDF cross-check tool producing a ranked discrepancy report was found live."},
  {"id": "I-4051", "verdict": "clear", "competitors": ["Post-CDK-breach continuity advisory content (https://www.techtarget.com/whatis/feature/The-CDK-Global-outage-Explaining-how-it-happened)"], "note": "Only manual paper-fallback advisory guidance found post-CDK outage; no automated screen-agent continuous DMS mirroring product found."},
  {"id": "I-4546", "verdict": "adjacent-exists", "competitors": ["Hathr.AI Medicare Appeals (https://www.hathr.ai/blogs/ai-for-medicare-appeals)", "ACEHOUND (https://www.businesswire.com/news/home/20251007508376/en/)"], "note": "AI appeal-drafting tools exist but target providers/health systems, not consumer families filing their own expedited portal appeal with proof of filing."},
  {"id": "I-6006", "verdict": "adjacent-exists", "competitors": ["Proloquo2Go/Proloquo4Text (AssistiveWare)", "Partner-speech-informed AAC prediction research (https://leader.pubs.asha.org/do/10.1044/leader.FTR1.30032025.FAAC-predictive-text.36/full/)"], "note": "Built-in AAC apps do phrase prediction; research already explores listening to the partner for context, but no standalone cross-device import companion product was found."}
]
```
<!-- COMPLETE -->
