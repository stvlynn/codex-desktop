// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `P1s` / export `qh`; companion `F1s` = `wsl_remote_connections`.

import { readConfigFeatureFlag } from "../config/read-config-feature-flag";

const WSL_REMOTE_CONNECTIONS_FEATURE = "wsl_remote_connections";

/** True when forced, or config enables `wsl_remote_connections`. */
export function isWslRemoteConnectionsConfigEnabled(config: Record<string, unknown> | null | undefined, forceEnabled: boolean = false): boolean {
  return (
    forceEnabled ||
    readConfigFeatureFlag(config, WSL_REMOTE_CONNECTIONS_FEATURE) === true
  );
}
