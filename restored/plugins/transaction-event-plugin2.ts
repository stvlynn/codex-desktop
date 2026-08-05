// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lni`) / export `WW`.

export type BindTransactionEventPlugin2Peers = {
  HS: (...args: unknown[]) => unknown;
  US: (...args: unknown[]) => unknown;
  cni: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sni: (...args: unknown[]) => unknown;
};

let peers: BindTransactionEventPlugin2Peers | null = null;

/** Wire bindTransactionEventPlugin2 peers once companions land. */
export function setBindTransactionEventPlugin2Peers(
  next: BindTransactionEventPlugin2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `WW` / internal `lni`.
 */
export function bindTransactionEventPlugin2() {
  if (peers == null) {
    throw new Error("bindTransactionEventPlugin2 peers are not configured");
  }

  return peers.e(() => {
    (peers.US(),
      (sni = new peers.HS(`transactionEventPlugin`)),
      (cni = `prosemirrorDispatchTransaction`));
  });
}
