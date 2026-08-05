// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hN`) / export `setAtomValueFunctional`.

export type AtomValueFunctionalPeers = {
  k0r: (...args: unknown[]) => unknown;
  xN: (...args: unknown[]) => unknown;
};
let peers: AtomValueFunctionalPeers | null = null;

/** Wire setAtomValueFunctional peers once companions land. */
export function setAtomValueFunctionalPeers(
  next: AtomValueFunctionalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `setAtomValueFunctional` / internal `hN`.
 */
export function setAtomValueFunctional(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setAtomValueFunctional peers are not configured");
  }
  let n = e.get(peers.xN),
    r = typeof t == "function" ? t(n) : t;
  Object.is(n, r) || peers.k0r(e, r);
}
