## Titles

1. Privilege-Safe Local Drafting Box [safe]
   Rewrite: IRS-Safe Local Tax Copilot
2. Confidential Notes, No Cloud Ever [safe]
   Rewrite: Session Notes That Never Leave the Laptop
3. The Solo Practice's Own Model [similar to #8, #12, #21]
   Rewrite: Plug-In Confidential AI Box
4. §7216-Proof Tax Assistant
5. Consent-Per-Client Autopilot
6. Local Scribe That Never Hallucinates Names [similar to #16, #30]
   Rewrite: Grounded Notes With Timestamp Citations
7. Offline Dictation for the Session Room [similar to #6, #16]
   Rewrite: Consent Captured, Session Recorded Locally
8. The One-Box Law Office AI [similar to #3, #12]
   Rewrite: Deposition Digest That Never Leaves the Firm
9. Air-Gapped Bookkeeping Assistant
10. Vendor-Diligence-in-a-Box
11. WISP Generator for Solo CPAs
12. Local AI Appliance, Plug and Go [similar to #3, #8]
    Rewrite: Malpractice-Ready AI Audit Trail
13. Night-Shift Note Catch-Up Tool [safe]
    Rewrite: Pajama-Time Note Drafter, Locked to Device
14. De-Identified Transcript Vault
15. The Solo Lawyer's Local Paralegal [safe]
    Rewrite: Case-File Memo Drafter, Zero Upload
16. Therapist's Private Session Recorder [similar to #6, #7]
    Rewrite: Trust-Rebuild Scribe With Fabrication Flags
17. Tax Season Local OCR Sprint
18. On-Device Deposition Summarizer
19. Consent Script Builder for AI Calls [similar to #5]
    Rewrite: Per-Call Disclosure Player and Logger
20. Malpractice-Safe AI Toolkit [safe]
    Rewrite: Insurer-Ready AI Usage Ledger
21. The Confidential Compute Concierge [similar to #3, #8, #12]
    Rewrite: Hardware-Free Local Model Refresh Service
22. Small-Firm AI Procurement Bypass [similar to #10]
    Rewrite: Solo-Sized Vendor Contract Reader
23. Local Model Refresh Subscription [safe]
    Rewrite: Quarterly Model Swap, No Downtime Promise
24. Client-File Firewall Assistant [safe]
    Rewrite: Outbound-Traffic Killswitch for Practice AI
25. Solo Practitioner's Black Box [similar to #3, #8, #12, #21]
    Rewrite: Unbox-and-Draft Appliance for Solos
26. Per-Vendor Consent Autopilot [similar to #5, #19]
    Rewrite: One Form Per AI Vendor, Auto-Filed
27. Offline W-2 and 1099 Reader [similar to #17]
    Rewrite: Receipt Pile to Ledger, Never Uploaded
28. The No-Cloud Practice Suite [safe]
    Rewrite: Three Professions, One Offline Model
29. Local AI for the Overworked Solo [safe]
    Rewrite: 80-Hour-Week Season, Local AI Backup
30. Trust-Rebuild Scribe for Therapists [similar to #6, #7, #16]
    Rewrite: Client-Facing Consent Screen Before Recording

## Cards

---
id: s3-ideator-balanced-T9-01-r1#01
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# IRS-Safe Local Tax Copilot

One-liner (<=20 words): Drafts client tax letters and return notes locally, so K-1 and W-2 data never reaches a cloud vendor.

Buyer and niche (<=25 words): Solo CPAs, EAs and seasonal 1040 preparers who want AI help without triggering an IRC §7216 disclosure violation.

Pain and evidence (<=40 words): Pasting return data into personal AI without a signed Rev. Proc. 2013-14 consent is a federal disclosure violation, up to $1,000 and a year in prison per instance; redacting first erases the AI's usefulness. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): Runs gpt-oss-20b through Ollama on the preparer's own laptop; ingests scanned K-1s and W-2s locally, drafts client letters and return notes, and keeps a tamper-evident local log proving zero outbound calls, only escalating to cloud tools when the preparer signs a per-vendor consent form.

Why now (<=25 words): gpt-oss-20b fits a 16GB laptop and Ollama serves it at usable speed on consumer hardware, no GPU cluster required.

Demo moment (<=20 words): Import a sample K-1, watch the letter draft, then show the firewall log with zero outbound calls.

Business model (<=15 words): Monthly per-preparer subscription, with a discounted tax-season bundle.

---
id: s3-ideator-balanced-T9-01-r1#02
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Consent Captured, Session Recorded Locally

One-liner (<=20 words): Plays the required AI-recording disclosure, captures spoken consent, then transcribes the session entirely on the therapist's own device.

Buyer and niche (<=25 words): Solo therapists and counselors who must get explicit per-session consent before any AI-assisted recording, under APA, ACA and NYC Bar rules.

Pain and evidence (<=40 words): Consent must be obtained every session, not once in a template; a client called a silently-enabled AI scribe "completely violated," and NYC Bar Op. 2025-6 requires notice, consent and independent transcript review each time. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): Before recording starts, the app displays and reads aloud the required disclosure, waits for a clear verbal "yes," timestamps that moment locally, then hands off to on-device speech recognition for the session, with audio never leaving the laptop.

Why now (<=25 words): Kyutai's open-weight streaming speech recognition runs offline with about 500ms delay, fast enough for live consent capture on ordinary hardware.

Demo moment (<=20 words): Start a mock session, say "yes" to the disclosure, watch the timestamp lock, then see offline transcription start.

Business model (<=15 words): Per-clinician monthly subscription, priced below one incumbent scribe's plan.

---
id: s3-ideator-balanced-T9-01-r1#03
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Grounded Notes With Timestamp Citations

One-liner (<=20 words): Drafts SOAP notes from session audio entirely on-device, flagging any sentence it cannot trace back to the recording.

Buyer and niche (<=25 words): Solo therapists on a 25-30 client caseload who write notes after hours and cannot trust incumbent AI scribes to stop inventing content.

Pain and evidence (<=40 words): Existing scribes fabricate session content ("the AI makes things up that are not said") and users report daily errors; therapists already spend 10-20 hours a week on documentation, mostly off the clock. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local speech-to-text model transcribes the session, then a local language model drafts a SOAP note, tagging each clinical claim with the transcript timestamp it came from; any untagged sentence is highlighted for the clinician to verify or delete before saving.

Why now (<=25 words): Open-weight models like gpt-oss-20b run reasoning-grade drafting on a 16GB laptop, and Voxtral's edge model transcribes locally in real time.

Demo moment (<=20 words): Play a scripted session, click a flagged sentence, jump straight to the audio moment it lacks.

Business model (<=15 words): Per-clinician monthly subscription with a free tier capped at five notes.

---
id: s3-ideator-balanced-T9-01-r1#04
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Deposition Digest That Never Leaves the Firm

One-liner (<=20 words): Summarizes deposition transcripts and case files on the lawyer's own machine instead of a $1-8-per-page outside vendor.

Buyer and niche (<=25 words): Solo and small-firm litigators who currently pay third-party services to summarize depositions and cannot vet those vendors' confidentiality.

Pain and evidence (<=40 words): Deposition summaries are outsourced at $3-8 per page ($300-1,500 per transcript) and document review is staffed as commodity labor, sending client material outside the firm each time. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A locally hosted long-context model ingests a full deposition transcript or case file, produces a digest with page-linked citations and a flagged-inconsistency list, all inside the firm's own network with no transcript ever uploaded to a vendor.

Why now (<=25 words): gpt-oss-20b's 131k-token context and consumer-GPU speeds mean a whole deposition transcript fits in one local pass.

Demo moment (<=20 words): Load a sample 80-page deposition transcript, get a one-page digest with citations in under a minute, offline.

Business model (<=15 words): Per-matter fee, undercutting outside deposition-summary vendors by a wide margin.

---
id: s3-ideator-balanced-T9-01-r1#05
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Vendor-Diligence-in-a-Box

One-liner (<=20 words): Reads a solo firm's AI vendor contracts and drafts the WISP and per-vendor consent forms regulators require.

Buyer and niche (<=25 words): Solo lawyers and CPAs who must vet AI vendor contracts themselves and file a written information security plan with no compliance staff.

Pain and evidence (<=40 words): Solos "cannot" get procurement teams to negotiate data terms and are still expected to vet vendor contracts themselves; a solo WISP runs 15-20 pages and must be certified yearly. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): Point it at a folder of vendor terms-of-service and DPAs; it flags clauses that fail bar or IRS confidentiality duties, drafts the matching consent form for each new AI vendor, and assembles a ready-to-sign WISP from the practice's actual tool list.

Why now (<=25 words): Long-context models read an entire vendor contract stack in one pass instead of chunking it by hand.

Demo moment (<=20 words): Drop in three sample vendor contracts, watch it flag a missing clause and generate a ready-to-sign consent form.

Business model (<=15 words): Annual flat fee per practice, refreshed whenever a new AI vendor is added.

---
id: s3-ideator-balanced-T9-01-r1#06
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Unbox-and-Draft Appliance for Solos

One-liner (<=20 words): A pre-configured local AI box a solo practitioner can plug in and use the same day.

Buyer and niche (<=25 words): Solo lawyers, therapists and accountants who want confidential AI but cannot afford or find a local-LLM consultant.

Pain and evidence (<=40 words): A firm's own local-LLM install runs about $35,000 with a consultant, and most solos "lack access to such advanced and costly infrastructure," so unmanaged consumer cloud AI becomes the default instead. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): Ships as a small installer that detects the practitioner's laptop specs, installs Ollama and gpt-oss-20b, pre-loads drafting, note and extraction templates for the practitioner's profession, and runs a one-click network-lockdown check before first use.

Why now (<=25 words): gpt-oss-20b fits 16GB of RAM and Ollama already serves quantized models at 50-250 tokens per second on ordinary laptops.

Demo moment (<=20 words): Run the installer live, draft a memo from a sample file five minutes later, no GPU needed.

Business model (<=15 words): One-time setup fee plus an annual model-refresh subscription.

---
id: s3-ideator-balanced-T9-01-r1#07
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Insurer-Ready AI Usage Ledger

One-liner (<=20 words): Logs every AI-assisted task with model version and reviewer sign-off, ready to hand to a malpractice carrier at renewal.

Buyer and niche (<=25 words): Solo lawyers whose malpractice carriers now attach AI-use conditions or exclusions to their policies.

Pain and evidence (<=40 words): Malpractice carriers are attaching AI conditions and exclusions, and Rules 5.1 and 5.3 make the lawyer responsible for how staff use AI, with no existing way to prove compliant use. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): Sits alongside the firm's local drafting tools, recording which matter, which model, whether it ran on-device, and when a human reviewed the output, then compiles a one-click summary report timed to the malpractice policy renewal date.

Why now (<=25 words): Because inference already runs client-side on models like gpt-oss-20b, every AI action can be logged locally with no cloud audit gap to trust.

Demo moment (<=20 words): Draft a document, mark it reviewed, then generate a renewal-ready compliance report in one click.

Business model (<=15 words): Add-on per-seat subscription, bundled through malpractice insurance brokers.

---
id: s3-ideator-balanced-T9-01-r1#08
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r1
---

# Receipt Pile to Ledger, Never Uploaded

One-liner (<=20 words): Turns a shoebox of W-2s, 1099s and receipts into ledger entries on the preparer's own laptop during tax-season crunch.

Buyer and niche (<=25 words): Solo tax preparers keying source documents by hand through 80-hour weeks every January to April.

Pain and evidence (<=40 words): Source documents are keyed by hand every tax season, with 80-plus-hour weeks and seasonal temps hired at about $19.47 an hour just to keep up with the pile. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): Batch-scans a folder of W-2s, 1099s and receipts through a locally hosted extraction model, outputs structured rows ready to import into the practice's ledger software, and never sends a single page to a cloud OCR service.

Why now (<=25 words): Open document-extraction models paired with local inference engines like llama.cpp turn a stack of scans into structured data without a network call.

Demo moment (<=20 words): Drop in twenty scanned W-2s, watch structured rows populate a spreadsheet within seconds, wifi off the whole time.

Business model (<=15 words): Seasonal subscription priced for the four-month tax crunch.

<!-- COMPLETE -->
