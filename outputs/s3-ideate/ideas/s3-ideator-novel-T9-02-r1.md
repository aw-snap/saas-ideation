# Round 1 — Territory T9 (confidential local AI for solo regulated professionals)

## Titles

1. Local Scribe for Solo Therapists [safe] → Rewrite: Attested-Local Session Scribe — on-device note-taker with a signed no-upload certificate.
2. Air-Gapped Case-File Drafting Box [similar] → Rewrite: Sealed Evidence Locker — matter-scoped offline case index that self-destructs when the matter closes.
3. One-Click WISP Generator [safe] → Rewrite: Self-Auditing WISP — an agent that scans the practice's real software monthly against the written plan and flags drift.
4. §7216 Consent-Per-Vendor Auto-Filer
5. Local K-1/W-2 Extractor That Never Phones Home [similar] → Rewrite: Shoebox-to-Ledger, Sealed — phone photo of a W-2 posts structured numbers only, image stays on device.
6. Consent Script Generator for AI-Recorded Calls [similar] → Rewrite: Per-Session Consent Concierge — a local voice agent that gets and timestamps fresh verbal consent before each session.
7. Local LLM Installer-in-a-Box [similar] → Rewrite: Practice-in-a-Box Model Installer — auto-benchmarks a practitioner's own laptop and picks the right quantized model, no consultant.
8. Privilege-Safe Drafting Sandbox with Audit Trail
9. Therapist's Local Note Buddy [similar] → Rewrite: Malpractice-Grade Redaction Relay — a local model strips identifying facts before any cloud call, reinserts them after.
10. CPA's Local K-1 Reader [similar] → Rewrite: K-1 Season Local Copilot — reconciles K-1s against prior-year returns with nothing touching a server.
11. Confidential Contract Review on Your Laptop [safe] → Rewrite: Diff-Only Redline Viewer — shows only risk flags and changed clauses on screen, with screen-capture blocked.
12. No-Cloud Client Intake Chat Widget [safe] → Rewrite: Silent Waiting-Room Intake Kiosk — offline tablet interviews new clients by voice, syncs only client-approved fields.
13. Local AI Vendor-Diligence Checker
14. Offline Voice Scribe for Session Notes [similar] → Rewrite: Session-End Consent Snapshot — a one-tap local summary the client reviews and approves before it's saved.
15. Solo Firm's Private Copilot Subscription [safe] → Rewrite: Bring-Your-Own-Hardware Metering — priced by device class instead of enterprise seat minimums.
16. On-Prem AI for Small Law Firms [similar] → Rewrite: Regulator-Facing Local-Processing Certificate — a signed statement a solo hands a bar or licensing board.
17. Encrypted Local Note-Taking App [safe] → Rewrite: Version-Locked Local Notes — snapshots the exact model weights used per note so it can be reproduced if subpoenaed years later.
18. Local Model Marketplace for Regulated Pros [safe] → Rewrite: Vendor Contract X-Ray — reads a vendor's ToS/DPA and flags clauses that violate privilege, §7216 or HIPAA.
19. DIY Local AI Setup Wizard [similar] → Rewrite: One-Time Hardware Fit Test — a 5-minute local benchmark showing which model tier a laptop can run before buying anything.
20. Client-Side AI Redaction Tool
21. Local RAG Over Case Files
22. Private AI Concierge for Solo Practices [similar] → Rewrite: Referral Directory for Local-Only Practices — a badge letting privacy-conscious clients find practitioners who run AI on-device.
23. Browser-Based Confidential AI Notes
24. Apple Silicon Private Legal Assistant
25. Local Tax Document Extractor [similar] → Rewrite: Bank-Statement Reconciliation, Air-Gapped — monthly statements parsed and reconciled locally for bookkeeping clients.
26. On-Device HIPAA-Safe Transcription [similar] → Rewrite: Malpractice-Insurer Dashboard — a local, never-uploaded log proving every AI-assisted note followed required consent steps.
27. Solo Practice AI Compliance Bundle
28. Local AI Appliance for Regulated Professionals [similar] → Rewrite: Multi-Client Model Partition — one isolated local model instance per active matter so no client's context ever mixes with another's.
29. Zero-Cloud Legal Drafting Tool [similar] → Rewrite: Zero-Retention Draft Diff — a local drafting assistant that keeps no history beyond the current session.
30. Local-Processing Trust Certificate

## Cards

