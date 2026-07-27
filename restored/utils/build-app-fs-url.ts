// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mna` / export `rR`. Companions `_na`/`vna`/`gna`/`c_e`/`Ll`.

import { isWinDrivePath } from "./win-path-predicates";
import { toForwardSlashes } from "./workspace-paths";

export const APP_FS_SCHEME_PREFIX = "app://fs";
export const APP_FS_PATH_PREFIX = "/@fs";

/** Ensure a win-drive path gets a leading slash for URI encoding. */
export function ensureLeadingSlashForUri(pathValue: string): string {
  return isWinDrivePath(pathValue) && !pathValue.startsWith("/")
    ? `/${pathValue}`
    : pathValue;
}

/** Encode a filesystem path for the app `/@fs` bridge. */
export function encodeAppFsPath(pathValue: string): string {
  const normalized = ensureLeadingSlashForUri(toForwardSlashes(pathValue));
  const encoded = encodeURI(normalized)
    .replaceAll("#", "%23")
    .replaceAll("?", "%3F");
  return `${APP_FS_PATH_PREFIX}${encoded}`;
}

/** Full `app://fs/@fs/...` URL for a local filesystem path. */
export function buildAppFsUrl(pathValue: string): string {
  return `${APP_FS_SCHEME_PREFIX}${encodeAppFsPath(pathValue)}`;
}
