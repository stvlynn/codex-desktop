// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-11: deep-clone + fill-gap merge for TextStyle layers (Binding438 cluster).

import { isPlainObject } from "./is-plain-object";

/** Legacy workbookHelper 106 — identical to Binding437 / isPlainObject. */
export function isStylePlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return isPlainObject(value);
}

/** Legacy workbookHelper 107 — deep clone of plain objects / arrays. */
export function deepCloneStyleValue<T>(value: T): T {
  if (Array.isArray(value))
    return value.map((item) => deepCloneStyleValue(item)) as T;
  if (!isStylePlainObject(value)) return value;
  const out: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value))
    out[key] = deepCloneStyleValue(child);
  return out as T;
}

/**
 * Legacy workbookHelper 108 — deep merge that only fills null/undefined slots
 * (earlier layers win; later layers fill gaps; nested plain objects recurse).
 */
export function deepMergeFillGaps(
  target: Record<string, unknown>,
  source: Record<string, unknown> | null | undefined,
): Record<string, unknown> {
  if (!source) return target;
  for (const [key, value] of Object.entries(source)) {
    const existing = target[key];
    if (existing == null) {
      target[key] = deepCloneStyleValue(value);
      continue;
    }
    isStylePlainObject(existing) &&
      isStylePlainObject(value) &&
      deepMergeFillGaps(existing, value);
  }
  return target;
}

/**
 * Legacy `workbookBinding438` — cascade-merge style layers (first wins for
 * defined keys; later layers only fill gaps).
 */
export function mergeStyleLayers(
  primary: unknown,
  ...layers: unknown[]
): Record<string, unknown> {
  const result = deepMergeFillGaps(
    {},
    (deepCloneStyleValue(primary) as Record<string, unknown> | null) ?? {},
  );
  for (const layer of layers)
    deepMergeFillGaps(result, layer as Record<string, unknown> | null | undefined);
  return result;
}
