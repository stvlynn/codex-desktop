// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Vsc`) / export `$f`.

export type ResetDesktopPermissionNotDeterminedPeers = {
  clearPermissionCaches: () => void;
  permissionStatusAtom: unknown;
  micDeniedAtom: unknown;
  cameraDeniedAtom: unknown;
};

let peers: ResetDesktopPermissionNotDeterminedPeers | null = null;

/** Wire desktop permission reset peers once companions land. */
export function setResetDesktopPermissionNotDeterminedPeers(
  next: ResetDesktopPermissionNotDeterminedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$f` / internal `Vsc`.
 * Reset desktop permission atoms to not-determined / false.
 */
export function resetDesktopPermissionNotDetermined(store: {
  set: (atom: unknown, value: unknown) => void;
}): void {
  if (peers == null) {
    throw new Error(
      "ResetDesktopPermissionNotDetermined peers are not configured",
    );
  }
  peers.clearPermissionCaches();
  store.set(peers.permissionStatusAtom, "not-determined");
  store.set(peers.micDeniedAtom, false);
  store.set(peers.cameraDeniedAtom, false);
}
