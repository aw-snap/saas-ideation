---
id: I-2551
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r1
raw_id: s3-ideator-novel-T8-02-r1#07
merged: []
---

# Verified Proxy Passport Network

One-liner (≤20 words): One verified proxy credential every participating bank accepts, instead of a new POA fight at each one.

Buyer and niche (≤25 words): Compliance teams at credit unions and community banks who manually re-verify the same families' POA paperwork institution by institution.

Pain and evidence (≤40 words; cite the pain dossier file): Banks demand their own POA form, and CMS-style proof can be requested "at any time"; a rejected POA once left a senior without pension income for seven months. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): An agent verifies a proxy's POA once against state legal requirements and issues a portable, auditable credential; participating institutions query the network instead of re-reviewing paper each time, cutting review time for compliance staff and repeat friction for families.

Why now (≤25 words; name the specific capability): Production-track non-human and delegated identity standards (Okta Agent SSO, TC-17) make a portable verified-proxy credential buildable now.

Demo moment (≤20 words): A staged teller screen queries the network; the proxy's verified status and document appear in two seconds.

Business model (≤15 words): Per-institution SaaS fee plus a small per-verification charge.

---
id: I-2552
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r1
raw_id: s3-ideator-novel-T8-02-r1#08
merged: []
---

# Zombie Subscription & Bill Watchdog

One-liner (≤20 words): Hunts down duplicate charges, missed bills and forgotten subscriptions quietly draining a parent's account.

Buyer and niche (≤25 words): Adult children and daily money managers doing the monthly bill-and-account check for an aging parent.

Pain and evidence (≤40 words; cite the pain dossier file): Daily money manager clients need "approximately four hours of services per month," just watching for missed payments, late fees and duplicate charges. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Connects to statement exports; the agent flags missed payments, duplicate charges and unused recurring subscriptions across months of history, then drafts the cancellation email or dispute letter for the proxy to review and send with one click.

Why now (≤25 words; name the specific capability): Cheap 1M-token context review (TC-25) makes month-over-month statement comparison affordable at consumer prices, not DMM hourly rates.

Demo moment (≤20 words): Load a sample statement; the agent flags a duplicate streaming charge and drafts a cancellation email.

Business model (≤15 words): $9/month per parent; $40/month professional tier for money managers with multiple clients.

---
id: I-2553
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
raw_id: s3-ideator-novel-T7-01-r3#01
merged: []
---

# Offline Trial-Bag Citation Verifier

One-liner (≤20 words): A laptop-only tool checks every citation in a brief against cached case law, no internet needed at the courthouse.

Buyer and niche (≤25 words): Solo and small-firm litigators who prep and argue trial weeks inside courthouses with unreliable or locked-down public wifi.

Pain and evidence (≤40 words; cite the pain dossier file): Manual cite-checking still takes 2-5 hours per brief because paid tools hallucinate 17-33% of citations, and courthouse-side prep leaves no reliable connection to run cloud checkers. (src: outputs/s3-ideate/pain/T7-dossier.md, P2)

How it works (≤50 words): Before leaving the office, the lawyer syncs the matter's jurisdiction case-law corpus onto the laptop. A local model then checks every citation in the draft against the cached full case text, flagging any that misquote, misstate a holding, or don't exist, and shows the exact matching paragraph for each pass.

Why now (≤25 words): gpt-oss-20b (Aug 2025) fits a 16GB laptop, running full citation-matching reasoning entirely offline through an 8-hour trial day.

Demo moment (≤20 words): Disconnect wifi, load a brief with one fabricated case; the flag still appears with no matching paragraph shown.

Business model (≤15 words): Per-seat annual license sold to small litigation and appellate practices.

---
id: I-2554
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
raw_id: s3-ideator-novel-T7-01-r3#02
merged: []
---

# Courthouse Self-Help Citation Kiosk

One-liner (≤20 words): A standalone kiosk lets pro se filers check their own citations before submitting, with no network connection required.

