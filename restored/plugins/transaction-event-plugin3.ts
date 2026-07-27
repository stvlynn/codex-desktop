// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ini`) / export `GW`.

export type BindTransactionEventPlugin3Peers = {
  rni: (...args: unknown[]) => unknown;
};

let peers: BindTransactionEventPlugin3Peers | null = null;

/** Wire bindTransactionEventPlugin3 peers once companions land. */
export function setBindTransactionEventPlugin3Peers(next: BindTransactionEventPlugin3Peers): void {
  peers = next;
}

/**
 * Bundle export `GW` / internal `ini`.
 */
export function bindTransactionEventPlugin3() {
  if (peers == null) {
    throw new Error("bindTransactionEventPlugin3 peers are not configured");
  }

  return (0, peers.rni.createContext)(null);
}
