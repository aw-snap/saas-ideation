## Cards

---
id: s3-ideator-novel-T6-01-r3#01
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
---

# Fetch Escrow for Walled Storefronts

One-liner (≤20 words): A neutral escrow holds an agent's payment and only releases it once a real fetch is proven.

Buyer and niche (≤25 words): Operators of inventory-sync and price-watching agents that need repeated access to small maker storefronts behind pay-per-crawl walls.

Pain and evidence (≤40 words; cite the pain dossier file): Site owners eat surprise bandwidth bills and can't tell legitimate agents apart, while agents get billed per call with "no shared spend view" and no way to dispute a bad fetch. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The agent deposits funds into escrow before a crawl session; the site's pay-per-crawl meter signs a proof-of-fetch receipt per request; escrow releases the exact metered amount only on a matching signed receipt, and either side can freeze a disputed charge for review before it settles.

Why now (≤25 words; name the specific capability): Cloudflare's pay-per-crawl billing and x402 micropayments now exist but leave verification and disputes to each site to build alone.

Demo moment (≤20 words): Live fetch triggers a meter tick; escrow releases $0.01 on a matching receipt, then blocks a mismatched one.

Business model (≤15 words): Small percentage fee on escrowed transaction volume, billed to the agent side.

---
id: s3-ideator-novel-T6-01-r3#02
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
---

# Trusted Agent Bond

One-liner (≤20 words): A purchasing agent posts a refundable bond so a small merchant can approve it instantly without knowing it.

Buyer and niche (≤25 words): Operators of shopping agents that place orders on small storefronts too small to run enterprise fraud-screening plans.

Pain and evidence (≤40 words; cite the pain dossier file): Card-testing bursts leave sellers with "a pile of fraudulent orders" while strong bot protection sits behind "$2000+/month plans," so merchants distrust fast automated checkouts, and legitimate agents get wrongly held or blocked with them. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before checkout, the agent posts a small bond through its card-network agent token; a bonding service scores the agent's verified identity and holds the bond. The merchant auto-approves bonded orders instantly; the bond is released after settlement or forfeited to the merchant if the order reverses as fraud.

Why now (≤25 words; name the specific capability): Visa and Mastercard shipped agent-specific checkout tokens in 2025 that bind a card to one verified agent identity, making a bond enforceable.

Demo moment (≤20 words): Two near-simultaneous checkouts arrive; the bonded agent's order auto-approves while the unbonded fast checkout is held live.

Business model (≤15 words): Per-order bonding fee charged to the agent operator, refunded on clean settlement.

---
id: s3-ideator-novel-T6-01-r3#03
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
---

# Mandate-Match Clearinghouse

One-liner (≤20 words): Before a wholesale reorder commits, a neutral checker confirms the agent's mandate still matches the supplier's live cart.

Buyer and niche (≤25 words): Operators of restocking agents that reorder clay, glaze or packaging from small wholesale suppliers with no lasting business relationship yet.

Pain and evidence (≤40 words; cite the pain dossier file): Protocols "prove authorization for one purchase but do not aggregate a session," so a supplier can't trust an agent's claimed order and an agent can't trust a supplier's page hasn't quietly changed price or quantity. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The agent submits a signed intent mandate naming item, price ceiling and quantity. The clearinghouse independently revisits the supplier's live cart page right before submission and compares it to the mandate; on any mismatch it blocks the purchase and alerts both the agent operator and the supplier instead of trusting either claim.

Why now (≤25 words; name the specific capability): Agent Payments Protocol mandates give a signed, checkable claim that a cheap model can compare against the live page in real time.

Demo moment (≤20 words): Agent submits a mandate at $38; live page shows $44; clearinghouse blocks the buy and shows the mismatch.

Business model (≤15 words): Per-check fee paid by the ordering agent's operator.

---
id: s3-ideator-novel-T6-01-r3#04
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
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
id: s3-ideator-novel-T6-01-r3#05
track: novel
lineage: ai-native
territory: T6
cell: { buyer: agents, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T6-01-r3
---

# Two-Sided Success Ledger

One-liner (≤20 words): Agent and supplier each post their own record of an order, and only mismatches ever need a human.

Buyer and niche (≤25 words): Operators of restocking agents placing repeat wholesale orders with small suppliers whose own order portals are flaky or slow to update.

Pain and evidence (≤40 words; cite the pain dossier file): Agents falsely claim success on 45-48% of runs, LLM judges catch only 65% of that, and suppliers can't tell a real "order placed" claim from a failed one without independently checking their own flaky systems. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): After placing an order, the agent posts its claimed order record to a shared ledger; the supplier's order-management system posts its own independent record. Matching entries auto-settle and build a trust score for both sides; mismatches are flagged and routed to a human on both sides before anything ships or gets marked done.

Why now (≤25 words; name the specific capability): Cheap long-context models cross-check full order traces against source pages for pennies, cutting reconciliation cost to near zero.

Demo moment (≤20 words): Agent claims order #482 placed; supplier's own portal shows nothing; the ledger flags the mismatch and pages both sides live.

Business model (≤15 words): Per-transaction fee split between the agent operator and the subscribing supplier.

<!-- COMPLETE -->
