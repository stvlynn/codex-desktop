// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Codex Micro command catalog facades (b1/l1/y1).

export type CodexMicroCommand = {
  id: string;
  kind?: string;
  availableIn?: string[];
  [key: string]: unknown;
};

/** Bundle export `b1` — full command catalog (webview + host-only entries). */
export let codexMicroCommands: CodexMicroCommand[] = [];

export function bindCodexMicroCommands(next: CodexMicroCommand[]): void {
  codexMicroCommands = next;
}

/** Convenience reader for callers that prefer a function. */
export function getCodexMicroCommands(): CodexMicroCommand[] {
  return codexMicroCommands;
}

/**
 * Bundle export `y1` — whether a command is available in a given host flavor.
 */
export function isCommandAvailableIn(
  command: CodexMicroCommand,
  host: string,
): boolean {
  return command.availableIn?.includes(host) ?? true;
}

/** Bundle export `l1` — Rolldown ESM init retained as no-op. */
export function ensureCodexMicroCommandsInit(): void {}
