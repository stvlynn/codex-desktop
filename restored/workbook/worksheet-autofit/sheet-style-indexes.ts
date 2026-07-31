// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: column/row styleIndex maps + cell resolve (legacy Binding234–236).

export function buildColumnStyleIndexArray(afIn5301: unknown) {
  let afBind14926 = [];
  for (let afBind15887 of afIn5301.columns ?? []) {
    let afBind16599 = afBind15887,
      afBind16600 = typeof afBind16599?.styleIndex == "number" ? afBind16599.styleIndex : undefined;
    if (typeof afBind16600 == "number") {
      let afBind19974 = Math.max(0, (afBind15887.min ?? 1) - 1),
        afBind19975 = Math.max(afBind19974, (afBind15887.max ?? afBind15887.min ?? 1) - 1);
      for (let afBind22929 = afBind19974; afBind22929 <= afBind19975; afBind22929++) afBind14926[afBind22929] ?? (afBind14926[afBind22929] = afBind16600);
    }
  }
  return afBind14926;
}
export function buildRowStyleIndexMap(afIn8024: unknown) {
  let afBind18521 = new Map();
  for (let afBind20165 of afIn8024.rows ?? []) if (typeof afBind20165.styleIndex == "number") {
    let afBind22311 = Math.max(0, (afBind20165.index ?? 1) - 1);
    afBind18521.set(afBind22311, afBind20165.styleIndex);
  }
  return afBind18521;
}
export function resolveCellStyleIndex(afIn11226: unknown, afIn11227: unknown, afIn11228: unknown, afIn11229: unknown, afIn11230: unknown) {
  let afBind21700 = afIn11229.get(afIn11227),
    afBind21701 = afIn11230[afIn11228];
  return afIn11226?.styleIndex ?? afBind21700 ?? afBind21701 ?? 0;
}
