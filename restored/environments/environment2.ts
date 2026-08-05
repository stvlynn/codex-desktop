// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kXr`) / export `OY`.

export type BindEnvironment2Peers = {
  GM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  OXr: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qM: (...args: unknown[]) => unknown;
};

let peers: BindEnvironment2Peers | null = null;

/** Wire bindEnvironment2 peers once companions land. */
export function setBindEnvironment2Peers(next: BindEnvironment2Peers): void {
  peers = next;
}

/**
 * Bundle export `OY` / internal `kXr`.
 */
export function bindEnvironment2() {
  if (peers == null) {
    throw new Error("bindEnvironment2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.KM(),
      (qM = peers.Ta(peers.GM, !1)),
      (OXr = peers.Ta(peers.GM, null)));
  });
}
