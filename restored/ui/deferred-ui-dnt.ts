// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oqt`) / export `Dnt`.

export type BindDeferredUiDntPeers = {
  Iy: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiDntPeers | null = null;

/** Wire bindDeferredUiDnt peers once companions land. */
export function setBindDeferredUiDntPeers(next: BindDeferredUiDntPeers): void {
  peers = next;
}

/**
 * Bundle export `Dnt` / internal `oqt`.
 */
export function bindDeferredUiDnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiDnt peers are not configured");
  }

  return class extends peers.Iy {
    constructor(e, t = 0) {
      super(peers.e, `RenderingCancelledException`), this.extraDelay = peers.t;
    }
  };
}
