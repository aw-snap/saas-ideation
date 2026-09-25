---
id: I-1551
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r2
raw_id: s3-ideator-balanced-T9-01-r2#02
merged: []
---

# On-Device Rejection Checker for E-Invoices

One-liner (≤20 words): Runs the official e-invoice validator's rules locally against a client's XRechnung or Peppol file before anything is sent.
Buyer and niche (≤25 words): Solo accountants and bookkeepers preparing client e-invoices under the German, Belgian and French mandates who cannot risk a rejected filing or a leaked bank record.
Pain and evidence (≤40 words; cite the pain dossier file): Software-generated XRechnung fails official validators over missing bank data, and French platforms reject on SIREN mismatches and stall payment; solos already lack the budget or procurement staff for enterprise-vetted cloud tools. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local model parses the client's UBL or XRechnung XML alongside the underlying invoice and bank records, checks every mandatory field against the published validator rules, and flags exactly which field will fail and why, all before the file is transmitted to any government platform.
Why now (≤25 words; name the specific capability): Open-weight local reasoning models fit a solo practice's laptop and cross-check a full invoice XML against validator rules with no cloud call.
Demo moment (≤20 words): Load a sample XRechnung with a missing bank field; the tool flags it locally in seconds, before submission.
Business model (≤15 words): Per-client-file fee, or a flat monthly plan for a bookkeeping practice.

---
id: I-1552
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [A-seed-03-tech-1]
source_task: s3-ideator-balanced-T9-01-r2
raw_id: s3-ideator-balanced-T9-01-r2#03
merged: []
---

# Confidence-Tagged Reader for Trucking Paperwork

One-liner (≤20 words): Extracts driver settlement data from rate confirmations, PODs and carrier invoices, tagging every field with a confidence score, offline.
Buyer and niche (≤25 words): Solo bookkeepers and small accounting practices serving owner-operator trucking clients whose paperwork carries driver SSNs and bank routing numbers.
Pain and evidence (≤40 words; cite the pain dossier file): Billing staff manually key rate confirmations and audit each carrier invoice against the BOL and POD, every load; running that driver financial data through cloud AI risks the same disclosure exposure IRS rules already flag for tax data. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local extraction model reads scans of rate confirmations, PODs and carrier invoices, pulls load number, rate and settlement fields, and tags each field with a confidence score. Only high-confidence fields auto-post; the rest route to a review queue, all without the document reaching a cloud OCR vendor.
Why now (≤25 words; name the specific capability): Open-weight local models fit a solo practice's laptop and extract structured fields without a document ever reaching a cloud OCR vendor.
Demo moment (≤20 words): Drop in a rate confirmation and a POD; watch fields populate with green and amber confidence tags, offline.
Business model (≤15 words): Per-document or monthly plan sold to bookkeeping practices with trucking clients.

---
id: I-1553
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [A-seed-05-mech-2]
source_task: s3-ideator-balanced-T9-01-r2
raw_id: s3-ideator-balanced-T9-01-r2#04
merged: []
---

# Confidence-Tagged VAT Coder, Runs Local

One-liner (≤20 words): Reads mixed-tax invoices and proposes the VAT code for each line, showing its evidence, without the file ever leaving the practice.
Buyer and niche (≤25 words): Solo bookkeepers and small accounting practices whose invoices carry multiple tax codes that existing capture tools garble or cannot correct.
Pain and evidence (≤40 words; cite the pain dossier file): Invoices with more than one tax code break existing extraction, and VAT that is a penny off cannot be adjusted, while a solo practitioner has no procurement team to vet a safer cloud alternative. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local model reads each invoice line, proposes a VAT or tax code, and shows the exact phrase or line item that justifies it, an evidence-first check performed entirely on the practitioner's machine. Low-confidence or multi-code lines route to a one-click review queue before posting.
Why now (≤25 words; name the specific capability): Open-weight local models parse mixed-format invoices on a laptop, cheap enough to check per line with no cloud extraction bill.
Demo moment (≤20 words): Load an invoice with two tax codes; each line gets a code and evidence, then approve the flagged one.
Business model (≤15 words): Per-seat monthly add-on sold to bookkeeping practices.

