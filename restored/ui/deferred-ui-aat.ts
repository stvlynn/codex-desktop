// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MPt`) / export `aat`.

export type BindDeferredUiAatPeers = {
  bv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gv: (...args: unknown[]) => unknown;
  hv: (...args: unknown[]) => unknown;
  jPt: (...args: unknown[]) => unknown;
  mv: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiAatPeers | null = null;

/** Wire bindDeferredUiAat peers once companions land. */
export function setBindDeferredUiAatPeers(next: BindDeferredUiAatPeers): void {
  peers = next;
}

/**
 * Bundle export `aat` / internal `MPt`.
 */
export function bindDeferredUiAat() {
  if (peers == null) {
    throw new Error("bindDeferredUiAat peers are not configured");
  }

  return peers.e(() => {
    peers.hv(), peers.jPt(), bv = peers.mv(e => {
      peers.e.setTime(peers.e - peers.e.getMilliseconds());
    }, (e, t) => {
      peers.e.setTime(+peers.e + t * peers.gv);
    }, (e, t) => (t - peers.e) / peers.gv, e => peers.e.getUTCSeconds()), peers.bv.range;
  });
}
