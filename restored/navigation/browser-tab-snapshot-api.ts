// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Browser-tab snapshot API used by app.get_summary (bundle `Rj` / export `yZ`).
// Thin host/runtime facade — host binds the real browser-use controller.

export type BrowserTabSnapshot = {
  canGoBack?: boolean;
  canGoForward?: boolean;
  isLoading?: boolean;
  title?: string | null;
  url?: string | null;
};

export type BrowserTabSnapshotApi = {
  getSnapshot: (
    conversationId: string,
    browserTabId: string,
  ) => BrowserTabSnapshot | null;
  getBrowserUseBrowserTabIds: (conversationId: string) => string[];
  isBrowserUseActive: (conversationId: string, browserTabId: string) => boolean;
  isBrowserUseTab?: (conversationId: string, browserTabId: string) => boolean;
  getConversationBrowserTabIds?: (conversationId: string) => string[];
  getBrowserUseSummaryBrowserTabId?: (conversationId: string) => string | null;
};

const emptyApi: BrowserTabSnapshotApi = {
  getSnapshot: () => null,
  getBrowserUseBrowserTabIds: () => [],
  isBrowserUseActive: () => false,
};

/** yZ / Rj — singleton facade; host replaces via `bindBrowserTabSnapshotApi`. */
export let browserTabSnapshotApi: BrowserTabSnapshotApi = emptyApi;

export function bindBrowserTabSnapshotApi(api: BrowserTabSnapshotApi): void {
  browserTabSnapshotApi = api;
}

/**
 * Browser-use controller `__esm` inits (incl. bZ / zj) that originally built
 * the snapshot singleton. Facade above is bindable; host wires real API.
 */
export function ensureBrowserTabSnapshotApiInit(): void {}
