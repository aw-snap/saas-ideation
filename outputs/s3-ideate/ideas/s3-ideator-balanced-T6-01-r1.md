## Titles

1. VMS Portal Autopilot for Recruiters [safe: reads as generic RPA] → rewrite: **VMS Submission Proof Ledger** (verifies the bot actually submitted, not just that it ran)
2. Candidate-Agent vs Bot Triage for Careers Pages
3. CAPTCHA Concierge for Sourcing Bots [similar to 13, 19] → rewrite: **Wall-Cost Router for Sourcing Runs** (routes a sourcing job around sites that will fight back before spending the call)
4. Application Flood Firewall [similar to 14, 15, 24, 27] → rewrite: **Applicant Authenticity Passport** (a portable trust score, not a blunt block)
5. LinkedIn Scrape Shield for Recruiters [safe: generic sourcing tool, crowded category] → rewrite: **Cost-Per-Successful-Profile Meter** (bills on outcomes, not attempts)
6. Per-Candidate Spend Cap for Sourcing Agents [similar to 10, 18, 23] → rewrite: **Unified Wall-Spend Ledger Across Every Portal**
7. Client Portal Login Vault + Agent Runner
8. Agent Success Auditor for Candidate Submissions
9. Bot-or-Buyer: Applicant Authenticity Score [similar to 2, 4] → rewrite: **Five-Minute Live Proof Gate for Applicants**
10. Session Budget Guard for VMS Bots [similar to 6] → rewrite: **Per-Portal Budget Circuit Breaker** (trips before one polling loop drains a month's budget)
11. Verified Recruiter-Agent Badge [similar to 20, 26, 30] → rewrite: **Agent Handshake Header for Client VMS**
12. Careers Page Pay-Per-Crawl for AI Job Agents
13. MFA Relay for Sourcing Agents [similar to 3, 19] → rewrite: **Human-in-the-Loop MFA Handoff Queue** (batches every stalled MFA prompt into one two-minute human pass)
14. Ghost Applicant Detector [similar to 4, 9] → rewrite: **Application Fingerprint Diff** (real resume text vs template-bot spam, side by side)
15. Auto-Apply Bot Blocker for Small Staffing Firms [safe: "blocker" framing is the crowded, obvious move] → rewrite: **Staffing Firm's Own Mini Trusted-Agent Protocol**
16. Submission Receipt Verifier [similar to 1, 8] → rewrite: **Cross-Portal Submission Notary**
17. Multi-VMS Login Orchestrator [similar to 1, 7, 21] → rewrite: **Credential Vault with Per-Client Consent Scopes**
18. Recruiter Agent Wallet [similar to 6, 10] → rewrite: **Client-Funded Sourcing Wallet with Real-Time Caps**
19. CAPTCHA-Aware Sourcing Queue [similar to 3, 13] → rewrite: **Wall-Type Triage Before Every Sourcing Run**
20. Trusted Agent Protocol for Job Boards [similar to 11, 26, 30] → rewrite: **Job-Board Agent Passport with Rate-Limited Trust Tiers**
21. Client Portal Session Watchdog [similar to 7, 17] → rewrite: **Dead-Session Resurrection Alert**
22. Candidate Agent Consent Ledger
23. Bulk Sourcing Cost Tracker Across Proxies [similar to 6, 18] → rewrite: **Proxy Waste Auditor: Cost-Per-Success, Not Cost-Per-Call**
24. AI Application Rate Limiter [similar to 4, 14] → rewrite: **Adaptive Throttle That Spares Real Candidates**
25. VMS Timeout Recovery Bot [safe: routine "recovery bot" framing] → rewrite: **Session Resurrection Service** (never lose a half-filled VMS form to a timeout again)
26. Agent-Readable Careers Page Standard [similar to 12, 20] → rewrite: **Machine-Readable careers.txt for Legit Sourcing Agents**
27. Spam Application Honeypot [safe: honeypots are an old, well-known idea] → rewrite: **Proof-of-Work Application Gate** (cheap for a real candidate, costly for a bot flood)
28. Real-Human Interview Scheduler Gate
29. Sourcing Agent Fleet Key Manager [similar to 18, 23] → rewrite: **Fleet-Wide Key Rotation with Per-Agent Attribution**
30. Job-Board Bot Allowlist Toggle [similar to 20, 26] → rewrite: **One-Click Bot Policy Panel for Careers Sites** (block, allow or charge, per bot type)

## Cards

---
id: s3-ideator-balanced-T6-01-r1#01
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
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
id: s3-ideator-balanced-T6-01-r1#02
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
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
id: s3-ideator-balanced-T6-01-r1#03
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
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
id: s3-ideator-balanced-T6-01-r1#04
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
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
id: s3-ideator-balanced-T6-01-r1#05
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
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
id: s3-ideator-balanced-T6-01-r1#06
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
---

# One-Click Bot Policy for Careers Sites

One-liner (≤20 words): Lets a non-technical recruiter block, allow or charge each type of bot hitting the careers page in one click.

Buyer and niche (≤25 words): Small staffing agency owners running their careers page on WordPress or Squarespace with no IT staff to configure bot rules.

Pain and evidence (≤40 words): Wordfence has no AI-bot allowlist toggle, and the Sept 2026 Cloudflare default forced every small site owner to review settings or risk losing search indexing while still leaking candidate resumes to scrapers. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A dashboard classifies incoming traffic into known AI crawlers, signed sourcing agents and unclassified bots, then lets the owner set one policy per category — block, allow free, or charge per fetch — and auto-writes the matching Cloudflare rule, no code required.

Why now (≤25 words): Cloudflare's mixed-use default block (15 Sept 2026) and pay-per-crawl tooling give small owners real levers to pull, if the panel is simple enough.

Demo moment (≤20 words): Live traffic map shows three bot types; owner clicks "charge" on one, next request gets a 402.

Business model (≤15 words): Flat monthly fee per site, tiered by traffic volume.

---
id: s3-ideator-balanced-T6-01-r1#07
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
---

# Cost-Per-Sourced-Candidate Ledger

One-liner (≤20 words): Tallies every proxy fee, CAPTCHA-solve and per-call payment against the candidates a sourcing agent actually found.

Buyer and niche (≤25 words): Staffing agency operations and finance staff paying separately for proxies, CAPTCHA solvers and per-call fees across many sourcing tools.

Pain and evidence (≤40 words): No tool aggregates spend across protocols — x402 moves the dollar, AP2 authorizes one purchase, none enforce a session budget — so agencies can't see true cost per candidate sourced across walled sites. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A metering layer wraps every sourcing agent call — proxy fetch, CAPTCHA solve, x402 micropayment — and logs the cost against each successful candidate profile pulled, rolling up to one "cost per sourced candidate" number per role instead of scattered vendor invoices.

Why now (≤25 words): x402 (2025) turned wall-crossing into metered per-call payments, but nothing aggregates them; a thin ledger layer closes that gap today.

Demo moment (≤20 words): Mock sourcing run against three walled sites; dashboard tallies real-time cost per successful profile pulled.

Business model (≤15 words): Percentage of tracked spend, capped at a flat fee per agency.

---
id: s3-ideator-balanced-T6-01-r1#08
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r1
---

# Thirty-Second Human Proof Before Scheduling

One-liner (≤20 words): A quick live voice check confirms an applicant is real before they take a scarce interview slot.

Buyer and niche (≤25 words): Recruiting coordinators whose calendars fill with interviews for auto-apply and AI-fabricated candidates who never show or can't answer basic questions.

Pain and evidence (≤40 words): Auto-apply bots flood pipelines the way crawlers flood FOSS sites, and agents themselves solve only 40% of human-verification challenges, showing today's proof-of-humanity gates are already weak in both directions. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before a scheduling link goes out, the candidate answers one screening question in a 30-second live voice exchange; instant transcription checks the answer against claimed resume experience, and only a coherent, matching response unlocks the coordinator's calendar.

Why now (≤25 words): gpt-realtime (GA Aug 2025) makes a natural 30-second speech-to-speech check cheap enough to run on every applicant before scheduling.

Demo moment (≤20 words): Live 30-second voice check runs on stage; a mismatched answer blocks the calendar invite instantly.

Business model (≤15 words): Per-applicant micro-fee, bundled free up to a monthly quota.

<!-- COMPLETE -->
