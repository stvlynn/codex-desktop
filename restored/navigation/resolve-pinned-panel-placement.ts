// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nRi` / export `OU`.

import {
  resolvePanelSideFromTabs,
  type PanelSidePlacement,
} from "./resolve-panel-side-from-tabs";

/** Resolve panel side using only pinned bottom/right slots. */
export function resolvePinnedPanelPlacement(
  conversationId: string | null | undefined,
  preferred: string | null | undefined,
  tabs: { bottom?: unknown; right?: unknown },
  pinned: { bottom?: boolean; right?: boolean },
): PanelSidePlacement | null {
  return resolvePanelSideFromTabs(conversationId, preferred, {
    bottom: pinned.bottom ? tabs.bottom : null,
    right: pinned.right ? tabs.right : null,
  });
}
