// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `k2`) / export `bf`.

export type GetDesktopPermissionStatePeers = {
  A2: (...args: unknown[]) => unknown;
  FPc: (...args: unknown[]) => unknown;
  IPc: (...args: unknown[]) => unknown;
  nd: (...args: unknown[]) => unknown;
};

let peers: GetDesktopPermissionStatePeers | null = null;

/** Wire getDesktopPermissionState peers once companions land. */
export function setGetDesktopPermissionStatePeers(next: GetDesktopPermissionStatePeers): void {
  peers = next;
}

/**
 * Bundle export `bf` / internal `k2`.
 */
export function getDesktopPermissionState(e: unknown) {
  if (peers == null) {
    throw new Error("getDesktopPermissionState peers are not configured");
  }

  return e.get(peers.A2) ?? peers.nd(peers.FPc, peers.IPc);
}
