---
id: I-4051
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#01
merged: [s3-ideator-balanced-T3-01-r1#07]
---

# DMS Ransomware Shadow Continuity

One-liner (≤20 words): A screen agent continuously mirrors your locked-in dealer system so a ransomware outage never stops the sales floor.
Buyer and niche (≤25 words): General managers and IT leads at multi-rooftop auto dealer groups running CDK or Reynolds dealer-management systems across several locations.
Pain and evidence (≤40 words; cite the pain dossier file): CDK's June 2024 ransomware outage forced deals back to paper for two weeks and cost dealers over $1B collectively; the system of record is a single point of failure. (src: outputs/s3-ideate/pain/T3-dossier.md, P7)
How it works (≤50 words): A computer-use agent logs in each shift as staff already do, reads inventory, deal and service screens, and writes a structured shadow copy to a local database. If the DMS goes down, staff switch to a queryable shadow interface instantly and keep working; the agent resyncs when the DMS returns.
Why now (≤25 words): Claude Sonnet 4.5 computer use holds 61.4% on OSWorld and sustains multi-step tasks over 30 hours, making unattended continuous mirroring reliable.
Demo moment (≤20 words): Kill the live DMS mid-demo; the shadow interface instantly answers a deal and inventory lookup from the mirror.
Business model (≤15 words): Per-rooftop monthly subscription, priced against ransomware downtime and cyber-insurance deductible savings.

---
id: I-4052
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#02
merged: [s3-ideator-balanced-T3-01-r1#01]
---

# Vet Lab-to-Chart Instant Relay

One-liner (≤20 words): An agent watches the lab portal itself and files results into the vet chart the second they post.
Buyer and niche (≤25 words): Practice managers and vet technicians at small mixed-practice clinics running Cornerstone alongside IDEXX or in-house lab machines.
Pain and evidence (≤40 words; cite the pain dossier file): The system "does not communicate with our lab machines," so techs get no completion alert and "waste literal hours" staring at screens or keeping handwritten pending lists. (src: outputs/s3-ideate/pain/T3-dossier.md, P4)
How it works (≤50 words): The agent watches the lab web portal for completed tests, extracts the values (reading scanned printouts where needed), opens the matching chart, files the result, and pings the assigned tech. No handwritten pending list, no staring at a loading screen.
Why now (≤25 words): Sonnet 4.5 computer use reads both portals live; Mistral OCR 3 parses any scanned lab printout at $2 per 1,000 pages.
Demo moment (≤20 words): A mock lab result posts; within seconds the chart updates and a phone alert fires, unprompted.
Business model (≤15 words): Flat per-clinic monthly fee, cheaper than the vendor's own unreliable sync add-on.

---
id: I-4053
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#03
merged: []
---

# Practice Migration Escape Agent

One-liner (≤20 words): An overnight agent migrates every record between locked-in practice systems, matching imaging IDs a human used to key by hand.
Buyer and niche (≤25 words): Dental and veterinary office managers switching practice-management systems who fear the surprise fees and botched transfers past migrations left behind.
Pain and evidence (≤40 words; cite the pain dossier file): A paid transfer was "a complete screw up... we basically had to start from scratch," and imaging keeps separate patient IDs matched one at a time by hand. (src: outputs/s3-ideate/pain/T3-dossier.md, P5)
How it works (≤50 words): A long-running computer-use agent opens the old system screen by screen, reads each patient record, visually matches imaging IDs to chart IDs, and re-enters everything into the new system overnight. It produces an exception report listing anything it could not confidently map for a human to check.
Why now (≤25 words): Claude Sonnet 4.5's 30-hour sustained task runs make an unattended full-database overnight migration possible for the first time.
Demo moment (≤20 words): Run the agent live migrating a 50-patient sample from one system to another; show the exception report at the end.
Business model (≤15 words): One-time migration fee per practice, undercutting the vendor's own paid conversion charge.

---
id: I-4054
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#04
merged: [s3-ideator-balanced-T3-01-r1#03]
---

# Rooftop Toll Ledger

One-liner (≤20 words): An agent reads every dealer-portal bill monthly and turns scattered per-rooftop integration fees into one negotiation brief.
Buyer and niche (≤25 words): Operations and finance leads at multi-rooftop auto dealer groups paying stacked CDK, Reynolds and third-party integration tolls across locations.
Pain and evidence (≤40 words; cite the pain dossier file): Fees stack per rooftop and per tool: a "$2000 setup fee and $175/mo per location," a third-party certification near "$30,000 upfront ... plus roughly $200/mo/rooftop," and a fee that "recently increased." (src: outputs/s3-ideate/pain/T3-dossier.md, P2)
How it works (≤50 words): The agent logs into each vendor's billing and admin portal for every rooftop each month, extracts line-item fees, flags unexplained increases and unused paid API seats, and drafts a one-page renegotiation brief comparing this month against history across all locations.
Why now (≤25 words): browser-use and Skyvern are production-adjacent legacy-portal agents, making continuous multi-portal fee auditing cheap enough for a single dealer group.
Demo moment (≤20 words): The agent pulls three live portal statements and produces a fee-creep chart flagging one location's rate hike.
Business model (≤15 words): Percentage of fees renegotiated down, or a flat per-rooftop audit subscription.

---
id: I-4055
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#05
merged: [s3-ideator-balanced-T3-01-r1#04]
---

# Cancellation-to-Epic Guardrail

One-liner (≤20 words): An agent cross-checks every policy cancellation against the agency management system same day, before it becomes an uncovered loss.
Buyer and niche (≤25 words): Insurance agency principals and CSRs on Applied Epic or AMS360 who juggle carrier portals, email and the agency management system by hand.
Pain and evidence (≤40 words; cite the pain dossier file): A cancellation captured outside the management system never reached it, leading to a reported "$42,000 policy loss," and agencies do "double and triple entry" across rating tools, the AMS and other systems. (src: outputs/s3-ideate/pain/T3-dossier.md, P6)
How it works (≤50 words): The agent stays logged into carrier portals, the agency inbox and the agency management system as the CSR normally would. It watches for any cancellation notice, checks within the day whether the matching record exists, and flags any gap directly to a CSR before it becomes an errors-and-omissions exposure.
Why now (≤25 words): Claude for Chrome keeps an agent logged into multiple SaaS consoles as the user, across sessions, safely.
Demo moment (≤20 words): Inject a mock cancellation email; the agent flags it as missing from the system within the same demo run.
Business model (≤15 words): Per-seat monthly fee to agencies, positioned against premium and claim savings.

---
id: I-4056
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#06
merged: [s3-ideator-balanced-T3-01-r1#05]
---

# Yardi Live Query Mirror

One-liner (≤20 words): A continuously-read shadow of Yardi Voyager that answers plain-language questions instead of waiting on a batch export.
Buyer and niche (≤25 words): Property managers on Yardi Voyager who have no self-serve API and rely on nightly SFTP dumps or manual card entry for anything they can't see on screen.
Pain and evidence (≤40 words; cite the pain dossier file): Yardi has no self-serve public API, so data leaves only by SFTP flat file, native reports "cannot specify the dates you would like to run reports for," and card transactions still get entered manually. (src: outputs/s3-ideate/pain/T3-dossier.md, P3, P8)
How it works (≤50 words): An agent continuously reads Yardi Voyager and connected property-management screens across the portfolio, keeps a live structured mirror, and posts new charges and payments into the reporting tool same day. Property managers ask plain-language questions and get instant answers, instead of waiting on a nightly batch.
Why now (≤25 words): Stagehand and Browserbase run 35M+ production browser sessions a month for 10,000+ customers, making always-on screen mirroring cheap and reliable.
Demo moment (≤20 words): Ask "show late April rent payments"; the mirror answers instantly against a native report that is still loading.
Business model (≤15 words): Per-portfolio-unit monthly subscription, sold as a reporting add-on.

---
id: I-4057
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#07
merged: []
---

# PioneerRx Silent-Outage Sentinel

One-liner (≤20 words): A daily agent probes the pharmacy system's own portal and drafts the escalation evidence support keeps losing.
Buyer and niche (≤25 words): Independent pharmacy owners on PioneerRx who cannot get self-serve API access and face slow, unresolved support tickets.
Pain and evidence (≤40 words; cite the pain dossier file): API access goes through a manual vendor-inquiry form with no public status page, and support has been reported unresponsive for "weeks" of calls and emails on comparable vertical systems. (src: outputs/s3-ideate/pain/T3-dossier.md, P3, P9)
How it works (≤50 words): The agent logs into the pharmacy system every day, times page loads and common workflows, and logs any slowdown or error. If a support ticket goes unanswered past a set window, it auto-drafts a timestamped escalation email with the evidence attached, so the pharmacist stops being the one tracking outages by memory.
Why now (≤25 words): Skyvern is a production-adjacent agent built for exactly this class of legacy, no-status-page portal, cheap enough for one pharmacy location.
Demo moment (≤20 words): Simulate a slow portal response; the sentinel logs it and drafts the escalation email live.
Business model (≤15 words): Small flat monthly fee per pharmacy location.

---
id: I-4058
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r1
raw_id: s3-ideator-novel-T3-01-r1#08
merged: []
---

# Single Command, Five Screens

One-liner (≤20 words): Type one instruction; a desktop-and-browser agent makes the same edit correctly across every locked-in front-desk system at once.
Buyer and niche (≤25 words): Dental and veterinary office managers who re-key the same patient change into the practice-management system, the imaging tool and the billing tool separately.
Pain and evidence (≤40 words; cite the pain dossier file): Imaging keeps its own patient IDs matched by hand ("double entry for each patient in the Dexis Database"), and data entry across these locked-in tools is itself a paid job function. (src: outputs/s3-ideate/pain/T3-dossier.md, P5, P11)
How it works (≤50 words): The office manager types one instruction, such as "update this patient's address." A computer-use agent opens each locked-in application in turn, native and browser alike, makes the matching edit, and verifies the imaging and billing patient IDs still align before confirming completion back to the manager.
Why now (≤25 words): Claude Sonnet 4.5 unifies desktop and browser computer use in one agent, letting one instruction span native apps and web portals together.
Demo moment (≤20 words): Type one address change live; watch it appear correctly in three separate locked-in applications within seconds.
Business model (≤15 words): Per-seat monthly fee to dental and veterinary front-desk teams.

---
id: I-4059
track: balanced
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-07-mech-1, A-seed-07-mech-2]
source_task: s3-ideator-balanced-T4-02-r2
raw_id: s3-ideator-balanced-T4-02-r2#01
merged: []
---

# Records-Request Flood Screen

One-liner (≤20 words): An agent triages every incoming public-records request or petition instantly, flagging AI-slop before the legal clock runs out.
Buyer and niche (≤25 words): Town and county clerks in small local governments who answer public-records requests and petitions with no dedicated staff.
Pain and evidence (≤40 words; cite the pain dossier file): Tiny offices lack a designated administrator and face fixed statutory deadlines; AI-generated bulk requests now flood clerks the way AI-slop reports "effectively DDoS'ed" maintainers, where "not even one in twenty was real." (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): A fast reflex pass screens every incoming request, flags duplicate or templated AI-generated submissions, and escalates only ambiguous cases to a slower, careful check. Genuine urgent requests route to the clerk with a deadline countdown; routine acknowledgments and any required portal filings happen automatically, with a dismissal log kept for audit.
Why now (≤25 words; name the specific capability): Sub-cent long-context inference makes screening every incoming document affordable, even for a town office with a handful of staff.
Demo moment (≤20 words): Feed in twenty mixed requests; the screen flags twelve as AI-templated duplicates and surfaces eight real ones with deadlines.
Business model (≤15 words): Flat monthly subscription per town office, priced by population served.

---
id: I-4060
track: balanced
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-05-mech-2]
source_task: s3-ideator-balanced-T4-02-r2
raw_id: s3-ideator-balanced-T4-02-r2#02
merged: []
---

# Pro Se Citation Screen for Clerks

One-liner (≤20 words): Before docketing, an agent checks every case citation in a filing against real case law and flags fabrications.
Buyer and niche (≤25 words): Small county and municipal court clerks who docket filings from self-represented litigants and small firms with no screening capacity.
Pain and evidence (≤40 words; cite the pain dossier file): Clerks have no admin staff and no time to check citations; pro se filers account for 59% of hallucination cases, and judges report "scant resources to spare ferreting out erroneous AI citations." (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): The agent extracts every citation from an incoming filing, verifies each against a case-law database, and shows the matched or missing record as evidence before flagging anything, so the clerk sees proof, not a bare accusation. Flagged filings route to the judge with the disclosure the court's standing order requires.
Why now (≤25 words; name the specific capability): Cheap 1M-token context reads a full filing plus every cited case in one pass, with no chunking and no missed citation.
Demo moment (≤20 words): Submit a filing with three real and two invented case names; the screen shows evidence for each and flags the fakes.
Business model (≤15 words): Per-filing fee paid by the clerk's office or the court's e-filing vendor.

---
id: I-4061
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r2
raw_id: s3-ideator-balanced-T4-02-r2#03
merged: []
---

# Verified-Agent Fee Gateway

One-liner (≤20 words): Lets tiny licensing offices accept fee payments from citizens' AI agents without a fraud attempt costing them a statutory deadline.
Buyer and niche (≤25 words): Tow yards, pawn licensing boards and small town clerks collecting renewal, release or registration fees from the public.
Pain and evidence (≤40 words; cite the pain dossier file): A missed DMV notice voids an entire lien sale, and daily police-report misses risk fines up to $25,000 and jail; offices have no way to tell a citizen's real payment agent from a fraud attempt before the clock runs out. (src: outputs/s3-ideate/pain/T4-dossier.md)
How it works (≤50 words): Card-network Trusted Agent tokens attach verified consent and identity to each incoming agent payment. The gateway matches the payment to the exact case, vehicle or license record, updates the relevant portal filing the instant funds clear, and rejects unverified tokens before they can stall a statutory notice window.
Why now (≤25 words; name the specific capability): Visa and Mastercard Trusted Agent Protocol tokens let merchants tell verified purchasing agents from bots, rolling out through 2026.
Demo moment (≤20 words): A mock AI agent pays a tow release fee with a Trusted Agent token; the record updates and a filing fires.
Business model (≤15 words): Small per-transaction fee plus a flat monthly platform charge.

---
id: I-4062
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r2
raw_id: s3-ideator-balanced-T4-02-r2#04
merged: []
---

# Grant Data Fabrication Check

One-liner (≤20 words): Cross-checks AI-drafted fire-incident narratives against dispatch logs before they reach the federal reporting system.
Buyer and niche (≤25 words): Volunteer fire department officers and grant administrators whose federal funding depends on clean incident-reporting data.
Pain and evidence (≤40 words; cite the pain dossier file): Bad reporting data "can affect funding opportunities" and officers already reconstruct incidents from memory; AI-generated content has already polluted an official record elsewhere with "complete garbage" entries nobody caught before submission. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): Before submission, the agent pulls the department's own dispatch and CAD log for the incident, compares it field by field against the officer's AI-drafted narrative, and highlights any detail the draft added that the log does not support. Only reports that pass the cross-check auto-file to the reporting portal.
Why now (≤25 words; name the specific capability): Cheap long-context inference holds a full CAD log and narrative together per incident, with no manual reconciliation.
Demo moment (≤20 words): Feed a drafted incident report with one invented detail; the checker flags the mismatch against the dispatch log.
Business model (≤15 words): Annual per-department subscription, bundled with existing grant-reporting support.

---
id: I-4063
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r2
raw_id: s3-ideator-balanced-T4-02-r2#05
merged: []
---

# Pawn Document Cross-Check

One-liner (≤20 words): Cross-references presented ID and title documents against official lookups before the mandatory daily police report is filed.
Buyer and niche (≤25 words): Pawn shop and scrap-metal dealer clerks who must report every transaction to police by the next business day.
Pain and evidence (≤40 words; cite the pain dossier file): A knowing daily-report failure risks fines up to $25,000 and jail; dealers face the same blind spot claims examiners describe, where AI-altered documents "look real enough to pass a first review." (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): The agent extracts every ID and title field from what the customer presents, runs the extracted numbers against the state DMV or ID-lookup portal the way a tow yard already must, and flags any mismatch before the transaction is recorded. The daily police report still files on time either way.
Why now (≤25 words; name the specific capability): Mistral OCR 3 parses ID and title fields at $1-2 per 1,000 pages, cheap enough to check every transaction.
Demo moment (≤20 words): Scan a mock ID; the check flags a name mismatch against the state lookup before the transaction saves.
Business model (≤15 words): Flat monthly fee per shop location.

---
id: I-4064
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-02-r3
raw_id: s3-ideator-balanced-T8-02-r3#01
merged: []
---

# Renewal Notice Relay

One-liner (≤20 words): Forward a parent's Medicaid renewal notice by email; get a ready-to-submit packet back, no login needed.
Buyer and niche (≤25 words): Adult children and paid guardians managing a parent's Medicaid long-term-care renewal who live far from the mailbox.
Pain and evidence (≤40 words; cite the pain dossier file): 69% of unwinding disenrollments were procedural, not ineligibility, and renewal packets mail to the parent with only a 30-day reply window, easy to miss. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The proxy photographs and emails the mailed notice to a dedicated address. The service checks the state portal, drafts the completed packet from prior answers, and emails it back as a PDF; replying "approved" triggers submission, with every status update arriving by email.
Why now (≤25 words): Claude for Chrome already handles browser logins and email from inside one session, enabling a fully email-driven relay.
Demo moment (≤20 words): Forward a mock notice by email; a completed packet PDF arrives in the inbox minutes later, ready to approve.
Business model (≤15 words): $19/month per parent profile, billed automatically; no dashboard to build or maintain.

---
id: I-4065
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-02-r3
raw_id: s3-ideator-balanced-T8-02-r3#05
merged: []
---

# Annual Accounting by CC

One-liner (≤20 words): CC receipts to one address all year; a finished fiduciary accounting arrives by email when it's due.
Buyer and niche (≤25 words): VA fiduciaries, representative payees and informal guardians who must file an annual accounting for a ward's funds.
Pain and evidence (≤40 words; cite the pain dossier file): VA fiduciaries handling over $10k a year must file annual accountings; audits check whether funds were "used and accounted for," today tracked in manual spreadsheets. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The fiduciary CCs one address whenever a receipt, invoice or statement crosses their inbox during the year. Each item is filed into the required accounting category automatically, and on the filing deadline the service emails back the completed accounting form with every exhibit already attached.
Why now (≤25 words): Mistral OCR 3 reads every forwarded receipt cheaply enough to file a full year of documents as they arrive.
Demo moment (≤20 words): CC a dozen sample receipts; a completed accounting form with matched exhibits arrives by email on cue.
Business model (≤15 words): $39/year per ward, volume pricing for professional fiduciary firms managing many wards.

---
id: I-4066
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
raw_id: s3-ideator-novel-T8-02-r3#01
merged: []
---

# Renewal Agent That Learns Once

One-liner (≤20 words): Watches the proxy complete one Medicaid renewal, then replays and adapts the exact steps every year after.
Buyer and niche (≤25 words): Adult children and daily money managers handling an aging parent's annual Medicaid long-term-care renewal across state portals.
Pain and evidence (≤40 words; cite the pain dossier file): 69% of 2024 disenrollments were procedural, not eligibility-based, inside a 30-day mailed-packet window that resets every year. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The proxy completes one renewal live while a screen agent observes every click, field and uploaded document; it encodes that single walkthrough as the parent's personal renewal procedure, then next year detects the new packet, pre-fills each field from updated documents, and asks for one confirmation before submitting.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5's screen-observing computer use can encode one demonstrated portal walkthrough as a reusable, adaptable procedure.
Demo moment (≤20 words): Record a sample renewal step; next "year's" trigger replays it against new mock documents, pausing for one confirmation.
Business model (≤15 words): $89 flat fee once a year per parent's renewal, billed at renewal time.

---
id: I-4067
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
raw_id: s3-ideator-novel-T8-02-r3#02
merged: []
---

# Fiduciary Accounting Learned Once

One-liner (≤20 words): Learns a payee's categorization from one narrated walkthrough, then drafts the whole year's mandatory accounting alone.
Buyer and niche (≤25 words): Family members serving as representative payees or VA fiduciaries for an aging parent, filing mandatory annual accountings.
Pain and evidence (≤40 words; cite the pain dossier file): Audits check whether payees "used and accounted for" every dollar, VA fiduciaries file annual accountings, and today's workaround is manual books and spreadsheets. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Once, the payee narrates a month of transactions, labeling each as medical, housing, allowance or other; the agent learns that personal categorization scheme from the single session, then at year-end pulls twelve months of statements, applies the learned scheme, and drafts the completed accounting form for review.
Why now (≤25 words; name the specific capability): 1M-token context holds a full year of transactions, so one demonstrated categorization scheme generalizes without a separate training set.
Demo moment (≤20 words): Narrate five sample transactions once; a year of mock statements gets auto-categorized and the accounting form appears seconds later.
Business model (≤15 words): $149 once a year per filed accounting, timed to the mandatory filing date.

---
id: I-4068
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
raw_id: s3-ideator-novel-T8-02-r3#03
merged: []
---

# Open Enrollment Decision, Learned Once

One-liner (≤20 words): Learns how a family judged last year's Medicare Advantage plans, then re-runs that judgment on every new plan menu.
Buyer and niche (≤25 words): Adult children who chose a parent's Medicare Advantage plan and must reconsider it every Annual Enrollment Period.
Pain and evidence (≤40 words; cite the pain dossier file): A plan chosen for a parent "turns bad" mid-crisis; providers can leave the network mid-year while the member stays locked in until fall. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): During one enrollment session, the family compares plans aloud, naming which doctors, drugs and network ties matter and why; the agent learns those weighted priorities from that single session, then each following Annual Enrollment Period scores the new year's plan menu against the same priorities and flags if switching beats staying.
Why now (≤25 words; name the specific capability): Long-context plan-document comparison lets one learned priority set be cheaply re-applied against a new year's full plan catalog.
Demo moment (≤20 words): State three priorities once; the agent scores five mock plans and flags the one that now beats the current plan.
Business model (≤15 words): $39 once a year during open enrollment, per parent covered.

---
id: I-4069
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
raw_id: s3-ideator-novel-T8-02-r3#04
merged: []
---

# A Year's Spending, Reviewed Once

One-liner (≤20 words): Learns what's normal for one parent from a single labeling session, then re-checks a whole year of transactions once annually.
Buyer and niche (≤25 words): Adult children who want an affordable yearly fraud check on a parent's accounts without paying for continuous monitoring.
Pain and evidence (≤40 words; cite the pain dossier file): 147,127 elder-fraud complaints in 2024 (up 46%), $4.885B lost, and families "notice weeks or months later," once the money is already gone. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Once, the proxy labels a sample of a parent's transactions as normal or suspicious, narrating why (recurring grandkid transfers are fine, new payees over $200 aren't); the agent learns that personal baseline from the single session, then once a year re-scans the full year's statements against it and returns a short, prioritized exception list.
Why now (≤25 words; name the specific capability): Cheap 1M-token review makes a full annual statement re-scan against a one-shot personal baseline affordable at a consumer price.
Demo moment (≤20 words): Label four sample transactions once; a year of mock statements returns three flagged exceptions with reasons shown.
Business model (≤15 words): $49 once a year per parent, positioned as a tax-season financial checkup.

