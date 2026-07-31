// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: BYe cell loop.

import { paint } from "./paint-bag";
import { clampDropdownInsetPx } from "../worksheet-autofit/dropdown-padding";
import {
  cellPaddingForFontSize,
  colIndexToLetters,
} from "../../utils/spreadsheet-address-utils";
import { d } from "../spreadsheet-protobuf";
import { Yn } from "../presentation-protobuf";
import {
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
  cellKey,
  resolveCellDisplay,
  fillRectTransformed,
  buildPaintFillState,
  lookupPivotHint,
} from "./paint-helpers-impl";
import { PAINT_FONT_SCALE } from "./paint-consts";
import { paintCellInteractiveOverlay } from "./paint-cell-interactive";

export function runPaintCells(): void {
  for (let cpBind2156 of paint.cpBind2099) {
    let cpBind2157 =
        cpBind2156 >= paint.cpBind2087 && cpBind2156 <= paint.cpBind2088,
      cpBind2158 = paint.cpBind2091.get(cpBind2156),
      cpBind2159 =
        paint.cpBind2042 +
        (paint.cpBind2085[cpBind2156] ?? 0) -
        paint.cpBind2060,
      cpBind2160 = paint.cpBind2020[cpBind2156] ?? 0,
      cpBind2161 = !!paint.rowAutoHeight?.hasMeasuredRow?.(cpBind2156),
      cpBind2162 =
        cpBind2157 &&
        !!paint.rowAutoHeight &&
        cpBind2160 > 0 &&
        paint.rowAutoHeight.isRowAuto(cpBind2156, cpBind2158) &&
        !cpBind2161,
      cpBind2163 = cpBind2162
        ? (paint.rowAutoHeight.getBaselineHeight?.(cpBind2156, cpBind2158) ??
          cpBind2160)
        : 0,
      cpBind2164 = cpBind2162 ? cpBind2163 : 0,
      cpBind2165 = [];
    for (let cpBind2166 of paint.cpBind2100(cpBind2156)) {
      let padLr = 0,
        padTb = 0,
        cpBind4864 = 0,
        cpBind4865 = 0;
      let cpBind2167 =
          paint.cpBind2041 +
          (paint.cpBind2084[cpBind2166] ?? 0) -
          paint.cpBind2059,
        cpBind2168 = paint.cpBind2019[cpBind2166] ?? 0,
        cpBind2169 = cpBind2160,
        cpBind2170 = paint.rowCellAtCol(cpBind2156, cpBind2166),
        cpBind2171 = paint.cpBind2096(cpBind2156),
        cpBind2172 = paint.cpBind2097(cpBind2171, cpBind2166),
        cpBind2173 = `${colIndexToLetters(cpBind2166)}${cpBind2156 + 1}`,
        cpBind2174 = lookupPivotHint(paint.cpBind2057, cpBind2171, cpBind2166),
        cpBind2175 = cpBind2172
          ? cpBind2172.resolveCell(cpBind2171, cpBind2166)
          : undefined,
        cpBind2176 = cpBind2174?.indentPx ?? 0,
        cpBind2177 =
          paint.at.length > 0 ? paint.cpBind2092(cpBind2156, cpBind2166) : null,
        cpBind2178 = cpBind2177 == null ? 0 : clampDropdownInsetPx(cpBind2169),
        cpBind2179 = cpBind2177 == null ? 0 : dropdownChevronInset(cpBind2169),
        cpBind2180 = cpBind2158?.styleIndex,
        cpBind2181 = paint.cpBind2093[cpBind2166],
        cpBind2182 = cpBind2170?.styleIndex ?? cpBind2180 ?? cpBind2181 ?? 0,
        cpBind2183 = paint.cpBind2028[cpBind2182] ?? {},
        cpBind2184 = cpBind2183.wrapText === true,
        cpBind2185 = cpBind2183.borders?.diagonal,
        cpBind2186 = !!cpBind2183.borderDiagonalUp,
        cpBind2187 = !!cpBind2183.borderDiagonalDown;
      let _e = cpBind2183.borderStyles?.diagonal;
      _e = _e;
      let cpBind2188 =
        cpBind2170 && cpBind2183
          ? resolveCellDisplay(cpBind2170, cpBind2183)
          : null;
      if (cpBind2170) {
        let cpBind4863 = paint.cellHyperlinkUri(cpBind2170);
        if (cpBind4863 && paint.cpBind2039?.addHyperlinkRect) {
          let cpBind17747 = `hyperlink:${cpBind2170.address ?? `cell-${cpBind2156}-${cpBind2166}`}`;
          paint.cpBind2039.addHyperlinkRect({
            id: cpBind17747,
            cssBounds: {
              x: cpBind2167 * paint.cpBind2027,
              y: cpBind2159 * paint.cpBind2027,
              width: cpBind2168 * paint.cpBind2027,
              height: cpBind2169 * paint.cpBind2027,
            },
            url: cpBind4863,
          });
        }
        ({ padLr, padTb } = cellPaddingForFontSize(
          (cpBind2183.font?.size ?? 14.666666666666666) * PAINT_FONT_SCALE ||
            11,
        ));
        cpBind4864 = padLr + cpBind2176;
        cpBind4865 = padLr + cpBind2179;
        if (!paint.cpBind2034 && paint.cpBind2065(cpBind2182))
          paint.cpBind2078.textMetrics.set(cellKey(cpBind2156, cpBind2166), {
            firstLineW: 0,
            displayText: "",
            padLeft: cpBind4864,
            padRight: cpBind4865,
            padTb,
            isNumeric: false,
          });
        else {
          let cpBind6618 = paint.cpBind2066(cpBind2170, cpBind2182),
            cpBind6619 = paint.cpBind2067(cpBind2170),
            cpBind6620 = cellKey(cpBind2156, cpBind2166),
            cpBind6621 =
              !cpBind2184 && !cpBind2162
                ? paint.cpBind2078.textMetrics.get(cpBind6620)
                : undefined,
            cpBind6622 =
              cpBind6621 &&
              cpBind6621.padLeft === cpBind4864 &&
              cpBind6621.padRight === cpBind4865 &&
              cpBind6621.padTb === padTb &&
              cpBind6621.displayText === cpBind6618 &&
              cpBind6621.isNumeric === cpBind6619
                ? {
                    firstLineW: cpBind6621.firstLineW,
                    contentHeight: 0,
                  }
                : (cpBind2184 && !cpBind2162) || cpBind6619
                  ? {
                      firstLineW: 0,
                      contentHeight: 0,
                    }
                  : paint.cpBind2074({
                      cell: cpBind2170,
                      displayText: cpBind6618,
                      widthPx: cpBind2168,
                      heightPx: cpBind2169,
                      paddingPx: {
                        left: cpBind4864,
                        right: cpBind4865,
                        top: padTb,
                        bottom: padTb,
                      },
                      wrapTextEnabled: cpBind2184,
                      style: cpBind2183,
                      tableCellStyle: cpBind2175,
                      pivotFontColor: cpBind2174?.fontColor,
                      pivotBold: cpBind2174?.bold === true,
                      numberFormatColorOverride: cpBind2188,
                    });
          paint.cpBind2078.textMetrics.set(cellKey(cpBind2156, cpBind2166), {
            firstLineW: cpBind6622.firstLineW,
            displayText: cpBind6618,
            padLeft: cpBind4864,
            padRight: cpBind4865,
            padTb,
            isNumeric: cpBind6619,
          });
        }
      }
      paint.be = false;
      let cpBind2189 = cpBind2156,
        cpBind2190 = cpBind2156,
        cpBind2191 = cpBind2166,
        cpBind2192 = cpBind2166,
        cpBind2193 = cpBind2183.borders ?? null,
        cpBind2194 = cpBind2183.borderStyles ?? null;
      {
        let cpBind5062 = paint.cpBind2079(cpBind2156, cpBind2166);
        if (cpBind5062) {
          if (
            ((cpBind2189 = cpBind5062.rowMin),
            (cpBind2190 = cpBind5062.rowMax),
            (cpBind2191 = cpBind5062.colMin),
            (cpBind2192 = cpBind5062.colMax),
            (paint.be = cpBind2156 === cpBind2189 && cpBind2166 === cpBind2191),
            !paint.be)
          )
            continue;
          cpBind2168 =
            (paint.cpBind2084[cpBind2192 + 1] ?? 0) -
            (paint.cpBind2084[cpBind2191] ?? 0);
          cpBind2169 =
            (paint.cpBind2085[cpBind2190 + 1] ?? 0) -
            (paint.cpBind2085[cpBind2189] ?? 0);
          paint.cpBind2037?.(
            cpBind2167,
            cpBind2159,
            cpBind2168,
            cpBind2169,
            "mergedCell",
          );
          let cpBind5173 = 0,
            cpBind5174 = 0,
            cpBind5175 = 0,
            cpBind5176 = 0,
            cpBind5177 = {},
            cpBind5178 = {};
          for (
            let cpBind16023 = cpBind2191;
            cpBind16023 <= cpBind2192;
            cpBind16023++
          ) {
            let cpBind16778 = paint.rowCellAtCol(cpBind2189, cpBind16023),
              cpBind16779 =
                paint.cpBind2028[cpBind16778?.styleIndex ?? 0] ?? {},
              cpBind16780 = cpBind16779.borderStyles?.top,
              cpBind16781 = paint.cpBind2083(cpBind16780);
            cpBind16779.borders?.top &&
              cpBind16781 >= cpBind5173 &&
              ((cpBind5177.top = cpBind16779.borders.top),
              (cpBind5178.top = cpBind16780),
              (cpBind5173 = cpBind16781));
          }
          for (
            let cpBind15691 = cpBind2191;
            cpBind15691 <= cpBind2192;
            cpBind15691++
          ) {
            let cpBind16409 = paint.rowCellAtCol(cpBind2190, cpBind15691),
              cpBind16410 =
                paint.cpBind2028[cpBind16409?.styleIndex ?? 0] ?? {},
              cpBind16411 = cpBind16410.borderStyles?.bottom,
              cpBind16412 = paint.cpBind2083(cpBind16411);
            cpBind16410.borders?.bottom &&
              cpBind16412 >= cpBind5174 &&
              ((cpBind5177.bottom = cpBind16410.borders.bottom),
              (cpBind5178.bottom = cpBind16411),
              (cpBind5174 = cpBind16412));
          }
          for (
            let cpBind15919 = cpBind2189;
            cpBind15919 <= cpBind2190;
            cpBind15919++
          ) {
            let cpBind16656 = paint.rowCellAtCol(cpBind15919, cpBind2191),
              cpBind16657 =
                paint.cpBind2028[cpBind16656?.styleIndex ?? 0] ?? {},
              cpBind16658 = cpBind16657.borderStyles?.left,
              cpBind16659 = paint.cpBind2083(cpBind16658);
            cpBind16657.borders?.left &&
              cpBind16659 >= cpBind5175 &&
              ((cpBind5177.left = cpBind16657.borders.left),
              (cpBind5178.left = cpBind16658),
              (cpBind5175 = cpBind16659));
          }
          for (
            let cpBind15820 = cpBind2189;
            cpBind15820 <= cpBind2190;
            cpBind15820++
          ) {
            let cpBind16507 = paint.rowCellAtCol(cpBind15820, cpBind2192),
              cpBind16508 =
                paint.cpBind2028[cpBind16507?.styleIndex ?? 0] ?? {},
              cpBind16509 = cpBind16508.borderStyles?.right,
              cpBind16510 = paint.cpBind2083(cpBind16509);
            cpBind16508.borders?.right &&
              cpBind16510 >= cpBind5176 &&
              ((cpBind5177.right = cpBind16508.borders.right),
              (cpBind5178.right = cpBind16509),
              (cpBind5176 = cpBind16510));
          }
          cpBind2193 = cpBind5177;
          cpBind2194 = cpBind5178;
        }
      }
      if (cpBind2172) {
        let cpBind12627 = cpBind2172.resolveBorders(cpBind2171, cpBind2166);
        if (Object.keys(cpBind12627).length > 0) {
          cpBind2193 &&
            cpBind2193 === cpBind2183.borders &&
            (cpBind2193 = {
              ...cpBind2193,
            });
          cpBind2194 &&
            cpBind2194 === cpBind2183.borderStyles &&
            (cpBind2194 = {
              ...cpBind2194,
            });
          cpBind2193 ||= {};
          cpBind2194 ||= {};
          for (let cpBind18545 of ["top", "bottom", "left", "right"]) {
            let cpBind20059 = cpBind12627[cpBind18545],
              cpBind20060 = cpBind2183.borderSources?.[cpBind18545] === "cell";
            cpBind20059 &&
              !cpBind20060 &&
              ((cpBind2193[cpBind18545] = cpBind20059.colorCss),
              (cpBind2194[cpBind18545] = cpBind20059.style));
          }
        }
      }
      if (cpBind2174 && Object.keys(cpBind2174.borders).length > 0) {
        cpBind2193 &&
          cpBind2193 === cpBind2183.borders &&
          (cpBind2193 = {
            ...cpBind2193,
          });
        cpBind2194 &&
          cpBind2194 === cpBind2183.borderStyles &&
          (cpBind2194 = {
            ...cpBind2194,
          });
        cpBind2193 ||= {};
        cpBind2194 ||= {};
        for (let cpBind19934 of ["top", "bottom", "left", "right"]) {
          let cpBind21482 = cpBind2174.borders[cpBind19934];
          cpBind21482 &&
            !cpBind2193[cpBind19934] &&
            ((cpBind2193[cpBind19934] = cpBind21482.colorCss),
            (cpBind2194[cpBind19934] = cpBind21482.style));
        }
      }
      let cpBind2195 = buildPaintFillState({
        style: cpBind2183,
        cfRenderCache: paint.cpBind2076,
        rowIdx: cpBind2156,
        colIdx: cpBind2166,
        cell: cpBind2170,
      });
      cpBind2175?.fillCss &&
        (paint.cpBind2037?.(
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
          "tableFill",
        ),
        (paint.cpIn6.fillStyle = cpBind2175.fillCss),
        fillRectTransformed(
          paint.cpIn6,
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
        ));
      cpBind2174?.fillCss &&
        (paint.cpBind2037?.(
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
          "pivotFill",
        ),
        (paint.cpIn6.fillStyle = cpBind2174.fillCss),
        fillRectTransformed(
          paint.cpIn6,
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
        ));
      let cpBind2196 = cpBind2195.baseFillCss;
      cpBind2196 &&
        (paint.cpBind2037?.(
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
          "cellFill",
        ),
        (paint.cpIn6.fillStyle = cpBind2196),
        fillRectTransformed(
          paint.cpIn6,
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
        ));
      let cpBind2197 = cpBind2195.conditionalFormatting.fillCss,
        cpBind2198 = cpBind2195.conditionalFormatting.textColor;
      cpBind2197 &&
        (paint.cpBind2037?.(
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
          "cfFill",
        ),
        (paint.cpIn6.fillStyle = cpBind2197),
        fillRectTransformed(
          paint.cpIn6,
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
        ));
      paint.cpBind2031.has(`${paint.cpBind2045}:${cpBind2173}`) &&
        (paint.cpBind2037?.(
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
          "unsupported",
        ),
        (paint.cpIn6.fillStyle = paint.cpBind2055),
        fillRectTransformed(
          paint.cpIn6,
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
        ));
      paint.cpBind2032 &&
        paint.cpBind2025 === cpBind2156 &&
        paint.cpBind2026 === cpBind2166 &&
        ((paint.cpIn6.fillStyle = "rgba(255,255,0,0.2)"),
        fillRectTransformed(
          paint.cpIn6,
          cpBind2167,
          cpBind2159,
          cpBind2168,
          cpBind2169,
        ));
      paint.$e = paint.numericCellValue(cpBind2170);
      let cpBind2199 =
        paint.cpBind2076 && paint.$e != null
          ? paint.cpBind2076.getDataBar(cpBind2156, cpBind2166, cpBind2170)
          : null;
      if (cpBind2199 && paint.$e != null) {
        let cpBind3928 = paint.$e,
          cpBind3929 = Math.max(0, cpBind2168 - 2),
          cpBind3930 = Math.max(0, cpBind2169 - 2),
          cpBind3931 = cpBind2199.vMin,
          cpBind3932 = cpBind2199.vMax,
          cpBind3933 = cpBind3931 < 0 && cpBind3932 > 0;
        if (cpBind3932 !== cpBind3931 && cpBind3929 > 0 && cpBind3930 > 0) {
          let cpBind4179 = cpBind2167 + 1,
            cpBind4180 = 0,
            cpBind4181 = 0,
            cpBind4182 = true;
          if (cpBind3931 >= 0) {
            cpBind4180 =
              Math.max(
                0,
                Math.min(
                  1,
                  (cpBind3928 - cpBind3931) / (cpBind3932 - cpBind3931),
                ),
              ) * cpBind3929;
            cpBind4182 = true;
          } else if (cpBind3932 <= 0) {
            cpBind4180 =
              Math.max(
                0,
                Math.min(
                  1,
                  (cpBind3928 - cpBind3932) / (cpBind3931 - cpBind3932),
                ),
              ) * cpBind3929;
            cpBind4179 = cpBind2167 + 1 + (cpBind3929 - cpBind4180);
            cpBind4182 = false;
          } else if (
            ((cpBind4181 =
              cpBind3929 * (-cpBind3931 / (cpBind3932 - cpBind3931))),
            cpBind3928 >= 0)
          ) {
            let cpBind20997 = Math.max(0, Math.min(1, cpBind3928 / cpBind3932));
            cpBind4179 = cpBind2167 + 1 + cpBind4181;
            cpBind4180 = cpBind20997 * (cpBind3929 - cpBind4181);
            cpBind4182 = true;
          } else {
            let cpBind20933 = Math.max(0, Math.min(1, cpBind3928 / cpBind3931));
            cpBind4179 = cpBind2167 + 1 + cpBind4181 - cpBind20933 * cpBind4181;
            cpBind4180 = cpBind20933 * cpBind4181;
            cpBind4182 = false;
          }
          if (cpBind4180 > 0.5) {
            paint.cpBind2037?.(
              cpBind4179,
              cpBind2159 + 1,
              cpBind4180,
              cpBind3930,
              "dataBar",
            );
            paint.cpIn6.save();
            let cpBind5997 =
                cpBind3928 < 0
                  ? (cpBind2199.negativeColorCss ?? cpBind2199.colorCss)
                  : cpBind2199.colorCss,
              cpBind5998 =
                cpBind3928 < 0
                  ? (cpBind2199.negativeBorderColorCss ??
                    (cpBind2199.negativeBorderColorSameAsPositive
                      ? cpBind2199.borderColorCss
                      : cpBind2199.border
                        ? (cpBind2199.negativeColorCss ??
                          cpBind2199.borderColorCss)
                        : null))
                  : cpBind2199.border
                    ? (cpBind2199.borderColorCss ?? cpBind2199.colorCss)
                    : null;
            if (((paint.cpIn6.globalAlpha = 1), cpBind2199.gradient)) {
              let cpBind15143 = paint.cpIn6.createLinearGradient(
                cpBind4179,
                cpBind2159 + 1,
                cpBind4179 + cpBind4180,
                cpBind2159 + 1,
              );
              cpBind4182
                ? (cpBind15143.addColorStop(0, cpBind5997),
                  cpBind15143.addColorStop(1, "rgba(255,255,255,0.92)"))
                : (cpBind15143.addColorStop(0, "rgba(255,255,255,0.92)"),
                  cpBind15143.addColorStop(1, cpBind5997));
              paint.cpIn6.fillStyle = cpBind15143;
            } else paint.cpIn6.fillStyle = cpBind5997;
            paint.cpIn6.fillRect(
              cpBind4179,
              cpBind2159 + 1,
              cpBind4180,
              cpBind3930,
            );
            cpBind5998 &&
              ((paint.cpIn6.globalAlpha = 0.85),
              (paint.cpIn6.strokeStyle = cpBind5998),
              (paint.cpIn6.lineWidth = 1),
              paint.cpIn6.strokeRect(
                Math.round(cpBind4179) + 0.5,
                Math.round(cpBind2159 + 1) + 0.5,
                Math.max(0, Math.round(cpBind4180) - 1),
                Math.max(0, Math.round(cpBind3930) - 1),
              ));
            paint.cpIn6.restore();
          }
          if (cpBind3933 && cpBind2199.axisPosition !== "none") {
            let cpBind14712 = cpBind2167 + 1 + cpBind4181;
            paint.cpIn6.save();
            paint.cpIn6.strokeStyle = cpBind2199.axisColorCss ?? "#000000";
            paint.cpIn6.lineWidth = 1;
            paint.cpIn6.setLineDash([2, 2]);
            paint.cpIn6.beginPath();
            paint.cpIn6.moveTo(cpBind14712 + 0.5, cpBind2159 + 1);
            paint.cpIn6.lineTo(cpBind14712 + 0.5, cpBind2159 + 1 + cpBind3930);
            paint.cpIn6.stroke();
            paint.cpIn6.restore();
          }
        }
      }
      if (cpBind2193) {
        let cpBind5374 = cpBind2193,
          cpBind5375 = cpBind2194 ?? {};
        cpBind5374.top &&
          (cpBind5375.top === "double"
            ? fillCellBackground(
                paint.cpIn6,
                "top",
                cpBind5374.top,
                cpBind2167,
                cpBind2159,
                cpBind2168,
                cpBind2169,
              )
            : cpBind5375.top === "slantDashDot"
              ? clipPaintRect(
                  paint.cpIn6,
                  "top",
                  cpBind5374.top,
                  cpBind2167,
                  cpBind2159,
                  cpBind2168,
                  cpBind2169,
                )
              : (prepareDiagonalStroke(
                  paint.cpIn6,
                  cpBind5375.top,
                  cpBind5374.top,
                ),
                paint.cpIn6.beginPath(),
                paint.cpIn6.moveTo(cpBind2167, cpBind2159),
                paint.cpIn6.lineTo(cpBind2167 + cpBind2168, cpBind2159),
                paint.cpIn6.stroke(),
                paint.cpIn6.restore()));
        cpBind5374.bottom &&
          (cpBind5375.bottom === "double"
            ? fillCellBackground(
                paint.cpIn6,
                "bottom",
                cpBind5374.bottom,
                cpBind2167,
                cpBind2159,
                cpBind2168,
                cpBind2169,
              )
            : cpBind5375.bottom === "slantDashDot"
              ? clipPaintRect(
                  paint.cpIn6,
                  "bottom",
                  cpBind5374.bottom,
                  cpBind2167,
                  cpBind2159,
                  cpBind2168,
                  cpBind2169,
                )
              : (prepareDiagonalStroke(
                  paint.cpIn6,
                  cpBind5375.bottom,
                  cpBind5374.bottom,
                ),
                paint.cpIn6.beginPath(),
                paint.cpIn6.moveTo(cpBind2167, cpBind2159 + cpBind2169),
                paint.cpIn6.lineTo(
                  cpBind2167 + cpBind2168,
                  cpBind2159 + cpBind2169,
                ),
                paint.cpIn6.stroke(),
                paint.cpIn6.restore()));
        cpBind5374.left &&
          (cpBind5375.left === "double"
            ? fillCellBackground(
                paint.cpIn6,
                "left",
                cpBind5374.left,
                cpBind2167,
                cpBind2159,
                cpBind2168,
                cpBind2169,
              )
            : cpBind5375.left === "slantDashDot"
              ? clipPaintRect(
                  paint.cpIn6,
                  "left",
                  cpBind5374.left,
                  cpBind2167,
                  cpBind2159,
                  cpBind2168,
                  cpBind2169,
                )
              : (prepareDiagonalStroke(
                  paint.cpIn6,
                  cpBind5375.left,
                  cpBind5374.left,
                ),
                paint.cpIn6.beginPath(),
                paint.cpIn6.moveTo(cpBind2167, cpBind2159),
                paint.cpIn6.lineTo(cpBind2167, cpBind2159 + cpBind2169),
                paint.cpIn6.stroke(),
                paint.cpIn6.restore()));
        cpBind5374.right &&
          (cpBind5375.right === "double"
            ? fillCellBackground(
                paint.cpIn6,
                "right",
                cpBind5374.right,
                cpBind2167,
                cpBind2159,
                cpBind2168,
                cpBind2169,
              )
            : cpBind5375.right === "slantDashDot"
              ? clipPaintRect(
                  paint.cpIn6,
                  "right",
                  cpBind5374.right,
                  cpBind2167,
                  cpBind2159,
                  cpBind2168,
                  cpBind2169,
                )
              : (prepareDiagonalStroke(
                  paint.cpIn6,
                  cpBind5375.right,
                  cpBind5374.right,
                ),
                paint.cpIn6.beginPath(),
                paint.cpIn6.moveTo(cpBind2167 + cpBind2168, cpBind2159),
                paint.cpIn6.lineTo(
                  cpBind2167 + cpBind2168,
                  cpBind2159 + cpBind2169,
                ),
                paint.cpIn6.stroke(),
                paint.cpIn6.restore()));
      }
      if (paint.cpBind2043.showGridLines !== false && !cpBind2195.hasAnyFill) {
        paint.cpIn6.strokeStyle = paint.cpBind2051;
        paint.cpIn6.lineWidth = paint.cpBind2077;
        let cpBind9216 = (() => {
            let cpBind21803 =
              paint.rowCellAtCol(cpBind2156 - 1, cpBind2166)?.styleIndex ?? 0;
            return paint.cpBind2028[cpBind21803] ?? {};
          })(),
          cpBind9217 = (() => {
            let cpBind21804 =
              paint.rowCellAtCol(cpBind2156, cpBind2166 - 1)?.styleIndex ?? 0;
            return paint.cpBind2028[cpBind21804] ?? {};
          })(),
          cpBind9218 = !!cpBind2193?.top,
          cpBind9219 = !!cpBind9216.borders?.bottom,
          cpBind9220 = paint.cpBind2080(cpBind2156, cpBind2166),
          cpBind9221 = paint.cpBind2095.has(`${cpBind2156}:${cpBind2166}`);
        !cpBind9218 &&
          !cpBind9219 &&
          !cpBind9220 &&
          !cpBind9221 &&
          (paint.cpIn6.beginPath(),
          paint.cpIn6.moveTo(cpBind2167, cpBind2159),
          paint.cpIn6.lineTo(cpBind2167 + cpBind2168, cpBind2159),
          paint.cpIn6.stroke());
        let cpBind9222 = !!cpBind2193?.left,
          cpBind9223 = !!cpBind9217.borders?.right,
          cpBind9224 = paint.textOverflowsIntoCol(cpBind2156, cpBind2166 - 1),
          cpBind9225 = paint.cpBind2081(cpBind2156, cpBind2166);
        !cpBind9222 &&
          !cpBind9223 &&
          !cpBind9224 &&
          !cpBind9225 &&
          (paint.cpIn6.beginPath(),
          paint.cpIn6.moveTo(cpBind2167, cpBind2159),
          paint.cpIn6.lineTo(cpBind2167, cpBind2159 + cpBind2169),
          paint.cpIn6.stroke());
      }
      if (paint.cpBind2030.has(cpBind2173)) {
        let cpBind8365 = paint.cpBind2029[cpBind2173];
        if (cpBind8365) {
          paint.cpIn6.save();
          paint.cpIn6.fillStyle = cpBind8365 + "22";
          fillRectTransformed(
            paint.cpIn6,
            cpBind2167,
            cpBind2159,
            cpBind2168,
            cpBind2169,
          );
          paint.cpIn6.restore();
          let cpBind8663 = (cpIn16034, cpIn16035) =>
            `${colIndexToLetters(cpIn16035)}${cpIn16034 + 1}`;
          paint.cpIn6.save();
          paint.cpIn6.strokeStyle = cpBind8365;
          paint.cpIn6.lineWidth = 2;
          let cpBind8664 =
            cpBind2156 > 0 ? cpBind8663(cpBind2156 - 1, cpBind2166) : null;
          (!cpBind8664 || !paint.cpBind2030.has(cpBind8664)) &&
            (paint.cpIn6.beginPath(),
            paint.cpIn6.moveTo(cpBind2167, cpBind2159),
            paint.cpIn6.lineTo(cpBind2167 + cpBind2168, cpBind2159),
            paint.cpIn6.stroke());
          let cpBind8665 = cpBind8663(cpBind2156 + 1, cpBind2166);
          paint.cpBind2030.has(cpBind8665) ||
            (paint.cpIn6.beginPath(),
            paint.cpIn6.moveTo(cpBind2167, cpBind2159 + cpBind2169),
            paint.cpIn6.lineTo(
              cpBind2167 + cpBind2168,
              cpBind2159 + cpBind2169,
            ),
            paint.cpIn6.stroke());
          let cpBind8666 =
            cpBind2166 > 0 ? cpBind8663(cpBind2156, cpBind2166 - 1) : null;
          (!cpBind8666 || !paint.cpBind2030.has(cpBind8666)) &&
            (paint.cpIn6.beginPath(),
            paint.cpIn6.moveTo(cpBind2167, cpBind2159),
            paint.cpIn6.lineTo(cpBind2167, cpBind2159 + cpBind2169),
            paint.cpIn6.stroke());
          let cpBind8667 = cpBind8663(cpBind2156, cpBind2166 + 1);
          paint.cpBind2030.has(cpBind8667) ||
            (paint.cpIn6.beginPath(),
            paint.cpIn6.moveTo(cpBind2167 + cpBind2168, cpBind2159),
            paint.cpIn6.lineTo(
              cpBind2167 + cpBind2168,
              cpBind2159 + cpBind2169,
            ),
            paint.cpIn6.stroke());
          paint.cpIn6.restore();
        }
      }
      if (cpBind2177 && paint.cpBind2039?.addDataValidationTarget) {
        let cpBind15682 = paint.cpBind2045 || "sheet";
        paint.cpBind2039.addDataValidationTarget({
          id: `dv:${cpBind15682}:${cpBind2173}`,
          addr: cpBind2173,
          sheetName: cpBind15682,
          cssBounds: {
            x:
              (cpBind2167 + Math.max(0, cpBind2168 - cpBind2179)) *
              paint.cpBind2027,
            y: cpBind2159 * paint.cpBind2027,
            width: cpBind2179 * paint.cpBind2027,
            height: cpBind2169 * paint.cpBind2027,
          },
        });
      }
      let cpBind2200 =
          !!cpBind2170 &&
          !cpBind2177 &&
          !paint.cpBind2034 &&
          paint.cpBind2065(cpBind2182),
        cpBind2201 = cpBind2170
          ? checkboxHitTest({
              cell: cpBind2170,
              isCheckbox: cpBind2200,
              x: cpBind2167,
              y: cpBind2159,
              w: cpBind2168,
              h: cpBind2169,
              zoom: paint.cpBind2027,
            })
          : null,
        cpBind2202 = cpBind2183.font?.size ?? 13.333333333333332,
        cpBind2203 =
          cpBind2170 && !cpBind2177 && !cpBind2201 && paint.cpBind2076
            ? paint.cpBind2076.getIconSet(cpBind2156, cpBind2166, cpBind2170)
            : null,
        cpBind2204 =
          cpBind2203 && cpBind2170
            ? paintUnsupportedBadge({
                x: cpBind2167,
                y: cpBind2159,
                width: cpBind2168,
                height: cpBind2169,
                fontSizePx: cpBind2202,
                iconSetName: cpBind2203.iconSetName,
                showValue: cpBind2203.showValue,
              })
            : null;
      paintCellInteractiveOverlay({
        cpBind2201,
        cpBind2202,
        cpBind2203,
        cpBind2204,
        cpBind2170,
        cpBind2173,
        cpBind2174,
        cpBind2175,
        cpBind2177,
        cpBind2162,
        cpBind2164,
        cpBind2165,
        cpBind2167,
        cpBind2159,
        cpBind2168,
        cpBind2169,
        cpBind2156,
        cpBind2166,
        cpBind2182,
        cpBind2185,
        cpBind2186,
        cpBind2187,
        cpBind2189,
        cpBind2190,
        cpBind2191,
        cpBind2192,
        cpBind2198,
        _e,
        cpBind2183,
        cpBind2188,
        cpBind4864,
        cpBind4865,
        padTb,
        cpBind2176,
        cpBind2178,
        cpBind2179,
        cpBind2184,
      });
    }
    for (let cpBind23107 of cpBind2165) cpBind23107();
    if (cpBind2162) {
      let cpBind20314 = cpBind2160,
        cpBind20315 = Math.max(cpBind2163, cpBind2164);
      cpBind20315 > 0 &&
        Math.abs(cpBind20315 - cpBind20314) > 0.5 &&
        paint.rowAutoHeight.requestUpdate(cpBind2156, cpBind20315);
      paint.rowAutoHeight.markRowMeasured?.(cpBind2156);
    }
  }
}