Buyer and niche (≤25 words): Court self-help centers and clerks in rural or under-resourced courthouses serving pro se litigants who draft their own filings.

Pain and evidence (≤40 words; cite the pain dossier file): A judge said there are "scant resources to spare ferreting out erroneous AI citations," and pro se litigants account for 59% of documented hallucination cases, with no pre-filing check offered today. (src: outputs/s3-ideate/pain/T7-dossier.md, P4)

How it works (≤50 words): A kiosk laptop preloaded with the state's case reporter runs fully offline all day. A filer types or scans a draft filing; a local model extracts each citation, checks it against the cached reporter text, and prints a one-page report showing the matching paragraph or a "not found" flag before submission.

Why now (≤25 words): Local inference (gpt-oss-20b, llama.cpp) lets a state-funded kiosk run a full clerk's shift with no network bill or connection.

Demo moment (≤20 words): Type a filing citing a real and a fabricated case; the printed report flags only the fabricated one.

Business model (≤15 words): One-time court licensing fee per kiosk plus an annual corpus-update fee.

---
id: I-2555
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
raw_id: s3-ideator-novel-T7-01-r3#03
merged: []
---

# Air-Gapped Vulnerability Reproduction Bench

One-liner (≤20 words): Reproduces a reported bug against a mirrored codebase inside a disconnected security enclave, no cloud API call ever made.

Buyer and niche (≤25 words): Security teams at defense contractors and critical-infrastructure operators whose review networks are air-gapped and cannot send reports to any external service.

Pain and evidence (≤40 words; cite the pain dossier file): Maintainers report "20-40 reports a week" of AI-slop and feel "effectively DDoS'ed," with confirmed-vulnerability rates under 5%; regulated air-gapped teams cannot even try a cloud triage tool on the reports at all. (src: outputs/s3-ideate/pain/T7-dossier.md, P6)

How it works (≤50 words): Before the network is cut, the team loads the report, the mirrored target repo and its build environment onto an isolated workstation. A local model attempts to reproduce each report's exact steps against the mirror, marking it reproduced, not-reproduced or inconclusive, citing the exact commit and line tested, for a full working day offline.

Why now (≤25 words): gpt-oss-120b runs full reasoning on one local 80GB GPU, letting reproduction-grade triage happen with zero external network calls.

Demo moment (≤20 words): On an air-gapped machine, a report citing a nonexistent function is marked not-reproduced, with the missing symbol shown.

Business model (≤15 words): Site license per secure enclave, priced by workstation count.

---
id: I-2556
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
raw_id: s3-ideator-novel-T7-01-r3#04
merged: []
---

# Rural Maintainer's Offline Slop Filter

One-liner (≤20 words): A maintainer's laptop keeps triaging vulnerability reports against the local repo all night, no matter how flaky the home connection is.

Buyer and niche (≤25 words): Volunteer open-source maintainers with unreliable rural or evening-only internet, sponsored by their project's foundation to keep intake sustainable.

Pain and evidence (≤40 words; cite the pain dossier file): curl's maintainer wrote that AI-slop reports "take a serious mental toll to manage," with confirmed reports under 5%; a paid cloud triage service is useless the moment the maintainer's connection drops. (src: outputs/s3-ideate/pain/T7-dossier.md, P6)

How it works (≤50 words): The maintainer syncs the repo and the week's new reports once, when online. A local model then works fully offline, attempting each report's steps against the mirrored code overnight or on a flight, and only re-syncs verdicts once connectivity returns, so triage never waits on the maintainer's connection.

Why now (≤25 words): llama.cpp and Ollama serve quantized models at high speed on ordinary consumer hardware, so triage carries no ongoing API dependency.

Demo moment (≤20 words): In airplane mode, a report citing a fake commit hash is flagged unreproducible against the mirrored repo.

Business model (≤15 words): Free for individual maintainers; sponsored annual fee paid by the project's foundation.

