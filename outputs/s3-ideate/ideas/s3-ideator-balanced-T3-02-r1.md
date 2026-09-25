## Titles

1. Dentrix API Toll Auditor [safe] -> rewrite: Migration Ledger Guard (verifies migration data integrity, not just fee tracking)
2. Dealer DMS Fee Watchdog [similar to 1] -> rewrite: Dealer DMS Toll Ledger (audits fees against contract terms, flags rate creep)
3. PioneerRx Access Concierge
4. Cornerstone Lab Sync Bridge
5. Migration Ledger Guard
6. Insurance Agency Double-Entry Catcher [safe] -> rewrite: Policy Sync Sentinel (diffs rating tool vs AMS, catches unsynced cancellations)
7. Yardi Flat-File Reconciler
8. Applied Epic Cancellation Sentinel [similar to 6] -> rewrite: folded into Policy Sync Sentinel
9. Cornerstone Report Date Filter Agent [safe] -> rewrite: Cornerstone Report Rebuilder (full screen-driven extraction + reformat, not just a filter)
10. Dentrix Support Ticket Escalator [safe] -> rewrite: dropped, weak pain fit (support hold times are low-severity, not a demoable AI loop)
11. AMS360 vs Epic Reconciliation Bot [similar to 6] -> folded into Policy Sync Sentinel
12. Vet Lab Results Alert Relay [similar to 4] -> folded into Cornerstone Lab Sync Bridge
13. Dealer Rooftop Fee Aggregator [similar to 2] -> folded into Dealer DMS Toll Ledger
14. Property Manager Credit Card Poster [safe] -> rewrite: folded into Yardi Flat-File Reconciler (posting is one step of the reconciliation loop)
15. Zywave Exit Cost Calculator [safe] -> rewrite: dropped, single-vendor tool too narrow to demo
16. Dentrix Imaging ID Matcher [similar to 5] -> folded into Migration Ledger Guard
17. CDK Ransomware Paper Trail Digitizer [safe] -> rewrite: SoR Outage Continuity Kit (live standby copy, not after-the-fact digitizing)
18. Insurance CSR Triple-Entry Killer [similar to 6] -> folded into Policy Sync Sentinel
19. PMS Vendor Fee Benchmark Tracker [similar to 1] -> folded into Dealer DMS Toll Ledger
20. AppFolio Manual CC Entry Bot [similar to 14] -> folded into Yardi Flat-File Reconciler
21. Dental Practice API Fee Negotiator [safe] -> rewrite: dropped, negotiation is a service not a product
22. Cornerstone Copy-Paste Eliminator [similar to 4/12] -> folded into Cornerstone Lab Sync Bridge
23. Vet Practice Cost Comparison Tool [safe] -> rewrite: dropped, not AI-differentiated
24. Dealer 3PA Certification Cost Tracker [similar to 2] -> folded into Dealer DMS Toll Ledger
25. SoR Outage Continuity Kit
26. Insurance Forum Fee Benchmark Scraper [safe] -> rewrite: dropped, thin evidence base for a standalone product
27. Dentrix Protected Category Workaround [safe] -> rewrite: folded into Migration Ledger Guard (protected-category access is a migration-time obstacle)
28. Yardi Interface Partner Fee Auditor [similar to 2] -> folded into Dealer DMS Toll Ledger concept, generalized
29. PioneerRx Status Page Monitor [safe] -> rewrite: folded into PioneerRx Access Concierge (monitoring is a side effect of the concierge loop)
30. Multi-Vertical SoR Toll Ledger [similar to 1/2] -> rewrite: superseded by Dealer DMS Toll Ledger as the sharpest single instance

Selected 8 for full cards: Cornerstone Lab Sync Bridge, Migration Ledger Guard, Policy Sync Sentinel, Yardi Flat-File Reconciler, PioneerRx Access Concierge, Dealer DMS Toll Ledger, Cornerstone Report Rebuilder, SoR Outage Continuity Kit.

## Cards

---
id: s3-ideator-balanced-T3-02-r1#01
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# Lab Result Relay for Vet SoRs

