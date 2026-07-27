// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qGi`) / export `IV`.

export type OpenRightPanelPeers = {
  QI: (...args: unknown[]) => unknown;
};

let peers: OpenRightPanelPeers | null = null;

/** Wire openRightPanel peers once companions land. */
export function setOpenRightPanelPeers(next: OpenRightPanelPeers): void {
  peers = next;
}

/**
 * Bundle export `IV` / internal `qGi`.
 */
export function openRightPanel(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("openRightPanel peers are not configured");
  }

  return peers.QI(e, `right`, t);
}
