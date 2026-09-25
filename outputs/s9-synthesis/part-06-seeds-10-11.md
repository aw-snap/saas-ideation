### seed-10: Jev AI, a live business-call copilot

Track: balanced. [Seed card](../outputs/s2-seeds/seed-10.md), [atoms](../outputs/s2-seeds/decomposed/seed-10.md). This seed came in through the late lane: its improved and pivot cards come from `s3-improver-late` and `s3-pivoter-late` tasks.

- **Original: Jev AI live call copilot (I-6002).** [Card](../archive/ideas/I-6002.md)
  - Elo 1158.4 → 1189.3. It was 55 of 65 in round 1 and 51 of 84 in round 2, where it went 4-0-0. Consistency 88. S8 finalist, rank 19 in track, not in the final 30.
  - **Scores:** 3 · 5 · 6 · 6 · 7 · 6 · 2 · 7. Judge totals [58.0, 53.6, 49.7], median 53.6, spread 8.3, below bar.
  - **S5:** adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. Balto, Krisp and Parloa (the hunter recorded no URLs). Live coaching copilots and real-time scam alerts exist separately, but no single tool combines both with discreet supervisor escalation.
  - **Red team (serious):** combining the two is a closable feature gap, and the seed leans on the same unverified Jev speed claim as seed-07's I-1050. **Fix:** lead with the discreet phrase-triggered escalation, and prove it on a standard, verified LLM, not only on Jev.
  - **Knocked out:** no.
