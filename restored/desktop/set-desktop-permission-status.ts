// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MPc`) / export `Ef`.

export type EfPeers = {
  A2: (...args: unknown[]) => unknown;
  k2: (...args: unknown[]) => unknown;
};
let peers: EfPeers | null = null;

/** Wire Ef peers once companions land. */
export function setEfPeers(next: EfPeers): void {
  peers = next;
}

/**
 * Bundle export `Ef` / internal `MPc`.
 */
export function Ef(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("Ef peers are not configured");
  }
  e.set(peers.A2, {
    ...peers.k2(e),
    permissionStatus: t,
  });
}
