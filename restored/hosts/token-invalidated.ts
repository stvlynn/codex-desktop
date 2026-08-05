// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_xu`) / export `F`.

export type BindTokenInvalidatedPeers = {
  RE: (...args: unknown[]) => unknown;
  cE: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gxu: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
};

let peers: BindTokenInvalidatedPeers | null = null;

/** Wire bindTokenInvalidated peers once companions land. */
export function setBindTokenInvalidatedPeers(
  next: BindTokenInvalidatedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `F` / internal `_xu`.
 */
export function bindTokenInvalidated() {
  if (peers == null) {
    throw new Error("bindTokenInvalidated peers are not configured");
  }

  return peers.e(() => {
    (peers.cE(), peers.ih(), peers.RE(), (gxu = `token_invalidated`));
  });
}
