## Cards

---
id: s3-ideator-novel-T6-02-r3#01
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r3
---

# Camera-Only CAPTCHA Relay

One-liner (≤20 words): A phone photo of a stuck CAPTCHA is solved by a vision model and released only after a human taps to confirm.

Buyer and niche (≤25 words): Ops teams running browser-agent fleets on claims, billing or portal work who lose runs to CAPTCHAs their agents cannot pass.

Pain and evidence (≤40 words; cite the pain dossier file): The best agents solve only 40.0% of CAPTCHAs against 93.3% for humans, and the run fails until a human steps in with no fast, low-friction way to do it. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): The agent pauses at a CAPTCHA and shows it on a shared screen; the on-call human's only input is their phone camera photographing the challenge, no typing or mouse; a vision model reads it and drafts a solve, which the human approves with one tap before it is submitted.

Why now (≤25 words): Meta SAM 3 [TC-34] segments and identifies named objects in an image in real time, letting a phone snapshot resolve "select all crosswalks" grids.

Demo moment (≤20 words): A live CAPTCHA freezes an agent; a phone photo drafts the solve in under a second; one tap submits it.

Business model (≤15 words): Per-solve fee charged to agent operators, billed as a micropayment per handoff.

---
id: s3-ideator-novel-T6-02-r3#02
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r3
---

# Live-Photo Vouch Badge

One-liner (≤20 words): A one-off phone photo against a live challenge proves a visitor is human, so owners stop over-blocking real readers.

Buyer and niche (≤25 words): Small forum, wiki and FOSS site owners who cannot tell AI crawlers from real visitors and resort to blocking whole countries or browsers.

Pain and evidence (≤40 words; cite the pain dossier file): Fedora blocked all of Brazil, Anubis breaks RSS readers and JS-hardened browsers, and owners call it "a neverending game of whack-a-mole" with no allowlist toggle to tell agents apart. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): When traffic looks bot-like, the visitor's only input is their phone camera pointed at a one-time on-screen code; the photo is checked for real depth and motion instead of a replayed screenshot, and the site owner sees the verdict and taps once to permanently allow that visitor pattern through.

Why now (≤25 words): Meta SAM 3 [TC-34] tracks and grounds real-world concepts in a live image, distinguishing a genuine photographed scene from a static screenshot.

Demo moment (≤20 words): A flagged reader's phone photo clears in three seconds, live, with no country-wide ban needed to stop the bots.

Business model (≤15 words): Flat monthly fee per site, tiered by traffic volume.

---
id: s3-ideator-novel-T6-02-r3#03
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r3
---

# Camera-Witnessed Delegation

One-liner (≤20 words): Every irreversible action an agent takes inside your account needs a fresh phone photo of that exact screen, tapped to approve.

Buyer and niche (≤25 words): Companies whose agents act inside customer accounts for billing, shopping or admin tasks, needing proof the site itself authorized the access.

Pain and evidence (≤40 words; cite the pain dossier file): A court barred an agent from a site despite the user's permission, finding access "with the Amazon user's permission but without authorization by Amazon" after the agent spoofed a normal browser. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before any state-changing step, the agent renders the exact action on screen; the user's only input is photographing that screen with their phone camera, nothing typed; the photo, timestamp and action bundle into a signed record, and the step only executes once the user taps approve on that photo.

Why now (≤25 words): Mistral OCR 3 [TC-30] reads photographed screens and forms accurately enough to turn a snapshot into a verifiable authorization record.

Demo moment (≤20 words): Agent proposes "cancel subscription"; user photographs the confirm screen, taps approve, the signed photo-record executes it live.

Business model (≤15 words): Per-active-agent monthly fee charged to the company deploying agents.

---
id: s3-ideator-novel-T6-02-r3#04
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r3
---

# Checkout Liveness Snapshot

One-liner (≤20 words): A live phone photo of the checkout screen proves a real buyer, not a script, before any card is charged.

Buyer and niche (≤25 words): Small merchants hit by card-testing and scalper bursts who cannot afford fraud protection gated behind $2,000-a-month plans.

Pain and evidence (≤40 words; cite the pain dossier file): Scalper bots "check out in under two seconds," and advanced bot protection only comes on "$2000+/month plans," leaving small merchants with fraudulent-order piles and unrefunded processing fees. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Above a merchant-set order value, checkout pauses and shows a one-time code; the buyer's only input is a phone photo of that code on their own screen; a vision model confirms it is a live device photo, not a script-submitted string, and staff taps once to release the charge.

Why now (≤25 words): Meta SAM 3 [TC-34] verifies a photo shows a real device screen at correct viewing depth, catching scripted card-testers a form field cannot.

Demo moment (≤20 words): A script submits a fake code string and is blocked instantly; a real buyer's phone photo clears the charge in seconds.

Business model (≤15 words): Per-verified-order fee, far under existing $2,000-a-month fraud suites.

---
id: s3-ideator-novel-T6-02-r3#05
track: novel
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: novel }
parents: []
source_task: s3-ideator-novel-T6-02-r3
---

# Trusted-Reader Photo Pass

One-liner (≤20 words): Known human subscribers scan a one-time code with their phone camera to earn a standing pass past crawler defenses.

Buyer and niche (≤25 words): Small independent publishers and FOSS sites facing default crawler blocks and bills for bot traffic they cannot tell apart from real readers.

Pain and evidence (≤40 words; cite the pain dossier file): Since 15 Sept 2026, mixed-use crawlers are blocked by default on ad-bearing pages, while ProtonDB pays "$500/month in excess bandwidth" and forums report traffic that "quintupled" overnight, hurting real readers too. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A subscriber's only input is their phone camera scanning a one-time QR shown after login; the photo becomes a signed device credential; the publisher reviews it once and taps approve to add a standing bypass for that device, cutting crawler-defense friction for real humans without opening the gate to bots.

Why now (≤25 words): Cloudflare's 15 Sept 2026 default crawler block [TC-16] forces every affected publisher to decide who gets through right now.

Demo moment (≤20 words): A blocked human reader scans the QR; the publisher taps approve; that device reads freely from then on.

Business model (≤15 words): Flat monthly fee per site, plus a small per-approved-device charge.

<!-- COMPLETE -->
