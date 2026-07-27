// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G0r`) / export `nJ`.

export type BindDeferredComposerNJPeers = {
  B$r: (...args: unknown[]) => unknown;
  GM: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  bN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerNJPeers | null = null;

/** Wire bindDeferredComposerNJ peers once companions land. */
export function setBindDeferredComposerNJPeers(next: BindDeferredComposerNJPeers): void {
  peers = next;
}

/**
 * Bundle export `nJ` / internal `G0r`.
 */
export function bindDeferredComposerNJ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerNJ peers are not configured");
  }

  return peers.Oa(peers.GM, (e, {
    get: t
  }) => e == null ? t(peers.bN) : t(peers.B$r, e));
}
