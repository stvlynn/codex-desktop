// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GMl`) / export `Ps`.

export type BindDeferredUiPsPeers = {
  D8: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiPsPeers | null = null;

/** Wire bindDeferredUiPs peers once companions land. */
export function setBindDeferredUiPsPeers(next: BindDeferredUiPsPeers): void {
  peers = next;
}

/**
 * Bundle export `Ps` / internal `GMl`.
 */
export function bindDeferredUiPs() {
  if (peers == null) {
    throw new Error("bindDeferredUiPs peers are not configured");
  }

  return peers.Oa(
    peers.j2,
    (e, { get: t }) => t(peers.D8).entries.get(e) ?? null,
  );
}
