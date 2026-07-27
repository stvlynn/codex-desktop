// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jIl` / export `Qo` — fan-in → Utt/K9 before sidebar mode helpers.
import { ensureComposerEsm_Utt_Init } from "../boundaries/composer-esm-inits";
import { ensureComposerEsm_K9_Init } from "../boundaries/composer-esm-inits";

/** No-op ensure-init shim. */
export function ensureSidebarModeClusterInit(): void {
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_K9_Init();
}
