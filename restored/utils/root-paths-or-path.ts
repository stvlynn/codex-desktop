// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `nz` — pure helper.

/** Prefer `rootPaths`, else wrap singular `path`. */
export function rootPathsOrPath(value: {
  rootPaths?: string[];
  path?: string | null;
}): string[] {
  return value.rootPaths ?? (value.path == null ? [] : [value.path]);
}
