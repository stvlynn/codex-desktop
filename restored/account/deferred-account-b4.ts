// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_er`) / export `b4`.

export type DeferredAccountB4Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  her: (...args: unknown[]) => unknown;
  mer: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountB4Peers | null = null;

/** Wire deferredAccountB4 peers once companions land. */
export function setDeferredAccountB4Peers(next: DeferredAccountB4Peers): void {
  peers = next;
}

/**
 * Bundle export `b4` / internal `_er`.
 */
export function deferredAccountB4() {
  if (peers == null) {
    throw new Error("deferredAccountB4 peers are not configured");
  }
  return peers.Ta(peers.Q, peers.her, {
    isEqual: peers.mer.default
  });
}
