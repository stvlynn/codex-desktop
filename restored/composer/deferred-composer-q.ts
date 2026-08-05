// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `o2r`) / export `$q`.

export type BindDeferredComposerQPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredComposerQPeers | null = null;

/** Wire bindDeferredComposerQ peers once companions land. */
export function setBindDeferredComposerQPeers(
  next: BindDeferredComposerQPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$q` / internal `o2r`.
 */
export function bindDeferredComposerQ() {
  if (peers == null) {
    throw new Error("bindDeferredComposerQ peers are not configured");
  }

  return peers.Ma(
    peers.GM,
    ({ get: e }) => e(peers.yN).asyncThreadStartingState,
  );
}
