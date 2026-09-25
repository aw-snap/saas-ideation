# Scout brief: screen-work-04, IT and security chores in tiny organizations

Lens: screen-work (the computer lens). Slice 4 of 5. Computer-centric: yes.

## Objective
Map the IT and security admin that lands on **organizations with roughly 1–50 people and no dedicated IT staff** (the office manager, the owner, the "accidental admin", or a small MSP serving them): the clicking through admin consoles, the checklists, and the compliance paperwork.

## Questions to answer
1. What recurring chores eat the most time: onboarding and offboarding across many SaaS accounts, password and MFA resets, license management, device setup and patching, backup checks, shared-drive permissions, phishing triage, domain and DNS (SPF, DKIM, DMARC) setup?
2. Which paperwork is newly forced on small organizations: cyber-insurance application questionnaires, customer vendor-security questionnaires, SOC 2 or CMMC or HIPAA security-rule evidence, PCI SAQs? How long does each take and what do people say about it?
3. Which admin consoles (Google Workspace, Microsoft 365 admin and Entra, Intune, domain registrars, router UIs) do people complain about by name, and for what?
4. What do small MSPs report about their own screen work: ticket volume, per-seat margins, tools they juggle (PSA, RMM, documentation), and time spent on the same tasks for every client?
5. What incidents and costs hit tiny orgs (breaches, business email compromise, ransomware, lockouts after an employee leaves)? Find numbers from 2024–2026 reports.
6. Which rules or deadlines in 2024–2026 raise the bar (for example CMMC 2.0 phases, the proposed HIPAA Security Rule update, Google and Yahoo bulk-sender requirements, insurer MFA mandates)?

## Search angles and source types
- Subreddits: r/sysadmin, r/msp, r/ITManagers, r/smallbusiness, r/Office365, r/gsuite, r/cybersecurity, r/CMMC, r/AskNetsec. Search "accidental IT", "office manager does IT", "offboarding checklist", "insurance questionnaire", "security questionnaire".
- G2 and Capterra reviews of SMB tools such as password managers, MDM, RMM and PSA, and compliance-automation tools (complaints about price floors and complexity).
- Regulator and government sites: CISA small-business guidance, HHS OCR, DoD CMMC pages, FTC Safeguards Rule, UK NCSC and EU NIS2 materials for small entities.
- Industry reports: Verizon DBIR, Sophos and Coalition claims reports, IBM Cost of a Data Breach, Kaseya or ConnectWise MSP benchmark surveys, 2024–2026.
- Job postings for "office manager" and "operations coordinator" that list IT duties; MSP job postings with ticket-volume expectations.
- Vendor changelogs showing admin-console changes or price increases in 2024–2026.

## Evidence standard
- At least **10 findings**. Each has a verbatim quote or a specific number, a date, and a working source URL.
- Name the organization size, the role and the tool wherever the source does.
- Prefer sources from 2024–2026. Mark older ones with their year. Mark anything you could not verify `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s1-discover/scouts/s1-scout-screen-work-04.md`:
- a one-line header naming the slice;
- numbered findings (`1.`, `2.`, ...), each 1–4 sentences with the quote or number, the date, and `Source: <URL>`;
- a short `## Patterns` section (3–5 bullets) grouping the findings by chore or role;
- a short `## Gaps` section naming what you looked for and could not find.
- 1500 words max. The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. No product ideas, no solutions, no "an AI could..." sentences.
- Stay inside this slice: **IT, identity, device and security administration** in tiny organizations and the MSPs that serve them. The other 4 scouts own the rest: portals run by government, payers or regulators (scout 01), vertical line-of-business software (scout 02), glue work across email, PDFs, spreadsheets and horizontal SaaS (scout 03), and software used by AI agents (scout 05).
- Write only your output file.
<!-- COMPLETE -->