---
id: I-4070
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
raw_id: s3-ideator-novel-T8-02-r3#05
merged: []
---

# Designations, Checked Once a Year

One-liner (≤20 words): Learns how the proxy checks beneficiary and ownership designations once, then re-audits every account for drift annually.
Buyer and niche (≤25 words): Adult children acting as financial proxies who want to catch wrong account setups before a crisis or death.
Pain and evidence (≤40 words; cite the pain dossier file): Banks default families to joint ownership over convenience-signer status, risking Medicaid disqualification, and "each bank... wants its own" process, discovered only after death. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The proxy shows the agent, once, how they check an account's ownership type and beneficiary designation on one institution's site; a screen agent learns that check from the single demonstration, then applies it once a year across every linked account, flagging any joint-ownership or missing-beneficiary drift before it becomes a Medicaid or estate problem.
Why now (≤25 words; name the specific capability): Claude for Chrome operates inside the proxy's own logged-in session, so one demonstrated check generalizes across every institution with no new integration.
Demo moment (≤20 words): Demonstrate one designation check; the agent runs it across three mock accounts and flags one wrongly set to joint ownership.
Business model (≤15 words): $59 once a year per parent, bundled as an annual "accounts health check".

---
id: I-4071
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#01
merged: []
---

# Peppol Proof-of-Delivery Agent

