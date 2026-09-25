# Gate C: mid-run meta-review

Inputs: `tournament/r1/leaderboard.md`, `tournament/r1/elo.json`, `archive/map.md`, `archive/stats.md`, `outputs/s5-reality/survivors.md`, `inputs/reactions.md` (empty), `outputs/s3-ideate/seed-lane/ingredient_pool.md`, `gates/gate-B.md`, `config/context.md`. No new seed cards were listed. Population: 126 ideas (65 balanced, 61 novel), 252 matches, 81% judge agreement, 0 settled by the master. Cells are written `buyer|capability|track`.

Reading note on the Elo: with 4 matches per idea and K=32, anything inside about ±30 Elo is noise. Treat the top quartile of each track as "top", not the rank order. I-4030 (0-0-4, consistency 0%) and the three-match ideas I-2052, I-1071, I-2566, I-1545 carry the least signal.

## Convergence and drift

1. **B2C is one territory.** Every B2C survivor except the two PC seeds (I-3048, I-2536) is the aging-parent proxy (T8): I-1019, I-4546, I-2559, I-1022, I-1023, I-3011, I-4005, I-1039, I-2583, I-2547, I-4028, I-2067, I-2545, I-2550, I-2031, I-4030, I-4511, I-2028. S5 already cut six T8 siblings for direct competitors (I-4548, I-4029, I-4004, I-2549, I-2070, I-4031, I-4032, I-4545, I-4550). The survivors are the variants prior art has not reached yet, which means the next cut will hit this cluster hardest. Directive: no new B2C card with "parent", "elder" or "Medicare/Medicaid" in the buyer line unless it combines two top ideas.

2. **Guardian annual accounting: eight cards, one niche.** I-1021, I-4065, I-3563, I-1020, I-4030, I-2528, I-4026, I-2069 all serve court-appointed guardians filing accountings, spread across local-private, extractor, verifier and drafter bins. Only I-1020 (1228) is above 1200 with consistent results. The niche is real but cannot carry eight finalists. Freeze it: no mutations into guardian accounting.

3. **"Verify that the other automation actually did it" is the Novel track's default move.** I-1001, I-4537, I-2525, I-2020, I-1517, I-4553, I-3096, I-1566, I-2522, I-3563, I-2069, I-3582 are all watchdogs over an agent, a filing service or an AI note. I-1001 wins (1261); the rest sit at 1140-1216. The pattern is sound but saturated; further watchdogs should only appear as the receipt side of a combine.

4. **Vendor-payment callback verification.** I-1508, I-4525, I-3517, I-3088, I-6007, I-6002 and I-2067 share "confirm the caller or the bank change before money moves". Two are top-ten (I-1508, I-4525); the remaining four are duplicates of that idea with a different phone in it. Do not mutate more callback ideas.

5. **Citation checking after the CaseRead cut.** S5 removed I-2047, I-3038 and I-2046 as direct competitors. The survivors I-3529, I-3093, I-2053, I-3096, I-2514, I-2522, I-3530 differ only by where the check runs (screen-side, on-device, opposing counsel). I-3529 is #1 novel, so the screen-side angle holds, but any simplification of a citation idea lands on CaseRead's product. Simplify around it, never toward it.

6. **The `agents` buyer is present but losing.** Eight capped survivors, six of them under 1200: I-3582 (1171), I-1545 (1169), I-2003 (1168), I-2566 (1169), I-3091 (1183), I-1070 (1199). Only I-2052 Bounty Passport (1246, 3 matches) is strong. The T6 owner side was cut entirely by Cloudflare (I-2568, I-3534). The "passport" word appears in four cards (I-2052, I-4513, I-2028, I-4028). This buyer needs a different shape, not another passport.

7. **B2B dominance in crowded cells.** balanced B2B|verifier (71 cards), balanced B2B|screen-agent (68), novel B2B|screen-agent (65) and balanced B2B|extractor (39) hold 243 of 636 archived cards. Meanwhile the two track winners, I-2519 and I-3529, both sit in prosumer|screen-agent cells that held 3 and 4 cards. The thin prosumer cells are where the wins are; the crowded B2B cells are where the duplicates are.

