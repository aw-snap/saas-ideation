## Cards

---
id: s3-ideator-balanced-T6-01-r2#01
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r2
---

# Vision Agent That Outlives Migrations

One-liner (≤20 words): Keeps submitting candidates into a client's portal even after that portal is redesigned or replaced.

Buyer and niche (≤25 words): Staffing agency operations managers who submit candidates through several client vendor-management systems that periodically switch platforms or redesign their forms.

Pain and evidence (≤40 words): Payer portals migrate on their own schedule and force re-registration and retraining each time, with no workaround; script-based portal bots fail the same way the moment a client's form layout changes. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): A screen-reading agent fills each client's candidate form by recognizing labels and fields visually, not fixed selectors. When a client migrates or redesigns its portal, the agent keeps submitting normally and only pauses to ask about a genuinely new field type.

Why now (≤25 words): Computer-vision browser agents that read screens instead of fixed selectors (Skyvern, production-adjacent) survive portal redesigns that break selector-based scripts.

Demo moment (≤20 words): Swap a mock portal's layout mid-demo; the agent finishes the candidate submission without any reconfiguration.

Business model (≤15 words): Per-seat subscription, priced by number of client portals connected.

---
id: s3-ideator-balanced-T6-01-r2#02
track: balanced
lineage: seed-atom-hybrid
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-02-mech-3]
source_task: s3-ideator-balanced-T6-01-r2
---

# Submission Clip Ledger

One-liner (≤20 words): Auto-records a proof clip and confirmation number for every portal submission, so disputes end in seconds.

Buyer and niche (≤25 words): Staffing agency coordinators who submit candidates through client portals that sometimes lose records or deny receiving a submission.

Pain and evidence (≤40 words): Portals can go dark for weeks with claims invisible for days, so staff resubmit and duplicate work; automated agents also claim success on failed runs in 45-48% of cases, hiding the same kind of problem. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): Every automated portal submission triggers a short screen recording plus the portal's own confirmation number, saved to a per-candidate ledger entry. If a client later disputes receipt, the coordinator pulls the clip instantly instead of resubmitting blind and risking a duplicate.

Why now (≤25 words): Computer-use agents already screenshot every action they take, so capturing one proof clip per submission costs nothing extra to add.

Demo moment (≤20 words): Mock submission runs; a client's "never received it" dispute is resolved live by replaying the saved clip.

Business model (≤15 words): Included in the automation subscription; a disputes-avoided report sold as a client-facing add-on.

---
id: s3-ideator-balanced-T6-01-r2#03
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r2
---

# Wall-Hit Circuit Breaker

One-liner (≤20 words): Stops an automated portal run the instant it hits a CAPTCHA or block, before costs spiral.

Buyer and niche (≤25 words): Staffing agency operations managers running automated sourcing or submission agents across many client and job-board portals.

Pain and evidence (≤40 words): A polling loop that hits a wall can rack up dozens of paid calls for one result with no built-in cap; a single clearinghouse outage once pushed medical billers back to fully manual work for months. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): The agent tracks every retry against a per-portal budget and failure pattern. The moment it detects a CAPTCHA, block, or repeated failed poll, it halts spend immediately and batches the incident into one alert with a screenshot for a human, instead of looping silently.

Why now (≤25 words): Production-adjacent portal agents like Skyvern already detect failed navigation; adding a spend cap on top is a thin, buildable layer now.

Demo moment (≤20 words): A simulated CAPTCHA wall appears mid-run; the run halts instantly and one batched alert appears instead of twenty retries.

Business model (≤15 words): Priced as a spend-protection add-on, a percentage of automation spend saved.

---
id: s3-ideator-balanced-T6-01-r2#04
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r2
---

# Portal Grind Cost Meter

One-liner (≤20 words): Turns every manual CAPTCHA, login and MFA wait into a weekly dollar figure per client portal.

Buyer and niche (≤25 words): Staffing agency owners deciding whether automating a given client portal is worth paying for.

Pain and evidence (≤40 words): Coordinators lose hours to CAPTCHAs, MFA prompts and dead sessions, but no one has priced what one blocked run costs; comparable manual portal work elsewhere is proven to cost twelve dollars and twenty-four minutes per check. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A lightweight browser-extension timer starts whenever a coordinator's own login session hits a CAPTCHA, MFA prompt or stalled portal, and stops when they clear it, using their loaded hourly rate to roll the minutes into a weekly per-portal dollar report an owner can act on.

Why now (≤25 words): In-browser agents already observe a user's own browser session, so timing manual wall-clearing needs no separate instrumentation to build.

Demo moment (≤20 words): Coordinator clears five mock CAPTCHAs; the live report shows forty-one dollars lost this week to one portal.

Business model (≤15 words): Free timer tool; agency pays only once it upgrades to the automation product.

---
id: s3-ideator-balanced-T6-01-r2#05
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r2
---

# Scoped Access Grant Passport

One-liner (≤20 words): Logs a signed, expiring scope for every client portal an automation agent is allowed to touch.

Buyer and niche (≤25 words): Staffing agency compliance and operations managers responsible for automation vendors that log into client vendor-management systems.

Pain and evidence (≤40 words): A court found that a user's own permission to an agent is not the same as the site's authorization, exposing operators to legal risk; portal logins already carry lockout and re-registration risk with no appeal path. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before touching a client's portal, the automation agent must present a signed grant naming that exact portal, the allowed actions, and an expiry date, set by whoever owns the client relationship. Any action outside that scope is refused and logged, creating an audit trail for any dispute.

Why now (≤25 words): After the March 2026 ruling that a user's consent isn't a site's authorization, agencies need auditable per-portal scope grants before automating.

Demo moment (≤20 words): The agent tries an out-of-scope action on a mock portal; the grant check blocks and logs it live.

Business model (≤15 words): Compliance add-on fee billed per connected client portal.

<!-- COMPLETE -->
