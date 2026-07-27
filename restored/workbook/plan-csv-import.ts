// Restored from ref/webview/assets/workbook-from-csv-CDfYIljB.js
// Plan a CSV → spreadsheet import (sheet name, values grid, A1 range).

import {
  parseSheetRef,
  formatA1Range,
  parseA1Range,
  initAddressUtils,
} from "../utils/spreadsheet-address-utils";
const DEFAULT_SHEET_NAME = "CSV import";
const MAX_SHEET_NAME_LENGTH = 31;
const INVALID_SHEET_NAME_CHARS = /\\|\/|\?|\*|\[|\]|:/g;
export type CsvImportOptions = {
  separator?: string;
  anchor?: string;
  sheetName?: string;
};
export type CsvImportRect = {
  r1: number;
  c1: number;
  r2: number;
  c2: number;
};
export type CsvImportPlan = {
  sheetName: string;
  values: string[][];
  rangeRef?: string;
  rect?: CsvImportRect;
};
export function sanitizeSheetName(name: string | undefined): string {
  return (
    (name ?? DEFAULT_SHEET_NAME)
      .trim()
      .replace(INVALID_SHEET_NAME_CHARS, "")
      .trim() || DEFAULT_SHEET_NAME
  ).slice(0, MAX_SHEET_NAME_LENGTH);
}
function requireSingleCharSeparator(separator: string | undefined): string {
  const value = separator ?? ",";
  if (value.length !== 1) {
    throw new Error(
      `CSV import separator must be a single character; received "${value}".`,
    );
  }
  return value;
}
function parseCsvRows(csv: string, separator: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const flushCell = (): void => {
    row.push(cell);
    cell = "";
  };
  const flushRow = (): void => {
    rows.push(row);
    row = [];
  };
  for (let i = 0; i < csv.length; i += 1) {
    const ch = csv[i] ?? "";
    if (inQuotes) {
      if (ch === '"') {
        if (csv[i + 1] === '"') {
          cell += '"';
          i += 1;
          continue;
        }
        inQuotes = false;
        continue;
      }
      cell += ch;
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      continue;
    }
    if (ch === separator) {
      flushCell();
      continue;
    }
    if (ch === "\n") {
      flushCell();
      flushRow();
      continue;
    }
    if (ch === "\r") {
      if (csv[i + 1] === "\n") i += 1;
      flushCell();
      flushRow();
      continue;
    }
    cell += ch;
  }
  flushCell();
  flushRow();
  while (rows.length > 0) {
    const last = rows[rows.length - 1] ?? [];
    if (!(last.length > 0 && last.every((item) => item === ""))) break;
    rows.pop();
  }
  return rows;
}
function parseCsvGrid(csv: string, separator: string): string[][] {
  if (!csv.trim()) return [];
  const rows = parseCsvRows(csv, separator);
  if (rows.length === 0) return [];
  const width = rows.reduce((max, current) => Math.max(max, current.length), 0);
  if (width === 0) return [];
  return rows.map((item) => {
    if (item.length === width) return item;
    const padded = item.slice();
    while (padded.length < width) padded.push("");
    return padded;
  });
}
export function planCsvImport(csv: string, options?: CsvImportOptions): CsvImportPlan {
  initAddressUtils();
  const separator = requireSingleCharSeparator(options?.separator);
  const parsedAnchor = parseSheetRef(options?.anchor ?? "A1");
  const anchorSheet = parsedAnchor.sheetName?.trim();
  const optionSheet = options?.sheetName?.trim();
  if (anchorSheet && optionSheet && anchorSheet !== optionSheet) {
    throw new Error(
      `CSV import specifies conflicting sheet names: "${optionSheet}" (options.sheetName) vs "${anchorSheet}" (anchor).`,
    );
  }
  const sheetName = sanitizeSheetName(anchorSheet ?? optionSheet);
  const parsedRange = parseA1Range(parsedAnchor.ref);
  if (!parsedRange) {
    throw new Error(
      `CSV import anchor must be an A1 cell reference; received "${options?.anchor ?? "A1"}".`,
    );
  }
  const { bounds } = parsedRange;
  if (bounds.startRow !== bounds.endRow || bounds.startCol !== bounds.endCol) {
    throw new Error(
      `CSV import anchor must be a single cell reference; received "${options?.anchor ?? "A1"}".`,
    );
  }
  const values = parseCsvGrid(csv, separator);
  const rowCount = values.length;
  const colCount = rowCount > 0 ? (values[0]?.length ?? 0) : 0;
  if (rowCount === 0 || colCount === 0) {
    return {
      sheetName,
      values: [],
    };
  }
  const rangeBounds = {
    startRow: bounds.startRow,
    startCol: bounds.startCol,
    endRow: bounds.startRow + rowCount - 1,
    endCol: bounds.startCol + colCount - 1,
  };
  return {
    sheetName,
    values,
    rangeRef: formatA1Range(rangeBounds),
    rect: {
      r1: rangeBounds.startRow,
      c1: rangeBounds.startCol,
      r2: rangeBounds.endRow,
      c2: rangeBounds.endCol,
    },
  };
}
