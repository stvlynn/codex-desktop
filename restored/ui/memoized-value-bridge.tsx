// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hQa`) / export `Bj`.

export type MemoizedValueBridgePeers = {
  _Qa: (...args: unknown[]) => unknown;
  dQa: (...args: unknown[]) => unknown;
  gQa: (...args: unknown[]) => unknown;
  vQa: (...args: unknown[]) => unknown;
};

let peers: MemoizedValueBridgePeers | null = null;

/** Wire MemoizedValueBridge peers once companions land. */
export function setMemoizedValueBridgePeers(
  next: MemoizedValueBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Bj` / internal `hQa`.
 */
export function MemoizedValueBridge(e: unknown) {
  if (peers == null) {
    throw new Error("MemoizedValueBridge peers are not configured");
  }

  let t = (0, peers._Qa.c)(4),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = (t) => peers.gQa(e, t)), (t[0] = e), (t[1] = n));
  let r = n,
    i;
  return (
    t[2] === e
      ? (i = t[3])
      : ((i = () => peers.dQa(e)), (t[2] = e), (t[3] = i)),
    (0, peers.vQa.useSyncExternalStore)(r, i)
  );
}
