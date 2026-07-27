// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jul` (companion of `qul` / export `Mc`).

/** True when a command string is just a shell binary launcher. */
export function isShellLauncherCommand(command: string): boolean {
  return /^(?:.*[/\\])?(?:bash|cmd(?:\.exe)?|fish|powershell(?:\.exe)?|pwsh(?:\.exe)?|sh|zsh)(?:\s|$)/iu.test(
    command,
  );
}
