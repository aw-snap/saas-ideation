# T9 dossier: confidential client material at solo lawyers, therapists and accountants

Sources: `outputs/s3-ideate/pain/T9-01.md` (lawyers) and `outputs/s3-ideate/pain/T9-02.md` (therapists, accountants). Neither miner could fetch Reddit threads directly, so first-person voices come from bar opinions, news and Trustpilot. Vendor blogs count only as colour.

## Pain points

**P1. Pasting client files into cloud AI can waive privilege (lawyers).**
- Who: solo and small-firm lawyers drafting from case files.
- What hurts: consumer ChatGPT or Claude is a third party that owes no duty of confidentiality, and a federal ruling (US v. Heppner, SDNY) held that AI-drafted material was not privileged.
- How often: every drafting session that touches case facts.
- Cost: possible loss of privilege on the matter; Rule 1.6 exposure.
- Workaround: strip names and facts, or stay away from AI.
- Evidence: "ChatGPT communications do not have legal privilege and cannot provide attorney-client confidentiality" (https://www.sfbar.org/blog/heads-up-new-chatgpt-privacy-concerns-for-lawyers-and-legal-staff/, Sept 2025); "an AI tool is not an attorney, owes no duty of confidentiality" (https://www.joneswalker.com/en/insights/blogs/ai-law-blog/your-ai-conversations-are-not-privileged-what-a-new-sdny-ruling-means-for-every.html, search summary).
- Severity: 5

**P2. Pasting tax data into AI is a federal crime, and the fix destroys the value (accountants).**
- Who: solo CPAs, EAs and seasonal preparers.
- What hurts: under IRC §7216, pasting return data such as a K-1 into a personal AI account without a standalone signed consent is a disclosure violation. Rev. Proc. 2013-14 requires a separate named consent for each AI vendor, and a new one whenever the provider changes. The IRS has published no AI-specific guidance.
- How often: "most violations occur today unintentionally via copying and pasting into public AI tools".
- Cost: "a fine of up to $1,000 and up to a year in prison for each violation".
- Workaround: redact documents by hand before pasting them, or skip AI.
- Evidence: "the more the tax return preparer sanitizes the data, the less useful the AI output becomes" (https://www.tomtalkstaxes.com/p/ai-7216).
- Severity: 5

**P3. Cloud AI scribes switched on by default break client trust (therapists).**
- Who: solo therapists and their clients. SimplePractice serves about 250,000 therapists.
- What hurts: SimplePractice turned on its AI Note Taker transcripts by default, with opt-out rather than opt-in. The Psychotherapy Action Network disputes the vendor's claim that de-identification keeps retained transcripts safe.
- How often: one documented case, on a large exposed user base.
- Cost: damage to the therapeutic relationship; the therapist turned the feature off after the client objected.
- Evidence: "The more I thought about it... I felt completely violated." "It has been shown that de-identified or anonymized data can be identifiable." (https://clearhealthcosts.com/blog/2026/07/therapy-company-simplepractice-adds-ai-transcripts-by-default/, Jul 2026, citing NPR)
- Severity: 5

**P4. Informed consent has to be obtained for each client, not once in a template.**
- Who: all three professions.
- What hurts: ABA Op. 512 says boilerplate engagement-letter clauses are not enough. NYC Bar Op. 2025-6 requires consent every time AI records a client call, plus independent review of the transcript. APA, ACA, NASW and AAMFT require explicit written consent and a non-AI alternative. On top of this, §7216 requires a consent form per vendor (P2).
- How often: every client or matter, and every recorded call.
- Cost: not quantified; this is recurring work for someone with no staff.
- Workaround: bespoke disclosure scripts, consent addenda, or dropping AI.
- Evidence: "merely adding general, boiler-plate provisions to engagement letters... is not sufficient" (https://thebarexaminer.ncbex.org/article/fall-2024/generative-artificial-intelligence-tools/); "clients must be notified, and their consent obtained, whenever their calls are being recorded by an AI-empowered system" (https://www.nycbar.org/reports/formal-opinion-2025-6-ethical-issues-affecting-use-of-ai-to-record-transcribe-and-summarize-conversations-with-clients/, Dec 2025).
- Severity: 4

**P5. The safe tools come with enterprise procurement and prices.**
- Who: solo and small-firm lawyers. The same pattern is likely for the other two professions [unverified].
- What hurts: the strongest confidentiality terms are negotiated by procurement and security teams, which solos do not have. Solos are also expected to vet vendor contracts themselves. The flagship legal-AI tools are bundled, quote-only or sold with seat minimums.
- How often: structural, and it comes up again at every subscription decision.
- Cost: CoCounsel with Westlaw runs about $428–$639 per user per month; Clio's AI add-on is quote-only; some enterprise tools cost $1,000–$1,200 per seat per month with 20–25 seat minimums, about $288k a year [unverified].
- Workaround: unmanaged consumer ChatGPT.
- Evidence: "Large firms can ask procurement teams, information-security officers, and vendor counsel to negotiate data-processing terms... Solo and small-firm lawyers often cannot." (http://jolt.law.harvard.edu/digest/ai-confidentiality-and-the-stratified-legal-profession); due-diligence duty (https://zuva.ai/blog/aba-formal-opinion-512/).
- Severity: 5

**P6. Documentation and review swallow the working day.**
- Who: therapists (notes) and lawyers (review and drafting).
- What hurts: therapists write notes after hours ("pajama time"), and lawyers bill only a small share of the day.
- How often: daily or weekly.
- Cost: therapists spend 10–20 hours a week on documentation at a caseload of 25–30, and 60–70% document outside work hours (colour: https://clinicaldocslibrary.com/guides/documentation-burnout/). Lawyers bill 2.9 of 8 hours, a 38% utilization rate (https://www.clio.com/resources/legal-trends/benchmarks/, 2025).
- Workaround: nights and weekends, or hiring therapist VAs at $20–$27 an hour (https://www.ziprecruiter.com/Salaries/Virtual-Assistant-Salary), which shifts the confidentiality exposure rather than removing it.
- Severity: 4

**P7. Incumbent AI scribes make things up and fail.**
- Who: solo therapists on Mentalyc or Upheal.
- What hurts: invented session content means every note must be re-read. Treatment plans come out "piece-mail". Users report daily assistant errors and surprise renewal charges.
- How often: "major errors throughout the day every day".
- Cost: $19.99–$119.99 per month plus the time spent correcting; refunds refused.
- Evidence: "The AI makes things up that are not said in the session" (https://www.trustpilot.com/review/mentalyc.com, Mar 2025); "NOT READY TO BE MADE A PAID FEATURE" (https://www.trustpilot.com/review/upheal.io, 2026).
- Severity: 4

**P8. Tax-season crunch and manual keying of source documents.**
- Who: solo and small-firm preparers.
- What hurts: W-2, 1099 and receipt data is keyed by hand, and reconciliation catch-up piles up in March.
- How often: every January to April.
- Cost: 80+ hour weeks (colour: https://www.netgain.tech/blog/accounting-busy-season); seasonal data-entry temps paid about $19.47 an hour (https://www.ziprecruiter.com/Jobs/Tax-Season-Data-Entry).
- Workaround: seasonal temps and overtime. Cloud extraction runs into P2.
- Severity: 4

**P9. Running AI locally is out of reach without a specialist.**
- Who: solo practitioners in all three professions.
- What hurts: privacy-preserving setups assume compute and skills that small practices lack. Self-hosting is sold as a consulting job.
- How often: a one-time setup, with hardware refreshes after that.
- Cost: about $35k for one law-firm local-LLM install [unverified secondhand]. Recommended specs are 16GB RAM and a 6GB GPU (colour).
- Evidence: "the majority of legal professionals—ranging from legal aid workers to solo practitioners—lack access to such advanced and costly infrastructure" (https://arxiv.org/html/2501.10915v1); https://nicconley.substack.com/p/set-up-llms-for-businesses-and-make.
- Severity: 4

**P10. Adjacent compliance paperwork keeps growing.**
- Who: CPAs and EAs (WISP) and lawyers (supervision, insurance).
- What hurts: every e-filer must keep a written information security plan, 15–20 pages for a solo, and certify it on Form W-12. Malpractice carriers now attach AI conditions or exclusions. Rules 5.1 and 5.3 make the lawyer responsible for staff AI use.
- How often: yearly, at PTIN and policy renewal.
- Cost: fines start at $10,000 for preparers; FTC Safeguards fines start at $100k per violation (colour: https://bellatorcyber.com/blog/wisp-checklist, https://verito.com/written-information-security-plan/). The carrier shift is described at https://www.alpsinsurance.com/blog/insurance-coverage-issues-for-lawyers-in-the-era-of-generative-ai (search summary).
- Workaround: templates and written internal AI policies.
- Severity: 3

**P11. Adoption is outrunning governance.**
- Who: solo lawyers and psychologists.
- What hurts: use is climbing fast, mostly through unvetted consumer tools, which widens exposure to P1–P3.
- How often: 56% of psychologists used AI in the past year, up from 29% (https://www.apa.org/pubs/reports/practitioner/2025/full-report.pdf, Dec 2025). Solo lawyers went from 10% to 18%, and 62% are using or considering ChatGPT (https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/july-august-2025/ai-adoption-trends-by-law-firm-size-solo-small-and-mid-sized/).
- Severity: 3

**P12. Outsourced deposition summaries and document review.**
- Who: litigators and contract reviewers.
- What hurts: summaries are sent to third-party vendors and paid per page, and review is staffed as commodity labour.
- Cost: $3–$8 per page, about $300–$1,500 per transcript (https://magnals.com/how-much-do-depositions-cost/); contract reviewers earn $30–$125 an hour (https://cloudnine.com/ediscoverydaily/case-law/is-a-blended-document-review-rate-of-466-per-hour-excessive-best-of-ediscovery-daily/).
- Severity: 3

**P13. Clients distrust AI handling their data.**
- Who: clients, who shape how every consent conversation goes.
- Evidence: 24% of people do not trust AI with any legal task [unverified]; 77% worry about AI storing health data [unverified].
- Severity: 2

## Already tried

- **Consumer ChatGPT and Claude.** Cheap and already in use, but they carry the privilege, §7216 and HIPAA risks (P1, P2).
- **CoCounsel with Westlaw.** Built for Am Law firms: "Solo practitioners and small firms get little benefit" (https://thelegalprompts.com/blog/cocounsel-pricing, colour).
- **Clio Duo / Manage AI and Spellbook.** Quote-only add-ons that small firms cannot budget for.
- **SimplePractice AI Note Taker.** Default-on design and a disputed de-identification claim (P3).
- **Mentalyc and Upheal.** Fabricated content, daily errors and billing disputes (P7).
- **Deposition vendors (Ditto, SmartDepo).** They solve the labour problem, but the transcript still leaves the firm, at $1–$8 per page.
- **Therapist VAs and seasonal temps.** They move the exposure to another person rather than removing it.
- **WISP and consent templates (Verito, Bellator, ProConnect).** No evidence that they cut time or risk.
- **Cloud tax AI (TaxGPT, CPAPilot).** No independent practitioner reviews were found.
- **Hired local-LLM consultants.** Five-figure cost [unverified].

## Open questions

1. How many solo practitioners refuse AI specifically because of confidentiality, compared with cost or accuracy? No survey was found.
2. How many hours per client or per matter do consent drafting and vendor diligence take (P4, P5)?
3. Has anyone been sanctioned, prosecuted or had a privilege loss litigated for pasting client data into AI, beyond Heppner? No §7216 AI enforcement was found.
4. What is the per-return hour cost for solo preparers? Only aggregate season figures exist.
5. Do solo therapists and CPAs already own hardware that can run 16GB-class models? No data.
6. Do practitioners accept "on-device" as meeting their duty, or do their regulators want written attestations? The WSBA AO 2025-05 text was not parsed.
7. The practitioner voice is thin: no posts from r/Lawyertalk, r/therapists or r/taxpros were retrieved directly.

<!-- COMPLETE -->
