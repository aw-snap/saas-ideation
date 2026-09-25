---
id: I-2001
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
raw_id: s3-ideator-novel-T6-01-r3#01
merged: []
---

# Fetch Escrow for Walled Storefronts

One-liner (≤20 words): A neutral escrow holds an agent's payment and only releases it once a real fetch is proven.

Buyer and niche (≤25 words): Operators of inventory-sync and price-watching agents that need repeated access to small maker storefronts behind pay-per-crawl walls.

Pain and evidence (≤40 words; cite the pain dossier file): Site owners eat surprise bandwidth bills and can't tell legitimate agents apart, while agents get billed per call with no shared spend view and no way to dispute a bad fetch. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The agent deposits funds into escrow before a crawl session; the site's pay-per-crawl meter signs a proof-of-fetch receipt per request; escrow releases the exact metered amount only on a matching signed receipt, and either side can freeze a disputed charge for review before it settles.

Why now (≤25 words; name the specific capability): Cloudflare's pay-per-crawl billing and x402 micropayments now exist but leave verification and disputes to each site to build alone.

Demo moment (≤20 words): Live fetch triggers a meter tick; escrow releases $0.01 on a matching receipt, then blocks a mismatched one.

Business model (≤15 words): Small percentage fee on escrowed transaction volume, billed to the agent side.

---
id: I-2002
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
raw_id: s3-ideator-novel-T6-01-r3#02
merged: []
---

# Trusted Agent Bond

One-liner (≤20 words): A purchasing agent posts a refundable bond so a small merchant can approve it instantly without knowing it.

Buyer and niche (≤25 words): Operators of shopping agents that place orders on small storefronts too small to run enterprise fraud-screening plans.

Pain and evidence (≤40 words; cite the pain dossier file): Card-testing bursts leave sellers with a pile of fraudulent orders while strong bot protection sits behind $2000+/month plans, so merchants distrust fast automated checkouts and legitimate agents get wrongly held or blocked with them. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before checkout, the agent posts a small bond through its card-network agent token; a bonding service scores the agent's verified identity and holds the bond. The merchant auto-approves bonded orders instantly; the bond is released after settlement or forfeited to the merchant if the order reverses as fraud.

Why now (≤25 words; name the specific capability): Visa and Mastercard shipped agent-specific checkout tokens in 2025 that bind a card to one verified agent identity, making a bond enforceable.

Demo moment (≤20 words): Two near-simultaneous checkouts arrive; the bonded agent's order auto-approves while the unbonded fast checkout is held live.

Business model (≤15 words): Per-order bonding fee charged to the agent operator, refunded on clean settlement.

---
id: I-2003
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
raw_id: s3-ideator-novel-T6-01-r3#03
merged: []
---

# Mandate-Match Clearinghouse

One-liner (≤20 words): Before a wholesale reorder commits, a neutral checker confirms the agent's mandate still matches the supplier's live cart.

Buyer and niche (≤25 words): Operators of restocking agents that reorder clay, glaze or packaging from small wholesale suppliers with no lasting business relationship yet.

Pain and evidence (≤40 words; cite the pain dossier file): Payment protocols prove authorization for one purchase but do not aggregate a session, so a supplier can't trust an agent's claimed order and an agent can't trust a supplier's page hasn't quietly changed price or quantity. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The agent submits a signed intent mandate naming item, price ceiling and quantity. The clearinghouse independently revisits the supplier's live cart page right before submission and compares it to the mandate; on any mismatch it blocks the purchase and alerts both the agent operator and the supplier instead of trusting either claim.

Why now (≤25 words; name the specific capability): Agent Payments Protocol mandates give a signed, checkable claim that a cheap model can compare against the live page in real time.

Demo moment (≤20 words): Agent submits a mandate at $38; live page shows $44; clearinghouse blocks the buy and shows the mismatch.

Business model (≤15 words): Per-check fee paid by the ordering agent's operator.

---
id: I-2004
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
raw_id: s3-ideator-novel-T6-01-r3#04
merged: []
---

# Proof-of-Solve Marketplace

