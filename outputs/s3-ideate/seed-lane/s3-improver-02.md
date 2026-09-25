### seed-01: what changed
Weakest: buildability (full video-to-3D reconstruction plus a real motion planner is too much for 48 hours), why-now (the reconstruction claim was unverified), and willingness to pay (no named first payer). Narrowed the scan to one tight turn using phone depth cameras (a real, shipping capability), swapped the full piano-mover solver for a single-opening clearance check, and named delivery companies with existing survey fees as the first payer.

---
id: s3-improver-02#01
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: [seed-01]
source_task: s3-improver-02
---

# Fit Check for Big Deliveries

One-liner (≤20 words): Scan a stairwell with a phone's depth camera and get a fit verdict plus a maneuvering animation in seconds.
Buyer and niche (≤25 words): White-glove furniture and appliance delivery companies and piano movers who already charge survey fees but still eat failed-delivery costs.
Pain and evidence (≤40 words; cite the pain dossier file): A sofa that won't clear a stairwell means a failed delivery, return freight and a lost sale. Tape-measure math and online fit calculators miss real 3D problems: switchback turns, low ceilings, banisters, wrong-swinging doors. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): At checkout, the customer points a phone with a depth camera at the tightest turn — usually a stairwell landing. A clearance solver checks the item's rotated silhouette against that single opening and returns a verdict plus a short tilt-and-rotate animation, plus what to remove first.
Why now (≤25 words; name the specific capability): Phone depth cameras (LiDAR on recent iPhones) now give centimetre-accurate room geometry on-device, cheap enough to run at checkout.
Demo moment (≤20 words): Scan a real stairwell landing on a phone; watch the sofa's tilt-and-rotate animation and a green fit verdict appear.
Business model (≤15 words): Delivery companies pay per scanned route, priced below their existing survey-visit fee.

### seed-02: what changed
Weakest: buildability (multi-camera fusion in a dim, crowded ballroom), willingness to pay (pricing was unspecified) and a demo that needs a real ballroom. Cut to one camera and a tabletop set of numbered paddles in a normal room — realistic for 48 hours — and added a flat per-event price anchored below an auctioneer's day rate.

---
id: s3-improver-02#02
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-02]
source_task: s3-improver-02
---

# Instant Paddle Capture

One-liner (≤20 words): A single camera plus live speech recognition logs every raised charity paddle at the right dollar level instantly.
Buyer and niche (≤25 words): Charity gala organizers, school auction committees and professional benefit auctioneers who run dozens of paddle raises a year.
Pain and evidence (≤40 words; cite the pain dossier file): Paddle raises average roughly a quarter of gala revenue [unverified] yet capture is manual: paddles get missed, numbers misread, and reconciliation drags on for days even with dedicated gala software. (src: inputs/seeds/seed-02.md)
How it works (≤50 words): One room-facing camera tracks numbered, high-contrast paddles while speech recognition hears the auctioneer's call ("ten thousand... thank you, 214!"). The two feeds fuse to log each pledge instantly; a spotter's tablet flags unacknowledged paddles, then posts into the gala platform already in use.
Why now (≤25 words; name the specific capability): Real-time object tracking and live speech recognition now run together on a laptop, accurate enough to fuse in a single well-lit room [unverified].
Demo moment (≤20 words): The auctioneer calls "ten thousand... thank you, 214!"; the pledge logs instantly with its own short clip.
Business model (≤15 words): Flat per-event fee, priced under one auctioneer day-rate; sold through auctioneers.

### seed-03: what changed
Weakest: willingness to pay (no named payer or price), buildability/demo (open-field AR and a real farm are out of reach in 48 hours), and unverified pain evidence. Shrank the scan to a short marked path using standard phone AR anchors, and moved the first sale to succession advisors, who already bill farms for transition planning and can resell this as a line item.

---
id: s3-improver-02#03
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-03]
source_task: s3-improver-02
---

# The Farm's Spoken Map

One-liner (≤20 words): A retiring farmer walks and talks; AI turns GPS and audio into confidence-tagged map layers for AR.
Buyer and niche (≤25 words): Succession advisors who bill family farms for transition planning, plus rural lenders and real-estate agents who need a documented property.
Pain and evidence (≤40 words; cite the pain dossier file): Drain tiles, water lines and flood-prone paddocks live only in a retiring farmer's memory. Once that person is gone, finding buried drainage means slow, invasive probing; the best current tool is a paper succession notebook. (src: inputs/seeds/seed-03.md)
How it works (≤50 words): The farmer walks a short, marked path with a phone, narrating ("Dad put the tile in here in '78"). AI aligns speech to GPS and AR plane anchors, extracting layers tagged with year, source and confidence. A voice agent asks follow-ups later; the advisor exports a shareable dig-safety map.
Why now (≤25 words; name the specific capability): Speech models plus LLMs now turn rambling narration into structured, geotagged records, and phone AR anchors hold a location without survey gear.
Demo moment (≤20 words): Walk a short path narrating a buried line; point the phone back and see "per Grandad, 1978, medium confidence."
Business model (≤15 words): Sold to succession advisors as a billable add-on to their existing transition-planning engagement.

