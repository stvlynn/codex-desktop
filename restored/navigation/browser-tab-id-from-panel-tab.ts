// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve a browser-tab id from a panel tab descriptor
// (bundle `ST` from `CT` / export `p8` neighborhood).

import { ThreadSidePanelTab } from "./thread-side-panel-tab";

export type PanelTabForBrowserId = {
  tabId?: string;
  kind?: string;
} | null;

/**
 * Bundle `xT` — legacy browser tab id for a conversation.
 */
export function legacyConversationBrowserTabId(conversationId: string): string {
  return `${conversationId}:legacy`;
}

/**
 * Bundle `ST` — map an open panel tab to a browser-tab id for `conversationId`.
 */
export function browserTabIdFromPanelTab(tab: PanelTabForBrowserId, conversationId: string | null | undefined): string | null {
  if (tab == null) return null;
  const tabId = tab.tabId;
  if (tabId === ThreadSidePanelTab.BROWSER) {
    return conversationId == null
      ? null
      : legacyConversationBrowserTabId(conversationId);
  }
  if (typeof tabId === "string" && tabId.startsWith("browser:")) {
    return tabId.slice("browser:".length) || null;
  }
  if (tab.kind === ThreadSidePanelTab.BROWSER && typeof tabId === "string") {
    return tabId;
  }
  return null;
}

/** p8 / CT — ESM init for browser-tab helpers. */
export function ensureBrowserTabIdHelpersInit(): void {}
