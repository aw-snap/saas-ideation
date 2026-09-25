# Round 3 — Territory T9 (confidential local AI for solo regulated professionals)

Constraints: C08 (lives inside a messaging app the user already has) and C16 (works for someone who can't read well).

## Cards

---
id: s3-ideator-novel-T9-02-r3#01
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r3
---

# Spoken Consent, In-Thread

One-liner (≤20 words): A local voice agent explains AI recording and gets a client's verbal "yes" right inside the WhatsApp thread they already use.

Buyer and niche (≤25 words): Solo therapists and lawyers who must get fresh, specific consent for every client, including ones who cannot easily read a form.

Pain and evidence (≤40 words; cite the pain dossier file): Ethics rules require consent "whenever" a call is AI-recorded, and boilerplate engagement-letter clauses are explicitly "not sufficient" — a written form also assumes the client reads comfortably. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Before a session, a local speech model messages the client's existing WhatsApp thread, explains in plain spoken language what will be recorded and why, asks for a verbal reply, and timestamps that audio as the consent record, with nothing but the exchange itself ever leaving the practitioner's machine.

Why now (≤25 words; name the specific capability): Mistral Voxtral runs realtime multilingual speech locally with sub-second delay, enough for a live spoken consent exchange on one laptop [TC-32].

Demo moment (≤20 words): Send a WhatsApp voice note asking about recording; hear the spoken explanation, reply "sim," watch the consent log appear.

Business model (≤15 words): Per-practitioner monthly fee, bundled with any local scribe subscription.

---
id: s3-ideator-novel-T9-02-r3#02
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r3
---

# Read-Aloud Session Digest

One-liner (≤20 words): After each session, a local model drafts and speaks a short client summary as a WhatsApp voice note, never a document.

Buyer and niche (≤25 words): Solo therapists writing after-hours notes for clients who cannot easily read a written after-visit summary.

Pain and evidence (≤40 words; cite the pain dossier file): Therapists lose 10-20 hours a week to documentation, and a cloud scribe's default-on transcripts left one client feeling "completely violated" — a written summary also assumes the client reads it. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local model on the therapist's laptop drafts a short, plain-language recap of what was covered and next steps, reads it aloud, and the therapist taps once to send it as a WhatsApp voice note in the existing client thread, with the session audio and text never leaving the machine.

Why now (≤25 words; name the specific capability): gpt-oss-20b drafts the recap and a local speech pass reads it aloud, both inside 16GB with no server call [TC-22].

Demo moment (≤20 words): End a mock session; a voice note drafts, plays back, and sends over WhatsApp in under a minute.

Business model (≤15 words): Flat monthly fee per practitioner, add-on to a local scribe subscription.

---
id: s3-ideator-novel-T9-02-r3#03
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r3
---

# Tax Doc Voice Walkthrough

One-liner (≤20 words): A client photographs a W-2 over WhatsApp; a local model posts the numbers and replies with a spoken explanation.

Buyer and niche (≤25 words): Solo CPAs and EAs whose clients already text documents, some of whom cannot easily read a line-item tax report.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting a K-1 into public AI without a signed per-vendor consent risks "a fine of up to $1,000 and up to a year in prison," yet manual keying drives 80-hour tax-season weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The client sends a document photo through the WhatsApp thread they already use with their accountant; a local vision model on the accountant's machine reads the fields, posts them to the ledger, and replies with a short spoken explanation of what it found, so no image or return data reaches a cloud AI vendor.

Why now (≤25 words; name the specific capability): gpt-oss-20b and Gemma 3 extract tax-document fields on a laptop with no server call, fast enough for same-thread replies [TC-22, TC-37].

Demo moment (≤20 words): Send a sample W-2 photo over WhatsApp; a voice note reads back wages and withholding within seconds.

Business model (≤15 words): Per-seat seasonal pricing, cheaper than hiring a data-entry temp.

---
id: s3-ideator-novel-T9-02-r3#04
track: novel
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: verifier, track: novel }
parents: [A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-novel-T9-02-r3
---

# WISP Alerts In Your Channel

One-liner (≤20 words): A local agent checks the practice against its written security plan and posts spoken alerts into the team's existing Slack or Teams.

Buyer and niche (≤25 words): Solo tax preparers and small firms who must keep a Written Information Security Plan current but dread reading dense compliance documents.

Pain and evidence (≤40 words; cite the pain dossier file): Every e-filer must keep a signed 15-20 page WISP, with fines starting at $10,000, yet nothing checks the written plan against daily practice between renewals. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local agent checks the practice's real apps and logins against the written WISP, then posts each mismatch as a short spoken clip in the firm's existing Teams or Slack channel with the evidence audible; a spoken reply of "fix it" applies the change after taking a restore point, one tap to undo.

Why now (≤25 words; name the specific capability): gpt-oss-20b compares a live machine's state to policy text inside 16GB, cheap enough to run monthly with no IT hire [TC-22].

Demo moment (≤20 words): Install a risky extension; a spoken alert lands in Slack seconds later; saying "fix it" reverses it live.

Business model (≤15 words): Annual fee timed to PTIN and WISP renewal season.

---
id: s3-ideator-novel-T9-02-r3#05
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T9-02-r3
---

# Case Questions, Answered Aloud

One-liner (≤20 words): A client texts a case question by SMS; a local model drafts a plain-language answer and replies as a voice message.

Buyer and niche (≤25 words): Solo lawyers whose clients text questions between meetings, including clients who cannot easily read dense legal replies.

Pain and evidence (≤40 words; cite the pain dossier file): Boilerplate engagement-letter clauses are explicitly "not sufficient" for informed AI consent, and the dense legal text those letters use is exactly what a client with limited reading ability struggles with. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The client texts a question into the SMS thread they already have with the lawyer; a local model on the lawyer's machine drafts a short plain-language answer grounded in the case file, converts it to speech, and sends it back as a voice message in the same thread, with the case file never leaving the device.

Why now (≤25 words; name the specific capability): gpt-oss-20b drafts client-facing explanations locally, fast enough for same-thread SMS voice replies with no cloud call [TC-22].

Demo moment (≤20 words): Text "what does discovery mean for my case"; get a spoken plain-language answer back within seconds.

Business model (≤15 words): Per-practitioner monthly fee, priced below one hour of billable time.

<!-- COMPLETE -->
