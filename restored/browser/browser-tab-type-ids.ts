// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Built-in browser tab type ids (`Ml` / export `ggt`).

/** Bundle `Ml` / export `ggt`. */
export const BrowserTabTypeId = {
  NEW_TAB_PAGE: "new-tab-page",
  WEB: "web",
} as const;

export type BrowserTabTypeId =
  (typeof BrowserTabTypeId)[keyof typeof BrowserTabTypeId];
