// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `t5n`) / export `t3`.

export type BindDeferredHostsT3Peers = {
  Fl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsT3Peers | null = null;

/** Wire bindDeferredHostsT3 peers once companions land. */
export function setBindDeferredHostsT3Peers(next: BindDeferredHostsT3Peers): void {
  peers = next;
}

/**
 * Bundle export `t3` / internal `t5n`.
 */
export function bindDeferredHostsT3() {
  if (peers == null) {
    throw new Error("bindDeferredHostsT3 peers are not configured");
  }

  return peers.Ma(
    peers.Q,
    ({ get: e }) => peers.sp(e, peers.Fl.LOCAL_PROJECTS) ?? {},
  );
}
