// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Identity brand for browser tab ids (`Dl` / export `Cgt`).

/**
 * Bundle `Dl` / export `Cgt`.
 * No-op brand used after stripping `browser:` (and similar) prefixes.
 */
export function asBrowserTabId<T extends string>(tabId: T): T {
  return tabId;
}