One-liner (≤20 words): Watches in-house and IDEXX lab machines and posts results straight into Cornerstone the moment they're ready.
Buyer and niche (≤25 words): Practice managers at small-animal vet clinics running Cornerstone practice management alongside in-house and IDEXX lab instruments.
Pain and evidence (≤40 words; cite the pain dossier file): Cornerstone "does not communicate with our lab machines"; techs get no completion alert and re-key results by hand, "wasting literal hours" per reviewer. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A desktop agent watches the lab machine's output folder and the IDEXX portal, extracts each new result, then drives Cornerstone's own screens to file it into the right patient record, and pings the tech the moment filing is done.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use holds multi-step desktop tasks for 30+ hours at 61.4% OSWorld accuracy, enough for a narrow filing loop.
Demo moment (≤20 words): A sample lab result appears; the agent files it into a mock Cornerstone record and pings the tech in seconds.
Business model (≤15 words): Per-clinic monthly subscription, priced by number of connected lab instruments.

---
id: s3-ideator-balanced-T3-02-r1#02
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# Migration Ledger Guard

One-liner (≤20 words): Cross-checks every patient, appointment and imaging record between old and new practice-management systems before go-live.
Buyer and niche (≤25 words): Dental office managers migrating between Dentrix, Eaglesoft, Open Dental or ACE, or ISVs running the conversion for them.
Pain and evidence (≤40 words; cite the pain dossier file): Paid conversions fail and imaging keeps its own patient IDs, "matched by hand"; one migration was "a complete screw up... start from scratch on everything." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool reads both the source and destination databases (or screen-reads them where no clean export exists), matches every patient, appointment and imaging ID pair, and outputs a checklist of mismatches, duplicates and missing records for staff to fix before cutover.
Why now (≤25 words; name the specific capability): 1M-token context windows let a whole practice database comparison run in one pass, with no chunking, for cheap.
Demo moment (≤20 words): Feed two sample exports; the tool flags three mismatched patient IDs and one missing appointment on screen live.
Business model (≤15 words): Flat fee per migration project, paid by the practice or its conversion vendor.

---
id: s3-ideator-balanced-T3-02-r1#03
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# Policy Sync Sentinel

One-liner (≤20 words): Watches rating tools and the agency management system side by side, flagging any policy change that didn't reach both.
Buyer and niche (≤25 words): CSRs and account managers at insurance agencies running Applied Epic or AMS360 alongside separate rating and quoting tools.
Pain and evidence (≤40 words; cite the pain dossier file): Agencies do "double and triple entry" across rating tools and the AMS; one cancellation that never reached Epic caused a reported "$42,000 policy loss." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A browser agent logs into both systems on a schedule, extracts policy status per client, and diffs the two; any cancellation, endorsement or renewal present in one system but not the other raises an alert with a one-click action to fix it.
Why now (≤25 words; name the specific capability): In-browser agents like Claude for Chrome now run multi-tab workflows inside a logged-in session at production reliability.
Demo moment (≤20 words): The agent finds a policy cancelled in the rating tool but still active in the mock AMS, flags it live.
Business model (≤15 words): Per-seat monthly subscription sold to the agency.

---
id: s3-ideator-balanced-T3-02-r1#04
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# Property Ledger Closer

One-liner (≤20 words): Turns Yardi's SFTP flat-file exports and AppFolio's manual card entries into one reconciled ledger automatically.
Buyer and niche (≤25 words): Bookkeepers and property managers running Yardi Voyager or AppFolio for portfolios with no live API access.
Pain and evidence (≤40 words; cite the pain dossier file): Yardi data "leaves by SFTP or flat file" with no live write-back, and on AppFolio "credit card transactions still have to be entered manually." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool watches the SFTP drop for new exports, extracts every transaction, cross-checks it against what's actually posted, and drives AppFolio's own entry screens to add any missing card payment or charge, producing a same-day reconciled ledger for the bookkeeper to sign off.
Why now (≤25 words; name the specific capability): Document extraction at about $2 per 1,000 pages makes nightly flat-file parsing cheap enough to run every day.
Demo moment (≤20 words): A sample flat file lands; the tool posts two missing card transactions into a mock AppFolio screen and balances.
Business model (≤15 words): Monthly fee per managed property portfolio.

---
id: s3-ideator-balanced-T3-02-r1#05
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: agents, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# PioneerRx Access Concierge

