# S7 mutator-03 brief: the prosumer thin cells that produced both winners

- **Task id / source_task:** `s7-mutator-03`
- **Output (the only file you write):** `outputs/s7-evolve/s7-mutator-03.md`
- **Id block:** `I-5301` upward. Assign ids in slot order with no gaps. A skipped slot uses no id.
- **Cards to write:** 10 slots (below).

## Objective

Both round-1 track winners (I-2519 at 1271.9 and I-3529 at 1270) sit in thin prosumer|screen-agent cells, and Gate C rates these cells as having the highest expected value per new card. Fill them and their prosumer neighbours with strong, non-duplicate cards. You own these target cells, and no other mutator writes into them:

- `prosumer|screen-agent|novel`
- `prosumer|screen-agent|balanced` (thin)
- `prosumer|extractor|balanced`: it holds only I-4065 and I-1020, both guardian accounting. It needs non-guardian occupants.
- `prosumer|local-private|balanced`
- `prosumer|local-private|novel`

## Read first

1. `config/context.md`: the card format, word caps, the two tracks, and the **build-effort calibration**. Screens, logins, CRUD and standard browser or API integrations are not heaviness. Real heaviness is an unproven capability, access you can't get in 48 hours, or special hardware. The Novel core AI loop must still really run, and Balanced must work end to end.
2. `gates/gate-B.md`, "Archive map axes": the capability **precedence rule**. Watch local-private in particular, because it outranks screen-agent and extractor. If "nothing leaves the machine" is the reason to buy, the card is local-private whatever else it does.
3. `gates/gate-C.md`: the directives and the reasons behind them, especially item 5 (citation checking after the CaseRead cut).
4. Every parent card named in your slots (`archive/ideas/<id>.md`).
5. `outputs/s5-reality/survivors.md`, which records these cuts relevant to you:
   - CaseRead, BriefCatch and LawDroid cut I-2047, I-3038 and I-2046.
   - Adaptive cut I-1060, which learns vendor coding from one correction.
   - Insight Health and Arkangel cut I-3572 (prior-auth appeal drafting).
   - Infinx and Skyvern cut I-4033 (multi-payer prior-auth submission).

## Directives you must honor (Gate C)

`inputs/reactions.md` is empty, so there are **no user reactions** this round. These gate directives apply, and a reviewer checks each one against the card body:

- **D1.** No card whose buyer line names an aging parent, elder, guardian, Medicare or Medicaid, unless it is a combine of two ≥1240 ideas. No guardian accounting anywhere.
- **D2.** No card whose core loop is "check that another agent or filing service did what it claimed", unless that check is the receipt half of a combine. Slot 1 gates the professional's **own** entry before submit. It is not a watchdog over an agent.
- **D3.** No card whose core loop is verifying a payment-change request or a caller by callback.
- **D4.** No citation-checking card whose mechanism runs on a PDF or draft before filing (that is CaseRead). Screen-side, on-device and opposing-counsel angles remain allowed. Slots 1 and 4 are the only citation-adjacent slots, and each must stay on its allowed side.
- **D5.** Parents are only the survivors listed in your slots. Never use a seed-triplet member (I-1555, I-2045, I-3051, I-2039, I-3045, I-4519, I-2040, I-3046, I-3541, I-6003, I-6006, I-6009, I-6015) or a kept direct-competitor seed (I-6001, I-2536, I-1042).
- **D6.** A transplant's `cell` line names its target, and that target is a Gate C "Fill" cell. For you, the Fill cells are prosumer|screen-agent|balanced, prosumer|screen-agent|novel and prosumer|extractor|balanced. All three of your transplants comply.
- **D7.** A simplify target carries `risky` in the S5 feasibility column. I-3093, I-1503 and I-2519 all do.

## Lead notes on the Gate C plan

- The plan is used as written. Two combines needed a direction change so that they don't duplicate a parent:
  - I-4501 already transcribes, drafts and types into a desktop EHR, so slot 2 moves to a web EHR with a replayed form fill.
  - I-3529 already locks e-filing on bad citations, so slot 1 generalizes to rule packs per portal.
- Slots 2 and 3 can drift into local-private by precedence. Aim them at their target bins as described. If one still bins local-private honestly, prosumer|local-private|balanced is also yours, but the Gate C fill targets come first.

## Slots

### Slot 1: combine → `prosumer|screen-agent|novel` (track: novel)
- **Parents:** I-2519 The Compliance Portal Copilot (`archive/ideas/I-2519.md`, 1271.9) × I-3529 Screen-Side Cite Bailiff (`archive/ideas/I-3529.md`, 1270).
- **Direction:** a screen-side agent watches the solo professional's own portal session and holds the submit button whenever the entry fails a rule, such as an attestation that doesn't match the facts on file, a missing attachment, or a citation that doesn't resolve. It uses a rule pack per portal (PTIN, insurer, court e-filing). Citation is one rule among several, not the product.
- **Avoid:** reproducing I-3529 (a citation-only gate), working on a PDF before filing (D4), and supervising an agent (D2).

