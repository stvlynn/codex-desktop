// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KMl`) / export `Hs`.

export type BindDeferredUiHsPeers = {
  GMl: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
  taskId: (...args: unknown[]) => unknown;
  zMl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHsPeers | null = null;

/** Wire bindDeferredUiHs peers once companions land. */
export function setBindDeferredUiHsPeers(next: BindDeferredUiHsPeers): void {
  peers = next;
}

/**
 * Bundle export `Hs` / internal `KMl`.
 */
export function bindDeferredUiHs() {
  if (peers == null) {
    throw new Error("bindDeferredUiHs peers are not configured");
  }

  return peers.Oa(peers.j2, (e, {
    get: t
  }) => {
    let n = t(peers.zMl);
    return n?.taskId === e ? n.entry : t(peers.GMl, e);
  });
}
