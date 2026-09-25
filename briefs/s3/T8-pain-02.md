# Pain-miner brief T8-02: proxy admin for an aging parent, money and estate half

## Objective
Collect the best available evidence of pain felt by people who handle **an older adult's money, income benefits and accounts, before and after death**. These are adult children, agents under power of attorney, court-appointed guardians or conservators, representative payees, paid daily money managers (DMMs) and executors. The work happens on screens: bank and card sites, utility and subscription accounts, ssa.gov and VA.gov, brokerages, and each institution's own death or POA process. You document what hurts. You do not propose fixes.

Read `config/context.md` and the T8 section of `gates/gate-B.md` before starting.

## Boundary of this half (exact)
**In:**
- Daily and monthly money management for a parent: bill-pay, watching accounts, catching missed or duplicate payments, and cancelling unwanted subscriptions.
- Getting recognised as a financial proxy: banks rejecting or stalling a POA, bank-specific POA forms, joint-account and convenience-signer confusion, delegated or "trusted contact" access, and proxies using the parent's own credentials and MFA.
- Income benefits and the duties that come with them: Social Security and SSI representative-payee duties and annual accounting, VA fiduciary duties, and pension paperwork.
- Elder-fraud watching: scams, suspicious transfers, gift-card or crypto requests, and what families see too late.
- Settling the estate after death: notifying and closing accounts across institutions, death-certificate requests, account discovery, transferring or retitling assets, digital accounts, and Medicaid estate-recovery notices.

**Out (covered elsewhere, do not mine):**
- Medicaid and Medicare applications, renewals, plan choice, MA or Part D prior-auth appeals, medical bills and EOBs, and health-side proxy recognition (HIPAA forms, portal proxy access). All of this belongs to brief T8-01.
- The guardian's court filing or annual accounting submission itself (territory T4). The pain of gathering the financial records for it is in scope here.
- Clinical care, in-person interpretation, and business-side bookkeeping (T2).

If an item touches both halves, log it here only if the pain is on the money or account side.

## Questions to answer (6)
1. How do banks, brokerages and card issuers treat a POA or guardianship order? How long does acceptance take, how often is it rejected, and what does that push proxies into doing, such as sharing the parent's credentials, forwarding MFA codes or making branch visits?
2. What does monthly bill-pay and account monitoring for a parent involve? Count the accounts, logins and hours per month, and list what gets missed, such as late fees, autopay failures, duplicate charges or zombie subscriptions.
3. How do families spot elder fraud, or fail to spot it? How long passes between the first loss and discovery, what is the typical dollar loss, and what signals were visible in the accounts but not seen?
4. What does a representative payee or VA fiduciary have to record and report, and how is it done today? Where do people get flagged or penalised?
5. After a death, how many institutions does an executor contact, how long does each take, how many death certificates are used, and which institutions are the worst? Include digital accounts and assets nobody knew existed.
6. What do people use today, such as spreadsheets, bank alert settings, EverSafe, Carefull, DMM services, estate-settlement services (Empathy, Elayne, Atticus) or elder-law attorneys? What does each cost, and where does it fall short?

## Sources to mine
- **Regulator and primary data:** FBI IC3 elder-fraud report (https://www.aarp.org/money/scams-fraud/fbi-report-fraud-2024/), FTC data on older consumers (https://www.cnbc.com/2025/12/13/financial-fraud-seniors-ftc.html), CFPB reports on elder financial exploitation and on POA acceptance at banks, CFPB consumer complaint database entries about POA, deceased customers and representative payees, SSA OIG audits of the rep-payee program, and the Uniform Power of Attorney Act acceptance provisions.
- **Forums and subreddits:** r/AgingParents, r/CaregiverSupport, r/eldercare, r/personalfinance, r/legaladvice, r/Scams, r/Executor, r/EstatePlanning, AgingCare.com forums, and Bogleheads threads on POA and estate settlement.
- **Reviews of incumbent tools:** G2, Trustpilot and app-store reviews of EverSafe, Carefull, True Link, Empathy, Elayne (https://www.elayne.com/resources/how-to-close-a-bank-account-after-someone-dies), Atticus, and bank caregiver or delegated-access features.
- **Job postings and services:** daily money manager listings (https://www.ziprecruiter.com/Jobs/Daily-Money-Manager), AADMM member rates and scope, professional fiduciary and conservator fee schedules, and estate-administration paralegal postings.
- **Complaint threads:** CFPB complaints, news and consumer-advocate coverage of banks refusing POAs or freezing accounts, and threads about account lockouts after a death.

## Evidence standard
- Record **10–20 pain items**. Each needs at least one **verbatim quote with a working link**, plus any available numbers for **frequency** (how often), **time** (hours, days or months) and **money** (losses, fees, late charges, professional rates).
- Prefer first-person proxy voices from 2024–2026 over vendor blogs. Label vendor or aggregator claims as such. The death-admin sub-niche currently rests on one aggregator, so find independent corroboration or say it is missing.
- Never invent quotes, numbers or URLs. If you cannot verify something, mark it `[unverified]`. Where a question found no evidence, say so. Gaps are useful findings.

## Output
Write `outputs/s3-ideate/pain/T8-02.md`, **1500 words at most**, in this format:

```
# T8-02 pain: proxy admin, money and estate half

## Pain items
### 1. <short name>
- Who: <adult child / POA agent / guardian / rep payee / DMM / executor>
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
