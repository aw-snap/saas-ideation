## Cards

---
id: s3-ideator-balanced-T2-01-r2#01
track: balanced
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-05-mech-2]
source_task: s3-ideator-balanced-T2-01-r2
---

# Portal Fetch Proof Ledger

One-liner (≤20 words): Every invoice-fetch bot claims success; this one attaches the screenshot and hash that prove it.

Buyer and niche (≤25 words): AP and procurement leads at manufacturers running automated invoice-fetch bots across dozens of vendor and utility portals.

Pain and evidence (≤40 words): Capture tools "miss their core promise" so people re-key by hand; separately, automated agents post false completion claims on 45-48% of failed runs, undetectable by simple checks. (src: outputs/s3-ideate/pain/T2-dossier.md P2; outputs/s3-ideate/pain/T6-dossier.md P4)

How it works (≤50 words): Wraps existing invoice-fetch bots: after every portal pull, it screenshots the result, hashes the document, and checks the page is actually an invoice rather than a login wall or CAPTCHA screen before marking the task complete. Fetches without valid evidence auto-retry or escalate to a human, never silently marked done.

Why now (≤25 words): Cheap document parsing (Mistral OCR 3, TC-30) makes per-fetch evidence-checking affordable; production fetch agents are known to over-claim success without it.

Demo moment (≤20 words): Agent fetches five mock portal invoices; one hits a login wall and the ledger flags it unverified, not done.

Business model (≤15 words): Per-seat add-on to existing AP tools, priced per 1,000 verified fetches.

---
id: s3-ideator-balanced-T2-01-r2#02
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r2
---

# Portal Poll Spend Guard

One-liner (≤20 words): Caps what your invoice-fetch agents can spend polling paid vendor portals and e-invoicing platforms, per session.

Buyer and niche (≤25 words): Procurement and finance-ops teams at manufacturers whose agents fetch statements across many paid Peppol access points and e-invoicing platforms.

Pain and evidence (≤40 words): Per-call payments "have no cap across a sequence... a 5-second poll on a two-minute backtest can result in 24 paid calls," while small firms already pay per-invoice fees at paid access points from about €0.25. (src: outputs/s3-ideate/pain/T6-dossier.md P5; outputs/s3-ideate/pain/T2-dossier.md Already tried)

How it works (≤50 words): Sits between your fetch agents and paid portals: sets a per-session and per-supplier spend ceiling before any polling loop starts, aggregates charges across payment rails and platform fees into one live meter, and kills a stuck retry loop the instant it crosses the cap.

Why now (≤25 words): x402 and AP2 handle single payments but not session budgets (TC-15); paid Peppol access points already charge per invoice, so runaway polling is a live risk.

Demo moment (≤20 words): A simulated stuck polling loop against a paid portal is auto-killed at $2, before it reaches $20.

Business model (≤15 words): Percentage of spend guarded, plus a flat monthly platform fee.

---
id: s3-ideator-balanced-T2-01-r2#03
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r2
---

# Receiving-Dock Video Reconciler

One-liner (≤20 words): Answers "did this shipment actually arrive" from warehouse video, without anyone scrubbing hours of footage.

Buyer and niche (≤25 words): Procurement and AP teams at manufacturers matching invoices to physical goods receipt across a busy receiving dock.

Pain and evidence (≤40 words): "A missing invoice is common when a manager approves a purchase but sends the paperwork late," forcing a manual chase list every month-end, with nothing to confirm the goods truly arrived. (src: outputs/s3-ideate/pain/T2-dossier.md P7)

How it works (≤50 words): Ask the dock-camera archive a plain question, "did Supplier X's shipment arrive on the 14th, how many pallets," and get a timestamped answer scanned from hours of footage selectively rather than watched in full. Cross-checks the answer against open POs and pending invoices, flagging invoices with no matching physical arrival.

Why now (≤25 words): Gemini 3's agentic video understanding scans hours of footage selectively, cutting token use up to 88% and cost up to 66% (TC-33).

Demo moment (≤20 words): Ask "did the Tuesday shipment arrive"; agent answers from six hours of dock footage in seconds, citing the timestamp.

Business model (≤15 words): Monthly fee per dock camera connected, bundled with an AP-matching seat license.

---
id: s3-ideator-balanced-T2-01-r2#04
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T2-01-r2
---

# Vendor Portal Access Passport

One-liner (≤20 words): Proves your invoice-fetch agent is an authorized accountholder, not a bot, before vendor portals block it.

Buyer and niche (≤25 words): Procurement teams at manufacturers whose invoice-fetch agents pull statements and invoices from dozens of vendor and utility portals.

Pain and evidence (≤40 words): Since 15 Sept 2026 "mixed-use" crawlers are blocked by default on ad-bearing pages, and site owners have "no AI bot allowlist" to tell a legitimate fetch agent from a scraper. (src: outputs/s3-ideate/pain/T6-dossier.md P3, P11; outputs/s3-ideate/pain/T2-dossier.md scope)

How it works (≤50 words): Issues each invoice-fetch agent a signed, revocable identity credential tied to your company account, presented to vendor portals as proof of authorized access rather than anonymous bot traffic. Vendors add one allowlist rule instead of guessing; you keep an audit log of which agent touched which portal, when.

Why now (≤25 words): Okta's Agent SSO gives agents first-class, governed identity (TC-17), and Cloudflare's default crawler block (TC-16) makes unidentified fetch bots newly vulnerable to lockout.

Demo moment (≤20 words): A passport-carrying agent sails through a mock crawler block that stops an unidentified fetch bot cold.

Business model (≤15 words): Per-agent monthly identity fee, sold alongside invoice-fetch software vendors.

---
id: s3-ideator-balanced-T2-01-r2#05
track: balanced
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-07-mech-1, A-seed-07-tech-1]
source_task: s3-ideator-balanced-T2-01-r2
---

# Portal Fetch Triage Reflex

One-liner (≤20 words): An instant, near-free check on every portal poll catches CAPTCHAs and login walls before they corrupt your invoice ledger.

Buyer and niche (≤25 words): AP teams at manufacturers running continuous invoice-fetch agents across dozens of vendor and utility portals.

Pain and evidence (≤40 words): The best browser agent solves only 40% of CAPTCHAs before stalling, while fetching invoices and statements from vendor and utility sites is core, daily procurement work across many portals. (src: outputs/s3-ideate/pain/T6-dossier.md P1; outputs/s3-ideate/pain/T2-dossier.md scope)

How it works (≤50 words): A fast, cheap model checks every portal-poll result in real time: real invoice, login wall, or CAPTCHA. Most polls get an instant reflex verdict; only ambiguous ones escalate to a slower, more careful model, so checking hundreds of portals continuously stays affordable instead of sampling or batching fetches.

Why now (≤25 words): Inference prices keep collapsing roughly 10x a year (TC-25), making per-event classification affordable at portal-poll scale; sub-second reflex-tier models are emerging [unverified].

Demo moment (≤20 words): Feed 20 mixed portal results; reflex model instantly sorts real invoices from three CAPTCHA walls, no scrubbing needed.

Business model (≤15 words): Usage-based fee per 10,000 portal polls triaged.

<!-- COMPLETE -->
