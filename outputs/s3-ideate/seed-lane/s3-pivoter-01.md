### seed-01 pivot: keeps A-seed-01-pain-1

---
id: s3-pivoter-01#01
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-01, A-seed-01-pain-1]
source_task: s3-pivoter-01
---

# Verified Doorway Registry

One-liner (≤20 words): Buildings get a one-time verified clearance profile; retailers check any address instantly instead of filming a route.
Buyer and niche (≤25 words): Furniture and appliance e-commerce retailers checking whether a large item will clear a specific delivery address before shipping.
Pain and evidence (≤40 words; cite the pain dossier file): A sofa that won't clear a stairwell or turn means failed delivery, return freight, wall damage and a lost sale. Tape-measure math and 2D calculators miss real 3D obstacles like switchbacks and low ceilings. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): Building owners or agents run a one-time AI measurement pass using existing floor-plan or listing photos, producing a verified clearance profile stored against the address. Retailers query the address at checkout for an instant fit verdict, no customer filming required.
Why now (≤25 words; name the specific capability): Vision models now extract accurate room and doorway dimensions from ordinary real-estate listing photos already online.
Demo moment (≤20 words): Enter any listed address and get an instant fit verdict for a chosen sofa, pulled from existing photos.
Business model (≤15 words): Retailers pay per address lookup; agents earn a referral fee for verified listings.

### seed-01 pivot: keeps A-seed-01-tech-1

---
id: s3-pivoter-01#02
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: extractor, track: novel }
parents: [seed-01, A-seed-01-tech-1]
source_task: s3-pivoter-01
---

# Wheelchair Route Checker

One-liner (≤20 words): A short phone video of an apartment or venue turns into an accessibility verdict for wheelchair users.
Buyer and niche (≤25 words): Renters, venues and disability advocacy organizations who need to know if a space is truly wheelchair accessible before a visit.
Pain and evidence (≤40 words; cite the pain dossier file): Listed "wheelchair accessible" ratings are often self-reported and wrong; a hallway, threshold lip or tight turn that fails isn't visible from photos, and finding out in person means a wasted trip. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): A user or venue films a short walkthrough with a phone. A 3D reconstruction model turns it into geometry of doorways, thresholds and turning radii, checked against the user's wheelchair or scooter dimensions for a pass/fail verdict with the exact failing point flagged.
Why now (≤25 words; name the specific capability): Recent video-to-3D reconstruction models extract centimetre-scale geometry from ordinary phone footage. [unverified]
Demo moment (≤20 words): Film an apartment hallway; get a verdict on wheelchair passage plus a flagged narrow turn.
Business model (≤15 words): Venues and property managers pay to certify listings; individual checks are free.

### seed-01 pivot: keeps A-seed-01-aud-1

---
id: s3-pivoter-01#03
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-01, A-seed-01-aud-1]
source_task: s3-pivoter-01
---

# Delivery Damage Shield

One-liner (≤20 words): Delivery crews film before-and-after footage that AI checks automatically to settle who caused any damage.
Buyer and niche (≤25 words): Online furniture and appliance retailers and white-glove delivery companies who eat the cost of disputed damage claims.
Pain and evidence (≤40 words; cite the pain dossier file): Crews are blamed for wall dents, floor scratches and door damage that often existed beforehand; without documentation, retailers pay out or lose customer trust either way. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): The crew films a quick walkthrough on arrival and departure. A vision model compares the two passes, flags any new marks with location and timestamp, and generates a signed liability report attached to the order automatically, before anyone files a dispute.
Why now (≤25 words; name the specific capability): Vision models can now compare before-and-after footage and reliably localize new physical damage.
Demo moment (≤20 words): Run before and after clips through the checker; watch it circle one new scuff mark.
Business model (≤15 words): Delivery companies pay a monthly fee per crew, justified by disputes avoided.

### seed-01 pivot: keeps A-seed-01-biz-1

---
id: s3-pivoter-01#04
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-01, A-seed-01-biz-1]
source_task: s3-pivoter-01
---

# Job-Site Clearance Check

