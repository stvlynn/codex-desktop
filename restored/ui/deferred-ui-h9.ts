// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `E0t`) / export `H9`.

export type BindDeferredUiH9Peers = {
  Hb: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  S0t: (...args: unknown[]) => unknown;
  T0t: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  z_: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiH9Peers | null = null;

/** Wire bindDeferredUiH9 peers once companions land. */
export function setBindDeferredUiH9Peers(next: BindDeferredUiH9Peers): void {
  peers = next;
}

/**
 * Bundle export `H9` / internal `E0t`.
 */
export function bindDeferredUiH9() {
  if (peers == null) {
    throw new Error("bindDeferredUiH9 peers are not configured");
  }

  return peers.e(() => {
    peers.Hb(), peers.Kb(), peers.z_(), peers.S0t(), T0t = new Set([`disconnected`, `connecting`, `error`, `connected`]);
  });
}
