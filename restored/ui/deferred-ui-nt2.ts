// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ZKt`) / export `_nt`.

export type BindDeferredUiNt2Peers = {
  Iy: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiNt2Peers | null = null;

/** Wire bindDeferredUiNt2 peers once companions land. */
export function setBindDeferredUiNt2Peers(next: BindDeferredUiNt2Peers): void {
  peers = next;
}

/**
 * Bundle export `_nt` / internal `ZKt`.
 */
export function bindDeferredUiNt2() {
  if (peers == null) {
    throw new Error("bindDeferredUiNt2 peers are not configured");
  }

  return class extends peers.Iy {
    constructor(e) {
      super(peers.e, `InvalidPDFException`);
    }
  };
}
