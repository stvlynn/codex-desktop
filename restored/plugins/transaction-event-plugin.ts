// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ani`) / export `KW`.

export type BindTransactionEventPluginPeers = {
  e: (...args: unknown[]) => unknown;
  ini: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rni: (...args: unknown[]) => unknown;
};

let peers: BindTransactionEventPluginPeers | null = null;

/** Wire bindTransactionEventPlugin peers once companions land. */
export function setBindTransactionEventPluginPeers(
  next: BindTransactionEventPluginPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KW` / internal `ani`.
 */
export function bindTransactionEventPlugin() {
  if (peers == null) {
    throw new Error("bindTransactionEventPlugin peers are not configured");
  }

  return peers.e(() => {
    ((rni = peers.r(peers.o(), 1)), (ini = (0, peers.rni.createContext)(null)));
  });
}
