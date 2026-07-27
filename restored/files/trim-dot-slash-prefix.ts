// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qT` companion for skills path parsing (`Z3`).

/** Trim, strip leading `./`, and normalize separators. */
export function trimDotSlashPrefix(value: string): string {
  return value
    .trim()
    .replace(/^\.\/+/, "")
    .replaceAll(/\\/g, "/");
}
