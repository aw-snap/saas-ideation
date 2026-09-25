---
id: I-3076
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r2
raw_id: s3-ideator-novel-T3-02-r2#02
merged: []
---

# E-Invoice Bridge for Property SoRs

One-liner (≤20 words): Turns machine-only e-invoices vendors now send into ledger entries inside a property system that can't read them.

Buyer and niche (≤25 words): European property managers on AppFolio or Yardi, receiving structured e-invoices from vendors under new national mandates this year.

Pain and evidence (≤40 words; cite the pain dossier file): "Credit card transactions still have to be entered manually" on AppFolio; the vertical system offers no live write path, only batch flat-file export for outside data. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent extracts fields from an incoming structured e-invoice, confirms the sender's network registration is actually active rather than assumed, matches the bill to its purchase order, and writes the coded entry directly into AppFolio's or Yardi's own ledger screens, no export step.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (Dec 2025) parses structured and scanned invoice formats at $2 per 1,000 pages, cheap enough for every vendor bill.

Demo moment (≤20 words): A raw structured invoice file drops in; seconds later the ledger shows a coded, matched entry with registration confirmed.

Business model (≤15 words): Per-property-manager subscription, $99 monthly, undercutting a dedicated e-invoice access-point fee.

---
id: I-3077
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T3-02-r2
raw_id: s3-ideator-novel-T3-02-r2#04
merged: []
---

# Dealer Parts Agent Checkout

One-liner (≤20 words): A dealership orders parts through real agent checkout instead of paying a per-rooftop system integration toll.

Buyer and niche (≤25 words): Dealer group parts managers on CDK or Reynolds, paying monthly certification fees just to connect one parts-ordering tool.

Pain and evidence (≤40 words; cite the pain dossier file): Certification for a connected parts tool runs "$30,000 upfront... plus roughly $200/mo/rooftop"; one dealer called the pricing model "a blatant extortion racket." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The agent reads low-stock parts off the dealer system's own parts screen, places the order directly with any supplier offering chat-native checkout, skipping the paid ordering module entirely, then writes the resulting invoice back into the system's parts ledger through the screen so records stay accurate.

Why now (≤25 words; name the specific capability): The Agentic Commerce Protocol is live with real merchants since September 2025, letting an agent buy without a per-rooftop integration.

Demo moment (≤20 words): A low-stock part triggers a real chat checkout; the parts ledger updates from the screen seconds later, no toll paid.

Business model (≤15 words): Flat $300 per rooftop monthly, well under the per-tool toll it replaces.

---
id: I-3078
track: novel
lineage: seed-atom-hybrid
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-novel-T3-02-r2
raw_id: s3-ideator-novel-T3-02-r2#05
merged: []
---

# Migration Invoice-Trail Guardian

One-liner (≤20 words): During a system migration, an agent also rescues every legally-required invoice record staff would otherwise delete.

Buyer and niche (≤25 words): Dental office managers migrating between practice-management systems, receiving e-invoices from supply vendors that carry an 8-year retention duty.

Pain and evidence (≤40 words; cite the pain dossier file): Migrations bring "surprise fees and data loss," including one transfer where staff "basically had to start from scratch on everything." (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Before each migration step, the agent shows the office manager evidence of what it found — every original invoice file buried in email or the old system, not just a printed copy — and archives it with one-click undo, so a rushed migration never destroys a legally required record.

Why now (≤25 words; name the specific capability): Desktop computer-use agents (61.4% OSWorld, Sept 2025) inspect old-system files and mailboxes reliably enough to catch what a rushed staffer misses.

Demo moment (≤20 words): Simulate a migration; the agent surfaces a buried invoice file about to be overwritten and archives it before staff approve the next step.

Business model (≤15 words): One-time $500 add-on to any migration project, sold by the outgoing or incoming vendor.

---
id: I-3079
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
raw_id: s3-ideator-balanced-T6-02-r3#01
merged: []
---

# Local Vendor Deletion-Form Filer

One-liner (≤20 words): An on-prem agent fills and submits each vendor's walled data-deletion form without student data ever leaving the building.

Buyer and niche (≤25 words): School-district IT coordinators who must submit a CAPTCHA- and login-gated deletion request to every ed-tech vendor after a student or staff member leaves.

Pain and evidence (≤40 words; cite the pain dossier file): Vendor deletion forms sit behind the same walls that stall browser agents (best solver: 40% of CAPTCHAs versus 93% for humans), and routing student rosters through a cloud tool to fill them risks both a leak and legal exposure. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): An open-weight GUI agent running on the coordinator's own laptop NPU reads the local departure roster, drives the browser to each vendor's deletion-request form, fills only required fields, solves the CAPTCHAs it can and queues the rest, submits, and logs a receipt. Roster data and reasoning never leave district hardware.

