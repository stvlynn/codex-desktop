// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fjl`) / export `$s`.

export type BindDeferredUiSPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  at: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  djl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiSPeers | null = null;

/** Wire bindDeferredUiS peers once companions land. */
export function setBindDeferredUiSPeers(next: BindDeferredUiSPeers): void {
  peers = next;
}

/**
 * Bundle export `$s` / internal `fjl`.
 */
export function bindDeferredUiS() {
  if (peers == null) {
    throw new Error("bindDeferredUiS peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    if (e == null) return !1;
    let n = t(peers.bD, e)?.at(-1);
    return n != null && n.status !== `inProgress` && t(peers.djl, e) == null;
  });
}
