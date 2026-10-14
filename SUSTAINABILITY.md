# 🌱 Sustainability: the dApp preview

The whole suite's upkeep (tokens, the daily rebuild, the shared kit, cached previews) is written down
on the AstroLog:
[drasticstatic.github.io/psychedelic-policy-reform-astro-public/sustainability](https://drasticstatic.github.io/psychedelic-policy-reform-astro-public/sustainability).
What's specific to this preview:

| What | Why it matters | What to do |
| --- | --- | --- |
| `PUBLIC_REPO_TOKEN` secret (classic PAT, `repo` + `workflow`) | Publishes the build to `psychedelic-policy-reform-dapp-public-preview`. Missing or expired = the preview stops updating, silently | Add or renew it in this repo's Actions secrets, then run "Build & Deploy" by hand |
| `NEXT_PUBLIC_REOWN_PROJECT_ID` secret | Starts Reown AppKit (browser, phone and email wallets) | Set it from cloud.reown.com; without it the pledge falls back to a browser wallet |
| Reown allowlist: `https://drasticstatic.github.io` | AppKit refuses domains not on the project's list | Check the Reown dashboard if wallet connect stops opening |
| The arrival kit, loaded from the AstroLog | Navbar, windows, search and reading mode come from there | Deploy the AstroLog first when the kit changes |
| Share cards, drawn by the AstroLog | Every page's `og:image` points at `…-astro-public/og/page/dapp-*.jpg` | Change a card in the AstroLog's `src/og/pages.ts`, then refresh caches (Telegram @WebpageBot) |

*Maintained by Christopher W with Alfred (Claude Code). Last reviewed 2026-10-14.*
