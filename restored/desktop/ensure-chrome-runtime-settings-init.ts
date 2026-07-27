// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `srt` / export `Jct` — fan-in appshell + settings query before chrome runtime messaging helpers.

import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureChromeRuntimeSettingsInit(): void {
  ensureAppShellAtomsInit();
  ensureSettingsQueryAtomsInit();
}
