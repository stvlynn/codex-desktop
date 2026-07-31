// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: deep-clone + color equality helpers (legacy Fae / deepCloneArray–stableJsonStringify).

export function colorsEqual(styleCfg11346: { toProto(): unknown } | undefined, styleCfg11347: { toProto(): unknown } | undefined): boolean {
  return !styleCfg11346 && !styleCfg11347
    ? true
    : !styleCfg11346 || !styleCfg11347
      ? false
      : stableJsonStringify(styleCfg11346.toProto()) ===
        stableJsonStringify(styleCfg11347.toProto());
}
export function deepCloneArray(styleCfg13386: unknown[] | null | undefined): unknown[] {
  return styleCfg13386?.length
    ? styleCfg13386.map((item) => deepCloneValue(item))
    : [];
}
export function deepCloneValue(styleCfg7173: unknown): unknown {
  if (styleCfg7173 == null) return styleCfg7173;
  if (Array.isArray(styleCfg7173))
    return styleCfg7173.map((item) => deepCloneValue(item));
  if (typeof styleCfg7173 == "object") {
    let styleBind21674 = styleCfg7173,
      styleBind21675 = {};
    for (let [styleBind22882, styleBind22883] of Object.entries(
      styleBind21674,
    ))
      styleBind21675[styleBind22882] =
        deepCloneValue(styleBind22883);
    return styleBind21675;
  }
  return styleCfg7173;
}
export function stableJsonStringify(styleCfg14345: unknown): string {
  return JSON.stringify(styleCfg14345 ?? null);
}
