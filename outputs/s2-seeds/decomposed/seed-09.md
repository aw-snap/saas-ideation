# seed-09 decomposed

## Atoms

**Audience**
- A-seed-09-aud-1: Security teams and IT leads at mid-sized companies whose staff use copilots or whose customers talk to AI agents.
- A-seed-09-aud-2: Channel partners: penetration-testing firms and managed security providers who could white-label the service.

**Pain**
- A-seed-09-pain-1: AI makes phishing emails, texts and cloned-voice calls cheaper and more convincing, raising the volume and quality attackers can produce.
- A-seed-09-pain-2: Deployed AI agents can be talked into refunds, policy exceptions or data leaks, a new attack surface staff-only training ignores.
- A-seed-09-pain-3: Existing social-engineering testing is a once-a-year manual pentest or generic phishing-template simulation, not continuous or tailored.

**Mechanism**
- A-seed-09-mech-1: Client signs off on targets, channels and hard limits before any test; executives opt in before synthetic voice is used.
- A-seed-09-mech-2: AI generates tailored multichannel scenarios and runs thousands of persuasion-style conversations against staff and the client's own bots.
- A-seed-09-mech-3: Each failure returns with a fix (60-second lesson or guardrail change) and an automatic retest, run continuously.

**Enabling tech**
- A-seed-09-tech-1: Language models generating tailored scenarios and running multi-turn adversarial conversations against target bots and people.
- A-seed-09-tech-2: Synthetic voice generation with executive opt-in for cloned-voice test calls.

**Business model**
- A-seed-09-biz-1: Priced per employee per year for staff testing.
- A-seed-09-biz-2: Priced per AI agent per month for bot testing, with white-label pricing for security firms.

**Demo moment**
- A-seed-09-demo-1: Point it at a sample support chatbot; 200 persuasion attempts find 3 that get a refund approved.
- A-seed-09-demo-2: Show the failing transcript, apply a fix, and retest green in the same session.

**Core insight**
- A-seed-09-insight-1: AI made social-engineering attacks cheap and continuous, so authorised testing has to be cheap and continuous too.
- A-seed-09-insight-2: A company's AI agents are now social-engineering targets alongside its staff, so testing both with one engine may be a real edge.

## Prior art

- Lakera Red (Lakera, now under Check Point) — adversarial/red-team testing for LLM apps and agents: prompt injection, jailbreaks, multi-turn attacks, tool misuse. https://www.lakera.ai/lakera-red — adjacent (bot side only, no staff social-engineering or voice).
- KnowBe4 Deepfake Training Content Agent — generates deepfake training content from consenting exec uploads, but does not run simulated attacks against employees. https://www.techtarget.com/searchsecurity/tip/What-to-know-about-deepfake-phishing-simulation-software — adjacent (staff side, no live attack simulation, no bot testing).
- Hoxhunt — multichannel simulated attacks including custom deepfake audio/video service, combined with phishing email and mock video-call page. https://hoxhunt.com/blog/knowbe4-competitors and https://www.adaptivesecurity.com/blog/deepfake-awareness-training-platforms — adjacent (staff-side voice/video simulation exists as a custom service, but no continuous scoring and no AI-agent testing).
- Straiker (Ascend AI / Defend AI), General Analysis, Noma — continuous automated red-teaming platforms for AI agents/chatbots (prompt injection, tool misuse, multi-step attacks). https://www.straiker.ai/solution/red-teaming, https://generalanalysis.com/products/automated-ai-red-teaming, https://noma.security/platform/red-teaming/ — adjacent (bot side only, no staff testing, no per-employee pricing).

Verdict: adjacent-exists. Strong, funded players cover each half separately (Lakera/Straiker/Noma for AI-agent red-teaming; KnowBe4/Hoxhunt/Adaptive Security for staff phishing and deepfake simulation, with Hoxhunt already offering custom deepfake voice/video). No single searched product was found combining continuous staff social-engineering testing and continuous AI-agent persuasion testing under one consent-first engine with one score, which is the seed's distinguishing claim — but that combination is unverified as a gap rather than confirmed absent.

## Weakest points

- The "one engine, two buyers" claim is unverified: staff-side and bot-side incumbents are mature, separately funded, and the security-awareness buyer may differ from the AI/product-team buyer, so the combination may not survive contact with procurement.
- Both cited incidents ($25M deepfake payout, $1 car chatbot) and the competitor list in the seed are marked unverified in the source card and were not re-sourced here.
- Consent, liability and legal exposure (cloned-voice testing of staff, works-council consent, proof the buyer controls the target org and its third-party-hosted bots) are unresolved and could block go-to-market regardless of technical merit.

<!-- COMPLETE -->
