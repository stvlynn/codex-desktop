// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// `browser:` tab-id prefix helpers (`wge` / `gge` / `hge`).

import { asBrowserTabId } from "./as-browser-tab-id";

/** Prefix for local browser tab conversation ids (`wge`). */
export const BROWSER_TAB_ID_PREFIX = "browser:";

/** Bundle `gge` (co-located). */
export function isBrowserTabId(value: string | null | undefined): boolean {
  return value?.startsWith(BROWSER_TAB_ID_PREFIX) ?? false;
}

/**
 * Bundle `hge` (co-located).
 * Strip the `browser:` prefix and brand the remainder as a tab id.
 */
export function parseBrowserTabId(value: string | null | undefined): string | null {
  return isBrowserTabId(value)
    ? asBrowserTabId(value!.slice(BROWSER_TAB_ID_PREFIX.length))
    : null;
}
