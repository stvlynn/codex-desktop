// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `diu`) / export `Jn`.

export type SetPrimaryRuntimeInstallRelease2Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: SetPrimaryRuntimeInstallRelease2Peers | null = null;

/** Wire setPrimaryRuntimeInstallRelease2 peers once companions land. */
export function setSetPrimaryRuntimeInstallRelease2Peers(next: SetPrimaryRuntimeInstallRelease2Peers): void {
  peers = next;
}

/**
 * Bundle export `Jn` / internal `diu`.
 */
export function setPrimaryRuntimeInstallRelease2() {
  if (peers == null) {
    throw new Error("setPrimaryRuntimeInstallRelease2 peers are not configured");
  }

  return peers.Ta(peers.Q, `latest`);
}
