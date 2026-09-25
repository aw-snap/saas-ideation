# S7 mutator-01 brief: B2C beyond the elder-proxy cluster

- **Task id / source_task:** `s7-mutator-01`
- **Output (the only file you write):** `outputs/s7-evolve/s7-mutator-01.md`
- **Id block:** `I-5101` upward. Assign ids in slot order with no gaps. A skipped slot uses no id.
- **Cards to write:** 9 slots (below).

## Objective

Produce new idea cards that spread the B2C buyer beyond the aging-parent proxy. Every card lands in a B2C cell that is empty or thin, and none adds another near-copy to the elder-proxy cluster, which the next cut will hit hardest. You own these target cells, and no other mutator writes into them:

- `B2C|local-private|novel` (empty)
- `B2C|drafter-dialogue|novel` (empty)
- `B2C|screen-agent|balanced`
- `B2C|verifier|balanced`

## Read first

1. `config/context.md`: the card format, word caps, the two tracks, and the **build-effort calibration**. Screens, logins, CRUD and standard browser or API integrations are not heaviness. Real heaviness is an unproven capability, access you can't get in 48 hours, or special hardware. The Novel core AI loop must still really run, and Balanced must work end to end.
2. `gates/gate-B.md`, "Archive map axes": the buyer definitions and the capability **precedence rule** (agent-infra > local-private > screen-agent > verifier > extractor > drafter-dialogue). The bin is the one thing that, if removed, makes the pitch collapse.
3. `gates/gate-C.md`: the directives and the reasons behind them.
4. Every parent card named in your slots (`archive/ideas/<id>.md`).
5. `outputs/s5-reality/survivors.md`: the knock-out table lists the direct competitors that cut siblings of your parents. Don't rebuild a cut idea.

## Directives you must honor (Gate C)

`inputs/reactions.md` is empty, so there are **no user reactions** this round. These gate directives apply, and a reviewer checks each one against the card body:

- **D1.** No card whose buyer line names an aging parent, elder, guardian, Medicare or Medicaid, unless the card is a **combine** of two ideas both at or above 1240 Elo. In this brief only slots 1 and 3 qualify.
- **D2.** No card whose core loop is "check that another agent or filing service did what it claimed", unless that check is the receipt half of a combine.
- **D3.** No card whose core loop is verifying a payment-change request or a caller by callback.
- **D4.** No citation-checking card whose mechanism runs on a PDF or draft before filing.
- **D5.** Parents are only the survivors listed in your slots. Never use a seed-triplet member (I-1555, I-2045, I-3051, I-2039, I-3045, I-4519, I-2040, I-3046, I-3541, I-6003, I-6006, I-6009, I-6015) or a kept direct-competitor seed (I-6001, I-2536, I-1042).
- **D6.** A transplant's `cell` line names its target, and that target is a Gate C "Fill" cell.
- **D7.** A simplify target carries `risky` in the S5 feasibility column.

## Lead adjustments to the Gate C plan (already applied below)

- **Dropped the Gate C slot "simplify I-2067 (voicemail-only)".** S5 rates I-2067 feasibility `yes`, not `risky`, so it fails D7. I-2067 remains a parent in slot 1.
- **Slot 5 (simplify I-1019) moved from `B2C|extractor|balanced` to `B2C|verifier|balanced`.** Gate C assigns the B2C|extractor|balanced fill to mutator-04, and target cells must not be shared across mutators.
- **Slot 8 (transplant I-4553) moved from `B2C|screen-agent|novel` to `B2C|local-private|novel`.** B2C|screen-agent|novel is not a Fill cell, so the original target broke D6.
- **D1 applies to the simplify slots.** Slots 4 and 5 have elder-proxy parents but are not combines, so their buyer line must not name a parent, elder, Medicare or Medicaid.

## Slots

### Slot 1: combine → `B2C|local-private|novel` (track: novel)
- **Parents:** I-1019 Private Elder Statement Scanner (`archive/ideas/I-1019.md`, 1261.7) × I-2067 AI Voice-Clone Scam Call Guardian (`archive/ideas/I-2067.md`, 1259.1). This is the one allowed elder combine, because both parents are ≥1240, so the buyer may name the parent.
- **Direction:** a single on-device model on the parent's own phone or PC scores both statements and incoming call audio, and nothing leaves the device. The new value is the **link between the two signals**. For example, a suspicious call followed within hours by a new payee or an unusual transfer raises a much stronger alert than either signal alone.
- **Avoid:** plain first-time-payee monitoring of a parent's accounts, which is Carefull (it cut I-4029 and I-4548). The card also must not read as either parent alone.