One-liner (≤20 words): A phone video of a job-site route returns a verdict on whether heavy equipment will clear every gate and aisle.
Buyer and niche (≤25 words): Equipment rental companies and contractors moving forklifts, generators and machinery onto tight industrial or renovation sites.
Pain and evidence (≤40 words; cite the pain dossier file): Equipment that won't clear a site gate or freight elevator means a wasted rental day, a stranded truck and an expensive reroute; site plans are often outdated or missing. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): A site contact films the delivery path from gate to install point. The geometry is checked against the equipment's dimensions and turning envelope, returning a verdict and flagging the tightest point before the truck ever leaves the yard.
Why now (≤25 words; name the specific capability): Phone-video-to-3D reconstruction now captures industrial-scale clearances well enough to catch a blocked route in advance. [unverified]
Demo moment (≤20 words): Film a warehouse aisle; get a clearance verdict for a specific forklift model.
Business model (≤15 words): Rental companies pay per route check, justified by wasted trips prevented.

### seed-01 pivot: keeps A-seed-01-insight-1

---
id: s3-pivoter-01#05
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-01, A-seed-01-insight-1]
source_task: s3-pivoter-01
---

# Facility Move Planner

One-liner (≤20 words): Hospitals plan how a new MRI or hospital bed will physically travel through corridors before committing to a purchase.
Buyer and niche (≤25 words): Hospital facilities teams and medical equipment vendors planning large installations inside existing buildings.
Pain and evidence (≤40 words; cite the pain dossier file): A purchased MRI or oversized bed that can't navigate existing corridors and doorways forces expensive last-minute renovation or a cancelled order, discovered only on delivery day. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): Facilities teams upload existing building floor plans or BIM data. A motion-planning engine computes whether the equipment's exact dimensions and turning geometry can traverse the planned route, returning a pass/fail verdict and the precise doorway or corner that fails.
Why now (≤25 words; name the specific capability): Motion-planning solvers now run against real building geometry fast enough to check routes during the sales process, not on delivery day.
Demo moment (≤20 words): Load a hospital floor plan and an MRI's dimensions; watch the planner flag the one corner it can't turn.
Business model (≤15 words): Equipment vendors pay per route check, bundled into the sales quote process.

### seed-03 pivot: keeps A-seed-03-pain-1

---
id: s3-pivoter-01#06
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-03, A-seed-03-pain-1]
source_task: s3-pivoter-01
---

# Message Archive Miner

One-liner (≤20 words): AI mines a retiring owner's years of texts, emails and photos to rebuild property knowledge no one ever wrote down.
Buyer and niche (≤25 words): Families and successors of retiring farm, ranch or estate owners who need what the owner already documented informally.
Pain and evidence (≤40 words; cite the pain dossier file): A retiring owner's knowledge of drain tiles, water lines and buried cable exists nowhere formal; once they're gone, finding it means slow, invasive probing or trenching. (src: inputs/seeds/seed-03.md)
How it works (≤50 words): The owner grants access to years of texts, emails and camera-roll photos with contractors and family. An LLM scans for location-relevant mentions, cross-references geotagged photos, and builds a confidence-tagged map layer without requiring any new interview.
Why now (≤25 words; name the specific capability): LLMs now extract structured, geotagged facts from years of unstructured personal messages and photo metadata cheaply.
Demo moment (≤20 words): Point the tool at a decade of texts and photos; watch it surface buried-infrastructure mentions with dates.
Business model (≤15 words): Succession advisors pay a flat fee per estate to run the archive scan.

### seed-03 pivot: keeps A-seed-03-tech-1

---
id: s3-pivoter-01#07
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-03, A-seed-03-tech-1]
source_task: s3-pivoter-01
---

# Shop Handover Recorder

One-liner (≤20 words): A retiring shop owner walks their business talking; AI turns the narration into a structured handover manual.
Buyer and niche (≤25 words): Buyers and brokers of small businesses (restaurants, auto shops, repair services) acquiring undocumented operational know-how.
Pain and evidence (≤40 words; cite the pain dossier file): When a small business changes hands, "how we actually do things" — supplier quirks, equipment fixes, regular customer needs — lives only in the outgoing owner's head and is rarely written down. (src: inputs/seeds/seed-03.md)
How it works (≤50 words): The owner walks the premises narrating into their phone. Speech is aligned to location and turned into structured, confidence-tagged records by topic (equipment, suppliers, staff quirks), handed to the buyer as a searchable handover manual.
Why now (≤25 words; name the specific capability): Speech recognition and LLM extraction now turn rambling narration into structured, searchable operational records cheaply.
Demo moment (≤20 words): Walk a shop floor narrating for two minutes; get a structured handover card per piece of equipment.
Business model (≤15 words): Business brokers pay per sale to include a handover manual in the deal package.

