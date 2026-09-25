### I-1555 Same Words, More Life

Searches: filler-word removal tools (web), Product Hunt (filler/expressive re-voice), speech-to-speech restyle + lecture sync (web), App Store lecture/energy apps, ElevenLabs Voice Changer docs.

Closest products:
- Cleanvoice AI (https://cleanvoice.ai/filler-words/) — removes "um"/"ah" and adds natural room-tone pauses, same filler-to-pause mechanism, but does not add expressiveness or restyle delivery.
- Descript / VEED / Kapwing filler removers (https://www.descript.com/tools/remove-filler-from-audio) — same filler cleanup category, editing-suite tools, no re-expression of monotone delivery.
- ElevenLabs Voice Changer (https://elevenlabs.io/blog/speech-to-speech) — speech-to-speech that preserves word timing and can transfer emotional delivery, but needs the user to perform the expressive reference take themselves; it doesn't auto-boost a flat recording's own expressiveness or handle fillers, and isn't packaged for lecture/slide sync.

No product found that combines: auto-increasing expressiveness of the *same* speaker's monotone take, filler-to-pause replacement, and frame-exact sync to existing slides/video, sold as a lecture-specific tool.

Verdict: adjacent-exists
Note: Filler removers (Cleanvoice, Descript, VEED) hit the sync/filler half; ElevenLabs Voice Changer hits expressive restyling but needs a performed reference take, not an automatic monotone-to-lively transform. No single tool does both for lecture video.

### I-2522 The Scribe Fact-Checker

Searches: "AI therapy scribe fact check hallucination transcript" (web), GitHub scribe-verify, dev.to Krasyn Note Check announcement, "AI scribe add-on verify note" (web), scribe vendor hallucination blogs (Oli Health, Twofold).

Closest products:
- Krasyn "Note Check" (https://dev.to/krasynemr/we-published-how-we-measure-our-ai-scribes-faithfulness-and-built-a-checker-anyone-can-run-on-any-3jdl) — a live, free tool that pastes in a note from any scribe (Freed, Heidi, Nabla, Abridge, DAX, Suki, Upheal, Mentalyc, etc.) and flags sentences unsupported by the transcript; same "check any vendor's note against transcript" mechanism, but works off pasted text (no built-in audio-to-transcript alignment or local/on-device guarantee) and targets clinicians broadly, not therapists specifically.
- scribe-verify (GitHub, https://github.com/Stephonomon/scribe-verify) — a non-live mock-up (fabricated psychiatry data) demonstrating the identical concept (a checker model cross-references note sentences against transcript, color-coded flags); not a shipped product, so not counted for the verdict itself.
- Oli Health / Twofold blog posts on "transcript grounding" — describe scribe vendors building hallucination-resistance into their own generation pipeline, a different mechanism (grounded generation vs. independent post-hoc audit) and not a separate add-on product.

Verdict: direct-competitor
Note: Krasyn's Note Check is live now, works across major scribe vendors, and does the same sentence-vs-transcript flagging the idea describes; it lacks I-2522's local/on-device and native-audio-alignment framing but the core mechanism and niche match.

### I-3093 Privileged Cite Bench

Searches: "local AI legal citation checker privilege laptop" (web), YC legal citation checker, CiteCheck AI / CiteSentinel / BriefCatch / Clearbrief product pages (via search), arXiv legal hallucination benchmark, general web for on-device legal LLM tools.

Closest products:
- LawDroid CiteCheck AI (via LawSites coverage, https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html) — free cloud site that verifies citations in a document; same niche (catching fabricated/misused citations before filing) but cloud-hosted, so it reintroduces the privilege-waiver exposure I-3093 is built to avoid.
- BriefCatch (https://www.briefcatch.com/blog/pick-an-ai-case-hallucinations-checker) — runs inside Word, checks citations plus writing quality; cloud-based SaaS, not on-device.
- Clearbrief (https://www.cbinsights.com/company/clearbrief) — citation-support and brief-checking tool for litigators; also cloud/SaaS delivery, not a local-model, disconnected-laptop workflow.

No local/on-device, privilege-preserving citation checker was found; all live competitors identified are cloud services, which is the exact risk the idea's mechanism (local open-weight model, nothing leaves the device) is designed to sidestep.

Verdict: adjacent-exists
Note: Several live cloud tools (CiteCheck AI, BriefCatch, Clearbrief) check citations against real case text in the same niche, but all are cloud-hosted; none run fully on-device to preserve privilege, which is I-3093's core mechanism difference.

### I-4525 Callback Verifier for Vendor Payments

Searches: "AI voice agent callback verification vendor bank details" (web), Trustpair/automated account verification (web), YC vendor payment fraud voice agent, GitHub hackathon "callback" vendor fraud interceptor, Rulebase YC launch page.

Closest products:
- Trustpair (https://trustpair.com/automated-account-validation/) — automates vendor bank-detail verification on every change via data-source lookups ("no manual callback required"); same niche (BEC/vendor bank-change fraud) but a different mechanism — instant data/API validation rather than a live outbound phone call to a human at the vendor.
- Rulebase (YC-backed, https://www.ycombinator.com/launches/MBR-rulebase-the-voice-fraud-defense-system-for-financial-services) — live, launched voice-fraud defense for financial institutions, but focused on inbound deepfake/impersonation detection via IVR/CCaaS integration, not on placing outbound verification calls for vendor bank-detail changes.
- "Trouvé" / callback (GitHub hackathon project, https://github.com/Connor-W-Cahill/callback) — near-identical mechanism (holds payment, places an outbound verification call to the vendor's known number, judges the response) but explicitly a SteelHacks XIII hackathon prototype, not a live product, so not a shipped competitor.

Verdict: adjacent-exists
Note: Trustpair already owns the "verify vendor bank-detail changes before payment" niche live, but via automated data checks, not an outbound voice call; a hackathon prototype (not live) shares the exact call-based mechanism.

### I-6007 Live call-verification copilot for payment requests

Searches: "real-time call monitoring AI compliance wire transfer verification" (web), Balto.ai real-time agent assist, Pindrop Pulse deepfake detection for credit unions, Gryphon.ai real-time compliance, credit-union social-engineering call fraud (web), YC/Rulebase cross-check.

Closest products:
- Balto (https://www.balto.ai/real-time-agent-assist/) — live product that listens to calls in real time and privately surfaces compliance checklists/coaching prompts to the agent, including for financial-services scripts; same live-transcript-plus-policy-prompt mechanism as I-6007, but general-purpose contact-center compliance/sales coaching, not configured specifically around payment/account-change verification rules or one-tap supervisor escalation for that purpose.
- Pindrop Pulse (https://www.pindrop.com/product/pindrop-pulse/) — live, deployed at credit unions (e.g., MSUFCU, $2.57M fraud avoided) to catch voice-based fraud in real time; different mechanism (audio deepfake/liveness detection) rather than transcript-vs-policy-rule matching.
- Rulebase (https://www.ycombinator.com/launches/MBR-rulebase-the-voice-fraud-defense-system-for-financial-services) — live YC-backed voice-fraud defense for financial institutions; same buyer (fraud/security teams at financial firms) but mechanism is deepfake/impersonation detection, not live policy-rule flagging with employee coaching.

Verdict: adjacent-exists
Note: Balto delivers the same live-transcript, private-prompt, escalation mechanism but as general compliance coaching, not payment-verification-specific; Pindrop and Rulebase serve the same financial-fraud niche with a different (deepfake-detection) mechanism.

```json
[
  {"id": "I-1555", "verdict": "adjacent-exists", "competitors": ["Cleanvoice AI (https://cleanvoice.ai/filler-words/)", "Descript filler remover (https://www.descript.com/tools/remove-filler-from-audio)", "ElevenLabs Voice Changer (https://elevenlabs.io/blog/speech-to-speech)"], "note": "Filler removers (Cleanvoice, Descript, VEED) cover sync/filler cleanup; ElevenLabs Voice Changer transfers expressive delivery but needs a performed reference take, not auto monotone-to-lively conversion. No tool combines both for lecture video."},
  {"id": "I-2522", "verdict": "direct-competitor", "competitors": ["Krasyn Note Check (https://dev.to/krasynemr/we-published-how-we-measure-our-ai-scribes-faithfulness-and-built-a-checker-anyone-can-run-on-any-3jdl)", "scribe-verify prototype, non-live (https://github.com/Stephonomon/scribe-verify)"], "note": "Krasyn's live, free Note Check tool already flags scribe-note sentences unsupported by the transcript across many vendors (Freed, Heidi, Nabla, Abridge, etc.); same mechanism and adjacent niche, missing only the local/audio-native framing."},
  {"id": "I-3093", "verdict": "adjacent-exists", "competitors": ["LawDroid CiteCheck AI (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html)", "BriefCatch (https://www.briefcatch.com/blog/pick-an-ai-case-hallucinations-checker)", "Clearbrief (https://www.cbinsights.com/company/clearbrief)"], "note": "Live cloud tools check citations against real case text in the same niche, but all are cloud-hosted SaaS; none run fully on-device to preserve privilege, which is this idea's core differentiator."},
  {"id": "I-4525", "verdict": "adjacent-exists", "competitors": ["Trustpair (https://trustpair.com/automated-account-validation/)", "Rulebase (https://www.ycombinator.com/launches/MBR-rulebase-the-voice-fraud-defense-system-for-financial-services)"], "note": "Trustpair owns vendor bank-change verification live but via automated data checks, not an outbound phone call; a matching hackathon prototype exists (GitHub Connor-W-Cahill/callback) but isn't live."},
  {"id": "I-6007", "verdict": "adjacent-exists", "competitors": ["Balto real-time agent assist (https://www.balto.ai/real-time-agent-assist/)", "Pindrop Pulse (https://www.pindrop.com/product/pindrop-pulse/)", "Rulebase (https://www.ycombinator.com/launches/MBR-rulebase-the-voice-fraud-defense-system-for-financial-services)"], "note": "Balto matches the live-transcript, private-prompt, escalation mechanism but as general compliance coaching, not payment-verification-specific; Pindrop/Rulebase serve the same fraud niche via deepfake detection instead."}
]
```
<!-- COMPLETE -->
