// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mKr`) / export `NX`.

export type FkrDataBridgePeers = {
  Y: (...args: unknown[]) => unknown;
  fKr: (...args: unknown[]) => unknown;
  hKr: (...args: unknown[]) => unknown;
};

let peers: FkrDataBridgePeers | null = null;

/** Wire FkrDataBridge peers once companions land. */
export function setFkrDataBridgePeers(next: FkrDataBridgePeers): void {
  peers = next;
}

/**
 * Bundle export `NX` / internal `mKr`.
 */
export function FkrDataBridge() {
  if (peers == null) {
    throw new Error("FkrDataBridge peers are not configured");
  }

  let e = (0, peers.hKr.c)(3),
    t = peers.Y(peers.fKr),
    n;
  return (
    e[0] !== t.data || e[1] !== t.isLoading
      ? ((n = {
          data: t.data,
          isLoading: t.isLoading,
        }),
        (e[0] = t.data),
        (e[1] = t.isLoading),
        (e[2] = n))
      : (n = e[2]),
    n
  );
}
