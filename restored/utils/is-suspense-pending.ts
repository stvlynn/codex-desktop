// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `si` — pure helper.

/** True when a suspense flag is set and the query is enabled+pending. */
export function isSuspensePending(
  options: { suspense?: boolean } | null | undefined,
  query: { isEnabled: boolean; isPending: boolean },
): boolean {
  return !!options?.suspense && query.isEnabled && query.isPending;
}
