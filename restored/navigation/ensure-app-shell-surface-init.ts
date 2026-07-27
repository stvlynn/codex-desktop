// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uSo` / export `lA` — fan-in ensureAppShellAtomsInit before app-shell surface helpers.

import { ensureAppShellAtomsInit } from "./app-shell-atoms";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureAppShellSurfaceInit(): void {
  ensureAppShellAtomsInit();
}
