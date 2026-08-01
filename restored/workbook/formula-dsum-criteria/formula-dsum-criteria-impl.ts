// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: DSUM/DCOUNT criteria matrix helpers (legacy P8e/j8e nest).
// Stage-3 wave-123. Preferred P8e+j8e; owns M8e/N8e/normalizeLookupKey.

import { isArrayValue } from "../formula-array";
import {
  buildCriteriaPredicate,
  unwrapCriteriaScalar,
} from "../formula-criteria-predicate";

export function cloneMatrixOrArrayValues(fdcIn9488: any) {
  return Array.isArray(fdcIn9488)
    ? fdcIn9488.map((item) => (item ? [...item] : []))
    : fdcIn9488 !== undefined && isArrayValue(fdcIn9488)
      ? fdcIn9488.values.map((item) => [...item])
      : [];
}
export function buildColumnNameIndex(props: any) {
  let fdcBind20154 = new Map();
  return (
    props.forEach((item, index) => {
      let fdcBind22498 = normalizeLookupKey(item);
      fdcBind22498 &&
        !fdcBind20154.has(fdcBind22498) &&
        fdcBind20154.set(fdcBind22498, index);
    }),
    fdcBind20154
  );
}
export function normalizeLookupKey(props: any) {
  return typeof props == "string" && props.trim()
    ? props.trim().toUpperCase()
    : null;
}
export function resolveCriteriaColumnIndex(
  fdcIn6706: any,
  fdcIn6707: any,
  fdcIn6708: any,
) {
  let fdcBind17005 = unwrapCriteriaScalar(fdcIn6706);
  if (fdcBind17005 == null) return null;
  if (typeof fdcBind17005 == "number" && Number.isFinite(fdcBind17005)) {
    let fdcBind22385 = Math.trunc(fdcBind17005) - 1;
    return fdcBind22385 < 0 || fdcBind22385 >= fdcIn6707.length
      ? null
      : fdcBind22385;
  }
  let fdcBind17006 = normalizeLookupKey(fdcBind17005);
  return fdcBind17006 ? (fdcIn6708.get(fdcBind17006) ?? null) : null;
}
export function buildDsumCriteriaGroups(fdcIn3026: any, fdcIn3027: any) {
  let fdcBind11059 = cloneMatrixOrArrayValues(fdcIn3026);
  if (fdcBind11059.length === 0) return [];
  let fdcBind11060 = (fdcBind11059[0] ?? []).map((item) =>
    normalizeLookupKey(item),
  );
  if (!fdcBind11060.some((item) => item && fdcIn3027.has(item))) return null;
  let fdcBind11061 = [];
  for (
    let fdcBind14379 = 1;
    fdcBind14379 < fdcBind11059.length;
    fdcBind14379 += 1
  ) {
    let fdcBind15216 = fdcBind11059[fdcBind14379] ?? [],
      fdcBind15217 = [];
    for (
      let fdcBind16953 = 0;
      fdcBind16953 < fdcBind15216.length;
      fdcBind16953 += 1
    ) {
      let fdcBind17970 = fdcBind11060[fdcBind16953];
      if (!fdcBind17970) continue;
      let fdcBind17971 = fdcIn3027.get(fdcBind17970);
      if (fdcBind17971 == null) continue;
      let fdcBind17972 = fdcBind15216[fdcBind16953];
      if (fdcBind17972 == null) continue;
      let fdcBind17973 = buildCriteriaPredicate(fdcBind17972);
      fdcBind17973 &&
        fdcBind15217.push({
          columnIndex: fdcBind17971,
          test: fdcBind17973,
        });
    }
    fdcBind15217.length > 0 && fdcBind11061.push(fdcBind15217);
  }
  return (fdcBind11061.length === 0 && fdcBind11061.push([]), fdcBind11061);
}

/** Legacy aliases (wave-123). */
export const j8e = cloneMatrixOrArrayValues;
export const M8e = buildColumnNameIndex;
export const N8e = resolveCriteriaColumnIndex;
export const P8e = buildDsumCriteriaGroups;
