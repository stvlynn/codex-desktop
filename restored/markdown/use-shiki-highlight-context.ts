// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Ica`) / export `jL`.

export type UseShikiHighlightContextPeers = {
  useContext: (context: unknown) => unknown;
  shikiHighlightContext: unknown;
};

let peers: UseShikiHighlightContextPeers | null = null;

/** Wire Shiki highlight context peers once companions land. */
export function setUseShikiHighlightContextPeers(
  next: UseShikiHighlightContextPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jL` / internal `Ica`.
 * Read the Shiki highlight React context.
 */
export function useShikiHighlightContext(): unknown {
  if (peers == null) {
    throw new Error("UseShikiHighlightContext peers are not configured");
  }
  return peers.useContext(peers.shikiHighlightContext);
}
