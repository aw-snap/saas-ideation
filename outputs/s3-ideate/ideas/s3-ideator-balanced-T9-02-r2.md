## Cards

---
id: s3-ideator-balanced-T9-02-r2#01
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r2
---

# The Compliance Portal Copilot

One-liner (≤20 words): A local-first agent drafts and files yearly WISP, PTIN and insurer AI-attestation forms without ever touching client files.

Buyer and niche (≤25 words): Solo CPAs, EAs and small-firm lawyers who must file security plans, PTIN renewals and insurer AI riders with no admin staff.

Pain and evidence (≤40 words; cite the pain dossier file): Every e-filer must maintain a 15-20 page WISP and certify it yearly; malpractice carriers now attach AI-use riders and exclusions, all falling on someone with no staff to track deadlines. (src: outputs/s3-ideate/pain/T9-dossier.md, P10)

How it works (≤50 words): A local model drafts the WISP and insurer attestation from a short interview using only firm-level facts, no client names. A browser agent then logs into the IRS PTIN portal and the insurer's site, fills each form, tracks renewal dates across sites, and confirms submission.

Why now (≤25 words): In-browser agents now fill forms across sites inside the user's own logged-in session, so firm compliance data never needs a separate cloud account.

Demo moment (≤20 words): Answer five setup questions; the agent drafts the WISP, then live-fills the PTIN portal and confirms submission.

Business model (≤15 words): $25/month per practitioner, auto-renewing each filing cycle, replacing template downloads.

---
id: s3-ideator-balanced-T9-02-r2#02
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [A-seed-05-mech-1, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T9-02-r2
---

# The Local Box Self-Check

One-liner (≤20 words): A watchdog agent diagnoses and self-heals the practice's own local AI appliance, showing evidence before any change.

Buyer and niche (≤25 words): Solo lawyers, therapists and CPAs running a local AI box for client drafting, with no IT staff to maintain it.

Pain and evidence (≤40 words; cite the pain dossier file): Self-hosting is sold as a five-figure consulting job most solos cannot afford, so drift and silent failures between visits go unnoticed until the box stops working. (src: outputs/s3-ideate/pain/T9-dossier.md, P9)

How it works (≤50 words): A background process checks disk space, model integrity and outbound network calls, then shows the evidence before proposing any fix. Approved fixes take an automatic restore point first, with one-click undo, so a single silent failure never pushes the practitioner back onto risky consumer AI out of urgency.

Why now (≤25 words): gpt-oss-20b served through llama.cpp or Ollama is stable enough to run an always-on watchdog alongside the drafting model on one workstation.

Demo moment (≤20 words): Simulate a disk-full error; the agent shows evidence, applies the approved fix, then undoes it live.

Business model (≤15 words): $19/month self-diagnostic add-on, replacing most quarterly technician visits.

---
id: s3-ideator-balanced-T9-02-r2#03
track: balanced
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: [A-seed-03-mech-1, A-seed-03-insight-1]
source_task: s3-ideator-balanced-T9-02-r2
---

# The Local Client Memory

One-liner (≤20 words): Narrate a quick voice note after each client call; a local model builds a private, searchable case history.

Buyer and niche (≤25 words): Solo CPAs and lawyers who carry years of client context in memory and re-derive it from scratch each season.

Pain and evidence (≤40 words; cite the pain dossier file): Therapists and lawyers already lose 10-20 hours a week to documentation and review, much of it outside work hours, leaving no time to also write down tacit client context. (src: outputs/s3-ideate/pain/T9-dossier.md, P6)

How it works (≤50 words): After a call, the practitioner narrates a short update. A local speech model transcribes it and a local reasoning model extracts a dated, confidence-tagged entry into a private client-history file, queryable later, with nothing ever sent to a cloud vendor or requiring a new consent form.

Why now (≤25 words): Kyutai's open-weight streaming transcription runs locally at roughly 500ms delay, and gpt-oss-20b extracts structured notes on the same workstation.

Demo moment (≤20 words): Narrate a mock case update aloud; a structured entry appears, then a query pulls it back up instantly.

Business model (≤15 words): $49/month add-on to existing case-management software, priced per practitioner.

---
id: s3-ideator-balanced-T9-02-r2#04
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r2
---

# The Scribe Fact-Checker

One-liner (≤20 words): Checks an AI scribe's session note line-by-line against the actual recording before it gets filed, locally.

Buyer and niche (≤25 words): Solo therapists using an AI scribe tool who must re-read every note in full to catch fabricated content.

Pain and evidence (≤40 words; cite the pain dossier file): Users report an AI scribe "makes things up that are not said in the session," with major errors every day, so every note still needs a full re-read. (src: outputs/s3-ideate/pain/T9-dossier.md, P7)

How it works (≤50 words): A local model re-aligns the scribe's draft note against the session's own local transcript, flags any sentence with no matching audio, and highlights it for the therapist to confirm or delete before filing, the same cross-check a denial specialist runs against the original claim record.

Why now (≤25 words): Local streaming transcription (Kyutai, about 500ms delay) plus a local reasoning model can compare note to audio on one machine, no cloud round-trip.

Demo moment (≤20 words): Feed a note with one invented sentence; the checker flags it in red against the transcript timeline.

Business model (≤15 words): $15/month add-on that plugs into any existing scribe tool's export.

---
id: s3-ideator-balanced-T9-02-r2#05
track: balanced
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T9-02-r2
---

# The Consent Gate

One-liner (≤20 words): Classifies on-device whether required AI-use consent was actually spoken before a call recording is kept at all.

Buyer and niche (≤25 words): Solo therapists and lawyers who must get fresh, specific consent every time a client call is recorded or transcribed by AI.

Pain and evidence (≤40 words; cite the pain dossier file): A bar opinion requires clients be notified and consent obtained whenever a call is AI-recorded, plus independent review of the transcript, on top of per-vendor consent duties elsewhere. (src: outputs/s3-ideate/pain/T9-dossier.md, P4)

How it works (≤50 words): Before any AI transcription proceeds, an on-device model listens for and classifies whether the required consent statement was actually spoken; if not detected, the recording is blocked and deleted rather than sent on, giving the practitioner the independent-review record regulators ask for.

Why now (≤25 words): Apple's on-device Foundation Models framework is built for exactly this kind of local classification, not world knowledge, so audio never reaches a server. [unverified: exact API scope]

Demo moment (≤20 words): Play a call with no consent line; the app blocks and deletes it, then plays one with consent, which proceeds.

Business model (≤15 words): $9/month per practitioner, bundled as a compliance gate inside any scribe app.

<!-- COMPLETE -->
