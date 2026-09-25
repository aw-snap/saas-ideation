# Scout brief: tech-unlocks-04 (realtime voice and speech)

Lens: tech-unlocks (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25. Build window is 48 hours, so a capability only counts if a small team can call it today.

## Objective
Map the **realtime voice and speech** capabilities released since about March 2025: speech-to-speech models, low-latency voice agents, telephony integration, transcription, voice cloning, live translation, and on-device speech. Then work backward to the people whose work runs on phone calls, dictation or spoken conversation and who can now be helped.

## Questions to answer
1. Which voice capabilities shipped since March 2025? Verify these, don't assume them: OpenAI Realtime API and gpt-realtime updates, Gemini Live / native-audio models, ElevenLabs agents and v3 TTS, Deepgram, Cartesia, Sesame, open speech models (e.g. Whisper successors, Kyutai, Voxtral), and SIP/telephony support. Give the launch month and year, the latency, the $/minute, and whether it is demo-grade or production.
2. What are the latency, accuracy and cost numbers? Look for end-to-end latency, word error rate, languages supported, and $/minute of conversation, with dates.
3. Which phone- or voice-bound jobs are people trying to automate? Examples: front desks, clinics, trades dispatch, restaurant orders, collections, insurance calls, being on hold with payers or government, and field workers dictating notes. Collect verbatim quotes about the pain.
4. Where does it break? Look for interruptions and barge-in, accents, noisy lines, hallucinated commitments, caller distrust, and costs at scale. Quote the practitioners.
5. What rules constrain it? Look for FCC rulings on AI voices in robocalls (TCPA), call-recording consent laws, EU AI Act disclosure duties, and voice-cloning fraud news from 2024 to 2026.

## Search angles and sources
- Vendor changelogs, pricing pages and model cards (OpenAI, Google, ElevenLabs, Deepgram, Cartesia, Twilio, Vapi, Retell, LiveKit, Pipecat).
- r/VoiceAI, r/AI_Agents, r/smallbusiness, r/HVAC, r/dentistry, r/restaurantowners, r/medicine, and Hacker News threads.
- G2 and Capterra reviews of answering services and voice-agent platforms. App Store reviews of dictation and transcription apps.
- FCC, FTC and state AG sites. EU AI Act transparency provisions.
- Job postings for receptionists, call-center agents, and "voice AI engineer". Industry reports on call-center staffing and missed-call rates.
- News from 2024 to 2026 on deployments, funding, and voice-fraud incidents.

## Evidence standard
- At least **10 numbered findings**. Each finding has a source URL, and a date wherever one exists.
- Use verbatim quotes in quotation marks and hard numbers (ms latency, WER, $/min, missed-call %, call volumes).
- For every capability, capture the fields the tech card needs: **capability, first available (month and year), maturity (demo-grade or production), rough cost, example unlock (who it helps)**. Mark anything you could not confirm `[unverified]`.
- Never invent URLs, quotes, statistics or products.

## Output
Write `outputs/s1-discover/scouts/s1-scout-tech-unlocks-04.md`, **1500 words max**.
Format:
```
# Scout tech-unlocks-04: realtime voice and speech
## Findings
1. **<short title>** — <what, with the quote or number>. Date: <yyyy-mm>. Cap-card: <capability | first available | maturity | cost | unlock>. Source: <URL>
2. ...
## Who it helps (backward map)
- <person/role> — <call or speech workflow> — finding #s
## Gaps
- <what you looked for and could not find>
<!-- COMPLETE -->
```
Last line must be exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas**, no pitches, no "someone should build".
- Stay in this slice. The other 4 scouts own the rest: computer-use and browser agents (01), agent protocols and payments (02), on-device text models, fine-tuning and long-context/reasoning economics (03), and vision, video, 3D and document perception (05). If you find something for them, add at most a one-line pointer under Gaps.
- Write only your output file.
<!-- COMPLETE -->
