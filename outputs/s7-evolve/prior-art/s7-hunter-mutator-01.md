### I-5101 Linked Call-and-Statement Alert

Verdict: adjacent-exists

Closest products:
- Carefull (https://getcarefull.com/) — monitors bank/card transactions for scam-linked activity (e.g., gift-card purchases) but does not transcribe calls or link a scam call to a same-day new payee.
- Aura / Robokiller / carrier tools (ScamShield, Call Filter) — flag scam calls in real time but don't cross-reference bank statements.

Note: Call-scam detection and transaction-anomaly alerts both exist separately (Carefull, Aura); no found product links a transcribed call to a statement event as one alert.

### I-5102 Family Account Security Sweep

Verdict: clear

Closest products:
- Google Password Checkup — checks breached/reused passwords but only for the logged-in user's own account, not a proxy sweeping a relative's account with an agent.
- 2FA/authenticator apps (generic) — manage 2FA codes, don't audit or produce evidence screenshots of a relative's settings.

Note: No product found that runs an agent inside a relative's own logged-in session to produce evidence-based (screenshot) findings for a family tech proxy, as opposed to a self-service score.

### I-5103 Appeal Filed, Now Confirmed

Verdict: clear

Closest products:
- None found specific to automated voice-agent follow-up calls confirming Medicare appeal receipt with a quoted transcript.

Note: Searches returned only general Medicare appeals guidance (CMS, NCOA, Medicare.gov); no voice-agent product that calls plans to confirm/expedite an appeal and quote-cites the transcript.

### I-5104 Household Account Change Digest

Verdict: adjacent-exists

Closest products:
- Trim / Rocket Money (rocketmoney.com) — track subscriptions/changes but require account login/linking, not forward-only email parsing.
- Generic email digest tools (Postmark, Zulip, Circle) — produce weekly digests but for unrelated platforms, not household institution notices.

Note: Digest-from-inbox tooling exists generically, and login-based account trackers exist, but no product found that digests forwarded institution notices without ever logging in.

### I-5105 Reversal-Owed Charge Checker

Verdict: adjacent-exists

Closest products:
- Bill Simplify (https://apps.apple.com/bb/app/bill-simplify/id6751174119) — AI analysis of billing statements to detect duplicate charges, errors, suspicious fees, and generate dispute letters; close mechanism overlap.
- MoneyPilot (moneypilot.com) — surfaces and tracks recurring charges, but focused on subscriptions, not refund/trial/hold-specific flags.

Note: Bill Simplify covers similar ground (duplicate/erroneous charge detection with AI); unclear if it runs fully client-side/deterministic-first like this idea claims.

### I-5106 Consent-Scripted Hold Queue Agent

Verdict: adjacent-exists

Closest products:
- Google "Hold for Me" (https://blog.google/products/pixel/hold-for-me/) — waits on hold for the user, but discloses whatever is asked rather than enforcing a pre-approved consent script.
- DoNotPay — automates calls/negotiations on consumer's behalf, not scoped to a pre-approved identity-disclosure script.

Note: Hold-for-me and call-automation tools are established; no product found that enforces a pre-approved, refuse-if-outside-script identity disclosure boundary.

### I-5107 Redact Before You Paste

Verdict: direct-competitor

Closest products:
- PrivacyScrubber (https://chromewebstore.google.com/detail/privacyscrubber) — replaces PII with placeholder tokens before sending to ChatGPT, restores on response, fully local.
- Rescriber (https://chromewebstore.google.com/detail/rescriber) — same local-detect/placeholder/restore mechanism for ChatGPT prompts.
- VamiGuard (https://vamiguard.com/) — local PII/DLP redaction with placeholder restoration for ChatGPT, Claude, Copilot.

Note: Multiple live browser extensions already do local redact-before-send with placeholder restoration for ChatGPT/Claude — same niche and same mechanism as this idea.

### I-5108 Attestation Drift Alert

Verdict: clear

Closest products:
- None found; searches returned only general guidance on ACA subsidy reconciliation and unemployment income-change reporting rules, no monitoring app.

Note: No app found comparing pay stubs/deposits on-device against attested ACA, unemployment, or student-aid figures to warn before a clawback threshold.

### I-5109 Live Interpreter With Transcript

Verdict: adjacent-exists

Closest products:
- Soniox (https://soniox.com/) — real-time speech-to-speech translation API with transcript+translation output across 60+ languages, but a developer platform, not a consumer appointment app with two-language PDF export.
- Pairaphrase (https://www.pairaphrase.com/) — HIPAA-compliant speech dictation/translation with transcript export, but enterprise/medical-provider focused, not consumer-facing for government/clinic appointments.

Note: Real-time speech-to-speech translation with transcript export exists as developer/enterprise tooling; no consumer product found targeting low-resource-language appointment transcripts specifically.

```json
[
  {"id": "I-5101", "verdict": "adjacent-exists", "competitors": ["Carefull (https://getcarefull.com/)", "Aura (https://www.aura.com/)"], "note": "Call-scam detection and transaction-anomaly alerts exist separately (Carefull, Aura); no product links a transcribed call to a statement event as one alert."},
  {"id": "I-5102", "verdict": "clear", "competitors": ["Google Password Checkup (https://passwords.google.com/)"], "note": "No product found running an agent inside a relative's own session to produce evidence-screenshot findings for a family proxy."},
  {"id": "I-5103", "verdict": "clear", "competitors": [], "note": "No voice-agent product found that calls Medicare plans to confirm/expedite an appeal with a quote-cited transcript."},
  {"id": "I-5104", "verdict": "adjacent-exists", "competitors": ["Rocket Money (https://www.rocketmoney.com/)", "Trim (https://www.trim.com/)"], "note": "Login-based account/subscription trackers exist, but no product digests forwarded institution notices without ever logging in."},
  {"id": "I-5105", "verdict": "adjacent-exists", "competitors": ["Bill Simplify (https://apps.apple.com/bb/app/bill-simplify/id6751174119)", "MoneyPilot (https://www.moneypilot.com/)"], "note": "Bill Simplify covers similar duplicate/erroneous-charge AI detection; unclear if it's client-side/deterministic-first like this idea."},
  {"id": "I-5106", "verdict": "adjacent-exists", "competitors": ["Google Hold for Me (https://blog.google/products/pixel/hold-for-me/)", "DoNotPay (https://donotpay.com/)"], "note": "Hold-for-me and call automation tools exist; none found enforce a pre-approved, refuse-if-outside-script disclosure boundary."},
  {"id": "I-5107", "verdict": "direct-competitor", "competitors": ["PrivacyScrubber (https://chromewebstore.google.com/detail/privacyscrubber-%E2%80%94-pii-red/pimoejgefeilajmmbpghifdmhdlkgjol)", "Rescriber (https://chromewebstore.google.com/detail/rescriber/oglddlncokahjddccgjnnpdlgdbijcbl)", "VamiGuard (https://vamiguard.com/)"], "note": "Multiple live extensions already do local redact-before-send with placeholder restoration for ChatGPT/Claude, same niche and mechanism."},
  {"id": "I-5108", "verdict": "clear", "competitors": [], "note": "No app found comparing pay stubs against ACA/unemployment/student-aid attestations to warn before a clawback."},
  {"id": "I-5109", "verdict": "adjacent-exists", "competitors": ["Soniox (https://soniox.com/)", "Pairaphrase (https://www.pairaphrase.com/)"], "note": "Real-time speech-to-speech translation with transcript export exists as developer/enterprise tooling, not a consumer appointment app for low-resource languages."}
]
```
<!-- COMPLETE -->
