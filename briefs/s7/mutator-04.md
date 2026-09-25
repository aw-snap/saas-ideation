# S7 mutator-04 brief: B2B verticals away from the payer-portal, callback and guardian clusters

- **Task id / source_task:** `s7-mutator-04`
- **Output (the only file you write):** `outputs/s7-evolve/s7-mutator-04.md`
- **Id block:** `I-5401` upward. Assign ids in slot order with no gaps. A skipped slot uses no id.
- **Cards to write:** 10 slots (below).

## Objective

Strengthen the B2B verticals that are winning (dealer DMS, insurance-agency commissions, freight and e-invoice documents, dental) with combines and simplifications. Stay out of the saturated clusters: payer-portal grind, vendor-payment callbacks and guardian accounting. Also fill three thin non-B2B cells with transplants. You own these target cells, and no other mutator writes into them:

- `B2B|verifier|balanced`
- `B2B|drafter-dialogue|novel`
- `B2B|drafter-dialogue|balanced`
- `B2B|extractor|novel`
- `B2B|extractor|balanced`
- `B2B|local-private|balanced`
- `prosumer|extractor|novel` (thin)
- `prosumer|drafter-dialogue|novel` (thin, and its elite I-2049 is polarizing)
- `B2C|extractor|balanced`: all of its survivors are elder-proxy. It needs a non-elder occupant.

## Read first

1. `config/context.md`: the card format, word caps, the two tracks, and the **build-effort calibration**. Screens, logins, CRUD and standard browser or API integrations are not heaviness. Real heaviness is an unproven capability, access you can't get in 48 hours, or special hardware. The Novel core AI loop must still really run, and Balanced must work end to end.
2. `gates/gate-B.md`, "Archive map axes": the buyer definitions and the capability **precedence rule** (agent-infra > local-private > screen-agent > verifier > extractor > drafter-dialogue).
3. `gates/gate-C.md`: the directives and the reasons behind them, especially items 4 (callback cluster) and 7 (crowded B2B cells are where the duplicates are).
4. Every parent card named in your slots (`archive/ideas/<id>.md`).
5. `outputs/s5-reality/survivors.md`, which records these cuts relevant to you:
   - REDDOXX cut I-2082 (e-invoice XML archiving).
   - Adaptive cut I-1060 (learns vendor coding from one correction).
   - Bravo Store Systems cut I-1043 (pawn POS auto-filing).
   - FlorianAI cut I-1047 and I-4027.
   - S5 also records a PCI note on I-3001 and a DMS terms-of-service note on I-4051.

## Directives you must honor (Gate C)

`inputs/reactions.md` is empty, so there are **no user reactions** this round. These gate directives apply, and a reviewer checks each one against the card body:

- **D1.** No card whose buyer line names an aging parent, elder, guardian, Medicare or Medicaid, unless it is a combine of two ≥1240 ideas. Slot 9 exists specifically to give B2C|extractor|balanced a **non-elder** occupant.
- **D2.** No card whose core loop is "check that another agent or filing service did what it claimed", unless that check is the receipt half of a combine.
- **D3.** No card whose core loop is verifying a payment-change request or a caller by callback. This binds slots 1, 5 and 8 in particular. I-1508 includes a phone-callback step, so drop it in slot 1.
- **D4.** No pre-filing citation check that runs on a PDF or draft.
- **D5.** Parents are only the survivors listed in your slots. Never use a seed-triplet member (I-1555, I-2045, I-3051, I-2039, I-3045, I-4519, I-2040, I-3046, I-3541, I-6003, I-6006, I-6009, I-6015) or a kept direct-competitor seed (I-6001, I-2536, I-1042).
- **D6.** A transplant's `cell` line names its target, and that target is a Gate C "Fill" cell. For you, the Fill cells are prosumer|extractor|novel, prosumer|drafter-dialogue|novel and B2C|extractor|balanced. All three of your transplants comply.
- **D7.** A simplify target carries `risky` in the S5 feasibility column. I-4051, I-3088 and I-3001 all do.

## Lead notes on the Gate C plan

- The plan is used as written, with one adjustment: mutator-01 no longer writes into B2C|extractor|balanced, so that fill is yours alone.
- There are three phone hold-queue agents across the whole plan: your slots 5 and 8, and mutator-01's consumer agent for utilities, insurers and the DMV. Keep yours separate from it and from each other, as described below.

## Slots

### Slot 1: combine → `B2B|verifier|balanced` (track: balanced)
- **Parents:** I-3547 Dealer DMS Toll Ledger (`archive/ideas/I-3547.md`, 1247.2) × I-1508 Stop the Wire Before It Sends (`archive/ideas/I-1508.md`, 1259.7).
- **Direction:** in a single pass before AP pays, vendor invoices from the dealer's DMS integrators are checked for two things. The first is fee creep against the contract. The second is bank details that differ from the vendor's payment history. The result is one hold list for the controller.
- **D3:** there is no callback step, and the product is the invoice check, not a payment-change verifier.
- **Avoid:** becoming another generic BEC tool. The dealer-integrator invoice stream is the wedge. B2B|verifier|balanced is the most crowded cell (71 cards), so make the card unmistakable.

