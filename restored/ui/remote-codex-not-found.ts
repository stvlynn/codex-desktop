// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave HH — false lift eliminated (via=false-lift). There is no callable
// `remoteCodexNotFound` / no IMPORT_MAP chunk owner / unknown-chunk never existed.
// Real shapes (app-initial + hosts/settings consumers):
//   (1) error.code string `"remote-codex-not-found"`
//       (log-host-login-surface-event `Fa`/`yql`, remote-connections-settings)
//   (2) i18n message ids below (locale packs + settings-search-documents)
// Soft bindable host removed — typed constants match real usage.

/** Host / app-server connection error code (`error.code`). */
export const REMOTE_CODEX_NOT_FOUND_ERROR_CODE = "remote-codex-not-found" as const;

export type RemoteCodexNotFoundErrorCode =
  typeof REMOTE_CODEX_NOT_FOUND_ERROR_CODE;

/** i18n id: app-server error copy when remote Codex CLI is missing. */
export const REMOTE_CODEX_NOT_FOUND_APP_SERVER_MESSAGE_ID =
  "appServer.error.remoteCodexNotFound" as const;

/** i18n id: connection-status badge copy when remote Codex CLI is missing. */
export const REMOTE_CODEX_NOT_FOUND_BADGE_MESSAGE_ID =
  "threadPage.remoteConnectionStatusBadge.remoteCodexNotFound" as const;