Why now (≤25 words; name the specific capability): Open-weight UI-TARS-2 GUI agents plus Copilot+ PC NPUs (40-50 TOPS) run a full browser-filling loop entirely on-device, with no cloud vendor in the loop.

Demo moment (≤20 words): The agent fills and submits a live deletion form while a network monitor shows only the final POST leaving.

Business model (≤15 words): Per-seat subscription per district, priced by number of vendors tracked.

---
id: I-3080
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
raw_id: s3-ideator-balanced-T6-02-r3#02
merged: []
---

# Local Crawler-Allowlist Form Filer

One-liner (≤20 words): Classifies bot traffic from the district's own server logs, then submits the resulting allow-or-charge settings form on its own.

Buyer and niche (≤25 words): School-district website admins deciding which crawlers to allow, block or charge under a host's or CDN's new AI-bot settings form.

Pain and evidence (≤40 words; cite the pain dossier file): Since the default mixed-use crawler block, owners must configure per-bot settings themselves but "there is no AI bot allowlist toggle" and crawlers "look almost identical" to malicious scrapers, so getting it wrong risks lost indexing. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A small on-device model classifies the district's own access logs into search, accessibility, AI-crawler and unknown-bot categories using rules the admin sets once, decides an allow, charge or block action per category, and drives a browser to submit the CDN's crawler-settings form. Raw logs never leave district hardware.

Why now (≤25 words; name the specific capability): Cheap on-device models (Gemma 3, gpt-oss-20b) classify traffic locally and continuously, cheap enough to run on an office laptop.

Demo moment (≤20 words): A new crawler in the log gets classified "AI, pay-per-crawl" and the toggle auto-submits live.

Business model (≤15 words): Flat monthly fee per district website protected.

---
id: I-3081
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
raw_id: s3-ideator-balanced-T6-02-r3#03
merged: []
---

# Local Verified-Merchant Enrollment Filer

One-liner (≤20 words): Enrolls the district's booster-club store in card-network agent-verification programs using only locally kept fraud history.

Buyer and niche (≤25 words): District IT coordinators supporting a booster club or PTA online store hit by card-testing bots, without a budget for enterprise fraud tools.

Pain and evidence (≤40 words; cite the pain dossier file): Card-testing bursts leave a "pile of fraudulent orders" and scalper bots checkout in under two seconds, but advanced bot protection only comes on plans priced above what a small school store can afford. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A local agent reads the store's own order and chargeback history stored on the district's server, prepares the card network's agent-verification enrollment fields locally, drives the browser to the network's merchant onboarding form, and submits it. Only the aggregate figures the form requires ever leave the building.

Why now (≤25 words; name the specific capability): Visa and Mastercard's Trusted Agent Protocol and Agent Pay enrollment forms are rolling out through 2026 but remain a manual web application few small merchants complete.

Demo moment (≤20 words): The agent auto-fills and submits the network's enrollment form live using only locally aggregated fraud stats.

Business model (≤15 words): One-time enrollment fee plus small monthly monitoring fee.

---
id: I-3082
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
raw_id: s3-ideator-balanced-T6-02-r3#04
merged: []
---

# Local Vendor Reauthorization Filer

One-liner (≤20 words): Watches a private scope log and refiles a vendor's access-reauthorization form the moment terms drift out of date.

