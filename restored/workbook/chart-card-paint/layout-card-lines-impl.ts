// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart-card title line wrapping.
// Stage-3 wave-111.

const DEFAULT_CARD_FONT =
  "600 11px Carlito, Segoe UI, Helvetica, Arial, sans-serif";

export function layoutCardLines(
  ccpIn3972: any,
  ccpIn3973: any,
  ccpIn3974: any,
  ccpIn3975: any,
  ccpIn3976: any = DEFAULT_CARD_FONT,
) {
  ccpIn3972.save();
  ccpIn3972.font = ccpIn3976;
  let ccpBind12868 = ccpIn3973.split(/(?=[A-Z][a-z])|\s+/g).filter(Boolean),
    ccpBind12869 = [],
    ccpBind12870 = "",
    ccpBind12871 = ccpIn3975;
  for (let ccpBind17889 of ccpBind12868) {
    let ccpBind18354 = ccpBind12870
      ? `${ccpBind12870} ${ccpBind17889}`
      : ccpBind17889;
    if (ccpIn3972.measureText(ccpBind18354).width <= ccpIn3974) {
      ccpBind12870 = ccpBind18354;
      continue;
    }
    if (
      ccpBind12870 &&
      (ccpBind12869.push(ellipsizeMeasured(ccpIn3972, ccpBind12870, ccpIn3974)),
      (ccpBind12871 -= 14),
      ccpBind12871 < 14)
    ) {
      ccpBind12870 = "";
      break;
    }
    ccpBind12870 = ccpBind17889;
  }
  return (
    ccpBind12870 &&
      ccpBind12871 >= 14 &&
      ccpBind12869.push(ellipsizeMeasured(ccpIn3972, ccpBind12870, ccpIn3974)),
    ccpIn3972.restore(),
    ccpBind12869
  );
}

export function ellipsizeMeasured(
  ccpIn8798: any,
  ccpIn8799: any,
  ccpIn8800: any,
) {
  if (ccpIn8798.measureText(ccpIn8799).width <= ccpIn8800) return ccpIn8799;
  let ccpBind19345 = ccpIn8799;
  for (
    ;
    ccpBind19345.length > 1 &&
    ccpIn8798.measureText(`${ccpBind19345}…`).width > ccpIn8800;
  )
    ccpBind19345 = ccpBind19345.slice(0, -1);
  return `${ccpBind19345}…`;
}

export const workbookHelper562 = layoutCardLines;
export const workbookHelper563 = ellipsizeMeasured;
