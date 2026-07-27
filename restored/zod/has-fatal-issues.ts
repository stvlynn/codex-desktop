// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `hs` — zod helper.

type IssueLike = { continue?: boolean };

/** True when the result is aborted or has a non-continuable issue. */
export function hasFatalIssues(
  result: { aborted?: boolean; issues: Array<IssueLike | undefined> },
  fromIndex: number = 0,
): boolean {
  if (result.aborted === true) return true;
  for (let i = fromIndex; i < result.issues.length; i++) {
    if (result.issues[i]?.continue !== true) return true;
  }
  return false;
}
