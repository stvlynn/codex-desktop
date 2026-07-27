// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `C3n` / export `V3`.

/** True when an error message indicates the Xcode license is not accepted. */
export function isXcodeLicenseError(error: unknown): boolean {
  return (error instanceof Error ? error.message : String(error))
    .toLowerCase()
    .includes("you have not agreed to the xcode license agreements");
}
