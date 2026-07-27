// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RPt`) / export `tat`.

export type DeferredTatPeers = {
  IPt: (...args: unknown[]) => unknown;
  LPt: (...args: unknown[]) => unknown;
  _v: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gv: (...args: unknown[]) => unknown;
  hv: (...args: unknown[]) => unknown;
  jPt: (...args: unknown[]) => unknown;
  mv: (...args: unknown[]) => unknown;
  vv: (...args: unknown[]) => unknown;
};

let peers: DeferredTatPeers | null = null;

/** Wire deferredTat peers once companions land. */
export function setDeferredTatPeers(next: DeferredTatPeers): void {
  peers = next;
}

/**
 * Bundle export `tat` / internal `RPt`.
 */
export function deferredTat() {
  if (peers == null) {
    throw new Error("deferredTat peers are not configured");
  }

  return peers.e(() => {
    peers.hv(), peers.jPt(), IPt = peers.mv(e => {
      peers.e.setTime(peers.e - peers.e.getMilliseconds() - peers.e.getSeconds() * peers.gv - peers.e.getMinutes() * peers._v);
    }, (e, t) => {
      peers.e.setTime(+peers.e + t * peers.vv);
    }, (e, t) => (t - peers.e) / peers.vv, e => peers.e.getHours()), peers.IPt.range, LPt = peers.mv(e => {
      peers.e.setUTCMinutes(0, 0, 0);
    }, (e, t) => {
      peers.e.setTime(+peers.e + t * peers.vv);
    }, (e, t) => (t - peers.e) / peers.vv, e => peers.e.getUTCHours()), peers.LPt.range;
  });
}
