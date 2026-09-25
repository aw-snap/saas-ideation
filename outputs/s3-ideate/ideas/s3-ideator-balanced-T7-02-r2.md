## Cards

---
id: s3-ideator-balanced-T7-02-r2#01
track: balanced
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-04-mech-3]
source_task: s3-ideator-balanced-T7-02-r2
---

# Appeal Reel

One-liner (≤20 words): An AI-drafted denial appeal is checked against real payer-portal data, then explained in a 60-second video for sign-off.

Buyer and niche (≤25 words): Practice billers and physicians at small practices fighting payer denials with AI-drafted appeal letters before submission.

Pain and evidence (≤40 words; cite the pain dossier file): AI-drafted demand letters mismatch ICD codes and dates against records, needing manual cross-check; billers separately spend hours digging through portals just to find the denial reason. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Logs into the payer portal to pull the actual denial reason and remittance codes, cross-checks every figure in the AI-drafted appeal, and renders a short timestamped video walking through only the parts that diverge, so a physician approves it in the time between patients rather than rereading the letter.

Why now (≤25 words): TC-35 cheap per-second video generation (Sora 2, about $0.10/sec) makes a personalized verification video cheaper than a staffer's read-through.

Demo moment (≤20 words): A denial plus a drafted appeal with one wrong CPT code; the video freezes exactly there, correct code shown.

Business model (≤15 words): Per-appeal fee bundled into existing billing software.

---
id: s3-ideator-balanced-T7-02-r2#02
track: balanced
lineage: seed-atom-hybrid
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: [A-seed-02-mech-2]
source_task: s3-ideator-balanced-T7-02-r2
---

# Proof or Forgery

One-liner (≤20 words): Checks whether a bug report's "proof" screen recording is real or AI-generated, then makes its own.

Buyer and niche (≤25 words): Foundations and companies backing volunteer-maintained open-source projects flooded with AI-slop vulnerability reports.

Pain and evidence (≤40 words; cite the pain dossier file): curl's maintainer found "not even one in twenty" reports real; reports now arrive with polished but fabricated evidence attached, each still costing 30 minutes to hours to disprove. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Runs the report's described exploit in a disposable sandbox of the real codebase, binds each claimed step to the exact timestamped moment it happens or fails in the sandbox log, and renders a short side-by-side video: claimed proof versus real result, for the maintainer to glance at.

Why now (≤25 words): TC-35 video generation ($0.10-0.40/sec) makes a real, narrated comparison clip cheaper than a maintainer's manual read-through.

Demo moment (≤20 words): A fabricated report claiming remote code execution goes in; the side-by-side video shows the sandbox doing nothing.

Business model (≤15 words): Flat monthly fee per project, paid by the backing foundation.

---
id: s3-ideator-balanced-T7-02-r2#03
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r2
---

# Standing Order Video Brief

One-liner (≤20 words): Turns each judge's GenAI standing order into a 30-second personalized video briefing before every filing.

Buyer and niche (≤25 words): Solo and small-firm litigators filing across many courts, each with its own GenAI disclosure or certification rule.

Pain and evidence (≤40 words; cite the pain dossier file): GenAI standing orders conflict across courts, some requiring disclosure, others requiring certified citations, "adding to confusion and imposes additional burdens and costs on litigants." (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Tracks each judge's published standing order, the same multi-gatekeeper fragmentation professionals face when every portal enforces its own rules, checks the draft filing's citations before rendering, and narrates a short video naming exactly what this judge requires plus a pass or fail on the citation check.

Why now (≤25 words): TC-35 makes a personalized per-filing briefing cheap enough to run before every submission, not just once at onboarding.

Demo moment (≤20 words): The same draft filed before two judges' orders; the two generated briefings state opposite disclosure requirements correctly.

Business model (≤15 words): Subscription priced by the number of jurisdictions a firm files in.

---
id: s3-ideator-balanced-T7-02-r2#04
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r2
---

# Adjuster Debrief Reel

One-liner (≤20 words): Cross-checks a carrier's AI claim summary against the full file, then narrates a two-minute verified video debrief.

Buyer and niche (≤25 words): Claims adjusters at carriers who re-verify AI summaries by digging through records across systems, like billers hunting a denial reason across scattered portals.

Pain and evidence (≤40 words; cite the pain dossier file): 98% of adjusters' AI-related reviews are negative; a missed detail such as "a smudge on a document" can cause a wrong payout, and the adjuster "bears the brunt." (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Reads the full claim file end to end, checks every figure in the AI summary against its source page, and renders a short narrated video that walks the adjuster past only the flagged and confirmed facts, timestamped to the exact page, instead of a full manual reread.

Why now (≤25 words): TC-35's narrated video ($0.10-0.40/sec) plus cheap long-context document reading turns a full-file recheck into minutes, not hours.

Demo moment (≤20 words): A claim file with one skipped page goes in; the video pauses on that page and reads the missed detail aloud.

Business model (≤15 words): Per-claim add-on fee sold to carriers.

---
id: s3-ideator-balanced-T7-02-r2#05
track: balanced
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T7-02-r2
---

# Bounty Reel Ledger

One-liner (≤20 words): Batch-reproduces every incoming bug report and archives a short video clip as its permanent evidence record.

Buyer and niche (≤25 words): Mid-size bug-bounty program owners who can't afford a custom in-house triage pipeline but face the same report flood.

Pain and evidence (≤40 words; cite the pain dossier file): One firm got 1,390 reports in half a year, about 70% rejected before reproduction, and built its own $2-per-report pipeline; smaller programs have no such budget. (src: outputs/s3-ideate/pain/T7-dossier.md)

How it works (≤50 words): Runs each incoming report against the real codebase in a disposable sandbox, records the attempt, and generates a short evidence clip attached to the ticket showing exactly what happened, replacing the custom pipeline a company would otherwise have to build or a dedicated triage hire it would otherwise need.

Why now (≤25 words): TC-35 makes a permanent video evidence clip per report cheap enough to generate at bounty-program volume.

Demo moment (≤20 words): A batch of twenty reports runs overnight; the morning queue shows eighteen video-backed declines and two escalations.

Business model (≤15 words): Per-seat SaaS priced below the cost of a dedicated triage hire.

<!-- COMPLETE -->
