## Titles

1. Privilege-Safe Draft Assistant — on-device drafting from case files, cloud never touched
2. Redact-Then-Ask Bridge — local model strips identifiers before any cloud call, reinserts after
3. Vendor-Consent Ledger — auto-drafts and tracks per-AI-vendor consent forms
4. Local Session Scribe — on-device therapy note drafting, audio never leaves the laptop
5. Fabrication Catch — verifier that checks an AI-drafted note against the actual session audio, on-device
6. Offline Deposition Digest — on-device summarizer for litigators, transcript never uploaded
7. WISP-in-an-Hour — auto-drafts and keeps current the written information security plan
8. Consent Conversation Coach — on-device roleplay so a practitioner rehearses the client-specific informed-consent talk
9. Tax-Season Local Extractor — on-device W-2/1099/K-1 structuring, zero cloud upload
10. AI-in-a-Box Setup Wizard — turns a laptop into a compliant local model in under an hour
11. Shift-Handover Brief — local AI ranks which matters need attention today, by deadline risk [similar to #20]
12. Trust Badge Generator — client-facing, verifiable proof a document was processed only locally [similar to #29]
13. Client-Call Guard — on-device listener pauses cloud tools the instant a call turns sensitive [similar to #8]
14. Malpractice-Policy Matcher — checks the practice's AI use against the carrier's new AI exclusions
15. Engagement-Letter Consent Builder — per-matter consent clause generator [similar to #3 and #8]
16. Billing Narrative Drafter — local AI turns raw time notes into client-ready billing narratives
17. Double-Check Companion — on-device model argues the other side of a solo practitioner's own draft [similar to #5]
18. Local Legal-Research Sandbox — offline Q&A over the firm's own filed documents, not the open web
19. Treatment-Plan Assembler — on-device therapy treatment plan from session notes [similar to #4]
20. Precedent Memory Assistant — local AI surfaces how this practitioner handled similar past matters
21. Compute Right-Sizer — recommends cheapest local hardware for a given caseload [safe, no real AI loop]
22. Interruption-Proof Note Capture — local note-taking that resumes cleanly after a walk-in interruption
23. Audit-Trail Notary — cryptographic proof a document never left the device [similar to #12]
24. Hardware Health Monitor for Practice AI — infra uptime monitoring [safe, thin AI loop]
25. Local Client-Email Drafter — on-device replies that quote confidential file contents safely [similar to #1]
26. Solo-Firm Compliance Starter Kit — bundles local model, consent forms and WISP for a new practice [safe, packaging not product]
27. Cross-File Confidentiality Leak Scanner — scans outgoing text for accidental client-identifying leaks before send
28. Voice-to-Structured-Intake — local ASR turns a client interview straight into structured intake fields
29. Explainable Redaction Receipt — a one-page receipt showing exactly what was stripped before a cloud call
30. Confidence-Scored Local Drafts — the local model underlines its own low-confidence spans for manual checking [rewrite of #24]

### Rewrites of marked titles
- #11 → **Precedent Memory Assistant** (see #20): local AI retrieves how this practitioner handled similar past matters, using its own long local archive, instead of ranking today's to-do list.
- #12 → **Explainable Redaction Receipt** (see #29): trust proof is delivered as a per-transaction receipt tied to the redaction bridge, not a standalone certificate product.
- #13 → **Silent Consent Interrupter**: a listener that pauses a specific cloud tool (not just "guards calls" generically) the instant client-identifying speech is detected, with an audible confirmation chime.
- #15 → **Consent Conversation Coach** (see #8): rehearsal, not a static clause generator — addresses regulators' "boilerplate is not enough" finding directly.
- #17 → **Fabrication Catch** (see #5): checks against the session's own audio record, a concrete source of truth, rather than a generic "argue the other side" pass.
- #19 → **Continuity Contradiction Tracker**: flags conflicts between this session's notes and prior sessions, a distinct check from note generation itself.
- #21 → **Confidence-Scored Local Drafts**: instead of recommending hardware, the model exposes its own per-sentence uncertainty so trust is earned inside the draft, not before it.
- #23 → folded into Explainable Redaction Receipt (#29): the proof is a plain-language receipt a client can read, not a cryptographic artifact only an auditor would use.
- #24 → **Confidence-Scored Local Drafts**: same rewrite as #21, reframed away from infrastructure monitoring toward an AI-native trust signal inside every draft.
- #25 → folded into Privilege-Safe Draft Assistant (#1): email drafting is one output format of the same on-device drafting loop, not a separate product.
- #26 → **Cross-File Confidentiality Leak Scanner** (#27): a starter kit is a bundle, not a loop; the leak scanner is the one piece of it that is an actual live AI check.

## Cards

---
id: s3-ideator-novel-T9-01-r1#01
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Draft From Case Files, Offline

One-liner (≤20 words): An open-weight model drafts motions and letters straight from a lawyer's case files, entirely on their own laptop.
Buyer and niche (≤25 words): Solo and small-firm lawyers who currently paste case facts into consumer ChatGPT despite the privilege risk, because enterprise AI is priced for big firms.
Pain and evidence (≤40 words; cite the pain dossier file): a federal ruling held AI-drafted material was not privileged, yet "solo and small-firm lawyers often cannot" get procurement-negotiated safe tools priced $428-$639/month. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local app loads a case file folder, runs an open-weight reasoning model on the lawyer's own machine to draft motions and letters, and never opens a network connection during generation, matching the firm's existing document templates.
Why now (≤25 words; name the specific capability): gpt-oss-20b fits in 16GB RAM and reasons near o3-mini level, runs on ordinary laptops via llama.cpp/Ollama-class local inference engines.
Demo moment (≤20 words): Disable wifi, load a sample case file, watch a full draft motion appear in under two minutes with zero network traffic.
Business model (≤15 words): $79-149/month per solo seat, undercutting enterprise legal AI subscriptions by 5-10x.

---
id: s3-ideator-novel-T9-01-r1#02
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Redact Locally, Then Ask The Cloud

One-liner (≤20 words): A local model strips client-identifying facts before any question reaches a cloud AI, then reinserts the real details.
Buyer and niche (≤25 words): Solo therapists, lawyers and accountants who want cloud-model quality on hard questions without ever exposing a real client's identity.
Pain and evidence (≤40 words; cite the pain dossier file): pasting case or tax data into consumer AI risks privilege loss and criminal §7216 exposure, yet "the more the preparer sanitizes the data, the less useful the AI output becomes." (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local model finds names, SSNs, dates and dollar figures in the practitioner's question, swaps them for placeholder tokens, sends only the redacted question to a cloud model, then substitutes the real values back into the returned draft on-device before it is shown.
Why now (≤25 words; name the specific capability): open-weight models (gpt-oss-20b, Gemma 3) now run fast enough locally to redact and reinsert in real time before every cloud call.
Demo moment (≤20 words): Type a question naming a client and a dollar figure; watch it swap to placeholders live, then snap real names back in.
Business model (≤15 words): $49/month subscription plus a small per-query cloud pass-through fee.

---
id: s3-ideator-novel-T9-01-r1#03
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Catches When The AI Note Lies

One-liner (≤20 words): A local model re-checks an AI-generated therapy note against the actual session audio and flags anything invented.
Buyer and niche (≤25 words): Solo therapists already using an AI scribe who currently must re-read every note by hand because the scribe fabricates content.
Pain and evidence (≤40 words; cite the pain dossier file): "The AI makes things up that are not said in the session," with users reporting "major errors throughout the day every day" from incumbent scribes. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): After any scribe drafts a note, a second small local model listens to the original session audio and highlights every sentence in the note that it cannot find support for in the recording, entirely offline, so the therapist only re-reads the flagged lines.
Why now (≤25 words; name the specific capability): Kyutai STT and Mistral Voxtral give fast, private, on-device transcription accurate enough to cross-check note claims in minutes.
Demo moment (≤20 words): Feed a five-minute mock session recording plus a note with one invented sentence; only that sentence gets highlighted.
Business model (≤15 words): $39/month add-on layered on top of any existing AI scribe tool.

---
id: s3-ideator-novel-T9-01-r1#04
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# W-2s To Ledger, Never Uploaded

One-liner (≤20 words): An on-device model turns scanned W-2s, 1099s and K-1s into structured entries without the images ever leaving the machine.
Buyer and niche (≤25 words): Solo CPAs and EAs in the January-April crunch who currently key return data by hand to avoid federal disclosure exposure.
Pain and evidence (≤40 words; cite the pain dossier file): pasting return data into cloud AI without a signed per-vendor consent is a §7216 violation with fines "up to $1,000 and up to a year in prison," so preparers still key data by hand through 80-hour weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local vision-capable open model [unverified exact accuracy] reads scanned tax documents on the preparer's own machine, extracts line items into structured records, and exports directly to the firm's existing tax-software file format, with no image or figure ever sent to a server.
Why now (≤25 words; name the specific capability): open-weight models like Gemma 3 run multimodal extraction on ordinary laptops at 128K context, paired with fast local inference engines.
Demo moment (≤20 words): Drop ten scanned W-2 images into the tool with wifi off; a structured CSV populates in under a minute.
Business model (≤15 words): $59/month per preparer seat, priced against $19.47/hour seasonal temp labor it replaces.

---
id: s3-ideator-novel-T9-01-r1#05
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Security Plan, Drafted From Setup

One-liner (≤20 words): A local model scans the practice's own file structure and software list, then drafts and updates the mandatory written security plan.
Buyer and niche (≤25 words): Solo CPAs and EAs who must file a written information security plan to e-file but have no IT staff to write one.
Pain and evidence (≤40 words; cite the pain dossier file): every e-filer must keep a 15-20 page written information security plan, with fines starting at $10,000 for a missing one, and no admin staff exists at a solo practice to write it. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local agent inventories the practitioner's software, folders and login setup on their own machine, maps findings onto the plan template's required sections, drafts the document naming the firm's real systems, and flags any section still missing before the annual renewal deadline.
Why now (≤25 words; name the specific capability): gpt-oss-20b runs offline on ordinary hardware, so a document naming a firm's actual systems never has to be sent to draft it.
Demo moment (≤20 words): Point the tool at a sample folder tree; a complete draft naming the real software appears in under a minute.
Business model (≤15 words): $29/month, cheaper than a one-time compliance consultant engagement.

---
id: s3-ideator-novel-T9-01-r1#06
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Rehearse The Consent Talk First

One-liner (≤20 words): An on-device model role-plays a skeptical client so a solo practitioner can rehearse explaining AI use before every new matter.
Buyer and niche (≤25 words): Solo lawyers, therapists and accountants required to obtain informed consent tailored to each client, not a boilerplate clause, for every AI use.
Pain and evidence (≤40 words; cite the pain dossier file): "merely adding general, boiler-plate provisions... is not sufficient," and clients "must be notified, and their consent obtained," every time, which is recurring unstaffed work for a solo practitioner. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): The practitioner picks a matter type; a local model plays a client raising real objections ("is my data safe?"), the practitioner answers out loud, and the model scores whether the answer covered what the relevant ethics opinion actually requires, with no client audio ever recorded.
Why now (≤25 words; name the specific capability): fast local inference paired with open-weight reasoning models makes realistic offline role-play newly practical on ordinary hardware.
Demo moment (≤20 words): Run a 90-second role-play; the coach flags one required disclosure the practitioner forgot to mention.
Business model (≤15 words): $25/month, sold as a compliance-training add-on through professional associations.

---
id: s3-ideator-novel-T9-01-r1#07
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Stops The Leak Before Sending

One-liner (≤20 words): A local model scans outgoing emails and cloud-AI prompts for verbatim client-identifying text before it leaves the device.
Buyer and niche (≤25 words): Solo lawyers, therapists and accountants who already know the actual risk is client data leaving their control unnoticed, not AI itself.
Pain and evidence (≤40 words; cite the pain dossier file): a privilege ruling, a §7216 criminal exposure and a default-on AI scribe scandal all trace back to client data leaving the practitioner's device without them noticing. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A lightweight local model watches the clipboard and outgoing text fields, matches phrases against the practitioner's own local case and client files, and blocks or warns before a paste reaches a browser tab pointed at a cloud AI or webmail site, showing exactly which phrase matched.
Why now (≤25 words; name the specific capability): on-device browser AI (Chrome built-in AI) and fast local inference make real-time, private text scanning possible with no server round trip.
Demo moment (≤20 words): Paste a paragraph with a real client's SSN into a ChatGPT tab; the paste is intercepted with the matched phrase shown.
Business model (≤15 words): $19/month per seat, sold as a browser extension.

---
id: s3-ideator-novel-T9-01-r1#08
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r1
---

# Local Draft, Marked Where To Check

One-liner (≤20 words): The on-device model underlines every low-confidence sentence in its own draft so the practitioner knows exactly what to verify.
Buyer and niche (≤25 words): Solo practitioners who worry a smaller local model is less reliable than the big cloud models they are avoiding for confidentiality reasons.
Pain and evidence (≤40 words; cite the pain dossier file): incumbent AI tools "make things up" that are not in the source material, and solo practitioners lack the staff to re-read every AI output line by line. (src: outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): The local model generates a draft, then re-scores its own output token by token, underlining spans it produced with low internal certainty, so the practitioner's manual check targets exactly those few sentences instead of the whole document.
Why now (≤25 words; name the specific capability): open-weight models like gpt-oss-20b expose token-level probabilities locally, a signal closed cloud APIs rarely surface to end users.
Demo moment (≤20 words): Generate a draft client letter; three phrases are underlined, one of which is a genuinely wrong date.
Business model (≤15 words): Bundled into the $79/month draft-assistant seat, no separate charge.

<!-- COMPLETE -->
