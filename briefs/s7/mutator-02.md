# S7 mutator-02 brief: the agents buyer and agent-infra for individuals

- **Task id / source_task:** `s7-mutator-02`
- **Output (the only file you write):** `outputs/s7-evolve/s7-mutator-02.md`
- **Id block:** `I-5201` upward. Assign ids in slot order with no gaps. A skipped slot uses no id.
- **Cards to write:** 10 slots (below).

## Objective

Give the `agents` buyer a new shape and bring proven agent-infra to individuals. In round 1 the agents buyer was present but losing: six of its eight survivors sit below 1200. The word "passport" appears on four cards, and the owner side was cut by Cloudflare. Meanwhile, agent-infra for individuals exists only as novel ideas, most of which are losing. You own every agent-infra target cell, and no other mutator writes into them:

- `agents|agent-infra|novel`
- `agents|agent-infra|balanced`
- `prosumer|agent-infra|balanced` (empty)
- `B2C|agent-infra|balanced` (empty)
- `B2C|agent-infra|novel`: this cell holds only two cards, I-2028 and I-4511. Gate C wants a third that is **not a passport**.

## Read first

1. `config/context.md`: the card format, word caps, the two tracks, and the **build-effort calibration**. Screens, logins, CRUD and standard browser or API integrations are not heaviness. Real heaviness is an unproven capability, access you can't get in 48 hours, or special hardware. The Novel core AI loop must still really run, and Balanced must work end to end.
2. `gates/gate-B.md`, "Archive map axes": the buyer definitions. For `agents`, the paying or primary user is a software agent, or the product exists only because agents are the counterparty. Also read the precedence rule: agent-infra is bin 1.
3. `gates/gate-C.md`: the directives and the reasons behind them, especially item 6 ("this buyer needs a different shape, not another passport").
4. Every parent card named in your slots (`archive/ideas/<id>.md`).
5. `outputs/s5-reality/survivors.md`: Cloudflare AI Crawl Control and Pay Per Crawl cut I-2568 and I-3534. Don't rebuild owner-side crawler controls.

## Directives you must honor (Gate C)

`inputs/reactions.md` is empty, so there are **no user reactions** this round. These gate directives apply, and a reviewer checks each one against the card body:

- **D1.** No card whose buyer line names an aging parent, elder, guardian, Medicare or Medicaid, unless it is a **combine** of two ideas both ≥1240 Elo. No combine in this brief qualifies, because I-4513 is 1185. That means **every** card here keeps elder and proxy language out of the buyer line, including the slots whose parents (I-4513, I-2028, I-4511) served proxies.
- **D2.** No card whose core loop is "check that another agent or filing service did what it claimed", unless that check is the receipt half of a combine. I-1001 is exactly that kind of watchdog, so in slots 1 and 10 it may only supply the receipt or release condition. It is never the product.
- **D3.** No card whose core loop is verifying a payment-change request or a caller by callback.
- **D4.** No pre-filing citation check that runs on a PDF or draft.
- **D5.** Parents are only the survivors listed in your slots. Never use a seed-triplet member (I-1555, I-2045, I-3051, I-2039, I-3045, I-4519, I-2040, I-3046, I-3541, I-6003, I-6006, I-6009, I-6015) or a kept direct-competitor seed (I-6001, I-2536, I-1042).
- **D6.** A transplant's `cell` line names its target, and that target is a Gate C "Fill" cell. For you, the Fill cells are prosumer|agent-infra|balanced, B2C|agent-infra|balanced and B2C|agent-infra|novel.
- **D7.** A simplify target carries `risky` in the S5 feasibility column. I-3555, I-2028 and I-2003 all do.
- **Gate C item 6:** don't use the word "passport" and don't use the passport shape (a portable identity badge presented to sites).

## Lead adjustments to the Gate C plan (already applied below)

- **Slot 8 (transplant I-1517) moved from `prosumer|agent-infra|novel` to `prosumer|agent-infra|balanced`.** The original target is not a Fill cell (D6), and I-1517 is a balanced idea.
- **Slot 9 (transplant I-4529) moved from `agents|agent-infra|novel` to `B2C|agent-infra|novel`.** The original target is not a Fill cell (D6). The move also closes the Gate C caveat that B2C|agent-infra|novel would otherwise receive no new card.
- **Near-duplicate pairs inside this plan have been separated** (slots 2 vs 7 vs 8, and slots 3 vs 5 vs 9). Keep the separations described in each slot.

## Slots

