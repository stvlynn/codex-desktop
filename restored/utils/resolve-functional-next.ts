// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ho` — pure helper.

/** Resolve a value or updater `next(prev)`. */
export function resolveFunctionalNext<T>(
  prev: T,
  next: T | ((prev: T) => T),
): T {
  return typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
}