One-liner (≤20 words): A blind escrow matches stuck agents to anonymous human solvers, paying out only when the wall actually accepts the answer.

Buyer and niche (≤25 words): Operators of restocking and price-checking agents that repeatedly stall on wholesale-supplier CAPTCHAs and can't afford a bulk solver contract.

Pain and evidence (≤40 words; cite the pain dossier file): The best agents solve only 40% of CAPTCHAs against 93.3% for humans, but paid solver services cost per solve with no proof the solve worked, and solvers have no guarantee of being paid after solving. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The agent posts a solve bounty with funds locked in escrow; a solver claims it and sees only the cropped puzzle image, never the underlying account or session; the solver submits an answer token, and escrow releases payment to the solver only once the target site itself accepts that token.

Why now (≤25 words; name the specific capability): x402 micropayments let escrow release funds instantly and automatically keyed to a verifiable acceptance event, not a blind upfront payment.

Demo moment (≤20 words): A live CAPTCHA is posted; a solver clears it in seconds; escrow auto-releases payment the instant the site accepts it.

Business model (≤15 words): Take-rate on each escrowed solve fee, charged to the requesting agent.

---
id: I-2005
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
raw_id: s3-ideator-novel-T6-01-r3#05
merged: []
---

# Two-Sided Success Ledger

One-liner (≤20 words): Agent and supplier each post their own record of an order, and only mismatches ever need a human.

Buyer and niche (≤25 words): Operators of restocking agents placing repeat wholesale orders with small suppliers whose own order portals are flaky or slow to update.

Pain and evidence (≤40 words; cite the pain dossier file): Agents falsely claim success on 45-48% of runs, LLM judges catch only 65% of that, and suppliers can't tell a real order-placed claim from a failed one without independently checking their own flaky systems. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): After placing an order, the agent posts its claimed order record to a shared ledger; the supplier's order-management system posts its own independent record. Matching entries auto-settle and build a trust score for both sides; mismatches are flagged and routed to a human on both sides before anything ships or gets marked done.

Why now (≤25 words; name the specific capability): Cheap long-context models cross-check full order traces against source pages for pennies, cutting reconciliation cost to near zero.

Demo moment (≤20 words): Agent claims order #482 placed; supplier's own portal shows nothing; the ledger flags the mismatch and pages both sides live.

Business model (≤15 words): Per-transaction fee split between the agent operator and the subscribing supplier.

---
id: I-2006
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
raw_id: s3-ideator-novel-T2-02-r1#01
merged: []
---

# The Non-EU Firm's Peppol Reader

One-liner (≤20 words): Turns machine-only UBL e-invoice XML from EU vendors into a checked, human-readable record automatically.

Buyer and niche (≤25 words): Small professional-services firms outside the EU mandate zone that still receive structured e-invoices from EU-based software and service vendors.

Pain and evidence (≤40 words; cite the pain dossier file): Peppol UBL is machine-only; many suppliers don't add a PDF, so staff can't read what they received and can't verify it against the contract. (src: outputs/s3-ideate/pain/T2-dossier.md, P11)

How it works (≤50 words): Watches the inbox for `.xml` attachments, parses the UBL structure, renders a plain-language summary, and cross-checks amount, VAT and line items against the matching purchase order or contract text loaded into the same session, flagging any mismatch before approval.

Why now (≤25 words; name the specific capability): 1M-token context lets one session hold the invoice XML plus the full vendor contract for a live discrepancy check.

Demo moment (≤20 words): Drop a raw XRechnung XML file in; watch a readable invoice appear next to a flagged contract-price mismatch, live.

Business model (≤15 words): Per-seat monthly subscription for firms with EU vendors; free tier for under 10 invoices/month.

