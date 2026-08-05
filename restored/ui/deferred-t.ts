// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jSu`) / export `T`.

export type DeferredTPeers = {
  ASu: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: DeferredTPeers | null = null;

/** Wire deferredT peers once companions land. */
export function setDeferredTPeers(next: DeferredTPeers): void {
  peers = next;
}

/**
 * Bundle export `T` / internal `jSu`.
 */
export function deferredT() {
  if (peers == null) {
    throw new Error("deferredT peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(), peers.ed(), (ASu = peers.Ta(peers.Q, null)));
  });
}

// --- split/export lane aliases ---
export { deferredT as DeferredT };
