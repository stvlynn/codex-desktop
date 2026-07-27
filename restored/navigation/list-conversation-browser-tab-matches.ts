// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// List browser-tab matches across bottom/right panels for a conversation
// (bundle `rL` / export `DU`).

import type { AppActionScope } from "./app-action-scope";
import { browserTabIdFromPanelTab } from "./browser-tab-id-from-panel-tab";
import {
  bottomPanelController,
  rightPanelController,
  type PanelControllerAtoms,
  type PanelSide,
  type PanelTabLike,
} from "./app-shell-atoms";

export type ConversationBrowserTabMatch = {
  browserTabId: string;
  controller: PanelControllerAtoms;
  tab: PanelTabLike;
  target: PanelSide;
};

function tabsFromController(
  scope: AppActionScope,
  controller: PanelControllerAtoms,
): PanelTabLike[] {
  const tabs = scope.get(controller.tabs$);
  return Array.isArray(tabs) ? (tabs as PanelTabLike[]) : [];
}

/**
 * Bundle `rL` / export `DU`.
 */
export function listConversationBrowserTabMatches(scope: AppActionScope, conversationId: string): ConversationBrowserTabMatch[] {
  const panels: Array<{ side: PanelSide; controller: PanelControllerAtoms }> = [
    { side: "right", controller: rightPanelController },
    { side: "bottom", controller: bottomPanelController },
  ];
  return panels.flatMap(({ side, controller }) =>
    tabsFromController(scope, controller).flatMap((tab) => {
      const browserTabId = browserTabIdFromPanelTab(tab, conversationId);
      if (browserTabId == null) return [];
      return [{ browserTabId, controller, tab, target: side }];
    }),
  );
}
