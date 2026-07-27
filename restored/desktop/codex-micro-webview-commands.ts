// Restored from ref/webview/assets/codex-micro-commands-8_4zZXYk.js
// Webview-scoped Codex Micro command lookup (electron flavor).
// Stage 3: b1/l1/y1 → codex-micro-commands-catalog.

import {
  codexMicroCommands,
  ensureCodexMicroCommandsInit,
  isCommandAvailableIn,
  type CodexMicroCommand,
} from "./codex-micro-commands-catalog";

ensureCodexMicroCommandsInit();

let webviewCommands: CodexMicroCommand[] = [];

/**
 * Bundle export `t` — electron webview commands filtered from the catalog.
 */
export function getCodexMicroWebviewCommands(): CodexMicroCommand[] {
  return webviewCommands;
}

/**
 * Bundle export `n` — look up a webview command by id (`newThread`→`newTask`).
 */
export function findCodexMicroWebviewCommand(id: string): CodexMicroCommand | null {
  const normalized = id === "newThread" ? "newTask" : id;
  return webviewCommands.find((command) => command.id === normalized) ?? null;
}

/** Bundle export `r` — refresh the filtered webview command list. */
export function ensureCodexMicroWebviewCommandsInit(): void {
  webviewCommands = codexMicroCommands.filter(
    (command) =>
      command.kind === "webview" && isCommandAvailableIn(command, "electron"),
  );
}
