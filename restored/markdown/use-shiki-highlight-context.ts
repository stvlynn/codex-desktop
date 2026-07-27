// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ica`) / export `jL`.

export type UseShikiHighlightContextPeers = {
  Lca: (...args: unknown[]) => unknown;
  zca: (...args: unknown[]) => unknown;
};

let peers: UseShikiHighlightContextPeers | null = null;

/** Wire useShikiHighlightContext peers once companions land. */
export function setUseShikiHighlightContextPeers(next: UseShikiHighlightContextPeers): void {
  peers = next;
}

/**
 * Bundle export `jL` / internal `Ica`.
 */
export function useShikiHighlightContext() {
  if (peers == null) {
    throw new Error("useShikiHighlightContext peers are not configured");
  }

  return (0, peers.Lca.useContext)(peers.zca);
}
