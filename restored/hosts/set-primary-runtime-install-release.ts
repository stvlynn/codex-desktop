// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fiu`) / export `Kn`.

export type BindSetPrimaryRuntimeInstallReleasePeers = {
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  diu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  riu: (...args: unknown[]) => unknown;
  uiu: (...args: unknown[]) => unknown;
};

let peers: BindSetPrimaryRuntimeInstallReleasePeers | null = null;

/** Wire bindSetPrimaryRuntimeInstallRelease peers once companions land. */
export function setBindSetPrimaryRuntimeInstallReleasePeers(next: BindSetPrimaryRuntimeInstallReleasePeers): void {
  peers = next;
}

/**
 * Bundle export `Kn` / internal `fiu`.
 */
export function bindSetPrimaryRuntimeInstallRelease() {
  if (peers == null) {
    throw new Error("bindSetPrimaryRuntimeInstallRelease peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), peers.K_(), peers.Gf(), peers.riu(), uiu = peers.Ta(peers.Q, null), diu = peers.Ta(peers.Q, `latest`);
  });
}
