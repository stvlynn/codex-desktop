// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `qi` — pure helper.

import { isObjectPrototypePlain } from "./is-object-prototype-plain";

/** Deep-clone plain objects with sorted keys; arrays recurse; exclude optional keys. */
export function sortedKeyDeepClone(value: unknown, excludeKeys?: Set<string>): unknown {
  if (Array.isArray(value))
    return value.map((entry) => sortedKeyDeepClone(entry));
  if (!isObjectPrototypePlain(value)) return value;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(value as object).sort()) {
    if (excludeKeys?.has(key)) continue;
    out[key] = sortedKeyDeepClone((value as Record<string, unknown>)[key]);
  }
  return out;
}
