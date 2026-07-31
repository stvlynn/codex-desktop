// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart data-table paint (legacy bh561 peel).
// Stage-3 wave-96.

import { resolveFillStyle } from "../canvas-fill";
import { hundredthsPointToCssPx } from "../font-stack";
import { workbookHelper348 as chartCategories } from "../chart-asset";
import { resolveColorToCssRgba } from "../color-resolve";
import { cdtH } from "./boundary-hooks";

/** Legacy Binding837 — chart font stack. */
const CHART_AXIS_FONT_STACK = "Carlito, Segoe UI, Helvetica, Arial, sans-serif";
/** Legacy `$D` — muted fallback fill. */
const CHART_AXIS_MUTED = "#666";

void resolveFillStyle;
void hundredthsPointToCssPx;
void chartCategories;
void resolveColorToCssRgba;
void cdtH;
void CHART_AXIS_FONT_STACK;
void CHART_AXIS_MUTED;

export function paintChartDataTable(
  cdtIn541: any,
  cdtIn542: any,
  cdtIn543: any,
  cdtIn544: any,
  cdtIn545: any,
) {
  let cdtBind4452 = cdtIn542.dataTable;
  if (!cdtBind4452?.visible || cdtIn543.width <= 0 || cdtIn543.height <= 0)
    return;
  let cdtBind4453 = chartCategories(cdtIn542),
    cdtBind4454 = [];
  if (
    (cdtIn542.series.forEach((item, index) => {
      item &&
        (cdtIn545?.has(index) ||
          cdtBind4454.push({
            series: item,
            idx: index,
          }));
    }),
    cdtBind4454.length === 0 || cdtBind4453.length === 0)
  )
    return;
  let cdtBind4455 = cdtBind4452.showLegendKey,
    cdtBind4456 = 1 + cdtBind4454.length,
    cdtBind4457 = 1 + cdtBind4453.length,
    cdtBind4458 = cdtIn543.width / cdtBind4456,
    cdtBind4459 = cdtIn543.height / cdtBind4457;
  cdtIn541.save();
  let cdtBind4460 = cdtBind4452.fill;
  cdtBind4460 &&
    ((cdtIn541.fillStyle = resolveFillStyle(
      cdtIn541,
      cdtIn543,
      cdtBind4460,
      cdtIn544,
      "transparent",
    )),
    cdtIn541.fillRect(cdtIn543.x, cdtIn543.y, cdtIn543.width, cdtIn543.height));
  let cdtBind4461 = cdtBind4452.stroke;
  cdtBind4461
    ? cdtH.bh433(cdtIn541, cdtBind4461, cdtIn544, {
        color: "#c0c0c0",
        widthPx: 0.75,
      })
    : ((cdtIn541.strokeStyle = "#c0c0c0"),
      (cdtIn541.lineWidth = 0.75),
      cdtIn541.setLineDash([]));
  cdtIn541.beginPath();
  cdtIn541.rect(cdtIn543.x, cdtIn543.y, cdtIn543.width, cdtIn543.height);
  cdtIn541.stroke();
  for (let cdtBind20618 = 1; cdtBind20618 < cdtBind4456; cdtBind20618++) {
    let cdtBind21504 = cdtIn543.x + cdtBind20618 * cdtBind4458;
    cdtIn541.beginPath();
    cdtIn541.moveTo(cdtBind21504, cdtIn543.y);
    cdtIn541.lineTo(cdtBind21504, cdtIn543.y + cdtIn543.height);
    cdtIn541.stroke();
  }
  for (let cdtBind20644 = 1; cdtBind20644 < cdtBind4457; cdtBind20644++) {
    let cdtBind21549 = cdtIn543.y + cdtBind20644 * cdtBind4459;
    cdtIn541.beginPath();
    cdtIn541.moveTo(cdtIn543.x, cdtBind21549);
    cdtIn541.lineTo(cdtIn543.x + cdtIn543.width, cdtBind21549);
    cdtIn541.stroke();
  }
  let cdtBind4462 = cdtBind4452.textStyle,
    cdtBind4463 = cdtBind4462?.fontSize
      ? hundredthsPointToCssPx(cdtBind4462.fontSize)
      : 10,
    cdtBind4464 = resolveColorToCssRgba(
      cdtBind4462?.fill?.color,
      cdtIn544,
      CHART_AXIS_MUTED,
    );
  cdtIn541.font = `${(cdtBind4462?.bold ?? false) ? "bold " : ""}${cdtBind4463}px ${CHART_AXIS_FONT_STACK}`;
  cdtIn541.fillStyle = cdtBind4464;
  cdtIn541.textAlign = "center";
  cdtIn541.textBaseline = "middle";
  cdtIn541.fillText(
    "",
    cdtIn543.x + cdtBind4458 / 2,
    cdtIn543.y + cdtBind4459 / 2,
  );
  cdtBind4454.forEach(({ series, idx }, index) => {
    let cdtBind13727 = cdtIn543.x + (1 + index) * cdtBind4458 + cdtBind4458 / 2,
      cdtBind13728 = cdtIn543.y + cdtBind4459 / 2,
      cdtBind13729 = series.name?.trim() || `Series ${idx + 1}`;
    if (
      (cdtIn541.fillText(cdtBind13729, cdtBind13727, cdtBind13728), cdtBind4455)
    ) {
      let cdtBind17914 = Math.min(10, cdtBind4459 - 4),
        cdtBind17915 = cdtBind13727 - cdtBind4458 / 2 + 4,
        cdtBind17916 = cdtBind13728 - cdtBind17914 / 2;
      cdtIn541.save();
      cdtIn541.fillStyle = cdtH.bh465(series, idx, cdtIn544) ?? "#666666";
      cdtIn541.fillRect(cdtBind17915, cdtBind17916, cdtBind17914, cdtBind17914);
      cdtIn541.restore();
    }
  });
  cdtBind4453.forEach((item, index) => {
    let cdtBind13662 = cdtIn543.y + (1 + index) * cdtBind4459 + cdtBind4459 / 2;
    cdtIn541.fillText(
      String(item ?? ""),
      cdtIn543.x + cdtBind4458 / 2,
      cdtBind13662,
    );
    cdtBind4454.forEach(({ series }, _index) => {
      let cdtBind16342 = series.values?.[index],
        cdtBind16343 =
          typeof cdtBind16342 == "number" && Number.isFinite(cdtBind16342)
            ? cdtH.bh478(cdtBind16342, series.valuesFormatCode ?? undefined)
            : "",
        cdtBind16344 =
          cdtIn543.x + (1 + _index) * cdtBind4458 + cdtBind4458 / 2;
      cdtIn541.fillText(cdtBind16343, cdtBind16344, cdtBind13662);
    });
  });
  cdtIn541.restore();
}
