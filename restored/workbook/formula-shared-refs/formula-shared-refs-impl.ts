// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shift shared-formula A1 refs (legacy workbookHelper589..592).
// Stage-3 wave-124.

/** Legacy Binding1237 — shared-formula A1 token matcher. */
const SHARED_FORMULA_A1_RE =
  /((?:'[^']+'|[A-Za-z0-9_.]+)!)?(\$?[A-Za-z]{1,3}\$?\d{1,7})(?::(\$?[A-Za-z]{1,3}\$?\d{1,7}))?/g;

export function parseA1CellRef(fsrIn6697: any) {
  let fsrBind16991 = 0;
  fsrIn6697[fsrBind16991] === "$" && (fsrBind16991 += 1);
  let fsrBind16992 = fsrBind16991;
  for (
    ;
    fsrBind16991 < fsrIn6697.length &&
    /[A-Za-z]/.test(fsrIn6697[fsrBind16991] ?? "");
  )
    fsrBind16991 += 1;
  let fsrBind16993 = fsrIn6697.slice(fsrBind16992, fsrBind16991);
  fsrIn6697[fsrBind16991] === "$" && (fsrBind16991 += 1);
  let fsrBind16994 = fsrIn6697.slice(fsrBind16991);
  return {
    col: columnLettersToIndex(fsrBind16993),
    row: parseInt(fsrBind16994, 10) || 0,
  };
}
export function columnLettersToIndex(fsrIn8485: any) {
  let fsrBind18998 = 0,
    fsrBind18999 = fsrIn8485.toUpperCase();
  for (
    let fsrBind21173 = 0;
    fsrBind21173 < fsrBind18999.length;
    fsrBind21173 += 1
  ) {
    let fsrBind22356 = fsrBind18999.charCodeAt(fsrBind21173);
    fsrBind22356 < 65 ||
      fsrBind22356 > 90 ||
      (fsrBind18998 = fsrBind18998 * 26 + (fsrBind22356 - 64));
  }
  return fsrBind18998;
}
export function columnIndexToLetters(fsrIn8363: any) {
  let fsrBind18865 = Math.max(1, fsrIn8363),
    fsrBind18866 = "";
  for (; fsrBind18865 > 0; ) {
    let fsrBind21571 = (fsrBind18865 - 1) % 26;
    fsrBind18866 = String.fromCharCode(65 + fsrBind21571) + fsrBind18866;
    fsrBind18865 = Math.floor((fsrBind18865 - 1) / 26);
  }
  return fsrBind18866;
}
export function shiftA1Token(fsrIn4394: any, fsrIn4395: any, fsrIn4396: any) {
  let fsrBind13577 = fsrIn4394.startsWith("$"),
    fsrBind13578 = +!!fsrBind13577,
    fsrBind13579 = fsrBind13578;
  for (
    ;
    fsrBind13579 < fsrIn4394.length &&
    /[A-Za-z]/.test(fsrIn4394[fsrBind13579] ?? "");
  )
    fsrBind13579 += 1;
  let fsrBind13580 = fsrIn4394.slice(fsrBind13578, fsrBind13579),
    fsrBind13581 = false,
    fsrBind13582 = fsrBind13579;
  fsrIn4394[fsrBind13582] === "$" &&
    ((fsrBind13581 = true), (fsrBind13582 += 1));
  let fsrBind13583 = fsrIn4394.slice(fsrBind13582),
    fsrBind13584 = columnLettersToIndex(fsrBind13580),
    fsrBind13585 = parseInt(fsrBind13583, 10) || 0,
    fsrBind13586 = fsrBind13577
      ? fsrBind13584
      : Math.max(1, fsrBind13584 + fsrIn4395),
    fsrBind13587 = fsrBind13581
      ? fsrBind13585
      : Math.max(1, fsrBind13585 + fsrIn4396);
  return `${fsrBind13577 ? "$" : ""}${columnIndexToLetters(fsrBind13586)}${fsrBind13581 ? "$" : ""}${fsrBind13587}`;
}
export function shiftSharedFormulaRefs(
  fsrIn5085: any,
  fsrIn5086: any,
  fsrIn5087: any,
) {
  if (!fsrIn5085 || !fsrIn5086 || !fsrIn5087) return fsrIn5085;
  let { col, row } = parseA1CellRef(fsrIn5086),
    { col: _col, row: _row } = parseA1CellRef(fsrIn5087),
    fsrBind14535 = _col - col,
    fsrBind14536 = _row - row;
  return fsrBind14535 === 0 && fsrBind14536 === 0
    ? fsrIn5085
    : fsrIn5085.replace(
        SHARED_FORMULA_A1_RE,
        (fsrIn9312, fsrIn9313, fsrIn9314, fsrIn9315) => {
          let fsrBind19880 = fsrIn9313 ? String(fsrIn9313) : "",
            fsrBind19881 = shiftA1Token(
              String(fsrIn9314),
              fsrBind14535,
              fsrBind14536,
            );
          return fsrIn9315
            ? `${fsrBind19880}${fsrBind19881}:${shiftA1Token(String(fsrIn9315), fsrBind14535, fsrBind14536)}`
            : `${fsrBind19880}${fsrBind19881}`;
        },
      );
}

/** Legacy aliases (wave-124). */
export const workbookHelper589 = parseA1CellRef;
export const workbookHelper590 = columnLettersToIndex;
export const workbookHelper591 = shiftA1Token;
export const workbookHelper592 = shiftSharedFormulaRefs;

/** Legacy alias (wave-124). */
export const rwe = columnIndexToLetters;