### seed-03 pivot: keeps A-seed-03-aud-1

---
id: s3-pivoter-01#08
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-03, A-seed-03-aud-1]
source_task: s3-pivoter-01
---

# Farm Estate Ledger

One-liner (≤20 words): A retiring farmer narrates equipment history and finances so successors avoid estate-tax surprises and ownership disputes.
Buyer and niche (≤25 words): Family farms going through succession who need clean equipment and asset records for estate planning, not a land map.
Pain and evidence (≤40 words; cite the pain dossier file): Undocumented equipment provenance, maintenance history and informal family ownership arrangements routinely trigger succession tax disputes and delays that outlast the farmer who could have explained them. (src: inputs/seeds/seed-03.md)
How it works (≤50 words): The farmer talks through each major asset while an AI extracts structured ownership, depreciation and maintenance records, flags gaps, and produces an estate-ready asset ledger for the family's accountant.
Why now (≤25 words; name the specific capability): LLMs now turn informal spoken financial history into structured records an accountant can act on directly.
Demo moment (≤20 words): Narrate ownership of one piece of equipment; watch a structured ledger entry appear with a flagged gap.
Business model (≤15 words): Estate planning accountants pay a per-farm fee to generate the ledger.

### seed-03 pivot: keeps A-seed-03-biz-1

---
id: s3-pivoter-01#09
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-03, A-seed-03-biz-1]
source_task: s3-pivoter-01
---

# Building Systems Memory

One-liner (≤20 words): A retiring facilities manager narrates a building's undocumented quirks so it appraises and sells for what it's worth.
Buyer and niche (≤25 words): Commercial real estate lenders, brokers and buyers evaluating older buildings with undocumented mechanical systems.
Pain and evidence (≤40 words; cite the pain dossier file): A departing facilities manager's knowledge of which breaker feeds what, why a wing runs hot, or where an old pipe was capped isn't in any drawing, and buyers discount price for that uncertainty. (src: inputs/seeds/seed-03.md)
How it works (≤50 words): The outgoing manager walks the building narrating; AI aligns speech to floor location and builds confidence-tagged system records (electrical, HVAC, plumbing quirks) that travel with the building's sale file.
Why now (≤25 words; name the specific capability): Speech and LLM extraction now turn a walking narration into a structured building systems record cheaply enough for one-time use.
Demo moment (≤20 words): Narrate a boiler room's history; see a confidence-tagged system record appear on the building's floor plan.
Business model (≤15 words): Commercial lenders and brokers pay per building because documentation lifts appraisal and sale price.

### seed-03 pivot: keeps A-seed-03-insight-1

---
id: s3-pivoter-01#10
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-03, A-seed-03-insight-1]
source_task: s3-pivoter-01
---

# Departing Employee Debrief

One-liner (≤20 words): A departing employee walks their desk and systems talking; AI turns it into the know-how their team actually needs.
Buyer and niche (≤25 words): Companies losing a long-tenured employee in IT, operations or another ops-critical role that carries undocumented process knowledge.
Pain and evidence (≤40 words; cite the pain dossier file): Critical operational knowledge — which vendor to call at 2am, why a workaround exists, which dashboard actually matters — walks out the door with a departing employee and is never written down in time. (src: inputs/seeds/seed-03.md)
How it works (≤50 words): In the last two weeks, the employee narrates their role while sharing their screen and walking their physical workspace. AI aligns narration to context (app, file, location) and builds a confidence-tagged knowledge base searchable by their replacement.
Why now (≤25 words; name the specific capability): LLMs now extract structured, confidence-tagged knowledge from casual narrated walkthroughs, not just formal documentation.
Demo moment (≤20 words): Narrate a two-minute desk walkthrough; watch a structured knowledge card appear for the replacement to search.
Business model (≤15 words): Companies pay a flat fee per departing employee, run through HR offboarding.

