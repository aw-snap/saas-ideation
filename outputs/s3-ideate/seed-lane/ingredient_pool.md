# Seed-lane ingredient pool

Rebuilt from every file in `outputs/s2-seeds/decomposed/` (seed-01 to seed-08). Atom IDs match the decomposed files. Markers `[inferred]` and `[unverified]` are carried over unchanged.

Included: seed-01, seed-02, seed-03, seed-04, seed-05, seed-06, seed-07, seed-08. The Allowed moves for all eight are "improve / pivot / break down", so every one includes "break down".

Excluded: none.

## Audience

- A-seed-01-aud-1: Online furniture/appliance retailers and white-glove delivery or piano-moving companies. (seed-01)
- A-seed-01-aud-2: End customer checking fit at checkout before buying a large item. (seed-01)
- A-seed-02-aud-1: Professional benefit auctioneers who run 50+ paddle-raise fundraisers a year and can distribute the tool. (seed-02)
- A-seed-02-aud-2: Charity gala organizers and school auction committees who host paddle raises. (seed-02)
- A-seed-03-aud-1: Family farms in succession; also vineyards, golf courses, large rural estates. (seed-03)
- A-seed-03-aud-2: Paying buyers: succession advisors, agricultural lenders, rural real-estate agents. (seed-03)
- A-seed-04-aud-1: Job candidates taking live interviews who want feedback while it can still change the outcome. [inferred] (seed-04)
- A-seed-04-aud-2: Possible institutional buyers such as bootcamps or university careers services. [inferred] gap, unstated. (seed-04)
- A-seed-05-aud-1: Consumer PC users with slow or buggy machines they can't diagnose themselves. (seed-05)
- A-seed-06-aud-1: Software product teams handling inbound feature requests from clients. (seed-06)
- A-seed-06-aud-2: Dev shops and agencies that build custom features for multiple client codebases. (seed-06)
- A-seed-07-aud-1: Open; any system or developer that would call AI on every keystroke, frame, event or log line if inference were free. (seed-07)
- A-seed-08-aud-1: People who record narrated screen content, tutorials, demos, or lectures with on-screen pointing. [inferred] (seed-08)
- A-seed-08-aud-2: Prosumer creators, educators, or corporate trainers whose speech is monotone or filler-heavy. [inferred] gap, unstated by group. (seed-08)

## Pain

- A-seed-01-pain-1: A sofa that won't clear a stairwell or turn causes failed delivery, return freight, wall damage, lost sale. (seed-01)
- A-seed-01-pain-2: Tape-measure math and 2D fit calculators miss real 3D obstacles: switchback stairs, banisters, low ceilings, wrong-swinging doors. (seed-01)
- A-seed-02-pain-1: Paddle raises drive ~28% of gala revenue [unverified] but capture is manual, so paddles get missed and numbers misread. (seed-02)
- A-seed-02-pain-2: Reconciling pledges after the event drags on for days, and disputes arise with no record of the moment. (seed-02)
- A-seed-03-pain-1: A retiring farmer holds unwritten knowledge of drain tiles, water lines, buried cable, flood-prone paddocks. (seed-03)
- A-seed-03-pain-2: Once that person is gone, finding buried infrastructure means slow, invasive, risky probing or trenching. (seed-03)
- A-seed-04-pain-1: People don't know how they come across in interviews until it's too late to fix anything. (seed-04)
- A-seed-05-pain-1: Users don't know how to fix slowdowns, bugs, or misconfigurations on their own PC. (seed-05)
- A-seed-06-pain-1: Client feature requests pile up faster than teams can triage them. (seed-06)
- A-seed-06-pain-2: Estimating build time, effort, and code impact per request is slow and usually a guess, not grounded in the code. (seed-06)
- A-seed-07-pain-1: Current AI is too slow and expensive for per-event use, forcing batching, sampling, or a human in the loop. (seed-07)
- A-seed-08-pain-1: Monotone, filler-heavy, or hard-to-follow speech is unpleasant to listen to and hard to understand. (seed-08)

