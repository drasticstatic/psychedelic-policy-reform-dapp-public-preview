import { archSvg } from "@/lib/keystone-svg";

// The initiative's figure, drawn inline (the same generator as the AstroLog's porch and share cards):
// a stone arch with its keystone set and a sprout beneath it. Colored per mode by org.css (.ks-figure),
// and its stones catch the light one by one unless motion is Still.
export function Arch({ seed = "dapp", width = 220 }: { seed?: string; width?: number }) {
  const svg: string = archSvg(seed, { width: 400, height: 330, cx: 200, cy: 236, ri: 112, ro: 176, ground: 330, strokeWidth: 2.2 });
  return <div className="ks-figure" style={{ width, maxWidth: "100%", margin: "0 auto" }} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
