## Titles

1. Local AI Box for Solo Lawyers [safe] → rewrite: **The Chain-of-Custody Drafter** — local AI that logs cryptographic proof no client data ever left the machine.
2. Confidential Case-File Drafting Appliance [similar to 1] → folded into #1's rewrite; dropped.
3. Offline Session-Note Scribe for Therapists [safe] → rewrite: **The Off-by-Default Scribe** — a therapy transcriber that starts opted-out and certifies deletion, the anti-SimplePractice.
4. On-Premise Tax Season Extractor [safe] → rewrite: **The Season Box** — a rented offline appliance that extracts W-2s and auto-signs the §7216 consent per vendor.
5. Privilege-Safe Drafting Desktop [similar to 1] → folded into #1; dropped.
6. §7216 Consent Vault Generator [similar to 11, 28] → rewrite: **The Per-Vendor Consent Autopilot** — watches which AI tool touched a file and drafts the exact required consent.
7. De-Identified Therapy Transcript Engine [similar to 3, 14, 21, 23] → folded into #3's rewrite; dropped.
8. One-Time-Purchase Legal AI Workstation [similar to 1] → folded into #1; dropped.
9. Air-Gapped Client File Assistant [safe] → rewrite: **The Waiting-Room Kiosk** — an offline tablet that takes client intake and witnessed consent, never touching WiFi.
10. Local LLM "Install Day" Service [similar to 17, 18, 27, 30] → rewrite: **The AI Service Truck** — a technician installs and quarterly-tunes a local AI box like an HVAC maintenance contract.
11. Consent-Per-Vendor Autogenerator [similar to 6] → folded into #6; dropped.
12. Offline W-2 Scanner for CPAs [similar to 4, 20] → folded into #4; dropped.
13. Solo Practice Local AI Appliance [similar to 1] → folded into #1; dropped.
14. No-Subscription Therapy Notes Box [similar to 3] → folded into #3; dropped.
15. On-Device Deposition Summarizer [similar to 25] → rewrite: **The Transcript That Never Left** — a local model reviews full depositions on-device instead of paying $3-8/page vendors.
16. Confidential Client Intake Extractor [similar to 9] → folded into #9; dropped.
17. Local Model Warranty & Support Plan [similar to 10] → folded into #10; dropped.
18. Flat-Fee Local AI Setup Kit [similar to 10] → folded into #10; dropped.
19. Encrypted Local Drafting Assistant [similar to 1] → folded into #1; dropped.
20. Solo CPA Receipt-to-Ledger Box [similar to 4] → folded into #4; dropped.
21. Therapist Pajama-Time Eliminator [safe] → folded into #3's rewrite (accuracy + off-hours burden addressed together); dropped as standalone.
22. Bar-Opinion-Compliant AI Notes [similar to 6] → folded into #6; dropped.
23. HIPAA-Safe Local Transcription Device [similar to 3] → folded into #3; dropped.
24. Small-Firm Local AI Bundle [similar to 1] → folded into #1; dropped.
25. Offline Document Review Station [similar to 15] → folded into #15; dropped.
26. Vendor-Diligence-Free AI Purchase [safe] → rewrite: **The Pre-Vetted Compliance Bundle** — ships with a finished diligence memo instead of a vendor contract to negotiate.
27. Local Compute Concierge for Solos [similar to 10] → folded into #10; dropped.
28. Client-Consent Script Generator [similar to 6] → folded into #6; dropped.
29. Plug-In Privacy AI for Practices [similar to 1] → folded into #1; dropped.
30. Local AI "Service Call" Model [similar to 10] → folded into #10; dropped.

Eight distinct concepts survive the merge: The Chain-of-Custody Drafter, The Off-by-Default Scribe, The Season Box, The Per-Vendor Consent Autopilot, The Waiting-Room Kiosk, The AI Service Truck, The Transcript That Never Left, The Pre-Vetted Compliance Bundle. All eight are developed below.

## Cards

---
id: s3-ideator-balanced-T9-02-r1#01
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Chain-of-Custody Drafter

One-liner (≤20 words): Local AI drafts from case files and logs cryptographic proof that nothing ever left the machine.

Buyer and niche (≤25 words): Solo and small-firm lawyers who draft motions and letters from case facts and cannot risk waiving privilege.

Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material was not privileged because the vendor owes no duty of confidentiality; every drafting session that touches case facts carries the risk. (src: outputs/s3-ideate/pain/T9-dossier.md, P1)