---
id: I-1554
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [A-seed-06-insight-1]
source_task: s3-ideator-balanced-T9-01-r2
raw_id: s3-ideator-balanced-T9-01-r2#05
merged: []
---

# Plain-Language E-Invoice Rejection Explainer

One-liner (≤20 words): Reads a rejected e-invoice's raw XML locally and drafts a plain client email naming exactly what to fix.
Buyer and niche (≤25 words): Solo bookkeepers and small accounting practices whose clients receive e-invoice rejection codes they cannot interpret themselves.
Pain and evidence (≤40 words; cite the pain dossier file): Peppol UBL and XRechnung rejections are machine-only codes, and French platforms silently block the payment cycle until someone fixes the file, while advisers already absorb this switchover client by client with no automation. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local model reads the client's actual rejected invoice XML, grounding its explanation in the real file rather than guessing from the error code alone, then drafts a plain-language email naming the exact missing field and the fix, without the file ever leaving the bookkeeper's machine.
Why now (≤25 words; name the specific capability): Open-weight local models read a full invoice XML on a laptop and draft grounded, client-ready explanations with no cloud exposure of client bank data.
Demo moment (≤20 words): Load a rejected XRechnung; watch a plain-English client email draft itself, citing the exact missing field.
Business model (≤15 words): Per-rejection fee, or a flat monthly plan for a bookkeeping practice.

---
id: I-1555
track: novel
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s2-seed-lead
raw_id: seed-08
merged: []
---

# Same Words, More Life

One-liner (≤20 words): Audio in, audio out: the same speech, more expressive and easier to follow, with fillers turned into clean pauses.
Buyer and niche (≤25 words): Universities, for recorded lectures and course videos, or students, for lectures they watch or their own recorded presentations.
Pain and evidence (≤40 words; cite the pain dossier file): Monotone, filler-heavy speech is unpleasant and hard to understand. Monotone lecture recordings are hard to learn from; re-recording takes hours, and cutting out "ums" breaks sync with slides or screen recordings. (src: inputs/seeds/seed-08.md)
How it works (≤50 words): Upload a recording; a speech-to-speech model returns mostly the same audio with more emotion, replacing "um"s with pauses and keeping or changing the accent. Every word stays at its original time, so the audio drops onto the lecture video. A per-section expressiveness slider keeps the original one click away.
Why now (≤25 words; name the specific capability): Expressive speech-to-speech models that restyle delivery while keeping the speaker's words and voice. [unverified]
Demo moment (≤20 words): A monotone, um-filled lecture clip with slides, then the same clip with new audio, in sync and lively.
Business model (≤15 words): Department or campus licence; low-cost student subscription; API for lecture-capture platforms.

---
id: I-1556
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#01
merged: []
---

# Dentrix Desktop Shadow Agent

One-liner (≤20 words): A desktop agent shadow-migrates a dental practice's Dentrix data overnight, catching every mismatch before go-live.
Buyer and niche (≤25 words): Dental office managers switching practice-management systems, at practices paying $860+ conversion fees and risking failed transfers.
Pain and evidence (≤40 words; cite the pain dossier file): Migrations bring surprise conversion fees and data loss; one paid transfer "basically had to start from scratch on everything." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The agent walks every screen of the old system — patients, ledger, imaging — capturing structured records, then re-enters them into the new system overnight, flagging any record it can't verify before staff arrive.
Why now (≤25 words; name the specific capability): Desktop computer-use agents (Claude Sonnet 4.5, Sept 2025) now sustain 30+ hour multi-step tasks at 61.4% OSWorld accuracy.
Demo moment (≤20 words): Two windows side by side: new system populates live while the agent flags one mismatched record for review.
Business model (≤15 words): Flat $2,500 per migration, billed to the practice or outgoing software vendor.

---
id: I-1557
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#02
merged: []
---

# Lab Machine Whisperer

