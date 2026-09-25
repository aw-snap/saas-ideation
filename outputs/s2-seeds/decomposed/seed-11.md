# seed-11 decomposed: Jev, context-aware phrase suggestions for AAC

## Atoms

- A-seed-11-aud-1: AAC users on eye-tracking, switch-scanning or other slow access methods.
- A-seed-11-aud-2: Speech-language therapists, schools, clinics and AAC device/app makers who configure or fund it.
- A-seed-11-pain-1: Finding the right saved phrase means navigating folders while the conversation keeps moving.
- A-seed-11-pain-2: Typing or searching takes long enough that the moment to respond has already passed.
- A-seed-11-mech-1: Uses the other speaker's recent words as context to rank the user's own phrase bank.
- A-seed-11-mech-2: Only ranks phrases the user already chose or approved; never composes or infers meaning.
- A-seed-11-mech-3: Normal AAC interface stays available; user can ignore, edit or switch listening off anytime.
- A-seed-11-tech-1: Speech-to-text on the partner's speech plus semantic embedding match against the phrase bank. [inferred]
- A-seed-11-tech-2: On-device processing floated as a privacy option to avoid transmitting conversation audio.
- A-seed-11-biz-1: License the ranking feature to AAC app or device makers.
- A-seed-11-biz-2: Optional subscription for direct users, with public/charitable disability funding covering costs.
- A-seed-11-demo-1: Replay a consented conversation; matching saved phrases rise to the top as the partner speaks.
- A-seed-11-insight-1: The user's prepared words already exist; the bottleneck is finding them fast, not generating new ones.

## Prior art

- Converser / partner-speech-recognition AAC research: uses speaking-partner ASR to predict contextually relevant utterances. https://www.tandfonline.com/doi/abs/10.1080/07434610701740448 — adjacent-exists, same core mechanism (partner speech drives suggestion) shown in academic research, not confirmed as a shipping product.
- KWickChat: multi-turn AAC dialogue system generating context-aware sentences from keywords and dialogue history. https://dl.acm.org/doi/fullHtml/10.1145/3490099.3511145 — adjacent, generates new sentences rather than ranking a fixed personal phrase bank.
- Context-Aware Text Prediction for Enhancing Augmentative Communication (Dundee): context-driven text prediction for AAC. https://discovery.dundee.ac.uk/en/clippings/context-aware-text-prediction-for-enhancing-augmentative-communic — adjacent, prediction-focused rather than ranking pre-approved phrases only.

Verdict: adjacent-exists. Academic AAC systems already use conversation-partner speech to drive contextual suggestions, and some generate rather than rank; the seed's own open questions admit this needs independent verification and no direct shipping competitor was confirmed.

## Weakest points

- Closest prior art (partner-speech-driven AAC prediction) is research-stage, not confirmed as a current commercial product, so the "why now" claim of novelty is unverified rather than clear.
- Whether AAC platforms are closed and don't expose phrase banks for integration is unresolved, which could block the licensing business model entirely.
- No evidence yet on real phrase-bank size/organization or on-device ranking speed on existing AAC hardware, so the demo's premise (fast, useful ranking) is unproven.

<!-- COMPLETE -->
