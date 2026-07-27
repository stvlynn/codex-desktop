// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wXe` / export `Vdt`.

import { toPosixPath } from "./workspace-paths";

/**
 * Relativize `pathValue` against the common POSIX prefix of `siblings`.
 * When siblings collapse to one prefix, returns that prefix.
 */
export function relativePathFromCommonPrefix(
  pathValue: string,
  siblings: string[],
): string {
  const normalizedSiblings = siblings.map((p) =>
    toPosixPath(p).replace(/\/+$/u, ""),
  );
  if (new Set(normalizedSiblings).size <= 1) {
    return toPosixPath(pathValue).replace(/\/+$/u, "");
  }
  const parts = normalizedSiblings.map((p) => p.split("/").filter(Boolean));
  let depth = 0;
  for (;;) {
    const segment = parts[0]?.[depth];
    if (segment == null || parts.some((p) => p[depth] !== segment)) break;
    depth += 1;
  }
  const normalized = toPosixPath(pathValue).replace(/\/+$/u, "");
  return (
    normalized
      .split("/")
      .filter(Boolean)
      .slice(Math.max(depth - 1, 0))
      .join("/") || normalized
  );
}
