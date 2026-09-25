## Cards

---
id: s3-ideator-balanced-T6-02-r3#01
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
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
id: s3-ideator-balanced-T6-02-r3#02
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
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
id: s3-ideator-balanced-T6-02-r3#03
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
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
id: s3-ideator-balanced-T6-02-r3#04
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
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
id: s3-ideator-balanced-T6-02-r3#05
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r3
---

# Local False-Block Appeal Filer

One-liner (≤20 words): Spots real users caught by bot defenses in private server logs, then files the vendor's appeal form automatically.

Buyer and niche (≤25 words): School-district website admins whose bot-wall protection wrongly blocks parents, teachers or screen-reader users along with AI crawlers.

Pain and evidence (≤40 words; cite the pain dossier file): Bot defenses "might degrade access for users," break RSS readers and JS-hardened browsers, and have blocked entire countries; clearing each false positive means filing a vendor appeal form the admin rarely has time for. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A local tool watches the district's own server logs for blocked requests matching known browser or assistive-technology signatures, keeps that evidence on-prem, and when a pattern repeats, auto-fills and submits the CDN or bot-defense vendor's allowlist-appeal form with only the minimum request details needed. Full logs never leave district hardware.

Why now (≤25 words; name the specific capability): The default mixed-use crawler block (15 Sept 2026) forces every small site to actively manage appeals it never had to file before.

Demo moment (≤20 words): Three blocked screen-reader requests trigger an auto-submitted appeal form live, unblocking within the demo.

Business model (≤15 words): Flat monthly fee per site protected.

<!-- COMPLETE -->
