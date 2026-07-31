// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: apply cell XF onto a format object (legacy Binding226).

import { Yn, Zn, dr } from "../presentation-protobuf";
import { oleColorToCss } from "../../utils/spreadsheet-address-utils";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  resolveIndexedColorCss,
  resolveIndexedOrSystemColor,
} from "./indexed-color-helpers";
import {
  INDEXED_COLOR_PREFIX,
  spreadsheetMlColorSpaceOpts,
  ssfBuiltinNumFmtTable,
  excelCurrencyNumFmtOverrides,
} from "./ssf-numfmt-table";

export function applyCellXfToFormat(
  xfIn180: unknown,
  xfIn181: unknown,
  xfIn182: unknown,
  xfIn183: unknown,
  xfIn184: unknown,
  xfIn185: unknown,
  xfIn186: unknown,
) {
  if (!xfIn180 || !xfIn181) return;
  let xfBind3001 =
    !xfIn183 || xfIn180.applyAlignment || xfIn180.applyAlignment === undefined;
  if (xfIn180.numFmtId != null) {
    xfIn182.numberFormatId = xfIn180.numFmtId;
    let xfBind14960 = xfIn181.numberFormats?.find(
      (xfIn16118) => xfIn16118.id === xfIn180.numFmtId,
    );
    xfBind14960?.formatCode
      ? (xfIn182.numberFormatCode = xfBind14960.formatCode)
      : ssfBuiltinNumFmtTable[xfIn180.numFmtId]
        ? (xfIn182.numberFormatCode = ssfBuiltinNumFmtTable[xfIn180.numFmtId])
        : excelCurrencyNumFmtOverrides[xfIn180.numFmtId]
          ? (xfIn182.numberFormatCode =
              excelCurrencyNumFmtOverrides[xfIn180.numFmtId])
          : (xfIn182.numberFormatCode = undefined);
  }
  if (
    xfIn180.fillId != null &&
    (!xfIn183 || xfIn180.applyFill || xfIn180.applyFill === undefined)
  ) {
    let xfBind12766 = xfIn181.fills?.[xfIn180.fillId],
      xfBind12767 = xfBind12766?.pattern?.patternType === dr.PATTERN_TYPE_SOLID,
      xfBind12768 = !!(xfBind12766?.color || xfBind12766?.pattern?.color);
    if (xfBind12766?.color) {
      let xfBind22074 =
        resolveIndexedOrSystemColor(xfBind12766.color, undefined, xfIn184) ??
        resolveColorToCssRgba(
          xfBind12766.color,
          xfIn184,
          spreadsheetMlColorSpaceOpts,
        );
      xfBind22074 && (xfIn182.fill = xfBind22074);
    } else {
      let xfBind18239 = xfBind12766?.pattern?.color,
        xfBind18240 = resolveIndexedOrSystemColor(
          xfBind18239,
          undefined,
          xfIn184,
        );
      if (xfBind18240) xfIn182.fill = xfBind18240;
      else if (xfBind18239?.value) {
        let xfBind22767 = xfBind18239.value;
        xfIn182.fill = oleColorToCss(xfBind22767);
      } else xfBind12767 && !xfBind12768 && (xfIn182.fill = "#000000");
    }
  }
  if (xfIn180.fontId != null && ((!xfIn183 || xfIn180.applyFont) ?? true)) {
    let xfBind8368 = xfIn181.fonts[xfIn180.fontId],
      xfBind8369 = (xfIn182.font ??= {});
    typeof xfBind8368?.fontSize == "number" &&
      ((xfBind8369.size = xfBind8368.fontSize * 1.3333333333333333),
      ((xfIn182.fontSources ??= {}).size = xfIn185));
    xfBind8368?.bold != null &&
      ((xfBind8369.bold = xfBind8368.bold),
      ((xfIn182.fontSources ??= {}).bold = xfIn185));
    xfBind8368?.italic != null &&
      ((xfBind8369.italic = xfBind8368.italic),
      ((xfIn182.fontSources ??= {}).italic = xfIn185));
    xfBind8368?.underline != null &&
      ((xfBind8369.underline = !!xfBind8368.underline),
      ((xfIn182.fontSources ??= {}).underline = xfIn185));
    let xfBind8370 = xfBind8368?.typeface ?? xfBind8368?.name;
    xfBind8370 &&
      ((xfBind8369.family = xfBind8370),
      ((xfIn182.fontSources ??= {}).family = xfIn185));
    let xfBind8371 = xfBind8368?.fill?.color;
    if (xfBind8371) {
      let xfBind15840;
      xfBind8371.type === Zn.COLOR_TYPE_SYSTEM &&
        typeof xfBind8371.value == "string" &&
        (xfBind15840 =
          xfBind8371.value === "auto"
            ? "#000000"
            : resolveIndexedColorCss(xfBind8371.value, xfBind8371, xfIn184));
      xfBind15840 ||= resolveColorToCssRgba(
        xfBind8371,
        xfIn184,
        spreadsheetMlColorSpaceOpts,
      );
      xfBind15840 &&
        ((xfBind8369.color = xfBind15840),
        (xfIn182.textColor = xfBind15840),
        ((xfIn182.fontSources ??= {}).color = xfIn185));
    }
  }
  if (xfIn180.horizontalAlignment && xfBind3001)
    switch (xfIn180.horizontalAlignment) {
      case "left":
      case "center":
      case "right":
        xfIn182.align = xfIn180.horizontalAlignment;
        break;
      default:
        break;
    }
  if (xfIn180.verticalAlignment && xfBind3001)
    switch (String(xfIn180.verticalAlignment).toLowerCase()) {
      case "top":
        xfIn182.verticalAlign = Yn.ANCHOR_TYPE_TOP;
        break;
      case "center":
      case "middle":
        xfIn182.verticalAlign = Yn.ANCHOR_TYPE_MIDDLE;
        break;
      case "bottom":
        xfIn182.verticalAlign = Yn.ANCHOR_TYPE_BOTTOM;
        break;
    }
  if (
    (xfIn180.wrapText !== undefined &&
      xfBind3001 &&
      (xfIn182.wrapText = xfIn180.wrapText),
    xfIn180.borderId != null &&
      (!xfIn183 || xfIn180.applyBorder || xfIn180.applyBorder === undefined))
  ) {
    let xfBind4310 = xfIn181.borders[xfIn180.borderId];
    if (xfBind4310) {
      xfIn182.borders ??= {};
      xfIn182.borderStyles ??= {};
      let xfBind4369 = (xfIn2312, xfIn2313) => {
        if (xfIn2312) {
          let xfBind9959 = xfIn2312.type === Zn.COLOR_TYPE_SYSTEM,
            xfBind9960 = xfIn2312.value;
          if (
            xfIn2312.type === Zn.COLOR_TYPE_SCHEME &&
            typeof xfBind9960 == "string" &&
            xfBind9960.startsWith("theme:")
          ) {
            let xfBind22476 = resolveColorToCssRgba(
              xfIn2312,
              xfIn184,
              spreadsheetMlColorSpaceOpts,
            );
            if (xfBind22476) return xfBind22476;
          }
          if (
            xfIn2312.type === Zn.COLOR_TYPE_RGB &&
            typeof xfBind9960 == "string"
          ) {
            let xfBind20299 = xfBind9960.replace(/^#/i, "");
            if (xfBind20299.length === 8) return oleColorToCss(xfBind20299);
            if (xfBind20299.length === 6) return `#${xfBind20299}`;
          }
          if (xfBind9959 && xfBind9960 === "auto") return "#000000";
          if (xfBind9959 && xfBind9960?.startsWith(INDEXED_COLOR_PREFIX)) {
            let xfBind22494 = resolveIndexedOrSystemColor(
              xfIn2312,
              xfIn2313,
              xfIn184,
            );
            if (xfBind22494) return xfBind22494;
          }
          return resolveColorToCssRgba(
            xfIn2312,
            xfIn184,
            spreadsheetMlColorSpaceOpts,
          );
        }
        return resolveIndexedOrSystemColor(undefined, xfIn2313, xfIn184);
      };
      if (xfBind4310.left?.style) {
        let xfBind17983 = xfBind4369(
          xfBind4310.left.color,
          xfBind4310.left.indexedColorId,
        );
        xfBind17983 ||= "#000000";
        xfBind17983 && (xfIn182.borders.left = xfBind17983);
        xfIn182.borderStyles.left = xfBind4310.left.style;
        (xfIn182.borderSources ??= {}).left = xfIn185;
      }
      if (xfBind4310.right?.style) {
        let xfBind17822 = xfBind4369(
          xfBind4310.right.color,
          xfBind4310.right.indexedColorId,
        );
        xfBind17822 ||= "#000000";
        xfBind17822 && (xfIn182.borders.right = xfBind17822);
        xfIn182.borderStyles.right = xfBind4310.right.style;
        (xfIn182.borderSources ??= {}).right = xfIn185;
      }
      if (xfBind4310.top?.style) {
        let xfBind18168 = xfBind4369(
          xfBind4310.top.color,
          xfBind4310.top.indexedColorId,
        );
        xfBind18168 ||= "#000000";
        xfBind18168 && (xfIn182.borders.top = xfBind18168);
        xfIn182.borderStyles.top = xfBind4310.top.style;
        (xfIn182.borderSources ??= {}).top = xfIn185;
      }
      if (xfBind4310.bottom?.style) {
        let xfBind17647 = xfBind4369(
          xfBind4310.bottom.color,
          xfBind4310.bottom.indexedColorId,
        );
        xfBind17647 ||= "#000000";
        xfBind17647 && (xfIn182.borders.bottom = xfBind17647);
        xfIn182.borderStyles.bottom = xfBind4310.bottom.style;
        (xfIn182.borderSources ??= {}).bottom = xfIn185;
      }
      if (xfBind4310.diagonal?.style) {
        let xfBind17320 = xfBind4369(
          xfBind4310.diagonal.color,
          xfBind4310.diagonal.indexedColorId,
        );
        xfBind17320 ||= "#000000";
        xfBind17320 && (xfIn182.borders.diagonal = xfBind17320);
        xfIn182.borderStyles.diagonal = xfBind4310.diagonal.style;
        (xfIn182.borderSources ??= {}).diagonal = xfIn185;
      }
      xfBind4310.diagonalUp != null &&
        (xfIn182.borderDiagonalUp = !!xfBind4310.diagonalUp);
      xfBind4310.diagonalDown != null &&
        (xfIn182.borderDiagonalDown = !!xfBind4310.diagonalDown);
    }
  }
}