One-liner (≤20 words): Gives independent-pharmacy software vendors a working PioneerRx integration without waiting on the vendor's API gate.
Buyer and niche (≤25 words): Small ISVs building refill, inventory or wholesaler-ordering tools for independent pharmacies running PioneerRx, which has no self-serve API.
Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx API access "goes through a manual vendor-inquiry form," its docs sit behind authentication, and it has no public status page, delaying every integration project. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A screen agent logs into the pharmacy's own PioneerRx session to read and write the records the ISV's product needs (fills, inventory counts, refill queues), exposing them as a clean API to the vendor's own app while the pharmacy stays logged in as itself, with a monitor that flags outages.
Why now (≤25 words; name the specific capability): Browser agents like Skyvern already handle legacy no-API portal logins and forms at production-adjacent reliability (64.4% on WebBench).
Demo moment (≤20 words): The agent pulls a mock refill queue from a PioneerRx-styled UI and returns it as clean JSON to a sample app.
Business model (≤15 words): Usage-based API fee charged per call to the ISV.

---
id: s3-ideator-balanced-T3-02-r1#06
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# Dealer DMS Toll Ledger

One-liner (≤20 words): Audits every CDK, Reynolds and DealerSocket integration fee against contract terms and flags silent rate increases.
Buyer and niche (≤25 words): Dealer group controllers managing several rooftops on CDK or Reynolds, each with multiple paid third-party integrations.
Pain and evidence (≤40 words; cite the pain dossier file): Fees stack per location and tool: "$2,000 per location setup and $175/mo," CDK 3PA "$30,000 upfront ... plus roughly $200/mo/rooftop," Reynolds xTime "recently increased to $465 per month." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool ingests DMS and integration invoices plus the underlying contracts, extracts fee line items per rooftop and vendor, and compares each month's bill against the contracted rate, flagging any increase, duplicate charge or new fee for the controller to dispute before paying.
Why now (≤25 words; name the specific capability): Cheap document extraction turns a pile of monthly invoices into structured line items for a fraction of a cent per page.
Demo moment (≤20 words): Upload two months of sample invoices; the tool flags a $40/month unexplained increase on one rooftop.
Business model (≤15 words): Percentage of disputed fees recovered, plus a small flat monthly fee.

---
id: s3-ideator-balanced-T3-02-r1#07
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# Cornerstone Report Rebuilder

One-liner (≤20 words): Pulls raw Cornerstone data by screen and rebuilds the date-filtered reports the software itself can't produce.
Buyer and niche (≤25 words): Vet practice managers on Cornerstone who need financial or clinical reports limited to a specific date range for the accountant.
Pain and evidence (≤40 words; cite the pain dossier file): "There is no way to specify the dates you would like to run reports for" in Cornerstone, forcing staff to filter manually after export. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A desktop agent opens Cornerstone's report screens, exports the full unfiltered dataset, then filters and reformats it into whichever date range and layout the practice manager needs, ready to hand to the accountant or bank.
Why now (≤25 words; name the specific capability): Desktop computer-use agents now complete multi-step native app tasks unattended, not just browser forms, at 61.4% OSWorld accuracy.
Demo moment (≤20 words): Manager types a date range; the agent produces a filtered report from a full mock export in under a minute.
Business model (≤15 words): Per-practice monthly subscription.

---
id: s3-ideator-balanced-T3-02-r1#08
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r1
---

# SoR Outage Continuity Kit

One-liner (≤20 words): Keeps a live shadow copy of dealer and dental system-of-record data so an outage doesn't stop the front desk.
Buyer and niche (≤25 words): Multi-rooftop dealer groups and multi-location dental groups whose single system of record is a single point of failure.
Pain and evidence (≤40 words; cite the pain dossier file): The June 2024 CDK ransomware outage forced about 15,000 dealership locations back to "paper and spreadsheets" for two weeks, costing over $1B collectively. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): A screen agent continuously reads key records (appointments, deals in progress, patient schedules) from the live system into a lightweight standby app; if the system goes down, staff keep working in the standby copy, which reconciles back automatically once the system returns.
Why now (≤25 words; name the specific capability): Long-horizon computer-use agents can run unattended continuous sync tasks for 30+ hours without drifting off task.
Demo moment (≤20 words): Kill the mock system mid-demo; staff keep booking appointments in the standby app without missing a beat.
Business model (≤15 words): Per-location monthly subscription, sold as business-continuity insurance.

<!-- COMPLETE -->
