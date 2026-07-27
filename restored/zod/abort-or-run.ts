// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Sc` — zod helper.

type IssueBag = { issues: unknown[]; aborted?: boolean; value?: unknown };

/** Abort on issues; otherwise run the next Zod schema. */
export function abortOrRunZod(
  result: IssueBag,
  next: {
    _zod: {
      run: (
        payload: { value: unknown; issues: unknown[] },
        ctx: unknown,
      ) => unknown;
    };
  },
  ctx: unknown,
): unknown {
  return result.issues.length
    ? ((result.aborted = true), result)
    : next._zod.run({ value: result.value, issues: result.issues }, ctx);
}
