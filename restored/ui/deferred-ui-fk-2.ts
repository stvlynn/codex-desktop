// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IEo`) / export `fk`.

export type BindDeferredUiFkPeers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiFkPeers | null = null;

/** Wire bindDeferredUiFk peers once companions land. */
export function setBindDeferredUiFkPeers(next: BindDeferredUiFkPeers): void {
  peers = next;
}

/**
 * Bundle export `fk` / internal `IEo`.
 */
export function bindDeferredUiFk() {
  if (peers == null) {
    throw new Error("bindDeferredUiFk peers are not configured");
  }

  return peers.tp(peers.Q, `paths-exist`, () => ({
    staleTime: peers.Hf.FIVE_SECONDS,
  }));
}
