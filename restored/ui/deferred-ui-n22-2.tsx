// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QE`) / export `n2`.

export type BindBindDeferredUiN22Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ZE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiN22Peers | null = null;

/** Wire bindBindDeferredUiN22 peers once companions land. */
export function setBindBindDeferredUiN22Peers(
  next: BindBindDeferredUiN22Peers,
): void {
  peers = next;
}

/**
 * Bundle export `n2` / internal `QE`.
 */
export function bindBindDeferredUiN22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiN22 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => t(t(peers.ZE, e).state$));
}
