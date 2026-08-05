// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JAr`) / export `r$`.

export type BindBindDeferredUiRPeers = {
  DA: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  arr: (...args: unknown[]) => unknown;
  gD: (...args: unknown[]) => unknown;
  kSt: (...args: unknown[]) => unknown;
  qnr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiRPeers | null = null;

/** Wire bindBindDeferredUiR peers once companions land. */
export function setBindBindDeferredUiRPeers(
  next: BindBindDeferredUiRPeers,
): void {
  peers = next;
}

/**
 * Bundle export `r$` / internal `JAr`.
 */
export function bindBindDeferredUiR() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiR peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    if (e == null) return null;
    let n = t(peers.DA, e);
    if (n != null) return n;
    let r = t(peers.gD, e);
    return peers.kSt(e, t(peers.arr, r) ?? t(peers.qnr, r));
  });
}
