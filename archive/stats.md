# Archive stats (S4 merge)

## Counts

| stage | cards |
|---|---|
| Raw cards across 9 partitions | 736 |
| Kept after within-partition merging (worker receipts) | 686 |
| Merged away across partitions (this pass) | 50 |
| Post-merge cards placed in cells | 636 |
| Survivors (advance) | **162** |
| of which capped (elite + up to 3 runners-up) | 129 |
| of which protected (`seed-original` 11 + `seed-improved` 22) | 33 |
| Archived, not advancing | 474 |

Occupied cells: 34 of 48 (17 novel, 17 balanced). Elites: 34.

Survivors by track: novel 75 (66 capped + 9 protected); balanced 87 (63 capped + 24 protected).

Capped survivors by buyer: B2B 48, B2C 32, prosumer 41, agents 8.

Capped survivors by lineage: ai-native 109, seed-atom-hybrid 11, seed-pivot 9. Seed-lane cards advancing overall: 42 (33 protected + 9 pivots out of 55).

## Duplicate rate by partition

- **Within** = merges the worker made inside its own partition.
- **Cross** = cards from that partition merged away in this pass.

| partition | ids | raw | within | within rate | cross | combined | combined rate |
|---|---|---|---|---|---|---|---|
| w01 | I-1001..1074 | 76 | 2 | 2.6% | 3 | 5 | 6.6% |
| w02 | I-1501..1571 | 79 | 8 | 10.1% | 7 | 15 | 19.0% |
| w03 | I-2001..2084 | 93 | 9 | 9.7% | 9 | 18 | 19.4% |
| w04 | I-2501..2600 | 101 | 1 | 1.0% | 6 | 7 | 6.9% |
| w05 | I-3001..3097 | 108 | 11 | 10.2% | 5 | 16 | 14.8% |
| w06 | I-3501..3583 | 86 | 3 | 3.5% | 9 | 12 | 14.0% |
| w07 | I-4001..4078 | 89 | 11 | 12.4% | 5 | 16 | 18.0% |
| w08 | I-4501..4575 | 80 | 5 | 6.25% | 6 | 11 | 13.75% |
| w09 | I-6001..6024 | 24 | 0 | 0% | 0 | 0 | 0% |
| **total** | | **736** | **50** | **6.8%** | **50** | **100** | **13.6%** |

## Duplicate rate by source

The source comes from the raw-id round suffix (`-r1`, `-r2`, `-r3`). The seed lane covers `seed-NN`, `s3-improver-*` and `s3-pivoter-*` cards.

| source | raw | within-partition merged | cross-partition merged | total merged | dup rate |
|---|---|---|---|---|---|
| round 1 | 288 | 35 | 40 | 75 | 26.0% |
| round 2 | 180 | 9 | 6 | 15 | 8.3% |
| round 3 | 180 | 6 | 4 | 10 | 5.6% |
| seed lane | 88 | 0 | 0 | 0 | 0% |
| **total** | **736** | **50** | **50** | **100** | **13.6%** |

Round 1 carries almost all the redundancy. Different T-lanes independently landed on the same obvious ideas: nightly eligibility sweeps, pawn police reports, charity registration, duplicate-claim guards, filing-agent watchdogs and Peppol delivery checks. Rounds 2 and 3 were steered away from the archive and duplicate far less. No seed-lane card was merged.

## Cross-partition merges (50 cards into 49 kept cards)

Each merged card shares the kept card's buyer, core mechanism and pain. Where two cards were merely similar, both were kept. Examples are the email, voicemail, paper and API interaction variants of an idea, such as I-4041, I-4042, I-3511, I-3513, I-4571 and I-3084.

