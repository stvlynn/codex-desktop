// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `Yxo` for environment.toml picker.

/** Basename of a slash-delimited path (forward-slash normalized). */
export function slashPathBasename(pathValue: string): string {
  const normalized = pathValue.replace(/\\/g, "/");
  const parts = normalized.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? normalized;
}
