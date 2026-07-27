// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ITe` companion for case-folding path compares.

/** True for `C:\` / UNC-style absolute paths. */
export function isWindowsOrUncPath(value: string): boolean {
  return (
    /^[a-zA-Z]:[\\/]/.test(value) ||
    value.startsWith("//") ||
    value.startsWith("\\\\")
  );
}