| kept | merged | shared buyer / mechanism / pain | why kept |
|---|---|---|---|
| I-3575 Eligibility Snapshot Nightly | I-1025 Tomorrow's Patients, Tonight's Eligibility | practice front desk / overnight eligibility sweep of tomorrow's schedule / morning portal scramble | more specific demo |
| I-1031 Claims Duplicate Catcher | I-3574 Duplicate Claim Guard | billing staff / check portal record before resubmit / accidental duplicate claims | sharper mechanism |
| I-3572 Appeal Autodraft From Policy | I-1029 Denial-to-Appeal Pipeline | billing staff / appeal quoting payer's own policy / PA denials | sharper pain evidence |
| I-2505 Payer Portal Migration Copilot | I-4039 Payer Portal Migration Copilot | practice / carry logins and workflows across portal retirements / lost access | fuller mechanism |
| I-4553 Attestation Drift Monitor | I-3056 Insurer Answers, Console-Verified | small org / console-checked insurance answers / false attestation voids cover | better 48h demo |
| I-4528 MFA-Piercing Offboarding Sweep | I-3057 The Offboarding Sweep | small-practice admin / sweep SaaS consoles for departed-staff logins / stale access | more specific mechanism |
| I-3026 Redaction Relay | I-1565 Redact Locally, Then Ask The Cloud | solo professional / local redaction before cloud prompt / privilege leakage | adds reinsertion step |
| I-3070 The Season Box | I-2066 Receipt Pile to Ledger, Never Uploaded | solo tax preparer / offline W-2 and 1099 extraction / §7216 exposure in crunch | stronger offer |
| I-3073 The Transcript That Never Left | I-2062 Deposition Digest That Never Leaves the Firm | solo litigator / local deposition summarisation / per-page vendor cost and confidentiality | sharper pain evidence |
| I-2060 Consent Captured, Session Recorded Locally | I-2523 The Consent Gate | therapist / capture spoken AI-recording consent then record locally / consent-law exposure | fuller mechanism |
| I-1504 Vet The Vendor Before The Client | I-3030 Vendor Contract X-Ray | solo professional / check AI vendor terms against ethics rules / ethics breach | clearer demo |
| I-3028 Per-Vendor Consent Autopilot | I-1502 One Signed Form Per Vendor | solo tax preparer / per-vendor §7216 consent tracking / missing consent | more specific mechanism |
| I-3093 Privileged Cite Bench | I-2553 Offline Trial-Bag Citation Verifier | solo lawyer / on-device citation check / fabricated cites plus privilege | stronger pain |
| I-1021 Fiduciary Record Vault | I-2025 Guardian Ledger On-Device Agent | guardian / on-device annual accounting / deadline and privacy | fuller mechanism |
| I-1043 Pawn Shop Nightly Police Filer | I-3562 Daily Police Report Autopilot | pawn shop / nightly POS-to-police filing / noon deadline | sharper pain evidence |
| I-4020 Same-Day Pawn Report Autopilot | I-2530 Pawn Report Autopilot | pawn shop (novel) / same-day police portal filing / deadline | better demo |
| I-3560 One Profile, Forty State Filings | I-1044 Fifty-State Charity Solicitation Filer | nonprofit / one profile fills every state's registration / multi-state burden | more specific |
| I-2524 Charity Filing Mesh | I-4022 State Registration Cloner | nonprofit (novel) / agent files every state's registration / multi-state burden | fuller mechanism |
| I-4021 Impound Notice Autopilot | I-2526 Lien Sale Guard | tow yard / per-state DMV lookup and notice windows / voided lien sales | sharper mechanism |
| I-1048 Compliance Vendor Proof Watchdog | I-3565 Trust But Verify Compliance | nonprofit / recheck registry vs paid filing agent / silent agent failure | stronger evidence |
| I-2525 Filing Proof Escrow | I-4025 Registration Agent Watchdog | nonprofit (novel) / verify filing agent's claimed work / silent failure | stronger mechanism (escrow) |
| I-1046 Pre-Submission Court Rule Checker | I-4023 Court Rulebook Checker | filer / per-court rules check before submit / rejected filings | fuller card |
| I-1047 Post-Call Voice Debrief Report Drafter | I-3564 Incident Voice Scribe | first responder / voice debrief into incident report / report burden | better demo |
| I-1006 Card-Network Agent Handshake | I-3535 Trusted Agent Checkout Badge | small store / tell verified agent from card-testing bot at checkout / fraud vs lost sales | more specific mechanism |
| I-1001 Independent Completion Witness | I-2506 The Silent Failure Heartbeat | ops team / independent verification an agent task truly finished / silent failure | broader, sharper |
| I-4537 Silent-Failure Catcher for Locked Systems | I-3089 Screen-Agent Write Auditor | locked-SoR operator / confirm agent write actually landed / silent write failure | better demo |
| I-1545 Consent Notary API for Solo Care Agents | I-2076 Delegated Authority Passport | caregiving agents / reusable verified proxy credential / re-proving authority | more specific |
| I-2028 Consent-Scoped Agent Passport | I-4015 The Not-a-Bot Consent Ledger | family caregiver / revocable agent identity with consent / blocked as bot | clearer mechanism |
| I-2547 Multi-Institution Proxy Agent | I-2027 Parent Portal Autopilot | adult child / proxy logs into all parent's accounts, reports changes / scattered accounts | fuller card |
| I-4031 The Estate Closing Sweep | I-2548 Death Admin Autopilot | executor / file closure forms at every institution / estate admin grind | more specific |
| I-4029 Elder Payee Radar | I-2029 Three-Way Match for Elder Accounts | adult child / vendor-fraud style checks on parent's accounts / elder fraud | sharper pain |
| I-4054 Rooftop Toll Ledger | I-1562 Rooftop Toll Ledger | dealer group / read DMS integration bills, flag fee creep / toll creep | fuller mechanism |
| I-4052 Vet Lab-to-Chart Instant Relay | I-1557 Lab Machine Whisperer | vet clinic / screen agent files lab results the moment ready / manual re-keying | more specific |
| I-4051 DMS Ransomware Shadow Continuity | I-1558 48-Hour DMS Continuity Twin | dealership / live shadow of DMS / outage stops sales | sharper pain evidence |
| I-4053 Practice Migration Escape Agent | I-1556 Dentrix Desktop Shadow Agent | practice / overnight agent migration between locked systems / lock-in | broader, specific |
| I-4001 Migration Guardian for Practice Switches | I-3543 Migration Ledger Guard; I-4539 Migration Proof-of-Completeness Auditor | practice / cross-check records old vs new system / silent migration loss | best demo |
| I-4055 Cancellation-to-Epic Guardrail | I-1561 Silent AMS Drift Detector | insurance agency / diff carrier cancellations vs AMS / missed cancellations | sharper mechanism |
| I-4002 Schedule and Report Assistant for Vet Clinics | I-3548 Cornerstone Report Rebuilder | vet clinic / rebuild reports Cornerstone can't produce / reporting gap | broader value |
| I-4076 Near-Duplicate Invoice Sentinel | I-2079 The Duplicate Docket | AP team / fuzzy duplicate-invoice catch / double payment | sharper |
| I-4508 The Shortpay Recovery Fee | I-2083 The Three-Way Match | freight AP / invoice vs BOL vs POD / overbilling | stronger offer |
| I-2080 The Recheck Desk | I-4506 The Confirmed-Catch Auditor | AP team / re-audit capture output vs source scan / posting errors | fuller mechanism |
| I-4073 Rejection Autopsy Agent | I-4567 Invoice Rejection Code Translator | AP team / explain e-invoice rejection and fix / rejection loops | drafts the fix |
| I-2007 Peppol Ghost-Check | I-4566 Peppol Delivery Confirmation Watchdog | Belgian SMB / confirm Peppol delivery / silent non-delivery | sharper pain evidence |
| I-2082 The XML Keeper | I-4509 XRechnung Readiness Fee | German SMB / capture and keep XRechnung XML / legal retention gap | more specific |
| I-4563 Foreign-Invoice Autopilot | I-4568 Non-Latin-Script Invoice Rescue | freelancer / multi-language invoice capture / mis-read foreign invoices | broader |
| I-2050 Reproduction Gate | I-3578 Reproduction-First Vulnerability Gate | OSS maintainer / sandbox-reproduce before forwarding / AI-slop reports | better demo |
| I-2051 CVE Reproduction Bench | I-3579 CVE Backlog Reality Filter | CVE programme / reproduce before publish / backlog of unverifiable CVEs | more specific |
| I-3577 Docket-Wide Hallucination Screener | I-2048 Docket Discrepancy Radar | court clerks / nightly docket citation sweep / fabricated citations | sharper pain |
| I-4060 Pro Se Citation Screen for Clerks | I-3043 Docket Watchdog | court clerks / citation check at docketing / fabricated citations | more specific buyer |

