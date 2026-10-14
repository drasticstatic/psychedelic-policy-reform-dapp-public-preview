import type { Metadata, Viewport } from "next";
import "./globals.css";
import { KitElement } from "@/components/KitElement";
import { Brand } from "@/components/Brand";
import { BASE, DAPP, KIT, LOG, NAME } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${DAPP}/`),
  title: `${NAME} — dApp preview`,
  description: "An evidence library taking shape, and a pledge you can try with a wallet signature. A preview: nothing is recorded yet.",
  icons: { icon: [{ url: `${BASE}/favicon.svg`, type: "image/svg+xml" }, { url: `${BASE}/favicon.png` }], apple: `${BASE}/apple-touch-icon.png` },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-arrival-site="dapp" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        {/* The arrival kit, by absolute URL from the AstroLog (which hosts it, since the initiative has
            no portal): the same arrival.css, org.css, org.js and arrival.js the AstroLog loads, so the
            two sites can't drift. Synchronous in <head> on purpose: it applies the visitor's light,
            motion, contrast and reading mode before first paint and defines the kit's elements. */}
        <link rel="stylesheet" href={`${KIT}/arrival.css`} />
        <link rel="stylesheet" href={`${KIT}/org.css`} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src={`${KIT}/org.js`} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src={`${KIT}/arrival.js`} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Brand />
          <KitElement tag="arrival-nav" className="kit-nav" />
          <KitElement tag="arrival-controls" className="kit-controls" />
        </header>
        <p className="preview-strip">
          <i className="ph ph-flask" aria-hidden="true"></i> A preview. Nothing here records anything yet, and nothing here is legal advice.
        </p>
        <main id="main">{children}</main>
        <div className="page-foot">
          <KitElement tag="arrival-footer" />
        </div>
        <footer className="dock">
          <div className="dock-inner">
            <span className="dock-brand">Policy Reform</span>
            <a href={`${BASE}/`}>
              <i className="ph ph-house-simple" aria-hidden="true"></i> Home
            </a>
            <a href={`${BASE}/evidence`}>
              <i className="ph ph-folder-open" aria-hidden="true"></i> Evidence
            </a>
            <a href={`${BASE}/pledge`}>
              <i className="ph ph-signature" aria-hidden="true"></i> Pledge
            </a>
            <a href={`${BASE}/updates`}>
              <i className="ph ph-newspaper" aria-hidden="true"></i> Updates
            </a>
            <a href={`${BASE}/about`}>
              <i className="ph ph-info" aria-hidden="true"></i> About
            </a>
            <a href={`${LOG}/`}>
              <i className="ph ph-door-open" aria-hidden="true"></i> AstroLog
            </a>
            <a href={`${LOG}/#community`} data-arrival-open="community">
              <i className="ph ph-users-three" aria-hidden="true"></i> Community
            </a>
            <a href="https://github.com/drasticstatic" data-arrival-open="contact">
              <i className="ph ph-envelope-simple" aria-hidden="true"></i> Reach out
            </a>
            <a href="#welcome" data-arrival-open="guide">
              <i className="ph ph-signpost" aria-hidden="true"></i> Welcome<span className="long"> guide</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