One-liner (≤20 words): Confirms your supplier is actually registered and receiving on Peppol or a PDP, not just claiming it.
Buyer and niche (≤25 words): Procurement and AP teams at manufacturers and mid-size buyers sourcing from many small EU suppliers now switching to structured e-invoicing.
Pain and evidence (≤40 words; cite the pain dossier file): "Many SMEs assume they're 'on Peppol' without confirming registration is active," and can't tell whether sent invoices arrived, risking late payment and fines. (src: outputs/s3-ideate/pain/T2-dossier.md, P12)
How it works (≤50 words): A browser agent logs into each supplier's declared access point or the public Peppol/PDP directory, checks live registration status and delivery receipts against your outgoing purchase orders, and flags any supplier whose invoices are silently failing before your payment terms lapse.
Why now (≤25 words): Claude for Chrome and Skyvern-class browser agents now handle multi-portal logins and legacy directory UIs in production.
Demo moment (≤20 words): Live, the agent checks three seeded supplier registrations, flags one inactive, and drafts a chase email instantly.
Business model (≤15 words): Subscription priced per supplier checked per month, tiered by supplier count.

---
id: I-4072
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#02
merged: []
---

# Mandate Cliff Simulator

One-liner (≤20 words): Shows which suppliers will legally be unable to invoice you next quarter, and how much spend that threatens.
Buyer and niche (≤25 words): Procurement leads at manufacturers with dozens of EU suppliers facing staggered e-invoicing mandates in Germany, Belgium, France and Spain.
Pain and evidence (≤40 words; cite the pain dossier file): Without a connected platform a French firm can no longer issue or receive invoices from its cliff date; 150 platforms exist with no default choice. (src: outputs/s3-ideate/pain/T2-dossier.md, P14)
How it works (≤50 words): Ingests your supplier list with country and self-reported e-invoicing readiness, cross-references a maintained mandate-deadline database for Germany, Belgium, France and Spain, and outputs a ranked list of suppliers going non-compliant soonest, each tagged with the dollar spend that would be interrupted.
Why now (≤25 words): Cheap large-context inference lets the simulator read every supplier note and country rule in one pass affordably.
Demo moment (≤20 words): Upload a 20-row supplier CSV; simulator flags three suppliers going non-compliant within 60 days, with spend exposure.
Business model (≤15 words): Flat monthly fee per 100 tracked suppliers.

