// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Zrt` / export `Fct` — fan-in appshell/composer/cloud before scrolling bufferDuration helpers.

import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import {
  ensureComposerEsm_Qct_Init,
  ensureComposerEsm_odt_Init,
} from "../composer/composer-esm-inits";
import { ensureCloudApiClientInit } from "../settings/cloud-api-client";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureComposerScrollBufferInit(): void {
  ensureAppShellAtomsInit();
  ensureComposerEsm_Qct_Init();
  ensureCloudApiClientInit();
  ensureComposerEsm_odt_Init();
}