### Slot 1: combine → `agents|agent-infra|novel` (track: novel)
- **Parents:** I-2052 Bounty Passport (`archive/ideas/I-2052.md`, 1246.5) × I-1001 Independent Completion Witness (`archive/ideas/I-1001.md`, 1261).
- **Direction:** a portable **track record** for agents. Each witnessed completion is signed into the agent's record, and sites or marketplaces admit agents by that record (or price their access by it) instead of by CAPTCHA. The witness is the receipt half (D2). The product is admission and reputation.
- **Avoid:** the word "passport", a per-submission bond (that is I-2052 itself), and citation verification (I-3582).

### Slot 2: combine → `prosumer|agent-infra|balanced` (track: balanced)
- **Parents:** I-1003 Nested Spend Envelopes (`archive/ideas/I-1003.md`) × I-3537 Supply-Run Spend Guardrail (`archive/ideas/I-3537.md`).
- **Direction:** per-task spend envelopes for a solo maker's purchasing agents, built from proven parts only: virtual cards per task, merchant locks, amount caps and expiry. It needs no x402 or AP2 dependency, because the track is balanced. **Money goes to merchants for goods.**
- **Avoid:** overlap with slot 7, which covers metered usage costs, not purchases. Check Privacy.com-style per-merchant cards and card-issuer agent programs as adjacent prior art, and mark them `[unverified]` if you can't search.

### Slot 3: combine → `B2C|agent-infra|balanced` (track: balanced)
- **Parents:** I-4513 Authorization Passport for Proxy Agents (`archive/ideas/I-4513.md`) × I-2591 The Mandate Gate (`archive/ideas/I-2591.md`).
- **Direction:** a consumer grants their own agent a scoped, expiring mandate: OAuth-style scopes plus a signed plain-language letter. A **user-side gate** sits between the agent and every action and blocks anything outside the mandate before it runs.
- **D1:** the buyer is a consumer delegating to their own agent, not a proxy for a parent.
- **Stay distinct from slot 5**, which is checked by the site through a URL. Slot 3 is enforced on the user's side.

### Slot 4: simplify → `agents|agent-infra|balanced` (track: balanced)
- **Parent:** I-3555 No-API Portal MCP Adapter (`archive/ideas/I-3555.md`, S5 `risky`: a general adapter for any portal).
- **Direction:** one named portal, read-only, exposed as one typed MCP tool with cached snapshots and a freshness stamp, so that many agents stop hammering the site. Choose a portal agents actually query that is **not** a practice-management billing system. A public no-API government lookup (a license, entity or docket search) fits well.
- **Avoid:** duplicating I-1070 Screen API for Legacy PM Systems and I-1071 PA Write-Back Server, which already cover PM and payer write paths.

### Slot 5: simplify → `B2C|agent-infra|balanced` (track: balanced)
- **Parent:** I-2028 Consent-Scoped Agent Passport (`archive/ideas/I-2028.md`, S5 `risky`).
- **Direction:** drop the revocable identity layer. The consumer publishes a per-site consent record at a URL, which the site checks before it lets the consumer's agent act. It works end to end with a mock site.
- **D1:** the buyer is not a proxy for a parent. There is no badge and no passport.
- **Stay distinct from slot 3** (the user-side gate) and slot 9 (credentials that die with the run).

### Slot 6: simplify → `agents|agent-infra|balanced` (track: balanced)
- **Parent:** I-2003 Mandate-Match Clearinghouse (`archive/ideas/I-2003.md`, S5 `risky`).
- **Direction:** a signed purchase-mandate JSON (item, price ceiling, quantity, expiry) plus a verify endpoint that a supplier's checkout calls before it accepts an agent's order. There is no clearinghouse and no live-page matching. The counterparty is the supplier's system.
- **Avoid:** overlap with slot 5, which covers consumer consent for arbitrary actions, while this slot covers B2B purchase terms.

### Slot 7: transplant I-3091 → `prosumer|agent-infra|balanced` (track: balanced)
- **Parent:** I-3091 Spend Governor for Locked-Portal Agent APIs (`archive/ideas/I-3091.md`, from agents|agent-infra|balanced).
- **Direction:** a solo professional's governor for the **usage costs** of their own agent runs (browser-agent run services, paid APIs, model tokens). It caps runs and attributes each run's cost to a client or matter so the cost can be billed back. The rebilling attribution is the wedge.
- **Avoid:** purchases of goods (slot 2). Check LLM-gateway budget features as adjacent prior art.