Buyer and niche (≤25 words): District IT coordinators running browser automation against ed-tech vendor consoles bound by student-data agreements that change mid-year.

Pain and evidence (≤40 words; cite the pain dossier file): A single ruling found that user consent does not equal site authorization, so a vendor's own updated integration-partner terms can retroactively make existing district automation unauthorized until the access form is resubmitted. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A local watcher keeps the district's own automation-scope log (which tasks touch which vendor, since when) entirely on-prem, diffs it nightly against each vendor's published terms, and the moment scope has drifted, auto-fills and resubmits that vendor's reauthorization or API-access application before the next scheduled run touches it.

Why now (≤25 words; name the specific capability): Cheap long-context inference makes it affordable to diff full vendor terms pages against a private scope log every night, not just at signup.

Demo moment (≤20 words): A simulated terms change triggers an automatic same-night resubmission of the vendor's reauthorization form, logged locally.

Business model (≤15 words): Monthly subscription priced per vendor tracked.

---
id: I-3083
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
raw_id: s3-ideator-balanced-T6-02-r3#05
merged: []
---

# Local False-Block Appeal Filer

One-liner (≤20 words): Spots real users caught by bot defenses in private server logs, then files the vendor's appeal form automatically.

Buyer and niche (≤25 words): School-district website admins whose bot-wall protection wrongly blocks parents, teachers or screen-reader users along with AI crawlers.

Pain and evidence (≤40 words; cite the pain dossier file): Bot defenses "might degrade access for users," break RSS readers and JS-hardened browsers, and have blocked entire countries; clearing each false positive means filing a vendor appeal form the admin rarely has time for. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A local tool watches the district's own server logs for blocked requests matching known browser or assistive-technology signatures, keeps that evidence on-prem, and when a pattern repeats, auto-fills and submits the CDN or bot-defense vendor's allowlist-appeal form with only the minimum request details needed. Full logs never leave district hardware.

Why now (≤25 words; name the specific capability): The default mixed-use crawler block (15 Sept 2026) forces every small site to actively manage appeals it never had to file before.

Demo moment (≤20 words): Three blocked screen-reader requests trigger an auto-submitted appeal form live, unblocking within the demo.

Business model (≤15 words): Flat monthly fee per site protected.

---
id: I-3084
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r3
raw_id: s3-ideator-balanced-T7-02-r3#01
merged: []
---

# CiteCert Stamp API

One-liner (≤20 words): An API that takes a draft brief and returns a print-ready, signable citation-verification certificate for the court file.

Buyer and niche (≤25 words): Legal practice-management and e-filing software vendors who want to add citation verification without building any interface of their own.

Pain and evidence (≤40 words; cite the pain dossier file): GenAI standing orders now require certifying that citations were verified, and rules differ by judge; sanctions already run to $59,500 for filing unchecked fakes. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): One POST call with the brief text returns a formatted PDF listing every citation, its verification status against full case text, and a signature block matching that judge's disclosure wording, ready to print, sign by hand and staple to the physical filing. No dashboard exists.

Why now (≤25 words; name the specific capability): Cheap 1M-token context makes reading every cited opinion in full affordable per API call, not just per subscription.

Demo moment (≤20 words): curl a real sanctioned brief at the API; a printed certificate lands in the tray naming the fabricated case.

Business model (≤15 words): Per-call metered pricing billed to the integrating software vendor.

---
id: I-3085
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r3
raw_id: s3-ideator-balanced-T7-02-r3#02
merged: []
---

# Repro Certificate API

One-liner (≤20 words): An API that reproduces a submitted vulnerability report and returns a printable pass/fail certificate, nothing else.

Buyer and niche (≤25 words): Bug-bounty platforms and ticketing systems that want automated reproduction wired into their existing pipeline, not a new console to staff.

Pain and evidence (≤40 words; cite the pain dossier file): curl found "not even one in twenty" reports real; each still costs 30 minutes to hours of a maintainer's time before it can be closed. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The ticketing system posts the report and a repo pointer; the service spins up a disposable sandbox, attempts the exploit, and returns a one-page PDF certificate stating what ran, what happened and the verdict, formatted for the paper audit trail some foundations require for legal or insurance purposes.

