### I-5301 Portal Rule-Pack Submit Guard

Verdict: clear

Competitors found: none matching the same niche/mechanism. WebMCP (Chrome dev spec, developer.chrome.com) lets an agent focus/pre-fill forms but is a browser API, not a professional-facing rule-pack submit blocker.

Note: No product found that watches a professional's own portal session and greys out submit until a per-portal rule pack clears. Closest hits are dev-tooling specs, not shipped products.

### I-5302 Traced Notes Typed By Replay

Verdict: adjacent-exists

Competitors:
- Upheal (upheal.io) — browser extension fills notes into any EHR with one click, but is a cloud AI scribe, not an on-device model with timestamp-traced sentence replay.
- Quill (quilltherapysolutions.com) — copy/paste notes into any EHR/EMR, no field-map replay or local-only processing claim.

Note: EHR-autofill AI scribes exist (Upheal, Quill) but rely on cloud transcription/drafting; none traces sentences to transcript timestamps or guarantees no cloud model reads the note.

### I-5303 One-Example Split Ledger

Verdict: adjacent-exists

Competitors:
- Xero rule-based coding (xero.com) — lets firms set supplier-level VAT rules, but rules are configured manually, not learned from one corrected split.
- Stampli invoice coding (stampli.com) — supports split coding across lines/accounts but no per-client reusable allocation learned from a single correction.

Note: Split-coding and rule-based VAT allocation exist broadly in accounting software, but no tool found turns one hand-corrected mixed-rate split into an automatic reusable template per client.

### I-5304 Local Citation Existence Check

Verdict: adjacent-exists

Competitors:
- HalluCiteChecker (arxiv.org/pdf/2604.26835) — described as a lightweight, offline-capable hallucinated-citation toolkit; appears to be a research artifact rather than a confirmed commercial product for solo litigators.
- CiteCheck AI / TypeLaw (typelaw.com) — verify citations exist and flag hallucinations, but cross-reference against cloud services (e.g., CourtListener) rather than a fully local laptop index.

Note: Cloud-based cite-checkers are common; only one offline-oriented toolkit surfaced, and its status as a live commercial product (vs. research code) is unverified.

### I-5305 WISP Built From Your Screenshots

Verdict: clear

Competitors found: WISP templates and consulting services (Bellator Cyber, Verito, IRS Pub 5708/5709) help solo preparers draft a WISP, but none extracts each control's actual state from uploaded console screenshots or exports.

Note: WISP generation is a crowded template/consulting space, but no product found that drafts the plan by reading screenshots of actual admin-panel settings.

### I-5306 SPRS Affirmation Autopilot

Verdict: adjacent-exists

Competitors:
- RADICL (radicl.com) — automatically calculates the SPRS score during assessment, but doesn't record/replay the practitioner's own click path into the SPRS portal.
- Peerless DoD SPRS Scoring Tool (getpeerless.com) — free score calculator, same gap: scoring only, not portal automation.

Note: Several tools auto-calculate the SPRS score; none found records a practitioner's own portal session and replays the click path a year later to refill it.

### I-5307 Solo PA Status Roundup

Verdict: adjacent-exists

Competitors:
- TinyFish web agents for insurance (tinyfish.ai) — agents monitor prior-auth status across payer portals and flag delays, same mechanism but built for larger practice/payer-ops teams, not solo no-staff clinicians.
- Agentman Medman (agentman.ai) — AI prior-auth agent checking authorization status across portals, enterprise/practice-oriented pricing and setup.

Note: Overnight multi-portal prior-auth status agents already exist (TinyFish, Agentman, Notable Health) but target practices with staff, not the solo no-billing-staff niche specifically.

### I-5308 DMARC Fix, Not Just Report

Verdict: adjacent-exists

Competitors:
- PowerDMARC (powerdmarc.com) — generates/checks DMARC records but requires the user to paste the record into their own registrar manually.
- EasyDMARC (easydmarc.com) — same gap: record generation and lookup, no automatic registrar login/write.

Note: DMARC report/record-generator tools are common; search explicitly found none that logs into the registrar and writes the corrected record itself.

