// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RCu`) / export `c`.

export type DeferredAccountCPeers = {
  ICu: (...args: unknown[]) => unknown;
  LCu: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountCPeers | null = null;

/** Wire deferredAccountC peers once companions land. */
export function setDeferredAccountCPeers(next: DeferredAccountCPeers): void {
  peers = next;
}

/**
 * Bundle export `c` / internal `RCu`.
 */
export function deferredAccountC() {
  if (peers == null) {
    throw new Error("deferredAccountC peers are not configured");
  }
  return peers.Pm(peers.ICu, peers.LCu);
}
