// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pA` / export `F$` — fan-in appshell + settings query before localProjects.create host bridge.

import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureLocalProjectCreationInit(): void {
  ensureAppShellAtomsInit();
  ensureSettingsQueryAtomsInit();
}
