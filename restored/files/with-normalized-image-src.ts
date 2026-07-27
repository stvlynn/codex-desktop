// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Otn` / export `T9`.

import { normalizeImageSrc } from "./normalize-image-src";

/** Attach a normalized `src` from `savedPath` or `result`. */
export function withNormalizedImageSrc<
  T extends { savedPath?: unknown; result?: unknown; src?: unknown },
>(value: T): T & { src: string | null } {
  const fromSaved =
    typeof value.savedPath === "string"
      ? normalizeImageSrc(value.savedPath)
      : null;
  return {
    ...value,
    src: fromSaved ?? normalizeImageSrc(String(value.result ?? "")),
  };
}
