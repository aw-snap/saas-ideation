# seed-11: Jev, context-aware phrase suggestions for AAC

Provenance: the input header says the whole file is a structured rewrite of the group's idea and notes. No line is marked as the group's verbatim words, and the rewrite doesn't separate added material, so fields below aren't marked [+]. My own inferences are marked `[inferred]`.

## Seed card

- **Title:** Jev, context-aware phrase suggestions for AAC
- **One-liner:** An assistive communication feature that listens to a conversation and quickly ranks a person's own saved phrases, so they can choose a relevant reply with fewer taps.
- **Audience:** People who use augmentative and alternative communication (AAC), especially people who use eye tracking, switch scanning or other access methods that make typing slow. Buyers and supporters: AAC users and families, speech-language therapists, schools, clinics, care providers, and public or charitable funding programmes.
- **Pain:** Even with a bank of frequently used phrases, finding the right one can mean navigating folders while the conversation moves on. Typing or searching can take so long that the moment to respond has passed.
- **Mechanism:** Uses the other speaker's recent words as context, searches the user's personal phrase bank, and moves a few likely replies to the top of the screen (for example, "Would you like to watch a movie or go to sleep?" surfaces "Let's go to sleep" and "I want to watch a movie"). Suggestions come only from phrases the user chose or approved; it ranks, never composes, and never decides what the user means. The existing AAC interface stays available; users can ignore, edit or pick another phrase, and turn listening off at any time. First version: works with an existing phrase bank and shows a few suggestions beside the normal controls.
- **Enabling tech:** Not named beyond listening and ranking, with on-device processing floated as a privacy option. Most direct reading: speech-to-text for the partner's words plus semantic matching (for example, text embeddings) against the phrase bank. `[inferred]`
- **Business model:** License the feature to AAC app or device makers, or offer it as an optional subscription. Public healthcare, education, disability-support or charitable funding may cover costs where users can't pay; eligibility and funding routes vary by location and need validation.
- **Demo moment:** Replay a consented conversation and show the ranking change as the other person speaks.
- **Core insight:** The user's own prepared words already exist; the bottleneck is finding them in time. Ranking, not generating, speeds replies while keeping the user's voice their own. `[inferred]` phrasing, drawn from the excitement lines.
- **What excites the group:** Context from the other speaker's words; replies from the user's own approved phrases only; keeping the user's wording, preferences and style central; less navigation and typing; the normal interface always available with listening under the user's control. Later possibilities: multilingual phrases, therapist- or caregiver-assisted phrase-bank setup, schools and care settings (only if evidence from AAC users supports them).
- **Open questions:**
  - Stated in the seed: Does ambient listening plus phrase ranking solve a frequent, important problem, and for which users, access methods, settings and conversation types? Will users want a microphone listening, given partner consent, privacy, retention and the need to pause (on-device may help)? Recognition failures with noise, overlapping speakers, accents and under-represented languages or styles; suggestions must not block controls or slow users when confidence is low. Ranked phrases can still be irrelevant or misleading; users need control and a reliable dismiss. How large and well-organised are real phrase banks, and how fast can ranking run on existing AAC devices? Existing AAC products and research may already offer context-aware prediction; the supplied prior-art notes need independent, current verification. The route to adoption (AAC providers, direct-to-user, or therapists and service providers), and what evidence funders would require.
  - Gaps seen: Whether the product is a standalone app or must integrate with closed AAC platforms, which may not expose phrase banks `[inferred]`. How ranking quality would be measured (taps saved, time to reply). A sample phrase bank and consented conversation recordings for the 48-hour demo. Whether sharing the same name ("Jev") as seed-10 is deliberate.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-11
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# Jev: context-aware AAC phrase suggestions

