// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `C0t`) / export `U9`.

export type LogRemoteSshConnectionEventPeers = {
  KZt: (...args: unknown[]) => unknown;
  b0t: (...args: unknown[]) => unknown;
  v0t: (...args: unknown[]) => unknown;
  x0t: (...args: unknown[]) => unknown;
};
let peers: LogRemoteSshConnectionEventPeers | null = null;

/** Wire logRemoteSshConnectionEvent peers once companions land. */
export function setLogRemoteSshConnectionEventPeers(
  next: LogRemoteSshConnectionEventPeers,
): void {
  peers = next;
}

/**
 * Bundle export `U9` / internal `C0t`.
 */
export function logRemoteSshConnectionEvent(
  e: unknown,
  {
    connection,
    connectionState,
    connectionError,
    errorCategory,
    ...rest
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("logRemoteSshConnectionEvent peers are not configured");
  }
  if (e == null) return;
  let o =
    errorCategory ??
    (connectionError == null ? null : peers.x0t(connectionError));
  e.logProductEvent(peers.KZt, {
    ...rest,
    ...(connection == null ? {} : peers.v0t(connection)),
    connectionState:
      connectionState === undefined ? undefined : peers.b0t(connectionState),
    errorCategory: o ?? undefined,
  });
}
