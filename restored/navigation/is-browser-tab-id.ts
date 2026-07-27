// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gge` companion for `m8` / export `m8`.
// Prefix constant `wge` = `browser:`.

const BROWSER_TAB_PREFIX = "browser:";

/** True when a tab id uses the browser: prefix. */
export function isBrowserTabId(tabId: string | null | undefined): boolean {
  return tabId?.startsWith(BROWSER_TAB_PREFIX) ?? false;
}
