# seed-01: Pivot — decomposed

## Atoms

- A-seed-01-aud-1: Online furniture/appliance retailers and white-glove delivery or piano-moving companies.
- A-seed-01-aud-2: End customer checking fit at checkout before buying a large item.
- A-seed-01-pain-1: A sofa that won't clear a stairwell or turn causes failed delivery, return freight, wall damage, lost sale.
- A-seed-01-pain-2: Tape-measure math and 2D fit calculators miss real 3D obstacles: switchback stairs, banisters, low ceilings, wrong-swinging doors.
- A-seed-01-mech-1: Customer films the walk from street to room; video becomes 3D geometry of doorways, landings, turns.
- A-seed-01-mech-2: A piano-mover's motion-planning solver returns a green/amber/red verdict plus a tilt-and-rotate animation.
- A-seed-01-mech-3: "Fits my home" filter reuses the scanned route to show only items that will pass.
- A-seed-01-tech-1: Video-to-3D reconstruction from casual phone footage, accurate enough for tight openings. [unverified]
- A-seed-01-tech-2: Classical motion planning (piano mover's problem) for rigid-body path clearance.
- A-seed-01-biz-1: Retailers pay per route check, justified by returns and damage prevented.
- A-seed-01-demo-1: Phone video of a stairwell yields a fit verdict and an animation of the sofa maneuvering through.
- A-seed-01-insight-1: "Will it fit" is a 3D motion-planning problem, not a tape-measure problem.
- A-seed-01-insight-2: A scanned route doubles as a conversion filter, not just a returns-prevention tool.

## Prior art

Note: the web search budget for this session was already exhausted before any query for this task could run, so the checks below draw on general product knowledge rather than a live search, and no URLs are given beyond well-known homepages already confidently known. Treat this section as lower-confidence than a normal prior-art pass.

- IKEA Place / Amazon "View in Your Room" style AR apps (ikea.com, amazon.com) let a shopper preview furniture size in a room via AR, but they check visual scale in one room, not a multi-room route with stairs, turns and doorway clearance. Adjacent, different mechanism.
- Generic "will it fit through the door" calculators used by moving and furniture companies (diagonal-vs-opening arithmetic) exist widely but are exactly the tape-measure approach the seed says is insufficient. Adjacent, same problem, weaker mechanism.
- No known product doing phone-video-to-3D route reconstruction plus a piano-mover's motion-planning solver at furniture checkout.
- **Verdict: adjacent-exists** (AR room-fit previews and manual fit calculators both exist; nothing found combining full route scanning with motion-planning verdicts).

## Weakest points

- Video-to-3D reconstruction accuracy at tight openings (centimetre-level) from a casual 60-second phone video is unproven — the whole verdict depends on it.
- Exact item dimensions and deformability (removable legs, compressible cushions) aren't sourced anywhere in the mechanism, but the solver needs them.
- Asking customers to film their home at checkout is friction; the seed assumes this aids conversion rather than costing sales, with no evidence either way.

<!-- COMPLETE -->
