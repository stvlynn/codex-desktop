// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: treemap legend entries (legacy Qye).
// Stage-3 wave-134.

import { aggregateTreemapSeriesPaths as workbookHelper475 } from "./aggregate-treemap-paths-impl";
import { workbookHelper477 } from "../chart-path-colors";

export function Qye(cttIn6532: any, cttIn6533: any) {
  let cttBind16764 = workbookHelper475(cttIn6532);
  if (cttBind16764.length === 0) return [];
  let cttBind16765 = workbookHelper477(cttIn6533, cttBind16764),
    cttBind16766 = new Set();
  for (let cttBind22456 of cttBind16764) {
    let cttBind22745 = cttBind22456.path[0];
    !cttBind22745 ||
      cttBind16766.has(cttBind22745) ||
      cttBind16766.add(cttBind22745);
  }
  return Array.from(cttBind16766.values()).map((item) => ({
    key: item,
    label: item,
    color: cttBind16765(item),
  }));
}
