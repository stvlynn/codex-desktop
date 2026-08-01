// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: UUID helpers (legacy Uue / workbookHelper298 / workbookV).

import {
  ensureStableIdConstantsInit,
  uuidReplaceRe,
} from "./ensure-stable-id-constants";

/** Legacy `Uue` — Math.random UUID v4 fallback. */
export function fallbackRandomUuid(): string {
  ensureStableIdConstantsInit();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    uuidReplaceRe,
    (ch: string) => {
      let nibble = Math.floor(Math.random() * 16);
      return (ch === "x" ? nibble : (nibble & 3) | 8).toString(16);
    },
  );
}

/** Legacy `workbookHelper298`. */
export function randomUuid(): string {
  if (typeof crypto < "u" && "randomUUID" in crypto)
    try {
      return crypto.randomUUID();
    } catch {}
  return fallbackRandomUuid();
}

/** Legacy `workbookV` — braced uppercase UUID. */
export function bracedUuidUpper(): string {
  return `{${randomUuid().toUpperCase()}}`;
}
