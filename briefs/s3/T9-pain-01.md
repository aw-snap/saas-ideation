# Pain-miner brief T9-01: confidential client material, solo and small-firm lawyers

## Objective
Collect the best available evidence of pain felt by **solo and small-firm lawyers (roughly 1–10 lawyers, no IT or knowledge-management staff)** who must draft and review from confidential client material but face ethics duties that make sending that material to a cloud AI vendor risky or forbidden. The work happens on their own screens: case files, discovery productions, contracts, client emails, intake notes and recorded client calls. Document what hurts: the drafting and review workload itself, and the friction the confidentiality duty adds to it. Do not propose fixes.

Read `config/context.md` and the T9 section of `gates/gate-B.md` before starting. Gate B flags T9's demand evidence as **thin**: no practitioner forum quotes were captured. Your main job is to close that gap with first-person voices.

## Boundary of this half (exact)
**In:**
- Lawyers in solo practice or small firms (US first; UK, Canada, EU and Australia allowed if clearly labelled), plus their paralegals and legal assistants.
- Drafting and review from client files: document review, discovery and production review, deposition and transcript summaries, contract review, demand letters, pleadings and motions, client correspondence, intake summaries.
- Recording, transcribing and summarising client conversations, and the consent and confidentiality duties around it.
- The ethics layer: ABA Formal Opinion 512, state bar AI opinions (WSBA AO 2025-05, NYC Bar 2025-6 and others), duties of confidentiality (Model Rule 1.6), competence (1.1), informed consent, reviewing vendor terms, and court GenAI-disclosure orders as they bear on *which tools the lawyer may use*.
- Cost, hardware and setup burden for a lawyer trying to use AI without sending client data out, and whether they avoid AI entirely because of it.

**Out (covered elsewhere, do not mine):**
- Therapists, counsellors, psychologists, accountants, enrolled agents, tax preparers and bookkeepers. All belong to brief T9-02.
- Hallucinated citations and sanctions as a *verification* problem (territory T7). Only log them here if the pain is about the lawyer's choice of tool or the confidentiality trade-off.
- Big-law and in-house legal departments with procurement and IT teams; court e-filing mechanics (T4); generic local-LLM tooling for developers; consumer PC maintenance.

If an item touches both halves (for example a lawyer who also prepares tax returns), log it here only when the pain comes from legal-ethics duties.

## Questions to answer (6)
1. What do solo and small-firm lawyers say, in their own words, about using or refusing cloud AI tools on client material? How many use them anyway, how many avoid them, and why? Look for survey figures (ABA TechReport, Clio Legal Trends, state bar surveys).
2. Which drafting and review tasks eat the most unbilled or write-off time (document review, deposition summaries, discovery, first drafts)? Give hours per week, per matter or per page wherever a source states them.
3. What exactly do the bar opinions require before a lawyer may put client data into an AI tool (vendor diligence, informed consent, retention and training terms)? How much work does compliance take, and which duties do lawyers call unclear or impossible for a solo to meet?
4. How do lawyers handle recording and transcribing client meetings today, given NYC Bar 2025-6 and similar guidance? What consent friction, note-taking time and risk do they report?
5. What do legal-AI incumbents cost a solo (CoCounsel, Harvey, Lexis+ AI, Clio Duo, Spellbook, and similar), and what complaints do small firms raise about price, seat minimums, data terms, accuracy or lock-in?
6. Who has tried running models locally (Ollama, LM Studio, gpt-oss, Llama, on-device Apple or Chrome models) for client work? What broke or blocked them: hardware cost, setup skill, quality, the lack of document handling, or doubt that it satisfies the ethics rules?

## Sources to mine
- **Regulator and bar documents:** https://www.wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/ao-202505.pdf ; https://www.nycbar.org/reports/formal-opinion-2025-6-ethical-issues-affecting-use-of-ai-to-record-transcribe-and-summarize-conversations-with-clients/ ; ABA Formal Opinion 512 (July 2024); the Florida, California, Pennsylvania, New Jersey, Texas and North Carolina bar AI guidance; UK SRA and Law Society statements on AI and confidentiality.
- **Surveys:** ABA TechReport (AI and solo/small-firm sections), Clio Legal Trends Report, Thomson Reuters Future of Professionals, 8am/MyCase legal industry reports.
- **Forums and subreddits:** r/Lawyertalk, r/LawFirm, r/Paralegal, r/legaltech, r/LocalLLaMA (threads from lawyers), the ABA Law Practice Division and Solo/Small listservs where public, Above the Law comment threads, LawNext and Legaltech News coverage.
- **Reviews of incumbents:** G2 and Capterra reviews of CoCounsel, Lexis+ AI, Clio Duo, Spellbook, Casetext, Harvey and Everlaw; practice-management AI add-ons (Clio, MyCase, PracticePanther, Smokeball).
- **Job postings:** freelance and contract document-review attorney and paralegal postings (rates per hour or per page), and deposition-summary services (price per page).
- **Complaint threads:** bar disciplinary notices and news about lawyers exposing client data through AI tools, vendor data-retention controversies, and malpractice-insurer AI guidance.

## Evidence standard
- Record **10–20 pain items**. Each needs at least one **verbatim quote with a working link**, plus any available numbers for **frequency** (how often), **time** (hours or days) and **money** (fees, write-offs, subscription costs, hardware costs).
- Prefer first-person lawyer and paralegal voices from 2024–2026. Treat the bar opinions as primary evidence of the constraint. Label vendor blogs and marketing claims as such; they are colour, not proof of demand.
- Never invent quotes, numbers or URLs. If you cannot verify something, mark it `[unverified]`. Where a question found no evidence, say so. A finding that solos don't care about local processing is as useful as one saying they do.

## Output
Write `outputs/s3-ideate/pain/T9-01.md`, **1500 words at most**, in this format:

```
# T9-01 pain: confidential client material, lawyers

## Pain items
### 1. <short name>
- Who: <solo lawyer / small-firm partner / paralegal / ...>
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
