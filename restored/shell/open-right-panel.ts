// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real bodies via extractFn(internal `qGi`/`JGi`) / exports `IV`/`PV`.

import {
  activatePanelTabOrFallback,
  type PanelStore,
} from "../ui/activate-panel-tab-or-fallback";
import { closeBottomPanelOrOverlay } from "./close-bottom-panel-or-overlay";

/**
 * Bundle export `IV` / internal `qGi`.
 * Open the right shell panel.
 */
export function openRightPanel(
  store: PanelStore,
  options?: { activateFallbackTab?: boolean; allowEmpty?: boolean },
): boolean {
  return activatePanelTabOrFallback(store, "right", options);
}

/**
 * Bundle export `PV` / internal `JGi`.
 * Close the right shell panel (delegates to `$I` / `LU`).
 */
export function closeRightPanel(store: PanelStore): void {
  closeBottomPanelOrOverlay(store, "right");
}
