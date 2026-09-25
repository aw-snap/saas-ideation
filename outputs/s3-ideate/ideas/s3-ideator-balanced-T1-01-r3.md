## Cards

---
id: s3-ideator-balanced-T1-01-r3#01
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r3
---

# Screen API for Legacy PM Systems

One-liner: Turns a small practice's API-less desktop billing system into callable tools other billing agents can invoke.

Buyer and niche: AI billing-automation agents built by RCM software vendors that already resolve payer-portal work but dead-end at a practice's local desktop billing software.

Pain and evidence: Billers dig through portals and desktop records for denial data that is "never accessible" or "incomplete and inaccurate," work automated agents cannot yet reach. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: A local computer-use worker watches the practice's legacy PM screens. External billing agents call get_claim_status, get_patient_insurance, or write_pa_result over a metered tool endpoint; the worker clicks through the real screens and returns structured data or confirms the write.

Why now: Claude Sonnet 4.5 holds multi-step desktop tasks reliably, and the MCP server registry lets billing agents discover and call tools like this one directly.

Demo moment: A calling agent requests claim status by claim number; structured status and date return in under ten seconds.

Business model: Per-call metered fee billed to the calling agent's vendor account.

---
id: s3-ideator-balanced-T1-01-r3#02
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r3
---

# PA Write-Back Server for Agents

One-liner: Lets a payer-portal resolution agent write its finished prior-auth result straight into the practice's desktop system.

Buyer and niche: Prior-authorization automation agents, built by RCM software companies, that resolve payer portals but cannot post results into a practice's own legacy billing software.

Pain and evidence: PA already routes through several people per request, and practices keep full-time staff solely to move authorization results between the portal and the practice's own records. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: When a calling agent finishes resolving a PA on a payer portal, it sends the result and reference number here; a computer-use worker opens the legacy PM software, finds the matching case, enters the approval or denial with notes, then confirms the write.

Why now: MCP's 2025-11 authorization revisions give each calling agent a scoped, auditable credential for writing into a practice's own systems.

Demo moment: A test agent posts a PA approval; the legacy screen fills in live and returns a confirmation event.

Business model: Per-successful-write fee charged to the calling agent's platform.

---
id: s3-ideator-balanced-T1-01-r3#03
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r3
---

# Scoped Front Door to Legacy PM

One-liner: Gives every registered billing agent its own governed identity to act inside one practice's shared, ancient desktop system.

Buyer and niche: RCM platforms running several different billing agents that need separately scoped access into one client practice's single shared legacy PM login.

Pain and evidence: Portal logins already suffer lockouts and mandatory 2FA resets handled by hand; letting several automated agents share one desktop login multiplies that risk. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: Each calling agent registers for its own scoped credential (read-only eligibility lookup, or PA write-back only). A local computer-use worker checks that scope before touching the legacy PM screens, and logs every action against which agent requested it.

Why now: Okta's Agent SSO gives non-human identities first-class, governed access instead of one shared human login per system.

Demo moment: Two demo agents call the same system; one reads status successfully, the other is blocked from writing.

Business model: Monthly platform fee per RCM vendor, priced per connected agent seat.

---
id: s3-ideator-balanced-T1-01-r3#04
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r3
---

# Receipts for Actions No Human Watched

One-liner: Every write an external agent makes into the legacy PM system comes back with screenshot proof it happened.

Buyer and niche: Billing-automation agent vendors whose own customers will not trust an unverifiable write into a small practice's desktop system.

Pain and evidence: Practices already distrust portal confirmations after claims stayed invisible for two days and duplicate submissions slipped through unnoticed. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: After a calling agent's write request completes, the computer-use worker captures before-and-after screenshots of the affected record, diffs the visible fields, and returns a signed verification receipt alongside the confirmation, so the calling agent can prove the action to its own customer.

Why now: The Agent2Agent protocol standardizes how one agent reports a completed task's result to another, giving this receipt a format calling agents already expect.

Demo moment: A write completes; the receipt shows exact before and after field values side by side.

Business model: Per-verified-action fee, priced above the plain write-back tier.

---
id: s3-ideator-balanced-T1-01-r3#05
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: agents, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-01-r3
---

# Remote Hands for Offshore Billing Agents

One-liner: Lets an offshore billing platform's own AI agent operate a practice's desktop PM software without remote-desktop hassle.

Buyer and niche: Offshore RCM and billing-outsourcing platforms whose AI agents serve many small US practices remotely instead of local staff.

Pain and evidence: Offshore vendors already pitch billing labor at $299-399 a week against $18-22/hr in-house staff, but their agents still need a reliable way into each practice's locked desktop system. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works: The practice installs a lightweight local worker once. The offshore platform's calling agent sends structured actions (post payment, update PA status, pull claim history) over an authenticated channel, and the worker executes them on the real desktop screens and returns results, no VPN or shared remote session.

Why now: Production-grade open-source computer-use frameworks now run low-cost, reliable automated sessions a calling agent can drive with simple tool calls.

Demo moment: A remote calling agent posts a payment update; the desktop PM record updates on screen within seconds.

Business model: Per-transaction fee shared between the platform and the offshore firm.

<!-- COMPLETE -->
