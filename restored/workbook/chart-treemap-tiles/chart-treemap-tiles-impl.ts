// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: d3-hierarchy treemap tile layout (legacy Yye).
// Chart-paint still wires this as paintAxis for back-compat.
// Stage-3 wave-105.

import { a, c, r as srcR } from "../../boundaries/d3-hierarchy";
import { cttH } from "./boundary-hooks";

void a;
void c;
void srcR;
void cttH;

export function layoutTreemapTiles(
  cttIn875: any,
  cttIn876: any,
  cttIn877: any,
) {
  let cttBind5602 = cttH.bh475(cttIn875);
  if (cttBind5602.length === 0)
    return {
      leaves: [],
      parents: [],
    };
  let cttBind5603 = c(cttH.bh476(cttH.flattenCategoryPaths(cttBind5602)))
      .sum((cttIn13498) =>
        typeof cttIn13498.value == "number" && cttIn13498.value > 0
          ? cttIn13498.value
          : 0,
      )
      .sort(
        (cttIn15492, cttIn15493) =>
          (cttIn15493.value ?? 0) - (cttIn15492.value ?? 0),
      ),
    cttBind5604 = Math.max(0, cttIn876.width),
    cttBind5605 = Math.max(0, cttIn876.height),
    cttBind5606 = srcR()
      .tile(a)
      .size([cttBind5604, cttBind5605])
      .paddingInner(1)
      .paddingOuter(0)
      .round(true)(cttBind5603),
    cttBind5607 = cttH.bh477(cttIn877, cttBind5602);
  return {
    leaves: cttBind5606
      .leaves()
      .filter((item) => (item.value ?? 0) > 0)
      .map((item) => {
        let cttBind10660 = cttIn876.x + item.x0,
          cttBind10661 = cttIn876.y + item.y0,
          cttBind10662 = Math.max(0, item.x1 - item.x0),
          cttBind10663 = Math.max(0, item.y1 - item.y0),
          cttBind10664 = item.data.path,
          cttBind10665 = item.parent?.data.path ?? [],
          cttBind10666 =
            cttBind10665.length > 0
              ? cttBind10665[cttBind10665.length - 1]
              : undefined,
          cttBind10667 = cttBind10664.length > 0 ? cttBind10664[0] : undefined,
          cttBind10668 =
            cttBind10667 && cttBind10667.length > 0
              ? cttBind10667
              : item.data.name;
        return {
          x: cttBind10660,
          y: cttBind10661,
          width: cttBind10662,
          height: cttBind10663,
          value: item.value ?? 0,
          name: item.data.name,
          path: cttBind10664,
          depth: item.depth,
          parentName: cttBind10666,
          topParentName: cttBind10667,
          fill: cttBind5607(cttBind10668),
        };
      }),
    parents: cttBind5606
      .descendants()
      .filter(
        (item) => item.depth > 0 && item.children && item.children.length > 0,
      )
      .map((item) => ({
        name: item.data.name,
        path: item.data.path,
        depth: item.depth,
        x: cttIn876.x + item.x0,
        y: cttIn876.y + item.y0,
        width: Math.max(0, item.x1 - item.x0),
        height: Math.max(0, item.y1 - item.y0),
      }))
      .sort((cttIn16054, cttIn16055) => cttIn16054.depth - cttIn16055.depth),
  };
}

/** Legacy alias. */
export const Yye = layoutTreemapTiles;