## Cell corrections applied in this pass (12)

| id | was | now | reason |
|---|---|---|---|
| I-2506 | B2B\|verifier\|novel | B2B\|agent-infra\|novel | verifies an agent's run; bin 1 precedes verifier (merged into I-1001) |
| I-2565 | B2B\|verifier\|balanced | B2B\|agent-infra\|balanced | confirms an automated agent's submission claim |
| I-3089 | B2B\|verifier\|balanced | B2B\|agent-infra\|balanced | confirms a screen agent's writes (merged into I-4537) |
| I-4537 | B2B\|verifier\|balanced | B2B\|agent-infra\|balanced | verifies an agent's re-keying task |
| I-3519 | B2B\|verifier\|balanced | B2B\|agent-infra\|balanced | proves or disproves fetch-bot success claims |
| I-3538 | prosumer\|verifier\|novel | prosumer\|agent-infra\|novel | checks a buying agent's "order placed" claim |
| I-4511 | B2C\|verifier\|novel | B2C\|agent-infra\|novel | proof receipts for proxy agents' actions |
| I-4515 | agents\|verifier\|novel | agents\|agent-infra\|novel | agents are the customer; bin 1 precedence |
| I-3030 | prosumer\|verifier\|novel | prosumer\|verifier\|balanced | uses only long-context reading, a shipped capability (merged into I-1504) |
| I-3028 | prosumer\|drafter-dialogue\|novel | prosumer\|verifier\|balanced | core is tracking consent status per vendor; shipped capabilities only |
| I-4023 | B2B\|verifier\|novel | B2B\|verifier\|balanced | rules check with shipped capabilities (merged into I-1046) |
| I-4567 | B2B\|verifier\|novel | B2B\|verifier\|balanced | code translation with shipped capabilities (merged into I-4073) |

All other cards keep the cell their worker recorded. That includes the corrections the workers already made (w01: I-1001, I-1042, I-1050, I-1056; w08: I-4556, I-4519).

## Flags for the primary session

- **seed-09 is on hold.** User memory says seed-09 is deferred, but partition w09 includes cards derived from it:
  - I-6001 (seed-original)
  - I-6005 and I-6008 (seed-improved)
  - the pivots I-6020 to I-6024

  Under the stated S4 rules, I-6001, I-6005 and I-6008 are protected and advance. None of the seed-09 pivots is an elite or runner-up, so they are archived and do not advance. The primary session should decide whether to hold back I-6001, I-6005 and I-6008 before S5. Removing them would leave 159 survivors.
- **Seed triplets:** several protected seed cards restate the same seed. They were not merged, by rule:
  - I-1555, I-2045 and I-3051 (Same Words, More Life)
  - I-2039, I-3045 and I-4519 (paddle capture)
  - I-2040, I-3046 and I-3541 (Lay of the Land)
  - I-1525 and I-3049 (feature-request reviewer)

<!-- COMPLETE -->
