### I-1508 Stop the Wire Before It Sends

Verdict: adjacent-exists

Closest products:
- Eftsure (https://www.eftsure.com) — independently verifies vendor bank details and screens change requests, but priced/positioned for mid-market AP teams, not solo bookkeepers with no finance staff.
- Trustpair (https://trustpair.com) — same mechanism (screens bank-detail changes against fraud patterns before payment releases), sold into ERP/treasury stacks at larger companies.
- Stampli "Billy" bank-details validator (https://www.stampli.com/vendor-management/) — validates vendor bank changes before payment inside an AP automation suite aimed at finance teams, not micro-businesses.

Note: The mechanism (cross-check bank-detail-change requests against history before payment) is a mature enterprise AP-fraud category (Eftsure, Trustpair, Stampli, Graphite Connect). The unclaimed niche is small firms with no finance team at SMB pricing; no product targets that segment specifically.

### I-2067 AI Voice-Clone Scam Call Guardian

Verdict: adjacent-exists

Closest products:
- ShieldsOn (https://shieldson.ai) — flags "grandparent emergency" and account-locked scams with real-time detection and conversation coaching for families, closest match but doesn't specifically target AI-cloned-voice calls or push alerts to a separate proxy's phone mid-call.
- SeniorShield.ai (https://www.seniorshield.ai, App Store id6738144273) — AI scam protection for seniors, but analyzes texts/emails and known scammer numbers, not live call audio.
- Android "fake call detection" (Google, https://blog.google/security/android-fake-call-detection/) — on-device real-time scam-call detection built into the OS, but general scam patterns, not voice-clone/family-fact cross-checking with a proxy alert.

Note: Several products do real-time scam-call detection for seniors (ShieldsOn, Android OS-level detection) but none confirmed to specifically detect AI voice-cloned family-emergency calls and alert a separate adult-child proxy in real time.

### I-3046 Lay of the Land

Verdict: adjacent-exists

Closest products:
- Farmable (https://apps.apple.com/us/app/farmable-farm-manager-app/id1456760199, GitHub issues at github.com/ctrl-alt-elite-za/Farmable) — walk-and-draw AR/GPS field mapping for farm management, but no narration-to-structured-record extraction or confidence/succession framing.
- Mobble (https://www.mobble.io/feature-spotlight/farm-mapping) — GPS-tagged mapping of underground pipes, troughs, hazards while walking the farm, but manual tagging, not voice-narration-driven LLM extraction.
- Farm Estate GPS (https://www.farmestategps.com) — targets farm succession planning, but via advisory videos/consulting, not a walking-narration mapping tool.

Note: Farm-walk GPS mapping tools exist (Farmable, Mobble, Farmbrite) and farm-succession advisory tools exist (Farm Estate GPS) separately, but no product combines narrated-walk speech extraction with confidence-tagged succession mapping.

### I-4051 DMS Ransomware Shadow Continuity

Verdict: adjacent-exists

Closest products:
- Dominion DMS VUE Net (https://www.dominiondms.com/press_release/dominion-dms-announces-a-new-business-continuity-plan-for-automotive-dealers/) — cloud continuity product that backs up and restores any major DMS within hours after an outage, same problem (CDK-style DMS downtime) but via vendor-side backup/restore, not a computer-use agent mirroring live staff screens for instant queryable failover.
- Generic BCDR-for-dealers offerings (e.g., vtechdealerit.com enterprise backup/recovery) — IT-provider backup services for dealerships, same niche, traditional backup mechanism rather than an agent reading screens continuously.

Note: DMS-outage business continuity is an active niche (Dominion VUE Net, dealer IT-BCDR vendors) but all found solutions use backend backup/restore, not a computer-use agent that logs in and mirrors screens like staff do.

### I-6001 Continuous authorised social-engineering testing

Verdict: adjacent-exists

Closest products:
- Brightside AI (https://www.brside.com) — AI-generated multichannel (voice-clone, email) social-engineering simulations against employees with continuous measurement, very close mechanism but targets human staff only, not client's own AI/chatbot agents.
- Arsen (https://arsen.co/en/platform/vishing-simulation) — AI voice-cloned vishing plus multi-stage email/SMS fraud simulations against staff, same "authorized attack, then fix" loop, human-targeted only.
- Lakera Red (https://www.lakera.ai/lakera-red) — continuous adversarial red-teaming specifically against a company's own AI agents/chatbots (the other half of I-6001's scope), but doesn't run human-staff phishing/vishing campaigns.

Note: The idea splits across two mature but separate categories — human-targeted vishing/phishing simulators (Brightside AI, Arsen, CanIPhish) and AI-agent red-teaming tools (Lakera). No single vendor confirmed to combine both under one weekly test-fix-retest loop with white-label pentest pricing.

```json
[
  {"id": "I-1508", "verdict": "adjacent-exists", "competitors": ["Eftsure (https://www.eftsure.com)", "Trustpair (https://trustpair.com)", "Stampli Billy (https://www.stampli.com/vendor-management/)"], "note": "Bank-detail-change screening before payment is a mature enterprise AP-fraud category (Eftsure, Trustpair, Stampli). Unclaimed niche is SMB with no finance team; no product targets that segment specifically."},
  {"id": "I-2067", "verdict": "adjacent-exists", "competitors": ["ShieldsOn (https://shieldson.ai)", "SeniorShield.ai (https://www.seniorshield.ai)", "Android fake call detection (https://blog.google/security/android-fake-call-detection/)"], "note": "Real-time scam-call detection for seniors exists (ShieldsOn, Android OS-level), but none confirmed to specifically flag AI voice-cloned family-emergency claims and alert a separate proxy phone mid-call."},
  {"id": "I-3046", "verdict": "adjacent-exists", "competitors": ["Farmable (https://apps.apple.com/us/app/farmable-farm-manager-app/id1456760199)", "Mobble (https://www.mobble.io/feature-spotlight/farm-mapping)", "Farm Estate GPS (https://www.farmestategps.com)"], "note": "Walk-and-GPS farm mapping tools and separate farm-succession advisory services both exist, but none combine narrated-walk speech extraction with confidence-tagged succession mapping."},
  {"id": "I-4051", "verdict": "adjacent-exists", "competitors": ["Dominion DMS VUE Net (https://www.dominiondms.com/press_release/dominion-dms-announces-a-new-business-continuity-plan-for-automotive-dealers/)", "Dealer IT-BCDR services (https://vtechdealerit.com/it-services/enterprise-data-backup-recovery-auto-dealerships/)"], "note": "DMS-outage continuity for dealers is an active niche, but solutions found use backend backup/restore rather than a computer-use agent mirroring live staff screens."},
  {"id": "I-6001", "verdict": "adjacent-exists", "competitors": ["Brightside AI (https://www.brside.com)", "Arsen (https://arsen.co/en/platform/vishing-simulation)", "Lakera Red (https://www.lakera.ai/lakera-red)"], "note": "Human-targeted vishing/phishing simulators and separate AI-agent red-teaming tools both exist, but no vendor confirmed to combine both in one weekly test-fix-retest loop with white-label pricing."}
]
```
<!-- COMPLETE -->
