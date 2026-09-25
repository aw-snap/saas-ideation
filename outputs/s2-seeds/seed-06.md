# seed-06: AI feature-request reviewer

## Seed card

- **Title:** AI feature-request reviewer
- **One-liner:** An AI reviews the features clients ask for and, based on the product's codebase, suggests the expected time and other details for building each one.
- **Audience:** Software product teams and dev shops that get feature requests from their clients.
- **Pain:** Client feature requests pile up, and working out what each one would take to build (time, effort, what it touches) is slow and usually a guess.
- **Mechanism:** The AI reviews each incoming client feature request and suggests the expected build time and other estimates, grounded in the actual codebase rather than a generic guess. How it reads the codebase and where requests come from (email, ticket tracker, portal) are not stated. `[inferred]` gap.
- **Enabling tech:** Not stated. Most direct reading: coding agents or LLMs that can explore a whole repository and reason about where a change lands. `[inferred]`
- **Business model:** Not stated. `[inferred]` gap.
- **Demo moment:** Not stated. Most direct reading: paste a client request and get a build-time estimate grounded in the codebase, listing the files it touches. `[inferred]`
- **Core insight:** Estimates are guesses because they're made without looking at the code; an AI that reads the codebase can ground each estimate in what actually has to change. `[inferred]` from the pain and excitement lines.
- **What excites the group:** AI reviews each incoming client feature request; build-time and other estimates grounded in the actual codebase, not a generic guess.
- **Open questions:**
  - Group-stated: none (the "What we're unsure about" field was left blank).
  - Gaps seen: How accurate codebase-grounded time estimates can be, and how to calibrate them (for example against past tickets or git history). What "other details" means (effort, risk, affected files, clarifying questions for the client, a quote). Who acts on the output: the PM, the engineer, or the client directly. Code privacy for dev shops holding client repos. Integration point (Jira, Linear, GitHub issues, email). Differentiation from coding agents that already plan changes. Business model.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-06
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# AI Feature-Request Reviewer

One-liner (≤20 words): AI reviews client feature requests and, grounded in the product's codebase, suggests expected build time and other details.
Buyer and niche (≤25 words): Software product teams and dev shops that receive feature requests from their clients.
Pain and evidence (≤40 words; cite the pain dossier file): Client feature requests pile up, and working out what each would take to build (time, effort, what it touches) is slow and usually a guess. (src: inputs/seeds/seed-06.md)
How it works (≤50 words): Each incoming client feature request is reviewed by an AI that reads the product's actual codebase and returns an expected build time plus other estimates, such as effort and which parts of the code it touches.
Why now (≤25 words; name the specific capability): Coding agents can now explore a whole repository and reason about where a change lands [unverified].
Demo moment (≤20 words): Paste a client request; get a codebase-grounded build-time estimate listing the files it touches.
Business model (≤15 words): Not yet specified.

## Original text

```text
Title: AI feature-request reviewer
One-liner: An AI reviews the features clients ask for and, based on the product's codebase, suggests the expected time and other details for building each one.
Who it's for: Software product teams and dev shops that get feature requests from their clients.
The pain it solves: Client feature requests pile up, and working out what each one would take to build (time, effort, what it touches) is slow and usually a guess.
What excites us about it:
- AI reviews each incoming client feature request.
- Suggests the expected build time (and other estimates) grounded in the actual codebase, not a generic guess.
What we're unsure about:
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
