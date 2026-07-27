// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xE`) / export `Z4`.

export type BindDeferredHostsZ4Peers = {
  Hf: (...args: unknown[]) => unknown;
  P: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsZ4Peers | null = null;

/** Wire bindDeferredHostsZ4 peers once companions land. */
export function setBindDeferredHostsZ4Peers(next: BindDeferredHostsZ4Peers): void {
  peers = next;
}

/**
 * Bundle export `Z4` / internal `xE`.
 */
export function bindDeferredHostsZ4() {
  if (peers == null) {
    throw new Error("bindDeferredHostsZ4 peers are not configured");
  }

  return peers.ep(peers.Q, `active-workspace-roots`, {
    placeholderData: peers.P,
    staleTime: peers.Hf.FIVE_SECONDS,
  });
}
