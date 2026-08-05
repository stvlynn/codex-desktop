// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y0r`) / export `Qq`.

export type BindDeferredComposerQqPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerQqPeers | null = null;

/** Wire bindDeferredComposerQq peers once companions land. */
export function setBindDeferredComposerQqPeers(
  next: BindDeferredComposerQqPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qq` / internal `Y0r`.
 */
export function bindDeferredComposerQq() {
  if (peers == null) {
    throw new Error("bindDeferredComposerQq peers are not configured");
  }

  return peers.Ma(peers.GM, ({ get: e }) => e(peers.yN).aeonStartTarget);
}