One-liner (≤20 words): An agent watches the lab analyzer's own screen and files results into the practice system the instant they're ready.
Buyer and niche (≤25 words): Veterinary technicians at small clinics running in-house or IDEXX analyzers that don't sync with their practice-management system.
Pain and evidence (≤40 words; cite the pain dossier file): The practice system "does not communicate with our lab machines"; techs report wasting "literal hours staring at it waiting for it to load." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A small camera or screen-capture agent watches the analyzer's own display, detects when a result is complete, reads the panel, and writes it straight into Cornerstone through the desktop UI, then texts the tech.
Why now (≤25 words; name the specific capability): Vision-capable computer-use agents (61.4% OSWorld, Sept 2025) can now read a device screen and act on it reliably.
Demo moment (≤20 words): A mock analyzer flashes "complete"; seconds later the result appears in Cornerstone and a phone buzzes.
Business model (≤15 words): Per-clinic subscription, about $200 a month, priced against one lost result.

---
id: I-1558
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#03
merged: []
---

# 48-Hour DMS Continuity Twin

One-liner (≤20 words): A shadow agent mirrors the dealership's DMS screens live, so staff keep working through outages or ransomware.
Buyer and niche (≤25 words): Dealer group service and sales managers on CDK or Reynolds, whose dealership loses live records during any DMS outage.
Pain and evidence (≤40 words; cite the pain dossier file): The June 2024 CDK ransomware shut sales and service for two weeks, costing dealers over $1B collectively and forcing a return to paper. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The agent continuously operates the DMS UI in the background, logging every screen state into an offline mirror. If the DMS goes dark, staff switch to a read/write clone that queues transactions, then replays them once the real system returns.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer-use agents now sustain multi-step tasks for 30+ hours, enabling always-on background mirroring, not one-off scripts.
Demo moment (≤20 words): Cut the DMS connection mid-demo; staff keep booking a repair order in the clone, then watch it replay on reconnect.
Business model (≤15 words): Dealer-group subscription, about $500 per rooftop monthly, priced against outage cost.

---
id: I-1559
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#04
merged: []
---

# Voyager Live-Write Agent

One-liner (≤20 words): An agent writes and reports inside Yardi Voyager's own screens, replacing one-way flat-file exports with live round-trip access.
Buyer and niche (≤25 words): Property management bookkeepers on Yardi Voyager, who have no self-serve API and must batch-export flat files instead.
Pain and evidence (≤40 words; cite the pain dossier file): Yardi has no self-serve public API, reportedly charging $25,000 per interface [unverified], so data moves only by batch SFTP; on AppFolio "credit card transactions still have to be entered manually." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The agent logs into Voyager as the bookkeeper, posting card transactions and vendor bills directly into the ledger screens, and scripts the report page repeatedly to assemble any date range on demand, no SFTP wait.
Why now (≤25 words; name the specific capability): Browser-use style agents (production-adjacent, 116k-star framework) now sustain reliable multi-step UI writes, not just one-off scraping, at cents per hour.
Demo moment (≤20 words): Ask for a report Yardi's UI can't filter by date; the agent scripts it back in under a minute.
Business model (≤15 words): Per-portfolio subscription, $99-$299 a month, far under Yardi's per-interface fee.

---
id: I-1560
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#05
merged: []
---

# PioneerRx Access Concierge

One-liner (≤20 words): An agent operates PioneerRx's own pharmacy screens to move data to wholesalers and payers, with no API ever granted.
Buyer and niche (≤25 words): Independent pharmacy owners and technicians on PioneerRx, blocked behind a manual vendor-inquiry form with no public API docs.
Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx access runs through a manual vendor-inquiry form; its docs sit behind authentication and it has no public status page. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The agent logs into PioneerRx as staff would, reads the refill queue and insurance rejections, and pushes matching orders into the wholesaler's ordering site, with a pharmacist approving each write before it submits.
Why now (≤25 words; name the specific capability): Open-weight GUI agents (UI-TARS-2, Sept 2025) let a pharmacy run this locally, keeping patient data off any cloud API.
Demo moment (≤20 words): The refill queue auto-populates a wholesaler order screen live, with zero API calls made anywhere.
Business model (≤15 words): Per-pharmacy subscription, about $200 monthly, cheaper than any API toll.

---
id: I-1561
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#06
merged: []
---

# Silent AMS Drift Detector

