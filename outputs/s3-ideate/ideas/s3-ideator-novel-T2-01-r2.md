## Cards

---
id: s3-ideator-novel-T2-01-r2#01
track: novel
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: prosumer, capability: agent-infra, track: novel }
parents: [A-seed-05-mech-3]
source_task: s3-ideator-novel-T2-01-r2
---

# Agent Passport for Solo Invoicing

One-liner (≤20 words): Gives your invoicing agent its own revocable login, so it never touches your real passwords.

Buyer and niche (≤25 words): Freelance translators and localizers who invoice dozens of agencies and e-invoicing platforms without any IT department or procurement team behind them.

Pain and evidence (≤40 words; cite the pain dossier file): France alone lists 150 registered e-invoicing platforms with no default choice (P14), while solo lawyers report only large firms' procurement teams can negotiate security terms solos must just accept (P5). (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The agent gets a scoped, time-limited non-human identity for each platform via Cross App Access SSO, posts invoices, checks delivery, then the token expires. Every action follows an approve-first, restore-point, one-click-undo pattern, logging a client-shareable audit trail instead of a shared password.

Why now (≤25 words; name the specific capability): Okta's Agent SSO (GA August 2026) is the first production identity layer built for agent logins, not human ones, with scoped tokens.

Demo moment (≤20 words): The agent logs into two platforms with two scoped identities live; one token is revoked and access dies instantly.

Business model (≤15 words): Monthly fee per platform-identity managed, tiered by number of active scopes.

---
id: s3-ideator-novel-T2-01-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: [A-seed-05-tech-2]
source_task: s3-ideator-novel-T2-01-r2
---

# NDA-Scoped Invoice Puller

One-liner (≤20 words): Extracts only your invoices from a shared folder, never touching the NDA'd client files beside them.

Buyer and niche (≤25 words): Freelance translators and localizers whose invoice folders sit next to confidential client manuscripts and source files under strict NDA.

Pain and evidence (≤40 words; cite the pain dossier file): Capture tools already "hardly process invoices automatically," forcing manual re-entry (P2), while a federal ruling held AI-drafted material handling client facts was not privileged, so scanning a whole shared folder risks exposing NDA'd work. (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A scoped agent identity is limited to one designated Invoices subfolder, with a fixed allow-list of file types it may open. It extracts vendor, amount and tax fields from that subfolder only, posts a draft ledger entry, and never opens sibling folders holding client project files.

Why now (≤25 words; name the specific capability): Cross App Access lets an app request one narrow folder scope instead of full account access, unlike a shared password or API key.

Demo moment (≤20 words): Scoped to /Invoices, the agent posts three invoices; pointed at a folder with an NDA'd manuscript, it visibly skips it.

Business model (≤15 words): Per-invoice fee, plus a scope-management dashboard included in the paid tier.

---
id: s3-ideator-novel-T2-01-r2#03
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r2
---

# Consent-Before-Forward Checker

One-liner (≤20 words): Blocks your invoicing agent from forwarding client billing data until real consent for that recipient exists.

Buyer and niche (≤25 words): Freelance translators who occasionally forward invoices or payment details to subcontractors, bookkeepers, or a new e-invoicing tool.

Pain and evidence (≤40 words; cite the pain dossier file): Consent must be obtained per client relationship, not once in a boilerplate clause (P4), yet nothing today checks whether forwarding a client's billing data to a new subcontractor or tool was ever actually authorized. (src: outputs/s3-ideate/pain/T9-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Before the agent shares an invoice or billing data with a new recipient, it checks a stored per-recipient consent record tied to that recipient's own scoped identity. Missing consent blocks the send and drafts a one-line request instead; every check and outcome logs to an audit trail.

Why now (≤25 words; name the specific capability): Non-human identity standards give every agent-to-recipient connection a distinct scope, making a per-connection consent record enforceable, not just paperwork.

Demo moment (≤20 words): The agent tries to forward an invoice to a new subcontractor with no consent on file; it blocks the send.

Business model (≤15 words): Subscription priced per client relationship actively monitored for consent.

---
id: s3-ideator-novel-T2-01-r2#04
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r2
---

# Self-Expiring Portal Runner

One-liner (≤20 words): Files your e-invoices on any platform using a login that deletes itself the moment the job ends.

Buyer and niche (≤25 words): Small firms and bookkeeping shops filing e-invoices across dozens of client-chosen platforms with no standing password vault to guard.

Pain and evidence (≤40 words; cite the pain dossier file): About 150 registered e-invoicing platforms exist with no default choice (P14), and the strongest security terms are normally negotiated by procurement teams that solo and small firms simply do not have (P5). (src: outputs/s3-ideate/pain/T2-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A browser agent requests a fresh, time-boxed non-human identity for the specific platform a client requires, logs in, uploads the invoice, confirms the filing, and the token dies at session end. No standing password sits in a vault waiting for the next breach.

Why now (≤25 words; name the specific capability): Agent SSO tokens are scoped and short-lived by design, unlike the static API keys and shared logins portals use today.

Demo moment (≤20 words): A live filing completes on a test platform, then the token visibly expires sixty seconds later on screen.

Business model (≤15 words): Per-filing fee plus a flat monthly token-management retainer per firm.

---
id: s3-ideator-novel-T2-01-r2#05
track: novel
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-01-r2
---

# Per-Platform Consent Draft Assistant

One-liner (≤20 words): Drafts the exact one-paragraph consent notice each new invoicing platform actually needs, not generic boilerplate.

Buyer and niche (≤25 words): Freelance translators and small bookkeeping shops onboarding a new e-invoicing tool or a new client's data-sharing scope.

Pain and evidence (≤40 words; cite the pain dossier file): Boilerplate consent clauses are "not sufficient" per relationship (P4), yet advisers already bill clients extra time for the e-invoicing switchover, describing it as three separate obligations with different schedules (P15). (src: outputs/s3-ideate/pain/T9-dossier.md; outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Each time the agent's identity requests a new scope, such as a new e-invoicing platform or a client's shared drive, it drafts a one-paragraph data-handling notice naming that specific platform and data, ready for the client's one-tap yes, instead of a generic engagement-letter clause.

Why now (≤25 words; name the specific capability): Cheap long-context models hold each platform's actual data-handling terms, so the drafted paragraph names specifics instead of generic legalese.

Demo moment (≤20 words): Adding a new e-invoicing platform triggers a specific consent paragraph naming it, approved by the client in one tap.

Business model (≤15 words): Included in the subscription; a small fee per connection beyond a free cap.

<!-- COMPLETE -->
