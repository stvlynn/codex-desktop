// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CFVO position resolve (legacy wht/Tht/Eht/Dht).
// Stage-3 wave-129.

export function resolveCfvoPosition(crsIn3803: any) {
  let { cfvo, stats, treatNumericValuesAsPercent = false } = crsIn3803,
    crsBind12562 = (cfvo.type ?? "").trim().toLowerCase();
  switch (
    treatNumericValuesAsPercent &&
    (crsBind12562 === "" || crsBind12562 === "num")
      ? "percent"
      : crsBind12562
  ) {
    case "min":
      return stats.min;
    case "max":
      return stats.max;
    case "percent":
      return cfvoPercentOfRange(stats, Number(cfvo.val ?? 0));
    case "percentile":
      return cfvoPercentileOfSorted(stats, Number(cfvo.val ?? 0));
    default: {
      let crsBind22391 = Number(cfvo.val ?? 0);
      return Number.isFinite(crsBind22391) ? crsBind22391 : 0;
    }
  }
}
export function cfvoPercentOfRange(crsIn10939: any, crsIn10940: any) {
  let crsBind21451 = clampPercent(crsIn10940);
  return crsIn10939.max === crsIn10939.min
    ? crsIn10939.min
    : crsIn10939.min + ((crsIn10939.max - crsIn10939.min) * crsBind21451) / 100;
}
export function cfvoPercentileOfSorted(crsIn5447: any, crsIn5448: any) {
  let crsBind15218 = clampPercent(crsIn5448);
  if (crsIn5447.sortedValues.length === 1)
    return crsIn5447.sortedValues[0] ?? 0;
  let crsBind15219 = (crsBind15218 / 100) * (crsIn5447.sortedValues.length - 1),
    crsBind15220 = Math.floor(crsBind15219),
    crsBind15221 = Math.min(
      crsIn5447.sortedValues.length - 1,
      Math.ceil(crsBind15219),
    ),
    crsBind15222 = crsIn5447.sortedValues[crsBind15220] ?? 0,
    crsBind15223 = crsIn5447.sortedValues[crsBind15221] ?? crsBind15222,
    crsBind15224 = crsBind15219 - crsBind15220;
  return crsBind15222 + (crsBind15223 - crsBind15222) * crsBind15224;
}
export function clampPercent(crsIn12222: any) {
  return Number.isFinite(crsIn12222)
    ? Math.max(0, Math.min(100, crsIn12222))
    : 0;
}

export const wht = resolveCfvoPosition;
export const Tht = cfvoPercentOfRange;
export const Eht = cfvoPercentileOfSorted;
export const Dht = clampPercent;
