// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `uVt`) / export `wrt`.

import { useMemo } from "react";

/**
 * Bundle export `wrt` / internal `uVt`.
 * Memoize a DnD sensor descriptor.
 */
export function useDndSensor(
  sensor: unknown,
  options?: unknown,
): { sensor: unknown; options: unknown } {
  return useMemo(() => ({ sensor, options: options ?? {} }), [sensor, options]);
}
