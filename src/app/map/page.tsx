import { KitElement } from "@/components/KitElement";
import { pageMeta } from "@/lib/meta";
import { LOG, NAME } from "@/lib/site";

export const metadata = pageMeta({
  slug: "map",
  path: "/map",
  title: `Map — ${NAME}`,
  description: "Every place the initiative's pages lead, each with the picture its link shows: the AstroLog, this dApp preview, the record and the ways in.",
  alt: `Map of ${NAME}'s pages, beside a stone arch with its keystone set.`,
});

// The same map as the AstroLog's /map, drawn by the kit's <arrival-map> from the AstroLog's map.json
// (the one canonical copy), with "You are here" on this page's card.
export default function MapPage() {
  return (
    <div className="page page-wide">
      <p className="eyebrow">Map</p>
      <h1>Where everything is</h1>
      <p className="lede">
        Every place these pages lead, each with the picture it shows when you share its link. The same map is in the <a href={`${LOG}/map`}>AstroLog</a>.
      </p>
      <div className="kit-block">
        <KitElement tag="arrival-map" attrs={{ src: `${LOG}/map.json`, here: "dapp-map" }} />
      </div>
    </div>
  );
}
