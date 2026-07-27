// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Q_e` companion for export `kht`.

import { isUncPath, isWinDrivePath } from "../utils/win-path-predicates";
import { normalizeFileUrlPathname } from "./normalize-file-url-pathname";

/** True when a `file:` URL points at a safe local path (localhost / drive). */
export function isSafeFileUrl(url: URL): boolean {
  const host = url.hostname.toLowerCase();
  if (host.length > 0 && host !== "localhost") return false;
  const pathname = normalizeFileUrlPathname(url.pathname);
  return isWinDrivePath(pathname) ? true : !isUncPath(pathname);
}
