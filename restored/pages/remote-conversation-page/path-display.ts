// Restored from ref/webview/assets/remote-conversation-page-Bgy__zbM.js
// Local path basename/dirname helpers (avoids peer-gated `ght` path module).

/** POSIX-style basename without requiring the soft `ght` peers. */
export function pathBasename(filePath: string): string {
  const normalized = filePath.replace(/\\/g, "/");
  const trimmed = normalized.replace(/\/+$/, "");
  if (trimmed.length === 0) return filePath;
  const slash = trimmed.lastIndexOf("/");
  return slash === -1 ? trimmed : trimmed.slice(slash + 1);
}

/** POSIX-style dirname without requiring the soft `ght` peers. */
export function pathDirname(filePath: string): string {
  const normalized = filePath.replace(/\\/g, "/");
  const trimmed = normalized.replace(/\/+$/, "");
  if (trimmed.length === 0) return ".";
  const slash = trimmed.lastIndexOf("/");
  if (slash === -1) return ".";
  if (slash === 0) return "/";
  return trimmed.slice(0, slash);
}

/** Short display label: `parent/name` when parent is meaningful. */
export function shortPathLabel(filePath: string): string {
  const base = pathBasename(filePath);
  const parent = pathBasename(pathDirname(filePath));
  return parent && parent !== "." ? `${parent}/${base}` : base;
}
