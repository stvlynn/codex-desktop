// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vsc`) / export `$f`.

export type ResetDesktopPermissionNotDeterminedPeers = {
  Hsc: (...args: unknown[]) => unknown;
  Rsc: (...args: unknown[]) => unknown;
  Wsc: (...args: unknown[]) => unknown;
  zsc: (...args: unknown[]) => unknown;
};

let peers: ResetDesktopPermissionNotDeterminedPeers | null = null;

/** Wire resetDesktopPermissionNotDetermined peers once companions land. */
export function setResetDesktopPermissionNotDeterminedPeers(
  next: ResetDesktopPermissionNotDeterminedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$f` / internal `Vsc`.
 */
export function resetDesktopPermissionNotDetermined(e: unknown) {
  if (peers == null) {
    throw new Error(
      "resetDesktopPermissionNotDetermined peers are not configured",
    );
  }

  (peers.Hsc(),
    e.set(peers.Wsc, `not-determined`),
    e.set(peers.Rsc, !1),
    e.set(peers.zsc, !1));
}
