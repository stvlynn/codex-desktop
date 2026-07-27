// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `WTr` (companion) + `FTr` / export `_1`.

/** True when a command is vscode-host only. */
export function isVscodeOnlyShortcut(command: { kind: string }): boolean {
  return command.kind === "vscode-only";
}

/** True when a shortcut can be configured in-app. */
export function isShortcutConfigurable(command: {
  kind: string;
  shortcutConfigurable?: boolean;
}): boolean {
  return (
    !isVscodeOnlyShortcut(command) &&
    !(
      "shortcutConfigurable" in command &&
      command.shortcutConfigurable === false
    )
  );
}
