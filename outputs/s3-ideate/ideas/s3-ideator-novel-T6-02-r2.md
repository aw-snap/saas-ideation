## Cards

---
id: s3-ideator-novel-T6-02-r2#01
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r2
---

# Callback Verifier for Vendor Payments

One-liner (≤20 words): A voice agent calls the vendor's known number to confirm a bank-detail change before any payment moves.

Buyer and niche (≤25 words): AP staff and owners at small firms whose only defense against payment-fraud emails is an inconsistent manual callback.

Pain and evidence (≤40 words; cite the pain dossier file): BEC vendor bank-detail fraud cost $2.9B in the US in 2023, averaging $137k+ per incident; the standard defense of phoning the vendor "depends on staff discipline" and often doesn't happen. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): When a vendor's payment details change, a voice agent places a live outbound call to the number on file, speaks with a real person to confirm the change, and only then releases the payment through the firm's authorized payment rail; a mismatch blocks the transfer and flags AP.

Why now (≤25 words): OpenAI's gpt-realtime speech-to-speech API (TC-27) places production-quality verification calls directly, with no separate speech recognition or text-to-speech stitching.

Demo moment (≤20 words): A spoofed "new bank details" email triggers an instant callback; the real vendor denies it; payment blocks live.

Business model (≤15 words): Per-verified-payment fee, priced well under the average $137k loss it prevents.

---
id: s3-ideator-novel-T6-02-r2#02
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r2
---

# Verified-Fact Marketplace for Security Attestations

One-liner (≤20 words): An underwriting agent buys single verified security facts from a firm's own consoles instead of trusting a self-reported form.

Buyer and niche (≤25 words): Cyber-insurance underwriters and auditors whose agents need to check specific control claims at small firms with no IT staff.

Pain and evidence (≤40 words; cite the pain dossier file): Renewal forms grew to 60-150 line-by-line control questions the owner doesn't understand, and one optimistic "yes" that doesn't match reality gives the insurer grounds to void the policy after a breach. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): An underwriting agent pays per fact requested ("is MFA enforced on all admin accounts?"); a browser agent logs into the firm's actual consoles with permission, captures live evidence, and returns a signed pass or fail fact card, replacing self-reported checkboxes with something checkable.

Why now (≤25 words): x402 lets an API charge per request inside the normal HTTP cycle, so an underwriting agent buys only the facts it needs. (src: outputs/s3-ideate/pain/T6-dossier.md)

Demo moment (≤20 words): An insurer's agent requests "MFA on domain admin?"; the tool checks Entra live and returns a signed "false" card in seconds.

Business model (≤15 words): Per-fact micropayment split between the evidence tool and the firm being evidenced.

---
id: s3-ideator-novel-T6-02-r2#03
track: novel
lineage: seed-atom-hybrid
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: [A-seed-05-mech-3, A-seed-05-tech-2]
source_task: s3-ideator-novel-T6-02-r2
---

# Scoped, Undo-Safe Wall Crossing

One-liner (≤20 words): Every agent action inside a third-party console is a pre-approved, allow-listed, one-click-reversible plan, with a receipt of what changed.

Buyer and niche (≤25 words): Teams running agents that must act inside customer or client accounts on external sites, and need to prove authorization, not just consent.

Pain and evidence (≤40 words; cite the pain dossier file): A court barred an agent from a site despite the user's permission, because the site itself never authorized the access and the agent had spoofed a normal browser. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before crossing a login wall, the agent proposes a scoped, allow-listed action plan naming exactly which fields and submits it will touch; the owner approves it, a restore point is taken first, and every state-changing step logs an undo, turning a spoofed session into a provable, revocable authorization trail.

Why now (≤25 words): Claude Sonnet 4.5's 61.4% OSWorld computer use executes and logs multi-step console actions reliably enough to make an undo-backed plan real.

Demo moment (≤20 words): Agent proposes "update three DKIM records," owner approves, changes apply, then a one-click revert restores the originals live.

Business model (≤15 words): Per-seat license sold to teams whose agents operate inside other organizations' accounts.

---
id: s3-ideator-novel-T6-02-r2#04
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r2
---

# MFA-Piercing Offboarding Sweep

One-liner (≤20 words): A browser agent riding the admin's own session sweeps every SaaS console for stale access, pausing for a tap at each MFA wall.

Buyer and niche (≤25 words): The sole IT admin or accidental admin at a small firm who cannot verify who still has access after someone leaves.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders can't immediately verify which employees have current access, and nearly 90% suspect former staff kept it; meanwhile agents solve only 40% of CAPTCHAs and stall inside 2FA. (src: outputs/s3-ideate/pain/T5-dossier.md; outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Running inside the admin's own logged-in browser, the agent walks every listed SaaS console, cross-checks active logins against current staff, and queues revocations; when a console throws an MFA prompt the run pauses for the admin's one-tap approval instead of failing anonymously like an outside bot would.

Why now (≤25 words): Claude for Chrome operates inside the admin's own logged-in browser session, so 2FA prompts route to the real admin, not a stalled bot.

Demo moment (≤20 words): Sweep across six consoles finds a contractor's login from three months ago and revokes it after one MFA tap.

Business model (≤15 words): Monthly subscription per firm, tiered by number of consoles swept.

---
id: s3-ideator-novel-T6-02-r2#05
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r2
---

# Identity That Dies With the Employee

One-liner (≤20 words): Every internal automation gets its own governed identity that auto-suspends the moment its creator is offboarded.

Buyer and niche (≤25 words): IT admins at small firms who wire up bots and integrations under shared service accounts or personal API keys nobody tracks.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts or a person's API keys with no inventory; they are "hunted down by hand or never reviewed" once that person leaves. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Each automation or agent is issued a scoped, non-human identity tied to the employee who created it; offboarding that employee automatically suspends every automation identity they own and lists exactly what each one touched, instead of leaving orphaned credentials running unnoticed.

Why now (≤25 words): Okta's Agent SSO gives agents first-class, governable identities on the Cross App Access standard, letting an automation be bound to, and cut off from, a person.

Demo moment (≤20 words): Offboarding a staff member instantly greys out the two automations they built, with a list of what each touched.

Business model (≤15 words): Per-agent-identity monthly fee, bundled into existing IT seat pricing.

<!-- COMPLETE -->
