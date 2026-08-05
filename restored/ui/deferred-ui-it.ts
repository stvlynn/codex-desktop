// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HPt`) / export `$it`.

export type BindDeferredUiItPeers = {
  BPt: (...args: unknown[]) => unknown;
  VPt: (...args: unknown[]) => unknown;
  _v: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hv: (...args: unknown[]) => unknown;
  jPt: (...args: unknown[]) => unknown;
  mv: (...args: unknown[]) => unknown;
  yv: (...args: unknown[]) => unknown;
  zPt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiItPeers | null = null;

/** Wire bindDeferredUiIt peers once companions land. */
export function setBindDeferredUiItPeers(next: BindDeferredUiItPeers): void {
  peers = next;
}

/**
 * Bundle export `$it` / internal `HPt`.
 */
export function bindDeferredUiIt() {
  if (peers == null) {
    throw new Error("bindDeferredUiIt peers are not configured");
  }

  return peers.e(() => {
    (peers.hv(),
      peers.jPt(),
      (zPt = peers.mv(
        (e) => peers.e.setHours(0, 0, 0, 0),
        (e, t) => peers.e.setDate(peers.e.getDate() + t),
        (e, t) =>
          (t -
            peers.e -
            (t.getTimezoneOffset() - peers.e.getTimezoneOffset()) * peers._v) /
          peers.yv,
        (e) => peers.e.getDate() - 1,
      )),
      peers.zPt.range,
      (BPt = peers.mv(
        (e) => {
          peers.e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          peers.e.setUTCDate(peers.e.getUTCDate() + t);
        },
        (e, t) => (t - peers.e) / peers.yv,
        (e) => peers.e.getUTCDate() - 1,
      )),
      peers.BPt.range,
      (VPt = peers.mv(
        (e) => {
          peers.e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          peers.e.setUTCDate(peers.e.getUTCDate() + t);
        },
        (e, t) => (t - peers.e) / peers.yv,
        (e) => Math.floor(peers.e / peers.yv),
      )),
      peers.VPt.range);
  });
}
