// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `w0s`) / export `Vh`.

export type BindDeferredHostsVhPeers = {
  B3i: (...args: unknown[]) => unknown;
  C0s: (...args: unknown[]) => unknown;
  K3r: (...args: unknown[]) => unknown;
  RN: (...args: unknown[]) => unknown;
  Zes: (...args: unknown[]) => unknown;
  _Z: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cFa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  mes: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsVhPeers | null = null;

/** Wire bindDeferredHostsVh peers once companions land. */
export function setBindDeferredHostsVhPeers(next: BindDeferredHostsVhPeers): void {
  peers = next;
}

/**
 * Bundle export `Vh` / internal `w0s`.
 */
export function bindDeferredHostsVh() {
  if (peers == null) {
    throw new Error("bindDeferredHostsVh peers are not configured");
  }

  return peers.e(() => {
    C0s = peers.c(), peers._Z(), peers.mes(), peers.RN(), peers.K3r(), peers.cFa(), peers.B3i(), peers.Zes();
  });
}