---
id: I-2557
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-01-r3
raw_id: s3-ideator-novel-T7-01-r3#05
merged: []
---

# Storm-Response Clubhouse Claim Auditor

One-liner (≤20 words): Drafts and checks a storm-damage insurance claim entirely offline, exactly when the storm has also cut the power and internet.

Buyer and niche (≤25 words): Volunteer treasurers and board members of small sports clubs and nonprofits who must file their own storm-damage claims with no professional adjuster.

Pain and evidence (≤40 words; cite the pain dossier file): Carrier AI summaries already miss "an important detail from a medical report," causing "an inaccurate payout"; a treasurer drafting their own claim risks the same unsupported items, with no one to catch it before submission. (src: outputs/s3-ideate/pain/T7-dossier.md, P9)

How it works (≤50 words): After a storm, the treasurer photographs the damage and dictates a description into a laptop preloaded with the policy PDF and past inspection records. A local model drafts the claim narrative and checks every claimed item against the actual policy clauses, flagging anything unsupported, entirely offline until service returns hours later.

Why now (≤25 words): gpt-oss-20b fits a 16GB laptop and drafts plus checks the claim fully offline, so filing isn't blocked by the outage.

Demo moment (≤20 words): Unplug the router, dictate a claim with one invented item; it flags as unsupported against the cached policy.

Business model (≤15 words): Low annual fee bundled with the club's insurance policy or association membership.

---
id: I-2558
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
raw_id: s3-ideator-balanced-T8-01-r3#01
merged: []
---

# Instant Medicare Rep Filer

One-liner (≤20 words): Signup ends with the federal Appointment-of-Representative form already filed with Medicare, confirmation number in hand.

Buyer and niche (≤25 words): Adult children and POA agents who keep getting told "we need proof of authority on file" every time they call about a parent's Medicare account.

Pain and evidence (≤40 words; cite the pain dossier file): CMS "reserves the right to request documentation" at any time and rejects informal authority; one 94-year-old went seven months without her pension over unrecognized proxy status. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): During signup, the proxy answers five questions and uploads the existing POA or guardianship document. The agent auto-fills CMS's representative-appointment form and submits it through CMS's own portal before signup finishes, returning a confirmation number the proxy can quote on every future call.

Why now (≤25 words): Claude for Chrome (TC-03) completes authenticated no-API federal portal forms in one session, replacing what was a mailed paper submission.

Demo moment (≤20 words): Signup form submitted; 40 seconds later a CMS confirmation number renders on screen, still inside onboarding.

Business model (≤15 words): $29 one-time filing fee, first filing free with any paid plan.

---
id: I-2559
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
raw_id: s3-ideator-balanced-T8-01-r3#02
merged: []
---

# 90-Day Reinstatement Filer

One-liner (≤20 words): Uploads a Medicaid termination notice and files the reinstatement request in the state portal before signup finishes.

Buyer and niche (≤25 words): Families whose parent already lost long-term-care Medicaid over paperwork, racing a 90-day reinstatement window most people don't know exists.

Pain and evidence (≤40 words; cite the pain dossier file): 69% of unwinding disenrollments were procedural, not eligibility-based, and reinstatement is only available in some states within a 90-day window that few families learn about in time. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy photographs the termination notice at signup. The agent reads the case number and termination date, checks the state's reinstatement rule, fills the state portal's reinstatement request with the extracted case data, and submits it, returning a tracking number before the onboarding flow ends.

Why now (≤25 words): Mistral OCR 3 (TC-30) extracts the case number from the notice instantly; Skyvern (TC-07) files the no-API state reinstatement form.

Demo moment (≤20 words): A photographed termination letter yields a case number, then a filed reinstatement confirmation, both inside one minute.

Business model (≤15 words): $49 per filing, refunded if the state has no reinstatement path.

---
id: I-2560
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
raw_id: s3-ideator-balanced-T8-01-r3#03
merged: []
---

