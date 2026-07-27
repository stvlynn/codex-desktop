// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cQl` / export `sa`.

/** Format a Date as local `YYYY-MM-DD`. */
export function formatLocalIsoDate(date: Date = new Date()): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
