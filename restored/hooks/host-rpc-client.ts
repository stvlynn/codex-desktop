// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$T`) / export `H3`.

export type GetHostConfigIdPeers = {
  /* no free peers */
};

let peers: GetHostConfigIdPeers | null = null;

/** Wire getHostConfigId peers once companions land. */
export function setGetHostConfigIdPeers(next: GetHostConfigIdPeers): void {
  peers = next;
}

/**
 * Bundle export `H3` / internal `$T`.
 */
export function getHostConfigId(e: unknown) {
  if (peers == null) {
    throw new Error("getHostConfigId peers are not configured");
  }

  return e.id;
}
