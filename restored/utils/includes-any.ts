// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `cft` — pure helper.

/** True when `haystack` includes any of `needles` (or default `fallback`). */
export function includesAny(
  haystack: string,
  needles: string | string[] | null | undefined,
  fallback: boolean,
): boolean {
  let list = needles;
  if (typeof list === "string") list = [list];
  if (!list || list.length === 0) return fallback;
  let i = -1;
  while (++i < list.length) {
    if (haystack.includes(list[i]!)) return true;
  }
  return false;
}
