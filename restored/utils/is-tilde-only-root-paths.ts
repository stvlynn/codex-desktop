// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dA` / export `I$`.

import { firstOrNull } from "./first-or-null";

/** True when roots are empty or a single `~`. */
export function isTildeOnlyRootPaths(
  rootPaths: readonly string[] | null | undefined,
): boolean {
  return (
    (rootPaths?.length ?? 0) === 0 ||
    ((rootPaths?.length ?? 0) === 1 && firstOrNull(rootPaths) === "~")
  );
}
