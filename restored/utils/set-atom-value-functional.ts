// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hN`) / export `pJ`.

export type PJPeers = {
  k0r: (...args: unknown[]) => unknown;
  xN: (...args: unknown[]) => unknown;
};
let peers: PJPeers | null = null;

/** Wire pJ peers once companions land. */
export function setPJPeers(next: PJPeers): void {
  peers = next;
}

/**
 * Bundle export `pJ` / internal `hN`.
 */
export function pJ(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("pJ peers are not configured");
  }
  let n = e.get(peers.xN),
    r = typeof t == "function" ? t(n) : t;
  Object.is(n, r) || peers.k0r(e, r);
}