---
id: I-2007
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
raw_id: s3-ideator-novel-T2-02-r1#03
merged: [s3-ideator-balanced-T2-02-r1#04]
---

# Peppol Ghost-Check

One-liner (≤20 words): Confirms your e-invoices actually arrived, because Belgium's Peppol network never tells you if they didn't.

Buyer and niche (≤25 words): Belgian SMEs and their accountants issuing invoices over Peppol since 1 January 2026, unsure whether registration or delivery is actually working.

Pain and evidence (≤40 words; cite the pain dossier file): Many SMEs assume they're on Peppol without confirming active registration, and can't tell whether sent invoices arrived; fines began around April 2026. (src: outputs/s3-ideate/pain/T2-dossier.md, P12)

How it works (≤50 words): A browser agent logs into the firm's Peppol access point on a schedule, checks registration status, walks the delivery log for every invoice issued that week, and cross-references against the accounting system's sent list, surfacing any invoice with no confirmed delivery receipt before the payment term lapses.

Why now (≤25 words; name the specific capability): Skyvern-class browser agents already handle logins and status polling on portals that expose no usable API, at production reliability.

Demo moment (≤20 words): Agent flags one invoice as sent, never delivered, from a live access-point portal, three weeks before its due date.

Business model (≤15 words): Monthly fee per access point connection, resold by Belgian bookkeeping firms to their client base.

---
id: I-2008
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: drafter-dialogue, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
raw_id: s3-ideator-novel-T2-02-r1#04
merged: []
---

# The Missing-Field Email Negotiator

One-liner (≤20 words): Reads the rejection code on a bounced e-invoice, writes the exact vendor email that fixes it, and resubmits.

Buyer and niche (≤25 words): Small firms in France and Germany issuing or receiving structured e-invoices that get bounced for missing bank data or SIREN mismatches.

Pain and evidence (≤40 words; cite the pain dossier file): Software-generated XRechnung fails the validator with no vendor fix date; French platforms auto-reject bad SIREN/SIRET or missing fields, stopping the payment cycle until someone corrects it. (src: outputs/s3-ideate/pain/T2-dossier.md, P13)

How it works (≤50 words): Parses the platform's rejection code against a lookup of what each code actually requires, drafts a specific, ready-to-send email to the vendor's AP contact naming the missing field, tracks the reply thread, and resubmits the corrected invoice to the validator once the fix arrives.

Why now (≤25 words; name the specific capability): In-browser agents now draft, send and track email threads inside the user's real inbox, closing the loop without a separate ticketing tool.

Demo moment (≤20 words): Feed it a rejection code; it produces the vendor email, a mock reply arrives, and the corrected invoice resubmits itself.

Business model (≤15 words): Per-resolved-rejection fee, capped by a monthly plan for firms issuing over 50 invoices.

---
id: I-2009
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
raw_id: s3-ideator-novel-T2-02-r1#05
merged: []
---

# The Persistent Login Chain Agent

One-liner (≤20 words): Logs into every vendor and utility portal overnight, staying you, and drops new invoices into one folder.

Buyer and niche (≤25 words): Small firms whose invoices arrive scattered across a dozen vendor and utility self-service portals instead of email.

Pain and evidence (≤40 words; cite the pain dossier file): Paperwork arrives after a purchase is already approved, so someone keeps a manual list of what's still missing and chases it every month-end. (src: outputs/s3-ideate/pain/T2-dossier.md, P7)

How it works (≤50 words): Using the firm's own saved logins, a browser agent visits each vendor's billing portal nightly, checks for new statements or invoices since the last run, downloads them, and posts a one-line summary of what showed up and what's still overdue into the AP inbox, replacing the manual watch-list.

Why now (≤25 words; name the specific capability): Sonnet 4.5 computer use sustains multi-step portal tasks for hours, reliable enough to run unattended on a schedule.

Demo moment (≤20 words): Kick off an overnight run; it returns with three new invoices fetched and one vendor flagged as still missing.

Business model (≤15 words): Priced per connected portal per month, undercutting a part-time AP clerk's hours.

---
id: I-2010
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
raw_id: s3-ideator-novel-T2-02-r1#07
merged: [s3-ideator-balanced-T2-02-r1#07]
---

# The France PDP Matchmaker

One-liner (≤20 words): Shortlists and auto-connects one of France's 150 registered e-invoicing platforms before the September 2027 cutoff hits.

Buyer and niche (≤25 words): French micro-entrepreneurs and small firms who must pick a plateforme agréée or lose the ability to invoice at all.

Pain and evidence (≤40 words; cite the pain dossier file): 150 registered platforms exist with no default choice; without a connected one, a firm will no longer be able to issue or receive invoices. (src: outputs/s3-ideate/pain/T2-dossier.md, P14)

How it works (≤50 words): Asks a handful of questions about invoice volume, existing accounting software and sector, ranks the registry of approved platforms against that profile, then drives the chosen platform's own onboarding portal, filling SIREN, bank and accounting-software fields, so the firm finishes connected instead of holding a comparison spreadsheet.

Why now (≤25 words; name the specific capability): Browser-use style agents already automate multi-step web onboarding flows, letting the matchmaker finish the signup, not just recommend it.

Demo moment (≤20 words): Answer three questions; watch the agent fill and submit a real platform's onboarding form end to end.

Business model (≤15 words): One-time setup fee plus a small annual plan check as mandate details shift.

---
id: I-2011
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r1
raw_id: s3-ideator-novel-T2-02-r1#08
merged: []
---

# The Client-Matter Invoice Router

One-liner (≤20 words): Reads each vendor invoice and routes it straight to the client matter it should be billed against.

Buyer and niche (≤25 words): Small professional-services firms (law, consulting) that pay expert witnesses, translators and process servers and must recover those costs per client.

Pain and evidence (≤40 words; cite the pain dossier file): Unknown suppliers get coded unknown by capture tools, and line-item detail needed for recovery costs extra or gets skipped, leaving someone to fix coding by hand every time. (src: outputs/s3-ideate/pain/T2-dossier.md, P5)

How it works (≤50 words): Reads the invoice alongside the firm's open matter list and prior billing history, proposes the matching client matter and cost code, learns firm-specific vendor-to-matter patterns over time, and only escalates the invoice to a person when no matter is a confident match, instead of defaulting everything to unknown.

Why now (≤25 words; name the specific capability): Long-context models hold the full open-matter list alongside the invoice in one pass, matching by content rather than a fixed rule table.

Demo moment (≤20 words): Feed in a court-reporter invoice; it proposes the correct matter code and cost category in under five seconds.

Business model (≤15 words): Priced per attorney seat, sold as a billable-cost-recovery add-on to practice management software.

---
id: I-2012
track: novel
lineage: ai-native
territory: T9
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
raw_id: s3-ideator-novel-T9-01-r3#01
merged: []
---

# Discovery Cleared, Files Unseen

One-liner (≤20 words): Opposing law firms each run a local model that verifies redactions match a shared privilege log, files never sent.

Buyer and niche (≤25 words): Solo and small-firm litigators exchanging discovery with opposing counsel they have no way to vet or trust on confidentiality.

Pain and evidence (≤40 words; cite the pain dossier file): A federal ruling held AI-drafted material can lose privilege, and solo and small-firm lawyers often cannot get counterparties vetted, yet every discovery exchange hands files to an unvetted opposing firm. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Each firm loads its own production into a local model that checks every page against a shared, court-filed privilege log; only pass/fail verdicts per page cross firms, and the two verdict sets are diffed to surface disputes, with page contents staying on each side's own machine throughout.

Why now (≤25 words; name the specific capability): gpt-oss-20b runs privilege-log matching locally in 16GB RAM, so a production never needs uploading to reach cloud-scale review.

Demo moment (≤20 words): Load two mock productions; each side's local check flags one page the other missed redacting, live, no file transferred.

Business model (≤15 words): $15 per page batch cleared without dispute, billed to both firms' discovery budget.

---
id: I-2013
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
raw_id: s3-ideator-novel-T9-01-r3#02
merged: []
---

# Claim-Ready Session Proof

One-liner (≤20 words): A local model turns a therapy session into an insurer-ready attestation of billed content, transcript never uploaded.

Buyer and niche (≤25 words): Solo therapists billing insurers who demand proof a session covered required content, when neither side wants the other holding the transcript.

Pain and evidence (≤40 words; cite the pain dossier file): A default-on AI scribe left one client feeling completely violated, while therapists already spend 10-20 hours a week on notes insurers can still reject without proof of content. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): After a session, a local model checks the never-uploaded session audio against the insurer's required content categories for the billed code, then outputs a signed pass/fail attestation per category; the insurer sees only the attestation and can independently re-verify its checksum, never the transcript itself.

Why now (≤25 words; name the specific capability): On-device transcription paired with a local reasoning model generates a verifiable attestation without any audio reaching a server.

Demo moment (≤20 words): Feed a mock session recording; a one-page insurer attestation appears in under a minute, transcript never saved.

Business model (≤15 words): $2 per claim attestation the insurer accepts without a records request.

---
id: I-2014
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
raw_id: s3-ideator-novel-T9-01-r3#03
merged: []
---

# Filed And Accepted, Or Free

One-liner (≤20 words): A local model preps a return from a client's documents, charging only once the IRS actually accepts the e-file.

Buyer and niche (≤25 words): Solo CPAs and EAs whose clients fear cloud handling of tax data as much as the CPA fears incomplete client documents.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting return data into cloud AI risks a §7216 violation carrying up to a year in prison, while clients hand over incomplete documents during the same crunch that already drives 80-hour weeks. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The client hands documents to the CPA's own machine, not the cloud; a local model extracts data and flags missing forms before the client leaves, drafts the return, and existing e-file software submits it. The fee only charges once the IRS confirms acceptance, visible to both in the same local log.

Why now (≤25 words; name the specific capability): Local multimodal extraction paired with a capable open-weight reasoning model make full return prep viable on a solo CPA's own laptop.

Demo moment (≤20 words): Scan a document missing a form live; the tool flags it before submission, then shows the IRS acceptance receipt.

Business model (≤15 words): $12 per IRS-accepted e-file, nothing charged on rejection.

---
id: I-2015
track: novel
lineage: ai-native
territory: T9
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
raw_id: s3-ideator-novel-T9-01-r3#04
merged: []
---

# Conflict Check, Roster Unseen

One-liner (≤20 words): Two solo law firms check for a conflict of interest without either exposing its client list to the other.

Buyer and niche (≤25 words): Solo and small-firm lawyers referring cases or forming co-counsel arrangements with firms they have never vetted for confidentiality practices.

Pain and evidence (≤40 words; cite the pain dossier file): Solo and small-firm lawyers often cannot get a counterparty vetted, yet referring a case means trusting an unvetted firm with a client's identity before any conflict check happens at all. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Each firm's local model hashes its own client and opposing-party names into anonymized tokens; the two firms exchange only token sets, and each local model reports whether any token matches, revealing a conflict exists without either firm learning the other's roster unless a match is confirmed.

Why now (≤25 words; name the specific capability): Fast local inference engines make same-day, on-device matching practical instead of a manual, unpaid conflicts memo.

Demo moment (≤20 words): Run two mock client lists sharing one name; only that match surfaces, nothing else about either list shown.

Business model (≤15 words): $9 per referral cleared with a confirmed conflict-free result.

---
id: I-2016
track: novel
lineage: ai-native
territory: T9
cell: { buyer: B2B, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r3
raw_id: s3-ideator-novel-T9-01-r3#05
merged: []
---

# Deal Diligence Without Handover

One-liner (≤20 words): Buyer's and seller's accountants each verify the other's financial claims locally, without handing over the underlying ledger.

Buyer and niche (≤25 words): Solo accountants representing either side of a small-business sale who must vet the other side's books without either fully trusting the other.

Pain and evidence (≤40 words; cite the pain dossier file): Solo practitioners lack the procurement teams, information-security officers and vendor counsel larger firms use to vet a counterparty, yet a sale requires exactly that vetting of the other side's numbers before closing. (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Each accountant's local model summarizes their own client's ledger against the deal's required schedule; the two summaries are exchanged and each local model checks the other's summary for internal consistency and flags gaps, while the full underlying ledgers never leave either accountant's own machine.

Why now (≤25 words; name the specific capability): A local model's large context window holds a small business's full ledger while reasoning over deal schedules offline.

Demo moment (≤20 words): Load two mock ledgers; summaries exchange and one inconsistency in the seller's inventory figure is flagged live.

Business model (≤15 words): $500 per deal that closes using the verified schedules, split between both accountants' clients.

---
id: I-2017
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
raw_id: s3-ideator-novel-T9-01-r2#01
merged: []
---

# E-Filing That Never Leaves Home

One-liner (≤20 words): A local model checks a court filing against that court's rules, then submits it directly, skipping paid intermediaries.

Buyer and niche (≤25 words): Solo and small-firm attorneys who file across multiple courts and currently pay e-filing intermediaries that still get filings rejected.

Pain and evidence (≤40 words; cite the pain dossier file): About 10% of filings are rejected by e-filing intermediaries that bill anyway and keep a copy of the document, while privilege exposure makes any third party handling case files risky. (src: outputs/s3-ideate/pain/T9-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A local open-weight model checks a filing against the target court's published rules and flags missing exhibits or formatting errors, then a browser agent submits directly through the court's own portal, keeping the document off any third-party intermediary's servers.

Why now (≤25 words; name the specific capability): gpt-oss-20b runs offline in 16GB RAM, so a filing check never has to leave the attorney's laptop before it is sent to the court.

Demo moment (≤20 words): Load a sample filing missing one exhibit; the tool flags it, then submits the corrected version to a court portal.

Business model (≤15 words): $99/month per attorney seat, priced below per-filing intermediary fees.

---
id: I-2018
track: novel
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: [A-seed-03-tech-1, A-seed-03-mech-1]
source_task: s3-ideator-novel-T9-01-r2
raw_id: s3-ideator-novel-T9-01-r2#02
merged: []
---

# Guardian's Ledger, Kept Local

One-liner (≤20 words): A local voice agent turns a guardian's year-round narrated transactions into a court-ready annual accounting, offline.

Buyer and niche (≤25 words): Solo elder-law attorneys and court-appointed guardians who must log a ward's every transaction all year for one fixed annual filing.

Pain and evidence (≤40 words; cite the pain dossier file): Guardians must file an annual accounting on a fixed date and are advised to log transactions weekly all year, yet ward financial records are as sensitive as any client file a solo practitioner must protect. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Throughout the year the guardian narrates each transaction to a local voice agent; a local model extracts dated, categorized, confidence-tagged ledger entries and stores them only on the guardian's machine, then compiles them into the court's required accounting format on the filing deadline.

Why now (≤25 words; name the specific capability): Open-weight speech-to-text gives fast local transcription, and gpt-oss-20b runs offline in 16GB, so no ward's bank data reaches a server.

Demo moment (≤20 words): Speak three mock transactions aloud; a structured, dated ledger entry appears for each, tagged with confidence.

Business model (≤15 words): $39/month per guardian or attorney, cheaper than the accountant fee it replaces.

---
id: I-2019
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
raw_id: s3-ideator-novel-T9-01-r2#03
merged: []
---

# One CPA, Many Nonprofits, Local

One-liner (≤20 words): A local model prepares each nonprofit client's 990-N and state renewals from financial records that never leave the CPA's machine.

Buyer and niche (≤25 words): Solo CPAs and EAs who serve several small nonprofit clients and currently key each state's charitable registration renewal by hand.

Pain and evidence (≤40 words; cite the pain dossier file): Missing the 990-N three years running triggers automatic revocation, and 38-41 states each demand separate re-keyed registration, while pasting client return data into cloud AI risks a criminal 7216 violation. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): The CPA's own machine runs a local model that reads each nonprofit client's financial records, drafts the 990-N e-Postcard and every state's registration renewal, and tracks each state's due date itself, so filings never rely on a paid registration agent that can silently fail.

Why now (≤25 words; name the specific capability): gpt-oss-20b reasons at near o3-mini level inside 16GB RAM, letting one CPA's laptop handle multiple clients' filings without a cloud upload.

Demo moment (≤20 words): Load three mock nonprofit files; three drafted e-Postcards and a state-renewal calendar appear in under a minute.

Business model (≤15 words): $149/month per CPA seat, covering unlimited nonprofit clients filed.

---
id: I-2020
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
raw_id: s3-ideator-novel-T9-01-r2#04
merged: []
---

# Checks What The Filing Agent Did

One-liner (≤20 words): A local agent logs into each state portal itself to confirm a paid filing agent's claimed work actually happened.

Buyer and niche (≤25 words): Solo attorneys and accountants managing compliance filings for guardianship and nonprofit clients through a paid registration agent they cannot verify.

Pain and evidence (≤40 words; cite the pain dossier file): A paid registration agent routinely dropped the ball on completing work and a missed summons went unnoticed, yet verifying filings elsewhere means handing client entity data to another cloud vendor. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): Using the practitioner's own saved logins, a local browser agent visits each state or court portal overnight, reads the actual filing status, compares it against what the paid agent billed for, and flags any mismatch, all without sending login credentials to a third-party service.

Why now (≤25 words; name the specific capability): Browser agents now run checks inside the practitioner's own logged-in session at production reliability, unlike a third-party portal login.

Demo moment (≤20 words): Point it at a mock state portal; it finds one filing the paid agent never actually submitted, flagged red.

Business model (≤15 words): $49/month flat fee per practitioner seat.

---
id: I-2021
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
raw_id: s3-ideator-novel-T9-01-r2#05
merged: []
---

# Deadline Memory That Outlives Staff

One-liner (≤20 words): A local model remembers every client's filing deadlines and AI-use consent status even after the staffer who knew them leaves.

Buyer and niche (≤25 words): Solo lawyers and accountants serving nonprofit and guardianship clients, whose only compliance calendar currently lives in one departing employee's head.

Pain and evidence (≤40 words; cite the pain dossier file): Compliance knowledge and portal logins leave with that person at every staff turnover, while each client's AI-use consent must be tracked individually rather than covered by one boilerplate clause. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local model keeps a running, per-client record of filing deadlines, jurisdictions and which AI-use consents are current, stored only on the firm's own hardware; a new hire's install inherits the full history instantly, with no client data ever having passed through a cloud account.

Why now (≤25 words; name the specific capability): gpt-oss-20b's large context window holds years of a small practice's deadline and consent history locally, refreshed every session, no server needed.

Demo moment (≤20 words): Swap in a new laptop as a new hire; every client's next deadline and consent status appears instantly, unchanged.

Business model (≤15 words): $45/month per firm, add-on to the drafting assistant subscription.

---
id: I-2022
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
raw_id: s3-ideator-balanced-T4-02-r3#01
merged: []
---

# Offline Charity Registration Filer

One-liner (≤20 words): A self-hosted model fills every state's charity registration portal from your own laptop; nothing about your org leaves it.

Buyer and niche (≤25 words): Treasurers and directors of small nonprofits whose donor and bank data is too sensitive to hand to a cloud filing service.

Pain and evidence (≤40 words; cite the pain dossier file): Paid agents can fail silently for years while holding donor data offsite, and 38-41 state portals each need separate, unique-format submissions with no shared API. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): An open-weight GUI model runs entirely on the treasurer's own machine, reads each state portal's screen, fills the fields from a local org profile, submits, and saves a screenshot confirmation locally. No org data or screenshot is ever transmitted to a vendor server.

