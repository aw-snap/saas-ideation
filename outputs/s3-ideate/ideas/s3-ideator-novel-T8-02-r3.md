## Cards

---
id: s3-ideator-novel-T8-02-r3#01
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
---

# Renewal Agent That Learns Once

One-liner (≤20 words): Watches the proxy complete one Medicaid renewal, then replays and adapts the exact steps every year after.

Buyer and niche (≤25 words): Adult children and daily money managers handling an aging parent's annual Medicaid long-term-care renewal across state portals.

Pain and evidence (≤40 words; cite the pain dossier file): 69% of 2024 disenrollments were procedural, not eligibility-based, inside a 30-day mailed-packet window that resets every year. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy completes one renewal live while a screen agent observes every click, field and uploaded document; it encodes that single walkthrough as the parent's personal renewal procedure, then next year detects the new packet, pre-fills each field from updated documents, and asks for one confirmation before submitting.

Why now (≤25 words; name the specific capability): Claude Sonnet 4.5's screen-observing computer use (TC-02) can encode one demonstrated portal walkthrough as a reusable, adaptable procedure.

Demo moment (≤20 words): Record a sample renewal step; next "year's" trigger replays it against new mock documents, pausing for one confirmation.

Business model (≤15 words): $89 flat fee once a year per parent's renewal, billed at renewal time.

---
id: s3-ideator-novel-T8-02-r3#02
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: extractor, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
---

# Fiduciary Accounting Learned Once

One-liner (≤20 words): Learns a payee's categorization from one narrated walkthrough, then drafts the whole year's mandatory accounting alone.

Buyer and niche (≤25 words): Family members serving as SSA representative payees or VA fiduciaries for an aging parent, filing mandatory annual accountings.

Pain and evidence (≤40 words; cite the pain dossier file): SSA OIG audits whether payees "used and accounted for" every dollar, VA fiduciaries file annual accountings, and today's workaround is manual books and spreadsheets. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Once, the payee narrates a month of transactions, labeling each as medical, housing, allowance or other; the agent learns that personal categorization scheme from the single session, then at year-end pulls twelve months of statements, applies the learned scheme, and drafts the completed accounting form for review.

Why now (≤25 words; name the specific capability): 1M-token context (TC-25) holds a full year of transactions, so one demonstrated categorization scheme generalizes without a separate training set.

Demo moment (≤20 words): Narrate five sample transactions once; a year of mock statements gets auto-categorized and the accounting form appears seconds later.

Business model (≤15 words): $149 once a year per filed accounting, timed to the mandatory filing date.

---
id: s3-ideator-novel-T8-02-r3#03
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
---

# Open Enrollment Decision, Learned Once

One-liner (≤20 words): Learns how a family judged last year's Medicare Advantage plans, then re-runs that judgment on every new plan menu.

Buyer and niche (≤25 words): Adult children who chose a parent's Medicare Advantage plan and must reconsider it every Annual Enrollment Period.

Pain and evidence (≤40 words; cite the pain dossier file): A plan chosen for a parent "turns bad" mid-crisis; providers can leave the network mid-year while the member stays locked in until fall. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): During one enrollment session, the family compares plans aloud, naming which doctors, drugs and network ties matter and why; the agent learns those weighted priorities from that single session, then each following Annual Enrollment Period scores the new year's plan menu against the same priorities and flags if switching beats staying.

Why now (≤25 words; name the specific capability): Long-context plan-document comparison (TC-25) lets one learned priority set be cheaply re-applied against a new year's full plan catalog.

Demo moment (≤20 words): State three priorities once; the agent scores five mock plans and flags the one that now beats the current plan.

Business model (≤15 words): $39 once a year during open enrollment, per parent covered.

---
id: s3-ideator-novel-T8-02-r3#04
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
---

# A Year's Spending, Reviewed Once

One-liner (≤20 words): Learns what's normal for one parent from a single labeling session, then re-checks a whole year of transactions once annually.

Buyer and niche (≤25 words): Adult children who want an affordable yearly fraud check on a parent's accounts without paying for continuous monitoring.

Pain and evidence (≤40 words; cite the pain dossier file): 147,127 elder-fraud complaints in 2024 (up 46%), $4.885B lost, and families "notice weeks or months later," once the money is already gone. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): Once, the proxy labels a sample of a parent's transactions as normal or suspicious, narrating why (recurring grandkid transfers are fine, new payees over $200 aren't); the agent learns that personal baseline from the single session, then once a year re-scans the full year's statements against it and returns a short, prioritized exception list.

Why now (≤25 words; name the specific capability): Cheap 1M-token review (TC-25) makes a full annual statement re-scan against a one-shot personal baseline affordable at a consumer price.

Demo moment (≤20 words): Label four sample transactions once; a year of mock statements returns three flagged exceptions with reasons shown.

Business model (≤15 words): $49 once a year per parent, positioned as a tax-season financial checkup.

---
id: s3-ideator-novel-T8-02-r3#05
track: novel
lineage: ai-native
territory: T8
cell: { buyer: B2C, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T8-02-r3
---

# Designations, Checked Once a Year

One-liner (≤20 words): Learns how the proxy checks beneficiary and ownership designations once, then re-audits every account for drift annually.

Buyer and niche (≤25 words): Adult children acting as financial proxies who want to catch wrong account setups before a crisis or death.

Pain and evidence (≤40 words; cite the pain dossier file): Banks default families to joint ownership over convenience-signer status, risking Medicaid disqualification, and "each bank... wants its own" process, discovered only after death. (src: outputs/s3-ideate/pain/T8-dossier.md)

How it works (≤50 words): The proxy shows the agent, once, how they check an account's ownership type and beneficiary designation on one institution's site; a screen agent learns that check from the single demonstration, then applies it once a year across every linked account, flagging any joint-ownership or missing-beneficiary drift before it becomes a Medicaid or estate problem.

Why now (≤25 words; name the specific capability): Claude for Chrome (TC-03) operates inside the proxy's own logged-in session, so one demonstrated check generalizes across every institution with no new integration.

Demo moment (≤20 words): Demonstrate one designation check; the agent runs it across three mock accounts and flags one wrongly set to joint ownership.

Business model (≤15 words): $59 once a year per parent, bundled as an annual "accounts health check".

<!-- COMPLETE -->
