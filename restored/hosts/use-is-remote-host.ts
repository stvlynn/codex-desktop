// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RZ`) / export `Lb`.

export type UseIsRemoteHostPeers = {
  SD: (...args: unknown[]) => unknown;
  W_: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
};

let peers: UseIsRemoteHostPeers | null = null;

/** Wire useIsRemoteHost peers once companions land. */
export function setUseIsRemoteHostPeers(next: UseIsRemoteHostPeers): void {
  peers = next;
}

/**
 * Bundle export `Lb` / internal `RZ`.
 */
export function useIsRemoteHost() {
  if (peers == null) {
    throw new Error("useIsRemoteHost peers are not configured");
  }

  return peers.W_(peers.Y(peers.SD)).kind !== `local`;
}
