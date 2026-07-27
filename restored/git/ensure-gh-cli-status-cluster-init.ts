// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kpo` / export `wj` — fan-in → ensureDynamicScriptLoadInit (gh-cli-status).
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";

/** No-op ensure-init shim. */
export function ensureGhCliStatusClusterInit(): void {
  ensureDynamicScriptLoadInit();
}
