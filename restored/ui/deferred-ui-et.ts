// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$5o`) / export `eT`.

export type BindDeferredUiETPeers = {
  FHa: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Q5o: (...args: unknown[]) => unknown;
  SQa: (...args: unknown[]) => unknown;
  X5o: (...args: unknown[]) => unknown;
  Z5o: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ju: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiETPeers | null = null;

/** Wire bindDeferredUiET peers once companions land. */
export function setBindDeferredUiETPeers(next: BindDeferredUiETPeers): void {
  peers = next;
}

/**
 * Bundle export `eT` / internal `$5o`.
 */
export function bindDeferredUiET() {
  if (peers == null) {
    throw new Error("bindDeferredUiET peers are not configured");
  }

  return peers.e(() => {
    X5o = peers.c(), Z5o = peers.r(peers.ju(), 1), peers.FHa(), peers.SQa(), Q5o = peers.J();
  });
}
