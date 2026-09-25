### I-1019 Private Elder Statement Scanner

Verdict: adjacent-exists

Closest products:
- Carefull (https://getcarefull.com/) — cloud account-aggregation (Plaid-style) monitoring for elder fraud/spending anomalies, not on-device statement-file scanning; requires linking live accounts rather than uploading a PDF/CSV.
- EverSafe (https://www.eversafe.com/) — similar cloud-connected elder financial-abuse monitoring across bank/investment/credit accounts with Trusted Advocate alerts; not offline/on-device, not browser-extension based.
- StatementLock (https://www.statementlock.com/) — Chrome extension that parses uploaded bank/credit statements in-browser and flags fraud/duplicates with AI reports; general-purpose (not elder-specific) and only de-identified text leaves the browser rather than a fully offline/on-device model.

Note: Elder-fraud monitoring (Carefull, EverSafe) is a live, funded niche, but both use cloud account-linking, not offline statement-file scanning. StatementLock is mechanistically closer (browser-based statement parsing) but not elder-targeted and not fully on-device. No exact match on niche + mechanism found.

### I-2038 Fit Check for Big Deliveries

Verdict: direct-competitor

Closest products:
- Smart Moving: Furniture Helper (https://apps.apple.com/us/app/smart-moving-furniture-helper/id1666262699) — live App Store app that measures furniture and spaces (via tape measure entry or camera-based measuring), then calculates fit through doorways/hallways/stairs accounting for "rotations, angle turns, and tilting possibilities," explicitly marketed to moving companies, logistics and relocation services as well as consumers.
- Roomantic (https://www.roomantic.ai/) — iPhone LiDAR app that scans rooms and places furniture at true scale to check fit before purchase; consumer-focused, less tailored to the tightest-turn/stairwell delivery-checkout workflow.
- magicplan (https://help.magicplan.app/auto-scan-your-floor-plan) — LiDAR room/floor-plan auto-scan; documentation itself flags stairwells as a difficult case for auto-scan, so mechanism overlaps but execution differs.

Note: Smart Moving already ships a rotate/tilt clearance solver for stairs and doorways, sold to moving companies — same niche (failed-delivery prevention) and same core mechanism (scan/measure + rotation clearance verdict) as this idea.

### I-2547 Multi-Institution Proxy Agent

Verdict: adjacent-exists

Closest products:
- Carefull (https://getcarefull.com/) / Carefull Companion app (https://apps.apple.com/us/app/carefull-companion/id6753230195) — aggregates a parent's financial accounts via API-style bank-level linking and pushes real-time alerts/digests to family members, but does not drive a browser session as a logged-in proxy across non-financial portals like Medicaid/Medicare Advantage.
- Oma Care (https://www.ycombinator.com/companies/oma-care) — YC company whose AI agent calls government agencies by phone for benefits eligibility/enrollment on a caregiver's behalf; agentic but voice/phone-based, not a browser agent reading existing logged-in web portals.
- Claude in Chrome (https://claude.com/claude-in-chrome) — general-purpose browser agent that reads pages and clicks/types inside a user's own logged-in session; the underlying platform capability this idea would build on, not a packaged caregiver product itself.

Note: Financial-account digesting (Carefull) and agentic government outreach (Oma Care) both exist, but no found product uses a browser agent to log in across banks, Medicaid, and Medicare Advantage portals as a proxy for one weekly digest.

### I-3529 Screen-Side Cite Bailiff

Verdict: adjacent-exists

Closest products:
- Westlaw Quick Check / Litigation Document Analyzer (https://legal.thomsonreuters.com/en/products/westlaw-edge/quick-check) — uploads a brief and validates every citation against Westlaw's KeyCite database, flagging bad law; database-API driven, not a vision agent browsing a search box, and has no e-filing submit-lock.
- CiteCheck AI by LawDroid (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html) — extracts citations via GPT/Google Vision OCR and verifies against CourtListener with an audit trail; same fabricated-citation-catching niche, but API/database verification rather than a computer-use agent driving a live search tab, and no e-filing integration.
- BriefCatch RealityCheck (https://www.briefcatch.com/blog/pick-an-ai-case-hallucinations-checker) — two-layer deterministic + AI verification that a quoted citation and language actually appear in the cited opinion; bundled with legal-writing tools, database-driven, no e-filing gate.

Note: Fabricated-citation catching for litigators is a crowded, live space (Westlaw, LawDroit, BriefCatch), but all use direct legal-database APIs, not a vision-based browser-use agent, and none locks the e-filing submit button pending manual clearance.

### I-4563 Foreign-Invoice Autopilot

Verdict: direct-competitor

Closest products:
- Veryfi (https://www.veryfi.com/invoice-ocr-api/) — invoice/receipt OCR API supporting 91 currencies and 38 languages, extracting vendor, line items, tax and totals into structured JSON for direct ERP/ledger posting in 3-5 seconds; same mechanism and niche.
- Dext (https://dext.com/en/business/product/capture-receipts-and-invoices) — multi-currency invoice/receipt capture with 99%+ OCR accuracy, auto-suggested categories, and sync to Xero/QuickBooks/Sage and 30+ platforms for one-tap approval posting.
- Tofu (https://www.gotofu.com/blog/best-multi-language-receipt-ocr-softwares) — zero-config AI OCR bookkeeping tool processing invoices in 200+ languages including non-Latin scripts, extracting line-item detail for posting.

Note: Multilingual, multi-currency invoice OCR that auto-posts to a ledger with one-tap approval is a live, established product category (Veryfi, Dext, Tofu); the freelance-translator buyer niche is narrower but the mechanism is identical.

```json
[
  {"id": "I-1019", "verdict": "adjacent-exists", "competitors": ["Carefull (https://getcarefull.com/)", "EverSafe (https://www.eversafe.com/)", "StatementLock (https://www.statementlock.com/)"], "note": "Elder-fraud monitoring (Carefull, EverSafe) exists via cloud account-linking; StatementLock parses statements in-browser but isn't elder-specific or fully on-device. No exact niche+mechanism match found."},
  {"id": "I-2038", "verdict": "direct-competitor", "competitors": ["Smart Moving: Furniture Helper (https://apps.apple.com/us/app/smart-moving-furniture-helper/id1666262699)", "Roomantic (https://www.roomantic.ai/)", "magicplan (https://help.magicplan.app/auto-scan-your-floor-plan)"], "note": "Smart Moving already sells a rotate/tilt stairwell-and-doorway clearance solver to moving companies, same niche and mechanism as this idea."},
  {"id": "I-2547", "verdict": "adjacent-exists", "competitors": ["Carefull (https://getcarefull.com/)", "Oma Care (https://www.ycombinator.com/companies/oma-care)", "Claude in Chrome (https://claude.com/claude-in-chrome)"], "note": "Carefull aggregates financial accounts via linking; Oma Care agentically calls government by phone. No found product uses a browser agent as proxy across banks plus Medicaid/Medicare portals."},
  {"id": "I-3529", "verdict": "adjacent-exists", "competitors": ["Westlaw Quick Check (https://legal.thomsonreuters.com/en/products/westlaw-edge/quick-check)", "CiteCheck AI (https://www.lawnext.com/2025/06/lawdroid-launches-citecheck-ai-a-fail-safe-against-ai-citation-hallucinations.html)", "BriefCatch RealityCheck (https://www.briefcatch.com/blog/pick-an-ai-case-hallucinations-checker)"], "note": "Fabricated-citation catching is crowded (Westlaw, LawDroid, BriefCatch) but all use legal-database APIs, not a vision browser-use agent, and none blocks e-filing submission."},
  {"id": "I-4563", "verdict": "direct-competitor", "competitors": ["Veryfi (https://www.veryfi.com/invoice-ocr-api/)", "Dext (https://dext.com/en/business/product/capture-receipts-and-invoices)", "Tofu (https://www.gotofu.com/blog/best-multi-language-receipt-ocr-softwares)"], "note": "Multilingual multi-currency invoice OCR that auto-posts to a ledger with one-tap approval is an established live category; mechanism is identical, buyer niche is narrower."}
]
```
<!-- COMPLETE -->
