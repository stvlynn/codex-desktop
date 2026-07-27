// Restored from ref/webview/assets/workbook-from-markdown-Ur6qTV_W.js
// Markdown table → sheet values. Stage 3: remark aliases dropped; local parser.

const FALLBACK_SHEET_NAME = "Markdown table";
const MAX_SHEET_NAME_LENGTH = 31;
const INVALID_SHEET_CHARS = /\\|\/|\?|\*|\[|\]|:/g;
const BR_TAG = /<br\s*\/?>/gi;
const BR_PLACEHOLDER = "BPS_TABLE_BR_PLACEHOLDER";
const CONTENT_REF = /:{1,3}contentReference\[[^\]]+\](?:\{[^}]*\})?/g;
const ZERO_WIDTH = /\u200b/g;

/** Bundle export `sanitizeSheetName` / `l`. */
export function sanitizeSheetName(name: string | null | undefined): string {
  return (
    (name ?? FALLBACK_SHEET_NAME)
      .trim()
      .replace(INVALID_SHEET_CHARS, "")
      .trim() || FALLBACK_SHEET_NAME
  ).slice(0, MAX_SHEET_NAME_LENGTH);
}

function protectBreaks(markdown: string): string {
  return markdown.replace(BR_TAG, BR_PLACEHOLDER);
}

function cleanCell(text: string): string {
  return text
    .replace(/\u00a0/g, " ")
    .replaceAll(BR_PLACEHOLDER, "\n")
    .replace(ZERO_WIDTH, "")
    .replace(CONTENT_REF, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

function splitRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cleanCell(cell.trim()));
}

function isSeparatorRow(cells: string[]): boolean {
  return (
    cells.length > 0 &&
    cells.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, "")))
  );
}

/**
 * Bundle export `buildTableValuesFromMarkdown` / `p`.
 * Parses the first GitHub-flavored markdown table into string[][] rows.
 */
export function buildTableValuesFromMarkdown(markdown: string): string[][] {
  const protectedMd = protectBreaks(markdown);
  const lines = protectedMd
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd());
  const tableLines: string[] = [];
  let inTable = false;
  for (const line of lines) {
    const looksLikeRow =
      /^\s*\|.*\|\s*$/.test(line) || /^\s*\|?.+\|.+\|?\s*$/.test(line);
    if (looksLikeRow && line.includes("|")) {
      inTable = true;
      tableLines.push(line);
    } else if (inTable) {
      break;
    }
  }
  if (tableLines.length === 0) {
    throw new Error("Unable to build workbook: no markdown table rows found.");
  }
  const rows: string[][] = [];
  for (const line of tableLines) {
    const cells = splitRow(line);
    if (isSeparatorRow(cells)) continue;
    if (cells.every((cell) => cell.length === 0)) continue;
    rows.push(cells);
  }
  if (rows.length === 0) {
    throw new Error("Unable to build workbook: no markdown table rows found.");
  }
  return rows;
}
