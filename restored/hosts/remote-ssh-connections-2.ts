// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `V_`) / export `Aot`.

export type BindRemoteSshConnectionsPeers = {
  Ho: (...args: unknown[]) => unknown;
  aOt: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  z_: (...args: unknown[]) => unknown;
};

let peers: BindRemoteSshConnectionsPeers | null = null;

/** Wire bindRemoteSshConnections peers once companions land. */
export function setBindRemoteSshConnectionsPeers(
  next: BindRemoteSshConnectionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Aot` / internal `V_`.
 */
export function bindRemoteSshConnections() {
  if (peers == null) {
    throw new Error("bindRemoteSshConnections peers are not configured");
  }

  return peers.e(() => {
    ((aOt = peers.c()), peers.Ho(), peers.ed(), peers.z_());
  });
}
