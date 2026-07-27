// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KAr`) / export `a$`.

export type BindDeferredUiAPeers = {
  Knr: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  WAr: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  mD: (...args: unknown[]) => unknown;
  pD: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiAPeers | null = null;

/** Wire bindDeferredUiA peers once companions land. */
export function setBindDeferredUiAPeers(next: BindDeferredUiAPeers): void {
  peers = next;
}

/**
 * Bundle export `a$` / internal `KAr`.
 */
export function bindDeferredUiA() {
  if (peers == null) {
    throw new Error("bindDeferredUiA peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => peers.WAr({
    pendingRequestType: t(peers.mD, e)?.type ?? null,
    requests: t(peers.pD, e),
    resumeState: t(peers.hD, e),
    threadRuntimeStatus: t(peers.Knr, e)
  }));
}
