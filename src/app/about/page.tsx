import { LegalNote } from "@/components/Notes";
import { pageMeta } from "@/lib/meta";
import { BASE, LOG, NAME } from "@/lib/site";

export const metadata = pageMeta({
  slug: "dapp-about",
  path: "/about",
  title: `About — ${NAME}`,
  description: "An RFRA-based policy and evidence initiative, seen from Pennsylvania, for communities whose sincere spiritual practice includes sacraments the law still restricts.",
  alt: `About ${NAME}, beside a stone arch with its keystone set.`,
});

export default function About() {
  return (
    <div className="page">
      <p className="eyebrow">About</p>
      <h1>About the initiative</h1>
      <p className="lede">
        {NAME} is a policy and evidence initiative built on the Religious Freedom Restoration Act. It&rsquo;s seen from Pennsylvania, and it&rsquo;s meant to serve communities whose sincere spiritual practice includes sacraments the law still restricts.
      </p>
      <LegalNote />

      <h2>What it does</h2>
      <ul className="plain">
        <li><strong>Gathers evidence:</strong> public sources on the law, court decisions, research and practice, each one cited and checked.</li>
        <li><strong>Explains it plainly</strong>, in words anyone can follow, starting with <a href={`${LOG}/library/rfra-in-plain-words`}>RFRA in plain words</a> (a draft, to be reviewed).</li>
        <li><strong>Keeps an open record</strong> of every step in its <a href={`${LOG}/`}>AstroLog</a>.</li>
      </ul>
      <p>It&rsquo;s a policy and evidence lane. It doesn&rsquo;t tell anyone&rsquo;s personal story, and it can&rsquo;t give legal advice.</p>

      <h2>Who it&rsquo;s meant to serve</h2>
      <p>
        Four communities are in its circle: Psychedelics In Recovery&trade; (PIR&reg;), Psanctuary, ORG (the Octagon Religious-Research Group) and The Holy Earth Foundation. The <a href={`${LOG}/roadmap`}>roadmap</a> describes each one in its own public words, and what this work can offer it.
      </p>
      <p>
        Naming a community describes who this work hopes to help. It doesn&rsquo;t mean that community has endorsed the initiative or taken a position on it, and nothing here speaks for any of them.
      </p>

      <h2>Partners</h2>
      <p>
        <strong>Partner organizations: to be announced.</strong> When a partner is ready to be named, the changelog will say so first.
      </p>

      <h2>Who keeps it</h2>
      <p>
        Christopher W (<a href="https://github.com/drasticstatic">drasticstatic</a>) started the initiative and keeps these pages, with Alfred (Claude Code). Every change is credited in the <a href={`${LOG}/ledger`}>ledger</a>.
      </p>

      <h2>This preview</h2>
      <ul className="plain">
        <li>The <a href={`${BASE}/pledge`}>pledge</a> is a preview: a wallet signature, no gas, no contract, and nothing is recorded.</li>
        <li>Code is MIT licensed, and the words are CC BY-SA 4.0. The source is public: <a href="https://github.com/drasticstatic/psychedelic-policy-reform-dapp-public-preview">the dApp</a> and <a href="https://github.com/drasticstatic/psychedelic-policy-reform-astro-public">the AstroLog</a>.</li>
        <li>What keeps it running is on the <a href={`${LOG}/sustainability`}>sustainability</a> page.</li>
      </ul>
    </div>
  );
}
