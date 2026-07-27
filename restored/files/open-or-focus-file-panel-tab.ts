// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sxo`) / export `RA`.

export type OpenOrFocusFilePanelTabPeers = {
  $I: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  YD: (...args: unknown[]) => unknown;
  ZD: (...args: unknown[]) => unknown;
  ZI: (...args: unknown[]) => unknown;
  cxo: (...args: unknown[]) => unknown;
  hK: (...args: unknown[]) => unknown;
  tabId: (...args: unknown[]) => unknown;
};
let peers: OpenOrFocusFilePanelTabPeers | null = null;

/** Wire openOrFocusFilePanelTab peers once companions land. */
export function setOpenOrFocusFilePanelTabPeers(
  next: OpenOrFocusFilePanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RA` / internal `sxo`.
 */
export function openOrFocusFilePanelTab(
  e: unknown,
  t: unknown,
  n: unknown = {},
) {
  if (peers == null) {
    throw new Error("openOrFocusFilePanelTab peers are not configured");
  }
  let r = peers.cxo(t, n.hostId, n.tabId),
    i = peers.ZI(e, r);
  if (
    i != null &&
    (i === "bottom" ? e.get(peers.YD) : e.get(peers.ZD)) &&
    e.get(peers.XI(i).activeTab$)?.tabId === r
  ) {
    peers.$I(e, i);
    return;
  }
  peers.hK(e, t, n);
}
