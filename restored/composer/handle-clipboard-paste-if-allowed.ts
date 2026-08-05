// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sua`) / export `bL`.

export type HandleClipboardPasteIfAllowedPeers = {
  Cua: (...args: unknown[]) => unknown;
};

let peers: HandleClipboardPasteIfAllowedPeers | null = null;

/** Wire handleClipboardPasteIfAllowed peers once companions land. */
export function setHandleClipboardPasteIfAllowedPeers(
  next: HandleClipboardPasteIfAllowedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bL` / internal `Sua`.
 */
export function handleClipboardPasteIfAllowed(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("handleClipboardPasteIfAllowed peers are not configured");
  }

  e.defaultPrevented || (peers.Cua(t, e.clipboardData) && e.preventDefault());
}
