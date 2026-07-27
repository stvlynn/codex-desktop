// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qul` / export `Mc`.

import { isShellLauncherCommand } from "./is-shell-launcher-command";

/** Prefer the last non-empty command action that is not a bare shell. */
export function lastNonShellCommand(session: {
  command: string;
  commandActions: Array<{ command?: string } | null | undefined>;
}): string {
  for (let i = session.commandActions.length - 1; i >= 0; --i) {
    const command = session.commandActions[i]?.command.trim() ?? "";
    if (command.length > 0 && !isShellLauncherCommand(command)) return command;
  }
  const fallback = session.command.trim();
  return isShellLauncherCommand(fallback) ? "" : fallback;
}
