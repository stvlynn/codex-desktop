// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `k2`) / export `bf`.

export type DesktopPermissionAtomStore = {
  get: (atom: unknown) => unknown;
};

export type GetDesktopPermissionStatePeers = {
  permissionAtom: unknown;
  defaultPermissionState: (
    statusAtom: unknown,
    defaultStatus: unknown,
  ) => unknown;
  permissionStatusAtom: unknown;
  defaultStatus: unknown;
};

let peers: GetDesktopPermissionStatePeers | null = null;

/** Wire desktop permission atom peers once companions land. */
export function setGetDesktopPermissionStatePeers(
  next: GetDesktopPermissionStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `bf` / internal `k2`.
 * Read desktop permission state from the store, falling back to defaults.
 */
export function getDesktopPermissionState(
  store: DesktopPermissionAtomStore,
): unknown {
  if (peers == null) {
    throw new Error("GetDesktopPermissionState peers are not configured");
  }
  return (
    store.get(peers.permissionAtom) ??
    peers.defaultPermissionState(
      peers.permissionStatusAtom,
      peers.defaultStatus,
    )
  );
}
