// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uYt`) / export `mnt`.

export type BindDeferredUiMntPeers = {
  Vy: (...args: unknown[]) => unknown;
  _createSVG: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lYt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiMntPeers | null = null;

/** Wire bindDeferredUiMnt peers once companions land. */
export function setBindDeferredUiMntPeers(next: BindDeferredUiMntPeers): void {
  peers = next;
}

/**
 * Bundle export `mnt` / internal `uYt`.
 */
export function bindDeferredUiMnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiMnt peers are not configured");
  }

  return class extends peers.lYt {
    _createSVG(e) {
      return document.createElementNS(peers.Vy, peers.e);
    }
  };
}