### Slot 2: combine → `B2B|drafter-dialogue|novel` (track: novel)
- **Parents:** I-1514 Commission Gap Photo Reconciler (`archive/ideas/I-1514.md`, 1259.7) × I-2008 The Missing-Field Email Negotiator (`archive/ideas/I-2008.md`, 1233).
- **Direction:** when the reconciler finds a commission gap, the negotiator writes to the carrier's commission contact asking for the missing statement fields or the unposted cancellation. It tracks the thread and posts the closed gap back to the bookkeeper's memo. The drafting and follow-up loop is the core.

### Slot 3: combine → `B2B|extractor|novel` (track: novel)
- **Parents:** I-1063 Rate-Con Learned From One Build (`archive/ideas/I-1063.md`, 1257.3) × I-4563 Foreign-Invoice Autopilot (`archive/ideas/I-4563.md`).
- **Direction:** one-example **layout** learning for freight documents (rate confirmations, bills of lading, carrier invoices) in any script, for example cross-border lanes. The user marks up one document from a carrier, and that carrier's later documents in any language extract into structured records.
- **Avoid:** learning a vendor category from one correction (that is Adaptive and was cut as I-1060), and duplicating I-1514's photo reconciliation.

### Slot 4: simplify → `B2B|extractor|balanced` (track: balanced)
- **Parent:** I-4051 DMS Ransomware Shadow Continuity (`archive/ideas/I-4051.md`, S5 `risky`: a live desktop shadow of the DMS).
- **Direction:** the DMS's own nightly report exports (deals, inventory, open repair orders) are printed to PDF and parsed into a read-only continuity binder. The dealership can sell and service from the binder when the DMS is down. There is no live agent in the DMS, which also avoids the terms-of-service issue S5 flagged.
- **Avoid:** duplicating I-3547, which audits fees. Check DMS vendor backup offerings as adjacent prior art, and mark them `[unverified]` if you can't search.

### Slot 5: simplify → `B2B|drafter-dialogue|balanced` (track: balanced)
- **Parent:** I-3088 Vendor Hold-Queue Call Agent (`archive/ideas/I-3088.md`, S5 `risky`: live dialogue on the phone).
- **Direction:** hold-only. The agent dials the system-of-record vendor's support line, navigates the phone tree toward a stated goal, waits out the queue, and patches in the staff member the moment a human answers. It holds no conversation with the human. The AI must still do real work: navigating the menu from the goal and detecting a live person as opposed to hold audio.
- **Avoid:** payment or caller verification (D3). **Stay distinct from slot 8**, which keeps a conversation. Check consumer hold-for-me features as adjacent prior art.

### Slot 6: simplify → `B2B|local-private|balanced` (track: balanced)
- **Parent:** I-3001 Local Agent for Protected Dental Data (`archive/ideas/I-3001.md`, S5 `risky`: a local GUI agent driving Dentrix).
- **Direction:** there is no agent. The tool extracts **one** nightly Dentrix report locally into a QuickBooks-ready file, and patient data stays on the practice's PC, which is the reason to buy. Pick a report that carries no card data, which avoids the PCI exposure S5 flagged.
- **Avoid:** duplicating I-2514, I-2023, I-2026 or I-2582 in the same cell.

### Slot 7: transplant I-1053 → `prosumer|extractor|novel` (track: novel)
- **Parent:** I-1053 Denial Webhook Feed (`archive/ideas/I-1053.md`, from B2B|extractor|novel).
- **Direction:** a solo biller's denial feed built from the **portal notification emails and remittance PDFs** they already receive for each client practice, with no portal walking. It produces structured denial records per practice, delivered to the biller's own tool.
- **Avoid:** re-walking payer portals, which is I-1053 itself and part of the payer-portal cluster.

### Slot 8: transplant I-3517 → `prosumer|drafter-dialogue|novel` (track: novel)
- **Parent:** I-3517 Vendor Hold-Line Voice Confirmer (`archive/ideas/I-3517.md`, from B2B|drafter-dialogue|novel).
- **Direction:** a solo tax practitioner's voice agent for the IRS practitioner priority line and for payer provider lines. It navigates the menu, gives the pre-authentication case facts it is allowed to give, waits out the queue, and turns the call outcome into a structured case note with a spoken readback. Be honest about what the line lets a non-human do. Hand off to the practitioner for any authentication the line requires, and don't claim the agent impersonates them.
- **D3:** this is not a payment callback.
- **Stay distinct from slot 5** (hold-only, no dialogue) and from mutator-01's consumer agent.