# Formulary Exception Instant Filer

One-liner (≤20 words): Names the dropped drug and plan at signup; the plan's formulary-exception request is submitted before the account setup ends.

Buyer and niche (≤25 words): Adult children whose parent's Medicare Advantage plan just dropped a drug off-formulary mid-year, leaving days to act before a refill runs out.

Pain and evidence (≤40 words; cite the pain dossier file): Off-formulary drugs fall outside the plan's out-of-pocket cap, and one family called their HMO's mid-crisis lock-in "little choices when she was in ICU"; the standard workaround is a 1-800-MEDICARE exception request most families never file. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): At signup, the proxy types the drug name and plan; the agent looks up that plan's exception-request form, fills it with the prescriber and diagnosis details already on file, submits it through the plan's own portal, and hands back the request's tracking number as the first thing the account shows.

Why now (≤25 words): Browser agents (TC-02) complete plan-specific no-API exception forms directly, a step that previously meant a hold-music phone call.

Demo moment (≤20 words): Drug name entered at signup; a filed exception-request confirmation appears on the new account's home screen within a minute.

Business model (≤15 words): $19 per exception request filed.

---
id: I-2561
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
raw_id: s3-ideator-balanced-T8-01-r3#04
merged: []
---

# Funeral Fund Release Filer

One-liner (≤20 words): Uploads a death certificate and immediately submits the funeral-release request to the one bank holding the burial funds.

Buyer and niche (≤25 words): Executors, usually the former POA agent, who need one specific frozen account released fast enough to cover an unpaid funeral bill.

Pain and evidence (≤40 words; cite the pain dossier file): Accounts freeze the moment a bank is notified of death, and cash gets blocked "just as funeral costs fall due"; one family was later chased by a collector for the funeral debt itself. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The executor names the bank and uploads the death certificate at signup. The agent matches the document to that bank's own funeral-expense release or small-estate affidavit form, submits it through the bank's web portal, and returns a confirmation before the account setup screen closes, instead of a mailed request.

Why now (≤25 words): Skyvern (TC-07) already handles document-attach-and-submit flows on no-API bank sites at production-adjacent reliability.

Demo moment (≤20 words): Certificate uploaded, bank named; a filed release-request confirmation renders on screen under a minute later.

Business model (≤15 words): $39 per release request, one bank at a time.

---
id: I-2562
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
raw_id: s3-ideator-balanced-T8-01-r3#05
merged: []
---

# Payee Application Instant Filer

One-liner (≤20 words): Answers a short set of questions at signup, then submits the Social Security representative-payee application before onboarding finishes.

Buyer and niche (≤25 words): Adult children whose parent can no longer manage Social Security benefits directly and need formal payee status before payments are interrupted.

Pain and evidence (≤40 words; cite the pain dossier file): SSA audits whether payees "used and accounted for" benefits, but the application to become payee is itself paperwork-heavy and informal proxies are told to "document everything" from day one to avoid abuse accusations. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy enters relationship, address and capacity details at signup. The agent fills the representative-payee application with those answers plus any uploaded medical-incapacity letter, submits it through the Social Security online portal, and shows a filed application number on the account's first screen, with a reminder of the annual accounting to come.

Why now (≤25 words): Claude for Chrome (TC-03) completes multi-field no-API federal benefit applications in one authenticated session instead of a mailed SSA-11 packet.

Demo moment (≤20 words): Signup questions answered; a filed payee-application confirmation number appears on the new dashboard within the minute.

Business model (≤15 words): $35 one-time filing fee, upsell to ongoing accounting service.

---
id: I-2563
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#01
merged: []
---

# Bot-or-Candidate Triage for Careers Pages

One-liner (≤20 words): Scores every job application as human, agent-assisted, or bot flood before it reaches a recruiter.

Buyer and niche (≤25 words): Small staffing agencies whose careers page and ATS get hit by auto-apply bots and AI-agent submissions alongside real candidates.

