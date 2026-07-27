// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ry`) / export `int`.

export type BindDeferredUiIntPeers = {
  Iy: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiIntPeers | null = null;

/** Wire bindDeferredUiInt peers once companions land. */
export function setBindDeferredUiIntPeers(next: BindDeferredUiIntPeers): void {
  peers = next;
}

/**
 * Bundle export `int` / internal `Ry`.
 */
export function bindDeferredUiInt() {
  if (peers == null) {
    throw new Error("bindDeferredUiInt peers are not configured");
  }

  return class extends peers.Iy {
    constructor(e) {
      super(peers.e, `AbortException`);
    }
  };
}
