// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `M_`) / export `Yot`.

export type BindDeferredYotPeers = {
  GEt: (...args: unknown[]) => unknown;
  KEt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qEt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredYotPeers | null = null;

/** Wire bindDeferredYot peers once companions land. */
export function setBindDeferredYotPeers(next: BindDeferredYotPeers): void {
  peers = next;
}

/**
 * Bundle export `Yot` / internal `M_`.
 */
export function bindDeferredYot() {
  if (peers == null) {
    throw new Error("bindDeferredYot peers are not configured");
  }

  return peers.e(() => {
    GEt = `PLEASE IMPLEMENT THIS PLAN:`, KEt = `item/plan/requestImplementation`, qEt = `implement-plan:`;
  });
}
