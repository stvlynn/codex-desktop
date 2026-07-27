// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tRi` / export `jU`.

import { browserTabIdFromPanelTab } from "./browser-tab-id-from-panel-tab";

export type PanelSidePlacement = "bottom" | "right";

/** Resolve which panel side owns the given tab placement. */
export function resolvePanelSideFromTabs(
  conversationId: string | null | undefined,
  preferred: string | null | undefined,
  tabs: { bottom?: unknown; right?: unknown },
): PanelSidePlacement | null {
  const resolved = {
    bottom: browserTabIdFromPanelTab(
      tabs.bottom as { tabId?: string; kind?: string } | null,
      conversationId,
    ),
    right: browserTabIdFromPanelTab(
      tabs.right as { tabId?: string; kind?: string } | null,
      conversationId,
    ),
  };
  if (preferred === "bottom-panel" && resolved.bottom != null) return "bottom";
  if (
    (preferred === "right-panel" && resolved.right != null) ||
    resolved.right != null
  ) {
    return "right";
  }
  return resolved.bottom == null ? null : "bottom";
}
