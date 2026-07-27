// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sFt`) / export `Uit`.

export type BindDeferredUiUitPeers = {
  aFt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hv: (...args: unknown[]) => unknown;
  mv: (...args: unknown[]) => unknown;
  oFt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiUitPeers | null = null;

/** Wire bindDeferredUiUit peers once companions land. */
export function setBindDeferredUiUitPeers(next: BindDeferredUiUitPeers): void {
  peers = next;
}

/**
 * Bundle export `Uit` / internal `sFt`.
 */
export function bindDeferredUiUit() {
  if (peers == null) {
    throw new Error("bindDeferredUiUit peers are not configured");
  }

  return peers.e(() => {
    peers.hv(), aFt = peers.mv(e => {
      peers.e.setDate(1), peers.e.setHours(0, 0, 0, 0);
    }, (e, t) => {
      peers.e.setMonth(peers.e.getMonth() + t);
    }, (e, t) => t.getMonth() - peers.e.getMonth() + (t.getFullYear() - peers.e.getFullYear()) * 12, e => peers.e.getMonth()), peers.aFt.range, oFt = peers.mv(e => {
      peers.e.setUTCDate(1), peers.e.setUTCHours(0, 0, 0, 0);
    }, (e, t) => {
      peers.e.setUTCMonth(peers.e.getUTCMonth() + t);
    }, (e, t) => t.getUTCMonth() - peers.e.getUTCMonth() + (t.getUTCFullYear() - peers.e.getUTCFullYear()) * 12, e => peers.e.getUTCMonth()), peers.oFt.range;
  });
}
