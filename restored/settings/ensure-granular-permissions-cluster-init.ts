// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `m4r` / export `Nq` — fan-in → ensureAppShellAtomsInit before granular permissions.
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";

/** No-op ensure-init shim. */
export function ensureGranularPermissionsClusterInit(): void {
  ensureAppShellAtomsInit();
}