---
id: I-4073
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#03
merged: []
---

# Rejection Autopsy Agent

One-liner (≤20 words): Explains exactly why an e-invoice was rejected and drafts the fix, instead of leaving staff to decode error codes.
Buyer and niche (≤25 words): AP and procurement staff at firms receiving French, German or Belgian structured e-invoices that fail validator checks.
Pain and evidence (≤40 words; cite the pain dossier file): A rejection blocks the payment cycle on French platforms; German software "generiert keine valide XRechnung," with no vendor fix date given. (src: outputs/s3-ideate/pain/T2-dossier.md, P13)
How it works (≤50 words): Takes a rejected e-invoice plus its rejection code, looks up the exact official validator rule it violated (missing bank data, tax-ID mismatch, bad format), explains the root cause in plain language, and drafts a corrected-resubmission request naming the exact fields the supplier must fix.
Why now (≤25 words): Cheap 1M-token context holds the full e-invoice schema and rejection-code tables in one prompt for precise diagnosis.
Demo moment (≤20 words): Feed one real tax-ID-mismatch rejection code; agent explains the cause and drafts the supplier email in under ten seconds.
Business model (≤15 words): Pay-per-rejection-resolved, or bundled into an AP seat license.

---
id: I-4074
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#04
merged: []
---

# Ghost PO Closer

