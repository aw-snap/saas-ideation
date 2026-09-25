---
id: I-5101
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: local-private, track: novel }
parents: [I-1019, I-2067]
source_task: s7-mutator-01
---

# Linked Call-and-Statement Alert

One-liner (≤20 words): One on-device model links a suspicious call to a new payee or transfer within hours, not weeks.

Buyer and niche (≤25 words): Adult children and paid proxies protecting a parent's phone and bank statements, who won't send call audio or account data to the cloud.

Pain and evidence (≤40 words; cite the pain dossier file): Elder fraud losses hit $4.9B in 2024, discovered weeks late; a scam call and a same-day new payee are two separate signals nobody links until the money is already gone. (src: outputs/s3-ideate/pain/T8-dossier.md, P4)

How it works (≤50 words): A single on-device model transcribes incoming calls for scam patterns and scans statements for new payees and duplicate charges, all on the parent's own device. A flagged call followed within hours by an unusual transfer or new payee combines into one high-confidence alert instead of two separate ones.

Why now (≤25 words; name the specific capability): On-device speech and document models (Voxtral Realtime, Gemini Nano) now run together locally, so no call audio or statement ever reaches a server. [unverified]

Demo moment (≤20 words): Play a scam call, then load a statement with a same-day new payee; a single linked alert fires.

Business model (≤15 words): Monthly family-plan subscription per parent, priced above either check alone.

---

id: I-5102
track: balanced
lineage: seed-atom-hybrid
territory: T5
cell: { buyer: B2C, capability: screen-agent, track: balanced }
parents: [I-3048, I-1516, A-seed-05-aud-2, A-seed-05-mech-2]
source_task: s7-mutator-01
---

# Family Account Security Sweep

One-liner (≤20 words): The family tech person runs a console-checked security sweep of a relative's online accounts, with evidence, not a scare count.

Buyer and niche (≤25 words): Family tech people and relatives who manage another household member's online accounts and want proof, not a generic hacked-or-not score.

Pain and evidence (≤40 words; cite the pain dossier file): Security "checkup" tools return scary counts with no evidence; family tech support already means fielding calls about the same relatives' accounts, with no proof anything is actually wrong. (src: outputs/s2-seeds/seed-05.md)

How it works (≤50 words): Inside the relative's own logged-in browser session, an agent checks 2FA status, recovery email and phone, breached or reused passwords, stale sessions and connected apps. Each finding gets evidence — a screenshot, not a score — before the family tech person decides what to fix, so nothing changes without an informed yes.

Why now (≤25 words; name the specific capability): Claude for Chrome operates inside a relative's own logged-in browser session, checking real account settings instead of guessing from outside.

Demo moment (≤20 words): Live sweep of three demo accounts finds 2FA off on email, evidence screenshot attached, before any fix is offered.

Business model (≤15 words): Monthly per-household plan; the family tech person manages several relatives' account sweeps from one dashboard.

---

id: I-5103
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: drafter-dialogue, track: novel }
parents: [I-4546, I-1534]
source_task: s7-mutator-01
---

# Appeal Filed, Now Confirmed

One-liner (≤20 words): After a Medicare appeal is filed, a voice agent calls the plan, confirms receipt, and gets it expedited on tape.

Buyer and niche (≤25 words): Family members who just filed an expedited Medicare Advantage appeal for a parent's denied care and need proof the plan actually logged it.

Pain and evidence (≤40 words; cite the pain dossier file): Only 11.5% of 2024 Medicare Advantage denials were appealed though 80.7% of appeals won; a filed appeal with no confirmed receipt or reference number leaves families unable to prove the clock started. (src: outputs/s3-ideate/pain/T8-dossier.md, P2)

How it works (≤50 words): Once the appeal is submitted, a voice agent calls the plan's appeals line, states upfront that the call is recorded for the appeal record, asks for expedited review and a confirmation number, and stays on hold. The transcript quotes the representative's own words as a timestamped proof if disputed.

Why now (≤25 words; name the specific capability): Kyutai's streaming speech recognition transcribes a live call at about 500ms delay, cheap enough to quote-cite every appeals call.

Demo moment (≤20 words): Call a mock appeals line; the agent gets a confirmation number read aloud, logged instantly in a quote-cited transcript.

Business model (≤15 words): Add-on fee per follow-up call, bundled with the filed-appeal service.

