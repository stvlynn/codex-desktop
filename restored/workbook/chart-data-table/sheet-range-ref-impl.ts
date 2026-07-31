// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sheet range ref parse/expand for data tables.
// Stage-3 wave-113.

export function parseSheetRangeRef(props: any) {
  if (!props) return null;
  let cdtBind10002 = props.trim();
  if (
    !cdtBind10002 ||
    (cdtBind10002.startsWith("=") && (cdtBind10002 = cdtBind10002.slice(1)),
    !cdtBind10002)
  )
    return null;
  let [cdtBind10003] = cdtBind10002.split(",");
  if (!cdtBind10003) return null;
  let cdtBind10004,
    cdtBind10005 = cdtBind10003,
    cdtBind10006 = cdtBind10003.lastIndexOf("!");
  if (
    (cdtBind10006 !== -1 &&
      ((cdtBind10004 = cdtBind10003.slice(0, cdtBind10006)),
      (cdtBind10005 = cdtBind10003.slice(cdtBind10006 + 1))),
    (cdtBind10005 = cdtBind10005.trim()),
    !cdtBind10005)
  )
    return null;
  let cdtBind10007 = cdtBind10005.indexOf(":"),
    cdtBind10008 =
      cdtBind10007 === -1 ? cdtBind10005 : cdtBind10005.slice(0, cdtBind10007),
    cdtBind10009 =
      cdtBind10007 === -1 ? cdtBind10005 : cdtBind10005.slice(cdtBind10007 + 1),
    cdtBind10010 = normalizeSheetRangeParts(cdtBind10008),
    cdtBind10011 = normalizeSheetRangeParts(cdtBind10009);
  return !cdtBind10010 || !cdtBind10011
    ? null
    : {
        sheetName: expandSheetRange(cdtBind10004),
        startRow: Math.min(cdtBind10010.row, cdtBind10011.row),
        endRow: Math.max(cdtBind10010.row, cdtBind10011.row),
        startCol: Math.min(cdtBind10010.col, cdtBind10011.col),
        endCol: Math.max(cdtBind10010.col, cdtBind10011.col),
      };
}
export function normalizeSheetRangeParts(cdtIn4734: any) {
  if (!cdtIn4734) return null;
  let cdtBind14067 = cdtIn4734.replace(/\$/g, "").trim();
  if (!cdtBind14067) return null;
  let cdtBind14068 = cdtBind14067.match(/^([A-Za-z]+)(\d+)$/);
  if (!cdtBind14068) return null;
  let [, cdtBind14069, cdtBind14070] = cdtBind14068;
  if (!cdtBind14069 || !cdtBind14070) return null;
  let cdtBind14071 = cdtBind14069.toUpperCase(),
    cdtBind14072 = Number.parseInt(cdtBind14070, 10);
  if (!Number.isFinite(cdtBind14072)) return null;
  let cdtBind14073 = lettersToColIndex(cdtBind14071),
    cdtBind14074 = cdtBind14072 - 1;
  return cdtBind14073 < 0 || cdtBind14074 < 0
    ? null
    : {
        row: cdtBind14074,
        col: cdtBind14073,
      };
}
export function expandSheetRange(props: any) {
  if (!props) return;
  let cdtBind16611 = props.trim();
  if (!cdtBind16611) return;
  cdtBind16611.startsWith("'") &&
    cdtBind16611.endsWith("'") &&
    (cdtBind16611 = cdtBind16611.slice(1, -1).replace(/''/g, "'"));
  let cdtBind16612 = cdtBind16611.indexOf("["),
    cdtBind16613 = cdtBind16611.lastIndexOf("]");
  return (
    cdtBind16612 !== -1 &&
      cdtBind16613 > cdtBind16612 &&
      (cdtBind16611 = cdtBind16611.slice(cdtBind16613 + 1)),
    cdtBind16611
  );
}

export const UCe = parseSheetRangeRef;
export const WCe = expandSheetRange;
