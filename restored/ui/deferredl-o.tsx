// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CLo`) / export `lO`.

export type BindDeferredlOPeers = {
  Mq: (...args: unknown[]) => unknown;
  SLo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ju: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  zj: (...args: unknown[]) => unknown;
};

let peers: BindDeferredlOPeers | null = null;

/** Wire bindDeferredlO peers once companions land. */
export function setBindDeferredlOPeers(next: BindDeferredlOPeers): void {
  peers = next;
}

/**
 * Bundle export `lO` / internal `CLo`.
 */
export function bindDeferredlO() {
  if (peers == null) {
    throw new Error("bindDeferredlO peers are not configured");
  }

  return peers.e(() => {
    ((Mq = peers.r(peers.o(), 1)), (SLo = peers.r(peers.ju(), 1)), peers.zj());
  });
}