One-liner (≤20 words): Finds every purchase order with goods received but no invoice, drafts the accrual, and chases the supplier automatically.
Buyer and niche (≤25 words): Procurement and month-end close teams at mid-size manufacturers juggling hundreds of open purchase orders across many small suppliers.
Pain and evidence (≤40 words; cite the pain dossier file): A missing invoice is common when a manager approves a purchase but sends the paperwork late, forcing a manual chase list every month-end and a delayed close. (src: outputs/s3-ideate/pain/T2-dossier.md, P7)
How it works (≤50 words): At month-end, matches every open purchase order and goods-receipt record against invoices received so far, flags POs with goods received but no matching invoice, drafts the accrual journal entry for finance, and sends the supplier a chase email in the same pass.
Why now (≤25 words): Cheap long-context inference makes matching thousands of PO, receipt and invoice records in one pass affordable for a small team.
Demo moment (≤20 words): Load a mock 50-line open-PO report; agent surfaces four unmatched receipts and drafts accrual entries and chase emails live.
Business model (≤15 words): Seat license for procurement or AP, priced per ERP connected.

---
id: I-4075
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r1
raw_id: s3-ideator-balanced-T2-01-r1#05
merged: []
---

# Invoice Shadow Ledger

One-liner (≤20 words): Shows what you actually owe from invoices as they arrive, days before AP finishes keying them into the ERP.
Buyer and niche (≤25 words): Procurement officers at manufacturers who need current committed-spend visibility while AP works through a 9-day average keying backlog.
Pain and evidence (≤40 words; cite the pain dossier file): 70% of businesses still process invoices manually, with 9.2 days average cycle time against 3.1 at best-in-class, and more than 60% needing a human touch. (src: outputs/s3-ideate/pain/T2-dossier.md, P1)
How it works (≤50 words): Watches the AP inbox and supplier portals, extracts every incoming invoice, whether PDF, scan or structured XML, into a structured running ledger the moment it arrives, days before AP finishes keying it into QuickBooks, Xero or the ERP.
Why now (≤25 words): Mistral OCR 3 parses forms, scans and structured XML at $1-2 per 1,000 pages, cheap enough to shadow every invoice.
Demo moment (≤20 words): Drop a mixed folder of PDF, scan and structured XML invoices; ledger populates line items live, before ERP entry.
Business model (≤15 words): Per-seat subscription for procurement, priced by monthly invoice volume.

<!-- COMPLETE -->
