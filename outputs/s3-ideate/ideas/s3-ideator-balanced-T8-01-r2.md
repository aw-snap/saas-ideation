## Cards

---
id: s3-ideator-balanced-T8-01-r2#01
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r2
---

# Multi-Ward Filing Relay

One-liner (≤20 words): Files every ward's annual court accounting on time across every county portal, adapting to each court's own format.

Buyer and niche (≤25 words): Professional guardians and daily money managers serving multiple wards across different counties, each with its own annual accounting deadline and form.

Pain and evidence (≤40 words; cite the pain dossier file): Fiduciaries must file formatted annual accountings on a fixed date per ward; guardian knowledge and portal logins vanish at staff turnover, and about 10% of court e-filings are rejected outright. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The agent tracks each ward's accounting due date and court, drafts the filing in that court's required format from a handful of stored examples, submits through the court's own e-filing portal, and re-files immediately if rejected, so no ward's case is the one that slips.

Why now (≤25 words): Hosted fine-tuning is closing to new users (TC-24), so the agent adapts per-court format via in-context examples instead; Skyvern (TC-07) files where no API exists.

Demo moment (≤20 words): Two mock ward accountings in different court formats both auto-file; one seeded rejection triggers an instant, corrected re-file.

Business model (≤15 words): B2B SaaS, $49/month per ward, sold to guardian and money-manager firms.

---
id: s3-ideator-balanced-T8-01-r2#02
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r2
---

# Authority Form Foundry

One-liner (≤20 words): Fills and submits each institution's own power-of-attorney form through its own portal, then tracks acceptance on one board.

Buyer and niche (≤25 words): Adult children and POA agents who keep hitting "it has to be on our form" at every bank, insurer and agency they contact.

Pain and evidence (≤40 words; cite the pain dossier file): Banks and CMS demand proof of authority on their own form at any time; one 94-year-old went seven months without her pension. Paid filing agents can fail silently, leaving families to discover the gap later. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): Proxy uploads the POA once. The agent matches it to each institution's specific acceptance form, fills and submits it through that institution's own upload portal or web form, and posts every submission's confirmation or rejection to a status board the proxy can check any time, unlike a black-box filing agent.

Why now (≤25 words): Claude for Chrome (TC-03) and Skyvern (TC-07) complete no-API institutional web forms directly, replacing manual paperwork and opaque paid agents.

Demo moment (≤20 words): One POA upload produces two completed institution forms live, with a status board flipping from "submitted" to "confirmed."

Business model (≤15 words): $15 per institution filed, $5/month per institution monitored after.

---
id: s3-ideator-balanced-T8-01-r2#03
track: balanced
lineage: seed-atom-hybrid
territory: T8
cell: { buyer: B2C, capability: extractor, track: balanced }
parents: [A-seed-03-insight-1, A-seed-03-mech-2]
source_task: s3-ideator-balanced-T8-01-r2
---

# Proxy Knowledge Handoff

One-liner (≤20 words): Captures an outgoing caregiving proxy's tacit knowledge by narration so the next proxy doesn't start from zero.

Buyer and niche (≤25 words): Families where the primary proxy for an aging parent changes — illness, a move, or handing off to a paid guardian or money manager.

Pain and evidence (≤40 words; cite the pain dossier file): Proxies hold undocumented institution logins, deadlines and routines with no successor record; turnover elsewhere shows the same failure, where "compliance knowledge and portal logins leave with that person," forcing a new person to start "from nothing." (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The outgoing proxy narrates their routine — which portal, which login pattern, which deadline, which doctor — while the agent builds a structured handoff record. A voice agent later calls back with follow-up questions to fill gaps, the same pattern used to capture a retiring expert's unwritten routine, before the incoming proxy takes over.

Why now (≤25 words): Kyutai's streaming speech recognition (TC-31) plus cheap long-context extraction (TC-25) turns spoken narration into a searchable handoff record in one pass.

Demo moment (≤20 words): A narrated two-minute walkthrough of "Mom's accounts" becomes a filed handoff record; a follow-up call fills one gap live.

Business model (≤15 words): $99 one-time per handoff, or bundled free with any monitoring subscription.

---
id: s3-ideator-balanced-T8-01-r2#04
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r2
---

# Fraud Report Broadcast

One-liner (≤20 words): The moment a scam is caught, files the required report to every mandated portal — bank, IC3, state APS — at once.

Buyer and niche (≤25 words): Adult children who just spotted a gift-card or wire scam on a parent's account and must report it before the trail goes cold.

Pain and evidence (≤40 words; cite the pain dossier file): 147,127 elder-fraud complaints in 2024, $4.885B lost; reporting is slow while "surveillance footage is months gone." Elsewhere, the same one-event-many-portals reporting burden is a legal duty logged separately at each agency. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): Once a scam transaction is confirmed, the agent fills and submits the bank's fraud-dispute form, the FBI IC3 complaint, the FTC report and the state Adult Protective Services intake form from one set of facts, in parallel, and returns a confirmation number for each so the family never re-types the same story four times.

Why now (≤25 words): Browser agents (TC-02, TC-06) complete distinct no-API government and bank forms from one intake in minutes instead of days.

Demo moment (≤20 words): One scam description entered once; three mock portal confirmations appear within the same minute.

Business model (≤15 words): $29 per incident, or included free in a fraud-monitoring subscription.

---
id: s3-ideator-balanced-T8-01-r2#05
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r2
---

# Probate Portal Pilot

One-liner (≤20 words): Files probate paperwork through each county court's own e-filing portal and fixes rejected filings the same day.

Buyer and niche (≤25 words): Executors, usually the former POA agent, opening probate for a parent's estate across one or more county courts.

Pain and evidence (≤40 words; cite the pain dossier file): The POA ends at death and accounts freeze while funeral costs come due; separately, about 10% of court e-filings are rejected, filers are billed anyway, and each county publishes its own technical filing requirements. (src: outputs/s3-ideate/pain/T8-dossier.md; outputs/s3-ideate/pain/T4-dossier.md)

How it works (≤50 words): The executor uploads the death certificate and estate details once. The agent matches the probate petition to the specific county court's format and technical requirements, submits through that court's e-filing portal, and on a rejection, corrects and resubmits the same day instead of waiting on a mailed notice.

Why now (≤25 words): Skyvern (TC-07) already automates form-fill and submission across many no-API court and institution sites at production-adjacent reliability.

Demo moment (≤20 words): A mock petition submits to a county portal, gets a seeded rejection, and auto-resubmits corrected within the same run.

Business model (≤15 words): Flat $249 per estate, paid on accepted filing status.

<!-- COMPLETE -->
