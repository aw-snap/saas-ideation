# S4 Archive Worker 05 — Receipt

## Stats
- Raw cards: 108
- Cards kept: 97
- Cards merged: 11
- Duplicate rate: 11/108 = 0.102 (10.2%)

## Clusters
- I-3002 (Carrier PII Reconciler, Fully Local) ← merged: s3-ideator-novel-T3-02-r2#03
- I-3027 (Proof-of-Local Session Scribe) ← merged: s3-ideator-balanced-T9-02-r1#02
- I-3028 (Per-Vendor Consent Autopilot) ← merged: s3-ideator-balanced-T9-02-r1#04
- I-3038 (Cite or Sight) ← merged: s3-ideator-balanced-T7-01-r1#01
- I-3039 (The Sandbox Gatekeeper) ← merged: s3-ideator-balanced-T7-02-r1#07, s3-ideator-balanced-T7-01-r1#04
- I-3040 (The Adjuster's Alibi) ← merged: s3-ideator-balanced-T7-02-r1#06, s3-ideator-balanced-T7-01-r1#06, s3-ideator-balanced-T7-02-r3#03
- I-3041 (Brief Autopsy Report) ← merged: s3-ideator-balanced-T7-01-r1#03
- I-3070 (The Season Box) ← merged: s3-ideator-novel-T9-02-r1#03

## Index

| id | name | one-liner | track | lineage | cell | raw_id | part |
|---|---|---|---|---|---|---|---|
| I-3001 | Local Agent for Protected Dental Data | A fully local desktop agent extracts and syncs Dentrix's "protected" categories without any patient data ever leaving the practice's machine. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T3-02-r3#01 | part-01.md |
| I-3002 | Carrier PII Reconciler, Fully Local | An on-premises agent reconciles carrier portal data against the agency system without medical or financial PII ever reaching the cloud. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T3-02-r3#02 | part-01.md |
| I-3003 | Local Record Extractor for Vet Sales | A local agent pulls years of Cornerstone records for a practice sale, keeping the client list off any cloud. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T3-02-r3#03 | part-01.md |
| I-3004 | Tenant Screening Agent, Data Stays Local | A local agent files tenant screening data into Yardi or AppFolio without SSNs or credit data touching the cloud. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T3-02-r3#04 | part-01.md |
| I-3005 | Local F&I Credit Application Filler | An on-premises agent copies a buyer's credit application from the DMS into lender portals, SSN never leaving the dealership network. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T3-02-r3#05 | part-01.md |
| I-3006 | Tap-to-Log Paddle Tally | NFC-tagged paddles let ringside spotters log every raised bid with one tap, no cameras needed. | balanced | seed-pivot | B2B\|extractor\|balanced | s3-pivoter-02#01 | part-01.md |
| I-3007 | RingSide: Live Auction Bid Capture | Cameras and auctioneer speech recognition fuse to log every floor and phone bid at fast auctions instantly. | balanced | seed-pivot | B2B\|extractor\|balanced | s3-pivoter-02#02 | part-01.md |
| I-3008 | Gala Checkout Flow | A tap-to-pay kiosk clears silent-auction and raffle checkout lines at galas in seconds, not queues. | balanced | seed-pivot | B2B\|extractor\|balanced | s3-pivoter-02#03 | part-01.md |
| I-3009 | Booth Lead Capture, By the Vendor | Trade-show AV vendors resell a badge-scan and conversation-note tool that turns booth chats into ranked leads. | balanced | seed-pivot | B2B\|extractor\|balanced | s3-pivoter-02#04 | part-01.md |
| I-3010 | Walkthrough Recap | Auto-captures a property walkthrough and turns it into a personalized recap video for each buyer. | balanced | seed-pivot | prosumer\|drafter-dialogue\|balanced | s3-pivoter-02#05 | part-01.md |
| I-3011 | Interview Pattern Report | Reviews all your past video interviews together and shows the delivery pattern that keeps costing you offers. | balanced | seed-pivot | B2C\|verifier\|balanced | s3-pivoter-02#06 | part-01.md |
| I-3012 | Live Sales Call Delivery Coach | Real-time nudges help sales reps slow down, cut filler words, and sound confident during live discovery calls. | balanced | seed-pivot | B2B\|drafter-dialogue\|balanced | s3-pivoter-02#07 | part-01.md |
| I-3013 | Interview-Ready Check | Scans your camera, lighting, framing and connection before a video interview starts, and fixes what it can. | balanced | seed-pivot | B2C\|verifier\|balanced | s3-pivoter-02#08 | part-01.md |
| I-3014 | Live Lift Form Coach | Free practice mode reviews recorded lifts; a paid live mode gives rep-by-rep form corrections through your phone camera. | balanced | seed-pivot | B2C\|drafter-dialogue\|balanced | s3-pivoter-02#09 | part-01.md |
| I-3015 | Live De-escalation Coach | Real-time cues help frontline staff stay calm and effective while an angry customer is still on the line. | balanced | seed-pivot | B2B\|drafter-dialogue\|balanced | s3-pivoter-02#10 | part-01.md |
| I-3016 | Estimate Calibration Engine | Learns from your team's own past tickets versus actual hours to give confidence-ranged build-time estimates. | balanced | seed-pivot | B2B\|verifier\|balanced | s3-pivoter-02#11 | part-01.md |
| I-3017 | Codebase Due-Diligence Agent | An AI agent explores a target startup's repository and produces a code-quality and risk report before a deal closes. | balanced | seed-pivot | B2B\|verifier\|balanced | s3-pivoter-02#12 | part-01.md |
| I-3018 | Commit-to-Client Reports | Turns a sprint's git commit history into a plain-English progress report clients can actually understand. | balanced | seed-pivot | B2B\|drafter-dialogue\|balanced | s3-pivoter-02#13 | part-01.md |
| I-3019 | Contract Turnaround Estimator | Grounds a contract amendment's expected turnaround time in the firm's own precedent documents, not a guess. | balanced | seed-pivot | B2B\|extractor\|balanced | s3-pivoter-02#14 | part-01.md |
| I-3020 | Grounded Repair Quotes | Mechanics quote repairs from a photo and diagnostic code instead of guessing over the phone. | balanced | seed-pivot | B2B\|extractor\|balanced | s3-pivoter-02#15 | part-01.md |
| I-3021 | Filler-Free Lecture Cut | Automatically trims "ums" from lecture recordings and stretches the matching slide to hold sync, no re-voicing needed. | novel | seed-pivot | B2B\|extractor\|novel | s3-pivoter-02#16 | part-01.md |
| I-3022 | Timed Voice Re-Performance | Re-performs a flat scratch voice recording with real emotion while holding every word's timing intact. | novel | seed-pivot | B2B\|drafter-dialogue\|novel | s3-pivoter-02#17 | part-01.md |
| I-3023 | Caption-Ready Lecture Audio | Cleans up lecture audio quality so automatic captioning tools stop mangling accents, fast speech and background noise. | novel | seed-pivot | B2B\|extractor\|novel | s3-pivoter-02#18 | part-01.md |
| I-3024 | Campus Study Planner | Builds each student a personalized weekly study schedule from their course syllabi and deadlines. | novel | seed-pivot | B2B\|drafter-dialogue\|novel | s3-pivoter-02#19 | part-01.md |
| I-3025 | Tone-Safe Reply Rewriter | Rewrites a support agent's reply to sound warmer, while locking every fact, number and promised action exactly in place. | novel | seed-pivot | B2B\|drafter-dialogue\|novel | s3-pivoter-02#20 | part-01.md |
| I-3026 | Redaction Relay | A local model strips identifying facts before any prompt reaches the cloud, then reinserts them into the answer. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-02-r1#01 | part-02.md |
| I-3027 | Proof-of-Local Session Scribe | An on-device note-taker that cryptographically proves a client's session audio never left the laptop. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T9-02-r1#02 | part-02.md |
| I-3028 | Per-Vendor Consent Autopilot | Drafts and tracks the separate signed §7216 consent every AI vendor legally requires before any client data reaches it. | novel | ai-native | prosumer\|drafter-dialogue\|novel | s3-ideator-novel-T9-02-r1#04 | part-02.md |
| I-3029 | WISP That Watches Itself | An on-device agent scans the practice's actual software monthly and flags where it drifted from its written security plan. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T9-02-r1#05 | part-02.md |
| I-3030 | Vendor Contract X-Ray | Reads an AI vendor's terms of service and flags every clause that violates privilege, §7216 or HIPAA before signup. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T9-02-r1#06 | part-02.md |
| I-3031 | Consent Concierge Voice Agent | A local voice agent walks each client through AI-recording consent aloud and timestamps their verbal yes before a session starts. | novel | ai-native | prosumer\|drafter-dialogue\|novel | s3-ideator-novel-T9-02-r1#07 | part-02.md |
| I-3032 | Local-Only Trust Certificate | Issues a verifiable certificate proving a specific client's AI-assisted work never left the practitioner's device. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T9-02-r1#08 | part-02.md |
| I-3033 | Prior-Auth Voice Intake Line | Staff dictate prior-auth requests into a phone line; a portal agent files them overnight and calls back with results. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r3#01 | part-02.md |
| I-3034 | Denial Callback Line | Call in, name a patient, hear the payer's exact denial reason read aloud, then say "file it" to appeal. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r3#02 | part-02.md |
| I-3035 | Claim Status Call-In Line | Ask a phone line for any claim's status and hear it instantly, pulled from last night's full portal sweep. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r3#03 | part-02.md |
| I-3036 | SLA Breach Outbound Call | The agent calls the practice as a prior-auth deadline nears and escalates the moment staff say "go ahead." | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T1-01-r3#04 | part-02.md |
| I-3037 | Denial Ledger Voice Query Line | Call a number, ask which denials are worth appealing this week, and get a spoken, ranked answer with reasons. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T1-01-r3#05 | part-02.md |
| I-3038 | Cite or Sight | Reads every cited case's full text and confirms the quote matches, not just that the case exists. | balanced | ai-native | prosumer\|verifier\|balanced | s3-ideator-balanced-T7-02-r1#01 | part-02.md |
| I-3039 | The Sandbox Gatekeeper | Auto-reproduces every reported vulnerability in a disposable sandbox and scores its plausibility before it reaches a maintainer's inbox. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r1#02 | part-02.md |
| I-3040 | The Adjuster's Alibi | Stamps every AI claim-summary figure with the exact source-document line that backs it, at approval time. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r1#03 | part-02.md |
| I-3041 | Brief Autopsy Report | Turns opposing counsel's filing into a citation-by-citation forensic exhibit ready to attach to a fee motion. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r1#04 | part-02.md |
| I-3042 | The Debunk Memo | Drafts the exact evidence-backed rejection a maintainer needs to send back for each fake vulnerability report. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r1#05 | part-02.md |
| I-3043 | Docket Watchdog | Flags filings with unverifiable citations for court clerks before a judge ever reads them. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r1#08 | part-02.md |
| I-3044 | Will It Fit? Delivery Check | Three phone photos of a stairwell return a green/amber/red delivery-fit verdict before checkout. | novel | seed-improved | B2B\|extractor\|novel | s3-improver-01#01 | part-02.md |
| I-3045 | Spotter for Paddle Raises | A single camera plus live speech logs every raised charity paddle at the right giving level, instantly. | balanced | seed-improved | B2B\|extractor\|balanced | s3-improver-01#02 | part-02.md |
| I-3046 | Lay of the Land | A retiring farmer narrates a walk; AI turns GPS and audio into a confidence-tagged map successors can browse. | balanced | seed-improved | B2B\|extractor\|balanced | s3-improver-01#03 | part-02.md |
| I-3047 | AI Live Interview Coach | Real-time delivery nudges during live video interviews, tuned for non-native English speakers, plus post-call coaching. | balanced | seed-improved | B2C\|drafter-dialogue\|balanced | s3-improver-01#04 | part-02.md |
| I-3048 | Remote Family PC Copilot | An AI agent diagnoses your parents' slow PC with evidence, then fixes it only after you approve remotely. | balanced | seed-improved | B2C\|screen-agent\|balanced | s3-improver-01#05 | part-02.md |
| I-3049 | AI Feature-Request Reviewer | AI reads your codebase and turns a client's feature request into a grounded time-and-risk estimate. | balanced | seed-improved | B2B\|extractor\|balanced | s3-improver-01#06 | part-02.md |
| I-3050 | Instant Reflex AI Layer | A per-keystroke "System 1" reflex layer flags risks instantly inside any app, escalating only when unsure. | novel | seed-improved | B2B\|verifier\|novel | s3-improver-01#07 | part-02.md |
| I-3051 | Same Words, More Life | Upload a monotone lecture; get back the same words, timed identically, delivered with more energy. | novel | seed-improved | B2B\|drafter-dialogue\|novel | s3-improver-01#08 | part-03.md |
| I-3052 | Verify My Job Offer | Migrant workers upload a job offer or contract; it checks the agency, employer and stamps against live government registries. | balanced | ai-native | B2C\|screen-agent\|balanced | s3-ideator-balanced-T7-01-r1#02 | part-03.md |
| I-3053 | Demand Letter vs. the Chart | Lines up an AI-drafted demand letter against the actual medical chart and highlights every unsupported figure. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-01-r1#05 | part-03.md |
| I-3054 | Red-Flag My Deployment Contract | Checks an AI-drafted overseas employment contract clause by clause against the mandatory standard contract and flags illegal terms. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-01-r1#07 | part-03.md |
| I-3055 | The Right Words for This Judge | Generates the exact AI-use disclosure or certification language required by the specific judge hearing your filing. | balanced | ai-native | B2B\|drafter-dialogue\|balanced | s3-ideator-balanced-T7-01-r1#08 | part-03.md |
| I-3056 | Insurer Answers, Console-Verified | An agent signs into every clinic admin console and drafts truthful cyber-insurance answers with live screenshot evidence attached. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-01-r1#01 | part-03.md |
| I-3057 | The Offboarding Sweep | Finds every login a departed employee still holds across a small practice's SaaS stack before it becomes a breach. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T5-01-r1#02 | part-03.md |
| I-3058 | Payee Change, Verified First | Checks every vendor bank-detail-change request against payment history before the bookkeeper approves it, not after the money is gone. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T5-01-r1#03 | part-03.md |
| I-3059 | DMARC, Translated and Fixed | Turns unreadable daily DMARC XML into one plain-English sentence and the exact DNS record to paste in. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T5-01-r1#04 | part-03.md |
| I-3060 | Agents Get Their Own Badge | Gives every scheduling bot, reminder service and AI helper its own revocable identity instead of the owner's shared password. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T5-01-r1#05 | part-03.md |
| I-3061 | Rehearse the Ransomware Morning | A spoken walkthrough that rehearses exactly what breaks and what to do in the first hour of a ransomware hit. | novel | ai-native | B2B\|drafter-dialogue\|novel | s3-ideator-novel-T5-01-r1#06 | part-03.md |
| I-3062 | The Standing Evidence File | Turns each admin console's own export into one running, dated evidence file ready for any insurer or auditor. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T5-01-r1#07 | part-03.md |
| I-3063 | Whose Key Is This, Really | Cross-checks every API key and webhook against the current staff roster and flags the ones nobody can explain. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T5-01-r1#08 | part-03.md |
| I-3064 | Filing Identity That Outlives Volunteers | Gives each nonprofit's filing agent its own governed portal identity, so it keeps filing after a treasurer quits. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T4-02-r2#01 | part-03.md |
| I-3065 | Walk-and-Talk Compliance Handoff | An outgoing volunteer narrates their filing routine aloud; the agent turns it into a structured calendar and access map. | novel | seed-atom-hybrid | B2B\|extractor\|novel | s3-ideator-novel-T4-02-r2#02 | part-03.md |
| I-3066 | Town Hall Filing and Insurance Copilot | The same agent that files a town's court and DMV records also proves its real security posture to its insurer. | novel | ai-native | B2B\|screen-agent\|novel | s3-ideator-novel-T4-02-r2#03 | part-03.md |
| I-3067 | Mandate Discovery Radar | Tells a tiny org every recurring filing and security attestation it legally owes, before a fine or revocation surfaces it. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T4-02-r2#04 | part-03.md |
| I-3068 | Ward Payee-Change Sentinel | Checks every new bank-detail change on a ward's bills against known vendors before a guardian pays, and logs it. | novel | ai-native | B2B\|verifier\|novel | s3-ideator-novel-T4-02-r2#05 | part-03.md |
| I-3069 | The Chain-of-Custody Drafter | Local AI drafts from case files and logs cryptographic proof that nothing ever left the machine. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r1#01 | part-03.md |
| I-3070 | The Season Box | A rented offline appliance that extracts W-2s and 1099s and auto-signs the per-vendor consent tax law requires. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r1#03 | part-03.md |
| I-3071 | The Waiting-Room Kiosk | An offline tablet that takes client intake and a witnessed consent signature, never touching WiFi or a server. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r1#05 | part-03.md |
| I-3072 | The AI Service Truck | A technician installs and quarterly-tunes a local AI box for a solo practice, billed like an HVAC contract. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r1#06 | part-03.md |
| I-3073 | The Transcript That Never Left | A local model reviews full deposition transcripts on-device instead of paying vendors $3-8 per page to summarize them. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r1#07 | part-03.md |
| I-3074 | The Pre-Vetted Compliance Bundle | A local AI bundle that ships with a finished vendor-diligence memo, so a solo never negotiates a data contract. | balanced | ai-native | prosumer\|local-private\|balanced | s3-ideator-balanced-T9-02-r1#08 | part-03.md |
| I-3075 | Wholesale Reorder & Invoice Reconciler | An agent reorders pharmacy stock through real vendor checkout and cross-checks every incoming invoice against what it ordered. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T3-02-r2#01 | part-03.md |
| I-3076 | E-Invoice Bridge for Property SoRs | Turns machine-only e-invoices vendors now send into ledger entries inside a property system that can't read them. | novel | ai-native | B2B\|extractor\|novel | s3-ideator-novel-T3-02-r2#02 | part-04.md |
| I-3077 | Dealer Parts Agent Checkout | A dealership orders parts through real agent checkout instead of paying a per-rooftop system integration toll. | novel | ai-native | B2B\|agent-infra\|novel | s3-ideator-novel-T3-02-r2#04 | part-04.md |
| I-3078 | Migration Invoice-Trail Guardian | During a system migration, an agent also rescues every legally-required invoice record staff would otherwise delete. | novel | seed-atom-hybrid | B2B\|screen-agent\|novel | s3-ideator-novel-T3-02-r2#05 | part-04.md |
| I-3079 | Local Vendor Deletion-Form Filer | An on-prem agent fills and submits each vendor's walled data-deletion form without student data ever leaving the building. | balanced | ai-native | B2B\|local-private\|balanced | s3-ideator-balanced-T6-02-r3#01 | part-04.md |
| I-3080 | Local Crawler-Allowlist Form Filer | Classifies bot traffic from the district's own server logs, then submits the resulting allow-or-charge settings form on its own. | balanced | ai-native | B2B\|agent-infra\|balanced | s3-ideator-balanced-T6-02-r3#02 | part-04.md |
| I-3081 | Local Verified-Merchant Enrollment Filer | Enrolls the district's booster-club store in card-network agent-verification programs using only locally kept fraud history. | balanced | ai-native | B2B\|agent-infra\|balanced | s3-ideator-balanced-T6-02-r3#03 | part-04.md |
| I-3082 | Local Vendor Reauthorization Filer | Watches a private scope log and refiles a vendor's access-reauthorization form the moment terms drift out of date. | balanced | ai-native | B2B\|agent-infra\|balanced | s3-ideator-balanced-T6-02-r3#04 | part-04.md |
| I-3083 | Local False-Block Appeal Filer | Spots real users caught by bot defenses in private server logs, then files the vendor's appeal form automatically. | balanced | ai-native | B2B\|local-private\|balanced | s3-ideator-balanced-T6-02-r3#05 | part-04.md |
| I-3084 | CiteCert Stamp API | An API that takes a draft brief and returns a print-ready, signable citation-verification certificate for the court file. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r3#01 | part-04.md |
| I-3085 | Repro Certificate API | An API that reproduces a submitted vulnerability report and returns a printable pass/fail certificate, nothing else. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r3#02 | part-04.md |
| I-3086 | Slop Rejection Notice API | An API that turns a debunked CVE or vulnerability submission into a printable, citable rejection notice. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r3#04 | part-04.md |
| I-3087 | Demand Letter Seal API | An API that checks an AI-drafted demand letter's codes and dates against the medical record, returning a printable compliance seal. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T7-02-r3#05 | part-04.md |
| I-3088 | Vendor Hold-Queue Call Agent | Calls system-of-record support lines, sits on hold, and confirms the fix actually landed before closing the ticket. | balanced | ai-native | B2B\|drafter-dialogue\|balanced | s3-ideator-balanced-T3-02-r2#01 | part-04.md |
| I-3089 | Screen-Agent Write Auditor | Independently confirms that a screen agent's write into a locked vertical system of record actually happened. | balanced | ai-native | B2B\|verifier\|balanced | s3-ideator-balanced-T3-02-r2#02 | part-04.md |
| I-3090 | CAPTCHA Escalation Relay | When a screen agent hits a CAPTCHA or login wall inside a locked system of record, it phones the staffer to clear it in seconds. | balanced | ai-native | B2B\|screen-agent\|balanced | s3-ideator-balanced-T3-02-r2#03 | part-04.md |
| I-3091 | Spend Governor for Locked-Portal Agent APIs | Caps and tracks spend when your own agents call per-request APIs sitting in front of locked system-of-record portals. | balanced | ai-native | agents\|agent-infra\|balanced | s3-ideator-balanced-T3-02-r2#04 | part-04.md |
| I-3092 | Safe-Write Agent for Legacy Practice Systems | Every automated write into a locked practice system takes a restore point first, so a bad write can be undone in one click. | balanced | seed-atom-hybrid | B2B\|screen-agent\|balanced | s3-ideator-balanced-T3-02-r2#05 | part-04.md |
| I-3093 | Privileged Cite Bench | Checks every citation in a brief against real case text on the lawyer's own laptop, nothing leaves the machine. | novel | seed-atom-hybrid | prosumer\|local-private\|novel | s3-ideator-novel-T7-02-r2#01 | part-04.md |
| I-3094 | Field Adjuster Echo | An adjuster narrates a damage site aloud; a live voice agent cross-checks it against the carrier's AI claim summary. | novel | seed-atom-hybrid | B2B\|verifier\|novel | s3-ideator-novel-T7-02-r2#02 | part-04.md |
| I-3095 | On-Prem Exploit Bench | Reproduces AI-drafted vulnerability reports against proprietary code entirely inside the company's own network, never in a public cloud. | novel | ai-native | B2B\|local-private\|novel | s3-ideator-novel-T7-02-r2#03 | part-04.md |
| I-3096 | Session Truth Ledger | Builds a live, spoken fact ledger during a therapy session, then flags anything the AI note invents afterward. | novel | ai-native | prosumer\|verifier\|novel | s3-ideator-novel-T7-02-r2#04 | part-04.md |
| I-3097 | On-Device Return Check | Cross-checks an AI-drafted tax return against W-2s and 1099s entirely on the preparer's own laptop, no cloud disclosure. | novel | ai-native | prosumer\|local-private\|novel | s3-ideator-novel-T7-02-r2#05 | part-04.md |

## Parts
- outputs/s4-archive/w05/part-01.md
- outputs/s4-archive/w05/part-02.md
- outputs/s4-archive/w05/part-03.md
- outputs/s4-archive/w05/part-04.md

<!-- COMPLETE -->
