## Cards

---
id: s3-ideator-novel-T7-02-r3#01
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r3
---

# Screen-Side Cite Bailiff

One-liner (≤20 words): Watches your open document, drives a browser to check each citation itself, and locks e-filing until you clear every flag.
Buyer and niche (≤25 words): Solo and small-firm litigators drafting motions in Word or Google Docs, filing through court e-filing portals with no citation-check integration.
Pain and evidence (≤40 words; cite the pain dossier file): Fabricated citations reach courts; one firm paid $59,500 to the opposing side, and even paid legal AI still hallucinates at 17-43%, so every brief needs an independent check. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): An agent reads the open document by vision, extracts each citation, opens a new browser tab, types the citation into a case-law search box the way a clerk would, and reads the result. The portal's submit button stays greyed out until the attorney manually clears every flagged citation.
Why now (≤25 words; name the specific capability): Claude Sonnet 4.5 computer use (TC-02, 61.4% OSWorld) reads on-screen documents and drives a search tab with no citation-database integration.
Demo moment (≤20 words): Type a fake case into the live document; the agent searches it, flags it red, and blocks submit until manually cleared.
Business model (≤15 words): Monthly subscription per attorney, priced well below the cost of one sanction.

---
id: s3-ideator-novel-T7-02-r3#02
track: novel
lineage: ai-native
territory: T7
cell: { buyer: prosumer, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r3
---

# Report Reply Guard

One-liner (≤20 words): Watches your issue tracker, reproduces each vulnerability report in a sandbox, and queues every reply for your own click to send.
Buyer and niche (≤25 words): Volunteer maintainers of high-traffic open-source projects overwhelmed by AI-generated vulnerability reports, without bounty-platform API access or budget.
Pain and evidence (≤40 words; cite the pain dossier file): curl's maintainer said slop reports "take a serious mental toll... not even one in twenty was real," and each still costs 30 minutes to hours before it can be closed. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): The agent watches the maintainer's browser as new issues arrive, opens each one, checks out the referenced commit, and attempts the described exploit in a disposable sandbox. It drafts a close-as-invalid or escalate reply, but nothing posts automatically; every draft waits as a queued card until the maintainer clicks send.
Why now (≤25 words; name the specific capability): browser-use (TC-06) drives the tracker's own web UI directly, so no GitHub API token or bounty-platform integration is ever required.
Demo moment (≤20 words): A fake and a real report arrive; the sandbox proves one is bogus, both replies sit queued until sent by hand.
Business model (≤15 words): Foundation-sponsored flat fee per open-source project protected.

---
id: s3-ideator-novel-T7-02-r3#03
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r3
---

# Claims Portal Shadow

One-liner (≤20 words): Watches the legacy claims screen, pulls the source file itself, and blocks payout approval until every mismatch is cleared.
Buyer and niche (≤25 words): Independent adjusters and small adjusting firms on legacy claims systems with no export API, signing off on carrier AI summaries.
Pain and evidence (≤40 words; cite the pain dossier file): Carrier AI hallucinates on "a smudge on a document" and the adjuster "bears the brunt" when the error changes a payout; 98% of adjusters' AI-related reviews are negative. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): The agent watches the claims-system screen as a file opens, drives that same legacy interface tab by tab to pull up the medical report, photos and estimate since no export API exists, compares each summary sentence to what's on screen, and disables the approve-payout button until every mismatch is checked off.
Why now (≤25 words; name the specific capability): Skyvern (TC-07) already drives forms and logins inside exactly this kind of no-API legacy claims portal.
Demo moment (≤20 words): Open a claim with an invented summary detail; the payout button stays locked until the flagged mismatch is cleared.
Business model (≤15 words): Per-seat subscription to adjusting firms, priced per claim reviewed.

---
id: s3-ideator-novel-T7-02-r3#04
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r3
---

# Docket Watch Overlay

One-liner (≤20 words): Sits on top of the court's old e-filing desktop app and won't let a clerk accept a filing with unresolved fake citations.
Buyer and niche (≤25 words): Court clerks and pro se intake staff running decades-old e-filing desktop software with no screening capacity and no API.
Pain and evidence (≤40 words; cite the pain dossier file): Judges report "scant resources to spare ferreting out erroneous AI citations," and pro se filers, 59% of documented hallucination cases, get no AI-usage guidance at intake. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): The overlay watches the clerk's e-filing desktop app as each new filing opens, reads the document on screen, opens a browser tab to check every citation the way a clerk would search it, and inserts a confirm dialog on the app's own accept-filing button naming which citations failed to resolve.
Why now (≤25 words; name the specific capability): Desktop-capable computer use (TC-02) operates the old e-filing application directly, since decades-old court software has no API to hook into.
Demo moment (≤20 words): Open a sample filing with one fake case in the legacy app; the accept button now shows a confirm dialog naming it.
Business model (≤15 words): Court-IT or state-bar-funded license, priced per docket screened.

---
id: s3-ideator-novel-T7-02-r3#05
track: novel
lineage: ai-native
territory: T7
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T7-02-r3
---

# CVE Portal Sentinel

One-liner (≤20 words): Watches the CVE submission form and locks Publish until the analyst confirms your agent's own reproduction attempt.
Buyer and niche (≤25 words): CVE Numbering Authority analysts and vendor product-security teams reviewing AI-drafted submissions on a portal with no verification API.
Pain and evidence (≤40 words; cite the pain dossier file): Six "complete garbage" SQLite CVEs entered the public record while NVD now enriches only 15-20% of incoming submissions and the unreviewed backlog exceeded 27,000. (src: outputs/s3-ideate/pain/T7-dossier.md)
How it works (≤50 words): The sentinel watches the analyst's browser as a draft record opens, reads the cited commit and function straight off the screen, checks out that code in a sandbox, attempts the described trigger, and overlays a pass-or-fail banner on the portal page. Publish stays disabled until the analyst clicks a confirm box acknowledging the result.
Why now (≤25 words; name the specific capability): Computer-use browsing (TC-02) reads and reproduces directly from the submission portal's own screen, with no backend database integration.
Demo moment (≤20 words): Open a draft citing a nonexistent function on the live portal; the sentinel overlays "FAIL" and Publish stays locked.
Business model (≤15 words): Per-seat license to CNAs and vendor security teams, billed per record reviewed.

<!-- COMPLETE -->
