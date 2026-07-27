// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `J$o` / export `vE`.

import { activatePanelTab } from "./activate-panel-tab";
import { ThreadSidePanelTab } from "./thread-side-panel-tab";

type OpenDiffTab = (target: unknown, activate: boolean, side: string) => void;

let openDiffTab: OpenDiffTab | null = null;

/** Bind the diff-tab opener used before optional activation. */
export function bindOpenDiffPanelTab(next: OpenDiffTab): void {
  openDiffTab = next;
}

/**
 * Open a diff tab (right by default) and optionally activate the DIFF panel.
 * Bundle: `(i1o(e, !1, n), !t || eL(e, n, _T.DIFF))`.
 */
export function openOrActivateDiffPanelTab(target: unknown, activate: boolean = true, side: "right" | "left" | string = "right"): boolean | void {
  openDiffTab?.(target, false, side);
  if (!activate) return;
  return activatePanelTab(target, side, ThreadSidePanelTab.DIFF);
}
