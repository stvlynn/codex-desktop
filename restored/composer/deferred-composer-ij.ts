// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `i2r`) / export `iJ`.

export type BindDeferredComposerIJPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerIJPeers | null = null;

/** Wire bindDeferredComposerIJ peers once companions land. */
export function setBindDeferredComposerIJPeers(
  next: BindDeferredComposerIJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `iJ` / internal `i2r`.
 */
export function bindDeferredComposerIJ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerIJ peers are not configured");
  }

  return peers.Ma(peers.GM, ({ get: e }) => e(peers.yN).pullRequestChecks);
}
