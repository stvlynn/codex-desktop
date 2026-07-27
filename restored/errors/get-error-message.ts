// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ul` / export `zht` — coerce unknown thrown values to a string.

/** Bundle export `zht` — best-effort error message extraction. */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (typeof error === "object" && error && "message" in error) {
    const message = (error as { message: unknown }).message;
    if (typeof message === "string" && message.length > 0) return message;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}
