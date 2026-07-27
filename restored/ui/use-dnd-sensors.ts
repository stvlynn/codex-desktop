// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `dVt`) / export `Trt`.

import { useMemo } from "react";

/**
 * Bundle export `Trt` / internal `dVt`.
 * Memoize a filtered list of DnD sensors.
 */
export function useDndSensors(...sensors: unknown[]): unknown[] {
  return useMemo(
    () => [...sensors].filter((sensor) => sensor != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mirrors bundle deps on args
    [...sensors],
  );
}
