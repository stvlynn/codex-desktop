// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `_w` — pure helper.

/** Return path relative to root, or null when not under root. */
export function pathUnderRoot(fullPath: string, root: string): string | null {
  if (root === "/") return fullPath;
  if (!fullPath.toLowerCase().startsWith(root.toLowerCase())) return null;
  const cut = root.endsWith("/") ? root.length - 1 : root.length;
  const next = fullPath.charAt(cut);
  return next && next !== "/" ? null : fullPath.slice(cut) || "/";
}
