// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `gs` — pure helper.

/** Unshift a path segment onto each Zod-like issue. */
export function prependIssuePath<T extends { path?: Array<string | number> }>(
  segment: string | number,
  issues: T[],
): T[] {
  return issues.map((issue) => {
    const target = issue;
    target.path ?? (target.path = []);
    target.path.unshift(segment);
    return target;
  });
}
