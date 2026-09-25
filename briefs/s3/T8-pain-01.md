# Pain-miner brief T8-01: proxy admin for an aging parent, health-coverage half

## Objective
Collect the best available evidence of pain felt by people who handle **health coverage and care-payment paperwork on behalf of an older adult**. These are adult children, court-appointed guardians and paid daily money managers (DMMs) or geriatric care managers. The work happens on screens: they log into state Medicaid portals, Medicare.gov, Medicare Advantage and Part D plan portals, and provider billing portals using someone else's identity, or try to get recognised as that person's representative. You document what hurts. You do not propose fixes.

Read `config/context.md` and the T8 section of `gates/gate-B.md` before starting.

## Boundary of this half (exact)
**In:**
- Medicaid (including long-term-care and HCBS waiver Medicaid) applications, annual renewals and redeterminations, requests for documents, and procedural terminations.
- Medicare enrollment choices and plan switching: Medicare Advantage vs Medigap, Part D formulary changes, and the open-enrollment comparison grind.
- Medicare Advantage and Part D prior-authorization denials and appeals made by the family or the patient side, including reconsideration levels and the paperwork each level needs.
- Medical bills, EOBs, balance billing and coordination-of-benefits errors that the proxy has to untangle across plan and provider portals.
- Getting recognised as a proxy for health matters: HIPAA authorizations, Medicare "1-800-MEDICARE authorization" forms, Medicaid authorized-representative forms, portal proxy access, and why portals lock the proxy out.

**Out (covered elsewhere, do not mine):**
- Bank, brokerage, household bill-pay, Social Security or VA income benefits, representative-payee duties, elder-fraud monitoring, powers of attorney at financial institutions, estate settlement after death, and Medicaid estate recovery. All of this belongs to brief T8-02.
- The provider or practice side of payer portals (territory T1), the guardian's court filing itself (T4), clinical care decisions, and in-person interpretation.

If an item touches both halves (for example, a guardian doing a Medicaid renewal that also needs bank statements), log it here only if the pain is on the health-coverage side, such as the renewal form or portal. Pain about getting the bank statements belongs to T8-02.

## Questions to answer (6)
1. How do Medicaid renewals fail when a proxy handles them, for example mail sent to the wrong address, portal login tied to the parent's identity, or document requests missed? How often does a procedural termination happen, and what does reinstatement cost in time, coverage gaps and money?
2. When a Medicare Advantage or Part D claim is denied, what stops the family from appealing, given that few appeal and most who do win? Consider deadlines, forms, finding the denial letter, and getting records from providers. How many hours does an appeal take?
3. How much work does it take to be recognised as a proxy? Which portals refuse delegated access, force the proxy to use the parent's credentials, or reject authorization forms? What does that lead to, such as credential sharing, MFA to the parent's phone, or lockouts?
4. How much time does the yearly Medicare plan comparison and switch take when done for someone else, and what goes wrong afterwards, such as a formulary drug dropped or a network doctor lost?
5. Which medical billing and EOB errors do proxies catch or miss, such as duplicate bills, balance billing or wrong primary payer? What do those errors cost, and how long do they take to resolve?
6. What do proxies use today, such as spreadsheets, paper binders, shared calendars, SHIP counselors, patient advocates, elder-law attorneys or paid care managers? What does each cost, and where does it fall short?

## Sources to mine
- **Regulator and primary data:** KFF on MA prior authorization (https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/), CBPP unwinding tracker (https://www.cbpp.org/research/health/unwinding-watch-tracking-medicaid-coverage-as-pandemic-protections-end), https://pmc.ncbi.nlm.nih.gov/articles/PMC12343369/, the HHS OIG reports on MA denials, the CMS authorized-representative and appeals pages, MACPAC, and state Medicaid renewal dashboards.
- **Forums and subreddits:** r/AgingParents, r/CaregiverSupport, r/eldercare, r/medicare, r/medicaid, r/HealthInsurance, AgingCare.com forums, and the Caring.com and Alzheimer's Association ALZConnect caregiver boards.
- **Reviews of incumbent tools:** app-store and Trustpilot reviews of state Medicaid apps and portals, the Medicare.gov plan finder, MA plan member apps (UnitedHealthcare, Humana, Aetna), and caregiver organiser apps (CaringBridge, Carely, ianacare, Caring Village). Check G2 and Capterra for patient-advocacy and care-management software.
- **Job postings and services:** patient advocate, Medicare appeals specialist and geriatric care manager listings, plus the rates charged by claims-assistance and patient-advocate services such as AdvoConnection and the Alliance of Claims Assistance Professionals.
- **Complaint threads:** CFPB and state insurance department complaints, the Medicare Rights Center's annual helpline trends report, and news coverage of procedural disenrollment and MA denials.

## Evidence standard
- Record **10–20 pain items**. Each needs at least one **verbatim quote with a working link**, plus any available numbers for **frequency** (how often), **time** (hours or days) and **money** (dollars lost, fees paid, bills wrongly paid).
- Prefer first-person proxy voices from 2024–2026 over vendor blogs. Label vendor or aggregator claims as such.
- Never invent quotes, numbers or URLs. If you cannot verify something, mark it `[unverified]`. Where a question found no evidence, say so. Gaps are useful findings.

## Output
Write `outputs/s3-ideate/pain/T8-01.md`, **1500 words at most**, in this format:

```
# T8-01 pain: proxy admin, health-coverage half

## Pain items
### 1. <short name>
- Who: <adult child / guardian / DMM / care manager>
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
