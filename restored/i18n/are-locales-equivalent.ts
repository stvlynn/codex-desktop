// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `y1o` / export `oE`.

import { isEnglishLocale } from "../utils/is-english-locale";
import { normalizeLocaleTag } from "../utils/normalize-locale-tag";

/**
 * When the left locale is English, require the right to be English too;
 * otherwise compare normalized tags.
 */
export function areLocalesEquivalent(
  left: string | null | undefined,
  right: string | null | undefined,
): boolean {
  return isEnglishLocale(left)
    ? isEnglishLocale(right)
    : normalizeLocaleTag(left) === normalizeLocaleTag(right);
}
