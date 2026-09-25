---
id: I-5301
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: screen-agent, track: novel }
parents: [I-2519, I-3529]
source_task: s7-mutator-03
operator: combine
---

# Portal Rule-Pack Submit Guard

One-liner (≤20 words): Watches a solo professional's own portal session and holds submit until every rule in that portal's pack clears.

Buyer and niche (≤25 words): Solo CPAs, EAs and small-firm lawyers filing PTIN renewals, insurer riders and court e-filings through different portals.

Pain and evidence (≤40 words; cite the pain dossier file): Malpractice carriers now attach AI-use riders while fabricated citations already cost one firm $59,500 in fees, so a single filing can fail on facts, attachments or cites. (src: outputs/s3-ideate/pain/T9-dossier.md, P10; outputs/s3-ideate/pain/T7-dossier.md, P1)

How it works (≤50 words): A screen agent reads the open portal form by vision and checks it against that portal's rule pack: does the attestation match firm-level facts on file, is a required attachment present, does each cited case resolve. Any failed rule greys out submit until the professional fixes it themselves.

Why now (≤25 words; name the specific capability): Computer-use agents now read a live on-screen form and hold a button state across an entire filing session.

Demo moment (≤20 words): Fill a PTIN form with a missing attachment and a fake cite; the agent flags both and blocks submit.

Business model (≤15 words): Per-portal monthly subscription, priced per rule pack the practitioner enables.

---
id: I-5302
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: screen-agent, track: balanced }
parents: [I-2061, I-4501]
source_task: s7-mutator-03
operator: combine
---

# Traced Notes Typed By Replay

One-liner (≤20 words): Drafts a timestamp-cited note on-device, then replays only traced sentences into a web EHR with no API.

Buyer and niche (≤25 words): Solo therapists using a web-based EHR with no export API, writing SOAP notes after a 25-30 client caseload.

Pain and evidence (≤40 words; cite the pain dossier file): Therapists spend 10-20 hours a week on documentation, 60-70% after hours, and still re-key every AI-drafted note into the EHR by hand. (src: outputs/s3-ideate/pain/T9-dossier.md, P6)

How it works (≤50 words): A local model transcribes the session and drafts a SOAP note, tagging each sentence with its transcript timestamp. The clinician records the EHR's note form once as a field map; a screen agent then replays only timestamp-cited sentences into those fields, leaving untraced sentences for review.

Why now (≤25 words; name the specific capability): Browser agents now replay a recorded field map reliably into sites with no write API, so no cloud model ever reads the note.

Demo moment (≤20 words): Approve a drafted note; watch the agent type only cited sentences into a mock EHR tab, skipping one flagged line.

Business model (≤15 words): Per-clinician monthly subscription, priced below cloud AI scribe competitors.

---
id: I-5303
track: balanced
lineage: ai-native
territory: T2
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: [I-1062, I-3070]
source_task: s7-mutator-03
operator: combine
---

# One-Example Split Ledger

One-liner (≤20 words): Correct one client's mixed-rate or mixed-use split by hand once, and every later document from that client splits itself.

Buyer and niche (≤25 words): Solo accountants and bookkeepers during tax season, handling clients whose bills mix VAT rates, entities or business-personal use.

Pain and evidence (≤40 words; cite the pain dossier file): Invoices with more than one tax code break extraction and force a manual fix after every sync, and solo preparers already work 80+ hour weeks each tax season keying source documents by hand. (src: outputs/s3-ideate/pain/T2-dossier.md)

How it works (≤50 words): Upload one client's mixed-rate invoice or shared bill; correct the split by percentage or line once. That correction becomes a reusable allocation rule for that specific client, so their remaining receipts, invoices and bills split and post to the ledger automatically, flagged for a final glance.

Why now (≤25 words; name the specific capability): Line-level OCR now extracts tax and allocation fields accurately enough that one corrected split holds as a reusable template per client.

Demo moment (≤20 words): Correct one client's 60/40 mixed-use bill by hand; a second bill from that client splits and posts on its own.

Business model (≤15 words): Per-client monthly fee, capped rate for high-volume mixed-rate clients.

---
id: I-5304
track: balanced
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [I-3093, A-seed-05-mech-2]
source_task: s7-mutator-03
operator: simplify
---

# Local Citation Existence Check

One-liner (≤20 words): Confirms every citation in a brief actually exists, matching reporter, volume, page and name, entirely on the lawyer's laptop.

