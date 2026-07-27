// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KPo`) / export `IO`.

export type BindDismissPeers = {
  GPo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDismissPeers | null = null;

/** Wire bindDismiss peers once companions land. */
export function setBindDismissPeers(next: BindDismissPeers): void {
  peers = next;
}

/**
 * Bundle export `IO` / internal `KPo`.
 */
export function bindDismiss() {
  if (peers == null) {
    throw new Error("bindDismiss peers are not configured");
  }

  return peers.e(() => {
    GPo = `browser-comment-popup-shake`;
  });
}
