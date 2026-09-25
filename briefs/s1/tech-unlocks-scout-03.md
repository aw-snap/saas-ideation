# Scout brief: tech-unlocks-03 (on-device, open-weight, fine-tuning, and long-context/reasoning economics)

Lens: tech-unlocks (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25. Build window is 48 hours, so a capability only counts if a small team can run or call it today.

## Objective
Map what became **private, cheap or long** for text models since about March 2025: on-device and in-browser models, open-weight models, cheap fine-tuning and distillation, long-context windows, reasoning models, and price drops. Then work backward to who can now use AI on data they could not send to a cloud, or at a cost or scale they could not afford before. **Computer-centric slice.**

## Questions to answer
1. What on-device and local options shipped since March 2025? Verify these, don't assume them: Apple Foundation Models framework, Gemini Nano / Chrome built-in AI APIs, WebGPU/WebLLM, Ollama and llama.cpp milestones, Copilot+ PC NPUs, and small open-weight models (e.g. Qwen, Gemma, Llama, gpt-oss, Mistral, Phi). Give the launch month and year, the hardware needed, and the tokens per second where reported.
2. What does fine-tuning and distillation cost now? Look for hosted fine-tuning prices (OpenAI, Together, Fireworks, etc.), LoRA/QLoRA tooling (Unsloth and similar), reinforcement fine-tuning, and GPU-hour prices, with dates.
3. What did long context and reasoning unlock? Look for 1M+ context models, context caching and batch discounts, reasoning-model pricing, and the $/M token trend from 2024 to 2026, with numbers.
4. Who is asking for private or local AI and why? Collect verbatim quotes from regulated or privacy-sensitive users (legal, medical, therapy, accounting, small businesses, government) in forums and surveys, plus regulator guidance (HIPAA, GDPR, EU AI Act, bar associations) that pushes data to stay local.
5. Where does it fall short? Look for quality gaps of small models, hardware limits, and fine-tuning failures reported by practitioners.

## Search angles and sources
- Vendor release notes, model cards, pricing pages and changelogs (Apple developer, Chrome developers, Hugging Face, OpenAI/Anthropic/Google pricing, Together, Fireworks, Unsloth).
- r/LocalLLaMA, r/selfhosted, r/privacy, r/Lawyertalk, r/medicine, r/Accounting, and Hacker News threads.
- App Store reviews of local-AI apps (e.g. private LLM chat apps), and G2 reviews of AI tools where reviewers mention privacy or data residency.
- Regulator and professional-body sites: HHS/OCR, the EDPB, the EU AI Office, state bar ethics opinions on AI (2024–2026).
- Price trackers and industry reports (e.g. Artificial Analysis, Epoch AI, a16z "LLMflation"-type analyses), with dates.
- Job postings for "on-device ML", "edge AI" or "fine-tuning engineer" at small firms.

## Evidence standard
- At least **10 numbered findings**. Each finding has a source URL, and a date wherever one exists.
- Use verbatim quotes in quotation marks and hard numbers ($/M tokens, $/GPU-hour, tokens/sec, context length, parameter counts, RAM).
- For every capability, capture the fields the tech card needs: **capability, first available (month and year), maturity (demo-grade or production), rough cost, example unlock (who it helps)**. Mark anything you could not confirm `[unverified]`.
- Never invent URLs, quotes, statistics or products.

## Output
Write `outputs/s1-discover/scouts/s1-scout-tech-unlocks-03.md`, **1500 words max**.
Format:
```
# Scout tech-unlocks-03: on-device, open-weight, fine-tuning, long-context economics
## Findings
1. **<short title>** — <what, with the quote or number>. Date: <yyyy-mm>. Cap-card: <capability | first available | maturity | cost | unlock>. Source: <URL>
2. ...
## Who it helps (backward map)
- <person/role> — <workflow and data it touches> — finding #s
## Gaps
- <what you looked for and could not find>
<!-- COMPLETE -->
```
Last line must be exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas**, no pitches, no "someone should build".
- Stay in this slice. The other 4 scouts own the rest: computer-use and browser agents (01), agent protocols and payments (02), realtime voice and speech, including on-device speech (04), and vision, video, 3D and document perception (05). If you find something for them, add at most a one-line pointer under Gaps.
- Write only your output file.
<!-- COMPLETE -->