Pain and evidence (≤40 words): Owners can't tell AI crawlers from real traffic; Wordfence has no AI-bot allowlist toggle, forcing manual review after Cloudflare's 15 Sept 2026 default block. Staffing sites face the same flood, now from auto-apply agents, not just crawlers. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A middleware layer sits between the careers page and ATS, fingerprinting submission timing, browser signals and resume-text patterns against known auto-apply tool signatures, then attaches a trust score so the coordinator can triage real candidates first and batch-review the rest.

Why now (≤25 words): Cloudflare's 15 Sept 2026 default crawler block and cheap bulk LLM text classification make per-application trust scoring affordable for a five-person agency.

Demo moment (≤20 words): Live feed of 20 mock applications; the panel flags 6 as bot floods, ranks the rest by trust score instantly.

Business model (≤15 words): Monthly SaaS fee per careers page, tiered by application volume; free under 50/month.

---
id: I-2564
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#02
merged: []
---

# VMS Copilot That Waits for You

One-liner (≤20 words): An in-browser agent fills client VMS candidate forms and hands control back the instant a wall appears.

Buyer and niche (≤25 words): Recruiting coordinators at staffing agencies who log into Beeline, Fieldglass and other client VMS portals dozens of times a day.

Pain and evidence (≤40 words): The best browser agent solves only 40% of CAPTCHAs versus 93% for humans, and getting past walls consumes most of a scraping team's maintenance time; coordinators re-key the same candidate data into portal after portal by hand. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The coordinator stays logged into each VMS in their own browser. An in-browser agent drives the repetitive candidate-submission form, pausing the instant a CAPTCHA or MFA prompt appears, then resumes automatically once the coordinator clears it in two clicks.

Why now (≤25 words): Claude for Chrome (production since Dec 2025) operates the browser inside the user's own logged-in session, so it never triggers bot-detection walls.

Demo moment (≤20 words): Agent fills a mock VMS form live, stops at a simulated CAPTCHA, resumes the moment it's solved.

Business model (≤15 words): Per-seat subscription for coordinators, priced per VMS portal connected.

---
id: I-2565
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#03
merged: []
---

# Trust-But-Verify Submission Auditor

One-liner (≤20 words): Independently confirms an automated candidate submission actually landed, instead of trusting the agent's own success claim.

Buyer and niche (≤25 words): Staffing agency operations managers whose coordinators run any automation to push candidates into client VMS or ATS portals.

Pain and evidence (≤40 words): 45-48% of production agent failures are silently reported as success, and LLM judges catch only 65% of them; a missed placement costs the agency a filled req and its fee. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): After every automated portal submission, the auditor independently re-visits the client VMS's status page or confirmation screen and checks for a real confirmation number, never trusting the agent's own "done" message; mismatches get flagged to the coordinator before the day ends.

Why now (≤25 words): Sonnet 4.5 computer use still fails four in ten tasks, so a separate verification pass, not the agent's own report, is required now.

Demo moment (≤20 words): Dashboard shows a submission marked "done" by the agent, then flagged red when no confirmation number exists.

Business model (≤15 words): Add-on per automated portal, billed per verified submission.

---
id: I-2566
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#04
merged: []
---

# Metered Careers Feed for Job Agents

One-liner (≤20 words): Job-search agents pay a few cents per structured fetch instead of scraping a staffing agency's careers page.

Buyer and niche (≤25 words): AI job-search and sourcing agents, and the tooling firms behind them, needing clean, structured listings from small staffing agency websites.

Pain and evidence (≤40 words): Since 15 Sept 2026 Cloudflare blocks mixed-use crawlers by default on ad-bearing pages, and small sites already report bandwidth bills of hundreds of dollars a month from crawler load. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A plugin on the agency's careers page serves an HTTP 402 to unrecognized crawlers, offering a clean JSON feed of open roles for a small per-fetch payment; verified job-search agents pay instantly via x402 and get structured data instead of scraping rendered HTML.

