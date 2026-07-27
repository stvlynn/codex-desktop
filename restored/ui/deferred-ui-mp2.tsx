// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UOa`) / export `MP`.

export type BindBindDeferredUiMP2Peers = {
  NOa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ra: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiMP2Peers | null = null;

/** Wire bindBindDeferredUiMP2 peers once companions land. */
export function setBindBindDeferredUiMP2Peers(next: BindBindDeferredUiMP2Peers): void {
  peers = next;
}

/**
 * Bundle export `MP` / internal `UOa`.
 */
export function bindBindDeferredUiMP2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiMP2 peers are not configured");
  }

  return peers.Ra(peers.Q, ({
    scope: e
  }) => ({
    mutationFn: t => peers.NOa(e, t),
    mutationKey: [`set-chatgpt-ultra-effort-enabled`]
  }));
}
