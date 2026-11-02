<!-- readme-standard: 2026-11-02 -->
<div align="center">

<img src="public/brand/banner.svg" width="100%" alt="Psychedelic Policy Reform dApp preview: a road of six stops, one for each page a visitor walks through.">

# Psychedelic Policy Reform · dApp preview

*The interactive side of an RFRA-based psychedelic policy reform initiative, seen from Pennsylvania: the evidence library's shelves, a pledge you can try with a wallet signature, and updates.*

![For](https://img.shields.io/badge/For-Anyone_following_the_initiative-64748b?style=flat-square)
[![License: MIT](https://img.shields.io/badge/code-MIT-lightgrey?style=flat)](https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview/blob/main/LICENSE)
[![Content: CC BY-SA 4.0](https://img.shields.io/badge/words-CC%20BY--SA%204.0-lightgrey?style=flat)](https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview/blob/main/LICENSE-CONTENT)
[![Public Preview](https://img.shields.io/badge/%F0%9F%A7%AA%20dApp-preview-E0B65E)](https://drasticstatic.github.io/psychedelic-policy-reform-dapp-public-preview/)
[![AstroLog](https://img.shields.io/badge/%F0%9F%93%9C%20AstroLog-live-84D1A5)](https://drasticstatic.github.io/psychedelic-policy-reform-astro-public/)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview)

<img src="public/brand/icons/map-pin.svg" width="16" height="16" alt=""> **You are here:** drasticstatic lab › `psychedelic-policy-reform-dapp` · private source · `main` is the working branch · public twin `psychedelic-policy-reform-dapp-public-preview`

</div>

## <img src="public/brand/icons/compass.svg" width="24" height="24" alt=""> TL;DR

1. <img src="public/brand/icons/sprout.svg" width="16" height="16" alt=""> **What this is.** The source of the dApp preview: a Next.js static export. The pledge is a preview and records nothing.
2. <img src="public/brand/icons/users-round.svg" width="16" height="16" alt=""> **Who it is for.** Visitors who want to try the interactive side of the initiative.
3. <img src="public/brand/icons/footprints.svg" width="16" height="16" alt=""> **Do this first.** [Open the preview](https://drasticstatic.github.io/psychedelic-policy-reform-dapp-public-preview/).

**🧪 [Open the preview →](https://drasticstatic.github.io/psychedelic-policy-reform-dapp-public-preview/)** ·
**📜 [The AstroLog →](https://drasticstatic.github.io/psychedelic-policy-reform-astro-public/)** (the initiative's open record)

---

## 👋 What this is

A Next.js preview of the initiative's interactive side:

- **Evidence**: the evidence library's shelves (law and statutes, court decisions, research, religious
  practice, policy across the states, Pennsylvania), each "coming soon" until its sources are reviewed.
- **Pledge**: a *preview* of signing a short pledge of support with a wallet signature. No gas, no
  contract, no transaction; the signature is checked in the browser tab and forgotten. **Nothing is
  recorded yet**, and no wallet address or signature is ever shown or stored.
- **Updates**: the newest entries from the AstroLog.
- **About** and **Map**.

> **Not legal advice.** Everything here is general information, written for understanding.

**Partner organizations:** to be announced.

## 🌗 One suite with the AstroLog

The preview loads the **arrival kit** (v1.5.1, English first with Español one tap away) from the AstroLog by absolute URL
(`https://drasticstatic.github.io/psychedelic-policy-reform-astro-public/arrival/`): the one-row navbar
with its More and Menu folds, the contact and community windows, reading mode, what's new, `/` search
and the welcome guide. Light and motion choices carry between the two sites. Every page's share card
is drawn by the AstroLog's build.

## 👛 Wallet connect

Reown AppKit (with the wagmi adapter): one button for browser wallets, phone wallets by QR code and
email sign-in. It needs `NEXT_PUBLIC_REOWN_PROJECT_ID` (a repository secret the deploy workflow passes
in), and the Reown project's allowlist must include `https://drasticstatic.github.io`. Without an ID,
AppKit isn't started: the pledge offers a browser wallet if one is installed and says what's missing.
There is no fallback or demo ID.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_REOWN_PROJECT_ID` | Reown project ID (cloud.reown.com). Unset = graceful browser-wallet fallback |
| `NEXT_PUBLIC_BASE_PATH` | `/psychedelic-policy-reform-dapp-public-preview`, set by the deploy workflow |

## 🔒 Private / public split

This repository is private. [`deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds the static
export and pushes it to the `gh-pages` branch of
[`psychedelic-policy-reform-dapp-public-preview`](https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview);
[`sync-public-allowlist.yml`](.github/workflows/sync-public-allowlist.yml) mirrors only the allowlisted
source to its `main`. Agent files, `.githooks/` and `scripts/` stay private. Both need the
`PUBLIC_REPO_TOKEN` secret; until it exists they build, then skip the publish with a warning.

## 💻 Local development

```sh
sh scripts/install-hooks.sh   # once per clone
npm install
npm run dev     # Next.js dev server (webpack)
npm run build   # static export to out/
```

Requires Node.js `>=22.12.0`. The kit and share cards load from the live AstroLog.

## 📄 License

- 💻 **Code:** MIT, see [`LICENSE`](https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview/blob/main/LICENSE)
- 📝 **Written content:** CC BY-SA 4.0, see [`LICENSE-CONTENT`](https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview/blob/main/LICENSE-CONTENT)
- 🏷️ **Names and marks:** see [`TRADEMARKS.md`](https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview/blob/main/TRADEMARKS.md)

---

*Kept by Christopher W ([drasticstatic](https://github.com/drasticstatic)) with Alfred, using Anthropic's Claude Code CLI.*

## <img src="public/brand/icons/git-pull-request.svg" width="24" height="24" alt=""> Suggest a change

Noticed something? Open an [issue](../../issues) or a pull request against `main`; Christopher reads them and a person with the role merges. Not on GitHub? Reach Christopher through [his contact page](https://drasticstatic.github.io/resume/pages/contact.html).

<sub>The front door follows the living [README standard](https://github.com/drasticstatic/my-template/blob/main/README-STANDARD.md). Copy it, improve it.</sub>
