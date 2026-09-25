# seed-04 decomposed: AI live interview coach

## Atoms

- A-seed-04-aud-1: Job seekers on video interviews (Zoom, Teams, Meet), especially new grads, career changers, non-native English speakers.
- A-seed-04-aud-2: University careers services, bootcamps and outplacement firms buying seat licences for cohorts.
- A-seed-04-pain-1: Candidates don't know how they come across until it's too late; feedback is a reasonless rejection email.
- A-seed-04-pain-2: Mock practice misses how nerves change real-interview speech, exactly when no one is coaching delivery.
- A-seed-04-mech-1: Live glanceable nudges (word or coloured dot beside webcam) on pace, filler words, rambling — delivery only, never answers.
- A-seed-04-mech-2: Own-mic-only listening; interviewer's name entered beforehand, never recorded or transcribed.
- A-seed-04-mech-3: Post-call replay timeline showing where candidate sped up or rambled, plus 3 fixes; practice mode shares the engine.
- A-seed-04-tech-1: Low-latency streaming speech recognition with speech-rate/filler/prosody analysis on candidate audio. `[inferred]`
- A-seed-04-tech-2: LLM for post-call coaching summary and the 3-fixes list. `[inferred]`
- A-seed-04-biz-1: Free practice tier; paid monthly subscription for live interview use during a job hunt.
- A-seed-04-biz-2: Seat licences sold to careers services, bootcamps and outplacement firms.
- A-seed-04-demo-1: Mock interview: candidate speeds up, a "slow down" nudge appears, they correct, replay timeline follows.
- A-seed-04-insight-1: Delivery feedback normally arrives only after the interview, too late; coaching it live, when nerves actually change speech, closes that gap. `[inferred]`
- A-seed-04-insight-2: Staying strictly delivery-only (never answer content) is what separates it from "interview copilot" answer-feeding tools that employers treat as cheating.

## Prior art

- Yoodli — gives real-time private nudges (pace, filler words, tone) during live Zoom/Teams/Meet calls, and also does dedicated interview-prep coaching with pacing/filler/eye-contact analytics. https://yoodli.ai/use-cases/public-speaking — sources disagree on whether it assists during actual live interviews (one summary says yes, a review says it's practice-only, no live-interview assistance): https://www.finalroundai.com/blog/yoodli-review-pros-cons
- LockedIn AI — "Interview Copilot" with a dual-layered coach giving live delivery feedback plus real-time suggested answers during actual interviews. https://www.lockedinai.com/ai-copilot
- Verve AI — live, stealth-mode real-time help across Zoom/Meet/Teams/Webex interviews. https://www.vervecopilot.com/
- Live Interview AI / Interview Copilot.io / Final Round AI — cluster of "interview copilot" tools giving real-time answer suggestions (and in some cases delivery tips) during live interviews. https://liveinterview.ai/, https://www.finalroundai.com/interview-copilot

**Verdict: adjacent-exists.** Yoodli already delivers the core mechanism (live pace/filler nudges on real video calls, plus interview-specific coaching), though sources conflict on whether it operates during an actual live interview or practice only. The dozen "interview copilot" tools compete on the same buyer/moment but mostly on answer-content, not the delivery-only boundary this seed insists on — no verified product combines live-call presence with a strict delivery-only, own-mic-only design.

## Weakest points

- If Yoodli does give real-time nudges on live Zoom/Teams/Meet calls (one source says so), the "delivery-only during a live interview" niche may already be filled, leaving only the delivery-vs-answers framing as differentiation.
- Nudge-latency and mic-capture feasibility across Zoom/Teams/Meet (desktop app vs. browser extension vs. virtual audio device) is unverified and could be the build's hardest technical unknown.
- No evidence beyond the group's own experience that a mid-answer nudge helps rather than distracts, or that institutions have budget/a buying owner for seat licences.

<!-- COMPLETE -->
