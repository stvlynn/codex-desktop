// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z$o`) / export `uE`.

export type GetBrowserTabIdForSidePanelOpenPeers = {
  Dl: (...args: unknown[]) => unknown;
  Q$o: (...args: unknown[]) => unknown;
  lT: (...args: unknown[]) => unknown;
  xT: (...args: unknown[]) => unknown;
  xYn: (...args: unknown[]) => unknown;

  Rj: any;};

let peers: GetBrowserTabIdForSidePanelOpenPeers | null = null;

/** Wire getBrowserTabIdForSidePanelOpen peers once companions land. */
export function setGetBrowserTabIdForSidePanelOpenPeers(next: GetBrowserTabIdForSidePanelOpenPeers): void {
  peers = next;
}

/**
 * Bundle export `uE` / internal `Z$o`.
 */
export function getBrowserTabIdForSidePanelOpen(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("getBrowserTabIdForSidePanelOpen peers are not configured");
  }
  let r = peers.Rj.getBrowserUseSummaryBrowserTabId(t);
  return e.get(peers.lT) ? n ?? peers.Dl(crypto.randomUUID()) : n != null && (peers.xYn(e, t, n) || peers.Rj.isBrowserUseTab(t, n) && r === n) ? n : peers.Q$o(e, t, n) ?? peers.xT(t);
}
