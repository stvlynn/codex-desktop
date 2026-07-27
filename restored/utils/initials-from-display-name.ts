// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qZl` / export `ta`.

import { trimToNull } from "./trim-to-null";

/** Build 1–2 letter initials from a display name (fallback `?`). */
export function initialsFromDisplayName(displayName: string | null | undefined): string {
  const parts = trimToNull(displayName)?.split(/\s+/) ?? [];
  const initials =
    `${parts[0]?.charAt(0) ?? ""}${parts.length > 1 ? (parts.at(-1)?.charAt(0) ?? "") : ""}`.toUpperCase();
  return initials.length > 0 ? initials : "?";
}
