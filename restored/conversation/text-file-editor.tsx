// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bho`) / export `oj`.

export type BindBindTextFileEditorPeers = {
  e: (...args: unknown[]) => unknown;
  yho: (...args: unknown[]) => unknown;
};

let peers: BindBindTextFileEditorPeers | null = null;

/** Wire bindBindTextFileEditor peers once companions land. */
export function setBindBindTextFileEditorPeers(
  next: BindBindTextFileEditorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `oj` / internal `bho`.
 */
export function bindBindTextFileEditor() {
  if (peers == null) {
    throw new Error("bindBindTextFileEditor peers are not configured");
  }

  return peers.e(() => {
    yho = `text-file-editor`;
  });
}
