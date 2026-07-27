// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aul`) / export `Lc`.

export type DeferredDefaultHelperPeers = {
  $6: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K1: (...args: unknown[]) => unknown;
  MWc: (...args: unknown[]) => unknown;
  S5c: (...args: unknown[]) => unknown;
  Vas: (...args: unknown[]) => unknown;
  XR: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iul: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  xB: (...args: unknown[]) => unknown;
};

let peers: DeferredDefaultHelperPeers | null = null;

/** Wire deferredDefaultHelper peers once companions land. */
export function setDeferredDefaultHelperPeers(next: DeferredDefaultHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `Lc` / internal `aul`.
 */
export function deferredDefaultHelper() {
  if (peers == null) {
    throw new Error("deferredDefaultHelper peers are not configured");
  }

  return peers.e(() => {
    iul = peers.c(), peers.sd(), peers.$u(), peers.xB(), peers.Vas(), peers.XR(), peers.S5c(), peers.K1(), peers.MWc(), $6 = peers.J();
  });
}
