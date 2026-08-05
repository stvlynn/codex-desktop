// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wE`) / export `o3`.

export type BindDeferredHostsO3Peers = {
  H_: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  P: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsO3Peers | null = null;

/** Wire bindDeferredHostsO3 peers once companions land. */
export function setBindDeferredHostsO3Peers(
  next: BindDeferredHostsO3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `o3` / internal `wE`.
 */
export function bindDeferredHostsO3() {
  if (peers == null) {
    throw new Error("bindDeferredHostsO3 peers are not configured");
  }

  return peers.ep(peers.Q, `workspace-root-options`, {
    params: {
      hostId: peers.H_,
    },
    placeholderData: peers.P,
    staleTime: peers.Hf.INFINITE,
  });
}
