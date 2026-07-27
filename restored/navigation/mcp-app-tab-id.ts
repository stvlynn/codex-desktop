// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pR` / export `jV`.

import { ThreadSidePanelTab } from "./thread-side-panel-tab";

/** Side-panel tab id for an MCP app instance. */
export function mcpAppTabId(appId: string): string {
  return `${ThreadSidePanelTab.MCP_APP}:${appId}`;
}
