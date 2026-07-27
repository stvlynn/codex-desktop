// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rvt` / export `jst`.

/** Stable JSON cache key for a review annotation span. */
export function reviewAnnotationCacheKey(input: {
  label: unknown;
  path: unknown;
  fsPath: unknown;
  startLine: unknown;
  endLine: unknown;
}): string {
  return JSON.stringify([
    input.label,
    input.path,
    input.fsPath,
    input.startLine,
    input.endLine,
  ]);
}
