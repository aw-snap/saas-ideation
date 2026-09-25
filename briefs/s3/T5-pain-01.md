# Pain-miner brief: T5-01, proving security to outsiders (insurance questionnaires, CMMC, HIPAA Security Rule)

Territory T5: security evidence and compliance chores in organizations with no IT staff. Half 1 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain in the work a 5-50 person firm, town office or nonprofit does **to answer or attest about its security to an outside party** (an insurer, the Department of Defense, or HHS regulators). The person doing it is usually an "accidental admin" (office manager, owner, bookkeeper, practice manager), sometimes with a small MSP helping. Find who does it, how often, how long it takes, what it costs, what evidence they have to dig out of which consoles, and what goes wrong.

## Boundary of this half
- **In:**
  - Cyber-insurance applications and renewal questionnaires (often 60-150 questions): MFA, EDR, backups, patching, email filtering and similar controls; gathering screenshots and proof; premium hikes, declined coverage, and claims denied because an answer turned out to be wrong.
  - CMMC Level 1 and Level 2 self-assessment for small defense subcontractors: NIST SP 800-171 controls, the SPRS score and annual affirmation, the System Security Plan and POA&M, the cost of a C3PAO audit, the False Claims Act exposure, and the phase dates (Phase 1 live since 10 Nov 2025; third-party assessments from Nov 2026).
  - HIPAA Security Rule duties for small practices: the security risk analysis, asset inventory, and what the proposed Security Rule overhaul would add (check whether it has been finalized as of Sept 2026; if it has not, say so).
  - The MSP's side of these tasks: filling questionnaires or assessments for many small clients.
- **Out, owned by T5-02:** the operational chores themselves: offboarding across SaaS consoles, identity and admin-console confusion (Microsoft 365, Google Workspace, Entra), SPF/DKIM/DMARC setup, checking payment-change emails for BEC, and AI agents using shared credentials. If a source covers both, record here only the "prove it to an outsider" part. For example, "the insurer asked whether we enforce MFA and I couldn't tell" belongs here; "setting up MFA in the console was confusing" belongs to T5-02.
- **Out of the territory:** enterprise GRC and SOC 2 programs at large firms, security tooling for large organizations, MCP tool-poisoning, and non-security regulatory filings (T4).

## Questions
1. Who fills these questionnaires and assessments at firms with no IT staff (by role and org type), how often (annual renewal, annual SPRS affirmation, per-contract), and how many hours does one take end to end?
2. What does it cost: insurance premium increases or denials tied to answers, CMMC Level 2 readiness and C3PAO audit quotes, consultant or MSP fees, lost DoD contracts or subcontracts? Give dollars and dates.
3. What evidence has to be collected, and from where (admin consoles, backup tools, endpoint agents, paper policies)? What is the repeated manual step: screenshots, exporting settings, interpreting jargon, re-answering the same control on different forms?
4. What goes wrong: claims denied over misstatements on the application, inflated SPRS scores and False Claims Act cases, failed assessments, HIPAA penalties or OCR settlements against small entities? Give counts and dollars.
5. How many small firms are affected: DoD subcontractors needing Level 1 or 2, small covered entities under HIPAA, small firms buying cyber cover? Which of them say they will drop out rather than comply?
6. What do they use today (spreadsheets, insurer portals, CMMC readiness tools, HIPAA risk-assessment templates such as the HHS SRA Tool, MSPs, consultants), and what do users say those tools still fail at?

## Sources to mine
- Forums and subreddits: r/CMMC, r/msp, r/sysadmin, r/smallbusiness, r/InsuranceAgent, r/HIPAA, r/healthIT, r/dentistry, r/Accounting; the CMMC-AB/Cyber AB community and LinkedIn posts from small defense suppliers. Search phrases such as "cyber insurance questionnaire", "insurance renewal MFA question", "SPRS score", "CMMC level 2 cost small business", "800-171 self assessment", "HIPAA risk assessment small practice". If Reddit is blocked, use search-engine results that quote Reddit, plus MSPGeekForum, Spiceworks Community and Student Doctor Network.
- Reviews of incumbents on G2, Capterra and app stores: CMMC and 800-171 readiness tools (e.g. PreVeil, Totem, Kiteworks, Etactics, Securicy, Exostar), small-practice HIPAA tools (Compliancy Group, HIPAA One, Accountable), SMB compliance platforms (Vanta, Drata, Secureframe, only where reviewers are small firms), and cyber insurers aimed at small business (Coalition, At-Bay, Cowbell). Confirm each exists before citing it.
- Job postings (Indeed, LinkedIn, ZipRecruiter) for "office manager" or "IT/compliance coordinator" at small defense or medical firms whose duties name CMMC, SPRS, HIPAA risk assessment or cyber-insurance renewals, with wages.
- Regulator and primary documents: the CMMC final rules (32 CFR Part 170 and the DFARS 48 CFR rule) and DoD's cost estimates for small entities in them; NIST SP 800-171; the HHS proposed HIPAA Security Rule NPRM (Jan 2025) and its regulatory impact analysis; OCR enforcement actions against small entities; DOJ Civil Cyber-Fraud Initiative settlements.
- Complaint threads and news: trade press (Insurance Journal, Federal News Network, Defense News, Fierce Healthcare, Healthcare IT News) from 2024-2026; court cases over cyber-claim denials tied to application answers.
- Starting points from Gate B: https://www.snl-techservices.com/post/cyber-insurance-readiness-small-business ; https://www.morganlewis.com/pubs/2025/10/dod-finalizes-cmmc-rules-adding-cybersecurity-and-false-claims-act-compliance-risks ; https://godlan.com/cmmc-2-0-deadlines-rules/ ; https://livecompliance.com/blog/2026-hipaa-security-rule-overhaul/

## Evidence standard
- **10-20 pain items.** Each item carries at least one verbatim quote or specific number, with a link, a date, and the role, org type and form or regime named where the source names them.
- Prefer first-person complaints from owners, office managers and small MSPs. Gate B flagged the lack of complaints and time-to-complete figures as T5's main gap, so hunt for hours spent and dollars paid. Regulator cost estimates are welcome but should not be most of the items.
- For every item, give frequency (how often it happens) and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T5-01.md`, 1500 words max:
- a one-line header naming the half (T5-01, proving security to outsiders: insurance, CMMC, HIPAA);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Regime or form** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools or services people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T5-02 covers the operational admin and email chores.
- Write only your output file.
<!-- COMPLETE -->
