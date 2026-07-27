// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `q0r`) / export `oJ`.

export type BindDeferredComposerOJPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  xN: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerOJPeers | null = null;

/** Wire bindDeferredComposerOJ peers once companions land. */
export function setBindDeferredComposerOJPeers(next: BindDeferredComposerOJPeers): void {
  peers = next;
}

/**
 * Bundle export `oJ` / internal `q0r`.
 */
export function bindDeferredComposerOJ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerOJ peers are not configured");
  }

  return peers.Ma(peers.GM, ({
    get: e
  }) => ({
    ...e(peers.yN),
    prompt: e(peers.xN)
  }));
}
