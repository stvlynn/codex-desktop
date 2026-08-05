// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RZl`) / export `va`.

export type BindDeferredUiVaPeers = {
  $u: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  LZl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o7: (...args: unknown[]) => unknown;
  q9s: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiVaPeers | null = null;

/** Wire bindDeferredUiVa peers once companions land. */
export function setBindDeferredUiVaPeers(next: BindDeferredUiVaPeers): void {
  peers = next;
}

/**
 * Bundle export `va` / internal `RZl`.
 */
export function bindDeferredUiVa() {
  if (peers == null) {
    throw new Error("bindDeferredUiVa peers are not configured");
  }

  return peers.e(() => {
    ((LZl = peers.c()), peers.sd(), peers.$u(), peers.q9s(), (o7 = peers.J()));
  });
}
