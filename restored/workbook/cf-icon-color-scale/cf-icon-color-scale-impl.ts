// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF icon-set pick (Fht) + color-scale interpolate (Iht).
// Stage-3 wave-119.

import { cicH } from "./boundary-hooks";

export function Fht(
  cicIn2230: any,
  cicIn2231: any,
  cicIn2232: any,
  cicIn2233: any,
) {
  let cicBind9277 = cicH.resolveIconSetId(cicIn2230.iconSet?.iconSet),
    cicBind9278 = cicH.getIconSetDef(cicBind9277);
  if (!cicBind9278) return null;
  let cicBind9279 = cicH.buildIconStats({
    ranges: cicIn2231,
    getCell: cicIn2233,
  });
  if (!cicBind9279) return null;
  let cicBind9280 = cicH.iconThresholdMet({
      iconSetName: cicBind9277,
      fallbackThresholdCount: cicIn2230.iconSet?.cfvos?.length,
    }),
    cicBind9281 = cicH.pickIconIndex(cicBind9280).map((item) => ({
      type: "percent",
      val: String(item),
      gte: true,
    })),
    cicBind9282 = (
      cicIn2230.iconSet?.cfvos?.length ? cicIn2230.iconSet.cfvos : cicBind9281
    )
      .slice(0, cicBind9280)
      .map((item) => ({
        value: cicH.evalIconRule({
          cfvo: item,
          stats: cicBind9279,
          treatNumericValuesAsPercent: cicIn2230.iconSet?.percent === true,
        }),
        gte: item.gte !== false,
      }));
  return {
    ranges: cicIn2231,
    priority: cicIn2232,
    iconSetName: cicBind9278.name,
    iconCount: cicBind9280,
    showValue: cicIn2230.iconSet?.showValue !== false,
    reverse: cicIn2230.iconSet?.reverse === true,
    thresholds: cicBind9282,
  };
}
export function Iht(cicIn2241: any, cicIn2242: any) {
  let cicBind9288 =
      cicIn2241.vMax === cicIn2241.vMin
        ? 0
        : (cicIn2242 - cicIn2241.vMin) / (cicIn2241.vMax - cicIn2241.vMin),
    cicBind9289 = Math.max(0, Math.min(1, cicBind9288));
  if (Number.isNaN(cicBind9289)) return null;
  let cicBind9290 = cicIn2241.stops;
  if (cicBind9290.length === 0) return null;
  let cicBind9291 = cicBind9290[0]?.rgb ?? [0, 0, 0];
  if (cicBind9290.length === 1) cicBind9291 = cicBind9290[0]?.rgb ?? [0, 0, 0];
  else {
    let cicBind13097 = 0;
    for (
      ;
      cicBind13097 < cicBind9290.length - 1 &&
      cicBind9289 > (cicBind9290[cicBind13097 + 1]?.pos ?? 0);
    )
      cicBind13097 += 1;
    let cicBind13098 = cicBind9290[cicBind13097];
    if (!cicBind13098) return null;
    let cicBind13099 =
      cicBind9290[Math.min(cicBind13097 + 1, cicBind9290.length - 1)];
    if (!cicBind13099) return null;
    let cicBind13100 =
      cicBind13098.pos === cicBind13099.pos
        ? 0
        : (cicBind9289 - cicBind13098.pos) /
          (cicBind13099.pos - cicBind13098.pos);
    cicBind9291 = [
      Math.round(
        cicBind13098.rgb[0] +
          (cicBind13099.rgb[0] - cicBind13098.rgb[0]) * cicBind13100,
      ),
      Math.round(
        cicBind13098.rgb[1] +
          (cicBind13099.rgb[1] - cicBind13098.rgb[1]) * cicBind13100,
      ),
      Math.round(
        cicBind13098.rgb[2] +
          (cicBind13099.rgb[2] - cicBind13098.rgb[2]) * cicBind13100,
      ),
    ];
  }
  return `rgba(${cicBind9291[0]},${cicBind9291[1]},${cicBind9291[2]},1)`;
}
