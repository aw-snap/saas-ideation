## Cards

---
id: s3-ideator-balanced-T6-01-r3#01
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r3
---

# Call-In Apply Line for Portals

One-liner (≤20 words): Candidates call one number, speak their answers, and an agent submits the application into the client's online portal.

Buyer and niche (≤25 words): Staffing agencies placing warehouse, hospitality and gig workers who can't reliably fill in long online client VMS or job-board application forms.

Pain and evidence (≤40 words): Client VMS portals sit behind CAPTCHAs and login walls that even agents solve only 40% of the time versus 93% for humans, and unreadable long forms lose low-literacy candidates before submission. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A toll-free line answers with a spoken conversation collecting work history, availability and ID numbers. A screen-reading agent then logs into the client's VMS or careers portal and fills the actual form, pausing for a coordinator only at a genuine CAPTCHA or MFA wall, then confirms by callback.

Why now (≤25 words): gpt-realtime (GA Aug 2025) holds a natural phone conversation; Claude for Chrome (production Dec 2025) fills the real form inside a logged-in session.

Demo moment (≤20 words): Live call books a warehouse job; seconds later the client VMS shows the submitted application with a confirmation number.

Business model (≤15 words): Per-application fee to the staffing agency, replacing the labor cost of manual re-keying.

---
id: s3-ideator-balanced-T6-01-r3#02
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: agent-infra, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r3
---

# Spoken Consent Gate for Auto-Apply

One-liner (≤20 words): Candidates give recorded verbal consent by phone before any agent touches a client portal on their behalf.

Buyer and niche (≤25 words): Staffing agency compliance teams whose client contracts require proof each candidate authorized every automated portal submission.

Pain and evidence (≤40 words): A court found a user's permission to an agent is not the same as the site's own authorization, exposing automation to legal risk; unread consent forms create no real audit trail. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Before the agent submits a candidate to any client portal, an automated call reads the exact job, employer and data being shared aloud in plain language, and records the candidate's spoken "yes" with a timestamp as a signed authorization token; the portal submission is blocked without it.

Why now (≤25 words): Non-human identity standards (Okta Agent SSO, production 2026) show scoped, timestamped authorization tokens now work outside enterprise logins, for any consent flow.

Demo moment (≤20 words): Agent tries a submission with no recorded consent and is blocked live; a 20-second call authorizes it, and it proceeds.

Business model (≤15 words): Compliance add-on priced per verified consent call.

---
id: s3-ideator-balanced-T6-01-r3#03
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: drafter-dialogue, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r3
---

# Coordinator's Silent Status Call

One-liner (≤20 words): A daily phone call reads out every portal wall-hit and successful submission; the coordinator never opens a dashboard.

Buyer and niche (≤25 words): Recruiting coordinators running automated submissions across many client VMS portals who have no time to check a status screen between calls.

Pain and evidence (≤40 words): Agents stall on CAPTCHAs and MFA on every walled portal, and 45-48% of automation failures get silently reported as success; a coordinator who never checks a screen has no way to know which landed. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): Every evening, an automated voice call phones the coordinator with a spoken summary: which candidates were submitted, which hit a wall and need action, and which the system could not confirm. Press one to hear detail on any item, press two to approve a retry, no screen required.

Why now (≤25 words): ElevenLabs Conversational AI (production) makes a natural, branching spoken summary call practical to generate fresh every day.

Demo moment (≤20 words): Live call plays "Four submitted, one blocked at Beeline MFA, press one for detail"; coordinator resolves it by voice.

Business model (≤15 words): Included in the automation subscription; billed per portal connected.

---
id: s3-ideator-balanced-T6-01-r3#04
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: screen-agent, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r3
---

# Talk-to-Apply Kiosk for Job Fairs

One-liner (≤20 words): A speaker-phone kiosk at recruiting events lets candidates apply out loud while an agent fills the real online form.

Buyer and niche (≤25 words): Staffing agencies running on-site hiring events for warehouse and hospitality roles where many candidates have no smartphone or reading confidence.

Pain and evidence (≤40 words): Careers pages and client portals sit behind CAPTCHAs and multi-page forms that even browser agents solve only 40% of the time; candidates without a phone or reading confidence abandon these forms on the spot. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): A simple kiosk with a handset invites the candidate to answer a few spoken questions. Behind it, a screen-reading agent logs into the employer's actual application portal and submits the form in real time, then plays back a spoken confirmation number the candidate can note or ignore.

Why now (≤25 words): Skyvern (production-adjacent) already fills legacy and no-API forms visually, cheap enough to run per-candidate at a single recruiting event.

Demo moment (≤20 words): A candidate speaks answers into the kiosk handset; the client's portal shows a completed application before they walk away.

Business model (≤15 words): Flat per-event kiosk rental plus a small fee per completed application.

---
id: s3-ideator-balanced-T6-01-r3#05
track: balanced
lineage: ai-native
territory: T6
cell: { buyer: B2B, capability: verifier, track: balanced }
parents: []
source_task: s3-ideator-balanced-T6-01-r3
---

# Read-Back Proof Line for Submissions

One-liner (≤20 words): Calls the candidate back to read out exactly what was submitted, so no one has to read a confirmation screen.

Buyer and niche (≤25 words): Staffing agencies who must prove to clients and candidates that a submission is accurate, without relying on anyone reading a receipt.

Pain and evidence (≤40 words): 45-48% of automation failures get silently reported as success and LLM judges catch only 65% of them, so a submission marked "done" can still be wrong, unnoticed until the client complains. (src: outputs/s3-ideate/pain/T6-dossier.md)

How it works (≤50 words): After every portal submission, the system places a short callback that reads the exact job title, employer, pay rate and confirmation number back to the candidate and logs a spoken "confirmed" or "that's wrong" as the real completion check, replacing the agent's own success claim.

Why now (≤25 words): gpt-realtime (GA Aug 2025) and Kyutai's low-latency streaming transcription make a real spoken verification call cheap enough to run on every submission.

Demo moment (≤20 words): A submission with a wrong pay rate gets flagged live when the candidate says "that's not right" on the callback.

Business model (≤15 words): Per-verified-submission fee, sold as a dispute-avoidance guarantee to clients.

<!-- COMPLETE -->
