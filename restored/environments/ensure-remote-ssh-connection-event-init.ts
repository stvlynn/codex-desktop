// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `S0t` / export `G9` — fan-in composer Utt + appshell before remote SSH connection product-event logging.

import { ensureComposerEsm_Utt_Init } from "../boundaries/composer-esm-inits";
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureRemoteSshConnectionEventInit(): void {
  ensureComposerEsm_Utt_Init();
  ensureAppShellAtomsInit();
}
