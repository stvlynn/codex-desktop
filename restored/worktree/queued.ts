// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FKi`) / export `TV`.

export type BindQueuedPeers = {
  MKi: (...args: unknown[]) => unknown;
  NKi: (...args: unknown[]) => unknown;
  PKi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  mR: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindQueuedPeers | null = null;

/** Wire bindQueued peers once companions land. */
export function setBindQueuedPeers(next: BindQueuedPeers): void {
  peers = next;
}

/**
 * Bundle export `TV` / internal `FKi`.
 */
export function bindQueued() {
  if (peers == null) {
    throw new Error("bindQueued peers are not configured");
  }

  return peers.e(() => {
    MKi = peers.r(peers.o(), 1), NKi = new Set(), mR = new Map(), PKi = [];
  });
}
