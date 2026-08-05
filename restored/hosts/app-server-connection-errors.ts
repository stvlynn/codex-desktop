// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Parse app-server connection / version mismatch errors (`vhe` / `_he` / `hhe`).

import { APP_VERSION } from "../app/app-version";

/** Prefix for restart-available version pairs (`Ehe`). */
export const APP_SERVER_VERSION_RESTART_AVAILABLE_PREFIX =
  "codex-app-server-version-restart-available:";

/** Prefix for unsupported app-server versions. */
export const APP_SERVER_VERSION_UNSUPPORTED_PREFIX =
  "codex-app-server-version-unsupported:";

export type AppServerVersionPair = {
  currentVersion: string;
  installedVersion: string;
};

/** Bundle `hhe` (co-located). */
export function formatAppServerVersionRestartAvailableKey({
  currentVersion,
  installedVersion,
}: AppServerVersionPair): string {
  return `${APP_SERVER_VERSION_RESTART_AVAILABLE_PREFIX}${currentVersion}:${installedVersion}`;
}

/** Parse `codex-app-server-version-restart-available:current:installed`. */
export function parseAppServerVersionRestartAvailableKey(
  message: string,
): AppServerVersionPair | null {
  if (!message.startsWith(APP_SERVER_VERSION_RESTART_AVAILABLE_PREFIX)) {
    return null;
  }
  const rest = message.slice(
    APP_SERVER_VERSION_RESTART_AVAILABLE_PREFIX.length,
  );
  const separator = rest.indexOf(":");
  if (separator < 0) return null;
  return {
    currentVersion: rest.slice(0, separator),
    installedVersion: rest.slice(separator + 1),
  };
}

export type AppServerConnectionError =
  | {
      code: "restart-required";
      currentVersion?: string;
      installedVersion?: string;
    }
  | {
      code: "update-required";
      minRequiredVersion: string;
      currentVersion: string;
    }
  | { code: "connection-failed"; message: string };

/**
 * Bundle `_he` (co-located) — classify a raw app-server error string.
 */
export function classifyAppServerConnectionError(
  message: string,
): AppServerConnectionError {
  if (message.startsWith("Parse Error")) {
    return { code: "restart-required" };
  }

  const restartPair = parseAppServerVersionRestartAvailableKey(message);
  if (restartPair != null) {
    return {
      code: "restart-required",
      currentVersion: restartPair.currentVersion,
      installedVersion: restartPair.installedVersion,
    };
  }

  if (message.startsWith(APP_SERVER_VERSION_UNSUPPORTED_PREFIX)) {
    return {
      code: "update-required",
      minRequiredVersion: APP_VERSION,
      currentVersion: message.slice(
        APP_SERVER_VERSION_UNSUPPORTED_PREFIX.length,
      ),
    };
  }

  return { code: "connection-failed", message };
}

/**
 * Bundle `vhe` / export `Ogt`.
 * Build the restart-available key then classify it (always `restart-required`).
 */
export function classifyInstalledVsCurrentAppServerVersions({
  currentVersion,
  installedVersion,
}: AppServerVersionPair): AppServerConnectionError {
  return classifyAppServerConnectionError(
    formatAppServerVersionRestartAvailableKey({
      currentVersion,
      installedVersion,
    }),
  );
}
