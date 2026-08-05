// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ikt`) / export `iot`.

export type BindDeferredGitHelperIotPeers = {
  Fkt: (...args: unknown[]) => unknown;
  Lmt: (...args: unknown[]) => unknown;
  Vht: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitHelperIotPeers | null = null;

/** Wire bindDeferredGitHelperIot peers once companions land. */
export function setBindDeferredGitHelperIotPeers(
  next: BindDeferredGitHelperIotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `iot` / internal `Ikt`.
 */
export function bindDeferredGitHelperIot() {
  if (peers == null) {
    throw new Error("bindDeferredGitHelperIot peers are not configured");
  }

  return peers.e(() => {
    (peers.Lmt(), peers.Vht(), (Fkt = {}));
  });
}
