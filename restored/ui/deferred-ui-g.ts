// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IHs`) / export `g_`.

export type BindDeferredUiGPeers = {
  bHs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jHs: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGPeers | null = null;

/** Wire bindDeferredUiG peers once companions land. */
export function setBindDeferredUiGPeers(next: BindDeferredUiGPeers): void {
  peers = next;
}

/**
 * Bundle export `g_` / internal `IHs`.
 */
export function bindDeferredUiG() {
  if (peers == null) {
    throw new Error("bindDeferredUiG peers are not configured");
  }

  return peers.e(() => {
    (peers.bHs(), peers.jHs());
  });
}
