## Cards

---
id: s3-ideator-novel-T3-01-r2#01
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r2
---

# No-API Portal MCP Adapter

One-liner (≤20 words): Turns any locked practice-management system or payer portal into a standard tool server any AI agent can call.

Buyer and niche (≤25 words): Small software vendors and IT consultants serving dental, veterinary, dealer and medical-billing shops who need locked systems to work with modern AI tool stacks.

Pain and evidence (≤40 words; cite the pain dossier file): Dentrix and Yardi charge $5,000-$25,000 for API access or bar whole categories outright, while payer portals like Availity expose no usable API at all, only screens. (src: outputs/s3-ideate/pain/T3-dossier.md P1, P3; outputs/s3-ideate/pain/T1-dossier.md P9, P10)

How it works (≤50 words): A computer-use agent logs into the target portal or desktop app as a real authorized user, then exposes its reads and writes as callable tools: get_record, submit_claim, check_status. Any AI stack, including the practice's own, then queries the locked system exactly like a normal API, with no vendor toll paid.

Why now (≤25 words): A 31,000-server tool-server ecosystem already exists and expects this interface (TC-11); Sonnet 4.5 computer use (TC-02) makes screen-to-tool bridging reliable enough to publish.

Demo moment (≤20 words): Call the adapter's submit-claim tool from a generic AI client; watch it fill and submit inside the real locked portal, live.

Business model (≤15 words): Per-connector monthly fee, paid by the vendor or practice, priced under the API toll it replaces.

---
id: s3-ideator-novel-T3-01-r2#02
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r2
---

# Carrier Claim Denial Resubmit Agent

One-liner (≤20 words): Watches carrier claim portals from inside the agency management system and drafts appeals the moment a claim is denied.

Buyer and niche (≤25 words): CSRs and account managers at property-casualty insurance agencies on Applied Epic or AMS360 who track claims across many carrier portals by hand.

Pain and evidence (≤40 words; cite the pain dossier file): Agencies re-key claims across rating tools, carrier sites and the AMS ("double and triple entry"); like health-plan denials, most contested claims succeed on appeal, but no one has time to file them. (src: outputs/s3-ideate/pain/T3-dossier.md P6; outputs/s3-ideate/pain/T1-dossier.md P5)

How it works (≤50 words): The agent stays logged into each carrier's claim portal from the agency's own session, matches claim status against Applied Epic daily, and for any denial drafts an appeal packet pre-filled from the agency's own policy and claim records, ready for a CSR to review and file within minutes.

Why now (≤25 words): Claude for Chrome (TC-03, production since Dec 2025) holds authenticated sessions across many carrier sites at once as the CSR, without sharing credentials.

Demo moment (≤20 words): Mark a mock claim denied in a carrier portal; a ready-to-file appeal packet appears in Epic seconds later.

Business model (≤15 words): Per-seat monthly fee to agencies, priced against recovered claim value.

---
id: s3-ideator-novel-T3-01-r2#03
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r2
---

# Pharmacy Claim Rebound Agent

One-liner (≤20 words): Reads PioneerRx's own screen, catches rejected pharmacy claims, and resubmits them against the payer with a corrected reason code.

Buyer and niche (≤25 words): Independent pharmacy owners and technicians on PioneerRx who cannot get self-serve API access and manually rework every rejected claim.

Pain and evidence (≤40 words; cite the pain dossier file): PioneerRx API access is gated behind a manual vendor form with no status page; separately, claim denials keep rising and most are recoverable if someone actually reworks and resubmits them. (src: outputs/s3-ideate/pain/T3-dossier.md P3; outputs/s3-ideate/pain/T1-dossier.md P7, P9)

How it works (≤50 words): The agent watches the PioneerRx claims screen for rejections, reads the payer's rejection reason, cross-checks it against the patient and plan data already in PioneerRx, corrects the field the payer flagged, and resubmits through the same screen, logging every rebound for the pharmacist to spot-check.

Why now (≤25 words): Skyvern, a production-adjacent legacy-portal agent (TC-07), was built for exactly this class of no-API, no-status-page system, cheap enough for one pharmacy location.

Demo moment (≤20 words): Inject a mock rejected claim; the agent reads the reason, corrects the field and resubmits live within the demo.

Business model (≤15 words): Small flat monthly fee per pharmacy location, priced against one recovered claim.

---
id: s3-ideator-novel-T3-01-r2#04
track: novel
lineage: ai-native
territory: T3
cell: { buyer: B2B, capability: screen-agent, track: novel }
parents: []
source_task: s3-ideator-novel-T3-01-r2
---

# Imaging Portal Session Bridge

One-liner (≤20 words): Keeps a dental office logged into every paid imaging partner portal, so front desk staff never re-authenticate mid-appointment.

Buyer and niche (≤25 words): Dental office managers who pay separately for each imaging partner tier on top of their practice-management system and juggle logins between them.

Pain and evidence (≤40 words; cite the pain dossier file): Imaging partner tiers cost $10,000-$50,000 on top of the core system, and multi-portal login friction elsewhere shows the same pattern: constant re-authentication, expired sessions and lockouts that force a fresh account. (src: outputs/s3-ideate/pain/T3-dossier.md P1; outputs/s3-ideate/pain/T1-dossier.md P11)

How it works (≤50 words): A background agent holds an authenticated session open in the practice-management system and every connected imaging portal, refreshing tokens and passing 2FA challenges through a registered device before they expire, so staff switch screens mid-appointment without ever hitting a login wall or a locked-out account.

Why now (≤25 words): Claude for Chrome (TC-03) runs inside the staff member's own logged-in browser continuously, at an 11.2% mitigated prompt-injection rate, safe enough for daily clinical use.

Demo moment (≤20 words): Force a session timeout on the imaging portal mid-demo; the bridge silently re-authenticates before the next click lands.

Business model (≤15 words): Flat per-location monthly fee, cheaper than the vendor's own paid SSO tier.

---
id: s3-ideator-novel-T3-01-r2#05
track: novel
lineage: seed-atom-hybrid
territory: T3
cell: { buyer: B2B, capability: verifier, track: novel }
parents: [A-seed-01-insight-1, A-seed-05-mech-3]
source_task: s3-ideator-novel-T3-01-r2
---

# Pre-Submit Fit Check

One-liner (≤20 words): Checks every field about to be typed into an external portal against the locked system's own record before you hit submit.

Buyer and niche (≤25 words): Office managers in dental, veterinary and dealer shops who re-key data from their locked system into claim, DMV or OEM portals and get rejections back.

Pain and evidence (≤40 words; cite the pain dossier file): Re-keying between the system of record and outside portals causes mismatched IDs and rebuilt records after failed transfers, and the same mismatch pattern makes external portals bounce submissions and create duplicate work downstream. (src: outputs/s3-ideate/pain/T3-dossier.md P5, P6; outputs/s3-ideate/pain/T1-dossier.md P10)

How it works (≤50 words): Before a staff member submits a form, the agent pulls the matching record from the locked system and compares every field like checking a drawing against survey data before it's locked in, not just eyeballing it. Mismatches are flagged with the exact source field; a one-click "use source value" fix updates the form, never the record.

Why now (≤25 words): Sonnet 4.5 computer use (TC-02) reads both screens simultaneously in one session, cheap enough to run this check on every single submission.

Demo moment (≤20 words): Type a mismatched policy number; the agent flags it against the source record and offers the correct value before submit.

Business model (≤15 words): Per-seat monthly fee, priced against one avoided rejected claim or failed filing.

<!-- COMPLETE -->
