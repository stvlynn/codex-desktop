// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SE`) / export `Y4`.

export type BindDeferredHostsY4Peers = {
  Fl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  zZe: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsY4Peers | null = null;

/** Wire bindDeferredHostsY4 peers once companions land. */
export function setBindDeferredHostsY4Peers(
  next: BindDeferredHostsY4Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Y4` / internal `SE`.
 */
export function bindDeferredHostsY4() {
  if (peers == null) {
    throw new Error("bindDeferredHostsY4 peers are not configured");
  }

  return peers.Ma(
    peers.Q,
    ({ get: e }) =>
      peers.zZe(e, peers.Fl.SELECTED_PROJECT).isPending ||
      peers.zZe(e, peers.Fl.LOCAL_PROJECTS).isPending,
  );
}
