// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qJr`) / export `tX`.

export type DeferredAccountTx3Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  xp: (...args: unknown[]) => unknown;
  Tu: { enabledReasoningEfforts: unknown; [k: string]: unknown };
};

let peers: DeferredAccountTx3Peers | null = null;

/** Wire DeferredAccountTx3 peers once companions land. */
export function setDeferredAccountTx3Peers(next: DeferredAccountTx3Peers): void {
  peers = next;
}

/**
 * Bundle export `tX` / internal `qJr`.
 */
export function DeferredAccountTx3() {
  if (peers == null) {
    throw new Error("DeferredAccountTx3 peers are not configured");
  }
  return peers.Ma(peers.Q, ({
    get: e
  }) => new Set(peers.xp(e, peers.Tu.enabledReasoningEfforts)));
}
