## Cards

---
id: s3-ideator-novel-T1-02-r2#01
track: novel
lineage: seed-atom-hybrid
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: [A-seed-03-mech-1, A-seed-03-insight-1]
source_task: s3-ideator-novel-T1-02-r2
---

# Portal Knowledge That Outlives Staff

One-liner (≤20 words): A departing biller narrates portal quirks once; the agent turns it into a durable, visual runbook for every payer site.

Buyer and niche (≤25 words): Rural clinic office managers and IT techs who lose payer-portal know-how every time a biller or front-desk staffer leaves.

Pain and evidence (≤40 words; cite the pain dossier file): Payer portals migrate on their own schedule, forcing retraining, while elsewhere compliance knowledge "leaves with that person" when staff turn over, with no shared record of either. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): Before leaving, a staffer walks through each payer portal narrating what each screen means; the agent segments and tags every field by concept, binding the narration to a persistent visual map. New hires and the overnight agent both reference the same tagged runbook, immune to logins or redesigns.

Why now (≤25 words; name the specific capability): SAM 3 segments and tracks any UI concept from a text prompt at 75-80% of human accuracy [TC-34].

Demo moment (≤20 words): Narrate a portal walkthrough once; watch the agent tag every field, then reuse the map on a redesigned mock portal.

Business model (≤15 words): Per-practice setup fee plus a monthly fee per portal runbook maintained.

---
id: s3-ideator-novel-T1-02-r2#02
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-02-r2
---

# Two Deadlines, One Rural Clinic

One-liner (≤20 words): One agent tracks both payer prior-authorization clocks and the nonprofit clinic's own federal filing deadline.

Buyer and niche (≤25 words): Office managers at nonprofit rural health clinics juggling payer prior-authorization queues and the clinic's own IRS filing obligations.

Pain and evidence (≤40 words; cite the pain dossier file): 39 prior-auth requests per physician weekly consume staff, while a missed e-Postcard silently revokes tax exemption after three years, a fate hundreds of thousands of small nonprofits already suffered. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The agent runs the nightly payer-portal sweep and separately watches the clinic's IRS and state filing calendar, reading confirmation banners and due-date text on both kinds of site regardless of layout, then merges everything into one dollar- and risk-ranked morning list for the office manager.

Why now (≤25 words; name the specific capability): SAM 3's concept-based tracking reads confirmation and deadline text on any site layout without custom scraping code [TC-34].

Demo moment (≤20 words): Morning brief shows a stalled prior-auth needing escalation next to an e-Postcard due in nine days, both auto-verified.

Business model (≤15 words): Flat monthly fee per clinic, tiered by portals and filings tracked.

---
id: s3-ideator-novel-T1-02-r2#03
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T1-02-r2
---

# Proof It Actually Went Through

One-liner (≤20 words): Tracks the on-screen confirmation moment itself, so a filing that silently failed never passes as done.

Buyer and niche (≤25 words): Billing and compliance staff at small practices who get billed for portal and e-filing submissions that quietly failed.

Pain and evidence (≤40 words; cite the pain dossier file): Claims stay invisible for two days on payer portals, while about 10% of court e-filings are rejected yet fees are kept, with filers learning only after a missed hearing. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): During every submission, the agent segments and tracks the specific confirmation, error or rejection concept on screen in real time across the whole session recording, not just a single screenshot, catching banners that flash and vanish, then flags anything unconfirmed for immediate human review before the biller moves on.

Why now (≤25 words; name the specific capability): SAM 3 tracks a named concept through live video in real time, not just single frames [TC-34].

Demo moment (≤20 words): A rejection banner flashes for one second in a replayed session; the tracker catches it and flags the filing.

Business model (≤15 words): Priced per submission volume, sold as an audit and dispute-evidence add-on.

---
id: s3-ideator-novel-T1-02-r2#04
track: novel
lineage: seed-atom-hybrid
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: [A-seed-07-mech-1, A-seed-07-insight-1]
source_task: s3-ideator-novel-T1-02-r2
---

# Instant Reflexes for Slow Portals

One-liner (≤20 words): A near-instant reflex model reacts to portal errors and outages the moment they appear on screen.

Buyer and niche (≤25 words): Overnight IT techs running unattended agents across payer and government portals prone to timeouts and outages.

Pain and evidence (≤40 words; cite the pain dossier file): A "cannot reach the payor" error causes duplicate claims when resubmitted blindly, and court portal outages give "no estimated time for restoration" with no deadline relief stated anywhere. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A fast reflex model watches every frame of each portal session, instantly recognizing known failure signatures like timeout banners, outage pages or CAPTCHAs, and reacts in milliseconds: pause, retry later or reroute. Only unrecognized situations escalate to a slower reasoning model, so obvious failures never trigger duplicate submissions.

Why now (≤25 words; name the specific capability): Near-instant, low-cost per-event AI judgment makes frame-by-frame reflex monitoring affordable at portal scale [unverified: reflex-model latency and cost claim].

Demo moment (≤20 words): A fake portal outage appears mid-run; the reflex layer halts and reroutes in under a second, no duplicate sent.

Business model (≤15 words): Bundled into the overnight sweep subscription as a reliability upgrade tier.

---
id: s3-ideator-novel-T1-02-r2#05
track: novel
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T1-02-r2
---

# One Profile, Every Portal

One-liner (≤20 words): A single canonical practice profile auto-propagates to every payer and regulator portal whenever anything changes.

Buyer and niche (≤25 words): Practice managers re-entering the same NPI, address and license data across payer portal migrations and multi-jurisdiction filings.

Pain and evidence (≤40 words; cite the pain dossier file): Payers retire portals on their own schedule, forcing re-registration with no stable tool, while charities re-key the same data across 38-41 state portals since the shared form was abandoned. (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The practice keeps one canonical profile of its identifiers and addresses. On any portal, the agent recognizes concepts like "NPI field" or "mailing address" regardless of page layout, and fills them from the canonical profile, so one update propagates everywhere instead of being re-typed on every site.

Why now (≤25 words; name the specific capability): SAM 3 recognizes a labeled concept across unfamiliar layouts from a text prompt alone, with no per-portal template needed [TC-34].

Demo moment (≤20 words): Update one address field once; watch it auto-fill correctly on three differently laid-out mock portals.

Business model (≤15 words): Per-practice monthly fee scaled by number of portals kept in sync.

<!-- COMPLETE -->
