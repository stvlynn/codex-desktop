// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gEs`) / export `Kv`.

export type BindDeferredKvPeers = {
  NZ: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  q_s: (...args: unknown[]) => unknown;
};

let peers: BindDeferredKvPeers | null = null;

/** Wire bindDeferredKv peers once companions land. */
export function setBindDeferredKvPeers(next: BindDeferredKvPeers): void {
  peers = next;
}

/**
 * Bundle export `Kv` / internal `gEs`.
 */
export function bindDeferredKv() {
  if (peers == null) {
    throw new Error("bindDeferredKv peers are not configured");
  }

  return peers.e(() => {
    peers.NZ(), peers.q_s();
  });
}
