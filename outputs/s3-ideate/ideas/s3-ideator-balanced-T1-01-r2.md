## Cards

---
id: s3-ideator-balanced-T1-01-r2#01
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r2
---

# Local Payer-Rules Model, No Cloud

One-liner: A local LLM holds every payer's PA and appeal rules on the practice's own machine, no PHI leaves the building.

Buyer and niche: Billing managers at small practices wary of sending patient records to another cloud vendor after the Change Healthcare breach.

Pain and evidence: A clearinghouse breach froze claims for months and 78% lost revenue; practices also fear adding another cloud vendor that touches PHI, while payer PA rules sit scattered across many portals. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: A quantized model runs on a practice workstation via Ollama, fed with scraped payer policy bulletins and the practice's own denial history. Staff ask it which procedures need PA for a given payer and what documentation an appeal needs, entirely offline, no patient data transmitted to any vendor server.

Why now: llama.cpp and Ollama now serve quantized models at 50-250 tokens/sec on one consumer GPU, over 75% smaller with under 1% quality loss.

Demo moment: Wifi is unplugged; the local model still answers a payer's PA requirement instantly from its offline rule store.

Business model: One-time setup fee plus a flat monthly maintenance fee per practice.

---
id: s3-ideator-balanced-T1-01-r2#02
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r2
---

# Dentrix-to-Payer Bridge, No API Fee

One-liner: An agent moves claim data straight from the practice's locked system to payer portals, skipping both sides' paid APIs.

Buyer and niche: Dental office managers billing through Dentrix or Eaglesoft who also submit claims through separate payer portals like Availity.

Pain and evidence: Dentrix charges $5,000 plus $47 per location monthly for API access, while payer claim status is only 28% electronic for dental, forcing manual re-entry on both locked ends. (src: outputs/s3-ideate/pain/T3-dossier.md; outputs/s3-ideate/pain/T1-dossier.md)

How it works: A screen agent reads claim and eligibility data directly off the practice-management screen, formats it for the target payer portal, and enters it there, then writes the payer's response back onto the practice-management screen, no paid API on either side.

Why now: Claude Sonnet 4.5 reaches 61.4% on OSWorld and can hold multi-step desktop and browser tasks for over 30 hours.

Demo moment: A claim keyed once on a demo Dentrix screen appears filed and confirmed on a payer portal seconds later.

Business model: Monthly fee per connected practice-management and payer-portal pair.

---
id: s3-ideator-balanced-T1-01-r2#03
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r2
---

# Denial History That Outlives Portals

One-liner: A standing ledger of every PA and denial keeps its history intact when a payer retires one portal for another.

Buyer and niche: Practice managers at small practices whose payers periodically retire one portal for another, like NaviNet moving to Availity.

Pain and evidence: Payers retire portals on their own schedule, forcing re-registration and retraining, echoing how vertical-system migrations elsewhere cause "we basically had to start from scratch." (src: outputs/s3-ideate/pain/T1-dossier.md; outputs/s3-ideate/pain/T3-dossier.md)

How it works: The agent logs into each payer portal on a schedule and extracts every PA and claim record into one practice-owned ledger, independent of any single portal's login or interface. When a payer switches portals, the practice's own history stays intact and searchable, with nothing to re-key.

Why now: Skyvern and browser-use style agents already extract structured records from legacy, no-API portals at production-adjacent reliability.

Demo moment: A portal is swapped mid-demo for a lookalike; the ledger keeps every prior PA record without a gap.

Business model: Monthly subscription priced per portal tracked, independent of any single payer.

---
id: s3-ideator-balanced-T1-01-r2#04
track: balanced
lineage: seed-atom-hybrid
territory: T1
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-06-mech-1, A-seed-06-insight-1]
source_task: s3-ideator-balanced-T1-01-r2
---

# PA Triage by Predicted Effort

One-liner: Before staff touch a request, the tool predicts how many portal visits and days this payer will demand.

Buyer and niche: Practice managers staffing prior-authorization work at small practices juggling many payers with different turnaround habits.

Pain and evidence: 35% of PA requests take 35+ minutes, and payer speed and denial patterns vary widely, yet staff assign requests without knowing which will be quick or which will drag. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: The tool checks each incoming PA request against the practice's logged history for that payer and code, scoring expected touches, days and denial risk, the same way a coding tool grounds an estimate in the real codebase before quoting it.

Why now: Cheap long-context inference lets a practice's full PA history sit in one scoring prompt for a few cents.

Demo moment: Two new PA requests are entered; one is flagged "3 touches, 9 days" and the other "1 touch, same day."

Business model: Per-practice subscription tiered by PA volume.

---
id: s3-ideator-balanced-T1-01-r2#05
track: balanced
lineage: seed-atom-hybrid
territory: T1
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: [A-seed-03-mech-1, A-seed-03-insight-1]
source_task: s3-ideator-balanced-T1-01-r2
---

# Narrated Payer Quirks, Captured Once

One-liner: Billers narrate the odd workaround that finally got a stubborn payer to approve, and it becomes a searchable playbook entry.

Buyer and niche: Practice managers at small practices who lose payer-specific know-how when a PA specialist quits or a task is outsourced.

Pain and evidence: Practices hire staff whose sole job is chasing authorizations, and that knowledge often lives only in one person's head, a single point of failure. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: While resolving a hard case, a biller narrates what worked, "call this payer's line, not the portal, ask for X unit." The tool transcribes it, tags the payer and procedure code, and files it into a searchable playbook the whole team can query before the next similar case.

Why now: Open-weight streaming speech recognition like Kyutai STT transcribes in real time at production quality with no per-minute vendor fee.

Demo moment: A biller narrates a workaround aloud; it appears tagged and searchable in the playbook within seconds.

Business model: Flat monthly fee per practice, priced by staff seats.

<!-- COMPLETE -->
