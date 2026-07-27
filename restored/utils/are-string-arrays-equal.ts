// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shallow string-array equality (`QA` / export `_Q`).

/** Bundle `QA` / export `_Q`. */
export function areStringArraysEqual(
  left: readonly string[],
  right: readonly string[],
): boolean {
  return (
    left.length === right.length && left.every((value, i) => value === right[i])
  );
}