### Slot 2: combine → `prosumer|screen-agent|balanced` (track: balanced)
- **Parents:** I-2061 Grounded Notes With Timestamp Citations (`archive/ideas/I-2061.md`, 1258.4) × I-4501 Screen Agent Drafts Session Notes (`archive/ideas/I-4501.md`, 1245.7).
- **Direction:** the note is drafted locally with timestamp citations (I-2061). A screen agent then fills a **web** EHR that has no write API. It learns the note form once as a recorded field map and fills it by replay, so no cloud model ever reads the note. Only sentences that carry a timestamp citation are typed, and untraced sentences stay behind for review. The reason to buy is getting the note into the EHR without re-keying, which keeps the bin screen-agent.
- **Avoid:** a desktop EHR driven by a local GUI model (that is I-4501), and a drafting-only product (that is I-2061).

### Slot 3: combine → `prosumer|extractor|balanced` (track: balanced)
- **Parents:** I-1062 One-Split VAT Learner (`archive/ideas/I-1062.md`) × I-3070 The Season Box (`archive/ideas/I-3070.md`).
- **Direction:** a solo accountant's receipt-to-ledger tool for tax season. It learns a client's **split or allocation rule** from one worked example (a mixed-use expense percentage, a shared bill split across entities, or a mixed-rate VAT split) and applies it to that client's remaining documents. This fills the cell with a non-guardian occupant.
- **Avoid:**
  - Learning a vendor category from one correction, which is Adaptive and was cut as I-1060. The rule you learn must be a split, not a category.
  - Offline as the reason to buy, which would bin it local-private.
  - The signed-consent mechanism from I-3070 as the core.

### Slot 4: simplify → `prosumer|local-private|balanced` (track: balanced)
- **Parent:** I-3093 Privileged Cite Bench (`archive/ideas/I-3093.md`, S5 `risky`: an on-device model doing citation judgement).
- **Direction:** an existence-only check against a local case index, such as a downloaded bulk case-law dataset. It confirms that the case exists and that the reporter, volume, page and name match. There is no model judgement of holdings or quotes, so nothing privileged leaves the machine, and D4 allows it because it runs on-device.
- **Avoid:** checking support or holdings (that is CaseRead), and duplicating I-2514 E&O Broker's Citation Shield (B2B).
- **Lineage:** I-3093 is `seed-atom-hybrid`. If you keep its evidence-first atom (A-seed-05-mech-2), keep `lineage: seed-atom-hybrid` and list that atom id. Otherwise use `ai-native`.

### Slot 5: simplify → `prosumer|extractor|balanced` (track: balanced)
- **Parent:** I-1503 The WISP That Writes Itself (`archive/ideas/I-1503.md`, S5 `risky`: a live console agent).
- **Direction:** the preparer uploads console exports and screenshots instead of a live screen agent walking consoles. The tool extracts each control's actual state and builds a dated WISP from that evidence.
- **Avoid:** duplicating I-2519, which drafts a WISP from an interview. This slot's WISP is built from evidence.

### Slot 6: simplify → `prosumer|screen-agent|balanced` (track: balanced)
- **Parent:** I-2519 The Compliance Portal Copilot (`archive/ideas/I-2519.md`, S5 `risky`).
- **Direction:** one portal with record-and-replay and nothing general. Gate C picks the annual SPRS affirmation. The buyer must be a sole proprietor, such as a one-person defense subcontractor or consultant, so that the card stays prosumer. If SPRS can't honestly carry a prosumer buyer, use one other single portal that I-2519 already names, such as the PTIN renewal.
- **Avoid:** multi-site tracking, local drafting (that is I-2519), and WISP drafting (slot 5).

### Slot 7: transplant I-1024 → `prosumer|screen-agent|balanced` (track: balanced)
- **Parent:** I-1024 PA Status Autopoll (`archive/ideas/I-1024.md`, from the crowded B2B|screen-agent|balanced).
- **Direction:** a solo therapist or physician with no billing staff polls their own prior-authorization statuses across two or three portals, getting one ranked list each morning.
- **Avoid:** prior-auth submission, which Infinx and Skyvern cover (they cut I-4033).