## Mechanism

- A-seed-01-mech-1: Customer films the walk from street to room; video becomes 3D geometry of doorways, landings, turns. (seed-01)
- A-seed-01-mech-2: A piano-mover's motion-planning solver returns a green/amber/red verdict plus a tilt-and-rotate animation. (seed-01)
- A-seed-01-mech-3: "Fits my home" filter reuses the scanned route to show only items that will pass. (seed-01)
- A-seed-02-mech-1: Room-facing cameras track high-contrast paddle markers in real time to detect every raised paddle. (seed-02)
- A-seed-02-mech-2: Speech recognition on the auctioneer's call fuses with vision to log each pledge at the correct giving level. (seed-02)
- A-seed-02-mech-3: Spotter tablet flags unacknowledged paddles; each pledge saves a 3-second clip and posts to the existing gala platform. (seed-02)
- A-seed-03-mech-1: Farmer walks or drives the property narrating; the app aligns GPS track to speech to build map layers. (seed-03)
- A-seed-03-mech-2: A voice agent later asks follow-up questions to fill gaps in the narrated record. (seed-03)
- A-seed-03-mech-3: Successors view AR overlays on-site; a shareable dig-safety map serves fencers and diggers. (seed-03)
- A-seed-04-mech-1: AI listens live during the interview and gives in-the-moment nudges, e.g. pace cue "speak faster." (seed-04)
- A-seed-04-mech-2: Separate coaching layer suggests improvements such as using the other person's name more, speaking more constructively. (seed-04)
- A-seed-05-mech-1: An AI agent runs on the PC, inspects system state, and applies fixes and optimizations automatically. (seed-05)
- A-seed-06-mech-1: AI reads each incoming client feature request and the product's actual codebase to ground its estimate. (seed-06)
- A-seed-06-mech-2: Output suggests expected build time plus other unspecified details (effort, files touched). [inferred] scope. (seed-06)
- A-seed-07-mech-1: Jev, a fast "System 1" model, makes reflex-style judgements on every event in real time. (seed-07)
- A-seed-07-mech-2: The reflex layer escalates to a slower "System 2" model only when needed. (seed-07)
- A-seed-08-mech-1: Audio in, audio out: mostly the same audio, regenerated with more expressive, less monotone delivery. (seed-08)
- A-seed-08-mech-2: Filler words ("ummm," "ahhhh") are replaced with clean pauses while every word stays at its original time position. (seed-08)
- A-seed-08-mech-3: Accent can be kept or changed; later version takes text as extra context to steer content, not just delivery. (seed-08)

## Enabling tech

