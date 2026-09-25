# Scout weak-signals-02: US regulations and deadlines

## Findings

1. **CMMC 2.0 final rule now live, phased through 2028**: The DoD's CMMC final rule was published in the Federal Register on September 10, 2025 with an effective date of November 10, 2025, making cybersecurity certification a condition of contract award for any entity handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI), including small subcontractors several tiers down the supply chain.
   - Evidence: "From that date, the DoD can include new contract clauses that make CMMC compliance a condition of award for contracts handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI)." / effective date November 10, 2025
   - Screen or work affected: self-assessment scoring and affirmation submitted through DoD's Supplier Performance Risk System (SPRS) portal; Level 2 requires 110 NIST 800-171 controls documented for third-party (C3PAO) audit
   - Source: https://www.morganlewis.com/pubs/2025/10/dod-finalizes-cmmc-rules-adding-cybersecurity-and-false-claims-act-compliance-risks (Oct 2025)

2. **CMMC phases in over four years, no automated compliance path**: Phase 1 (self-assessed Level 1/2) began Nov 10, 2025; Phase 2 (third-party C3PAO-assessed Level 2) begins Nov 10, 2026; Phase 3 (DIBCAC-assessed Level 3) Nov 10, 2027; full implementation Nov 10, 2028.
   - Evidence: "Phase 2 (Nov 10, 2026): Third-party C3PAO-assessed Level 2 required" and "there is no automated tool—this requires active diligence" for primes verifying subcontractor compliance
   - Screen or work affected: NIST 800-171 control documentation, System Security Plans (SSPs), Plans of Action & Milestones (POA&Ms), SPRS score entry
   - Source: https://godlan.com/cmmc-2-0-deadlines-rules/ ; https://www.morganlewis.com/pubs/2025/10/dod-finalizes-cmmc-rules-adding-cybersecurity-and-false-claims-act-compliance-risks (2025)

3. **CMMC noncompliance now carries False Claims Act exposure**: Legal commentary warns that certification affirmations create "an easier path to proving false certification liability" under the False Claims Act for small defense contractors who misstate their cybersecurity posture.
   - Evidence: "noncompliance with contract requirements can lead to serious consequences" including False Claims Act liability, "particularly given heightened government and relator focus on cybersecurity-based allegations"
   - Screen or work affected: annual self-attestation submitted in SPRS
   - Source: https://www.morganlewis.com/pubs/2025/10/dod-finalizes-cmmc-rules-adding-cybersecurity-and-false-claims-act-compliance-risks (Oct 2025)

4. **ADA Title II web/app accessibility deadline extended, but still applies to every jurisdiction regardless of size**: DOJ's interim final rule (published April 20, 2026) extended compliance dates for WCAG 2.1 Level AA conformance of state and local government websites and mobile apps: entities with population ≥50,000 must comply by April 26, 2027 (originally April 2026); smaller entities and special districts by April 26, 2028 (originally April 2027).
   - Evidence: "entities with a population of 50,000 or more is April 26, 2027, while entities with populations less than 50,000 or any special district government must comply by April 26, 2028" / "Every municipality regardless of size must comply with WCAG 2.1 Level AA standards, with no exemptions for small towns, villages, townships, or special district governments."
   - Screen or work affected: full website and mobile-app remediation to WCAG 2.1 AA; DOJ recommends automated plus manual audits, staff training, and public accessibility-request processes
   - Source: https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web (Apr 2026); https://mrsc.org/stay-informed/mrsc-insight/february-2026/ada-standards-websites-apps (Feb 2026)

5. **Small local governments cannot rely on automated remediation tools alone**: Guidance for cities/counties notes manual testing is mandatory alongside scanners, meaning small IT/clerk staff must interpret WCAG success criteria by hand.
   - Evidence: agencies "cannot rely on automated tools alone; manual testing is also needed"
   - Screen or work affected: municipal websites, permitting portals, agendas/minutes PDFs, mobile apps
   - Source: https://mrsc.org/stay-informed/mrsc-insight/february-2026/ada-standards-websites-apps (Feb 2026)

