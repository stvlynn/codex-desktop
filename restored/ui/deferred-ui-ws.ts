// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BMl`) / export `Ws`.

export type BindDeferredUiWsPeers = {
  Ta: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWsPeers | null = null;

/** Wire bindDeferredUiWs peers once companions land. */
export function setBindDeferredUiWsPeers(next: BindDeferredUiWsPeers): void {
  peers = next;
}

/**
 * Bundle export `Ws` / internal `BMl`.
 */
export function bindDeferredUiWs() {
  if (peers == null) {
    throw new Error("bindDeferredUiWs peers are not configured");
  }

  return peers.Ta(peers.j2, []);
}
