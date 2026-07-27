// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `PTe` companion for export `Wpt`.

import { isWindowsOrUncPath } from "./is-windows-or-unc-path";
import { normalizePosixPathSlashes } from "./normalize-posix-path-slashes";

/** Path normalized for inclusion checks (lowercased on Windows/UNC). */
export function comparablePath(value: string): string {
  const normalized = normalizePosixPathSlashes(value);
  return isWindowsOrUncPath(value) ? normalized.toLowerCase() : normalized;
}
