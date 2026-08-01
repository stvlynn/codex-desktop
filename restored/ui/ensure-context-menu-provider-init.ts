// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pwr` / export `A1` — fan-in ensureIntlFormattersInit + ensureComposerEsm_q0_Init before context-menu Provider.

import { ensureIntlFormattersInit } from "../i18n/use-intl";
import { ensureComposerEsm_q0_Init } from "../composer/composer-esm-inits";

/** Fan-in ensure-init shim (bundle body only calls mapped ensure*Init peers). */
export function ensureContextMenuProviderInit(): void {
  ensureIntlFormattersInit();
  ensureComposerEsm_q0_Init();
}
