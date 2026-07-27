// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NGo` / export `TD` — fan-in → ensureAppShellAtomsInit.
import { ensureAppShellAtomsInit } from "./app-shell-atoms";

/** No-op ensure-init shim. */
export function ensureAppShellFanInTdInit(): void {
  ensureAppShellAtomsInit();
}
