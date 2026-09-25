### seed-01: what changed
Cut the demo from a full route video plus a piano-mover motion-planner animation to three checkout photos scored by a monocular depth model against boxed item dimensions — buildable in 48 hours without a real motion planner. Named the enabling capability (metric monocular depth from a single photo) for why-now. Replaced vague "pay per check" with a concrete $0.50-per-check plus per-SKU fee. Audience and core insight unchanged.

---
id: s3-improver-01#01
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: [seed-01]
source_task: s3-improver-01
---

# Will It Fit? Delivery Check

One-liner (≤20 words): Three phone photos of a stairwell return a green/amber/red delivery-fit verdict before checkout.
Buyer and niche (≤25 words): Online furniture and appliance retailers, white-glove delivery firms and piano movers losing money on failed large-item deliveries.
Pain and evidence (≤40 words; cite the pain dossier file): A sofa that won't clear the stairwell means failed delivery, return freight, wall damage and a lost sale. Tape-measure arithmetic and online calculators miss real 3D problems: switchback stairs, low ceilings, banisters, wrong-swinging doors. (src: outputs/s2-seeds/seed-01.md)
How it works (≤50 words): Customer photographs the front door, stairwell and tightest turn next to a reference card. A monocular depth model measures each clearance against the item's boxed dimensions and returns a verdict, flagging the exact pinch point. Scanned homes power a "fits my home" checkout filter.
Why now (≤25 words; name the specific capability): Recent monocular depth models return metric-accurate distances from a single ordinary photo, no lidar or multi-shot capture needed [unverified].
Demo moment (≤20 words): Three photos of a stairwell instantly flag the exact turn too tight for a sofa's boxed size.
Business model (≤15 words): Retailers pay $0.50 per route check, plus a per-SKU listing fee for the fit filter.

### seed-02: what changed
Shrank the build from 2-3 marker-tracking cameras plus a separate speech-recognition fusion pipeline to one camera and a single real-time multimodal model, demoable with a staged registration table rather than a live ballroom. Named the specific why-now capability. Replaced unspecified pricing with a concrete $299-per-event fee split with auctioneers. Audience, pain and clip-based thank-you mechanism unchanged.

---
id: s3-improver-01#02
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-02]
source_task: s3-improver-01
---

# Spotter for Paddle Raises

One-liner (≤20 words): A single camera plus live speech logs every raised charity paddle at the right giving level, instantly.
Buyer and niche (≤25 words): Charity gala organizers, school auction committees and professional benefit auctioneers who run dozens of paddle raises yearly.
Pain and evidence (≤40 words; cite the pain dossier file): Paddle raises average roughly 28% of gala revenue per one platform's data [unverified], yet capture is manual: paddles get missed, numbers misread, and reconciliation drags on for days. (src: outputs/s2-seeds/seed-02.md)
How it works (≤50 words): One camera watches the paddle section; a real-time multimodal model hears the auctioneer's call and sees paddles rise, logging each pledge at the right level instantly. A spotter tablet flags unacknowledged paddles; pledges post into the gala platform already in use, each saved with a thank-you clip.
Why now (≤25 words; name the specific capability): Real-time multimodal models now fuse live audio and video natively, replacing custom marker-tracking-plus-speech-fusion pipelines [unverified].
Demo moment (≤20 words): Auctioneer calls "ten thousand, thank you, 214"; camera and mic together log the pledge with its clip.
Business model (≤15 words): $299 flat fee per event, sold through auctioneers who keep a referral share.

### seed-03: what changed
Replaced the AR-overlay demo, which needs anchors and precise phone-camera pose in open fields, with a pinned 2D map view of the same confidence-tagged layers — buildable and reliable to show live in 48 hours. Named the specific capability behind narration-to-structured-map extraction. Tightened the payer line to succession advisors and lenders. Audience and narrated-walk-plus-AI mechanism unchanged.

---
id: s3-improver-01#03
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-03]
source_task: s3-improver-01
---

# Lay of the Land

