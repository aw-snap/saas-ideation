## Cards

---
id: s3-ideator-balanced-T1-02-r3#01
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r3
---

# Talk-to-the-Portal

One-liner (≤20 words): Speak a patient and procedure aloud; the agent fills the payer's own portal form and reads back the confirmation.

Buyer and niche (≤25 words): Front-desk and prior-auth staff at small practices, many newly hired or working a second language, who fill dense multi-field payer forms all day.

Pain and evidence (≤40 words): 39 prior-auth requests per physician per week take 16-24 minutes each on portals whose forms and jargon assume a fluent, unhurried reader. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): The staffer speaks the patient, procedure and diagnosis; the agent visually reads each payer portal's field labels, matches them to the spoken answers, clicks and types directly on screen with no API call, then speaks the submitted confirmation number back aloud.

Why now: Claude Sonnet 4.5 computer use (TC-02, 61.4% OSWorld) locates and fills on-screen fields by sight; gpt-realtime (TC-27) closes the voice loop.

Demo moment (≤20 words): Say "authorize MRI, patient Ramirez"; portal fields autofill live and a spoken confirmation number plays back.

Business model (≤15 words): Per-seat monthly subscription, priced against the staff hours a submission currently costs.

---
id: s3-ideator-balanced-T1-02-r3#02
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r3
---

# Traffic-Light Denial Board

One-liner (≤20 words): Every open denial becomes a red, yellow or green icon; tap one and hear the next action, no jargon paragraph to parse.

Buyer and niche (≤25 words): Billers and denial specialists at small practices who currently dig through portal pages of dense reason and remark codes to find what to do next.

Pain and evidence (≤40 words): Payer denial information is "never accessible" or "incomplete and inaccurate," forcing exhaustive cross-portal research before a claim can even be reworked. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): The agent visits each connected portal, visually reads every open denial's status and deadline off the screen with no API, classifies it into a color icon by urgency, and speaks a one-sentence plain-language next step aloud the moment the icon is tapped.

Why now: Screen-reading computer use (TC-02) plus ElevenLabs conversational TTS (TC-38) turn a page of insurer jargon into one spoken sentence per denial.

Demo moment (≤20 words): Tap a red icon; hear "missing modifier, appeal by Friday" spoken instantly, no text on screen read.

Business model (≤15 words): Monthly subscription per practice, tiered by open-denial volume.

---
id: s3-ideator-balanced-T1-02-r3#03
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r3
---

# Eligibility By Ear

One-liner (≤20 words): Ask if a patient is covered today; the agent drives the payer portal in the background and speaks back the answer.

Buyer and niche (≤25 words): Front-desk staff juggling 7-11+ payer portals before every visit, without time or patience to read each portal's coverage-detail layout.

Pain and evidence (≤40 words): Practices juggle 7-11+ payer portals just to confirm coverage before a visit, each with its own login and layout that assumes a fluent reader. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): On a spoken patient name, the agent opens that patient's payer portal, navigates to eligibility with on-screen clicks and no API call, extracts deductible, copay and active-or-inactive status, and speaks a one-line plain-language summary back before the front desk finishes checking the patient in.

Why now: Computer-use screen agents (TC-02) plus low-latency speech-to-speech (TC-27, roughly 300ms round trip) make a spoken answer faster than reading a dashboard.

Demo moment (≤20 words): Ask "is Johnson covered today?"; hear the spoken answer while the portal is still loading in the background.

Business model (≤15 words): Per-practice monthly fee, scaled by number of connected payer portals.

---
id: s3-ideator-balanced-T1-02-r3#04
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r3
---

# Read-Aloud Login Guardian

One-liner (≤20 words): Watches for 2FA codes and lockout screens, reads them aloud, and types the response so no one squints at tiny text.

Buyer and niche (≤25 words): Any staffer logging into payer portals daily, especially those who find dense authenticator-app screens and six-digit codes hard to read quickly.

Pain and evidence (≤40 words): Mandatory authenticator-app 2FA on every login is rated 1.0/5 on the App Store, and lockouts are fixed only by creating a brand-new account and waiting for approval. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): The agent watches the portal and authenticator-app screens for a 2FA prompt or lockout message, reads the challenge and any code aloud, waits for a spoken "yes, that's me," then types the response directly into the on-screen field, no API and nothing on screen the staffer has to read first.

Why now: Computer-use vision (TC-02) reads small on-screen digits and prompts reliably; the same model speaks and confirms without OCR tooling bolted on.

Demo moment (≤20 words): A 2FA prompt appears; the code is read aloud and auto-entered before the staffer would have finished reading it.

Business model (≤15 words): Flat monthly fee per practice, covering every connected portal login.

---
id: s3-ideator-balanced-T1-02-r3#05
track: balanced
lineage: ai-native
territory: T1
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T1-02-r3
---

# Spoken Appeal Filer

One-liner (≤20 words): Describe a denial in two spoken sentences; hear the drafted appeal read back and say "file it" to submit.

Buyer and niche (≤25 words): Practice staff appealing Medicare Advantage denials who are not comfortable drafting or reading dense policy-citation letters themselves.

Pain and evidence (≤40 words): 81.7% of appealed Medicare Advantage denials are overturned, yet each appeal still needs someone to read the payer's policy language and draft a citation-matched letter from scratch. (src: outputs/s3-ideate/pain/T1-dossier.md)

How it works (≤50 words): The staffer describes the denial aloud; the agent visually reads the denial notice and the payer's published policy page directly off the portal, no API, drafts an appeal citing the policy's own language, reads the draft back sentence by sentence for a spoken yes or edit, then submits it on screen.

Why now: Computer-use screen reading (TC-02) pulls policy text straight off the portal page; conversational TTS (TC-38) makes a spoken review loop practical.

Demo moment (≤20 words): Say "they denied the MRI, not medically necessary"; hear the drafted appeal read aloud, say "file it," watch it submit.

Business model (≤15 words): Per-appeal fee, priced well under the staff hours an appeal currently takes.

<!-- COMPLETE -->
