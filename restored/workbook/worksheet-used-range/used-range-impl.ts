// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: worksheet used-range bounds (legacy UTe/HTe).
// Stage-3 wave-108.

import {
  formatA1Range,
  lettersToColIndex,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";

void formatA1Range;
void lettersToColIndex;
void rowTokenToIndex;

export function computeUsedRangeBounds(props: any) {
  let wurBind8673 = 1 / 0,
    wurBind8674 = 1 / 0,
    wurBind8675 = 0,
    wurBind8676 = 0;
  for (let wurBind13346 of props.__getRows()) {
    let wurBind13900 = Math.max(0, (wurBind13346.index ?? 1) - 1);
    for (let wurBind14986 of wurBind13346.cells) {
      let wurBind15434 = wurBind14986.address;
      if (!wurBind15434) continue;
      let wurBind15435 = lettersToColIndex(wurBind15434);
      (wurBind14986.value !== undefined ||
        wurBind14986.formula !== undefined ||
        wurBind14986.paragraphs.length > 0 ||
        wurBind14986.styleIndex !== undefined) &&
        ((wurBind8673 = Math.min(wurBind8673, wurBind13900)),
        (wurBind8674 = Math.min(wurBind8674, wurBind15435)),
        (wurBind8675 = Math.max(wurBind8675, wurBind13900)),
        (wurBind8676 = Math.max(wurBind8676, wurBind15435)));
    }
  }
  for (let wurBind18404 of props.__getMergedCells()) {
    wurBind8673 = Math.min(
      wurBind8673,
      rowTokenToIndex(wurBind18404.startAddress),
    );
    wurBind8674 = Math.min(
      wurBind8674,
      lettersToColIndex(wurBind18404.startAddress),
    );
    wurBind8675 = Math.max(
      wurBind8675,
      rowTokenToIndex(wurBind18404.endAddress),
    );
    wurBind8676 = Math.max(
      wurBind8676,
      lettersToColIndex(wurBind18404.endAddress),
    );
  }
  return wurBind8673 === 1 / 0 || wurBind8674 === 1 / 0
    ? {
        startRow: 0,
        startCol: 0,
        endRow: 0,
        endCol: 0,
      }
    : {
        startRow: wurBind8673,
        startCol: wurBind8674,
        endRow: wurBind8675,
        endCol: wurBind8676,
      };
}

export function formatUsedRangeA1(wurIn15544: any) {
  return formatA1Range(computeUsedRangeBounds(wurIn15544));
}

/** Legacy aliases. */
export const UTe = computeUsedRangeBounds;
export const HTe = formatUsedRangeA1;
