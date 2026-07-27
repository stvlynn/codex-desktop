// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nz` / export `DB`.

/** Prefer `rootPaths`; else wrap singular `path` (or empty). */
export function resolveRootPaths(value: {
  rootPaths?: string[] | null;
  path?: string | null;
}): string[] {
  return value.rootPaths ?? (value.path == null ? [] : [value.path]);
}
