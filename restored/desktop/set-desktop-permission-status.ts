// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MPc`) / export `setDesktopPermissionStatus`.

export type DesktopPermissionStatusPeers = {
  A2: (...args: unknown[]) => unknown;
  k2: (...args: unknown[]) => unknown;
};
let peers: DesktopPermissionStatusPeers | null = null;

/** Wire setDesktopPermissionStatus peers once companions land. */
export function setDesktopPermissionStatusPeers(
  next: DesktopPermissionStatusPeers,
): void {
  peers = next;
}

/**
 * Bundle export `setDesktopPermissionStatus` / internal `MPc`.
 */
export function setDesktopPermissionStatus(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setDesktopPermissionStatus peers are not configured");
  }
  e.set(peers.A2, {
    ...peers.k2(e),
    permissionStatus: t,
  });
}
