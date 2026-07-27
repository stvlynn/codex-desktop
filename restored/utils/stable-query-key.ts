// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Ki` — pure helper.

import { isObjectPrototypePlain } from "./is-object-prototype-plain";
import { sortedKeyDeepClone } from "./sorted-key-deep-clone";

/** Build a stable query key (custom key fn, identity, or sorted JSON). */
export function stableQueryKey(
  value: unknown,
  options?: {
    key?: (value: unknown) => unknown;
    excludeFieldsFromKey?: string[];
  },
): unknown {
  if (options?.key != null) return options.key(value);
  if (!Array.isArray(value) && !isObjectPrototypePlain(value)) return value;
  const exclude =
    isObjectPrototypePlain(value) && options?.excludeFieldsFromKey != null
      ? new Set(options.excludeFieldsFromKey)
      : undefined;
  return JSON.stringify(sortedKeyDeepClone(value, exclude));
}
