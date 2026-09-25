## Cards

---
id: s3-ideator-novel-T4-02-r2#01
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
---

# Filing Identity That Outlives Volunteers

One-liner (≤20 words): Gives each nonprofit's filing agent its own governed portal identity, so it keeps filing after a treasurer quits.

Buyer and niche (≤25 words): Boards and treasurers of small all-volunteer nonprofits and fire departments that file recurring reports into many state and federal portals.

Pain and evidence (≤40 words; cite the pain dossier file): Compliance knowledge and portal logins "leave with" each departing volunteer, forcing incoming officers to rebuild from nothing; the same failure pattern leaves 87% of small firms unable to verify who still holds access. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The filing agent authenticates to every state and federal portal under its own MCP-governed identity, not a volunteer's shared login. When an officer leaves, the board revokes only that person's access in one step; the agent's credentials, audit trail and filing schedule continue untouched, so nothing depends on memory.

Why now (≤25 words; name the specific capability): Auth0's "Auth for MCP" gives agents their own authenticated, revocable identity separate from any human's login. TC-10 [early access].

Demo moment (≤20 words): Revoke the "treasurer" role mid-demo; the agent still files the next deadline on schedule, unaffected, live.

Business model (≤15 words): Flat annual fee per organization, bundled with the filing subscription.

---
id: s3-ideator-novel-T4-02-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2B, capability: extractor, track: novel }
parents: [A-seed-03-mech-1, A-seed-03-mech-2]
source_task: s3-ideator-novel-T4-02-r2
---

# Walk-and-Talk Compliance Handoff

One-liner (≤20 words): An outgoing volunteer narrates their filing routine aloud; the agent turns it into a structured calendar and access map.

Buyer and niche (≤25 words): Boards of small nonprofits, fire departments and tow yards losing the one volunteer who held all the compliance knowledge.

Pain and evidence (≤40 words; cite the pain dossier file): Incoming volunteers "conduct a thorough compliance review ... starting from nothing" after a departure, while separately 87% of small orgs cannot verify who holds current access. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The departing officer walks through their routine narrating each portal, login and due date; the agent transcribes and extracts a structured filing calendar and credential inventory, then asks spoken follow-up questions to fill gaps before the person is gone for good, instead of a written manual nobody writes.

Why now (≤25 words; name the specific capability): Open-weight streaming speech recognition turns a narrated walkthrough into structured records on ordinary hardware in real time. TC-31.

Demo moment (≤20 words): Officer narrates two portal logins aloud; a filled calendar and login list populate on screen instantly.

Business model (≤15 words): One-time handoff fee plus a small annual maintenance fee per organization.

---
id: s3-ideator-novel-T4-02-r2#03
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
---

# Town Hall Filing and Insurance Copilot

One-liner (≤20 words): The same agent that files a town's court and DMV records also proves its real security posture to its insurer.

Buyer and niche (≤25 words): Municipal clerks in small towns who file court documents, DMV lienholder lookups and guardian accountings, and also renew cyber insurance.

Pain and evidence (≤40 words; cite the pain dossier file): Clerks already log into no-API town portals to file records; separately, towns with no security staff "unplugged everything" after one incident, and owners "don't even know what half" the 60-150 insurance-renewal questions ask. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The agent that already logs into the town's admin consoles to file DMV and court records checks those same consoles' MFA and backup settings, then fills the cyber-insurance renewal questionnaire from what it actually finds, instead of the clerk guessing "yes" and risking a denied claim later.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use operates multiple admin consoles and government portals in one long-running session. TC-02.

Demo moment (≤20 words): Agent files a DMV lookup, then answers three insurance questions by reading that console's real MFA status, live.

Business model (≤15 words): Per-town monthly fee, bundling filing and insurance-evidence features.

---
id: s3-ideator-novel-T4-02-r2#04
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
---

# Mandate Discovery Radar

One-liner (≤20 words): Tells a tiny org every recurring filing and security attestation it legally owes, before a fine or revocation surfaces it.

Buyer and niche (≤25 words): Treasurers, clerks and office managers at small nonprofits and firms who don't know which mandates already apply to them.

Pain and evidence (≤40 words; cite the pain dossier file): "Many of these orgs never knew the e-Postcard existed" before automatic revocation, and separately only 55% of small email senders had heard of the mandatory SPF/DKIM/DMARC rules that now block their mail. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The org enters its type, states of operation, revenue and email volume; the agent cross-references a maintained library of statutes and mandate pages against that profile, and returns the specific filings and attestations it owes, with deadlines and the portal for each, refreshed as rules change.

Why now (≤25 words; name the specific capability): 1M-token context holds an entire mandate library alongside one org's profile in a single check. TC-25.

Demo moment (≤20 words): Enter a small charity's profile; the agent surfaces two filings the treasurer had never heard of, live.

Business model (≤15 words): Low annual fee per organization, cheaper than one missed-filing penalty.

---
id: s3-ideator-novel-T4-02-r2#05
track: novel
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T4-02-r2
---

# Ward Payee-Change Sentinel

One-liner (≤20 words): Checks every new bank-detail change on a ward's bills against known vendors before a guardian pays, and logs it.

Buyer and niche (≤25 words): Court-appointed guardians, conservators and daily money managers who both pay a ward's bills and must file the annual accounting.

Pain and evidence (≤40 words; cite the pain dossier file): Guardians must produce a court-ready annual accounting with no discrepancies, while nationally $2.9B a year is lost when a spoofed vendor email changes a payee account and payment goes out before anyone calls back. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Every incoming bill or payee-change request is checked against the ward's known vendor and account history; anything new or altered is held and flagged for a callback before payment, and every approved payment is logged straight into the running annual accounting the guardian already keeps.

Why now (≤25 words; name the specific capability): Cheap high-volume document extraction makes checking every bill's payee details against history affordable at guardian scale. TC-30.

Demo moment (≤20 words): A spoofed "updated bank details" email arrives; the agent holds the payment and flags the mismatch, live.

Business model (≤15 words): Per-ward monthly fee, priced against the fraud losses it prevents.

<!-- COMPLETE -->
