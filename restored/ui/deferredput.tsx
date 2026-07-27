// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fm`) / export `put`.

export type BindDeferredputPeers = {
  _2e: (...args: unknown[]) => unknown;
};
let peers: BindDeferredputPeers | null = null;

/** Wire bindDeferredput peers once companions land. */
export function setBindDeferredputPeers(next: BindDeferredputPeers): void {
  peers = next;
}

/**
 * Bundle export `put` / internal `fm`.
 */
export const bindDeferredput = (e, t) => {
  if (peers == null) {
    throw new Error("bindDeferredput peers are not configured");
  }
  return {
    ...peers._2e(e),
    options: [e, t],
  };
};
