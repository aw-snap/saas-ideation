### I-1019 Private Elder Statement Scanner

Verdict: adjacent-exists

Competitors:
- Bank Statement Analyzer (bankstatement.app) — cloud statement fraud/duplicate-charge analysis, not on-device or elder-specific.
- Aura (auraapp.com, referenced in search) — elder scam/identity monitoring, but monitors calls/credit, not local statement PDFs.

Note: General bank-statement fraud analyzers and elder-monitoring apps exist, but none found run fully on-device via browser extension against a parent's own statement PDFs.

### I-1053 Denial Webhook Feed

Verdict: adjacent-exists

Competitors:
- CombineHealth "Adam" AR Agent (combinehealth.ai) — AI agent follows up unpaid claims and checks payer portals, but is a dashboard/agent product, not a headless webhook feed for solo freelancers.
- BillingParadise Denial Automation (billingparadise.com) — RPA denial automation for practices, portal/dashboard driven, not freelancer-webhook oriented.

Note: Denial-management automation is a crowded space, but a headless nightly webhook (no dashboard) sized for independent AR freelancers across many small practices was not found.

### I-1525 AI Feature-Request Reviewer

Verdict: direct-competitor

Competitors:
- devtimate (devtimate.com) — AI estimating engine that reads requirements/modules and outputs task breakdowns with hours and risk notes.
- Idea Link AI Software Cost Estimator (idealink.tech) — AI estimates software cost/time from requirements.

Note: Multiple live AI estimators already turn feature descriptions into time/effort estimates; devtimate is closest in mechanism though not confirmed to read a client's actual private codebase.

### I-2031 Facility Invoice Line-Item Auditor

Verdict: adjacent-exists

Competitors:
- Protovo AI Vendor Invoice Auditor (protovosolutions.com) — AI flags overbilling/duplicate vendor charges generally, not specific to nursing-home rate sheets or family buyers.
- Morphik AI Billing/RCM for Skilled Nursing (morphik.ai) — targets facility-side revenue cycle, not the paying family's dispute tool.

Note: Generic AI vendor-invoice auditors exist, but none found are built for families auditing a facility's bill against a signed resident rate sheet.

### I-2050 Reproduction Gate

Verdict: direct-competitor

Competitors:
- Konvu Bug Bounty Triage (konvu.com/product/bug-bounty-triage) — spins up a sandbox, deploys the app, runs the exploit, and returns a verdict with proof attached before human review.
- Elastic AI vulnerability triage pipeline (elastic.co/security-labs) — automated reproduction/triage of HackerOne reports at scale.
- YesWeHack triage workflow (yeswehack.com) — full PoC reproduction to confirm exploitability before forwarding.

Note: Live products already sandbox-reproduce vulnerability reports before human review (Konvu is closest in mechanism); the open-source-maintainer/foundation billing niche is less proven but the core mechanism is matched.

### I-2522 The Scribe Fact-Checker

Verdict: adjacent-exists

Competitors:
- CHECK / clinical hallucination-detection research (arxiv.org/pdf/2506.11129) — academic hallucination-detection method for clinical notes, not a shipped local product.
- TextSight AI Hallucination Detector (textsight.ai) — general-purpose fabricated-fact detector, not therapy-note-to-audio alignment.

Note: Clinical AI-scribe hallucination is a documented, actively researched problem, but no live local product found that re-aligns a therapist's note against its own session audio.

### I-2582 POS Terminal Doctor

Verdict: adjacent-exists

Competitors:
- Starbucks-style self-diagnostic POS systems (per Katalyst/industry coverage) — predictive maintenance AI built into major retailer POS, not a plain-language agent for small chains without IT.
- Canopy Remote Device Management (gocanopy.com) — remote monitoring/management of retail POS hardware, technician-facing rather than staff-facing plain-language diagnosis.
- US patent 11,087,299 "POS register health monitoring" — shows the diagnostic-agent concept is already patented/implemented in some form.

Note: POS self-diagnosis and remote monitoring already exist at enterprise scale; a plain-language, staff-facing local agent for small chains without IT support was not found live.

### I-3038 Cite or Sight

Verdict: direct-competitor

