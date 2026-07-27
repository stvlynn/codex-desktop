// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bTs` / export `my` — fan-in appshell before workspace is_custom_checkout_enabled helpers.

import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureCustomCheckoutWorkspaceInit(): void {
  ensureAppShellAtomsInit();
}
