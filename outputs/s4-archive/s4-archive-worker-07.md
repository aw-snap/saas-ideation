# S4 Archive Receipt — Worker 07

## Stats

- Raw cards: 89
- Cards kept: 78
- Cards merged: 11
- Duplicate rate: 11 / 89 = 12.4%

## Clusters

| Kept id | Raw ids merged in |
|---|---|
| I-4004 (Medicare Denial Appeal Copilot) | s3-ideator-balanced-T8-02-r3#02 |
| I-4005 (POA Packet Builder) | s3-ideator-balanced-T8-02-r3#03 |
| I-4029 (Elder Payee Radar) | s3-ideator-balanced-T8-02-r3#04 |
| I-4030 (Fiduciary Accounting, Auto-Filed) | s3-ideator-balanced-T8-02-r1#06 |
| I-4031 (The Estate Closing Sweep) | s3-ideator-balanced-T8-02-r1#07 |
| I-4032 (Medicaid Renewal, Pre-Answered) | s3-ideator-balanced-T8-02-r1#01 |
| I-4051 (DMS Ransomware Shadow Continuity) | s3-ideator-balanced-T3-01-r1#07 |
| I-4052 (Vet Lab-to-Chart Instant Relay) | s3-ideator-balanced-T3-01-r1#01 |
| I-4054 (Rooftop Toll Ledger) | s3-ideator-balanced-T3-01-r1#03 |
| I-4055 (Cancellation-to-Epic Guardrail) | s3-ideator-balanced-T3-01-r1#04 |
| I-4056 (Yardi Live Query Mirror) | s3-ideator-balanced-T3-01-r1#05 |

## Index

