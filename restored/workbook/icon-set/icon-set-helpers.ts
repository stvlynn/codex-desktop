// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: conditional-format icon-set name/count helpers (legacy workbookHelper 256-259).

import { DEFAULT_ICON_SET_NAME, ICON_SET_CATALOG } from "./icon-set-catalog";
export function normalizeIconSetName(isIn12661: unknown) {
  let isBind22477 = isIn12661?.trim();
  return isBind22477 && isBind22477.length > 0
    ? isBind22477
    : DEFAULT_ICON_SET_NAME;
}
export function lookupIconSet(isIn13927: unknown) {
  let isBind22752 = normalizeIconSetName(isIn13927);
  return ICON_SET_CATALOG[isBind22752] ?? null;
}
export function resolveIconCount(isIn9761: unknown) {
  let isBind20301 = lookupIconSet(isIn9761.iconSetName);
  if (isBind20301) return isBind20301.iconCount;
  let isBind20302 = isIn9761.fallbackThresholdCount;
  return isBind20302 === 4 || isBind20302 === 5 ? isBind20302 : 3;
}
export function defaultIconThresholds(isIn11401: unknown) {
  return isIn11401 >= 5
    ? [0, 20, 40, 60, 80]
    : isIn11401 === 4
      ? [0, 25, 50, 75]
      : [0, 33, 67];
}
