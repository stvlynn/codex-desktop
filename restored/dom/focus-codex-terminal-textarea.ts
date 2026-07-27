// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VVr` / export `hZ` — extractFn(VVr); companion $Vr.

const CODEX_TERMINAL_SELECTOR = "[data-codex-terminal]";

/** Focus the textarea inside the Codex terminal host (bundle `VVr` / `hZ`). */
export function focusCodexTerminalTextarea(root: ParentNode = document): void {
  root
    .querySelector(CODEX_TERMINAL_SELECTOR)
    ?.querySelector("textarea")
    ?.focus();
}
