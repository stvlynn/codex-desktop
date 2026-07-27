// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QI`) / export `VU`.

export type ActivatePanelTabOrFallbackPeers = {
  BD: (...args: unknown[]) => unknown;
  Ear: (...args: unknown[]) => unknown;
  HD: (...args: unknown[]) => unknown;
  Jir: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  jar: (...args: unknown[]) => unknown;
  tabId: (...args: unknown[]) => unknown;
};
let peers: ActivatePanelTabOrFallbackPeers | null = null;

/** Wire activatePanelTabOrFallback peers once companions land. */
export function setActivatePanelTabOrFallbackPeers(
  next: ActivatePanelTabOrFallbackPeers,
): void {
  peers = next;
}

/**
 * Bundle export `VU` / internal `QI`.
 */
export function activatePanelTabOrFallback(
  e: unknown,
  t: unknown,
  { activateFallbackTab, allowEmpty }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("activatePanelTabOrFallback peers are not configured");
  }
  let i = peers.XI(t),
    a = e.get(i.tabs$),
    o = null;
  if (t === "bottom") {
    let t = e.get(peers.HD);
    o = t === "bottom-panel" ? null : t;
  }
  return a.length === 0 && allowEmpty !== true
    ? false
    : (activateFallbackTab === true &&
        e.get(i.activeTab$) == null &&
        i.activateTab(e, a[0]?.tabId ?? null),
      t === "bottom"
        ? (o != null && e.set(peers.Jir, o),
          peers.Ear(e, true),
          peers.BD(e, "bottom-panel"))
        : (peers.jar(e, true), peers.BD(e, "right-panel")),
      true);
}
