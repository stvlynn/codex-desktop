// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ZGi`) / export `AV`.

export type CloseThreadMcpAppSidePanelTabPeers = {
  JGi: (...args: unknown[]) => unknown;
  pR: (...args: unknown[]) => unknown;

  eO: any;
};

let peers: CloseThreadMcpAppSidePanelTabPeers | null = null;

/** Wire closeThreadMcpAppSidePanelTab peers once companions land. */
export function setCloseThreadMcpAppSidePanelTabPeers(
  next: CloseThreadMcpAppSidePanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `AV` / internal `ZGi`.
 */
export function closeThreadMcpAppSidePanelTab(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("closeThreadMcpAppSidePanelTab peers are not configured");
  }
  let n = peers.pR(t);
  e.get(peers.eO.tabs$).some((e) => e.tabId === n) &&
    (peers.eO.closeTab(e, n),
    e.get(peers.eO.tabs$).length === 0 && peers.JGi(e));
}
