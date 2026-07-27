// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cac`) / export `Vp`.

export type VpPeers = {
  A8s: (...args: unknown[]) => unknown;
  M8s: (...args: unknown[]) => unknown;
  N8s: (...args: unknown[]) => unknown;
  _ac: (...args: unknown[]) => unknown;
  vac: (...args: unknown[]) => unknown;
};
let peers: VpPeers | null = null;

/** Wire Vp peers once companions land. */
export function setVpPeers(next: VpPeers): void {
  peers = next;
}

/**
 * Bundle export `Vp` / internal `cac`.
 */
export function Vp(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("Vp peers are not configured");
  }
  let r = peers.N8s(t);
  e.get(peers._ac, r);
  e.set(peers._ac, r, {
    route: peers.A8s(n),
  });
  e.set(peers.vac, peers.M8s(t));
}
