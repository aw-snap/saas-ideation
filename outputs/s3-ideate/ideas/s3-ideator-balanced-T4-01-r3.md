## Cards

---
id: s3-ideator-balanced-T4-01-r3#01
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r3
---

# Charity Registration Verify-By-Phone

One-liner (≤20 words): Treasurers call one number to file or check state charity renewals; every status comes straight from the live state portal.

Buyer and niche (≤25 words): Treasurers of small nonprofits registering to solicit donations across many states, with no compliance staff.

Pain and evidence (≤40 words): Registration means re-keying data across 38-41 state portals, and a paid vendor "routinely dropped the ball" while the org "carries the risk" of a failure nobody sees. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The treasurer calls a dedicated line, dictates renewal details or asks "is Texas filed." The agent files or re-queries that state's live portal in real time, then reads back the portal's own confirmation number and current status aloud, never a cached or assumed answer.

Why now (≤25 words): Claude for Chrome checks live portal status while gpt-realtime holds the phone conversation and reads the result back naturally [TC-03, TC-27].

Demo moment (≤20 words): Live: caller asks "is our California renewal done," agent queries the live registry and reads back today's real confirmation number.

Business model (≤15 words): Per-state filing fee, plus a small monthly fee for the phone verification line.

---
id: s3-ideator-balanced-T4-01-r3#02
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r3
---

# Pawn Shop Voicemail Police Filer

One-liner (≤20 words): The clerk leaves a nightly voicemail of the day's transactions; the callback reads back the police portal's own confirmation number.

Buyer and niche (≤25 words): Pawn shop owners and counter clerks required to file daily transaction reports with local police or LeadsOnline.

Pain and evidence (≤40 words): California pawnbrokers must report "by noon of the following day"; a knowing miss is a crime carrying fines up to $25,000 and license revocation. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The clerk calls a closing-time line and dictates each transaction: item, seller ID, price. The agent transcribes, submits to the police portal or LeadsOnline, then calls back within minutes reading the portal's actual confirmation number and filing timestamp, not an assumed success.

Why now (≤25 words): Streaming speech recognition transcribes dictated transactions live, and computer-use agents fill the police portal reliably for one bounded task [TC-31, TC-02].

Demo moment (≤20 words): Live: dictate three transactions by phone, hear the callback read the real portal confirmation number seconds later.

Business model (≤15 words): Flat monthly fee per shop location.

---
id: s3-ideator-balanced-T4-01-r3#03
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r3
---

# Tow Yard Deadline Hotline

One-liner (≤20 words): The clerk calls in a VIN; the agent reads back the exact notice deadline quoted straight from that state's statute.

Buyer and niche (≤25 words): Tow yard and impound lot clerks handling non-consensual tows, often across neighboring states with different notice rules.

Pain and evidence (≤40 words): Notice windows vary by state, and "missing either notification invalidates your entire lien sale," leaving the yard owing the vehicle's full market value. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The clerk phones in the VIN and tow date. The agent looks up owner and lienholder through the DMV portal, then reads back the precise statutory deadline quoted word-for-word from that state's current lien-law text, so the clerk can verify it against the actual rule, not a cached summary.

Why now (≤25 words): A 1M-token context window holds full state statute text alongside a live DMV lookup, so each quote is checked, not memorized [TC-25, TC-02].

Demo moment (≤20 words): Live: call in a VIN, hear the agent quote Florida's "7 business days" straight from the statute page.

Business model (≤15 words): Per-vehicle fee, priced well under the cost of one voided lien sale.

---
id: s3-ideator-balanced-T4-01-r3#04
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r3
---

# Court Filing Pre-Check Line

One-liner (≤20 words): A paralegal calls in what a filing contains; the agent checks it against the court's own live rules page aloud.

Buyer and niche (≤25 words): Solo and small-firm attorneys and paralegals e-filing across multiple counties, each with its own changing technical requirements.

Pain and evidence (≤40 words): "Approximately 10% of filings are rejected," filers are "billed anyway," and one filer's writ was delayed "by approximately one month" over a missed rule. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The paralegal calls a line, names the court, and describes the packet's contents aloud. The agent checks it against that court's current technical-requirements page and reads back exactly which required item is missing, citing the rule section, before the packet ever reaches the e-filing service.

Why now (≤25 words): A 1M-token context window holds an entire court's rules page for word-level cross-check inside one live phone call [TC-25].

Demo moment (≤20 words): Live: describe a packet missing proof of service, hear the agent cite the exact missing-rule clause aloud.

Business model (≤15 words): Per-filing fee, cheaper than reworking one rejected filing.

---
id: s3-ideator-balanced-T4-01-r3#05
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: prosumer, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-01-r3
---

# Guardian Ledger Voicemail

One-liner (≤20 words): A guardian leaves a voice note per expense; before filing, the agent reads back only totals the real bank record confirms.

Buyer and niche (≤25 words): Court-appointed guardians, conservators and daily money managers preparing annual accountings for one or several wards.

Pain and evidence (≤40 words): Accountings are due "on or before the anniversary date," courts recommend logging "weekly or monthly," and discrepancies can trigger a hearing; the burden repeats every year, per ward. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The guardian leaves a short voice note after each expense all year ("groceries, 42 dollars, March 3"). At filing time, the agent matches every dictated entry against the ward's actual bank statement, reads back any entry it cannot match, and only assembles line items confirmed by a real transaction.

Why now (≤25 words): Streaming voice transcription plus cheap document extraction cross-check dictated entries against bank statement scans at filing time [TC-31, TC-30].

Demo moment (≤20 words): Live: dictate four expenses by voice, agent flags the one with no matching bank transaction before assembling the packet.

Business model (≤15 words): Per-ward annual subscription, sold directly to guardians and daily money managers.

<!-- COMPLETE -->
