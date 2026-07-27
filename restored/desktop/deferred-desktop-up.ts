// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `usc`) / export `up`.

export type BindDeferredDesktopUpPeers = {
  X: (...args: unknown[]) => unknown;
};

let peers: BindDeferredDesktopUpPeers | null = null;

/** Wire bindDeferredDesktopUp peers once companions land. */
export function setBindDeferredDesktopUpPeers(next: BindDeferredDesktopUpPeers): void {
  peers = next;
}

/**
 * Bundle export `up` / internal `usc`.
 */
export function bindDeferredDesktopUp() {
  if (peers == null) {
    throw new Error("bindDeferredDesktopUp peers are not configured");
  }

  return peers.X().min(1);
}
