// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hOs`) / export `jv`.

export type DeferredAccountJv3Peers = {
  Q: (...args: unknown[]) => unknown;
  fOs: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountJv3Peers | null = null;

/** Wire DeferredAccountJv3 peers once companions land. */
export function setDeferredAccountJv3Peers(
  next: DeferredAccountJv3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `jv` / internal `hOs`.
 */
export function DeferredAccountJv3() {
  if (peers == null) {
    throw new Error("DeferredAccountJv3 peers are not configured");
  }
  return peers.ka(peers.Q, (e) => peers.fOs(e, !1));
}
