# Scout brief: tech-unlocks-05 (vision, video, 3D and document perception)

Lens: tech-unlocks (see `config/lenses.md`). Read `config/context.md` first. Today is 2026-09-25. Build window is 48 hours, so a capability only counts if a small team can call it today.

## Objective
Map the **visual perception and generation** capabilities released since about March 2025: video understanding, image understanding and editing, document and form parsing, screen and diagram reading, 3D and spatial reconstruction, and video generation. Then work backward to the people whose work depends on looking at images, video, scans or physical spaces. **Computer-centric slice** where the input is screens, PDFs or scanned documents.

## Questions to answer
1. Which visual capabilities shipped since March 2025? Verify these, don't assume them: long-video understanding in Gemini 2.5/3 and GPT-class models, image editing models (e.g. gpt-image, Gemini image / "Nano Banana", FLUX Kontext), video generation (Veo 3, Sora 2, open models), document AI and OCR models (e.g. Mistral OCR, open VLM OCR), segmentation and tracking (SAM 2/3), and 3D/Gaussian-splat or image-to-3D tools. Give the launch month and year, the pricing, and whether it is demo-grade or production.
2. What are the accuracy and cost numbers? Look for OCR/document benchmarks, video length limits, $/image, $/minute of video, and $/page, with dates.
3. Which jobs are bottlenecked on looking at things? Examples: claims adjusters reviewing photos, inspectors, construction progress checks, retail shelf audits, medical and dental imaging admin, bookkeepers keying scanned invoices, e-commerce product photos, and reviewing hours of footage. Collect verbatim quotes about the pain.
4. Where does it break? Look for hallucinated numbers in extracted tables, handwriting, low-light footage, compliance limits on generated images, and cost at scale. Quote the practitioners.
5. What rules shape it? Look for rules on AI-generated image and deepfake disclosure (EU AI Act, US state laws, C2PA adoption), and on photo evidence in insurance or inspections, from 2024 to 2026.

## Search angles and sources
- Vendor changelogs, model cards and pricing pages (Google, OpenAI, Mistral, Meta AI, Black Forest Labs, Runway, Luma, Reducto, LlamaParse).
- Benchmarks and leaderboards for document parsing, video QA and image editing. Papers with dates.
- r/computervision, r/Bookkeeping, r/Insurance, r/Construction, r/ecommerce, r/photography, and Hacker News threads.
- G2 and Capterra reviews of OCR/IDP tools (ABBYY, Rossum, Nanonets, Docparser) and of inspection or field-photo apps. App Store reviews of scanner and photo-inspection apps.
- Regulator sites on deepfakes and synthetic media. Insurance regulators on photo-based claims.
- Job postings for data-entry, claims review, QA inspection and video review roles. Industry reports and news from 2024 to 2026.

## Evidence standard
- At least **10 numbered findings**. Each finding has a source URL, and a date wherever one exists.
- Use verbatim quotes in quotation marks and hard numbers (accuracy %, $/page, $/image, $/video-minute, hours spent on manual review).
- For every capability, capture the fields the tech card needs: **capability, first available (month and year), maturity (demo-grade or production), rough cost, example unlock (who it helps)**. Mark anything you could not confirm `[unverified]`.
- Never invent URLs, quotes, statistics or products.

## Output
Write `outputs/s1-discover/scouts/s1-scout-tech-unlocks-05.md`, **1500 words max**.
Format:
```
# Scout tech-unlocks-05: vision, video, 3D and document perception
## Findings
1. **<short title>** — <what, with the quote or number>. Date: <yyyy-mm>. Cap-card: <capability | first available | maturity | cost | unlock>. Source: <URL>
2. ...
## Who it helps (backward map)
- <person/role> — <visual workflow> — finding #s
## Gaps
- <what you looked for and could not find>
<!-- COMPLETE -->
```
Last line must be exactly `<!-- COMPLETE -->`.

## Boundaries
- Evidence only. **No product ideas**, no pitches, no "someone should build".
- Stay in this slice. The other 4 scouts own the rest: computer-use and browser agents that act on screens (01), agent protocols and payments (02), on-device text models, fine-tuning and long-context/reasoning economics (03), and realtime voice (04). Screen *reading* for extraction is yours; screen *operating* (clicking, typing) belongs to 01.
- If you find something for the other scouts, add at most a one-line pointer under Gaps.
- Write only your output file.
<!-- COMPLETE -->
