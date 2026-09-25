## Titles

1. Offboarding Proof Ledger
2. Verified-Agent Access Badge
3. Rostering Sync Watchdog `[similar to 1]`
4. CAPTCHA Overnight Handoff Queue
5. Crawler Toll Booth for District Sites
6. Student Directory Scrub Bot `[similar to 5]`
7. Vendor Crawler-Policy Auditor `[safe]`
8. Vendor Renewal Spend Guardrail
9. Task-Complete Certificate for IT Bots `[similar to 1]`
10. Summer Onboarding Wave Bot `[safe]`
11. Shadow Ed-Tech Discovery Agent `[safe]`
12. Bot-or-Buyer Badge for Ed-Tech Stores `[similar to out-of-scope checkout protocols]`
13. FERPA Crawler Allowlist `[similar to 5, 7]`
14. Vendor Terms Drift Alert
15. Two-Factor Relay for District Bots `[similar to 4]`
16. Consent Ledger for School Automation `[similar to 2]`
17. E-Rate Portal Poll Relief `[safe, off-territory]`
18. AI Crawler Cost Dashboard `[similar to 5]`
19. Agent Spend Session Cap `[similar to 8]`
20. Vendor Status Proof Capture
21. District Bot Triage Inbox `[similar to 5]`
22. Vendor ToS Change Alert `[similar to 14]`
23. CAPTCHA-Aware Task Queue `[similar to 4]`
24. Purchasing-Agent Identity Card `[similar to 12]`
25. Scrape-Proof Staff Directory `[similar to 6]`
26. Monday Sync Audit Report `[similar to 1, 9]`
27. Revocation Proof Pack `[similar to 1]`
28. Booster Site Crawler Shield `[safe, narrow]`
29. Shared Bot-Defense Co-op for Small Schools `[safe, weak demo]`
30. Cross-Protocol Agent Spend Ledger

