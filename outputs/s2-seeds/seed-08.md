# seed-08: Audio-to-audio speech enhancer

## Seed card

- **Title:** Audio-to-audio speech enhancer: same words, more life
- **One-liner:** A model that takes spoken audio and returns mostly the same audio, but more expressive and easier to understand: monotone becomes enjoyable, and filler words become clean pauses.
- **Audience:** Universities or students; both are options for who would buy (supplied by the user, 2026-09-25). [+] For a university, recorded lectures and course videos; for students, the lectures they watch or their own recorded presentations.
- **Pain:** Monotone, filler-heavy or hard-to-follow speech is unpleasant to listen to and hard to understand. [+] A monotone lecture recording is hard to sit through and harder to learn from; re-recording takes a lecturer hours, and cutting out the "ums" breaks sync with the slides or screen recording.
- **Mechanism:** Audio in, audio out; the output is mostly the same audio with more emotion. Converts monotone speech into enjoyable audio, replaces "ummm"s and "ahhhh"s with pauses, and keeps every word at the same time position (so "this here" lines up with on-screen pointing). Can keep or change the accent. Later: take text as extra context and move the output further from the original. Maybe fix incorrect English. [+] Because timing is kept, the new audio drops straight onto the original lecture video. [+] A per-section "expressiveness" slider, with the original one click away. [+] Starts as an upload-and-download web app (post-production); live later.
- **Enabling tech:** Not named. Most direct reading: an expressive speech-to-speech / voice-conversion model with word-level alignment to hold timing. `[inferred]` [+] Whether current speech-to-speech models can keep word-level timing while changing emotion is untested.
- **Business model:** [+] A department or campus licence for universities, a low-cost student subscription, and an API that lecture-capture platforms can embed.
- **Demo moment:** [+] A monotone, "um"-filled lecture clip with slides, then the same clip with the new audio, in sync and sounding lively.
- **Core insight:** The words are fine; the delivery is the problem. Re-performing the same speech with more life, while holding every word's timing, fixes delivery without re-recording or re-editing the video. `[inferred]` phrasing, drawn from the group's excitement lines.
- **What excites the group:** Audio in, audio out with more emotion; monotone to enjoyable; fillers to pauses; same word timing for on-screen pointing; keep or change accent; easier to understand; later, text as extra context; maybe fixing incorrect English. [+] Also: drop-in sync with the lecture video, the expressiveness slider, lecturer opt-in for university purchases (answering voice-cloning consent), and post-production first.
- **Open questions:**
  - Stated by the group: Fixing incorrect English (hence the question mark).
  - Stated in the seed ([+]): What students buy it for (lectures they watch, or their own presentations); the first means changing a lecturer's voice without asking, which raises consent questions. Whether today's speech-to-speech models can keep word-level timing while changing emotion; needs a quick test. Sounding synthetic or uncanny, which is worse than monotone. Misuse and consent, especially accent changing. ElevenLabs Speech-to-Speech, Descript, Adobe Enhance Speech and Sanas each cover a piece of this `[unverified]`.
  - Gaps seen: Which specific model makes the core loop work in a 48-hour build, and processing time per lecture hour. How "more expressive" is measured or controlled beyond the slider. Whether universities have budget and a buying owner for this (teaching-and-learning, accessibility, media services). Evidence that monotone delivery measurably hurts learning.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-08
track: novel
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: []
source_task: s2-seed-lead
---

# Same words, more life

One-liner (≤20 words): Audio in, audio out: the same speech, more expressive and easier to follow, with fillers turned into clean pauses.
Buyer and niche (≤25 words): Universities, for recorded lectures and course videos, or students, for lectures they watch or their own recorded presentations.
Pain and evidence (≤40 words; cite the pain dossier file): Monotone, filler-heavy speech is unpleasant and hard to understand. Monotone lecture recordings are hard to learn from; re-recording takes lecturers hours, and cutting out "ums" breaks sync with slides or screen recordings. (src: inputs/seeds/seed-08.md)
How it works (≤50 words): Upload a recording; a speech-to-speech model returns mostly the same audio with more emotion, replacing "um"s with pauses and keeping or changing the accent. Every word stays at its original time, so the audio drops onto the lecture video. A per-section expressiveness slider keeps the original one click away.
Why now (≤25 words; name the specific capability): Expressive speech-to-speech models that restyle delivery while keeping the speaker's words and voice [unverified].
Demo moment (≤20 words): A monotone, um-filled lecture clip with slides, then the same clip with new audio, in sync and lively.
Business model (≤15 words): Department or campus licence; low-cost student subscription; API for lecture-capture platforms.

## Original text

```text
<!-- Fleshed out on 2026-09-25 at the user's request. Text marked [+] was added by Claude, not the group. Everything else is the group's original wording (also kept in git and in outputs/s2-seeds/seed-08.md), plus the audience line the user supplied on 2026-09-25. -->
Title: Audio-to-audio speech enhancer: same words, more life
One-liner: A model that takes spoken audio and returns mostly the same audio, but more expressive and easier to understand: monotone becomes enjoyable, and filler words become clean pauses.
Who it's for: Universities or students; both are options for who would buy. (from the user, 2026-09-25)
[+] For a university, the use is recorded lectures and course videos. For students, it could be the lectures they watch or their own recorded presentations (see below).
The pain it solves: Monotone, filler-heavy or hard-to-follow speech is unpleasant to listen to and hard to understand.
[+] A monotone lecture recording is hard to sit through and harder to learn from. Re-recording takes a lecturer hours, and cutting out the "ums" breaks sync with the slides or screen recording.
What excites us about it:
- Audio in, audio out. The output is mostly the same audio, with more emotion.
- Converts monotone speech into enjoyable audio.
- Replaces "ummm"s and "ahhhh"s with pauses.
- Tries to keep every word at the same time position, so "this here" in the output happens exactly when it did in the original (in case the speaker is pointing at something on screen).
- Can keep or change the accent.
- Easier to understand.
- Later: take text as extra context and modify the output audio away from the original.
- Maybe fix incorrect English?
- [+] Because every word keeps its timing, the new audio drops straight onto the original lecture video, with no re-syncing and no jump cuts in the slides.
- [+] An "expressiveness" slider per section, with the original always one click away.
- [+] When a university buys it, lecturers opt in for their own recordings, which answers the voice-cloning question up front.
- [+] Start as an upload-and-download web app (post-production); do live later.
- [+] Demo: a monotone, "um"-filled lecture clip with slides, then the same clip with the new audio, in sync and sounding lively.
- [+] Business model: a department or campus licence for universities, a low-cost student subscription, and an API that lecture-capture platforms can embed.
What we're unsure about:
- Fixing incorrect English (hence the question mark).
- [+] What do students buy it for: the lectures they watch, or their own recorded presentations? The first means changing a lecturer's voice without asking them, which raises consent questions.
- [+] Whether today's speech-to-speech models can keep word-level timing while changing emotion. This needs a quick test before committing.
- [+] Sounding synthetic or uncanny, which is worse than monotone.
- [+] Misuse and consent, especially accent changing.
- [+] ElevenLabs Speech-to-Speech, Descript, Adobe Enhance Speech and Sanas each cover a piece of this (unverified).
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