One-liner (≤20 words): A retiring farmer narrates a walk; AI turns GPS and audio into a confidence-tagged map successors can browse.
Buyer and niche (≤25 words): Family farms in succession, plus vineyards, golf courses and rural estates; paid for by succession advisors, lenders and rural agents.
Pain and evidence (≤40 words; cite the pain dossier file): Drain tiles, water lines, buried cable and flood-prone paddocks live only in a retiring farmer's head. Once gone, finding buried drainage means slow, invasive probing and trenching; the best existing tools are paper notebooks. (src: outputs/s2-seeds/seed-03.md)
How it works (≤50 words): The farmer walks the property narrating memories; speech is aligned to the GPS track and an LLM extracts map layers tagged with year, source and confidence. A follow-up voice agent asks clarifying questions later. Successors browse the pinned map; a shareable dig-safety layer serves fencers and diggers.
Why now (≤25 words; name the specific capability): LLMs now turn rambling narration aligned to a GPS track into structured, geotagged records, and voice agents hold natural follow-up conversations.
Demo moment (≤20 words): Walk a backyard narrating; the app shows a pinned map: "tile drain, per Grandad, 1978, medium confidence."
Business model (≤15 words): Succession advisors and lenders pay per farm report; documented farms finance and sell more easily.

### seed-04: what changed
Sharpened the niche from general job seekers to non-native English speakers and international students specifically, the group least served by delivery-coaching tools and with a clear institutional buyer. Named a specific why-now capability (sub-300ms streaming speech APIs cheap enough for a browser extension) to answer the Yoodli-overlap gap. Trimmed pricing to fit the word cap. Mechanism and core loop unchanged.

---
id: s3-improver-01#04
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: [seed-04]
source_task: s3-improver-01
---

# AI Live Interview Coach

One-liner (≤20 words): Real-time delivery nudges during live video interviews, tuned for non-native English speakers, plus post-call coaching.
Buyer and niche (≤25 words): International students and non-native English speakers in Zoom/Teams/Meet interviews; university international-student and careers offices buy cohort seats.
Pain and evidence (≤40 words; cite the pain dossier file): Non-native speakers rehearse content but rarely get feedback on pace or clarity under interview nerves; the only feedback most candidates get is a reasonless rejection email, and mock practice can't replicate real-interview nerves. (src: outputs/s2-seeds/seed-04.md)
How it works (≤50 words): Listening only to the candidate's microphone, it coaches delivery, never answers: pace, filler words, rambling, and pronunciation clarity, plus using the interviewer's name. A single word or coloured dot beside the webcam nudges live. A replay timeline highlights three fixes; practice mode shares the same engine.
Why now (≤25 words; name the specific capability): Sub-300ms real-time speech-analysis APIs (2025-era streaming models) now run cheaply in a browser extension, not just enterprise meeting software [unverified].
Demo moment (≤20 words): A mock interview: candidate speeds up, a "slow down" nudge appears, they correct, then the replay timeline.
Business model (≤15 words): Free practice; paid monthly during a job hunt; seat licences for careers offices.

### seed-05: what changed
Led with the remote-family-support angle already in the seed's audience line, since that's the sharpest differentiator from free scareware-adjacent competitors like CCleaner — a relative approving a diagnosed, evidenced fix from their phone isn't a category those tools touch. Named the enabling capability. Demo and business model kept, since they already worked. Audience and mechanism unchanged.

---
id: s3-improver-01#05
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: [seed-05]
source_task: s3-improver-01
---

# Remote Family PC Copilot

One-liner (≤20 words): An AI agent diagnoses your parents' slow PC with evidence, then fixes it only after you approve remotely.
Buyer and niche (≤25 words): Adult children who remote-support parents' Windows PCs, plus non-technical home users and small offices with no IT staff.
Pain and evidence (≤40 words; cite the pain dossier file): Slow or buggy PCs leave non-technical users guessing; today they search error messages, run cleaner apps reporting 1,000 problems, pay a repair shop, or wait days for a relative to drive over and look. (src: outputs/s2-seeds/seed-05.md)
How it works (≤50 words): The user or their remote family tech person describes the problem in plain words. The agent reads real machine state — startup apps, logs, drivers, disk health — and shows evidence before proposing a fix, with a restore point and one-click undo. Family mode approves remotely.
Why now (≤25 words; name the specific capability): Agentic LLMs can now safely call OS diagnostic tools and explain findings in plain English, within a fixed allow-list, on-device or near it [unverified].
Demo moment (≤20 words): A deliberately slowed laptop, a plain-English complaint, evidence shown, remote family approval, one fix, before/after timing, undo.
Business model (≤15 words): Free diagnosis; small per-fix fee or monthly monitoring; family plan covers several relatives' PCs.

### seed-06: what changed
The seed left demo, why-now, business model and differentiation from coding agents blank. Filled each concretely: a pasted-ticket-to-estimate demo on a real repo, per-seat metered pricing, a named capability (repo-wide agentic exploration), and a client-facing quote-and-clarifying-questions output that positions this as PM tooling, not a code-writing agent. Audience, pain and codebase-grounding mechanism unchanged.

---
id: s3-improver-01#06
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-06]
source_task: s3-improver-01
---

