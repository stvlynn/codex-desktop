// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Djr`) / export `qQ`.

export type RevokeRemoteControlClientPeers = {
  Bf: (...args: unknown[]) => unknown;
  djr: (...args: unknown[]) => unknown;
};

let peers: RevokeRemoteControlClientPeers | null = null;

/** Wire revokeRemoteControlClient peers once companions land. */
export function setRevokeRemoteControlClientPeers(
  next: RevokeRemoteControlClientPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qQ` / internal `Djr`.
 */
async function revokeRemoteControlClient(e) {
  if (peers == null) {
    throw new Error("revokeRemoteControlClient peers are not configured");
  }

  switch (e.revokeTarget.type) {
    case `browser`:
      await peers.djr({
        clientId: e.clientId,
      });
      return;
    case `app-server`:
      await peers.Bf(`revoke-remote-control-client-for-host`, {
        hostId: e.revokeTarget.hostId,
        environmentId: e.revokeTarget.environmentId,
        clientId: e.clientId,
      });
      return;
  }
}