---

id: I-5104
track: balanced
lineage: ai-native
territory: none
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: [I-2547]
source_task: s7-mutator-01
---

# Household Account Change Digest

One-liner (≤20 words): Forward the notices and emails you already get; the tool turns them into one change digest, no logins required.

Buyer and niche (≤25 words): The one person in a household who runs accounts for everyone else — a spouse, an adult sibling, a family member — from their own inbox.

Pain and evidence (≤40 words; cite the pain dossier file): Proxies report wasting days trying to log into every institution just to check status; contact changes, new payees and missed payments are buried across dozens of unread notice emails instead of one place. (src: outputs/s3-ideate/pain/T8-dossier.md, P5)

How it works (≤50 words): The user forwards or CC's the institution emails and notices they already receive — statements, address-change confirmations, new-payee alerts, missed-payment notices, deadline reminders — to one inbox. An LLM reads each one and produces a weekly digest: what changed, what's overdue, and what needs a decision, with no login or stored password.

Why now (≤25 words; name the specific capability): LLMs now reliably classify and summarize inbox email at low cost, so the digest works without ever logging into an institution. [unverified]

Demo moment (≤20 words): Forward five sample notice emails; a one-page digest flags a new payee and a payment due in nine days.

Business model (≤15 words): Monthly subscription per inbox, family plan for households tracking several people's accounts.

---

id: I-5105
track: balanced
lineage: ai-native
territory: none
cell: { buyer: B2C, capability: verifier, track: balanced }
parents: [I-1019]
source_task: s7-mutator-01
---

# Reversal-Owed Charge Checker

One-liner (≤20 words): Deterministic parsing of your statements finds charges that should have been reversed but weren't, no on-device model required.

Buyer and niche (≤25 words): Anyone who reviews their own or a household's bank and card statements and wants promised refunds and cancelled trials actually checked, not guessed.

Pain and evidence (≤40 words; cite the pain dossier file): Ledger checks catch only exact vendor-and-number matches; near-duplicate charges from formatting or vendor-name differences slip through, and promised refunds, cancelled trials and duplicate holds go unnoticed for months. (src: outputs/s3-ideate/pain/T2-dossier.md, P4)

How it works (≤50 words): Upload a statement PDF or CSV; deterministic in-browser parsing flags patterns that mean money owed back: a promised refund never posted, a trial charged after cancellation, a pre-authorization hold still open, or near-duplicate postings under two merchant names. An LLM only turns each flag into a plain-English explanation.

Why now (≤25 words; name the specific capability): Browser-side PDF and CSV parsing is now fast and free, so the whole check runs client-side with an LLM only for the summary.

Demo moment (≤20 words): Upload a sample statement; a duplicate hold and an uncancelled trial charge appear flagged within seconds, fully in-browser.

Business model (≤15 words): One-time fee per statement batch, or a low monthly plan for ongoing checks.

---

id: I-5106
track: novel
lineage: ai-native
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: novel }
parents: [I-3031]
source_task: s7-mutator-01
---

# Consent-Scripted Hold Queue Agent

One-liner (≤20 words): Your voice agent works hold queues for you, but only reveals exactly the identity facts you pre-approved.

Buyer and niche (≤25 words): Consumers stuck on hold with utilities, insurers or the DMV who want a call made for them without handing over blanket account access.

Pain and evidence (≤40 words; cite the pain dossier file): Consumers dread hold queues at utilities, insurers and the DMV enough that phone makers built hold-for-me features; but those tools disclose whatever's asked, when a person would rather share only specific, pre-approved facts. (src: https://blog.google/products/pixel/hold-for-me/)

How it works (≤50 words): Before the call, the consumer writes a short consent script: exactly which identity facts (account number, last four of SSN, address) the agent may disclose and to whom. The agent waits on hold, speaks only within that script, refuses anything outside it, and logs a transcript of what it said.

Why now (≤25 words; name the specific capability): Voxtral's open realtime speech model runs local, sub-second voice dialogue, so the consent boundary can be enforced before any words reach the line.

Demo moment (≤20 words): Agent holds for a demo insurer line, is asked for a birthdate outside the script, and refuses on the call.

Business model (≤15 words): Per-call fee, or a monthly plan for frequent callers managing several ongoing disputes.

---

