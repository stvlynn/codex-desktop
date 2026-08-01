// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paste target A1/rect resolver (legacy Tmt/Emt).
// Stage-3 wave-106.

import {
  formatA1Range,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";

void formatA1Range;
void parseA1Range;

export function resolvePasteTarget(props: any) {
  let { sheetName, sourceRowCount, sourceColCount, target } = props;
  if (!target)
    return {
      range: formatA1Range({
        startRow: 0,
        startCol: 0,
        endRow: sourceRowCount - 1,
        endCol: sourceColCount - 1,
      }),
      selectionRect: {
        r1: 0,
        c1: 0,
        r2: sourceRowCount - 1,
        c2: sourceColCount - 1,
      },
    };
  if (typeof target != "string")
    return {
      range: formatA1Range({
        startRow: target.row,
        startCol: target.col,
        endRow: target.row + sourceRowCount - 1,
        endCol: target.col + sourceColCount - 1,
      }),
      selectionRect: {
        r1: target.row,
        c1: target.col,
        r2: target.row + sourceRowCount - 1,
        c2: target.col + sourceColCount - 1,
      },
    };
  let htmBind5821 = target.trim().startsWith("=")
      ? target.trim().slice(1)
      : target.trim(),
    htmBind5822 = htmBind5821.lastIndexOf("!"),
    htmBind5823 =
      htmBind5822 === -1 ? htmBind5821 : htmBind5821.slice(htmBind5822 + 1);
  if (htmBind5822 >= 0) {
    let htmBind17228 = htmBind5821.slice(0, htmBind5822),
      htmBind17229 =
        htmBind17228.startsWith("'") && htmBind17228.endsWith("'")
          ? htmBind17228.slice(1, -1).replace(/''/g, "'")
          : htmBind17228;
    if (htmBind17229.trim() && htmBind17229.trim() !== sheetName)
      throw Error(
        `Range sheet "${htmBind17229.trim()}" does not match "${sheetName}"`,
      );
  }
  let htmBind5824 = parseA1Range(htmBind5823);
  if (!htmBind5824) throw Error(`Invalid target "${target}"`);
  let htmBind5825 =
    htmBind5824.bounds.startRow === htmBind5824.bounds.endRow &&
    htmBind5824.bounds.startCol === htmBind5824.bounds.endCol
      ? {
          r1: htmBind5824.bounds.startRow,
          c1: htmBind5824.bounds.startCol,
          r2: htmBind5824.bounds.startRow + sourceRowCount - 1,
          c2: htmBind5824.bounds.startCol + sourceColCount - 1,
        }
      : {
          r1: htmBind5824.bounds.startRow,
          c1: htmBind5824.bounds.startCol,
          r2: htmBind5824.bounds.endRow,
          c2: htmBind5824.bounds.endCol,
        };
  return {
    range: rectToA1(htmBind5825),
    selectionRect: htmBind5825,
  };
}
export function rectToA1(props: any) {
  return formatA1Range({
    startRow: props.r1,
    startCol: props.c1,
    endRow: props.r2,
    endCol: props.c2,
  });
}

/** Legacy aliases. */
export const Tmt = resolvePasteTarget;
export const Emt = rectToA1;
