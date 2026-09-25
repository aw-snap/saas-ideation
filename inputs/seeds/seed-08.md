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