### Slot 8: transplant I-3059 → `prosumer|screen-agent|balanced` (track: balanced)
- **Parent:** I-3059 DMARC, Translated and Fixed (`archive/ideas/I-3059.md`, from B2B|extractor|novel).
- **Direction:** the agent goes beyond explaining the report. It **fixes** the solo professional's DNS records in their own registrar console, then confirms the new records resolve. The screen-agent step is the core.
- **Avoid:** being a report reader. Check DMARC services with guided or automatic fixes as adjacent prior art, and mark them `[unverified]` if you can't search.

### Slot 9: transplant I-1027 → `prosumer|extractor|balanced` (track: balanced)
- **Parent:** I-1027 Appeal Packet Builder (`archive/ideas/I-1027.md`, from B2B|extractor|balanced).
- **Direction:** a solo clinician builds their own appeal packets from the denial and their own chart notes. Extraction and field-filling of the payer's appeal form are the core.
- **Avoid:** drafting appeal letters grounded in payer policy, which Insight Health and Arkangel cover (they cut I-3572).

### Slot 10: far jump → `prosumer|local-private|novel` (track: novel, parents `[]`)
- **Direction:** billable time from the screen, never uploaded. An on-device vision model turns the professional's own screen activity or recording into time entries per matter. There is no timekeeping idea in the pool. It is local-private by precedence, because privacy is why a lawyer would buy it. Use `territory: T9` and cite `outputs/s3-ideate/pain/T9-dossier.md` or a real URL for the pain.
- **Honesty:** the on-device model must really produce entries in the demo. Mark model claims `[verify]`.
- **Avoid:** being a cloud auto-timekeeper. Check cloud AI timekeeping products as prior art, and base the wedge on on-device processing.

## Boundaries

- **Write only** `outputs/s7-evolve/s7-mutator-03.md`. Do not edit `state/`, do not run git, and do not launch workflows.
- **Parents:** use only the parents in your slots: I-2519, I-3529, I-2061, I-4501, I-1062, I-3070, I-3093, I-1503, I-1024, I-3059, I-1027. These ids belong to other mutators and are off-limits, including as unlisted inspiration:
  - mutator-01: I-1019, I-2067, I-3048, I-1516, I-4546, I-1534, I-2547, I-3031, I-3026, I-4553
  - mutator-02: I-2052, I-1001, I-1003, I-3537, I-4513, I-2591, I-3555, I-2028, I-2003, I-3091, I-1517, I-4529
  - mutator-04: I-3547, I-1508, I-1514, I-2008, I-1063, I-4563, I-4051, I-3088, I-3001, I-1053, I-3517
- **Cells:** write only into your five target cells. If honest binning puts a card elsewhere, rework the idea. Never mislabel the cell.
- **No duplicates of existing survivors.** Before writing, read the current survivors in your cells and make sure a judge could not mistake your card for one of them:
  - prosumer|screen-agent|novel: I-3529, I-3530, I-2020, I-3536
  - prosumer|screen-agent|balanced: I-1503, I-1505, I-2519
  - prosumer|extractor|balanced: I-4065, I-1020
  - prosumer|local-private|balanced: I-2061, I-1021, I-3070, I-4501
  - prosumer|local-private|novel: I-3093, I-1566, I-3026, I-1564
- **No duplicates between your own slots.** Keep these apart:
  - Slots 1 and 6 both involve portal submission. Slot 1 is a rule gate across portals, and slot 6 is one portal replayed.
  - Slots 5 and 6: slot 5 is the WISP, slot 6 is the affirmation.
  - Slots 3, 5 and 9 share an extractor cell but are different jobs.
- **Frozen territory:** guardian accounting, callback verification and pre-filing citation checks.

## Card rules

- Use the card format from `config/context.md` exactly, within its word caps. Each card starts with its own `---` frontmatter, with a blank line between cards. ` (src: …)` stays last on the Pain line.
- Frontmatter:
  - `id` comes from your block.
  - `track` is the slot's track.
  - `lineage` is `ai-native`, unless slot 4 keeps a seed atom, in which case it is `seed-atom-hybrid`.
  - `territory` is T1–T9 per Gate B, or `none`.
  - `cell` is the slot's target.
  - `parents` are the slot's parent ids.
  - `source_task` is `s7-mutator-03`.
- The Pain line cites a dossier in `outputs/s3-ideate/pain/` (for example `T9-dossier.md`, `T7-dossier.md`, `T5-dossier.md`, `T1-dossier.md`, `T2-dossier.md`) or a real URL. Never invent statistics, competitors, quotes or URLs; mark anything you could not verify `[unverified]`.
- "Why now" names a specific capability. Verify any recent-technology claim with search, or mark it `[unverified]`.
- The card body never mentions seeds, personas, territories, tracks, rounds, the pipeline, parent ids, or the operator used.
- If you have to skip a slot because it can't be written without breaking a directive, add one line before the end marker: `<!-- skipped: slot N — reason -->`.
- The last line of the file is exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
