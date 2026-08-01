// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: hierarchy/treemap data-table paint (legacy DSe..ISe).
// Stage-3 wave-124.

import { paintChartCard as ASe } from "../chart-card-paint";
import { roundRectPath as NSe } from "../shape-path";
import {
  layoutOverlappingParentLabels as PSe,
  isLeafUnderParent as workbookHelper566,
  treemapLeafKey as workbookHelper565,
} from "../chart-treemap-tiles";

export function paintHierarchyDataTable(
  cdtIn4215: any,
  cdtIn4216: any,
  cdtIn4217: any,
  cdtIn4218: any,
) {
  if (cdtIn4216.leaves.length === 0) return;
  let cdtBind13269 = cdtIn4218.chart.series[0]?.valuesFormatCode ?? undefined,
    cdtBind13270 = collectHierarchyLeaves(cdtIn4216.parents, cdtIn4216.leaves);
  cdtIn4215.save();
  cdtIn4215.beginPath();
  cdtIn4215.rect(cdtIn4217.x, cdtIn4217.y, cdtIn4217.width, cdtIn4217.height);
  cdtIn4215.clip();
  let cdtBind13271 = cdtIn4218.chart.treemapOptions?.parentLabelLayout,
    cdtBind13272;
  cdtBind13271 === Gn.PARENT_LABEL_LAYOUT_OVERLAPPING &&
    (cdtBind13272 = PSe(cdtIn4215, cdtBind13270, cdtIn4216.leaves));
  paintHierarchyDataTableRows(
    cdtIn4215,
    cdtIn4216.leaves,
    cdtBind13269,
    cdtBind13272?.byLeafKey,
  );
  layoutHierarchyDataTable(cdtIn4215, cdtBind13271, cdtBind13272);
  cdtIn4215.restore();
}
export function paintHierarchyDataTableRows(
  cdtIn6693: any,
  cdtIn6694: any,
  cdtIn6695: any,
  cdtIn6696: any,
) {
  for (let cdtBind17832 of cdtIn6694) {
    if (cdtBind17832.width <= 0 || cdtBind17832.height <= 0) continue;
    measureHierarchyDataTable(cdtIn6693, cdtBind17832);
    let cdtBind18311 = cdtIn6696?.get(workbookHelper565(cdtBind17832));
    ASe(
      cdtIn6693,
      cdtBind17832,
      cdtIn6695,
      cdtBind18311
        ? {
            verticalAlign: "bottom",
            reservedTop: cdtBind18311.reservedTop,
          }
        : undefined,
    );
  }
}
export function measureHierarchyDataTable(cdtIn7041: any, cdtIn7042: any) {
  cdtIn7041.save();
  cdtIn7041.beginPath();
  NSe(
    cdtIn7041,
    cdtIn7042.x,
    cdtIn7042.y,
    cdtIn7042.width,
    cdtIn7042.height,
    cdtBind1196,
  );
  cdtIn7041.fillStyle = cdtIn7042.fill;
  cdtIn7041.fill();
  cdtIn7041.lineWidth = 0.5;
  cdtIn7041.strokeStyle = "rgba(255,255,255,0.6)";
  cdtIn7041.stroke();
  cdtIn7041.restore();
}
export function layoutHierarchyDataTable(
  cdtIn6632: any,
  cdtIn6633: any,
  cdtIn6634: any,
) {
  if (!(!cdtIn6633 || cdtIn6633 === Gn.PARENT_LABEL_LAYOUT_NONE))
    switch (cdtIn6633) {
      case Gn.PARENT_LABEL_LAYOUT_OVERLAPPING:
        resolveHierarchyDataTableTheme(cdtIn6632, cdtIn6634);
        break;
      case Gn.PARENT_LABEL_LAYOUT_BANNER:
        break;
      default:
        break;
    }
}
export function resolveHierarchyDataTableTheme(cdtIn2781: any, cdtIn2782: any) {
  if (!(!cdtIn2782 || cdtIn2782.placements.length === 0)) {
    cdtIn2781.save();
    cdtIn2781.textAlign = "left";
    cdtIn2781.textBaseline = "top";
    for (let cdtBind12251 of cdtIn2782.placements) {
      let { leaf, lines } = cdtBind12251;
      if (leaf.width <= 0 || leaf.height <= 0 || lines.length === 0) continue;
      let cdtBind12713 = leaf.width - _R * 2;
      if (cdtBind12713 <= 0) continue;
      let cdtBind12714 = toCssColorFromTheme(
        appInitialXat(leaf.fill) ?? appInitialXat("#000000"),
      );
      cdtIn2781.save();
      cdtIn2781.beginPath();
      cdtIn2781.rect(leaf.x, leaf.y, leaf.width, leaf.height);
      cdtIn2781.clip();
      cdtIn2781.font = cdtBind1198;
      cdtIn2781.fillStyle = cdtBind12714;
      let cdtBind12715 = leaf.y + _R;
      for (let cdtBind22748 of lines) {
        cdtIn2781.fillText(
          cdtBind22748,
          leaf.x + _R,
          cdtBind12715,
          cdtBind12713,
        );
        cdtBind12715 += cdtBind1199;
      }
      cdtIn2781.restore();
    }
    cdtIn2781.restore();
  }
}
export function toCssColorFromTheme(cdtIn8235: any) {
  if (!cdtIn8235) return "#1a1a1a";
  let cdtBind18748 = cdtIn8235.rgb(),
    cdtBind18749 = cdtBind18748.r / 255,
    cdtBind18750 = cdtBind18748.g / 255,
    cdtBind18751 = cdtBind18748.b / 255;
  return 0.2126 * cdtBind18749 + 0.7152 * cdtBind18750 + 0.0722 * cdtBind18751 >
    0.55
    ? "#1a1a1a"
    : "#ffffff";
}
export function collectHierarchyLeaves(cdtIn12825: any, cdtIn12826: any) {
  return cdtIn12825.filter((item) =>
    cdtIn12826.some((_item) => isDescendantLeaf(_item, item)),
  );
}
export function isDescendantLeaf(cdtIn12433: any, cdtIn12434: any) {
  return (
    cdtIn12433.path.length === cdtIn12434.path.length + 1 &&
    workbookHelper566(cdtIn12433, cdtIn12434)
  );
}

/** Legacy aliases (wave-124). */
export const DSe = paintHierarchyDataTable;
export const OSe = paintHierarchyDataTableRows;
export const kSe = measureHierarchyDataTable;
export const jSe = layoutHierarchyDataTable;
export const MSe = resolveHierarchyDataTableTheme;
export const workbookHelper564 = toCssColorFromTheme;
export const FSe = collectHierarchyLeaves;
export const ISe = isDescendantLeaf;