### Rewrites of marked titles
- 3 → folded into **Offboarding Proof Ledger** (#1); rewritten as its own angle: **Vendor Status Proof Capture** (#20), which proves routine check-ins happened rather than sync completion.
- 6 → rewritten as **Crawler Toll Booth for District Sites** (#5), widened from "scrub student photos" to full bandwidth/cost/allow control, since the scrub-only framing was too narrow to demo.
- 7 → rewritten as **Vendor Terms Drift Alert** (#14), which watches for changes instead of a one-time audit, so it has a live event to demo.
- 9 → folded into **Offboarding Proof Ledger** (#1) as the verifier mechanism, not a separate product.
- 10 / 11 → dropped: generic bulk-account-creation RPA and shadow-IT discovery are not walled-web problems; no CAPTCHA, authorization or crawler angle to demo.
- 12 / 24 → dropped: this is checkout/catalog-protocol territory, explicitly out of scope for T6; the district-as-buyer angle is better served by **Vendor Renewal Spend Guardrail** (#8), which is about spend control, not telling bots from buyers at checkout.
- 13 / 18 / 21 → all folded into **Crawler Toll Booth for District Sites** (#5) as one dashboard rather than three overlapping tools.
- 15 → folded into **CAPTCHA Overnight Handoff Queue** (#4); MFA relay is one wall type among several the queue already handles.
- 16 → folded into **Verified-Agent Access Badge** (#2); a consent ledger with no verifiable identity behind it is not defensible after a court can call the access "unauthorized" anyway.
- 17 → dropped: E-Rate/grant portal polling is a government-filing problem (T4's territory), not an agent-vs-wall problem.
- 19 → folded into **Vendor Renewal Spend Guardrail** (#8).
- 22 → folded into **Vendor Terms Drift Alert** (#14).
- 23 → folded into **CAPTCHA Overnight Handoff Queue** (#4).
- 25 → folded into **Crawler Toll Booth for District Sites** (#5).
- 26 / 27 → folded into **Offboarding Proof Ledger** (#1); a weekly report and a revocation pack are both outputs of the same proof engine, not separate products.
- 28 / 29 → dropped: too narrow (one PTA site) or too weak to demo live in 48 hours (a co-op needs other members to show value).

### Best 8, developed as cards
1, 2, 4, 5, 8, 14, 20, 30

## Cards

---
id: s3-ideator-balanced-T6-02-r1#01
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Offboarding Proof Ledger

One-liner (≤20 words): Confirms a departed employee's access was actually removed everywhere, not just marked done.

Buyer and niche (≤25 words): District IT coordinators securing dozens of ed-tech vendor consoles after staff or student turnover, without a central directory.

Pain and evidence (≤40 words; cite the pain dossier file): Browser agents report success on failed runs almost half the time; IT coordinators must trust dozens of no-API offboarding steps with no proof of completion. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A browser agent logs into each vendor console with the coordinator's own session, checks whether the departed user's account is actually gone or disabled, screenshots the state, and lists any console where removal failed with a resend option.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5's computer-use mode reaches 61% on long browser tasks (Sept 2025), enough to check dozens of consoles unattended overnight.

Demo moment (≤20 words): Live run shows one vendor still listing a "removed" account, flags it, offers one-click re-revoke.

Business model (≤15 words): Per-seat SaaS subscription billed monthly per district, tiered by vendor count.

---
id: s3-ideator-balanced-T6-02-r1#02
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Verified-Agent Access Badge

One-liner (≤20 words): Gives a district's automation a verifiable identity so vendor sites treat it as authorized, not a scraper.

Buyer and niche (≤25 words): School-district IT coordinators running browser agents inside ed-tech vendor consoles bound by student-data agreements.

Pain and evidence (≤40 words; cite the pain dossier file): A court barred an agent browser from a user's own account for lacking site authorization even with user consent; IT coordinators fear the same exposure under student-data agreements. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The tool wraps each vendor login with a signed, revocable session credential and an audit trail of scope and consent, so a vendor's logs show an authenticated integration, not a spoofed browser, and the district can produce that trail during a data-privacy audit.

Why now (≤25 words; name the specific capability): Okta's Agent SSO (2026) gives agents first-class, governed identity separate from shared human credentials, letting the badge attach a real identity per login.

Demo moment (≤20 words): Screen shows a vendor audit log crediting the named badge, not a browser fingerprint spoof.

Business model (≤15 words): Flat monthly fee per district, scaled by number of connected vendors.

---
id: s3-ideator-balanced-T6-02-r1#03
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# CAPTCHA Overnight Handoff Queue

One-liner (≤20 words): Runs bulk vendor-portal chores overnight and hands only the CAPTCHA-stuck ones to a human at 8am.

Buyer and niche (≤25 words): District IT coordinators who must touch 30-plus ed-tech vendor consoles nightly for license and roster upkeep.

Pain and evidence (≤40 words; cite the pain dossier file): The best browser agents solve only 40% of CAPTCHAs against 93% for humans, so every automated run stalls somewhere and a human has to step in. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A browser agent works down a nightly task list across vendor consoles; whenever it meets a CAPTCHA or 2FA wall it saves state, screenshots the wall, and queues a two-click resume link the coordinator opens each morning to finish just those steps.

Why now (≤25 words; name the specific capability): Claude for Chrome already automates routine browser chores inside the user's own logged-in session, so only CAPTCHA-stuck steps ever need a human.

Demo moment (≤20 words): Morning queue shows three CAPTCHA-stuck vendors ready to finish with one click each.

Business model (≤15 words): Per-seat monthly subscription for the district IT office.

---
id: s3-ideator-balanced-T6-02-r1#04
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Crawler Toll Booth for District Sites

One-liner (≤20 words): Lets a small district website block, allow or charge AI crawlers without breaking real visitors.

Buyer and niche (≤25 words): School-district IT coordinators running the public district website on a shared hosting budget with no security staff.

Pain and evidence (≤40 words; cite the pain dossier file): Small independent sites report hundreds of dollars a month in crawler bandwidth and outages, while blunt blocking tools break real users like RSS readers and screen readers. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A dashboard classifies incoming crawler traffic by declared identity and behavior, applies pay-per-crawl rules to recognized AI bots, lets known search and accessibility tools through, and shows the coordinator a weekly bandwidth-and-cost report with one override switch per bot.

Why now (≤25 words; name the specific capability): Cloudflare's mixed-use crawler block became the default on ad-bearing pages from 15 Sept 2026, forcing every small site owner to actively configure who passes.

Demo moment (≤20 words): Dashboard flips one bot from "blocked" to "charged" and shows the new monthly toll.

Business model (≤15 words): Flat monthly fee per site, plus a small share of collected crawl fees.

---
id: s3-ideator-balanced-T6-02-r1#05
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Vendor Renewal Spend Guardrail

One-liner (≤20 words): Caps what an automated renewal or status-polling loop can spend before it needs human approval.

Buyer and niche (≤25 words): District IT coordinators automating license renewals and status checks across many ed-tech vendor stores and portals.

Pain and evidence (≤40 words; cite the pain dossier file): Per-call payments have no cap across a sequence of calls; a short polling loop can turn into dozens of charges with nothing built in to stop it. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The tool sits between the district's payment method and any agent-driven vendor purchase or polling call, enforcing a per-session dollar and call-count ceiling, pausing and texting the coordinator for approval as a job nears its limit, and logging every charge against the task that caused it.

Why now (≤25 words; name the specific capability): Per-call micropayment rails move money per request but leave the cap to whatever sits above them, so districts need their own guardrail layer.

Demo moment (≤20 words): A simulated retry storm hits the cap mid-run and pauses, texting the coordinator for a decision.

Business model (≤15 words): Small monthly fee plus a basis-point cut of the spend it guards.

---
id: s3-ideator-balanced-T6-02-r1#06
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Vendor Terms Drift Alert

One-liner (≤20 words): Watches each ed-tech vendor's access terms and flags the day existing automation becomes unauthorized.

Buyer and niche (≤25 words): District IT coordinators whose browser automation must stay inside vendor terms of service and student-data agreements at all times.

Pain and evidence (≤40 words; cite the pain dossier file): Owners cannot easily signal which automation is allowed, and a single authorization ruling can retroactively outlaw an integration; IT staff currently get no early warning of the change. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The service periodically fetches each connected vendor's terms-of-service, robots.txt and API-access pages, diffs them against the last approved baseline, uses a language model to summarize any clause change affecting automated or agent access, and emails the coordinator before the next automated run touches that vendor.

Why now (≤25 words; name the specific capability): Cheap large-context models make it affordable to re-read and diff full vendor terms pages daily instead of skimming them once at signup.

Demo moment (≤20 words): An inserted "no automated access" clause triggers an instant email alert with the changed line highlighted.

Business model (≤15 words): Monthly subscription priced per vendor tracked.

---
id: s3-ideator-balanced-T6-02-r1#07
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Vendor Status Proof Capture

One-liner (≤20 words): Turns routine vendor-portal check-ins into timestamped, screenshot evidence for security and grant audits.

Buyer and niche (≤25 words): District IT coordinators who must prove vendor uptime, security-setting and license checks happened for compliance audits.

Pain and evidence (≤40 words; cite the pain dossier file): Agent claims of a completed check cannot be trusted at face value; auditors want proof, not a log line, that each portal was actually reviewed on schedule. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A browser agent visits each vendor's status, security-settings or license page on a schedule, captures a timestamped screenshot plus extracted key values, stores them in an append-only log, and assembles them into an auditor-ready packet on request instead of a bare "checked" checkbox.

Why now (≤25 words; name the specific capability): Production browser agents like Claude for Chrome and Skyvern can now navigate and extract from dozens of distinct vendor consoles unattended.

Demo moment (≤20 words): One click produces a PDF audit packet with ten dated vendor screenshots.

Business model (≤15 words): Per-district subscription tiered by number of vendors monitored.

---
id: s3-ideator-balanced-T6-02-r1#08
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r1
---

# Cross-Protocol Agent Spend Ledger

One-liner (≤20 words): One ledger totals what a district's automation actually spent across every payment rail it touches.

Buyer and niche (≤25 words): District IT and business-office staff reconciling automated vendor purchases and renewals against tight public-fund audits.

Pain and evidence (≤40 words; cite the pain dossier file): No single protocol tracks a session's total spend across payment rails, so integrators share keys across bots and nobody sees the aggregate exposure until the bill arrives. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The ledger ingests transaction events from whichever payment rail each vendor integration uses, tags every charge to the task and agent that made it, rolls charges into one per-district total by day and vendor, and flags any charge with no matching authorized task.

Why now (≤25 words; name the specific capability): Card-network agent tokens and per-call payment rails now run side by side with no shared spend view, a gap already named by integrators.

Demo moment (≤20 words): Dashboard reconciles three simulated payment rails into one flagged total in seconds.

Business model (≤15 words): Monthly subscription billed to the district business office.

<!-- COMPLETE -->
