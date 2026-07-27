// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `MPc`) / export `Ef`.

import {
  getDesktopPermissionState,
  type DesktopPermissionAtomStore,
} from "./get-desktop-permission-state";

export type SetDesktopPermissionStatusPeers = {
  permissionAtom: unknown;
};

let peers: SetDesktopPermissionStatusPeers | null = null;

/** Wire desktop permission write peers once companions land. */
export function setSetDesktopPermissionStatusPeers(
  next: SetDesktopPermissionStatusPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ef` / internal `MPc`.
 * Patch permissionStatus onto the desktop permission atom.
 */
export function setDesktopPermissionStatus(
  store: DesktopPermissionAtomStore & {
    set: (atom: unknown, value: unknown) => void;
  },
  permissionStatus: unknown,
): void {
  if (peers == null) {
    throw new Error("SetDesktopPermissionStatus peers are not configured");
  }
  const current = getDesktopPermissionState(store) as Record<string, unknown>;
  store.set(peers.permissionAtom, { ...current, permissionStatus });
}
