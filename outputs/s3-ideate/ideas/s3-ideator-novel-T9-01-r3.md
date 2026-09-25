## Cards

---
id: s3-ideator-novel-T9-01-r3#01
track: novel
lineage: ai-native
territory: T9
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
---

# Discovery Cleared, Files Unseen

One-liner (≤20 words): Opposing law firms each run a local model that verifies redactions match a shared privilege log, files never sent.
Buyer and niche (≤25 words): Solo and small-firm litigators exchanging discovery with opposing counsel they have no way to vet or trust on confidentiality.
Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material can lose privilege, and "solo and small-firm lawyers often cannot" get counterparties vetted, yet every discovery exchange hands files to an unvetted opposing firm. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Each firm loads its own production into a local model that checks every page against a shared, court-filed privilege log; only pass/fail verdicts per page cross firms, and the two verdict sets are diffed to surface disputes, with page contents staying on each side's own machine throughout.
Why now (≤25 words; name the specific capability): gpt-oss-20b runs privilege-log matching locally in 16GB RAM, so a production never needs uploading to reach cloud-scale review.
Demo moment (≤20 words): Load two mock productions; each side's local check flags one page the other missed redacting, live, no file transferred.
Business model (≤15 words): $15 per page batch cleared without dispute, billed to both firms' discovery budget.

---
id: s3-ideator-novel-T9-01-r3#02
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
---

# Claim-Ready Session Proof

One-liner (≤20 words): A local model turns a therapy session into an insurer-ready attestation of billed content, transcript never uploaded.
Buyer and niche (≤25 words): Solo therapists billing insurers who demand proof a session covered required content, when neither side wants the other holding the transcript.
Pain and evidence (≤40 words; cite the pain dossier file): A default-on AI scribe left one client feeling "completely violated," while therapists already spend 10-20 hours a week on notes insurers can still reject without proof of content. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): After a session, a local model checks the never-uploaded session audio against the insurer's required content categories for the billed code, then outputs a signed pass/fail attestation per category; the insurer sees only the attestation and can independently re-verify its checksum, never the transcript itself.
Why now (≤25 words; name the specific capability): Kyutai and Voxtral on-device transcription paired with gpt-oss-20b generate a verifiable attestation without any audio reaching a server.
Demo moment (≤20 words): Feed a mock session recording; a one-page insurer attestation appears in under a minute, transcript never saved.
Business model (≤15 words): $2 per claim attestation the insurer accepts without a records request.

---
id: s3-ideator-novel-T9-01-r3#03
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
---

# Filed And Accepted, Or Free

One-liner (≤20 words): A local model preps a return from a client's documents, charging only once the IRS actually accepts the e-file.
Buyer and niche (≤25 words): Solo CPAs and EAs whose clients fear cloud handling of tax data as much as the CPA fears incomplete client documents.
Pain and evidence (≤40 words; cite the pain dossier file): pasting return data into cloud AI risks a §7216 violation carrying "up to a year in prison," while clients hand over incomplete documents during the same crunch that already drives 80-hour weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): The client hands documents to the CPA's own machine, not the cloud; a local model extracts data and flags missing forms before the client leaves, drafts the return, and existing e-file software submits it. The fee only charges once the IRS confirms acceptance, visible to both in the same local log.
Why now (≤25 words; name the specific capability): Gemma 3's local multimodal extraction plus gpt-oss-20b reasoning make full return prep viable on a solo CPA's own laptop.
Demo moment (≤20 words): Scan a document missing a form live; the tool flags it before submission, then shows the IRS acceptance receipt.
Business model (≤15 words): $12 per IRS-accepted e-file, nothing charged on rejection.

---
id: s3-ideator-novel-T9-01-r3#04
track: novel
lineage: ai-native
territory: T9
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
---

# Conflict Check, Roster Unseen

One-liner (≤20 words): Two solo law firms check for a conflict of interest without either exposing its client list to the other.
Buyer and niche (≤25 words): Solo and small-firm lawyers referring cases or forming co-counsel arrangements with firms they have never vetted for confidentiality practices.
Pain and evidence (≤40 words; cite the pain dossier file): "Solo and small-firm lawyers often cannot" get a counterparty vetted, yet referring a case means trusting an unvetted firm with a client's identity before any conflict check happens at all. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Each firm's local model hashes its own client and opposing-party names into anonymized tokens; the two firms exchange only token sets, and each local model reports whether any token matches, revealing a conflict exists without either firm learning the other's roster unless a match is confirmed.
Why now (≤25 words; name the specific capability): fast local inference engines make same-day, on-device matching practical instead of a manual, unpaid conflicts memo.
Demo moment (≤20 words): Run two mock client lists sharing one name; only that match surfaces, nothing else about either list shown.
Business model (≤15 words): $9 per referral cleared with a confirmed conflict-free result.

---
id: s3-ideator-novel-T9-01-r3#05
track: novel
lineage: ai-native
territory: T9
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
---

# Deal Diligence Without Handover

One-liner (≤20 words): Buyer's and seller's accountants each verify the other's financial claims locally, without handing over the underlying ledger.
Buyer and niche (≤25 words): Solo accountants representing either side of a small-business sale who must vet the other side's books without either fully trusting the other.
Pain and evidence (≤40 words; cite the pain dossier file): solo practitioners lack the "procurement teams, information-security officers, and vendor counsel" larger firms use to vet a counterparty, yet a sale requires exactly that vetting of the other side's numbers before closing. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Each accountant's local model summarizes their own client's ledger against the deal's required schedule; the two summaries are exchanged and each local model checks the other's summary for internal consistency and flags gaps, while the full underlying ledgers never leave either accountant's own machine.
Why now (≤25 words; name the specific capability): gpt-oss-20b's 131k context holds a small business's full ledger locally while reasoning over deal schedules offline.
Demo moment (≤20 words): Load two mock ledgers; summaries exchange and one inconsistency in the seller's inventory figure is flagged live.
Business model (≤15 words): $500 per deal that closes using the verified schedules, split between both accountants' clients.

<!-- COMPLETE -->
