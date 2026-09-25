## Cards

---
id: s3-ideator-novel-T7-02-r2#01
track: novel
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: [A-seed-05-mech-2, A-seed-05-insight-1]
source_task: s3-ideator-novel-T7-02-r2
---

# Privileged Cite Bench

One-liner (≤20 words): Checks every citation in a brief against real case text on the lawyer's own laptop, nothing leaves the machine.
Buyer and niche (≤25 words): Solo and small-firm litigators drafting motions who cannot risk both a fabricated-citation sanction and a privilege waiver.
Pain and evidence (≤40 words; cite the pain dossier file): Fabricated citations cost one firm $59,500; separately, a federal ruling held AI-drafted material sent to a cloud tool was not privileged, so a cloud cite-checker recreates the same exposure it claims to fix. (src: outputs/s3-ideate/pain/T7-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local open-weight model reads the draft brief and a locally cached case-law corpus, checks each citation's holding and quote against the real opinion, and shows the actual case text as evidence next to any citation it cannot confirm, without the brief ever leaving the device.
Why now (≤25 words; name the specific capability): Open-weight gpt-oss-20b (TC-22) fits a 16GB laptop, so a full cite-check runs without a cloud call that would itself waive privilege.
Demo moment (≤20 words): Feed a brief with one fabricated case on a disconnected laptop; the bad citation is flagged with the real text shown.
Business model (≤15 words): Flat monthly license per solo attorney, priced below one manual cite-check.

---
id: s3-ideator-novel-T7-02-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [A-seed-03-mech-1]
source_task: s3-ideator-novel-T7-02-r2
---

# Field Adjuster Echo

One-liner (≤20 words): An adjuster narrates a damage site aloud; a live voice agent cross-checks it against the carrier's AI claim summary.
Buyer and niche (≤25 words): Independent claims adjusters and small adjusting firms who must catch a carrier's hallucinated AI summary before they sign off.
Pain and evidence (≤40 words; cite the pain dossier file): Carrier AI hallucinates on "a smudge on a document" and can leave out a detail that changes a payout; the adjuster "bears the brunt" of the error, and 98% of adjusters' AI-related reviews are negative. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): While the adjuster walks the site narrating findings aloud, a native-audio agent listens live, builds a spoken fact ledger, and speaks up the moment the carrier's pre-loaded AI summary contradicts what the adjuster is describing on-site, so a mismatch is caught before the file closes.
Why now (≤25 words; name the specific capability): Gemini Live native audio (TC-28) gives 120-180ms round trips, fast enough to interrupt mid-walkthrough instead of flagging errors after the fact.
Demo moment (≤20 words): Adjuster narrates a dented bumper; the agent speaks up instantly when the loaded summary claims "no visible damage."
Business model (≤15 words): Per-seat subscription to adjusting firms, priced per claim reviewed on-site.

---
id: s3-ideator-novel-T7-02-r2#03
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r2
---

# On-Prem Exploit Bench

One-liner (≤20 words): Reproduces AI-drafted vulnerability reports against proprietary code entirely inside the company's own network, never in a public cloud.
Buyer and niche (≤25 words): Internal security teams at regulated companies whose private bug-bounty programs cannot send source code off-premises for triage.
Pain and evidence (≤40 words; cite the pain dossier file): Bounty programs are being flooded (Elastic: 1,390 reports in half a year, about 70% rejected before reproduction, 30-60 minutes of analyst time each); regulated codebases add a constraint no public triage cloud can meet. (src: outputs/s3-ideate/pain/T7-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Running entirely on the company's own servers, an open-weight model checks out the exact internal commit, attempts to reproduce the AI-drafted exploit in a disposable local container, and returns a pass or fail verdict with the failed run log, so no code or report ever reaches a third-party triage service.
Why now (≤25 words; name the specific capability): gpt-oss-120b (TC-22) runs on a single on-prem 80GB GPU, keeping the whole judge-and-reproduce loop inside the company firewall.
Demo moment (≤20 words): Submit one real and one fabricated-function report against a sample private repo on an air-gapped laptop; verdicts return with no outbound call.
Business model (≤15 words): Annual enterprise license per internal bounty program protected.

---
id: s3-ideator-novel-T7-02-r2#04
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r2
---

# Session Truth Ledger

One-liner (≤20 words): Builds a live, spoken fact ledger during a therapy session, then flags anything the AI note invents afterward.
Buyer and niche (≤25 words): Solo therapists using AI scribes who must catch fabricated content before it enters the permanent clinical record.
Pain and evidence (≤40 words; cite the pain dossier file): Incumbent AI scribes "make things up that are not said in the session," with users reporting "major errors throughout the day every day," yet nothing checks the note against what was actually said. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A native-audio agent listens alongside the existing AI scribe during the live session, keeping a running ledger of what was actually said, kept only for the session's length; once the scribe drafts its note, the ledger checks every clinical claim against itself and highlights any sentence with no matching statement.
Why now (≤25 words; name the specific capability): Gemini Live native audio (TC-28) processes a full session continuously at low latency, with no transcription backlog to catch up on.
Demo moment (≤20 words): Run a sample session where the scribe invents a detail; the ledger flags that exact sentence right after the note drafts.
Business model (≤15 words): Per-therapist monthly add-on, sold alongside any existing AI scribe.

---
id: s3-ideator-novel-T7-02-r2#05
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r2
---

# On-Device Return Check

One-liner (≤20 words): Cross-checks an AI-drafted tax return against W-2s and 1099s entirely on the preparer's own laptop, no cloud disclosure.
Buyer and niche (≤25 words): Solo CPAs and EAs preparing returns who cannot paste client tax data into cloud AI without a signed consent per vendor.
Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into a personal cloud AI account without consent risks a $1,000 fine and up to a year in prison per violation, yet manual keying of W-2s and 1099s drives 80+ hour tax-season weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local open-weight model reads scanned W-2s and 1099s on the preparer's own machine, extracts every figure, then checks each line of an AI-drafted return against those source figures, flagging any mismatch before filing, with no client data leaving the laptop or triggering a disclosure requirement.
Why now (≤25 words; name the specific capability): gpt-oss-20b (TC-22) fits 16GB of RAM, running extraction and cross-check locally at tax-season volume with no cloud bill or disclosure exposure.
Demo moment (≤20 words): Feed scanned W-2s and a draft return with one wrong wage figure; the mismatch is flagged instantly, offline.
Business model (≤15 words): Seasonal subscription per preparer, cheaper than a seasonal data-entry temp.

<!-- COMPLETE -->