Buyer and niche (≤25 words): Solo and small-firm litigators drafting motions who want a fast pre-check before sending a brief to a paid cite-checker or filing.

Pain and evidence (≤40 words; cite the pain dossier file): Fabricated citations already cost one firm $59,500, and paid legal AI still hallucinates at 17-43%, so even a first existence pass needs to run before anything reaches a portal. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): A downloaded bulk case-law index sits on the laptop. The tool pulls every citation from the draft, looks it up in the local index, and shows the matching entry's reporter, volume, page and party names side by side with what the brief says, flagging any citation the index cannot find.

Why now (≤25 words; name the specific capability): Open case-law datasets now fit on a laptop, so a full existence check runs without a cloud call or a privilege risk.

Demo moment (≤20 words): Feed a brief with one made-up case; the tool shows no matching index entry next to the flagged citation.

Business model (≤15 words): Flat monthly license per solo attorney, priced below one manual cite-check.

---
id: I-5305
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: [I-1503]
source_task: s7-mutator-03
operator: simplify
---

# WISP Built From Your Screenshots

One-liner (≤20 words): Turns uploaded console exports and screenshots into a dated Written Information Security Plan, no live login required.

Buyer and niche (≤25 words): Solo CPAs, EAs and tax preparers who must file a yearly WISP under the FTC Safeguards Rule with no admin staff.

Pain and evidence (≤40 words; cite the pain dossier file): Every e-filer must keep a WISP, and fines start at $10,000 for preparers and $100,000 per violation, yet a solo has no one to write it and no time for a live audit. (src: outputs/s3-ideate/pain/T9-dossier.md, P10)

How it works (≤50 words): The preparer exports settings or screenshots for each admin panel: tax software, email, cloud storage. The tool extracts each Safeguards Rule control's actual state from that evidence and drafts a dated WISP naming each control's real status, flagging gaps to close.

Why now (≤25 words; name the specific capability): Document extraction now reads dashboard screenshots and export files well enough to state a control's real setting, not just describe the console.

Demo moment (≤20 words): Upload three screenshots; a dated WISP appears naming one control as missing, citing the exact screenshot.

Business model (≤15 words): Annual fee per preparer, priced under one FTC Safeguards fine.

---
id: I-5306
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: prosumer, capability: screen-agent, track: balanced }
parents: [I-2519]
source_task: s7-mutator-03
operator: simplify
---

# SPRS Affirmation Autopilot

One-liner (≤20 words): Records itself filling last year's SPRS affirmation, then replays the exact same click path this year with your updated score.

Buyer and niche (≤25 words): One-person defense subcontractors and consultants who self-affirm a NIST 800-171 score in the SPRS portal every year.

Pain and evidence (≤40 words; cite the pain dossier file): DFARS 252.204-7012 attestations that do not match reality have already drawn six-figure False Claims Act settlements against small subcontractors, and a solo has no compliance staff to walk the portal correctly. (src: outputs/s3-ideate/pain/T5-dossier.md, P5)

How it works (≤50 words): The consultant walks through the SPRS affirmation once while the tool records every click and field. Each year after, they update only their current NIST 800-171 score in one box; the tool replays the recorded path, fills the rest identically, and stops before submit for a final look.

Why now (≤25 words; name the specific capability): Record-and-replay browser automation now holds a click path reliably across a full year between runs.

Demo moment (≤20 words): Record one SPRS affirmation live; change one score field, replay the saved path, and watch it refill the rest.

Business model (≤15 words): Flat annual fee per solo affirmation, priced under one consultant's hourly rate for the task.

---
id: I-5307
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: prosumer, capability: screen-agent, track: balanced }
parents: [I-1024]
source_task: s7-mutator-03
operator: transplant
---

# Solo PA Status Roundup

One-liner (≤20 words): Checks your own prior-authorization statuses across your two or three payer portals each morning, ranked by what needs you first.

Buyer and niche (≤25 words): Solo therapists and physicians with no billing staff, tracking their own patients' prior authorizations across a few payer portals.

Pain and evidence (≤40 words; cite the pain dossier file): Practices spend 16-24 minutes per portal check on prior-auth status, one payer at a time, work a solo clinician does alone before or between patients. (src: outputs/s3-ideate/pain/T1-dossier.md, P3)

How it works (≤50 words): Each night the agent logs into the clinician's own two or three payer portals, opens every pending prior authorization, records its status, age and next required action, and produces one ranked list waiting before the first patient of the day.

