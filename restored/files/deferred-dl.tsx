// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gla`) / export `DL`.

export type BindBindDeferredDLPeers = {
  hla: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredDLPeers | null = null;

/** Wire bindBindDeferredDL peers once companions land. */
export function setBindBindDeferredDLPeers(
  next: BindBindDeferredDLPeers,
): void {
  peers = next;
}

/**
 * Bundle export `DL` / internal `gla`.
 */
export function bindBindDeferredDL() {
  if (peers == null) {
    throw new Error("bindBindDeferredDL peers are not configured");
  }

  return (0, peers.hla.createContext)(void 0);
}
