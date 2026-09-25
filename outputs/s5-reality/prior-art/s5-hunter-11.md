### I-1042 AI live interview coach
Verdict: adjacent-exists
Competitors:
- Huru.ai (https://huru.ai/) — mock-interview analysis of pace/filler/tone, but not live nudges during the real interview.
- LockedIn AI (https://www.lockedinai.com/) — real-time live-interview copilot, but it feeds answers rather than delivery-only coaching.
- Live Interview AI (https://liveinterview.ai/) — listens live during interviews but generates answers, not "never answers" delivery cues.
Note: Crowded "interview copilot" space, but most tools supply answers; a delivery-only, answer-refusing live coach with a replay timeline is a narrower mechanism not directly matched.

### I-1508 Stop the Wire Before It Sends
Verdict: direct-competitor
Competitors:
- GatekeeperHQ Bank Details Validator Agent (https://www.gatekeeperhq.com/blog/bank-details-validator-screen-vendor-bank-detail-changes-against-fraud-patterns-before-payment) — screens vendor bank-detail changes against risk patterns before payment.
- Trustpair (https://trustpair.com/blog/best-ai-fraud-detection-solution-2026/) — AI fraud detection for vendor payment/bank-change fraud.
- Ottimate (https://ottimate.com/blog/accounts-payable-fraud-prevention-how-ai-catches-risk-before-payment/) — AP fraud detection before payment release.
Note: Same niche (small-firm AP wire fraud) and same mechanism (cross-check bank-detail change vs. history before payment) already live from multiple vendors.

### I-2020 Checks What The Filing Agent Did
Verdict: adjacent-exists
Competitors:
- Happycapy (https://happycapy.ai/blog/ai-agent-fill-compliance-forms-automatically) — browser agent fills compliance forms in state portals, but doesn't independently audit a third-party agent's claimed work.
- Skyvern (https://www.skyvern.com/) — general browser-automation agent for portal tasks, not a verification/audit tool.
Note: Browser agents that operate inside state portals exist, but none found that specifically re-verify a paid filing agent's billed work against actual portal status.

### I-2045 Same Words, More Life
Verdict: adjacent-exists
Competitors:
- Descript (https://www.descript.com/tools/remove-filler-from-audio) — removes fillers and preserves voice/sync, but no monotone-to-energetic re-synthesis.
- Cleanvoice AI (https://cleanvoice.ai/filler-words/) — filler removal with natural flow, same gap on energy lift.
- OpusClip (https://www.opus.pro/tools/remove-filler-words-from-video) — filler removal with audio/video re-sync.
Note: Filler-removal-with-sync is a solved, competitive space; the specific "re-speak same voice with an energy lift while keeping exact word timing" step is not covered by these tools.

### I-2078 Standing Order Video Brief
Verdict: adjacent-exists
Competitors:
- Ropes & Gray AI Court Order Tracker (https://libguides.law.widener.edu/c.php?g=1342893&p=10028671) — interactive tracker of court GenAI standing orders, text-based only.
- RAILS AI Orders Tracker (https://rails.legal/resources/resource-ai-orders/) — compiles court GenAI rules/orders, no per-filing citation check or video output.
- Law360 AI Tracker (https://www.law360.com/pulse/ai-tracker) — tracks federal judge AI orders, text-only.
Note: Several trackers cover "what does this judge require," but none generate a personalized video briefing or run a pre-filing citation pass-fail check.

### I-2550 Medicaid Renewal Mail Guardian
Verdict: adjacent-exists
Competitors:
- RenewalKit (https://apps.apple.com/us/app/remind-me-with-ocr-renewalkit/id6758590671) — on-device OCR scans documents for expiration dates and reminders, but generic, not Medicaid-packet-aware or deadline/required-document extraction specific.
Note: General OCR-reminder apps exist for scanned mail, but none found that parse Medicaid renewal packets specifically for deadline and required documents.

### I-3014 Live Lift Form Coach
Verdict: direct-competitor
Competitors:
- FORMFIT (https://play.google.com/store/apps/details?id=com.adimo.neurafit&hl=en_US) — phone-camera real-time pose tracking with voice coaching across squats/deadlifts/presses.
- Lucid AI Form Coach (https://lucid-ai-form-coach.lovable.app/) — live rep-by-rep pose tracking, joint angles, form scoring on-device.
- Skeletal PT (https://apps.apple.com/us/app/-/id6757767729) — camera-based rep/depth/form tracking.
Note: Multiple live apps already do phone-camera pose tracking with real-time, rep-by-rep form cues for the exact same gym-goer niche.

### I-3049 AI Feature-Request Reviewer
Verdict: adjacent-exists
Competitors:
- agent-estimate (https://github.com/kiloloop/agent-estimate) — PERT/METR-based effort estimation, but estimates AI-agent work, not client feature requests with file-touch lists and posted clarifying questions.
- GitHub Copilot coding agent (https://github.blog/ai-and-ml/github-copilot/assigning-and-completing-issues-with-coding-agent-in-github-copilot/) — explores repo and implements from an issue, but ships code rather than a scoped time/risk estimate posted back to the client.
Note: Repo-aware agents that read issues exist, but none found that specifically return a client-facing time/risk estimate plus clarifying questions as a ticket comment.

### I-3517 Vendor Hold-Line Voice Confirmer
Verdict: adjacent-exists
Competitors:
- UiPath Agent Builder (https://www.uipath.com/resources/agentic-use-cases/agent-builder-resolves-invoice-disputes) — agent resolves invoice disputes, adjacent workflow but RPA-oriented, not phone/IVR-specific.
- Retell AI (https://www.retellai.com/blog/best-ai-voice-agents-phone-support-automation) — outbound AI voice agents for phone support automation, general purpose.
Note: General AI voice agents that place outbound support calls exist; none found specifically built for navigating vendor IVR holds to resolve a rejected e-invoice with spoken readback confirmation.

### I-3572 Appeal Autodraft From Policy
Verdict: direct-competitor
Competitors:
- Arkangel (https://arkangel.ai/en/resources/app/ai-drafted-prior-authorization-letters-to-expedite-insurance-approvals-and-improve-patient-care) — AI-drafted prior-authorization appeal letters to expedite approvals.
- Insight Health (https://www.insighthealth.ai/blog/prior-authorization-appeal-ai) — AI reads denial reason, matches payer criteria, drafts grounded appeal letter.
Note: Live products already draft prior-auth appeals grounded in payer policy and chart evidence for the same practice-manager buyer.

### I-4032 Medicaid Renewal, Pre-Answered
Verdict: direct-competitor
Competitors:
- Skyvern (https://www.skyvern.com/blog/medicaid-enrollment-automation/) — takes case-record info and fills Medicaid applications via browser automation in under 15 minutes.
- Droidal (https://droidal.com/enrollment-ai-agent/) — AI agent auto-fills enrollment forms and submits to the payer/portal.
Note: Live browser-agent products already extract data and auto-fill/submit Medicaid applications through state portals, the same core mechanism as this idea.

### I-4541 PHI-Blind Portal Runner
Verdict: adjacent-exists
Competitors:
- Philterd (https://philterd.ai/blog/redact-pii-before-sending-to-an-llm/) — redacts PII/PHI before sending to an LLM, but a general redaction tool, not paired with a downstream browser agent that submits a payer portal form.
Note: On-device PHI redaction before cloud LLM calls is an established pattern (also in research papers), but chaining it to a browser agent for prior-auth portal submission wasn't found live.

### I-6004 Compliance Call Copilot
Verdict: direct-competitor
Competitors:
- Balto.ai (https://www.balto.ai/blog/best-real-time-compliance-monitoring-software-for-contact-centers-2026/) — real-time compliance monitoring, flags missed disclosures, supervisor alerts.
- Observe.AI (https://www.observe.ai/contact-center-glossary/what-is-call-center-compliance) — live call analysis flagging compliance risks and script deviations.
- Convin.ai (https://convin.ai/blog/how-to-simplify-compliance-check-with-ai-phone-monitoring) — AI phone monitoring for compliance checks.
Note: Multiple live vendors already do real-time transcript monitoring with disclosure/verification flags and supervisor escalation for regulated call centers.

```json
[
  {"id": "I-1042", "verdict": "adjacent-exists", "competitors": ["Huru.ai (https://huru.ai/)", "LockedIn AI (https://www.lockedinai.com/)", "Live Interview AI (https://liveinterview.ai/)"], "note": "Crowded interview-copilot space, but most give answers; a delivery-only, answer-refusing live coach with replay timeline is narrower."},
  {"id": "I-1508", "verdict": "direct-competitor", "competitors": ["GatekeeperHQ Bank Details Validator Agent (https://www.gatekeeperhq.com/blog/bank-details-validator-screen-vendor-bank-detail-changes-against-fraud-patterns-before-payment)", "Trustpair (https://trustpair.com/blog/best-ai-fraud-detection-solution-2026/)", "Ottimate (https://ottimate.com/blog/accounts-payable-fraud-prevention-how-ai-catches-risk-before-payment/)"], "note": "Same niche and mechanism (cross-check bank-detail change vs history before payment) already live from multiple vendors."},
  {"id": "I-2020", "verdict": "adjacent-exists", "competitors": ["Happycapy (https://happycapy.ai/blog/ai-agent-fill-compliance-forms-automatically)", "Skyvern (https://www.skyvern.com/)"], "note": "Browser agents that work inside state portals exist, but none found independently re-verify a paid filing agent's claimed work."},
  {"id": "I-2045", "verdict": "adjacent-exists", "competitors": ["Descript (https://www.descript.com/tools/remove-filler-from-audio)", "Cleanvoice AI (https://cleanvoice.ai/filler-words/)", "OpusClip (https://www.opus.pro/tools/remove-filler-words-from-video)"], "note": "Filler-removal-with-sync is competitive, but the monotone-to-energetic re-synthesis step isn't covered."},
  {"id": "I-2078", "verdict": "adjacent-exists", "competitors": ["Ropes & Gray AI Court Order Tracker (https://libguides.law.widener.edu/c.php?g=1342893&p=10028671)", "RAILS AI Orders Tracker (https://rails.legal/resources/resource-ai-orders/)", "Law360 AI Tracker (https://www.law360.com/pulse/ai-tracker)"], "note": "Trackers cover per-judge rules in text, but none generate a personalized video briefing with a citation pass-fail check."},
  {"id": "I-2550", "verdict": "adjacent-exists", "competitors": ["RenewalKit (https://apps.apple.com/us/app/remind-me-with-ocr-renewalkit/id6758590671)"], "note": "General OCR-reminder apps scan mail for dates, but none found parse Medicaid packets for deadline/required documents specifically."},
  {"id": "I-3014", "verdict": "direct-competitor", "competitors": ["FORMFIT (https://play.google.com/store/apps/details?id=com.adimo.neurafit&hl=en_US)", "Lucid AI Form Coach (https://lucid-ai-form-coach.lovable.app/)", "Skeletal PT (https://apps.apple.com/us/app/-/id6757767729)"], "note": "Multiple live apps already do phone-camera live pose tracking with rep-by-rep form cues for the same gym-goer niche."},
  {"id": "I-3049", "verdict": "adjacent-exists", "competitors": ["agent-estimate (https://github.com/kiloloop/agent-estimate)", "GitHub Copilot coding agent (https://github.blog/ai-and-ml/github-copilot/assigning-and-completing-issues-with-coding-agent-in-github-copilot/)"], "note": "Repo-aware agents exist, but none found return a client-facing time/risk estimate plus clarifying questions posted to the ticket."},
  {"id": "I-3517", "verdict": "adjacent-exists", "competitors": ["UiPath Agent Builder (https://www.uipath.com/resources/agentic-use-cases/agent-builder-resolves-invoice-disputes)", "Retell AI (https://www.retellai.com/blog/best-ai-voice-agents-phone-support-automation)"], "note": "General outbound AI voice/dispute agents exist, but none specifically navigate vendor IVR holds for rejected e-invoices with spoken confirmation readback."},
  {"id": "I-3572", "verdict": "direct-competitor", "competitors": ["Arkangel (https://arkangel.ai/en/resources/app/ai-drafted-prior-authorization-letters-to-expedite-insurance-approvals-and-improve-patient-care)", "Insight Health (https://www.insighthealth.ai/blog/prior-authorization-appeal-ai)"], "note": "Live tools already draft prior-auth appeals grounded in payer policy and chart evidence for the same buyer."},
  {"id": "I-4032", "verdict": "direct-competitor", "competitors": ["Skyvern (https://www.skyvern.com/blog/medicaid-enrollment-automation/)", "Droidal (https://droidal.com/enrollment-ai-agent/)"], "note": "Live browser-agent products already auto-fill and submit Medicaid applications from case data through state portals."},
  {"id": "I-4541", "verdict": "adjacent-exists", "competitors": ["Philterd (https://philterd.ai/blog/redact-pii-before-sending-to-an-llm/)"], "note": "On-device PHI redaction before cloud LLM calls is an established pattern, but chained to a browser agent for portal submission wasn't found live."},
  {"id": "I-6004", "verdict": "direct-competitor", "competitors": ["Balto.ai (https://www.balto.ai/blog/best-real-time-compliance-monitoring-software-for-contact-centers-2026/)", "Observe.AI (https://www.observe.ai/contact-center-glossary/what-is-call-center-compliance)", "Convin.ai (https://convin.ai/blog/how-to-simplify-compliance-check-with-ai-phone-monitoring)"], "note": "Multiple live vendors already do real-time transcript monitoring with disclosure/verification flags and supervisor escalation for regulated call centers."}
]
```
<!-- COMPLETE -->
