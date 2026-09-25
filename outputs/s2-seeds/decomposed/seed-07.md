# seed-07: Built on Jev — decomposed

## Atoms

- A-seed-07-aud-1: Open; any system or developer that would call AI on every keystroke, frame, event or log line if inference were free.
- A-seed-07-pain-1: Current AI is too slow and expensive for per-event use, forcing batching, sampling, or a human in the loop.
- A-seed-07-mech-1: Jev, a fast "System 1" model, makes reflex-style judgements on every event in real time.
- A-seed-07-mech-2: The reflex layer escalates to a slower "System 2" model only when needed.
- A-seed-07-tech-1: Jev, claimed hundreds of times faster and cheaper than normal AI models. [unverified]
- A-seed-07-biz-1: Not specified; depends on the product eventually chosen.
- A-seed-07-demo-1: An AI judgement on every keystroke or frame, with no perceptible lag.
- A-seed-07-insight-1: Near-instant, near-free inference unlocks always-on, per-event AI uses impossible at today's latency and cost.

## Prior art

Note: the web search budget for this session was already exhausted before any query for this task could run, so the checks below draw on general product knowledge rather than a live search, and no specific URLs are given. Treat this section as lower-confidence than a normal prior-art pass; "Jev" itself could not be verified to exist.

- Low-latency inference infrastructure (e.g., Groq's LPU-hosted models) already offers very fast, cheap inference suited to reflexive, high-volume tasks, independent of whether "Jev" is real. Adjacent, same enabling-tech category.
- Cascade/two-stage architectures pairing a small fast model with escalation to a larger model (common in production ML, e.g., cascade classifiers, speculative decoding, "small model triages, big model decides") are an established pattern, not novel. Adjacent, same "System 1/2" idea used elsewhere.
- No specific product found built around a model named "Jev"; the group itself flags this as unverified.
- **Verdict: adjacent-exists** (the fast-cheap-model-as-reflex-layer pattern and infra already exist; Jev's specific differentiator is unconfirmed).

## Weakest points

- Jev's existence, public availability, and actual speed/cost are entirely unverified; the seed's premise rests on an unconfirmed external claim.
- No product or buyer is chosen yet — "could be used in systems" is a capability without a specific pain, as the group itself admits.
- The escalation rule to System 2 and the business model are both unspecified, leaving core UX and monetization undefined.

<!-- COMPLETE -->
