// Restored from ref/webview/assets/use-media-query-B4kOXzqr.js
// Subscribe to a CSS media query match state.
// Stage 3: Ivt/Lvt → react; ESM inits dropped.

import { useEffect, useState } from "react";

/**
 * Bundle export `n` — whether `window.matchMedia(query)` currently matches.
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (): boolean => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return false;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => {
        media.removeEventListener("change", onChange);
      };
    }
    media.addListener(onChange);
    return () => {
      media.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseMediaQueryInit(): void {}
