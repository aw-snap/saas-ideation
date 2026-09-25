## Cards

---
id: s3-ideator-balanced-T5-02-r3#01
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
---

# The Insurer Question, By Reply

One-liner (≤20 words): Forward the cyber-insurance renewal PDF; get back every answer, verified against your real consoles, in one reply.

Buyer and niche (≤25 words): The one person who owns IT, HR and compliance at a 5-50 person firm, renewing cyber insurance alone.

Pain and evidence (≤40 words; cite the pain dossier file): Renewals run 60-150 control questions and an optimistic "yes" can void the policy after a claim; there is no team to split the work, and no time to learn a new portal. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): One-time console access is granted by email link. After that, every renewal starts the same way: forward the PDF to a dedicated address. The agent checks MFA scope, backups and endpoint coverage across consoles and replies with the completed form and screenshot citations attached, nothing to log into.

Why now (≤25 words; name the specific capability): Claude for Chrome (TC-03) drives admin consoles inside a stored session, so the only human step left is forwarding an email.

Demo moment (≤20 words): Forward a sample PDF; three minutes later, a reply arrives with the form filled and one flagged gap.

Business model (≤15 words): Flat fee per renewal, billed the same email address that triggered it.

---
id: s3-ideator-balanced-T5-02-r3#02
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
---

# Forward It Before You Pay It

One-liner (≤20 words): Forward any vendor payment-change email to one address; get a hold-or-clear verdict before the wire goes out.

Buyer and niche (≤25 words): The sole owner or bookkeeper who is also the entire accounts-payable department at a small firm.

Pain and evidence (≤40 words; cite the pain dossier file): Business-email-compromise losses average $137k+ per incident; the only defense is a phone callback that depends on one busy person remembering to make it, every time. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): No dashboard, no rules to configure. Forward a suspicious invoice or "our bank changed" email to the checking address. The agent compares the new account, domain and phrasing against payment history and prior correspondence, then replies HOLD with the exact mismatch, or CLEAR, inside the same thread.

Why now (≤25 words; name the specific capability): Mistral OCR 3 (TC-30) reads invoice attachments at $2 per 1,000 pages, cheap enough to check every forwarded email, not just flagged ones.

Demo moment (≤20 words): Forward a spoofed invoice with a changed account number; the HOLD reply names the exact discrepancy within a minute.

Business model (≤15 words): Per-firm monthly fee, priced against a single prevented fraud payment.

---
id: s3-ideator-balanced-T5-02-r3#03
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
---

# One Email Confirms The Affirmation

One-liner (≤20 words): The owner emails "affirm us"; the agent checks the controls first and only sends what is actually true.

Buyer and niche (≤25 words): The owner of a 5-50 person DoD manufacturing subcontractor who is also the acting compliance officer, filing the annual SPRS affirmation alone.

Pain and evidence (≤40 words; cite the pain dossier file): A wrong attestation has cost small contractors $421k and $507k in False Claims Act settlements, often surfaced by a whistleblower; there is no compliance staff to check the claim before it is signed. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): Once a year, the owner emails a one-line request. The agent walks the shop's network, ERP and endpoint consoles, checks each NIST 800-171 control against what was last affirmed, and replies with the draft affirmation plus a short list of controls that regressed since last year, before anything is signed.

Why now (≤25 words; name the specific capability): browser-use (TC-06) drives legacy shop-floor and ERP consoles for cents per hour, cheap enough to re-check every control every year.

Demo moment (≤20 words): One email in; reply lists one control that quietly regressed, with the console screenshot proving it.

Business model (≤15 words): Fixed annual fee, priced well under a single C3PAO reassessment cycle.

---
id: s3-ideator-balanced-T5-02-r3#04
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: extractor, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
---

# The Reminder That Already Did The Homework

One-liner (≤20 words): An annual email arrives with the risk analysis already drafted from last year's, so it never lapses.

Buyer and niche (≤25 words): A solo medical or dental practice owner with no compliance staff, who has already outgrown the free 156-question SRA Tool.

Pain and evidence (≤40 words; cite the pain dossier file): OCR's most-cited violation is a missing or stale risk analysis, with settlements up to $350k; solo owners "quickly outgrow" the free tool and nobody remembers to redo it on their own. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): There is nothing to log into and no one else to assign the task to, so the system starts it: once a year an email arrives with last year's answers pre-filled against the practice's current device list and vendor contracts, asking only "confirm, or tell me what changed" by reply.

Why now (≤25 words; name the specific capability): 1M-token context (TC-25) re-reads the whole prior file each year, so the redo is a comparison, not a blank 156-question form.

Demo moment (≤20 words): The reminder email arrives with three answers already changed and flagged, needing only a reply to confirm.

Business model (≤15 words): Annual subscription per practice, billed automatically on the same yearly cadence.

---
id: s3-ideator-balanced-T5-02-r3#05
track: balanced
lineage: ai-native
territory: T5
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T5-02-r3
---

# Reply YES To Re-Home This Key

One-liner (≤20 words): One email per orphaned credential, each asking a yes-or-no question, until every automation has its own owner again.

Buyer and niche (≤25 words): The sole IT admin at a small firm who is offboarding someone that built integrations nobody else understands.

Pain and evidence (≤40 words; cite the pain dossier file): Automations run on shared service accounts and personal API keys with no inventory; hunting them down is a one-person job with no checklist and no second reviewer to catch what's missed. (src: outputs/s3-ideate/pain/T5-dossier.md)

How it works (≤50 words): No inventory screen to review. After a departure, the agent scans connected consoles and webhook logs for keys and automations tied to that person, then sends one short email per finding: "This nightly backup runs on Dana's key. Reply YES to re-issue it under a new agent identity." Each reply resolves one item.

Why now (≤25 words; name the specific capability): Okta Agent SSO (TC-17) gives each re-homed automation its own governed identity, live since August 2026, instead of another shared password.

Demo moment (≤20 words): Live: reply YES to one email; a demo automation is re-issued under a fresh identity within seconds.

Business model (≤15 words): Per-offboarding fee, one price whether it finds one credential or twenty.

<!-- COMPLETE -->
