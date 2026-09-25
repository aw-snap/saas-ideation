### I-1070 Screen API for Legacy PM Systems

Verdict: direct-competitor

Closest products:
- Beacon Health (YC W26) (https://www.ycombinator.com/companies/beacon-health) — computer-use "AI employee" agents that operate directly inside legacy EHR/PM systems by recording and replaying human workflows; same mechanism (agentic UI automation of legacy screens) and same niche (practice back-office).
- Clicks Health (YC) — AI agents automating back-office RCM operations across EHRs, payer portals, desktop applications and legacy PM systems, following existing processes and handling exceptions.
- AKASA "Unified Automation" — agentic UI automation for claim denials and prior auth across EMRs including legacy desktop systems, sold to RCM vendors.

Note: Several funded companies already turn legacy PM/EHR screens into agent-callable automation for billing/RCM tasks using computer-use workers; the metered tool-endpoint framing is a business-model variant, not a new mechanism.

### I-2061 Grounded Notes With Timestamp Citations

Verdict: adjacent-exists

Closest products:
- Yaps.ai (https://www.yaps.ai/blog/private-therapy-notes-app) — offline, on-device dictation-to-note tool for therapists (Windows/macOS/Linux/mobile) that never uploads audio; live product, but no per-sentence timestamp citation or hallucination flagging.
- 1984Doc/AI-Scribe (GitHub) — open-source local Whisper + Kobold SOAP note generator from session audio; same local-first mechanism, no traceability/flagging of unsupported claims.
- "Local AI for Therapists" stack (localaimaster.com) — documented whisper.cpp + Ollama SOAP-note pipeline with a "write [unclear] if not in transcript" grounding instruction, closest in spirit to the citation-flagging idea, but it is a DIY blog recipe, not a packaged product with a UI that highlights untraceable sentences for click-to-audio review.

Note: Local/offline AI scribes for therapists already exist and live products address privacy; none found package the specific per-claim timestamp-citation-and-flag UI this idea proposes, which differentiates the mechanism.

### I-3045 Spotter for Paddle Raises

Verdict: adjacent-exists

Closest products:
- OneCause "Spotter Tool" (https://www.onecause.com) — established live product where human spotters manually record paddle numbers/amounts into a mobile app tied to attendee profiles; same niche (gala paddle raise capture), different mechanism (manual entry app, not camera+speech AI recognition).
- GiveSmart (https://www.givesmart.com) — same manual-spotter workflow (spotters see/hear paddles, log by hand or approach donor); no automated computer-vision/audio fusion found.
- GalaBid / ClickBid paddle raise modules — dedicated paddle-number entry and instant capture, still manual data entry, no camera-based detection.

Note: Paddle-raise capture software is a mature, competitive category, but all found incumbents rely on human spotters entering data manually; no live product found that auto-detects paddles via camera+speech fusion.

### I-4014 Pivot: Will the Sofa Fit?

Verdict: adjacent-exists

Closest products:
- Smart Moving: Furniture Helper (App Store, https://apps.apple.com/us/app/smart-moving-furniture-helper/id1666262699) — computes fit including rotations, angle turns and tilting, and gives visual carry/maneuvering suggestions; closest in output (maneuvering guidance) but relies on manually entered or tape/camera-measured dimensions, not full 3D reconstruction from a single walk-through video.
- MeltflexAI / Luna Furniture / ItemFits fit calculators — free web calculators requiring manual door/stair/hallway measurements; no video or 3D geometry capture.
- Polycam / Metaroom / 3D Snap LiDAR room scanners — capture accurate 3D geometry of doorways and rooms from phone/LiDAR video, but are general room-scanning tools with no built-in delivery-route fit verdict, motion-planner animation, or retailer checkout integration.

Note: Manual fit calculators and separate 3D room scanners both exist, and one app already computes tilt/rotate maneuvering; none combine automatic full-route 3D reconstruction from a casual video with a green/amber/red verdict and animation at checkout.

### I-5410 Micro-Seller Customs Declaration Autopilot

Verdict: direct-competitor

Closest products:
- Zonos (https://zonos.com) — live platform with AI that reads product listings/images, predicts HS/HTS codes, generates compliant customs data and commercial invoice fields, and (via its Evolve Trade Services acquisition) files formal entries for shipments under $2,500 — the exact regime micro cross-border sellers now face; integrates with Etsy/eBay-adjacent shipping tools like ShipStation.
- Easyship (https://www.easyship.com) — automated customs forms that pre-fill declarations with HS code classification and duty/tax calculation for small e-commerce sellers shipping internationally.
- Tarifflo (YC S2026, https://www.ycombinator.com/companies/tarifflo) — AI-powered HTS classification and filing infrastructure, though aimed more broadly at importers than micro-sellers specifically.

Note: Zonos already offers listing-to-HTS classification, invoice generation and low-value-shipment brokerage filing for small e-commerce sellers post-de-minimis change — same niche, same mechanism as this idea.

```json
[
  {"id": "I-1070", "verdict": "direct-competitor", "competitors": ["Beacon Health (https://www.ycombinator.com/companies/beacon-health)", "Clicks Health (YC)", "AKASA Unified Automation"], "note": "Funded companies already turn legacy PM/EHR screens into agent-callable automation for billing/RCM using computer-use workers; metered endpoint is a business-model variant, not a new mechanism."},
  {"id": "I-2061", "verdict": "adjacent-exists", "competitors": ["Yaps.ai (https://www.yaps.ai)", "1984Doc/AI-Scribe (GitHub)", "Local AI for Therapists stack (localaimaster.com)"], "note": "Offline/local AI scribes for therapists exist and address privacy; none package the specific per-claim timestamp-citation-and-flag UI, which differentiates the mechanism."},
  {"id": "I-3045", "verdict": "adjacent-exists", "competitors": ["OneCause Spotter Tool (https://www.onecause.com)", "GiveSmart (https://www.givesmart.com)", "GalaBid/ClickBid paddle raise modules"], "note": "Mature paddle-raise capture category, but incumbents rely on human spotters entering data manually; no live product auto-detects paddles via camera+speech fusion."},
  {"id": "I-4014", "verdict": "adjacent-exists", "competitors": ["Smart Moving: Furniture Helper (App Store)", "MeltflexAI/Luna Furniture calculators", "Polycam/Metaroom LiDAR room scanners"], "note": "Manual fit calculators and separate 3D room scanners both exist; none combine automatic full-route video-based 3D reconstruction with a verdict and maneuvering animation at checkout."},
  {"id": "I-5410", "verdict": "direct-competitor", "competitors": ["Zonos (https://zonos.com)", "Easyship (https://www.easyship.com)", "Tarifflo (https://www.ycombinator.com/companies/tarifflo)"], "note": "Zonos already offers listing-to-HTS classification, invoice generation and low-value-shipment brokerage filing for small e-commerce sellers post-de-minimis change; same niche and mechanism."}
]
```
<!-- COMPLETE -->
