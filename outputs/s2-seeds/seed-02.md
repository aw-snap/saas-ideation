# seed-02: Spotter

## Seed card

- **Title:** Spotter: computer vision for the charity paddle raise
- **One-liner:** Cameras plus speech recognition log every raised paddle at the right giving level instantly, and each pledge is saved with a 3-second clip that becomes the donor's personal thank-you.
- **Audience:** Charity gala organizers, school auction committees, and professional benefit auctioneers who run dozens of these events a year. Distribution channel: auctioneers.
- **Pain:** Paddle raises average about 28% of total gala revenue (per one platform's data, source not given, `[unverified]`) and often outperform the silent auction, yet capture is manual. Even dedicated software assumes staff enter the number when a paddle goes up. In a fast room paddles get missed, numbers get misread, and reconciliation drags on for days.
- **Mechanism:** Two or three room-facing cameras, with paddles printed with an elegant high-contrast marker, track every raised paddle in real time. Speech recognition listens to the auctioneer ("ten thousand... thank you, 214!") and fuses with vision so each pledge is logged at the correct level the instant the paddle rises. A tablet shows spotters the paddles not yet acknowledged. Pledges post into the gala platform the charity already uses. Each pledge is saved with a 3-second clip, which removes disputes and becomes a next-morning personalised thank-you. Guests opt in at registration, and footage is deleted after reconciliation except each donor's own moment.
- **Enabling tech:** Real-time multi-camera marker tracking; live speech recognition; fusing audio and vision events; integration with existing gala platforms. `[inferred]` grouping of the stated components.
- **Business model:** Not stated as pricing. Stated go-to-market: distribution through auctioneers, since one auctioneer can bring Spotter to 50+ events a year. Pricing unit `[inferred]` gap.
- **Demo moment:** The auctioneer calls "ten thousand... thank you, 214!" and the pledge logs instantly with its 3-second clip. `[inferred]` from the mechanism bullets.
- **Core insight:** The paddle raise is the highest-value, least-instrumented moment of a gala; capturing it automatically fixes reconciliation and, through each donor's clip, creates a donor-stewardship asset charities have never had. `[inferred]` phrasing.
- **What excites the group:** Vision and speech fusion that logs pledges instantly; the spotter tablet; integrating with, not competing against, existing gala platforms; the personal thank-you clip ("this is the moment you funded twelve scholarships") as a donor-retention tool; privacy by opt-in and deletion; auctioneers as a distribution channel.
- **Open questions:**
  - Group-stated: none (the "What we're unsure about" field was left blank).
  - Gaps seen: Source for the ~28% figure. Vision accuracy in dim, crowded ballrooms with occluded paddles. How reliably speech matches the auctioneer's call to the right paddle when several go up at once. Which gala platforms have APIs to post into. Pricing (per event, per auctioneer seat, or revenue share). Guest privacy acceptance beyond opt-in. How to demo convincingly without a live ballroom.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-02
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2B, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# Spotter: Paddle-Raise Vision

One-liner (≤20 words): Cameras plus speech recognition log every raised charity paddle at the right level, each pledge saved with a thank-you clip.
Buyer and niche (≤25 words): Charity gala organizers, school auction committees, and professional benefit auctioneers running dozens of paddle raises a year.
Pain and evidence (≤40 words; cite the pain dossier file): Paddle raises average ~28% of gala revenue per one platform's data [unverified], yet capture is manual. In fast rooms paddles get missed, numbers misread, and reconciliation drags on for days. (src: inputs/seeds/seed-02.md)
How it works (≤50 words): Room-facing cameras track paddles printed with high-contrast markers. Speech recognition hears the auctioneer ("ten thousand... thank you, 214!") and fuses with vision to log each pledge instantly. Spotters' tablets flag unacknowledged paddles; pledges post into the existing gala platform. Opt-in guests; footage deleted except donors' own moments.
Why now (≤25 words; name the specific capability): Real-time multi-camera vision and live speech recognition are accurate and cheap enough to fuse on commodity hardware in a ballroom [unverified].
Demo moment (≤20 words): Auctioneer calls "ten thousand... thank you, 214!"; the pledge logs instantly with a 3-second clip.
Business model (≤15 words): Sold through auctioneers who each run 50+ events a year; pricing unspecified.

## Original text

```text
Title: Spotter — computer vision for the charity paddle raise
One-liner: Cameras plus speech recognition log every raised paddle at the right giving level instantly, and each pledge is saved with a 3-second clip that becomes the donor's personal thank-you.
Who it's for: Charity gala organizers, school auction committees, and professional benefit auctioneers who run dozens of these events a year.
The pain it solves: Paddle raises average ~28% of total gala revenue (per one platform's data) and often outperform the silent auction, yet capture is manual — even dedicated software assumes your team enters the number when a paddle goes up. In a fast room paddles get missed, numbers misread, and reconciliation drags on for days.
What excites us about it:
- 2–3 room-facing cameras and paddles printed with an elegant high-contrast marker; real-time vision tracks every raised paddle.
- Speech recognition listens to the auctioneer ("ten thousand… thank you, 214!") and fuses with vision so each pledge is logged at the correct level the instant the paddle rises.
- Tablet shows spotters paddles not yet acknowledged.
- Posts into the gala platform the charity already uses — integrates rather than competes.
- Every pledge saved with a 3-second clip: disputes disappear; next morning each donor gets a thank-you with their own clip ("this is the moment you funded twelve scholarships"). Donor retention is a nonprofit's biggest concern — a stewardship tool they've never had.
- Privacy: guests opt in at registration; footage deleted after reconciliation except each donor's own moment.
- Distribution: auctioneers, since one auctioneer can bring Spotter to 50+ events a year.
What we're unsure about:
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
