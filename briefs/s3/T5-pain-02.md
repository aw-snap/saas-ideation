# Pain-miner brief: T5-02, running the consoles (offboarding, identity, email authentication, BEC, agent credentials)

Territory T5: security evidence and compliance chores in organizations with no IT staff. Half 2 of 2. Computer-centric: yes.

## Objective
Collect the best evidence of pain in the **day-to-day security admin work** that a 5-50 person firm, town office or nonprofit does inside admin consoles and inboxes. The person doing it is usually an "accidental admin" (office manager, owner, bookkeeper, the staff member who is "good with computers"), sometimes with a small MSP helping. Find who does it, how often, how long it takes, what it costs, which consoles trap the work, and what goes wrong when it is skipped or done wrong.

## Boundary of this half
- **In:**
  - Offboarding (and the mirror task of onboarding) across many SaaS consoles: Microsoft 365, Google Workspace, Slack, Dropbox, QuickBooks, line-of-business apps. Includes orphaned accounts, ex-staff keeping access, shared passwords, licence waste, and not knowing which apps exist.
  - Identity and admin-console confusion: Microsoft 365 admin center, Entra ID, Google Admin, MFA rollout, conditional access, admin roles, settings that move after console redesigns, getting locked out.
  - Email authentication: SPF, DKIM and DMARC setup and repair, the Google/Yahoo bulk-sender rules (enforced since Nov 2025) and Microsoft's equivalent rules, mail bouncing or landing in spam, DNS access held by a departed person or web vendor.
  - Business email compromise at the point of payment: checking vendor bank-detail change emails, spoofed invoices, lost payments and whether they were recovered.
  - AI agents and automations that run on a person's shared login or API key rather than an identity of their own: shared credentials, no audit trail, offboarding a person whose credentials an automation uses.
  - Incidents at small orgs (e.g. town office ransomware) where the root cause was one of these chores.
  - The MSP's side of these tasks across many small tenants.
- **Out, owned by T5-01:** answering or attesting to outsiders: cyber-insurance questionnaires, CMMC self-assessment and SPRS, HIPAA risk analysis and the Security Rule overhaul. If a source covers both, record here only the operational part. For example, "setting up MFA in the console was confusing" belongs here; "the insurer asked whether we enforce MFA and I couldn't tell" belongs to T5-01.
- **Out of the territory:** enterprise IAM and security tooling for large organizations, MCP tool-poisoning, invoice capture itself (T2), and non-security regulatory filings (T4).

## Questions
1. Who does these chores at firms with no IT staff (by role and org type), how often (per departure, per new hire, per console change, per payment run), and how long does one offboarding or one DMARC fix take?
2. What is the repeated manual step: clicking through N consoles to disable a user, hunting for which apps a person had, finding who controls DNS, reading headers to judge a payment-change email, rotating a shared password?
3. What goes wrong and what does it cost: ex-employees with live access, data taken, licences paid for departed staff, mail rejected or spam-foldered, BEC losses (median and small-org figures, FBI IC3 numbers), ransomware at town offices and nonprofits? Give counts, dollars and dates.
4. Which consoles and settings confuse non-experts most, in their own words (Microsoft 365 vs Entra vs Exchange admin, Google Admin, DMARC report XML, MFA methods)?
5. How are AI agents and automations being given access at small firms today (shared logins, personal API keys, browser sessions), and what problems do people report?
6. What do they use today (checklists, MSPs, password managers, SaaS-management tools, DMARC services, bank callback procedures), and what do users say those tools still fail at?

## Sources to mine
- Forums and subreddits: r/sysadmin, r/msp, r/Office365, r/AZURE, r/gsuite, r/smallbusiness, r/nonprofit, r/Accounting, r/emailmarketing, r/Emailmarketing deliverability threads, r/LocalLLaMA or r/AI_Agents for shared-credential posts, Microsoft Tech Community, Google Workspace community, Spiceworks Community, MSPGeekForum. Search phrases such as "former employee still has access", "offboarding checklist small business", "DMARC setup confused", "emails going to spam after Google bulk sender", "vendor changed bank details scam", "accidental IT person". If Reddit is blocked, use search-engine results that quote Reddit.
- Reviews of incumbents on G2, Capterra and app stores: Microsoft 365 admin and Entra, Google Workspace admin, SaaS-management tools (e.g. BetterCloud, Zluri, Torii), password managers (1Password, Bitwarden, Keeper), DMARC services (e.g. dmarcian, Valimail, EasyDMARC, PowerDMARC), payment-fraud tools (e.g. Eftsure), and RMM/PSA tools used by small MSPs. Look for reviews from small firms. Confirm each exists before citing it.
- Job postings (Indeed, LinkedIn, ZipRecruiter) for office managers, administrative assistants or town clerks whose duties include "IT", "Microsoft 365 administration" or "user accounts", with wages.
- Regulator and primary documents: FBI IC3 annual report (BEC figures), CISA guidance for small business and local government, Google and Yahoo sender requirements pages, Microsoft's bulk-sender requirements, NTEN nonprofit technology reports, state auditor reports on municipal cyber incidents.
- Complaint threads and news: local news of town and nonprofit breaches, trade press (The Register, BleepingComputer, Channel Futures, CRN) from 2024-2026, identity-vendor launches for agent identity (to confirm the problem, not the product).
- Starting points from Gate B: https://firsthr.app/blog/onboarding/it-offboarding-checklist ; https://www.mailgun.com/state-of-email-deliverability/chapter/yahoogle-bulk-senders/ ; https://www.eftsure.com/statistics/business-email-compromise-statistics/ ; https://northforksun.com/southold-officials-investigating-cyber-incident-affecting-towns-servers/ ; https://word.nten.org/wp-content/uploads/2024/04/2024-Nonprofit-Digital-Investments-Report.pdf ; https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/

## Evidence standard
- **10-20 pain items.** Each item carries at least one verbatim quote or specific number, with a link, a date, and the role, org type and console named where the source names them.
- Prefer first-person complaints from accidental admins and small MSPs. Gate B flagged the lack of G2 complaints about tiny-org admin consoles and of time-to-complete figures as T5's main gap, so hunt for those. Survey and FBI numbers are welcome but should not be most of the items.
- For every item, give frequency (how often it happens) and a time or money figure when any source provides one.
- Prefer 2024-2026 sources; mark older ones with their year. Mark anything unverified `[unverified]`. Never invent quotes, numbers or URLs.

## Output
Write `outputs/s3-ideate/pain/T5-02.md`, 1500 words max:
- a one-line header naming the half (T5-02, running the consoles: offboarding, identity, email authentication, BEC, agent credentials);
- numbered pain items (`1.`, `2.`, ...), each with: **Who** / **Console or channel** / **What hurts** / **How often** / **Cost (time or money)** / **Current workaround or tool** / **Evidence** (quote or number, date, `Source: <URL>`);
- `## Incumbents`: 3-6 bullets naming tools or services people use and what users say they fail at, with links;
- `## Gaps`: what you searched for and could not find.
- The last line of the file is exactly `<!-- COMPLETE -->`.

## Boundaries
- **Pain only. No solutions, no product ideas, no "an AI could..." or "a tool that..." sentences.**
- Stay inside this half; T5-01 covers insurance questionnaires, CMMC and HIPAA attestation.
- Write only your output file.
<!-- COMPLETE -->
