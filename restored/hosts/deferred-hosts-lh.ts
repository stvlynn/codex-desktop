// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DWi`) / export `lH`.

export type BindDeferredHostsLHPeers = {
  EWi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsLHPeers | null = null;

/** Wire bindDeferredHostsLH peers once companions land. */
export function setBindDeferredHostsLHPeers(
  next: BindDeferredHostsLHPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lH` / internal `DWi`.
 */
export function bindDeferredHostsLH() {
  if (peers == null) {
    throw new Error("bindDeferredHostsLH peers are not configured");
  }

  return peers.e(() => {
    EWi = `workspaceFile:`;
  });
}
