## Cards

---
id: s3-ideator-novel-T4-01-r2#01
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T4-01-r2
---

# Succession Handoff Agent

One-liner (≤20 words): When a treasurer, guardian or proxy hands off duties, an agent transfers full task state instead of starting over.

Buyer and niche (≤25 words): Nonprofit boards and family proxies whose officer, treasurer or caregiver role is changing hands, at a nonprofit or in a family.

Pain and evidence (≤40 words; cite the pain dossier file): Outgoing volunteers leave with "the compliance knowledge and the portal logins"; incoming officers start "from nothing." After a proxy changes, "each bank... has its own process" to re-recognize them. (src: outputs/s3-ideate/pain/T4-dossier.md, outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The outgoing person's filing agent packages open deadlines, portal credential-request status and institution contacts into a structured task manifest; using agent-to-agent messaging it hands this manifest directly to the successor's new agent, which confirms receipt and resumes each open filing where it left off.

Why now (≤25 words; name the specific capability): The Agent2Agent protocol lets agents from different vendors exchange task state directly, so a successor's agent resumes mid-task instead of restarting.

Demo moment (≤20 words): Swap the logged-in user mid-demo; the new agent immediately shows the same open deadlines, picked up mid-task.

Business model (≤15 words): Per-organization or per-family annual subscription, billed to whichever party manages continuity.

---
id: s3-ideator-novel-T4-01-r2#02
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T4-01-r2
---

# Elder Pawn Fraud Cross-Check

One-liner (≤20 words): Cross-checks pawn shops' mandatory daily police reports against a family's registered valuables to catch elder fraud same-day.

Buyer and niche (≤25 words): Adult children and daily money managers monitoring an aging parent's valuables for signs of scam-driven pawning or resale.

Pain and evidence (≤40 words; cite the pain dossier file): Elder fraud cost $4.885B in 2024 and families "notice weeks or months later," while pawnbrokers must already report every transaction "by noon of the following day." (src: outputs/s3-ideate/pain/T8-dossier.md, outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The family registers a parent's high-value items with serial numbers or descriptions; an agent reads the daily transaction reports pawn and secondhand dealers already file to police portals, matches against the registry, and alerts the proxy the same business day a matching item appears.

Why now (≤25 words; name the specific capability): Browser agents like Skyvern already read no-API dealer and police-reporting portals, the same mandated daily filings pawn shops must produce. [unverified: cross-portal monitoring at scale]

Demo moment (≤20 words): A mock item is pawned; the alert reaches the family proxy before the shop's own report deadline passes.

Business model (≤15 words): Monthly per-family subscription, with an optional data-share fee from participating pawn-reporting software vendors.

---
id: s3-ideator-novel-T4-01-r2#03
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T4-01-r2
---

# Guardian Ledger Medicaid Guard

One-liner (≤20 words): Checks a guardian's spending ledger against Medicaid asset rules before the annual court accounting locks in a disqualifying transaction.

Buyer and niche (≤25 words): Court-appointed guardians, conservators and daily money managers who both file annual accountings and keep a parent or ward Medicaid-eligible.

Pain and evidence (≤40 words; cite the pain dossier file): Guardian accounting discrepancies trigger a hearing; separately, the wrong account move causes "Medicaid disqualification until the balance is spent down." (src: outputs/s3-ideate/pain/T4-dossier.md, outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): As the guardian logs each ward transaction through the year, the agent checks it against both the court's accounting categories and the state's Medicaid asset and spend-down limits, flagging any transfer that would jeopardize eligibility before the anniversary-date filing is prepared, not after.

Why now (≤25 words; name the specific capability): 1M-token context windows hold a full year's ledger and the state's Medicaid asset rules together for one comparison pass.

Demo moment (≤20 words): Entering one large gift transaction turns red instantly, naming the specific Medicaid rule it would break.

Business model (≤15 words): Per-ward annual subscription, sold to guardians and professional fiduciaries.

---
id: s3-ideator-novel-T4-01-r2#04
track: novel
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2C, capability: extractor, track: novel }
parents: [A-seed-03-mech-1, A-seed-03-mech-2]
source_task: s3-ideator-novel-T4-01-r2
---

# Handoff Interview Agent

One-liner (≤20 words): An outgoing treasurer or caregiver narrates a walkthrough of duties; the agent turns it into a structured handoff packet.

Buyer and niche (≤25 words): Volunteer nonprofit officers and family caregivers stepping down, handing filing and account duties to an unprepared successor.

Pain and evidence (≤40 words; cite the pain dossier file): Departing volunteers take knowledge and logins with them, leaving incoming officers to start "from nothing," and after a proxy changes every institution restarts its own recognition process. (src: outputs/s3-ideate/pain/T4-dossier.md, outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The outgoing person narrates a guided walkthrough, naming each portal, deadline and institution as they go; the agent transcribes and extracts a structured, dated handoff map, then a follow-up voice pass asks clarifying questions to fill gaps before the successor's first login.

Why now (≤25 words; name the specific capability): Open-weight Kyutai streaming speech recognition transcribes narration in real time on-device, so account details never leave the handoff.

Demo moment (≤20 words): Narrate a two-minute mock handoff; a structured, dated map of deadlines and logins appears with one flagged gap.

Business model (≤15 words): One-time handoff fee, or bundled into an existing compliance or care-coordination subscription.

---
id: s3-ideator-novel-T4-01-r2#05
track: novel
lineage: ai-native
territory: T4
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T4-01-r2
---

# Delegated Authority Passport

One-liner (≤20 words): A reusable, verified proxy credential that filing and monitoring agents present to institutions instead of re-proving authority each time.

Buyer and niche (≤25 words): Vendors building filing and account-monitoring agents for nonprofits and family proxies, who need one trusted way to prove delegated authority.

Pain and evidence (≤40 words; cite the pain dossier file): Banks "require... their own POA form," and small orgs "lack a designated account administrator," so every agent run re-litigates who is allowed to act. (src: outputs/s3-ideate/pain/T8-dossier.md, outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A human completes one verified onboarding (POA, board resolution or letters of guardianship); the service issues a signed credential. Any filing or monitoring agent presents it over agent-to-agent messaging to an institution's portal-operating agent, which checks it once instead of demanding fresh proof at every visit.

Why now (≤25 words; name the specific capability): The Agent2Agent protocol standardizes how agents exchange verifiable identity claims across vendors, already adopted by over 150 organizations.

Demo moment (≤20 words): Two different vendor agents each present the same passport to a mock bank portal; both are admitted without manual re-check.

Business model (≤15 words): Per-credential issuance fee plus a small per-verification charge to agent vendors.

<!-- COMPLETE -->