Competitors:
- CaseRead.ai (caseread.ai/hallucination-shield) — looks up each citation against official sources and reads the source to confirm it supports the quoted claim.
- LawDroid CiteCheck AI (lawnext.com coverage) — verifies citations within uploaded briefs, catches hallucinated/misquoted cites.
- RealityCheck (per CALL Bulletin) — combines deterministic citation validation with AI analysis of whether quoted language is actually supported.

Note: Several live tools already verify that a citation exists and that the surrounding text/quote is actually supported by the source opinion, matching this idea's core mechanism closely.

### I-3059 DMARC, Translated and Fixed

Verdict: adjacent-exists

Competitors:
- EasyDMARC (easydmarc.com) — parses aggregate reports and generates DNS records, includes plain-English explanation of records, but is a broader dashboard tool, not a weekly one-sentence digest for non-technical small practices.
- PowerDMARC DMARC Generator (powerdmarc.com) — generates SPF/DKIM/DMARC records; report parsing exists but framed for IT-literate users.

Note: DMARC record generators and report parsers with plain-language explanations are well established; a copy-paste-first, single-sentence weekly digest aimed at non-technical small practices is a narrower angle.

### I-3536 CAPTCHA Handoff Concierge

Verdict: adjacent-exists

Competitors:
- CapSolver Browser-Use integration (capsolver.com/agent-automation/browser-use) — automated CAPTCHA solving for browser agents, no human-tap handoff.
- browser-use CAPTCHA handling discussion (browser-use.com/posts/prove-you-are-a-robot) — documents pause-and-human-solve patterns for browser agents generally.

Note: Automated CAPTCHA solving and generic human-in-the-loop handoff patterns for browser agents exist; a consumer SMS-tap handoff specifically for solo makers' supplier reorders was not found as a named live product.

### I-4005 POA Packet Builder

Verdict: clear

Competitors:
- Estateably (estateably.com) — workflow tool for law offices to manage POA compliance, not a consumer tool that auto-fills bank-specific certification forms from an uploaded POA.
- Gavel document automation (gavel.io) — general legal document automation, not bank-form-matching for proxies.

Note: Found general POA drafting/fillable-form and law-office workflow tools, but no live product that reads a signed POA and auto-fills multiple banks' own certification forms.

### I-4065 Annual Accounting by CC

Verdict: clear

Competitors:
- VA FAST (Fiduciary Accountings Submission Tool, benefits.va.gov/fiduciary) — the VA's own portal for submitting the finished accounting, but does not collect/file receipts as they arrive via CC'd email.

Note: The VA's official submission portal exists, but no live third-party tool found that files CC'd receipts all year and auto-generates the completed accounting form.

### I-4549 Mail Pile Triage Camera

Verdict: direct-competitor

Competitors:
- Sortbox (sortyourbox.com) — photo a letter, AI reads it, states what's owed and due date, organizes into a triage list with pay links.
- BriefHelfer (Google Play) — scans mail photos, AI recognizes sender and deadlines, builds a digital archive with deadline alerts.

Note: Live apps already turn a photo of mail into a deadline-ranked, filed list; this idea's batch multi-letter single-photo segmentation is a variant of an already-live mechanism.

### I-6008 Continuous adversarial testing for customer-facing AI agents

Verdict: direct-competitor

Competitors:
- Virtue AI AgentSuite (per Straiker roundup) — continuous red teaming with 100+ agent-specific attack strategies across sandbox environments.
- Lakera Red (lakera.ai/lakera-red) — adversarial testing platform for AI applications and agents.
- Microsoft AI Red Teaming Agent / PyRIT (learn.microsoft.com) — continuous automated adversarial probing of deployed AI systems.

Note: Continuous automated AI red-teaming against live agents is an established, multi-vendor product category; this idea's refund/exception focus is a framing choice, not a new mechanism.

