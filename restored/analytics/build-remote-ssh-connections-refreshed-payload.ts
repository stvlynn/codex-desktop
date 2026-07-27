// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_0t` / export `W9` — remote SSH connections-refreshed analytics payload.

import { CodexRemoteSshConnectionAction } from "./codex-remote-ssh-connection-action";
import { CodexRemoteSshConnectionEventSource } from "./codex-remote-ssh-connection-event-source";
import { CodexRemoteSshConnectionResult } from "./codex-remote-ssh-connection-result";

export type RemoteSshConnectionLike = {
  source?: string;
  autoConnect?: boolean;
};

/** Bundle `_0t` / export `W9`. */
export function buildRemoteSshConnectionsRefreshedPayload(
  connections: readonly RemoteSshConnectionLike[],
): Record<string, unknown> {
  return {
    action:
      CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_REFRESH,
    result:
      CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED,
    source:
      CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
    connectionCount: connections.length,
    codexManagedConnectionCount: connections.filter(
      (c) => c.source === "codex-managed",
    ).length,
    discoveredConnectionCount: connections.filter(
      (c) => c.source === "discovered",
    ).length,
    autoConnectConnectionCount: connections.filter((c) => c.autoConnect).length,
  };
}
