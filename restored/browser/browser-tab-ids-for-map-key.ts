// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `CBr` / export `CZ`.

/** Browser tab ids stored under a host/session map key. */
export function browserTabIdsForMapKey(
  tabsByKey: Map<unknown, Array<{ browserTabId: unknown }>>,
  key: unknown,
): unknown[] {
  return tabsByKey.get(key)?.map((entry) => entry.browserTabId) ?? [];
}
