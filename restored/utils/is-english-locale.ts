// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `v1o` / export `aE`.

import { normalizeLocaleTag } from "./normalize-locale-tag";

/** True for `en` / `en-*` locale tags. */
export function isEnglishLocale(value: string | null | undefined): boolean {
  const tag = normalizeLocaleTag(value);
  return tag == null ? false : tag === "en" || tag.startsWith("en-");
}
