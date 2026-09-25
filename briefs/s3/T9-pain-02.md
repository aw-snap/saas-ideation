# Pain-miner brief T9-02: confidential client material, solo therapists and accountants

## Objective
Collect the best available evidence of pain felt by **solo and small-practice mental-health clinicians and small-firm accountants and tax preparers** who must write and review from highly sensitive client material but face legal duties that make sending it to a cloud AI vendor risky. For clinicians, the material is session content, progress notes, treatment plans and intake forms. For accountants, it is bank statements, W-2s, 1099s, receipts and prior returns. The work happens on their own screens. Document what hurts: the documentation and data-handling workload itself, and the friction the confidentiality duty adds to it. Do not propose fixes.

Read `config/context.md` and the T9 section of `gates/gate-B.md` before starting. Gate B flags T9's demand evidence as **thin**: the therapist and accountant sources so far are undated vendor blogs with no practitioner quotes. Your main job is to close that gap with first-person voices.

## Boundary of this half (exact)
**In:**
- **Clinicians:** solo or group-of-a-few therapists, counsellors, LCSWs, LMFTs, psychologists and psychiatric nurse practitioners in private practice (US first; UK, Canada, EU and Australia allowed if clearly labelled). Progress notes (SOAP, DAP), treatment plans, intake summaries, insurance-required documentation, letters, and recording or transcribing sessions. The constraint layer: HIPAA, 42 CFR Part 2, psychotherapy-notes rules, state confidentiality law, and licensing-board and professional-association (APA, ACA, NASW, AAMFT) guidance on AI scribes and consent.
- **Accountants:** solo CPAs, enrolled agents, seasonal tax preparers and small bookkeeping-and-tax firms. Extracting and reconciling data from client statements and tax documents, preparing returns and workpapers, and answering client questions. The constraint layer: IRC §7216 and Treas. Reg. 301.7216 consent rules, the FTC Safeguards Rule and the IRS written information security plan (WISP) requirement (Publication 4557, 5708), state board and AICPA guidance, and the GLBA.
- For both: cost, hardware and setup burden of using AI without sending client data out, and whether practitioners avoid AI entirely because of it.

**Out (covered elsewhere, do not mine):**
- Lawyers, paralegals and legal ethics. All belong to brief T9-01.
- Hospital and large group-practice clinical documentation, EHR-embedded ambient scribes bought by health systems, and payer-portal work (T1).
- Invoice capture and AP posting at client businesses (T2); general bookkeeping software sync problems unless the pain is about confidentiality; practice-management system lock-in (T3); cybersecurity chores beyond the WISP and Safeguards duties (T5); generic local-LLM tooling for developers.

