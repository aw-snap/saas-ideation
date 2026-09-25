# seed-08: Audio-to-audio speech enhancer

## Seed card

- **Title:** Audio-to-audio speech enhancer: same words, more life
- **One-liner:** A model that takes spoken audio and returns mostly the same audio, but more expressive and easier to understand: monotone becomes enjoyable, and filler words become clean pauses.
- **Audience:** Not stated by the group. The on-screen pointing example suggests people who record narrated screen content (tutorials, demos, lectures); card buyer set to prosumer. `[inferred]`
- **Pain:** Monotone, filler-heavy or hard-to-follow speech is unpleasant to listen to and hard to understand.
- **Mechanism:** Audio in, audio out. The output is mostly the same audio with more emotion. Monotone speech becomes enjoyable; "ummm"s and "ahhhh"s are replaced with pauses. Every word stays at the same time position, so "this here" happens exactly when it did in the original (in case the speaker is pointing at something on screen). The accent can be kept or changed. Later: take text as extra context and modify the output away from the original.
- **Enabling tech:** Not named. Most direct reading: audio-to-audio (speech-to-speech) generative models with control over prosody and timing. `[inferred]`
- **Business model:** Not stated. `[inferred]` gap.
- **Demo moment:** Not stated. Most direct reading: play a monotone, filler-filled clip, then the same clip in perfect sync, sounding lively. `[inferred]`
- **Core insight:** Keep the words and their timing, change only the delivery. Time-locking every word makes the enhanced audio a drop-in replacement for the original track. `[inferred]` phrasing, drawn from the time-position bullet.
- **What excites the group:** Audio in, audio out with more emotion; monotone made enjoyable; fillers replaced by pauses; every word kept at its original time position; keeping or changing the accent; easier to understand; later, text as extra context to steer the output; maybe fixing incorrect English.
- **Open questions:**
  - Group-stated: Fixing incorrect English (they marked it with a question mark).
  - Gaps seen: Who the buyer is (creators, educators, corporate training, meeting recordings, accessibility). Whether it's live or post-production. How "more expressive" is controlled, and how to avoid it sounding synthetic or uncanny. Voice-cloning consent and deepfake concerns, especially when changing the accent. Whether replacing fillers with pauses conflicts with keeping every word at its original timestamp (it shouldn't, because pauses fill the same time, but this needs confirming). Whether available models can hold word-level timing. Business model.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-08
track: novel
lineage: seed-original
territory: none
cell: { buyer: prosumer, capability: tbd, track: novel }
parents: []
source_task: s2-seed-lead
---

# Same Words, More Life

One-liner (≤20 words): Audio in, audio out: speech returns nearly unchanged but more expressive, with filler words turned into clean pauses.
Buyer and niche (≤25 words): People who record spoken audio, such as screen-recorded explainers, where the speech is monotone or filler-heavy.
Pain and evidence (≤40 words; cite the pain dossier file): Monotone, filler-heavy or hard-to-follow speech is unpleasant to listen to and hard to understand. (src: inputs/seeds/seed-08.md)
How it works (≤50 words): A speech model takes the original audio and returns mostly the same audio with more emotion, replacing "ummm"s with pauses. Every word stays at its original timestamp, so on-screen pointing still lines up. Accent can be kept or changed.
Why now (≤25 words; name the specific capability): Audio-to-audio speech models can now regenerate a voice with controlled emotion and timing [unverified].
Demo moment (≤20 words): Play a monotone, "ummm"-filled clip, then the same clip, perfectly in sync, sounding lively.
Business model (≤15 words): Not yet specified.

## Original text

```text
Title: Audio-to-audio speech enhancer: same words, more life
One-liner: A model that takes spoken audio and returns mostly the same audio, but more expressive and easier to understand: monotone becomes enjoyable, and filler words become clean pauses.
Who it's for: (not stated by the group)
The pain it solves: Monotone, filler-heavy or hard-to-follow speech is unpleasant to listen to and hard to understand.
What excites us about it:
- Audio in, audio out. The output is mostly the same audio, with more emotion.
- Converts monotone speech into enjoyable audio.
- Replaces "ummm"s and "ahhhh"s with pauses.
- Tries to keep every word at the same time position, so "this here" in the output happens exactly when it did in the original (in case the speaker is pointing at something on screen).
- Can keep or change the accent.
- Easier to understand.
- Later: take text as extra context and modify the output audio away from the original.
- Maybe fix incorrect English?
What we're unsure about:
- Fixing incorrect English (hence the question mark).
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
