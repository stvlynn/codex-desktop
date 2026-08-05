// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OFi`) / export `dW`.

export type BindBindEditorDiffViewMode2Peers = {
  CFi: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
};

let peers: BindBindEditorDiffViewMode2Peers | null = null;

/** Wire bindBindEditorDiffViewMode2 peers once companions land. */
export function setBindBindEditorDiffViewMode2Peers(
  next: BindBindEditorDiffViewMode2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `dW` / internal `OFi`.
 */
export function bindBindEditorDiffViewMode2() {
  if (peers == null) {
    throw new Error("bindBindEditorDiffViewMode2 peers are not configured");
  }

  return peers.Pm(peers.CFi, !1);
}
