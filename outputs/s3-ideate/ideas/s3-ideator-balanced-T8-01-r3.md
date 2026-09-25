## Cards

---
id: s3-ideator-balanced-T8-01-r3#01
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
---

# Instant Medicare Rep Filer

One-liner (≤20 words): Signup ends with the federal Appointment-of-Representative form already filed with Medicare, confirmation number in hand.

Buyer and niche (≤25 words): Adult children and POA agents who keep getting told "we need proof of authority on file" every time they call about a parent's Medicare account.

Pain and evidence (≤40 words; cite the pain dossier file): CMS "reserves the right to request documentation" at any time and rejects informal authority; one 94-year-old went seven months without her pension over unrecognized proxy status. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): During signup, the proxy answers five questions and uploads the existing POA or guardianship document. The agent auto-fills CMS's representative-appointment form and submits it through CMS's own portal before signup finishes, returning a confirmation number the proxy can quote on every future call.

Why now (≤25 words): Claude for Chrome (TC-03) completes authenticated no-API federal portal forms in one session, replacing what was a mailed paper submission.

Demo moment (≤20 words): Signup form submitted; 40 seconds later a CMS confirmation number renders on screen, still inside onboarding.

Business model (≤15 words): $29 one-time filing fee, first filing free with any paid plan.

---
id: s3-ideator-balanced-T8-01-r3#02
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
---

# 90-Day Reinstatement Filer

One-liner (≤20 words): Uploads a Medicaid termination notice and files the reinstatement request in the state portal before signup finishes.

Buyer and niche (≤25 words): Families whose parent already lost long-term-care Medicaid over paperwork, racing a 90-day reinstatement window most people don't know exists.

Pain and evidence (≤40 words; cite the pain dossier file): 69% of unwinding disenrollments were procedural, not eligibility-based, and reinstatement is only available in some states within a 90-day window that few families learn about in time. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy photographs the termination notice at signup. The agent reads the case number and termination date, checks the state's reinstatement rule, fills the state portal's reinstatement request with the extracted case data, and submits it, returning a tracking number before the onboarding flow ends.

Why now (≤25 words): Mistral OCR 3 (TC-30) extracts the case number from the notice instantly; Skyvern (TC-07) files the no-API state reinstatement form.

Demo moment (≤20 words): A photographed termination letter yields a case number, then a filed reinstatement confirmation, both inside one minute.

Business model (≤15 words): $49 per filing, refunded if the state has no reinstatement path.

---
id: s3-ideator-balanced-T8-01-r3#03
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
---

# Formulary Exception Instant Filer

One-liner (≤20 words): Names the dropped drug and plan at signup; the plan's formulary-exception request is submitted before the account setup ends.

Buyer and niche (≤25 words): Adult children whose parent's Medicare Advantage plan just dropped a drug off-formulary mid-year, leaving days to act before a refill runs out.

Pain and evidence (≤40 words; cite the pain dossier file): Off-formulary drugs fall outside the plan's out-of-pocket cap, and one family called their HMO's mid-crisis lock-in "little choices when she was in ICU"; the standard workaround is a 1-800-MEDICARE exception request most families never file. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): At signup, the proxy types the drug name and plan; the agent looks up that plan's exception-request form, fills it with the prescriber and diagnosis details already on file, submits it through the plan's own portal, and hands back the request's tracking number as the first thing the account shows.

Why now (≤25 words): Browser agents (TC-02) complete plan-specific no-API exception forms directly, a step that previously meant a hold-music phone call.

Demo moment (≤20 words): Drug name entered at signup; a filed exception-request confirmation appears on the new account's home screen within a minute.

Business model (≤15 words): $19 per exception request filed.

---
id: s3-ideator-balanced-T8-01-r3#04
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
---

# Funeral Fund Release Filer

One-liner (≤20 words): Uploads a death certificate and immediately submits the funeral-release request to the one bank holding the burial funds.

Buyer and niche (≤25 words): Executors, usually the former POA agent, who need one specific frozen account released fast enough to cover an unpaid funeral bill.

Pain and evidence (≤40 words; cite the pain dossier file): Accounts freeze the moment a bank is notified of death, and cash gets blocked "just as funeral costs fall due"; one family was later chased by a collector for the funeral debt itself. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The executor names the bank and uploads the death certificate at signup. The agent matches the document to that bank's own funeral-expense release or small-estate affidavit form, submits it through the bank's web portal, and returns a confirmation before the account setup screen closes, instead of a mailed request.

Why now (≤25 words): Skyvern (TC-07) already handles document-attach-and-submit flows on no-API bank sites at production-adjacent reliability.

Demo moment (≤20 words): Certificate uploaded, bank named; a filed release-request confirmation renders on screen under a minute later.

Business model (≤15 words): $39 per release request, one bank at a time.

---
id: s3-ideator-balanced-T8-01-r3#05
track: balanced
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T8-01-r3
---

# Payee Application Instant Filer

One-liner (≤20 words): Answers a short set of questions at signup, then submits the Social Security representative-payee application before onboarding finishes.

Buyer and niche (≤25 words): Adult children whose parent can no longer manage Social Security benefits directly and need formal payee status before payments are interrupted.

Pain and evidence (≤40 words; cite the pain dossier file): SSA audits whether payees "used and accounted for" benefits, but the application to become payee is itself paperwork-heavy and informal proxies are told to "document everything" from day one to avoid abuse accusations. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy enters relationship, address and capacity details at signup. The agent fills the representative-payee application with those answers plus any uploaded medical-incapacity letter, submits it through the Social Security online portal, and shows a filed application number on the account's first screen, with a reminder of the annual accounting to come.

Why now (≤25 words): Claude for Chrome (TC-03) completes multi-field no-API federal benefit applications in one authenticated session instead of a mailed SSA-11 packet.

Demo moment (≤20 words): Signup questions answered; a filed payee-application confirmation number appears on the new dashboard within the minute.

Business model (≤15 words): $35 one-time filing fee, upsell to ongoing accounting service.

<!-- COMPLETE -->
