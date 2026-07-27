// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `sft` — pure helper.

import { includesAny } from "./includes-any";

/** Match micromark construct include/exclude lists. */
export function matchesConstructFilters(
  haystack: string,
  filters: {
    inConstruct?: string | string[];
    notInConstruct?: string | string[];
  },
): boolean {
  return (
    includesAny(haystack, filters.inConstruct, true) &&
    !includesAny(haystack, filters.notInConstruct, false)
  );
}
