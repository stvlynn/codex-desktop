// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ZI` / export `zU`.
// Bundle: `tL.find((n) => e.get(XI(n).tabById$, t) != null)`.

import { PLACEMENT_RIGHT_BOTTOM } from "../ui/placement-right-bottom";
import { panelControllerForSide } from "./panel-controller-for-side";
import type { PanelSide } from "./app-shell-atoms";

type StoreLike = {
  get: (atom: unknown, tabId: string) => unknown;
};

export function findPanelSideForTab(
  store: StoreLike,
  tabId: string,
): PanelSide | null {
  for (const side of PLACEMENT_RIGHT_BOTTOM) {
    const controller = panelControllerForSide(side);
    if (store.get(controller.tabById$, tabId) != null) return side;
  }
  return null;
}
