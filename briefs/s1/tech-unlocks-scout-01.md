# Scout brief: tech-unlocks-01 (computer-use and browser agents)

Lens: tech-unlocks (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25. Build window is 48 hours, so a capability only counts if a small team can call it today.

## Objective
Map the **computer-use and browser-agent** capabilities released since about March 2025: models and tools that see a screen and click, type and navigate GUIs or web pages. Then work backward to the people and screen workflows each one now helps, especially software with no API. **Computer-centric slice.**

## Questions to answer
1. Which computer-use and browser-agent capabilities shipped since March 2025? Examples to verify, not assume: Anthropic computer use updates, OpenAI Operator / ChatGPT agent / Agents SDK computer-use tool, Gemini computer use model, open-source agents such as browser-use, Stagehand, Skyvern and UI-TARS, and cloud desktop sandboxes. For each, give the launch month and year, the pricing, and whether it is demo-grade or production.
2. What reliability numbers exist? Look for OSWorld, WebArena, WebVoyager and similar benchmark scores with dates, and for practitioner reports of failure rates, speed, and cost per task.
3. Which specific no-API or legacy software are people now trying to drive with these agents? Look for government portals, insurance and payer portals, ERP and desktop apps, and vertical SaaS. Collect verbatim quotes from people attempting it.
4. Where does it break? Look for CAPTCHAs, logins and 2FA, anti-bot terms of service, latency, and cost. Quote the practitioners.
5. Who is paying for this today? Look for job postings that mention computer-use or browser agents, RPA-replacement case studies, and funding news from 2024 to 2026.

## Search angles and sources
- Vendor changelogs, release notes, docs pricing pages, and model cards (Anthropic, OpenAI, Google, Microsoft, Amazon Nova Act).
- GitHub READMEs, issues and release pages for open-source browser agents, with star counts and dates.
- Benchmark leaderboards (OSWorld, WebArena) and the papers behind them.
- Subreddits and forums: r/LocalLLaMA, r/AI_Agents, r/rpa, r/automation, Hacker News threads on each launch.
- G2 and Capterra reviews of RPA tools (UiPath, Automation Anywhere, Power Automate Desktop) that complain about brittleness, which is the pain these agents target.
- Job postings mentioning "computer use", "browser agent" or "RPA + LLM".
- News and industry reports from 2024 to 2026: funding rounds, analyst notes, and enterprise pilots.

## Evidence standard
- At least **10 numbered findings**. Each finding has a source URL, and a date wherever one exists.
- Use verbatim quotes in quotation marks, plus hard numbers (benchmark %, $/task, $/M tokens, latency, star counts).
- For every capability, capture the fields the tech card needs: **capability, first available (month and year), maturity (demo-grade or production), rough cost, example unlock (who it helps)**. Mark anything you could not confirm `[unverified]`.
- Never invent URLs, quotes, statistics or products.

## Output
Write `outputs/s1-discover/scouts/s1-scout-tech-unlocks-01.md`, **1500 words max**.
Format:
```
# Scout tech-unlocks-01: computer-use and browser agents
## Findings
1. **<short title>** — <what, with the quote or number>. Date: <yyyy-mm>. Cap-card: <capability | first available | maturity | cost | unlock>. Source: <URL>
2. ...
## Who it helps (backward map)
- <person/role> — <screen workflow> — finding #s
## Gaps
- <what you looked for and could not find>
<!-- COMPLETE -->
```
Last line must be exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas**, no pitches, no "someone should build".
- Stay in this slice. The other 4 scouts own the rest: agent protocols and payments (02), on-device, open-weight, fine-tuning and long-context/reasoning economics (03), realtime voice (04), and vision, video, 3D and document perception (05). If you find something for them, add at most a one-line pointer under Gaps.
- Write only your output file.
<!-- COMPLETE -->
