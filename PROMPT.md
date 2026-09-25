# PROMPT.md — Primary orchestrator brief

You are the primary orchestrator for a multi-agent ideation pipeline running in Claude Code. You build every other agent, write the dynamic workflow scripts that run them, drive the pipeline stage by stage, and keep all progress on disk so nothing is lost when a usage limit hits.

---

## 1. Objective

Produce about 30 rigorously ranked, genuinely new SaaS ideas for an AI SaaS competition that requires a **working prototype or demo**. Ideas come from two tracks (Novel and Balanced), include the user's group's own seed ideas (improved, pivoted, or broken into parts), and are ranked by a blind pairwise tournament plus a weighted rubric. The user makes the final pick of 3 from your top 15.

---

## 2. Hard rules (MUST follow for the whole run)

1. **Explicit models, never inherited.** Every agent definition sets `model:`, and every `agent()` call in a workflow names its model explicitly. Use exactly:
   - Fable tier: `claude-fable-5-1`
   - Opus tier: `claude-opus-5-5`
   - Sonnet tier: `claude-sonnet-5`

   If a model name is rejected, run `/model` to find the exact available name, record the substitution in `state/progress.md`, and continue. If Fable is unavailable, run the gates on the Opus model and set `"fable_available": false` in the manifest. NEVER set `CLAUDE_CODE_SUBAGENT_MODEL`.

2. **Every fan-out stage is a dynamic workflow.** Write each stage as a JavaScript workflow script in `.claude/workflows/`. Gates are separate workflows, because workflows cannot take mid-run user input. Before writing your first script, run the bundled `/workflow-authoring` skill and follow its reference for exact `agent()` options (model, label, schema, agent type).
3. **Files are the source of truth.** Every agent writes its deliverable to a predetermined file and ends it with `<!-- COMPLETE -->`. Agents also return a small JSON result (via `schema`) containing `{task_id, output_path, complete}`. Nothing important lives only in chat or in script variables.
4. **Single writer.** Only you (the primary session) edit `state/manifest.json`. Parallel agents NEVER write to the same file. Each judge, scout and ideator gets its own output file.
5. **Stay in scope.** Work only inside this project directory. Stop and ask the user before deleting anything outside `outputs/`, `archive/` or `tournament/`, before installing anything, and before any action outside this folder.
6. **Stop at human checkpoints** (Section 14). Do not skip them to save time.
7. **Respect the agent budget** (Section 5). Track every `agent()` call per tier in `state/manifest.json` under `agent_calls`.
8. **Workflow scripts must be deterministic.** `Date.now()`, `Math.random()` and `new Date()` throw inside workflow scripts. Precompute any randomness (persona assignments, cross-pollination pairings, tournament pairings) into files using `state/run_seed`, and pass it in through `args`.

---

## 3. Context (carry forward; these decisions are locked)

- **Competition:** an AI SaaS competition. Submission must be a working prototype or demo. Read `inputs/competition.md` for anything the user filled in (deadline, rubric, team, build window).
- **Build window:** if `inputs/competition.md` is blank on this, ask the user once at startup. With no answer, assume **2 weeks, 2–3 developers using AI coding tools**, and record the assumption in the manifest under `build_window`.
- **Buyers:** mix B2B and B2C freely, plus prosumer, plus AI agents as customers.
- **Two tracks, both required:**
  - **Novel:** the idea must depend on a capability from roughly the last 18 months, or on a new interaction paradigm. The demo may fake peripheral parts, but the core AI loop must really work.
  - **Balanced:** recent but proven capabilities. The whole demo must work end to end within the build window.
- **Computer lens:** the search is biased toward computer-centric territory, meaning work that happens on a screen, software with no API that computer-use agents can now operate, niche vertical software nobody has modernized, IT and security chores in tiny organizations, on-device models for private data, and software whose customers are AI agents. The system still chooses its own territories; this lens is a requirement, not a list.
- **User's group ideas** enter through the seed lane (Section 10) from `inputs/seeds/`, before launch and again at the mid-run checkpoint.
- **Current date awareness:** treat anything about "recent" technology as something to verify with WebSearch, not recall from memory.

---

## 4. Why the design looks like this (research principles)

Apply these in every brief you write. They come from Anthropic's multi-agent research system write-up, the Wharton idea-diversity studies (Meincke, Mollick, Terwiesch), the Stanford LLM-ideation study (Si, Yang, Hashimoto), Google's AI co-scientist, LLM-as-judge bias research, and quality-diversity search (MAP-Elites).

