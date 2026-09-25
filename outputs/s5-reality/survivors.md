# S5 reality check: survivors

## Summary

- **Input:** 162 ideas (the `archive/survivors.md` list). Tracks come from the corrected cell in the archive: 75 novel and 87 balanced.
- **Knock-out 1 (direct competitor):** 39 ideas failed. 36 were cut and 3 are seed originals, which stay in.
- **Knock-out 2 (no demoable core loop):** 2 ideas failed, both seed originals, so both stay in. No other idea is marked `demoable: no` in the feasibility files, and `risky` never counts as a knock-out.
- **Knock-out 3 (legal or safety):** 0 ideas failed.
- **Cut in total:** 36.
- **Survivors:** 126, of which 61 are novel and 65 are balanced. That is inside the 120–150 target.
- **Seed originals:** all 11 remain. Five of them failed a knock-out and are marked `(kept: seed original)` in the table below.

### Lead adjustments to the hunter verdicts (spot-checks)

- **Overturned from direct to adjacent (these ideas survive):**
  - **I-3028:** SafeSend handles §7216 consent e-signing in general. Nothing shows it drafting consent per AI vendor or blocking data from going to a vendor without consent, and that gate is the card's core mechanism ([TR SafeSend](https://tax.thomsonreuters.com/blog/how-to-explain-the-7216-consent-form-to-your-clients/)).
  - **I-2043 and I-1525:** devtimate builds estimates from RFPs and spec documents. Its own guide says the AI "cannot see the messy codebase". Both cards base the estimate on exploring the actual repository ([devtimate](https://devtimate.com/ai-project-estimation/)).
  - **I-1508:** the competitors cited (GatekeeperHQ, Trustpair, Ottimate) are AP and contract platforms for mid-market and enterprise companies. The card targets small firms with no finance team and works by watching the inbox. The mechanism is the same but the niche differs, so this is adjacent.
- **Upgraded from adjacent to direct (cut):**
  - **I-4027** is effectively the same product as I-1047: volunteer departments, a spoken recap plus dispatch data, drafted into a NERIS report. FlorianAI already sells voice-assisted capture that pre-populates fields from CAD data ([FlorianAI](https://www.commix.io/blog/neris-reporting-automation-ai)).
  - **Seed originals I-2536 and I-1042** share their mechanism with direct-competitor siblings I-2042 ([TroubleBuddy](https://troublebuddy.ai/)) and I-2041/I-3047 ([Poised](https://www.poised.com/use-cases/poised-for-interviews)). They are recorded as failures and kept.
- **Evidence replaced:**
  - **I-4032:** Droidal's agent works on the provider side. Its direct competitor is instead [HeyMedicaid](https://heymedicaid.med/), a consumer app: photograph documents, AI auto-fills the application, and it handles recertification and renewal reminders.
- **Confirmed by the lead:**
  - [FlorianAI](https://www.commix.io/blog/neris-reporting-automation-ai) (I-1047).
  - [CaseRead](https://www.caseread.ai/hallucination-shield) extracts citations, checks they exist and checks they support the claim (I-2047, I-3038, I-2046).
  - [Konvu](https://konvu.com/product/bug-bounty-triage) (I-2050, I-3039).
  - [Counterforce Health](https://www.counterforcehealth.org/), free and aimed at patients and caregivers (I-4004, I-2549, I-2070).
  - [Lysco](https://lysco.com/) (I-4550).
  - [Support Robotics](https://www.supportrobotics.com/) (I-2584).
  - [HeyMedicaid](https://heymedicaid.med/) (I-4545).
  - [Adaptive](https://www.adaptive.build/blog/adaptive-ai-bookkeeping-software-that-learns-your-business) (I-1060).
- **No prior-art entry from the hunters:**
  - **I-4014:** the lead search found no direct competitor.
  - **I-4026:** GuardianPad and Tekoa cover court accountings, and a roundup mentions a GuardianFAS receipt-OCR feature `[unverified]`. Rated adjacent ([GuardianPad](https://guardianpad.com/), [Tekoa](https://www.tekoasoftware.com/guardianship-software)).
- **Legal and safety issues considered but not knock-outs**, because an honest mock-target demo works around each one:
  - **I-3001:** PCI exposure from pulling card data out of Dentrix.
  - **I-4051:** DMS vendor terms of service.
  - **I-2067, I-1534 and I-3010:** consent for call and showing recordings.

## Knock-out table

| id | reason | evidence |
|---|---|---|
| I-1047 | direct competitor: voice-assisted NERIS report drafting with fields pre-populated from CAD data, for fire departments | [FlorianAI/Commix](https://www.commix.io/blog/neris-reporting-automation-ai) |
| I-4027 | direct competitor: same product as I-1047 (lead upgrade from adjacent) | [FlorianAI/Commix](https://www.commix.io/blog/neris-reporting-automation-ai) |
| I-2047 | direct competitor: live citation-hallucination checkers already used on any brief, including an opponent's | [CaseRead](https://www.caseread.ai/hallucination-shield), [BriefCatch RealityCheck](https://www.briefcatch.com/realitycheck) |
| I-3038 | direct competitor: checks both that each citation exists and that its quote is supported by the source opinion | [CaseRead](https://www.caseread.ai/hallucination-shield), [LawDroid CiteCheck](https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html) |
| I-2046 | direct competitor: pre-filing check of AI-drafted citations against the real case text | [CaseRead](https://www.caseread.ai/hallucination-shield), [LawDroid CiteCheck](https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html) |
| I-2568 | direct competitor: Cloudflare's native dashboard already lets any site allow, charge or block each crawler | [Cloudflare AI Crawl Control](https://developers.cloudflare.com/ai-crawl-control) |
| I-3534 | direct competitor: Cloudflare Pay Per Crawl offers per-crawler charge/block controls, built around the same default-block change the card cites | [Cloudflare Pay Per Crawl](https://blog.cloudflare.com/introducing-pay-per-crawl) |
| I-4004 | direct competitor: free consumer AI appeal generator that works from the denial letter plus medical records | [Counterforce Health](https://www.counterforcehealth.org/) |
| I-2549 | direct competitor: drafts consumer Medicare denial appeals from an uploaded letter | [Counterforce Health](https://www.counterforcehealth.org/), [River](https://rivereditor.com/tools/appeal-letter) |
| I-2070 | direct competitor: drafts family and caregiver appeals from the denial plus chart. The claim-check step is a feature, not a new mechanism | [Counterforce Health](https://www.counterforcehealth.org/) |
| I-4052 | direct competitor: IDEXX's native integrations already auto-file lab results into the patient chart | [IDEXX integrations](https://software.idexx.com/integrations) |
| I-3542 | direct competitor: IDEXX ships a native Cornerstone lab integration | [IDEXX Cornerstone integrations](https://software.idexx.com/cornerstone-integrations) |
| I-4548 | direct competitor: monitors a parent's accounts for scam patterns and alerts family the same day | [Carefull](https://getcarefull.com/ai-fraud-prevention) |
| I-4029 | direct competitor: detects first-time payees and scam patterns in an elder's accounts and alerts the proxy | [Carefull](https://getcarefull.com/articles/how-to-monitor-your-parents-financial-accounts), [Greenlight Family Shield](https://greenlight.com/family-shield/financial-account-alerts) |
| I-2050 | direct competitor: reproduces bounty reports in a sandbox and returns a verdict with proof before any human review | [Konvu](https://konvu.com/product/bug-bounty-triage) |
| I-3039 | direct competitor: reproduces every report in a sandbox and closes the ones that don't reproduce | [Konvu](https://konvu.com/product/bug-bounty-triage), [ProjectDiscovery Triage](https://projectdiscovery.io/triage) |
| I-4549 | direct competitor: photograph mail, AI reads what is owed and when, and builds a triaged list | [Sortbox](https://sortyourbox.com) |
| I-6008 | direct competitor: continuous automated adversarial testing of AI agents | [Lakera Red](https://lakera.ai/lakera-red) |
| I-6005 | direct competitor: continuous red-teaming of live agents, including multi-turn persuasion | [Mindgard](https://mindgard.ai) |
| I-6001 | direct competitor: continuous authorized AI social-engineering simulation (kept: seed original) | [OutThink](https://outthink.io/products/autonomous-ai-phishing-simulator/), [Doppel](https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/) |
| I-1060 | direct competitor: AI bookkeeping learns vendor coding from a single correction | [Adaptive](https://www.adaptive.build/blog/adaptive-ai-bookkeeping-software-that-learns-your-business) |
| I-4550 | direct competitor: compares a consumer's bill with the EOB and drafts a $9 appeal | [Lysco](https://lysco.com/) |
| I-2584 | direct competitor: home Wi-Fi diagnostics that work with any router, read logs and change settings | [Support Robotics](https://www.supportrobotics.com/), [UniFi WiFi Agent](https://help.ui.com/hc/en-us/articles/31628490448151) |
| I-2590 | direct competitor: always-on real-time captions for deaf and hard-of-hearing users in everyday conversation | [Ava](https://www.ava.me/) |
| I-2041 | direct competitor: live nudges on pace and filler words during real interviews | [Acedit](https://www.acedit.ai/), [Poised](https://poised.com/products/real-time) |
| I-3047 | direct competitor: live delivery feedback during interviews on Zoom, Teams and Meet | [Poised](https://www.poised.com/use-cases/poised-for-interviews), [Beyz](https://beyz.ai/) |
| I-1042 | direct competitor: same mechanism as I-2041/I-3047; hunter rated it adjacent, lead applied the sibling evidence (kept: seed original) | [Poised](https://www.poised.com/use-cases/poised-for-interviews) |
| I-2042 | direct competitor: conversational Windows diagnosis with safe fixes confirmed before they run | [TroubleBuddy](https://troublebuddy.ai/) |
| I-2536 | direct competitor: same mechanism as I-2042; hunter rated it adjacent (kept: seed original) | [TroubleBuddy](https://troublebuddy.ai/) |
| I-2044 | direct competitor: real-time secret detection in the IDE, before commit | [SonarQube for IDE](https://www.sonarsource.com/solutions/secrets-detection/), [Checkmarx](https://checkmarx.com/learn/how-to-detect-and-remove-leaked-api-keys-tokens-and-passwords-from-code-repositories/) |
| I-4031 | direct competitor: AI agents close estate accounts across institutions | [Alix](https://www.computerweekly.com/news/366604883/Wells-Fargo-bank-turns-to-AI-to-help-families-settle-estates-after-a-death), [Sunset](https://learn.hellosunset.com/best-automated-estate-settlement-2026) |
| I-3014 | direct competitor: phone-camera pose tracking with live, rep-by-rep form cues | [FORMFIT](https://play.google.com/store/apps/details?id=com.adimo.neurafit&hl=en_US), [Skeletal PT](https://apps.apple.com/us/app/-/id6757767729) |
| I-3572 | direct competitor: drafts prior-auth appeals grounded in payer policy and chart evidence | [Insight Health](https://www.insighthealth.ai/blog/prior-authorization-appeal-ai), [Arkangel](https://arkangel.ai/en/resources/app/ai-drafted-prior-authorization-letters-to-expedite-insurance-approvals-and-improve-patient-care) |
| I-4032 | direct competitor: photograph Medicaid paperwork, AI extracts and auto-fills it, and handles recertification (lead replaced the hunter's evidence) | [HeyMedicaid](https://heymedicaid.med/) |
| I-4545 | direct competitor: AI agents handle Medicaid renewal with auto-fill and reminders | [HeyMedicaid](https://heymedicaid.med/) |
| I-6004 | direct competitor: real-time monitoring of call-center compliance, with disclosure flags and supervisor alerts | [Balto](https://www.balto.ai/blog/best-real-time-compliance-monitoring-software-for-contact-centers-2026/), [Observe.AI](https://www.observe.ai/contact-center-glossary/what-is-call-center-compliance) |
| I-1043 | direct competitor: pawn point-of-sale systems already auto-file the daily LeadsOnline police report | [Bravo Store Systems](https://bravostoresystems.com/point-of-sale-for-pawnbrokers), [pawn-software.com](https://pawn-software.com/leads-online-software.htm) |
| I-2082 | direct competitor: GoBD-compliant mailbox archiving that auto-catches XRechnung and ZUGFeRD XML | [REDDOXX](https://reddoxx.com/produkte/e-rechnung-archivierung) |
| I-4033 | direct competitor: prior-auth submission driven by an agent across many payer portals | [Infinx](https://www.infinx.com/prior-authorization-solution-ai-and-automation/), [Skyvern PA](https://skyvern.com/blog/automate-healthcare-prior-authorization-insurance-portals) |
| I-1050 | no demoable core loop: the card names no product, so there is nothing concrete to build. Jev itself is confirmed real by s5-hunter-02 (kept: seed original) | [s5-planner-02](outputs/s5-reality/feasibility/s5-planner-02.md), [Jev](https://en.wikipedia.org/wiki/Jev_(AI_model)) |
| I-4014 | no demoable core loop: the core is cm-accurate 3D reconstruction from plain phone video, which is unverified. This is contestable, since SkyeBrowse claims measurable 3D models from walkthrough video (kept: seed original) | [s5-planner-04](outputs/s5-reality/feasibility/s5-planner-04.md), [SkyeBrowse](https://www.skyebrowse.com/news/posts/3d-room-scanner) |

## Survivor table

| id | track | prior-art verdict | feasibility verdict |
|---|---|---|---|
| I-1001 | novel | adjacent-exists | risky |
| I-3555 | novel | adjacent-exists | risky |
| I-1003 | novel | adjacent-exists | risky |
| I-4529 | novel | adjacent-exists | yes |
| I-4537 | balanced | adjacent-exists | yes |
| I-1517 | balanced | adjacent-exists | risky |
| I-2591 | balanced | adjacent-exists | yes |
| I-6001 | balanced | direct-competitor (kept: seed original) | yes |
| I-4541 | novel | adjacent-exists | yes |
| I-3001 | novel | clear | risky |
| I-3095 | novel | adjacent-exists | risky |
| I-3506 | novel | adjacent-exists | yes |
| I-2514 | balanced | adjacent-exists | risky |
| I-2023 | balanced | adjacent-exists | yes |
| I-2026 | balanced | adjacent-exists | risky |
| I-2582 | balanced | adjacent-exists | yes |
| I-4051 | novel | clear | risky |
| I-4553 | novel | adjacent-exists | yes |
| I-1516 | balanced | adjacent-exists | yes |
| I-1024 | balanced | adjacent-exists | yes |
| I-4525 | novel | adjacent-exists | yes |
| I-2525 | novel | adjacent-exists | yes |
| I-1050 | novel | clear | no (kept: seed original) |
| I-3050 | novel | adjacent-exists | risky |
| I-1508 | balanced | adjacent-exists (lead: overturned from direct) | yes |
| I-3040 | balanced | adjacent-exists | yes |
| I-4001 | balanced | clear | yes |
| I-6002 | balanced | adjacent-exists | yes |
| I-6007 | balanced | adjacent-exists | yes |
| I-1514 | novel | adjacent-exists | yes |
| I-2529 | novel | adjacent-exists | yes |
| I-1053 | novel | adjacent-exists | risky |
| I-3059 | novel | adjacent-exists | yes |
| I-2038 | novel | adjacent-exists | risky |
| I-3044 | novel | adjacent-exists | risky |
| I-4014 | novel | adjacent-exists (lead check; no hunter entry) | no (kept: seed original) |
| I-1027 | balanced | adjacent-exists | yes |
| I-1534 | balanced | adjacent-exists | yes |
| I-3547 | balanced | clear | yes |
| I-2039 | balanced | adjacent-exists | risky |
| I-2040 | balanced | adjacent-exists | risky |
| I-3045 | balanced | adjacent-exists | risky |
| I-3046 | balanced | adjacent-exists | yes |
| I-3049 | balanced | adjacent-exists | yes |
| I-3541 | balanced | adjacent-exists | risky |
| I-4519 | balanced | adjacent-exists | risky |
| I-2008 | novel | adjacent-exists | risky |
| I-3517 | novel | adjacent-exists | risky |
| I-1063 | novel | adjacent-exists | yes |
| I-1555 | novel | adjacent-exists | risky |
| I-2045 | novel | adjacent-exists | risky |
| I-3051 | novel | adjacent-exists | risky |
| I-3088 | balanced | clear | risky |
| I-3055 | balanced | adjacent-exists | yes |
| I-1525 | balanced | adjacent-exists (lead: overturned from direct) | yes |
| I-2043 | balanced | adjacent-exists (lead: overturned from direct) | yes |
| I-2028 | novel | clear | risky |
| I-4511 | novel | adjacent-exists | yes |
| I-1019 | balanced | adjacent-exists | risky |
| I-2583 | balanced | adjacent-exists | yes |
| I-2547 | novel | adjacent-exists | risky |
| I-4028 | novel | clear | risky |
| I-4546 | balanced | adjacent-exists | yes |
| I-2559 | balanced | clear | yes |
| I-2536 | balanced | direct-competitor (lead; kept: seed original) | yes |
| I-3048 | balanced | adjacent-exists | yes |
| I-2067 | novel | adjacent-exists | yes |
| I-2545 | novel | clear | yes |
| I-1022 | balanced | adjacent-exists | yes |
| I-1023 | balanced | adjacent-exists | yes |
| I-3011 | balanced | adjacent-exists | yes |
| I-4030 | novel | adjacent-exists | risky |
| I-2550 | novel | adjacent-exists | yes |
| I-2031 | novel | adjacent-exists | yes |
| I-4005 | balanced | clear | yes |
| I-1039 | balanced | adjacent-exists | yes |
| I-6015 | balanced | adjacent-exists | yes |
| I-1042 | balanced | direct-competitor (lead; kept: seed original) | risky |
| I-6003 | balanced | adjacent-exists | yes |
| I-6006 | balanced | adjacent-exists | yes |
| I-6009 | balanced | adjacent-exists | yes |
| I-3540 | novel | adjacent-exists | yes |
| I-4513 | novel | adjacent-exists | yes |
| I-3537 | novel | adjacent-exists | risky |
| I-3093 | novel | adjacent-exists | risky |
| I-1566 | novel | adjacent-exists | yes |
| I-3026 | novel | adjacent-exists | yes |
| I-1564 | novel | adjacent-exists | yes |
| I-2061 | balanced | adjacent-exists | yes |
| I-1021 | balanced | adjacent-exists | risky |
| I-3070 | balanced | adjacent-exists | risky |
| I-4501 | balanced | adjacent-exists | risky |
| I-3529 | novel | adjacent-exists | risky |
| I-3530 | novel | adjacent-exists | risky |
| I-2020 | novel | adjacent-exists | yes |
| I-3536 | novel | adjacent-exists | yes |
| I-1503 | balanced | adjacent-exists | risky |
| I-1505 | balanced | adjacent-exists | risky |
| I-2519 | balanced | adjacent-exists | risky |
| I-2053 | novel | adjacent-exists | yes |
| I-2069 | novel | adjacent-exists | yes |
| I-3096 | novel | adjacent-exists | yes |
| I-3028 | balanced | adjacent-exists (lead: overturned from direct) | yes |
| I-2522 | balanced | adjacent-exists | yes |
| I-3563 | balanced | adjacent-exists | yes |
| I-4026 | novel | adjacent-exists (lead check; no hunter entry) | yes |
| I-1062 | novel | adjacent-exists | yes |
| I-4563 | novel | adjacent-exists | yes |
| I-4065 | balanced | clear | yes |
| I-1020 | balanced | adjacent-exists | risky |
| I-2049 | novel | adjacent-exists | yes |
| I-2528 | novel | adjacent-exists | yes |
| I-3031 | novel | adjacent-exists | yes |
| I-4570 | novel | adjacent-exists | yes |
| I-2063 | balanced | adjacent-exists | yes |
| I-2078 | balanced | adjacent-exists | risky |
| I-3010 | balanced | adjacent-exists | risky |
| I-6019 | balanced | adjacent-exists | yes |
| I-3582 | novel | clear | yes |
| I-2052 | novel | clear | risky |
| I-1545 | novel | clear | yes |
| I-2003 | novel | adjacent-exists | risky |
| I-1070 | balanced | adjacent-exists | risky |
| I-1071 | balanced | adjacent-exists | yes |
| I-2566 | balanced | adjacent-exists | risky |
| I-3091 | balanced | adjacent-exists | yes |

```json
{"survivors": ["I-1001", "I-3555", "I-1003", "I-4529", "I-4537", "I-1517", "I-2591", "I-6001", "I-4541", "I-3001", "I-3095", "I-3506", "I-2514", "I-2023", "I-2026", "I-2582", "I-4051", "I-4553", "I-1516", "I-1024", "I-4525", "I-2525", "I-1050", "I-3050", "I-1508", "I-3040", "I-4001", "I-6002", "I-6007", "I-1514", "I-2529", "I-1053", "I-3059", "I-2038", "I-3044", "I-4014", "I-1027", "I-1534", "I-3547", "I-2039", "I-2040", "I-3045", "I-3046", "I-3049", "I-3541", "I-4519", "I-2008", "I-3517", "I-1063", "I-1555", "I-2045", "I-3051", "I-3088", "I-3055", "I-1525", "I-2043", "I-2028", "I-4511", "I-1019", "I-2583", "I-2547", "I-4028", "I-4546", "I-2559", "I-2536", "I-3048", "I-2067", "I-2545", "I-1022", "I-1023", "I-3011", "I-4030", "I-2550", "I-2031", "I-4005", "I-1039", "I-6015", "I-1042", "I-6003", "I-6006", "I-6009", "I-3540", "I-4513", "I-3537", "I-3093", "I-1566", "I-3026", "I-1564", "I-2061", "I-1021", "I-3070", "I-4501", "I-3529", "I-3530", "I-2020", "I-3536", "I-1503", "I-1505", "I-2519", "I-2053", "I-2069", "I-3096", "I-3028", "I-2522", "I-3563", "I-4026", "I-1062", "I-4563", "I-4065", "I-1020", "I-2049", "I-2528", "I-3031", "I-4570", "I-2063", "I-2078", "I-3010", "I-6019", "I-3582", "I-2052", "I-1545", "I-2003", "I-1070", "I-1071", "I-2566", "I-3091"], "knocked_out": [{"id": "I-1047", "reason": "direct competitor: FlorianAI voice-assisted NERIS report drafting"}, {"id": "I-4027", "reason": "direct competitor: FlorianAI voice-assisted NERIS report drafting (same product as I-1047)"}, {"id": "I-2047", "reason": "direct competitor: CaseRead / BriefCatch RealityCheck citation checkers"}, {"id": "I-3038", "reason": "direct competitor: CaseRead existence-and-support citation check"}, {"id": "I-2046", "reason": "direct competitor: CaseRead / LawDroid CiteCheck"}, {"id": "I-2568", "reason": "direct competitor: Cloudflare AI Crawl Control native allow/charge/block"}, {"id": "I-3534", "reason": "direct competitor: Cloudflare Pay Per Crawl"}, {"id": "I-4004", "reason": "direct competitor: Counterforce Health consumer appeal generator"}, {"id": "I-2549", "reason": "direct competitor: Counterforce Health / River appeal drafting"}, {"id": "I-2070", "reason": "direct competitor: Counterforce Health appeal drafting from denial plus records"}, {"id": "I-4052", "reason": "direct competitor: IDEXX native lab-to-PIMS integrations"}, {"id": "I-3542", "reason": "direct competitor: IDEXX native Cornerstone integration"}, {"id": "I-4548", "reason": "direct competitor: Carefull / EverSafe elder account monitoring"}, {"id": "I-4029", "reason": "direct competitor: EverSafe / Carefull / Greenlight Family Shield"}, {"id": "I-2050", "reason": "direct competitor: Konvu sandboxed bug-bounty report reproduction"}, {"id": "I-3039", "reason": "direct competitor: Konvu / ProjectDiscovery Triage"}, {"id": "I-4549", "reason": "direct competitor: Sortbox mail-photo triage"}, {"id": "I-6008", "reason": "direct competitor: Lakera Red / Mindgard continuous agent red-teaming"}, {"id": "I-6005", "reason": "direct competitor: Mindgard / CalypsoAI / Lakera Red"}, {"id": "I-1060", "reason": "direct competitor: Adaptive AI bookkeeping learns vendor coding from one correction"}, {"id": "I-4550", "reason": "direct competitor: Lysco bill-vs-EOB comparison and appeal"}, {"id": "I-2584", "reason": "direct competitor: Support Robotics / UniFi WiFi Agent"}, {"id": "I-2590", "reason": "direct competitor: Ava / Google Live Transcribe"}, {"id": "I-2041", "reason": "direct competitor: Acedit / Poised live interview delivery nudges"}, {"id": "I-3047", "reason": "direct competitor: Poised / Beyz live interview feedback"}, {"id": "I-2042", "reason": "direct competitor: TroubleBuddy conversational Windows diagnosis and safe fixes"}, {"id": "I-2044", "reason": "direct competitor: SonarQube for IDE / Checkmarx real-time secret detection"}, {"id": "I-4031", "reason": "direct competitor: Alix / Sunset estate account closing agents"}, {"id": "I-3014", "reason": "direct competitor: FORMFIT / Skeletal PT live pose-based form cues"}, {"id": "I-3572", "reason": "direct competitor: Insight Health / Arkangel prior-auth appeal drafting"}, {"id": "I-4032", "reason": "direct competitor: HeyMedicaid photo-to-autofill Medicaid renewal"}, {"id": "I-4545", "reason": "direct competitor: HeyMedicaid renewal auto-fill and reminders"}, {"id": "I-6004", "reason": "direct competitor: Balto / Observe.AI real-time call compliance"}, {"id": "I-1043", "reason": "direct competitor: Bravo Store Systems / pawn-software.com auto LeadsOnline filing"}, {"id": "I-2082", "reason": "direct competitor: REDDOXX e-invoice XML mailbox archiving"}, {"id": "I-4033", "reason": "direct competitor: Infinx / Skyvern multi-payer prior-auth automation"}]}
```

<!-- COMPLETE -->
