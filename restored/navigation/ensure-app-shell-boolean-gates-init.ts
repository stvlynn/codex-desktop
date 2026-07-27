// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pg` / export `Jst` — fan-in ensureAppShellAtomsInit before boolean gate helpers.

import { ensureAppShellAtomsInit } from "./app-shell-atoms";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureAppShellBooleanGatesInit(): void {
  ensureAppShellAtomsInit();
}