id: I-5107
track: novel
lineage: ai-native
territory: none
cell: { buyer: B2C, capability: local-private, track: novel }
parents: [I-3026]
source_task: s7-mutator-01
---

# Redact Before You Paste

One-liner (≤20 words): A local model hides your real medical, tax or immigration details before ChatGPT sees them, then restores them in the answer.

Buyer and niche (≤25 words): Consumers who paste their own medical results, tax numbers or immigration documents into a cloud chatbot for help understanding them.

Pain and evidence (≤40 words; cite the pain dossier file): Pasting a real diagnosis, SSN or immigration case number into a cloud chatbot risks having it retained forever, but "the more the data is sanitized, the less useful the AI output becomes." (src: outputs/s3-ideate/pain/T9-dossier.md)

How it works (≤50 words): A local model scans the pasted medical result, tax form or immigration letter, swaps names, ID numbers and dollar or date figures for placeholder tokens before sending it to the cloud chatbot. When the answer returns, a local step restores the real values before the user reads it.

Why now (≤25 words; name the specific capability): OS-level on-device models (Apple Foundation Models, Chrome built-in AI) now run capable redaction locally in the browser, free per query. [verify]

Demo moment (≤20 words): Paste a real lab result; watch names and dates leave as placeholders, a plain-English answer return with real values restored.

Business model (≤15 words): Free browser extension with a paid tier for longer documents and immigration-form templates.

---

id: I-5108
track: novel
lineage: ai-native
territory: none
cell: { buyer: B2C, capability: local-private, track: novel }
parents: [I-4553]
source_task: s7-mutator-01
---

# Attestation Drift Alert

One-liner (≤20 words): An on-device model compares your pay stubs to what you attested, before the gap becomes a clawback.

Buyer and niche (≤25 words): Individuals on ACA marketplace coverage, unemployment benefits or student aid whose actual income or work-search record can drift from what they reported.

Pain and evidence (≤40 words; cite the pain dossier file): ACA marketplace subsidies reconcile against actual year-end income, and unemployment work-search logs or student-aid income figures can drift from what was attested, turning into a repayment demand months later. (src: https://www.healthcare.gov/reporting-income-changes/) [unverified]

How it works (≤50 words): An on-device model reads pay stubs or bank deposits on the user's own phone, compares the running total against the income, hours or search-log figures they attested for ACA subsidies, unemployment or student aid, and warns before the gap crosses a threshold that would trigger repayment, all locally.

Why now (≤25 words; name the specific capability): On-device models (Apple Foundation Models, Chrome built-in AI) now read and compare local financial documents without sending income data to a server. [unverified]

Demo moment (≤20 words): Load sample pay stubs; a rising-income warning appears locally before the year-end reconciliation would claw back the subsidy.

Business model (≤15 words): Low monthly subscription, priced well under the average clawback it prevents.

---

id: I-5109
track: novel
lineage: ai-native
territory: none
cell: { buyer: B2C, capability: drafter-dialogue, track: novel }
parents: []
source_task: s7-mutator-01
---

# Live Interpreter With Transcript

One-liner (≤20 words): Live speech-to-speech interpretation for low-resource languages at a government or medical appointment, with a two-language transcript kept.

Buyer and niche (≤25 words): Limited-English speakers of low-resource languages attending a government office, clinic or benefits appointment who need real interpretation, not a chatbot guess.

Pain and evidence (≤40 words; cite the pain dossier file): 28.5M limited-English residents lost a federal language-access mandate in 2025, and AI chat gives worse answers in low-resource languages — one test returned herbal-remedy advice for chest pain in every non-English language. (src: outputs/s1-discover/cartographers/overlooked.md, overlooked-15, overlooked-16)

How it works (≤50 words): The phone runs live speech-to-speech interpretation between English and the user's language during the appointment, spoken aloud on both sides. Every exchange is logged as a two-language transcript, timestamped and exportable, so a denied benefit or disputed diagnosis has a record of what was said.

Why now (≤25 words; name the specific capability): Live speech-to-speech models now handle pairs like Haitian Creole–English in near-real time, distinct from caption-only tools. [unverified]

Demo moment (≤20 words): A mock clinic visit is interpreted live in Haitian Creole and English; the two-language transcript exports as PDF.

Business model (≤15 words): Per-appointment fee, or a monthly plan for patients and applicants with recurring appointments.

<!-- COMPLETE -->