### Slot 8: transplant I-1517 → `prosumer|agent-infra|balanced` (track: balanced)
- **Parent:** I-1517 Who Actually Owns This API Key (`archive/ideas/I-1517.md`, from B2B|agent-infra|balanced).
- **Direction:** a solo developer's key inventory that maps each API key and OAuth grant to the agent identity that uses it, shows which agent can touch what, and rotates or revokes keys per agent.
- **Stay distinct from slots 2 and 7.** This slot is about access, not spend.

### Slot 9: transplant I-4529 → `B2C|agent-infra|novel` (track: novel)
- **Parent:** I-4529 Identity That Dies With the Employee (`archive/ideas/I-4529.md`, from B2B|agent-infra|novel).
- **Direction:** identity that dies with the **task**. A consumer's agent receives credentials scoped to a single run, the counterparty site can verify them, and they expire when the task ends or its scope is used up.
- **D1:** keep the buyer line free of elder and proxy language. Not a passport.
- **Stay distinct from I-2028, I-4511 and slot 5.** The core is the per-run lifetime.

### Slot 10: far jump → `agents|agent-infra|novel` (track: novel, parents `[I-1003, I-1001]`)
- **Direction:** agent-to-agent escrow. A buying agent and a selling agent settle through a third party that releases per-call payment only on a witnessed completion. Both customers are agents. The core loop is **settlement**, and the witness from I-1001 is only the release condition (D2). The escrow has to really run in the demo, even if on test rails.
- **Avoid:** the passport shape. Check x402 and card-network agent-payment programs as prior art, and mark volume or availability claims `[unverified]`.

## Boundaries

- **Write only** `outputs/s7-evolve/s7-mutator-02.md`. Do not edit `state/`, do not run git, and do not launch workflows.
- **Parents:** use only the parents in your slots: I-2052, I-1001, I-1003, I-3537, I-4513, I-2591, I-3555, I-2028, I-2003, I-3091, I-1517, I-4529. These ids belong to other mutators and are off-limits, including as unlisted inspiration:
  - mutator-01: I-1019, I-2067, I-3048, I-1516, I-4546, I-1534, I-2547, I-3031, I-3026, I-4553
  - mutator-03: I-2519, I-3529, I-2061, I-4501, I-1062, I-3070, I-3093, I-1503, I-1024, I-3059, I-1027
  - mutator-04: I-3547, I-1508, I-1514, I-2008, I-1063, I-4563, I-4051, I-3088, I-3001, I-1053, I-3517
- **Cells:** write only into your five target cells. If honest binning puts a card elsewhere, rework the idea. Never mislabel the cell.
- **No duplicates of existing survivors.** Before writing, read the current survivors in and next to your cells and make sure a judge could not mistake your card for one of them:
  - agents|agent-infra|novel: I-3582, I-2052, I-1545, I-2003
  - agents|agent-infra|balanced: I-1070, I-1071, I-2566, I-3091
  - B2C|agent-infra|novel: I-2028, I-4511
  - prosumer|agent-infra|novel: I-3540, I-4513, I-3537
  - B2B|agent-infra|*: I-1001, I-3555, I-1003, I-4529, I-4537, I-1517, I-2591
- **No duplicates between your own slots.** Keep the separations described in each slot.
- **Frozen territory:** guardian accounting, callback verification and pre-filing citation checks.

## Card rules

- Use the card format from `config/context.md` exactly, within its word caps. Each card starts with its own `---` frontmatter, with a blank line between cards. ` (src: …)` stays last on the Pain line.
- Frontmatter:
  - `id` comes from your block.
  - `track` is the slot's track.
  - `lineage` is `ai-native`. None of your parents is seed-derived.
  - `territory` is T1–T9 per Gate B (mostly T6 or T5), or `none`.
  - `cell` is the slot's target.
  - `parents` are the slot's parent ids.
  - `source_task` is `s7-mutator-02`.
- The Pain line cites a dossier in `outputs/s3-ideate/pain/` (for example `T6-dossier.md`, `T5-dossier.md`) or a real URL. Never invent statistics, competitors, quotes or URLs; mark anything you could not verify `[unverified]`.
- "Why now" names a specific capability. Verify protocol availability claims (x402, AP2, agent SSO) with search, or mark them `[unverified]`.
- The card body never mentions seeds, personas, territories, tracks, rounds, the pipeline, parent ids, or the operator used.
- If you have to skip a slot because it can't be written without breaking a directive, add one line before the end marker: `<!-- skipped: slot N — reason -->`.
- The last line of the file is exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
