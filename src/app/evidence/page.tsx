import { LegalNote } from "@/components/Notes";
import { pageMeta } from "@/lib/meta";
import { LOG, NAME } from "@/lib/site";

export const metadata = pageMeta({
  slug: "dapp-evidence",
  path: "/evidence",
  title: `Evidence — ${NAME}`,
  description: "The evidence library's shelves: law and statutes, court decisions, research, religious practice, policy across the states, and Pennsylvania. Coming soon, source by source, each one reviewed.",
  alt: `${NAME}: the evidence library, coming soon, beside a stone arch with its keystone set.`,
});

// The shelves, in the order the roadmap gives them. Each one is empty on purpose: a source goes on a
// shelf only once it's been cited, linked, dated and summarized, and the summary has been checked.
const SHELVES = [
  { icon: "scales", name: "Law and statutes", text: "The federal Religious Freedom Restoration Act, state religious-freedom laws (Pennsylvania's included), and the federal drug laws they meet." },
  { icon: "gavel", name: "Court decisions", text: "Landmark rulings such as Gonzales v. O Centro (2006), each summarized plainly with a link to the opinion itself." },
  { icon: "flask", name: "Research", text: "Peer-reviewed research on safety and outcomes, summarized for what each study found, and no more." },
  { icon: "flower-lotus", name: "Religious and spiritual practice", text: "Public scholarship on sacramental traditions: their histories, and how their communities describe them." },
  { icon: "map-trifold", name: "Policy across the states", text: "How states and cities have approached decriminalization and religious exemptions, with links to the measures themselves." },
  { icon: "map-pin", name: "Pennsylvania", text: "The Pennsylvania lane: the state's own religious-freedom law, its bills and hearings, and where things stand." },
];

export default function Evidence() {
  return (
    <div className="page page-wide">
      <p className="eyebrow">Evidence library</p>
      <h1>The evidence library</h1>
      <p className="lede">The shelves are built; the sources come next. Each one arrives only after it&rsquo;s been checked, and the AstroLog&rsquo;s changelog says when it does.</p>
      <LegalNote />

      <ul className="cards">
        {SHELVES.map((s) => (
          <li key={s.name}>
            <div className="card quiet">
              <span className="card-head">
                <i className={`ph ph-${s.icon}`} aria-hidden="true"></i>
                <span className="badge soon">Coming soon</span>
              </span>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2>Available now</h2>
      <ul className="cards">
        <li>
          <a className="card" href={`${LOG}/library/rfra-in-plain-words`}>
            <span className="card-head">
              <i className="ph ph-book-open-text" aria-hidden="true"></i>
              <span className="badge preview">Draft, to be reviewed</span>
            </span>
            <h3>RFRA in plain words</h3>
            <p>What the law says, where it came from, the landmark case about a sacramental tea, and why sincerity sits at the center.</p>
          </a>
        </li>
      </ul>

      <h2>How a source gets on a shelf</h2>
      <ul className="plain">
        <li><strong>A full citation</strong> and a link to the original, so anyone can check it.</li>
        <li><strong>The date it was checked</strong>, because laws and links change.</li>
        <li><strong>A short summary in plain words</strong> that says what the source found, and no more.</li>
        <li><strong>A review</strong> before it&rsquo;s marked final. Until then it&rsquo;s marked as a draft.</li>
        <li><strong>Public sources only.</strong> Nothing private, and no one&rsquo;s personal story or legal history.</li>
      </ul>
      <p>
        Spotted a source that belongs here, or a mistake? The <a href={`${LOG}/roadmap`}>roadmap</a> explains how the library will grow, and the Reach out window in the menu lists every way in.
      </p>
    </div>
  );
}