### seed-04: what changed
Weakest: defensibility (Yoodli-type meeting coaches already give real-time pace feedback), buildability (capturing audio alongside a Zoom/Teams/Meet call needs a trusted installer) and a generic why-now. Swapped the capture method for a browser-tab-audio extension (no virtual driver to trust), sharpened the pitch to interview-specific cues Yoodli doesn't track, and tied why-now to sub-300ms streaming recognition.

---
id: s3-improver-02#04
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: [seed-04]
source_task: s3-improver-02
---

# Live Delivery Coach for Interviews

One-liner (≤20 words): Real-time delivery nudges during video job interviews — pace, filler words — plus a post-call coaching replay.
Buyer and niche (≤25 words): Job seekers interviewing on Zoom, Teams or Meet, especially new graduates and non-native speakers; careers services and bootcamps buy seats for cohorts.
Pain and evidence (≤40 words; cite the pain dossier file): People don't learn how they came across until a reasonless rejection email arrives. Mock-interview practice helps, but nerves change how people actually speak, exactly when nobody is coaching them. (src: inputs/seeds/seed-04.md)
How it works (≤50 words): A browser extension captures only the candidate's tab audio, never the interviewer's. It coaches delivery, not answers: pace, filler words, rambling, and using the interviewer's name, shown as a single glanceable word beside the webcam. After the call, a replay timeline marks three fixes; practice mode runs the same engine.
Why now (≤25 words; name the specific capability): Streaming speech recognition now runs under 300ms in a browser tab, fast enough for a live nudge that doesn't lag the conversation [unverified].
Demo moment (≤20 words): In a mock interview the candidate speeds up, a "slow down" nudge appears, they correct, then the replay timeline.
Business model (≤15 words): Free practice mode; paid monthly during an active job hunt; seat licences for careers services.

### seed-05: what changed
Weakest: defensibility (CCleaner and Windows' own troubleshooter are free, near-identical-sounding competitors), willingness to pay under that competition, and buildability of safe autonomous actions. Sharpened the pitch against scareware's unexplained problem counts and the troubleshooter's no-cause prompts, priced fixes explicitly below a repair-shop visit, and limited the demo build to three named, reversible actions instead of open-ended system changes.

---
id: s3-improver-02#05
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: [seed-05]
source_task: s3-improver-02
---

# Evidence-First PC Fixer

One-liner (≤20 words): An AI agent on your PC diagnoses slowdowns with plain-English evidence, then fixes them with one-click undo.
Buyer and niche (≤25 words): Non-technical Windows home users who'd otherwise call a relative or repair shop, their family's tech-support person, and small offices without IT staff.
Pain and evidence (≤40 words; cite the pain dossier file): Slow or buggy PCs leave users guessing. Cleaner apps report a scary, unexplained "1,432 problems found"; Windows' own troubleshooter rarely names a cause; a repair shop or a relative's visit costs money or days. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): You describe the problem in plain words. The agent reads startup apps, logs, drivers and disk health, then shows the real cause before touching anything. It proposes one of a fixed set of safe fixes, takes a restore point, and undoes in one click.
Why now (≤25 words; name the specific capability): LLM agents can now call system tools, correlate logs to a cause, and explain findings in plain English on ordinary hardware.
Demo moment (≤20 words): A deliberately slowed PC, a plain-English complaint, the evidence shown, one approved fix, then undo.
Business model (≤15 words): Free diagnosis; a small per-fix fee, well under a repair-shop visit.

### seed-06: what changed
Weakest: business model (none stated), defensibility against general coding agents that already plan changes, and a niche too broad to pitch in one line. Narrowed the buyer to agencies that bill clients per feature, reframed the output as a client-ready quote rather than a code change (what separates it from Cursor-style agents), and priced it under a senior developer's billable hour.

---
id: s3-improver-02#06
track: balanced
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: [seed-06]
source_task: s3-improver-02
---

# Client Quote Estimator for Dev Shops

