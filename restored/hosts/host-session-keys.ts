// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stable session-key strings for local/remote hosts and cloud environments.

import { LOCAL_HOST_ID } from "./local-host-id";

/**
 * Build a session key for a conversation on a host (`fOt` / `xot`).
 * Local hosts use the `local:` prefix; every other host kind uses `remote-host:`.
 */
export function buildHostSessionKey(sessionId: string, hostId: string): string {
  const scope = hostId === LOCAL_HOST_ID ? "local" : "remote-host";
  return `${scope}:${hostId}:${sessionId}`;
}

/**
 * Build a session key for a cloud environment conversation (`pOt` / `bot`).
 */
export function buildCloudSessionKey(environmentId: string): string {
  return `cloud:${environmentId}`;
}
