// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$I`) / export `LU`.

export type CloseBottomPanelOrOverlayPeers = {
  BD: (...args: unknown[]) => unknown;
  Bj: (...args: unknown[]) => unknown;
  Ear: (...args: unknown[]) => unknown;
  HD: (...args: unknown[]) => unknown;
  Jir: (...args: unknown[]) => unknown;
  jar: (...args: unknown[]) => unknown;
};

let peers: CloseBottomPanelOrOverlayPeers | null = null;

/** Wire closeBottomPanelOrOverlay peers once companions land. */
export function setCloseBottomPanelOrOverlayPeers(next: CloseBottomPanelOrOverlayPeers): void {
  peers = next;
}

/**
 * Bundle export `LU` / internal `$I`.
 */
export function closeBottomPanelOrOverlay(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("closeBottomPanelOrOverlay peers are not configured");
  }

  if (t === `bottom`) {
    let t = e.get(peers.HD) === `bottom-panel` ? e.get(peers.Jir) : null;
    peers.Ear(e, !1), t != null && peers.BD(e, t), peers.Bj();
    return;
  }
  peers.jar(e, !1);
}
