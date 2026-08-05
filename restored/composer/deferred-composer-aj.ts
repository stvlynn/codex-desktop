// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `a2r`) / export `aJ`.

export type DeferredComposerAJPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: DeferredComposerAJPeers | null = null;

/** Wire deferredComposerAJ peers once companions land. */
export function setDeferredComposerAJPeers(
  next: DeferredComposerAJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aJ` / internal `a2r`.
 */
export function deferredComposerAJ() {
  if (peers == null) {
    throw new Error("deferredComposerAJ peers are not configured");
  }

  return peers.Ma(
    peers.GM,
    ({ get: e }) => e(peers.yN).pullRequestMergeConflict,
  );
}