8. **Seed triplets occupy 11 slots with 4 ideas.** Same Words More Life (I-1555, I-2045, I-3051), paddle capture (I-2039, I-3045, I-4519), Lay of the Land (I-2040, I-3046, I-3541), AAC ranking (I-6003, I-6006, I-6009, I-6015). All are protected; none is above 1231 and eight are below 1200. Mutators should not use them as parents, and the primary session should expect the round-2 pairings to keep matching them against each other.

9. **Direct-competitor seed originals kept by rule.** I-6001, I-2536 and I-1042 survive only because seed originals cannot be cut. Do not use them as parents.

## Empty or thin cells

Fill (each is assigned to exactly one mutator in the plan below):

- **B2C|local-private|novel (0):** the computer lens asks for on-device models for private data; the only consumer instance is balanced (I-1019, #2). Novel version with Apple Foundation Models or Chrome built-in AI is missing. M1.
- **B2C|drafter-dialogue|novel (0):** no consumer voice or drafting agent at all. Gate B named language access as the best B2C candidate not chosen. M1.
- **B2C|agent-infra|balanced (0)** and **prosumer|agent-infra|balanced (0):** all agent-infra for individuals is novel and mostly losing. A proven-tech version (scoped credentials, virtual cards, spend rules) is buildable end to end. M2.
- **B2C|agent-infra|novel (2: I-4511 at 1259, I-2028 at 1184):** one strong idea, one weak. Worth a third that is not a passport. M2.
- **prosumer|screen-agent|balanced (3)** and **prosumer|screen-agent|novel (4):** hold both track winners. Highest expected value per new card in the map. M3.
- **prosumer|extractor|balanced (2: I-1020, I-4065):** both are guardian accounting. Needs a non-guardian occupant. M3.
- **prosumer|extractor|novel (6)** and **prosumer|drafter-dialogue|novel (5):** thin, and the drafter cell's elite I-2049 is polarizing (1-0-3). M4.
- **B2C|extractor|balanced (5):** all five are elder-proxy. One non-elder occupant. M4.

Leave empty:

- **The ten `agents` cells outside agent-infra** (novel and balanced agents|local-private, |screen-agent, |verifier, |extractor, |drafter-dialogue). The precedence rule in Gate B sends every agent-as-customer idea to bin 1, so these are structurally empty. Filling them would mean re-binning, not new ideas.
- **B2C|local-private|balanced (3)** is thin but already holds the #2 balanced idea plus two PC-repair cards, and the consumer PC-repair mechanism is direct-competitor territory (TroubleBuddy). Leave it; M1's combine feeds the novel neighbour instead.

## User reactions → directives

`inputs/reactions.md` is empty: it contains only the template comment and no user lines. There are no user directives for this round, and no new seed card was added.

In their absence, the following gate-derived directives apply to every mutator and are checkable against the card body:

- D1. No new card whose buyer line names an aging parent, guardian, Medicare or Medicaid, unless it is a **combine** of two ideas both at or above 1240 Elo.
- D2. No new card whose core loop is "check that another agent or filing service did what it claimed" unless that check is the receipt half of a combine.
- D3. No new card whose core loop is verifying a payment-change request or caller by callback.
- D4. No new citation-checking card whose mechanism runs on a PDF or a draft before filing (that is CaseRead). Screen-side, on-device or opposing-counsel angles remain allowed.
- D5. Parents must be survivors from `outputs/s5-reality/survivors.md`, never a seed triplet member (I-1555, I-2045, I-3051, I-2039, I-3045, I-4519, I-2040, I-3046, I-3541, I-6003, I-6006, I-6009, I-6015) and never a kept direct-competitor seed (I-6001, I-2536, I-1042).
- D6. Every transplant names its target cell in the card's `cell` line and the target must be one of the cells listed under "Fill" above.
- D7. Simplify targets must carry `risky` in the S5 feasibility column. Per `config/context.md`, screens, logins and integrations are not heaviness; a live phone line, a live desktop shadow, an on-device model on constrained hardware, or a general-purpose adapter are.

## Mutation plan

Each block is about 10 cards. Operators: **combine** (two top ideas), **simplify** (a `risky` idea whose core loop depends on something hard), **transplant** (an idea moved into a named fillable cell), **far jump** (one distant idea). Parent ids and target cells are disjoint across mutators; a parent id appears in at most one mutator.

### M1: B2C beyond the elder-proxy cluster

Owns B2C cells outside agent-infra.

- **combine** I-1019 Private Elder Statement Scanner × I-2067 AI Voice-Clone Scam Call Guardian → **B2C|local-private|novel**. One on-device model on the parent's own phone or PC scores both statements and incoming call audio; nothing leaves the device. This is the one allowed elder combine (both parents ≥1259).
- **combine** I-3048 Remote Family PC Copilot × I-1516 Console-Checked Cyber Insurance Answers → **B2C|screen-agent|balanced**. The family tech person runs a console-checked security sweep (2FA, recovery email, breached passwords, stale sessions) across a relative's accounts and gets an evidence sheet, not a scareware count.
- **combine** I-4546 72-Hour Appeal Sprint × I-1534 PA Phone Call Copilot → **B2C|drafter-dialogue|novel**. After the sprint files, a voice agent phones the plan's appeals line to confirm receipt and request expedited review, and logs the reference number.
- **simplify** I-2547 Multi-Institution Proxy Agent (risky: logs into every institution) → **B2C|verifier|balanced**. No logins: the adult child forwards the statements and emails they already receive; the tool produces a change digest (new payees, changed addresses, missed bills).
- **simplify** I-2067 AI Voice-Clone Scam Call Guardian (risky: live call interception) → **B2C|verifier|balanced**. Voicemail-only: the parent's voicemail is scored after the fact, and the family gets a same-day "this one sounded like you" alert.
- **simplify** I-1019 Private Elder Statement Scanner (risky: on-device model on consumer hardware) → **B2C|extractor|balanced**. Statement PDFs only, no photos; a small local model extracts payees and flags first-time ones. Ships end to end.
- **transplant** I-3031 Consent Concierge Voice Agent (prosumer|drafter-dialogue|novel) → **B2C|drafter-dialogue|novel**. A consumer's own voice agent for the utility, insurer and DMV hold queue, handling identity questions from a consented script.
- **transplant** I-3026 Redaction Relay (prosumer|local-private|novel) → **B2C|local-private|novel**. A consumer redacts their own medical, tax or immigration documents locally before pasting into a cloud chatbot, and gets the answer re-inserted.
- **transplant** I-4553 Attestation Drift Monitor (B2B|screen-agent|novel) → **B2C|screen-agent|novel**. Consumer attestations that drift and void benefits: marketplace income estimates, FAFSA, unemployment work-search logs. Not elder.
- **far jump** → **B2C|drafter-dialogue|novel**, parents `[]`. Live speech-to-speech interpretation for a low-resource language at a government or medical appointment, on the consumer's phone, with the transcript kept for the appeal. Gate B's runner-up "language access" (overlooked-14 to -16). Novel capability: recent speech-to-speech models `[verify]`.

### M2: the agents buyer and agent-infra for individuals

Owns every agent-infra cell (agents|agent-infra|*, prosumer|agent-infra|*, B2C|agent-infra|*).

- **combine** I-2052 Bounty Passport × I-1001 Independent Completion Witness → **agents|agent-infra|novel**. A portable track record: each witnessed completion signs into the agent's passport, and sites or marketplaces admit agents by record rather than by CAPTCHA.
- **combine** I-1003 Nested Spend Envelopes × I-3537 Supply-Run Spend Guardrail → **prosumer|agent-infra|balanced**. Per-task spend envelopes for a solo maker's agents using virtual cards and rules only, no novel capability.
- **combine** I-4513 Authorization Passport for Proxy Agents × I-2591 The Mandate Gate → **B2C|agent-infra|balanced**. A consumer grants an agent a scoped, expiring mandate (OAuth-style scopes plus a signed letter) that the gate enforces before any action.
- **simplify** I-3555 No-API Portal MCP Adapter (risky: general adapter for any portal) → **agents|agent-infra|balanced**. One named portal, read-only, typed MCP tool with cached snapshots.
- **simplify** I-2028 Consent-Scoped Agent Passport (risky) → **B2C|agent-infra|balanced**. Drop the revocable identity layer; a per-site consent record the site can check by URL.
- **simplify** I-2003 Mandate-Match Clearinghouse (risky) → **agents|agent-infra|balanced**. A signed mandate JSON and a verify endpoint; no clearinghouse, no matching.
- **transplant** I-3091 Spend Governor for Locked-Portal Agent APIs (agents|agent-infra|balanced) → **prosumer|agent-infra|balanced**. A solo professional's spend governor across all of their own agents' API and portal usage.
- **transplant** I-1517 Who Actually Owns This API Key (B2B|agent-infra|balanced) → **prosumer|agent-infra|novel**. A solo developer's key inventory that maps each key to the agent identity that uses it.
- **transplant** I-4529 Identity That Dies With the Employee (B2B|agent-infra|novel) → **agents|agent-infra|novel**. Identity that dies with the task: credentials scoped to a single run, verifiable by the counterparty site.
- **far jump** → **agents|agent-infra|novel**, parents `[I-1003, I-1001]`. Agent-to-agent escrow: a buying agent and a selling agent settle through a third party that releases per-call payment only on a witnessed completion. Both customers are agents; neither is a passport.

### M3: the prosumer thin cells that produced both winners

Owns prosumer|screen-agent|*, prosumer|extractor|balanced and prosumer|local-private|* targets.

- **combine** I-2519 The Compliance Portal Copilot × I-3529 Screen-Side Cite Bailiff → **prosumer|screen-agent|novel**. A screen-side agent watches the solo professional's portal session and stops the submit button when the entry fails a rule (attestation, citation, missing attachment).
- **combine** I-2061 Grounded Notes With Timestamp Citations × I-4501 Screen Agent Drafts Session Notes → **prosumer|screen-agent|balanced**. Notes are drafted locally with timestamp citations, then a screen agent types them into the EHR that has no API.
- **combine** I-1062 One-Split VAT Learner × I-3070 The Season Box → **prosumer|extractor|balanced**. A solo accountant's offline receipt-to-ledger tool that learns a client's split rule from one example. Non-guardian occupant for the cell.
- **simplify** I-3093 Privileged Cite Bench (risky: on-device model doing citation judgement) → **prosumer|local-private|balanced**. Existence-only check against a local case index; no model judgement, so nothing privileged leaves the machine. Stays clear of D4 because it runs on-device.
- **simplify** I-1503 The WISP That Writes Itself (risky: live console agent) → **prosumer|extractor|balanced**. The WISP is built from uploaded console exports and screenshots instead of a live screen agent.
- **simplify** I-2519 The Compliance Portal Copilot (risky) → **prosumer|screen-agent|balanced**. One portal (the SPRS affirmation) with record-and-replay, nothing general.
- **transplant** I-1024 PA Status Autopoll (B2B|screen-agent|balanced, crowded) → **prosumer|screen-agent|balanced**. A solo therapist or physician polls their own prior-auth statuses across two or three portals.
- **transplant** I-3059 DMARC, Translated and Fixed (B2B|extractor|novel) → **prosumer|screen-agent|balanced**. The agent fixes the solo professional's domain records in the registrar console, not just explains the report.
- **transplant** I-1027 Appeal Packet Builder (B2B|extractor|balanced) → **prosumer|extractor|balanced**. A solo clinician's own appeal packets from the denial and their own chart notes.
- **far jump** → **prosumer|local-private|novel**, parents `[]`. Billable time from the screen, never uploaded: an on-device vision model turns the professional's own screen recording into time entries per matter. No timekeeping idea exists in the pool. Local-private by precedence because the privacy reason is why a lawyer would buy it.

### M4: B2B verticals away from the payer-portal, callback and guardian clusters

Owns B2B combine and simplify targets, plus the prosumer|extractor|novel, prosumer|drafter-dialogue|novel and B2C|extractor|balanced fills.

- **combine** I-3547 Dealer DMS Toll Ledger × I-1508 Stop the Wire Before It Sends → **B2B|verifier|balanced**. Vendor invoices from the DMS integrators are checked for fee creep and changed bank details in one pass before AP pays.
- **combine** I-1514 Commission Gap Photo Reconciler × I-2008 The Missing-Field Email Negotiator → **B2B|drafter-dialogue|novel**. When the reconciler finds a gap, the negotiator emails the carrier for the missing statement fields and closes the loop.
- **combine** I-1063 Rate-Con Learned From One Build × I-4563 Foreign-Invoice Autopilot → **B2B|extractor|novel**. One-example layout learning for freight documents in any script.
- **simplify** I-4051 DMS Ransomware Shadow Continuity (risky: live desktop shadow of the DMS) → **B2B|extractor|balanced**. Nightly print-to-PDF of deals and inventory, parsed into a read-only continuity binder the dealership can sell from when the DMS is down.
- **simplify** I-3088 Vendor Hold-Queue Call Agent (risky: live dialogue on the phone) → **B2B|drafter-dialogue|balanced**. Hold-only: it dials, waits out the queue, and hands the call to a human the moment a person answers. No dialogue.
- **simplify** I-3001 Local Agent for Protected Dental Data (risky: local agent driving Dentrix) → **B2B|local-private|balanced**. No agent: local extraction of one nightly Dentrix report into a QuickBooks-ready file. Avoids the PCI exposure S5 flagged.
- **transplant** I-1053 Denial Webhook Feed (B2B|extractor|novel) → **prosumer|extractor|novel**. A solo biller's denial feed built from portal emails and PDFs.
- **transplant** I-3517 Vendor Hold-Line Voice Confirmer (B2B|drafter-dialogue|novel) → **prosumer|drafter-dialogue|novel**. A solo practitioner's voice agent for the IRS practitioner priority line and payer provider lines; not a payment callback (D3).
- **transplant** I-1514 Commission Gap Photo Reconciler (B2B|extractor|novel) → **B2C|extractor|balanced**. A gig worker's weekly pay statement reconciled against their own trip screenshots. Non-elder occupant for the cell; Gate B runner-up overlooked-26.
- **far jump** → **B2B|extractor|novel**, parents `[]`. Per-shipment customs declarations for micro-sellers after the de minimis change: product listing and order become a compliant declaration. Gate B runner-up weak-signals-11; no customs idea exists in the pool.

### Coverage check

- Fillable cells from the "Fill" list each have one owner: B2C|local-private|novel (M1), B2C|drafter-dialogue|novel (M1), B2C|agent-infra|balanced (M2), prosumer|agent-infra|balanced (M2), B2C|agent-infra|novel (M2 far jump neighbour; M2's combine adds a third occupant via B2C|agent-infra|balanced rather than novel, so this cell relies on round-2 survivors I-4511 and I-2028), prosumer|screen-agent|balanced (M3), prosumer|screen-agent|novel (M3), prosumer|extractor|balanced (M3), prosumer|extractor|novel (M4), prosumer|drafter-dialogue|novel (M4), B2C|extractor|balanced (M4).
- Parent ids are disjoint across mutators. Within a mutator, I-2519 (M3), I-1514 (M4) and I-1019/I-2067 (M1) appear under two operators, which is allowed.
- Nothing targets guardian accounting, callback verification, or a PDF-stage citation check.

VERDICT: APPROVED

The round-1 data is usable: 81% judge agreement, no master-settled matches, and the polarizing flags are concentrated in ideas with 4 matches, which is expected noise rather than a broken bracket. Two caveats for the primary session, neither blocking: B2C|agent-infra|novel keeps only two occupants after this plan, and I-4030's 0-0-4 record should be read as "no signal" rather than "mid-table".

<!-- COMPLETE -->
