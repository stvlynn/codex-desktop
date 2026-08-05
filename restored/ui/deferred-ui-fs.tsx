// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `N8`) / export `fs`.

export type BindBindDeferredUiFsPeers = {
  J: (...args: unknown[]) => unknown;
  M8: (...args: unknown[]) => unknown;
  Nk: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nFl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  tFl: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiFsPeers | null = null;

/** Wire bindBindDeferredUiFs peers once companions land. */
export function setBindBindDeferredUiFsPeers(
  next: BindBindDeferredUiFsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fs` / internal `N8`.
 */
export function bindBindDeferredUiFs() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiFs peers are not configured");
  }

  return peers.e(() => {
    ((tFl = peers.c()),
      peers.sd(),
      peers.af(),
      (nFl = peers.r(peers.o(), 1)),
      peers.Nk(),
      (M8 = peers.J()));
  });
}
