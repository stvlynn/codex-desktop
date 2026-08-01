// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hru` / export `ir` — fan-in appshell + host message bus + composer udt.

import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { ensureHostMessageBusInit } from "../navigation/host-message-bus";
import { ensureComposerEsm_udt_Init } from "../composer/composer-esm-inits";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureAppShellHostMessageBusInit(): void {
  ensureAppShellAtomsInit();
  ensureHostMessageBusInit();
  ensureComposerEsm_udt_Init();
}