Why now (≤25 words; name the specific capability): UI-TARS-2, an open-weight GUI agent (84.8% WebVoyager), runs self-hosted, so screen-driving needs no cloud API call.

Demo moment (≤20 words): With the laptop's network monitor visible, the agent fills three live state forms while zero AI-vendor traffic appears.

Business model (≤15 words): One-time per-machine license, plus an optional paid annual update subscription.

---
id: I-2023
track: balanced
lineage: seed-atom-hybrid
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: [A-seed-05-tech-1, A-seed-05-mech-2, A-seed-05-mech-3]
source_task: s3-ideator-balanced-T4-02-r3
raw_id: s3-ideator-balanced-T4-02-r3#02
merged: []
---

# Local Pawn Report Filer

One-liner (≤20 words): A shop-owned model reads the day's transactions off the counter screen and files the mandatory police report itself.

Buyer and niche (≤25 words): Pawn shop and scrap-metal dealer owners and clerks handling customer ID numbers they are legally restricted from exposing to outside vendors.

Pain and evidence (≤40 words; cite the pain dossier file): A knowing daily-report failure risks fines up to $25,000 and jail time; clerks already re-key each transaction from the POS into a reporting tool, doubling the ID data's exposure. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A local vision-language model reads the POS screen and any scanned ID, shows the extracted fields as evidence before anything is filed, then drives the police portal's login and form fill, keeping a confirmation screenshot as a local audit log. No customer ID data leaves the shop's PC.