### Slot 2: combine → `B2C|screen-agent|balanced` (track: balanced)
- **Parents:** I-3048 Remote Family PC Copilot (`archive/ideas/I-3048.md`) × I-1516 Console-Checked Cyber Insurance Answers (`archive/ideas/I-1516.md`).
- **Direction:** the family tech person runs a console-checked security sweep across a relative's **online accounts**: 2FA status, recovery email and phone, breached or reused passwords, stale sessions and connected apps. A browser agent works inside the relative's logged-in session and produces an evidence sheet with a screenshot per finding, not a scareware count.
- **D1:** both parents are below 1240, so the buyer is "the family tech person" or "relatives", and the buyer line must not say parent or elder.
- **Lineage:** I-3048 is `seed-improved`. If you keep its evidence-before-fix mechanism, set `lineage: seed-atom-hybrid` and add the atom ids (A-seed-05-aud-2, A-seed-05-mech-2) to `parents`.
- **Avoid:** fixing the PC (TroubleBuddy cut I-2042 and I-2536) and duplicating I-2583 Am I Actually Hacked, which checks the local PC. Check Google Security Checkup and password-manager breach reports as adjacent prior art.

### Slot 3: combine → `B2C|drafter-dialogue|novel` (track: novel)
- **Parents:** I-4546 72-Hour Appeal Sprint (`archive/ideas/I-4546.md`, 1257.9) × I-1534 PA Phone Call Copilot (`archive/ideas/I-1534.md`, 1246.1). Both are ≥1240, so the buyer may name a parent and Medicare.
- **Direction:** after the appeal is filed, a voice agent phones the plan's appeals line, confirms receipt, requests expedited review and logs the reference number. The live transcript becomes a quote-cited proof record of what the plan's representative said, which is I-1534's contribution. The core loop is the phone follow-up, and it must really run (use a mock appeals line in the demo).
- **Avoid:** appeal-letter drafting, which is Counterforce Health's territory (it cut I-4004, I-2549 and I-2070). Keep call-recording consent honest, since S5 flagged it on I-1534.

### Slot 4: simplify → `B2C|verifier|balanced` (track: balanced)
- **Parent:** I-2547 Multi-Institution Proxy Agent (`archive/ideas/I-2547.md`, S5 `risky`: a browser agent logs into every institution).
- **Direction:** remove the logins. The user forwards the institution notices and emails they already receive, and the tool produces a change digest: contact or address changes, newly linked accounts or payees, failed or missed payments, and upcoming deadlines. It works end to end from an inbox.
- **D1:** the buyer is not defined by an aging parent. An example is the one person in a household who runs the accounts for everyone, including a spouse or an adult sibling.
- **Stay distinct from slot 5.** Slot 4 handles account events and notices. Slot 5 handles charge lines on statements.
- **Avoid:** Carefull-style account monitoring, and mail-photo triage (Sortbox cut I-4549).

### Slot 5: simplify → `B2C|verifier|balanced` (track: balanced)
- **Parent:** I-1019 Private Elder Statement Scanner (`archive/ideas/I-1019.md`, S5 `risky`: an on-device model on consumer hardware).
- **Direction:** replace the on-device model with deterministic in-browser parsing of statement PDFs or CSVs, adding an LLM only for the plain-English explanation. The check targets charges that should have been reversed but weren't, such as refunds promised, trials cancelled, pre-authorization holds and near-duplicate postings under two merchant descriptors. Privacy can be a property of the product, but it is not the reason to buy. If it becomes the reason, the card bins to local-private and leaves your cell.
- **D1:** the buyer line must not be elder or parent.
- **Avoid:** first-time-payee monitoring (slot 4, and Carefull) and comparing bills against EOBs (Lysco cut I-4550).

### Slot 6: transplant I-3031 → `B2C|drafter-dialogue|novel` (track: novel)
- **Parent:** I-3031 Consent Concierge Voice Agent (`archive/ideas/I-3031.md`, from prosumer|drafter-dialogue|novel).
- **Direction:** a consumer's own voice agent works the hold queues at utilities, insurers and the DMV. The consumer pre-approves a **consent script**: exactly which identity facts the agent may disclose. The agent refuses anything outside the script and logs what it said. The consent boundary is I-3031's DNA, so keep it central.
- **Avoid:** health-plan appeals lines (slot 3). Stay distinct from mutator-04's hold-queue agents, which serve B2B vendor lines and the practitioner IRS line. Check Google's Hold for Me and call-on-your-behalf features as adjacent prior art.

### Slot 7: transplant I-3026 → `B2C|local-private|novel` (track: novel)
- **Parent:** I-3026 Redaction Relay (`archive/ideas/I-3026.md`, from prosumer|local-private|novel).
- **Direction:** a consumer redacts their own medical, tax or immigration documents locally before pasting them into a cloud chatbot, then gets the answer back with the real values re-inserted. Use an OS-level or in-browser on-device model (Apple Foundation Models or Chrome built-in AI, marked `[verify]`).
- **Avoid:** being a generic PII-scrubber extension. Search for existing consumer "redact before ChatGPT" extensions and name the wedge: re-insertion, plus these specific document types.

