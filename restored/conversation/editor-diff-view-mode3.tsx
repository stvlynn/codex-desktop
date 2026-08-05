// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DFi`) / export `fW`.

export type BindBindEditorDiffViewMode3Peers = {
  Pm: (...args: unknown[]) => unknown;
  SFi: (...args: unknown[]) => unknown;
};

let peers: BindBindEditorDiffViewMode3Peers | null = null;

/** Wire bindBindEditorDiffViewMode3 peers once companions land. */
export function setBindBindEditorDiffViewMode3Peers(
  next: BindBindEditorDiffViewMode3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `fW` / internal `DFi`.
 */
export function bindBindEditorDiffViewMode3() {
  if (peers == null) {
    throw new Error("bindBindEditorDiffViewMode3 peers are not configured");
  }

  return peers.Pm(peers.SFi, !1);
}
