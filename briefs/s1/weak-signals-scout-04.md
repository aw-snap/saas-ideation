# Scout brief: weak-signals-scout-04 (new failure modes created by AI)

Task id: s1-scout-weak-signals-04
Lens: weak-signals (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25.

## Objective
Find **new kinds of failure, fraud, noise and risk that AI itself has created since 2024**, and the people now stuck cleaning up after them. Document the incidents, the costs, and the manual work of detecting, checking and fixing. This slice is computer-centric.

## Slice
You own **what is breaking because of AI**: hallucinated output reaching courts, clients, patients or code; AI-generated fraud and impersonation; floods of AI-generated submissions (job applications, grant proposals, bug reports, student work, reviews, support tickets, FOIA requests, pull requests); security holes in AI-built or "vibe-coded" apps; shadow AI and data leakage; AI agents misbehaving in production; AI crawler and agent traffic hitting small websites; and trust problems such as detection disputes and provenance. Your sources are incidents and the people on the receiving end, not job boards.

## Questions to answer
1. Which AI-created failure modes grew fastest between 2024 and 2026? Give counts, trend lines and dates (for example tracked court cases with fabricated citations, deepfake fraud losses, or application volumes per job opening).
2. Who is on the receiving end: judges and clerks, hiring managers, grant officers, maintainers of open-source projects, teachers, small-site owners, insurance adjusters, bank fraud teams, IT admins in small firms?
3. What manual, on-screen work do they now do to check, detect, triage or undo it, and how many hours does it take?
4. What do they say in their own words? Get quotes from forums, sanctions orders, bug trackers and incident write-ups.
5. What have courts, platforms, insurers or regulators done in response (sanctions, new rules, disclosure requirements, policy changes)?
6. Which failures hit **tiny organizations** that have no security or trust-and-safety team?

## Search angles and sources
- Court sanctions for AI-fabricated citations and the public trackers that count them; bar association guidance.
- Deepfake voice and video fraud against small businesses and families; business email compromise using AI; FBI IC3 and FTC reports.
- AI-generated application floods in hiring (r/recruitinghell, r/humanresources), in grant programs, and in open-source security reports (curl and other maintainers' posts, HackerOne).
- Security incidents in AI-built apps (exposed keys and databases in vibe-coded apps, prompt injection against agents, MCP server vulnerabilities, malicious packages or hallucinated package names).
- Shadow AI surveys; data pasted into chatbots; small-business IT threads (r/sysadmin, r/msp, r/cybersecurity).
- AI crawler and agent traffic costs to small sites and open-source infrastructure (Cloudflare and hosting reports, r/webhosting, r/selfhosted).
- Teachers and professors dealing with AI submissions and disputed detector results (r/Teachers, r/Professors).
- Fake AI-generated reviews, listings and product images on marketplaces; AI-agent errors in customer service that companies had to honor.

Source types: incident databases (AI Incident Database, OECD AI incidents monitor), court records and trackers, security advisories and CVEs, regulator reports, subreddits and Hacker News, maintainer blogs and GitHub issues, insurer and fraud-industry reports, news from 2024 to 2026.

## Evidence standard
- At least **10 findings**. Each finding needs one or more of these: a verbatim quote, a number (incidents, losses, hours, volume multiplier), or a date, plus a working source link.
- Prefer the voice of the person cleaning up, not vendor marketing. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s1-discover/scouts/s1-scout-weak-signals-04.md`, **1500 words max**, in this format:

```
# Scout weak-signals-04: failure modes created by AI

## Findings
1. **<failure mode, short title>**: <what breaks, who absorbs it, how often; 1–3 sentences>
   - Evidence: "<verbatim quote>" / <number> / <date>
   - Cleanup work: <the manual, on-screen checking or fixing it forces>
   - Source: <URL>
2. ...

## Notes
<up to 5 bullets: trends that look overhyped, dead ends, leads you could not verify>
```

The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas, no solutions, no "an app could…".**
- Stay inside your slice. The other 4 scouts own the rest: non-US regulations (scout 01), US regulations (scout 02), newly opened public data (scout 03), and new roles and workflows (scout 05). If a new AI law answers a failure mode, mention it in one line only, because scouts 01 and 02 own its compliance burden. If a new job title exists to deal with a failure mode, leave the job-posting evidence to scout 05.
- Write only your output file. Do not edit any other file.

<!-- COMPLETE -->