Why now (≤25 words): x402 (May 2025) lets any site charge per HTTP request; Cloudflare's Sept 2026 default block gives small agencies a reason to turn it on.

Demo moment (≤20 words): A test agent requests a listing, gets a 402, pays a cent via x402, receives clean job JSON.

Business model (≤15 words): Micropayment revenue share plus a flat setup fee per careers site.

---
id: I-2567
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#05
merged: []
---

# Signed Consent Token for Auto-Apply

One-liner (≤20 words): Requires a candidate-signed consent token before an ATS accepts any AI-agent-submitted job application.

Buyer and niche (≤25 words): Staffing agency compliance and recruiting teams whose client contracts ban mass, unreviewed auto-apply submissions to open roles.

Pain and evidence (≤40 words): A court found that account access with a user's permission is not the same as the site's authorization; staffing clients now demand proof each auto-apply submission was individually reviewed, not blasted by a bot. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The candidate's own device signs a short-lived token naming the exact job ID and timestamp each time they approve their agent to apply; the agency's ATS rejects any auto-apply submission that lacks a valid signature, creating an auditable per-application consent trail for clients.

Why now (≤25 words): Non-human identity standards (Okta Agent SSO, production 2026) show agent-scoped, signed tokens now work outside enterprise SSO, for any consent flow.

Demo moment (≤20 words): Unsigned bot submission gets rejected live; the same job accepted seconds later once a signed token attaches.

Business model (≤15 words): Per-seat ATS add-on, priced to compliance teams as an audit feature.

---
id: I-2568
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#06
merged: []
---

# One-Click Bot Policy for Careers Sites

One-liner (≤20 words): Lets a non-technical recruiter block, allow or charge each type of bot hitting the careers page in one click.

Buyer and niche (≤25 words): Small staffing agency owners running their careers page on WordPress or Squarespace with no IT staff to configure bot rules.

Pain and evidence (≤40 words): Wordfence has no AI-bot allowlist toggle, and the Sept 2026 Cloudflare default forced every small site owner to review settings or risk losing search indexing while still leaking candidate resumes to scrapers. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A dashboard classifies incoming traffic into known AI crawlers, signed sourcing agents and unclassified bots, then lets the owner set one policy per category, block, allow free, or charge per fetch, and auto-writes the matching Cloudflare rule, no code required.

Why now (≤25 words): Cloudflare's mixed-use default block (15 Sept 2026) and pay-per-crawl tooling give small owners real levers to pull, if the panel is simple enough.

Demo moment (≤20 words): Live traffic map shows three bot types; owner clicks "charge" on one, next request gets a 402.

Business model (≤15 words): Flat monthly fee per site, tiered by traffic volume.

---
id: I-2569
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#07
merged: []
---

# Cost-Per-Sourced-Candidate Ledger

One-liner (≤20 words): Tallies every proxy fee, CAPTCHA-solve and per-call payment against the candidates a sourcing agent actually found.

Buyer and niche (≤25 words): Staffing agency operations and finance staff paying separately for proxies, CAPTCHA solvers and per-call fees across many sourcing tools.

Pain and evidence (≤40 words): No tool aggregates spend across protocols, x402 moves the dollar, AP2 authorizes one purchase, none enforce a session budget, so agencies can't see true cost per candidate sourced across walled sites. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A metering layer wraps every sourcing agent call, proxy fetch, CAPTCHA solve, x402 micropayment, and logs the cost against each successful candidate profile pulled, rolling up to one "cost per sourced candidate" number per role instead of scattered vendor invoices.

Why now (≤25 words): x402 (2025) turned wall-crossing into metered per-call payments, but nothing aggregates them; a thin ledger layer closes that gap today.

Demo moment (≤20 words): Mock sourcing run against three walled sites; dashboard tallies real-time cost per successful profile pulled.

Business model (≤15 words): Percentage of tracked spend, capped at a flat fee per agency.

