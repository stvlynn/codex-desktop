// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eL` / export `IU` — activate tab then focus its panel.

import { panelControllerForSide } from "./panel-controller-for-side";
import type { PanelSide } from "./app-shell-atoms";

type StoreLike = {
  get: (atom: unknown, tabId?: string) => unknown;
};

type FocusPanelFn = (
  store: StoreLike,
  side: PanelSide,
  options?: { activateFallbackTab?: boolean; allowEmpty?: boolean },
) => boolean;

let focusPanel: FocusPanelFn | null = null;

/** Wire panel focus helper (`QI` in the bundle). */
export function setFocusPanelHelper(fn: FocusPanelFn): void {
  focusPanel = fn;
}

export function activatePanelTab(
  store: StoreLike,
  side: PanelSide | string,
  tabId: string,
): boolean {
  const controller = panelControllerForSide(side);
  if (store.get(controller.tabById$, tabId) == null) return false;
  const activate = (
    controller as {
      activateTab?: (store: StoreLike, tabId: string) => void;
    }
  ).activateTab;
  activate?.(store, tabId);
  return focusPanel?.(store, side as PanelSide) ?? true;
}
