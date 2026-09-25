# Run context (locked, read by every agent)

## The competition
- AI SaaS competition. The submission must be a **working prototype or demo**. Deadline, official rubric and team are unknown, because `inputs/competition.md` is blank on them.
- **Build window: a 48-hour hackathon** (the user's answer, 2026-09-25). Team assumed to be 2–3 developers using AI coding tools. "Buildable" and "demoable" always mean *within 48 hours*.
- **Build-effort calibration** (the user, 2026-09-25): AI estimates of build time tend to run high. A 2–3 person team with current AI coding agents now ships in under 48 hours what used to be a 2-week hackathon project. Ordinary engineering volume (UI, login, CRUD, several screens, standard API or browser integrations) is not a reason to call an idea risky or unbuildable. Reserve low buildability and `demoable: no` for real blockers: an unproven or unavailable capability, data or access the team can't get within 48 hours (partnerships, certification, private datasets), or special hardware. Don't overcompensate: the Novel core AI loop must still really work, and Balanced ideas must still work end to end.
- Today is 2026-09-25. Anything about "recent" technology is something to verify with search, never recall from memory. Agents without search tools mark such claims `[unverified]`.

## Buyers
Mix freely: B2B, B2C, prosumer, and **AI agents as customers** (software whose buyer or user is another agent).

## Two tracks (both required)
- **Novel:** the idea depends on a capability from roughly the last 18 months (since about March 2025), or on a new interaction paradigm. The demo may fake peripheral parts, but the core AI loop must really work in the 48-hour build.
- **Balanced:** uses recent but proven capabilities. The whole demo works end to end within the 48-hour build.

## Computer lens (a requirement, not a list)
The search leans toward computer-centric territory: work that happens on a screen; software with no API that computer-use agents can now operate; niche vertical software nobody has modernized; IT and security chores in tiny organizations; on-device models for private data; software whose customers are AI agents.

## File contract (every agent)
- Write only the files your task names. Never edit another agent's file.
- The last line of every `.md` you write is exactly `<!-- COMPLETE -->`, added only once the file is finished. A file without it counts as partial and gets rerun.
- A JSON file you write has `"complete": true` at its top level.
- Cite sources as links. Never invent competitors, statistics, quotes or URLs. Mark anything you could not verify `[unverified]`.
- Do not edit `state/`, do not run git, and do not launch workflows. The primary session owns all three and commits only after it has checked a stage's outputs.

## Idea card format
Every idea anyone drafts uses this exact card. The hard word caps exist so that length cannot sway judges. Stay under them.

```
---
id: <the id your task gives you>
track: novel | balanced
lineage: ai-native | seed-original | seed-improved | seed-pivot | seed-atom-hybrid
territory: <T1..T9, or none>
cell: { buyer: <B2B|B2C|prosumer|agents>, capability: <a capability bin from gates/gate-B.md>, track: <novel|balanced> }
parents: [<seed ids, atom ids or idea ids this derives from; [] if none>]
source_task: <your task id>
---

# <Name, ≤6 words>

One-liner (≤20 words): ...
Buyer and niche (≤25 words): ...
Pain and evidence (≤40 words; cite the pain dossier file): ... (src: <dossier path or URL>)
How it works (≤50 words): ...
Why now (≤25 words; name the specific capability): ...
Demo moment (≤20 words): ...
Business model (≤15 words): ...
```

Rules for cards:
- Every card begins with its own `---` frontmatter block. In a file with several cards, put a blank line between cards. Keep ` (src: …)` as the last thing on the Pain line, because it is stripped from the blind copy.
- The body (everything below the frontmatter) must never mention seeds, personas, territories, tracks, rounds or the pipeline. Judges see only the body, and it has to stand alone.
- `lineage` is `ai-native` unless the idea uses a seed atom (`seed-atom-hybrid`) or comes from the seed lane.
<!-- COMPLETE -->