### seed-05 pivot: keeps A-seed-05-pain-1

---
id: s3-pivoter-01#11
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: [seed-05, A-seed-05-pain-1]
source_task: s3-pivoter-01
---

# Diagnose-Then-Dispatch

One-liner (≤20 words): AI diagnoses the real cause of a slow PC, then hands a repair tech the exact fix needed.
Buyer and niche (≤25 words): Non-technical home users who'd rather pay a repair shop but hate paying for diagnosis time and repeat visits.
Pain and evidence (≤40 words; cite the pain dossier file): A slow or buggy PC that its owner can't diagnose means searching error messages, paying a repair shop to guess, or waiting days for a relative to look at it. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): The owner describes the problem in plain words; an agent reads real machine state (startup apps, logs, drivers, disk health) and produces an evidence report. That report routes to a local technician, who fixes the confirmed cause on the first visit instead of re-diagnosing from scratch.
Why now (≤25 words; name the specific capability): Agents can now reliably read system logs and diagnostics and explain findings in plain English before any human is involved.
Demo moment (≤20 words): Type a complaint about a slow laptop; watch a diagnosis report appear ready to hand to a technician.
Business model (≤15 words): Repair shops pay per routed diagnosis; the pre-diagnosis cuts billable visit time.

### seed-05 pivot: keeps A-seed-05-tech-1

---
id: s3-pivoter-01#12
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: [seed-05, A-seed-05-tech-1]
source_task: s3-pivoter-01
---

# POS Terminal Doctor

One-liner (≤20 words): An on-device AI agent diagnoses why a store's point-of-sale terminal is acting up, in plain language.
Buyer and niche (≤25 words): Small retail chains and restaurants whose store staff have no IT support when a POS terminal freezes or a printer stops.
Pain and evidence (≤40 words; cite the pain dossier file): A frozen POS terminal during a rush means lost sales and a panicked call to a remote helpdesk; staff can't describe the problem technically and helpdesks can't see the machine's real state. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): Staff describe the symptom in plain words; a local agent inspects processes, peripheral connections and logs, shows the evidence for its diagnosis, and either walks staff through an approved fix or escalates to the chain's remote IT with the diagnosis attached.
Why now (≤25 words; name the specific capability): Local agents can now call system diagnostics on locked-down retail hardware and explain findings without a technical operator.
Demo moment (≤20 words): A frozen receipt printer; the agent identifies a stuck spooler process and walks staff through clearing it.
Business model (≤15 words): Retail chains pay per terminal per month, justified by reduced downtime.

### seed-05 pivot: keeps A-seed-05-aud-1

---
id: s3-pivoter-01#13
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: local-private, track: balanced }
parents: [seed-05, A-seed-05-aud-1]
source_task: s3-pivoter-01
---

# Am I Actually Hacked

One-liner (≤20 words): An agent checks a home PC for real signs of compromise and explains, with evidence, whether it's actually infected.
Buyer and niche (≤25 words): Non-technical Windows home users who see a scary popup or slowdown and can't tell a real threat from a false alarm.
Pain and evidence (≤40 words; cite the pain dossier file): Non-technical users panic over popups and slowdowns, can't tell malware from a bad browser extension, and either ignore real threats or pay for unnecessary cleanup services out of fear. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): The user describes what they're seeing; the agent inspects running processes, network connections, browser extensions and startup entries for actual indicators of compromise, shows the specific evidence found or not found, and walks through a safe removal plan only if something real is confirmed.
Why now (≤25 words; name the specific capability): Local agents can now correlate multiple real system signals into a plain-English compromise verdict instead of a generic scan count.
Demo moment (≤20 words): A suspicious popup; the agent finds and shows the exact malicious extension, or confirms nothing is wrong.
Business model (≤15 words): Free scan; a small fee only when a real threat is found and removed.

### seed-05 pivot: keeps A-seed-05-biz-1

---
id: s3-pivoter-01#14
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: local-private, track: balanced }
parents: [seed-05, A-seed-05-biz-1]
source_task: s3-pivoter-01
---

# Home Network Fixer