```json
[
  {"id": "I-1019", "verdict": "adjacent-exists", "competitors": ["Bank Statement Analyzer (bankstatement.app)", "Aura (auraapp.com)"], "note": "Bank-statement fraud analyzers and elder-monitoring apps exist; none found run fully on-device via browser extension against a parent's statements."},
  {"id": "I-1053", "verdict": "adjacent-exists", "competitors": ["CombineHealth Adam (combinehealth.ai)", "BillingParadise Denial Automation (billingparadise.com)"], "note": "Denial-management automation is crowded, but a headless nightly webhook feed for solo AR freelancers (no dashboard) was not found."},
  {"id": "I-1525", "verdict": "direct-competitor", "competitors": ["devtimate (devtimate.com)", "Idea Link AI Software Cost Estimator (idealink.tech)"], "note": "Live AI estimators already turn feature descriptions into hour/effort estimates; devtimate is closest, though codebase-grounding is unconfirmed."},
  {"id": "I-2031", "verdict": "adjacent-exists", "competitors": ["Protovo AI Vendor Invoice Auditor (protovosolutions.com)", "Morphik AI Billing/RCM (morphik.ai)"], "note": "Generic AI vendor-invoice auditors exist, but none found target families auditing a facility bill against a signed rate sheet."},
  {"id": "I-2050", "verdict": "direct-competitor", "competitors": ["Konvu Bug Bounty Triage (konvu.com/product/bug-bounty-triage)", "Elastic AI vulnerability triage (elastic.co/security-labs)", "YesWeHack triage (yeswehack.com)"], "note": "Live products already sandbox-reproduce reports before forwarding to humans; Konvu matches the mechanism closely."},
  {"id": "I-2522", "verdict": "adjacent-exists", "competitors": ["CHECK hallucination-detection research (arxiv.org/pdf/2506.11129)", "TextSight AI Hallucination Detector (textsight.ai)"], "note": "AI-scribe hallucination is a documented research problem, but no live local product re-aligning a therapy note against its own session audio was found."},
  {"id": "I-2582", "verdict": "adjacent-exists", "competitors": ["Starbucks-style self-diagnostic POS (industry coverage)", "Canopy Remote Device Management (gocanopy.com)"], "note": "POS self-diagnosis and remote monitoring exist at enterprise scale; a plain-language staff-facing agent for small IT-less chains was not found live."},
  {"id": "I-3038", "verdict": "direct-competitor", "competitors": ["CaseRead.ai (caseread.ai/hallucination-shield)", "LawDroid CiteCheck AI", "RealityCheck (per CALL Bulletin)"], "note": "Multiple live tools already verify a cited case exists and that the quoted proposition is actually supported by the opinion."},
  {"id": "I-3059", "verdict": "adjacent-exists", "competitors": ["EasyDMARC (easydmarc.com)", "PowerDMARC DMARC Generator (powerdmarc.com)"], "note": "DMARC record generators with plain-English explanations are established; a copy-paste-first weekly one-sentence digest for non-technical practices is narrower."},
  {"id": "I-3536", "verdict": "adjacent-exists", "competitors": ["CapSolver Browser-Use (capsolver.com)", "browser-use CAPTCHA handoff pattern (browser-use.com)"], "note": "Automated CAPTCHA solving and generic human-in-the-loop handoff for browser agents exist; a consumer SMS-tap handoff for supplier reorders was not found as a named product."},
  {"id": "I-4005", "verdict": "clear", "competitors": ["Estateably (estateably.com)", "Gavel (gavel.io)"], "note": "Found general POA drafting and law-office workflow tools, but no live product auto-filling multiple banks' own certification forms from an uploaded POA."},
  {"id": "I-4065", "verdict": "clear", "competitors": ["VA FAST submission portal (benefits.va.gov/fiduciary)"], "note": "VA's own submission portal exists, but no live third-party tool found that files CC'd receipts all year and auto-generates the completed accounting."},
  {"id": "I-4549", "verdict": "direct-competitor", "competitors": ["Sortbox (sortyourbox.com)", "BriefHelfer (Google Play)"], "note": "Live apps already turn a mail photo into a deadline-ranked, filed list; this idea's multi-letter single-photo batch is a variant of an already-live mechanism."},
  {"id": "I-6008", "verdict": "direct-competitor", "competitors": ["Virtue AI AgentSuite", "Lakera Red (lakera.ai/lakera-red)", "Microsoft AI Red Teaming Agent/PyRIT"], "note": "Continuous automated AI red-teaming against live agents is an established multi-vendor category; refund/exception framing is not a new mechanism."}
]
```
<!-- COMPLETE -->
