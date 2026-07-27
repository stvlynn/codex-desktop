// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `RY` — pure helper; also export P1.

/**
 * Return `prev` when it is element-wise === equal to `next`; otherwise `next`.
 * Used to keep referential equality across renders.
 */
export function reuseArrayIfShallowEqual<T>(prev: T[], next: T[]): T[] {
  if (prev.length !== next.length) return next;
  for (let i = 0; i < next.length; i += 1) {
    if (prev[i] !== next[i]) return next;
  }
  return prev;
}
