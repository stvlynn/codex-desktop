// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `s2r`) / export `eJ`.

export type BindDeferredComposerEJPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerEJPeers | null = null;

/** Wire bindDeferredComposerEJ peers once companions land. */
export function setBindDeferredComposerEJPeers(
  next: BindDeferredComposerEJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eJ` / internal `s2r`.
 */
export function bindDeferredComposerEJ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerEJ peers are not configured");
  }

  return peers.Ma(
    peers.GM,
    ({ get: e }) => e(peers.yN).followUpCloudStartingState,
  );
}
