// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Djr`) / export `qQ`.

export type RevokeRemoteControlClientPeers = {
  revokeBrowserClient: (input: { clientId: unknown }) => Promise<void>;
  invokeHost: (
    method: "revoke-remote-control-client-for-host",
    args: { hostId: unknown; environmentId: unknown; clientId: unknown },
  ) => Promise<void>;
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
 * Revoke a remote-control client for browser or app-server targets.
 */
export type RevokeRemoteControlClientArgs = {
  clientId: unknown;
  revokeTarget:
    | { type: "browser" }
    | { type: "app-server"; hostId: unknown; environmentId: unknown };
};

export async function revokeRemoteControlClient(
  args: RevokeRemoteControlClientArgs,
): Promise<void> {
  if (peers == null) {
    throw new Error("RevokeRemoteControlClient peers are not configured");
  }
  switch (args.revokeTarget.type) {
    case "browser":
      await peers.revokeBrowserClient({ clientId: args.clientId });
      return;
    case "app-server":
      await peers.invokeHost("revoke-remote-control-client-for-host", {
        hostId: args.revokeTarget.hostId,
        environmentId: args.revokeTarget.environmentId,
        clientId: args.clientId,
      });
      return;
  }
}
