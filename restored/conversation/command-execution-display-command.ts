// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qul` companion for export `at`.

const META_COMMAND_RE = /^\s*(?:clear|exit)\s*$/i;

function isMetaCommand(command: string): boolean {
  return META_COMMAND_RE.test(command);
}

export type CommandExecutionCommandLike = {
  command: string;
  commandActions?: Array<{ command?: string | null } | null> | null;
};

/** Prefer the last non-meta command action, else the root command. */
export function commandExecutionDisplayCommand(item: CommandExecutionCommandLike): string {
  const actions = item.commandActions ?? [];
  for (let i = actions.length - 1; i >= 0; --i) {
    const command = actions[i]?.command?.trim() ?? "";
    if (command.length > 0 && !isMetaCommand(command)) return command;
  }
  const root = item.command.trim();
  return isMetaCommand(root) ? "" : root;
}
