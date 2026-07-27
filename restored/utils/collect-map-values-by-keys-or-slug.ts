// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vei` / export `FG`.

import { slugifyLoose } from "./slugify-loose";

/** Collect unique map values for raw keys or their slugified forms. */
export function collectMapValuesByKeysOrSlug<T>(
  map: Map<string, T>,
  keys: Iterable<string>,
): T[] {
  const out = new Set<T>();
  for (const key of keys) {
    const value = map.get(key) ?? map.get(slugifyLoose(key));
    if (value != null) out.add(value);
  }
  return Array.from(out);
}