One-liner (≤20 words): Listens to a conversation and ranks an AAC user's own saved phrases so a relevant reply takes fewer taps.
Buyer and niche (≤25 words): People using AAC via eye tracking, switch scanning or other slow access methods; also families, speech-language therapists, schools, clinics and AAC device makers.
Pain and evidence (≤40 words; cite the pain dossier file): AAC users select letters, words or phrases on a device. Finding the right saved phrase means navigating folders while the conversation moves on; typing or searching can take so long the moment to respond passes. (src: inputs/seeds/seed-11.md)
How it works (≤50 words): The device uses the other speaker's recent words as context, searches the user's personal phrase bank, and moves a few likely replies to the top. It only ranks phrases the user chose or approved; it never composes replies. The normal AAC interface stays available, and listening can be switched off.
Why now (≤25 words; name the specific capability): Fast speech recognition and semantic text matching that can rank a personal phrase bank during a live conversation, possibly on-device [unverified].
Demo moment (≤20 words): Replay a consented conversation; as the other person speaks, the user's matching saved phrases rise to the top.
Business model (≤15 words): License to AAC app or device makers, or optional subscription; public or charitable funding.

## Original text

```text
<!-- Deferred on 2026-09-25; released for processing by the user on 2026-09-26.
     Everything below is a structured rewrite of the supplied idea and notes. -->

Title: Jev, context-aware phrase suggestions for AAC
One-liner: An assistive communication feature that listens to a conversation, then quickly ranks a person's own saved phrases so they can choose a relevant reply with fewer taps.
Who it's for: People who use augmentative and alternative communication (AAC), especially people who rely on eye tracking, switch scanning, or other access methods that make typing slow. Potential buyers and supporters include AAC users and their families, speech-language therapists, schools, clinics, care providers, and public or charitable funding programmes.
The pain it solves: Many AAC users communicate by selecting letters, words, or phrases on a device. Even when a person has a bank of frequently used phrases, finding the right one can require navigating folders while the conversation continues. Typing or searching can take long enough that the moment to respond has passed. The product aims to make the person's own prepared language easier to find at the right time.
What excites us about it:
- The device uses the other speaker's recent words as context, searches the user's personal phrase bank, and moves a few likely replies to the top of the screen. For example, after hearing "Would you like to watch a movie or go to sleep?" it might surface the user's saved phrases "Let's go to sleep" and "I want to watch a movie."
- Suggestions come only from phrases the user has chosen or approved. The system ranks and displays those phrases; it does not compose a new reply or decide what the user means.
- This keeps the user's own wording, preferences, and communication style central while reducing navigation and typing effort.
- The feature should leave the existing AAC interface available at all times. Users can ignore suggestions, edit or select another phrase, and turn listening off whenever they choose.
- A focused first version could work with an existing phrase bank and show a small number of suggestions beside the user's normal controls. A demo could replay a consented conversation and show how the ranking changes as the other person speaks.
- Possible business model: license the feature to AAC app or device makers, or offer it as an optional subscription. Public healthcare, education, disability-support, or charitable funding may help cover costs where users cannot pay directly; eligibility and funding routes will vary by location and need validation.
- Broader market possibilities include multilingual phrase support, therapist- or caregiver-assisted phrase-bank setup, and use in schools or care settings. These should follow evidence from AAC users and should not dilute the core communication need.
What we're unsure about:
- Does ambient listening and phrase ranking solve a frequent, important problem for AAC users? Which users, access methods, settings, and conversation types would benefit most?
- Will users want a microphone listening during conversations? Consent from conversation partners, privacy, data retention, and the ability to pause or disable listening need careful design. On-device processing may reduce data exposure if it is practical.
- Recognition can fail with background noise, overlapping speakers, varied accents, or languages and communication styles that are poorly represented. Suggestions must not block the user's usual controls or slow them down when confidence is low.
- Ranking a fixed phrase bank reduces the risk of invented words, but the suggestions can still be irrelevant or misleading. Users need control over their phrase bank and a reliable way to dismiss suggestions.
- How large and well-organised are real phrase banks, and how quickly can ranking return useful options on the AAC devices people already use?
- Existing AAC products and research may already offer related context-aware prediction. The supplied prior-art notes mention products and projects, but those claims need independent, current verification before being used to position the idea. The key question is whether users value this specific user-controlled ranking approach and whether it can integrate with tools they already use.
- What is the right route to adoption: integration with established AAC providers, direct-to-user software, or partnerships with therapists and service providers? What evidence would public or medical funders require?
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
