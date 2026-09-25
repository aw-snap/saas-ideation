## Cards

---
id: s3-ideator-novel-T8-01-r2#01
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r2
---

# The Not-a-Bot Consent Ledger

One-liner (≤20 words): Gives a caregiver's portal agent a signed consent trail so it isn't blocked as a bot or accused of overreach.
Buyer and niche (≤25 words): Adult children and paid proxies whose portal agents risk lockout as banks, Medicaid and plan sites tighten automated-traffic defenses.
Pain and evidence (≤40 words; cite the pain dossier file): Banks demand their own POA form and can "request documentation" at any time; a 94-year-old "went without her pension money for seven months" while the family sorted proof of authority. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Before each portal visit the agent presents a signed consent token; the proxy taps once to clear any CAPTCHA or MFA prompt in person; every action then logs its consent basis, timestamp and screenshot evidence into one ledger a bank, SSA auditor or attorney can all check later.
Why now (≤25 words; name the specific capability): Cloudflare now default-blocks "mixed-use" AI crawlers site-wide (since 2026-09-15), pushing every site toward blocking unverified automated sessions by default.
Demo moment (≤20 words): The agent hits a mock CAPTCHA, the proxy taps to clear it, and the ledger logs a verified, timestamped action.
Business model (≤15 words): $12/month per proxy relationship; institutions can pull the ledger free on request.

---
id: s3-ideator-novel-T8-01-r2#02
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r2
---

# Denial Rationale Fact-Check

One-liner (≤20 words): Checks the insurer's own AI-written denial explanation against the parent's real medical chart before anyone drafts an appeal.
Buyer and niche (≤25 words): Adult children who just received a Medicare Advantage denial and don't know whether the insurer's stated reason is even accurate.
Pain and evidence (≤40 words; cite the pain dossier file): Only 11.5% of denials get appealed though 80.7% of appeals win; families spend that limited energy without knowing the denial's own rationale can be wrong. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Parses the denial letter and the parent's chart notes, checks every claim in the insurer's stated rationale against the record line by line, flags anything unsupported or contradicted, and hands the proxy a marked-up copy with an appeal-worth score before they spend hours drafting.
Why now (≤25 words; name the specific capability): Mistral OCR 3 (2025-12) parses messy scanned charts and denial letters at $2 per 1,000 pages, cheap enough to check every denial.
Demo moment (≤20 words): A denial claims "no prior therapy documented"; the tool highlights a chart note proving the opposite.
Business model (≤15 words): $39 per denial checked, or $15/month unlimited during an active appeal.

---
id: s3-ideator-novel-T8-01-r2#03
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r2
---

# Renewal Packet Fact-Check

One-liner (≤20 words): Cross-checks every fact in an AI-drafted Medicaid renewal against source documents before it goes back to the state.
Buyer and niche (≤25 words): Adult children using AI help to fill out a parent's Medicaid renewal packet under a hard 30-day deadline.
Pain and evidence (≤40 words; cite the pain dossier file): 69% of Medicaid disenrollments during unwinding were procedural, not eligibility-based, on a 30-day window; a single wrong income, asset or address figure can trigger the same procedural termination. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): Holds every source document (pay stubs, bank statements, prior filings) and the drafted renewal answers in one context, checks each answer against its cited source, flags any unsupported or inconsistent figure, and produces a line-by-line confidence report before the family signs and mails it back.
Why now (≤25 words; name the specific capability): 1M-token context models (TC-25) hold a full renewal packet plus every source document in one pass with no manual chunking.
Demo moment (≤20 words): A drafted answer lists the wrong income figure; the checker flags it against the attached bank statement.
Business model (≤15 words): $25 per renewal packet checked, once per enrollee per year.

---
id: s3-ideator-novel-T8-01-r2#04
track: novel
lineage: seed-atom-hybrid
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-novel-T8-01-r2
---

# The Approved-Plan Portal Agent

One-liner (≤20 words): Before touching a parent's account, the portal agent shows its evidence and files a one-click-undo record of every action.
Buyer and niche (≤25 words): Adult children and daily money managers who fear a wrong click while acting inside a parent's bank, Medicaid or plan account.
Pain and evidence (≤40 words; cite the pain dossier file): Banks default to adding the child as joint owner instead of convenience signer, which "in most cases" causes Medicaid disqualification years later; small, unreviewed actions on a parent's account create long-lived harm. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): The agent narrates what it found on the portal and why it proposes an action (pay a bill, update an address, cancel a subscription), waits for one-tap approval, then snapshots a before-state so any error is provably reversible, working through CAPTCHA and MFA steps rather than skipping them.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 (2025-09) sustains long multi-step browser tasks reliably enough to pause for approval and log a restore point at each step.
Demo moment (≤20 words): The agent proposes cancelling a duplicate subscription, waits for a tap, then reverts it live to prove undo works.
Business model (≤15 words): $9.99/month per parent account monitored; $40/month per client for professional money managers.

---
id: s3-ideator-novel-T8-01-r2#05
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T8-01-r2
---

# Portal Allowlist Negotiator

One-liner (≤20 words): Gets a fiduciary firm's caregiving agents individually recognized by each institution instead of blocked as bots or scrapers.
Buyer and niche (≤25 words): Daily-money-manager and paid-fiduciary firms running many clients' portal check-ins whose automated sessions get flagged, MFA-locked or logged out.
Pain and evidence (≤40 words; cite the pain dossier file): State Medicaid and plan portals fail proxies at login itself, "wasting days," before any question of delegated access is even reached; each institution has its own undocumented rules for who it will admit. (src: outputs/s3-ideate/pain/T8-dossier.md)
How it works (≤50 words): For each institution the firm deals with, the product tracks whether the portal blocks, tolerates or explicitly allows delegated automated access, maintains the paperwork or allowlist request each one requires, and routes the firm's agents to a manual-assist queue only for the sites still on defense.
Why now (≤25 words; name the specific capability): Cloudflare's shift to default-blocking mixed-use crawlers unless allowed or paid (TC-16, since 2026-09-15) makes "which sites let agents in" a moving target worth tracking.
Demo moment (≤20 words): A dashboard shows 30 client portals: 22 green (allowed), 5 amber (manual step needed), 3 red (blocked this week).
Business model (≤15 words): SaaS at $30 per client portfolio per month, sold to fiduciary and DMM firms.

<!-- COMPLETE -->
