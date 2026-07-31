// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: BYe overlays.

import { paint } from "./paint-bag";
import { clampDropdownInsetPx } from "../worksheet-autofit/dropdown-padding";
import {
  lettersToColIndex,
  colIndexToLetters,
  rowTokenToIndex,
  cellPaddingForFontSize,
} from "../../utils/spreadsheet-address-utils";
import { d } from "../spreadsheet-protobuf";
import { j } from "../spreadsheet-protobuf";
import { Jn, Zn, tr } from "../presentation-protobuf";
import { stripFontFaceStyleSuffixes } from "../cell-xf-format";
import { paintTextElement } from "../text-box";
import {
  paintImages,
  paintSparklines,
  paintCharts,
  checkboxHitTest,
  paintCheckboxBox,
  paintDataBarFill,
  paintIconSetGlyph,
  paintUnsupportedBadge,
  layoutTextBox,
  drawCheckboxControl,
  paintCellTextRuns,
  measurePaintTextWidth,
  dropdownChevronInset,
  strokeCellBorderSide,
  prepareDiagonalStroke,
  fillCellBackground,
  clipPaintRect,
} from "./boundary-hooks";
import {
  buildPivotCellHintMap,
  lookupPivotHint,
  resolvePaintFillCss,
  createPixelAlignedCtx,
  sheetTextMetricsBag,
  cellKey,
  rangesIntersecting,
  nextNonEmptyCol,
  resolveCellDisplay,
  fillRectTransformed,
  strokeDiagonalBorder,
  paintCheckboxGlyph,
  paintDataBar,
  paintIconSet,
  parseHexColorChannels,
  mergeCssColor,
  rgbaFromChannels,
  drawHeaderLabel,
  buildPaintFillState,
  notifyRowHeights,
} from "./paint-helpers-impl";
import { paintSheetShapes } from "./paint-shapes";
import {
  PAINT_ACCENT_DEFAULT,
  PAINT_FONT_SCALE,
  PAINT_MAX_SCROLL,
  PAINT_MAX_EXTENT,
} from "./paint-consts";
void d;
void j;
void Jn;
void Zn;
void tr;
void stripFontFaceStyleSuffixes;
void paintTextElement;

