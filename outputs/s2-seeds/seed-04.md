# seed-04: AI live interview coach

## Seed card

- **Title:** AI live interview coach
- **One-liner:** AI gives real-time feedback during live interviews (e.g. "speak faster") plus coaching on how to improve.
- **Audience:** [+] Job seekers doing video interviews (Zoom, Teams, Meet), especially new graduates, career changers and non-native English speakers. Paying institutions: university careers services, bootcamps and outplacement firms that buy it for their cohorts.
- **Pain:** People don't know how they come across in interviews until it's too late. [+] The only feedback is usually a rejection email with no reason given. Mock-interview practice helps, but nerves change how people speak in the real interview, which is exactly when no one is coaching them.
- **Mechanism:** Live, in-the-moment nudges during the interview (e.g. pace: "speak faster"), plus improvement coaching (use the other person's name more, speak more constructively). [+] It coaches delivery only (pace, filler words, rambling, long answers), never what to say. [+] It listens only to the candidate's own microphone and never records or transcribes the interviewer; the interviewer's name is entered before the call. [+] A glanceable nudge (a single word or coloured dot) sits next to the webcam. [+] After the call, a replay timeline shows where the candidate sped up, rambled or said "um", plus 3 things to fix before the next round. [+] Practice mode runs on the same engine.
- **Enabling tech:** Not stated. Most direct reading: low-latency streaming speech recognition and speech-rate/filler/prosody analysis on the candidate's microphone audio, with an LLM for post-call coaching. `[inferred]`
- **Business model:** [+] Free for candidates to practise, paid for live interviews during a job hunt (e.g. monthly), and seat licences for careers services and bootcamps.
- **Demo moment:** [+] A mock video interview in which the candidate speeds up, a "slow down" nudge appears, they correct, and the replay timeline follows.
- **Core insight:** Feedback on how you come across arrives only after the interview, when it's too late; coaching delivery in the moment, when nerves actually change how you speak, closes that gap. `[inferred]` phrasing, drawn from the pain and excitement lines. [+] The delivery-not-answers boundary is what separates it from answer-feeding "interview copilot" tools.
- **What excites the group:** Live, in-the-moment nudges (e.g. pace: "speak faster"); improvement coaching such as using the other person's name more and speaking more constructively. [+] Also: delivery-only coaching, the glanceable webcam-side nudge, own-mic-only listening, the replay timeline with 3 fixes, and practice mode on the same engine.
- **Open questions:**
  - Stated in the seed (all [+]): Whether employers see any live AI help as cheating, even delivery-only coaching, and whether candidates should disclose it. Whether a nudge in the middle of an answer helps or throws people off. Yoodli-type tools already give real-time pace and filler-word feedback in meetings `[unverified]`; what makes this interview-specific enough to win? In-person interviews are out of scope for now (they would need an earpiece).
  - Gaps seen: Which enabling tech is actually used and whether nudge latency is low enough to be useful. How the tool captures the microphone alongside Zoom/Teams/Meet (desktop app, browser extension, virtual audio device). Whether interview platforms or proctoring setups detect or block it. Whether the institution buyer or the individual candidate is the primary payer. Evidence for the pain beyond the group's own experience.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-04
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# AI live interview coach

One-liner (≤20 words): AI gives real-time feedback during live video interviews (e.g. "speak faster") plus coaching on how to improve.
Buyer and niche (≤25 words): Job seekers in Zoom, Teams or Meet interviews, especially new graduates, career changers and non-native speakers; careers services, bootcamps and outplacement firms buy seats.
Pain and evidence (≤40 words; cite the pain dossier file): People don't know how they come across in interviews until it's too late. Feedback is usually a reasonless rejection email, and mock practice misses how nerves change speech in the real interview. (src: inputs/seeds/seed-04.md)
How it works (≤50 words): Listening only to the candidate's microphone, it coaches delivery, never answers: pace, filler words, rambling, using the interviewer's name, constructive phrasing. A word or coloured dot beside the webcam nudges live. A replay timeline follows, with three fixes. Practice mode shares the engine.
Why now (≤25 words; name the specific capability): Low-latency streaming speech recognition and prosody analysis now run in real time on a laptop, cheaply enough for live nudges [unverified].
Demo moment (≤20 words): In a mock interview the candidate speeds up, a "slow down" nudge appears, they correct, then the replay timeline.
Business model (≤15 words): Free practice; paid monthly for live interviews; seat licences for careers services and bootcamps.

## Original text

```text
<!-- Fleshed out on 2026-09-25 at the user's request. Text marked [+] was added by Claude, not the group. Everything else is the group's original wording (also kept in git and in outputs/s2-seeds/seed-04.md). -->
Title: AI live interview coach
One-liner: AI gives real-time feedback during live interviews (e.g. "speak faster") plus coaching on how to improve.
Who it's for: [+] Job seekers doing video interviews (Zoom, Teams, Meet), especially new graduates, career changers and non-native English speakers. Paying institutions: university careers services, bootcamps and outplacement firms that buy it for their cohorts.
The pain it solves: People don't know how they come across in interviews until it's too late.
[+] The only feedback is usually a rejection email with no reason given. Mock-interview practice helps, but nerves change how people speak in the real interview, which is exactly when no one is coaching them.
What excites us about it:
- Live, in-the-moment nudges (e.g. pace: "speak faster").
- Improvement coaching, e.g. use the other person's name more, speak more constructively.
- [+] It coaches delivery, never answers. It covers how you speak (pace, filler words, rambling, long answers), never what to say. That separates it from the "interview copilot" tools that feed candidates answers, which employers treat as cheating.
- [+] A glanceable nudge sits next to the webcam (a single word or a coloured dot), so your eyes stay on the camera.
- [+] It listens only to your own microphone and never records or transcribes the interviewer. You enter the interviewer's name before the call.
- [+] After the call you get a replay timeline showing where you sped up, rambled or said "um", plus 3 things to fix before the next round.
- [+] Practice mode runs on the same engine, so the live nudges already feel familiar on the day.
- [+] Demo: a mock video interview in which the candidate speeds up, a "slow down" nudge appears, they correct, and the replay timeline follows.
- [+] Business model: free for candidates to practise, paid for live interviews during a job hunt (e.g. monthly), and seat licences for careers services and bootcamps.
What we're unsure about:
- [+] Whether employers see any live AI help as cheating, even delivery-only coaching, and whether candidates should disclose it.
- [+] Whether a nudge in the middle of an answer helps or just throws people off.
- [+] Yoodli-type tools already give real-time pace and filler-word feedback in meetings (unverified). What makes this interview-specific enough to win?
- [+] In-person interviews are out of scope for now because they would need an earpiece.
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
