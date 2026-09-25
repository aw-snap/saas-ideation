### I-1042 AI live interview coach

**Verdict: direct-competitor**

Closest products:
- Yoodli (https://yoodli.ai/use-cases/interview-preparation) — live browser-extension delivery feedback (pace, fillers, energy) during actual Zoom/Meet/Teams calls, plus AI mock-interview roleplay with follow-ups; same live-nudge-during-real-call mechanism.
- Poised (https://poised.com/) — real-time in-call coaching on filler words, pace, energy, confidence during live video calls, with post-call analytics; targets professionals broadly, not interview-specific.
- Orai (https://orai.com/) — live delivery scoring on pace/filler/clarity/energy, practice-first but positions toward live use.

Note: Yoodli already nudges live during real video calls (not just practice) and gives replay analytics, matching I-1042's live-nudge-plus-replay-timeline mechanism for the same B2C interview-coaching niche; Poised does the same for calls generally.

### I-2045 Same Words, More Life

**Verdict: adjacent-exists**

Closest products:
- Descript (https://www.descript.com/tools/remove-filler-from-video) — removes filler words and offers Overdub voice cloning plus Studio Sound audio repair, but edits via cuts/re-synthesis of flagged words rather than a full re-speak with an energy lift and frame-exact forced-alignment sync to slides.
- Cleanvoice AI (https://cleanvoice.ai/filler-words/) — AI filler-word removal with natural-sounding gap fill, audio-only, no energy re-synthesis or video/slide sync.
- OpusClip (https://www.opus.pro/tools/remove-filler-words-from-video) — filler removal with synced video/audio trims, but no delivery-energy lift or voice-preserving re-synthesis.

Note: Cut-based filler removers (Descript, Cleanvoice, OpusClip) are common, but none re-synthesize the full recording in the same voice with an energy lift while forced-aligning to keep every remaining word's original timestamp for slide sync.

### I-2559 90-Day Reinstatement Filer

**Verdict: adjacent-exists**

Closest products:
- Fortuna Health (https://www.ycombinator.com/companies/fortuna-health) — YC company billed as "TurboTax for Medicaid," a consumer-facing product addressing procedural disenrollments directly, but focused on renewal/enrollment guidance rather than OCR-a-termination-notice-and-autofile-reinstatement in one flow.
- Skyvern (https://www.skyvern.com/blog/medicaid-enrollment-automation/) — browser agent that fills state Medicaid portals from approved case data and stops before submission, same "agent fills no-API state form" mechanism, but sold to caseworkers/orgs for new applications, not a consumer app triggered by photographing a termination notice at signup.

Note: Fortuna Health matches the consumer Medicaid-filing niche; Skyvern matches the portal-filing-agent mechanism; no found product combines OCR-of-termination-notice with autonomous reinstatement filing inside onboarding.

### I-3541 Lay of the Land

**Verdict: adjacent-exists**

Closest products:
- AgriWebb (https://www.agriwebb.com/solutions/farm-mapping/) — GPS farm mapping with infrastructure/landmark tracking and mobile-first observations, but manual note/task entry, not narration-to-map extraction with year/source/confidence tagging.
- Farmbrite (https://www.farmbrite.com/farm-mapping) — GPS-tagged field notes and geolocated scouting records; same "walk the farm, tag a point" idea, no voice-narration parsing or AR playback.
- ARUtility / EasyView (https://www.arutility.com/, https://apps.apple.com/ae/app/easyview/id1564448377) — AR overlay of underground utilities on-site, matching the AR-viewing mechanism, but for professional utility locating, not farmer oral-history capture with confidence-tagged provenance.

Note: Pieces exist separately (GPS field-note apps, AR underground-utility viewers) but none combine narrated oral history, GPS alignment, confidence/provenance tagging, and AR playback for farm succession.

### I-5109 Live Interpreter With Transcript

**Verdict: direct-competitor**

Closest products:
- Mabel AI (https://mabel.care/) — real-time voice-to-voice medical/public-sector translation with domain vocabulary and a full session transcript that can be pushed to records; same live-interpretation-plus-transcript mechanism and niche.
- GoSpeech Medical Translate (https://www.gospeech.com/en/solutions/translate/medical-translate) — real-time AI interpretation for hospitals/health departments with dual-language transcript export for compliant documentation, closely matching the dispute-record use case.
- Aida (https://apps.apple.com/us/app/aida-ai-medical-interpreter/id6743888100) — real-time voice-to-voice medical interpreter, 20+ languages, live App Store product.
- Opalite Health (https://www.ycombinator.com/companies/opalite-health) — YC company, real-time AI medical interpreter for providers and limited-English patients.

Note: Multiple live products already do voice-to-voice medical/public-sector interpretation with exportable bilingual transcripts; differentiation would rest on low-resource-language coverage (e.g., Haitian Creole) rather than a novel mechanism.

```json
[
  {"id": "I-1042", "verdict": "direct-competitor", "competitors": ["Yoodli (https://yoodli.ai/use-cases/interview-preparation)", "Poised (https://poised.com/)", "Orai (https://orai.com/)"], "note": "Yoodli already nudges live during real video calls with replay analytics; Poised does live in-call coaching too. Same mechanism and niche."},
  {"id": "I-2045", "verdict": "adjacent-exists", "competitors": ["Descript (https://www.descript.com/tools/remove-filler-from-video)", "Cleanvoice AI (https://cleanvoice.ai/filler-words/)", "OpusClip (https://www.opus.pro/tools/remove-filler-words-from-video)"], "note": "Cut-based filler removers are common but none re-synthesize full audio in the same voice with an energy lift while forced-aligning timestamps for slide sync."},
  {"id": "I-2559", "verdict": "adjacent-exists", "competitors": ["Fortuna Health (https://www.ycombinator.com/companies/fortuna-health)", "Skyvern (https://www.skyvern.com/blog/medicaid-enrollment-automation/)"], "note": "Fortuna Health matches the consumer Medicaid niche; Skyvern matches the portal-filing-agent mechanism; no product combines OCR-notice capture with autonomous reinstatement filing at signup."},
  {"id": "I-3541", "verdict": "adjacent-exists", "competitors": ["AgriWebb (https://www.agriwebb.com/solutions/farm-mapping/)", "Farmbrite (https://www.farmbrite.com/farm-mapping)", "ARUtility (https://www.arutility.com/)"], "note": "GPS field-note apps and AR underground-utility viewers exist separately; none combine narrated oral history, confidence-tagged provenance, and AR playback for farm succession."},
  {"id": "I-5109", "verdict": "direct-competitor", "competitors": ["Mabel AI (https://mabel.care/)", "GoSpeech Medical Translate (https://www.gospeech.com/en/solutions/translate/medical-translate)", "Aida (https://apps.apple.com/us/app/aida-ai-medical-interpreter/id6743888100)"], "note": "Live medical interpreters with exportable bilingual transcripts already ship (Mabel AI, GoSpeech, Aida, Opalite Health); differentiation would need low-resource-language depth."}
]
```
<!-- COMPLETE -->