Why now (≤25 words; name the specific capability): Browser agents now run unattended overnight across several logged-in sessions and hand back a finished summary by morning.

Demo moment (≤20 words): Kick off an overnight run on two demo portals; a ranked list with one stalled request appears at wake-up.

Business model (≤15 words): Monthly subscription priced per portal connected.

---
id: I-5308
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: prosumer, capability: screen-agent, track: balanced }
parents: [I-3059]
source_task: s7-mutator-03
operator: transplant
---

# DMARC Fix, Not Just Report

One-liner (≤20 words): Reads your DMARC report, then logs into your own registrar and fixes the failing DNS record itself.

Buyer and niche (≤25 words): Solo consultants and small practices sending their own appointment reminders or newsletters, with no one who manages DNS.

Pain and evidence (≤40 words; cite the pain dossier file): Only 55% of low-volume senders had heard of the SPF/DKIM/DMARC rules; guided-fix dashboards exist [unverified] but still leave the owner to paste the corrected record into the registrar themselves. (src: outputs/s3-ideate/pain/T5-dossier.md, P12)

How it works (≤50 words): The agent reads the daily DMARC aggregate report, identifies which sending source is failing authentication, then opens the practitioner's own registrar console, writes the corrected SPF, DKIM or DMARC record, saves it, and re-queries DNS until the fixed record resolves.

Why now (≤25 words; name the specific capability): Browser agents now operate registrar admin panels directly, the same skill payer-portal and insurer agents already use on other consoles.

Demo moment (≤20 words): Feed a week of failing DMARC XML; watch the agent edit a mock registrar record live and confirm it resolves.

Business model (≤15 words): $20-40/month flat subscription per domain.

---
id: I-5309
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: prosumer, capability: extractor, track: balanced }
parents: [I-1027]
source_task: s7-mutator-03
operator: transplant
---

# Solo Appeal Packet From Your Own Notes

One-liner (≤20 words): Turns your own denial letter and chart notes into a payer's appeal form, fully filled, ready to upload.

Buyer and niche (≤25 words): Solo therapists and physicians handling their own denied claims and prior authorizations, with no billing staff to assemble appeals.

Pain and evidence (≤40 words; cite the pain dossier file): Denial reasons are often inaccessible or inaccurate in payer portals, forcing exhaustive cross-checking to assemble one appeal, and 81.7% of appealed Medicare Advantage denials are overturned once filed. (src: outputs/s3-ideate/pain/T1-dossier.md, P9)

How it works (≤50 words): The clinician drops in the denial letter, EOB and relevant chart pages. The tool extracts the denial code, dates, procedure and payer-cited reason, matches them to that payer's own appeal form fields, and produces a filled packet the clinician reviews before uploading themselves.

Why now (≤25 words; name the specific capability): Document extraction now reads scanned denial letters and handwritten chart notes accurately enough to fill a structured form directly.

Demo moment (≤20 words): Drop in a scanned denial and two chart pages; a filled appeal packet appears in under 30 seconds.

Business model (≤15 words): Per-packet fee, or a monthly plan with a packet cap.

---
id: I-5310
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s7-mutator-03
operator: far-jump
---

# Local Screen Time, Billed

One-liner (≤20 words): An on-device model watches your own screen and turns the day into billable time entries per matter, nothing ever uploaded.

Buyer and niche (≤25 words): Solo lawyers, therapists and consultants who bill hourly and lose revenue to unlogged, unbillable time between task switches.

Pain and evidence (≤40 words; cite the pain dossier file): Lawyers bill only 2.9 of 8 hours, a 38% utilization rate; cloud AI timekeepers exist [unverified] but upload screen data, repeating the same confidentiality exposure these practitioners already avoid. (src: outputs/s3-ideate/pain/T9-dossier.md, P6)

How it works (≤50 words): A local vision model [verify] watches window titles, document names and app switches on the practitioner's own machine, groups activity into matter-level blocks, and drafts a time entry per block with start, end and a one-line description, all inferred and stored on-device.

Why now (≤25 words; name the specific capability): On-device vision-language models [verify] now run screen understanding locally at usable speed, so no screen ever leaves the machine.

Demo moment (≤20 words): Work through three mock tasks on screen; three matter-tagged time entries with durations appear, wifi disabled throughout.

Business model (≤15 words): Per-practitioner monthly subscription, priced against one recovered billable hour a month.

<!-- COMPLETE -->
