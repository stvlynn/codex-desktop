// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `C0t`) / export `U9`.

export type LogRemoteSshConnectionEventArgs = {
  connection?: unknown;
  connectionState?: unknown;
  connectionError?: unknown;
  errorCategory?: unknown;
  [key: string]: unknown;
};

export type LogRemoteSshConnectionEventPeers = {
  eventType: unknown;
  serializeConnection: (connection: unknown) => Record<string, unknown>;
  serializeConnectionState: (state: unknown) => unknown;
  categorizeError: (error: unknown) => unknown;
};

let peers: LogRemoteSshConnectionEventPeers | null = null;

/** Wire remote SSH telemetry peers once companions land. */
export function setLogRemoteSshConnectionEventPeers(
  next: LogRemoteSshConnectionEventPeers,
): void {
  peers = next;
}

/**
 * Bundle export `U9` / internal `C0t`.
 * Log a remote SSH connection product event when a logger is present.
 */
export function logRemoteSshConnectionEvent(
  logger:
    | {
        logProductEvent: (
          type: unknown,
          payload: Record<string, unknown>,
        ) => void;
      }
    | null
    | undefined,
  args: LogRemoteSshConnectionEventArgs,
): void {
  if (peers == null) {
    throw new Error("LogRemoteSshConnectionEvent peers are not configured");
  }
  if (logger == null) return;
  const {
    connection,
    connectionState,
    connectionError,
    errorCategory,
    ...rest
  } = args;
  const category =
    errorCategory ??
    (connectionError == null ? null : peers.categorizeError(connectionError));
  logger.logProductEvent(peers.eventType, {
    ...rest,
    ...(connection == null ? {} : peers.serializeConnection(connection)),
    connectionState:
      connectionState === undefined
        ? undefined
        : peers.serializeConnectionState(connectionState),
    errorCategory: category ?? undefined,
  });
}
