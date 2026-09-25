## Cards

---
id: s3-ideator-novel-T2-02-r3#01
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r3
---

# The Annual Threshold Declarer

One-liner (≤20 words): Reconstructs a year of hybrid e-invoice and email intake into one accurate revenue total, then files it with the Finanzamt.

Buyer and niche (≤25 words): German Handwerk and small firms staying under the Kleinunternehmer exemption, whose e-invoice intake still runs on printed PDFs and deleted originals.

Pain and evidence (≤40 words): 96% still receive invoices by email and only 45% can receive true e-invoices; staff routinely delete the legally required XML, leaving no reliable trail to reconstruct annual revenue from. (src: outputs/s3-ideate/pain/T2-dossier.md, P9, P10)

How it works (≤50 words): Scans the year's mailbox and shared drive for every invoice and receipt, whether XML, PDF or printed scan, reconciles duplicates and near-duplicate entries against bank statements, totals annual turnover, then logs into ELSTER with the firm's credentials to complete and submit the small-business revenue declaration directly.

Why now (≤25 words): Mistral OCR 3 (TC-30) parses mixed scanned-and-structured formats cheaply enough to rebuild a full year's intake from whatever staff actually kept.

Demo moment (≤20 words): Feed mixed PDFs, XML and printouts; the total builds, then the ELSTER form submits and confirms on screen.

Business model (≤15 words): One flat fee per filing season, sold through the firm's Steuerberater.

---
id: s3-ideator-novel-T2-02-r3#02
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r3
---

# The Peppol Client Listing Closer

One-liner (≤20 words): Builds Belgium's annual VAT client listing from confirmed Peppol deliveries, then files it through Intervat automatically.

Buyer and niche (≤25 words): Belgian SMEs and their accountants who issue invoices over Peppol and must file the yearly listing of B2B customers.

Pain and evidence (≤40 words): SMEs "assume they're on Peppol" without confirming delivery, so accountants cannot tell which invoices actually reached each customer when the annual per-customer totals are due. (src: outputs/s3-ideate/pain/T2-dossier.md, P12)

How it works (≤50 words): Checks the firm's Peppol access-point delivery log against every invoice issued during the year, confirms which reached each customer, totals turnover per Belgian VAT number, flags any customer with unconfirmed delivery for manual chase, then logs into Intervat to complete and submit the annual client listing directly.

Why now (≤25 words): Browser agents (TC-07) already handle multi-step government-portal logins and form completion at production reliability, closing the loop the delivery log alone can't.

Demo moment (≤20 words): Run against a mock access-point log; one customer flags as undelivered, the rest file straight into Intervat live.

Business model (≤15 words): Annual filing fee per firm, resold by Belgian bookkeeping practices.

---
id: s3-ideator-novel-T2-02-r3#03
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r3
---

# The Annual Liasse Assembler

One-liner (≤20 words): Assembles a small firm's year-end tax return annexes straight from validated e-invoice data and files them with DGFiP.

Buyer and niche (≤25 words): French experts-comptables serving TPE/PME clients who must connect one of 150 e-invoicing platforms and still file the annual liasse fiscale.

Pain and evidence (≤40 words): With 150 registered platforms and no default choice, advisers already "absorb the switchover" client by client with no written record, then must still reconcile a year of invoices into the statutory return. (src: outputs/s3-ideate/pain/T2-dossier.md, P14, P15)

How it works (≤50 words): Pulls a year of validated invoices and payments from the connected plateforme agréée, reconciles them against the ledger, builds the required tax-return annexes (revenue, deductible expenses, VAT recap), then logs into the DGFiP télétransmission portal to complete and submit the liasse fiscale for the accountant's review and signature.

Why now (≤25 words): Long-context models (TC-25) hold a full fiscal year of invoice and ledger data in one session to assemble annexes without manual re-entry.

Demo moment (≤20 words): Point it at a year of platform invoices; annexes populate, then the liasse submits into a mock DGFiP portal live.

Business model (≤15 words): Per-client annual fee, sold to accounting practices ahead of each filing season.

---
id: s3-ideator-novel-T2-02-r3#04
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r3
---

# The Modelo 347 Closer

One-liner (≤20 words): Turns a year of vendor and customer invoices into Spain's mandatory third-party transaction return, filed straight through AEAT.

Buyer and niche (≤25 words): Spanish gestores and small-firm accountants who must report every counterparty above €3,005.06 a year to the tax agency.

Pain and evidence (≤40 words): Mixed-tax invoices break extraction and VAT "sometimes" posts wrong, while near-duplicate entries slip past ledger checks, making the year's per-counterparty totals unreliable exactly when the threshold return is due. (src: outputs/s3-ideate/pain/T2-dossier.md, P3, P4)

How it works (≤50 words): Reads a full year of posted invoices, groups them by counterparty tax ID, corrects mixed-tax miscoding and near-duplicate entries before totaling, flags any counterparty crossing the €3,005.06 threshold, then logs into the AEAT portal to complete and submit Modelo 347 directly, ready for the gestor's sign-off.

Why now (≤25 words): Mistral OCR 3 (TC-30) and long-context review (TC-25) reconcile a year of mixed-format invoices cheaply enough to trust the totals a statutory return needs.

Demo moment (≤20 words): Load a year with a hidden duplicate; it corrects that, then submits Modelo 347 into a mock AEAT portal.

Business model (≤15 words): Flat annual filing fee per client, sold through gestoría software subscriptions.

---
id: s3-ideator-novel-T2-02-r3#05
track: novel
lineage: ai-native
territory: T2
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T2-02-r3
---

# The Modelo 190 Closer

One-liner (≤20 words): Compiles a year of professional-fee invoices into Spain's annual withholding summary and files it through AEAT directly.

Buyer and niche (≤25 words): Spanish gestores and small-firm accountants reporting IRPF withholdings on freelancer and professional invoices once a year.

Pain and evidence (≤40 words): Suppliers get coded "unknown" and line-item detail needed for withholding rates costs extra or gets skipped, so gestores rebuild the year's withholding base by hand before the return is due. (src: outputs/s3-ideate/pain/T2-dossier.md, P5)

How it works (≤50 words): Reads every professional-services invoice posted during the year, recovers the correct supplier and withholding-rate coding where the capture tool left it "unknown," totals the withheld amount per recipient, then logs into the AEAT portal to complete and submit Modelo 190, leaving only edge cases for the gestor to confirm.

Why now (≤25 words): Long-context review (TC-25) re-reads a year of invoices in one pass to recover coding that a capture tool skipped rather than charged extra for.

Demo moment (≤20 words): Load invoices with three "unknown" suppliers; each resolves, then Modelo 190 submits into a mock AEAT portal live.

Business model (≤15 words): Flat annual filing fee per client, bundled into existing gestoría subscriptions.

<!-- COMPLETE -->
