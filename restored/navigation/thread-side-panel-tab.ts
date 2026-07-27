// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Thread side-panel tab ids (bundle `_T` / export `h8`).
// Consumers: thread-side-panel-tabs, thread-app-shell-chrome, register-app-actions.

export const ThreadSidePanelTab = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  PLAN: "plan",
  SANDBOX: "sandbox",
  SOURCES: "thread-sources",
  TIMELINE: "timeline",
} as const;

export type ThreadSidePanelTabId =
  (typeof ThreadSidePanelTab)[keyof typeof ThreadSidePanelTab];
/**
 * Bundle `vT` / export `g8` — original ESM init that assigned `_T`.
 * Values already live in `ThreadSidePanelTab` (`h8`); this is a no-op for
 * consumers that still call the init thunk.
 */
export function ensureThreadSidePanelTabInit(): void {}
