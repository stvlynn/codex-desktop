// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `ffs`) / export `sS`.

export type UseAppServerVersionBundlePeers = {
  readConnection: (hostId: unknown) => unknown;
  readState: (hostId: unknown) => unknown;
  readAppServerVersion: (hostId: unknown) => unknown;
  readError: (hostId: unknown) => unknown;
  readInstalledCodexVersion: (hostId: unknown) => unknown;
};

let peers: UseAppServerVersionBundlePeers | null = null;

/** Wire useAppServerVersionBundle peers once companions land. */
export function setUseAppServerVersionBundlePeers(
  next: UseAppServerVersionBundlePeers,
): void {
  peers = next;
}

/**
 * Bundle export `sS` / internal `ffs`.
 * Aggregate app-server version/state/error atoms for a host.
 */
export function useAppServerVersionBundle(hostId: unknown): {
  appServerVersion: unknown;
  error: unknown;
  installedCodexVersion: unknown;
  state: unknown;
} {
  if (peers == null) {
    throw new Error("UseAppServerVersionBundle peers are not configured");
  }
  const connection = peers.readConnection(hostId);
  const appServerVersion = peers.readAppServerVersion(hostId);
  const error = peers.readError(hostId);
  const installedCodexVersion = peers.readInstalledCodexVersion(hostId);
  if (connection == null) {
    return {
      appServerVersion,
      error,
      installedCodexVersion,
      state: null,
    };
  }
  return {
    appServerVersion,
    error,
    installedCodexVersion,
    state: peers.readState(hostId),
  };
}