How it works (≤50 words): A local open-weight model drafts motions and letters entirely offline; every session writes a signed, tamper-evident log of inputs, outputs and zero network calls, which the lawyer can hand to a bar investigator or opposing counsel as proof of no disclosure.

Why now (≤25 words): gpt-oss-20b fits in 16GB and drafts offline; llama.cpp/Ollama serve it reliably on one workstation with no cloud call.

Demo moment (≤20 words): Draft a motion with wifi unplugged, then display the signed log proving zero outbound network traffic occurred.

Business model (≤15 words): $1,800 one-time hardware and software bundle plus $49/month audit-log and update subscription.

---
id: s3-ideator-balanced-T9-02-r1#02
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Off-by-Default Scribe

One-liner (≤20 words): On-device session transcription that starts opted-out and issues a deletion certificate, unlike a default-on cloud scribe.

Buyer and niche (≤25 words): Solo therapists who write SOAP notes after every session and cannot trust a vendor's opt-out AI feature.

Pain and evidence (≤40 words; cite the pain dossier file): A major scribe vendor turned on AI transcripts by default; a client felt "completely violated," and advocates dispute the vendor's de-identification claim. (src: outputs/s3-ideate/pain/T9-dossier.md, P3)

How it works (≤50 words): A visible physical switch starts every session muted; when pressed, a local speech model transcribes and a local reasoning model drafts the SOAP note, both on the therapist's own machine; the audio file is deleted immediately and a signed deletion certificate is logged.

Why now (≤25 words): Open-weight streaming transcription (Kyutai) runs locally at ~500ms delay; a 3B edge model (Voxtral) keeps audio on-device with no server bill.

Demo moment (≤20 words): Record a mock session, watch the note appear, then show the audio auto-delete with its certificate.

Business model (≤15 words): $79/month flat per therapist, no per-minute fee, cheaper than existing paid scribe subscriptions.

---
id: s3-ideator-balanced-T9-02-r1#03
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Season Box

One-liner (≤20 words): A rented offline appliance that extracts W-2s and 1099s and auto-signs the per-vendor consent tax law requires.

Buyer and niche (≤25 words): Solo CPAs and EAs during January-April crunch, keying source documents by hand under 80-hour weeks.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into a personal AI account without a signed per-vendor consent is a federal violation; the more preparers sanitize data, the less useful cloud AI becomes. (src: outputs/s3-ideate/pain/T9-dossier.md, P2, P8)

How it works (≤50 words): A pre-loaded local box reads scanned W-2s, 1099s and receipts entirely offline using an open-weight document model, posts structured entries to a local ledger, and drafts the required per-vendor consent form for the client to sign before any AI ever touches their return.

Why now (≤25 words): Open-weight local models (gpt-oss-20b) served via llama.cpp process documents fully offline, so no cloud vendor ever receives return data.

Demo moment (≤20 words): Feed a mock W-2 through the box offline; ledger entries and a signed consent PDF appear together.

Business model (≤15 words): $299 per tax season rental, plus $99 per extra client consent pack.

---
id: s3-ideator-balanced-T9-02-r1#04
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Per-Vendor Consent Autopilot

One-liner (≤20 words): Flags every client file missing a required AI consent and drafts the exact clause each regulator demands.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs who must get fresh informed consent per client, per AI tool, not a boilerplate clause.

Pain and evidence (≤40 words; cite the pain dossier file): Regulators reject boilerplate engagement-letter clauses; consent is required per client, per recorded call, and per AI vendor under tax law, with no staff to track any of it. (src: outputs/s3-ideate/pain/T9-dossier.md, P2, P4)

How it works (≤50 words): A local watcher checks each client file against a rules table built from ABA, APA and tax-consent requirements, flags any file where a required consent is missing, and has a local model draft the pre-filled addendum in the client's own matter language, ready for e-signature.

Why now (≤25 words): A local reasoning model (gpt-oss-20b) drafts exact clause language on-device, so the client's name and matter never reach a cloud API.

Demo moment (≤20 words): Open a new file; watcher flags "no consent on file," drafts the addendum in ten seconds.

Business model (≤15 words): $39/month per practitioner seat, sold to solos and small firms of three to ten.

---
id: s3-ideator-balanced-T9-02-r1#05
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Waiting-Room Kiosk

One-liner (≤20 words): An offline tablet that takes client intake and a witnessed consent signature, never touching WiFi or a server.

Buyer and niche (≤25 words): Solo lawyers and therapists whose staff retype paper intake forms and chase signed consent before every AI-assisted session.

