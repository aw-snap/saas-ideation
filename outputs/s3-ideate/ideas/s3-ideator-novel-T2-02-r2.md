## Cards

---
id: s3-ideator-novel-T2-02-r2#01
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r2
---

# Toll-Free Invoice Bridge

One-liner (≤20 words): Pulls vendor bills straight off a toll-gated system's own screens, nightly, without ever paying for its API.

Buyer and niche (≤25 words): Small firms billed through a paywalled vertical system of record (dental, dealer, property) that also run separate accounting software.

Pain and evidence (≤40 words): 60%+ of invoices need a human touch at $9-15 each, while the system holding vendor bills charges $5,000-plus setup and per-location fees just to open an API door. (src: outputs/s3-ideate/pain/T2-dossier.md, P1; outputs/s3-ideate/pain/T3-dossier.md, P1,P2)

How it works (≤50 words): A computer-use agent logs into the practice or dealer system with the office's own credentials, reads each new vendor bill or statement off-screen exactly as a human would, extracts line items, and posts the record into QuickBooks or Xero — no API registration, no per-location fee.

Why now (≤25 words): Claude Sonnet 4.5 computer use (TC-02) holds 61.4% on OSWorld across multi-step portal tasks, reliable enough to read screens unattended, nightly.

Demo moment (≤20 words): Live run against a mocked dealer-DMS screen: the agent reads a bill on-screen and posts it into QuickBooks, no API call.

Business model (≤15 words): Monthly fee per connected system, priced well under the vendor's own API toll.

---
id: s3-ideator-novel-T2-02-r2#02
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r2
---

# Invoice Continuity Shadow Ledger

One-liner (≤20 words): Keeps a live, independent copy of every invoice shown on screen, so a system outage never stalls accounts payable.

Buyer and niche (≤25 words): Small firms and dealer groups running billing through a single vertical system of record with no reliable export or backup.

Pain and evidence (≤40 words): A ransomware outage sent deals "back to paper" for two weeks at over $1B collective cost; separately, missing invoices already routinely hold up month-end close on their own. (src: outputs/s3-ideate/pain/T3-dossier.md, P7; outputs/s3-ideate/pain/T2-dossier.md, P7)

How it works (≤50 words): A lightweight extractor watches the accounting or SoR screen during normal use, silently OCRs every invoice, bill and statement it renders, and stores a structured, timestamped copy in an independent ledger — so if the source system goes down, is ransomed or is unreachable, AP staff keep working off the mirror.

Why now (≤25 words): Mistral OCR 3 (TC-30) extracts pages at $1-2 per 1,000, cheap enough to mirror every screen a clerk opens, all day.

Demo moment (≤20 words): Kill the "source" system mid-demo; the shadow ledger still shows every invoice captured in the last hour.

Business model (≤15 words): Flat monthly fee per firm, pitched as invoice-continuity insurance, not a full backup suite.

---
id: s3-ideator-novel-T2-02-r2#03
track: novel
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [A-seed-05-mech-1, A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-novel-T2-02-r2
---

# Sync Conflict Diagnostician

One-liner (≤20 words): Shows the evidence behind every invoice sync conflict before touching anything, then fixes it with one-click undo.

Buyer and niche (≤25 words): Bookkeepers running Bill.com-to-QuickBooks sync, or vet and property staff re-keying between a locked system of record and other tools.

Pain and evidence (≤40 words): Bill.com-QBO sync is "intermittent" and edits on both sides collide, while Cornerstone needs copy-paste between schedules and AppFolio still needs manual card entry, with errors surfacing unexplained. (src: outputs/s3-ideate/pain/T2-dossier.md, P6; outputs/s3-ideate/pain/T3-dossier.md, P6)

How it works (≤50 words): Instead of a bare "conflict" flag, the agent inspects both records' edit history, shows exactly which field diverged and why, proposes the correct merge, takes a snapshot before applying it, and offers one-click undo — the same evidence-first, reversible-fix pattern used to diagnose a misbehaving computer.

Why now (≤25 words): Long-context models (TC-25) hold both systems' full change history at once in one prompt, replacing a guessed merge with root-cause comparison.

Demo moment (≤20 words): A synced bill shows conflicting amounts; the tool displays the exact diverging field, merges it, then undoes on request.

Business model (≤15 words): Add-on priced per connected sync pair, sold through bookkeeping and back-office service firms.

---
id: s3-ideator-novel-T2-02-r2#04
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r2
---

# Vendor Hold-Line Voice Confirmer

One-liner (≤20 words): Calls the vendor's support line, gets a rejected invoice fixed, and reads back a clear spoken confirmation of the outcome.

Buyer and niche (≤25 words): Office managers and small-firm AP staff stuck on hold with vertical-system vendors or e-invoicing platforms after a rejection.

Pain and evidence (≤40 words): Vendor support takes "longer than 30 minutes" to reach and tickets sit open for weeks; separately, e-invoices get auto-rejected for missing bank data or ID mismatches, stalling payment until someone calls it in. (src: outputs/s3-ideate/pain/T3-dossier.md, P9; outputs/s3-ideate/pain/T2-dossier.md, P13)

How it works (≤50 words): The agent dials the vendor's support or AP line, navigates the IVR, states the exact rejection code and missing field, waits on hold in the background, and once resolved, reads back a natural-voice summary of the fix and confirmation number so staff never have to sit through the call.

Why now (≤25 words): ElevenLabs v3 conversational TTS (TC-38) delivers expressive, natural spoken readback, so the confirmation sounds like a colleague, not a robot.

Demo moment (≤20 words): Trigger a mock rejected invoice; minutes later, a spoken summary plays back the fix and confirmation number.

Business model (≤15 words): Per-call resolution fee, capped by a monthly plan for firms with recurring vendor friction.

---
id: s3-ideator-novel-T2-02-r2#05
track: novel
lineage: seed-atom-hybrid
territory: T2
cell: { buyer: B2B, capability: extractor, track: novel }
parents: [A-seed-03-mech-1, A-seed-03-mech-2]
source_task: s3-ideator-novel-T2-02-r2
---

# The Workaround Runbook

One-liner (≤20 words): Turns the one bookkeeper's narrated "here's how I deal with this vendor" into a structured runbook before they leave.

Buyer and niche (≤25 words): Small firms and dealer or dental offices about to lose the one staff member who knows every portal quirk and workaround.

Pain and evidence (≤40 words): Advisers "absorb the switchover" client by client with no written record, and after a migration or support failure, undocumented tricks like which categories are "protected" vanish with the person who knew them. (src: outputs/s3-ideate/pain/T2-dossier.md, P15; outputs/s3-ideate/pain/T3-dossier.md, P5,P6)

How it works (≤50 words): The departing staff member narrates their routine while doing it — "this vendor always rejects the first attempt, resend after 2pm" — and the agent aligns narration to on-screen actions, extracting each workaround into a searchable, per-vendor runbook a replacement or IT admin can query later.

Why now (≤25 words): Kyutai's streaming speech recognition (TC-31) fused with on-screen action logs turns spoken habit into structured, timestamped procedure automatically.

Demo moment (≤20 words): Narrate one invoice workaround aloud; a structured runbook entry appears with the vendor name and exact trigger condition.

Business model (≤15 words): One-time capture project fee plus a small annual runbook-hosting subscription.

<!-- COMPLETE -->
