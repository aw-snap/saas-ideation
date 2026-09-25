# Scout brief: weak-signals-scout-03 (newly opened public data sources and APIs)

Task id: s1-scout-weak-signals-03
Lens: weak-signals (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25.

## Objective
Find **public data sources, feeds and APIs that newly opened, became machine-readable, or grew much larger between 2024 and 2026**, together with evidence of who is struggling to use them and what manual screen work stands between the raw data and a decision. This slice is computer-centric.

## Slice
You own the **data side** of weak signals worldwide: new government open-data releases, mandated disclosure files (price transparency, emissions, product passports), newly mandated APIs (open banking, health-data interoperability, open finance), newly public registries, new satellite or sensor datasets, and large open datasets released by public bodies or researchers. Your question is what can now be read, and who is drowning in it or can't reach it yet. The compliance burden on whoever *publishes* the data belongs to scouts 01 and 02, not you.

## Questions to answer
1. What data became available between 2024 and 2026 that was not available before, or not in machine-readable form? Give the launch date, format, size and update frequency.
2. Who is supposed to benefit (patients, employers, small lenders, journalists, researchers, procurement officers, farmers, tenants), and are they actually using it?
3. What makes it hard to use: file sizes, inconsistent schemas, broken links, PDFs, portals with no API, missing documentation? Quote the complaints.
4. Which intermediaries have appeared around it, and what do users say about them?
5. Which sources are **agent-readable**, meaning an AI agent could consume them directly, and which still sit behind human-only portals?
6. Are there signs of demand, such as forum questions, FOIA requests, GitHub issues and stars, hackathon use, or journalists building on it?

## Search angles and sources
Candidate topics to verify, not facts. Confirm each one's current status and dates by search, and drop any you cannot confirm:
- US: hospital and health-plan price transparency machine-readable files, CMS interoperability and prior-authorization APIs, TEFCA exchange, CFPB 1033 open-banking data access and its status, SEC EDGAR and XBRL changes, federal procurement data (SAM.gov, USAspending), FDA data releases, and Census or BLS new series.
- EU and elsewhere: the High-Value Datasets implementing regulation under the Open Data Directive, the European Health Data Space, the Digital Product Passport registry, EU Data Act access rights to connected-device data, UK open banking and open finance, national company-register and beneficial-ownership access (and court limits on it), Copernicus and other satellite data, India's public digital infrastructure (Account Aggregator, ONDC), and Australia's Consumer Data Right.
- Wildcards: anything search turns up that launched in 2025–2026.

Source types: data.gov, data.europa.eu and national open-data portals; agency developer pages and changelogs; GitHub repos and issues that consume the data; r/datasets, r/dataengineering, r/healthIT, r/fintech, r/opendata and Hacker News threads; journalist and researcher write-ups; industry reports on adoption; news from 2024 to 2026.

## Evidence standard
- At least **10 findings**. Each finding needs one or more of these: a verbatim quote, a number (file size, record count, adoption rate, usage, error rate), or a hard date (launch or mandate date), plus a working source link.
- Every finding names the data source and at least one group that wants to use it. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s1-discover/scouts/s1-scout-weak-signals-03.md`, **1500 words max**, in this format:

```
# Scout weak-signals-03: newly opened public data sources

## Findings
1. **<data source, short title>**: <what opened, when, format; who wants it; what blocks them; 1–3 sentences>
   - Evidence: "<verbatim quote>" / <number> / <date>
   - Access: <API | bulk file | portal only | PDF>; agent-readable: <yes | partly | no>
   - Source: <URL>
2. ...

## Notes
<up to 5 bullets: sources that closed or were restricted, dead ends, leads you could not verify>
```

The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas, no solutions, no "an app could…".**
- Stay inside your slice. The other 4 scouts own the rest: non-US compliance burdens (scout 01), US compliance burdens (scout 02), AI-created failure modes (scout 04), and new roles and workflows (scout 05).
- Write only your output file. Do not edit any other file.

<!-- COMPLETE -->
