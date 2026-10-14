// Where everything lives. The dApp preview and the AstroLog are one suite: the AstroLog hosts the
// arrival kit (navbar, contact and community windows, reading mode, "/" search, what's new) and the
// share cards, and this app loads both by absolute URL.
export const ORIGIN = "https://drasticstatic.github.io";
export const DAPP = `${ORIGIN}/psychedelic-policy-reform-dapp-public-preview`;
export const LOG = `${ORIGIN}/psychedelic-policy-reform-astro-public`;
export const KIT = `${LOG}/arrival`;
export const NAME = "Psychedelic Policy Reform";
export const card = (slug: string) => `${LOG}/og/page/${slug}.jpg`;
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
