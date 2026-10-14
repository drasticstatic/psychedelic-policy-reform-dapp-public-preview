"use client";

import { useEffect, useRef } from "react";

// One of the arrival kit's elements (<arrival-nav>, <arrival-controls>, <arrival-footer>,
// <arrival-latest>, <arrival-map>, <arrival-people>). The kit renders into the element itself, so it's
// created after hydration rather than by React: React never sees children it didn't render.
export function KitElement({ tag, attrs, className }: { tag: string; attrs?: Record<string, string>; className?: string }) {
  const host = useRef<HTMLSpanElement>(null);
  const key = JSON.stringify(attrs ?? {});
  useEffect(() => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(JSON.parse(key) as Record<string, string>)) el.setAttribute(k, v);
    host.current?.appendChild(el);
    return () => el.remove();
  }, [tag, key]);
  return <span ref={host} className={`kit-host ${className ?? ""}`} />;
}
