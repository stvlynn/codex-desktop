// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `c_e` companion for `Ydt` / image src helpers.

import { isWinDrivePath } from "../utils/win-path-predicates";

/** Prefix `/` when a Windows drive path is missing it. */
export function ensureLeadingSlashForWindowsDrive(value: string): string {
  return isWinDrivePath(value) && !value.startsWith("/") ? `/${value}` : value;
}
