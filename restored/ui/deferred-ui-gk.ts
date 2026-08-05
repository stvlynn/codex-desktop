// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NEo`) / export `gk`.

export type BindDeferredUiGkPeers = {
  Gf: (...args: unknown[]) => unknown;
  MEo: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGkPeers | null = null;

/** Wire bindDeferredUiGk peers once companions land. */
export function setBindDeferredUiGkPeers(next: BindDeferredUiGkPeers): void {
  peers = next;
}

/**
 * Bundle export `gk` / internal `NEo`.
 */
export function bindDeferredUiGk() {
  if (peers == null) {
    throw new Error("bindDeferredUiGk peers are not configured");
  }

  return peers.e(() => {
    (peers.Qt(), peers.Gf(), (MEo = 3e4));
  });
}
