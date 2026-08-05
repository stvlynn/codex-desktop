// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MY`) / export `UT`.

export type BindDeferredUiUTPeers = {
  O0o: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiUTPeers | null = null;

/** Wire bindDeferredUiUT peers once companions land. */
export function setBindDeferredUiUTPeers(next: BindDeferredUiUTPeers): void {
  peers = next;
}

/**
 * Bundle export `UT` / internal `MY`.
 */
export function bindDeferredUiUT() {
  if (peers == null) {
    throw new Error("bindDeferredUiUT peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => t(peers.O0o).get(e) ?? null);
}