# AI Feature-Request Reviewer

One-liner (≤20 words): AI reads your codebase and turns a client's feature request into a grounded time-and-risk estimate.
Buyer and niche (≤25 words): Software product teams and client-services dev shops that field a steady stream of feature requests from paying clients.
Pain and evidence (≤40 words; cite the pain dossier file): Client feature requests pile up, and estimating each (time, effort, what it touches) is slow guesswork; mis-scoped fixed-bid work is a common cause of agency losses [unverified]. (src: outputs/s2-seeds/seed-06.md)
How it works (≤50 words): Pasted into a ticket, a client's feature request triggers a coding agent that explores the actual repository, then returns an estimated build time, a risk flag, the files it will likely touch, and two clarifying questions for the client — posted back as a comment on the ticket.
Why now (≤25 words; name the specific capability): Coding agents can now explore an entire repository and reason about where a change lands, grounding estimates instead of guessing [unverified].
Demo moment (≤20 words): Paste a real GitHub issue; watch the agent return a time estimate and the exact files it touches.
Business model (≤15 words): Per-seat monthly fee for PMs, metered by estimates generated per repo.

### seed-07: what changed
The seed named no product, demo or business model. Picked a concrete first instance — a coding-assistant reflex layer that flags secrets or bugs on every keystroke — while keeping the buyer "any system needing per-event AI" and the reflex-plus-escalation mechanism intact. Hedged why-now against the reflex model itself not existing by naming the broader class of fast distilled models. Added usage-based pricing.

---
id: s3-improver-01#07
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: [seed-07]
source_task: s3-improver-01
---

# Instant Reflex AI Layer

One-liner (≤20 words): A per-keystroke "System 1" reflex layer flags risks instantly inside any app, escalating only when unsure.
Buyer and niche (≤25 words): Developers and platform teams building products that would call AI on every keystroke, frame or log line if inference were instant and free.
Pain and evidence (≤40 words; cite the pain dossier file): Today's AI is too slow and costly to run on every event, so products batch it, sample it, or gate it behind a human — ruling out always-on, per-event, real-time uses. (src: outputs/s2-seeds/seed-07.md)
How it works (≤50 words): A small, fast model makes reflex-style judgements on every event — for example flagging a hardcoded secret the instant it's typed. A slower, more careful model is called only when the reflex layer is unsure. Ships as an SDK any app can drop a reflex layer into.
Why now (≤25 words; name the specific capability): Small distilled models now hit sub-50ms, near-free inference per event, a class recent reports claim includes one hundreds of times cheaper than normal AI [unverified].
Demo moment (≤20 words): Live coding: a hardcoded API key gets underlined within 50 milliseconds of being typed, no perceptible lag.
Business model (≤15 words): Usage-based API pricing, roughly $0.01 per 1,000 reflex calls, sold to developers as infrastructure.

### seed-08: what changed
Scoped the 48-hour demo to pitch-and-energy reshaping plus filler removal, holding exact word timing — the piece the group already flagged as untested for full expressive re-synthesis — instead of betting the demo on a riskier full re-performance. Named the specific enabling capability. Sharpened why-now to word-level-timing-preserving voice conversion, the gap general tools like ElevenLabs don't guarantee for lecture sync. Mechanism and audience unchanged.

---
id: s3-improver-01#08
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: [seed-08]
source_task: s3-improver-01
---

# Same Words, More Life

One-liner (≤20 words): Upload a monotone lecture; get back the same words, timed identically, delivered with more energy.
Buyer and niche (≤25 words): Universities licensing recorded lectures and course videos, and students re-processing lectures they watch or their own recorded presentations.
Pain and evidence (≤40 words; cite the pain dossier file): Monotone, filler-heavy lecture recordings are hard to learn from; re-recording takes a lecturer hours, and manually cutting "ums" breaks sync with slides or screen recordings. (src: outputs/s2-seeds/seed-08.md)
How it works (≤50 words): A speech-to-speech model reshapes pitch and energy to sound livelier and replaces "um"s with clean pauses, while keeping every word's exact original timing so it drops straight onto the lecture video. A per-section expressiveness slider keeps the untouched original one click away.
Why now (≤25 words; name the specific capability): Expressive voice-conversion models can now reshape delivery while preserving word-level timing and the original voice [unverified].
Demo moment (≤20 words): A monotone, "um"-filled lecture clip with slides, then the same clip re-delivered lively and still in sync.
Business model (≤15 words): Department or campus licence; low-cost student subscription; API for lecture-capture platforms.

<!-- COMPLETE -->