One-liner (≤20 words): An agent nightly diffs carrier portals against the agency's own system, catching cancellations before they become uncovered claims.
Buyer and niche (≤25 words): Insurance agency account managers and CSRs on Applied Epic or AMS360, who juggle carrier portals and their own AMS by hand.
Pain and evidence (≤40 words; cite the pain dossier file): A cancellation captured outside the AMS never reached Epic, leading to a reported $42,000 policy loss; agencies do "double and triple entry" across tools. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): Each night the agent logs into every carrier portal, extracts policy status, and diffs it against the agency's own records, flagging any cancellation, endorsement or payment not yet reflected before it becomes an uncovered claim.
Why now (≤25 words; name the specific capability): Cheap million-token context lets the agent compare full policy histories nightly for pennies, not spot-check them.
Demo moment (≤20 words): Simulate a carrier-side cancellation; the dashboard turns red on that policy within the nightly run.
Business model (≤15 words): Per-seat subscription, about $150 per CSR monthly, priced against E&O exposure.

---
id: I-1562
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#07
merged: []
---

# Rooftop Toll Ledger

One-liner (≤20 words): An agent reads every rooftop's DMS integration invoice and flags which locations are quietly paying more than the rest.
Buyer and niche (≤25 words): Dealer group controllers on CDK or Reynolds paying per-rooftop, per-tool integration fees across many locations and vendors.
Pain and evidence (≤40 words; cite the pain dossier file): Setup and monthly fees stack per rooftop and per tool; one dealer called it "a blatant extortion racket," with CDK 3PA certification near $30,000 upfront. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The agent ingests every vendor invoice and contract PDF across rooftops, extracts the per-location fee terms, builds one ledger, flags any rooftop paying above its contracted rate, and drafts the dispute email for a controller to send.
Why now (≤25 words; name the specific capability): Cheap document parsing (Mistral OCR 3, $2 per 1,000 pages) makes reading years of scattered invoices affordable.
Demo moment (≤20 words): Upload a stack of rooftop invoices; the ledger surfaces one paying double, with a drafted dispute letter ready.
Business model (≤15 words): 20% of fees recovered or avoided, or a flat $500 monthly per dealer group.

---
id: I-1563
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
raw_id: s3-ideator-novel-T3-02-r1#08
merged: []
---

# Zywave Exit Bridge

One-liner (≤20 words): An agent walks every screen of a lock-in vendor to copy client data out for a switch, no export button needed.
Buyer and niche (≤25 words): Insurance agency principals switching off vendors like Zywave that offer no bulk export and resist contract exits.
Pain and evidence (≤40 words; cite the pain dossier file): Zywave is described as "excessively expensive" with "challenges when ending contracts"; agencies feel that once locked in, "providers can charge whatever they feel." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The agent logs in as the agency, walks every module a human would to copy out client records, rating profiles and document history where no bulk export exists, and reconstructs each record in the new system's import format.
Why now (≤25 words; name the specific capability): Desktop computer-use agents (61.4% OSWorld, Sept 2025) can now complete this multi-hour, multi-screen extraction unattended and reliably.
Demo moment (≤20 words): Watch the agent pull a full client file from a locked, export-free screen into a live mock new system.
Business model (≤15 words): One-time exit-migration fee, $3,000-$8,000, cheaper than another year locked in.

---
id: I-1564
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#01
merged: []
---

# Draft From Case Files, Offline

One-liner (≤20 words): An open-weight model drafts motions and letters straight from a lawyer's case files, entirely on their own laptop.
Buyer and niche (≤25 words): Solo and small-firm lawyers who currently paste case facts into consumer ChatGPT despite the privilege risk, because enterprise AI is priced for big firms.
Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material was not privileged, yet "solo and small-firm lawyers often cannot" get procurement-negotiated safe tools priced $428-$639/month. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local app loads a case file folder, runs an open-weight reasoning model on the lawyer's own machine to draft motions and letters, and never opens a network connection during generation, matching the firm's existing document templates.
Why now (≤25 words; name the specific capability): gpt-oss-20b fits in 16GB RAM and reasons near o3-mini level, runs on ordinary laptops via llama.cpp/Ollama-class local inference engines.
Demo moment (≤20 words): Disable wifi, load a sample case file, watch a full draft motion appear in under two minutes with zero network traffic.
Business model (≤15 words): $79-149/month per solo seat, undercutting enterprise legal AI subscriptions by 5-10x.

