// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Merge SSH / WSL / remote-control shared-object connection lists (core of `oOt` / `kot`).

export type RemoteConnection = {
  hostId: string;
  displayName: string;
  source?: string;
  [key: string]: unknown;
};

export type MergeRemoteConnectionsOptions = {
  /**
   * When true, return `undefined` until SSH connections have loaded
   * (`waitForRemoteSshConnections` in the original hook).
   */
  waitForRemoteSshConnections?: boolean;
};

/**
 * Concatenate remote SSH, WSL, and remote-control connection snapshots.
 * The React hook `oOt` wraps this with `useSharedObjectState` reads.
 */
export function mergeRemoteConnections(
  sshConnections: RemoteConnection[] | null | undefined,
  wslConnections: RemoteConnection[] | null | undefined,
  remoteControlConnections: RemoteConnection[] | null | undefined,
  options: MergeRemoteConnectionsOptions = {},
): RemoteConnection[] | undefined {
  const waitForRemoteSshConnections =
    options.waitForRemoteSshConnections ?? false;

  if (waitForRemoteSshConnections && sshConnections == null) {
    return undefined;
  }

  return [
    ...(sshConnections ?? []),
    ...(wslConnections ?? []),
    ...(remoteControlConnections ?? []),
  ];
}