Why now (≤25 words; name the specific capability): Cheap sandboxed compute plus long-context code reading makes automated per-report reproduction affordable at platform scale.

Demo moment (≤20 words): Post a fake report citing a nonexistent function; the returned certificate prints "FAILED: function not found."

Business model (≤15 words): Per-report fee charged to the platform, undercut against a triager's hourly cost.

---
id: I-3086
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r3
raw_id: s3-ideator-balanced-T7-02-r3#04
merged: []
---

# Slop Rejection Notice API

One-liner (≤20 words): An API that turns a debunked CVE or vulnerability submission into a printable, citable rejection notice.

Buyer and niche (≤25 words): CVE numbering authorities and corporate program backends that need an official paper trail before banning or blocking a repeat false submitter.

Pain and evidence (≤40 words; cite the pain dossier file): Fabricated SQLite CVEs called "complete garbage" reached the official record; NVD now enriches only 15-20% of incoming CVEs, rationing review of a 27,000-deep backlog. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The CVE intake system posts the submission and repo reference; the API checks referenced files, functions and commit hashes against the real codebase and returns a formatted, quote-backed rejection notice as a PDF, suitable for printing into the case file some programs keep to justify submitter bans.

Why now (≤25 words; name the specific capability): Cheap long-context code comparison makes checking every referenced commit hash against the real repo affordable at backlog scale.

Demo moment (≤20 words): Post one of the fabricated SQLite-style CVE claims; the printed notice quotes the exact missing function.

Business model (≤15 words): Per-submission fee paid by the numbering authority or platform.

---
id: I-3087
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r3
raw_id: s3-ideator-balanced-T7-02-r3#05
merged: []
---

# Demand Letter Seal API

One-liner (≤20 words): An API that checks an AI-drafted demand letter's codes and dates against the medical record, returning a printable compliance seal.

Buyer and niche (≤25 words): Personal-injury case-management software vendors whose AI drafts demand letters that get mailed to insurers with mismatched diagnosis codes.

Pain and evidence (≤40 words; cite the pain dossier file): ICD codes and dates in AI-drafted demand letters do not match the medical records; 37% of personal-injury lawyers already use generative AI to draft them. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): The case-management system posts the drafted letter and the medical record; the API checks every ICD code, date and dollar figure against the source, then returns a one-page PDF seal listing any mismatch, printed and mailed alongside the demand letter itself as proof of pre-mailing verification.

Why now (≤25 words; name the specific capability): Cheap long-context matching plus document extraction make full-record cross-checking affordable per letter, not per case.

Demo moment (≤20 words): Post a letter with one wrong ICD code; the printed seal circles the mismatch against the record.

Business model (≤15 words): Per-letter API fee billed to the case-management software vendor.

---
id: I-3088
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
raw_id: s3-ideator-balanced-T3-02-r2#01
merged: []
---

# Vendor Hold-Queue Call Agent

One-liner (≤20 words): Calls system-of-record support lines, sits on hold, and confirms the fix actually landed before closing the ticket.

Buyer and niche (≤25 words): Dental, vet and pharmacy office managers who depend on Dentrix, Cornerstone or PioneerRx support desks for every system problem.

Pain and evidence (≤40 words; cite the pain dossier file): Dentrix and Cornerstone support leaves staff on hold "longer than 30 minutes," and some have "called and emailed for weeks trying to get help" while the practice's system stays broken. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A voice agent dials support, navigates the phone tree, states the issue and stays on hold so staff don't have to. Before closing the ticket it re-checks the actual system state instead of trusting the vendor's word, because agents that report a fix "resolved" are often wrong.

Why now (≤25 words; name the specific capability): ElevenLabs Conversational AI gives a small team a production hosted voice-agent stack (speech, LLM, telephony) without building one.

Demo moment (≤20 words): Call a mock support line live, sit through hold music, then confirm the fix against a sample system state.

