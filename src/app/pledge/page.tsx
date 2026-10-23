import { LegalNote, PreviewNote } from "@/components/Notes";
import { PledgeLoader } from "@/components/PledgeLoader";
import { pageMeta } from "@/lib/meta";
import { LOG, NAME } from "@/lib/site";

export const metadata = pageMeta({
  slug: "dapp-pledge",
  path: "/pledge",
  title: `Pledge (preview) — ${NAME}`,
  description: "Try signing a short pledge of support with a wallet signature. A preview: no gas, no contract, and nothing is sent or recorded.",
  alt: `${NAME}: a pledge of support, signed with a wallet. Preview, nothing is recorded yet.`,
});

// Kept in step with PLEDGE_LINES in PledgeClient.tsx (the exact message the wallet signs).
const PLEDGE = `I support protecting the sincere religious use of sacraments under the Religious Freedom Restoration Act, and gathering and sharing the evidence in plain words.`;

export default function Pledge() {
  return (
    <div className="page">
      <p className="eyebrow">
        Pledge <span className="badge preview">Preview</span>
      </p>
      <h1>A pledge of support, signed with a wallet</h1>
      <PreviewNote>
        <strong>Preview: nothing is recorded yet.</strong> Signing costs nothing (no gas, no contract, no transaction), sends nothing anywhere, and saves nothing. It&rsquo;s here so you can see how a pledge will work.
      </PreviewNote>

      <div className="pledge-text">{PLEDGE}</div>

      <PledgeLoader />

      <h2>Beyond a signed pledge</h2>
      <ul className="cards">
        <li>
          <div className="card quiet">
            <span className="card-head">
              <i className="ph ph-hand-heart" aria-hidden="true"></i>
              <span className="badge soon">Sneak peek</span>
            </span>
            <h3>Tokens of gratitude</h3>
            <p>
              Later, a pledge could lead to a deeper, optional commitment: a soulbound token of gratitude, from Christopher W&rsquo;s gratitude-token project. It would stay in the wallet it&rsquo;s given to, and couldn&rsquo;t be sold, sent on or traded. It isn&rsquo;t money and it isn&rsquo;t a vote: it&rsquo;s a thank-you, and a sign of commitment you choose to carry.
            </p>
            <p>Still being tested. No dates, and nothing to claim yet.</p>
          </div>
        </li>
      </ul>

      <h2>Questions</h2>
      <div className="faq">
        <details>
          <summary>
            <i className="ph ph-caret-right" aria-hidden="true"></i> Why a wallet signature?
          </summary>
          <p>A signature shows that a pledge came from a particular wallet without asking for a name, an email or anything else about you. It&rsquo;s free, and it can&rsquo;t move any funds.</p>
        </details>
        <details>
          <summary>
            <i className="ph ph-caret-right" aria-hidden="true"></i> Is anything stored?
          </summary>
          <p>No. The signature is checked against your connected wallet inside this browser tab and then forgotten. This page doesn&rsquo;t show or keep your wallet&rsquo;s address, and it never sends anything.</p>
        </details>
        <details>
          <summary>
            <i className="ph ph-caret-right" aria-hidden="true"></i> What happens later?
          </summary>
          <p>
            Recording pledges comes only after the evidence library is underway, and only with a clear choice about what&rsquo;s recorded. The <a href={`${LOG}/roadmap`}>roadmap</a> says where it fits, and the <a href={`${LOG}/changelog`}>changelog</a> will say when it opens.
          </p>
        </details>
        <details>
          <summary>
            <i className="ph ph-caret-right" aria-hidden="true"></i> Do I need a wallet?
          </summary>
          <p>Only to try the signature. Everything else here, the evidence and the updates, is open to everyone.</p>
        </details>
      </div>
      <LegalNote />
    </div>
  );
}
