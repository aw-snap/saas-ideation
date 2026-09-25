# seed-02 decomposed: Spotter

## Atoms

**Audience**
- A-seed-02-aud-1: Professional benefit auctioneers who run 50+ paddle-raise fundraisers a year and can distribute the tool.
- A-seed-02-aud-2: Charity gala organizers and school auction committees who host paddle raises.

**Pain**
- A-seed-02-pain-1: Paddle raises drive ~28% of gala revenue `[unverified]` but capture is manual, so paddles get missed and numbers misread.
- A-seed-02-pain-2: Reconciling pledges after the event drags on for days, and disputes arise with no record of the moment.

**Mechanism**
- A-seed-02-mech-1: Room-facing cameras track high-contrast paddle markers in real time to detect every raised paddle.
- A-seed-02-mech-2: Speech recognition on the auctioneer's call fuses with vision to log each pledge at the correct giving level.
- A-seed-02-mech-3: Spotter tablet flags unacknowledged paddles; each pledge saves a 3-second clip and posts to the existing gala platform.

**Enabling tech**
- A-seed-02-tech-1: Real-time multi-camera marker tracking for paddle detection in a crowded, dim ballroom.
- A-seed-02-tech-2: Live speech recognition fused with vision events to bind a spoken amount to a specific paddle.

**Business model**
- A-seed-02-biz-1: Sold through auctioneers as a channel, each bringing the tool to 50+ events a year; unit price unstated.

**Demo moment**
- A-seed-02-demo-1: Auctioneer calls "ten thousand... thank you, 214!" and the pledge logs instantly with its 3-second clip.

**Core insight**
- A-seed-02-insight-1: The paddle raise is a gala's highest-value, least-instrumented moment; auto-capture fixes reconciliation and creates a donor-stewardship clip.

## Prior art

Live web search was unavailable this session (quota exhausted before any query returned results), so this check draws on prior general knowledge rather than a fresh search, and is weaker than usual.

- GiveSmart, OneCause, and Handbid are established charity auction/mobile-bidding platforms (manual paddle/bid entry by staff or self-service bidder numbers via app). They solve adjacent parts of gala fundraising (bidding, ticketing, reconciliation) but, to my knowledge, none does camera-based automatic paddle detection fused with speech recognition. Verdict component: **adjacent-exists** (software category exists, mechanism does not).
- No known live product combining computer-vision paddle tracking with real-time auctioneer speech recognition was recalled. Could not verify with a live search this session; treat as an unfilled gap rather than a confirmed "clear" field.
- Overall verdict: **adjacent-exists** — the paddle-raise/gala-software category is well served (GiveSmart, OneCause, Handbid), but the specific vision+speech capture mechanism appears open, pending a real search to confirm no CV-based entrant exists.

## Weakest points

- Prior-art verdict rests on recalled knowledge, not a live search this session; a real competitor doing camera-based paddle capture could exist and change the verdict to direct-competitor.
- The 28% revenue figure is `[unverified]`, sourced to "one platform's data" with no citation, and is load-bearing for the pain case.
- Core technical risk is unaddressed: vision accuracy for occluded/fast-raised paddles and speech-to-paddle binding when multiple bids overlap in a loud room.

<!-- COMPLETE -->
