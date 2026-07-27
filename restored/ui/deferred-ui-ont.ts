// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ly`) / export `Ont`.

export type BindDeferredUiOntPeers = {
  Iy: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiOntPeers | null = null;

/** Wire bindDeferredUiOnt peers once companions land. */
export function setBindDeferredUiOntPeers(next: BindDeferredUiOntPeers): void {
  peers = next;
}

/**
 * Bundle export `Ont` / internal `Ly`.
 */
export function bindDeferredUiOnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiOnt peers are not configured");
  }

  return class extends peers.Iy {
    constructor(e, t, n) {
      super(peers.e, `ResponseException`), this.status = peers.t, this.missing = peers.n;
    }
  };
}
