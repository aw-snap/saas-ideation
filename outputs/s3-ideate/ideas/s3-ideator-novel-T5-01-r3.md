## Cards

---
id: s3-ideator-novel-T5-01-r3#01
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r3
---

# Email Trust Score, One Call

One-liner (≤20 words): An API that scores any domain's SPF, DKIM and DMARC compliance and returns a plain fraud-risk verdict in seconds.

Buyer and niche (≤25 words): Cyber-insurance underwriters and MSP quoting tools that need an instant email-security score for a client domain during quoting, without building a scanner.

Pain and evidence (≤40 words; cite the pain dossier file): Only 55% of low-volume senders had heard of the SPF/DKIM/DMARC mandates, daily XML reports go unread, and insurers have no fast way to check a client's real posture before quoting. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The underwriting tool sends a domain to one endpoint. The service queries the domain's live DNS records, checks each against SPF/DKIM/DMARC protocol requirements, and returns a JSON verdict with a risk score and the specific missing record, computed fresh on every call, no dashboard or login screen involved.

Why now (≤25 words): Cheap large-context inference (TC-25) makes scoring full authentication history per call affordable at underwriting volume, not just a one-off manual check.

Demo moment (≤20 words): Live: calling the endpoint with a clinic's domain returns "DMARC missing, high risk" seconds after the key is issued.

Business model (≤15 words): Metered per API call, tiered by monthly call volume.

---
id: s3-ideator-novel-T5-01-r3#02
track: novel
lineage: ai-native
territory: T5
cell: { buyer: agents, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r3
---

# Payee Verification, First Call

One-liner (≤20 words): An API that scores a vendor payee-change request for fraud risk on the very first call, no setup required.

Buyer and niche (≤25 words): AI bookkeeping and accounts-payable automation agents that must clear a payment before it executes, with no fraud team to phone.

Pain and evidence (≤40 words; cite the pain dossier file): Business email compromise cost US firms $2.9B in 2023 at $137k+ per incident; the standard fix, phoning to confirm, depends on a human remembering to do it every time. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The calling agent posts the vendor name, sender domain and proposed bank details to one endpoint, which checks domain age, correspondence history and known scam patterns, and returns a risk score with the matched signal on the first call.

Why now (≤25 words): Cheap 1M-token context (TC-25) lets the service reason over full vendor history per call at a price an automation agent can afford per payment.

Demo moment (≤20 words): Live: a freshly issued key scores a spoofed "new bank details" request as high-risk within the first call.

Business model (≤15 words): Per-verification-call fee, billed to the automation platform.

---
id: s3-ideator-novel-T5-01-r3#03
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r3
---

# Access Census, One Endpoint

One-liner (≤20 words): One API call returns every active login a named employee still holds, pulled fresh from each connected admin console.

Buyer and niche (≤25 words): HR and IT-ticketing software vendors serving small practices that need a real offboarding answer, not a manual console-by-console hunt.

Pain and evidence (≤40 words; cite the pain dossier file): 87% of SMB leaders cannot verify who has current access, and six in ten departing staff are never asked for their cloud logins at all. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Signup includes one admin-consent click on the practice's Google or Microsoft tenant. The caller then posts an employee's email to one endpoint, which queries Graph and Admin SDK plus connected app tokens, and returns a structured JSON list of every still-active session and webhook tied to that name.

Why now (≤25 words): The MCP server registry (TC-11) supplies ready-built connectors for Google and Microsoft admin APIs, so the aggregation ships without writing each wrapper from scratch.

Demo moment (≤20 words): Live: seconds after the admin-consent click, the endpoint returns a scheduling webhook still active under a departed technician.

Business model (≤15 words): Per-employee-query fee, sold to the HR or ticketing platform, not the practice.

---
id: s3-ideator-novel-T5-01-r3#04
track: novel
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r3
---

# Control Readiness, One Prompt

One-liner (≤20 words): An API that scores a practice's described systems against NIST 800-171 and HIPAA Security Rule controls, instantly.

Buyer and niche (≤25 words): MSPs preparing small DoD subcontractors and clinics for CMMC or HIPAA audits, who need a fast readiness number to open a client conversation.

Pain and evidence (≤40 words; cite the pain dossier file): DoD subcontractors face $50k-$300k+ in CMMC compliance cost, and the free HHS SRA Tool is "quickly outgrown"; nobody has a fast first-pass score. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The caller posts a short description of the practice's systems (software list, MFA status, backup setup) to one endpoint. The service checks each stated control against the current NIST 800-171 and HIPAA Security Rule text and returns a structured gap list with a readiness score, computed in one pass.

Why now (≤25 words): Cheap 1M-token context (TC-25) holds the full control catalog alongside the practice description in a single call, at lead-tool prices.

Demo moment (≤20 words): Live: describing a clinic with shared logins returns a readiness score of 41% and the three costliest gaps, in one call.

Business model (≤15 words): Per-assessment-call fee, sold to MSP and compliance software vendors.

---
id: s3-ideator-novel-T5-01-r3#05
track: novel
lineage: ai-native
territory: T5
cell: { buyer: agents, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T5-01-r3
---

# Agent Credential, Issued Instantly

One-liner (≤20 words): An API that issues a scoped, revocable identity token to a requesting automation the moment it asks, no shared password.

Buyer and niche (≤25 words): Small practices' scheduling bots, reminder services and AI agents that currently run on a shared owner password, with no IT staff to manage accounts.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts or personal API keys with no inventory, hunted down by hand or never reviewed, a gap growing as agents get wired in. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): The practice registers a root key by email, instantly. Any agent it deploys then calls the token endpoint, naming the systems it needs, and receives a scoped, time-limited credential logged against that agent's own identity, revocable by calling one endpoint, with no separate password ever shared.

Why now (≤25 words): Okta Agent SSO (TC-17, GA 2026-08) is the first production standard treating an agent as its own governed identity rather than a shared secret.

Demo moment (≤20 words): Live: a reminder-bot requests a token seconds after the root key is issued, then is revoked with a second call.

Business model (≤15 words): Monthly fee per active agent credential.

<!-- COMPLETE -->
