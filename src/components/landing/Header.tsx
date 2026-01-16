"use client";

import type { MouseEvent } from "react";

export function Header() {
  const scrollToId = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Avoid persisting hashes in the URL (they cause "reload scroll" on mobile).
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-xl font-bold text-foreground sm:text-2xl"
          onClick={(e) => scrollToId(e, "top")}
        >
          VcodingList
        </a>
        <a
          href="#waitlist-email"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:translate-y-px"
          onClick={(e) => scrollToId(e, "waitlist-email")}
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}

