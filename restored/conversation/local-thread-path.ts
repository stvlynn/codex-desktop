// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Local conversation route prefix helper (bundle `lu` / export `$pt`).

export const LOCAL_THREAD_PATH_PREFIX = "/local";

/**
 * Bundle `lu` / export `$pt` — `/local/<conversationId>`.
 */
export function localThreadPath(conversationId: string): string {
  return `${LOCAL_THREAD_PATH_PREFIX}/${conversationId}`;
}
