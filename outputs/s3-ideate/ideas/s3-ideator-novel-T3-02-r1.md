## Titles

1. Dentrix Desktop Shadow Agent
2. Cornerstone Lab-Result Watcher
3. CDK Outage Insurance Bot
4. Yardi Flat-File Auto-Poster
5. PioneerRx Access Concierge
6. Applied Epic Double-Entry Killer
7. AMS360 Policy Sync Sentinel
8. Dealer Rooftop Toll Auditor
9. AppFolio Card-Entry Autopilot
10. Migration Guardian for Dental Switches
11. Zywave Exit Bridge
12. Eaglesoft-to-Cloud Mirror [safe] → rewrite: **Live Ghost Ledger for Practice Migrations** (runs a continuous shadow copy of the old system during any switch, so a failed transfer never means starting from scratch)
13. Vet Lab Alert Relay
14. Insurance CSR Copy-Paste Killer [safe] → rewrite: **The Policy Field That Never Forgets** (watches every AMS field against its carrier source, not just re-typing faster)
15. Dealer DMS Ransomware Backup Agent
16. Property Manager's Report Puller [safe] → rewrite: **Yardi Report Time-Machine** (reconstructs date-filtered reports the vendor UI refuses to produce, by replaying export history)
17. Dentrix Imaging ID Matcher [similar to #10] → rewrite: **Cross-System Patient ID Stitcher** (a general entity-resolution agent for any migration where imaging keeps its own patient IDs, not just one vendor pair)
18. Reynolds xTime Fee Watchdog
19. QS/1 Pharmacy Bridge
20. Covetrus Acquisition Price Tracker [safe] → rewrite: **Acquisition Fee Tripwire** (watches billing statements across verticals for silent price hikes after a vendor is acquired, alerts before renewal)
21. Vet Cornerstone Report Date-Filter Fix
22. Dealer 3PA Cost Splitter [similar to #8] → rewrite: **Rooftop Toll Ledger** (consolidates every rooftop's per-tool invoice into one ledger and drafts the dispute, instead of just auditing one bill)
23. Insurance Agency AMS Mirror [similar to #7] → rewrite: **Silent AMS Drift Detector** (hunts specifically for records captured outside the AMS, like the reported $42k policy loss, not a general mirror)
24. Dentrix API Toll Bypass Agent [similar to #1] → rewrite: **Screen-Native Integration Hub for Six Verticals** (a multi-vendor virtual-API layer across dental, pharmacy, vet, dealer, insurance and property systems, not one vendor)
25. Property SFTP Live Sync [similar to #4] → rewrite: **Voyager Live-Write Agent** (writes back into the vendor's own UI round-trip, something one-way SFTP export can never do)
26. Vet Tech Pending-Lab Dashboard [similar to #13] → rewrite: **Lab Machine Whisperer** (reads the analyzer's own screen the instant a result completes and files it, no dashboard for a tech to keep checking)
27. Applied Epic Cancellation Catcher [similar to #6] → rewrite: **Underwriter Portal Sentinel** (watches carrier portals directly for cancellation notices before they even reach the agency's inbox, closing the gap upstream of re-keying)
28. Dealer Service History Vault [similar to #15] → rewrite: **48-Hour DMS Continuity Twin** (a live shadow agent mirroring DMS screen state continuously, so staff keep working in a cloned interface during any outage)
29. Pharmacy Wholesaler Entry Twin [similar to #5] → rewrite: **Wholesaler Order Reconciler** (compares what was ordered on the wholesaler portal against what PioneerRx recorded, catching silent stock discrepancies)
30. Insurance Renewal Autopilot [safe] → rewrite: **Renewal Cliff Radar** (a cross-portal agent that catches lapses caused by re-keying gaps before they become an E&O claim, not a generic autopilot)

## Cards

---
id: s3-ideator-novel-T3-02-r1#01
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
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
id: s3-ideator-novel-T3-02-r1#02
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
---

# Lab Machine Whisperer

One-liner (≤20 words): An agent watches the lab analyzer's own screen and files results into the practice system the instant they're ready.

Buyer and niche (≤25 words): Veterinary technicians at small clinics running in-house or IDEXX analyzers that don't sync with their practice-management system.

Pain and evidence (≤40 words; cite the pain dossier file): The system "does not communicate with our lab machines"; techs report wasting "literal hours staring at it waiting for it to load." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A small camera or screen-capture agent watches the analyzer's own display, detects when a result is complete, reads the panel, and writes it straight into Cornerstone through the desktop UI, then texts the tech.

Why now (≤25 words; name the specific capability): Vision-capable computer-use agents (61.4% OSWorld, Sept 2025) can now read a device screen and act on it reliably.

Demo moment (≤20 words): A mock analyzer flashes "complete"; seconds later the result appears in Cornerstone and a phone buzzes.

Business model (≤15 words): Per-clinic subscription, about $200 a month, priced against one lost result.

---
id: s3-ideator-novel-T3-02-r1#03
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
---

# 48-Hour DMS Continuity Twin

One-liner (≤20 words): A shadow agent mirrors the dealership's DMS screens live, so staff keep working through outages or ransomware.

Buyer and niche (≤25 words): Dealer group service and sales managers on CDK or Reynolds, whose dealership loses live records during any DMS outage.

Pain and evidence (≤40 words; cite the pain dossier file): The June 2024 CDK ransomware shut sales and service for two weeks, costing dealers over $1B collectively and forcing a return to paper. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent continuously operates the DMS UI in the background, logging every screen state into an offline mirror. If the DMS goes dark, staff switch to a read/write clone that queues transactions, then replays them once the real system returns.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer-use agents now sustain multi-step tasks for 30+ hours, enabling always-on background mirroring, not one-off scripts (Sept 2025).

Demo moment (≤20 words): Cut the DMS connection mid-demo; staff keep booking a repair order in the clone, then watch it replay on reconnect.

Business model (≤15 words): Dealer-group subscription, about $500 per rooftop monthly, priced against outage cost.

---
id: s3-ideator-novel-T3-02-r1#04
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
---

# Voyager Live-Write Agent

One-liner (≤20 words): An agent writes and reports inside Yardi Voyager's own screens, replacing one-way flat-file exports with live round-trip access.

Buyer and niche (≤25 words): Property management bookkeepers on Yardi Voyager, who have no self-serve API and must batch-export flat files instead.

Pain and evidence (≤40 words; cite the pain dossier file): Yardi has no self-serve API, reportedly charging $25,000 per interface [unverified], so data moves only by batch SFTP; on AppFolio "credit card transactions still have to be entered manually." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent logs into Voyager as the bookkeeper, posting card transactions and vendor bills directly into the ledger screens, and scripts the report page repeatedly to assemble any date range on demand, no SFTP wait.

Why now (≤25 words; name the specific capability): Browser-use style agents (production-adjacent, 116k-star framework) now sustain reliable multi-step UI writes, not just one-off scraping, at cents per hour.

Demo moment (≤20 words): Ask for a report Yardi's UI can't filter by date; the agent scripts it back in under a minute.

Business model (≤15 words): Per-portfolio subscription, $99-$299 a month, far under Yardi's per-interface fee.

---
id: s3-ideator-novel-T3-02-r1#05
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
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
id: s3-ideator-novel-T3-02-r1#06
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
---

# Silent AMS Drift Detector

One-liner (≤20 words): An agent nightly diffs carrier portals against the agency's own system, catching cancellations before they become uncovered claims.

Buyer and niche (≤25 words): Insurance agency account managers and CSRs on Applied Epic or AMS360, who juggle carrier portals and their own AMS by hand.

Pain and evidence (≤40 words; cite the pain dossier file): A cancellation captured outside the AMS never reached Epic, leading to a reported $42,000 policy loss; agencies do "double and triple entry" across tools. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Each night the agent logs into every carrier portal, extracts policy status, and diffs it against the agency's own records, flagging any cancellation, endorsement or payment not yet reflected before it becomes an uncovered claim.

Why now (≤25 words; name the specific capability): Cheap million-token context (2025 generation) lets the agent compare full policy histories nightly for pennies, not spot-check them.

Demo moment (≤20 words): Simulate a carrier-side cancellation; the dashboard turns red on that policy within the nightly run.

Business model (≤15 words): Per-seat subscription, about $150 per CSR monthly, priced against E&O exposure.

---
id: s3-ideator-novel-T3-02-r1#07
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
---

# Rooftop Toll Ledger

One-liner (≤20 words): An agent reads every rooftop's DMS integration invoice and flags which locations are quietly paying more than the rest.

Buyer and niche (≤25 words): Dealer group controllers on CDK or Reynolds paying per-rooftop, per-tool integration fees across many locations and vendors.

Pain and evidence (≤40 words; cite the pain dossier file): Setup and monthly fees stack per rooftop and per tool; one dealer called it "a blatant extortion racket," with CDK 3PA certification near $30,000 upfront. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent ingests every vendor invoice and contract PDF across rooftops, extracts the per-location fee terms, builds one ledger, flags any rooftop paying above its contracted rate, and drafts the dispute email for a controller to send.

Why now (≤25 words; name the specific capability): Cheap document parsing (Mistral OCR 3, Dec 2025, $2 per 1,000 pages) makes reading years of scattered invoices affordable.

Demo moment (≤20 words): Upload a stack of rooftop invoices; the ledger surfaces one paying double, with a drafted dispute letter ready.

Business model (≤15 words): 20% of fees recovered or avoided, or a flat $500 monthly per dealer group.

---
id: s3-ideator-novel-T3-02-r1#08
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r1
---

# Zywave Exit Bridge

One-liner (≤20 words): An agent walks every screen of a lock-in vendor to copy client data out for a switch, no export button needed.

Buyer and niche (≤25 words): Insurance agency principals switching off vendors like Zywave that offer no bulk export and resist contract exits.

Pain and evidence (≤40 words; cite the pain dossier file): Zywave is described as "excessively expensive" with "challenges when ending contracts"; agencies feel that once locked in, "providers can charge whatever they feel." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent logs in as the agency, walks every module a human would to copy out client records, rating profiles and document history where no bulk export exists, and reconstructs each record in the new system's import format.

Why now (≤25 words; name the specific capability): Desktop computer-use agents (61.4% OSWorld, Sept 2025) can now complete this multi-hour, multi-screen extraction unattended and reliably.

Demo moment (≤20 words): Watch the agent pull a full client file from a locked, export-free screen into a live mock new system.

Business model (≤15 words): One-time exit-migration fee, $3,000-$8,000, cheaper than another year locked in.

<!-- COMPLETE -->
