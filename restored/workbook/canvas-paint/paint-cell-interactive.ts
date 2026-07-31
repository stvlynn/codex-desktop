// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: cell interactive overlay / deferred draw (checkbox/text/data-bar).

import { paint } from "./paint-bag";
import { Yn, Jn } from "../presentation-protobuf";
import { cellPaddingForFontSize } from "../../utils/spreadsheet-address-utils";
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
  prepareDiagonalStroke,
} from "./boundary-hooks";
import { cellKey } from "./paint-helpers-impl";
import { PAINT_FONT_SCALE } from "./paint-consts";

export function paintCellInteractiveOverlay(props: Record<string, any>): void {
  const {
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
  } = props;

      if (
        (cpBind2201 &&
          (paint.cpBind2039?.addCheckboxTarget &&
            paint.cpBind2039.addCheckboxTarget({
              id: `checkbox:${cpBind2173}`,
              address: cpBind2173,
              checked: cpBind2201.checked,
              cssBounds: cpBind2201.cssBounds,
            }),
          cpBind2165.push(() => {
            paintCheckboxBox(paint.cpIn6, cpBind2201, {
              accentColor: paint.accentColor,
              darkMode: paint.darkMode,
            });
            cpBind2185 &&
              (cpBind2186 || cpBind2187) &&
              (prepareDiagonalStroke(paint.cpIn6, _e, cpBind2185),
              cpBind2187 &&
                (paint.cpIn6.beginPath(),
                paint.cpIn6.moveTo(cpBind2167, cpBind2159),
                paint.cpIn6.lineTo(
                  cpBind2167 + cpBind2168,
                  cpBind2159 + cpBind2169,
                ),
                paint.cpIn6.stroke()),
              cpBind2186 &&
                (paint.cpIn6.beginPath(),
                paint.cpIn6.moveTo(cpBind2167, cpBind2159 + cpBind2169),
                paint.cpIn6.lineTo(cpBind2167 + cpBind2168, cpBind2159),
                paint.cpIn6.stroke()),
              paint.cpIn6.restore());
          })),
        cpBind2170 && !cpBind2201)
      ) {
        let cpBind3175 = !!cpBind2203 && !cpBind2203.showValue,
          cpBind3176 = cpBind3175
            ? ""
            : paint.cpBind2066(cpBind2170, cpBind2182),
          cpBind3177 = paint.cpBind2067(cpBind2170),
          cpBind3178 = {
            anchor: cpBind2183.verticalAlign ?? Yn.ANCHOR_TYPE_BOTTOM,
            alignment:
              cpBind2183.align === "center"
                ? Jn.ALIGNMENT_TYPE_CENTER
                : cpBind2183.align === "right"
                  ? Jn.ALIGNMENT_TYPE_RIGHT
                  : cpBind2183.align === "left"
                    ? Jn.ALIGNMENT_TYPE_LEFT
                    : cpBind3177
                      ? Jn.ALIGNMENT_TYPE_RIGHT
                      : Jn.ALIGNMENT_TYPE_LEFT,
          },
          cpBind3179 = cpBind2174?.fontColor,
          cpBind3180 = cpBind2174?.bold === true;
        typeof cpBind2170.styleIndex == "number" &&
          !paint.cpBind2061.has(cpBind2170.styleIndex) &&
          paint.cpBind2061.size < 12 &&
          paint.cpBind2061.add(cpBind2170.styleIndex);
        let cpBind3181 = paint.colWidthForPaintRow(cpBind2156, cpBind2166),
          { padLr, padTb } = cellPaddingForFontSize(
            (cpBind2183.font?.size ?? 13.333333333333332) * PAINT_FONT_SCALE ||
              11,
          ),
          cpBind3182 = cpBind2204?.reservedWidth ?? 0,
          cpBind3183 = padLr + cpBind2176 + cpBind3182,
          cpBind3184 = padLr + cpBind2179,
          cpBind3185 =
            paint.cpBind2078.textMetrics.get(cellKey(cpBind2156, cpBind2166))
              ?.firstLineW ?? 0;
        paint.cpBind2078.textMetrics.set(cellKey(cpBind2156, cpBind2166), {
          firstLineW: cpBind3185,
          displayText: cpBind3176,
          padLeft: cpBind3183,
          padRight: cpBind3184,
          padTb,
          isNumeric: cpBind3177,
        });
        let cpBind3186 = Math.max(0, cpBind2168 - (cpBind3183 + cpBind3184)),
          cpBind3187 = !cpBind2184 && !cpBind3177 && cpBind3185 > cpBind3186,
          cpBind3188 = Math.max(
            cpBind2168,
            cpBind3185 + (cpBind3183 + cpBind3184),
          ),
          cpBind3189 = cpBind3187
            ? Math.min(
                paint.be && (cpBind2192 > cpBind2191 || cpBind2190 > cpBind2189)
                  ? cpBind2168
                  : cpBind3181,
                cpBind3188,
              )
            : cpBind2168,
          cpBind3190 = cpBind3187
            ? {
                ...cpBind3178,
                alignment: Jn.ALIGNMENT_TYPE_LEFT,
              }
            : cpBind3178,
          cpBind3191 = !paint.cpBind2070(cpBind2170),
          { element, layout } =
            cpBind3176 === ""
              ? {
                  element: null,
                  layout: null,
                }
              : paint.cpBind2075({
                  cell: cpBind2170,
                  displayText: cpBind3176,
                  resolvedTextStyle: cpBind3190,
                  widthPx: cpBind3189,
                  heightPx: cpBind2169,
                  paddingPx: {
                    left: cpBind3183,
                    right: cpBind3184,
                    top: padTb,
                    bottom: padTb,
                  },
                  wrapTextEnabled: cpBind2184,
                  style: cpBind2183,
                  tableCellStyle: cpBind2175,
                  pivotFontColor: cpBind3179,
                  pivotBold: cpBind3180,
                  conditionalFormattingTextColor: cpBind2198,
                  numberFormatColorOverride: cpBind2188,
                  styleIndex: cpBind2182,
                  rowIdx: cpBind2156,
                  colIdx: cpBind2166,
                  cacheable: cpBind3191,
                });
        if (cpBind2162 && cpBind2189 === cpBind2190) {
          let cpBind21520 =
            layout?.lines?.reduce(
              (cpIn16187, cpIn16188) => cpIn16187 + cpIn16188.heightPx,
              0,
            ) ?? 0;
          cpBind21520 > cpBind2164 && (cpBind2164 = cpBind21520);
        }
        let cpBind3192 = () => {
          cpBind2204 &&
            cpBind2203 &&
            paintIconSetGlyph(paint.cpIn6, {
              iconSetName: cpBind2203.iconSetName,
              iconIndex: cpBind2203.iconIndex,
              x: cpBind2204.x,
              y: cpBind2204.y,
              width: cpBind2204.width,
              height: cpBind2204.height,
            });
          !(cpBind3175 && cpBind3176 === "") &&
            (paint.cpIn6.save(),
            paint.cpIn6.beginPath(),
            paint.cpIn6.rect(cpBind2167, cpBind2159, cpBind3189, cpBind2169),
            paint.cpIn6.clip(),
            layout &&
              element &&
              drawCheckboxControl(element, layout, paint.cpIn6, undefined, {
                resolvedStyle: cpBind3190,
                bboxPx: {
                  x: cpBind2167,
                  y: cpBind2159,
                  width: cpBind3189,
                  height: cpBind2169,
                },
                paddingPx: {
                  left: cpBind3183,
                  right: cpBind3184,
                  top: padTb,
                  bottom: padTb,
                },
                themeMap: paint.cpBind2033,
              }),
            paint.cpIn6.restore());
        };
        cpBind2165.push(() => {
          if (
            (paint.cpBind2037?.(
              cpBind2167,
              cpBind2159,
              cpBind3189,
              cpBind2169,
              `text:addr=${cpBind2173} r=${cpBind2156} c=${cpBind2166} firstLine=${Math.round(cpBind3185)} content=${Math.round(cpBind3186)} draw=${Math.round(cpBind3189)} spills=${cpBind3187}`,
            ),
            cpBind3192(),
            cpBind2177 && cpBind2178 > 0)
          ) {
            let cpBind14202 = cpBind2167 + cpBind2168 - cpBind2178 - 4,
              cpBind14203 = cpBind2159 + (cpBind2169 - cpBind2178) / 2;
            paint.cpIn6.save();
            paint.cpIn6.fillStyle = "rgba(107, 114, 128, 0.9)";
            paint.cpIn6.beginPath();
            paint.cpIn6.moveTo(cpBind14202, cpBind14203 + 2);
            paint.cpIn6.lineTo(cpBind14202 + cpBind2178, cpBind14203 + 2);
            paint.cpIn6.lineTo(
              cpBind14202 + cpBind2178 / 2,
              cpBind14203 + cpBind2178,
            );
            paint.cpIn6.closePath();
            paint.cpIn6.fill();
            paint.cpIn6.restore();
          }
          cpBind2185 &&
            (cpBind2186 || cpBind2187) &&
            (prepareDiagonalStroke(paint.cpIn6, _e, cpBind2185),
            cpBind2187 &&
              (paint.cpIn6.beginPath(),
              paint.cpIn6.moveTo(cpBind2167, cpBind2159),
              paint.cpIn6.lineTo(
                cpBind2167 + cpBind2168,
                cpBind2159 + cpBind2169,
              ),
              paint.cpIn6.stroke()),
            cpBind2186 &&
              (paint.cpIn6.beginPath(),
              paint.cpIn6.moveTo(cpBind2167, cpBind2159 + cpBind2169),
              paint.cpIn6.lineTo(cpBind2167 + cpBind2168, cpBind2159),
              paint.cpIn6.stroke()),
            paint.cpIn6.restore());
        });
      }
}
