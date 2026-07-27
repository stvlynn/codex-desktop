// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `vvt` — pure helper.

/** Keep candidate paths that appear in `entries`, else `undefined`. */
export function filterPathsPresentIn(
  entries: Array<{ path: string }>,
  candidates: string[] | null | undefined,
): string[] | undefined {
  const matched = candidates?.filter((path) =>
    entries.some((entry) => entry.path === path),
  );
  return matched?.length ? matched : undefined;
}
