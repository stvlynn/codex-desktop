// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gmo`) / export `gj`.

export type BindDeferredgjPeers = {
  Au: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hmo: (...args: unknown[]) => unknown;
  pmo: (...args: unknown[]) => unknown;
  zpo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredgjPeers | null = null;

/** Wire bindDeferredgj peers once companions land. */
export function setBindDeferredgjPeers(next: BindDeferredgjPeers): void {
  peers = next;
}

/**
 * Bundle export `gj` / internal `gmo`.
 */
export function bindDeferredgj() {
  if (peers == null) {
    throw new Error("bindDeferredgj peers are not configured");
  }

  return peers.e(() => {
    hmo = peers.c(), peers.Ho(), peers.Au(), peers.DD(), peers.zpo(), peers.pmo();
  });
}
