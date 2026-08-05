// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bts`) / export `qC`.

export type BindBindDeferredqCPeers = {
  YN: (...args: unknown[]) => unknown;
  _ts: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  its: (...args: unknown[]) => unknown;
  tP: (...args: unknown[]) => unknown;
  vts: (...args: unknown[]) => unknown;
  wz: (...args: unknown[]) => unknown;
  yts: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredqCPeers | null = null;

/** Wire bindBindDeferredqC peers once companions land. */
export function setBindBindDeferredqCPeers(
  next: BindBindDeferredqCPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qC` / internal `bts`.
 */
export function bindBindDeferredqC() {
  if (peers == null) {
    throw new Error("bindBindDeferredqC peers are not configured");
  }

  return peers.e(() => {
    ((_ts = peers.c()),
      peers.YN(),
      peers.tP(),
      peers.wz(),
      peers.its(),
      (vts = []),
      (yts = {
        apps: [],
        plugins: [],
        skills: [],
      }));
  });
}