One-liner (≤20 words): An agent diagnoses why home Wi-Fi is slow or dropping and fixes it, covering every device in the household.
Buyer and niche (≤25 words): Non-technical households frustrated by flaky home Wi-Fi, dropped video calls, and smart devices losing connection.
Pain and evidence (≤40 words; cite the pain dossier file): Slow or dropping home internet sends users to reboot routers at random, call their ISP for a generic script, or live with it; no one can see which device is actually the cause. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): The agent runs on a home hub or a family member's laptop, reads router logs, channel congestion and device connection history, shows evidence for the cause, proposes a fix plan, and keeps monitoring afterward.
Why now (≤25 words; name the specific capability): Local agents can now read router and device diagnostics and translate congestion patterns into plain-English causes.
Demo moment (≤20 words): A deliberately congested network; the agent identifies the flooding device and fixes the channel setting live.
Business model (≤15 words): Free diagnosis, small fee per fix, low monthly plan covering the whole household.

### seed-05 pivot: keeps A-seed-05-insight-1

---
id: s3-pivoter-01#15
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: [seed-05, A-seed-05-insight-1]
source_task: s3-pivoter-01
---

# Evidence-First Investing

One-liner (≤20 words): A retail investing app explains every recommendation with the actual evidence behind it, not a fear-based risk score.
Buyer and niche (≤25 words): Retail investors who distrust robo-advisors' vague risk warnings and want to see the real reasoning behind a suggestion.
Pain and evidence (≤40 words; cite the pain dossier file): Robo-advisors and insurance upsells lean on fear-based scores that don't explain why, pushing people into fees or products they don't understand. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): Before proposing any portfolio change, the agent shows its evidence in plain language, for example a chart of exactly when and why an allocation drifted, then proposes one specific change the user approves, with every change reversible and logged.
Why now (≤25 words; name the specific capability): LLM agents can now read a portfolio's real transaction history and explain the specific cause of drift in plain language.
Demo moment (≤20 words): A drifted portfolio; the agent shows the exact cause with a chart, user approves one rebalance, then undoes it.
Business model (≤15 words): A flat monthly subscription instead of assets-under-management fees or commissions.

### seed-07 pivot: keeps A-seed-07-pain-1

---
id: s3-pivoter-01#16
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: [seed-07, A-seed-07-pain-1]
source_task: s3-pivoter-01
---

# Distilled Reflex Moderator

One-liner (≤20 words): Live chat moderation runs on a tiny distilled model on-device, catching every message instantly with no per-message cloud call.
Buyer and niche (≤25 words): Live-streaming platforms and chat apps that need to moderate every message in real time without per-message inference cost.
Pain and evidence (≤40 words; cite the pain dossier file): Moderating every chat message with a full model is too slow and expensive, so platforms sample messages or moderate after the fact, letting harmful content sit live for minutes. (src: inputs/seeds/seed-07.md)
How it works (≤50 words): A large model's moderation judgments across millions of historical messages train a tiny distilled classifier that runs locally on the streaming server, scoring every message in milliseconds with zero live LLM call; only ambiguous edge cases escalate to a full model.
Why now (≤25 words; name the specific capability): Distillation from large frontier models into small deployable classifiers is now routine and cheap enough for continuous per-message use.
Demo moment (≤20 words): A flood of live chat messages moderated instantly on-screen with zero visible delay.
Business model (≤15 words): Platforms pay per million messages moderated, priced below per-call cloud inference.

### seed-07 pivot: keeps A-seed-07-tech-1

---
id: s3-pivoter-01#17
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: local-private, track: novel }
parents: [seed-07, A-seed-07-tech-1]
source_task: s3-pivoter-01
---

# Instant NPC Reflexes

One-liner (≤20 words): Game NPCs make believable tactical decisions every single frame using an ultra-fast, low-cost reflex model.
Buyer and niche (≤25 words): Game studios building NPCs or opponents that need to react convincingly within a single frame, not on a scripted timer.
Pain and evidence (≤40 words; cite the pain dossier file): Today's NPC "AI" runs on pre-scripted behavior trees because calling a real model per frame is far too slow and expensive, making opponents feel robotic and predictable. (src: inputs/seeds/seed-07.md)
How it works (≤50 words): An ultra-fast, low-cost model evaluates the game state every frame and outputs a reflex-level tactical decision such as dodge, flank or retreat; a slower, more deliberate model is called only for longer-horizon planning, like choosing a new strategy.
Why now (≤25 words; name the specific capability): A new generation of inference models runs far faster and cheaper than prior models, making per-frame calls newly affordable. [unverified]
Demo moment (≤20 words): An NPC dodges and repositions convincingly in real time with visibly zero lag, frame after frame.
Business model (≤15 words): Game studios license the reflex engine per title, priced by concurrent player count.