- **Best improved version: Live call-verification copilot for payment requests (I-6007).** [Card](../archive/ideas/I-6007.md)
  - It narrows the seed to payment and account-change calls that break verification policy.
  - Elo 1184.4 → 1207.6. It was 42 of 65 in round 1 and 37 of 84 in round 2 (3-0-1). Consistency 50, **polarizing**.
  - S8 finalist, **rank 16 in the balanced track**: the first eligible balanced idea below the 15-per-track cut.
  - **Scores:** 4 · 5 · 7 · 7 · 7 · 6 · 2 · 7. Judge totals [60.9, 55.3, 58.0], median 58.0, spread 5.6, below bar. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists.
    - [Balto real-time agent assist](https://www.balto.ai/real-time-agent-assist/) has the same live-transcript, private-prompt and escalation mechanism, but sells it as general compliance coaching.
    - [Pindrop Pulse](https://www.pindrop.com/product/pindrop-pulse/) and [Rulebase](https://www.ycombinator.com/launches/MBR-rulebase-the-voice-fraud-defense-system-for-financial-services) serve the same fraud niche through deepfake detection instead.
  - **Red team (serious):** an easy feature addition for Balto, which already has distribution. **Fix:** sell pre-built payment-verification rule packs as a Balto or Gryphon integration, not as a standalone platform.
  - **The other improved card, I-6004 Compliance Call Copilot, was knocked out in S5** as a direct competitor ([Balto](https://www.balto.ai/blog/best-real-time-compliance-monitoring-software-for-contact-centers-2026/), [Observe.AI](https://www.observe.ai/contact-center-glossary/what-is-call-center-compliance)).
- **Best pivots:** none reached the tournament. All five were archived in S4:
  - I-6010 Pre-Call Prep Briefs
  - I-6011 Live Consult Safety Copilot (telehealth drug-interaction flags)
  - I-6012 AI Roleplay Trainer for New Reps
  - I-6013 Field Inspection Compliance Copilot
  - I-6014 Live Email Risk Guard
- **Atoms in other finalists:** none. No atom-hybrid card was made from seed-10's atoms.
  - Its payment-verification angle is thematically close to the vendor bank-change family in the final 30 (I-4525 + I-1508). I-4525's deep hunt also lists Rulebase.
  - No card links the two, and the connection is not a lineage.
- **Verdict: pivot.** The general call copilot is a gap Balto can close with one feature, but the payment-verification version (I-6007) finished one place outside the cut, so its rule pack is worth carrying as the inbound-call check of the I-4525 + I-1508 vendor bank-change product, not as a standalone copilot.

### seed-11: Jev, context-aware phrase suggestions for AAC

Track: balanced. [Seed card](../outputs/s2-seeds/seed-11.md), [atoms](../outputs/s2-seeds/decomposed/seed-11.md). This seed also came in through the late lane.

- **Original: Jev: context-aware AAC phrase suggestions (I-6003).** [Card](../archive/ideas/I-6003.md)
  - Elo 1181.3 → 1181.2. It was 46 of 65 in round 1 and 58 of 84 in round 2, where it was polarizing at 50%. Merged consistency 62. S8 finalist, rank 22 in track, not in the final 30.
  - **Scores:** 3 · 5 · 7 · 5 · 7 · 6 · 3 · 7. Judge totals [56.8, 51.7, 57.3], median 56.8, spread 5.6, below bar.
  - **S5:** adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists. [Spoken AAC](https://apps.apple.com/us/app/spoken-tap-to-talk-aac/id1034487817), [AAC Talker Listening mode](https://apps.apple.com/us/app/aac-talker/id6446367342) and [Vocable AAC](https://apps.apple.com/us/app/vocable-aac/id1497040547) already listen to the conversation partner and surface AI suggestions. Each generates or predicts new text rather than ranking only the user's own pre-saved, approved phrases.
  - **Red team (manageable):** Vocable already pairs a personal phrase library with AI assist. For switch-scanning users, any latency or mis-ranking could make replies slower than manual navigation. **Fix:** differentiate hard on the rank-only constraint, and validate response-time gains with real AAC users before a wider build.
  - **Knocked out:** no.
- **Best improved version: AAC Phrase Ranking Companion (I-6006).** [Card](../archive/ideas/I-6006.md)
  - It is a standalone companion app that ranks an imported phrase bank.
  - Elo 1197.2 → 1181.6. It was 37 of 65 in round 1 and 57 of 84 in round 2, where it was polarizing at 50%. Merged consistency 75. S8 finalist, rank 21 in track.
  - **Scores:** 6 · 6 · 7 · 5 · 7 · 6 · 4 · 7. Judge totals [61.2, 60.7, 61.2], median 61.2, spread 0.5, below bar. That is 4.4 points above the original. S5: adjacent-exists / yes.
  - **S8 deep prior art:** adjacent-exists.
    - The mechanism has academic prior art in the 2008 [Converser research system](https://www.tandfonline.com/doi/full/10.1080/07434610701740448), which never went live.
    - Also listed: [Spoken AAC](https://spokenaac.com/features/) and Proloquo4Text / TD Snap word prediction (no URL).
    - No shipping standalone app ranks an imported phrase bank from partner speech. Commercial apps predict from the user's own typing.
  - **Red team (manageable):** Converser's failure to commercialize suggests a non-technical blocker, and the card does not address consent from partners near an always-listening device. **Fix:** find out why Converser never shipped, and design an explicit listening-consent toggle before building.
  - The other improved card is I-6009 Context-ranked phrases for eye-gaze AAC: Elo 1169.4 → 1169.9, r2 rank 66 of 84. S5: adjacent-exists / yes. Not an S8 finalist.
- **Best 2 pivots by round-2 Elo:**
  - **I-6015 Routine-Aware Phrase Board** ([card](../archive/ideas/I-6015.md)) reorders the phrase grid by time of day and routine, with no microphone.
    - Elo 1155.4 → 1132.7, r2 rank 81 of 84. S5: adjacent-exists / yes.
    - It is the cell elite of the otherwise uncovered balanced B2C|drafter-dialogue region (section 4). Its why-now line is `[unverified]` on its own card.
  - **I-6019 Personal Snippet Recall for Coding** ([card](../archive/ideas/I-6019.md)) applies the same rank-your-own-library idea to a developer's saved snippets.
    - Elo 1139.7 → 1117.0, r2 rank 83 of 84. S5: adjacent-exists / yes.
    - Its pain and why-now lines are `[unverified]` on its own card.
  - Archived in S4: I-6016 Live Macro Match for Support Chat, I-6017 Phrase Bank Builder From Your Own Words, I-6018 Fall Alert Companion.
- **Atoms in other finalists:** none. No atom-hybrid card was made from seed-11's atoms.
- **Verdict: keep, as I-6006.** Its rank-only constraint on the user's own approved phrases has no shipping competitor, and the red team rated it manageable. But the round-2 Elo is low (57th of 84) and the Converser question is open, so validate with real AAC users before committing a build.

<!-- COMPLETE -->
