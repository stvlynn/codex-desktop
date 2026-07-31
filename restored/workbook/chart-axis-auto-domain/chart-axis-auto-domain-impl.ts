// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: continuous-axis auto domain + major unit (legacy bye cluster).
// Stage-3 wave-103.

import { cadH } from "./boundary-hooks";

void cadH;

export function computeAxisAutoDomain({
  sourceMin: any,
  sourceMax: any,
  axis: any,
  expandWideValuesToZero: any,
  expandNarrowValuesTowardZero: any,
  maximumAutoMainIncrementCount: any,
  automaticMajorUnit: any,
}: any) {
  let cadBind6215 = axis?.min === undefined,
    cadBind6216 = axis?.max === undefined,
    cadBind6217 = axis?.min ?? sourceMin,
    cadBind6218 = axis?.max ?? sourceMax,
    cadBind6219 = sourceMax - sourceMin,
    cadBind6220 = sourceMin,
    cadBind6221 = sourceMax,
    cadBind6222 = maximumAutoMainIncrementCount;
  cadBind6215 &&
    sourceMin > 0 &&
    (sourceMin !== sourceMax &&
    sourceMin / sourceMax >= cadH.narrowTowardZeroRatio &&
    expandNarrowValuesTowardZero
      ? ((cadBind6220 = sourceMin - cadBind6219 / 2),
        (cadBind6222 = Math.min(cadBind6222, cadH.narrowIncrementCap)))
      : expandWideValuesToZero && (cadBind6220 = 0));
  cadBind6216 &&
    sourceMax < 0 &&
    (sourceMin !== sourceMax &&
    sourceMax / sourceMin >= cadH.narrowTowardZeroRatio &&
    expandNarrowValuesTowardZero
      ? ((cadBind6221 = sourceMax + cadBind6219 / 2),
        (cadBind6222 = Math.min(cadBind6222, cadH.narrowIncrementCap)))
      : expandWideValuesToZero && (cadBind6221 = 0));
  let cadBind6223 =
      (cadBind6216 ? cadBind6221 : cadBind6218) -
      (cadBind6215 ? cadBind6220 : cadBind6217),
    cadBind6224 =
      axis?.majorUnit !== undefined &&
      Number.isFinite(axis.majorUnit) &&
      axis.majorUnit > 0
        ? axis.majorUnit
        : undefined,
    cadBind6225 = cadBind6224 ?? automaticMajorUnit;
  if (cadBind6225 === undefined) {
    let cadBind22702 = 1;
    cadBind6223 > 0 && (cadBind22702 = cadBind6223 / cadBind6222);
    cadBind6225 = niceMajorUnit(cadBind22702);
  }
  for (;;) {
    let cadBind12357 = cadBind6215
        ? floorToMajor(cadBind6220, cadBind6225)
        : cadBind6217,
      cadBind12358 = cadBind6216
        ? ceilToMajor(cadBind6221, cadBind6225)
        : cadBind6218;
    cadBind12357 === cadBind12358 &&
      (cadBind12358 = cadBind12357 + cadBind6225);
    let cadBind12359 = cadBind12358 - cadBind12357;
    cadBind6215 &&
      cadBind12357 !== 0 &&
      cadBind12359 > 0 &&
      (cadBind12358 - sourceMin) / cadBind12359 > cadH.expandThreshold &&
      (cadBind12357 -= cadBind6225);
    let cadBind12360 = cadBind12358 - cadBind12357;
    cadBind6216 &&
      cadBind12358 !== 0 &&
      cadBind12360 > 0 &&
      (sourceMax - cadBind12357) / cadBind12360 > cadH.expandThreshold &&
      (cadBind12358 += cadBind6225);
    cadBind12357 = Number(cadBind12357.toPrecision(15));
    cadBind12358 = Number(cadBind12358.toPrecision(15));
    let cadBind12361 = Math.floor(
      Number(((cadBind12358 - cadBind12357) / cadBind6225).toPrecision(15)),
    );
    if (
      cadBind6224 !== undefined ||
      automaticMajorUnit !== undefined ||
      cadBind12361 <= cadBind6222
    )
      return {
        domain: [cadBind12357, cadBind12358],
        majorUnit: cadBind6225,
      };
    cadBind6225 = bumpMajorUnit(cadBind6225);
  }
}
export function niceMajorUnit(cadIn8595: any) {
  if (!Number.isFinite(cadIn8595) || cadIn8595 <= 0) return 1;
  let cadBind19100 = 10 ** Math.floor(Math.log10(cadIn8595)),
    cadBind19101 = cadIn8595 / cadBind19100;
  return cadBind19101 <= 1
    ? cadBind19100
    : cadBind19101 <= 2
      ? 2 * cadBind19100
      : cadBind19101 <= 5
        ? 5 * cadBind19100
        : 10 * cadBind19100;
}
export function bumpMajorUnit(cadIn10525: any) {
  let cadBind20985 = 10 ** Math.floor(Math.log10(cadIn10525)),
    cadBind20986 = cadIn10525 / cadBind20985;
  return cadBind20986 < 2
    ? 2 * cadBind20985
    : cadBind20986 < 5
      ? 5 * cadBind20985
      : 10 * cadBind20985;
}
export function floorToMajor(cadIn14379: any, cadIn14380: any) {
  return Math.floor(cadIn14379 / cadIn14380) * cadIn14380;
}
export function ceilToMajor(cadIn14611: any, cadIn14612: any) {
  return Math.ceil(cadIn14611 / cadIn14612) * cadIn14612;
}

/** Legacy aliases. */
export const bye = computeAxisAutoDomain;
export const workbookHelper401 = ceilToMajor;
