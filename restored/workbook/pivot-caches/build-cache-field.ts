// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-52: pivot cache field shared-items builder (legacy Cne + date ISO helper).

export function buildCacheFieldFromColumn(
  pivotIn1039: any,
  pivotIn1040: any,
  pivotIn1041: any,
  pivotIn1042: any,
) {
  let pivotBind6249 = pivotIn1040.map((item) => item[pivotIn1041]),
    pivotBind6250 = new Set(),
    pivotBind6251 = false,
    pivotBind6252 = false,
    pivotBind6253 = false,
    pivotBind6254 = false,
    pivotBind6255,
    pivotBind6256,
    pivotBind6257,
    pivotBind6258;
  for (let pivotBind12415 of pivotBind6249) {
    if (pivotBind12415 == null || pivotBind12415 === "") {
      pivotBind6251 = true;
      continue;
    }
    typeof pivotBind12415 == "number"
      ? ((pivotBind6252 = true),
        (pivotBind6255 =
          pivotBind6255 == null
            ? pivotBind12415
            : Math.min(pivotBind6255, pivotBind12415)),
        (pivotBind6256 =
          pivotBind6256 == null
            ? pivotBind12415
            : Math.max(pivotBind6256, pivotBind12415)))
      : typeof pivotBind12415 == "string" || typeof pivotBind12415 == "boolean"
        ? (pivotBind6253 = true)
        : pivotBind12415 instanceof Date &&
          ((pivotBind6254 = true),
          (pivotBind6257 =
            pivotBind6257 == null
              ? pivotBind12415
              : pivotBind6257 < pivotBind12415
                ? pivotBind6257
                : pivotBind12415),
          (pivotBind6258 =
            pivotBind6258 == null
              ? pivotBind12415
              : pivotBind6258 > pivotBind12415
                ? pivotBind6258
                : pivotBind12415));
    pivotIn1042.includeSharedValues &&
      pivotBind6250.add(String(pivotBind12415));
  }
  let pivotBind6259 = {
      values: [],
      items: [],
    },
    pivotBind6260 =
      Number(pivotBind6252) + Number(pivotBind6253) + Number(pivotBind6254) > 1;
  if (pivotBind6252) {
    pivotBind6259.containsNumeric = true;
    pivotBind6259.containsString = pivotBind6253;
    pivotBind6259.containsSemiMixedTypes = pivotBind6260;
    pivotBind6255 != null && (pivotBind6259.minValue = pivotBind6255);
    pivotBind6256 != null && (pivotBind6259.maxValue = pivotBind6256);
  } else if (pivotBind6254) {
    pivotBind6259.containsDate = true;
    pivotBind6259.containsString = pivotBind6253;
    pivotBind6259.containsSemiMixedTypes = pivotBind6260;
    pivotBind6259.containsNonDate = pivotBind6252 || pivotBind6253;
    pivotBind6257 &&
      (pivotBind6259.minDate = toIsoDateWithoutMs(pivotBind6257));
    pivotBind6258 &&
      (pivotBind6259.maxDate = toIsoDateWithoutMs(pivotBind6258));
  } else if (pivotIn1042.includeSharedValues) {
    pivotBind6251 && pivotBind6250.add("");
    let pivotBind21952 = Array.from(pivotBind6250);
    pivotBind6259.values = pivotBind21952;
    pivotBind6259.count = pivotBind21952.length;
  }
  return {
    name: pivotIn1039,
    numFmtId: pivotIn1042.numFmtId ?? 0,
    sharedItems: pivotBind6259,
    cachedUniqueNames: [],
  };
}
function toIsoDateWithoutMs(pivotIn13385: Date): string {
  return pivotIn13385.toISOString().replace(".000Z", "");
}
