// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qjr` / `Xjr` / `Zjr`(`NQ`) / `Yjr`(`PQ`).

export type RemoteControlConnection = {
  envId: string;
  installationId?: string | null;
  online?: boolean;
  lastSeenAt?: string | null;
  clientType?: string | null;
};

/** Dedupe remote-control connections by installation (prefer online/desktop). */
export function dedupeRemoteControlConnections(args: {
  remoteControlConnections: readonly RemoteControlConnection[];
}): RemoteControlConnection[] {
  const byInstallation = new Map<string, RemoteControlConnection>();
  const withoutInstallation: RemoteControlConnection[] = [];
  for (const connection of args.remoteControlConnections) {
    if (connection.installationId == null) {
      withoutInstallation.push(connection);
      continue;
    }
    const existing = byInstallation.get(connection.installationId);
    if (existing == null) {
      byInstallation.set(connection.installationId, connection);
      continue;
    }
    const sameOnline = connection.online === existing.online;
    const newerSeen =
      connection.lastSeenAt != null &&
      (existing.lastSeenAt == null ||
        connection.lastSeenAt.localeCompare(existing.lastSeenAt) > 0);
    const preferDesktop =
      existing.clientType !== "CODEX_DESKTOP_APP" &&
      connection.clientType === "CODEX_DESKTOP_APP";
    if (
      (connection.online && !existing.online) ||
      (sameOnline &&
        (newerSeen ||
          (connection.lastSeenAt === existing.lastSeenAt && preferDesktop)))
    ) {
      byInstallation.set(connection.installationId, connection);
    }
  }
  return [...byInstallation.values(), ...withoutInstallation];
}

/** Connections matching newly added env ids (and shared installations). */
export function addedRemoteControlConnections(args: {
  addedRemoteControlEnvIds: readonly string[];
  remoteControlConnections: readonly RemoteControlConnection[];
}): RemoteControlConnection[] {
  const added = new Set(args.addedRemoteControlEnvIds);
  const installationIds = new Set(
    args.remoteControlConnections.flatMap((connection) =>
      added.has(connection.envId) && connection.installationId != null
        ? [connection.installationId]
        : [],
    ),
  );
  return dedupeRemoteControlConnections({
    remoteControlConnections: args.remoteControlConnections,
  }).filter(
    (connection) =>
      added.has(connection.envId) ||
      (connection.installationId != null &&
        installationIds.has(connection.installationId)),
  );
}

/** Connections not covered by the added-env set (`NQ` / `Zjr`). */
export function remainingRemoteControlConnections(args: {
  addedRemoteControlEnvIds: readonly string[];
  remoteControlConnections: readonly RemoteControlConnection[];
}): RemoteControlConnection[] {
  const added = addedRemoteControlConnections(args);
  const envIds = new Set(added.map((connection) => connection.envId));
  const installationIds = new Set(
    added.flatMap((connection) =>
      connection.installationId == null ? [] : [connection.installationId],
    ),
  );
  return dedupeRemoteControlConnections({
    remoteControlConnections: args.remoteControlConnections,
  }).filter(
    (connection) =>
      !envIds.has(connection.envId) &&
      (connection.installationId == null ||
        !installationIds.has(connection.installationId)),
  );
}

/** Added set, or all deduped connections when in-app 1:1 pairing is enabled (`PQ`). */
export function visibleRemoteControlConnections(args: {
  addedRemoteControlEnvIds: readonly string[];
  oneToOnePairingInAppEnabled: boolean;
  remoteControlConnections: readonly RemoteControlConnection[];
}): RemoteControlConnection[] {
  return args.oneToOnePairingInAppEnabled
    ? dedupeRemoteControlConnections({
        remoteControlConnections: args.remoteControlConnections,
      })
    : addedRemoteControlConnections(args);
}
