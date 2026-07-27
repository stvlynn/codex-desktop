// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g1o`) / export `nE`.

export type DeferredUiNEPeers = {
  T1o: (...args: unknown[]) => unknown;
};

let peers: DeferredUiNEPeers | null = null;

/** Wire deferredUiNE peers once companions land. */
export function setDeferredUiNEPeers(next: DeferredUiNEPeers): void {
  peers = next;
}

/**
 * Bundle export `nE` / internal `g1o`.
 */
export function deferredUiNE() {
  if (peers == null) {
    throw new Error("deferredUiNE peers are not configured");
  }

  return [...peers.T1o];
}
