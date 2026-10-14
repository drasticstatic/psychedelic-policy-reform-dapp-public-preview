import { BASE, NAME } from "@/lib/site";

// The brand: the keystone mark (the same one the AstroLog wears), the name, and a "dApp preview" tag.
export function Brand() {
  return (
    <a href={`${BASE}/`} className="brand" aria-label={`${NAME} dApp preview, home`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="mark" aria-hidden="true">
        <path className="ks-face" d="M11 7.5 H53 L43.5 57 H20.5 Z" strokeWidth="2" strokeLinejoin="round" />
        <path className="ks-cut" d="M32 51 C32 44 31.5 38 32.5 30" fill="none" strokeWidth="3.4" strokeLinecap="round" />
        <path className="ks-cut" d="M32.2 39 C25.5 39.5 21.5 35.5 20.5 28.5 C27.5 28.2 31.8 32.2 32.2 39 Z" strokeWidth="0" />
        <path className="ks-cut" d="M32.6 32 C39.4 32.2 43.6 27.8 44.4 20.5 C37.2 20.6 32.9 25 32.6 32 Z" strokeWidth="0" />
      </svg>
      <span className="brand-title arr-brand-text">
        Policy Reform<span className="brand-tag">dApp preview</span>
      </span>
    </a>
  );
}
