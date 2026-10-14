import type { Metadata } from "next";
import { DAPP, NAME, card } from "./site";

// Link previews (Telegram, iMessage, Slack, Discord…): absolute URLs and a real 1200×630 JPEG. Every
// card is drawn by the AstroLog's build (one generator for the whole suite: the arch with its
// keystone set) and served from there.
export function pageMeta({ slug, path, title, description, alt }: { slug: string; path: string; title: string; description: string; alt: string }): Metadata {
  const url = `${DAPP}${path}`;
  const image = { url: card(slug), width: 1200, height: 630, type: "image/jpeg", alt };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: `${NAME} dApp preview`, title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image.url, alt }] },
  };
}