---
id: I-2570
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
raw_id: s3-ideator-balanced-T6-01-r1#08
merged: []
---

# Thirty-Second Human Proof Before Scheduling

One-liner (≤20 words): A quick live voice check confirms an applicant is real before they take a scarce interview slot.

Buyer and niche (≤25 words): Recruiting coordinators whose calendars fill with interviews for auto-apply and AI-fabricated candidates who never show or can't answer basic questions.

Pain and evidence (≤40 words): Auto-apply bots flood pipelines the way crawlers flood FOSS sites, and agents themselves solve only 40% of human-verification challenges, showing today's proof-of-humanity gates are already weak in both directions. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before a scheduling link goes out, the candidate answers one screening question in a 30-second live voice exchange; instant transcription checks the answer against claimed resume experience, and only a coherent, matching response unlocks the coordinator's calendar.

Why now (≤25 words): gpt-realtime (GA Aug 2025) makes a natural 30-second speech-to-speech check cheap enough to run on every applicant before scheduling.

Demo moment (≤20 words): Live 30-second voice check runs on stage; a mismatched answer blocks the calendar invite instantly.

Business model (≤15 words): Per-applicant micro-fee, bundled free up to a monthly quota.

---
id: I-2571
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-01, A-seed-01-pain-1]
source_task: s3-pivoter-01
raw_id: s3-pivoter-01#01
merged: []
---

# Verified Doorway Registry

One-liner (≤20 words): Buildings get a one-time verified clearance profile; retailers check any address instantly instead of filming a route.

Buyer and niche (≤25 words): Furniture and appliance e-commerce retailers checking whether a large item will clear a specific delivery address before shipping.

Pain and evidence (≤40 words; cite the pain dossier file): A sofa that won't clear a stairwell or turn means failed delivery, return freight, wall damage and a lost sale. Tape-measure math and 2D calculators miss real 3D obstacles like switchbacks and low ceilings. (src: inputs/seeds/seed-01.md)

How it works (≤50 words): Building owners or agents run a one-time AI measurement pass using existing floor-plan or listing photos, producing a verified clearance profile stored against the address. Retailers query the address at checkout for an instant fit verdict, no customer filming required.

Why now (≤25 words; name the specific capability): Vision models now extract accurate room and doorway dimensions from ordinary real-estate listing photos already online.

Demo moment (≤20 words): Enter any listed address and get an instant fit verdict for a chosen sofa, pulled from existing photos.

Business model (≤15 words): Retailers pay per address lookup; agents earn a referral fee for verified listings.

---
id: I-2572
track: novel
lineage: seed-pivot
territory: none
cell: { buyer: B2C, capability: extractor, track: novel }
parents: [seed-01, A-seed-01-tech-1]
source_task: s3-pivoter-01
raw_id: s3-pivoter-01#02
merged: []
---

# Wheelchair Route Checker

One-liner (≤20 words): A short phone video of an apartment or venue turns into an accessibility verdict for wheelchair users.

Buyer and niche (≤25 words): Renters, venues and disability advocacy organizations who need to know if a space is truly wheelchair accessible before a visit.

Pain and evidence (≤40 words; cite the pain dossier file): Listed "wheelchair accessible" ratings are often self-reported and wrong; a hallway, threshold lip or tight turn that fails isn't visible from photos, and finding out in person means a wasted trip. (src: inputs/seeds/seed-01.md)

How it works (≤50 words): A user or venue films a short walkthrough with a phone. A 3D reconstruction model turns it into geometry of doorways, thresholds and turning radii, checked against the user's wheelchair or scooter dimensions for a pass/fail verdict with the exact failing point flagged.

Why now (≤25 words; name the specific capability): Recent video-to-3D reconstruction models extract centimetre-scale geometry from ordinary phone footage. [unverified]

Demo moment (≤20 words): Film an apartment hallway; get a verdict on wheelchair passage plus a flagged narrow turn.

