## Cards

---
id: s3-ideator-balanced-T3-02-r3#01
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r3
---

# Migration Cutover Sign-Off Packet

One-liner (≤20 words): A single printed packet lists every mismatched record before a system migration and requires a signature to proceed.
Buyer and niche (≤25 words): Dental and veterinary office managers cutting over between practice-management systems such as Dentrix, Eaglesoft or Cornerstone.
Pain and evidence (≤40 words; cite the pain dossier file): Paid conversions fail and imaging keeps its own patient IDs "matched by hand"; one migration was "a complete screw up... start from scratch on everything." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool compares the source and destination databases, then prints a sign-off packet listing every mismatch, duplicate and missing record with checkboxes. The office manager reviews the paper, signs it, and only that signature triggers the actual system cutover — nothing switches automatically.
Why now (≤25 words; name the specific capability): 1M-token context windows compare a whole practice database in one pass cheaply enough to reprint the packet right up to cutover morning.
Demo moment (≤20 words): A printed packet flags three mismatches; the manager signs it live; only then does the mock cutover toggle flip.
Business model (≤15 words): Flat fee per migration project.

---
id: s3-ideator-balanced-T3-02-r3#02
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r3
---

# Policy Diff Initialing Sheet

One-liner (≤20 words): Prints each day's cross-system policy mismatches as a paper sheet the CSR initials line by line before any write happens.
Buyer and niche (≤25 words): CSRs and account managers at insurance agencies running Applied Epic or AMS360 alongside separate rating and quoting tools.
Pain and evidence (≤40 words; cite the pain dossier file): Agencies do "double and triple entry" across rating tools and the AMS; one cancellation that never reached Epic caused a reported "$42,000 policy loss." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): Nightly, the agent diffs the AMS against the rating tool and prints a numbered action sheet, one line per discrepancy (cancel, reinstate, endorse). The CSR reviews the paper and initials only the lines they approve. A scanner reads the initials back, and the agent writes back only those approved lines.
Why now (≤25 words; name the specific capability): Mistral OCR 3 reads handwritten initials and marks back reliably, claiming a 74% win rate over its predecessor.
Demo moment (≤20 words): Print the sheet, initial two of three lines, scan it; the agent executes only the two approved writes live.
Business model (≤15 words): Per-seat monthly subscription sold to the agency.

---
id: s3-ideator-balanced-T3-02-r3#03
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r3
---

# Property Reconciliation Sign-Off Packet

One-liner (≤20 words): A monthly printed reconciliation packet for owners; nothing posts into AppFolio until the approval page is signed.
Buyer and niche (≤25 words): Property bookkeepers and owners running Yardi or AppFolio portfolios where Yardi data only leaves as flat files.
Pain and evidence (≤40 words; cite the pain dossier file): Yardi data "leaves by SFTP or flat file" with no live write-back, and on AppFolio "credit card transactions still have to be entered manually." (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool pulls the Yardi flat-file export and the AppFolio ledger, matches transactions, and prints a reconciliation packet with an approval page listing every unposted or mismatched item. The owner or senior bookkeeper signs the page; only the signed line items get posted into AppFolio afterward.
Why now (≤25 words; name the specific capability): Document extraction at about $2 per 1,000 pages makes regenerating the packet every night affordable enough to run continuously.
Demo moment (≤20 words): A printed packet flags two unposted transactions; the owner signs the approval page; the agent posts only those two.
Business model (≤15 words): Monthly fee per managed property portfolio.

---
id: s3-ideator-balanced-T3-02-r3#04
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r3
---

# Vendor Fee Dispute Packet

One-liner (≤20 words): Drafts a certified paper dispute letter with invoice exhibits for a DMS fee hike, mailed only after the controller signs it.
Buyer and niche (≤25 words): Dealer group controllers managing several rooftops on CDK or Reynolds, each paying stacked monthly integration fees.
Pain and evidence (≤40 words; cite the pain dossier file): Fees stack per location and tool, described as a "blatant extortion racket," and a Reynolds xTime fee "recently increased to $465 per month" with no notice explained. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool reads twelve months of invoices against the underlying contract, then drafts a formal dispute letter with an attached invoice-comparison exhibit and contract-clause citations, ready to print and send by certified mail. The controller reviews and signs before it goes out, since a formal dispute can't be unsent.
Why now (≤25 words; name the specific capability): 1M-token context loads a full year of invoices plus the contract in one pass to draft a citation-accurate letter.
Demo moment (≤20 words): Two months of sample invoices in; a printed dispute letter flags one increase; the controller clicks "approve to mail."
Business model (≤15 words): Percentage of fees recovered, or a flat fee per dispute.

---
id: s3-ideator-balanced-T3-02-r3#05
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-02-r3
---

# Pending-Lab Routing Slip

One-liner (≤20 words): Prints a physical routing slip for each pending lab result; a vet must sign it before the case closes in Cornerstone.
Buyer and niche (≤25 words): Veterinary technicians and vets on Cornerstone running in-house or IDEXX lab instruments that don't sync with the practice system.
Pain and evidence (≤40 words; cite the pain dossier file): Cornerstone "does not communicate with our lab machines"; techs get no completion alert and keep handwritten pending-test lists outside the system instead. (src: outputs/s3-ideate/pain/T3-dossier.md)
How it works (≤50 words): The tool watches the lab instrument feed and IDEXX portal; the moment a result lands, it extracts the values and prints a routing slip that clips to the patient's paper chart. The vet reviews the result on paper and signs the slip; only that signature lets the agent close the case and file the result into Cornerstone.
Why now (≤25 words; name the specific capability): Cheap document extraction (Mistral OCR 3) reads lab-instrument printouts and portal screens reliably at a fraction of a cent per page.
Demo moment (≤20 words): A mock lab result triggers an auto-printed slip; the vet signs it; the case closes into mock Cornerstone live.
Business model (≤15 words): Per-clinic monthly subscription, priced by connected lab instrument count.

<!-- COMPLETE -->