export function runPaintOverlays(): void {
  paint.cpIn6.save();
  paint.showHeaders || paint.cpIn6.translate(-40, -20);
  paintImages(
    paint.cpIn6,
    paint.cpBind2043,
    paint.cpIn7,
    paint.cpBind2084,
    paint.cpBind2085,
    paint.cpBind2059,
    paint.cpBind2060,
    paint.cpBind2023 / paint.cpBind2027 + (paint.showHeaders ? 0 : 40),
    paint.cpBind2024 / paint.cpBind2027 + (paint.showHeaders ? 0 : 20),
    paint.cpBind2039?.addImageTarget,
    paint.cpBind2027,
  );
  paint.cpIn6.restore();
  paint.cpIn6.save();
  paint.showHeaders || paint.cpIn6.translate(-40, -20);
  paintSparklines(
    paint.cpIn6,
    paint.cpBind2101,
    paint.cpBind2084,
    paint.cpBind2085,
    paint.cpBind2059,
    paint.cpBind2060,
    paint.cpBind2023 / paint.cpBind2027 + (paint.showHeaders ? 0 : 40),
    paint.cpBind2024 / paint.cpBind2027 + (paint.showHeaders ? 0 : 20),
    paint.cpBind2033,
  );
  paint.cpIn6.restore();
  paint.cpIn6.save();
  paint.showHeaders || paint.cpIn6.translate(-40, -20);
  paintSheetShapes(
    paint.cpIn6,
    paint.cpBind2043,
    paint.cpBind2084,
    paint.cpBind2085,
    paint.cpBind2059,
    paint.cpBind2060,
    paint.cpBind2023 / paint.cpBind2027 + (paint.showHeaders ? 0 : 40),
    paint.cpBind2024 / paint.cpBind2027 + (paint.showHeaders ? 0 : 20),
    paint.cpBind2033,
    paint.cpBind2037,
    paint.cpBind2039?.addShapeTarget,
    paint.cpBind2027,
    paint.cpBind2040,
  );
  paint.cpIn6.restore();
  paint.cpIn6.save();
  paint.showHeaders || paint.cpIn6.translate(-40, -20);
  paintCharts(
    paint.cpIn6,
    paint.cpBind2043,
    paint.cpIn7,
    paint.cpBind2084,
    paint.cpBind2085,
    paint.cpBind2059,
    paint.cpBind2060,
    paint.cpBind2023 / paint.cpBind2027 + (paint.showHeaders ? 0 : 40),
    paint.cpBind2024 / paint.cpBind2027 + (paint.showHeaders ? 0 : 20),
    paint.cpBind2033,
    paint.cpBind2036,
    paint.cpBind2040,
    paint._t ?? undefined,
    paint.cpBind2038?.mapCtx,
    paint.cpBind2038?.onMapViewport,
  );
  paint.cpIn6.restore();
  paint._t && paint.cpBind2039?.setChartHoverTargets?.(paint._t);
  if (
    (paint.cpBind2037 || paint.cpBind2039?.addChartTarget) &&
    paint.cpBind2103.length > 0
  )
    for (let [cpBind6199, cpBind6200] of paint.cpBind2103.entries()) {
      let cpBind6301 = cpBind6200.toDrawingProto();
      if (!cpBind6301.chart || !cpBind6301.fromAnchor) continue;
      let cpBind6302 = Number(cpBind6301.fromAnchor.colId),
        cpBind6303 = Number(cpBind6301.fromAnchor.rowId),
        cpBind6304 = paint.cpBind2084[cpBind6302],
        cpBind6305 = paint.cpBind2085[cpBind6303];
      if (cpBind6304 == null || cpBind6305 == null) continue;
      let cpBind6306 =
          paint.cpBind2041 +
          cpBind6304 +
          paint.cpBind2102(Number(cpBind6301.fromAnchor.colOffset)) -
          paint.cpBind2059,
        cpBind6307 =
          paint.cpBind2042 +
          cpBind6305 +
          paint.cpBind2102(Number(cpBind6301.fromAnchor.rowOffset)) -
          paint.cpBind2060,
        cpBind6308 = null,
        cpBind6309 = null,
        cpBind6310 = false;
      if (cpBind6301.toAnchor) {
        cpBind6310 = true;
        let cpBind14948 = Number(cpBind6301.toAnchor.colId),
          cpBind14949 = Number(cpBind6301.toAnchor.rowId),
          cpBind14950 = paint.cpBind2084[cpBind14948],
          cpBind14951 = paint.cpBind2085[cpBind14949];
        if (cpBind14950 == null || cpBind14951 == null) continue;
        let cpBind14952 =
            paint.cpBind2041 +
            cpBind14950 +
            paint.cpBind2102(Number(cpBind6301.toAnchor.colOffset)) -
            paint.cpBind2059,
          cpBind14953 =
            paint.cpBind2042 +
            cpBind14951 +
            paint.cpBind2102(Number(cpBind6301.toAnchor.rowOffset)) -
            paint.cpBind2060;
        cpBind6308 = cpBind14952 - cpBind6306;
        cpBind6309 = cpBind14953 - cpBind6307;
      } else
        cpBind6301.extentCx &&
          cpBind6301.extentCy &&
          ((cpBind6308 = paint.cpBind2102(Number(cpBind6301.extentCx))),
          (cpBind6309 = paint.cpBind2102(Number(cpBind6301.extentCy))));
      if (
        cpBind6308 == null ||
        cpBind6309 == null ||
        cpBind6308 <= 0 ||
        cpBind6309 <= 0
      )
        continue;
      paint.cpBind2037?.(
        cpBind6306,
        cpBind6307,
        cpBind6308,
        cpBind6309,
        "chart",
      );
      let cpBind6311 =
        cpBind6301.chart?.id || cpBind6200.id || `chart-${cpBind6199}`;
      paint.cpBind2039?.addChartTarget &&
        paint.cpBind2039.addChartTarget({
          id: cpBind6311,
          logicalBounds: {
            x: cpBind6306,
            y: cpBind6307,
            width: cpBind6308,
            height: cpBind6309,
          },
          cssBounds: {
            x: cpBind6306 * paint.cpBind2027,
            y: cpBind6307 * paint.cpBind2027,
            width: cpBind6308 * paint.cpBind2027,
            height: cpBind6309 * paint.cpBind2027,
          },
          drawing: cpBind6301,
          usesTwoCellAnchor: cpBind6310,
        });
    }
  if (paint.showHeaders) {
    paint.cpIn6.textAlign = "center";
    paint.cpIn6.textBaseline = "middle";
    paint.cpIn6.font = "12px sans-serif";
    for (
      let cpBind15551 = paint.cpBind2086;
      cpBind15551 <= paint.$e;
      cpBind15551++
    ) {
      let cpBind16228 =
          40 + (paint.cpBind2084[cpBind15551] ?? 0) - paint.cpBind2059,
        cpBind16229 = paint.cpBind2019[cpBind15551] ?? 0;
      paint.cpIn6.fillStyle = paint.cpBind2052;
      paint.cpIn6.fillRect(cpBind16228, 0, cpBind16229, 20);
      paint.cpIn6.strokeStyle = paint.cpBind2053;
      paint.cpIn6.lineWidth = paint.cpBind2077;
      paint.cpIn6.strokeRect(cpBind16228, 0, cpBind16229, 20);
      paint.cpIn6.fillStyle = paint.cpBind2054;
      paint.cpIn6.fillText(
        colIndexToLetters(cpBind15551),
        cpBind16228 + cpBind16229 / 2,
        10,
      );
    }
    for (
      let cpBind14916 = paint.cpBind2087;
      cpBind14916 <= paint.cpBind2088;
      cpBind14916++
    ) {
      let cpBind15552 =
          20 + (paint.cpBind2085[cpBind14916] ?? 0) - paint.cpBind2060,
        cpBind15553 = paint.cpBind2020[cpBind14916] ?? 0;
      cpBind15553 <= 0 ||
        ((paint.cpIn6.fillStyle = paint.cpBind2052),
        paint.cpIn6.fillRect(0, cpBind15552, 40, cpBind15553),
        (paint.cpIn6.strokeStyle = paint.cpBind2053),
        (paint.cpIn6.lineWidth = paint.cpBind2077),
        paint.cpIn6.strokeRect(0, cpBind15552, 40, cpBind15553),
        (paint.cpIn6.fillStyle = paint.cpBind2054),
        paint.cpIn6.fillText(
          (cpBind14916 + 1).toString(),
          20,
          cpBind15552 + cpBind15553 / 2,
        ));
    }
    paint.cpIn6.fillStyle = paint.cpBind2052;
    paint.cpIn6.fillRect(0, 0, 40, 20);
    paint.cpIn6.strokeStyle = paint.cpBind2053;
    paint.cpIn6.lineWidth = paint.cpBind2077;
    paint.cpIn6.strokeRect(0, 0, 40, 20);
    let cpBind5609 = paintDataBarFill({
      worksheet: paint.cpBind2043,
      rowHeights: paint.cpBind2020,
      colWidths: paint.cpBind2019,
      rowIndexRemap: paint.cpBind2035,
    });
    if (cpBind5609) {
      let cpBind12341 = paint.accentColor,
        cpBind12342 = paint.cpBind2027 || 1,
        cpBind12343 = 2 / cpBind12342;
      for (let cpBind18363 of cpBind5609.colBoundaries) {
        if (cpBind18363 < paint.cpBind2086 || cpBind18363 >= paint.$e) continue;
        let cpBind19317 =
          40 +
          (paint.cpBind2084[cpBind18363 + 1] ?? 0) -
          paint.cpBind2059 -
          cpBind12343 / 2;
        cpBind19317 + cpBind12343 < 0 ||
          cpBind19317 > paint.cpBind2023 / cpBind12342 ||
          ((paint.cpIn6.fillStyle = cpBind12341),
          paint.cpIn6.fillRect(cpBind19317, 0, cpBind12343, 20));
      }
      for (let cpBind18364 of cpBind5609.rowBoundaries) {
        if (cpBind18364 < paint.cpBind2087 || cpBind18364 >= paint.cpBind2088)
          continue;
        let cpBind19318 =
          20 +
          (paint.cpBind2085[cpBind18364 + 1] ?? 0) -
          paint.cpBind2060 -
          cpBind12343 / 2;
        cpBind19318 + cpBind12343 < 0 ||
          cpBind19318 > paint.cpBind2024 / cpBind12342 ||
          ((paint.cpIn6.fillStyle = cpBind12341),
          paint.cpIn6.fillRect(0, cpBind19318, 40, cpBind12343));
      }
    }
  }
  paint.cpIn6.restore();
}
