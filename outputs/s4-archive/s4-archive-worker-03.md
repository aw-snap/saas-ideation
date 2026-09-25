# S4 Archive Worker 03 — Receipt

## Stats
- Raw cards: 93
- Cards kept: 84
- Cards merged: 9
- Duplicate rate: 9/93 = 9.7%

## Clusters
- I-2007 (Peppol Ghost-Check) merged: s3-ideator-balanced-T2-02-r1#04
- I-2010 (The France PDP Matchmaker) merged: s3-ideator-balanced-T2-02-r1#07
- I-2050 (Reproduction Gate) merged: s3-ideator-balanced-T7-02-r2#02, s3-ideator-balanced-T7-02-r2#05
- I-2053 (Summary Reweigh Desk) merged: s3-ideator-balanced-T7-02-r2#04
- I-2069 (Fiduciary Accounting Fact-Checker) merged: s3-ideator-novel-T8-01-r1#08
- I-2070 (Medicare Appeal Evidence Guard) merged: s3-ideator-novel-T8-01-r1#02
- I-2080 (The Recheck Desk) merged: s3-ideator-novel-T2-02-r1#06
- I-2082 (The XML Keeper) merged: s3-ideator-novel-T2-02-r1#02

## Index

| id | name | one-liner | track | lineage | cell | raw_id | part file |
|---|---|---|---|---|---|---|---|
| I-2001 | Fetch Escrow for Walled Storefronts | A neutral escrow holds an agent's payment and only releases it once a real fetch is proven. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T6-01-r3#01 | part-01.md |
| I-2002 | Trusted Agent Bond | A purchasing agent posts a refundable bond so a small merchant can approve it instantly without knowing it. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T6-01-r3#02 | part-01.md |
| I-2003 | Mandate-Match Clearinghouse | Before a wholesale reorder commits, a neutral checker confirms the agent's mandate still matches the supplier's live cart. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T6-01-r3#03 | part-01.md |
| I-2004 | Proof-of-Solve Marketplace | A blind escrow matches stuck agents to anonymous human solvers, paying out only when the wall actually accepts the answer. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T6-01-r3#04 | part-01.md |
| I-2005 | Two-Sided Success Ledger | Agent and supplier each post their own record of an order, and only mismatches ever need a human. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T6-01-r3#05 | part-01.md |
| I-2006 | The Non-EU Firm's Peppol Reader | Turns machine-only UBL e-invoice XML from EU vendors into a checked, human-readable record automatically. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T2-02-r1#01 | part-01.md |
| I-2007 | Peppol Ghost-Check | Confirms your e-invoices actually arrived, because Belgium's Peppol network never tells you if they didn't. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T2-02-r1#03 | part-01.md |
| I-2008 | The Missing-Field Email Negotiator | Reads the rejection code on a bounced e-invoice, writes the exact vendor email that fixes it, and resubmits. | novel | ai-native | B2B\|drafter-dialogue\|novel | s3-ideator-novel-T2-02-r1#04 | part-01.md |
| I-2009 | The Persistent Login Chain Agent | Logs into every vendor and utility portal overnight, staying you, and drops new invoices into one folder. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T2-02-r1#05 | part-01.md |
| I-2010 | The France PDP Matchmaker | Shortlists and auto-connects one of France's 150 registered e-invoicing platforms before the September 2027 cutoff hits. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T2-02-r1#07 | part-01.md |
| I-2011 | The Client-Matter Invoice Router | Reads each vendor invoice and routes it straight to the client matter it should be billed against. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T2-02-r1#08 | part-01.md |
| I-2012 | Discovery Cleared, Files Unseen | Opposing law firms each run a local model that verifies redactions match a shared privilege log, files never sent. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T9-01-r3#01 | part-01.md |
| I-2013 | Claim-Ready Session Proof | A local model turns a therapy session into an insurer-ready attestation of billed content, transcript never uploaded. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-01-r3#02 | part-01.md |
| I-2014 | Filed And Accepted, Or Free | A local model preps a return from a client's documents, charging only once the IRS actually accepts the e-file. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-01-r3#03 | part-01.md |
| I-2015 | Conflict Check, Roster Unseen | Two solo law firms check for a conflict of interest without either exposing its client list to the other. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T9-01-r3#04 | part-01.md |
| I-2016 | Deal Diligence Without Handover | Buyer's and seller's accountants each verify the other's financial claims locally, without handing over the underlying ledger. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T9-01-r3#05 | part-01.md |
| I-2017 | E-Filing That Never Leaves Home | A local model checks a court filing against that court's rules, then submits it directly, skipping paid intermediaries. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-01-r2#01 | part-01.md |
| I-2018 | Guardian's Ledger, Kept Local | A local voice agent turns a guardian's year-round narrated transactions into a court-ready annual accounting, offline. | novel | seed-atom-hybrid | prosumer\|local-private\|novel | s3-ideator-novel-T9-01-r2#02 | part-01.md |
| I-2019 | One CPA, Many Nonprofits, Local | A local model prepares each nonprofit client's 990-N and state renewals from financial records that never leave the CPA's machine. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-01-r2#03 | part-01.md |
| I-2020 | Checks What The Filing Agent Did | A local agent logs into each state portal itself to confirm a paid filing agent's claimed work actually happened. | novel | ai-native | prosumer\|screen-agent\|novel | s3-ideator-novel-T9-01-r2#04 | part-01.md |
| I-2021 | Deadline Memory That Outlives Staff | A local model remembers every client's filing deadlines and AI-use consent status even after the staffer who knew them leaves. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-01-r2#05 | part-01.md |
| I-2022 | Offline Charity Registration Filer | A self-hosted model fills every state's charity registration portal from your own laptop; nothing about your org leaves it. | balanced | ai-native | B2B\|local-private\|balanced | s3-ideator-balanced-T4-02-r3#01 | part-01.md |
| I-2023 | Local Pawn Report Filer | A shop-owned model reads the day's transactions off the counter screen and files the mandatory police report itself. | balanced | seed-atom-hybrid | B2B\|local-private\|balanced | s3-ideator-balanced-T4-02-r3#02 | part-01.md |
| I-2024 | On-Device Lien Notice Agent | Runs the DMV lookup and drafts the lien-sale notice on the tow yard's own machine, no owner data sent anywhere. | balanced | ai-native | B2B\|local-private\|balanced | s3-ideator-balanced-T4-02-r3#03 | part-01.md |
| I-2025 | Guardian Ledger On-Device Agent | Turns a guardian's bank statements and receipts into the court's accounting format without a ward's finances leaving the laptop. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T4-02-r3#04 | part-01.md |
| I-2026 | Fire Incident On-Device Scribe | An on-device voice and screen agent drafts and files the incident report from a firehouse laptop, no cloud dependency. | balanced | ai-native | B2B\|local-private\|balanced | s3-ideator-balanced-T4-02-r3#05 | part-02.md |
| I-2027 | Parent Portal Autopilot | An in-browser agent logs into a parent's Medicaid, Medicare and bank portals weekly and reports only what changed. | novel | ai-native | B2C\|screen-agent\|novel | s3-ideator-novel-T8-01-r1#01 | part-02.md |
| I-2028 | Consent-Scoped Agent Passport | Gives a caregiving agent its own revocable digital identity that banks and agencies can verify instead of a shared password. | novel | ai-native | B2C\|agent-infra\|novel | s3-ideator-novel-T8-01-r1#03 | part-02.md |
| I-2029 | Three-Way Match for Elder Accounts | Clears a parent's transactions the way bookkeepers clear invoices, against merchant history, spend pattern, and a one-tap family check. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T8-01-r1#04 | part-02.md |
| I-2030 | A Parent's Monthly Close | Closes the books on a parent's care spending every month like a small-business P&L, flagging duplicate charges. | novel | ai-native | B2C\|extractor\|novel | s3-ideator-novel-T8-01-r1#05 | part-02.md |
| I-2031 | Facility Invoice Line-Item Auditor | Reads every nursing-home or assisted-living invoice line by line and flags charges that don't match the signed rate sheet. | novel | ai-native | B2C\|extractor\|novel | s3-ideator-novel-T8-01-r1#06 | part-02.md |
| I-2032 | The DMM Co-Pilot | Lets a professional daily money manager run thirty elderly clients' accounts from one console instead of thirty separate logins. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T8-01-r1#07 | part-02.md |
| I-2033 | Pay-Per-Filing Marketplace For Small Orgs | Small orgs post filing and invoice-entry tasks; verified agents complete them and get paid instantly via stablecoin, no invoicing. | balanced | ai-native | B2B\|agent-infra\|balanced | s3-ideator-balanced-T4-01-r2#01 | part-02.md |
| I-2034 | Books-to-Filing Autofill for Charities | Extracts a nonprofit's financial records automatically and drops the same numbers straight into every state's registration renewal form. | balanced | ai-native | B2B\|extractor\|balanced | s3-ideator-balanced-T4-01-r2#02 | part-02.md |
| I-2035 | Pay-Only-If-It-Passes Filing Checker | Validates an invoice or filing against the destination portal's exact rules, and only charges when the submission passes clean. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T4-01-r2#03 | part-02.md |
| I-2036 | Evidence-First Filing With One-Click Undo | Shows proof of every filing or posting before it's final, and lets the operator undo it within a window. | balanced | seed-atom-hybrid | B2B\|screen-agent\|balanced | s3-ideator-balanced-T4-01-r2#04 | part-02.md |
| I-2037 | Instant Inbox Triage for Back-Office Desks | A near-instant reflex model reads every inbound document the moment it lands and routes it to the right queue. | balanced | seed-atom-hybrid | B2B\|extractor\|balanced | s3-ideator-balanced-T4-01-r2#05 | part-02.md |
| I-2038 | Fit Check for Big Deliveries | Scan a stairwell with a phone's depth camera and get a fit verdict plus a maneuvering animation in seconds. | novel | seed-improved | B2B\|extractor\|novel | s3-improver-02#01 | part-02.md |
| I-2039 | Instant Paddle Capture | A single camera plus live speech recognition logs every raised charity paddle at the right dollar level instantly. | balanced | seed-improved | B2B\|extractor\|balanced | s3-improver-02#02 | part-02.md |
| I-2040 | The Farm's Spoken Map | A retiring farmer walks and talks; AI turns GPS and audio into confidence-tagged map layers for AR. | balanced | seed-improved | B2B\|extractor\|balanced | s3-improver-02#03 | part-02.md |
| I-2041 | Live Delivery Coach for Interviews | Real-time delivery nudges during video job interviews, pace, filler words, plus a post-call coaching replay. | balanced | seed-improved | B2C\|drafter-dialogue\|balanced | s3-improver-02#04 | part-02.md |
| I-2042 | Evidence-First PC Fixer | An AI agent on your PC diagnoses slowdowns with plain-English evidence, then fixes them with one-click undo. | balanced | seed-improved | B2C\|verifier\|balanced | s3-improver-02#05 | part-02.md |
| I-2043 | Client Quote Estimator for Dev Shops | AI reads your codebase and turns a client's feature request into a quote-ready time and risk estimate. | balanced | seed-improved | B2B\|drafter-dialogue\|balanced | s3-improver-02#06 | part-02.md |
| I-2044 | Reflex Secret Guard | A reflex-speed AI watches every keystroke in your editor or terminal and catches leaking secrets before they're committed. | novel | seed-improved | B2B\|verifier\|novel | s3-improver-02#07 | part-02.md |
| I-2045 | Same Words, More Life | Upload a monotone lecture recording and get the same voice, same timing, with fillers gone and more energy. | novel | seed-improved | B2B\|drafter-dialogue\|novel | s3-improver-02#08 | part-02.md |
| I-2046 | Fabrication Firewall | Locks a brief's ready-to-file status red until every citation resolves to a real, on-point case. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T7-02-r1#01 | part-02.md |
| I-2047 | Opposing Brief Sweep | Turns the other side's brief into a court-ready exhibit of every fabricated citation it contains. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T7-02-r1#02 | part-02.md |
| I-2048 | Docket Discrepancy Radar | Scans a day's e-filings overnight and ranks them by citation-fabrication risk for clerks to route. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T7-02-r1#03 | part-02.md |
| I-2049 | Standing-Order Compliance Radar | Watches which judge a filing is going to and inserts that judge's exact required GenAI disclosure language before submit. | novel | ai-native | prosumer\|drafter-dialogue\|novel | s3-ideator-novel-T7-02-r1#04 | part-02.md |
| I-2050 | Reproduction Gate | Only forwards a vulnerability report to a maintainer after actually reproducing the exploit in a sandbox. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T7-02-r1#05 | part-02.md |
| I-2051 | CVE Reproduction Bench | Stamps every CVE submission reproduced, unreproduced, or needs-human before it reaches the public database. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T7-02-r1#06 | part-03.md |
| I-2052 | Bounty Passport | Vulnerability-report agents stake a refundable bond per submission; fake reports forfeit it, real ones earn a bonus. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T7-02-r1#07 | part-03.md |
| I-2053 | Summary Reweigh Desk | Loads the whole claim file beside the carrier's AI summary and highlights every sentence the source can't support. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T7-02-r1#08 | part-03.md |
| I-2054 | Annual Shop-Floor Evidence Pass | Once a year, an agent operates your legacy CNC and PLC terminals to build the CMMC evidence packet. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-02-r3#01 | part-03.md |
| I-2055 | Annual On-Prem HIPAA Sweep | Once a year, an agent operates your on-premises practice server to write the risk analysis regulators actually check for. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-02-r3#02 | part-03.md |
| I-2056 | Legacy Console Renewal Proof Pack | Once a year at renewal, an agent operates your on-prem antivirus and backup consoles to prove the coverage you're claiming. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-02-r3#03 | part-03.md |
| I-2057 | Annual Town Systems Snapshot | Once a year before budget or renewal, an agent operates the town's decade-old desktop systems for one security snapshot. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-02-r3#04 | part-03.md |
| I-2058 | Annual Domain Controller Credential Audit | Once a year, an agent walks your on-prem Active Directory console to certify who and what still has access. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-02-r3#05 | part-03.md |
| I-2059 | IRS-Safe Local Tax Copilot | Drafts client tax letters and return notes locally, so K-1 and W-2 data never reaches a cloud vendor. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-01-r1#01 | part-03.md |
| I-2060 | Consent Captured, Session Recorded Locally | Plays the required AI-recording disclosure, captures spoken consent, then transcribes the session entirely on the therapist's own device. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-01-r1#02 | part-03.md |
| I-2061 | Grounded Notes With Timestamp Citations | Drafts SOAP notes from session audio entirely on-device, flagging any sentence it cannot trace back to the recording. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-01-r1#03 | part-03.md |
| I-2062 | Deposition Digest That Never Leaves the Firm | Summarizes deposition transcripts and case files on the lawyer's own machine instead of a costly outside vendor. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-01-r1#04 | part-03.md |
| I-2063 | Vendor-Diligence-in-a-Box | Reads a solo firm's AI vendor contracts and drafts the security plan and per-vendor consent forms regulators require. | balanced | ai-native | prosumer\|drafter-dialogue\|balanced | s3-ideator-balanced-T9-01-r1#05 | part-03.md |
| I-2064 | Unbox-and-Draft Appliance for Solos | A pre-configured local AI box a solo practitioner can plug in and use the same day. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-01-r1#06 | part-03.md |
| I-2065 | Insurer-Ready AI Usage Ledger | Logs every AI-assisted task with model version and reviewer sign-off, ready to hand to a malpractice carrier at renewal. | balanced | ai-native | prosumer\|verifier\|balanced | s3-ideator-balanced-T9-01-r1#07 | part-03.md |
| I-2066 | Receipt Pile to Ledger, Never Uploaded | Turns a shoebox of W-2s, 1099s and receipts into ledger entries on the preparer's own laptop during tax-season crunch. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-01-r1#08 | part-03.md |
| I-2067 | AI Voice-Clone Scam Call Guardian | An on-device agent listens live and flags AI-cloned grandchild-in-trouble scam calls before money moves. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T7-01-r2#01 | part-03.md |
| I-2068 | Money-Manager Voice Reconciler | A daily money manager dictates account notes; an agent checks every claim against the real statement. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T7-01-r2#02 | part-03.md |
| I-2069 | Fiduciary Accounting Fact-Checker | Drafts a benefits fiduciary's annual accounting from records, then checks every line against the real bank statements before filing. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T7-01-r2#03 | part-03.md |
| I-2070 | Medicare Appeal Evidence Guard | Drafts a parent's Medicare Advantage denial appeal, citing the plan's own coverage rules, then proves every clinical claim against the chart. | novel | seed-atom-hybrid | B2C\|verifier\|novel | s3-ideator-novel-T7-01-r2#04 | part-03.md |
| I-2071 | Live Portal Call Verifier | Listens on a Medicaid support call and flags the moment the rep's answer contradicts the actual rules. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T7-01-r2#05 | part-03.md |
| I-2072 | Succession Handoff Agent | When a treasurer, guardian or proxy hands off duties, an agent transfers full task state instead of starting over. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T4-01-r2#01 | part-03.md |
| I-2073 | Elder Pawn Fraud Cross-Check | Cross-checks pawn shops' mandatory daily police reports against a family's registered valuables to catch elder fraud same-day. | novel | ai-native | B2C\|screen-agent\|novel | s3-ideator-novel-T4-01-r2#02 | part-03.md |
| I-2074 | Guardian Ledger Medicaid Guard | Checks a guardian's spending ledger against Medicaid asset rules before the annual court accounting locks in a disqualifying transaction. | novel | ai-native | B2C\|verifier\|novel | s3-ideator-novel-T4-01-r2#03 | part-03.md |
| I-2075 | Handoff Interview Agent | An outgoing treasurer or caregiver narrates a walkthrough of duties; the agent turns it into a structured handoff packet. | novel | seed-atom-hybrid | B2C\|extractor\|novel | s3-ideator-novel-T4-01-r2#04 | part-03.md |
| I-2076 | Delegated Authority Passport | A reusable, verified proxy credential that filing and monitoring agents present to institutions instead of re-proving authority each time. | novel | ai-native | agents\|agent-infra\|novel | s3-ideator-novel-T4-01-r2#05 | part-04.md |
| I-2077 | Appeal Reel | An AI-drafted denial appeal is checked against real payer-portal data, then explained in a 60-second video for sign-off. | balanced | seed-atom-hybrid | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r2#01 | part-04.md |
| I-2078 | Standing Order Video Brief | Turns each judge's GenAI standing order into a 30-second personalized video briefing before every filing. | balanced | ai-native | prosumer\|drafter-dialogue\|balanced | s3-ideator-balanced-T7-02-r2#03 | part-04.md |
| I-2079 | The Duplicate Docket | Catches near-duplicate invoices your ledger's exact-match rule misses, before they get paid twice. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-02-r1#01 | part-04.md |
| I-2080 | The Recheck Desk | Independently re-audits what your capture tool extracted against the original scan before it posts. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-02-r1#02 | part-04.md |
| I-2081 | The Rejection Fixer | Reads a French e-invoice platform's rejection code, fixes the field, and resubmits it automatically. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T2-02-r1#03 | part-04.md |
| I-2082 | The XML Keeper | Catches the legally required XRechnung XML before staff delete it, or re-fetches it when they already have, and archives it for 8 years. | balanced | ai-native | B2B\|extractor\|balanced | s3-ideator-balanced-T2-02-r1#05 | part-04.md |
| I-2083 | The Three-Way Match | Cross-checks every carrier invoice against its bill of lading and proof of delivery before it's keyed in. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-02-r1#06 | part-04.md |
| I-2084 | The Close Chaser | Flags every approved purchase with no matching invoice yet, before month-end close instead of during it. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T2-02-r1#08 | part-04.md |

## Parts
- outputs/s4-archive/w03/part-01.md
- outputs/s4-archive/w03/part-02.md
- outputs/s4-archive/w03/part-03.md
- outputs/s4-archive/w03/part-04.md

<!-- COMPLETE -->