One-liner (≤20 words): AI reads your codebase and turns a client's feature request into a quote-ready time and risk estimate.
Buyer and niche (≤25 words): Dev shops and agencies that bill clients per feature and must quote a price before a request is approved.
Pain and evidence (≤40 words; cite the pain dossier file): Client feature requests pile up in the ticket tracker, and quoting each one — time, effort, what it touches — is slow and usually a guess a senior developer has to interrupt real work to make. (src: inputs/seeds/seed-06.md)
How it works (≤50 words): When a client request lands in the ticket tracker, the AI explores the actual repository, finds the files and modules it would touch, and returns a build-time and risk estimate with a plain-English rationale — a client-ready quote draft, not a code change.
Why now (≤25 words; name the specific capability): Coding agents can now explore an entire repository and reason about where a change lands, well enough to ground an estimate [unverified].
Demo moment (≤20 words): Paste a client's ticket; get a build-time estimate, risk flag and a list of files it touches.
Business model (≤15 words): Per-estimate fee or agency seat licence, priced under one senior developer's billable hour.

### seed-07: what changed
Weakest: buildability (the whole idea leaned on one unverified model, Jev), business model (none named) and pitch clarity (no product was chosen). Picked one concrete instance of the reflex-plus-escalation loop — real-time secret leak catching in an editor or terminal — buildable against any fast small model if Jev is unavailable, and priced per seat against existing commit-time scanners.

---
id: s3-improver-02#07
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: [seed-07]
source_task: s3-improver-02
---

# Reflex Secret Guard

One-liner (≤20 words): A reflex-speed AI watches every keystroke in your editor or terminal and catches leaking secrets before they're committed.
Buyer and niche (≤25 words): Engineering teams and DevSecOps leads at companies where a leaked API key or credential in a commit is a recurring incident.
Pain and evidence (≤40 words; cite the pain dossier file): Today's secret scanners run at commit time or in CI, after a key is already in history and shared. Catching it per keystroke needs AI too fast and cheap to run on every character. (src: inputs/seeds/seed-07.md)
How it works (≤50 words): A fast "System 1" model scores every keystroke in the editor or terminal for secret-like patterns in milliseconds, sitting silently until something looks like a key or token. A match escalates to a slower "System 2" model that confirms context and blocks the paste or commit with a one-line reason.
Why now (≤25 words; name the specific capability): Jev-class "System 1" models are reportedly hundreds of times faster and cheaper than normal inference, cheap enough to run on every keystroke [unverified].
Demo moment (≤20 words): Type a fake API key into a terminal; a reflex flag appears and blocks the paste, instantly.
Business model (≤15 words): Per-seat monthly fee, priced alongside existing commit-time secret-scanning tools.

### seed-08: what changed
Weakest: defensibility (ElevenLabs, Descript, Adobe Enhance Speech and Sanas each cover a piece of this), buildability (full emotional restyling with word-level timing was untested) and an undecided first payer. Narrowed the 48-hour build to filler-removal plus a modest energy lift via forced-alignment re-synthesis, kept the full voice and frame-sync to slides as the differentiator, and named campus accessibility offices as the first payer.

---
id: s3-improver-02#08
track: novel
lineage: seed-improved
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: [seed-08]
source_task: s3-improver-02
---

# Same Words, More Life

One-liner (≤20 words): Upload a monotone lecture recording and get the same voice, same timing, with fillers gone and more energy.
Buyer and niche (≤25 words): University teaching-and-learning and accessibility offices re-releasing recorded lectures, and students improving their own recorded presentations.
Pain and evidence (≤40 words; cite the pain dossier file): A monotone lecture recording is hard to sit through and harder to learn from. Re-recording takes a lecturer hours, and manually cutting out "ums" breaks sync with the slides or screen recording. (src: inputs/seeds/seed-08.md)
How it works (≤50 words): Upload a recording; it's transcribed, cleaned of filler words, and re-spoken in the same voice with a modest energy lift, using forced alignment so every remaining word keeps its exact original timestamp. The result drops straight onto the original video, frame-synced to slides, with the original one click away.
Why now (≤25 words; name the specific capability): Voice-preserving TTS re-synthesis with word-level forced alignment now holds exact timing while lifting delivery, tractable for a lecture-length clip [unverified].
Demo moment (≤20 words): A monotone, um-filled lecture clip with slides, then the same clip re-spoken, in sync and lively.
Business model (≤15 words): Campus accessibility-office licence first; low-cost student subscription and a lecture-capture API later.

<!-- COMPLETE -->
