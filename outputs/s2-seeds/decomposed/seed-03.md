# seed-03: Lay of the Land — decomposed

## Atoms

- A-seed-03-aud-1: Family farms in succession; also vineyards, golf courses, large rural estates.
- A-seed-03-aud-2: Paying buyers: succession advisors, agricultural lenders, rural real-estate agents.
- A-seed-03-pain-1: A retiring farmer holds unwritten knowledge of drain tiles, water lines, buried cable, flood-prone paddocks.
- A-seed-03-pain-2: Once that person is gone, finding buried infrastructure means slow, invasive, risky probing or trenching.
- A-seed-03-mech-1: Farmer walks or drives the property narrating; the app aligns GPS track to speech to build map layers.
- A-seed-03-mech-2: A voice agent later asks follow-up questions to fill gaps in the narrated record.
- A-seed-03-mech-3: Successors view AR overlays on-site; a shareable dig-safety map serves fencers and diggers.
- A-seed-03-tech-1: Speech-to-text plus LLM extraction of structured, geotagged, confidence-tagged records from narration.
- A-seed-03-tech-2: Conversational voice agent for later follow-up interviews.
- A-seed-03-tech-3: Phone AR for on-site overlay of stored, tagged features.
- A-seed-03-biz-1: Succession advisors, lenders and rural agents pay because a documented farm finances and sells more easily.
- A-seed-03-demo-1: Point a phone at a paddock and see "tile drain, per Grandad, 1978, medium confidence."
- A-seed-03-insight-1: A farm's most valuable map is tacit, lives in one person's head, and is captured only by walking and talking.
- A-seed-03-insight-2: Documentation has financial value to lenders and buyers, not only sentimental value to heirs.

## Prior art

Note: the web search budget for this session was already exhausted before any query for this task could run, so the checks below draw on general product knowledge rather than a live search, and no specific URLs are given beyond well-known categories. Treat this section as lower-confidence than a normal prior-art pass.

- Farm GIS/precision-ag platforms (e.g., John Deere Operations Center, Climate FieldView, Trimble Ag) capture field boundaries, yield and equipment data, but not oral-history narration of buried infrastructure or succession knowledge. Adjacent, different mechanism.
- Dig-safety / utility-locating services (e.g., call-before-you-dig hotlines and line-locating tools) solve "where is the buried line" via physical detection or utility-company records, not by capturing an owner's oral history. Adjacent, different mechanism.
- Succession-planning paper tools (the seed itself cites Purdue's Code Red Contingency Planning Notebook) are static documents, not narrated, geotagged, AR-viewable capture.
- No known product combining walk-and-talk narration capture with AR handoff to successors for farm succession.
- **Verdict: adjacent-exists** (farm GIS and dig-safety services exist separately; nothing found combining narrated tacit-knowledge capture with AR succession handoff).

## Weakest points

- Phone GPS location while the farmer is talking is not necessarily the location of the feature being described (e.g., "the spring by the north fence" while standing elsewhere) — the core geolocation-to-narration alignment is unresolved.
- Willingness-to-pay by lenders, advisors or agents is asserted, not evidenced, and no pricing unit is given.
- Liability exposure if a dig-safety map built from confidence-tagged memory turns out to be wrong is unaddressed.

<!-- COMPLETE -->
