// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave CB — small real body for wham-toggle-all-diffs open controller.
// Deferred companion of EditorDiffPage / multi-file diff chrome.

import { useEffect } from "react";

const WHAM_TOGGLE_ALL_DIFFS = "wham-toggle-all-diffs";

export type WhamToggleAllDiffsDetail = {
  open: boolean;
  scope?: string | null;
};

/**
 * Listen for / dispatch `wham-toggle-all-diffs` CustomEvents (optional scope).
 * Returns a setter that broadcasts open state for the given scope.
 * Bundle export `ZD` / internal `CBo`.
 */
export function useWhamToggleAllDiffs(
  onOpenChange: (open: boolean) => void,
  scope?: string | null,
): (open: boolean) => void {
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<WhamToggleAllDiffsDetail>).detail;
      const eventScope = detail.scope;
      if ((scope && eventScope !== scope) || (!scope && eventScope)) return;
      onOpenChange(detail.open);
    };
    window.addEventListener(WHAM_TOGGLE_ALL_DIFFS, handler);
    return () => {
      window.removeEventListener(WHAM_TOGGLE_ALL_DIFFS, handler);
    };
  }, [onOpenChange, scope]);

  return (open: boolean) => {
    window.dispatchEvent(
      new CustomEvent(WHAM_TOGGLE_ALL_DIFFS, {
        detail: { open, scope },
      }),
    );
  };
}