### seed-07 pivot: keeps A-seed-07-aud-1

---
id: s3-pivoter-01#18
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-07, A-seed-07-aud-1]
source_task: s3-pivoter-01
---

# Instant Transaction Guard

One-liner (≤20 words): Every card transaction is scored the instant it happens, catching fraud patterns that hourly batch scoring misses entirely.
Buyer and niche (≤25 words): Payment processors and fintechs whose current fraud systems score transactions in batches, missing fast-moving fraud rings.
Pain and evidence (≤40 words; cite the pain dossier file): Batch fraud scoring runs hourly or nightly because scoring every transaction live is too slow and expensive, giving fraud rings a window to move money before any flag fires. (src: inputs/seeds/seed-07.md)
How it works (≤50 words): Every transaction triggers an instant reflex-level risk judgment as it happens; anything borderline escalates to a slower, more thorough model within seconds, giving the merchant a real-time hold decision instead of a next-day chargeback.
Why now (≤25 words; name the specific capability): Per-event inference has become cheap and fast enough to score every transaction live rather than in batches.
Demo moment (≤20 words): A staged fraud pattern is caught and held within the same transaction, not the next day's report.
Business model (≤15 words): Processors pay per transaction scored, priced well below the fraud it prevents.

### seed-07 pivot: keeps A-seed-07-biz-1

---
id: s3-pivoter-01#19
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: local-private, track: novel }
parents: [seed-07, A-seed-07-biz-1]
source_task: s3-pivoter-01
---

# Live Odds Reflex Engine

One-liner (≤20 words): Sportsbook odds re-price instantly on every play instead of lagging behind live action by several seconds.
Buyer and niche (≤25 words): Sportsbooks and live-betting platforms whose odds engines currently lag live game action by several seconds.
Pain and evidence (≤40 words; cite the pain dossier file): Repricing odds after every play with a standard model is too slow, so books batch updates every few seconds, creating a stale-odds window that sharp bettors exploit. (src: inputs/seeds/seed-07.md)
How it works (≤50 words): A fast reflex model recalculates win probability and odds the instant a play ends; a slower model handles rarer complex scenarios such as injuries or controversial calls that need deeper reasoning, closing the stale-odds window.
Why now (≤25 words; name the specific capability): Ultra-low-cost, low-latency inference now makes per-play repricing affordable at the volume live sports betting requires.
Demo moment (≤20 words): A simulated scoring play; watch odds update within a fraction of a second on screen.
Business model (≤15 words): Sportsbooks pay per repriced market, metered by live-event volume.

### seed-07 pivot: keeps A-seed-07-insight-1

---
id: s3-pivoter-01#20
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: balanced }
parents: [seed-07, A-seed-07-insight-1]
source_task: s3-pivoter-01
---

# Zero-Lag Live Captions

One-liner (≤20 words): Live conversations get captioned utterance by utterance with no perceptible lag, cheap enough to run all day.
Buyer and niche (≤25 words): Deaf and hard-of-hearing individuals who need real-time captions for everyday conversations, not just scheduled meetings.
Pain and evidence (≤40 words; cite the pain dossier file): Existing live-captioning tools are built for scheduled meetings and cost too much per minute to leave running all day, so users go without captions for spontaneous conversations. (src: inputs/seeds/seed-07.md)
How it works (≤50 words): A low-cost, low-latency model transcribes and captions speech continuously and affordably enough to run all day on a phone or glasses, with a slower model invoked only when unclear audio needs extra context to resolve.
Why now (≤25 words; name the specific capability): Inference has become cheap and fast enough to run continuously all day rather than being reserved for scheduled, billed sessions.
Demo moment (≤20 words): A spontaneous hallway conversation is captioned live on a phone screen with no visible delay.
Business model (≤15 words): A flat monthly subscription for always-on captioning, not per-minute meeting pricing.

<!-- COMPLETE -->
