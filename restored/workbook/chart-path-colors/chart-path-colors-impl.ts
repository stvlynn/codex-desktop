// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: ordinal color scale from hierarchy path keys (legacy workbookHelper477).
// Stage-3 wave-124.

import { scaleOrdinal } from "../../vendor/d3-scale-linear";
import { schemeSet2 } from "../../boundaries/d3-hierarchy";

export function buildPathOrdinalColorScale(cpcIn2869: any, cpcIn2870: any) {
  let cpcBind10679 = new Set();
  for (let cpcBind22407 of cpcIn2870) {
    let cpcBind22691 = cpcBind22407.path[0];
    cpcBind22691 && cpcBind22691.length > 0 && cpcBind10679.add(cpcBind22691);
  }
  let cpcBind10680 = Array.from(cpcBind10679.values());
  if (cpcBind10680.length === 0)
    return (cpcIn16147) => schemeSet2[0] ?? "#999999";
  let cpcBind10681 = [
      "accent1",
      "accent2",
      "accent3",
      "accent4",
      "accent5",
      "accent6",
    ],
    cpcBind10682 = (cpcIn10585) => {
      let cpcBind21059 = cpcBind10681[cpcIn10585 % cpcBind10681.length];
      return (
        cpcIn2869.colorMap[cpcBind21059 ?? ""] ||
        (schemeSet2[cpcIn10585 % schemeSet2.length] ??
          schemeSet2[0] ??
          "#999999")
      );
    },
    cpcBind10683 = cpcBind10680.map((item, index) => cpcBind10682(index)),
    cpcBind10684 = scaleOrdinal().domain(cpcBind10680).range(cpcBind10683);
  return (cpcIn9917) => {
    if (!cpcIn9917) return schemeSet2[0] ?? "#999999";
    if (cpcBind10684.domain().includes(cpcIn9917))
      return cpcBind10684(cpcIn9917);
    let cpcBind20455 = cpcBind10684.domain().length;
    return cpcBind10682(cpcBind20455);
  };
}

/** Legacy alias (wave-124). */
export const workbookHelper477 = buildPathOrdinalColorScale;
