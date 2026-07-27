// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Z6s` / export `zm` — fan-in → app-shell/auth/personalization ensures.
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { ensureAuthProviderInit } from "../hooks/use-auth";
import { ensurePersonalizationG0Init } from "../utils/wave-as-gap-ensure-inits";

/** No-op ensure-init shim. */
export function ensureMemoCacheAuthClusterInit(): void {
  ensureAppShellAtomsInit();
  ensureAuthProviderInit();
  ensurePersonalizationG0Init();
}
