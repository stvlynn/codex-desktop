// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: A1 / structured-ref helpers (legacy Zpe/WorkbookI/workbookL/col-index/workbookP…).

import {
  MAX_COLUMN_INDEX,
  A1_CELL_RE,
  A1_COLUMN_RE,
} from "./formula-constants";

export function parseStructuredReference(
  formulaIn2239: unknown,
  formulaIn2240: unknown,
) {
  if (!formulaIn2239.startsWith("[") || !formulaIn2239.endsWith("]"))
    return null;
  let formulaBind9285 = splitStructuredRefParts(formulaIn2239);
  if (formulaBind9285.length === 0) return null;
  if (formulaBind9285.length === 1 && formulaBind9285[0]?.trim() === "")
    return {
      tableName: formulaIn2240?.trim() || undefined,
      section: "All",
    };
  let formulaBind9286 = null,
    formulaBind9287;
  for (let formulaBind13642 of formulaBind9285) {
    let formulaBind13938 = formulaBind13642.trim();
    if (!formulaBind13938) return null;
    let formulaBind13939 = /^@(.+)$/.exec(formulaBind13938);
    if (formulaBind13939) {
      if (formulaBind9286 !== null) return null;
      let formulaBind20359 = formulaBind13939[1]?.trim();
      if (!formulaBind20359) return null;
      formulaBind9286 = "ThisRow";
      formulaBind9287 = formulaBind20359;
      continue;
    }
    let formulaBind13940 = mapTableSectionName(formulaBind13938.toUpperCase());
    if (formulaBind13940) {
      if (formulaBind9286 !== null) return null;
      formulaBind9286 = formulaBind13940;
      continue;
    }
    if (formulaBind9287 !== undefined) return null;
    formulaBind9287 = formulaBind13938;
  }
  return (
    formulaBind9286 === null && (formulaBind9286 = "Data"),
    {
      tableName: formulaIn2240?.trim() || undefined,
      section: formulaBind9286,
      columnName: formulaBind9287,
    }
  );
}
export function parseA1CellRef(formulaIn5380: unknown, formulaIn5381: unknown) {
  let formulaBind15114 = A1_CELL_RE.exec(formulaIn5380);
  if (!formulaBind15114) return null;
  let formulaBind15115 = formulaBind15114[1] ?? "",
    formulaBind15116 = formulaBind15114[2],
    formulaBind15117 = formulaBind15114[3] ?? "",
    formulaBind15118 = formulaBind15114[4];
  if (!formulaBind15116 || !formulaBind15118) return null;
  let formulaBind15119 = columnLettersToNumber(formulaBind15116);
  if (!formulaBind15119) return null;
  let formulaBind15120 = Number(formulaBind15118);
  return {
    sheet: formulaIn5381
      ? {
          ...formulaIn5381,
        }
      : undefined,
    row: formulaBind15120,
    col: formulaBind15119,
    absRow: formulaBind15117 === "$",
    absCol: formulaBind15115 === "$",
  };
}
export function parseWholeColumnRef(
  formulaIn7478: unknown,
  formulaIn7479: unknown,
) {
  let formulaBind17955 = A1_COLUMN_RE.exec(formulaIn7478);
  if (!formulaBind17955) return null;
  let formulaBind17956 = formulaBind17955[2];
  if (!formulaBind17956) return null;
  let formulaBind17957 = columnLettersToNumber(formulaBind17956);
  return !formulaBind17957 || formulaBind17957 > MAX_COLUMN_INDEX
    ? null
    : {
        kind: "WholeColumn",
        sheet: formulaIn7479
          ? {
              ...formulaIn7479,
            }
          : undefined,
        col: formulaBind17957,
      };
}
export function withDefaultSheet(
  formulaIn11671: unknown,
  formulaIn11672: unknown,
) {
  let formulaBind22049 = cloneCellRef(formulaIn11671);
  return (
    formulaIn11672 &&
      !formulaBind22049.sheet &&
      (formulaBind22049.sheet = {
        ...formulaIn11672,
      }),
    formulaBind22049
  );
}
export function sameSheetRef(formulaIn10797: unknown, formulaIn10798: unknown) {
  return !formulaIn10797 ||
    !formulaIn10797.sheetName ||
    !formulaIn10798 ||
    !formulaIn10798.sheetName
    ? true
    : formulaIn10797.sheetName === formulaIn10798.sheetName;
}
export function columnLettersToNumber(formulaIn8057: unknown) {
  let formulaBind18570 = formulaIn8057.toUpperCase(),
    formulaBind18571 = 0;
  for (
    let formulaBind20702 = 0;
    formulaBind20702 < formulaBind18570.length;
    formulaBind20702 += 1
  ) {
    let formulaBind21922 = formulaBind18570.charCodeAt(formulaBind20702);
    if (formulaBind21922 < 65 || formulaBind21922 > 90) return 0;
    formulaBind18571 = formulaBind18571 * 26 + (formulaBind21922 - 64);
  }
  return formulaBind18571;
}
export function columnNumberToLetters(formulaIn8450: unknown) {
  if (formulaIn8450 <= 0) return "";
  let formulaBind18952 = formulaIn8450,
    formulaBind18953 = "";
  for (; formulaBind18952 > 0; ) {
    --formulaBind18952;
    formulaBind18953 =
      String.fromCharCode(65 + (formulaBind18952 % 26)) + formulaBind18953;
    formulaBind18952 = Math.floor(formulaBind18952 / 26);
  }
  return formulaBind18953;
}
export function cloneCellRef(formulaIn9527: unknown) {
  return {
    sheet: formulaIn9527.sheet
      ? {
          ...formulaIn9527.sheet,
        }
      : undefined,
    row: formulaIn9527.row,
    col: formulaIn9527.col,
    absRow: formulaIn9527.absRow,
    absCol: formulaIn9527.absCol,
  };
}
export function splitStructuredRefParts(formulaIn10291: unknown) {
  return formulaIn10291.startsWith("[[") && formulaIn10291.endsWith("]]")
    ? formulaIn10291.slice(2, -2).split(/\]\s*,\s*\[/)
    : [formulaIn10291.slice(1, -1)];
}
export function mapTableSectionName(formulaIn6386: unknown) {
  switch (formulaIn6386) {
    case "#ALL":
      return "All";
    case "#DATA":
      return "Data";
    case "#HEADERS":
      return "Headers";
    case "#TOTALS":
      return "Totals";
    case "#THIS ROW":
      return "ThisRow";
    default:
      return null;
  }
}
