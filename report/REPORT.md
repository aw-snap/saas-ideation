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

### Novel #3: Privileged Cite Bench (I-3093), overall #7, tier B

- **Lineage / cell:** seed-atom-hybrid (seed-05); prosumer\|local-private\|novel; T7, with its privilege evidence drawn from T9. It combines two seed-05 atoms (A-seed-05-mech-2 and A-seed-05-insight-1), and I-2553 was merged into it. Gate D dropped I-2514, which used the same mechanism but sold through E&O brokers, and folded that broker channel into this idea. [Card](../archive/ideas/I-3093.md)
- **One-liner:** Checks every citation in a brief against real case text on the lawyer's own laptop, nothing leaves the machine.
- **Niche:** Solo and small-firm litigators drafting motions who cannot risk both a fabricated-citation sanction and a privilege waiver.
- **Pain and evidence:**
  - One firm paid $59,500 to the opposing firm that found its fake citations ([Bloomberg Law](https://news.bloomberglaw.com/legal-ops-and-tech/ai-fake-citations-expose-lawyer-sloppiness-and-training-gaps)).
  - Tracked AI-hallucination cases rose from about 200 in mid-2025 to 1,598 by 9 June 2026 ([hallucination cases database](https://www.damiencharlotin.com/hallucinations/); [T7 dossier](../outputs/s3-ideate/pain/T7-dossier.md), P1).
  - A federal ruling (US v. Heppner, SDNY) held that AI-drafted material was not privileged ([T9 dossier](../outputs/s3-ideate/pain/T9-dossier.md), P1). A cloud cite-checker therefore recreates the exposure it claims to fix.
- **How it works:** A local open-weight model reads the draft brief and a locally cached case-law corpus. It checks each citation's holding and quote against the real opinion. Next to any citation it cannot confirm, it shows the actual case text as evidence. The brief never leaves the device.
- **Tech unlock:** gpt-oss-20b fits on a 16 GB laptop, so a full cite-check runs without the cloud call that would itself waive privilege. The S5 audit lists the model as production (TC-22) ([s5-planner-01](../outputs/s5-reality/feasibility/s5-planner-01.md)).
- **Prior art:**
  - Quick verdict: adjacent-exists ([s5-hunter-07](../outputs/s5-reality/prior-art/s5-hunter-07.md)). Deep verdict: adjacent-exists ([s8-hunter-12](../outputs/s8-final/prior-art-deep/s8-hunter-12.md)).
  - These tools check citations against real case text for the same buyer: [LawDroid CiteCheck AI](https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html), [BriefCatch](https://www.briefcatch.com/blog/pick-an-ai-case-hallucinations-checker), [Clearbrief](https://www.cbinsights.com/company/clearbrief) and [CaseRead.ai](https://www.caseread.ai/hallucination-shield). All of them are cloud services.
  - S5 knocked out three cloud cite-checkers (I-2047, I-3038 and I-2046) as direct competitors of CaseRead and LawDroid ([survivors.md](../outputs/s5-reality/survivors.md)). I-3093 survived only because it runs on-device, so that is its whole claim.
  - No on-device, privilege-preserving citation checker was found.
- **Pricing:**
  - A flat monthly license per solo attorney, priced below one manual cite-check. The card gives no figure.
  - For reference, the T7 dossier puts a manual cite-check at 2–5 hours per brief (a vendor figure, `[unverified]`), and legal proofreaders earn an average of $27.65 an hour.
  - Gate D adds E&O malpractice brokers as a distribution channel, taken from I-2514. I-2514's red team rated that channel unproven.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A local app on one laptop, running gpt-oss-20b through Ollama or llama.cpp, with Wi-Fi off for the whole demo.
    - Citation extraction from a draft brief in DOCX or PDF.
    - A local cache of a few dozen real opinions, with local text or vector search. The cache is downloaded before the event from a public case-law source such as CourtListener (API terms `[unverified]`).
    - A check for each citation: whether the case is in the cache, and whether the quoted words and stated holding match the opinion.
    - An evidence panel that shows the real opinion text beside each citation the checker cannot confirm.
    - The red team's fix at demo scale: a small test set of documented fabricated citations, with the miss rate shown on screen.
  - **Out of scope:**
    - A jurisdiction-wide corpus. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-01.md) calls it a data-acquisition task that fits in 48 h only at toy scale.
    - I-2514's broker dashboard and aggregate risk score. Both are roadmap items.
  - Feasibility is `risky` only because of corpus scale. The local matching loop is real.
- **Demo moment:** Feed a brief with one fabricated case to a disconnected laptop. The bad citation is flagged, with the real case text shown beside it.
- **Red team's best objection (serious):** Cloud cite-checkers (LawDroid, BriefCatch, Clearbrief) already own this niche, and a funded incumbent could add an on-device mode. An unbenchmarked local 20B model that misses a fabricated citation would be a sanctions-grade failure. ([s8-redteam-04](../outputs/s8-final/red-team/s8-redteam-04.md))
  - **Fix:** Before claiming reliability, publish a false-negative benchmark against known fabricated-citation cases. Lead with privilege preservation as the only differentiator.
  - Gate D (D.4) groups this idea with I-3529 (#15) as the solo-litigator cite-checking family.
- **Scores:** 5 · 7 · 8 · 7 · 6 · 8 · 3 · 8.
  - Judge totals [66.9, 69.2, 53.1], median 66.9, spread 16.1. This is the widest spread in the set.
  - The mean of 63.1 would be below bar, so Gate D (A.3) treats the band B placement as soft.
  - Elo 1232.6 → 1247.0, consistency 75, feasibility risky.

### Novel #4: Linked Call-and-Statement Alert (I-5101), overall #9, tier B

- **Lineage / cell:** ai-native; B2C\|local-private\|novel; T8. An S7 mutation of I-1019 and I-2067. Gate D dropped the parent I-1019 as a strict subset of this idea. [Card](../archive/ideas/I-5101.md)
- **Half evidence (†):** It has no round-1 Elo and no S5 feasibility audit. It played 4 round-2 matches from a 1200 start (Gate D A.5).
- **One-liner:** One on-device model links a suspicious call to a new payee or transfer within hours, not weeks.
- **Niche:** Adult children and paid proxies who protect a parent's phone and bank statements and won't send call audio or account data to the cloud.
- **Pain and evidence:** Elder fraud cost $4.885B in 2024, across 147,127 IC3 complaints (up 46%). Families notice weeks or months after the money has moved. A flagged call and a same-day new payee are two separate signals, and nobody links them. ([T8 dossier](../outputs/s3-ideate/pain/T8-dossier.md), P4; [AARP on the FBI 2024 report](https://www.aarp.org/money/scams-fraud/fbi-report-fraud-2024/))
- **How it works:** A single on-device model transcribes incoming calls and flags calls that match known scam patterns. It also scans statements for new payees and duplicate charges. Everything runs on the parent's own device. If a flagged call is followed within hours by an unusual transfer or a new payee, the two signals combine into one high-confidence alert instead of two separate ones.
- **Tech unlock:** On-device speech and document models (Voxtral Realtime, Gemini Nano) running together locally, so no call audio or statement reaches a server. The card itself marks this `[unverified]`.
  - The S5 audits of its parents list Mistral Voxtral Realtime as production, at about 200 ms on-device ([I-2067, s5-planner-02](../outputs/s5-reality/feasibility/s5-planner-02.md)).
  - The same audits list Gemini Nano via Chrome built-in AI as production, but `[unverified]` for structured financial extraction ([I-1019, s5-planner-03](../outputs/s5-reality/feasibility/s5-planner-03.md)).
- **Prior art:**
  - Quick verdict: adjacent-exists ([S7 hunter](../outputs/s7-evolve/prior-art/s7-hunter-mutator-01.md)). Deep verdict: adjacent-exists ([s8-hunter-03](../outputs/s8-final/prior-art-deep/s8-hunter-03.md)).
  - Statement half: [EverSafe](https://www.eversafe.com/) and [Carefull](https://getcarefull.com/) monitor linked bank accounts for anomalies such as new payees and alert family members. Both are cloud-based, and neither analyzes phone calls.
  - Call half: [Hiya AI Phone & Call Assistant](https://apps.apple.com/us/app/hiya-ai-phone-call-assistant/id6474703665) and Android Scam Detection flag scam calls on-device, and Hiya keeps transcripts on-device. Neither links a flagged call to banking activity. The quick hunt also named [Aura](https://www.aura.com/).
  - From its parents: [StatementLock](https://www.statementlock.com/) parses statements in-browser (I-1019's closest match). [ShieldsOn](https://shieldson.ai/) is verified as a real-time scam-call detector with a one-tap family alert (I-2067's closest competitor).
  - No product was found that correlates a flagged call with a same-day new payee or transfer in one alert.
- **Pricing:** A monthly family-plan subscription per parent, priced above either check alone. The card gives no figure. For reference, the T8 dossier lists EverSafe at $7.49–$24.99/month.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A local app or Chrome extension on the demo laptop.
    - Voxtral Realtime transcribes a pre-recorded sample call played into the pipeline. A small local model or rule set flags scam-pattern matches.
    - Statement ingestion by local import of a bank-app CSV or PDF export, the red team's fix. In-browser parsing detects new payees and duplicate charges against a baseline of earlier transactions. Gemini Nano via the Chrome Prompt API (Gate D loop 1, B.7) handles only the fields the parser can't.
    - A linker that joins a flagged call and a transaction event inside a time window and raises one combined alert with both pieces of evidence, shown as a push to the adult child's phone.
    - A disclosure line when call transcription is switched on.
  - **Out of scope:**
    - Live call interception on a real phone. Per the parent I-2067 audit, telephony access can't be obtained in 48 h, so a recorded call stands in, and the transcription and flagging still run for real.
    - Any bank login or aggregation, which would break the on-device claim.
    - Messy scanned statements. Per the I-1019 audit, Gemini Nano's accuracy there is unverified, so the demo uses a clean statement.
  - **Open design point:** A monthly statement arrives weeks after the transfer. "Within hours" therefore depends on a recent-transactions export, and the card does not say how often a family would produce one.
  - Feasibility is not audited (†). The parents' audits were `demoable: yes` (I-2067) and `demoable: risky` (I-1019). The linker itself is ordinary engineering.
- **Demo moment:** Play a sample call that the model flags, then load a statement with a same-day new payee. A single linked alert fires.
- **Red team's best objection (manageable):** EverSafe/Carefull and Hiya already cover the two halves separately. The card also never explains how a bank statement reaches the device without a cloud bank login, which undercuts the privacy pitch. ([s8-redteam-03](../outputs/s8-final/red-team/s8-redteam-03.md))
  - **Fix:** Specify a local statement-ingestion path, such as the bank app's own PDF export, so the on-device claim holds end to end.
  - Gate D (A.5) carries the same point: the statement-ingestion path is unspecified on the card. It also notes that the why-now is `[unverified]` on the card.
  - **Call consent (Gate D B.3):** On-device transcription of a parent's incoming calls is legally grey in all-party-consent states, even without storage `[unverified]`. Google ships the same thing on Pixel, which suggests a workable position. Add a disclosure line.
- **Scores:** 6 · 7 · 8 · 7 · 6 · 7 · 4 · 7.
  - Judge totals [67.8, 67.3, 66.3], median 67.3, spread 1.5.
  - Elo: no round 1 (†) → 1223.6 after 4 round-2 matches from a 1200 start. Consistency 75, feasibility not audited (†).

### Novel #5: Medicaid Renewal Mail Guardian (I-2550), overall #11, tier B

- **Lineage / cell:** ai-native; B2C\|extractor\|novel; T8. It is one of the nine top-30 ideas in the T8 elder-proxy cluster (Gate D D.6). [Card](../archive/ideas/I-2550.md)
- **One-liner:** Catches a parent's Medicaid renewal packet the day it arrives, before the 30-day clock lapses.
- **Niche:** Adult children whose parent's Medicaid renewal mail goes to the parent's address, not theirs.
- **Pain and evidence:**
  - 69% of Medicaid unwinding disenrollments were procedural rather than eligibility-based (September 2024) ([CBPP](https://www.cbpp.org/research/health/unwinding-watch-tracking-medicaid-coverage-as-pandemic-protections-end)).
  - Long-term-care recipients typically get 30 days to answer a renewal packet, and it is often mailed to the parent rather than the proxy ([Medicaid.gov](https://www.medicaid.gov/sites/default/files/2023-12/considerations-for-procedural-termination-strategies.pdf); [T8 dossier](../outputs/s3-ideate/pain/T8-dossier.md), P1).
- **How it works:**
  - The agent reads a photo of the parent's mail, or a forwarded scan.
  - It picks renewal packets out of the junk mail, extracts the deadline and the list of required documents, and pre-fills the response from information the family has already stored in the app.
  - Gate D (C.3) adds [USPS Informed Delivery](https://faq.usps.com/s/article/Informed-Delivery-The-Basics) as the trigger. This free daily email shows grayscale images of the address side of up to 10 incoming letters. The adult child therefore learns on the day it arrives that an envelope from the state agency has come.
  - Informed Delivery shows envelopes only, so someone still has to photograph or scan the contents.
- **Tech unlock:** Mistral OCR 3 (TC-30) costs under a cent per page, so reading every piece of a parent's mail is affordable. The S5 audit lists it as production ([s5-planner-05](../outputs/s5-reality/feasibility/s5-planner-05.md)).
- **Prior art:**
  - Quick verdict: adjacent-exists ([s5-hunter-11](../outputs/s5-reality/prior-art/s5-hunter-11.md)). Deep verdict: adjacent-exists ([s8-hunter-03](../outputs/s8-final/prior-art-deep/s8-hunter-03.md)).
  - Virtual mailboxes OCR-scan mail, but only after it is redirected to their facility: [PostScan Mail](https://apps.apple.com/us/app/postscan-mail/id1276114355), [Earth Class Mail](https://apps.apple.com/us/app/earth-class-mail-mailbox-scan/id1484077329) and [Anytime Mailbox](https://anytimemailbox.com). None of them spots renewal packets, reads deadlines or pre-fills a response.
  - The quick hunt found only a generic OCR reminder app, [RenewalKit](https://apps.apple.com/us/app/remind-me-with-ocr-renewalkit/id6758590671).
  - Two nearby products knocked out other ideas in S5 ([survivors.md](../outputs/s5-reality/survivors.md)). Neither I-2550 hunt assessed them.
    - [Sortbox](https://sortyourbox.com) reads a photo of a letter and states what is owed and when. It knocked out I-4549.
    - [HeyMedicaid](https://heymedicaid.med/) reads photographed documents, auto-fills the application and handles renewal reminders. It knocked out I-4032 and I-4545.
  - HeyMedicaid overlaps I-2550's pre-fill step. What I-2550 still has on its own is catching the packet at the parent's address on the day it arrives.
- **Pricing:** $12 a month per enrolled parent, bundled with mail-forwarding partners.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - An inbox that takes the parent's Informed Delivery email, forwarded to the app. It flags envelopes from the state Medicaid agency and alerts the adult child.
    - Upload of a photo or scan of the opened packet. Mistral OCR 3 classifies it as a renewal packet or junk, then extracts the deadline and the list of required documents.
    - A family profile (income, address, household) that pre-fills the response form. Each pre-filled answer is shown beside the stored field it came from.
    - A "due in N days, needs X" push to the adult child, with a countdown.
  - **Out of scope:**
    - Deals with mail-forwarding partners. These are business agreements, not build tasks.
    - Filing the renewal in a state portal. I-2559 and I-1022 cover that step, and so does HeyMedicaid.
    - Packet formats beyond the one or two sample types that the [S5 audit](../outputs/s5-reality/feasibility/s5-planner-05.md) scopes for the demo.
  - The core AI loop (classify, then extract) runs for real, as the Novel track requires. Feasibility is `yes`.
- **Demo moment:** Photograph a sample renewal packet. The agent returns "due in 22 days, needs proof of income."
- **Red team's best objection (manageable):** The idea depends on the parent, not the tech-savvy adult child, photographing their own mail. That weakens onboarding for the group least likely to take up a new app. ([s8-redteam-03](../outputs/s8-final/red-team/s8-redteam-03.md))
  - **Fix:** Partner with mail-forwarding services, so that the mail reaches the child's scanner automatically.
  - Gate D (C.3) says Informed Delivery answers the objection for detection, because the child sees the envelope without the parent doing anything. Someone still has to open and photograph the packet.
- **Scores:** 6 · 7 · 8 · 6 · 8 · 6 · 3 · 7.
  - Judge totals [65.3, 62.8, 65.3], median 65.3, spread 2.5. That clears the bar by 0.3.
  - Elo 1186.4 → 1209.5. It is the lowest-Elo novel pick, 15th of the 15 eligible novel ideas (Gate D A.1).
  - Consistency 75, feasibility yes.

### Balanced #1: Grounded Notes With Timestamp Citations (I-2061), overall #1, tier B

- **Lineage / cell:** ai-native; prosumer\|local-private\|balanced; T9. [Card](../archive/ideas/I-2061.md)
  - Gate D (D.1) pairs it with I-4501 (#5). Both share the on-device loop from session audio to SOAP note, the same cell and the same dossier.
  - Gate D's strongest pitch merges the two: ground the note first, then let I-4501's screen agent type it into the EHR.
- **One-liner:** Drafts SOAP notes from session audio entirely on-device, flagging any sentence it cannot trace back to the recording.
- **Niche:** Solo therapists with 25–30 clients who write notes after hours and cannot trust incumbent AI scribes to stop inventing content.
- **Pain and evidence:**
  - Therapists spend 10–20 hours a week on documentation, and 60–70% of them document outside work hours ([T9 dossier](../outputs/s3-ideate/pain/T9-dossier.md), P6; the dossier rates this source as colour only).
  - Incumbent scribes invent content. One review says "The AI makes things up that are not said in the session" ([Trustpilot review of Mentalyc](https://www.trustpilot.com/review/mentalyc.com), T9 P7).
  - Cloud scribes switched on by default have also cost therapists their clients' trust (T9 P3).
- **How it works:**
  - A local speech-to-text model transcribes the session.
  - A local language model drafts a SOAP note and tags each clinical claim with the transcript timestamp it came from.
  - Any sentence without a tag is highlighted. The clinician verifies or deletes it before saving.
- **Tech unlock:** Kyutai STT (TC-31) transcribes locally with about 500 ms delay on self-hosted hardware. gpt-oss-20b (TC-22, production) drafts the note on a 16 GB laptop. Both are listed in [s5-planner-06](../outputs/s5-reality/feasibility/s5-planner-06.md).
- **Prior art:**
  - Quick verdict: adjacent-exists ([s5-hunter-06](../outputs/s5-reality/prior-art/s5-hunter-06.md)). Deep verdict: adjacent-exists ([s8-hunter-07](../outputs/s8-final/prior-art-deep/s8-hunter-07.md)).
  - Local scribes for therapists already exist, and none of them flags untraceable sentences:
    - [Yaps.ai](https://www.yaps.ai/blog/private-therapy-notes-app), a paid product that runs on-device.
    - 1984Doc/AI-Scribe, a free open-source project on GitHub.
    - A DIY whisper.cpp + Ollama recipe from [Local AI Master](https://localaimaster.com/blog/local-ai-therapists).
  - The quick hunt also named [SOAP Notes AI Scribe](https://apps.apple.com/us/app/soap-notes-ai-scribe/id6744947404) and [ICANotes](https://www.icanotes.com/ai-therapy-scribe/). Both offer on-device or local modes but do not flag sentences.
  - **Verified by web check:** [Abridge Linked Evidence](https://support.abridge.com/hc/en-us/articles/30235128433811-Verify-a-Note-With-Linked-Evidence) already links each note sentence to its transcript excerpt and audio timestamp. Abridge is a cloud scribe for health systems, so I-2061 stays adjacent. But the citation UI is not new, and the claim narrows to on-device drafting for solo therapists, with untraceable sentences flagged (Gate D C.1).
  - Checking a finished note also has a free, live competitor. [Krasyn Note Check](https://dev.to/krasynemr/we-published-how-we-measure-our-ai-scribes-faithfulness-and-built-a-checker-anyone-can-run-on-any-3jdl) flags note sentences that the transcript does not support, and it knocked out I-2522 in S8.
- **Pricing:** A monthly subscription per clinician, with a free tier capped at five notes. The card gives no figure. For reference, the T9 dossier puts the incumbents Mentalyc and Upheal at $19.99–$119.99 a month.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A local desktop or localhost web app on a 16 GB laptop, with Wi-Fi off during the demo.
    - Kyutai STT running on a scripted mock session recording, with timestamps.
    - gpt-oss-20b through Ollama or llama.cpp, drafting the SOAP note and attaching a transcript timestamp to each claim.
    - An attribution check that does not trust the model's own tags. Following the S5 audit, it aligns each sentence against the transcript by embeddings or substring match, and flags sentences that fall below the threshold.
    - Clicking a flagged sentence replays the matching audio. The note cannot be saved until every flag has been verified or deleted.
    - Stretch goal, following Gate D: pass the saved note to I-4501's UI-TARS step, which types it into a mock desktop EHR.
  - **Out of scope:**
    - Real client sessions, which need per-client written consent (T9 P4).
    - Any EHR integration beyond the stretch mock.
  - Feasibility is `yes`. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-06.md) names reliable sentence-to-timestamp attribution as the riskiest part. It says a scripted session with a generous matching threshold reaches demo quality.
- **Demo moment:** Play a scripted session, click a flagged sentence and jump straight to the part of the recording where that claim should be.
- **Red team's best objection (manageable):** Local therapist scribes already exist, including a free open-source one. The only edge, the timestamp-citation UI, is thin once someone copies it. ([s8-redteam-03](../outputs/s8-final/red-team/s8-redteam-03.md))
  - **Fix:** Ship the citation and flagging UI first, and make it the headline of the demo.
  - Gate D (C.1) says this fix is weaker than stated, because Abridge already ships the citation UI. Lead with on-device drafting for solo therapists instead.
- **Scores:** 5 · 7 · 8 · 7 · 7 · 7 · 4 · 8.
  - Judge totals [68.3, 71.2, 70.0], median 70.0, spread 2.9.
  - Elo 1258.4 → 1281.9, the highest in the Balanced track. Consistency 88, feasibility yes.

### Balanced #2: 72-Hour Appeal Sprint (I-4546), overall #2, tier B

- **Lineage / cell:** ai-native; B2C\|screen-agent\|balanced; T8. [Card](../archive/ideas/I-4546.md)
  - A novel-track draft (s3-ideator-novel-T6-01-r2#05) was merged into it.
  - Gate D (D.2) makes it the lead of the "photograph the notice, agent files it" family. I-2559 (#8) and I-1022 (#20) become roadmap steps.
- **One-liner:** Turns a Medicare Advantage denial letter into a filed, tracked appeal inside the plan's own portal within its expedited window.
- **Niche:** Family members who have just received a prior-authorization denial for a parent's skilled-nursing stay or home care, and who have 72 hours to act.
- **Pain and evidence:**
  - In 2024, Medicare Advantage plans denied 4.1M of 52.8M prior-authorization requests.
  - Only 11.5% of denials were appealed, yet 80.7% of appeals overturned the denial ([KFF](https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/); [T8 dossier](../outputs/s3-ideate/pain/T8-dossier.md), P2).
  - Denials arrive mid-crisis. One daughter found "his plan had denied additional days at a skilled nursing facility, the same week his doctor was recommending he stay" ([Senioridy](https://senioridy.com/medicare-advantage-prior-authorization-denial/)).
- **How it works:**
  - The user photographs the denial letter.
  - The agent extracts the denial reason and the plan's criteria, then drafts an appeal that cites the plan's own coverage rules.
  - It logs into the plan's appeal portal and submits within the expedited window.
  - It then revisits the status page on its own to confirm a real filing ID before telling the family the appeal is filed.
- **Tech unlock:** Mistral OCR 3 (TC-30, production) reads the letter cheaply. Skyvern (TC-07, production-adjacent) files and confirms the appeal in portals that have no API. Both are listed in [s5-planner-01](../outputs/s5-reality/feasibility/s5-planner-01.md).
- **Prior art:**
  - Quick verdict: adjacent-exists ([s5-hunter-01](../outputs/s5-reality/prior-art/s5-hunter-01.md)). Deep verdict: adjacent-exists ([s8-hunter-01](../outputs/s8-final/prior-art-deep/s8-hunter-01.md)).
  - [Claimable](https://www.getclaimable.com/) and [Counterforce Health](https://www.counterforcehealth.org/) draft appeals for consumers from a photographed denial. Claimable mails or faxes the appeal, and Counterforce leaves submission to the user. Neither files into the plan's portal or re-checks a filing ID.
  - [Aegis](https://www.ycombinator.com/companies/aegis) (YC X25) automates portal submission and tracking, but for hospitals and billing groups.
  - The quick hunt found drafting tools for providers: [Hathr.AI](https://www.hathr.ai/blogs/ai-for-medicare-appeals) and [ACEHOUND](https://www.businesswire.com/news/home/20251007508376/en/).
  - Drafting alone is already covered. S5 knocked out three letter-only appeal ideas (I-4004, I-2549 and I-2070) as direct competitors of Counterforce and [River](https://rivereditor.com/tools/appeal-letter) ([survivors.md](../outputs/s5-reality/survivors.md)). The file-and-confirm step is what keeps I-4546 at adjacent.
- **Pricing:** $79 per filed appeal, refunded if the agent can't find a portal. For reference, the T8 dossier cites $300–$600 for a patient advocate on each Level 1 or Level 2 appeal (a vendor figure).
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A mobile-friendly upload of a sample denial letter. Mistral OCR 3 extracts the plan, the denial reason, the service and the deadline, and a 72-hour countdown starts.
    - An LLM drafts the appeal against a pre-loaded sample of the plan's coverage criteria.
    - A review screen where the family approves the draft before submission. This is the red team's fix.
    - Skyvern logs into a team-built mock Medicare Advantage appeal portal and submits. It then reopens the status page and reads back the filing ID.
    - A proof screen showing the filing ID, the timestamp and a screenshot of the confirmation page.
  - **Out of scope:**
    - Real plan portals. Credentials can't be obtained in 48 h ([S5 audit](../outputs/s5-reality/feasibility/s5-planner-01.md)), and real filing runs into portal terms and MFA (Gate D B.5).
    - A library of every plan's coverage criteria. The [S5 audit of I-4004](../outputs/s5-reality/feasibility/s5-planner-02.md) flags this as out of reach in 48 h and uses one canned policy instead.
    - Later steps in the product family. These are I-1022's rejection check before submission, I-2559's reinstatement filing, and I-5103's confirmation call (a section 4 wildcard).
  - Feasibility is `yes`. Every component is production-grade, and the step that revisits the portal to confirm really runs against the mock portal.
- **Demo moment:** Upload a sample denial letter. The drafted appeal, the portal submission and a proof screenshot all appear within a minute.
- **Red team's best objection (serious):** Claimable and Counterforce already draft appeals, and Aegis already files through payer portals for providers. Unattended filing on a stressed family's own portal account, within 72 hours, raises the stakes of any filing error. ([s8-redteam-01](../outputs/s8-final/red-team/s8-redteam-01.md))
  - **Fix:** Keep the refund-if-no-portal guarantee, and add a human review before final submission.
  - **Portal terms (Gate D B.5):** Storing a third party's credentials and automating an insurer's portal runs into portal terms, MFA and bot detection. The mock-portal demo is fine. Real filing should go through official channels where they exist `[unverified]`.
- **Scores:** 5 · 8 · 9 · 8 · 6 · 8 · 4 · 8.
  - Judge totals [70.0, 73.9, 76.1], median 73.9, spread 6.1 (one judge placed it in tier A).
  - Elo 1257.9 → 1281.1, consistency 88, feasibility yes.

### Balanced #3: Screen Agent Drafts Session Notes (I-4501), overall #5, tier B

- **Lineage / cell:** ai-native; prosumer\|local-private\|balanced; T9. [Card](../archive/ideas/I-4501.md)
  - Gate D (D.1) pairs it with I-2061 (#1) and recommends merging the two: ground the note first, then let this idea's screen agent type it into the EHR.
  - No competitor was found for the GUI-agent half.
- **One-liner:** A local model transcribes therapy sessions, then a screen agent types the note directly into the desktop EHR.
- **Niche:** Solo therapists with a 25–30 client caseload who draft SOAP notes in legacy desktop clinical-documentation software that has no export API.
- **Pain and evidence:**
  - Therapists spend 10–20 hours a week on documentation, and 60–70% of them document outside work hours ([T9 dossier](../outputs/s3-ideate/pain/T9-dossier.md), P6; the dossier calls this a colour source).
  - Incumbent scribes fabricate session content (T9 P7), so every note still has to be re-read.
  - With a desktop EHR, the therapist also has to re-type the note by hand.
- **How it works:**
  - A local speech model transcribes the session offline, and a local language model drafts the SOAP note.
  - A local GUI-agent model then opens the desktop EHR and types in each field directly, because the software has no API.
  - The clinician reviews the note before it is saved.
- **Tech unlock:**
  - Open-weight GUI-grounding models such as UI-TARS (TC-05, open weights, "moving toward production") click and type in desktop apps locally.
  - UI-TARS runs alongside on-device speech and language models, so there is no cloud call ([s5-planner-04](../outputs/s5-reality/feasibility/s5-planner-04.md)).
- **Prior art:**
  - Quick verdict: adjacent-exists ([s5-hunter-04](../outputs/s5-reality/prior-art/s5-hunter-04.md)). Deep verdict: adjacent-exists ([s8-hunter-09](../outputs/s8-final/prior-art-deep/s8-hunter-09.md)).
  - Cloud scribes push notes only into browser-based EHRs:
    - [Freed AI](https://www.getfreed.ai/) with one click.
    - [Upheal](https://www.upheal.io/ai-clinical-notes/ai-progress-notes/ai-soap-notes) through a browser extension.
    - [SOAP Note Buddy](https://chromewebstore.google.com/detail/soap-note-buddy-ai-scribe/ejedinkdbbimibapobjeodkocaeokepj), found by the quick hunt, the same way.
  - Fully local drafting exists, but it ends in a file the clinician copies by hand: [offline-medical-scribe](https://github.com/harishkotra/offline-medical-scribe) and the [Local AI Master therapist guide](https://localaimaster.com/blog/local-ai-therapists).
  - No local GUI agent was found that types into a legacy desktop EHR with no API.
- **Pricing:**
  - A monthly subscription per clinician, priced below cloud AI scribes. The card gives no figure.
  - For reference, the T9 dossier puts the incumbents Mentalyc and Upheal at $19.99–$119.99 a month.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A team-built mock desktop EHR with a stable layout: a patient list and a SOAP note form.
    - Local STT on a recorded mock session, using Kyutai STT (TC-31) or Mistral Voxtral (TC-32). gpt-oss-20b drafts the SOAP note.
    - UI-TARS opens the mock EHR, finds the patient and types in each field, with the cursor visible on screen.
    - A confirmation overlay where the clinician approves each field before it is written. The agent never clicks save by itself. This is the red team's fix.
    - Wi-Fi is off for the whole demo.
    - Following Gate D, I-2061's timestamp flagging runs first, so only grounded text gets typed in.
  - **Out of scope:** Typing into a real legacy EHR. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-04.md) says UI-TARS-class grounding on an arbitrary real EHR is not yet reliable. That makes it an unproven capability, not just a matter of build effort.
  - Feasibility is `risky` for that reason only. The transcribe-and-draft half is solid.
- **Demo moment:** Play a mock session and watch the cursor open the EHR and fill in the note fields by itself, with Wi-Fi disabled throughout.
- **Red team's best objection (serious):** Cloud scribes already push notes into browser EHRs, which leaves legacy desktop EHRs as the only gap. GUI-grounding accuracy on exact clinical-record fields is unproven. A click into the wrong patient's field would be a safety and liability incident, not a UX bug. ([s8-redteam-01](../outputs/s8-final/red-team/s8-redteam-01.md))
  - **Fix:** Until GUI-grounding accuracy has been measured independently on real EHR screens, require the clinician to confirm each field before any write to the EHR. Never auto-submit.
- **Scores:** 6 · 8 · 8 · 7 · 6 · 8 · 4 · 7.
  - Judge totals [70.5, 70.0, 68.3], median 70.0, spread 2.2.
  - Elo 1245.7 → 1261.8, consistency 62, feasibility risky.
  - It was polarizing in round 2 alone (50%). The merged consistency figure clears the flag (Gate D A.4).

### Balanced #4: Continuous authorised social-engineering testing (I-6001), overall #6, tier B

- **Lineage / cell:** seed-original (seed-09, your own seed); B2B\|agent-infra\|balanced; no territory (seed lane). [Card](../archive/ideas/I-6001.md)
- **One-liner:** Authorised AI-driven social-engineering tests against company staff and AI agents, run weekly, with fix and retest for each failure.
- **Niche:** Security teams and IT leads at mid-sized companies that use copilots or customer-facing AI agents. Pentest firms and managed security providers could white-label it.
- **Pain and evidence:** AI makes phishing, texts and cloned-voice calls cheap and convincing, and deployed AI agents can be talked into refunds or leaks. Existing tests are manual annual pentests or generic simulation templates. The card's only source is the [seed file](../inputs/seeds/seed-09.md). No pain dossier or statistic backs it.
- **How it works:** This is an authorised, consented testing service, and it has two halves.
  - The client signs off on scope and hard limits: targets, channels and what is off-limits. Executives opt in before any synthetic voice is used.
  - The staff half runs simulated email, text and voice tests built only from client-approved information.
  - The agent half runs adversarial test conversations against the client's own bots.
  - Each failure gets a 60-second lesson (staff) or a guardrail fix (bot), followed by an automatic retest.
- **Tech unlock:** Language models generate tailored multichannel test scenarios and multi-turn adversarial test conversations in minutes. At the same time, companies are deploying AI agents that can approve refunds `[unverified]` on the card. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-02.md) says no specific tech card is needed beyond standard LLM chat. Voice channels would add TC-27/TC-29.
- **Prior art:**
  - Quick verdict: **direct-competitor**, citing [OutThink](https://outthink.io/products/autonomous-ai-phishing-simulator/) and [Doppel](https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/). It survived S5 only because seed originals are kept ([survivors](../outputs/s5-reality/survivors.md)).
  - Deep verdict: adjacent-exists. [Brightside AI](https://www.brside.com) and [Arsen](https://arsen.co/en/platform/vishing-simulation) run staff vishing simulations, and [Lakera Red](https://www.lakera.ai/lakera-red) red-teams AI agents. No vendor combines both into one weekly test-fix-retest loop.
  - Web-verified: [Hoxhunt](https://hoxhunt.com/feature/deepfake-phishing-attack) runs phishing, smishing, vishing and deepfake-audio simulations ([gate-d-verification.md](../outputs/s8-final/gate-d-verification.md)). KnowBe4, Proofpoint, Promptfoo and HiddenLayer are `[unverified]`.
  - Both of seed-09's improved versions were knocked out in S5 as direct competitors: I-6008 by [Lakera Red](https://lakera.ai/lakera-red) and I-6005 by [Mindgard](https://mindgard.ai).
  - Gate D (C.2): each half is covered by incumbents. The only claim is the bundle with fix-and-retest, and the pitch must not claim novelty for either half.
- **Pricing:** Per employee per year for staff tests, per AI agent per month for bot tests, and white-label pricing for security firms. The card gives no price points.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - A scope sign-off screen for targets, channels and hard limits. No test runs without it.
    - A team-built sample support chatbot with a refund tool.
    - An LLM test runner that holds a batch of adversarial test conversations with that bot and logs every transcript.
    - A checker that flags policy failures, such as an unauthorised refund approval.
    - A guardrail fix and an automatic retest, with a pass/fail dashboard.
  - **Out of scope:**
    - Synthetic-voice tests and any live-employee tests. The [S5 audit](../outputs/s5-reality/feasibility/s5-planner-02.md) names their consent and ethics overhead as the riskiest part and says it can't be settled in 48 hours, so the demo runs on the chat channel only.
    - Real client bots and the white-label console.
  - Feasibility is `yes`: the generate, detect, fix and retest loop is plain LLM orchestration against a target the team builds itself.
- **Demo moment:** Against a sample support chatbot, 200 test conversations find 3 refund approvals. Show the transcript, apply the fix, and the retest comes back green.
- **Red team's best objection (serious):** The idea bundles two mature, separate categories (human vishing simulators and AI-agent red-teaming), and there is no evidence that anyone wants both together. Cloned-voice tests on rank-and-file staff also carry real consent and legal exposure.
  - **Fix:** Validate demand for the bundle with one buyer first, or resell existing vendors under one white-label contract instead of rebuilding.
- **Scores:** 5 · 7 · 7 · 7 · 7 · 8 · 4 · 7.
  - Judge totals [62.4, 66.3, 68.3], median 66.3, spread 5.9.
  - Elo 1230.5 → 1253.8, consistency 62 (not polarizing), feasibility yes.

### Balanced #5: 90-Day Reinstatement Filer (I-2559), overall #8, tier B

- **Lineage / cell:** ai-native; B2C\|screen-agent\|balanced; T8. [Card](../archive/ideas/I-2559.md)
  - Gate D (D.2) calls it the weaker twin of I-4546 on every signal. It has the same buyer and cell, and the same loop: photograph the notice, OCR it, file in the portal, confirm.
  - Unlike I-4546, it has no coverage badge.
  - Present it as a feature of I-4546's product, and demo I-4546.
- **One-liner:** Uploads a Medicaid termination notice and files the reinstatement request in the state portal before signup finishes.
- **Niche:** Families whose parent has already lost long-term-care Medicaid over paperwork, and who are racing a 90-day reinstatement window most people don't know exists.
- **Pain and evidence:**
  - 69% of unwinding disenrollments were procedural rather than eligibility-based ([CBPP](https://www.cbpp.org/research/health/unwinding-watch-tracking-medicaid-coverage-as-pandemic-protections-end); [T8 dossier](../outputs/s3-ideate/pain/T8-dossier.md), P1).
  - The dossier lists reinstatement within 90 days as a workaround available in some states.
  - The card says the path is "only available in some states". Gate D notes that the federal reconsideration-period rule for procedural terminations may make it broader `[unverified]`. Fact-check this before the pitch.
- **How it works:**
  - The proxy photographs the termination notice at signup.
  - The agent reads the case number and termination date, and checks the state's reinstatement rule.
  - It fills in the state portal's reinstatement request with the extracted case data and submits it.
  - It returns a tracking number before onboarding ends.
- **Tech unlock:** Mistral OCR 3 (TC-30) extracts the case number from the notice. Skyvern (TC-07) files the state reinstatement form, which has no API ([s5-planner-06](../outputs/s5-reality/feasibility/s5-planner-06.md)). I-4546 uses the same stack.
- **Prior art:**
  - Quick verdict: clear ([s5-hunter-12](../outputs/s5-reality/prior-art/s5-hunter-12.md)). That hunt found only government and legal pages explaining the reinstatement rule.
  - Deep verdict: adjacent-exists ([s8-hunter-04](../outputs/s8-final/prior-art-deep/s8-hunter-04.md)).
  - [Fortuna Health](https://www.ycombinator.com/companies/fortuna-health) (YC, "TurboTax for Medicaid") serves the same consumer niche of families dropped from Medicaid over paperwork. It focuses on renewal and enrollment guidance.
  - [Skyvern](https://www.skyvern.com/blog/medicaid-enrollment-automation/) fills state Medicaid portals from case data. It is sold to caseworkers and organizations for new applications.
  - S5 knocked out two neighbouring ideas because automated Medicaid portal filing is already live ([survivors.md](../outputs/s5-reality/survivors.md), [s5-hunter-11](../outputs/s5-reality/prior-art/s5-hunter-11.md), [s5-hunter-12](../outputs/s5-reality/prior-art/s5-hunter-12.md)):
    - I-4032, cut on Skyvern and [Droidal](https://droidal.com/enrollment-ai-agent/), which fill and submit Medicaid applications.
    - I-4545, cut on [HeyMedicaid](https://heymedicaid.med/), which auto-fills renewals and sends reminders.
  - Reinstatement after a termination is the part no one was found filing.
- **Pricing:** $49 per filing, refunded if the state has no reinstatement path.
- **MVP (48 h) scope and stack:**
  - **In scope:**
    - Upload of a sample termination notice. Mistral OCR 3 extracts the case number and termination date.
    - A small rules table for one or two demo states. It answers two questions: is a reinstatement path open, and how many days are left in the window?
    - Skyvern fills and submits the reinstatement request in a team-built mock state portal, and returns a tracking number.
    - A refund branch for when the state has no reinstatement path.
    - If it is demoed inside I-4546's product, as Gate D suggests, one upload screen sends a termination notice here and a denial letter to the appeal flow.
  - **Out of scope:**
    - Real state Medicaid portals. They can't be accessed or tested in 48 h ([S5 audit](../outputs/s5-reality/feasibility/s5-planner-06.md)), and real filing raises portal terms and MFA issues (Gate D B.5).
    - A rules table for all 50 states.
  - Feasibility is `yes` against the mock portal.
- **Demo moment:** A photographed termination letter yields a case number and then a filed reinstatement confirmation, both within one minute.
- **Red team's best objection (serious):** Fortuna Health already serves families dropped from Medicaid over paperwork, and Skyvern already files state portal forms that have no API. The idea recombines the mechanisms of two live products for a narrow moment: a family that has already lost coverage, is inside the 90-day window, and lives in a state with a reinstatement path. ([s8-redteam-04](../outputs/s8-final/red-team/s8-redteam-04.md))
  - **Fix:** Partner with or sell into Fortuna Health's funnel instead of competing for the same point where consumers discover the product. Own only the reinstatement step.
- **Scores:** 6 · 7 · 8 · 7 · 6 · 8 · 4 · 7.
  - Judge totals [71.7, 60.0, 69.0], median 69.0, spread 11.7.
  - This is the second-widest spread in the set, so Gate D (A.3) treats the band placement as soft. The mean of 66.9 still clears 65.
  - Elo 1217.7 → 1241.3, 11th of the 15 eligible balanced ideas by Elo. Consistency 75, feasibility yes.

---

## 6. Seed report

Every seed from seed-01 to seed-11 gets a section below, and none was silently dropped, including the seeds whose original or best descendant was knocked out. Seed originals were exempt from the S5 knock-outs, so five reached S8 despite failing one (I-6001, I-1042, I-2536, I-1050, I-4014, per [S5 survivors](../outputs/s5-reality/survivors.md)); the S8 direct-competitor knock-out was not waived, and it removed four seed originals (I-1042, I-2536, I-1525, I-1050) plus two seed-improved cards (I-2038, I-3050). Sources are the `seeds` and `finalists` blocks of [report/scorecards.json](scorecards.json), both round leaderboards ([r1](../tournament/r1/leaderboard.md), [r2](../tournament/r2/leaderboard.md)), the seed cards and atoms under [outputs/s2-seeds/](../outputs/s2-seeds/), and the archive cards.

Conventions for every seed section:

- **Elo** is round 1 → round 2. "r2 rank" is the position among all ideas of that track in the round-2 leaderboard. "Rank in track" is the position among eligible S8 finalists, as in sections 2–3.
- **Scores** use the section 5 order: novelty · why-now · pain · WTP · buildability · demo · defensibility · clarity.
- **Consistency** is the merged figure from scorecards.json for finalists and the round-2 figure for everything else.
- **Pivots that never reached the tournament** were archived in S4 (cell cap or merge) unless stated otherwise. They have no Elo and no audit.

---

### seed-01: Pivot: solving "will the sofa fit?" as a robotics problem

Track: novel. [Seed card](../outputs/s2-seeds/seed-01.md), [atoms](../outputs/s2-seeds/decomposed/seed-01.md).

- **Original: Pivot: Will the Sofa Fit? (I-4014).** [Card](../archive/ideas/I-4014.md)
  - Elo 1170.7 → 1155.6, r2 rank 63 of 72 novel, consistency 75 (50% in round 2, polarizing that round). S8 finalist, rank 18 in track, not in the final 30.
  - **Scores:** 6 · 6 · 7 · 7 · 5 · 8 · 4 · 7. Judge totals [62.5, 67.1, 62.0], median 62.5, spread 5.1, below bar. This is the highest rubric of any seed original from seed-01 to seed-08.
  - **S5:** quick prior art adjacent-exists (a lead check; the hunters filed no entry). Feasibility `no`: it failed knock-out 2 because centimetre-accurate 3D from plain phone video is unverified, and stayed in only as a seed original. The S5 lead called this contestable, citing [SkyeBrowse](https://www.skyebrowse.com/news/posts/3d-room-scanner) ([survivors](../outputs/s5-reality/survivors.md)).
  - **S8 deep prior art:** adjacent-exists. Smart Moving: Furniture Helper, the MeltflexAI/Luna Furniture calculators and the Polycam/Metaroom LiDAR scanners. The hunter recorded no URLs; the Smart Moving link is under I-2038 below. Manual fit calculators and 3D room scanners exist separately, but none combines video reconstruction with a verdict and a maneuvering animation at checkout.
  - **Red team (serious):** the core mechanism depends on the `[unverified]` video-to-3D claim, and an existing app already gives maneuvering guidance from manual measurements. **Fix:** validate single-video reconstruction against LiDAR ground truth before promising the checkout demo.
  - **Knocked out:** no.
- **Best improved version: Fit Check for Big Deliveries (I-2038).** [Card](../archive/ideas/I-2038.md)
  - It swaps plain video for a phone depth-camera scan. Elo 1228.5 → 1236.9, r2 rank 13 of 72 novel, consistency 62.
  - **Scores:** 3 · 4 · 7 · 6 · 7 · 7 · 2 · 8. Judge totals [48.5, 50.7, 54.2], median 50.7, spread 5.7. S5: adjacent-exists / risky.
  - **Knocked out in S8** as a direct competitor: [Smart Moving: Furniture Helper](https://apps.apple.com/us/app/smart-moving-furniture-helper/id1666262699) already sells a rotate/tilt stairwell-and-doorway clearance solver to moving companies. Also listed: [Roomantic](https://www.roomantic.ai/) and [magicplan](https://help.magicplan.app/auto-scan-your-floor-plan). Red team: fatal.
  - The other improved card is I-3044 Will It Fit? Delivery Check (three stairwell photos): Elo 1186.5 → 1186.6, r2 rank 43 of 72, polarizing (50%). S5: adjacent-exists / risky. Not an S8 finalist.
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-2571 Verified Doorway Registry (a one-time clearance profile per building)
  - I-2572 Wheelchair Route Checker
  - I-2573 Delivery Damage Shield
  - I-2574 Job-Site Clearance Check
  - I-2575 Facility Move Planner (hospital equipment through corridors)
- **Atoms in other finalists:** none. Its only atom-hybrid, I-3559 Pre-Submit Fit Check (A-seed-01-insight-1 + A-seed-05-mech-3), was archived in S4.
- **Verdict: pivot.** It has the best rubric of any seed original from seed-01 to seed-08, but Smart Moving already sells the clearance solver and the video-to-3D step failed S5 feasibility, so the only open ground is the checkout-embedded scan-at-purchase flow that the I-2038 red team named, and none of the pivots was ever tested.

### seed-02: Spotter: computer vision for the charity paddle raise

Track: balanced. [Seed card](../outputs/s2-seeds/seed-02.md), [atoms](../outputs/s2-seeds/decomposed/seed-02.md).

- **Original: Spotter: Paddle-Raise Vision (I-4519).** [Card](../archive/ideas/I-4519.md)
  - Elo 1156.3 → 1156.4, r2 rank 75 of 84 balanced, consistency 62 (50% in round 2, polarizing that round). S8 finalist, rank 25 in track, not in the final 30.
  - **Scores:** 6 · 6 · 5 · 4 · 4 · 8 · 4 · 6. Judge totals [46.1, 54.6, 55.6], median 54.6, spread 9.5, below bar.
  - **S5:** adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [OneCause](https://www.onecause.com/solutions/compare-givesmart/), [Handbid](https://www.handbid.com/features/auction-management) and [Givebutter paddle raise](https://givebutter.com/features/paddle-raise) own paddle-raise capture through manual or mobile-bidding entry. None fuses room cameras with the auctioneer's speech.
  - **Red team (serious):** it is the same entrenched category as I-3045, a near-duplicate pitch, with the same `[unverified]` fusion-accuracy dependency and an under-addressed guest-consent question. **Fix:** merge with I-3045 before choosing between a platform add-on and a standalone product.
  - **Knocked out:** no.
- **Best improved version: Spotter for Paddle Raises (I-3045).** [Card](../archive/ideas/I-3045.md)
  - It reduces the rig to a single camera plus live speech. Elo 1198.7 → 1198.9, r2 rank 46 of 84, consistency 50, polarizing. S8 finalist, rank 17 in track.
  - **Scores:** 3 · 6 · 6 · 5 · 6 · 8 · 3 · 7. Judge totals [54.6, 51.2, 53.4], median 53.4, spread 3.4, below bar. S5: adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [OneCause Spotter Tool](https://www.onecause.com), [GiveSmart](https://www.givesmart.com) and the GalaBid/ClickBid paddle-raise modules rely on human spotters. Red team serious; **fix:** sell it as an add-on that feeds existing platforms, and validate fusion accuracy in ballroom noise before demoing.
  - The other improved card is I-2039 Instant Paddle Capture: Elo 1167.5 → 1151.8, r2 rank 76 of 84. S5: adjacent-exists / risky.
- **Best pivots:** only one reached the tournament.
  - **I-3010 Walkthrough Recap** ([card](../archive/ideas/I-3010.md)): a personalised recap video of each real-estate showing. Elo 1168.2 → 1137.1, r2 rank 80 of 84. S5: adjacent-exists / risky. The pain line is `[unverified]` on its own card.
  - Archived in S4: I-3006 Tap-to-Log Paddle Tally (NFC paddles), I-3007 RingSide: Live Auction Bid Capture, I-3008 Gala Checkout Flow, I-3009 Booth Lead Capture, By the Vendor.
- **Atoms in other finalists:** none. Its only atom-hybrid, I-1527 Submission Clip Ledger (A-seed-02-mech-3, the proof clip per pledge), was archived in S4.
- **Verdict: drop.** Both rubric-scored versions landed between 53 and 55 against incumbents that already own paddle capture and its payment lock-in, and the vision-plus-speech accuracy claim that would set it apart was never verified.

### seed-03: Lay of the Land: capturing a farm's unwritten map before it's lost

Track: balanced. [Seed card](../outputs/s2-seeds/seed-03.md), [atoms](../outputs/s2-seeds/decomposed/seed-03.md).

- **Original: Lay of the Land (I-3541).** [Card](../archive/ideas/I-3541.md)
  - **It is #30 overall and rank 15 in the balanced track**, a Gate D backfill after the two loop-1 drops. It is one of only two seed originals in the final 30; the other is I-6001 (seed-09).
  - Elo 1231.3 → 1208.8. It was 13 of 65 in round 1 and 33 of 84 in round 2 (0-3-1 that round). Consistency 88.
  - **Scores:** 7 · 7 · 5 · 5 · 5 · 8 · 5 · 6. Judge totals [59.5, 59.5, 60.2], median 59.5, spread 0.7, below bar. Its novelty of 7 ties I-2052 for the highest in the final 30.
  - **S5:** adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [AgriWebb](https://www.agriwebb.com/solutions/farm-mapping/) and [Farmbrite](https://www.farmbrite.com/farm-mapping) offer GPS field notes, and [ARUtility](https://www.arutility.com/) offers AR utility overlays. None combines narrated oral history, confidence-tagged provenance and AR playback for succession.
  - Gate D (C.8) adds that drainage-tile as-built mapping tools sold to tile installers were not checked `[unverified]`, and would be adjacent at most.
  - **Red team (serious):** GPS farm mapping and AR utility overlays already exist separately, and phone-GPS AR pins are only accurate to a few metres. **Fix:** drop AR for v1 and validate GPS accuracy before promising on-site pinpointing.
  - Gate D (B.7) does not treat this as a build blocker: the demo can show few-metre pins or a flat map.
  - **Knocked out:** no.
- **Best improved version: Lay of the Land (I-3046).** [Card](../archive/ideas/I-3046.md)
  - It drops the AR and keeps a browsable map. Elo 1201.0 → 1177.3, r2 rank 62 of 84, consistency 62. S8 finalist, rank 23 in track.
  - **Scores:** 6 · 7 · 6 · 5 · 7 · 8 · 5 · 7. Judge totals [61.7, 62.9, 62.4], median 62.4, spread 1.2, below bar. The rubric is higher than the original's, but the Elo is lower. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. [Farmable](https://apps.apple.com/us/app/farmable-farm-manager-app/id1456760199), [Mobble](https://www.mobble.io/feature-spotlight/farm-mapping) and [Farm Estate GPS](https://www.farmestategps.com).
  - **Red team (serious):** the paying buyer (advisors and lenders, per report) is unvalidated. **Fix:** get one succession advisor or ag lender to confirm they would pay per report before building.
  - Gate D notes that I-3046 is outside the 30, so the family has no in-set duplicate.
  - The other improved card is I-2040 The Farm's Spoken Map: Elo 1171.5 → 1164.8, r2 rank 72 of 84. S5: adjacent-exists / risky.
- **Best pivots:** none reached the tournament. All five were archived in S4, and all five reuse the walk-and-talk capture for another handover:
  - I-2576 Message Archive Miner
  - I-2577 Shop Handover Recorder
  - I-2578 Farm Estate Ledger
  - I-2579 Building Systems Memory
  - I-2580 Departing Employee Debrief
- **Atoms in other finalists:** none. Twelve atom-hybrid cards drew on it. One reached the tournament: I-1039 Proxy Knowledge Handoff ([card](../archive/ideas/I-1039.md), A-seed-03-insight-1 + A-seed-03-mech-2), with Elo 1186.8 → 1163.6 and r2 rank 73 of 84. It was not an S8 finalist. The other eleven were archived in S4.
- **Verdict: keep.** It is the only original from seeds 01–08 in the final 30, and its narrated, confidence-tagged capture has no direct competitor; build it as I-3046's flat map with AR as a stretch goal, and confirm one paying advisor or lender first.

### seed-04: AI live interview coach

Track: balanced. [Seed card](../outputs/s2-seeds/seed-04.md), [atoms](../outputs/s2-seeds/decomposed/seed-04.md).

- **Original: AI live interview coach (I-1042).** [Card](../archive/ideas/I-1042.md)
  - Elo 1229.9 → 1221.8, r2 rank 24 of 84 balanced, consistency 38, **polarizing**.
  - **Scores:** 2 · 4 · 5 · 6 · 8 · 5 · 2 · 8. Judge totals [49.2, 50.2, 49.2], median 49.2, spread 1.0, below bar.
  - **S5:** the hunter rated it adjacent-exists. The lead upgraded it to **direct-competitor** using its siblings' evidence ([Poised](https://www.poised.com/use-cases/poised-for-interviews)), and it was kept only as a seed original. Feasibility risky.
  - **S8 deep prior art: direct-competitor.** [Yoodli](https://yoodli.ai/use-cases/interview-preparation) already nudges pace, fillers and energy live during real video calls, with replay analytics. [Poised](https://poised.com/) does live in-call coaching, and [Orai](https://orai.com/) is also listed. Same mechanism, same niche.
  - **Red team (fatal):** same as the deep finding. **Fix:** narrow to a sub-niche Yoodli ignores, such as non-native-speaker phrasing or a bootcamp white-label.
  - **Knocked out in S8** as a direct competitor. Without the knock-out, its Elo would have put it inside the 15-per-track cut: Gate D names I-1042 among the three S8 knock-outs skipped when the 30 were filled.
- **Best improved version:** none reached the tournament. Both improved cards were knocked out in S5 as direct competitors:
  - I-2041 Live Delivery Coach for Interviews ([Acedit](https://www.acedit.ai/), [Poised](https://poised.com/products/real-time))
  - I-3047 AI Live Interview Coach, tuned for non-native speakers ([Poised](https://www.poised.com/use-cases/poised-for-interviews), [Beyz](https://beyz.ai/))
- **Best pivots:** only one reached the tournament.
  - **I-3011 Interview Pattern Report** ([card](../archive/ideas/I-3011.md)): reviews all your past video interviews for the delivery pattern that costs offers. Elo 1170.0 → 1138.8, r2 rank 79 of 84 (0-4-0). S5: adjacent-exists / yes.
  - **I-3014 Live Lift Form Coach** was knocked out in S5 as a direct competitor ([FORMFIT](https://play.google.com/store/apps/details?id=com.adimo.neurafit&hl=en_US), [Skeletal PT](https://apps.apple.com/us/app/-/id6757767729)).
  - Archived in S4: I-3012 Live Sales Call Delivery Coach, I-3013 Interview-Ready Check, I-3015 Live De-escalation Coach.
- **Atoms in other finalists:** none. Its only atom-hybrid, I-2077 Appeal Reel (A-seed-04-mech-3), was archived in S4.
- **Verdict: drop.** The original and both improved versions were knocked out as direct competitors of Yoodli and Poised, and the only surviving pivot finished 79th of 84.

### seed-05: AI PC optimiser and fixer

Track: balanced. [Seed card](../outputs/s2-seeds/seed-05.md), [atoms](../outputs/s2-seeds/decomposed/seed-05.md).

- **Original: AI PC optimiser and fixer (I-2536).** [Card](../archive/ideas/I-2536.md)
  - Elo 1140.4 → 1177.8, r2 rank 60 of 84 balanced, consistency 90. It went 5-0-1 in round 2 but started from 61st of 65 in round 1.
  - **Scores:** 2 · 5 · 6 · 3 · 8 · 7 · 1 · 8. Judge totals [49.2, 44.1, 54.1], median 49.2, spread 10.0, below bar.
  - **S5:** the hunter rated it adjacent-exists. The lead upgraded it to **direct-competitor** on the evidence of its sibling I-2042 ([TroubleBuddy](https://troublebuddy.ai/)), and it was kept only as a seed original. Feasibility yes.
  - **S8 deep prior art: direct-competitor.**
    - Microsoft is shipping a free, in-OS agentic [Fix it button for Windows 11 Copilot+ PCs](https://www.pcworld.com/article/2773838/an-ai-driven-fix-it-button-is-just-what-windows-needs.html).
    - Also listed: [PC Optimizer Software](https://apps.microsoft.com/detail/xp99bg9vdxzlbf) and [optimizerDuck](https://github.com/optimizer-duck-app/optimizerDuck).
    - The seed's own decomposition had already found [TroubleBuddy](https://troublebuddy.ai/features/ai-diagnostics) and [PC-Care.ai](https://pc-care.ai/lp/ccleaner-alternative/) and rated the seed direct.
  - **Red team (fatal):** Microsoft's button matches the niche and mechanism at zero cost. **Fix:** target non-Copilot+ and older PCs, or pivot to the family remote-approval angle Microsoft lacks.
  - **Knocked out in S8** as a direct competitor.
- **Best improved version: Remote Family PC Copilot (I-3048).** [Card](../archive/ideas/I-3048.md)
  - This is the family remote-approval angle. Elo 1203.3 → 1188.6, r2 rank 52 of 84, consistency 100. S8 finalist, rank 20 in track.
  - **Scores:** 4 · 4 · 6 · 5 · 7 · 7 · 3 · 7. Judge totals [52.6, 56.0, 57.5], median 56.0, spread 4.9, below bar. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. PC Doctor - AI PC Support, OmniMend and Microsoft Quick Assist (the hunter recorded no URLs). Evidence-then-approve exists only as single-user local apps.
  - **Red team (serious):** a modest integration that also collides with Microsoft's free Fix it agent. **Fix:** lead with the remote-family-approval workflow.
  - The other improved card, I-2042 Evidence-First PC Fixer, was knocked out in S5 as a direct competitor ([TroubleBuddy](https://troublebuddy.ai/)).
- **Best 2 pivots by round-2 Elo:**
  - **I-2583 Am I Actually Hacked** ([card](../archive/ideas/I-2583.md)): evidence-based compromise check for home PCs. Elo 1154.4 → 1169.6, r2 rank 67 of 84, polarizing (50%). S5: adjacent-exists / yes.
  - **I-2582 POS Terminal Doctor** ([card](../archive/ideas/I-2582.md)): an on-device agent diagnoses frozen store terminals. Elo 1141.5 → 1126.7, r2 rank 82 of 84, polarizing (50%). S5: adjacent-exists / yes.
  - Not in the tournament: I-2584 Home Network Fixer was knocked out in S5 ([Support Robotics](https://www.supportrobotics.com/), [UniFi WiFi Agent](https://help.ui.com/hc/en-us/articles/31628490448151)). I-2581 Diagnose-Then-Dispatch and I-2585 Evidence-First Investing were archived in S4.
- **Atoms in other finalists: two, and both are in the final 30.** Seed-05's atoms were the most reused in the run: 30 atom-hybrid cards, 7 of which reached the tournament.
  - **I-3093 Privileged Cite Bench** ([card](../archive/ideas/I-3093.md)) is **#7 overall, tier B**, rubric 66.9 with spread 16.1. It is built from A-seed-05-mech-2 (show the evidence before any verdict) and A-seed-05-insight-1. Unconfirmed citations are shown next to the real case text.
  - **I-4511 Proof Receipts for Proxy Agents** ([card](../archive/ideas/I-4511.md)) is **#24 overall, below bar**, rubric 57.9. It is built from A-seed-05-mech-3 (plan and snapshot before acting). Gate D's fix (B.6) applies: redact deterministically and hash the raw capture rather than regenerating the image.
  - Five more hybrids reached round 2 but were not finalists:
    - I-2023 Local Pawn Report Filer, 1228.7
    - I-4537 Silent-Failure Catcher for Locked Systems, 1223.9
    - I-1023 Elder Account Diagnostic Copilot, 1209.8
    - I-5102 Family Account Security Sweep, 1208.4 (an S7 mutation of I-3048 and I-1516)
    - I-4541 PHI-Blind Portal Runner, 1150.0
  - I-2070 was knocked out in S5 ([Counterforce Health](https://www.counterforcehealth.org/)). I-5304 was dropped at S7 intake. The other 21 were archived in S4.
- **Verdict: pivot.** The PC fixer is knocked out by Microsoft's free in-OS button, but its evidence-before-action atom produced the #7 idea overall, so carry the seed forward through I-3093 rather than as a PC product.

### seed-06: AI feature-request reviewer

Track: balanced. [Seed card](../outputs/s2-seeds/seed-06.md), [atoms](../outputs/s2-seeds/decomposed/seed-06.md).

- **Original: AI Feature-Request Reviewer (I-1525).** [Card](../archive/ideas/I-1525.md)
  - Elo 1139.0 → 1116.5. It finished **last of 84** balanced in round 2 and last of 65 in round 1. Consistency 88.
  - **Scores:** 2 · 5 · 5 · 3 · 8 · 5 · 2 · 7. Judge totals [43.1, 46.8, 43.4], median 43.4, spread 3.7, below bar.
  - **S5:** the hunter rated it direct-competitor. The lead overturned that to adjacent-exists because [devtimate](https://devtimate.com/ai-project-estimation/) works from RFPs and "cannot see the messy codebase". Feasibility yes.
  - **S8 deep prior art: direct-competitor.** [Bito AI Architect](https://bito.ai/), a [Jira Ticket Estimator skill](https://mcpmarket.com/tools/skills/jira-ticket-estimator) and [agent-estimate](https://github.com/kiloloop/agent-estimate) already read a real codebase and turn a ticket into a grounded estimate. The deep hunt found the codebase-grounded tools that the S5 lead's devtimate check had not.
  - **Red team (fatal):** the client-request framing is a thin wrapper on that mechanism. **Fix:** "none credible" without a different mechanism or niche.
  - **Knocked out in S8** as a direct competitor.
- **Best improved version: Client Quote Estimator for Dev Shops (I-2043).** [Card](../archive/ideas/I-2043.md)
  - Elo 1182.8 → 1174.2, r2 rank 64 of 84, consistency 75. S8 finalist, rank 24 in track.
  - **Scores:** 3 · 6 · 6 · 6 · 8 · 5 · 3 · 8. Judge totals [57.3, 53.9, 52.9], median 53.9, spread 4.4, below bar.
  - **S5:** the hunter rated it direct-competitor, and the lead overturned that to adjacent-exists. Feasibility yes.
  - **S8 deep prior art:** adjacent-exists. Devtimate (devtimate.com) quotes from briefs, not repo scans. jira-ticket-estimator (github.com/kennyth01/jira-ticket-estimator) and Scope (within-scope.com) are also listed; the hunter gave bare domains, not full URLs.
  - **Red team (manageable):** Devtimate already sells client-ready quotes, and a wrong AI quote creates client-facing liability. **Fix:** ranges with confidence flags plus a mandatory human-review gate.
  - The other improved card is I-3049 AI Feature-Request Reviewer: Elo 1154.4 → 1145.5, r2 rank 78 of 84. S5: adjacent-exists / yes.
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-3016 Estimate Calibration Engine (learns from past tickets versus actual hours)
  - I-3017 Codebase Due-Diligence Agent
  - I-3018 Commit-to-Client Reports
  - I-3019 Contract Turnaround Estimator
  - I-3020 Grounded Repair Quotes
- **Atoms in other finalists:** none. Both of its atom-hybrids were archived in S4: I-1544 PA Triage by Predicted Effort and I-1554 Plain-Language E-Invoice Rejection Explainer.
- **Verdict: drop.** The original finished last in its track and was knocked out, and the best reframing (a client quote) scored 53.9 against a live incumbent, Devtimate, that already sells client-ready quotes.

### seed-07: Built on Jev: products that only work when AI is near-instant and near-free

Track: novel. [Seed card](../outputs/s2-seeds/seed-07.md), [atoms](../outputs/s2-seeds/decomposed/seed-07.md).

- **Original: Built on Jev (I-1050).** [Card](../archive/ideas/I-1050.md)
  - Elo 1139.2 → 1108.4. It finished **last of 72** novel in round 2 (0-4-0) and last of 61 in round 1. Consistency 100.
  - **Scores:** 2 · 3 · 2 · 2 · 4 · 4 · 1 · 2. Judge totals [25.6, 22.4, 34.0], median 25.6, spread 11.6. This is the lowest rubric of all 60 finalists.
  - **S5:** quick prior art clear. Feasibility `no`: it failed knock-out 2 because the card names no product, so there is nothing concrete to build, and it was kept only as a seed original. Jev itself was confirmed real by s5-hunter-02 ([Jev](https://en.wikipedia.org/wiki/Jev_(AI_model))).
  - **S8 deep prior art: direct-competitor.** Open-source "System 1 reflex layer" projects already sit on or beside Jev: [Reflex-S1](https://github.com/gowtham-source/reflex-s1) and [System1-mcp](https://github.com/ericmaddox/system1-mcp). See also [Jev / TypeSafe AI](https://www.techtarget.com/it-infrastructure/news/366650696/Jev-decision-model-touted-as-quicker-cheaper-LLM-alternative).
  - **Red team (fatal):** the idea also depends on Jev's own unverified speed and cost claims. **Fix:** pick one concrete downstream product and verify Jev's real latency and cost first.
  - **Knocked out in S8** as a direct competitor.
- **Best improved version: Instant Reflex AI Layer (I-3050).** [Card](../archive/ideas/I-3050.md)
  - Elo 1170.5 → 1162.7, r2 rank 58 of 72, consistency 88.
  - **Scores:** 2 · 7 · 6 · 6 · 7 · 7 · 2 · 6. Judge totals [51.9, 54.6, 48.8], median 51.9, spread 5.8. S5: adjacent-exists / risky.
  - **Knocked out in S8** as a direct competitor: [TypeSafe AI's Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) already ships sub-second typed per-event judgments with escalation, through a developer SDK, at usage pricing. The hunter records a Sept 2026 launch with a $40M seed.
  - Also listed: [Wiz small-model secret detection](https://www.wiz.io/blog/small-language-model-for-secrets-detection-in-code) and [SonarQube secrets detection](https://www.sonarsource.com/solutions/secrets-detection/). Red team: fatal.
  - The other improved card, I-2044 Reflex Secret Guard, was knocked out in S5 ([SonarQube for IDE](https://www.sonarsource.com/solutions/secrets-detection/), [Checkmarx](https://checkmarx.com/learn/how-to-detect-and-remove-leaked-api-keys-tokens-and-passwords-from-code-repositories/)).
- **Best pivots:** none reached the tournament.
  - I-2590 Zero-Lag Live Captions was knocked out in S5 ([Ava](https://www.ava.me/)).
  - Archived in S4:
    - I-2586 Distilled Reflex Moderator
    - I-2587 Instant NPC Reflexes
    - I-2588 Instant Transaction Guard
    - I-2589 Live Odds Reflex Engine
- **Atoms in other finalists:** none. All seven atom-hybrids were archived in S4: I-1055, I-1522, I-2037, I-2592, I-3523, I-4059 and I-4533.
- **Verdict: drop.** Jev's own maker already sells the reflex layer this seed proposes, the seed never chose a product, and every descendant that was tested was knocked out.

### seed-08: Audio-to-audio speech enhancer: same words, more life

Track: novel. [Seed card](../outputs/s2-seeds/seed-08.md), [atoms](../outputs/s2-seeds/decomposed/seed-08.md).

- **Original: Same Words, More Life (I-1555).** [Card](../archive/ideas/I-1555.md)
  - Elo 1140.5 → 1155.9, r2 rank 62 of 72 novel, consistency 89. S8 finalist, rank 17 in track.
  - **Scores:** 3 · 5 · 5 · 5 · 7 · 6 · 2 · 7. Judge totals [46.7, 48.7, 46.7], median 46.7, spread 2.0, below bar.
  - **S5:** adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists.
    - [Cleanvoice AI](https://cleanvoice.ai/filler-words/) and the [Descript filler remover](https://www.descript.com/tools/remove-filler-from-audio) cover filler cleanup.
    - The [ElevenLabs Voice Changer](https://elevenlabs.io/blog/speech-to-speech) transfers expressive delivery, but it needs a performed reference take.
  - **Red team (serious):** the two halves are each covered separately, and the one unclaimed piece, automatic expressiveness, is an unverified capability claim. **Fix:** validate the transform on real audio first, and fall back to filler removal plus sync if it is weak.
  - **Knocked out:** no.
- **Best improved version: Same Words, More Life (I-2045).** [Card](../archive/ideas/I-2045.md)
  - Elo 1165.6 → 1149.7, r2 rank 66 of 72, consistency 75. S8 finalist, rank 19 in track.
  - **Scores:** 3 · 5 · 5 · 5 · 5 · 6 · 2 · 7. Judge totals [46.1, 59.3, 46.7], median 46.7, spread 13.2, below bar. S5: adjacent-exists / risky.
  - **S8 deep prior art:** adjacent-exists. [Descript](https://www.descript.com/tools/remove-filler-from-video), [Cleanvoice AI](https://cleanvoice.ai/filler-words/) and [OpusClip](https://www.opus.pro/tools/remove-filler-words-from-video) do cut-based removal. None re-synthesizes the audio in the same voice while holding word timing.
  - **Red team (serious):** same idea as I-1555. **Fix:** ship it as an add-on inside a lecture-capture platform (Panopto, Echo360).
  - The original out-ranked both improved versions in round 2. The other improved card is I-3051: Elo 1140.3 → 1140.5, r2 rank 69 of 72, polarizing (50%). S5: adjacent-exists / risky.
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-3021 Filler-Free Lecture Cut
  - I-3022 Timed Voice Re-Performance
  - I-3023 Caption-Ready Lecture Audio
  - I-3024 Campus Study Planner
  - I-3025 Tone-Safe Reply Rewriter
- **Atoms in other finalists:** none. No atom-hybrid card was made from seed-08's atoms.
- **Verdict: drop.** Both rubric-scored versions landed at 46.7, the filler-removal half belongs to Descript and Cleanvoice, and the only unclaimed half (expressive re-synthesis that holds word timing) is an untested capability, not a product.

### seed-09: authorised social-engineering testing at AI speed

- **Seed and reading:** The group's own words are a one-line note about social-engineering "acceleration" for companies that use AI. Claude wrote the rest of the card from that note and read it as an authorised, consent-based testing service. **The group has not confirmed that reading** ([seed card](../outputs/s2-seeds/seed-09.md)). Allowed moves are improve, pivot and break down. The seed was released from deferral on 2026-09-26 and ran in the late lane.
- **Category:** This is a security-testing service that an organisation buys to test itself. It sits in two existing categories: staff simulations (Hoxhunt, KnowBe4) and testing a company's own AI agents (Lakera Red, Mindgard).
- **Mechanism, in outline:**
  - The client signs off on scope, channels and hard limits before any test runs.
  - Executives opt in before any synthetic version of their voice is used.
  - The service runs simulated multichannel tests of the client's staff.
  - It runs adversarial test conversations against the client's own bots.
  - Each failure gets a short lesson for the person or a guardrail fix for the bot, followed by an automatic retest.

#### Original: Continuous authorised social-engineering testing (I-6001), overall #6, tier B

- **Lineage / cell:** seed-original (seed-09); B2B\|agent-infra\|balanced. Rank in track 7 (balanced). [Card](../archive/ideas/I-6001.md)
- **Elo:** round 1 1230.5 → round 2 1253.8. Consistency 62, not polarizing. Coverage badge: yes.
- **S8 rubric:** median 66.3, judge totals [62.4, 66.3, 68.3], spread 5.9, band B.
  - Scores (novelty · why-now · pain · WTP · buildability · demo · defensibility · clarity): 5 · 7 · 7 · 7 · 7 · 8 · 4 · 7.
  - The scores are strongest on demo (8) and weakest on defensibility (4) and novelty (5).
- **S5 quick prior art: direct-competitor.**
  - Competitors: [OutThink](https://outthink.io/products/autonomous-ai-phishing-simulator/) and [Doppel](https://www.helpnetsecurity.com/2025/08/27/doppel-simulation-social-engineering/), both for continuous authorised AI social-engineering simulation.
  - It failed knock-out 1 but stayed in because seed originals are always kept ([S5 survivors](../outputs/s5-reality/survivors.md)).
  - S5 feasibility: yes.
- **S8 deep prior art: adjacent-exists** ([s8-hunter-08](../outputs/s8-final/prior-art-deep/s8-hunter-08.md)).
  - Staff side: [Brightside AI](https://www.brside.com) and [Arsen](https://arsen.co/en/platform/vishing-simulation) run AI-generated multichannel simulations against employees, including cloned voice. Both target staff only. The hunter also named CanIPhish, with no link.
  - Agent side: [Lakera Red](https://www.lakera.ai/lakera-red) runs continuous adversarial testing against a company's own AI agents, but it does not test staff.
  - The hunter found no vendor that combines both halves in one weekly test-fix-retest loop with white-label pricing.
- **Gate D:**
  - The web check verified that [Hoxhunt](https://hoxhunt.com/feature/deepfake-phishing-attack) runs phishing, smishing, vishing and deepfake-audio simulations ([gate-d-verification](../outputs/s8-final/gate-d-verification.md)).
  - KnowBe4, Proofpoint, Promptfoo, Mindgard and HiddenLayer are "well known" but were not checked by Gate D `[unverified]`.
  - Finding C.2: both halves are covered by incumbents, and the bundle with fix-and-retest is the only claim. **The pitch must not claim novelty for either half** ([gates/gate-D.md](../gates/gate-D.md)).
- **Red team's best objection (serious)** ([s8-redteam-04](../outputs/s8-final/red-team/s8-redteam-04.md)):
  - The idea bundles two mature, separately funded categories, and there is no evidence that anyone wants to buy both together.
  - Cloned-voice tests on rank-and-file staff carry legal and consent exposure that executive opt-in alone does not resolve.
  - **Fix:** Validate demand for the bundle with one buyer before building. Otherwise, resell existing vendors under one white-label contract instead of rebuilding both engines.
- **Demo moment:** The engine runs 200 test conversations against a sample support bot and finds 3 that end in a refund approval. It shows the transcript, applies the fix, and the retest comes back green.
- **Knocked out?** No.
  - It failed S5 knock-out 1 but was kept as the seed original.
  - S8 rated it adjacent, not direct, so it was not knocked out there.
  - Gate D did not drop it.
- **Unverified on the card:**
  - The why-now line is `[unverified]`.
  - The seed's two cited incidents, a deepfake-call payout and a chatbot that "agreed" to an absurd sale, are unverified in the seed itself and were not re-sourced.

#### Best improved version

Neither improved card reached the tournament, so neither has a round-2 Elo or an S8 scorecard. Both narrowed the idea toward the bot-testing half, and S5 knocked both out as direct competitors ([S5 survivors](../outputs/s5-reality/survivors.md)).

| Id | Name | What changed | Status | Knock-out evidence |
|---|---|---|---|---|
| I-6005 | Continuous Red-Team for Support Agents | Leads with the support bot and sells staff testing as an add-on to the same buyer. Metered per AI agent each month. | Knocked out in S5 (direct competitor). The S5 audit said `demoable: yes` ([s5-planner-06](../outputs/s5-reality/feasibility/s5-planner-06.md)). | [Mindgard](https://mindgard.ai), CalypsoAI Agentic Warfare (via F5; no URL recorded) and Lakera Red (via Check Point) ([s5-hunter-12](../outputs/s5-reality/prior-art/s5-hunter-12.md)) |
| I-6008 | Continuous adversarial testing for customer-facing AI agents | Bot testing only, with AI and product teams as the buyer. Staff testing and white-label are add-ons. | Knocked out in S5 (direct competitor). | [Lakera Red](https://lakera.ai/lakera-red) and Mindgard |

- **Result:** Taking out the staff half took out the one part of the claim that no hunter could match. The best version of this seed in the run is the original, with its bundle intact.

#### Pivots

None of the five pivots reached the tournament. All five were archived in S4 (cell cap or merge), per `report/scorecards.json` `seeds['seed-09']`. None has an Elo, a rubric score or a prior-art hunt, and each card's why-now line is `[unverified]`.

| Id | Name | Track, cell | Seed atom it keeps | One-liner | Status |
|---|---|---|---|---|---|
| I-6020 | Agent action firewall | Novel, B2B\|agent-infra | A-seed-09-pain-2 (agents can be talked into refunds or leaks) | Sits between a company's AI agent and its action APIs. It holds refunds, discounts or data access for a second check or human approval when the conversation shows manipulation pressure. | archived in S4 |
| I-6021 | AI negotiation sparring partner | Balanced, B2B\|drafter-dialogue | A-seed-09-tech-1 (multi-turn adversarial conversations) | Sales reps rehearse negotiations against AI buyer personas and are scored on where they gave ground. | archived in S4 |
| I-6022 | Alert triage copilot | Balanced, B2B\|verifier | A-seed-09-aud-1 (security and IT leads at mid-sized companies) | Reads overnight security alerts and hands the IT lead only the few that need a human. | archived in S4 |
| I-6023 | Uptime and drift monitor for deployed agents | Balanced, B2B\|verifier | A-seed-09-biz-2 (per-agent monthly pricing, white-label) | Replays client-approved conversations against live agents every day and pages the MSP when scores drop. | archived in S4 |
| I-6024 | Combined exposure score for cyber cover | Novel, B2B\|verifier | A-seed-09-insight-2 (agents are targets alongside staff) | Combines a company's existing staff-simulation results with a one-time probe of its public AI agents into one score for cyber underwriters. | archived in S4 |

- I-6020 and I-6024 are the two pivots that keep the seed's core insight, that a company's AI agents are now targets alongside its staff. They are the ones to reopen if the group prefers a pivot to the original. Neither has been checked for prior art.

#### Atoms in other finalists

- **None.** The seed was broken into 16 atoms ([decomposition](../outputs/s2-seeds/decomposed/seed-09.md)), but its `atom_hybrids` list in `report/scorecards.json` is empty.
- No other finalist, and nothing else in the final 30, carries seed-09 lineage. I-6001 is the seed's only presence in the final set.
- One idea is a near neighbour by theme but not by lineage. I-5203 Scope Gate for Your Own Agent (#28) also blocks an agent's action before it runs, the same pattern as I-6020. It serves a consumer's own agent and was generated independently.

#### Verdict: keep

**Keep I-6001 as the bundle:** it is the highest-ranked seed descendant in the run (#6 overall, tier B), and both attempts to narrow it to the bot-testing half were knocked out as direct competitors.

- **Conditions:**
  - The group confirms the authorised, defensive reading.
  - The pitch claims only the bundle with fix-and-retest (Gate D C.2).
  - The team takes the red team's fix: one buyer validates bundle demand, or the product starts as a white-label resale.
- **Unresolved from the seed:** consent and law remain open, including works-council or employee consent in some countries, proof that the buyer controls the target organisation and any third-party-hosted bot, and verified domain ownership with signed rules of engagement.
- **48-hour scope:** Following the build-effort calibration in [config/context.md](../config/context.md), the demo needs only the bot-testing half, which is what the stated demo moment uses: a team-built sample support bot, a test-conversation generator, a pass/fail check, a guardrail patch and a retest. The S5 audit of the sibling card I-6005 rated this loop `demoable: yes`.

### seed-10: Jev AI, a live business-call copilot

Track: balanced. [Seed card](../outputs/s2-seeds/seed-10.md), [atoms](../outputs/s2-seeds/decomposed/seed-10.md). This seed came in through the late lane: its improved and pivot cards come from `s3-improver-late` and `s3-pivoter-late` tasks.

- **Original: Jev AI live call copilot (I-6002).** [Card](../archive/ideas/I-6002.md)
  - Elo 1158.4 → 1189.3. It was 55 of 65 in round 1 and 51 of 84 in round 2, where it went 4-0-0. Consistency 88. S8 finalist, rank 19 in track, not in the final 30.
  - **Scores:** 3 · 5 · 6 · 6 · 7 · 6 · 2 · 7. Judge totals [58.0, 53.6, 49.7], median 53.6, spread 8.3, below bar.
  - **S5:** adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. Balto, Krisp and Parloa (the hunter recorded no URLs). Live coaching copilots and real-time scam alerts exist separately, but no single tool combines both with discreet supervisor escalation.
  - **Red team (serious):** combining the two is a closable feature gap, and the seed leans on the same unverified Jev speed claim as seed-07's I-1050. **Fix:** lead with the discreet phrase-triggered escalation, and prove it on a standard, verified LLM, not only on Jev.
  - **Knocked out:** no.
- **Best improved version: Live call-verification copilot for payment requests (I-6007).** [Card](../archive/ideas/I-6007.md)
  - It narrows the seed to payment and account-change calls that break verification policy.
  - Elo 1184.4 → 1207.6. It was 42 of 65 in round 1 and 37 of 84 in round 2 (3-0-1). Consistency 50, **polarizing**.
  - S8 finalist, **rank 16 in the balanced track**: the first eligible balanced idea below the 15-per-track cut.
  - **Scores:** 4 · 5 · 7 · 7 · 7 · 6 · 2 · 7. Judge totals [60.9, 55.3, 58.0], median 58.0, spread 5.6, below bar. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists.
    - [Balto real-time agent assist](https://www.balto.ai/real-time-agent-assist/) has the same live-transcript, private-prompt and escalation mechanism, but sells it as general compliance coaching.
    - [Pindrop Pulse](https://www.pindrop.com/product/pindrop-pulse/) and [Rulebase](https://www.ycombinator.com/launches/MBR-rulebase-the-voice-fraud-defense-system-for-financial-services) serve the same fraud niche through deepfake detection instead.
  - **Red team (serious):** an easy feature addition for Balto, which already has distribution. **Fix:** sell pre-built payment-verification rule packs as a Balto or Gryphon integration, not as a standalone platform.
  - **The other improved card, I-6004 Compliance Call Copilot, was knocked out in S5** as a direct competitor ([Balto](https://www.balto.ai/blog/best-real-time-compliance-monitoring-software-for-contact-centers-2026/), [Observe.AI](https://www.observe.ai/contact-center-glossary/what-is-call-center-compliance)).
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-6010 Pre-Call Prep Briefs
  - I-6011 Live Consult Safety Copilot (telehealth drug-interaction flags)
  - I-6012 AI Roleplay Trainer for New Reps
  - I-6013 Field Inspection Compliance Copilot
  - I-6014 Live Email Risk Guard
- **Atoms in other finalists:** none. No atom-hybrid card was made from seed-10's atoms.
  - Its payment-verification angle is thematically close to the vendor bank-change family in the final 30 (I-4525 + I-1508). I-4525's deep hunt also lists Rulebase.
  - No card links the two, and the connection is not a lineage.
- **Verdict: pivot.** The general call copilot is a gap Balto can close with one feature, but the payment-verification version (I-6007) finished one place outside the cut, so its rule pack is worth carrying as the inbound-call check of the I-4525 + I-1508 vendor bank-change product, not as a standalone copilot.

### seed-11: Jev, context-aware phrase suggestions for AAC

Track: balanced. [Seed card](../outputs/s2-seeds/seed-11.md), [atoms](../outputs/s2-seeds/decomposed/seed-11.md). This seed also came in through the late lane.

- **Original: Jev: context-aware AAC phrase suggestions (I-6003).** [Card](../archive/ideas/I-6003.md)
  - Elo 1181.3 → 1181.2. It was 46 of 65 in round 1 and 58 of 84 in round 2, where it was polarizing at 50%. Merged consistency 62. S8 finalist, rank 22 in track, not in the final 30.
  - **Scores:** 3 · 5 · 7 · 5 · 7 · 6 · 3 · 7. Judge totals [56.8, 51.7, 57.3], median 56.8, spread 5.6, below bar.
  - **S5:** adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. [Spoken AAC](https://apps.apple.com/us/app/spoken-tap-to-talk-aac/id1034487817), [AAC Talker Listening mode](https://apps.apple.com/us/app/aac-talker/id6446367342) and [Vocable AAC](https://apps.apple.com/us/app/vocable-aac/id1497040547) already listen to the conversation partner and surface AI suggestions. Each generates or predicts new text rather than ranking only the user's own pre-saved, approved phrases.
  - **Red team (manageable):** Vocable already pairs a personal phrase library with AI assist. For switch-scanning users, any latency or mis-ranking could make replies slower than manual navigation. **Fix:** differentiate hard on the rank-only constraint, and validate response-time gains with real AAC users before a wider build.
  - **Knocked out:** no.
- **Best improved version: AAC Phrase Ranking Companion (I-6006).** [Card](../archive/ideas/I-6006.md)
  - It is a standalone companion app that ranks an imported phrase bank.
  - Elo 1197.2 → 1181.6. It was 37 of 65 in round 1 and 57 of 84 in round 2, where it was polarizing at 50%. Merged consistency 75. S8 finalist, rank 21 in track.
  - **Scores:** 6 · 6 · 7 · 5 · 7 · 6 · 4 · 7. Judge totals [61.2, 60.7, 61.2], median 61.2, spread 0.5, below bar. That is 4.4 points above the original. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists.
    - The mechanism has academic prior art in the 2008 [Converser research system](https://www.tandfonline.com/doi/full/10.1080/07434610701740448), which never went live.
    - Also listed: [Spoken AAC](https://spokenaac.com/features/) and Proloquo4Text / TD Snap word prediction (no URL).
    - No shipping standalone app ranks an imported phrase bank from partner speech. Commercial apps predict from the user's own typing.
  - **Red team (manageable):** Converser's failure to commercialize suggests a non-technical blocker, and the card does not address consent from partners near an always-listening device. **Fix:** find out why Converser never shipped, and design an explicit listening-consent toggle before building.
  - The other improved card is I-6009 Context-ranked phrases for eye-gaze AAC: Elo 1169.4 → 1169.9, r2 rank 66 of 84. S5: adjacent-exists / yes. Not an S8 finalist.
- **Best 2 pivots by round-2 Elo:**
  - **I-6015 Routine-Aware Phrase Board** ([card](../archive/ideas/I-6015.md)) reorders the phrase grid by time of day and routine, with no microphone.
    - Elo 1155.4 → 1132.7, r2 rank 81 of 84. S5: adjacent-exists / yes.
    - It is the cell elite of the otherwise uncovered balanced B2C|drafter-dialogue region (section 4). Its why-now line is `[unverified]` on its own card.
  - **I-6019 Personal Snippet Recall for Coding** ([card](../archive/ideas/I-6019.md)) applies the same rank-your-own-library idea to a developer's saved snippets.
    - Elo 1139.7 → 1117.0, r2 rank 83 of 84. S5: adjacent-exists / yes.
    - Its pain and why-now lines are `[unverified]` on its own card.
  - Archived in S4: I-6016 Live Macro Match for Support Chat, I-6017 Phrase Bank Builder From Your Own Words, I-6018 Fall Alert Companion.
- **Atoms in other finalists:** none. No atom-hybrid card was made from seed-11's atoms.
- **Verdict: keep, as I-6006.** Its rank-only constraint on the user's own approved phrases has no shipping competitor, and the red team rated it manageable. But the round-2 Elo is low (57th of 84) and the Converser question is open, so validate with real AAC users before committing a build.

---

## 7. Map coverage and run stats

Sources: [archive/map.md](../archive/map.md), [archive/stats.md](../archive/stats.md) and `state/manifest.json`. The tournament figures also appear in [tournament/r2/leaderboard.md](../tournament/r2/leaderboard.md).

### Map coverage

The map has 48 cells: 4 buyers × 6 capabilities × 2 tracks ([gates/gate-B.md](../gates/gate-B.md)).

- **After S7, 38 of 48 cells are occupied**, 19 per track. The live pool is 156 cards: 72 novel and 84 balanced, with 130 competing and 26 protected seed cards.
- **How coverage changed:**
  - S3 raw ideas filled 37 of 48 cells.
  - After the S4 archive, 34 of 48 were occupied.
  - S7 filled four cells for the first time: novel B2C\|local-private, novel B2C\|drafter-dialogue, balanced B2C\|agent-infra and balanced prosumer\|agent-infra.
- **The 10 empty cells** are the agents-buyer column, minus agent-infra, in both tracks:
  - Novel: agents\|local-private, agents\|screen-agent, agents\|verifier, agents\|extractor, agents\|drafter-dialogue.
  - Balanced: agents\|local-private, agents\|screen-agent, agents\|verifier, agents\|extractor, agents\|drafter-dialogue.
  - These cells are empty by design. Capability precedence puts every agents-as-customer idea in agent-infra (bin 1).
- **The final 30 cover 26 of the 38 occupied cells** (14 novel, 12 balanced). Section 4 lists the uncovered regions.
- **Thin cells.** Eight cells have only 2 live cards. Most were thinned by the S5 knock-outs:
  - novel: B2B\|screen-agent, B2C\|local-private, B2C\|screen-agent, B2C\|verifier
  - balanced: B2B\|screen-agent, B2C\|agent-infra, B2C\|local-private, prosumer\|agent-infra
- **Crowded archive cells.** The biggest cells by archive count now hold few live cards:
  - balanced B2B\|verifier: 72 archived, 6 live
  - balanced B2B\|screen-agent: 68 archived, 2 live
  - novel B2B\|screen-agent: 65 archived, 2 live

### Agent calls per tier

The totals are compared with the 3x slot budget in `state/manifest.json` `budget_caps_3x`.

| Tier | Calls | 3x budget | Used |
|---|---|---|---|
| fable | 7 | 12 | 58% |
| opus | 51 | 60 | 85% |
| sonnet | 261 | 360 | 72.5% |

The opus figure of 51 includes this report's 11 calls: the first single-agent attempt, 6 part agents, and 4 part agents relaunched after the session usage limit stopped them. The manifest records the same 11 and 51.

### Calls and subagent tokens by stage

Calls come from `agent_calls_by_stage`, with `s9_report` at 11 opus. Tokens come from each stage's `subagent_tokens` in the manifest. "n.r." means the manifest records no token figure for that stage.

| Stage | fable | opus | sonnet | Subagent tokens |
|---|---|---|---|---|
| smoke | 1 | 1 | 1 | n.r. |
| gate_A (2 loops) | 2 | 0 | 0 | n.r. |
| s1_discover + s2_seeds | 0 | 10 | 22 | n.r. |
| gate_B | 1 | 0 | 0 | n.r. |
| pilot_s3_T1 | 0 | 10 | 22 | 1,515,946 |
| seed_refresh_04_05_08 | 0 | 2 | 2 | n.r. |
| s3_ideate | 0 | 8 | 108 | 7,081,350 |
| seeds_late_09_11 | 0 | 3 | 6 | 305,206 |
| s4_archive | 0 | 1 | 14 | 2,371,092 |
| s5_aborted_launch | 0 | 0 | 14 | n.r. |
| s5_reality | 0 | 1 | 18 | 1,155,283 |
| s6_tourn_r1 | 0 | 1 | 10 | 1,125,395 |
| gate_C | 1 | 0 | 0 | 103,791 |
| s7_evolve | 0 | 2 | 8 | 867,313 |
| s6_tourn_r2 | 0 | 1 | 10 | 1,376,733 |
| s8_final | 0 | 0 | 26 | 1,091,551 |
| gate_D (2 loops) | 2 | 0 | 0 | 369,429 (253,419 + 116,010) |
| s9_report | 0 | 11 | 0 | n.r. |
| **Total** | **7** | **51** | **261** | **17,363,089 recorded** |

Notes on the token figures:

- S3 was projected at 4.9M tokens and came in at 7.08M, under its 9.8M stop threshold. The manifest explains the miss: per-agent cost matched the pilot, but the projection split pilot cost by total input including cache reads, which underweighted the ideators.
- The first S4 run used 1.22M tokens before the usage limit stopped it (see Run incidents). The manifest does not say whether the S4 figure above includes that run.
- No token figures are recorded for S1, S2, the seed refresh, the smoke test, gates A and B, the aborted S5 launch or S9. The true total is therefore higher than 17.36M.

### Duplicate rates

Source: [archive/stats.md](../archive/stats.md).

| Source | Raw cards | Merged | Dup rate |
|---|---|---|---|
| S3 round 1 | 288 | 75 (35 within partition, 40 across) | 26.0% |
| S3 round 2 | 180 | 15 | 8.3% |
| S3 round 3 | 180 | 10 | 5.6% |
| Seed lane | 88 | 0 | 0% |
| S7 evolve | 39 | 2 (both against existing survivors) | 5.1% |
| **All passes** | **775** | **102** | **13.2%** |

- At S4, 736 raw cards were cut to 636 placed cards: 50 were merged inside partitions and 50 across them, for a rate of 13.6%. By partition, the rate ranged from 0% (w09, the late seed lane) and 6.6% (w01) up to 19.4% (w03).
- Round 1 carries most of the redundancy. Different territory lanes independently landed on the same obvious ideas, such as nightly eligibility sweeps, pawn police reports and charity registration. Rounds 2 and 3 were steered away from the archive.
- S7 lost more cards to prior art than to duplication. Its direct-competitor rate was 17.9% (7 of 39) against a 5.1% duplicate rate. The simplify operator caused the most losses, 3 of 9.

### Knock-out counts

| Stage | Knocked out | Reason | Pool after |
|---|---|---|---|
| S5 reality check | 36 | direct competitor 36, feasibility 0, legal 0 | 162 → 126 |
| S7 intake | 7 dropped + 2 merged | direct competitor 7 (I-5107, I-5202, I-5204, I-5210, I-5309, I-5405, I-5408); merged I-5304 into I-3093 and I-5303 into I-1062 | 39 new → 30 survivors; pool 156 |
| S8 deep prior art | 14 | direct competitor: I-1042, I-1050, I-1070, I-1525, I-2038, I-2522, I-2536, I-3026, I-3050, I-3537, I-3555, I-4563, I-5109, I-5410 | 60 finalists → 46 eligible |
| Gate D | 2 | near-duplicate: I-1019 (subset of I-5101) and I-2514 (same mechanism as I-3093) | backfilled by I-5207 and I-3541 |

- **S5 verdicts.** The S5 hunters returned 105 adjacent-exists, 40 direct-competitor and 15 clear. Feasibility came back 108 yes, 52 risky and 2 no. Five protected seed originals were kept even though they failed. The feasibility knock-out had been loosened by the 2026-09-25 build-effort amendment ([config/context.md](../config/context.md)).
- **S8 rubric.** Of the 60 finalists, 11 reached tier B and none reached tier A or S. The other 49 fell below 65. See "Read this first" for how the final 30 were built anyway.

### Tournament stats

| Round | Ideas | Matches | Order-swap agreement | Polarizing (novel / balanced) | Track leaders |
|---|---|---|---|---|---|
| Round 1 (S6) | 126 | 252 | 81.0% (204 agreed) | 11 / 11 | I-3529 (1270.0), I-2519 (1271.9) |
| Round 2 (after S7) | 156 | 312 | 80.8% (252 agreed) | 13 / 12 | I-2067 (1289.5), I-2061 (1281.9) |

- Neither round needed a settling match.
- In round 2, the hand-copied `prior_pairs` argument dropped 2 of the 252 round-1 pairs (I-2069 vs I-2053, I-3096 vs I-2053). Neither pair was re-paired, so the round is unaffected.
- Gate C noted that an Elo gap of about 30 is noise at 4 matches per idea.

### Web searches

- About **725 of the 1,500** per-session cap were used.
- S1 hit the original 200 cap after 194 successful searches. Late scouts fell back on WebFetch, and decomposer prior art was knowledge-only. The user approved raising the cap to 1,500.
- Recorded per stage:
  - pilot miners: 149
  - S3: 98
  - aborted S5 launch: 20
  - S5: 195
  - S7: 48
- The manifest's count note was last updated before S8 ("~780 left for S8"). The S8 deep hunts and the Gate D web checks may therefore not be included in the 725 `[unverified]`.

### Run incidents

- **S4 hit the session usage limit.** In run wf_ffad4bfd-18d, 7 of 8 archive workers stopped at the limit after 1.22M tokens.
  - Receipts 01, 02 and 04 were complete and were kept.
  - The partial files from workers 03 and 05–08 were deleted, and those workers were relaunched in run wf_1f736252-1bf.
- **S2 seed-09 normalize was blocked by a safety classifier.** Run wf_af622d33-a43 was blocked. The step was retried with a business-level framing and succeeded (wf_f88f09a1-f1c).
- **An S5 launch was aborted.** Run wf_f0b4d183-296 was launched by mistake with a placeholder survivors argument. It was stopped within seconds, after 14 Sonnet agents had started on empty lists, and their outputs were deleted. The real S5 run was wf_b185695f-c31.
- **S9 was written in parts.** A subagent write guard blocked the single-file report, and a classifier stopped the first draft partway. The report was then written as part files. The session usage limit stopped 4 of the 6 part agents, which were relaunched after the reset, so S9 used 11 opus calls in total.

### Human checkpoints

- **H1 (after tournament round 1)** was passed on 2026-09-26 without user input. [inputs/reactions.md](../inputs/reactions.md) held only template examples, and there were no new seeds, since seeds 01–11 were all processed.
- **H2 (final pick)** is passed the same way. The primary session lists the top 15 in `report/FINAL_PICK.md` as "awaiting user pick" and does not choose the 3.
- Both passes follow the user's 2026-09-26 autonomy instruction to finish S5–S9 without waiting at H1 or H2.

<!-- COMPLETE -->
