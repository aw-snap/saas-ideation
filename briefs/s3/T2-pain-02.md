# Pain-miner brief: T2-02, the e-invoicing switchover (structured formats and EU mandates)

Territory T2: invoice intake and the e-invoicing switchover at small firms. Half 2 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain that small firms (micro to mid-size, roughly 1-250 staff) and the accountants, bookkeepers and tax advisers serving them feel as B2B invoicing moves to **mandatory structured e-invoices** in Germany, Belgium, France and Spain. Find who is affected, what they must do and by when, how long it takes, what it costs, and what goes wrong.

## Boundary of this half
- **In:** everything about structured e-invoices and the four mandates:
  - **Receiving:** getting a mailbox or platform to accept XRechnung, ZUGFeRD, Factur-X, Peppol BIS/UBL or Facturae; opening and reading XML invoices; validation errors; mixed flows where some suppliers send XML and others PDF; getting structured data into the firm's accounting software.
  - **Issuing:** producing compliant invoices from small invoicing tools, spreadsheets or Word templates; mandatory fields; rejections; Verifactu or equivalent real-time reporting in Spain.
  - **Choosing and running a platform:** Peppol access points, France's certified platforms (PA, formerly PDP) and the public portal, Belgian Peppol onboarding, Spanish certified software; costs, onboarding, directory registration, switching.
  - **Readiness and deadlines:** awareness, confusion over dates and exemptions, adviser workload, archiving rules, penalties. Per Gate B: Belgium live since January 2026, Germany receiving since January 2025 with issuing phased later, France receiving from September 2026 and issuing by small firms from September 2027, Spain phased. The miner must verify the current dates and any postponements with sources.
- **Out, owned by T2-01:** unstructured intake (PDFs, scans, emails, vendor-portal downloads), OCR capture, GL coding and posting of non-structured documents, and the freight sub-niche. If a source covers both, record only the structured and mandate part.
- **Out of the territory:** vendor-fraud checking of payment-change emails (T5), general bookkeeping and VAT returns not tied to the e-invoice duty, nonprofit fund accounting.

## Questions
1. Which small firms are hit hardest (sole traders, craft trades or Handwerk, micro-SMEs on Word or Excel invoices, firms trading cross-border), and how many firms in each country fall under each deadline?
2. What exactly must a small firm do to receive and to issue compliantly, and what do firms and advisers say is confusing (formats, platform choice, exemptions, dates, archiving)?
3. How long does switching take and what does it cost: platform or access-point fees, software upgrades, adviser hours, per-invoice fees? Give numbers.
4. What goes wrong in practice: XML invoices that cannot be opened or read, validation rejections, suppliers sending non-compliant files, duplicates across PDF and XML, accounting software that cannot import the format? Give first-person reports from Germany (receiving live since 2025) and Belgium (live since 2026).
5. What load does the switchover put on accountants, Steuerberater, experts-comptables and gestorías serving many small clients?
6. What do small firms use today (DATEV, lexoffice, sevDesk, Pennylane, Sage, Holded, Billit, Exact, QuickBooks EU, free validators and viewers, national portals), and what do users say those tools still fail at?

## Sources to mine
- Forums and communities in local languages: German (r/selbststaendig, r/Finanzen, gruenderszene, Steuerberater and Handwerk forums, lexoffice and sevDesk communities; search "XRechnung öffnen", "E-Rechnung Pflicht Kleinunternehmer", "ZUGFeRD Fehler"), French (r/vosfinances, r/france, compta-online.com forums; search "facturation électronique PDP", "plateforme agréée TPE", "Factur-X rejet"), Belgian (Dutch and French; search "Peppol verplicht", "e-facturation Peppol 2026 problème"), Spanish (r/SpainEconomics, gestoría forums; search "Verifactu autónomos", "factura electrónica obligatoria pymes"). Quote the original language and give an English gloss.
- Reviews of incumbents on G2, Capterra, Trustpilot, OMR Reviews and app stores: DATEV, lexoffice, sevDesk, Pennylane, Billit, Holded, Sage, Exact, Peppol access-point providers, and French certified platforms.
- Regulator and official documents: German BMF letters on E-Rechnung, Belgian FPS Finance Peppol guidance, French DGFiP pages and the list of certified platforms, Spanish AEAT Verifactu pages and the Crea y Crece rules, plus the Gate B links (https://www.forbes.com/sites/aleksandrabal/2025/11/02/2026-the-year-mandatory-e-invoicing-sweeps-across-europe/ ; https://www.ey.com/en_gl/technical/tax-alerts/french-government-announces-simplification-measures-as-part-of-september-2026-e-invoicing-mandate).
- Surveys and trade bodies: Bitkom, DIHK, ZDH (Handwerk), CPME, UNIZO, chambers of commerce, and accountant-body surveys on readiness.
- Job postings for "E-Rechnung", "facturation électronique" or "Peppol" implementation roles at small firms and accounting practices, showing the work and wages.
- Complaint threads and news: 2024-2026 trade press (Handelsblatt, Les Echos, Expansión, Accounting Today EU coverage) on readiness gaps, postponements and small-firm complaints.

## Evidence standard
- **10-20 pain items.** Each item carries at least one verbatim quote or specific number, with a link, a date, and the country, role and tool named where the source names them.
- Prefer first-person complaints from small-firm owners and their advisers; regulator pages establish the duty but should not be most of the items. Flag vendor-authored numbers as vendor claims.
- For every item, give frequency (how often it happens, or how many firms are affected) and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`, including any deadline you could not confirm from an official source. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T2-02.md`, 1500 words max:
- a one-line header naming the half (T2-02, e-invoicing switchover: structured formats and EU mandates);
- a short `## Deadlines` table: country, who, receive date, issue date, source link;
- numbered pain items (`1.`, `2.`, ...), each with: **Who (country, role)** / **Step (receive, issue, platform, readiness)** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T2-01 covers unstructured intake and the freight sub-niche.
- Write only your output file.
<!-- COMPLETE -->