If an item touches both halves (for example a therapist's attorney-requested records), log it here only when the pain comes from clinical or tax confidentiality duties.

## Questions to answer (6)
1. What do private-practice therapists say, in their own words, about the note-writing burden? Give hours per week, notes backlog, and after-hours "pajama time" figures wherever a source states them. How many now use AI note tools, and how many refuse because of client confidentiality or consent?
2. What do clinicians and their clients object to in cloud AI scribes (session audio leaving the room, vendor retention, training on data, BAA terms, client consent refusals)? What do licensing boards and associations say, and what complaints or incidents are on record?
3. What do incumbent clinical-notes tools cost a solo (for example Upheal, Mentalyc, Blueprint, Freed, TherapyNotes and SimplePractice AI features), and what complaints do reviewers raise about price, accuracy, privacy or lock-in?
4. How much time do solo accountants and tax preparers spend keying, reconciling and checking data from client statements and tax forms, especially in filing season? Give hours per return, per client or per week wherever a source states them.
5. What do §7216, the FTC Safeguards Rule and the IRS WISP requirement mean for a preparer who wants to put client documents into an AI tool? Which parts do practitioners call unclear or burdensome, and what incidents, penalties or IRS warnings exist?
6. Who in either profession has tried running models locally (Ollama, LM Studio, gpt-oss, Gemma, local Whisper-class ASR, on-device Apple or Chrome models)? What broke or blocked them: hardware cost, setup skill, quality, document handling, or doubt that it satisfies the rules?

## Sources to mine
- **Regulator and professional documents:** HHS OCR HIPAA guidance on business associates and cloud services; 42 CFR Part 2; APA, ACA, NASW and AAMFT statements on AI in practice; state licensing-board AI guidance; IRS Publication 4557 and 5708 (WISP); the FTC Safeguards Rule; 26 CFR 301.7216; AICPA and state CPA society AI guidance; IRS Security Summit warnings.
- **Vendor colour (label as such):** https://localaimaster.com/blog/local-ai-therapists ; https://jupid.com/blog/local-llm-for-accounting ; https://developer.chrome.com/docs/ai/built-in ; https://developer.apple.com/videos/play/wwdc2025/286/ ; https://openai.com/index/introducing-gpt-oss/
- **Surveys:** APA Practitioner Pulse surveys, SimplePractice and TherapyNotes state-of-practice reports, AICPA and Journal of Accountancy technology surveys, Thomson Reuters tax-professional reports, Intuit ProConnect or Drake preparer surveys.
- **Forums and subreddits:** r/therapists, r/psychotherapy, r/socialwork, r/psychologists, r/Accounting, r/taxpros, r/Bookkeeping, r/LocalLLaMA (threads from clinicians or preparers), the TaxProTalk forum, and Facebook-group posts quoted in public articles.
- **Reviews of incumbents:** G2, Capterra and app-store reviews of Upheal, Mentalyc, Blueprint, Freed, SimplePractice and TherapyNotes; for accountants, Dext, Hubdoc, Canopy, TaxDome, Karbon, Drake, Lacerte, UltraTax and ProConnect (reviews that mention data entry or AI features).
- **Job postings:** seasonal data-entry and tax-prep assistant postings, virtual assistants for therapists' notes and billing, and their hourly rates.
- **Complaint threads:** HHS OCR breach reports involving small practices, news on AI-scribe privacy incidents, IRS data-theft alerts for tax professionals, and state board discipline.

## Evidence standard
- Record **10–20 pain items**, with **at least 4 for clinicians and at least 4 for accountants**. Each needs at least one **verbatim quote with a working link**, plus any available numbers for **frequency** (how often), **time** (hours or days) and **money** (fees, subscription costs, penalties, hardware costs).
- Prefer first-person practitioner voices from 2024–2026. Treat statutes, regulations and professional-body guidance as primary evidence of the constraint. Label vendor blogs and marketing claims as such; they are colour, not proof of demand.
- Never invent quotes, numbers or URLs. If you cannot verify something, mark it `[unverified]`. Where a question found no evidence, say so. A finding that practitioners happily use cloud tools is as useful as one saying they refuse.

## Output
Write `outputs/s3-ideate/pain/T9-02.md`, **1500 words at most**, in this format:

```
# T9-02 pain: confidential client material, therapists and accountants

## Pain items
### 1. <short name>
- Who: <solo therapist / group-practice clinician / solo CPA / EA / seasonal preparer / ...>
- What hurts: <one or two sentences>
- Frequency: <number + source, or "unknown">
- Cost (time/money): <number + source, or "unknown">
- Current workaround/incumbent: <...>
- Evidence: "<verbatim quote>" (<link>)
(repeat for 10–20 items)

## Incumbents and why they fall short
<bullets, each with a link>

## Gaps
<questions with no or thin evidence>

<!-- COMPLETE -->
```

## Boundary: pain only
Write **pain only**. Do not include solutions, product ideas, feature suggestions or "an opportunity would be…" lines. Write only the output file named above. Its last line must be exactly `<!-- COMPLETE -->`.

<!-- COMPLETE -->