---
id: I-1565
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#02
merged: []
---

# Redact Locally, Then Ask The Cloud

One-liner (≤20 words): A local model strips client-identifying facts before any question reaches a cloud AI, then reinserts the real details.
Buyer and niche (≤25 words): Solo therapists, lawyers and accountants who want cloud-model quality on hard questions without ever exposing a real client's identity.
Pain and evidence (≤40 words; cite the pain dossier file): Pasting case or tax data into consumer AI risks privilege loss and criminal §7216 exposure, yet "the more the preparer sanitizes the data, the less useful the AI output becomes." (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local model finds names, SSNs, dates and dollar figures in the practitioner's question, swaps them for placeholder tokens, sends only the redacted question to a cloud model, then substitutes the real values back into the returned draft on-device before it is shown.
Why now (≤25 words; name the specific capability): Open-weight models (gpt-oss-20b, Gemma 3) now run fast enough locally to redact and reinsert in real time before every cloud call.
Demo moment (≤20 words): Type a question naming a client and a dollar figure; watch it swap to placeholders live, then snap real names back in.
Business model (≤15 words): $49/month subscription plus a small per-query cloud pass-through fee.

---
id: I-1566
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#03
merged: []
---

# Catches When The AI Note Lies

One-liner (≤20 words): A local model re-checks an AI-generated therapy note against the actual session audio and flags anything invented.
Buyer and niche (≤25 words): Solo therapists already using an AI scribe who currently must re-read every note by hand because the scribe fabricates content.
Pain and evidence (≤40 words; cite the pain dossier file): "The AI makes things up that are not said in the session," with users reporting "major errors throughout the day every day" from incumbent scribes. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): After any scribe drafts a note, a second small local model listens to the original session audio and highlights every sentence in the note that it cannot find support for in the recording, entirely offline, so the therapist only re-reads the flagged lines.
Why now (≤25 words; name the specific capability): Kyutai STT and Mistral Voxtral give fast, private, on-device transcription accurate enough to cross-check note claims in minutes.
Demo moment (≤20 words): Feed a five-minute mock session recording plus a note with one invented sentence; only that sentence gets highlighted.
Business model (≤15 words): $39/month add-on layered on top of any existing AI scribe tool.

---
id: I-1567
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#04
merged: []
---

# W-2s To Ledger, Never Uploaded

One-liner (≤20 words): An on-device model turns scanned W-2s, 1099s and K-1s into structured entries without the images ever leaving the machine.
Buyer and niche (≤25 words): Solo CPAs and EAs in the January-April crunch who currently key return data by hand to avoid federal disclosure exposure.
Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into cloud AI without a signed per-vendor consent is a §7216 violation with fines "up to $1,000 and up to a year in prison," so preparers still key data by hand through 80-hour weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local vision-capable open model [unverified exact accuracy] reads scanned tax documents on the preparer's own machine, extracts line items into structured records, and exports directly to the firm's existing tax-software file format, with no image or figure ever sent to a server.
Why now (≤25 words; name the specific capability): Open-weight models like Gemma 3 run multimodal extraction on ordinary laptops at 128K context, paired with fast local inference engines.
Demo moment (≤20 words): Drop ten scanned W-2 images into the tool with wifi off; a structured CSV populates in under a minute.
Business model (≤15 words): $59/month per preparer seat, priced against $19.47/hour seasonal temp labor it replaces.

---
id: I-1568
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#05
merged: []
---

# Security Plan, Drafted From Setup

