// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cDt` / export `Wot` — fan-in → Wdt/gst composer esm inits.
import { ensureComposerEsm_Wdt_Init } from "../composer/composer-esm-inits";
import { ensureComposerEsm_gst_Init } from "../composer/composer-esm-inits";

/** No-op ensure-init shim. */
export function ensureSteeringUserMessageClusterInit(): void {
  ensureComposerEsm_Wdt_Init();
  ensureComposerEsm_gst_Init();
}
