// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nni`) / export `XW`.

export type BindBindTransactionEventPluginPeers = {
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  tni: (...args: unknown[]) => unknown;
};

let peers: BindBindTransactionEventPluginPeers | null = null;

/** Wire bindBindTransactionEventPlugin peers once companions land. */
export function setBindBindTransactionEventPluginPeers(
  next: BindBindTransactionEventPluginPeers,
): void {
  peers = next;
}

/**
 * Bundle export `XW` / internal `nni`.
 */
export function bindBindTransactionEventPlugin() {
  if (peers == null) {
    throw new Error("bindBindTransactionEventPlugin peers are not configured");
  }

  return peers.e(() => {
    ((tni = peers.c()), peers.Qt(), peers._p(), peers.Uf());
  });
}
