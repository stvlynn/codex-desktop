// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: stacked/percent chart value domain (legacy helper #389).
// Stage-3 wave-109.

import { min as AppInitialNat } from "../../vendor/d3-array-min";

void AppInitialNat;

export function categoryCount(csdIn9916: any) {
  return csdIn9916.categories.length > 0
    ? csdIn9916.categories.length
    : csdIn9916.series.reduce(
        (accumulator, current) => Math.max(accumulator, current.values.length),
        0,
      );
}
export function stackedValueDomain(csdIn1531: any) {
  let csdBind7582 =
      csdIn1531.type === "area" || csdIn1531.type === "area3D",
    csdBind7583 =
      csdIn1531.type === "line" || csdIn1531.type === "line3D",
    csdBind7584 = csdIn1531.barGrouping,
    csdBind7585 = csdIn1531.areaGrouping,
    csdBind7586 = csdIn1531.lineGrouping,
    csdBind7587 = false,
    csdBind7588 = false;
  if (
    (csdBind7582
      ? ((csdBind7587 = csdBind7585 === "stacked"),
        (csdBind7588 = csdBind7585 === "percentStacked"))
      : csdBind7583
        ? ((csdBind7587 = csdBind7586 === "stacked"),
          (csdBind7588 = csdBind7586 === "percentStacked"))
        : ((csdBind7587 = csdBind7584 === "stacked"),
          (csdBind7588 = csdBind7584 === "percentStacked")),
    csdBind7587)
  ) {
    if (csdIn1531.series.length === 1)
      return seriesValueDomain(csdIn1531.series);
    let csdBind14050 = categoryCount(csdIn1531),
      csdBind14051 = 0,
      csdBind14052 = 0;
    for (
      let csdBind17731 = 0;
      csdBind17731 < csdBind14050;
      csdBind17731++
    ) {
      let csdBind18523 = 0,
        csdBind18524 = 0;
      csdIn1531.series.forEach((item) => {
        let csdBind22209 = item.values[csdBind17731] ?? 0;
        csdBind22209 >= 0
          ? (csdBind18523 += csdBind22209)
          : (csdBind18524 += csdBind22209);
      });
      csdBind18523 > csdBind14051 &&
        (csdBind14051 = csdBind18523);
      csdBind18524 < csdBind14052 &&
        (csdBind14052 = csdBind18524);
    }
    return {
      min: Math.min(0, csdBind14052),
      max: Math.max(0, csdBind14051),
    };
  }
  if (csdBind7588) {
    let csdBind19162 = csdIn1531.series.some((item) =>
        item.values.some((_item) => (_item ?? 0) < 0),
      ),
      csdBind19163 = csdIn1531.series.some((item) =>
        item.values.some((_item) => (_item ?? 0) > 0),
      );
    return {
      min: csdBind19162 ? -1 : 0,
      max: +!!csdBind19163,
    };
  }
  return seriesValueDomain(csdIn1531.series);
}
export function seriesValueDomain(csdIn8662: any) {
  let [csdBind19164, csdBind19165] = AppInitialNat(
    csdIn8662.flatMap((item) => item.values),
  );
  return {
    min:
      csdBind19164 !== undefined &&
      Number.isFinite(csdBind19164)
        ? csdBind19164
        : 0,
    max:
      csdBind19165 !== undefined &&
      Number.isFinite(csdBind19165)
        ? csdBind19165
        : 0,
  };
}

/** Legacy aliases. */
export const _ye = categoryCount;
/** Compat alias for barrels. */
export const workbookHelper389 = categoryCount;
/** Compat alias for barrels. */
export const workbookHelper390 = categoryCount;
