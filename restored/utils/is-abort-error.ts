// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `aiu` / export `Zn`.

/** Detect AbortError / aborted DOMException or Error. */
export function isAbortError(error: unknown): boolean {
  return error instanceof Error || error instanceof DOMException
    ? error.name === "AbortError" ||
        error.message.toLowerCase().includes("aborted")
    : false;
}
