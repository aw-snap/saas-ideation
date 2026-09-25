# Archive map (S4 merge)

The axes come from `gates/gate-B.md`. Rows are the capability bins in precedence order. Columns are the buyers. Each cell shows:
- **n**: the number of cards in the cell after cross-partition merging. It includes protected seed cards.
- **E**: the elite, by id and name.
- **RU**: the runner-up ids.
- **seeds**: the protected `seed-original` and `seed-improved` cards. They always advance and sit outside the cap of one elite plus three runners-up.

Only competing cards (ai-native, seed-atom-hybrid and seed-pivot) can be elite or runner-up. Pivot cards are marked (P).

Totals: 636 cards after merging, 603 competing and 33 protected, in 34 of 48 occupied cells. 162 survivors: 129 capped and 33 protected.

## Track: novel

| capability / buyer | B2B | B2C | prosumer | agents |
|---|---|---|---|---|
| **agent-infra** | n=30<br>E: I-1001 Independent Completion Witness<br>RU: I-3555, I-1003, I-4529 | n=2<br>E: I-2028 Consent-Scoped Agent Passport<br>RU: I-4511 | n=6<br>E: I-3534 Crawler Bill Alarm for Makers<br>RU: I-3540, I-4513, I-3537 | n=15<br>E: I-3582 Verification-as-a-Service API for Agents<br>RU: I-2052, I-1545, I-2003 |
| **local-private** | n=22<br>E: I-4541 PHI-Blind Portal Runner<br>RU: I-3001, I-3095, I-3506 | *empty* | n=28<br>E: I-3093 Privileged Cite Bench<br>RU: I-1566, I-3026, I-1564 | *empty* |
| **screen-agent** | n=65<br>E: I-4033 Overnight Prior-Auth Autopilot<br>RU: I-4051, I-4052, I-4553 | n=9<br>E: I-4032 Medicaid Renewal, Pre-Answered<br>RU: I-4031, I-2547, I-4028 | n=4<br>E: I-3529 Screen-Side Cite Bailiff<br>RU: I-3530, I-2020, I-3536 | *empty* |
| **verifier** | n=37<br>E: I-2050 Reproduction Gate<br>RU: I-2046, I-4525, I-2525<br>seeds: I-1050, I-2044, I-3050 | n=12<br>E: I-2070 Medicare Appeal Evidence Guard<br>RU: I-2067, I-4029, I-2545 | n=13<br>E: I-2047 Opposing Brief Sweep<br>RU: I-2053, I-2069, I-3096 | *empty* |
| **extractor** | n=26<br>E: I-1514 Commission Gap Photo Reconciler<br>RU: I-2529, I-1053, I-3059<br>seeds: I-2038, I-3044, I-4014 | n=9<br>E: I-2549 Medicare Advantage Appeal Autofiler<br>RU: I-4030, I-2550, I-2031 | n=6<br>E: I-4026 Ward Accounting Autoscribe<br>RU: I-1062, I-1060, I-4563 | *empty* |
| **drafter-dialogue** | n=12<br>E: I-4027 Fire Incident Report Reconstructor<br>RU: I-2008, I-3517, I-1063<br>seeds: I-1555, I-2045, I-3051 | *empty* | n=5<br>E: I-2049 Standing-Order Compliance Radar<br>RU: I-2528, I-3031, I-4570 | *empty* |

Novel track: 301 cards in 17 occupied cells, giving 66 capped survivors and 9 protected seeds.

## Track: balanced

| capability / buyer | B2B | B2C | prosumer | agents |
|---|---|---|---|---|
| **agent-infra** | n=28<br>E: I-4537 Silent-Failure Catcher for Locked Systems<br>RU: I-1517, I-2568, I-2591<br>seeds: I-6001, I-6005, I-6008 | *empty* | *empty* | n=7<br>E: I-1070 Screen API for Legacy PM Systems<br>RU: I-1071, I-2566, I-3091 |
| **local-private** | n=15<br>E: I-2514 E&O Broker's Citation Shield<br>RU: I-2023, I-2026, I-2582 (P) | n=3<br>E: I-1019 Private Elder Statement Scanner<br>RU: I-2583 (P), I-2584 (P) | n=29<br>E: I-2061 Grounded Notes With Timestamp Citations<br>RU: I-1021, I-3070, I-4501 | *empty* |
| **screen-agent** | n=68<br>E: I-1516 Console-Checked Cyber Insurance Answers<br>RU: I-1024, I-1043, I-3542 | n=18<br>E: I-4546 72-Hour Appeal Sprint<br>RU: I-4545, I-2559, I-4548<br>seeds: I-2536, I-3048 | n=3<br>E: I-1503 The WISP That Writes Itself<br>RU: I-1505, I-2519 | *empty* |
| **verifier** | n=71<br>E: I-3039 The Sandbox Gatekeeper<br>RU: I-1508, I-3040, I-4001<br>seeds: I-6002, I-6004, I-6007 | n=8<br>E: I-4550 Nursing Home Bill Auditor<br>RU: I-1022, I-1023, I-3011 (P)<br>seeds: I-2042 | n=7<br>E: I-3038 Cite or Sight<br>RU: I-3028, I-2522, I-3563 | *empty* |
| **extractor** | n=39<br>E: I-2082 The XML Keeper<br>RU: I-1027, I-1534, I-3547<br>seeds: I-2039, I-2040, I-3045, I-3046, I-3049, I-3541, I-4519 | n=5<br>E: I-4004 Medicare Denial Appeal Copilot<br>RU: I-4005, I-4549, I-1039 | n=2<br>E: I-4065 Annual Accounting by CC<br>RU: I-1020 | *empty* |
| **drafter-dialogue** | n=19<br>E: I-1047 Post-Call Voice Debrief Report Drafter<br>RU: I-3572, I-3088, I-3055<br>seeds: I-1525, I-2043 | n=9<br>E: I-2590 Zero-Lag Live Captions (P)<br>RU: I-3014 (P), I-6015 (P)<br>seeds: I-1042, I-2041, I-3047, I-6003, I-6006, I-6009 | n=4<br>E: I-2063 Vendor-Diligence-in-a-Box<br>RU: I-2078, I-3010 (P), I-6019 (P) | *empty* |

Balanced track: 335 cards in 17 occupied cells, giving 63 capped survivors and 24 protected seeds.

## Empty cells (14 of 48)

- Novel:
  - B2C|local-private
  - B2C|drafter-dialogue
  - agents|local-private
  - agents|screen-agent
  - agents|verifier
  - agents|extractor
  - agents|drafter-dialogue
- Balanced:
  - B2C|agent-infra
  - prosumer|agent-infra
  - agents|local-private
  - agents|screen-agent
  - agents|verifier
  - agents|extractor
  - agents|drafter-dialogue

The "agents" buyer occurs only in agent-infra. Every agent-as-customer idea resolves to bin 1 by precedence, so the ten agents cells outside bin 1 are structurally empty, not a gap in ideation.

## Thin and crowded cells

- **Thin cells** have 3 or fewer competing cards, so every card in them advances:
  - B2C|agent-infra|novel (2)
  - B2C|local-private|balanced (3)
  - prosumer|screen-agent|balanced (3)
  - prosumer|extractor|balanced (2)
- **Crowded cells:** the four largest are:
  - balanced B2B|verifier: 71 cards, 3 of them protected
  - balanced B2B|screen-agent: 68
  - novel B2B|screen-agent: 65
  - balanced B2B|extractor: 39 cards, 7 of them protected

  Together they hold 243 of 636 cards and advance 16 capped survivors.

<!-- COMPLETE -->
