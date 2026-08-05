// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bN`) / export `tJ`.

export type BindDeferredComposerTJPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerTJPeers | null = null;

/** Wire bindDeferredComposerTJ peers once companions land. */
export function setBindDeferredComposerTJPeers(
  next: BindDeferredComposerTJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tJ` / internal `bN`.
 */
export function bindDeferredComposerTJ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerTJ peers are not configured");
  }

  return peers.Ma(peers.GM, ({ get: e }) => e(peers.yN).composerMode);
}