Business model (≤15 words): Venues and property managers pay to certify listings; individual checks are free.

---
id: I-2573
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-01, A-seed-01-aud-1]
source_task: s3-pivoter-01
raw_id: s3-pivoter-01#03
merged: []
---

# Delivery Damage Shield

One-liner (≤20 words): Delivery crews film before-and-after footage that AI checks automatically to settle who caused any damage.

Buyer and niche (≤25 words): Online furniture and appliance retailers and white-glove delivery companies who eat the cost of disputed damage claims.

Pain and evidence (≤40 words; cite the pain dossier file): Crews are blamed for wall dents, floor scratches and door damage that often existed beforehand; without documentation, retailers pay out or lose customer trust either way. (src: inputs/seeds/seed-01.md)

How it works (≤50 words): The crew films a quick walkthrough on arrival and departure. A vision model compares the two passes, flags any new marks with location and timestamp, and generates a signed liability report attached to the order automatically, before anyone files a dispute.

Why now (≤25 words; name the specific capability): Vision models can now compare before-and-after footage and reliably localize new physical damage.

Demo moment (≤20 words): Run before and after clips through the checker; watch it circle one new scuff mark.

Business model (≤15 words): Delivery companies pay a monthly fee per crew, justified by disputes avoided.

---
id: I-2574
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [seed-01, A-seed-01-biz-1]
source_task: s3-pivoter-01
raw_id: s3-pivoter-01#04
merged: []
---

# Job-Site Clearance Check

One-liner (≤20 words): A phone video of a job-site route returns a verdict on whether heavy equipment will clear every gate and aisle.

Buyer and niche (≤25 words): Equipment rental companies and contractors moving forklifts, generators and machinery onto tight industrial or renovation sites.

Pain and evidence (≤40 words; cite the pain dossier file): Equipment that won't clear a site gate or freight elevator means a wasted rental day, a stranded truck and an expensive reroute; site plans are often outdated or missing. (src: inputs/seeds/seed-01.md)

How it works (≤50 words): A site contact films the delivery path from gate to install point. The geometry is checked against the equipment's dimensions and turning envelope, returning a verdict and flagging the tightest point before the truck ever leaves the yard.

Why now (≤25 words; name the specific capability): Phone-video-to-3D reconstruction now captures industrial-scale clearances well enough to catch a blocked route in advance. [unverified]

Demo moment (≤20 words): Film a warehouse aisle; get a clearance verdict for a specific forklift model.

Business model (≤15 words): Rental companies pay per route check, justified by wasted trips prevented.

---
id: I-2575
track: balanced
lineage: seed-pivot
territory: none
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [seed-01, A-seed-01-insight-1]
source_task: s3-pivoter-01
raw_id: s3-pivoter-01#05
merged: []
---

# Facility Move Planner

One-liner (≤20 words): Hospitals plan how a new MRI or hospital bed will physically travel through corridors before committing to a purchase.

Buyer and niche (≤25 words): Hospital facilities teams and medical equipment vendors planning large installations inside existing buildings.

Pain and evidence (≤40 words; cite the pain dossier file): A purchased MRI or oversized bed that can't navigate existing corridors and doorways forces expensive last-minute renovation or a cancelled order, discovered only on delivery day. (src: inputs/seeds/seed-01.md)

How it works (≤50 words): Facilities teams upload existing building floor plans or BIM data. A motion-planning engine computes whether the equipment's exact dimensions and turning geometry can traverse the planned route, returning a pass/fail verdict and the precise doorway or corner that fails.

Why now (≤25 words; name the specific capability): Motion-planning solvers now run against real building geometry fast enough to check routes during the sales process, not on delivery day.

Demo moment (≤20 words): Load a hospital floor plan and an MRI's dimensions; watch the planner flag the one corner it can't turn.

Business model (≤15 words): Equipment vendors pay per route check, bundled into the sales quote process.

<!-- COMPLETE -->
