# SaaS ideation run: final report

Date: 2026-09-26. The build target is a working demo from a 2–3 person team in a 48-hour hackathon ([config/context.md](../config/context.md)).

Every number in this report comes from [report/scorecards.json](scorecards.json), [gates/gate-D.md](../gates/gate-D.md), [tournament/r2/leaderboard.md](../tournament/r2/leaderboard.md), [archive/map.md](../archive/map.md), [archive/stats.md](../archive/stats.md) and the stage output files linked below. Competitor links are the ones the prior-art hunters recorded, or the ones web-checked in [outputs/s8-final/gate-d-verification.md](../outputs/s8-final/gate-d-verification.md). A competitor listed without a link had no URL in its hunter file. Anything that no one verified is marked `[unverified]`.

## Read this first

**We did not apply the 65 bar as written.** Only 11 of the 60 S8 finalists scored 65 or more on the rubric, which is tier B. None reached tier A (75–84) or tier S (85+). PROMPT section 11 says to drop everything below 65, and that would leave 11 ideas. You asked for about 30 ranked ideas, so the final list is built this way:

1. Take the best 15 eligible ideas per track by round-2 Elo. Eligible means the idea was not knocked out in S8 as a direct competitor and was not dropped by Gate D.
2. Put the 11 tier-B ideas first, then the ideas below 65.
3. Within each band, order by Elo.

Ideas below 65 are labelled **below bar**. Ideas scoring from 64 up to 65 are labelled **borderline**. There are six borderline ideas: five novel and one balanced (I-1516). One of them is I-2067, which has the highest Elo in the whole tournament (1289.5).

**Overall rank and Elo rank disagree.** Band is sorted before Elo, so the four highest-Elo novel ideas (I-2067, I-1001, I-4525 and I-3529) sit at overall ranks 12–15. Every table therefore shows both the overall rank and the rank in track.

- **Rank in track** is the idea's Elo position among the eligible S8 finalists of its track. The full round-2 leaderboard of all 156 ideas is in [tournament/r2/leaderboard.md](../tournament/r2/leaderboard.md).
- **Rubric** is the median of three judges' totals. **Spread** is the highest total minus the lowest. Gate D treats any band placement with a spread above about 8 as soft.
- **†** marks a late-lane idea (I-5101, I-5203, I-5207). These are S7 mutations with only half the evidence of the others: no round-1 Elo, no S5 feasibility audit, and 4 round-2 matches from a 1200 start.
- **Lineage** appears here for the first time. The judges never saw it. The values are ai-native, seed-original, seed-improved, seed-pivot and seed-atom-hybrid.

**The top 3 below is only a recommendation.** You make the final pick at checkpoint H2, and the primary session records it in `report/FINAL_PICK.md`. H1 and H2 were passed without user input during this run, because you asked for an autonomous run, and [inputs/reactions.md](../inputs/reactions.md) was empty.

---

## 1. Recommended top 3

My recommendation is two Balanced ideas and one Novel idea. The three differ in buyer, in capability, and in which dossier they draw on.

### Pick 1 (Balanced): 72-Hour Appeal Sprint, I-4546 (overall #2, balanced #2)

