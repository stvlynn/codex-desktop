// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Qr`) / export `uY`.

export type FormatQrCachedPeers = {
  fQr: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
};

let peers: FormatQrCachedPeers | null = null;

/** Wire formatQrCached peers once companions land. */
export function setFormatQrCachedPeers(next: FormatQrCachedPeers): void {
  peers = next;
}

/**
 * Bundle export `uY` / internal `_Qr`.
 */
export function formatQrCached(e: unknown) {
  if (peers == null) {
    throw new Error("formatQrCached peers are not configured");
  }

  let t = (0, peers.iN.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = peers.fQr(e)), (t[0] = e), (t[1] = n)),
    peers.jt(n)
  );
}
