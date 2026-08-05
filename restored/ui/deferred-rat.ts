// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FPt`) / export `rat`.

export type DeferredRatPeers = {
  NPt: (...args: unknown[]) => unknown;
  PPt: (...args: unknown[]) => unknown;
  _v: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gv: (...args: unknown[]) => unknown;
  hv: (...args: unknown[]) => unknown;
  jPt: (...args: unknown[]) => unknown;
  mv: (...args: unknown[]) => unknown;
};

let peers: DeferredRatPeers | null = null;

/** Wire deferredRat peers once companions land. */
export function setDeferredRatPeers(next: DeferredRatPeers): void {
  peers = next;
}

/**
 * Bundle export `rat` / internal `FPt`.
 */
export function deferredRat() {
  if (peers == null) {
    throw new Error("deferredRat peers are not configured");
  }

  return peers.e(() => {
    (peers.hv(),
      peers.jPt(),
      (NPt = peers.mv(
        (e) => {
          peers.e.setTime(
            peers.e -
              peers.e.getMilliseconds() -
              peers.e.getSeconds() * peers.gv,
          );
        },
        (e, t) => {
          peers.e.setTime(+peers.e + t * peers._v);
        },
        (e, t) => (t - peers.e) / peers._v,
        (e) => peers.e.getMinutes(),
      )),
      peers.NPt.range,
      (PPt = peers.mv(
        (e) => {
          peers.e.setUTCSeconds(0, 0);
        },
        (e, t) => {
          peers.e.setTime(+peers.e + t * peers._v);
        },
        (e, t) => (t - peers.e) / peers._v,
        (e) => peers.e.getUTCMinutes(),
      )),
      peers.PPt.range);
  });
}
