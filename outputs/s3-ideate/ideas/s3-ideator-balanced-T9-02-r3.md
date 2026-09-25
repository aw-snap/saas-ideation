## Cards

---
id: s3-ideator-balanced-T9-02-r3#01
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
---

# Point-and-Ask Case File Reader

One-liner (≤20 words): Point your phone at a case file and ask a question aloud; a local model answers by voice.

Buyer and niche (≤25 words): Solo and small-firm lawyers reviewing paper case files who need quick answers without typing or risking privilege by uploading anything.

Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material was not privileged, because the vendor owes no duty of confidentiality; every session touching case facts carries that risk. (src: outputs/s3-ideate/pain/T9-dossier.md, P1)

How it works (≤50 words): The phone camera photographs a document page; an on-device model reads it, and a local language model answers spoken questions about it aloud through the speaker. No screen taps or typing; the photo and transcript are deleted at session end unless the lawyer says "keep."

Why now (≤25 words): Apple's on-device Foundation Models framework reads the photographed page and Voxtral's 3B edge model transcribes spoken questions, entirely on the phone.

Demo moment (≤20 words): Point the phone at a motion, ask "what's the deadline," hear the answer spoken back instantly.

Business model (≤15 words): $59/month per practitioner, unlimited on-device queries, no per-page or per-minute fee.

---
id: s3-ideator-balanced-T9-02-r3#02
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
---

# The Walking Deposition Checker

One-liner (≤20 words): Flip through a printed deposition, snap each page, and ask aloud whether it contradicts the complaint.

Buyer and niche (≤25 words): Solo litigators reviewing paper depositions and exhibits who currently pay outside vendors per page for summaries.

Pain and evidence (≤40 words; cite the pain dossier file): Deposition summaries are sent to third-party vendors at $3-8 per page, and document review is staffed as commodity labor at $30-125 an hour. (src: outputs/s3-ideate/pain/T9-dossier.md, P12)

How it works (≤50 words): As the attorney photographs each page, an on-device model reads it against the complaint already loaded on the phone. A spoken question like "does this admit liability" gets a spoken yes-or-no with the page and line read back, entirely offline, no transcript ever sent anywhere.

Why now (≤25 words): Apple's on-device Foundation Models framework classifies each page against the loaded complaint locally, avoiding per-page vendor fees and any cloud upload.

Demo moment (≤20 words): Photograph three exhibit pages, ask "any admissions," hear the flagged page and line spoken back.

Business model (≤15 words): $149/month flat per attorney, replacing $3-8-per-page vendor summaries entirely.

---
id: s3-ideator-balanced-T9-02-r3#03
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
---

# The Receipt Call

One-liner (≤20 words): Point the phone at each receipt, say the category aloud, and hear the running total confirmed.

Buyer and niche (≤25 words): Solo CPAs and EAs keying W-2s, 1099s and receipts by hand through 80-hour tax season weeks.

Pain and evidence (≤40 words; cite the pain dossier file): W-2, 1099 and receipt data is keyed by hand every season; pasting the same data into cloud AI without a signed per-vendor consent is a federal violation. (src: outputs/s3-ideate/pain/T9-dossier.md, P2, P8)

How it works (≤50 words): The phone camera photographs each receipt or form; an on-device model reads the amount and date, the preparer speaks the category ("travel," "meals"), and a local model logs a structured ledger entry, reading the running total back aloud. No document image or figure ever leaves the phone.

Why now (≤25 words): Voxtral's 3B edge model handles spoken categorization and an on-device vision model reads receipt fields, keeping every dollar figure off any server.

Demo moment (≤20 words): Photograph a receipt, say "travel," hear "logged, three hundred forty dollars, travel, running total updated."

Business model (≤15 words): $39/month per preparer during tax season, $9/month off-season.

---
id: s3-ideator-balanced-T9-02-r3#04
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
---

# The Session Note Camera

One-liner (≤20 words): Photograph a client's paper intake sheet, dictate the session, and hear the drafted note read back.

Buyer and niche (≤25 words): Solo therapists writing SOAP notes after hours who distrust a default-on cloud scribe.

Pain and evidence (≤40 words; cite the pain dossier file): A major scribe vendor turned on AI transcripts by default, and therapists already spend 10-20 hours a week on documentation, much of it after hours. (src: outputs/s3-ideate/pain/T9-dossier.md, P3, P6)

How it works (≤50 words): The phone camera captures the client's handwritten intake sheet; the therapist then dictates session observations aloud. An on-device model merges both into a SOAP note and reads it back for spoken approval before saving; nothing is transcribed or stored until the therapist says "approved."

Why now (≤25 words): Voxtral's edge model transcribes the dictation and Apple's on-device Foundation Models draft and read back the note, so no audio leaves the phone.

Demo moment (≤20 words): Photograph a mock intake sheet, dictate two sentences, hear the drafted SOAP note read back for approval.

Business model (≤15 words): $69/month per therapist, undercutting existing scribe subscriptions with no per-minute fee.

---
id: s3-ideator-balanced-T9-02-r3#05
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r3
---

# The Spoken Vendor Consent

One-liner (≤20 words): Photograph a client's signed consent form and speak the AI vendor's name to confirm a valid consent record.

Buyer and niche (≤25 words): Solo CPAs and EAs who need a separate signed consent for every AI vendor before touching a client's return data.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into AI without a standalone signed consent per vendor is a federal violation with up to a year in prison, and the rule resets whenever the provider changes. (src: outputs/s3-ideate/pain/T9-dossier.md, P2)

How it works (≤50 words): The preparer photographs the client's signed paper consent form with the phone camera, then says the AI vendor's name aloud; an on-device model checks the form covers that exact vendor and logs a timestamped record, refusing aloud and stating why if the named vendor isn't covered.

Why now (≤25 words): On-device vision reads the signed form and Voxtral's edge model captures the spoken vendor name, so no client document is ever transmitted to check compliance.

Demo moment (≤20 words): Photograph a consent form, say "TaxGPT," hear confirmation; say "CPAPilot," hear a spoken refusal, no consent on file.

Business model (≤15 words): $25/month per preparer, one flat fee covering unlimited vendor consent checks.

<!-- COMPLETE -->