| id | name | one-liner | track | lineage | cell | raw_id | part file |
|---|---|---|---|---|---|---|---|
| I-4001 | Migration Guardian for Practice Switches | Cross-checks patient/imaging records between old and new practice systems before an office trusts the switch. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T3-01-r1#02 | part-01.md |
| I-4002 | Schedule and Report Assistant for Vet Clinics | Moves patients between schedules and pulls date-filtered reports the practice system can't produce. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T3-01-r1#06 | part-01.md |
| I-4003 | Imaging ID Reconciler for Dental Migrations | Matches scattered imaging-system patient IDs to the new practice roster automatically during a migration. | balanced | ai-native | B2B\|extractor\|balanced | s3-ideator-balanced-T3-01-r1#08 | part-01.md |
| I-4004 | Medicare Denial Appeal Copilot | Turns a Medicare Advantage denial letter into a ready-to-file Level 1 appeal in minutes. | balanced | ai-native | B2C\|extractor\|balanced | s3-ideator-balanced-T8-02-r1#02 | part-01.md |
| I-4005 | POA Packet Builder | Converts a parent's power of attorney into the exact form each bank demands. | balanced | ai-native | B2C\|extractor\|balanced | s3-ideator-balanced-T8-02-r1#03 | part-01.md |
| I-4006 | Elder Fraud Circuit Breaker | Holds a parent's suspicious transfer for 24 hours and texts the family before it clears. | balanced | ai-native | B2C\|screen-agent\|balanced | s3-ideator-balanced-T8-02-r1#04 | part-01.md |
| I-4007 | Verified Proxy Passport | Lets a bank teller instantly confirm a family proxy's POA is real and current. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T8-02-r1#05 | part-01.md |
| I-4008 | Money-Manager Sentinel | Watches a parent's accounts monthly for fees, duplicate charges and risky joint-owner setups. | balanced | ai-native | prosumer\|verifier\|balanced | s3-ideator-balanced-T8-02-r1#08 | part-01.md |
| I-4009 | Agent Passport for Solo Invoicing | Gives your invoicing agent its own revocable login instead of your real passwords. | novel | seed-atom-hybrid | prosumer\|agent-infra\|novel | s3-ideator-novel-T2-01-r2#01 | part-01.md |
| I-4010 | NDA-Scoped Invoice Puller | Extracts only your invoices from a shared folder, never the NDA'd files beside them. | novel | seed-atom-hybrid | prosumer\|extractor\|novel | s3-ideator-novel-T2-01-r2#02 | part-01.md |
| I-4011 | Consent-Before-Forward Checker | Blocks an invoicing agent from forwarding client billing data until real consent exists. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T2-01-r2#03 | part-01.md |
| I-4012 | Self-Expiring Portal Runner | Files e-invoices on any platform using a login that deletes itself when the job ends. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T2-01-r2#04 | part-01.md |
| I-4013 | Per-Platform Consent Draft Assistant | Drafts the one-paragraph consent notice each new invoicing platform actually needs. | novel | ai-native | prosumer\|drafter-dialogue\|novel | s3-ideator-novel-T2-01-r2#05 | part-01.md |
| I-4014 | Pivot: Will the Sofa Fit? | A phone video of the delivery route returns a fit verdict plus a maneuvering animation. | novel | seed-original | B2B\|extractor\|novel | seed-01 | part-01.md |
| I-4015 | The Not-a-Bot Consent Ledger | Gives a caregiver's portal agent a signed consent trail so it isn't blocked as a bot. | novel | ai-native | B2C\|agent-infra\|novel | s3-ideator-novel-T8-01-r2#01 | part-01.md |
| I-4016 | Denial Rationale Fact-Check | Checks an insurer's AI-written denial explanation against the parent's real medical chart. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T8-01-r2#02 | part-01.md |
| I-4017 | Renewal Packet Fact-Check | Cross-checks every fact in an AI-drafted Medicaid renewal against source documents. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T8-01-r2#03 | part-01.md |
| I-4018 | The Approved-Plan Portal Agent | Shows its evidence and files a one-click-undo record before touching a parent's account. | novel | seed-atom-hybrid | B2C\|screen-agent\|novel | s3-ideator-novel-T8-01-r2#04 | part-01.md |
| I-4019 | Portal Allowlist Negotiator | Gets a fiduciary firm's caregiving agents individually recognized instead of blocked as bots. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T8-01-r2#05 | part-01.md |
| I-4020 | Same-Day Pawn Report Autopilot | Files each day's pawn transactions into the police portal before the noon deadline. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T4-02-r1#01 | part-01.md |
| I-4021 | Impound Notice Autopilot | Tracks each state's DMV lookup and notice windows per tow so lien sales never void. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T4-02-r1#02 | part-01.md |
| I-4022 | State Registration Cloner | Enter nonprofit data once; an agent files and renews charitable registration in every state. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T4-02-r1#03 | part-01.md |
| I-4023 | Court Rulebook Checker | Checks a filing packet against each court's own formatting rules before submission. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T4-02-r1#04 | part-01.md |
| I-4024 | Compliance Continuity Vault | Remembers and keeps filing every recurring government report so no departing volunteer breaks compliance. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T4-02-r1#05 | part-01.md |
| I-4025 | Registration Agent Watchdog | Independently checks state portals to confirm a paid filing agent completed what it billed. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T4-02-r1#06 | part-01.md |
| I-4026 | Ward Accounting Autoscribe | Turns receipts and bank statements into a court-ready annual accounting all year. | novel | ai-native | prosumer\|extractor\|novel | s3-ideator-novel-T4-02-r1#07 | part-02.md |
| I-4027 | Fire Incident Report Reconstructor | Drafts the incident report from dispatch audio and a volunteer's spoken recap. | novel | ai-native | B2B\|drafter-dialogue\|novel | s3-ideator-novel-T4-02-r1#08 | part-02.md |
| I-4028 | The Portable Proxy Badge | Uploads a proxy's authorization once, then presents the right proof at every institution's screen. | novel | seed-atom-hybrid | B2C\|screen-agent\|novel | s3-ideator-novel-T5-01-r2#01 | part-02.md |
| I-4029 | Elder Payee Radar | Watches a parent's accounts for the same red flags that catch business vendor fraud. | novel | seed-atom-hybrid | B2C\|verifier\|novel | s3-ideator-novel-T5-01-r2#02 | part-02.md |
| I-4030 | Fiduciary Accounting, Auto-Filed | Turns a parent's monthly statements into the running ledger fiduciary accountings demand. | novel | ai-native | B2C\|extractor\|novel | s3-ideator-novel-T5-01-r2#03 | part-02.md |
| I-4031 | The Estate Closing Sweep | Walks every institution an estate touches, filing the right closure form at each. | novel | ai-native | B2C\|screen-agent\|novel | s3-ideator-novel-T5-01-r2#04 | part-02.md |
| I-4032 | Medicaid Renewal, Pre-Answered | Fills and files a parent's Medicaid renewal packet from statements already on file. | novel | seed-atom-hybrid | B2C\|screen-agent\|novel | s3-ideator-novel-T5-01-r2#05 | part-02.md |
| I-4033 | Overnight Prior-Auth Autopilot | Submits every queued prior-authorization across all payer portals overnight, before staff clock in. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r1#01 | part-02.md |
| I-4034 | Agent Badge, Not Shared Login | Each payer-portal task runs under a scoped, audited agent identity, not a shared password. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T1-01-r1#02 | part-02.md |
| I-4035 | Denial Evidence Recorder | Screenshots and timestamps exactly what each payer portal says about a denial. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T1-01-r1#03 | part-02.md |
| I-4036 | Appeal-Worth Denial Ledger | Scores every denial by how often that payer, code and reason has been overturned. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T1-01-r1#04 | part-02.md |
| I-4037 | Prior-Auth Appeal Co-Drafter | Drafts a citation-backed appeal by pulling the payer's own policy text from their portal. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r1#05 | part-02.md |
| I-4038 | Missing Remittance Chaser | Finds the electronic remittance that never arrived and matches it back to the claim. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T1-01-r1#06 | part-02.md |
| I-4039 | Payer Portal Migration Copilot | Re-registers a practice's logins automatically whenever a payer retires one portal for another. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r1#07 | part-02.md |
| I-4040 | Prior-Auth SLA Countdown | Tracks each payer's turnaround clock per prior-auth and escalates before a breach. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T1-01-r1#08 | part-02.md |
| I-4041 | The Insurer Question, By Reply | Forward the cyber-insurance renewal PDF; get back every answer verified against real consoles. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T5-02-r3#01 | part-02.md |
| I-4042 | Forward It Before You Pay It | Forward a vendor payment-change email; get a hold-or-clear verdict before the wire goes out. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T5-02-r3#02 | part-02.md |
| I-4043 | One Email Confirms The Affirmation | Owner emails "affirm us"; the agent checks controls first and sends only what's true. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T5-02-r3#03 | part-02.md |
| I-4044 | The Reminder That Already Did The Homework | An annual email arrives with the risk analysis already drafted from last year's. | balanced | ai-native | B2B\|extractor\|balanced | s3-ideator-balanced-T5-02-r3#04 | part-02.md |
| I-4045 | Reply YES To Re-Home This Key | One email per orphaned credential, asking a yes-or-no question to re-home it. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T5-02-r3#05 | part-02.md |
| I-4046 | Point-and-Ask Case File Reader | Point your phone at a case file and ask a question aloud; a local model answers. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r3#01 | part-02.md |
| I-4047 | The Walking Deposition Checker | Snap each deposition page and ask aloud whether it contradicts the complaint. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r3#02 | part-02.md |
| I-4048 | The Receipt Call | Point the phone at each receipt, say the category aloud, hear the running total. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r3#03 | part-02.md |
| I-4049 | The Session Note Camera | Photograph an intake sheet, dictate the session, hear the drafted note read back. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r3#04 | part-02.md |
| I-4050 | The Spoken Vendor Consent | Photograph a signed consent form and speak the AI vendor's name to confirm it. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r3#05 | part-02.md |
| I-4051 | DMS Ransomware Shadow Continuity | A screen agent continuously mirrors a locked-in dealer system so an outage never stops sales. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#01 | part-03.md |
| I-4052 | Vet Lab-to-Chart Instant Relay | Watches the lab portal and files results into the vet chart the second they post. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#02 | part-03.md |
| I-4053 | Practice Migration Escape Agent | An overnight agent migrates records between locked-in practice systems, matching imaging IDs. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#03 | part-03.md |
| I-4054 | Rooftop Toll Ledger | Reads every dealer-portal bill monthly and turns scattered fees into one negotiation brief. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#04 | part-03.md |
| I-4055 | Cancellation-to-Epic Guardrail | Cross-checks every policy cancellation against the agency system same day. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#05 | part-03.md |
| I-4056 | Yardi Live Query Mirror | A continuously-read shadow of Yardi Voyager that answers plain-language questions instantly. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#06 | part-03.md |
| I-4057 | PioneerRx Silent-Outage Sentinel | A daily agent probes the pharmacy system's portal and drafts the escalation evidence. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#07 | part-03.md |
| I-4058 | Single Command, Five Screens | One instruction makes the same edit across every locked-in front-desk system at once. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T3-01-r1#08 | part-03.md |
| I-4059 | Records-Request Flood Screen | Triages every incoming public-records request, flagging AI-slop before the legal clock runs out. | balanced | seed-atom-hybrid | B2B\|verifier\|balanced | s3-ideator-balanced-T4-02-r2#01 | part-03.md |
| I-4060 | Pro Se Citation Screen for Clerks | Checks every case citation in a filing against real case law before docketing. | balanced | seed-atom-hybrid | B2B\|verifier\|balanced | s3-ideator-balanced-T4-02-r2#02 | part-03.md |
| I-4061 | Verified-Agent Fee Gateway | Lets tiny licensing offices accept fee payments from citizens' AI agents safely. | balanced | ai-native | B2B\|agent-infra\|balanced | s3-ideator-balanced-T4-02-r2#03 | part-03.md |
| I-4062 | Grant Data Fabrication Check | Cross-checks AI-drafted fire-incident narratives against dispatch logs before submission. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T4-02-r2#04 | part-03.md |
| I-4063 | Pawn Document Cross-Check | Cross-references presented ID and title documents against official lookups before filing. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T4-02-r2#05 | part-03.md |
| I-4064 | Renewal Notice Relay | Forward a Medicaid renewal notice by email; get a ready-to-submit packet back. | balanced | ai-native | B2C\|screen-agent\|balanced | s3-ideator-balanced-T8-02-r3#01 | part-03.md |
| I-4065 | Annual Accounting by CC | CC receipts to one address all year; a finished fiduciary accounting arrives by email. | balanced | ai-native | prosumer\|extractor\|balanced | s3-ideator-balanced-T8-02-r3#05 | part-03.md |
| I-4066 | Renewal Agent That Learns Once | Watches one Medicaid renewal, then replays and adapts the steps every year after. | novel | ai-native | B2C\|screen-agent\|novel | s3-ideator-novel-T8-02-r3#01 | part-03.md |
| I-4067 | Fiduciary Accounting Learned Once | Learns a payee's categorization from one walkthrough, then drafts the year's accounting. | novel | ai-native | B2C\|extractor\|novel | s3-ideator-novel-T8-02-r3#02 | part-03.md |
| I-4068 | Open Enrollment Decision, Learned Once | Learns how a family judged last year's plans, then re-runs that judgment yearly. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T8-02-r3#03 | part-03.md |
| I-4069 | A Year's Spending, Reviewed Once | Learns a parent's normal spending once, then re-checks a full year annually. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T8-02-r3#04 | part-03.md |
| I-4070 | Designations, Checked Once a Year | Learns a designation check once, then re-audits every account for drift annually. | novel | ai-native | B2C\|screen-agent\|novel | s3-ideator-novel-T8-02-r3#05 | part-03.md |
| I-4071 | Peppol Proof-of-Delivery Agent | Confirms a supplier is actually registered and receiving on Peppol, not just claiming it. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T2-01-r1#01 | part-03.md |
| I-4072 | Mandate Cliff Simulator | Shows which suppliers will legally be unable to invoice you next quarter, and the spend at risk. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-01-r1#02 | part-03.md |
| I-4073 | Rejection Autopsy Agent | Explains exactly why an e-invoice was rejected and drafts the fix. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-01-r1#03 | part-03.md |
| I-4074 | Ghost PO Closer | Finds POs with goods received but no invoice, drafts the accrual, chases the supplier. | balanced | ai-native | B2B\|extractor\|balanced | s3-ideator-balanced-T2-01-r1#04 | part-03.md |
| I-4075 | Invoice Shadow Ledger | Shows what you actually owe from invoices as they arrive, before AP keys them in. | balanced | ai-native | B2B\|extractor\|balanced | s3-ideator-balanced-T2-01-r1#05 | part-03.md |
| I-4076 | Near-Duplicate Invoice Sentinel | Catches near-duplicate invoices before a payment run, where exact-match checks miss them. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-01-r1#06 | part-04.md |
| I-4077 | XML-to-Human Invoice Viewer | Turns unreadable e-invoice XML into a plain-language approval screen. | balanced | ai-native | B2B\|drafter-dialogue\|balanced | s3-ideator-balanced-T2-01-r1#07 | part-04.md |
| I-4078 | Invoice Backlog Triage Agent | Turns a flat inbox of pending invoices into a ranked worklist by urgency. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-01-r1#08 | part-04.md |

## Parts

- outputs/s4-archive/w07/part-01.md
- outputs/s4-archive/w07/part-02.md
- outputs/s4-archive/w07/part-03.md
- outputs/s4-archive/w07/part-04.md

<!-- COMPLETE -->