Business model (≤15 words): Per-practice monthly subscription, priced by number of connected vendor support lines.

---
id: I-3089
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
raw_id: s3-ideator-balanced-T3-02-r2#02
merged: []
---

# Screen-Agent Write Auditor

One-liner (≤20 words): Independently confirms that a screen agent's write into a locked vertical system of record actually happened.

Buyer and niche (≤25 words): Practice managers and ISVs running automations against Cornerstone, Dentrix or AMS360 to eliminate manual re-keying.

Pain and evidence (≤40 words; cite the pain dossier file): Staff already "waste literal hours" re-keying by hand into Cornerstone and do "double and triple entry" across AMS360 and rating tools; a silently failed automated write is worse than none. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): After any screen agent files a record into Dentrix, Cornerstone or AMS360, this tool reopens the target screen, reads the field back and diffs it against the intended value, because production computer-use runs report false "success" on nearly half of real failures, then reopens the task if it doesn't match.

Why now (≤25 words; name the specific capability): Cheap document and screen extraction (about $2 per 1,000 pages) makes reading back and diffing every write affordable to run continuously.

Demo moment (≤20 words): A mock write silently fails; the auditor catches the mismatch and reopens the task instead of marking it done.

Business model (≤15 words): Add-on fee per automated write, sold alongside any screen-agent system-of-record integration.

---
id: I-3090
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
raw_id: s3-ideator-balanced-T3-02-r2#03
merged: []
---

# CAPTCHA Escalation Relay

One-liner (≤20 words): When a screen agent hits a CAPTCHA or login wall inside a locked system of record, it phones the staffer to clear it in seconds.

Buyer and niche (≤25 words): Practice managers and dealer-group staff running data-extraction or migration automations against Dentrix, PioneerRx or Yardi.

Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx access "goes through a manual vendor-inquiry form" and sits "behind authentication," and Dentrix blocks whole "protected" categories, so automated fetches keep tripping login and verification walls mid-run. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): The automation always runs under the staffer's own logged-in session, never a spoofed identity, because acting inside an account without the site's own authorization has already triggered legal action elsewhere. When it meets a CAPTCHA or MFA prompt, it calls the staffer's phone with a synthesized alert and a one-tap approval, then resumes.

Why now (≤25 words; name the specific capability): ElevenLabs Conversational AI places an outbound voice alert in minutes; the best browser agents alone still solve only 40% of CAPTCHAs.

Demo moment (≤20 words): The automation hits a CAPTCHA on a mock portal, phones a staff line live, and resumes after one tap.

Business model (≤15 words): Per-seat monthly fee for practices or dealer groups running any locked-portal automation.

---
id: I-3091
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r2
raw_id: s3-ideator-balanced-T3-02-r2#04
merged: []
---

# Spend Governor for Locked-Portal Agent APIs

One-liner (≤20 words): Caps and tracks spend when your own agents call per-request APIs sitting in front of locked system-of-record portals.

Buyer and niche (≤25 words): ISVs and integration teams whose internal agents poll screen-agent-exposed Dentrix, PioneerRx or Yardi endpoints on a per-call basis.

Pain and evidence (≤40 words; cite the pain dossier file): Dentrix Ascend overage runs $0.0018 per call on top of a $5,000 registration fee, so an agent stuck in a retry or polling loop against a locked system of record can burn budget with nobody watching. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): A proxy sits between every internal agent and each screen-agent-exposed endpoint, sets a hard per-session and per-day spend cap, and gives one dashboard across all connected verticals, because today's per-call payment rails move the money but don't track a budget or enforce limits across a whole sequence of calls.

Why now (≤25 words; name the specific capability): Skyvern and browser-use already expose locked portals as callable APIs; nothing yet meters what an agent spends calling them.

Demo moment (≤20 words): A polling loop makes its 25th call past the cap; the governor blocks it and shows live spend.

Business model (≤15 words): Percentage of metered spend, plus a flat monthly platform fee.

