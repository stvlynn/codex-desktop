// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `R6n`) / export `x3`.

export type BindDeferredHostsX3Peers = {
  L6n: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  sE: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsX3Peers | null = null;

/** Wire bindDeferredHostsX3 peers once companions land. */
export function setBindDeferredHostsX3Peers(
  next: BindDeferredHostsX3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `x3` / internal `R6n`.
 */
export function bindDeferredHostsX3() {
  if (peers == null) {
    throw new Error("bindDeferredHostsX3 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.sE, e);
    return (
      !t(peers.L6n, e) &&
      (n?.status === `connecting` || n?.status === `connected`)
    );
  });
}
