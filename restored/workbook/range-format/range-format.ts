// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat class (legacy Binding590); autofit peeled to range-format-autofit.

import {
  columnWidthPx,
  pointsToPixels,
  pixelsToPoints,
  pxToCharCount,
} from "../../utils/spreadsheet-address-utils";
import { SpreadsheetFont, Borders } from "../stylesheet";
import { horizontalAlignment } from "./horizontal-alignment";
import {
  cloneFillFromValue,
  cloneFontOrUndefined,
  cloneBordersOrUndefined,
  borderSideConfigFromSide,
  fillFromConfigOrUndefined,
} from "./format-clone-helpers";
import { measure2dArrayShape, uniform2dArrayFirstValue } from "./array-shape";
import {
  cloneWorkbookColor,
  workbookColorToConfig,
  fillConfigFromFillOrValue,
  borderSideFromPartial,
  borderSideSnapshot,
  parseHorizontalAlignment,
  requireHorizontalAlignment,
  horizontalAlignmentToName,
  parseVerticalAlignment,
  requireVerticalAlignment,
  verticalAlignmentToCss,
} from "./border-alignment-helpers";
import { RangeFormatFill } from "./range-format-fill";
import { RangeFormatFont } from "./range-format-font";
import { RangeFormatBorders } from "./range-format-borders";
import { autofitRangeColumns, autofitRangeRows } from "./range-format-autofit";
export class RangeFormat {
  #e;
  #t;
  #n;
  #r;
  #i;
  constructor(rfIn6364) {
    this.#e = rfIn6364;
    let rfBind16523 = (rfIn16407) => this.#w(rfIn16407);
    this.#r = new RangeFormatFont({
      readState: () => this.#f(),
      applyChange: (rfIn16408) => this.#m(rfIn16408),
      record: rfBind16523,
    });
    this.#i = new RangeFormatBorders(this, rfBind16523);
  }
  reset() {
    this.#t = undefined;
    this.#n = undefined;
  }
  get font() {
    return this.#r;
  }
  set font(rfIn7562) {
    if (!(rfIn7562 instanceof RangeFormatFont)) {
      if (!rfIn7562 || typeof rfIn7562 != "object")
        throw Error("RangeFormat.font setter requires a config object.");
      this.setFont(rfIn7562);
    }
  }
  setFont(rfIn2064) {
    if (!rfIn2064 || typeof rfIn2064 != "object")
      throw Error("RangeFormat.setFont(patch) requires a config object.");
    let rfBind8934 = {},
      rfBind8935 = workbookColorToConfig(rfIn2064.color);
    this.#m((rfIn5987) => {
      rfIn2064.bold !== undefined && (rfIn5987.bold = rfIn2064.bold);
      rfIn2064.italic !== undefined && (rfIn5987.italic = rfIn2064.italic);
      rfIn2064.size !== undefined && (rfIn5987.size = rfIn2064.size);
      rfIn2064.name !== undefined && (rfIn5987.name = rfIn2064.name);
      rfIn2064.color !== undefined &&
        (rfIn5987.color = cloneWorkbookColor(rfIn2064.color));
    });
    rfIn2064.bold !== undefined && (rfBind8934.bold = rfIn2064.bold);
    rfIn2064.italic !== undefined && (rfBind8934.italic = rfIn2064.italic);
    rfIn2064.size !== undefined && (rfBind8934.size = rfIn2064.size);
    rfIn2064.name !== undefined && (rfBind8934.name = rfIn2064.name);
    rfBind8935 !== undefined && (rfBind8934.color = rfBind8935);
    Object.keys(rfBind8934).length > 0 &&
      this.#w({
        font: rfBind8934,
      });
  }
  get borders() {
    return this.#i;
  }
  set borders(rfIn4513) {
    if (!rfIn4513)
      throw Error("RangeFormat.borders setter requires a config object.");
    if ("preset" in rfIn4513) {
      let { preset, style, color } = rfIn4513;
      style !== undefined || color !== undefined
        ? this.#i.apply({
            preset,
            style,
            color,
          })
        : this.#i.setPreset(preset);
      return;
    }
    this.#i.assign(rfIn4513);
  }
  get fill() {
    let rfBind21325 = this.#f().fill;
    return rfBind21325
      ? new RangeFormatFill(rfBind21325, (rfIn16409) => this.#o(rfIn16409))
      : undefined;
  }
  set fill(rfIn15221) {
    this.#o(rfIn15221);
  }
  get numberFormat() {
    return this.#f().numberFormatCode;
  }
  #a(rfIn1727) {
    let rfBind8091 = this.#T(),
      rfBind8092 = () => (rfIn1727 ? cloneFillFromValue(rfIn1727) : undefined),
      rfBind8093;
    if (
      (this.#S(() => {
        this.#e.editCells(true, (rfIn3110) => {
          if (!rfIn3110.cell) return;
          let rfBind11212 =
              rfIn3110.cell.styleIndex ??
              this.#e.getLogicalStyleIndex(rfIn3110.row, rfIn3110.col) ??
              0,
            rfBind11213 = rfBind8091.describe(rfBind11212),
            rfBind11214 = this.#p(rfBind11213);
          rfBind11214.fill = rfBind8092();
          let { styleId, styleIndex } = this.#x(rfBind11214);
          rfIn3110.cell.styleIndex = styleIndex;
          this.#e.setLogicalStyleIndex(rfIn3110.row, rfIn3110.col, styleIndex);
          this.#C(rfIn3110.row, rfIn3110.col, styleId);
          rfBind8093 ||
            ((rfBind8093 = this.#g(rfBind11214)),
            (rfBind8093.styleIndex = styleIndex));
        });
      }),
      rfBind8093)
    ) {
      this.#t = rfBind8093;
      return;
    }
    let rfBind8094 = this.#g(this.#f());
    rfBind8094.fill = rfBind8092();
    this.#t = rfBind8094;
  }
  #o(rfIn10141) {
    let rfBind20609 = fillConfigFromFillOrValue(rfIn10141);
    rfBind20609 !== undefined &&
      this.#w({
        fill: rfBind20609,
      });
    let rfBind20610 = fillFromConfigOrUndefined(rfIn10141);
    this.#a(rfBind20610);
  }
  set numberFormat(rfIn350) {
    if (rfIn350 === undefined || typeof rfIn350 == "string") {
      this.#h((rfIn11668) => {
        rfIn11668.numberFormatCode = rfIn350;
        rfIn11668.numberFormatId = undefined;
      });
      rfIn350 !== undefined &&
        this.#w({
          numberFormat: rfIn350,
        });
      return;
    }
    if (!Array.isArray(rfIn350))
      throw Error(
        "RangeFormat.numberFormat expects a format code string or a 2D array of strings.",
      );
    let rfBind3673 = this.#e.getBounds();
    if (!rfBind3673)
      throw Error(
        "RangeFormat.numberFormat 2D array assignment requires a range with bounds.",
      );
    let rfBind3674 = measure2dArrayShape(rfIn350);
    if (rfBind3674.ragged) {
      let rfBind17881 = this.#e.getAddress() || "range";
      throw Error(
        `RangeFormat.numberFormat expects a rectangular 2D array for ${rfBind17881} (ragged rows: ${rfBind3674.colCounts.join(", ")}).`,
      );
    }
    let rfBind3675 = rfIn350,
      rfBind3676 =
        rfBind3674.rows === rfBind3673.rows &&
        rfBind3674.cols === rfBind3673.cols &&
        !rfBind3674.ragged,
      rfBind3677 =
        rfBind3674.rows === rfBind3673.rows &&
        rfBind3674.cols === 1 &&
        rfBind3673.cols >= 1,
      rfBind3678 =
        rfBind3674.rows === 1 &&
        rfBind3674.cols === rfBind3673.cols &&
        rfBind3673.rows >= 1,
      rfBind3679 = rfBind3674.rows === 1 && rfBind3674.cols === 1;
    if (!rfBind3676) {
      if (rfBind3679) {
        let rfBind16359 = rfBind3675[0]?.[0];
        if (typeof rfBind16359 != "string")
          throw Error(
            "RangeFormat.numberFormat 2D array expects string values for every cell.",
          );
        this.numberFormat = rfBind16359;
        return;
      }
      if (rfBind3677)
        rfBind3675 = Array.from(
          {
            length: rfBind3673.rows,
          },
          (rfIn10516, rfIn10517) => {
            let rfBind20980 = rfBind3675[rfIn10517]?.[0];
            return Array.from(
              {
                length: rfBind3673.cols,
              },
              () => rfBind20980,
            );
          },
        );
      else if (rfBind3678)
        rfBind3675 = Array.from(
          {
            length: rfBind3673.rows,
          },
          () => [...(rfBind3675[0] ?? [])],
        );
      else {
        if (
          !(
            rfBind3674.rows > 0 &&
            rfBind3674.cols > 0 &&
            rfBind3674.rows <= rfBind3673.rows &&
            rfBind3674.cols <= rfBind3673.cols
          )
        ) {
          let rfBind15826 = this.#e.getAddress() || "range";
          throw Error(
            `RangeFormat.numberFormat expects a ${rfBind3673.rows}x${rfBind3673.cols} matrix for ${rfBind15826}, got ${rfBind3674.rows}x${rfBind3674.cols}. You can also pass a 1xN or Nx1 matrix to broadcast across rows/columns.`,
          );
        }
        let rfBind6623 = this.#e.getAddress() || "range",
          rfBind6624 = rfBind3673.rows % rfBind3674.rows === 0,
          rfBind6625 = rfBind3673.cols % rfBind3674.cols === 0,
          rfBind6626 = rfBind6624 && rfBind6625 ? "tiled" : "stretched";
        console.warn(
          `RangeFormat.numberFormat expanded a ${rfBind3674.rows}x${rfBind3674.cols} matrix to ${rfBind3673.rows}x${rfBind3673.cols} for ${rfBind6623} (${rfBind6626}).`,
        );
        rfBind3675 = Array.from(
          {
            length: rfBind3673.rows,
          },
          (rfIn6020, rfIn6021) => {
            let rfBind16060 = rfBind6624
              ? rfIn6021 % rfBind3674.rows
              : Math.min(rfIn6021, rfBind3674.rows - 1);
            return Array.from(
              {
                length: rfBind3673.cols,
              },
              (rfIn9879, rfIn9880) => {
                let rfBind20427 = rfBind6625
                  ? rfIn9880 % rfBind3674.cols
                  : Math.min(rfIn9880, rfBind3674.cols - 1);
                return rfIn350[rfBind16060]?.[rfBind20427] ?? "";
              },
            );
          },
        );
      }
    }
    let rfBind3680 = uniform2dArrayFirstValue(rfBind3675);
    if (rfBind3680 !== null) {
      this.numberFormat = rfBind3680;
      return;
    }
    this.#s(rfBind3675);
  }
  #s(rfIn1108) {
    let rfBind6485 = this.#T(),
      rfBind6486;
    if (
      (this.#S(() => {
        this.#e.editCells(true, (rfIn1921) => {
          if (!rfIn1921.cell) return;
          let rfBind8633 =
            rfIn1108[rfIn1921.relativeRow]?.[rfIn1921.relativeCol];
          if (typeof rfBind8633 != "string")
            throw Error(
              "RangeFormat.numberFormat 2D array expects string values for every cell.",
            );
          let rfBind8634 =
              this.#e.getLogicalStyleIndex(rfIn1921.row, rfIn1921.col) ??
              rfIn1921.cell.styleIndex ??
              0,
            rfBind8635 = rfBind6485.describe(rfBind8634),
            rfBind8636 = this.#p(rfBind8635);
          rfBind8636.numberFormatCode = rfBind8633;
          rfBind8636.numberFormatId = undefined;
          let { styleId, styleIndex } = this.#x(rfBind8636);
          rfIn1921.cell.styleIndex = styleIndex;
          this.#e.setLogicalStyleIndex(rfIn1921.row, rfIn1921.col, styleIndex);
          this.#C(rfIn1921.row, rfIn1921.col, styleId);
          rfBind6486 ||
            ((rfBind6486 = this.#g(rfBind8636)),
            (rfBind6486.styleIndex = styleIndex));
        });
      }),
      rfBind6486)
    ) {
      this.#t = rfBind6486;
      return;
    }
    let rfBind6487 = this.#g(this.#f());
    rfBind6487.numberFormatCode = rfIn1108[0]?.[0];
    rfBind6487.numberFormatId = undefined;
    this.#t = rfBind6487;
  }
  get wrapText() {
    return this.#f().wrapText ?? false;
  }
  set wrapText(rfIn10208) {
    this.#h((rfIn14944) => {
      rfIn14944.wrapText = rfIn10208;
    });
    this.#w({
      wrapText: rfIn10208,
    });
  }
  get horizontalAlignment() {
    return horizontalAlignmentToName(
      this.#f().horizontalAlignment ?? horizontalAlignment.general,
    );
  }
  set horizontalAlignment(rfIn8254) {
    let rfBind18769 = requireHorizontalAlignment(rfIn8254);
    this.#h((rfIn13926) => {
      rfIn13926.horizontalAlignment = rfBind18769;
    });
    this.#w({
      horizontalAlignment: horizontalAlignmentToName(rfBind18769),
    });
  }
  get verticalAlignment() {
    return this.#f().verticalAlignment ?? "bottom";
  }
  set verticalAlignment(rfIn8562) {
    let rfBind19060 = requireVerticalAlignment(rfIn8562);
    this.#h((rfIn14148) => {
      rfIn14148.verticalAlignment = rfBind19060;
    });
    this.#w({
      verticalAlignment: rfBind19060,
    });
  }
  get rowHeight() {
    return this.#c();
  }
  set rowHeight(rfIn11321) {
    this.#l(rfIn11321);
    Number.isFinite(rfIn11321) &&
      this.#w({
        rowHeight: rfIn11321,
      });
  }
  get rowHeightPx() {
    let rfBind21458 = this.rowHeight;
    return rfBind21458 === undefined ? undefined : pointsToPixels(rfBind21458);
  }
  set rowHeightPx(rfIn7666) {
    if (!Number.isFinite(rfIn7666) || rfIn7666 < 0)
      throw Error("RangeFormat.rowHeightPx must be a non-negative number.");
    this.rowHeight = pixelsToPoints(rfIn7666);
  }
  get columnWidth() {
    return this.#u();
  }
  set columnWidth(rfIn11153) {
    this.#d(rfIn11153);
    Number.isFinite(rfIn11153) &&
      this.#w({
        columnWidth: rfIn11153,
      });
  }
  get columnWidthPx() {
    let rfBind20981 = this.columnWidth;
    return rfBind20981 === undefined
      ? undefined
      : columnWidthPx(rfBind20981, this.#E());
  }
  set columnWidthPx(rfIn7296) {
    if (!Number.isFinite(rfIn7296) || rfIn7296 < 0)
      throw Error("RangeFormat.columnWidthPx must be a non-negative number.");
    this.columnWidth = pxToCharCount(rfIn7296, this.#E());
  }
  get styleId() {
    let rfBind17584 = this.#e.getFirstCell(false);
    if (rfBind17584) {
      let rfBind21379 = this.#e.getLogicalStyleIndex(
        rfBind17584.row,
        rfBind17584.col,
      );
      if (rfBind21379 != null) return rfBind21379;
    }
    return this.#f().styleIndex;
  }
  autofitColumns() {
    autofitRangeColumns(this.#e);
  }
  autofitRows() {
    autofitRangeRows(this.#e);
  }
  #c() {
    let rfBind11033 = this.#e.getBounds(),
      rfBind11034 = this.#e.getWorksheet();
    if (!rfBind11033 || !rfBind11034) return;
    let rfBind11035,
      rfBind11036 = false;
    for (
      let rfBind13966 = 0;
      rfBind13966 < rfBind11033.rows;
      rfBind13966 += 1
    ) {
      let rfBind14684 = rfBind11034.__getRow(
          rfBind11033.startRow + rfBind13966,
        ),
        rfBind14685 =
          rfBind14684 && (rfBind14684.customHeight || rfBind14684.height !== 0)
            ? rfBind14684.height
            : undefined;
      if (rfBind14685 === undefined) {
        if (rfBind11036) return;
        continue;
      }
      if (!rfBind11036) {
        rfBind11035 = rfBind14685;
        rfBind11036 = true;
        continue;
      }
      if (rfBind11035 !== rfBind14685) return;
    }
    return rfBind11036 ? rfBind11035 : undefined;
  }
  #l(rfIn3366) {
    if (!Number.isFinite(rfIn3366) || rfIn3366 < 0)
      throw Error("RangeFormat.rowHeight must be a non-negative number.");
    let rfBind11701 = this.#e.getBounds(),
      rfBind11702 = this.#e.getWorksheet();
    if (!(!rfBind11701 || !rfBind11702)) {
      for (
        let rfBind17823 = 0;
        rfBind17823 < rfBind11701.rows;
        rfBind17823 += 1
      ) {
        let rfBind18855 = rfBind11702.__getOrCreateRow(
          rfBind11701.startRow + rfBind17823,
        );
        rfBind18855.height = rfIn3366;
        rfBind18855.customHeight = true;
        rfBind11702.__syncRowSizeRef(rfBind11701.startRow + rfBind17823);
      }
      rfBind11702.__invalidateViewportLayout();
    }
  }
  #u() {
    let rfBind9351 = this.#e.getBounds(),
      rfBind9352 = this.#e.getWorksheet();
    if (!rfBind9351 || !rfBind9352) return;
    let rfBind9353 = rfBind9352.__getColumns(),
      rfBind9354,
      rfBind9355 = false;
    for (let rfBind11703 = 0; rfBind11703 < rfBind9351.cols; rfBind11703 += 1) {
      let rfBind12175 = rfBind9351.startCol + rfBind11703,
        rfBind12176;
      for (let rfBind18451 of rfBind9353) {
        let rfBind18984 = Math.max(0, (rfBind18451.min ?? 1) - 1),
          rfBind18985 = Math.max(
            rfBind18984,
            (rfBind18451.max ?? rfBind18451.min ?? 1) - 1,
          );
        rfBind12175 >= rfBind18984 &&
          rfBind12175 <= rfBind18985 &&
          (rfBind12176 = rfBind18451.hidden ? 0 : rfBind18451.width);
      }
      if (rfBind12176 === undefined) {
        if (rfBind9355) return;
        continue;
      }
      if (!rfBind9355) {
        rfBind9354 = rfBind12176;
        rfBind9355 = true;
        continue;
      }
      if (rfBind9354 !== rfBind12176) return;
    }
    return rfBind9355 ? rfBind9354 : undefined;
  }
  #d(rfIn1905) {
    if (!Number.isFinite(rfIn1905) || rfIn1905 < 0)
      throw Error("RangeFormat.columnWidth must be a non-negative number.");
    let rfBind8583 = this.#e.getBounds(),
      rfBind8584 = this.#e.getWorksheet();
    if (!rfBind8583 || !rfBind8584) return;
    let rfBind8585 = rfBind8584.__getColumns();
    for (let rfBind13602 = 0; rfBind13602 < rfBind8583.cols; rfBind13602 += 1) {
      let rfBind14283 = rfBind8583.startCol + rfBind13602 + 1,
        rfBind14284 = rfBind8585.find(
          (item) =>
            item.min === rfBind14283 && (item.max ?? item.min) === rfBind14283,
        );
      if (rfBind14284) {
        rfBind14284.width = rfIn1905;
        rfBind14284.customWidth = true;
        rfBind14284.hidden = false;
        continue;
      }
      rfBind8585.push({
        min: rfBind14283,
        max: rfBind14283,
        width: rfIn1905,
        customWidth: true,
        hidden: false,
      });
      rfBind8584.__syncColumnSizeRef(rfBind8583.startCol + rfBind13602);
    }
    for (let rfBind22256 = 0; rfBind22256 < rfBind8583.cols; rfBind22256 += 1)
      rfBind8584.__syncColumnSizeRef(rfBind8583.startCol + rfBind22256);
    rfBind8584.__invalidateViewportLayout();
  }
  applyBorderBlueprint(rfIn1513) {
    let rfBind7556 = this.#e.getBounds();
    if (!rfBind7556) return;
    let rfBind7557 = this.#T();
    this.#S(() => {
      this.#e.editCells(true, (rfIn2136) => {
        if (!rfIn2136.cell) return;
        let rfBind9078 =
            this.#e.getLogicalStyleIndex(rfIn2136.row, rfIn2136.col) ??
            rfIn2136.cell.styleIndex ??
            0,
          rfBind9079 = rfBind7557.describe(rfBind9078),
          rfBind9080 = this.#p(rfBind9079);
        rfBind9080.border = this.#y(
          rfIn1513,
          rfBind9080.border,
          rfIn2136.relativeRow,
          rfIn2136.relativeCol,
          rfBind7556.rows,
          rfBind7556.cols,
        );
        let { styleId, styleIndex } = this.#x(rfBind9080);
        rfIn2136.cell.styleIndex = styleIndex;
        this.#e.setLogicalStyleIndex(rfIn2136.row, rfIn2136.col, styleIndex);
        this.#C(rfIn2136.row, rfIn2136.col, styleId);
        rfIn2136.relativeRow === 0 &&
          rfIn2136.relativeCol === 0 &&
          ((this.#t = rfBind9080), (this.#t.styleIndex = styleIndex));
      });
    });
    this.#n = this.#v(rfIn1513);
  }
  updateBorders(rfIn9760) {
    let rfBind20300 = this.#v(this.#n) ?? this.#_();
    rfIn9760(rfBind20300);
    this.applyBorderBlueprint(rfBind20300);
    this.#n = this.#v(rfBind20300);
  }
  getBorderBlueprintSnapshot() {
    return this.#v(this.#n) ?? this.#_();
  }
  #f() {
    if (this.#t) return this.#t;
    let rfBind14350 = this.#e.getFirstCell(true),
      rfBind14351 = this.#T();
    if (!rfBind14350 || !rfBind14350.cell) {
      let rfBind21741 = rfBind14351.describe(0);
      return ((this.#t = this.#p(rfBind21741)), this.#t);
    }
    let rfBind14352 = rfBind14350.cell.styleIndex ?? 0,
      rfBind14353 = rfBind14351.describe(rfBind14352);
    return ((this.#t = this.#p(rfBind14353)), this.#t);
  }
  #p(rfIn2949) {
    return {
      styleIndex: rfIn2949.styleIndex,
      fill: rfIn2949.fill ? cloneFillFromValue(rfIn2949.fill) : undefined,
      font: cloneFontOrUndefined(rfIn2949.font),
      border: cloneBordersOrUndefined(rfIn2949.border),
      numberFormatCode: rfIn2949.numberFormatCode,
      numberFormatId: rfIn2949.numberFormatId,
      wrapText: rfIn2949.wrapText,
      horizontalAlignment: rfIn2949.horizontalAlignment
        ? parseHorizontalAlignment(rfIn2949.horizontalAlignment)
        : undefined,
      verticalAlignment: rfIn2949.verticalAlignment
        ? parseVerticalAlignment(rfIn2949.verticalAlignment)
        : undefined,
      featurePropertyBagIndex: rfIn2949.featurePropertyBagIndex,
    };
  }
  #m(rfIn11121) {
    this.#h((rfIn13152) => {
      rfIn13152.font ??= new SpreadsheetFont();
      rfIn11121(rfIn13152.font);
    });
  }
  #h(rfIn1874) {
    let rfBind8497 = this.#T(),
      rfBind8498;
    if (
      (this.#S(() => {
        this.#e.editCells(true, (rfIn3152) => {
          if (!rfIn3152.cell) return;
          let rfBind11277 =
              this.#e.getLogicalStyleIndex(rfIn3152.row, rfIn3152.col) ??
              rfIn3152.cell.styleIndex ??
              0,
            rfBind11278 = rfBind8497.describe(rfBind11277),
            rfBind11279 = this.#p(rfBind11278);
          rfIn1874(rfBind11279);
          let { styleId, styleIndex } = this.#x(rfBind11279);
          rfIn3152.cell.styleIndex = styleIndex;
          this.#e.setLogicalStyleIndex(rfIn3152.row, rfIn3152.col, styleIndex);
          this.#C(rfIn3152.row, rfIn3152.col, styleId);
          rfBind8498 ||
            ((rfBind8498 = this.#g(rfBind11279)),
            (rfBind8498.styleIndex = styleIndex));
        });
      }),
      rfBind8498)
    ) {
      this.#t = rfBind8498;
      return;
    }
    let rfBind8499 = this.#g(this.#f());
    rfIn1874(rfBind8499);
    this.#t = rfBind8499;
  }
  #g(rfIn3708) {
    return {
      styleIndex: rfIn3708.styleIndex,
      fill: rfIn3708.fill ? cloneFillFromValue(rfIn3708.fill) : undefined,
      font: cloneFontOrUndefined(rfIn3708.font),
      border: cloneBordersOrUndefined(rfIn3708.border),
      numberFormatCode: rfIn3708.numberFormatCode,
      numberFormatId: rfIn3708.numberFormatId,
      wrapText: rfIn3708.wrapText,
      horizontalAlignment: rfIn3708.horizontalAlignment,
      verticalAlignment: rfIn3708.verticalAlignment,
      featurePropertyBagIndex: rfIn3708.featurePropertyBagIndex,
    };
  }
  #_() {
    let rfBind13172 = this.#f(),
      rfBind13173 = {},
      rfBind13174 = rfBind13172.border;
    return (
      rfBind13174 &&
        ((rfBind13173.top = borderSideSnapshot(rfBind13174.top)),
        (rfBind13173.bottom = borderSideSnapshot(rfBind13174.bottom)),
        (rfBind13173.left = borderSideSnapshot(rfBind13174.left)),
        (rfBind13173.right = borderSideSnapshot(rfBind13174.right)),
        (rfBind13173.diagonal = borderSideSnapshot(rfBind13174.diagonal)),
        (rfBind13173.diagonalUp = rfBind13174.diagonalUp),
        (rfBind13173.diagonalDown = rfBind13174.diagonalDown)),
      rfBind13173
    );
  }
  #v(rfIn3319) {
    if (!rfIn3319) return;
    let rfBind11617 = {};
    return (
      (rfBind11617.top = borderSideConfigFromSide(rfIn3319.top)),
      (rfBind11617.bottom = borderSideConfigFromSide(rfIn3319.bottom)),
      (rfBind11617.left = borderSideConfigFromSide(rfIn3319.left)),
      (rfBind11617.right = borderSideConfigFromSide(rfIn3319.right)),
      (rfBind11617.insideHorizontal = borderSideConfigFromSide(
        rfIn3319.insideHorizontal,
      )),
      (rfBind11617.insideVertical = borderSideConfigFromSide(
        rfIn3319.insideVertical,
      )),
      (rfBind11617.diagonal = borderSideConfigFromSide(rfIn3319.diagonal)),
      rfIn3319.diagonalUp !== undefined &&
        (rfBind11617.diagonalUp = rfIn3319.diagonalUp),
      rfIn3319.diagonalDown !== undefined &&
        (rfBind11617.diagonalDown = rfIn3319.diagonalDown),
      rfBind11617
    );
  }
  #y(rfIn1518, rfIn1519, rfIn1520, rfIn1521, rfIn1522, rfIn1523) {
    let rfBind7567 = cloneBordersOrUndefined(rfIn1519) ?? new Borders(),
      rfBind7568 = rfIn1520 === 0,
      rfBind7569 = rfIn1520 === rfIn1522 - 1,
      rfBind7570 = rfIn1521 === 0,
      rfBind7571 = rfIn1521 === rfIn1523 - 1;
    return (
      rfIn1518.top &&
        rfBind7568 &&
        (rfBind7567.top = borderSideFromPartial(rfIn1518.top)),
      rfIn1518.bottom &&
        rfBind7569 &&
        (rfBind7567.bottom = borderSideFromPartial(rfIn1518.bottom)),
      rfIn1518.left &&
        rfBind7570 &&
        (rfBind7567.left = borderSideFromPartial(rfIn1518.left)),
      rfIn1518.right &&
        rfBind7571 &&
        (rfBind7567.right = borderSideFromPartial(rfIn1518.right)),
      rfIn1518.insideHorizontal &&
        (rfIn1520 > 0 &&
          (rfBind7567.top = borderSideFromPartial(rfIn1518.insideHorizontal)),
        rfIn1520 < rfIn1522 - 1 &&
          (rfBind7567.bottom = borderSideFromPartial(
            rfIn1518.insideHorizontal,
          ))),
      rfIn1518.insideVertical &&
        (rfIn1521 > 0 &&
          (rfBind7567.left = borderSideFromPartial(rfIn1518.insideVertical)),
        rfIn1521 < rfIn1523 - 1 &&
          (rfBind7567.right = borderSideFromPartial(rfIn1518.insideVertical))),
      rfIn1518.diagonal
        ? ((rfBind7567.diagonal = borderSideFromPartial(rfIn1518.diagonal)),
          (rfBind7567.diagonalUp = rfIn1518.diagonalUp),
          (rfBind7567.diagonalDown = rfIn1518.diagonalDown))
        : ((rfBind7567.diagonalUp =
            rfIn1518.diagonalUp ?? rfBind7567.diagonalUp),
          (rfBind7567.diagonalDown =
            rfIn1518.diagonalDown ?? rfBind7567.diagonalDown)),
      rfBind7567.hasValues() ? rfBind7567 : undefined
    );
  }
  #b(rfIn2948) {
    return {
      styleIndex: rfIn2948.styleIndex,
      fill: rfIn2948.fill ? cloneFillFromValue(rfIn2948.fill) : undefined,
      font: cloneFontOrUndefined(rfIn2948.font),
      border: cloneBordersOrUndefined(rfIn2948.border),
      numberFormatCode: rfIn2948.numberFormatCode,
      numberFormatId: rfIn2948.numberFormatId,
      wrapText: rfIn2948.wrapText,
      horizontalAlignment: rfIn2948.horizontalAlignment
        ? horizontalAlignmentToName(rfIn2948.horizontalAlignment)
        : undefined,
      verticalAlignment: rfIn2948.verticalAlignment
        ? verticalAlignmentToCss(rfIn2948.verticalAlignment)
        : undefined,
      featurePropertyBagIndex: rfIn2948.featurePropertyBagIndex,
    };
  }
  #x(rfIn8055) {
    let rfBind18567 = this.#b(rfIn8055),
      rfBind18568 = this.#e.getWorkbook();
    return rfBind18568
      ? rfBind18568.__registerCollaborativeStyle(rfBind18567)
      : {
          styleIndex: this.#T().register(rfBind18567),
        };
  }
  #S(rfIn10768) {
    let rfBind21291 = this.#e.getWorkbook();
    return rfBind21291
      ? rfBind21291.runLocalCollabTransaction(rfIn10768)
      : rfIn10768();
  }
  #C(rfIn7100, rfIn7101, rfIn7102) {
    if (rfIn7102) {
      if (this.#e.setCellStyleRef) {
        this.#e.setCellStyleRef(rfIn7100, rfIn7101, rfIn7102);
        return;
      }
      this.#e.getWorksheet()?.__setCellStyleRef(rfIn7100, rfIn7101, rfIn7102);
    }
  }
  #w(rfIn4233) {
    let rfBind13291 = this.#e.getWorkbook(),
      rfBind13292 = this.#e.getWorksheet(),
      rfBind13293 = this.#e.getAddress();
    if (!rfBind13291 || !rfBind13292 || !rfBind13292.name || !rfBind13293)
      return;
    let rfBind13294 = rfBind13291.getRecorder();
    if (!rfBind13294 || Object.keys(rfIn4233).length === 0) return;
    let rfBind13295 = {
      op: "range.format.set",
      target: {
        sheet: rfBind13292.name,
        range: rfBind13293,
      },
      props: rfIn4233,
    };
    rfBind13294.record(rfBind13295);
  }
  #T() {
    let rfBind19756 = this.#e.getWorkbook();
    if (!rfBind19756) throw Error("Range is not attached to a workbook.");
    return rfBind19756.getStyleRegistry();
  }
  #E() {
    return this.#e.getWorkbook()?.getSpreadsheetRenderAssets()
      .defaultFontMaxDigitWidthPx;
  }
}