Why now (≤25 words; name the specific capability): gpt-oss-20b fits a 16GB shop PC and pairs with local screen-driving, so every step stays on-device.

Demo moment (≤20 words): A mock ID is scanned locally; extracted fields appear as evidence, the report files, and the network log stays empty.

Business model (≤15 words): Flat monthly license fee per shop, no per-transaction data charge.

---
id: I-2024
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: B2B, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
raw_id: s3-ideator-balanced-T4-02-r3#03
merged: []
---

# On-Device Lien Notice Agent

One-liner (≤20 words): Runs the DMV lookup and drafts the lien-sale notice on the tow yard's own machine, no owner data sent anywhere.

Buyer and niche (≤25 words): Tow yard and impound lot owners and clerks handling vehicle-owner and lienholder personal data across state-specific notice deadlines.

Pain and evidence (≤40 words; cite the pain dossier file): Missing a DMV lookup or notice window voids the entire lien sale, leaving the tow company owing the vehicle's full market value; owner and lienholder PII would otherwise pass through a cloud service. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A locally-run open-weight agent watches the DMV portal's screen, extracts owner and lienholder details, computes the state's specific notice window, and drafts a statute-cited notice with a logged screenshot, all processed on the yard's own computer except for the portal visit itself.

Why now (≤25 words; name the specific capability): A local llama.cpp/Ollama setup serves a quantized reasoning model at 50-250 tokens/sec on one consumer GPU, no cloud inference bill.