### Slot 8: transplant I-4553 → `B2C|local-private|novel` (track: novel)
- **Parent:** I-4553 Attestation Drift Monitor (`archive/ideas/I-4553.md`, from B2B|screen-agent|novel).
- **Direction:** this covers consumer attestations that drift and later void benefits or trigger clawbacks. Examples are the marketplace (ACA) income estimate against actual pay, unemployment work-search logs, and student-aid figures. An on-device model reads the person's pay stubs or deposits locally, compares them with what they attested, and warns before the gap turns into a repayment. The fact that income data never leaves the device is the reason to buy, so the local-private bin is honest.
- **D1:** the buyer line must not name Medicaid, Medicare or an elder.

### Slot 9: far jump → `B2C|drafter-dialogue|novel` (track: novel, parents `[]`)
- **Direction:** live speech-to-speech interpretation for a low-resource language at a government or medical appointment. It runs on the consumer's phone, and a two-language transcript is kept for any later appeal or complaint. This is Gate B's runner-up, "language access" (see `outputs/s1-discover/cartographers/overlooked.md`, items overlooked-14 to -16, for evidence), with `territory: none`.
- **Honesty:** the demo must really interpret at least one language pair that current speech-to-speech models handle. Name that pair and mark model claims `[verify]`.
- **Avoid:** being generic travel translation. Check Google Translate conversation mode and Apple's live translation as adjacent prior art, and base the wedge on low-resource languages plus the evidentiary transcript. It must not be live captions (Ava cut I-2590).

## Boundaries

- **Write only** `outputs/s7-evolve/s7-mutator-01.md`. Do not edit `state/`, do not run git, and do not launch workflows.
- **Parents:** use only the parents in your slots: I-1019, I-2067, I-3048, I-1516, I-4546, I-1534, I-2547, I-3031, I-3026, I-4553. These ids belong to other mutators and are off-limits, including as unlisted inspiration:
  - mutator-02: I-2052, I-1001, I-1003, I-3537, I-4513, I-2591, I-3555, I-2028, I-2003, I-3091, I-1517, I-4529
  - mutator-03: I-2519, I-3529, I-2061, I-4501, I-1062, I-3070, I-3093, I-1503, I-1024, I-3059, I-1027
  - mutator-04: I-3547, I-1508, I-1514, I-2008, I-1063, I-4563, I-4051, I-3088, I-3001, I-1053, I-3517
- **Cells:** write only into your four target cells. If honest binning puts a card elsewhere, rework the idea. Never mislabel the cell.
- **No duplicates of existing survivors.** Before writing, read the current survivors in and next to your cells and make sure a judge could not mistake your card for one of them:
  - B2C|screen-agent|balanced: I-4546, I-2559, I-3048
  - B2C|verifier|balanced: I-1022, I-1023, I-3011
  - B2C|verifier|novel: I-2067, I-2545
  - B2C|local-private|balanced: I-1019, I-2583
  - B2C|drafter-dialogue|balanced: I-6015
- **No duplicates between your own slots.** Keep slots 4 and 5, slots 3 and 6, and slots 1 and 7 clearly apart, as described above.
- **Frozen territory:** guardian accounting, callback verification and pre-filing citation checks.

## Card rules

- Use the card format from `config/context.md` exactly, within its word caps. Each card starts with its own `---` frontmatter, with a blank line between cards. ` (src: …)` stays last on the Pain line.
- Frontmatter:
  - `id` comes from your block.
  - `track` is the slot's track.
  - `lineage` is `ai-native`, unless you keep a seed-atom mechanism (see slot 2), in which case it is `seed-atom-hybrid`.
  - `territory` is T1–T9 per Gate B, or `none`.
  - `cell` is the slot's target.
  - `parents` are the slot's parent ids.
  - `source_task` is `s7-mutator-01`.
- The Pain line cites a dossier in `outputs/s3-ideate/pain/` (for example `T8-dossier.md`, `T9-dossier.md`, `T5-dossier.md`) or a real URL. Never invent statistics, competitors, quotes or URLs; mark anything you could not verify `[unverified]`.
- "Why now" names a specific capability. Verify any recent-technology claim with search, or mark it `[unverified]`.
- The card body never mentions seeds, personas, territories, tracks, rounds, the pipeline, parent ids, or the operator used.
- If you have to skip a slot because it can't be written without breaking a directive, add one line before the end marker: `<!-- skipped: slot N — reason -->`.
- The last line of the file is exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