---
id: I-3092
track: balanced
lineage: seed-atom-hybrid
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: [A-seed-05-mech-3, A-seed-05-insight-1]
source_task: s3-ideator-balanced-T3-02-r2
raw_id: s3-ideator-balanced-T3-02-r2#05
merged: []
---

# Safe-Write Agent for Legacy Practice Systems

One-liner (≤20 words): Every automated write into a locked practice system takes a restore point first, so a bad write can be undone in one click.

Buyer and niche (≤25 words): Vet techs, insurance CSRs and dental staff running screen agents to file lab results, cancellations or patient records automatically.

Pain and evidence (≤40 words; cite the pain dossier file): Cornerstone needs "copy/paste to move patients between department schedules," and a cancellation that missed Applied Epic caused a reported "$42,000 policy loss," so an unsupervised automated write carries real financial risk. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): Before any screen agent writes into Cornerstone, AMS360 or Dentrix, the tool snapshots the target record as a restore point and shows staff exactly what will change. If the write turns out wrong days later — a cancellation missed, a value overwritten — one click restores the prior state.

Why now (≤25 words; name the specific capability): Desktop computer-use agents can now execute the write step itself; pairing every write with a snapshot closes the risk that creates.

Demo moment (≤20 words): A wrong write into a mock record is restored to its prior state with one click.

Business model (≤15 words): Per-seat monthly fee, bundled with any screen-agent system-of-record integration.

---
id: I-3093
track: novel
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: [A-seed-05-mech-2, A-seed-05-insight-1]
source_task: s3-ideator-novel-T7-02-r2
raw_id: s3-ideator-novel-T7-02-r2#01
merged: []
---

# Privileged Cite Bench

One-liner (≤20 words): Checks every citation in a brief against real case text on the lawyer's own laptop, nothing leaves the machine.

Buyer and niche (≤25 words): Solo and small-firm litigators drafting motions who cannot risk both a fabricated-citation sanction and a privilege waiver.

