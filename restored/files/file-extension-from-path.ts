// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VT` companion (export `m6` was historically mis-bound; keep local helper).

/** Lowercased file extension without dot, or null. */
export function fileExtensionFromPath(filePath: string): string | null {
  const lower = filePath.toLowerCase();
  const slash = Math.max(lower.lastIndexOf("/"), lower.lastIndexOf("\\"));
  const base = slash >= 0 ? lower.slice(slash + 1) : lower;
  const dot = base.lastIndexOf(".");
  return dot > 0 && dot < base.length - 1 ? base.slice(dot + 1) : null;
}
