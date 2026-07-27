// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve which browser-tab id is active for a conversation given focus
// area + open panel tabs (bundle `eRi` / export `MU`).

import { browserTabIdFromPanelTab } from "./browser-tab-id-from-panel-tab";
import type { PanelSide, PanelTabLike } from "./app-shell-atoms";

export type PanelTabsBySide = {
  bottom?: PanelTabLike | null;
  right?: PanelTabLike | null;
};

export type PanelOpenBySide = {
  bottom?: boolean;
  right?: boolean;
};

function preferredSide(
  focusArea: string | null | undefined,
  tabs: {
    bottom: string | null;
    right: string | null;
  },
): PanelSide | null {
  if (focusArea === "bottom-panel" && tabs.bottom != null) return "bottom";
  if (
    (focusArea === "right-panel" && tabs.right != null) ||
    tabs.right != null
  ) {
    return "right";
  }
  if (tabs.bottom == null) return null;
  return "bottom";
}

/**
 * Bundle `eRi` / export `MU` — active browser-tab id for a conversation.
 */
export function resolveBrowserTabPanelSide(conversationId: string, focusArea: string | null | undefined, tabs: PanelTabsBySide, open?: PanelOpenBySide | null): string | null {
  const filtered: PanelTabsBySide =
    open == null
      ? tabs
      : {
          bottom: open.bottom ? tabs.bottom : null,
          right: open.right ? tabs.right : null,
        };
  const bottomId = browserTabIdFromPanelTab(
    filtered.bottom ?? null,
    conversationId,
  );
  const rightId = browserTabIdFromPanelTab(
    filtered.right ?? null,
    conversationId,
  );
  const side = preferredSide(focusArea, { bottom: bottomId, right: rightId });
  if (side == null) return null;
  return side === "bottom" ? bottomId : rightId;
}
