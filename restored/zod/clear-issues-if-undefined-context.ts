// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `xc` — zod helper.

type IssueBag = { issues: unknown[]; value?: unknown };

/** When issues exist and context is undefined, return an empty issues bag. */
export function clearIssuesIfUndefinedContext<T extends IssueBag>(
  result: T,
  context: unknown,
): T | { issues: []; value: undefined } {
  return result.issues.length && context === undefined
    ? { issues: [], value: undefined }
    : result;
}
