// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kdu` / export `Yt` — fan-in → ensureCodexMicroCommandsInit.
import { ensureCodexMicroCommandsInit } from "./codex-micro-commands-catalog";

/** No-op ensure-init shim. */
export function ensureWebviewMicroCommandsClusterInit(): void {
  ensureCodexMicroCommandsInit();
}
