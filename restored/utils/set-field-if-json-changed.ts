// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `G8l` / export `Ir`.

/** Immutable set when JSON value differs; otherwise return the same object. */
export function setFieldIfJsonChanged<
  T extends Record<string, unknown>,
  K extends keyof T,
>(obj: T, key: K, next: T[K] | null | undefined): T {
  return next == null || JSON.stringify(obj[key]) === JSON.stringify(next)
    ? obj
    : { ...obj, [key]: next };
}
