// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `_Qr`) / export `uY`.

export type FormatQrCachedPeers = {
  formatQr: (value: unknown) => unknown;
  useQuery: (opts: unknown) => unknown;
};

let peers: FormatQrCachedPeers | null = null;

/** Wire formatQrCached peers once companions land. */
export function setFormatQrCachedPeers(next: FormatQrCachedPeers): void {
  peers = next;
}

/**
 * Bundle export `uY` / internal `_Qr`.
 * Format a QR payload with a memoized query wrapper.
 */
export function formatQrCached(value: unknown): unknown {
  if (peers == null) {
    throw new Error("FormatQrCached peers are not configured");
  }
  return peers.useQuery(peers.formatQr(value));
}
