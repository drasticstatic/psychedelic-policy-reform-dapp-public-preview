import { Arch } from "@/components/Arch";
import { KitElement } from "@/components/KitElement";
import { LegalNote } from "@/components/Notes";
import { pageMeta } from "@/lib/meta";
import { BASE, LOG, NAME } from "@/lib/site";

export const metadata = pageMeta({
  slug: "dapp",
  path: "/",
  title: `${NAME} — dApp preview`,
  description: "An RFRA-based policy and evidence initiative, seen from Pennsylvania. The evidence library is taking shape, and you can try a pledge with a wallet signature. A preview: nothing is recorded yet.",
  alt: `${NAME} dApp preview: a stone arch with its keystone set and a sprout beneath it, in a gold frame.`,
});

export default function Home() {
  return (
    <div className="page hero">
      <Arch seed="dapp-home" width={210} />
      <p className="eyebrow">dApp preview</p>
      <h1>{NAME}</h1>
      <p className="lede">
        Religious freedom for sincere sacramental practice, seen from Pennsylvania. An initiative built on the Religious Freedom Restoration Act (RFRA): gather the evidence, explain it plainly, and keep an open record of every step.
      </p>
      <div className="actions">
        <a className="btn primary" href={`${BASE}/evidence`}>
          <i className="ph ph-folder-open" aria-hidden="true"></i> See the evidence shelves
        </a>
        <a className="btn" href={`${BASE}/pledge`}>
          <i className="ph ph-signature" aria-hidden="true"></i> Try the pledge (preview)
        </a>
      </div>

      <ul className="cards" style={{ textAlign: "left" }}>
        <li>
          <a className="card" href={`${BASE}/evidence`}>
            <span className="card-head">
              <i className="ph ph-folder-open" aria-hidden="true"></i>
              <span className="badge soon">Coming soon</span>
            </span>
            <h3>Evidence</h3>
            <p>Shelves for law, court decisions, research, practice, the states and Pennsylvania. Sources arrive as they&rsquo;re reviewed.</p>
          </a>
        </li>
        <li>
          <a className="card" href={`${BASE}/pledge`}>
            <span className="card-head">
              <i className="ph ph-signature" aria-hidden="true"></i>
              <span className="badge preview">Preview</span>
            </span>
            <h3>Pledge</h3>
            <p>Sign a short statement of support with a wallet signature. No gas, no contract, and nothing is recorded yet.</p>
          </a>
        </li>
        <li>
          <a className="card" href={`${BASE}/updates`}>
            <span className="card-head">
              <i className="ph ph-newspaper" aria-hidden="true"></i>
            </span>
            <h3>Updates</h3>
            <p>The latest from the initiative&rsquo;s AstroLog: every step, newest first, and explainers in plain words.</p>
          </a>
        </li>
        <li>
          <a className="card" href={`${BASE}/about`}>
            <span className="card-head">
              <i className="ph ph-info" aria-hidden="true"></i>
            </span>
            <h3>About</h3>
            <p>What this is, who it&rsquo;s meant to serve, and who keeps it. Partner organizations: to be announced.</p>
          </a>
        </li>
      </ul>

      <h2 style={{ textAlign: "left" }}>What&rsquo;s changed lately</h2>
      <div className="kit-block" style={{ textAlign: "left" }}>
        <KitElement tag="arrival-latest" attrs={{ limit: "3" }} />
      </div>
      <p style={{ textAlign: "left" }}>
        <a href={`${LOG}/`}>
          <i className="ph ph-door-open" aria-hidden="true"></i> The whole record is in the AstroLog
        </a>
      </p>
      <div style={{ textAlign: "left" }}>
        <LegalNote />
      </div>
    </div>
  );
}
