"use client";

import dynamic from "next/dynamic";

// The wallet tools load in the browser only (never during the static build), and only on this page.
const PledgeClient = dynamic(() => import("./PledgeClient"), {
  ssr: false,
  loading: () => <p className="status">Getting the wallet tools ready…</p>,
});

export function PledgeLoader() {
  return <PledgeClient />;
}
