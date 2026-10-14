import { Arch } from "@/components/Arch";
import { DAPP, LOG } from "@/lib/site";

// GitHub Pages serves this (404.html) for any missing path under the preview. Links are full URLs,
// so they work however deep the wrong turn was.
export default function NotFound() {
  return (
    <div className="page hero">
      <Arch seed="dapp-404" width={150} />
      <h1>No page has been set here yet.</h1>
      <p className="lede">The link may be old, or the page hasn&rsquo;t been built yet. Nothing is broken on your side.</p>
      <div className="actions">
        <a className="btn primary" href={`${DAPP}/`}>
          <i className="ph ph-arrow-left" aria-hidden="true"></i> Back to the dApp preview
        </a>
        <button type="button" className="btn" data-arrival-open="search">
          <i className="ph ph-magnifying-glass" aria-hidden="true"></i> Search instead
        </button>
        <a className="btn" href={`${LOG}/`}>
          <i className="ph ph-door-open" aria-hidden="true"></i> The AstroLog
        </a>
      </div>
    </div>
  );
}
