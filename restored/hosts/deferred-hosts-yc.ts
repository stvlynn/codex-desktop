// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hts`) / export `YC`.

export type BindDeferredHostsYCPeers = {
  $x: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  VE: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsYCPeers | null = null;

/** Wire bindDeferredHostsYC peers once companions land. */
export function setBindDeferredHostsYCPeers(
  next: BindDeferredHostsYCPeers,
): void {
  peers = next;
}

/**
 * Bundle export `YC` / internal `hts`.
 */
export function bindDeferredHostsYC() {
  if (peers == null) {
    throw new Error("bindDeferredHostsYC peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(), peers.$x(), peers.Fh(), peers.VE());
  });
}