Pain and evidence (≤40 words; cite the pain dossier file): Consent must be obtained per client, and clients themselves distrust AI handling their data; a kiosk that captures both on paper-like glass in the room builds trust rather than eroding it. (src: outputs/s3-ideate/pain/T9-dossier.md, P4, P13)

How it works (≤50 words): A locked-down tablet in the waiting room reads a client's handwritten or typed intake form, converts it into structured fields with an on-device model, shows the required AI-use disclosure, and captures a witnessed signature; the device is set to airplane mode and syncs later over a wired cable.

Why now (≤25 words): Apple's on-device Foundation Models framework does extraction and classification locally with no backend, purpose-built for exactly this footprint.

Demo moment (≤20 words): Fill a mock form on the kiosk in airplane mode; structured fields and signed consent PDF appear.

Business model (≤15 words): $899 kiosk hardware one-time, plus $29/month software license per device.

---
id: s3-ideator-balanced-T9-02-r1#06
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The AI Service Truck

One-liner (≤20 words): A technician installs and quarterly-tunes a local AI box for a solo practice, billed like an HVAC contract.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs who want private AI but have no IT staff and cannot afford a five-figure consultant.

Pain and evidence (≤40 words; cite the pain dossier file): Privacy-preserving local setups assume compute and skills small practices lack; self-hosting is sold as a five-figure consulting job most solos cannot afford. (src: outputs/s3-ideate/pain/T9-dossier.md, P9)

How it works (≤50 words): A technician delivers a pre-configured mini-PC loaded with an open-weight model, installs it on-site in under an hour, and returns quarterly to update the model, check disk encryption and refresh consent templates, the same visit cadence as a seasonal HVAC tune-up.

Why now (≤25 words): gpt-oss-20b runs on a single consumer GPU; llama.cpp/Ollama serve it reliably, so a technician needs a $1,500 box, not a data center.

Demo moment (≤20 words): Unbox a mini-PC, run the installer live, draft a memo fully offline in under ten minutes.

Business model (≤15 words): $1,500 hardware plus $150 per quarterly visit, well under a five-figure consultant install.

---
id: s3-ideator-balanced-T9-02-r1#07
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Transcript That Never Left

One-liner (≤20 words): A local model reviews full deposition transcripts on-device instead of paying vendors $3-8 per page to summarize them.

Buyer and niche (≤25 words): Solo litigators and small-firm attorneys who currently send depositions to outside vendors or pay contract reviewers by the hour.

Pain and evidence (≤40 words; cite the pain dossier file): Deposition summaries are sent to third-party vendors at $3-8 per page, and document review is staffed as commodity labor at $30-125 an hour. (src: outputs/s3-ideate/pain/T9-dossier.md, P12)

How it works (≤50 words): A local open-weight model with a long context window ingests a full deposition transcript directly on the attorney's machine, flags key admissions and contradictions against the complaint, and drafts a summary memo, with the transcript file never leaving the firm's network or reaching a vendor.

Why now (≤25 words): Long-context open models paired with the steep drop in inference cost make a full, non-chunked local pass over a transcript affordable.

Demo moment (≤20 words): Load a 200-page mock deposition offline; a flagged-admissions summary appears in minutes, network monitor idle.

Business model (≤15 words): $199/month flat per attorney, replacing per-page vendor billing entirely.

---
id: s3-ideator-balanced-T9-02-r1#08
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r1
---

# The Pre-Vetted Compliance Bundle

One-liner (≤20 words): A local AI bundle that ships with a finished vendor-diligence memo, so a solo never negotiates a data contract.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs priced out of enterprise AI tools that require procurement and security teams they don't have.

Pain and evidence (≤40 words; cite the pain dossier file): The strongest confidentiality terms are negotiated by procurement teams solos lack; flagship tools run $428-1,200 per seat with 20-25 seat minimums, and solos are still expected to vet contracts themselves. (src: outputs/s3-ideate/pain/T9-dossier.md, P5)

How it works (≤50 words): Because the model runs entirely on the buyer's own hardware, there is no vendor data-processing agreement to negotiate at all; the bundle ships with a pre-filled one-page diligence memo citing the relevant bar or tax-consent opinion, ready to drop straight into the practice's compliance file.

Why now (≤25 words): Open-weight models under a permissive license mean no vendor contract to negotiate, only a hardware purchase with the license attached.

Demo moment (≤20 words): Show the included one-page diligence memo beside a lengthy redacted enterprise data-processing agreement for contrast.

Business model (≤15 words): $2,200 one-time bundle including hardware, software, diligence memo and one year of updates.

<!-- COMPLETE -->
