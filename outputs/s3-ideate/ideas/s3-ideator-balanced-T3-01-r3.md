## Cards

---
id: s3-ideator-balanced-T3-01-r3#01
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-01-r3
---

# Overnight Pharmacy Reorder Reconciler

One-liner (≤20 words): A pharmacy PC agent checks PioneerRx against wholesaler confirmations all night and emails the pharmacist one exception list each morning.

Buyer and niche (≤25 words): Independent pharmacy owners and pharmacy technicians running PioneerRx, whose vendor gates API access behind a manual inquiry form.

Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx API access needs a manual vendor form and has no public status page; techs otherwise re-key wholesaler order confirmations into the system by hand every morning. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): An agent on the pharmacy's own PC reads PioneerRx and incoming wholesaler confirmation emails over the local network, no cloud call needed, and matches quantities, queuing exceptions. It emails the pharmacist one exception list at open, and reorders a drug when the pharmacist replies with its NDC.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 desktop computer use (61.4% OSWorld) runs this match-and-queue loop unattended through a closed-store overnight shift.

Demo moment (≤20 words): Kill the network mid-run; the agent keeps matching orders locally, then sends the queued exception email once reconnected.

Business model (≤15 words): Flat monthly fee per pharmacy location.

---
id: s3-ideator-balanced-T3-01-r3#02
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-01-r3
---

# Parts and Service History by Email

One-liner (≤20 words): Mobile service techs email a VIN and get the dealer's own DMS parts and service history back, no login.

Buyer and niche (≤25 words): Mobile and off-site service technicians at multi-rooftop dealer groups running CDK or Reynolds.

Pain and evidence (≤40 words; cite the pain dossier file): Dealer DMS access is metered per rooftop and per tool ($200-465/month), so techs lack a mobile-friendly way to reach the same data without paying for another seat. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): An agent runs on a PC already inside the dealership network, reading DMS parts and service-history screens on request, no cloud DMS call needed. A tech emails a VIN from a job site; the agent looks it up locally and emails back the answer, queuing any request that arrives offline.

Why now (≤25 words; name the specific capability): browser-use-class desktop agents already script multi-step legacy DMS lookups from plain-language requests at production-adjacent reliability.

Demo moment (≤20 words): Send a mock VIN email while the network is down; the reply is queued, then delivered the moment connectivity returns.

Business model (≤15 words): Per-seat monthly fee, cheaper than an added DMS license per technician.

---
id: s3-ideator-balanced-T3-01-r3#03
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-01-r3
---

# Certificate of Insurance Line by Email

One-liner (≤20 words): Clients get a certificate of insurance back by email, pulled straight from the agency's own management system.

Buyer and niche (≤25 words): CSRs at independent insurance agencies running Applied Epic or AMS360, fielding constant COI requests from clients and lenders.

Pain and evidence (≤40 words; cite the pain dossier file): Agencies already do "double and triple entry" across rating tools and the AMS to service certificate and policy requests, work that piles up during any office closure. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): An agent on the agency's own network reads policy and certificate-holder data from Applied Epic or AMS360. A client emails a COI request; the agent locally drafts the certificate, and a CSR approves by replying "send," even for requests queued during an office outage.

Why now (≤25 words; name the specific capability): Desktop computer-use agents read structured line-of-business screens and fill certificate forms at production-adjacent accuracy.

Demo moment (≤20 words): Disconnect the network for the demo window; three COI requests queue, then all three drafts land once reconnected.

Business model (≤15 words): Per-certificate fee billed monthly to the agency.

---
id: s3-ideator-balanced-T3-01-r3#04
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-01-r3
---

# Delinquency Digest by Email

One-liner (≤20 words): A property manager gets one daily email of overdue tenants and unposted payments, no dashboard to check.

Buyer and niche (≤25 words): Property managers running Yardi Voyager or AppFolio for portfolios where rent-roll checks are still a daily manual task.

Pain and evidence (≤40 words; cite the pain dossier file): Yardi has no self-serve API and data leaves only by SFTP batch file, while AppFolio still needs manual card-transaction entry, leaving daily delinquency status stale. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): An agent on the office PC reads live Yardi or AppFolio ledger screens all day over the local network and compiles a delinquency list; it emails the manager one digest each morning, queuing any midday internet outage until it clears.

Why now (≤25 words; name the specific capability): Desktop computer-use agents at 61.4% OSWorld already read structured ledger screens reliably across a full workday.

Demo moment (≤20 words): Simulate an 8-hour outage; the digest still lands the next morning with every overnight change captured.

Business model (≤15 words): Monthly fee per portfolio, scaled by unit count.

---
id: s3-ideator-balanced-T3-01-r3#05
track: balanced
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T3-01-r3
---

# Patient Balance Line by Email

One-liner (≤20 words): Front-desk staff email a patient name and get their Dentrix balance and eligibility status back, no extra API seat required.

Buyer and niche (≤25 words): Dental office managers running Dentrix, where third-party API access is gated behind a $5,000 registration and per-location fees.

Pain and evidence (≤40 words; cite the pain dossier file): Dentrix charges $5,000 for read API access plus $47 per location monthly, so small offices can't justify a full integration just to check balances. (src: outputs/s3-ideate/pain/T3-dossier.md)

How it works (≤50 words): An agent on the office's own PC reads patient balance and eligibility fields directly from the Dentrix screen, no API call. Staff email a patient name; the agent looks it up locally and emails back the answer, queuing requests that arrive while office wifi is down.

Why now (≤25 words; name the specific capability): Desktop computer-use agents read line-of-business screens directly, sidestepping the vendor's paid API tier entirely.

Demo moment (≤20 words): Send three lookup emails during a simulated outage; all three answers arrive together the moment the network returns.

Business model (≤15 words): Flat monthly fee per office, well under the vendor's own API toll.

<!-- COMPLETE -->
