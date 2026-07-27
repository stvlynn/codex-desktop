// Restored from ref/webview/assets/use-searchable-page-title-visibility-BMlevUbi.js
// Hook: whether the in-page title is outside the scroll container (show in toolbar).
// Stage 3: Ivt/Lvt → react; ESM inits dropped; use-element-in-view promoted dep.

import { useState, type RefCallback } from "react";
import { useElementInView } from "./use-element-in-view";
export type SearchablePageTitleVisibility = {
  scrollContainerRef: RefCallback<Element | null>;
  showTitleInToolbar: boolean;
  titleRef: RefCallback<Element | null>;
};

/**
 * Bundle export `n` — track scroll container + title node; when the title is
 * not intersecting the container, the toolbar should show the page title.
 */
export function useSearchablePageTitleVisibility(): SearchablePageTitleVisibility {
  const [container, setContainer] = useState<Element | null>(null);
  const [target, setTarget] = useState<Element | null>(null);
  const titleInView = useElementInView({
    container,
    target,
  });
  return {
    scrollContainerRef: setContainer,
    showTitleInToolbar: !titleInView,
    titleRef: setTarget,
  };
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseSearchablePageTitleVisibilityInit(): void {}