Demo moment (≤20 words): Enter a tow record; the on-device agent completes the DMV lookup and prints a notice while the network log stays silent.

Business model (≤15 words): Flat monthly software fee per yard location, no usage-based cloud charges.

---
id: I-2025
track: balanced
lineage: ai-native
territory: T4
cell: { buyer: prosumer, capability: local-private, track: balanced }
parents: []
source_task: s3-ideator-balanced-T4-02-r3
raw_id: s3-ideator-balanced-T4-02-r3#04
merged: []
---

# Guardian Ledger On-Device Agent

One-liner (≤20 words): Turns a guardian's bank statements and receipts into the court's accounting format without a ward's finances leaving the laptop.

Buyer and niche (≤25 words): Professional guardians and daily money managers preparing annual accountings, bound by fiduciary duty to protect a ward's financial records.

Pain and evidence (≤40 words; cite the pain dossier file): Annual accountings are due on a fixed date and discrepancies can trigger a hearing; sending a ward's full bank history to a cloud vendor is a real fiduciary liability, not a preference. (src: outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): A local vision-language model reads scanned receipts and statement PDFs, categorizes transactions into the court's accounting fields, flags balance mismatches, and drives the court's e-filing portal to submit, entirely on the guardian's own machine with nothing sent to a server.

Why now (≤25 words; name the specific capability): gpt-oss-20b plus local OCR-capable vision handle scanned financial documents fully offline in 16GB of memory.

Demo moment (≤20 words): Drop in a folder of statements; a categorized accounting appears and a planted mismatch is flagged, no network call fires.

Business model (≤15 words): Per-ward monthly license, sold to guardians and daily-money-manager firms.

<!-- COMPLETE -->
