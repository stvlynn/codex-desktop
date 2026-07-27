// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wzi`) / export `cU`.

export type FocusBottomPanelSessionPeers = {
  Kzi: (...args: unknown[]) => unknown;
};

let peers: FocusBottomPanelSessionPeers | null = null;

/** Wire focusBottomPanelSession peers once companions land. */
export function setFocusBottomPanelSessionPeers(next: FocusBottomPanelSessionPeers): void {
  peers = next;
}

/**
 * Bundle export `cU` / internal `Wzi`.
 */
export function focusBottomPanelSession(e: unknown) {
  if (peers == null) {
    throw new Error("focusBottomPanelSession peers are not configured");
  }

  peers.Kzi(e, `bottom`);
}
