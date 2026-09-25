## Cards

---
id: s3-ideator-balanced-T6-02-r2#01
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r2
---

# Vendor Toll Metering Wallet

One-liner (≤20 words): Turns opaque flat vendor API tolls into a metered, capped spend ledger any integration can trust.

Buyer and niche (≤25 words): ISVs and IT vendors building integrations against locked practice-management and dealer systems that charge flat per-location API tolls.

Pain and evidence (≤40 words; cite the pain dossier file): Per-call payments have no cap across a sequence of calls and no protocol aggregates spend across rails; locked vertical software gates access behind the same kind of blind flat fee. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The wallet sits between an integration and each vendor's paid API or portal, converts a flat per-location fee into a metered per-call budget, halts a run before it crosses a preset ceiling, and produces one reconciled ledger across every vendor instead of separate invoices nobody adds up.

Why now (≤25 words; name the specific capability): Card-network agent tokens and per-call payment rails already move money per request but leave budget tracking to whoever builds above them.

Demo moment (≤20 words): A simulated overage on a metered vendor call triggers an instant pause and one reconciled invoice.

Business model (≤15 words): Percentage of metered spend plus a small monthly platform fee.

---
id: s3-ideator-balanced-T6-02-r2#02
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r2
---

# On-Device Desktop Wall Runner

One-liner (≤20 words): Runs a locked desktop practice-management app on its own machine, so no remote "unauthorized access" question ever arises.

Buyer and niche (≤25 words): Dental and veterinary practice managers re-keying data between a locked desktop system of record and other office software.

Pain and evidence (≤40 words; cite the pain dossier file): A court found that using a person's own login without the site's own authorization is unlawful access even with user consent; automated re-keying inside locked vertical desktop software risks the identical exposure. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A local agent watches and clicks the desktop system exactly as the logged-in staff member would, reading lab results or ledger fields and typing them into the accounting or scheduling tool, entirely inside the office laptop, with no screenshots, credentials or API calls ever leaving the machine.

Why now (≤25 words; name the specific capability): Copilot+ PC NPUs deliver 40-50 TOPS for on-device vision models, so a GUI agent runs the desktop app locally with zero cloud exposure.

Demo moment (≤20 words): The agent re-keys a lab result live while a network monitor on screen shows zero outbound traffic.

Business model (≤15 words): One-time device license plus a small monthly support fee per practice.

---
id: s3-ideator-balanced-T6-02-r2#03
track: balanced
lineage: seed-atom-hybrid
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T6-02-r2
---

# Silent-Failure Catcher for Locked Systems

One-liner (≤20 words): Refuses to mark a re-keying task "done" until the locked system's own screen proves the record actually changed.

Buyer and niche (≤25 words): ISVs and office managers running automation against locked practice-management or dealer systems who cannot manually audit every claimed sync.

Pain and evidence (≤40 words; cite the pain dossier file): Agent runs self-report success on close to half of their actual failures, and LLM judges catch only two in three; locked vertical systems already lose records to silent sync failures with no alert. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): After any re-keying run, a second agent reopens the target field on screen, captures the value actually stored, and compares it against the source record before accepting the "done" flag, showing the operator a before-and-after screenshot rather than trusting the first agent's own report, with one-click retry.

Why now (≤25 words; name the specific capability): Production agents self-report false completions on up to 48% of failures, so a separate screen-level check is now the only reliable proof of a finished task.

Demo moment (≤20 words): A deliberately broken sync claims success; the checker screenshots the still-empty field and flags it.

Business model (≤15 words): Per-seat monthly subscription priced per vendor system checked.

---
id: s3-ideator-balanced-T6-02-r2#04
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r2
---

# Vendor Onboarding Gate Runner

One-liner (≤20 words): Works through a locked vendor's manual API-registration gate overnight and hands back only the CAPTCHA it cannot pass.

Buyer and niche (≤25 words): Small ISVs applying for paid API or interface-partner access to locked vertical systems that require manual vendor-inquiry forms.

Pain and evidence (≤40 words; cite the pain dossier file): The best browser agents solve only 40% of CAPTCHAs against 93% for humans; locked vertical vendors already gate access behind manual inquiry forms that stack still more walls onto onboarding. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): An agent fills every registration and vendor-inquiry form, uploads required documents, and tracks each vendor's ticket-status page overnight, then queues only the CAPTCHA or identity-verification steps it cannot pass for a two-minute human pass each morning, so onboarding to a dozen locked vendors no longer needs a dozen manual sessions.

Why now (≤25 words; name the specific capability): Production-adjacent browser agents already automate forms, logins and uploads across arbitrary vendor sites, leaving only true CAPTCHAs for a human.

Demo moment (≤20 words): Overnight run finishes four vendor sign-up forms and surfaces one CAPTCHA ready for a single click.

Business model (≤15 words): Flat fee per vendor-onboarding job completed.

---
id: s3-ideator-balanced-T6-02-r2#05
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-02-r2
---

# Migration Proof-of-Completeness Auditor

One-liner (≤20 words): Cross-checks every record between an old and new locked system before anyone calls a migration finished.

Buyer and niche (≤25 words): Practice managers switching locked practice-management or dealer systems, and the vendors who run the migration for them.

Pain and evidence (≤40 words; cite the pain dossier file): Migrations already lose or mismatch records with no alert until much later, and separately, agent runs self-report success on failed work nearly half the time. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): After a migration, an agent walks both the retired and the new system screen by screen, pulls matching records from each, diffs counts and key fields, and produces a discrepancy list the practice can resolve before trusting the vendor's own "migration complete" message.

Why now (≤25 words; name the specific capability): Cheap, long-context inference now makes it affordable to diff thousands of paired records field by field instead of spot-checking a handful.

Demo moment (≤20 words): The diff report flags twelve records missing from the new system that the vendor's completion message never mentioned.

Business model (≤15 words): One-time audit fee per migration, tiered by record count.

<!-- COMPLETE -->
