// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `alc`) / export `Rf`.

export type BindDeferredRfPeers = {
  Gf: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ilc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredRfPeers | null = null;

/** Wire bindDeferredRf peers once companions land. */
export function setBindDeferredRfPeers(next: BindDeferredRfPeers): void {
  peers = next;
}

/**
 * Bundle export `Rf` / internal `alc`.
 */
export function bindDeferredRf() {
  if (peers == null) {
    throw new Error("bindDeferredRf peers are not configured");
  }

  return peers.e(() => {
    peers.Hb(), peers.Kb(), peers.Gf(), ilc = new WeakMap();
  });
}