---
id: s3-ideator-novel-T9-02-r1#01
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Redaction Relay

One-liner (≤20 words): A local model strips identifying facts before any prompt reaches the cloud, then reinserts them into the answer.

Buyer and niche (≤25 words): Solo lawyers and CPAs who want frontier-model quality on client drafts without disclosing names, case facts or return data.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting client data into cloud AI risks privilege loss and IRC §7216 fines, but "the more the tax return preparer sanitizes the data, the less useful the AI output becomes." (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local model finds and swaps names, SSNs, dollar figures and case facts for placeholder tokens before sending the redacted prompt to a cloud model; a local step then reinserts real values into the returned draft, so nothing readable about the client ever left the machine.

Why now (≤25 words; name the specific capability): gpt-oss-20b runs a capable reasoning model in 16GB, fast enough to redact live before every cloud call [TC-22].

Demo moment (≤20 words): Paste a real K-1; watch placeholders leave, a drafted memo return with true names restored, live.

Business model (≤15 words): Monthly subscription per practitioner, priced below one hour of billable time.

---
id: s3-ideator-novel-T9-02-r1#02
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Proof-of-Local Session Scribe

One-liner (≤20 words): An on-device note-taker that cryptographically proves a client's session audio never left the laptop.

Buyer and niche (≤25 words): Solo therapists and counselors who want AI notes without repeating a default-on cloud scribe's trust break.

Pain and evidence (≤40 words; cite the pain dossier file): A cloud AI scribe turned on by default made a client feel "completely violated," and its de-identification claim is disputed by clinicians. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A streaming local speech model transcribes on-device, a local model drafts the note, and a signed hash chain timestamps that no network call carried the audio, producing a one-page certificate the therapist can show the client or a malpractice carrier on request.

Why now (≤25 words; name the specific capability): Kyutai's open streaming speech recognition runs at about 500ms locally, fast enough for live note-taking with no cloud round trip [TC-31].

Demo moment (≤20 words): Record a sample session; watch the note draft locally, then print the signed no-upload certificate instantly.

Business model (≤15 words): Flat monthly fee per practitioner, undercutting per-minute cloud scribe subscriptions.

---
id: s3-ideator-novel-T9-02-r1#03
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Shoebox-to-Ledger, Sealed

One-liner (≤20 words): Photograph a W-2 or receipt; a local model extracts and posts the numbers, the image never leaves the phone.

Buyer and niche (≤25 words): Solo CPAs and EAs drowning in tax-season keying who cannot legally paste return data into cloud AI.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting a K-1 into public AI without a per-vendor signed consent is a federal §7216 violation, yet manual keying drives 80-hour tax-season weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A phone app runs a small local vision-language model to read W-2, 1099 and receipt photos; only structured field values, never the image, sync to the practice's ledger over an encrypted local channel, so no scan of a real return ever crosses a cloud boundary.

Why now (≤25 words; name the specific capability): gpt-oss-20b and Gemma 3 run capable document extraction on a laptop with no server call needed [TC-22, TC-37].

Demo moment (≤20 words): Snap a sample W-2; watch fields populate a ledger while an upload indicator stays dark.

Business model (≤15 words): Per-seat seasonal pricing, cheaper than hiring a temp data-entry clerk.

---
id: s3-ideator-novel-T9-02-r1#04
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Per-Vendor Consent Autopilot

One-liner (≤20 words): Drafts and tracks the separate signed §7216 consent every AI vendor legally requires before any client data reaches it.

Buyer and niche (≤25 words): Solo tax preparers juggling multiple AI tools who must get a new named consent per vendor, per client, per year.

Pain and evidence (≤40 words; cite the pain dossier file): Rev. Proc. 2013-14 requires a distinct signed consent for each AI vendor; violations risk "a fine of up to $1,000 and up to a year in prison" per instance. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The preparer lists the AI vendors they use; the tool drafts required plain-language consent text per vendor, routes it for e-signature per client, and blocks sending that client's data to any vendor without a current signed record on file, closing the gap most violations fall through.

Why now (≤25 words; name the specific capability): Cheap 1M-token drafting models make bespoke, per-vendor, per-client consent language affordable to generate on demand [TC-25].

Demo moment (≤20 words): Add a new AI vendor; a compliant consent draft and signature request appear within seconds.

Business model (≤15 words): Per-preparer annual subscription, billed alongside existing tax software.

---
id: s3-ideator-novel-T9-02-r1#05
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# WISP That Watches Itself

One-liner (≤20 words): An on-device agent scans the practice's actual software monthly and flags where it drifted from its written security plan.

Buyer and niche (≤25 words): Solo tax preparers and accountants required to keep a Written Information Security Plan current to keep e-filing.

Pain and evidence (≤40 words; cite the pain dossier file): Preparers must certify a 15-20 page WISP yearly, with fines starting at $10,000, yet nothing checks the written plan against the real practice in between. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local agent inventories installed apps, browser extensions and shared logins on the practitioner's own machine, compares them against the WISP document's claims, and redlines the mismatches so the preparer edits one paragraph instead of rewriting the plan from a template every renewal.

Why now (≤25 words; name the specific capability): Local models capable of comparing a document against a live environment now fit a 16GB laptop with no IT hire [TC-22].

Demo moment (≤20 words): Install a risky browser extension; the WISP auto-flags the new gap within the demo.

Business model (≤15 words): Annual fee timed to PTIN renewal season.

---
id: s3-ideator-novel-T9-02-r1#06
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Vendor Contract X-Ray

One-liner (≤20 words): Reads an AI vendor's terms of service and flags every clause that violates privilege, §7216 or HIPAA before signup.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs choosing a new AI tool with no procurement or legal team to vet it.

Pain and evidence (≤40 words; cite the pain dossier file): Large firms have procurement teams negotiate data terms; "solo and small-firm lawyers often cannot," yet they still carry the duty to vet vendor contracts themselves. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The practitioner pastes or uploads a vendor's terms of service and data-processing agreement; a model checks it against a rules library built from bar opinions, §7216 and HIPAA text, and returns a plain-language pass or fail per clause with the exact risky sentence quoted alongside it.

Why now (≤25 words; name the specific capability): 1M-token context lets a whole vendor contract be checked in one pass with no manual chunking [TC-25].

Demo moment (≤20 words): Paste a real vendor's terms of service; a red-flagged clause surfaces in under ten seconds.

Business model (≤15 words): Pay-per-check, or a small annual subscription for frequent tool shoppers.

---
id: s3-ideator-novel-T9-02-r1#07
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Consent Concierge Voice Agent

One-liner (≤20 words): A local voice agent walks each client through AI-recording consent aloud and timestamps their verbal yes before a session starts.

Buyer and niche (≤25 words): Solo therapists and lawyers who must get fresh, specific consent every time, not a boilerplate clause in an engagement letter.

Pain and evidence (≤40 words; cite the pain dossier file): Ethics bodies require consent "whenever" a call is AI-recorded; boilerplate engagement-letter clauses are explicitly "not sufficient." (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Before recording starts, an on-device speech model explains in plain language, in the client's own language, what will be recorded and why, asks for verbal consent, and logs a timestamped transcript snippet of that exchange as the compliance record, all before the real session audio begins.

Why now (≤25 words; name the specific capability): Mistral's open Voxtral realtime speech model runs multilingual consent dialogue locally with sub-second delay [TC-32].

Demo moment (≤20 words): A voice agent asks for consent in Portuguese, hears "sim," logs it, then recording begins.

Business model (≤15 words): Bundled per-seat add-on to any local scribe subscription.

---
id: s3-ideator-novel-T9-02-r1#08
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r1
---

# Local-Only Trust Certificate

One-liner (≤20 words): Issues a verifiable certificate proving a specific client's AI-assisted work never left the practitioner's device.

Buyer and niche (≤25 words): Solo therapists, lawyers and CPAs who need to show skeptical clients, bar auditors or malpractice carriers that AI stayed local.

Pain and evidence (≤40 words; cite the pain dossier file): A client felt "completely violated" by undisclosed cloud AI use, and malpractice carriers are now attaching new AI conditions or exclusions to policies. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Every local inference run (a note, a draft, an extraction) is hashed and chained on-device; the tool generates a one-page, dated certificate per matter or client listing which AI tasks ran and confirming none made a network call, ready for the client's file or the carrier's audit.

Why now (≤25 words; name the specific capability): Fast local inference engines like llama.cpp and Ollama make logging every local run practical without slowing the practitioner [TC-26].

Demo moment (≤20 words): Finish a note; a signed "processed locally, verified" certificate generates for that client instantly.

Business model (≤15 words): Per-certificate fee or flat monthly add-on to any local AI tool.

<!-- COMPLETE -->
