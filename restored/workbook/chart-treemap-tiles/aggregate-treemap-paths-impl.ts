// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: treemap series path aggregation.
// Stage-3 wave-113.

import { workbookHelper347 } from "../chart-asset";

const PATH_LEVEL_SEP = "\0";

void workbookHelper347;
void PATH_LEVEL_SEP;

export function aggregateTreemapSeriesPaths(cttIn2662: any) {
  let cttBind10170 = new Map();
  for (let cttBind10942 of cttIn2662.series) {
    let cttBind11183 = cttBind10942.values ?? [],
      cttBind11184 = padCategoryPaths(
        cttBind10942.categoryPaths,
        cttBind11183.length,
      ),
      cttBind11185 = workbookHelper347(cttBind10942, cttIn2662.categories);
    for (
      let cttBind12597 = 0;
      cttBind12597 < cttBind11183.length;
      cttBind12597 += 1
    ) {
      let cttBind13102 = cttBind11183[cttBind12597];
      if (
        typeof cttBind13102 != "number" ||
        !isFinite(cttBind13102) ||
        cttBind13102 <= 0
      )
        continue;
      let cttBind13103 = cttBind11184[cttBind12597]?.levels,
        cttBind13104 =
          cttBind13103 && cttBind13103.length ? cttBind13103 : undefined;
      if (!cttBind13104) {
        let cttBind22077 = cttBind11185?.[cttBind12597];
        typeof cttBind22077 == "string" &&
          cttBind22077.length > 0 &&
          (cttBind13104 = [cttBind22077]);
      }
      if (!cttBind13104 || cttBind13104.length === 0) continue;
      let cttBind13105 = [...cttBind13104].reverse(),
        cttBind13106 = cttBind13105.join(PATH_LEVEL_SEP),
        cttBind13107 = cttBind10170.get(cttBind13106);
      cttBind13107
        ? (cttBind13107.value += cttBind13102)
        : cttBind10170.set(cttBind13106, {
            path: cttBind13105,
            value: cttBind13102,
          });
    }
  }
  return Array.from(cttBind10170.values());
}
export function padCategoryPaths(cttIn8452: any, cttIn8453: any) {
  if (!cttIn8452 || cttIn8452.length === 0)
    return Array(cttIn8453).fill(undefined);
  if (cttIn8452.length >= cttIn8453) return cttIn8452;
  let cttBind18958 = cttIn8452.slice();
  for (; cttBind18958.length < cttIn8453; )
    cttBind18958.push({
      levels: [],
    });
  return cttBind18958;
}

export const Xye = padCategoryPaths;
