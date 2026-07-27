// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `i8n` / export `f3`.

/** When `preferFull` is false, force `"full"`; otherwise keep `level`. */
export function detailLevelOrFull<T>(
  level: T,
  preferFull: boolean,
): T | "full" {
  return preferFull ? level : "full";
}
