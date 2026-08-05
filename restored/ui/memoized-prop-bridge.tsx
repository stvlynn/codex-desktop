// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MXi`) / export `HB`.

export type MemoizedPropBridgePeers = {
  FXi: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  IXi: (...args: unknown[]) => unknown;
  NXi: (...args: unknown[]) => unknown;
  PXi: (...args: unknown[]) => unknown;
};

let peers: MemoizedPropBridgePeers | null = null;

/** Wire MemoizedPropBridge peers once companions land. */
export function setMemoizedPropBridgePeers(
  next: MemoizedPropBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `HB` / internal `MXi`.
 */
export function MemoizedPropBridge(e: unknown) {
  if (peers == null) {
    throw new Error("MemoizedPropBridge peers are not configured");
  }

  let t = (0, peers.PXi.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e == null ? void 0 : (0, peers.FXi.default)(e.map(peers.NXi))),
        (t[0] = e),
        (t[1] = n)),
    peers.Fo(peers.IXi, n)
  );
}