### I-5309 Solo Appeal Packet From Your Own Notes

Verdict: direct-competitor

Competitors:
- EZAppeal (ezappeal.com) — uploads denial letter and clinical notes, matches payer policy criteria against chart evidence, flags missing evidence, generates payer-specific appeal, no EHR integration required — same niche and mechanism.
- River (rivereditor.com) — free AI appeal-letter generator incorporating clinical details from notes into the appeal.

Note: EZAppeal matches this idea closely: denial + chart notes in, payer-specific filled appeal out, evidence-matched and gap-flagged, live product available now.

### I-5310 Local Screen Time, Billed

Verdict: adjacent-exists

Competitors:
- Ajax (joinajax.com) — AI reads actual on-screen text to generate matter-tagged time entries, but processing is cloud-based (screen content sent then deleted), not on-device.
- Memtime (memtime.com) — fully local-only architecture, data never leaves device, but uses passive activity/app tracking, not an AI vision model classifying screen content into matter-level entries.

Note: The two halves exist separately — cloud AI screen-reading (Ajax) and local-only passive tracking (Memtime) — but no product combines on-device vision-model understanding with zero upload.

```json
[
  {"id": "I-5301", "verdict": "clear", "competitors": [], "note": "No product found that watches a professional's own portal session and blocks submit until a per-portal rule pack clears; only dev-tooling specs (WebMCP) came close."},
  {"id": "I-5302", "verdict": "adjacent-exists", "competitors": ["Upheal (upheal.io)", "Quill (quilltherapysolutions.com)"], "note": "EHR-autofill AI scribes exist but rely on cloud transcription; none traces sentences to timestamps or guarantees no cloud model reads the note."},
  {"id": "I-5303", "verdict": "adjacent-exists", "competitors": ["Xero rule-based coding (xero.com)", "Stampli invoice coding (stampli.com)"], "note": "Split-coding and VAT rules exist broadly, but none learns a reusable per-client allocation template from a single hand-corrected split."},
  {"id": "I-5304", "verdict": "adjacent-exists", "competitors": ["HalluCiteChecker (arxiv.org/pdf/2604.26835)", "TypeLaw (typelaw.com)"], "note": "Cloud cite-checkers are common; the one offline toolkit found looks like research code, unverified as a live commercial product."},
  {"id": "I-5305", "verdict": "clear", "competitors": ["Bellator Cyber templates (bellatorcyber.com)"], "note": "WISP templates/consulting are common, but no product drafts the plan by extracting control status from uploaded console screenshots."},
  {"id": "I-5306", "verdict": "adjacent-exists", "competitors": ["RADICL (radicl.com)", "Peerless SPRS tool (getpeerless.com)"], "note": "Tools auto-calculate the SPRS score; none records and replays the practitioner's own portal click path a year later."},
  {"id": "I-5307", "verdict": "adjacent-exists", "competitors": ["TinyFish (tinyfish.ai)", "Agentman Medman (agentman.ai)"], "note": "Overnight multi-portal prior-auth status agents exist but target staffed practices/payer-ops, not the solo no-staff clinician niche."},
  {"id": "I-5308", "verdict": "adjacent-exists", "competitors": ["PowerDMARC (powerdmarc.com)", "EasyDMARC (easydmarc.com)"], "note": "DMARC record generators/checkers are common; none found logs into the registrar and writes the corrected record automatically."},
  {"id": "I-5309", "verdict": "direct-competitor", "competitors": ["EZAppeal (ezappeal.com)", "River (rivereditor.com)"], "note": "EZAppeal uploads denial letter plus chart notes, matches payer criteria to evidence, flags gaps, and outputs a filled payer-specific appeal today."},
  {"id": "I-5310", "verdict": "adjacent-exists", "competitors": ["Ajax (joinajax.com)", "Memtime (memtime.com)"], "note": "Cloud AI screen-reading (Ajax) and local-only passive tracking (Memtime) exist separately; no product combines on-device vision understanding with zero upload."}
]
```

<!-- COMPLETE -->
