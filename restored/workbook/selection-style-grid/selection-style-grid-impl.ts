// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: selection rect → styled cell grid (legacy Upt).
// Stage-3 wave-97.

import { Yn as _presentationYn } from "../presentation-protobuf";
import {
  lettersToColIndex,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import { ssgH } from "./boundary-hooks";

void _presentationYn;
void lettersToColIndex;
void rowTokenToIndex;
void ssgH;

export function buildSelectionStyleGrid(props: any) {
  let { selectionRect, selRow, selCol, sheet, styleInfos } = props,
    ssgBind3804 = new Map(),
    ssgBind3805 = selectionRect ?? {
      r1: selRow,
      c1: selCol,
      r2: selRow,
      c2: selCol,
    },
    ssgBind3806 = ssgBind3805.r2 - ssgBind3805.r1 + 1,
    ssgBind3807 = ssgBind3805.c2 - ssgBind3805.c1 + 1,
    ssgBind3808 = Array.from(
      {
        length: ssgBind3806,
      },
      () =>
        Array.from(
          {
            length: ssgBind3807,
          },
          () => ({}),
        ),
    );
  for (
    let ssgBind4666 = ssgBind3805.r1;
    ssgBind4666 <= ssgBind3805.r2;
    ssgBind4666++
  ) {
    let ssgBind4750 = sheet.rows.find((item) => item.index - 1 === ssgBind4666);
    for (
      let ssgBind4817 = ssgBind3805.c1;
      ssgBind4817 <= ssgBind3805.c2;
      ssgBind4817++
    ) {
      let ssgBind4906 = ssgBind4750?.cells.find(
          (ssgIn16132) => lettersToColIndex(ssgIn16132.address) === ssgBind4817,
        ),
        ssgBind4907 = styleInfos[ssgBind4906?.styleIndex ?? 0] ?? {},
        ssgBind4908 = ssgBind4666 - ssgBind3805.r1,
        ssgBind4909 = ssgBind4817 - ssgBind3805.c1,
        ssgBind4910 = {};
      ssgBind4910.v = ssgBind4906
        ? ssgH.bh229(ssgBind4906, styleInfos, ssgBind3804)
        : "";
      let ssgBind4911 =
          typeof ssgBind4907.font?.size == "number" && ssgBind4907.font.size > 0
            ? (ssgBind4907.font.size * 72) / 96
            : undefined,
        ssgBind4912 =
          ssgBind4907.align === "left" ||
          ssgBind4907.align === "center" ||
          ssgBind4907.align === "right"
            ? ssgBind4907.align
            : undefined,
        ssgBind4913 =
          ssgBind4907.verticalAlign === _presentationYn.ANCHOR_TYPE_TOP
            ? "top"
            : ssgBind4907.verticalAlign === _presentationYn.ANCHOR_TYPE_MIDDLE
              ? "middle"
              : (ssgBind4907.verticalAlign,
                _presentationYn.ANCHOR_TYPE_BOTTOM,
                "bottom");
      ssgBind4910.fmt = {
        bold: ssgBind4907.font?.bold,
        italic: ssgBind4907.font?.italic,
        underline: ssgBind4907.font?.underline,
        color: ssgBind4907.textColor ?? ssgBind4907.font?.color,
        bg: ssgBind4907.fill,
        align: ssgBind4912,
        valign: ssgBind4913,
        wrap: ssgBind4907.wrapText,
        numFmt: ssgBind4907.numberFormatCode,
        fontFamily: ssgBind4907.font?.family,
        fontSizePt: ssgBind4911,
        border: {
          top: ssgBind4907.borderStyles?.top
            ? {
                style: ssgBind4907.borderStyles.top,
                color: ssgBind4907.borders?.top,
              }
            : undefined,
          right: ssgBind4907.borderStyles?.right
            ? {
                style: ssgBind4907.borderStyles.right,
                color: ssgBind4907.borders?.right,
              }
            : undefined,
          bottom: ssgBind4907.borderStyles?.bottom
            ? {
                style: ssgBind4907.borderStyles.bottom,
                color: ssgBind4907.borders?.bottom,
              }
            : undefined,
          left: ssgBind4907.borderStyles?.left
            ? {
                style: ssgBind4907.borderStyles.left,
                color: ssgBind4907.borders?.left,
              }
            : undefined,
        },
        diagonal:
          ssgBind4907.borderStyles?.diagonal || ssgBind4907.borders?.diagonal
            ? {
                style: ssgBind4907.borderStyles?.diagonal,
                color: ssgBind4907.borders?.diagonal,
                up: !!ssgBind4907.borderDiagonalUp,
                down: !!ssgBind4907.borderDiagonalDown,
              }
            : undefined,
      };
      let ssgBind4914 = ssgBind3808[ssgBind4908];
      ssgBind4914 && (ssgBind4914[ssgBind4909] = ssgBind4910);
    }
  }
  let ssgBind3809 = [];
  for (let ssgBind11350 of sheet.mergedCells ?? []) {
    let ssgBind11739 = Math.min(
        lettersToColIndex(ssgBind11350.startAddress),
        lettersToColIndex(ssgBind11350.endAddress),
      ),
      ssgBind11740 = Math.max(
        lettersToColIndex(ssgBind11350.startAddress),
        lettersToColIndex(ssgBind11350.endAddress),
      ),
      ssgBind11741 = Math.min(
        rowTokenToIndex(ssgBind11350.startAddress),
        rowTokenToIndex(ssgBind11350.endAddress),
      ),
      ssgBind11742 = Math.max(
        rowTokenToIndex(ssgBind11350.startAddress),
        rowTokenToIndex(ssgBind11350.endAddress),
      ),
      ssgBind11743 = Math.max(ssgBind3805.r1, ssgBind11741),
      ssgBind11744 = Math.min(ssgBind3805.r2, ssgBind11742),
      ssgBind11745 = Math.max(ssgBind3805.c1, ssgBind11739),
      ssgBind11746 = Math.min(ssgBind3805.c2, ssgBind11740);
    if (ssgBind11743 > ssgBind11744 || ssgBind11745 > ssgBind11746) continue;
    let ssgBind11747 = ssgBind11743 - ssgBind3805.r1,
      ssgBind11748 = ssgBind11745 - ssgBind3805.c1,
      ssgBind11749 = ssgBind11744 - ssgBind11743 + 1,
      ssgBind11750 = ssgBind11746 - ssgBind11745 + 1;
    (ssgBind11749 > 1 || ssgBind11750 > 1) &&
      ssgBind3809.push({
        r: ssgBind11747,
        c: ssgBind11748,
        rowspan: ssgBind11749,
        colspan: ssgBind11750,
      });
  }
  return {
    rows: ssgBind3808,
    merges: ssgBind3809,
  };
}

/** Legacy alias. */
export const Upt = buildSelectionStyleGrid;
