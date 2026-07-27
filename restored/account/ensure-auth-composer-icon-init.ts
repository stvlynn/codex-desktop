// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LNo` / export `HO` — fan-in auth provider + composer tlt before chatgpt auth SVG icon cluster.

import { ensureAuthProviderInit } from "../hooks/use-auth";
import { ensureComposerEsm_tlt_Init } from "../boundaries/composer-esm-inits";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureAuthComposerIconInit(): void {
  ensureAuthProviderInit();
  ensureComposerEsm_tlt_Init();
}
