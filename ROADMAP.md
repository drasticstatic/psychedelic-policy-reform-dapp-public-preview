# 🧭 Roadmap: the dApp preview

The initiative's full roadmap (an evidence library, a Pennsylvania lane, partner organizations, and
what this work can mean for each community it serves) is on the AstroLog:
[drasticstatic.github.io/psychedelic-policy-reform-astro-public/roadmap](https://drasticstatic.github.io/psychedelic-policy-reform-astro-public/roadmap).
This file covers only the preview.

## ✅ Just landed

- **About** names the four life-changing healing communities at the initiative's heart (PIR®,
  Psanctuary, ORG and The Holy Earth Foundation) and its spark, Kevin M's "Roadmap to Reform"
  masterclass, with the no-endorsement line; where people gather (Facebook groups in Pennsylvania).
- **Tokens of gratitude, a sneak peek** on the pledge page: soulbound, non-transferable thank-yous
  as a deeper commitment beyond a signed pledge. No dates, no contract.
- **Arrival kit 1.4**, loaded from the AstroLog: the welcome guide everywhere.
- Home, Evidence (six shelves, "coming soon"), Pledge (preview), Updates, About and Map, on arrival
  kit 1.2.1 (1.4 since 2026-10-22).
- Wallet connect through Reown AppKit, with a browser-wallet fallback while no project ID is set.

## 🔜 Next

- **Turn on Reown AppKit**: one secret, `NEXT_PUBLIC_REOWN_PROJECT_ID`. The fleet's shared project
  (`00b6a1cd528ff580f1fd845ed08b0187`) already allowlists `https://drasticstatic.github.io`, so it
  works today; the initiative's own project is the same one-line change later (Christopher).
- **The dock's scroll affordance** (kit 1.4's fade and chevron on phones): this footer is rendered by
  React, so it has to opt in after hydration (`data-arr-scroll`, then `Arrival.strips()`); switching it
  on in `org.js` alone broke hydration (React error #418).
- **Fill the Evidence shelves** as sources are reviewed, from the same data the AstroLog's library uses.

## 🤝 Stewardship and succession

Today drasticstatic (Christopher W) owns this repository and its public sibling and holds every key.
The plan for these pages to outlive any one person (a home of the initiative's own with two owners,
org-owned automation, a token register and renewal runbook, hand-over steps, backups) is on the
AstroLog's [sustainability page](https://drasticstatic.github.io/psychedelic-policy-reform-astro-public/sustainability#-stewardship-and-succession).

## 🌌 Later, and still being explored

- **Recording pledges**, only after the evidence library is underway, with a clear choice about what's
  recorded and no personal details.
- **Tokens of gratitude**: soulbound, non-transferable, from Christopher W's gratitude-token project;
  an optional, deeper commitment beyond a signed pledge. No dates.
- **A supporters' network** on open protocols (Lens, Farcaster) paired with a DAO. A direction, not a
  promise.

*Maintained by Christopher W with Alfred (Claude Code). Last reviewed 2026-10-22.*
