import type { NextConfig } from "next";
import webpack from "webpack";

// GitHub Pages project-site path. The deploy workflow sets NEXT_PUBLIC_BASE_PATH to
// "/psychedelic-policy-reform-dapp-public-preview" so assets resolve under
// https://drasticstatic.github.io/psychedelic-policy-reform-dapp-public-preview/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  webpack: (config) => {
    // WalletConnect (inside Reown AppKit) optionally requires these Node-only packages; they're never
    // reached in a browser build (Reown's Next.js guide lists the same externals).
    config.externals.push("pino-pretty", "lokijs", "encoding");
    // The Coinbase Wallet and Base Account SDKs (optional connectors in wagmi and AppKit) ship a
    // third-party analytics client. The preview doesn't use them (AppKit runs with enableCoinbase and
    // enableBaseAccount off; Coinbase Wallet still connects through WalletConnect or its extension),
    // so they're kept out of the bundle entirely: no telemetry on the page.
    config.resolve.alias = { ...config.resolve.alias, "@coinbase/wallet-sdk": false, "@base-org/account": false, "cbw-sdk": false };
    config.plugins.push(
      // Optional dynamic imports in the wagmi connectors for packages that aren't installed.
      new webpack.IgnorePlugin({ resourceRegExp: /^@x402\// }),
      new webpack.IgnorePlugin({ resourceRegExp: /^@react-native-async-storage\/async-storage$/ })
    );
    return config;
  },
};

export default nextConfig;
