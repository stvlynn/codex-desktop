// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uos`) / export `FS`.

export type ComposerNavigationPeers = {
  Hos: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: ComposerNavigationPeers | null = null;

/** Wire composerNavigation peers once companions land. */
export function setComposerNavigationPeers(
  next: ComposerNavigationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `FS` / internal `Uos`.
 */
export function composerNavigation() {
  if (peers == null) {
    throw new Error("composerNavigation peers are not configured");
  }

  return peers.e(() => {
    Hos = `ComposerNavigation`;
  });
}