Pain and evidence (≤40 words; cite the pain dossier file): Fabricated citations cost one firm $59,500; separately, a federal ruling held AI-drafted material sent to a cloud tool was not privileged, so a cloud cite-checker recreates the same exposure it claims to fix. (src: outputs/s3-ideate/pain/T7-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local open-weight model reads the draft brief and a locally cached case-law corpus, checks each citation's holding and quote against the real opinion, and shows the actual case text as evidence next to any citation it cannot confirm, without the brief ever leaving the device.

Why now (≤25 words; name the specific capability): Open-weight gpt-oss-20b fits a 16GB laptop, so a full cite-check runs without a cloud call that would itself waive privilege.

Demo moment (≤20 words): Feed a brief with one fabricated case on a disconnected laptop; the bad citation is flagged with the real text shown.

Business model (≤15 words): Flat monthly license per solo attorney, priced below one manual cite-check.

---
id: I-3094
track: novel
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [A-seed-03-mech-1]
source_task: s3-ideator-novel-T7-02-r2
raw_id: s3-ideator-novel-T7-02-r2#02
merged: []
---

# Field Adjuster Echo

One-liner (≤20 words): An adjuster narrates a damage site aloud; a live voice agent cross-checks it against the carrier's AI claim summary.

Buyer and niche (≤25 words): Independent claims adjusters and small adjusting firms who must catch a carrier's hallucinated AI summary before they sign off.

Pain and evidence (≤40 words; cite the pain dossier file): Carrier AI hallucinates on "a smudge on a document" and can leave out a detail that changes a payout; the adjuster "bears the brunt" of the error, and 98% of adjusters' AI-related reviews are negative. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): While the adjuster walks the site narrating findings aloud, a native-audio agent listens live, builds a spoken fact ledger, and speaks up the moment the carrier's pre-loaded AI summary contradicts what the adjuster is describing on-site, so a mismatch is caught before the file closes.

Why now (≤25 words; name the specific capability): Gemini Live native audio gives 120-180ms round trips, fast enough to interrupt mid-walkthrough instead of flagging errors after the fact.

Demo moment (≤20 words): Adjuster narrates a dented bumper; the agent speaks up instantly when the loaded summary claims "no visible damage."

Business model (≤15 words): Per-seat subscription to adjusting firms, priced per claim reviewed on-site.

---
id: I-3095
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r2
raw_id: s3-ideator-novel-T7-02-r2#03
merged: []
---

# On-Prem Exploit Bench

One-liner (≤20 words): Reproduces AI-drafted vulnerability reports against proprietary code entirely inside the company's own network, never in a public cloud.

Buyer and niche (≤25 words): Internal security teams at regulated companies whose private bug-bounty programs cannot send source code off-premises for triage.

Pain and evidence (≤40 words; cite the pain dossier file): Bounty programs are being flooded (Elastic: 1,390 reports in half a year, about 70% rejected before reproduction, 30-60 minutes of analyst time each); regulated codebases add a constraint no public triage cloud can meet. (src: outputs/s3-ideate/pain/T7-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Running entirely on the company's own servers, an open-weight model checks out the exact internal commit, attempts to reproduce the AI-drafted exploit in a disposable local container, and returns a pass or fail verdict with the failed run log, so no code or report ever reaches a third-party triage service.

Why now (≤25 words; name the specific capability): gpt-oss-120b runs on a single on-prem 80GB GPU, keeping the whole judge-and-reproduce loop inside the company firewall.

Demo moment (≤20 words): Submit one real and one fabricated-function report against a sample private repo on an air-gapped laptop; verdicts return with no outbound call.

Business model (≤15 words): Annual enterprise license per internal bounty program protected.

---
id: I-3096
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r2
raw_id: s3-ideator-novel-T7-02-r2#04
merged: []
---

# Session Truth Ledger

One-liner (≤20 words): Builds a live, spoken fact ledger during a therapy session, then flags anything the AI note invents afterward.

Buyer and niche (≤25 words): Solo therapists using AI scribes who must catch fabricated content before it enters the permanent clinical record.

Pain and evidence (≤40 words; cite the pain dossier file): Incumbent AI scribes "make things up that are not said in the session," with users reporting "major errors throughout the day every day," yet nothing checks the note against what was actually said. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A native-audio agent listens alongside the existing AI scribe during the live session, keeping a running ledger of what was actually said, kept only for the session's length; once the scribe drafts its note, the ledger checks every clinical claim against itself and highlights any sentence with no matching statement.

Why now (≤25 words; name the specific capability): Gemini Live native audio processes a full session continuously at low latency, with no transcription backlog to catch up on.

Demo moment (≤20 words): Run a sample session where the scribe invents a detail; the ledger flags that exact sentence right after the note drafts.

Business model (≤15 words): Per-therapist monthly add-on, sold alongside any existing AI scribe.

---
id: I-3097
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r2
raw_id: s3-ideator-novel-T7-02-r2#05
merged: []
---

# On-Device Return Check

One-liner (≤20 words): Cross-checks an AI-drafted tax return against W-2s and 1099s entirely on the preparer's own laptop, no cloud disclosure.

Buyer and niche (≤25 words): Solo CPAs and EAs preparing returns who cannot paste client tax data into cloud AI without a signed consent per vendor.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into a personal cloud AI account without consent risks a $1,000 fine and up to a year in prison per violation, yet manual keying of W-2s and 1099s drives 80+ hour tax-season weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local open-weight model reads scanned W-2s and 1099s on the preparer's own machine, extracts every figure, then checks each line of an AI-drafted return against those source figures, flagging any mismatch before filing, with no client data leaving the laptop or triggering a disclosure requirement.

Why now (≤25 words; name the specific capability): gpt-oss-20b fits 16GB of RAM, running extraction and cross-check locally at tax-season volume with no cloud bill or disclosure exposure.

Demo moment (≤20 words): Feed scanned W-2s and a draft return with one wrong wage figure; the mismatch is flagged instantly, offline.

Business model (≤15 words): Seasonal subscription per preparer, cheaper than a seasonal data-entry temp.

<!-- COMPLETE -->
