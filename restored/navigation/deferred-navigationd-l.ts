// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yfa`) / export `dL`.

export type BindDeferredNavigationdLPeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Gfa: (...args: unknown[]) => unknown;
  Ufa: (...args: unknown[]) => unknown;
  VL: (...args: unknown[]) => unknown;
  _Xt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
};

let peers: BindDeferredNavigationdLPeers | null = null;

/** Wire bindDeferredNavigationdL peers once companions land. */
export function setBindDeferredNavigationdLPeers(next: BindDeferredNavigationdLPeers): void {
  peers = next;
}

/**
 * Bundle export `dL` / internal `Yfa`.
 */
export function bindDeferredNavigationdL() {
  if (peers == null) {
    throw new Error("bindDeferredNavigationdL peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.$u(), peers.Gfa(), peers.Ufa(), peers.VL(), peers.fb(), peers._Xt();
  });
}
