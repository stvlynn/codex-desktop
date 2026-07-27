// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fBr`/`hBr`/`gBr` / exports `SZ`/`wZ`/`xZ` (Map injected).

import { nullSeparatedMapKey } from "./null-separated-map-key";

/** Read a NUL-keyed map entry. */
export function getNullKeyedMapValue<T>(
  map: Map<string, T>,
  left: string,
  right: string,
): T | null {
  return map.get(nullSeparatedMapKey(left, right)) ?? null;
}
