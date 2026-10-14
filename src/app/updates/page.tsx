import { KitElement } from "@/components/KitElement";
import { pageMeta } from "@/lib/meta";
import { LOG, NAME } from "@/lib/site";

export const metadata = pageMeta({
  slug: "dapp-updates",
  path: "/updates",
  title: `Updates — ${NAME}`,
  description: "The latest entries and explainers from the initiative's AstroLog, and where to follow along.",
  alt: `${NAME}: what's new, from the AstroLog, beside a stone arch with its keystone set.`,
});

const LINKS = [
  { icon: "clock-counter-clockwise", name: "Changelog", text: "Every step, newest first. Updates appear here first.", href: `${LOG}/changelog` },
  { icon: "books", name: "Library", text: "Explainers in plain words, starting with RFRA.", href: `${LOG}/library` },
  { icon: "scroll", name: "Ledger", text: "Every public change to the code, in plain words, refreshed daily.", href: `${LOG}/ledger` },
  { icon: "path", name: "Roadmap", text: "Where the initiative is headed next.", href: `${LOG}/roadmap` },
  { icon: "plant", name: "Sustainability", text: "What keeps these pages running.", href: `${LOG}/sustainability` },
  { icon: "map-trifold", name: "Map", text: "Every page, with the picture its link shows.", href: `${LOG}/map` },
];

export default function Updates() {
  return (
    <div className="page">
      <p className="eyebrow">Updates</p>
      <h1>What&rsquo;s new</h1>
      <p className="lede">
        The initiative keeps its record in the <a href={`${LOG}/`}>AstroLog</a>. Here are its newest entries and explainers. Come back any time: a small pill in the header counts what&rsquo;s new since your last visit.
      </p>
      <div className="kit-block">
        <KitElement tag="arrival-latest" attrs={{ limit: "8" }} />
      </div>

      <h2>Follow along</h2>
      <ul className="cards">
        {LINKS.map((l) => (
          <li key={l.name}>
            <a className="card" href={l.href}>
              <span className="card-head">
                <i className={`ph ph-${l.icon}`} aria-hidden="true"></i>
              </span>
              <h3>{l.name}</h3>
              <p>{l.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
