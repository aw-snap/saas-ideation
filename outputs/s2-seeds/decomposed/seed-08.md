# seed-08 decomposed: Audio-to-audio speech enhancer

## Atoms

- A-seed-08-aud-1: Universities, for recorded lectures and course videos, with lecturers opting in per recording.
- A-seed-08-aud-2: Students, either watching lectures or enhancing their own recorded presentations.
- A-seed-08-pain-1: Monotone or filler-heavy lecture audio is unpleasant and hard to learn from.
- A-seed-08-pain-2: Re-recording takes lecturers hours; manually cutting "ums" breaks sync with slides or screen recordings.
- A-seed-08-mech-1: Audio-to-audio: takes spoken audio, returns the same words more expressively, monotone to enjoyable.
- A-seed-08-mech-2: Replaces filler sounds ("umm", "ahhh") with clean pauses while keeping or changing accent.
- A-seed-08-mech-3: Holds every word's original time position so output drops straight onto the source video without re-syncing.
- A-seed-08-mech-4: Per-section expressiveness slider, original audio always one click away; starts as upload-and-download, live later.
- A-seed-08-tech-1: Expressive speech-to-speech / voice-conversion model with word-level timing alignment. `[inferred]`, untested whether current models hold timing while changing emotion.
- A-seed-08-biz-1: Department or campus licence for universities; low-cost student subscription.
- A-seed-08-biz-2: API that lecture-capture platforms can embed.
- A-seed-08-demo-1: Monotone, "um"-filled lecture clip with slides, then the same clip re-audio'd, in sync and lively.
- A-seed-08-insight-1: The words are fine; only delivery is the problem, so re-performing speech with more life while holding word timing fixes it without re-recording or re-editing video. `[inferred]`

## Prior art

- ElevenLabs Speech to Speech (Voice Changer) — converts recorded voice to another voice while preserving the original performance: timing, pacing, pauses and emotion carry over; optional style exaggeration for more expressiveness. https://elevenlabs.io/blog/speech-to-speech
- Descript — automatically detects and removes filler words ("um", "uh") from audio/video via transcript editing, explicitly used for lecture/screen-recording cleanup. https://www.descript.com/tools/remove-filler-from-audio
- Adobe Podcast Enhance Speech — cleans up noise/quality in recorded speech; filler-word removal is still an open feature request, not shipped. https://www.buildfastwithai.com/ai-tools/adobe-podcast, https://community.adobe.com/announcements-513/enhance-speech-v2-update-1498639
- Sanas — real-time accent conversion for speech `[unverified, not searched directly; named in the seed's own open questions]`.

**Verdict: adjacent-exists.** ElevenLabs Speech-to-Speech already preserves timing/pacing while allowing expressiveness/voice changes, and Descript already strips filler words with lecture use cases explicitly named — but no single found product combines timing-locked re-expression (monotone-to-lively) with filler-to-pause replacement in one lecture-sync pass; the seed's specific bundle looks unclaimed even though its parts exist separately.

## Weakest points

- The core technical bet — holding word-level timing while re-performing emotion — is explicitly untested by the group, and ElevenLabs' existing timing-preserving voice conversion suggests competitors are close to this already.
- Descript already solves filler-removal-with-lecture-sync via transcript editing, which may satisfy much of the pain without needing an expressive re-performance model at all.
- No evidence yet that monotone delivery measurably hurts learning, nor that universities have a budget owner (teaching-and-learning vs. accessibility vs. media services) willing to buy this.

<!-- COMPLETE -->
