# seed-06 decomposed: AI feature-request reviewer

## Atoms

**Audience**
- A-seed-06-aud-1: Software product teams handling inbound feature requests from clients.
- A-seed-06-aud-2: Dev shops and agencies that build custom features for multiple client codebases.

**Pain**
- A-seed-06-pain-1: Client feature requests pile up faster than teams can triage them.
- A-seed-06-pain-2: Estimating build time, effort, and code impact per request is slow and usually a guess, not grounded in the code.

**Mechanism**
- A-seed-06-mech-1: AI reads each incoming client feature request and the product's actual codebase to ground its estimate.
- A-seed-06-mech-2: Output suggests expected build time plus other unspecified details (effort, files touched). `[inferred]` scope.

**Enabling tech**
- A-seed-06-tech-1: Coding agents/LLMs that can explore a full repository and reason about where a change lands. `[inferred]`

**Business model**
- A-seed-06-biz-1: Not stated; no pricing or unit specified. `[inferred]` gap.

**Demo moment**
- A-seed-06-demo-1: Paste a client request; get a codebase-grounded build-time estimate listing the files it touches. `[inferred]`

**Core insight**
- A-seed-06-insight-1: Estimates are guesses because no one looks at the code first; grounding the estimate in the actual codebase fixes that. `[inferred]`

## Prior art

Live web search was unavailable this session (quota exhausted before any query returned results), so this check draws on prior general knowledge rather than a fresh search, and is weaker than usual.

- CodeScene (codescene.com) analyzes a codebase for hotspots, complexity, and technical debt, and is used to inform effort/risk estimates for changes, though it is not framed around parsing an incoming client feature-request text directly. Verdict component: **adjacent-exists**.
- General-purpose coding agents (e.g. GitHub Copilot workspace-style planning, Cognition's Devin, Cursor's agent mode) can already explore a repo and propose an implementation plan for a described feature, which overlaps with "reads the codebase to scope a request," though they are not packaged specifically as a client-facing estimate tool for dev shops/PMs. Verdict component: **adjacent-exists**.
- No specific product recalled that is positioned exactly as "client feature-request triage + codebase-grounded estimate for dev shops," but this is a plausible workflow layer on top of existing coding agents and could exist without my being aware of it; unverified this session.
- Overall verdict: **adjacent-exists** — general codebase-analysis (CodeScene) and general coding-agent planning capabilities already exist; the specific client-request-intake framing is the unverified, potentially open part.

## Weakest points

- Prior-art check is unverified this session; general coding agents already do "read repo, scope a change," so this seed may be a thin repackaging rather than a new mechanism.
- Estimate accuracy and calibration method (e.g. against git history or past tickets) are entirely unstated, and accuracy is the whole value proposition.
- Business model, integration point (Jira/Linear/GitHub/email), and how dev shops handle client code privacy are all unstated gaps that block a concrete pitch.

<!-- COMPLETE -->
