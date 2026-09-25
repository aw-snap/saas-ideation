## Cards

---
id: s3-ideator-novel-T9-01-r2#01
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
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
id: s3-ideator-novel-T9-01-r2#02
track: novel
lineage: seed-atom-hybrid
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: [A-seed-03-tech-1, A-seed-03-mech-1]
source_task: s3-ideator-novel-T9-01-r2
---

# Guardian's Ledger, Kept Local

One-liner (≤20 words): A local voice agent turns a guardian's year-round narrated transactions into a court-ready annual accounting, offline.
Buyer and niche (≤25 words): Solo elder-law attorneys and court-appointed guardians who must log a ward's every transaction all year for one fixed annual filing.
Pain and evidence (≤40 words; cite the pain dossier file): Guardians must file an annual accounting on a fixed date and are advised to log transactions weekly all year, yet ward financial records are as sensitive as any client file a solo practitioner must protect. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Throughout the year the guardian narrates each transaction to a local voice agent; a local model extracts dated, categorized, confidence-tagged ledger entries and stores them only on the guardian's machine, then compiles them into the court's required accounting format on the filing deadline.
Why now (≤25 words; name the specific capability): Kyutai and Voxtral give fast local speech-to-text, and gpt-oss-20b runs offline in 16GB, so no ward's bank data reaches a server.
Demo moment (≤20 words): Speak three mock transactions aloud; a structured, dated ledger entry appears for each, tagged with confidence.
Business model (≤15 words): $39/month per guardian or attorney, cheaper than the accountant fee it replaces.

---
id: s3-ideator-novel-T9-01-r2#03
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
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
id: s3-ideator-novel-T9-01-r2#04
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
---

# Checks What The Filing Agent Did

One-liner (≤20 words): A local agent logs into each state portal itself to confirm a paid filing agent's claimed work actually happened.
Buyer and niche (≤25 words): Solo attorneys and accountants managing compliance filings for guardianship and nonprofit clients through a paid registration agent they cannot verify.
Pain and evidence (≤40 words; cite the pain dossier file): A paid registration agent "routinely dropped the ball on completing work" and a missed summons went unnoticed, yet verifying filings elsewhere means handing client entity data to another cloud vendor. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): Using the practitioner's own saved logins, a local browser agent visits each state or court portal overnight, reads the actual filing status, compares it against what the paid agent billed for, and flags any mismatch, all without sending login credentials to a third-party service.
Why now (≤25 words; name the specific capability): Claude for Chrome runs browser checks inside the practitioner's own logged-in session at production reliability, unlike a third-party portal login.
Demo moment (≤20 words): Point it at a mock state portal; it finds one filing the paid agent never actually submitted, flagged red.
Business model (≤15 words): $49/month flat fee per practitioner seat.

---
id: s3-ideator-novel-T9-01-r2#05
track: novel
lineage: ai-native
territory: T9
cell: { buyer: prosumer, capability: local-private, track: novel }
parents: []
source_task: s3-ideator-novel-T9-01-r2
---

# Deadline Memory That Outlives Staff

One-liner (≤20 words): A local model remembers every client's filing deadlines and AI-use consent status even after the staffer who knew them leaves.
Buyer and niche (≤25 words): Solo lawyers and accountants serving nonprofit and guardianship clients, whose only compliance calendar currently lives in one departing employee's head.
Pain and evidence (≤40 words; cite the pain dossier file): Compliance knowledge and portal logins "leave with that person" at every staff turnover, while each client's AI-use consent must be tracked individually rather than covered by one boilerplate clause. (src: outputs/s3-ideate/pain/T4-dossier.md; outputs/s3-ideate/pain/T9-dossier.md)
How it works (≤50 words): A local model keeps a running, per-client record of filing deadlines, jurisdictions and which AI-use consents are current, stored only on the firm's own hardware; a new hire's install inherits the full history instantly, with no client data ever having passed through a cloud account.
Why now (≤25 words; name the specific capability): gpt-oss-20b's 131k context holds years of a small practice's deadline and consent history locally, refreshed every session, no server needed.
Demo moment (≤20 words): Swap in a new laptop as a new hire; every client's next deadline and consent status appears instantly, unchanged.
Business model (≤15 words): $45/month per firm, add-on to the drafting assistant subscription.

<!-- COMPLETE -->
