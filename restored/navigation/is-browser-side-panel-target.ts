// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jYn` / export `m8`.

import { ThreadSidePanelTab } from "./thread-side-panel-tab";
import { isBrowserTabId } from "./is-browser-tab-id";

/** True when a side-panel target is the browser tab. */
export function isBrowserSidePanelTarget(
  target: { kind?: string; tabId?: string } | null | undefined,
): boolean {
  if (target == null) return false;
  if (target.kind === ThreadSidePanelTab.BROWSER) return true;
  const tabId = target.tabId;
  return tabId === ThreadSidePanelTab.BROWSER || isBrowserTabId(tabId);
}
