// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `q8l`) / export `Br`.

export type BindBindHeartbeatThreadPermissionsByIdPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  U8l: (...args: unknown[]) => unknown;
  dD: (...args: unknown[]) => unknown;
  yD: (...args: unknown[]) => unknown;
};

let peers: BindBindHeartbeatThreadPermissionsByIdPeers | null = null;

/** Wire bindBindHeartbeatThreadPermissionsById peers once companions land. */
export function setBindBindHeartbeatThreadPermissionsByIdPeers(next: BindBindHeartbeatThreadPermissionsByIdPeers): void {
  peers = next;
}

/**
 * Bundle export `Br` / internal `q8l`.
 */
export function bindBindHeartbeatThreadPermissionsById() {
  if (peers == null) {
    throw new Error("bindBindHeartbeatThreadPermissionsById peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    let n = peers.U8l(t(peers.yD, e), t(peers.dD, e));
    return n == null ? null : JSON.stringify(n);
  });
}
