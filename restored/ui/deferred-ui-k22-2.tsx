// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sD`) / export `K2`.

export type BindBindDeferredUiK22Peers = {
  JE: (...args: unknown[]) => unknown;
  runtimeWorkspaceRoots: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiK22Peers | null = null;

/** Wire bindBindDeferredUiK22 peers once companions land. */
export function setBindBindDeferredUiK22Peers(
  next: BindBindDeferredUiK22Peers,
): void {
  peers = next;
}

/**
 * Bundle export `K2` / internal `sD`.
 */
export function bindBindDeferredUiK22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiK22 peers are not configured");
  }

  return peers.JE(
    ({ currentPermissions: e }) => e?.runtimeWorkspaceRoots ?? null,
  );
}
