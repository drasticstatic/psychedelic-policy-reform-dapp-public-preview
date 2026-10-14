"use client";

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet } from "@reown/appkit/networks";
import { createConfig, http, type Config } from "wagmi";
import { injected } from "wagmi/connectors";
import { DAPP, NAME } from "./site";

// Wallet connect through Reown AppKit: one button for browser wallets, phone wallets (by QR code) and
// email sign-in. It needs a Reown project ID (NEXT_PUBLIC_REOWN_PROJECT_ID, set as a repository
// secret and passed in by the deploy workflow), and Reown's allowlist for that project must include
// https://drasticstatic.github.io. There is NO fallback ID: without a real one, AppKit isn't started
// at all, and the pledge falls back to a browser wallet (window.ethereum) if one is installed, saying
// plainly what's missing. Nothing here holds or shows a wallet address.
export const PROJECT_ID = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID ?? "";
export const HAS_PROJECT_ID = /^[0-9a-f]{32}$/i.test(PROJECT_ID);

type Modal = ReturnType<typeof createAppKit>;
export type WalletSetup = { config: Config; appkit: boolean; modal: Modal | null };

const themeNow = (): "dark" | "light" => (document.documentElement.getAttribute("data-theme") === "parchment" ? "light" : "dark");
const accentNow = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#84d1a5";

let setup: WalletSetup | null = null;

export function walletSetup(): WalletSetup {
  if (setup) return setup;
  if (HAS_PROJECT_ID) {
    try {
      const adapter = new WagmiAdapter({ networks: [mainnet], projectId: PROJECT_ID, ssr: false });
      const modal = createAppKit({
        adapters: [adapter],
        networks: [mainnet],
        projectId: PROJECT_ID,
        metadata: {
          name: `${NAME} dApp preview`,
          description: "A pledge of support, signed with a wallet. A preview: nothing is recorded.",
          url: DAPP,
          icons: [`${DAPP}/favicon.png`],
        },
        features: { analytics: false },
        // No Coinbase or Base Account SDKs (they're aliased out in next.config.ts, telemetry and all).
        enableCoinbase: false,
        enableBaseAccount: false,
        themeMode: themeNow(),
        themeVariables: { "--w3m-accent": accentNow(), "--w3m-font-family": "Public Sans, system-ui, sans-serif" },
      });
      // Follow the visitor's light: the kit fires arrival:change whenever a choice changes.
      window.addEventListener("arrival:change", () => {
        modal.setThemeMode(themeNow());
        modal.setThemeVariables({ "--w3m-accent": accentNow() });
      });
      setup = { config: adapter.wagmiConfig as Config, appkit: true, modal };
      return setup;
    } catch {
      // Fall through to the browser-wallet path below.
    }
  }
  setup = {
    config: createConfig({ chains: [mainnet], connectors: [injected()], transports: { [mainnet.id]: http() }, ssr: false }),
    appkit: false,
    modal: null,
  };
  return setup;
}
