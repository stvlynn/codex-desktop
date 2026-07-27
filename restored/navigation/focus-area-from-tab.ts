// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map an open side-panel tab to an app-shell focus-area id
// (bundle `nor` / export `c0`).

import { ThreadSidePanelTab } from "./thread-side-panel-tab";

export type SidePanelTabLike = {
  tabId?: string;
  kind?: string;
} | null;

export type FocusAreaFromTab =
  | "browser"
  | "review"
  | "sources"
  | "mcp_app"
  | "artifact"
  | "automation"
  | "file"
  | "pull_request"
  | "terminal"
  | "other"
  | null;

function isBrowserTab(tab: SidePanelTabLike): boolean {
  if (tab == null) return false;
  // Bundle `jYn` — also treats certain plugin tab ids via `gge`; omitted here.
  return (
    tab.kind === ThreadSidePanelTab.BROWSER ||
    tab.tabId === ThreadSidePanelTab.BROWSER
  );
}

/**
 * Bundle `nor` / export `c0`.
 */
export function focusAreaFromTab(tab: SidePanelTabLike): FocusAreaFromTab {
  if (tab == null) return null;
  if (isBrowserTab(tab)) return "browser";
  const tabId = tab.tabId;
  if (tabId == null) return "other";
  if (tabId === ThreadSidePanelTab.DIFF) return "review";
  if (tabId === ThreadSidePanelTab.SOURCES) return "sources";
  if (
    tabId === ThreadSidePanelTab.MCP_APP ||
    tabId.startsWith(`${ThreadSidePanelTab.MCP_APP}:`)
  ) {
    return "mcp_app";
  }
  if (tabId.startsWith("artifact:")) return "artifact";
  if (tabId.startsWith("automation:")) return "automation";
  if (tabId.startsWith("file:")) return "file";
  if (tabId.startsWith("pull-request:")) return "pull_request";
  if (tabId.startsWith("terminal:")) return "terminal";
  return "other";
}