- **Why:**
  - It has the highest rubric in the Balanced track: 73.9, spread 6.1, and one judge scored it 76.1.
  - It has the highest pain score in the final 30 (9, tied with I-2067).
  - WTP is 8, demo is 8, and round-2 Elo is 1281.1, only 0.8 behind #1.
  - The S5 feasibility audit says `demoable: yes`: [Mistral OCR 3](../outputs/s5-reality/feasibility/s5-planner-01.md) plus Skyvern filing into a mock portal.
  - The price per filing is concrete: $79, refunded if no portal exists.
  - Gate D groups I-2559 (#8) and I-1022 (#20) into the same product family and says to demo this one. Reinstatement filing and a pre-submission check become roadmap features, not rivals.
- **Risk you accept:**
  - AI appeal-letter drafting is live ([Claimable](https://www.getclaimable.com/), [Counterforce Health](https://www.counterforcehealth.org/)).
  - [Aegis](https://www.ycombinator.com/companies/aegis) has the file-and-verify mechanism, but for provider-side buyers.
  - Filing unattended into a family's own portal raises the stakes of an error.
  - The fix is the red team's: a human-review checkpoint before final submission.
  - Real-world filing also runs into portal terms and MFA (Gate D B.5). The demo runs on a mock portal.

### Pick 2 (Novel): DMS Ransomware Shadow Continuity, I-4051 (overall #3, novel #5)

- **Why:**
  - It has the highest rubric of all 60 finalists: 74.5, with a tight spread of 3.5.
  - Why-now, pain, WTP, demo and clarity all score 8.
  - Quick prior art was clear. Deep prior art found only backend backup/restore continuity ([Dominion VUE Net](https://www.dominiondms.com/press_release/dominion-dms-announces-a-new-business-continuity-plan-for-automotive-dealers/)), not an agent mirroring screens.
  - The demo moment is the strongest in the set: kill the live DMS mid-demo, and the shadow answers a deal lookup.
- **Risk you accept:**
  - This is the only top-30 idea the red team tagged **fatal**. Continuous automated login to CDK or Reynolds likely breaches their terms of service.
  - Gate D keeps it in the list (B.1): the exposure is contractual and falls on the buyer, and the demo runs on a mock DMS.
  - The pitch must answer "the dealer owns its data" and name a certified path. Both vendors sell certified-integration programs (Fortellis, RCI) `[unverified]`.
  - The Authenticom v. CDK/Reynolds litigation concerned this exact access pattern `[unverified current status]`.
  - If you can't make that argument with a straight face, swap in I-2052 (see the alternates below).

### Pick 3 (Balanced): Grounded Notes With Timestamp Citations, I-2061 (overall #1, balanced #1), built as the I-2061 + I-4501 merge

- **Why:**
  - It is #1 overall, with round-2 Elo 1281.9 and rubric 70.0 (spread 2.9).
  - The red team rated it "manageable", and the S5 audit says `demoable: yes`: Kyutai STT plus gpt-oss-20b, fully local.
  - Gate D says the strongest pitch is to merge it with I-4501 (#5, rubric 70.0): the note is grounded first, then a screen agent types it into the desktop EHR. No competitor was found for the GUI-agent half.
- **Risk you accept:**
  - The web check verified that [Abridge "Linked Evidence"](https://support.abridge.com/hc/en-us/articles/30235128433811-Verify-a-Note-With-Linked-Evidence) already links each note sentence to its transcript excerpt and audio timestamp.
  - So the citation UI is not new. The claim narrows to on-device drafting for solo therapists, with untraceable sentences flagged.
  - UI-TARS typing into a real legacy EHR is not proven. It works against a mock EHR, and every write needs clinician confirmation (I-4501 red team).
  - Build I-2061 first, then add the I-4501 typing step if time allows.

### Alternates

- **Bounty Passport, I-2052 (overall #4, novel #6).** This is the Novel swap if I-4051's terms risk is unacceptable.
  - It is the only agents-as-customer idea in the 30.
  - Its novelty score of 7 is the highest in the B band. Quick prior art was clear, and consistency is 100.
  - Rubric 69.2, but the spread is 9.7.
  - Its mechanism (x402 stake on testnet) is new, but so is the incentive it asks bounty programs to adopt.
- **AI Voice-Clone Scam Call Guardian, I-2067 (overall #12, novel #1).** It has the highest Elo in the tournament (1289.5, 4-0-0, consistency 100) but a borderline rubric of 64.5.
  - [ShieldsOn](https://shieldson.ai/) is verified as a close competitor: real-time scam detection with a one-tap family alert. Its site does not say whether it runs on-device.
  - Android fake-call detection is free and built into the platform.
  - I-2067's remaining edge is on-device processing plus a check against the family's own known facts.

### Why not the other tier-B ideas

- **I-6001 (#6):** both halves are incumbent categories. [Hoxhunt](https://hoxhunt.com/feature/deepfake-phishing-attack) is verified for staff simulation, and [Lakera Red](https://www.lakera.ai/lakera-red) covers agent red-teaming. Only the bundle is new.
- **I-3093 (#7):** its rubric spread of 16.1 is the widest in the set. Its mean of 63.1 would be below bar.
- **I-2559 (#8) and I-1022 (#20):** they belong to I-4546's family.
- **I-5101 (#9):** half evidence (†).
- **I-4005 (#10):** close to unauthorized practice of law (UPL) unless its letters use attorney-reviewed templates.
- **I-2550 (#11):** the lowest-Elo novel pick (1209.5).

---

## Final top 30

The order comes from `report/scorecards.json` `top30`, after Gate D loop 2 (APPROVED, no new overrides). Gate D's loop-1 drops are already applied: I-1019 and I-2514 are out, and I-5207 and I-3541 fill ranks 29 and 30. Names are exactly as on the cards. The summary is each card's one-liner.

| # | Name | Id | Track | R2 Elo | Rank in track | Rubric (spread) | Band | Red team | One-line summary |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Grounded Notes With Timestamp Citations | I-2061 | Balanced | 1281.9 | 1 | 70.0 (2.9) | B | manageable | Drafts SOAP notes from session audio entirely on-device, flagging any sentence it cannot trace back to the recording. |
| 2 | 72-Hour Appeal Sprint | I-4546 | Balanced | 1281.1 | 2 | 73.9 (6.1) | B | serious | Turns a Medicare Advantage denial letter into a filed, tracked appeal inside the plan's own portal within its expedited window. |
| 3 | DMS Ransomware Shadow Continuity | I-4051 | Novel | 1267.4 | 5 | 74.5 (3.5) | B | **fatal** | A screen agent continuously mirrors your locked-in dealer system so a ransomware outage never stops the sales floor. |
| 4 | Bounty Passport | I-2052 | Novel | 1262.9 | 6 | 69.2 (9.7) | B | serious | Vulnerability-report agents stake a refundable bond per submission; fake reports forfeit it, real ones earn a bonus. |
| 5 | Screen Agent Drafts Session Notes | I-4501 | Balanced | 1261.8 | 3 | 70.0 (2.2) | B | serious | A local model transcribes therapy sessions, then a screen agent types the note directly into the desktop EHR. |
| 6 | Continuous authorised social-engineering testing | I-6001 | Balanced | 1253.8 | 7 | 66.3 (5.9) | B | serious | Authorised AI-driven social-engineering tests against company staff and AI agents, run weekly, with fix and retest for each failure. |
| 7 | Privileged Cite Bench | I-3093 | Novel | 1247.0 | 7 | 66.9 (16.1) | B | serious | Checks every citation in a brief against real case text on the lawyer's own laptop, nothing leaves the machine. |
| 8 | 90-Day Reinstatement Filer | I-2559 | Balanced | 1241.3 | 11 | 69.0 (11.7) | B | serious | Uploads a Medicaid termination notice and files the reinstatement request in the state portal before signup finishes. |
| 9 | Linked Call-and-Statement Alert | I-5101 † | Novel | 1223.6 | 14 | 67.3 (1.5) | B | manageable | One on-device model links a suspicious call to a new payee or transfer within hours, not weeks. |
| 10 | POA Packet Builder | I-4005 | Balanced | 1222.1 | 12 | 66.3 (6.6) | B | serious | Converts a parent's power of attorney into the exact form each bank demands, before it gets rejected. |
| 11 | Medicaid Renewal Mail Guardian | I-2550 | Novel | 1209.5 | 15 | 65.3 (2.5) | B | manageable | Catches a parent's Medicaid renewal packet the day it arrives, before the 30-day clock lapses. |
| 12 | AI Voice-Clone Scam Call Guardian | I-2067 | Novel | 1289.5 | 1 | 64.5 (7.5) | borderline (below bar) | serious | An on-device agent listens live and flags AI-cloned grandchild-in-trouble scam calls before money moves. |
| 13 | Independent Completion Witness | I-1001 | Novel | 1276.4 | 2 | 61.9 (6.0) | below bar | serious | A verifier agent confirms another agent's task truly finished, checked against the real end-state. |
| 14 | Callback Verifier for Vendor Payments | I-4525 | Novel | 1274.1 | 3 | 64.2 (1.5) | borderline (below bar) | serious | A voice agent calls the vendor's known number to confirm a bank-detail change before any payment moves. |
| 15 | Screen-Side Cite Bailiff | I-3529 | Novel | 1269.7 | 4 | 62.2 (8.1) | below bar | serious | Watches your open document, drives a browser to check each citation itself, and locks e-filing until you clear every flag. |
| 16 | Stop the Wire Before It Sends | I-1508 | Balanced | 1259.4 | 4 | 62.9 (8.3) | below bar | serious | Cross-checks every vendor bank-detail-change email against payment history before the transfer goes out. |
| 17 | Vendor Hold-Queue Call Agent | I-3088 | Balanced | 1258.7 | 5 | 61.9 (3.2) | below bar | manageable | Calls system-of-record support lines, sits on hold, and confirms the fix actually landed before closing the ticket. |
| 18 | The Compliance Portal Copilot | I-2519 | Balanced | 1255.6 | 6 | 59.0 (6.1) | below bar | serious | A local-first agent drafts and files yearly WISP, PTIN and insurer AI-attestation forms without ever touching client files. |
| 19 | PA Phone Call Copilot | I-1534 | Balanced | 1252.7 | 8 | 62.2 (0.5) | below bar | serious | Transcribes a live payer phone call in real time and turns it straight into a submittable appeal file. |
| 20 | Rejection-Proof Renewal Filer | I-1022 | Balanced | 1250.0 | 9 | 61.4 (2.9) | below bar | manageable | Checks a Medicaid renewal or Medicare appeal packet against known rejection patterns before the proxy submits it. |
| 21 | Console-Checked Cyber Insurance Answers | I-1516 | Balanced | 1244.6 | 10 | 64.9 (9.7) | borderline (below bar) | serious | Logs into your actual admin consoles and answers the cyber-insurance questionnaire only with what's verifiably true. |
| 22 | Draft From Case Files, Offline | I-1564 | Novel | 1244.5 | 8 | 64.6 (5.1) | borderline (below bar) | serious | An open-weight model drafts motions and letters straight from a lawyer's case files, entirely on their own laptop. |
| 23 | Summary Reweigh Desk | I-2053 | Novel | 1244.2 | 9 | 64.4 (4.6) | borderline (below bar) | serious | Loads the whole claim file beside the carrier's AI summary and highlights every sentence the source can't support. |
| 24 | Proof Receipts for Proxy Agents | I-4511 | Novel | 1243.9 | 10 | 57.9 (4.8) | below bar | serious | Every agent action on a locked portal becomes an instant, redacted, annotated proof image anyone can trust. |
| 25 | Multi-Institution Proxy Agent | I-2547 | Novel | 1232.7 | 11 | 62.6 (5.0) | below bar | serious | Logs into every one of a parent's accounts as their proxy and reports back only what needs attention. |
| 26 | On-Prem Exploit Bench | I-3095 | Novel | 1228.1 | 12 | 64.1 (3.4) | borderline (below bar) | serious | Reproduces AI-drafted vulnerability reports against proprietary code entirely inside the company's own network, never in a public cloud. |
| 27 | Rate-Con Learned From One Build | I-1063 | Novel | 1225.3 | 13 | 52.7 (0.5) | below bar | serious | Build one rate confirmation by hand, and every future load on that lane drafts itself. |
| 28 | Scope Gate for Your Own Agent | I-5203 † | Balanced | 1215.6 | 13 | 55.6 (7.1) | below bar | serious | A consumer's agent gets a scoped, expiring mandate; a local gate blocks any action the mandate doesn't cover. |
| 29 | Matter-Billed Agent Run Meter | I-5207 † | Balanced | 1214.2 | 14 | 59.2 (4.4) | below bar | serious | Caps a solo professional's agent-run spend and attributes every run's cost to the client or matter it served. |
| 30 | Lay of the Land | I-3541 | Balanced | 1208.8 | 15 | 59.5 (0.7) | below bar | serious | A retiring farmer drives around talking; AI turns GPS and audio into confidence-tagged map layers successors view in AR. |

Track balance is 15 novel and 15 balanced. The 11 tier-B ideas split 5 novel and 6 balanced.

### Gate D findings that apply to the top 30

Source: [gates/gate-D.md](../gates/gate-D.md), loop 2, APPROVED.

**Overrides.** Loop 2 made no new overrides. Loop 1 made two drops, both already applied:

- **I-1019 Private Elder Statement Scanner** was a strict subset of its own child I-5101, which scans statements for the same buyer.
- **I-2514 E&O Broker's Citation Shield** had the same mechanism as I-3093. Its broker channel is folded into I-3093's business model.

Both backfills, I-5207 and I-3541, passed audit.

**The only "fatal" red-team tag: I-4051 (#3).** The fatal part is the terms-of-service risk described under Pick 2. It is not a knock-out, because the exposure is contractual and falls on the buyer, and the demo runs on a mock DMS. The pitch needs a "dealer owns its data / certified path" answer.

**Product families.** Present these together and do not count them twice.

| Family | Members (overall rank) | Gate D treatment |
|---|---|---|
| On-device session notes | I-2061 (1) + I-4501 (5) | Same on-device session-audio-to-SOAP loop, same cell, same T9 dossier. The citation add-on and the GUI-agent add-on differ. The strongest pitch is the merge. |
| Photograph the notice, agent files it | I-4546 (2), I-2559 (8), I-1022 (20) | The same photograph → OCR → portal filing → confirm loop. I-2559 is the weaker twin on every signal and has no coverage badge. I-1022 is the pre-submission check step. Present as one family and demo I-4546. |
| Vendor bank-change fraud | I-4525 (14) + I-1508 (16) | The detect half and the callback half of one product, from the same T5 dossier but split across tracks. Merge them. |
| Solo-litigator cite checking | I-3093 (7) + I-3529 (15) | I-3529's vision-driven search tab is weaker than a CourtListener API call. Its e-filing submit lock is its real differentiator. I-2514's broker channel folds into I-3093. |
| Guardrails for your own agent | I-5203 (28) + I-5207 (29) | Both are late-lane agent-infra ideas below bar, with different mechanisms (scope mandate vs spend cap). Group them; do not merge. |

**The elder-proxy cluster (T8).** Nine of the thirty ideas draw on the T8 dossier: I-4546, I-2559, I-1022, I-2550, I-4005, I-2547, I-4511, I-5101 and I-2067. There were ten before I-1019 was dropped. The tracks are balanced 15/15, but the territories are not.

**Half evidence (†).** I-5101, I-5203 and I-5207 are S7 mutations. Two other notes apply:

- I-5101's card never says how a bank statement reaches the parent's device without a cloud login.
- The why-now lines on both I-5101 and I-5207 are `[unverified]` on their own cards.

**Legal and terms notes.** None of these is a knock-out.

- **Portal terms (I-2547, I-4511, I-2559, I-4546, I-2519).** These store a third party's credentials and automate bank, Medicaid, insurer and IRS PTIN portals, which runs into portal terms, MFA and bot detection. Mock-portal demos are fine. Real filing should use official channels where they exist, such as Plaid-style aggregation under CFPB 1033 `[unverified]`.
- **Unauthorized practice of law (I-4005).** Rebuttal letters that cite statutes edge toward UPL. Use attorney-reviewed templates.
- **Call consent (I-1534).** It transcribes live peer-to-peer calls with no consent step, and all-party-consent states apply. Add a recorded announcement plus per-state consent capture.
- **Call consent (I-2067, I-5101).** On-device transcription of a parent's incoming calls is legally grey in all-party-consent states, even without storage `[unverified]`. Google ships the same thing on Pixel, which suggests a workable position. Add a disclosure line.

**Idea-specific fixes.**

- **I-4511 (#24):** running the evidence screenshot through a generative image model destroys its evidentiary value. Use a deterministic crop and redaction plus a hash of the raw capture, and use the model for annotation only.
- **I-3095 (#26):** the card names gpt-oss-120b on an 80 GB GPU in the why-now line but an "air-gapped laptop" in the demo. Use the 20b model for the demo and say so.
- **I-2559 (#8):** the card says the 90-day reinstatement path is "only available in some states". The federal reconsideration-period rule for procedural terminations may make it broader `[unverified]`. Fact-check this before the pitch.
- **I-5207 (#29):** its spend-cap half is the mechanism that knocked out I-3537 (AgentPay). Its attribution half is Keito. Each half has a live product. Only the combination is unclaimed, which is the same structure as I-6001.

**Competitor facts verified on the web** (source: [gate-d-verification.md](../outputs/s8-final/gate-d-verification.md)):

- [Abridge Linked Evidence](https://support.abridge.com/hc/en-us/articles/30235128433811-Verify-a-Note-With-Linked-Evidence) (I-2061)
- [ShieldsOn](https://shieldson.ai/) (I-2067)
- [Hoxhunt](https://hoxhunt.com/feature/deepfake-phishing-attack) (I-6001)
- [USPS Informed Delivery](https://faq.usps.com/s/article/Informed-Delivery-The-Basics) (I-2550): an ingestion channel, not a competitor
- [Infinitus](https://www.infinitus.ai/solutions/prior-authorization/) (I-1534): adjacent, because it places outbound calls rather than transcribing the clinician's own call

**Soft placements.**

- **Rubric spreads.** The widest are I-3093 16.1, I-2559 11.7, I-1516 9.7, I-2052 9.7, I-1508 8.3 and I-3529 8.1. For I-3093 the median lands in band B; the mean of 63.1 would not.
- **Round-2-only polarization.** I-4501 and I-2053 were polarizing in round 2 alone, at 50% consistency. The merged figures of 62 and 75 clear the flag.

---

## 2. Novel leaderboard

These are the top 12 of the 15 novel ideas in the final 30, in overall order. Below-bar ideas are shown with their label, not hidden.

| Overall | Track rank | Id | Name | R2 Elo | Rubric (spread) | Band | Consistency | Coverage badge | Lineage |
|---|---|---|---|---|---|---|---|---|---|
| 3 | 5 | I-4051 | DMS Ransomware Shadow Continuity | 1267.4 | 74.5 (3.5) | B | 88 | yes | ai-native |
| 4 | 6 | I-2052 | Bounty Passport | 1262.9 | 69.2 (9.7) | B | 100 | yes | ai-native |
| 7 | 7 | I-3093 | Privileged Cite Bench | 1247.0 | 66.9 (16.1) | B | 75 | no | seed-atom-hybrid (seed-05) |
| 9 | 14 | I-5101 † | Linked Call-and-Statement Alert | 1223.6 | 67.3 (1.5) | B | 75 | yes | ai-native |
| 11 | 15 | I-2550 | Medicaid Renewal Mail Guardian | 1209.5 | 65.3 (2.5) | B | 75 | yes | ai-native |
| 12 | 1 | I-2067 | AI Voice-Clone Scam Call Guardian | 1289.5 | 64.5 (7.5) | borderline (below bar) | 100 | yes | ai-native |
| 13 | 2 | I-1001 | Independent Completion Witness | 1276.4 | 61.9 (6.0) | below bar | 86 | yes | ai-native |
| 14 | 3 | I-4525 | Callback Verifier for Vendor Payments | 1274.1 | 64.2 (1.5) | borderline (below bar) | 100 | yes | ai-native |
| 15 | 4 | I-3529 | Screen-Side Cite Bailiff | 1269.7 | 62.2 (8.1) | below bar | 88 | yes | ai-native |
| 22 | 8 | I-1564 | Draft From Case Files, Offline | 1244.5 | 64.6 (5.1) | borderline (below bar) | 88 | no | ai-native |
| 23 | 9 | I-2053 | Summary Reweigh Desk | 1244.2 | 64.4 (4.6) | borderline (below bar) | 75 | yes | ai-native |
| 24 | 10 | I-4511 | Proof Receipts for Proxy Agents | 1243.9 | 57.9 (4.8) | below bar | 100 | yes | seed-atom-hybrid (seed-05) |

Three more novel ideas are in the 30:

- #25 I-2547 Multi-Institution Proxy Agent (1232.7, rubric 62.6, below bar)
- #26 I-3095 On-Prem Exploit Bench (1228.1, rubric 64.1, borderline)
- #27 I-1063 Rate-Con Learned From One Build (1225.3, rubric 52.7, below bar)

No novel idea is polarizing on the merged consistency figure.

## 3. Balanced leaderboard

These are the top 12 of the 15 balanced ideas in the final 30, in overall order.

| Overall | Track rank | Id | Name | R2 Elo | Rubric (spread) | Band | Consistency | Coverage badge | Lineage |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | I-2061 | Grounded Notes With Timestamp Citations | 1281.9 | 70.0 (2.9) | B | 88 | yes | ai-native |
| 2 | 2 | I-4546 | 72-Hour Appeal Sprint | 1281.1 | 73.9 (6.1) | B | 88 | yes | ai-native |
| 5 | 3 | I-4501 | Screen Agent Drafts Session Notes | 1261.8 | 70.0 (2.2) | B | 62 | no | ai-native |
| 6 | 7 | I-6001 | Continuous authorised social-engineering testing | 1253.8 | 66.3 (5.9) | B | 62 | yes | seed-original (seed-09) |
| 8 | 11 | I-2559 | 90-Day Reinstatement Filer | 1241.3 | 69.0 (11.7) | B | 75 | no | ai-native |
| 10 | 12 | I-4005 | POA Packet Builder | 1222.1 | 66.3 (6.6) | B | 88 | yes | ai-native |
| 16 | 4 | I-1508 | Stop the Wire Before It Sends | 1259.4 | 62.9 (8.3) | below bar | 100 | yes | ai-native |
| 17 | 5 | I-3088 | Vendor Hold-Queue Call Agent | 1258.7 | 61.9 (3.2) | below bar | 78 | yes | ai-native |
| 18 | 6 | I-2519 | The Compliance Portal Copilot | 1255.6 | 59.0 (6.1) | below bar | 100 | yes | ai-native |
| 19 | 8 | I-1534 | PA Phone Call Copilot | 1252.7 | 62.2 (0.5) | below bar | 75 | yes | ai-native |
| 20 | 9 | I-1022 | Rejection-Proof Renewal Filer | 1250.0 | 61.4 (2.9) | below bar | 62 | yes | ai-native |
| 21 | 10 | I-1516 | Console-Checked Cyber Insurance Answers | 1244.6 | 64.9 (9.7) | borderline (below bar) | 88 | yes | ai-native |

Three more balanced ideas are in the 30:

- #28 I-5203 † Scope Gate for Your Own Agent (1215.6, rubric 55.6)
- #29 I-5207 † Matter-Billed Agent Run Meter (1214.2, rubric 59.2)
- #30 I-3541 Lay of the Land (1208.8, rubric 59.5, seed-03 original)

All three are below bar.

---

## 4. Wildcards

The live pool fills 38 of the 48 map cells ([archive/map.md](../archive/map.md)). The final 30 cover 26 of them: 14 novel cells and 12 balanced cells. That leaves 12 occupied cells with no top-30 idea. Below are six cell elites from those regions.

None of the six was an S8 finalist. That means none has a rubric score, a deep prior-art hunt or a red-team review. The evidence behind them is:

- round-2 Elo from [tournament/r2/leaderboard.md](../tournament/r2/leaderboard.md)
- the S5 quick prior-art and feasibility verdicts from [outputs/s5-reality/survivors.md](../outputs/s5-reality/survivors.md), or the [S7 hunter](../outputs/s7-evolve/prior-art/s7-hunter-mutator-01.md) for I-5103

All six are ai-native.

| Id | Name | Track, cell | R2 Elo (rank of all ideas in track) | Consistency | Quick prior art / feasibility | Why it's worth a look |
|---|---|---|---|---|---|---|
| I-1514 | Commission Gap Photo Reconciler | Novel, B2B\|extractor | 1229.0 (#17 of 72) | 100% | adjacent-exists / yes | The accountant photographs carrier commission statements and Applied Epic screens, and the agent flags every cancellation missing from Epic. The pain cites a reported $42,000 policy loss ([T3 dossier](../outputs/s3-ideate/pain/T3-dossier.md), P6). Its Elo is higher than two novel ideas in the final 30. |
| I-5103 | Appeal Filed, Now Confirmed | Novel, B2C\|drafter-dialogue (first filled at S7) | 1215.3 (#27 of 72) | 100% | clear (S7 hunter) / no S5 audit † | After an appeal is filed, a voice agent calls the plan, announces recording, and gets a confirmation number and expedited review on a quote-cited transcript. Its parents are I-4546 and I-1534, so it is a natural add-on to Pick 1. |
| I-2049 | Standing-Order Compliance Radar | Novel, prosumer\|drafter-dialogue | 1192.1 (#41 of 72) | 75% | adjacent-exists / yes | A browser extension inserts the assigned judge's exact GenAI disclosure paragraph before e-filing. It is a small build that fits the litigator family above. |
| I-3540 | Agent Guest List | Novel, prosumer\|agent-infra | 1140.2 (#70 of 72) | 50% (polarizing) | adjacent-exists / yes | Solo sellers issue named shopping agents scoped, revocable feed keys, and unnamed crawlers are blocked. It is the only elite where agents are the counterparty to a small seller. Low Elo, polarizing. |
| I-3028 | Per-Vendor Consent Autopilot | Balanced, prosumer\|verifier | 1189.5 (#50 of 84) | 60% | adjacent-exists (S5 lead overturned "direct") / yes | It drafts and tracks the separate §7216 consent each AI vendor needs per client, and blocks data flow without it. S5 found that [TR SafeSend](https://tax.thomsonreuters.com/blog/how-to-explain-the-7216-consent-form-to-your-clients/) handles e-signing but not the per-vendor gate. |
| I-4065 | Annual Accounting by CC | Balanced, prosumer\|extractor | 1180.2 (#59 of 84) | 75% | clear / yes | A fiduciary CCs receipts to one address all year, and the finished accounting arrives on the due date. The build is simple, at $39 per ward per year. |

The other uncovered regions:

- **Novel prosumer\|extractor:** the elite is I-4026 Ward Accounting Autoscribe (1148.0).
- **Balanced prosumer\|drafter-dialogue:** the elite is I-2063 Vendor-Diligence-in-a-Box (1177.7).
- **Balanced B2C\|drafter-dialogue:** the elite is I-6015 Routine-Aware Phrase Board (1132.7), a seed-11 pivot.
- **Balanced agents\|agent-infra:** the elite, I-1070, was knocked out in S8. The highest-Elo live card left is I-5206 Purchase Mandate Verify Endpoint (1200.3).
- **Balanced B2B\|local-private and B2C\|local-private:** their elites were I-2514 and I-1019. Gate D dropped both as duplicates of I-3093 and I-5101, so those regions are in fact represented in the 30.

---

## 5. Full idea cards: top 5 per track

The novel top 5 are I-4051, I-2052, I-3093, I-5101 and I-2550. The balanced top 5 are I-2061, I-4546, I-4501, I-6001 and I-2559.

Each card gives its score breakdown in this order: novelty · why-now · pain · WTP · buildability · demo · defensibility · clarity. It then gives the three judges' totals, the median and spread, round-1 → round-2 Elo, consistency, and the S5 feasibility verdict.

MVP scopes follow the build-effort calibration in [config/context.md](../config/context.md). Ordinary UI, login and CRUD work is assumed. Only the real blockers are scoped out.

### Novel #1: DMS Ransomware Shadow Continuity (I-4051), overall #3, tier B

- **Lineage / cell:** ai-native; B2B\|screen-agent\|novel; T3. [Card](../archive/ideas/I-4051.md)
- **One-liner:** A screen agent continuously mirrors your locked-in dealer system so a ransomware outage never stops the sales floor.
- **Niche:** GMs and IT leads at multi-rooftop auto dealer groups running CDK or Reynolds DMS.
- **Pain and evidence:** CDK's June 2024 ransomware outage put deals back on paper for two weeks and cost dealers over $1B collectively. The system of record is a single point of failure. ([T3 dossier](../outputs/s3-ideate/pain/T3-dossier.md), P7)
- **How it works:** A computer-use agent logs in each shift as staff do, reads the inventory, deal and service screens, and writes a structured shadow copy to a local DB. If the DMS goes down, staff switch to a queryable shadow interface. The agent resyncs when the DMS returns.
- **Tech unlock:** Claude Sonnet 4.5 computer use (61.4% OSWorld, multi-step tasks over 30+ hours).
- **Prior art:**
  - Quick verdict: clear. Deep verdict: adjacent-exists.
  - [Dominion DMS VUE Net](https://www.dominiondms.com/press_release/dominion-dms-announces-a-new-business-continuity-plan-for-automotive-dealers/) and [dealer IT backup/recovery services](https://vtechdealerit.com/it-services/enterprise-data-backup-recovery-auto-dealerships/) provide continuity through backend backup and restore, not through an agent mirroring screens.
- **Pricing:** Per-rooftop monthly subscription, priced against ransomware downtime and cyber-insurance deductible savings.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A team-built mock DMS web app with seeded inventory, deal and service screens behind a login.
    - A Claude Sonnet 4.5 computer-use loop that logs in, pages through the screens and upserts rows into a local SQLite DB.
    - A shadow UI with search over inventory and deals.
    - A "kill DMS" switch, and a resync diff when the DMS comes back.
  - **Out of scope:** real CDK/Reynolds access. It is proprietary and can't be obtained in 48 h, which the [S5 audit](../outputs/s5-reality/feasibility/s5-planner-01.md) calls a real access blocker. Multi-rooftop fleet management is also out.
  - Feasibility is `risky` only because the demo proves the pattern on a mock DMS, not on the named vendors.
- **Demo moment:** Kill the live DMS mid-demo. The shadow interface instantly answers a deal and inventory lookup from the mirror.
- **Red team's best objection (fatal):** Vendor-side continuity (Dominion VUE Net) already exists, and continuous automated login likely violates CDK/Reynolds terms, risking suspension of the dealer's account.
  - **Fix:** Secure written permission or an API partnership before selling continuous automated login.
  - Gate D adds that the pitch must answer "the dealer owns its data / certified path", with Fortellis and RCI as named paths `[unverified]`.
- **Scores:** 6 · 8 · 8 · 8 · 6 · 8 · 5 · 8.
  - Judge totals [74.5, 74.9, 71.4], median 74.5, spread 3.5.
  - Elo 1259.4 → 1267.4, consistency 88, feasibility risky.

### Novel #2: Bounty Passport (I-2052), overall #4, tier B

- **Lineage / cell:** ai-native; agents\|agent-infra\|novel; T7. [Card](../archive/ideas/I-2052.md)
- **One-liner:** Vulnerability-report agents stake a refundable bond per submission; fake reports forfeit it, real ones earn a bonus.
- **Niche:** AI agents that generate and submit bug-bounty reports for researchers and need to be trusted at scale. The payers are the bounty programs.
- **Pain and evidence:** One company received 1,390 reports in the first half of 2026, and about 70% were rejected before reproduction. Programs are being priced out of triaging the flood. ([T7 dossier](../outputs/s3-ideate/pain/T7-dossier.md))
- **How it works:** Every submitting agent must hold a passport. It posts a small per-request stake before submitting. An automated reproduction check runs the claim. The stake returns with a bonus if the claim reproduces and is forfeited if it does not.
- **Tech unlock:** x402 micropayments bond an agent per request with no signup, paired with computer-use reproduction.
- **Prior art:**
  - Quick verdict: clear. Deep verdict: adjacent-exists.
  - [HackerOne reputation scoring](https://www.hackerone.com/bug-bounty-programs), [Bugcrowd CrowdMatch](https://socket.dev/blog/ai-slop-polluting-bug-bounty-platforms) and [Bugbop](https://news.ycombinator.com/item?id=46598427) show the AI-slop triage pain and reputation gating are live.
  - No product uses a refundable per-submission x402 stake with forfeiture tied to automated reproduction.
- **Pricing:** The platform takes a small percentage of every forfeited or returned stake.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A submit API that demands an x402 stake on testnet (Gate D B.7).
    - A stake ledger.
    - A Docker sandbox that reproduces exactly two canned reports against one prepared small repo: one real bug, and one fabricated report that references a nonexistent function.
    - Settlement that refunds plus bonus, or forfeits.
    - A live ledger view.
  - **Out of scope:** mainnet money, and reproducing arbitrary repos. Per the [S5 audit](../outputs/s5-reality/feasibility/s5-planner-04.md), general proof-of-concept reproduction is not 48-hour work.
- **Demo moment:** Two agents submit reports live. The real one's stake returns with a bonus; the fake one's stake is forfeited on screen.
- **Red team's best objection (serious):** HackerOne and Bugcrowd already gate fake reports with free reputation scoring, and a cash bond adds friction that incumbents have no reason to accept.
  - **Fix:** Launch on new or small bounty programs with no reputation history, not as a HackerOne add-on.
- **Scores:** 7 · 8 · 7 · 6 · 6 · 7 · 5 · 6.
  - Judge totals [69.2, 77.9, 68.2], median 69.2, spread 9.7 (one judge placed it in tier A).
  - Elo 1246.5 → 1262.9, consistency 100, feasibility risky.


<!-- COMPLETE -->
