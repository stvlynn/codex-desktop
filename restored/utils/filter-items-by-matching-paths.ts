// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Dst` (internal vvt) — keep candidates that share a path with existing items.

export type PathBearing = { path: string };

/**
 * Bundle export `Dst`.
 * Returns the subset of `candidates` whose `path` appears in `existing`,
 * or `undefined` when the filtered list is empty/absent.
 */
export function filterItemsByMatchingPaths<T extends PathBearing>(
  existing: T[],
  candidates?: T[],
): T[] | undefined {
  const matched = candidates?.filter((candidate) =>
    existing.some((item) => item.path === candidate.path),
  );
  return matched?.length ? matched : undefined;
}