### Slot 9: transplant I-1514 → `B2C|extractor|balanced` (track: balanced)
- **Parent:** I-1514 Commission Gap Photo Reconciler (`archive/ideas/I-1514.md`, from B2B|extractor|novel).
- **Direction:** a gig worker's weekly pay statement is reconciled against their own trip screenshots, flagging missing trips, tips or adjustments. It uses proven vision extraction, because the track is balanced. This is the non-elder occupant for the cell (Gate B runner-up overlooked-26, see `outputs/s1-discover/cartographers/overlooked.md`).
- **Avoid:** deactivation appeals, which Gate B called hard to demo. Check gig-earnings tracker apps as adjacent prior art.

### Slot 10: far jump → `B2B|extractor|novel` (track: novel, parents `[]`)
- **Direction:** per-shipment customs declarations for micro-sellers after the de minimis change. The product listing and the order become a compliant declaration with a classification and its evidence. This is Gate B runner-up weak-signals-11 (see `outputs/s1-discover/cartographers/weak-signals.md`), and no customs idea exists in the pool. Use `territory: none`.
- **Avoid:** being a generic duty calculator. Check cross-border compliance and landed-cost platforms as prior art, and state the micro-seller wedge. Verify de minimis dates and rules with search, or mark them `[unverified]`.

## Boundaries

- **Write only** `outputs/s7-evolve/s7-mutator-04.md`. Do not edit `state/`, do not run git, and do not launch workflows.
- **Parents:** use only the parents in your slots: I-3547, I-1508, I-1514, I-2008, I-1063, I-4563, I-4051, I-3088, I-3001, I-1053, I-3517. These ids belong to other mutators and are off-limits, including as unlisted inspiration:
  - mutator-01: I-1019, I-2067, I-3048, I-1516, I-4546, I-1534, I-2547, I-3031, I-3026, I-4553
  - mutator-02: I-2052, I-1001, I-1003, I-3537, I-4513, I-2591, I-3555, I-2028, I-2003, I-3091, I-1517, I-4529
  - mutator-03: I-2519, I-3529, I-2061, I-4501, I-1062, I-3070, I-3093, I-1503, I-1024, I-3059, I-1027
- **Cells:** write only into your nine target cells. If honest binning puts a card elsewhere, rework the idea. Never mislabel the cell.
- **No duplicates of existing survivors.** Before writing, read the current survivors in your cells and make sure a judge could not mistake your card for one of them:
  - B2B|verifier|balanced: I-1508, I-3040, I-4001, I-6002, I-6007
  - B2B|drafter-dialogue|novel: I-2008, I-3517, I-1063
  - B2B|drafter-dialogue|balanced: I-3088, I-3055, I-1525, I-2043
  - B2B|extractor|novel: I-1514, I-2529, I-1053, I-3059
  - B2B|extractor|balanced: I-1027, I-1534, I-3547, I-3049
  - B2B|local-private|balanced: I-2514, I-2023, I-2026, I-2582
  - prosumer|extractor|novel: I-4026, I-1062, I-4563
  - prosumer|drafter-dialogue|novel: I-2049, I-2528, I-3031, I-4570
  - B2C|extractor|balanced: I-4005, I-1039
- **No duplicates between your own slots.** Keep slots 5 and 8 apart, and keep slot 2 apart from slot 9 (both use I-1514, for different buyers and different jobs).
- **Frozen territory:** guardian accounting, callback verification, payer-portal polling or submission, and pre-filing citation checks.

## Card rules

- Use the card format from `config/context.md` exactly, within its word caps. Each card starts with its own `---` frontmatter, with a blank line between cards. ` (src: …)` stays last on the Pain line.
- Frontmatter:
  - `id` comes from your block.
  - `track` is the slot's track.
  - `lineage` is `ai-native`. None of your parents is seed-derived.
  - `territory` is T1–T9 per Gate B, or `none`.
  - `cell` is the slot's target.
  - `parents` are the slot's parent ids.
  - `source_task` is `s7-mutator-04`.
- The Pain line cites a dossier in `outputs/s3-ideate/pain/` (for example `T3-dossier.md`, `T2-dossier.md`, `T5-dossier.md`, `T1-dossier.md`) or a real URL. Never invent statistics, competitors, quotes or URLs; mark anything you could not verify `[unverified]`.
- "Why now" names a specific capability. Verify any recent-technology claim with search, or mark it `[unverified]`.
- The card body never mentions seeds, personas, territories, tracks, rounds, the pipeline, parent ids, or the operator used.
- If you have to skip a slot because it can't be written without breaking a directive, add one line before the end marker: `<!-- skipped: slot N — reason -->`.
- The last line of the file is exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
