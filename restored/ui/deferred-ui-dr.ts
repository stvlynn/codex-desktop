// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m5i`) / export `DR`.

export type BindDeferredUiDRPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f5i: (...args: unknown[]) => unknown;
  p5i: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiDRPeers | null = null;

/** Wire bindDeferredUiDR peers once companions land. */
export function setBindDeferredUiDRPeers(next: BindDeferredUiDRPeers): void {
  peers = next;
}

/**
 * Bundle export `DR` / internal `m5i`.
 */
export function bindDeferredUiDR() {
  if (peers == null) {
    throw new Error("bindDeferredUiDR peers are not configured");
  }

  return peers.e(() => {
    f5i = peers.c(), peers.sd(), peers.$u(), p5i = peers.J();
  });
}
