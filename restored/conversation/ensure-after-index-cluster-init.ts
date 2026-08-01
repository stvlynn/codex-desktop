// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oor` / export `o0` — fan-in → Utt/K9/app-shell (after-index helper).
import { ensureComposerEsm_Utt_Init } from "../composer/composer-esm-inits";
import { ensureComposerEsm_K9_Init } from "../composer/composer-esm-inits";
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";

/** No-op ensure-init shim. */
export function ensureAfterIndexClusterInit(): void {
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_K9_Init();
  ensureAppShellAtomsInit();
}
