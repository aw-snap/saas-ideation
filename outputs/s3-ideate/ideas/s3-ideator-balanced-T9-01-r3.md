## Cards

---
id: s3-ideator-balanced-T9-01-r3#01
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r3
---

# Screen Agent Drafts Session Notes

One-liner (<=20 words): A local model transcribes therapy sessions, then a screen agent types the note directly into the desktop EHR.

Buyer and niche (<=25 words): Solo therapists using legacy desktop clinical-documentation software with no export API, drafting SOAP notes for a 25-30 client caseload.

Pain and evidence (<=40 words): Therapists spend 10-20 hours a week on documentation, 60-70% after hours; incumbent AI scribes fabricate session content, so every note still needs manual re-entry into the desktop EHR. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local speech model transcribes the session offline; a local language model drafts the SOAP note; a local GUI-agent model then opens the desktop EHR and types each field directly, since the software has no API, with the clinician reviewing before saving.

Why now (<=25 words): Open-weight GUI-grounding models like UI-TARS click and type in desktop apps locally, paired with on-device speech and language models, no cloud call.

Demo moment (<=20 words): Play a mock session; watch the cursor open the EHR and fill note fields itself, wifi disabled throughout.

Business model (<=15 words): Per-clinician monthly subscription, priced below cloud AI scribe competitors.

---
id: s3-ideator-balanced-T9-01-r3#02
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r3
---

# Screen Agent Files Deposition Digests

One-liner (<=20 words): A local model digests a deposition transcript, then a screen agent types it straight into the firm's own case file.

Buyer and niche (<=25 words): Solo litigators using legacy practice-management software with no import API, who currently pay outside vendors to summarize depositions.

Pain and evidence (<=40 words): Deposition summaries are outsourced at $3-8 per page, $300-1,500 per transcript, sending client material outside the firm; solos also lack procurement teams to vet a safer alternative. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local long-context model reads the full transcript and drafts a citation-linked digest; a local GUI-agent model then opens the firm's practice-management software and types the digest directly into the matter's notes field, since the software exposes no API, with the file never leaving the machine.

Why now (<=25 words): gpt-oss-20b's 131k-token context digests a full transcript locally, and open GUI-agent models operate legacy practice-management screens with no API.

Demo moment (<=20 words): Load a transcript, watch the digest draft, then watch the cursor paste it into the matter file, offline.

Business model (<=15 words): Per-matter fee, undercutting outside deposition-summary vendors.

---
id: s3-ideator-balanced-T9-01-r3#03
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r3
---

# Screen Agent Walks Tax Software

One-liner (<=20 words): A local model reads scanned W-2s, then a screen agent enters each value into the desktop tax software itself.

Buyer and niche (<=25 words): Solo tax preparers using desktop interview-mode software like Drake or ProSeries, keying source documents by hand through the January-April crunch.

Pain and evidence (<=40 words): Source documents are keyed by hand every tax season through 80-plus-hour weeks, and pasting return data into cloud AI without a per-vendor consent form is a federal §7216 violation. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local vision model reads each scanned W-2 or 1099; a local GUI-agent model then navigates the tax software's own multi-screen interview mode, clicking to the right form and typing each box's value, pausing for the preparer to confirm before it advances a screen.

Why now (<=25 words): Gemma 3's multimodal variants read scanned tax forms locally, and open GUI-agent models operate the desktop software's own screens with no API.

Demo moment (<=20 words): Drop in a scanned W-2; watch the cursor click through the interview screens and fill each box, wifi off.

Business model (<=15 words): Seasonal subscription priced for the four-month tax crunch.

---
id: s3-ideator-balanced-T9-01-r3#04
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r3
---

# Screen Agent Reconciles Trust Accounts

One-liner (<=20 words): A screen agent cross-checks a scanned bank statement against the desktop trust-ledger app, flagging any mismatched line, offline.

Buyer and niche (<=25 words): Solo lawyers required to reconcile client trust (IOLTA) accounts three ways every month, using legacy trust-accounting desktop software with no bank-feed API.

Pain and evidence (<=40 words): Malpractice carriers now attach AI-use conditions to policies and documentation already swallows the day; solos also lack procurement teams to vet a safer cloud alternative for trust records. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local vision model reads the scanned bank statement; a local GUI-agent model opens the trust-accounting module and clicks through each ledger row comparing it to the statement, then writes a local three-way reconciliation report flagging every mismatch, all offline.

Why now (<=25 words): Open GUI-agent models ground clicks in desktop finance modules locally, and on-device language models compare scanned statement text to ledger rows with no cloud call.

Demo moment (<=20 words): Load a scanned statement; watch it click through the trust ledger live and flag one mismatched entry.

Business model (<=15 words): Monthly subscription priced per trust account managed.

---
id: s3-ideator-balanced-T9-01-r3#05
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-01-r3
---

# Screen Agent Certifies Security Settings

One-liner (<=20 words): A screen agent walks the desktop tax software's security screens and drafts the annual WISP filing itself.

Buyer and niche (<=25 words): Solo CPAs and EAs who must certify their e-file software's security settings yearly under a written information security plan, with no compliance staff.

Pain and evidence (<=40 words): A solo WISP runs 15-20 pages and must be certified at every PTIN renewal; preparer fines start at $10,000, and FTC Safeguards fines start at $100,000 per violation. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (<=50 words): A local GUI-agent model opens the desktop tax software's admin and security-settings screens, walks every configuration panel, and checks it against the WISP checklist; a local language model then drafts the completed WISP document with screenshots as evidence, never leaving the machine.

Why now (<=25 words): Open-weight GUI-agent models like UI-TARS-2 navigate legacy desktop settings menus, and gpt-oss-20b writes the WISP document, both running fully self-hosted.

Demo moment (<=20 words): Launch the tool; watch it click through security tabs and produce a signed-ready WISP in minutes.

Business model (<=15 words): Annual flat fee per practice, timed to PTIN renewal.

<!-- COMPLETE -->