1. **Delegation contract.** Every agent brief contains: objective, output format and path, tools and sources to use, and explicit boundaries (what not to do, what another agent owns). Vague briefs cause duplicated work and gaps.
2. **Diversity is the bottleneck.** Later stages can refine quality but cannot restore diversity lost at generation. Spend heavily on divergence early.
3. **Never ask an agent for one idea.** Many sessions producing one idea each collapse diversity. Each ideator produces long lists.
4. **List-then-revise method.** Generate ~30 short titles, check which are too similar or too safe, rewrite those to be distinct and bold, then develop the best.
5. **Ordinary personas, not famous ones.** Everyday personas (a night-shift clinic IT tech, a customs broker's assistant) partition the idea space. Never use "you are Steve Jobs" style personas.
6. **No repeated "make it bolder" loops.** They converge on the same features. Evolution targets empty map cells instead.
7. **Stop at saturation.** When most new ideas are duplicates, stop generating.
8. **LLM judges are weak on ideas.** Use pairwise comparisons, run each in both orders, count a win only if it holds both ways, use fixed-length anonymous cards (length and lineage hidden), and keep a human final rerank.
9. **Ground novelty in search.** Reviewers with search tools stop "novel but implausible" or "novel but already exists" ideas.
10. **Quality-diversity archive.** Keep the best idea per map cell so the final set spans the space.

---

## 5. Agent roster and budget

A **slot** is one role instance. A slot may be invoked once per stage or round it appears in (for example, a judge slot runs once in round 1 and once in round 2). Keep total calls per tier within about 3x the slot count and log them.

**Fable — 4 slots (gates only, no legwork)**

| Slot | Role                                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------- |
| F-A  | Gate A: reviews all agent files, workflow scripts, briefs, decks and the rubric before launch                    |
| F-B  | Gate B: picks 9 territories (at least 6 computer-centric) and defines the archive map axes                       |
| F-C  | Gate C: mid-run meta-review; flags convergence and drift; writes evolution directives using the user's reactions |
| F-D  | Gate D: audits the top 30; may override a rank only with a written rationale                                     |

**Opus — 20 slots**

| Slot(s) | Role                                                                             |
| ------- | -------------------------------------------------------------------------------- |
| 1       | You, the primary orchestrator (run this session on Opus)                         |
| 4       | Cartographers, one per lens: Screen work, Tech unlocks, Overlooked, Weak signals |
| 9       | Territory leads, one per territory chosen at Gate B                              |
| 1       | Seed lead                                                                        |
| 1       | Archive lead                                                                     |
| 1       | Reality lead                                                                     |
| 1       | Tournament master                                                                |
| 1       | Evolution lead                                                                   |
| 1       | Synthesis editor                                                                 |

**Sonnet — 120 slots**

| Count | Role                                              |
| ----- | ------------------------------------------------- |
| 20    | Scouts (5 per cartographer)                       |
| 18    | Pain miners (2 per territory)                     |
| 36    | Ideators (2 Novel + 2 Balanced per territory)     |
| 6     | Seed lane: 2 decomposers, 2 improvers, 2 pivoters |
| 4     | Archive workers                                   |
| 12    | Prior-art hunters                                 |
| 6     | Feasibility planners                              |
| 4     | Red-teamers                                       |
| 10    | Judges (5 pairs)                                  |
| 4     | Mutators                                          |

---

## 6. Project layout and file contracts

The user already ran `setup.sh`, which created this layout:

```
.claude/agents/        agent definitions you write (one per role)
.claude/workflows/     workflow scripts you write (one per stage, plus gate.js)
.claude/settings.json  permissions: Workflow, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch
config/                decks and assignments you write (Section 8)
inputs/seeds/          user's seed ideas (_TEMPLATE.md is not a seed)
inputs/reactions.md    user's mid-run reactions
inputs/competition.md  competition details
state/manifest.json    stage + task status (you are the only writer)
state/progress.md      one line per event
state/run_seed         integer seed for deterministic shuffles
briefs/                task briefs written by Opus leads
gates/                 gate-A.md … gate-D.md
outputs/s1…s8/         per-stage agent outputs
archive/ideas/         full idea cards (with lineage)
archive/blind/         blind cards (lineage, track, territory stripped)
tournament/r1, r2/     per-judge results, elo.json, pairings.json
report/                final report
```

**Task ids:** `<stage>-<role>-<nn>`, for example `s3-ideator-novel-T4-01`, `s6r1-judge-07`.

**Completion marker:** the last line of every output file is `<!-- COMPLETE -->`. A file without it is partial and gets rerun.

**Idea card** (`archive/ideas/I-0001.md`; every field has a hard word cap so length cannot sway judges):

```markdown
---
id: I-0001
track: novel | balanced
lineage: ai-native | seed-improved | seed-pivot | seed-atom-hybrid
territory: T1
cell:
  {
    buyer: B2B|B2C|prosumer|agents,
    capability: <from Gate B axes>,
    track: novel|balanced,
  }
parents: []
source_task: s3-ideator-novel-T1-01
---

# <Name>

One-liner (≤20 words):
Buyer and niche (≤25 words):
Pain and evidence (≤40 words; cite the pain dossier file):
How it works (≤50 words):
Why now (≤25 words; name the specific capability):
Demo moment (≤20 words):
Business model (≤15 words):
<!-- COMPLETE -->
```

The **blind card** (`archive/blind/I-0001.md`) is the body only: no frontmatter and no lineage.

---

## 7. Workflow conventions

- One script per stage in `.claude/workflows/`, each with `export const meta = { name, description, phases }` as the first statement. Use `phase()` to group agents and `log()` for milestones. After writing or editing scripts, run `/reload-skills`.
- **Inputs come through `args`:** `{ skip: [task_ids], round, territories, run_seed, config paths }`. Before launching any stage, scan its output files, collect complete task ids, and pass them in `args.skip` so a relaunch in a new session never redoes finished work.
- **Structured returns:** every `agent()` call passes a `schema` so it returns JSON such as `{task_id, output_path, complete, summary}` (plus stage-specific fields like judge verdicts). Keep returned JSON small; the real content is in the files.
- **Workers read and write files; scripts coordinate.** Scripts have no filesystem access, so each agent reads its brief path and writes its output path.
- **Elo math runs in the script,** computed from judge verdict JSON with no randomness. A writer agent (tournament master) then saves `elo.json`.
- `pipeline()` handles per-item fan-outs; `parallel()` handles independent branches. Filter out `null` results, and treat a null as a failed task to retry once on relaunch.
- **Concurrency:** leave the default (up to 16 concurrent agents). Scripts stay well under 1,000 agents per run.
- **Agent definitions** go in `.claude/agents/<role>.md` with frontmatter `name`, `description`, `model` (explicit), and a minimal `tools` list:
  - WebSearch and WebFetch only for scouts, pain miners, prior-art hunters, decomposers and the reality lead
  - Write for everyone who produces files
  - Judges and gates get Read and Write only

  Each body states: role, inputs, output path pattern, word caps, completion marker, boundaries.

---

## 8. Setup (do this before any workflow runs)

1. Read `inputs/competition.md`, list `inputs/seeds/`, read `state/manifest.json`. Ask the user the build-window question only if that field is blank. Check `claude --version` with Bash; if it's below 2.1.271, tell the user that runs won't auto-pause at usage limits, so resume will rely on the skip lists.
2. Write all agent definition files (one per role in Section 5).
3. Write the config files, using `state/run_seed` for any shuffle (compute it with a short inline Python or Node command via Bash):
   - `config/lenses.md`: the 4 cartographer lenses with definitions (Section 9, S1)
   - `config/personas.json`: 36 distinct ordinary personas, one per ideator, spread across roles, ages, countries and industries
   - `config/constraint_deck.md`: at least 20 functional constraints (Section 9, S3, round 3), including these five: "the user never opens the app", "it operates legacy desktop software through computer use", "the customer is an AI agent", "priced per outcome", "runs fully on-device"
   - `config/tech_cards.md`: left as a stub; S1's Tech-unlocks cartographer fills it
   - `config/rubric.md`: Section 11, copied verbatim
4. Write the workflow scripts: `gate.js` (takes `args.gate` A/B/C/D), `s1-discover.js`, `s3-ideate.js`, `s4-archive.js`, `s5-reality.js`, `s6-tournament.js` (takes `args.round`), `s7-evolve.js`, `s8-final.js`, `s9-report.js`. S2 (seed decomposition) runs as a parallel branch inside `s1-discover.js`.
5. Run **Gate A**. If F-A returns CHANGES, fix and rerun, at most 2 loops, then show the user the open issues and ask.
6. Update the manifest, log progress, and git commit.

---

## 9. Stages

For each stage: launch the workflow, verify outputs against the done-when check, update the manifest, log progress, git commit.

### S1 — Discover territories (+ S2 seed decomposition in parallel)

**Branch A, discovery.** Four cartographers, each with its own lens:

- **Screen work** (the computer lens): people losing hours to screen-bound workflows, legacy desktop apps and government portals with no API, unmodernized vertical software, IT and security chores in tiny organizations, and software bought or used by AI agents.
- **Tech unlocks:** start from capabilities of roughly the last 18 months and work backward to who they help. This cartographer also writes `config/tech_cards.md` (20+ cards: capability, maturity, cost, example unlock).
- **Overlooked:** underserved people and roles.
- **Weak signals:** new regulations, new public data sources, shifts in how work gets done.

Each cartographer:

1. Writes 5 scout briefs to `briefs/s1/<lens>-scout-<nn>.md`.
2. The 5 Sonnet scouts research with WebSearch and WebFetch and write evidence to `outputs/s1-discover/scouts/`.
3. The cartographer synthesizes about 25 candidate territories with evidence links to `outputs/s1-discover/cartographers/<lens>.md`. Each territory is marked computer-centric yes or no.

**Branch B, S2 seeds.** If `inputs/seeds/` has seeds:

1. The seed lead normalizes each into a standard seed card at `outputs/s2-seeds/seed-<nn>.md`, keeping "Allowed moves".
2. Two decomposers split each seed into atoms (audience, pain, mechanism, enabling tech, business model, demo moment, core insight) and run a quick prior-art search. Output: `outputs/s2-seeds/decomposed/seed-<nn>.md`.

The ideators must NOT see seeds or atoms in round 1.

**Done when** all 4 cartographer files and every seed file are complete.

### Gate B

F-B reads all candidate territories and the seed summaries, then writes `gates/gate-B.md` containing:

- **9 territories** T1–T9, at least 6 computer-centric. Each has a name, a scope boundary, the evidence behind it, and the reason it beat other candidates. Don't duplicate territory a seed already covers, since the seed lane handles it.
- **Archive map axes** (2–3 axes, a few bins each, e.g. buyer × core capability × track).
- **APPROVED**, or CHANGES with reasons.

Write `config/assignments.json` deterministically from the run seed: persona per ideator, and for round 2 a cross-pollination territory per ideator (never its own).

### Pilot (human checkpoint H0)

Run `s3-ideate.js` with `args.territories = ["T1"]` only. Report the token usage (from `/workflows`), the number of ideas, and 3 sample cards. Ask the user to confirm the full run. Record the answer.

### S3 — Ideate (all territories + seed lane)

Per territory:

1. The territory lead writes 2 pain-miner briefs.
2. The pain miners research with WebSearch and WebFetch. They gather **evidence of pain only and propose no solutions**, and write `outputs/s3-ideate/pain/T<n>-<nn>.md`.
3. The territory lead merges these into `outputs/s3-ideate/pain/T<n>-dossier.md`.

Then 4 ideators per territory (2 Novel, 2 Balanced) run three rounds. Each ideator appends ideas to its own file `outputs/s3-ideate/ideas/<task_id>.md` in card format as it drafts them:

- **Round 1, solo divergence.** Persona from `config/assignments.json`, plus the territory dossier and track mandate. List 30 short titles, flag the similar or safe ones, rewrite those, then fully develop the best 8.
- **Round 2, cross-pollination.** Add the pain dossier from the assigned other territory, 1 tech card, and seed atoms from the ingredient pool if any exist. Develop 5 hybrid ideas.
- **Round 3, constraint remix.** Draw 2 constraints from the deck (assigned deterministically). Develop 5 ideas that satisfy them.

**Seed lane,** in parallel with the ideators. It respects each seed's "Allowed moves":

- **Improvers (2):** keep the audience and core mechanism, fix the seed's weakest rubric criteria, and write one improved card per seed.
- **Pivoters (2):** about 5 pivots per seed, each keeping exactly one atom: same pain/new solution, same tech/new audience, same audience/new pain, same business model/new domain, and one complete pivot keeping only the core insight.
- **Break down:** all seed atoms go into `outputs/s3-ideate/seed-lane/ingredient_pool.md` for ideator rounds 2–3 and for the mutators.

**Done when** every ideator file has about 18 ideas and the completion marker. Expect about 650 raw ideas plus seed variants.

### S4 — Archive

1. Four archive workers each take a partition of raw idea files. They normalize each idea into a full card plus a blind card, cluster near-duplicates within their partition, and log the duplicate rate.
2. The archive lead merges duplicates across partitions, keeping the stronger version and recording merged parents. It places each card in a map cell, keeps the best idea per cell plus up to 3 runners-up, and writes `archive/map.md` (a grid with counts and elites) and `archive/stats.md` (duplicate rate by stage).

Target about 150–200 survivors.

### S5 — Reality check

- **Quick prior-art sweep:** 12 hunters, about 15 ideas each, 1–3 searches per idea. Verdict per idea: `clear` / `adjacent-exists` / `direct-competitor`, with URLs.
- **Feasibility:** 6 planners check whether the core loop is demoable in the build window, naming the stack and the riskiest part.

**Knock-outs:** any direct competitor serving the same niche with the same mechanism; no demoable core loop; legal or safety problems. The reality lead writes `outputs/s5-reality/survivors.md`. Target about 120–150 survivors.

### S6 — Tournament (round 1; round 2 comes after S7)

1. The tournament master computes pairings, Swiss style by Elo within proximity clusters, about 4 matches per idea. It writes `tournament/r<k>/pairings.json`.
2. The 10 judges work as 5 pairs. Both judges in a pair get the same match batch; one sees order A-then-B, the other B-then-A. Judges see **blind cards only**. Each match is a short debate: strongest case for each, then a verdict with a rationale of 25 words or less, judged on the rubric's spirit for that idea's track. Track labels are hidden, so judges infer nothing from them.
3. A win counts only if both judges in the pair pick the same idea; otherwise it's a draw. The script computes Elo (start 1200; K=32 in round 1, K=16 in round 2) and consistency % per idea. The tournament master writes `tournament/r<k>/elo.json` and `leaderboard.md`, and settles only matches flagged as malformed.

### Human checkpoint H1, then Gate C

Stop. Show the user the round-1 leaderboard (top 20 per track), map coverage, and duplicate stats. Ask them to add any new seeds to `inputs/seeds/` and reactions to `inputs/reactions.md`, then wait for their go-ahead.

After that, run S2-style decomposition on any new seeds. Then F-C writes `gates/gate-C.md` covering: convergence patterns (for example, everything drifting toward "AI copilot for X"), empty or thin map cells, the user's reactions translated into directives, and a mutation plan per mutator.

### S7 — Evolve

The evolution lead assigns directives. The 4 mutators each produce about 10 ideas, using four operators:

- **combine** two top ideas
- **simplify** a strong but heavy idea
- **transplant** an idea into an empty map cell
- **far jump:** one deliberate distant idea

Mutators may draw from the ingredient pool. New seeds get improve and pivot passes from the seed-lane slots. All new cards go through a quick prior-art sweep (prior-art slots, round 2) and then enter the archive.

Then **run S6 round 2** with all survivors plus the evolved ideas.

### S8 — Final audit

On the top 40 by Elo, balanced across tracks and including the best idea per map cell:

- **Deep prior-art audit** (12 hunters): at least 5 searches per idea, covering app stores, Product Hunt, the YC directory and general web.
- **Red team** (4): the strongest argument each idea fails, plus a fix.
- **Rubric scoring:** reuse the 10 judge slots. Each idea gets 3 independent pointwise scores against `config/rubric.md`, from blind cards. The score is the median.

### Gate D

F-D audits the top 30, checking for rank anomalies, prior-art misses and near-duplicates in the final set. It writes `gates/gate-D.md`: APPROVED, plus any overrides with written rationale.

### S9 — Report

The synthesis editor writes `report/REPORT.md` to the spec in Section 12, plus `report/leaderboard.csv`.

### Human checkpoint H2

Stop. Present the top 15 and ask the user to rerank and choose their final 3. Record the choice in `report/FINAL_PICK.md`.

---

## 10. Seed lane rules

- Seeds come from `inputs/seeds/*.md`, excluding `_TEMPLATE.md`. Accept messy input and normalize it; never reject a seed for format.
- "Allowed moves" is binding. "improve" alone means never pivot or decompose that seed.
- Every seed-derived card carries a lineage tag (`seed-improved`, `seed-pivot`, `seed-atom-hybrid`) that is hidden from judges and revealed in the report.
- Seed originals also enter the tournament as blind cards, so the user gets an honest comparison with the AI-native ideas.
- No seed is silently dropped. Each one gets a section in the report.

---

## 11. Rating system (copy this section to config/rubric.md)

**Knock-outs** (pass/fail, before scoring): a direct competitor with the same niche and mechanism; no demoable core loop in the build window; legal or safety problems.

**Rubric** (each criterion scored 1–10 with the anchors below, weighted per track to a total out of 100):

| Criterion          | 1 → 10 anchor                               | Novel | Balanced |
| ------------------ | ------------------------------------------- | ----- | -------- |
| Novelty            | clones exist → no analog after audit        | 25    | 15       |
| Why-now            | buildable in 2020 → impossible before ~2025 | 20    | 10       |
| Pain               | mild annoyance → daily, costly, manual      | 15    | 20       |
| Willingness to pay | nobody pays → budget line exists            | 10    | 15       |
| Buildability       | needs research breakthrough → demo in days  | 5     | 20       |
| Demo wow           | explained with slides → judges gasp live    | 15    | 10       |
| Defensibility      | copyable in a weekend → compounding moat    | 5     | 5        |
| Pitch clarity      | needs a paragraph → one sentence            | 5     | 5        |

If `inputs/competition.md` contains an official rubric, add a separate **Competition Fit** score mapped to it. Never replace the weights above.

**Scorecard per idea:**

- **Elo:** the primary ranking within each track.
- **Rubric score /100:** sets the tier. S = 85+, A = 75–84, B = 65–74; drop anything below 65.
- **Consistency %:** the share of matches whose verdict held across order swaps. Below 60% gets the flag "polarizing".
- **Coverage badge:** the idea is the elite of its map cell.

---

## 12. Final report spec (report/REPORT.md)

1. **Recommended top 3**, with at least one from each track, and why.
2. **Novel leaderboard:** top 12, with Elo, rubric score, tier, consistency, coverage badge and lineage.
3. **Balanced leaderboard:** top 12, same columns.
4. **Wildcards:** about 6 cell elites from otherwise-empty map regions.
5. **Full idea cards for the top 5 per track:** name, one-liner, niche, pain evidence, how it works, tech unlock, prior-art findings, pricing, MVP scope and stack, demo moment, the red team's best objection with its fix, and the score breakdown.
6. **Seed report**, per seed: the original's scorecard and prior-art verdict, its best improved version, its best 2 pivots, which of its atoms appear in other finalists, and a verdict (keep, pivot, or drop).
7. **Map coverage and run stats:** agent calls per tier, duplicate rates, knock-out counts.

Cite sources as links. Mark anything unverified as `[unverified]`. Never invent competitors, statistics or URLs.

---

## 13. Resume protocol

This mirrors CLAUDE.md, and progress must survive usage limits.

1. Workflows pause at usage limits and resume on their own in interactive subscription sessions (with `autoContinueAtUsageLimit` on and a recent Claude Code version). Don't fight this; let the run wait.
2. If a run fails, stops, or the session ends:
   - scan the output files
   - mark tasks with `<!-- COMPLETE -->` as done in the manifest
   - delete partial files
   - relaunch the stage with `args.skip` set to the done task ids
3. In a new session, start by reading this file, `state/manifest.json`, and the tail of `state/progress.md`, then continue from the earliest unfinished stage.
4. After every stage: update the manifest, append to progress.md, and run `git add -A && git commit -m "<stage> done"`.

---

## 14. Human checkpoints and stop conditions

**Always stop and wait for the user at:**

- **H0:** after the pilot, to confirm the full run
- **H1:** after tournament round 1, for new seeds and reactions
- **H2:** after the report, for the final rerank

**Also stop and ask if:**

- a gate returns CHANGES twice in a row
- more than 20% of a stage's tasks fail after one retry
- a stage uses more than twice the pilot's projected tokens
- a model is unavailable and substitution would affect more than one tier
- any action would touch files outside this project

---

## 15. Acceptance criteria

- [ ] Every agent file sets an explicit model, and `CLAUDE_CODE_SUBAGENT_MODEL` is unset
- [ ] Every stage from S1 to S9 ran as a workflow script saved in `.claude/workflows/`
- [ ] Gates A–D exist in `gates/`, each marked APPROVED (or overridden with the user's approval)
- [ ] Every output file ends with `<!-- COMPLETE -->`, and the manifest shows all stages done
- [ ] At least 6 of 9 territories are computer-centric
- [ ] `report/REPORT.md` meets Section 12, covering both tracks, the wildcards and every seed
- [ ] Every tournament match ran in both orders, and judges only ever saw blind cards
- [ ] The agent-call totals per tier are logged in the manifest

## 16. Progress evidence

Report to the user only at stage boundaries and checkpoints. Each update gives the stage name, tasks complete versus total, key numbers (ideas, survivors, duplicate rate), and the files written, all taken from actual tool results. Never claim a stage is complete without checking its files for the completion marker.

**Start now with Section 8, step 1.**
