// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SYn`) / export `D8`.

export type BindDeferredUiD8Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  cT: (...args: unknown[]) => unknown;
  uT: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiD8Peers | null = null;

/** Wire bindDeferredUiD8 peers once companions land. */
export function setBindDeferredUiD8Peers(next: BindDeferredUiD8Peers): void {
  peers = next;
}

/**
 * Bundle export `D8` / internal `SYn`.
 */
export function bindDeferredUiD8() {
  if (peers == null) {
    throw new Error("bindDeferredUiD8 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.cT)[e] ?? [];
    return t(peers.uT) || n.length > 0;
  });
}