6. **FinCEN beneficial-ownership reporting reversed for domestic filers, kept for foreign entities**: An interim final rule (March 26, 2025), finalized August 14, 2026, exempts all U.S.-formed companies and U.S. persons from Corporate Transparency Act BOI reporting; only foreign entities registered to do business in a U.S. state/tribal jurisdiction must still file, and without reporting U.S. beneficial owners.
   - Evidence: Treasury Secretary Scott Bessent: the action eliminates "a burdensome reporting requirement for millions of law-abiding business owners without compromising our national security." / effective date August 14, 2026
   - Screen or work affected: FinCEN's BOI E-Filing portal (boiefiling.fincen.gov) — now required only for foreign-entity filers; FinCEN will delete previously filed U.S.-person data from its database
   - Source: https://home.treasury.gov/news/press-releases/sb0603 (Aug 2026); https://www.federalregister.gov/documents/2025/03/26/2025-05199/beneficial-ownership-information-reporting-requirement-revision-and-deadline-extension (Mar 2025)

7. **De minimis customs exemption eliminated for all countries as of August 29, 2025**: The $800 duty-free threshold for low-value imports ended for China/Hong Kong on May 2, 2025 and globally on August 29, 2025; CBP made the suspension indefinite by regulation effective June 24, 2026, forcing formal customs entries on shipments that previously needed none.
   - Evidence: "The de minimis exemption, which let shipments worth $800 or less enter the United States duty-free, ended for China and Hong Kong on May 2, 2025 and for every other country on August 29, 2025." / "Customs and Border Protection made the suspension indefinite by regulation effective June 24, 2026."
   - Screen or work affected: formal customs entry filings (HTS classification, commercial invoices, proof of value, partner-government-agency data) now required per shipment via CBP's ACE (Automated Commercial Environment) portal instead of informal/no-entry clearance
   - Source: https://www.shipbob.com/blog/de-minimis-value/ (2025); https://www.cnbc.com/2025/08/29/retail-impact-de-minimis-exemption-ends-globally.html (Aug 29, 2025)

8. **Small importers face steep new per-shipment costs and describe the change as existential**: A seller quoted in coverage of the rule change called the effect "devastating," and analysts note flat fees up to $50 per shipment or tariffs as high as 30% depending on product/origin.
   - Evidence: "devastating on so many levels and millions of small businesses worldwide are now having their careers, passions and livelihoods threatened." / "30% tariffs or flat fees of up to $50 per shipment"
   - Screen or work affected: HTS code lookup/mapping, commercial invoice generation, eManifest filing — described as previously unnecessary paperwork now mandatory per parcel
   - Source: https://www.shipbob.com/blog/de-minimis-value/ (2025); https://www.cnbc.com/2025/08/29/retail-impact-de-minimis-exemption-ends-globally.html (Aug 29, 2025)

9. **Colorado's AI Act delayed twice, then rewritten and narrowed**: Originally effective February 1, 2026, SB25B-004 (Aug 26, 2025) pushed it to June 30, 2026; then SB 189 (signed May 14, 2026) replaced it entirely, delaying to January 1, 2027, and scaling back duty-of-care, risk-management-program, and impact-assessment obligations in favor of narrower disclosure/human-review duties.
   - Evidence: "On May 14, 2026, Colorado Governor Polis signed SB 189, which revises Colorado's original artificial intelligence law and delays the effective date from June 30, 2026, to January 1, 2027, while significantly scaling back its original requirements." / "there is no small-business carve-out in the replacement law"
   - Screen or work affected: consumer-facing AI disclosure notices, human-review workflow documentation for automated decision-making
   - Source: https://www.clarkhill.com/news-events/news/colorados-ai-law-delayed-until-june-2026-what-the-latest-setback-means-for-businesses/ (2026); https://www.consumerfinancemonitor.com/2026/05/12/colorado-rewrites-its-landmark-ai-law-unpacking-sb-26-189-and-what-it-means-for-businesses/ (May 2026)

10. **No small-business carve-out survived Colorado's AI law rewrite**: Even after narrowing scope, the replacement law (SB 189) applies to small businesses using automated decision-making technology with no size exemption, unlike some other state AI/privacy laws.
    - Evidence: "there is no small-business carve-out in the replacement law"
    - Screen or work affected: disclosure notices and human-review logs for any deployer of covered automated decision-making tools
    - Source: https://www.sayfeai.com/blog/ai-compliance-colorado-eu-small-business-2026 (2026) [secondary corroboration; primary confirmed via Consumer Finance Monitor above]

