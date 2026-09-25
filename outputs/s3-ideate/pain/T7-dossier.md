# T7 dossier: Verifying and triaging AI-generated submissions

Merged from `outputs/s3-ideate/pain/T7-01.md` (legal filings) and `outputs/s3-ideate/pain/T7-02.md` (vulnerability reports, insurance claims). The three sub-niches have different buyers. Neither miner found first-person forum threads, so the evidence comes from court records, maintainer blogs, trackers and press.

## Pain points

**P1. Sanctions and fee-shifting for filing unchecked AI citations**
- **Who:** litigators and their firms, from solo practitioners to large firms.
- **What hurts:** fabricated cases reach the court, and the firm pays in money, careers and reputation.
- **How often:** the tracked incidents are speeding up, from about 200 in mid-2025 to 719 by January 2026 and 1,598 by 9 June 2026 (https://www.damiencharlotin.com/hallucinations/).
- **Cost:**
  - $59,500 paid to the opposing firm that found the fakes (https://news.bloomberglaw.com/legal-ops-and-tech/ai-fake-citations-expose-lawyer-sloppiness-and-training-gaps).
  - $31,100 in fees after a special master struck the briefs (https://tagteam.harvard.edu/hub_feeds/3622/feed_items/13788105/content).
  - Nearly 30 defective citations in one brief, with a $3,000 fine for each of two attorneys (https://www.lawnext.com/2025/05/ai-hallucinations-strike-again-two-more-cases-where-lawyers-face-judicial-wrath-for-fake-citations.html).
  - Mata v. Avianca drew a $5,000 sanction and required letters to every judge falsely named (https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.).
  - An associate was reportedly fired (https://spellbook.com/learn/lawyer-fined-using-ai-legal-fake-citations).
- **Workaround:** firm-wide warning emails. Morgan & Morgan told more than 1,000 lawyers that fake case law "could get them fired" (https://www.fastcompany.com/91280650/ai-hallucinations-could-get-lawyers-fired-law-firm).
- **Severity:** 5.

**P2. Paid legal AI still hallucinates, so every brief needs a manual cite-check**
- **Who:** litigators, paralegals and legal proofreaders.
- **What hurts:** buying a "hallucination-free" tool does not remove the need to check. Stanford RegLab measured hallucination rates of "17% for Lexis+ AI, 33% for Westlaw AI-Assisted Research, and 43% for GPT-4" (https://reglab.stanford.edu/publications/hallucination-free-assessing-the-reliability-of-leading-ai-legal-research-tools/).
- **How often:** every brief.
- **Cost:**
  - "Manual cite-checking typically takes 2-5 hours per brief." This is a vendor figure [unverified] (https://attorneyatlawmagazine.com/legal-technology/ai/the-vanishing-billable-and-non-billable-hour-part-2-clearbrief).
  - A dedicated legal-proofreader role exists, paying an average of $27.65 an hour (https://www.ziprecruiter.com/Salaries/Legal-Proofreader-Salary).
- **Workaround:** pulling each case by hand, or KeyCite and Shepard's.
- **Severity:** 4.

**P3. A new duty to catch the other side's fabricated citations**
- **Who:** opposing counsel.
- **What hurts:** in Noland v. Land of the Free, the court denied a fee award because the respondents "did not alert the court to the fabricated citations" (https://wisblawg.law.wisc.edu/2025/09/16/does-fee-denial-signal-new-expectations-for-detecting-opposing-counsels-ai-hallucinations/). Other lawyers were "dinged for failing to detect opponent's fake citations" (https://www.lawnext.com/2025/09/a-new-wrinkle-in-ai-hallucination-cases-lawyers-dinged-for-failing-to-detect-opponents-fake-citations.html).
- **How often:** every opposing filing, which roughly doubles the checking load.
- **Cost:** lost fee awards, and sanctions on the lawyer who did not draft the fake.
- **Workaround:** none established.
- **Severity:** 4.

**P4. Courts and clerks have no capacity to screen filings**
- **Who:** judges, clerks and pro se staff attorneys.
- **What hurts:** time goes to misconduct instead of the merits. Judge Garcia Marmolejo (S.D. Tex.) said there are "scant resources to spare ferreting out erroneous AI citations in the first place," and Judge Dunst (E.D.N.Y.) had "no choice but to survey the case law regarding attorney misconduct" (https://news.bloomberglaw.com/legal-ops-and-tech/ai-faked-cases-become-core-issue-irritating-overworked-judges).
- **How often:** docket-wide. Pro se litigants account for 59% of documented hallucination cases (https://www.haqq.ai/blog/ai-legal-hallucination-audit).
- **Cost:** judicial and staff time, not quantified.
- **Workaround:** ad hoc. The instructions courts give pro se filers "do not contain any mentions of AI usage" (https://blog.citp.princeton.edu/2026/05/27/can-ai-reduce-burdens-on-courts-by-automatically-verifying-citations/).
- **Severity:** 4.

**P5. GenAI standing orders differ from judge to judge**
- **Who:** anyone filing in a court with a GenAI standing order.
- **What hurts:** the rules conflict. Some orders require disclosing the tool used, others require certifying that citations were verified. There is "a lack of consistency, which only adds to confusion and imposes additional burdens and costs on litigants" (https://library.law.unc.edu/2026/02/judicial-guidance-on-the-use-of-genai-in-court/).
- **How often:** every filing, for every judge.
- **Cost:** research time, not quantified.
- **Workaround:** private trackers and client alerts.
- **Severity:** 3.

**P6. Open-source maintainers flooded with AI-slop vulnerability reports**
- **Who:** volunteer maintainers of curl, and of CPython, pip, urllib3 and Requests.
- **What hurts:** every report has to be read and disproven. Reports cite nonexistent functions and fabricated commit hashes, and arrive with 3-5 duplicates. Stenberg of curl wrote that the reports "take a serious mental toll to manage and sometimes also a long time to debunk" and that "not even one in twenty was real" (https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/).
- **How often:**
  - curl received 20 reports in the first 21 days of January 2026, none of them real.
  - Some maintainers receive 20-40 reports a week and feel "effectively DDoS'ed" (https://theoutpost.ai/news-story/ai-bug-hunters-flood-open-source-security-with-reports-maintainers-struggle-to-separate-signal-from-noise-24455/).
- **Cost:**
  - Each report takes 30 minutes to several hours, and real reports queue behind the fake ones (https://socket.dev/blog/curl-shuts-down-bug-bounty-program-after-flood-of-ai-slop-reports).
  - curl's confirmed-vulnerability rate fell from over 15% to below 5%.
- **Workaround:**
  - curl closed its paid bounty on 1 February 2026 and threatens to "ban you and ridicule you in public."
  - Seth Larson at the PSF checks by hand that cited code exists (https://www.itbrew.com/stories/2025/01/06/devs-warn-ai-generated-inaccurate-bug-reports-are-slamming-open-source-projects).
- **Severity:** 5.

**P7. Bug-bounty programs cannot keep up with report volume**
- **Who:** corporate program owners and platform triagers.
- **What hurts:** most reports are noise, and the first pass is mechanical.
- **How often:**
  - Elastic received 1,390 reports in the first half of 2026, more than in all of 2024 and 2025 combined. About 70% were rejected before anyone tried to reproduce them.
  - HackerOne says 60-80% of submissions are invalid, and Bugcrowd gets about 500 more reports a week [unverified; secondary sources only].
- **Cost:**
  - 30-60 minutes of analyst time per report (https://www.elastic.co/security-labs/ai-vulnerability-triage-bug-bounty-hackerone).
  - Triage roles pay about $32-$67 an hour (https://www.ziprecruiter.com/Jobs/Bug-Bounty-Program).
- **Workaround:** Elastic built its own first-pass pipeline for about $2 per report and kept a human for the final call.
- **Severity:** 4.

**P8. Bogus CVEs pollute the vulnerability databases**
- **Who:** CVE and NVD staff, and every downstream consumer of those records.
- **What hurts:** fabricated vulnerabilities get into the official record, for example six "complete garbage" SQLite CVEs (https://www.theregister.com/security/2026/08/03/ai-slop-pollutes-the-cve-pipeline-with-fake-vulns/5282462).
- **How often:** the backlog is ongoing and exceeded 27,000 by the end of 2025.
- **Cost:** NVD now enriches only 15-20% of incoming CVEs, and about 29,000 are marked "Not Scheduled."
- **Workaround:** rationing which records get reviewed.
- **Severity:** 3.

**P9. Claims adjusters must re-verify hallucinated AI summaries from their own carrier**
- **Who:** claims adjusters.
- **What hurts:**
  - Carrier AI tools hallucinate when they read imperfect documents: "a smudge on a document from an attorney." A summary that "leaves out an important detail from a medical report" can "result in an inaccurate payout."
  - When an adjuster passes an error on to a claimant or attorney, the adjuster "bore the brunt of their fury."
  - One adjuster described "AI fatigue... AI being shoved down our throats."
- **How often:** 98% of adjusters' Glassdoor reviews that mention AI are negative (https://www.techspot.com/news/113688-claims-adjusters-ai-making-insurance-process-harder-not.html).
- **Cost:** rework on every claim and the risk of wrong payouts. Adjuster employment fell 21% between May 2025 and May 2026, so fewer people absorb the checking.
- **Workaround:** re-reading the source records by hand.
- **Severity:** 5.

**P10. AI-altered claim photos and documents get past first review**
- **Who:** special investigations units (SIU) and fraud examiners.
- **What hurts:** fabricated photos, invoices and medical records look real enough to pass a first review.
- **How often:**
  - An estimated 20-30% of claims may contain AI-altered media, and 99% of insurers have already seen such material (https://www.simplesolve.com/blog/ai-altered-media-insurance-claims).
  - About 1 in 50 forged documents is AI-generated.
  - Admiral reports fraud up 71% year over year (https://eciks.org/6336-73684-insurance-industry-tackles-ai-generated-image-fraud-308-6b-annual-threat).
- **Cost:** part of a claimed $308.6B annual fraud threat.
- **Workaround:** forensic checks of metadata and pixels, but only after a claim is escalated.
- **Severity:** 4. The sources are secondary blogs.

**P11. AI-drafted personal-injury demand letters need cross-checking**
- **Who:** bodily-injury adjusters.
- **What hurts:** ICD codes and dates in AI-drafted demand letters do not match the medical records.
- **How often:** every such letter. 37% of personal-injury lawyers use generative AI.
- **Cost:** disputes and delays, not quantified.
- **Workaround:** checking codes against the records by hand (https://www.inquery.ai/post/ai-demand-letter-tools-personal-injury-2026/).
- **Severity:** 2. The source is close to a vendor.

## Already tried

- **Westlaw AI-Assisted Research and KeyCite, Lexis+ AI and Shepard's:** they hallucinate at 33% and 17% (Stanford RegLab), so their output still has to be checked independently.
- **CoCounsel:** described as lacking brief-level citation checking (https://aitoolsbakery.com/blog/best-ai-tools-for-paralegals/).
- **Clearbrief:** the vendor claims it cuts a cite-check from 2-5 hours to 15-30 minutes. That claim comes from the vendor and only 9 G2 reviews, and no one has replicated it independently.
- **General LLMs:** they have the highest measured hallucination rate (43%) and are the most common cause of sanctions.
- **Manual workarounds:** court standing orders, firm memos and outsourced proofreaders.
- **HackerOne and Bugcrowd triage:** these did not stop the flood from reaching curl's maintainers.
- **GitHub private vulnerability reporting:** it removes the payouts but not the reading and reproducing.
- **Elastic's in-house triage pipeline:** it works, but it is custom-built, and no maintainer-grade version exists.
- **NVD triage model:** it rations review rather than fixing the backlog (https://labs.cloudsecurityalliance.org/research/csa-whitepaper-nvd-infrastructure-crisis-ai-vulnerability-di/).
- **Carrier AI claim summarizers:** they are the source of the hallucinations in P9 and push "the cleanup back to the humans."
- **SIU forensic image analysis:** it runs only after escalation and misses what passes first review.

## Open questions

- **Willingness to pay by sub-niche.** Law firms pay today (sanctions and proofreaders). Open-source maintainers are unpaid, so the payer might be a platform, foundation or corporate program. Insurance adjusters are employees, so the payer is the carrier, which is also the one deploying the faulty AI.
- **Missing first-person quotes.** Neither miner could reach r/Lawyertalk, r/paralegal, r/bugbounty, r/netsec or r/ClaimsAdjusters, and no quotes from those forums were captured.
- **Unverified figures:**
  - HackerOne's 60-80% invalid rate and Bugcrowd's 500 extra reports a week lack a primary source.
  - The 2-5 hour manual cite-check is a vendor figure.
  - The insurance-fraud prevalence numbers come from blogs.
- **No aggregate cost.** Neither file gives a dollar figure for the total yearly labor cost of slop triage or cite-checking.
- **Adjuster hallucination rate.** No one has measured how often carrier AI summaries actually hallucinate.
- **Who can check the checkers.** P2 shows that paid legal AI fails its own checks, and neither file says how buyers would come to trust a verifier.
- **Adjuster employment decline.** The files do not show whether the 21% drop is caused by AI or only coincides with it.

<!-- COMPLETE -->