One-liner (≤20 words): A local model scans the practice's own file structure and software list, then drafts and updates the mandatory written security plan.
Buyer and niche (≤25 words): Solo CPAs and EAs who must file a written information security plan to e-file but have no IT staff to write one.
Pain and evidence (≤40 words; cite the pain dossier file): Every e-filer must keep a 15-20 page written information security plan, with fines starting at $10,000 for a missing one, and no admin staff exists at a solo practice to write it. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local agent inventories the practitioner's software, folders and login setup on their own machine, maps findings onto the plan template's required sections, drafts the document naming the firm's real systems, and flags any section still missing before the annual renewal deadline.
Why now (≤25 words; name the specific capability): gpt-oss-20b runs offline on ordinary hardware, so a document naming a firm's actual systems never has to be sent to draft it.
Demo moment (≤20 words): Point the tool at a sample folder tree; a complete draft naming the real software appears in under a minute.
Business model (≤15 words): $29/month, cheaper than a one-time compliance consultant engagement.

---
id: I-1569
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#06
merged: []
---

# Rehearse The Consent Talk First

One-liner (≤20 words): An on-device model role-plays a skeptical client so a solo practitioner can rehearse explaining AI use before every new matter.
Buyer and niche (≤25 words): Solo lawyers, therapists and accountants required to obtain informed consent tailored to each client, not a boilerplate clause, for every AI use.
Pain and evidence (≤40 words; cite the pain dossier file): "Merely adding general, boiler-plate provisions... is not sufficient," and clients "must be notified, and their consent obtained," every time, which is recurring unstaffed work for a solo practitioner. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): The practitioner picks a matter type; a local model plays a client raising real objections ("is my data safe?"), the practitioner answers out loud, and the model scores whether the answer covered what the relevant ethics opinion actually requires, with no client audio ever recorded.
Why now (≤25 words; name the specific capability): Fast local inference paired with open-weight reasoning models makes realistic offline role-play newly practical on ordinary hardware.
Demo moment (≤20 words): Run a 90-second role-play; the coach flags one required disclosure the practitioner forgot to mention.
Business model (≤15 words): $25/month, sold as a compliance-training add-on through professional associations.

---
id: I-1570
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#07
merged: []
---

# Stops The Leak Before Sending

One-liner (≤20 words): A local model scans outgoing emails and cloud-AI prompts for verbatim client-identifying text before it leaves the device.
Buyer and niche (≤25 words): Solo lawyers, therapists and accountants who already know the actual risk is client data leaving their control unnoticed, not AI itself.
Pain and evidence (≤40 words; cite the pain dossier file): A privilege ruling, a §7216 criminal exposure and a default-on AI scribe scandal all trace back to client data leaving the practitioner's device without them noticing. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A lightweight local model watches the clipboard and outgoing text fields, matches phrases against the practitioner's own local case and client files, and blocks or warns before a paste reaches a browser tab pointed at a cloud AI or webmail site, showing exactly which phrase matched.
Why now (≤25 words; name the specific capability): On-device browser AI (Chrome built-in AI) and fast local inference make real-time, private text scanning possible with no server round trip.
Demo moment (≤20 words): Paste a paragraph with a real client's SSN into a ChatGPT tab; the paste is intercepted with the matched phrase shown.
Business model (≤15 words): $19/month per seat, sold as a browser extension.

---
id: I-1571
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
raw_id: s3-ideator-novel-T9-01-r1#08
merged: []
---

# Local Draft, Marked Where To Check

One-liner (≤20 words): The on-device model underlines every low-confidence sentence in its own draft so the practitioner knows exactly what to verify.
Buyer and niche (≤25 words): Solo practitioners who worry a smaller local model is less reliable than the big cloud models they are avoiding for confidentiality reasons.
Pain and evidence (≤40 words; cite the pain dossier file): Incumbent AI tools "make things up" that are not in the source material, and solo practitioners lack the staff to re-read every AI output line by line. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): The local model generates a draft, then re-scores its own output token by token, underlining spans it produced with low internal certainty, so the practitioner's manual check targets exactly those few sentences instead of the whole document.
Why now (≤25 words; name the specific capability): Open-weight models like gpt-oss-20b expose token-level probabilities locally, a signal closed cloud APIs rarely surface to end users.
Demo moment (≤20 words): Generate a draft client letter; three phrases are underlined, one of which is a genuinely wrong date.
Business model (≤15 words): Bundled into the $79/month draft-assistant seat, no separate charge.

<!-- COMPLETE -->