11. **ADA Title II rule requires WCAG 2.1 AA as the enforceable legal standard, not a guideline**: DOJ's final rule (referenced by the April 2026 extension) fixes WCAG 2.1 Level AA as the binding technical standard for state/local government web content and mobile apps — the first time a specific technical conformance level has been made a federal legal requirement for this sector.
    - Evidence: "The Department of Justice published a final rule under Title II of the Americans with Disabilities Act that makes WCAG 2.1 Level AA the enforceable accessibility standard for the web content and mobile apps of state and local governments."
    - Screen or work affected: every public-facing municipal web property and mobile app, including third-party-embedded tools (agendas, permitting, payment portals)
    - Source: https://www.kwallcompany.com/2026/06/04/ada-title-ii-website-compliance-deadline/ (Jun 2026)

12. **FinCEN's domestic exemption reversal creates a compliance whiplash for small businesses that already filed**: Millions of small business owners who registered under the original Corporate Transparency Act mandate (2024) had their filings rendered moot within roughly two years, and FinCEN is now deleting that previously submitted data.
    - Evidence: "FinCEN also announced that it will delete previously reported information by U.S. persons—now exempt from the reporting requirements—from the beneficial ownership information database."
    - Screen or work affected: FinCEN BOI E-Filing System (data deletion, not a new filing burden for domestic filers — but a compliance-tracking headache for firms that built processes around it)
    - Source: https://www.fincen.gov/news/news-releases/fincen-removes-beneficial-ownership-reporting-requirements-us-companies-and-us (2025-2026)

13. **CMMC self-assessment affirmation is an annual, recurring screen-based obligation, not one-time**: Level 1 status "must be assessed and affirmed annually," and Level 2 self-assessments require annual reassessment even between three-year formal certifications — a recurring compliance task for small subcontractors with no dedicated compliance staff.
    - Evidence: "Self-assessed Level 1 must be 'assessed and affirmed annually.' Level 2 certifications remain valid for three years with annual reassessments"
    - Screen or work affected: SPRS portal submission of self-assessment scores annually
    - Source: https://www.morganlewis.com/pubs/2025/10/dod-finalizes-cmmc-rules-adding-cybersecurity-and-false-claims-act-compliance-risks (Oct 2025)

## Territories the evidence suggests

1. Recurring, self-attested cybersecurity certification (CMMC) at small defense subcontractors, submitted via a government portal, with legal liability for getting the attestation wrong.
2. Manual, iterative accessibility remediation (WCAG 2.1 AA) of small-jurisdiction government websites/apps against a fixed legal deadline, where automated scanners are explicitly insufficient.
3. Per-shipment customs paperwork (HTS classification, commercial invoice, entry filing) newly required for small e-commerce importers who previously shipped duty-free and paperwork-free.
4. Regulatory whiplash management: small businesses and their advisers must track rules that are proposed, delayed, rewritten, and reversed within the same 12–24 month window (BOI, Colorado AI Act) and adjust internal processes each time.
5. Disclosure and human-review documentation for small-business deployers of automated decision-making tools, with no small-business exemption in the rewritten Colorado law.

## Notes

- FTC Safeguards Rule, HIPAA Security Rule update, SEC/FINRA off-channel messaging recordkeeping, OSHA heat rule, and FDA/CMS prior-authorization API deadlines were candidate topics I could not verify within the available search budget this session — WebSearch quota was exhausted mid-task. These remain `[unverified]` and are flagged for a follow-up pass rather than included as findings.
- California SB 53, CCPA automated-decision-making regulations, Texas TRAIGA, NYC Local Law 97, and state short-term-rental registration were also candidate topics not reached before search budget ran out; drop or reassign if not covered elsewhere.
- One secondary source (finding 10, sayfeai.com) restates a claim also found in a stronger primary-adjacent source (Consumer Finance Monitor); flagged as corroboration only, not independently verified past that overlap.
- The de minimis/customs finding does not identify the specific CBP filing system beyond general reference to "formal customs entry" and ACE; the exact small-seller-facing portal/form (e.g., Type 86 entry, informal entry via broker software) was not confirmed in the sources opened and should be verified further if used.
- Colorado AI Act status is unusually volatile: three effective dates in about 18 months (Feb 2026 → Jun 2026 → Jan 2027) with a full law rewrite (SB25B-004 then SB 189) — worth re-checking status close to any downstream use of this finding, since it may change again before January 2027.

<!-- COMPLETE -->
