// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cDe`) / export `mpt`.

export type BindBindGitBashExePeers = {
  aDe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oDe: (...args: unknown[]) => unknown;
  sDe: (...args: unknown[]) => unknown;
};

let peers: BindBindGitBashExePeers | null = null;

/** Wire bindBindGitBashExe peers once companions land. */
export function setBindBindGitBashExePeers(next: BindBindGitBashExePeers): void {
  peers = next;
}

/**
 * Bundle export `mpt` / internal `cDe`.
 */
export function bindBindGitBashExe() {
  if (peers == null) {
    throw new Error("bindBindGitBashExe peers are not configured");
  }

  return peers.e(() => {
    aDe = {
      bash: `bash`,
      "bash.exe": `bash`,
      cmd: `cmd`,
      "cmd.exe": `cmd`,
      "git-bash.exe": `bash`,
      powershell: `powershell`,
      "powershell.exe": `powershell`,
      pwsh: `powershell`,
      "pwsh.exe": `powershell`,
      sh: `sh`,
      "sh.exe": `sh`,
      zsh: `zsh`,
      "zsh.exe": `zsh`
    }, oDe = {
      bash: `bash`,
      cmd: `cmd`,
      powershell: `PowerShell`,
      sh: `sh`,
      zsh: `zsh`
    }, sDe = {
      powershell: `PowerShell`,
      commandPrompt: `Command Prompt`,
      gitBash: `Git Bash`,
      wsl: `WSL`
    };
  });
}
