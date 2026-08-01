// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xxo` / export `bA` — fan-in appshell + composer Wdt before defaultEnvironment / availableEnvs resolve.

import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { ensureComposerEsm_Wdt_Init } from "../composer/composer-esm-inits";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureDefaultEnvironmentResolveInit(): void {
  ensureAppShellAtomsInit();
  ensureComposerEsm_Wdt_Init();
}
