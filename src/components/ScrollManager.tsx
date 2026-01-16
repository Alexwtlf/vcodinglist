"use client";

import { useEffect } from "react";

function getNavigationType(): string | undefined {
  try {
    const entry = performance.getEntriesByType?.("navigation")?.[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (entry?.type) return entry.type;
  } catch {
    // ignore
  }

  // Legacy fallback
  const legacyType: number | undefined = (
    performance as Performance & { navigation?: { type?: number } }
  )?.navigation?.type;
  // 1 = reload
  if (legacyType === 1) return "reload";
  return undefined;
}

export function ScrollManager() {
  useEffect(() => {
    // Prevent browsers from restoring scroll position on reload (esp. mobile).
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {
      // ignore
    }

    const navType = getNavigationType();
    const isReload = navType === "reload";

    if (isReload && window.location.hash) {
      // Strip hash so future reloads don't auto-scroll to anchors.
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );

      // Ensure we stay at the top (avoid smooth scroll on browsers that respect it).
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        html.style.scrollBehavior = prev;
      });
    }
  }, []);

  return null;
}

