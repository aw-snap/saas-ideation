# seed-01: Pivot

## Seed card

- **Title:** Pivot: solving "will the sofa fit?" as a robotics problem
- **One-liner:** A 60-second phone video of the delivery route becomes 3D geometry, and a piano-mover's motion planner returns a green/amber/red fit verdict plus an animation of how to get the item in.
- **Audience:** Online furniture and appliance retailers, white-glove delivery companies, piano movers. End user at checkout: the retailer's customer.
- **Pain:** A sofa that won't go up the stairwell means a failed delivery, return freight, wall damage and a lost sale. Today people rely on tape-measure arithmetic (item diagonal vs. tightest opening or turn) and online calculators that answer fits / tilt / remove legs. None of these capture real 3D problems such as switchback stairs with a low ceiling, a banister, or a door that swings the wrong way.
- **Mechanism:** At checkout the customer taps "Check my route" and films the walk from street to room. A 3D reconstruction model turns the video into geometry of every doorway, landing and turn. A motion-planning solver for the piano mover's problem outputs a verdict plus a short animation of how to tilt, rotate and walk the item through, and what to remove first. Once a route is scanned, a "fits my home" filter shows only items that will make it in. The scan and maneuver plan travel with the order to the delivery crew.
- **Enabling tech:** Recent video-to-3D reconstruction models (the group's claim, `[unverified]`); classical motion planning (piano mover's problem).
- **Business model:** Retailers pay per check, justified by returns prevented.
- **Demo moment:** Film a stairwell on a phone and get a fit verdict plus an animation of the sofa maneuvering through. `[inferred]` from the checkout and animation bullets.
- **Core insight:** "Will it fit?" is a robotics motion-planning problem, not a tape-measure problem, and once a route is scanned the returns tool becomes a conversion tool through the "fits my home" filter. `[inferred]` phrasing, drawn from the title and bullets.
- **What excites the group:** Phone video becoming accurate 3D geometry; a solver that returns a verdict and a maneuver animation; the "fits my home" filter that turns returns prevention into conversion; crew plans that flag the hard turn in advance; pay-per-check pricing.
- **Open questions:**
  - Group-stated: none (the "What we're unsure about" field was left blank).
  - Gaps seen: Is reconstruction from a casual 60-second video accurate enough (to within centimetres) at tight openings? Where do exact item dimensions and deformability (cushions, removable legs) come from? Will customers film their route at checkout, or does that step hurt conversion? Can a real motion planner run in a 48-hour build, or only a simplified version? Whether retailers integrate per check or white-glove carriers buy it directly.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-01
track: novel
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: tbd, track: novel }
parents: []
source_task: s2-seed-lead
---

# Pivot: Will the Sofa Fit?

One-liner (≤20 words): A 60-second phone video of the delivery route returns a green/amber/red fit verdict plus a maneuvering animation.
Buyer and niche (≤25 words): Online furniture and appliance retailers, white-glove delivery companies and piano movers who lose money on failed large-item deliveries.
Pain and evidence (≤40 words; cite the pain dossier file): A sofa that won't clear the stairwell means failed delivery, return freight, wall damage and a lost sale. Tape-measure arithmetic and online fit calculators miss real 3D problems: switchback stairs, low ceilings, banisters, wrong-swinging doors. (src: inputs/seeds/seed-01.md)
How it works (≤50 words): Customer films the walk from street to room at checkout. 3D reconstruction turns video into geometry of every doorway, landing and turn. A piano-mover's motion planner returns a verdict, a tilt-and-rotate animation, and what to remove; the plan travels with the crew. Scanned routes enable a "fits my home" filter.
Why now (≤25 words; name the specific capability): Recent models reconstruct accurate 3D geometry from ordinary phone video [unverified], making route scanning a consumer-grade checkout step.
Demo moment (≤20 words): Film a stairwell on a phone; get a fit verdict and an animation of the sofa maneuvering through.
Business model (≤15 words): Retailers pay per route check, justified by returns prevented.

## Original text

```text
Title: Pivot — solving "will the sofa fit?" as a robotics problem
One-liner: A 60-second phone video of the delivery route becomes 3D geometry; a piano-mover's motion planner returns a green/amber/red fit verdict plus an animation of how to get the item in.
Who it's for: Online furniture and appliance retailers, white-glove delivery companies, piano movers.
The pain it solves: A sofa that won't go up the stairwell means a failed delivery, return freight, wall damage and a lost sale. Today's approach is tape-measure arithmetic (item diagonal vs tightest opening/turn) and online calculators that return fits / tilt / remove legs. None of it captures real 3D problems: switchback stairs with a low ceiling, a banister, a door that swings the wrong way.
What excites us about it:
- Customer taps "Check my route" at checkout and films the walk from street to room; recent 3D reconstruction models turn ordinary video into accurate geometry of every doorway, landing and turn.
- Motion-planning solver (the classic "piano mover's problem") outputs a verdict plus a short animation showing how to tilt, rotate and walk the item through, and what to remove first.
- "Fits my home" filter: once a route is scanned, the retailer shows only sofas that will make it in — turns a returns tool into a conversion tool.
- Crew plan: scan and maneuver plan travel with the order, so the delivery team knows the hard turn is on the second landing.
- Business model: retailers pay per check, justified by returns prevented.
What we're unsure about:
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