- A-seed-01-tech-1: Video-to-3D reconstruction from casual phone footage, accurate enough for tight openings. [unverified] (seed-01)
- A-seed-01-tech-2: Classical motion planning (piano mover's problem) for rigid-body path clearance. (seed-01)
- A-seed-02-tech-1: Real-time multi-camera marker tracking for paddle detection in a crowded, dim ballroom. (seed-02)
- A-seed-02-tech-2: Live speech recognition fused with vision events to bind a spoken amount to a specific paddle. (seed-02)
- A-seed-03-tech-1: Speech-to-text plus LLM extraction of structured, geotagged, confidence-tagged records from narration. (seed-03)
- A-seed-03-tech-2: Conversational voice agent for later follow-up interviews. (seed-03)
- A-seed-03-tech-3: Phone AR for on-site overlay of stored, tagged features. (seed-03)
- A-seed-04-tech-1: Low-latency real-time speech analysis for pace and word choice during a live call. [inferred] (seed-04)
- A-seed-04-tech-2: LLM reasoning layer to generate constructive coaching notes from the transcript. [inferred] (seed-04)
- A-seed-05-tech-1: On-device or local agent with system-level access to settings, processes and diagnostics. [inferred] (seed-05)
- A-seed-05-tech-2: LLM reasoning to interpret symptoms and choose fixes. (seed-05)
- A-seed-06-tech-1: Coding agents/LLMs that can explore a full repository and reason about where a change lands. [inferred] (seed-06)
- A-seed-07-tech-1: Jev, claimed hundreds of times faster and cheaper than normal AI models. [unverified] (seed-07)
- A-seed-08-tech-1: Audio-to-audio (speech-to-speech) generative models with control over prosody and word-level timing. [inferred] (seed-08)

## Business model

- A-seed-01-biz-1: Retailers pay per route check, justified by returns and damage prevented. (seed-01)
- A-seed-02-biz-1: Sold through auctioneers as a channel, each bringing the tool to 50+ events a year; unit price unstated. (seed-02)
- A-seed-03-biz-1: Succession advisors, lenders and rural agents pay because a documented farm finances and sells more easily. (seed-03)
- A-seed-04-biz-1: Not stated; no pricing, buyer, or unit specified in the seed. [inferred] gap. (seed-04)
- A-seed-05-biz-1: Consumers pay; the form (one-off, subscription, per-fix) is unspecified. (seed-05)
- A-seed-06-biz-1: Not stated; no pricing or unit specified. [inferred] gap. (seed-06)
- A-seed-07-biz-1: Not specified; depends on the product eventually chosen. (seed-07)
- A-seed-08-biz-1: Not stated; no pricing, buyer, or unit specified. [inferred] gap. (seed-08)

## Demo moment

- A-seed-01-demo-1: Phone video of a stairwell yields a fit verdict and an animation of the sofa maneuvering through. (seed-01)
- A-seed-02-demo-1: Auctioneer calls "ten thousand... thank you, 214!" and the pledge logs instantly with its 3-second clip. (seed-02)
- A-seed-03-demo-1: Point a phone at a paddock and see "tile drain, per Grandad, 1978, medium confidence." (seed-03)
- A-seed-04-demo-1: Mid-answer, a subtle on-screen nudge appears: "speak faster." [inferred] (seed-04)
- A-seed-05-demo-1: A sluggish PC is diagnosed and fixed live while the user watches. (seed-05)
- A-seed-06-demo-1: Paste a client request; get a codebase-grounded build-time estimate listing the files it touches. [inferred] (seed-06)
- A-seed-07-demo-1: An AI judgement on every keystroke or frame, with no perceptible lag. (seed-07)
- A-seed-08-demo-1: Play a monotone, filler-filled clip, then the same clip perfectly in sync, sounding lively. [inferred] (seed-08)

## Core insight

- A-seed-01-insight-1: "Will it fit" is a 3D motion-planning problem, not a tape-measure problem. (seed-01)
- A-seed-01-insight-2: A scanned route doubles as a conversion filter, not just a returns-prevention tool. (seed-01)
- A-seed-02-insight-1: The paddle raise is a gala's highest-value, least-instrumented moment; auto-capture fixes reconciliation and creates a donor-stewardship clip. (seed-02)
- A-seed-03-insight-1: A farm's most valuable map is tacit, lives in one person's head, and is captured only by walking and talking. (seed-03)
- A-seed-03-insight-2: Documentation has financial value to lenders and buyers, not only sentimental value to heirs. (seed-03)
- A-seed-04-insight-1: Feedback on how you come across only helps while you can still act on it: during the interview, not after rejection. [inferred] (seed-04)
- A-seed-05-insight-1: Most consumers can't self-diagnose PC problems; an always-present on-device AI could do it instead. (seed-05)
- A-seed-06-insight-1: Estimates are guesses because no one looks at the code first; grounding the estimate in the actual codebase fixes that. [inferred] (seed-06)
- A-seed-07-insight-1: Near-instant, near-free inference unlocks always-on, per-event AI uses impossible at today's latency and cost. (seed-07)
- A-seed-08-insight-1: Keep the words and their timing, change only the delivery, so the enhanced track is a drop-in replacement for the original. [inferred] (seed-08)

<!-- COMPLETE -->
