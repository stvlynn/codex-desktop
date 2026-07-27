// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iL` / export `EU` (companion `rL` inlined as flatMap of values).

export type BrowserTabLike = {
  browserTabId: string;
  target?: string | null;
};

/** Collect browser tabs from a map of lists. */
export function browserTabsFromMap(
  byKey: Map<string, BrowserTabLike[]> | Record<string, BrowserTabLike[]>,
  keys: readonly string[],
): BrowserTabLike[] {
  const out: BrowserTabLike[] = [];
  for (const key of keys) {
    const list = byKey instanceof Map ? byKey.get(key) : byKey[key];
    if (list) out.push(...list);
  }
  return out;
}

/** Find a browser tab by id, optionally requiring `target`. */
export function findBrowserTabById(
  byKey: Map<string, BrowserTabLike[]> | Record<string, BrowserTabLike[]>,
  keys: readonly string[],
  browserTabId: string,
  target?: string | null,
): BrowserTabLike | null {
  const tabs = browserTabsFromMap(byKey, keys);
  if (target != null) {
    const exact = tabs.find(
      (tab) => tab.browserTabId === browserTabId && tab.target === target,
    );
    if (exact != null) return exact;
  }
  return tabs.find((tab) => tab.browserTabId === browserTabId) ?? null;
}
