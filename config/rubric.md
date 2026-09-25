# Rating system

**Knock-outs** (pass/fail, before scoring): a direct competitor with the same niche and mechanism; no demoable core loop in the build window (only a real blocker counts, per the build-effort calibration in `config/context.md`; `risky` is never a knock-out); legal or safety problems.

**Rubric** (each criterion scored 1–10 with the anchors below, weighted per track to a total out of 100):

| Criterion          | 1 → 10 anchor                               | Novel | Balanced |
| ------------------ | ------------------------------------------- | ----- | -------- |
| Novelty            | clones exist → no analog after audit        | 25    | 17       |
| Why-now            | buildable in 2020 → impossible before ~2025 | 20    | 10       |
| Pain               | mild annoyance → daily, costly, manual      | 16    | 22       |
| Willingness to pay | nobody pays → budget line exists            | 10    | 17       |
| Buildability       | needs research breakthrough → demo in days  | 3     | 12       |
| Demo wow           | explained with slides → judges gasp live    | 16    | 12       |
| Defensibility      | copyable in a weekend → compounding moat    | 5     | 5        |
| Pitch clarity      | needs a paragraph → one sentence            | 5     | 5        |

If `inputs/competition.md` contains an official rubric, add a separate **Competition Fit** score mapped to it. Never replace the weights above.

**Amendment (user, 2026-09-25):** AI tends to overestimate build time, so buildability weighs less in both tracks: Novel 5 → 3 and Balanced 20 → 12, with the freed points going to Pain and Demo wow (Novel) and to Novelty, Pain, WTP and Demo wow (Balanced). PROMPT's original weights were Novel 25/20/15/10/5/15/5/5 and Balanced 15/10/20/15/20/10/5/5.

**Scorecard per idea:**

- **Elo:** the primary ranking within each track.
- **Rubric score /100:** sets the tier. S = 85+, A = 75–84, B = 65–74; drop anything below 65.
- **Consistency %:** the share of matches whose verdict held across order swaps. Below 60% gets the flag "polarizing".
- **Coverage badge:** the idea is the elite of its map cell.
<!-- COMPLETE -->
