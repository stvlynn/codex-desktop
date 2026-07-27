// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Display labels for Windows shell choices (bundle `sDe` / export `ppt`).

export const WindowsShellDisplayName = {
  powershell: "PowerShell",
  commandPrompt: "Command Prompt",
  gitBash: "Git Bash",
  wsl: "WSL",
} as const;

export type WindowsShellId = keyof typeof WindowsShellDisplayName;
