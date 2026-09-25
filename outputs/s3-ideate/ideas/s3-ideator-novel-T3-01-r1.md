## Titles

1. Dentrix Screen-Reader Sync Agent
2. Cornerstone Lab-Result Watcher [similar to #21]
3. CDK Outage Paper-to-System Bridge [safe]
4. Yardi Report Date-Filter Agent [safe]
5. PioneerRx Auto-Fill Bot [safe]
6. Applied Epic Cancellation Catcher
7. Dealer DMS Toll Auditor [similar to #16, #19, #26]
8. Vet Practice Migration Shadow-Copier
9. Insurance AMS Double-Entry Killer [similar to #24]
10. AppFolio Card-Entry Autopilot [safe]
11. Dentrix-to-OpenDental Migration Agent [similar to #8, #25]
12. Property Manager Screen Scraper [safe]
13. Zywave Exit Cost Calculator [safe]
14. Cornerstone Report Extractor [similar to #4]
15. Veterinary Cross-System Copy Bot [similar to #8]
16. Dealer Rooftop Fee Tracker [similar to #7]
17. PioneerRx Status Page Replacement [safe]
18. Insurance Policy Loss Preventer [safe]
19. Dentrix API Fee Negotiator [similar to #7]
20. SoR Screen Twin
21. Vet Lab Alert Relay [similar to #2]
22. Property Management SFTP Flattener [safe]
23. Dealer Ransomware Backup Shadow [similar to #3]
24. Agency Management Re-Key Eliminator [similar to #9]
25. Dental Imaging ID Matcher [similar to #11]
26. CDK 3PA Cost Splitter [similar to #7]
27. Vet Practice Support-Ticket Escalator [safe]
28. Insurance Forum Complaint Monitor [safe]
29. Universal Legacy SoR Copilot [safe]
30. Screen-Agent Data Liberation Layer [safe]

### Rewrites (every marked title, made distinct and bold)

- #2/#21 → **Vet Lab-to-Chart Instant Relay**: a screen agent that watches the lab portal itself and auto-files results into the chart the moment they post, not just an alert.
- #3/#23 → **DMS Ransomware Shadow Continuity Agent**: an always-on shadow mirror of the dealer system, not a one-time outage script, so staff never touch paper.
- #4/#14 → **Yardi Live Query Mirror**: a continuously-read, plain-language-queryable copy of Yardi Voyager, replacing the SFTP-batch report entirely, not just a date filter.
- #5 → dropped (pharmacy evidence too thin per dossier open question 1); replaced by **PioneerRx Silent-Outage Sentinel**, which targets the documented access-gating and support-decline pain instead.
- #7/#16/#19/#26 → **Rooftop Toll Ledger**: an agent that reads every dealer billing portal monthly and turns scattered per-rooftop fees into one negotiation brief.
- #9/#24 → **Cancellation-to-Epic Guardrail**: not a generic re-key eliminator, but a same-day cross-check that closes the exact $42k-loss gap the dossier names.
- #10 → dropped (single-feature card entry automation is too narrow to carry a pitch on its own).
- #11/#25 → **Practice Migration Escape Agent**: a full overnight record-by-record migration agent that also vision-matches imaging IDs, not a one-vendor-pair script.
- #12/#22 → folded into Yardi Live Query Mirror above; a generic "screen scraper" name undersells what it does.
- #13 → dropped (a standalone fee calculator has no live AI loop to demo).
- #17 → **PioneerRx Silent-Outage Sentinel**: proactive daily portal health-checks plus an auto-drafted escalation packet, not just a status page clone.
- #18 → folded into Cancellation-to-Epic Guardrail.
- #20 → kept as concept but narrowed into named cards above (Lab-to-Chart Relay, Yardi Mirror) rather than one vague "twin".
- #27 → dropped (ticket escalation alone is a thin, low-value wrapper).
- #28 → dropped (no real product surface; folded fee/complaint signal into Rooftop Toll Ledger).
- #29/#30 → **Single Command, Five Screens**: sharpened from "universal copilot" into one concrete action (one instruction propagated across every locked-in dental app at once) so it is demoable, not a vague platform claim.

## Cards

---
id: s3-ideator-novel-T3-01-r1#01
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# DMS Ransomware Shadow Continuity

One-liner (≤20 words): A screen agent continuously mirrors your locked-in dealer system so a ransomware outage never stops the sales floor.

Buyer and niche (≤25 words): General managers and IT leads at multi-rooftop auto dealer groups running CDK or Reynolds dealer-management systems across several locations.

Pain and evidence (≤40 words; cite the pain dossier file): CDK's June 2024 ransomware outage forced deals back to paper for two weeks and cost dealers over $1B collectively; the SoR is a single point of failure. (src: outputs/s3-ideate/pain/T3-dossier.md, P7)

How it works (≤50 words): A computer-use agent logs in each shift as staff already do, reads inventory, deal and service screens, and writes a structured shadow copy to a local database. If the DMS goes down, staff switch to a queryable shadow interface instantly and keep working; the agent resyncs when the DMS returns.

Why now (≤25 words): Claude Sonnet 4.5 computer use holds 61.4% on OSWorld and sustains multi-step tasks over 30 hours, making unattended continuous mirroring reliable (TC-02, Sept 2025).

Demo moment (≤20 words): Kill the live DMS mid-demo; the shadow interface instantly answers a deal and inventory lookup from the mirror.

Business model (≤15 words): Per-rooftop monthly subscription, priced against ransomware downtime and cyber-insurance deductible savings.

---
id: s3-ideator-novel-T3-01-r1#02
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# Vet Lab-to-Chart Instant Relay

One-liner (≤20 words): An agent watches the lab portal itself and files results into the vet chart the second they post.

Buyer and niche (≤25 words): Practice managers and vet technicians at small mixed-practice clinics running Cornerstone alongside IDEXX or in-house lab machines.

Pain and evidence (≤40 words; cite the pain dossier file): Cornerstone "does not communicate with our lab machines," so techs get no completion alert and "waste literal hours" staring at screens or keeping handwritten pending lists. (src: outputs/s3-ideate/pain/T3-dossier.md, P4)

How it works (≤50 words): The agent watches the lab web portal for completed tests, extracts the values (reading scanned printouts where needed), opens the matching chart inside Cornerstone, files the result, and pings the assigned tech. No handwritten pending list, no staring at a loading screen.

Why now (≤25 words): Sonnet 4.5 computer use (TC-02) reads both portals live; Mistral OCR 3 (TC-30, Dec 2025) parses any scanned lab printout at $2 per 1,000 pages.

Demo moment (≤20 words): A mock lab result posts; within seconds the Cornerstone chart updates and a phone alert fires, unprompted.

Business model (≤15 words): Flat per-clinic monthly fee, cheaper than the vendor's own unreliable sync add-on.

---
id: s3-ideator-novel-T3-01-r1#03
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# Practice Migration Escape Agent

One-liner (≤20 words): An overnight agent migrates every record between locked-in practice systems, matching imaging IDs a human used to key by hand.

Buyer and niche (≤25 words): Dental and veterinary office managers switching practice-management systems who fear the surprise fees and botched transfers past migrations left behind.

Pain and evidence (≤40 words; cite the pain dossier file): A paid ACE-to-Dentrix transfer was "a complete screw up... we basically had to start from scratch," and imaging keeps separate patient IDs matched one at a time by hand. (src: outputs/s3-ideate/pain/T3-dossier.md, P5)

How it works (≤50 words): A long-running computer-use agent opens the old system screen by screen, reads each patient record, visually matches imaging IDs to chart IDs, and re-enters everything into the new system overnight. It produces an exception report listing anything it could not confidently map for a human to check.

Why now (≤25 words): Claude Sonnet 4.5's 30-hour sustained task runs (TC-02, Sept 2025) make an unattended full-database overnight migration possible for the first time.

Demo moment (≤20 words): Run the agent live migrating a 50-patient sample from one system to another; show the exception report at the end.

Business model (≤15 words): One-time migration fee per practice, undercutting the vendor's own paid conversion charge.

---
id: s3-ideator-novel-T3-01-r1#04
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# Rooftop Toll Ledger

One-liner (≤20 words): An agent reads every dealer-portal bill monthly and turns scattered per-rooftop integration fees into one negotiation brief.

Buyer and niche (≤25 words): Operations and finance leads at multi-rooftop auto dealer groups paying stacked CDK, Reynolds and third-party integration tolls across locations.

Pain and evidence (≤40 words; cite the pain dossier file): Fees stack per rooftop and per tool: a "$2000 setup fee and $175/mo per location," CDK 3PA certification near "$30,000 upfront ... plus roughly $200/mo/rooftop," and a Reynolds xTime fee that "recently increased." (src: outputs/s3-ideate/pain/T3-dossier.md, P2)

How it works (≤50 words): The agent logs into each vendor's billing and admin portal for every rooftop each month, extracts line-item fees, flags unexplained increases and unused paid API seats, and drafts a one-page renegotiation brief comparing this month against history across all locations.

Why now (≤25 words): browser-use and Skyvern are production-adjacent legacy-portal agents (TC-06, TC-07), making continuous multi-portal fee auditing cheap enough for a single dealer group.

Demo moment (≤20 words): The agent pulls three live portal statements and produces a fee-creep chart flagging one location's rate hike.

Business model (≤15 words): Percentage of fees renegotiated down, or a flat per-rooftop audit subscription.

---
id: s3-ideator-novel-T3-01-r1#05
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# Cancellation-to-Epic Guardrail

One-liner (≤20 words): An agent cross-checks every policy cancellation against Applied Epic same day, before it becomes an uncovered loss.

Buyer and niche (≤25 words): Insurance agency principals and CSRs on Applied Epic or AMS360 who juggle carrier portals, email and the agency management system by hand.

Pain and evidence (≤40 words; cite the pain dossier file): A cancellation captured outside Applied Epic never reached it, leading to a reported "$42,000 policy loss," and agencies do "double and triple entry" across rating tools, the AMS and other systems. (src: outputs/s3-ideate/pain/T3-dossier.md, P6)

How it works (≤50 words): The agent stays logged into carrier portals, the agency inbox and Applied Epic as the CSR normally would. It watches for any cancellation notice, checks within the day whether the matching record exists in Epic, and flags any gap directly to a CSR before it becomes an errors-and-omissions exposure.

Why now (≤25 words): Claude for Chrome (TC-03, production since Dec 2025) keeps an agent logged into multiple SaaS consoles as the user, across sessions, safely.

Demo moment (≤20 words): Inject a mock cancellation email; the agent flags it as missing from Epic within the same demo run.

Business model (≤15 words): Per-seat monthly fee to agencies, positioned against E&O premium and claim savings.

---
id: s3-ideator-novel-T3-01-r1#06
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# Yardi Live Query Mirror

One-liner (≤20 words): A continuously-read shadow of Yardi Voyager that answers plain-language questions instead of waiting on a batch export.

Buyer and niche (≤25 words): Property managers on Yardi Voyager who have no self-serve API and rely on nightly SFTP dumps for anything they can't see on screen.

Pain and evidence (≤40 words; cite the pain dossier file): Yardi has no self-serve public API, so data leaves only by SFTP flat file, and native reports "cannot specify the dates you would like to run reports for." (src: outputs/s3-ideate/pain/T3-dossier.md, P3, P8)

How it works (≤50 words): An agent continuously reads Yardi Voyager screens across the portfolio and keeps a live, structured mirror. Property managers ask plain-language questions ("show late April rent payments") and get instant answers, instead of waiting on a nightly SFTP batch or fighting an inflexible native report screen.

Why now (≤25 words): Stagehand and Browserbase run 35M+ production browser sessions a month for 10,000+ customers (TC-08), making always-on screen mirroring cheap and reliable.

Demo moment (≤20 words): Ask "show late April rent payments"; the mirror answers instantly against a native report that is still loading.

Business model (≤15 words): Per-portfolio-unit monthly subscription, sold as a Yardi reporting add-on.

---
id: s3-ideator-novel-T3-01-r1#07
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# PioneerRx Silent-Outage Sentinel

One-liner (≤20 words): A daily agent probes the pharmacy system's own portal and drafts the escalation evidence support keeps losing.

Buyer and niche (≤25 words): Independent pharmacy owners on PioneerRx who cannot get self-serve API access and face slow, unresolved support tickets.

Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx API access goes through a manual vendor-inquiry form with no public status page, and support has been reported unresponsive for "weeks" of calls and emails on comparable vertical systems. (src: outputs/s3-ideate/pain/T3-dossier.md, P3, P9)

How it works (≤50 words): The agent logs into PioneerRx every day, times page loads and common workflows, and logs any slowdown or error. If a support ticket goes unanswered past a set window, it auto-drafts a timestamped escalation email with the evidence attached, so the pharmacist stops being the one tracking outages by memory.

Why now (≤25 words): Skyvern is a production-adjacent agent built for exactly this class of legacy, no-status-page portal (TC-07), cheap enough for one pharmacy location.

Demo moment (≤20 words): Simulate a slow portal response; the sentinel logs it and drafts the escalation email live.

Business model (≤15 words): Small flat monthly fee per pharmacy location.

---
id: s3-ideator-novel-T3-01-r1#08
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
---

# Single Command, Five Screens

One-liner (≤20 words): Type one instruction; a desktop-and-browser agent makes the same edit correctly across every locked-in front-desk system at once.

Buyer and niche (≤25 words): Dental and veterinary office managers who re-key the same patient change into the practice-management system, the imaging tool and the billing tool separately.

Pain and evidence (≤40 words; cite the pain dossier file): Imaging keeps its own patient IDs matched by hand ("double entry for each patient in the Dexis Database"), and data entry across these locked-in tools is itself a paid job function. (src: outputs/s3-ideate/pain/T3-dossier.md, P5, P11)

How it works (≤50 words): The office manager types one instruction, such as "update this patient's address." A computer-use agent opens each locked-in application in turn, native and browser alike, makes the matching edit, and verifies the imaging and billing patient IDs still align before confirming completion back to the manager.

Why now (≤25 words): Claude Sonnet 4.5 unifies desktop and browser computer use in one agent (TC-02), letting one instruction span native apps and web portals together.

Demo moment (≤20 words): Type one address change live; watch it appear correctly in three separate locked-in applications within seconds.

Business model (≤15 words): Per-seat monthly fee to dental and veterinary front-desk teams.

<!-- COMPLETE -->
