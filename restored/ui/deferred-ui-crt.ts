// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SGt`) / export `crt`.

export type BindDeferredUiCrtPeers = {
  e: (...args: unknown[]) => unknown;
  lGt: (...args: unknown[]) => unknown;
  pGt: (...args: unknown[]) => unknown;
  xGt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCrtPeers | null = null;

/** Wire bindDeferredUiCrt peers once companions land. */
export function setBindDeferredUiCrtPeers(next: BindDeferredUiCrtPeers): void {
  peers = next;
}

/**
 * Bundle export `crt` / internal `SGt`.
 */
export function bindDeferredUiCrt() {
  if (peers == null) {
    throw new Error("bindDeferredUiCrt peers are not configured");
  }

  return peers.e(() => {
    (peers.xGt(), peers.pGt(), peers.lGt());
  });
}
