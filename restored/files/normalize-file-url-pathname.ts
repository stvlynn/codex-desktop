// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$_e` companion for `Q_e` / `kht`.

import { replaceBackslashesWithSlashes } from "./replace-backslashes-with-slashes";
import { stripLeadingDriveSlash } from "./strip-leading-drive-slash";

/** Normalize a file: URL pathname for local-path checks. */
export function normalizeFileUrlPathname(pathname: string): string {
  return stripLeadingDriveSlash(
    replaceBackslashesWithSlashes(pathname).replace(/^\/{3,}/, "//"),
  );
}
