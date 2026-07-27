// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zl`/`Bl` — exports Uht/Wht.

const WIN_DRIVE_RE = /^[A-Za-z]:[\\/]/;
const UNC_RE = /^\\\\[^\\]+\\[^\\]+/;
const UNC_SLASH_RE = /^\/\/[^/]+\/[^/]+/;

/** `zl` / `Uht` */
export function isWinDrivePath(pathValue: string): boolean {
  return WIN_DRIVE_RE.test(pathValue);
}

/** `Bl` / `Wht` */
export function isUncPath(pathValue: string): boolean {
  return UNC_RE.test(pathValue) || UNC_SLASH_RE.test(pathValue);
}
